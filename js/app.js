// === 状態管理とユーティリティ ===

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

// 4. 進捗の取得 (localStorage)
// 戻り値: { spell: true, rhythm: false, ... }
const getProgress = (wordId) => {
    const key = `eq_progress_${wordId}`;
    return JSON.parse(localStorage.getItem(key)) || {};
};

// 5. 進捗の保存
const saveProgress = (wordId, mode) => {
    const current = getProgress(wordId);
    current[mode] = true;
    localStorage.setItem(`eq_progress_${wordId}`, JSON.stringify(current));
    console.log(`Saved: ID ${wordId}, Mode ${mode}`);
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
    const id = getCurrentWordId();
    if (id) {
        saveProgress(id, mode);
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

// 9. ページ読み込み時の処理 (フェードイン)
window.addEventListener('DOMContentLoaded', () => {
    // わずかに遅らせてクラスを追加することで、CSS transitionを発火させる
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 50);
});