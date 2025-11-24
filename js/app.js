// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, (err) => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
// === Firebase 初期化 ===
const firebaseConfig = {
  apiKey: "AIzaSyDKwSHdyI8syn17E-JUPFUZF3vaWBAQjWY",
  authDomain: "english-quest-9e520.firebaseapp.com",
  projectId: "english-quest-9e520",
  storageBucket: "english-quest-9e520.firebasestorage.app",
  messagingSenderId: "1065546721456",
  appId: "1:1065546721456:web:492c0ff9131dfc8dd7f375"
};

// Firebaseを初期化
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

let currentUser = null;
let userProgress = {}; // Firestoreから読み込んだ進捗をキャッシュ


// === データ・状態管理とユーティリティ ===

// 1. IDによるデータ検索
// word_data.js で定義された WORD_DATABASE を使用
const getWordById = (id) => {
    // WORD_DATABASEが存在するかチェック
    if (typeof WORD_DATABASE === 'undefined') {
        console.error("Error: word_data.js is not loaded.");
        return null;
    }
    return WORD_DATABASE.find(w => w.id === id);
};

// 2. URLから現在の単語IDを取得
const getCurrentWordId = () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    return isNaN(id) ? null : id;
};

// 3. 現在の単語データを取得 (便利ラッパー)
const getCurrentWordData = () => {
    const id = getCurrentWordId();
    if (id === null) return null;
    return getWordById(id);
};

// 4. 進捗の取得 (ログイン状態に応じて切り替え)
const getProgress = (wordId) => {
    if (currentUser) {
        // ログイン時: Firestoreのキャッシュから取得
        return userProgress[wordId] || {};
    } else {
        // 未ログイン時: localStorageから取得
        const key = `eq_progress_${wordId}`;
        return JSON.parse(localStorage.getItem(key)) || {};
    }
};

// 5. 進捗の保存 (ログイン状態に応じて切り替え)
const saveProgress = async (wordId, mode) => {
    if (currentUser) {
        // === ログインユーザー: Firestoreに保存 ===
        const wordIdStr = String(wordId);
        const newProgressForWord = { ...userProgress[wordIdStr], [mode]: true };

        // ローカルキャッシュを更新
        userProgress[wordIdStr] = newProgressForWord;

        // Firestoreに保存
        const userDocRef = db.collection('users').doc(currentUser.uid);
        try {
            await userDocRef.set({
                progress: {
                    [wordIdStr]: newProgressForWord
                }
            }, { merge: true });
            console.log(`Saved to Firestore: ID ${wordId}, Mode ${mode}`);
        } catch (error) {
            console.error("Error saving progress to Firestore: ", error);
        }
    } else {
        // === 未ログインユーザー: localStorageに保存 ===
        const key = `eq_progress_${wordId}`;
        const current = JSON.parse(localStorage.getItem(key)) || {};
        current[mode] = true;
        localStorage.setItem(key, JSON.stringify(current));
        console.log(`Saved to localStorage: ID ${wordId}, Mode ${mode}`);
    }
};

// 6. モード定義 (IDとファイル名の対応)
const GAME_MODES = [
    { id: 'spell',   file: 'games/spell.html',   name: 'SPELL' },
    { id: 'rhythm',  file: 'games/rhythm.html',  name: 'RHYTHM' },
    { id: 'synonym', file: 'games/synonym.html', name: 'SYNONYM' },
    { id: 'meaning', file: 'games/meaning.html', name: 'MEANING' },
    { id: 'context', file: 'games/context.html', name: 'CONTEXT' }
];

// 7. ゲーム完了時の処理 (各ゲームから呼び出す)
const onGameComplete = (mode) => {
    // ゲームページでのみ実行されるようにガードを追加
    if (window.location.pathname.includes('/games/')) {
        const id = getCurrentWordId();
        if (id) {
            saveProgress(id, mode);
        }
    }
};

// 8. 画面遷移関数 (フェードアウト付き)
function goTo(page, wordId = null) {
    // bodyからloadedクラスを外してフェードアウトさせる
    document.body.classList.remove('loaded');

    // アニメーション時間(300ms)待ってから移動
    setTimeout(() => {
        if (wordId) {
            // IDがある場合（詳細画面やゲームへ）
            window.location.href = `${page}?id=${wordId}`;
        } else {
            // 通常の移動
            window.location.href = page;
        }
    }, 300);
}

// BGMを再生する関数
function manageBgm() {
    const bgm = document.getElementById('bgm');
    if (!bgm) return;

    const bgmState = localStorage.getItem('eq_bgm_state') || 'off'; 

    if (bgmState === 'off') {
        bgm.pause();
    } else {
        // パス解決
        const path = window.location.pathname.includes('/games/') ? '../audio/bgm.mp3' : 'audio/bgm.mp3';
        if (bgm.getAttribute('src') !== path) {
             bgm.src = path;
        }

        // 音量設定
        const volumeLevels = { 'low': 0.1, 'mid': 0.2, 'high': 0.4 };
        bgm.volume = volumeLevels[bgmState] || 0.2;

        // 再生試行
        const playPromise = bgm.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented. Waiting for user interaction.");
                // 自動再生がブロックされた場合、次のクリックで再生するイベントを仕込む
                const resumeAudio = () => {
                    bgm.play();
                    document.removeEventListener('click', resumeAudio);
                    document.removeEventListener('touchstart', resumeAudio);
                    document.removeEventListener('keydown', resumeAudio);
                };
                document.addEventListener('click', resumeAudio);
                document.addEventListener('touchstart', resumeAudio);
                document.addEventListener('keydown', resumeAudio);
            });
        }
    }
}

function setBgmState(state) { // state: 'off', 'low', 'mid', 'high'
    localStorage.setItem('eq_bgm_state', state);
    manageBgm();
}

function createVolumeControl() {
    const currentState = localStorage.getItem('eq_bgm_state') || 'off';

    const controlContainer = document.createElement('div');
    controlContainer.id = 'volume-control';
    controlContainer.className = 'fixed bottom-5 right-5 z-50 p-2 rounded-full bg-slate-800/80 backdrop-blur-sm shadow-lg cursor-pointer transition-transform hover:scale-110 active:scale-95';

    const icon = document.createElement('i');
    icon.className = 'fas text-lg text-slate-400 w-6 h-6 flex items-center justify-center';

    const updateIcon = (state) => {
        if (state === 'off') {
            icon.classList.remove('fa-volume-up');
            icon.classList.add('fa-volume-mute');
        } else {
            icon.classList.remove('fa-volume-mute');
            icon.classList.add('fa-volume-up');
        }
    };

    controlContainer.appendChild(icon);
    document.body.appendChild(controlContainer);

    updateIcon(currentState);

    controlContainer.addEventListener('click', () => {
        let newState;
        const currentState = localStorage.getItem('eq_bgm_state') || 'off';
        
        if (currentState === 'off') {
            newState = 'mid'; 
        } else {
            newState = 'off'; 
        }
        
        setBgmState(newState);
        updateIcon(newState);

        // クリックイベント内で直接 play() を呼ぶことで、ブラウザに許可させる
        const bgm = document.getElementById('bgm');
        if (bgm) {
            if (newState !== 'off') {
                // ユーザー操作直下なので再生が許可される
                bgm.play().catch(e => console.log(e));
            } else {
                bgm.pause();
            }
        }
    });
}




// 9. ページ読み込み時の処理 (フェードイン)
window.addEventListener('DOMContentLoaded', () => {
    // 認証状態を監視
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            // ユーザーがログインしている
            currentUser = user;
            console.log("User is logged in:", currentUser.uid);
            // Firestoreのデータをまず読み込む
            await loadAllProgress(); 

            // localStorageにデータがあればマージ処理を行う
            const localData = getLocalProgressForAllWords();
            if (Object.keys(localData).length > 0) {
                console.log("Local data found. Merging with Firestore...");

                // Firestoreのデータとローカルのデータをマージ
                // 同じ単語・モードについては、より新しい情報（この場合はどちらでも良い）で上書きされる
                for (const wordId in localData) {
                    const localWordProgress = localData[wordId];
                    const firestoreWordProgress = userProgress[wordId] || {};
                    userProgress[wordId] = { ...firestoreWordProgress, ...localWordProgress };
                }

                // マージしたデータをFirestoreに保存
                const userDocRef = db.collection('users').doc(user.uid);
                await userDocRef.set({ progress: userProgress }, { merge: true });
                clearLocalProgress(); // ローカルデータを削除
                console.log("Merge complete. Local data cleared.");
            }
        } else {
            // ユーザーがログインしていない
            currentUser = null;
            console.log("User is logged out.");

            // ログイン情報UIを非表示にする
            const userInfoEl = document.getElementById('user-info');
            if (userInfoEl) userInfoEl.classList.add('hidden');
        }

        // ログイン状態が確定した後に、各ページ固有の初期化処理を呼び出す
        // これにより、常に最新のユーザー情報と進捗でUIが描画される
        if (typeof initializePage === 'function') {
            initializePage();
        }

        // BGMの状態をチェックして再生/停止
        manageBgm();

        // フローティング音量コントロールを生成
        createVolumeControl();

        // フェードイン処理
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 50);
    });
});

// 9b. ログイン状態をUIに反映する
function updateUserUI(user) {
    const userInfoEl = document.getElementById('user-info');
    const userEmailEl = document.getElementById('user-email');
    if (userInfoEl && userEmailEl) {
        userEmailEl.textContent = user.email || user.displayName;
        userInfoEl.classList.remove('hidden');
    }
}

// 10. Googleログイン/スタート関数
const loginWithGoogle = () => {
    // ユーザー操作があったのでBGMを再生状態にする
    if (!localStorage.getItem('eq_bgm_state')) setBgmState('mid'); // 初回なら中音量で
    if (currentUser) {
        goTo('list.html');
        return;
    }

    // 未ログインの場合は、Googleログインを試みる
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            goTo('list.html');
        })
        .catch((error) => {
            console.error("Google Sign-In Error:", error);
            alert(`ログインに失敗しました: ${error.message}`);
        });
};

// 10b. ログインせずに進む関数
const startWithoutLogin = () => {
    // ユーザー操作があったのでBGMを再生状態にする
    if (!localStorage.getItem('eq_bgm_state')) setBgmState('mid'); // 初回なら中音量で
    goTo('list.html');
};

// 11. Firestoreから全進捗データを読み込む関数
const loadAllProgress = async () => {
    if (!currentUser) return;
    const userDocRef = db.collection('users').doc(currentUser.uid);
    const doc = await userDocRef.get();
    if (doc.exists) {
        userProgress = doc.data().progress || {};
        console.log("Progress loaded from Firestore.");
    } else {
        console.log("No progress data found for this user. A new document will be created on first save.");
        userProgress = {};
    }
};

// 12. ローカルストレージから全ての進捗データを取得するヘルパー関数
const getLocalProgressForAllWords = () => {
    const localProgress = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('eq_progress_')) {
            const wordId = key.replace('eq_progress_', '');
            const progressData = JSON.parse(localStorage.getItem(key));
            if (progressData) {
                localProgress[wordId] = progressData;
            }
        }
    }
    return localProgress;
};

// 13. ローカルストレージの進捗データをすべて削除するヘルパー関数
const clearLocalProgress = () => {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('eq_progress_')) {
            keysToRemove.push(key);
        }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));
};

// 14. ログアウト関数
const logout = () => {
    auth.signOut()
        .then(() => {
            console.log('User signed out successfully.');
            goTo('index.html'); // ログアウト後にトップページへ遷移
        })
        .catch((error) => {
            console.error('Sign out error', error);
        });
};

// 15. ユーザーが課金済みかチェックする関数 (共通化)
async function checkPremiumStatus(uid) {
    if (!db) return false; // dbが未定義の場合のガード
    try {
        // 'customers' コレクションの中から、自分のIDの 'payments' サブコレクションを見る
        // status が 'succeeded' (成功) になっているデータがあるか探す
        const snapshot = await db.collection('customers')
            .doc(uid)
            .collection('payments')
            .where('status', '==', 'succeeded')
            .get();
        
        // データが1つでもあれば true (課金済み)、なければ false
        return !snapshot.empty;
    } catch (error) {
        console.error("Premium check error:", error);
        return false;
    }
}