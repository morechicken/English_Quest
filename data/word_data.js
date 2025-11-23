const WORD_DATABASE = [
  {
    "id": 1,
    "word": "ABOLISH",
    "meaning_core": "廃止する",
    "syllables": [
      { "text": "A", "type": "weak" },
      { "text": "BOL", "type": "strong" },
      { "text": "ISH", "type": "weak" }
    ],
    "synonyms": {
      "ELIMINATE": "排除する",
      "ANNUL": "無効にする",
      "CANCEL": "取り消す"
    },
    "distractors": ["ESTABLISH", "CREATE", "START", "KEEP"],
    "meanings_expanded": ["廃止する", "撤廃する", "無効にする"],
    "contexts": [
      {
        "parts": ["Abraham Lincoln helped to", "slavery."],
        "full": "Abraham Lincoln helped to abolish slavery.",
        "jp": "エイブラハム・リンカーンは奴隷制度の廃止に貢献した。",
        "is_correct": true
      },
      {
        "parts": ["We decided to", "a new building."],
        "full": "We decided to construct a new building.",
        "jp": "私たちは新しい建物を建設することに決めた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 2,
    "word": "ABOVE",
    "meaning_core": "～より上に",
    "syllables": [
      { "text": "A", "type": "weak" },
      { "text": "BOVE", "type": "strong" }
    ],
    "synonyms": {
      "OVER": "～の上に",
      "BEYOND": "～を超えて",
      "HIGHER": "より高く"
    },
    "distractors": ["BELOW", "UNDER", "DOWN", "WITHIN"],
    "meanings_expanded": ["～より上に", "～を超えて", "頭上に"],
    "contexts": [
      {
        "parts": ["The plane flew high", "the clouds."],
        "full": "The plane flew high above the clouds.",
        "jp": "飛行機は雲の上高くを飛んだ。",
        "is_correct": true
      },
      {
        "parts": ["He walked", "the tunnel."],
        "full": "He walked through the tunnel.",
        "jp": "彼はトンネルを通って歩いた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 3,
    "word": "ABRIDGED",
    "meaning_core": "要約された",
    "syllables": [
      { "text": "A", "type": "weak" },
      { "text": "BRIDGED", "type": "strong" }
    ],
    "synonyms": {
      "SHORTENED": "短縮された",
      "CONDENSED": "凝縮された",
      "BRIEF": "簡潔な"
    },
    "distractors": ["EXTENDED", "LONG", "FULL", "COMPLETE"],
    "meanings_expanded": ["要約された", "短縮された", "簡約版の"],
    "contexts": [
      {
        "parts": ["I read an", "version of the novel."],
        "full": "I read an abridged version of the novel.",
        "jp": "私はその小説の要約版を読んだ。",
        "is_correct": true
      },
      {
        "parts": ["She wore a", "dress."],
        "full": "She wore a beautiful dress.",
        "jp": "彼女は美しいドレスを着ていた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 4,
    "word": "ABRUPT",
    "meaning_core": "突然の",
    "syllables": [
      { "text": "A", "type": "weak" },
      { "text": "BRUPT", "type": "strong" }
    ],
    "synonyms": {
      "SUDDEN": "突然の",
      "UNEXPECTED": "予期せぬ",
      "SHARP": "急な"
    },
    "distractors": ["GRADUAL", "SLOW", "GENTLE", "SMOOTH"],
    "meanings_expanded": ["突然の", "ぶっきらぼうな", "急な"],
    "contexts": [
      {
        "parts": ["The bus came to an", "stop."],
        "full": "The bus came to an abrupt stop.",
        "jp": "バスは突然停止した。",
        "is_correct": true
      },
      {
        "parts": ["He is a", "driver."],
        "full": "He is a careful driver.",
        "jp": "彼は慎重な運転手だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 5,
    "word": "ABRUPTLY",
    "meaning_core": "不意に",
    "syllables": [
      { "text": "A", "type": "weak" },
      { "text": "BRUPT", "type": "strong" },
      { "text": "LY", "type": "weak" }
    ],
    "synonyms": {
      "SUDDENLY": "突然",
      "UNEXPECTEDLY": "思いがけず",
      "INSTANTLY": "即座に"
    },
    "distractors": ["GRADUALLY", "SLOWLY", "QUIETLY", "SOFTLY"],
    "meanings_expanded": ["不意に", "突然", "急に"],
    "contexts": [
      {
        "parts": ["The meeting ended", "when the fire alarm rang."],
        "full": "The meeting ended abruptly when the fire alarm rang.",
        "jp": "火災報知器が鳴ると、会議は不意に終了した。",
        "is_correct": true
      },
      {
        "parts": ["She spoke", "to the child."],
        "full": "She spoke gently to the child.",
        "jp": "彼女は子供に優しく話しかけた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 6,
    "word": "ABUNDANT",
    "meaning_core": "豊富な",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "BUN", "type": "strong" },
      { "text": "dant", "type": "weak" }
    ],
    "synonyms": {
      "PLENTIFUL": "たくさんの",
      "AMPLE": "十分な",
      "COPIOUS": "多量の"
    },
    "distractors": ["SCARCE", "RARE", "LACKING", "EMPTY"],
    "meanings_expanded": ["豊富な", "豊かな", "潤沢な"],
    "contexts": [
      {
        "parts": ["The country has an", "supply of oil."],
        "full": "The country has an abundant supply of oil.",
        "jp": "その国には豊富な石油の供給がある。",
        "is_correct": true
      },
      {
        "parts": ["He has a", "amount of debt."],
        "full": "He has a small amount of debt.",
        "jp": "彼は少額の借金を抱えている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 7,
    "word": "ACCOMMODATE",
    "meaning_core": "収容する",
    "syllables": [
      { "text": "ac", "type": "weak" },
      { "text": "COM", "type": "strong" },
      { "text": "mo", "type": "weak" },
      { "text": "date", "type": "weak" }
    ],
    "synonyms": {
      "HOUSE": "泊める",
      "HOLD": "収容する",
      "LODGE": "宿泊させる"
    },
    "distractors": ["REJECT", "REFUSE", "EXCLUDE", "BAR"],
    "meanings_expanded": ["収容する", "適応させる", "宿泊させる"],
    "contexts": [
      {
        "parts": ["The hotel can", "up to 500 guests."],
        "full": "The hotel can accommodate up to 500 guests.",
        "jp": "そのホテルは最大500人の客を収容できる。",
        "is_correct": true
      },
      {
        "parts": ["I cannot", "your request."],
        "full": "I cannot accept your request.",
        "jp": "あなたの要求を受け入れることはできません。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 8,
    "word": "ACCORDING TO",
    "meaning_core": "～によれば",
    "syllables": [
      { "text": "ac", "type": "weak" },
      { "text": "CORD", "type": "strong" },
      { "text": "ing", "type": "weak" },
      { "text": "to", "type": "weak" }
    ],
    "synonyms": {
      "AS STATED BY": "～が述べたように",
      "BASED ON": "～に基づいて",
      "PER": "～につき"
    },
    "distractors": ["DESPITE", "UNLIKE", "AGAINST", "INSTEAD OF"],
    "meanings_expanded": ["～によれば", "～に従って", "～の言うところでは"],
    "contexts": [
      {
        "parts": ["It will rain tomorrow,", "the weather forecast."],
        "full": "It will rain tomorrow, according to the weather forecast.",
        "jp": "天気予報によれば、明日は雨になるだろう。",
        "is_correct": true
      },
      {
        "parts": ["He succeeded", "his efforts."],
        "full": "He succeeded because of his efforts.",
        "jp": "彼は努力のおかげで成功した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 9,
    "word": "ACQUIRE",
    "meaning_core": "習得する",
    "syllables": [
      { "text": "ac", "type": "weak" },
      { "text": "QUIRE", "type": "strong" }
    ],
    "synonyms": {
      "OBTAIN": "入手する",
      "GAIN": "得る",
      "EARN": "獲得する"
    },
    "distractors": ["LOSE", "GIVE", "FORFEIT", "MISS"],
    "meanings_expanded": ["習得する", "獲得する", "手に入れる"],
    "contexts": [
      {
        "parts": ["She managed to", "a new skill."],
        "full": "She managed to acquire a new skill.",
        "jp": "彼女は新しいスキルを習得することに成功した。",
        "is_correct": true
      },
      {
        "parts": ["Did you", "your homework?"],
        "full": "Did you finish your homework?",
        "jp": "宿題は終わりましたか？",
        "is_correct": false
      }
    ]
  },
  {
    "id": 10,
    "word": "ACQUISITION",
    "meaning_core": "習得",
    "syllables": [
      { "text": "ac", "type": "weak" },
      { "text": "qui", "type": "weak" },
      { "text": "SI", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "PURCHASE": "購入",
      "PROCUREMENT": "調達",
      "GAIN": "利益"
    },
    "distractors": ["LOSS", "SALE", "DISPOSAL", "DEFEAT"],
    "meanings_expanded": ["習得", "獲得", "買収"],
    "contexts": [
      {
        "parts": ["Second language", "is a complex process."],
        "full": "Second language acquisition is a complex process.",
        "jp": "第二言語習得は複雑なプロセスだ。",
        "is_correct": true
      },
      {
        "parts": ["The", "of the sun was beautiful."],
        "full": "The setting of the sun was beautiful.",
        "jp": "日没は美しかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 11,
    "word": "ACUTE",
    "meaning_core": "鋭い",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "CUTE", "type": "strong" }
    ],
    "synonyms": {
      "SHARP": "鋭い",
      "SEVERE": "深刻な",
      "INTENSE": "激しい"
    },
    "distractors": ["MILD", "DULL", "BLUNT", "CHRONIC"],
    "meanings_expanded": ["鋭い", "急性の", "深刻な"],
    "contexts": [
      {
        "parts": ["He felt an", "pain in his chest."],
        "full": "He felt an acute pain in his chest.",
        "jp": "彼は胸に鋭い痛みを感じた。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "problem."],
        "full": "This is a minor problem.",
        "jp": "これは些細な問題だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 12,
    "word": "ADAMANT",
    "meaning_core": "断固とした",
    "syllables": [
      { "text": "AD", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "mant", "type": "weak" }
    ],
    "synonyms": {
      "FIRM": "堅い",
      "UNYIELDING": "譲らない",
      "STUBBORN": "頑固な"
    },
    "distractors": ["FLEXIBLE", "YIELDING", "WEAK", "SOFT"],
    "meanings_expanded": ["断固とした", "譲らない", "堅固な"],
    "contexts": [
      {
        "parts": ["She was", "that she would not go."],
        "full": "She was adamant that she would not go.",
        "jp": "彼女は行かないと断固として主張した。",
        "is_correct": true
      },
      {
        "parts": ["He is", "about his schedule."],
        "full": "He is flexible about his schedule.",
        "jp": "彼はスケジュールに関して柔軟だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 13,
    "word": "ADDICTION",
    "meaning_core": "中毒",
    "syllables": [
      { "text": "ad", "type": "weak" },
      { "text": "DIC", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "DEPENDENCE": "依存",
      "OBSESSION": "執着",
      "CRAVING": "渇望"
    },
    "distractors": ["FREEDOM", "DISLIKE", "HATRED", "AVERSION"],
    "meanings_expanded": ["中毒", "依存症", "熱中"],
    "contexts": [
      {
        "parts": ["He is fighting a drug", "."],
        "full": "He is fighting a drug addiction.",
        "jp": "彼は薬物中毒と戦っている。",
        "is_correct": true
      },
      {
        "parts": ["She has a strong", "to music."],
        "full": "She has a strong passion for music.",
        "jp": "彼女は音楽に強い情熱を持っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 14,
    "word": "ADEQUATE",
    "meaning_core": "十分な",
    "syllables": [
      { "text": "AD", "type": "strong" },
      { "text": "e", "type": "weak" },
      { "text": "quate", "type": "weak" }
    ],
    "synonyms": {
      "SUFFICIENT": "十分な",
      "ENOUGH": "足りる",
      "SUITABLE": "適切な"
    },
    "distractors": ["INSUFFICIENT", "LACKING", "POOR", "SCARCE"],
    "meanings_expanded": ["十分な", "適切な", "まずまずの"],
    "contexts": [
      {
        "parts": ["We have an", "supply of food."],
        "full": "We have an adequate supply of food.",
        "jp": "私たちには十分な食料の蓄えがある。",
        "is_correct": true
      },
      {
        "parts": ["The service was", "."],
        "full": "The service was terrible.",
        "jp": "そのサービスはひどかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 15,
    "word": "ADEQUATELY",
    "meaning_core": "十分に",
    "syllables": [
      { "text": "AD", "type": "strong" },
      { "text": "e", "type": "weak" },
      { "text": "quate", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "SUFFICIENTLY": "十分に",
      "PROPERLY": "適切に",
      "WELL": "よく"
    },
    "distractors": ["POORLY", "BADLY", "INSUFFICIENTLY", "BARELY"],
    "meanings_expanded": ["十分に", "適切に"],
    "contexts": [
      {
        "parts": ["Make sure you are", "prepared."],
        "full": "Make sure you are adequately prepared.",
        "jp": "十分に準備ができているか確認しなさい。",
        "is_correct": true
      },
      {
        "parts": ["He played the piano", "."],
        "full": "He played the piano beautifully.",
        "jp": "彼は美しくピアノを弾いた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 6,
    "word": "ABUNDANT",
    "meaning_core": "豊富な",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "BUN", "type": "strong" },
      { "text": "dant", "type": "weak" }
    ],
    "synonyms": {
      "PLENTIFUL": "たくさんの",
      "AMPLE": "十分な",
      "COPIOUS": "多量の"
    },
    "distractors": ["SCARCE", "RARE", "LACKING", "EMPTY"],
    "meanings_expanded": ["豊富な", "豊かな", "潤沢な"],
    "contexts": [
      {
        "parts": ["The country has an", "supply of oil."],
        "full": "The country has an abundant supply of oil.",
        "jp": "その国には豊富な石油の供給がある。",
        "is_correct": true
      },
      {
        "parts": ["He has a", "amount of debt."],
        "full": "He has a small amount of debt.",
        "jp": "彼は少額の借金を抱えている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 7,
    "word": "ACCOMMODATE",
    "meaning_core": "収容する",
    "syllables": [
      { "text": "ac", "type": "weak" },
      { "text": "COM", "type": "strong" },
      { "text": "mo", "type": "weak" },
      { "text": "date", "type": "weak" }
    ],
    "synonyms": {
      "HOUSE": "泊める",
      "HOLD": "収容する",
      "LODGE": "宿泊させる"
    },
    "distractors": ["REJECT", "REFUSE", "EXCLUDE", "BAR"],
    "meanings_expanded": ["収容する", "適応させる", "宿泊させる"],
    "contexts": [
      {
        "parts": ["The hotel can", "up to 500 guests."],
        "full": "The hotel can accommodate up to 500 guests.",
        "jp": "そのホテルは最大500人の客を収容できる。",
        "is_correct": true
      },
      {
        "parts": ["I cannot", "your request."],
        "full": "I cannot accept your request.",
        "jp": "あなたの要求を受け入れることはできません。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 8,
    "word": "ACCORDING TO",
    "meaning_core": "～によれば",
    "syllables": [
      { "text": "ac", "type": "weak" },
      { "text": "CORD", "type": "strong" },
      { "text": "ing", "type": "weak" },
      { "text": "to", "type": "weak" }
    ],
    "synonyms": {
      "AS STATED BY": "～が述べたように",
      "BASED ON": "～に基づいて",
      "PER": "～につき"
    },
    "distractors": ["DESPITE", "UNLIKE", "AGAINST", "INSTEAD OF"],
    "meanings_expanded": ["～によれば", "～に従って", "～の言うところでは"],
    "contexts": [
      {
        "parts": ["It will rain tomorrow,", "the weather forecast."],
        "full": "It will rain tomorrow, according to the weather forecast.",
        "jp": "天気予報によれば、明日は雨になるだろう。",
        "is_correct": true
      },
      {
        "parts": ["He succeeded", "his efforts."],
        "full": "He succeeded because of his efforts.",
        "jp": "彼は努力のおかげで成功した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 9,
    "word": "ACQUIRE",
    "meaning_core": "習得する",
    "syllables": [
      { "text": "ac", "type": "weak" },
      { "text": "QUIRE", "type": "strong" }
    ],
    "synonyms": {
      "OBTAIN": "入手する",
      "GAIN": "得る",
      "EARN": "獲得する"
    },
    "distractors": ["LOSE", "GIVE", "FORFEIT", "MISS"],
    "meanings_expanded": ["習得する", "獲得する", "手に入れる"],
    "contexts": [
      {
        "parts": ["She managed to", "a new skill."],
        "full": "She managed to acquire a new skill.",
        "jp": "彼女は新しいスキルを習得することに成功した。",
        "is_correct": true
      },
      {
        "parts": ["Did you", "your homework?"],
        "full": "Did you finish your homework?",
        "jp": "宿題は終わりましたか？",
        "is_correct": false
      }
    ]
  },
  {
    "id": 10,
    "word": "ACQUISITION",
    "meaning_core": "習得",
    "syllables": [
      { "text": "ac", "type": "weak" },
      { "text": "qui", "type": "weak" },
      { "text": "SI", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "PURCHASE": "購入",
      "PROCUREMENT": "調達",
      "GAIN": "利益"
    },
    "distractors": ["LOSS", "SALE", "DISPOSAL", "DEFEAT"],
    "meanings_expanded": ["習得", "獲得", "買収"],
    "contexts": [
      {
        "parts": ["Second language", "is a complex process."],
        "full": "Second language acquisition is a complex process.",
        "jp": "第二言語習得は複雑なプロセスだ。",
        "is_correct": true
      },
      {
        "parts": ["The", "of the sun was beautiful."],
        "full": "The setting of the sun was beautiful.",
        "jp": "日没は美しかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 11,
    "word": "ACUTE",
    "meaning_core": "鋭い",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "CUTE", "type": "strong" }
    ],
    "synonyms": {
      "SHARP": "鋭い",
      "SEVERE": "深刻な",
      "INTENSE": "激しい"
    },
    "distractors": ["MILD", "DULL", "BLUNT", "CHRONIC"],
    "meanings_expanded": ["鋭い", "急性の", "深刻な"],
    "contexts": [
      {
        "parts": ["He felt an", "pain in his chest."],
        "full": "He felt an acute pain in his chest.",
        "jp": "彼は胸に鋭い痛みを感じた。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "problem."],
        "full": "This is a minor problem.",
        "jp": "これは些細な問題だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 12,
    "word": "ADAMANT",
    "meaning_core": "断固とした",
    "syllables": [
      { "text": "AD", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "mant", "type": "weak" }
    ],
    "synonyms": {
      "FIRM": "堅い",
      "UNYIELDING": "譲らない",
      "STUBBORN": "頑固な"
    },
    "distractors": ["FLEXIBLE", "YIELDING", "WEAK", "SOFT"],
    "meanings_expanded": ["断固とした", "譲らない", "堅固な"],
    "contexts": [
      {
        "parts": ["She was", "that she would not go."],
        "full": "She was adamant that she would not go.",
        "jp": "彼女は行かないと断固として主張した。",
        "is_correct": true
      },
      {
        "parts": ["He is", "about his schedule."],
        "full": "He is flexible about his schedule.",
        "jp": "彼はスケジュールに関して柔軟だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 13,
    "word": "ADDICTION",
    "meaning_core": "中毒",
    "syllables": [
      { "text": "ad", "type": "weak" },
      { "text": "DIC", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "DEPENDENCE": "依存",
      "OBSESSION": "執着",
      "CRAVING": "渇望"
    },
    "distractors": ["FREEDOM", "DISLIKE", "HATRED", "AVERSION"],
    "meanings_expanded": ["中毒", "依存症", "熱中"],
    "contexts": [
      {
        "parts": ["He is fighting a drug", "."],
        "full": "He is fighting a drug addiction.",
        "jp": "彼は薬物中毒と戦っている。",
        "is_correct": true
      },
      {
        "parts": ["She has a strong", "to music."],
        "full": "She has a strong passion for music.",
        "jp": "彼女は音楽に強い情熱を持っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 14,
    "word": "ADEQUATE",
    "meaning_core": "十分な",
    "syllables": [
      { "text": "AD", "type": "strong" },
      { "text": "e", "type": "weak" },
      { "text": "quate", "type": "weak" }
    ],
    "synonyms": {
      "SUFFICIENT": "十分な",
      "ENOUGH": "足りる",
      "SUITABLE": "適切な"
    },
    "distractors": ["INSUFFICIENT", "LACKING", "POOR", "SCARCE"],
    "meanings_expanded": ["十分な", "適切な", "まずまずの"],
    "contexts": [
      {
        "parts": ["We have an", "supply of food."],
        "full": "We have an adequate supply of food.",
        "jp": "私たちには十分な食料の蓄えがある。",
        "is_correct": true
      },
      {
        "parts": ["The service was", "."],
        "full": "The service was terrible.",
        "jp": "そのサービスはひどかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 15,
    "word": "ADEQUATELY",
    "meaning_core": "十分に",
    "syllables": [
      { "text": "AD", "type": "strong" },
      { "text": "e", "type": "weak" },
      { "text": "quate", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "SUFFICIENTLY": "十分に",
      "PROPERLY": "適切に",
      "WELL": "よく"
    },
    "distractors": ["POORLY", "BADLY", "INSUFFICIENTLY", "BARELY"],
    "meanings_expanded": ["十分に", "適切に"],
    "contexts": [
      {
        "parts": ["Make sure you are", "prepared."],
        "full": "Make sure you are adequately prepared.",
        "jp": "十分に準備ができているか確認しなさい。",
        "is_correct": true
      },
      {
        "parts": ["He played the piano", "."],
        "full": "He played the piano beautifully.",
        "jp": "彼は美しくピアノを弾いた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 16,
    "word": "ADMINISTER",
    "meaning_core": "管理する",
    "syllables": [
      { "text": "ad", "type": "weak" },
      { "text": "MIN", "type": "strong" },
      { "text": "is", "type": "weak" },
      { "text": "ter", "type": "weak" }
    ],
    "synonyms": {
      "MANAGE": "管理する",
      "DIRECT": "指揮する",
      "SUPERVISE": "監督する"
    },
    "distractors": ["FOLLOW", "OBEY", "NEGLECT", "IGNORE"],
    "meanings_expanded": ["管理する", "運営する", "（薬などを）投与する"],
    "contexts": [
      {
        "parts": ["It takes skill to", "a large corporation."],
        "full": "It takes skill to administer a large corporation.",
        "jp": "大企業を管理するにはスキルが必要だ。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the flowers."],
        "full": "Please water the flowers.",
        "jp": "花に水をやってください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 17,
    "word": "ADOLESCENCE",
    "meaning_core": "青年期",
    "syllables": [
      { "text": "ad", "type": "weak" },
      { "text": "o", "type": "weak" },
      { "text": "LES", "type": "strong" },
      { "text": "cence", "type": "weak" }
    ],
    "synonyms": {
      "YOUTH": "若さ",
      "TEENS": "十代",
      "PUBERTY": "思春期"
    },
    "distractors": ["INFANCY", "ADULTHOOD", "OLD AGE", "SENIORITY"],
    "meanings_expanded": ["青年期", "思春期", "青春"],
    "contexts": [
      {
        "parts": ["He struggled during his", "."],
        "full": "He struggled during his adolescence.",
        "jp": "彼は思春期の間、苦労した。",
        "is_correct": true
      },
      {
        "parts": ["The baby is in", "."],
        "full": "The baby is in infancy.",
        "jp": "その赤ん坊は幼年期にある。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 18,
    "word": "ADOLESCENT",
    "meaning_core": "思春期の若者",
    "syllables": [
      { "text": "ad", "type": "weak" },
      { "text": "o", "type": "weak" },
      { "text": "LES", "type": "strong" },
      { "text": "cent", "type": "weak" }
    ],
    "synonyms": {
      "TEENAGER": "ティーンエイジャー",
      "YOUTH": "若者",
      "JUVENILE": "少年少女"
    },
    "distractors": ["ADULT", "ELDER", "INFANT", "BABY"],
    "meanings_expanded": ["思春期の若者", "未熟な", "青春の"],
    "contexts": [
      {
        "parts": ["Typical", "behavior includes rebellion."],
        "full": "Typical adolescent behavior includes rebellion.",
        "jp": "典型的な思春期の行動には反抗が含まれる。",
        "is_correct": true
      },
      {
        "parts": ["He is a retired", "."],
        "full": "He is a retired senior.",
        "jp": "彼は引退した高齢者だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 19,
    "word": "ADVOCATE",
    "meaning_core": "主張する",
    "syllables": [
      { "text": "AD", "type": "strong" },
      { "text": "vo", "type": "weak" },
      { "text": "cate", "type": "weak" }
    ],
    "synonyms": {
      "SUPPORT": "支持する",
      "RECOMMEND": "推奨する",
      "PROMOTE": "促進する"
    },
    "distractors": ["OPPOSE", "CRITICIZE", "REJECT", "BLOCK"],
    "meanings_expanded": ["主張する", "支持する", "提唱者"],
    "contexts": [
      {
        "parts": ["They", "for human rights."],
        "full": "They advocate for human rights.",
        "jp": "彼らは人権を主張している。",
        "is_correct": true
      },
      {
        "parts": ["I", "going to bed late."],
        "full": "I dislike going to bed late.",
        "jp": "私は夜更かしするのが嫌いだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 20,
    "word": "AFFLUENT",
    "meaning_core": "裕福な",
    "syllables": [
      { "text": "AF", "type": "strong" },
      { "text": "flu", "type": "weak" },
      { "text": "ent", "type": "weak" }
    ],
    "synonyms": {
      "WEALTHY": "裕福な",
      "RICH": "金持ちの",
      "PROSPEROUS": "繁栄している"
    },
    "distractors": ["POOR", "NEEDY", "DESTITUTE", "BROKE"],
    "meanings_expanded": ["裕福な", "豊富な", "豊潤な"],
    "contexts": [
      {
        "parts": ["He lives in an", "neighborhood."],
        "full": "He lives in an affluent neighborhood.",
        "jp": "彼は裕福な地域に住んでいる。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "meal."],
        "full": "This is a cheap meal.",
        "jp": "これは安い食事だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 21,
    "word": "AGAINST",
    "meaning_core": "～に反対して",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "GAINST", "type": "strong" }
    ],
    "synonyms": {
      "OPPOSING": "反対の",
      "VERSUS": "対",
      "CONTRA": "反対"
    },
    "distractors": ["FOR", "SUPPORTING", "WITH", "ALONG"],
    "meanings_expanded": ["～に反対して", "～を背景にして", "～にもたれて"],
    "contexts": [
      {
        "parts": ["I voted", "the proposal."],
        "full": "I voted against the proposal.",
        "jp": "私はその提案に反対票を投じた。",
        "is_correct": true
      },
      {
        "parts": ["He walked", "his friend."],
        "full": "He walked with his friend.",
        "jp": "彼は友人と一緒に歩いた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 22,
    "word": "ALIENATE",
    "meaning_core": "疎遠にする",
    "syllables": [
      { "text": "A", "type": "strong" },
      { "text": "lien", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "ESTRANGE": "仲たがいさせる",
      "ISOLATE": "孤立させる",
      "DISTANCE": "距離を置く"
    },
    "distractors": ["UNITE", "BEFRIEND", "JOIN", "ATTRACT"],
    "meanings_expanded": ["疎遠にする", "遠ざける", "不和にする"],
    "contexts": [
      {
        "parts": ["His rude behavior might", "his friends."],
        "full": "His rude behavior might alienate his friends.",
        "jp": "彼の無礼な態度は友人を遠ざけるかもしれない。",
        "is_correct": true
      },
      {
        "parts": ["We want to", "new members."],
        "full": "We want to welcome new members.",
        "jp": "私たちは新しいメンバーを歓迎したい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 23,
    "word": "ALLEGE",
    "meaning_core": "主張する",
    "syllables": [
      { "text": "al", "type": "weak" },
      { "text": "LEGE", "type": "strong" }
    ],
    "synonyms": {
      "CLAIM": "主張する",
      "ASSERT": "断言する",
      "MAINTAIN": "主張し続ける"
    },
    "distractors": ["DENY", "WITHDRAW", "REFUTE", "CONCEAL"],
    "meanings_expanded": ["（証拠なしに）主張する", "断言する"],
    "contexts": [
      {
        "parts": ["Prosecutors", "that he stole the money."],
        "full": "Prosecutors allege that he stole the money.",
        "jp": "検察官は彼がお金を盗んだと主張している。",
        "is_correct": true
      },
      {
        "parts": ["I", "to tell the truth."],
        "full": "I promise to tell the truth.",
        "jp": "私は真実を話すことを約束する。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 24,
    "word": "ALLEGEDLY",
    "meaning_core": "伝えられるところによると",
    "syllables": [
      { "text": "al", "type": "weak" },
      { "text": "LEGED", "type": "strong" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "REPORTEDLY": "報じられるところでは",
      "SUPPOSEDLY": "たぶん",
      "PURPORTEDLY": "噂によると"
    },
    "distractors": ["DEFINITELY", "CERTAINLY", "ACTUALLY", "TRULY"],
    "meanings_expanded": ["伝えられるところによると", "申し立てによると"],
    "contexts": [
      {
        "parts": ["He was", "involved in the scandal."],
        "full": "He was allegedly involved in the scandal.",
        "jp": "伝えられるところでは、彼はそのスキャンダルに関与していた。",
        "is_correct": true
      },
      {
        "parts": ["The sun is", "hot."],
        "full": "The sun is definitely hot.",
        "jp": "太陽は間違いなく熱い。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 25,
    "word": "ALLEGIANCE",
    "meaning_core": "忠誠",
    "syllables": [
      { "text": "al", "type": "weak" },
      { "text": "LE", "type": "strong" },
      { "text": "giance", "type": "weak" }
    ],
    "synonyms": {
      "LOYALTY": "忠誠心",
      "FIDELITY": "忠実",
      "DEVOTION": "献身"
    },
    "distractors": ["TREACHERY", "TREASON", "BETRAYAL", "DISLOYALTY"],
    "meanings_expanded": ["忠誠", "献身", "忠義"],
    "contexts": [
      {
        "parts": ["They pledged", "to the flag."],
        "full": "They pledged allegiance to the flag.",
        "jp": "彼らは国旗への忠誠を誓った。",
        "is_correct": true
      },
      {
        "parts": ["He showed", "to his enemy."],
        "full": "He showed hatred to his enemy.",
        "jp": "彼は敵に対して憎しみを示した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 26,
    "word": "ALLEVIATE",
    "meaning_core": "緩和する",
    "syllables": [
      { "text": "al", "type": "weak" },
      { "text": "LE", "type": "strong" },
      { "text": "vi", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "RELIEVE": "和らげる",
      "EASE": "楽にする",
      "LESSEN": "減らす"
    },
    "distractors": ["AGGRAVATE", "WORSEN", "INTENSIFY", "INCREASE"],
    "meanings_expanded": ["緩和する", "軽減する", "楽にする"],
    "contexts": [
      {
        "parts": ["This medicine will", "the pain."],
        "full": "This medicine will alleviate the pain.",
        "jp": "この薬は痛みを緩和するだろう。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "the problem."],
        "full": "Don't ignore the problem.",
        "jp": "その問題を無視するな。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 27,
    "word": "ALLOCATE",
    "meaning_core": "割り当てる",
    "syllables": [
      { "text": "AL", "type": "strong" },
      { "text": "lo", "type": "weak" },
      { "text": "cate", "type": "weak" }
    ],
    "synonyms": {
      "ASSIGN": "割り当てる",
      "DISTRIBUTE": "分配する",
      "ALLOT": "配分する"
    },
    "distractors": ["WITHHOLD", "KEEP", "RETAIN", "GATHER"],
    "meanings_expanded": ["割り当てる", "配分する", "計上する"],
    "contexts": [
      {
        "parts": ["We need to", "funds for research."],
        "full": "We need to allocate funds for research.",
        "jp": "我々は研究のために資金を割り当てる必要がある。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the garbage."],
        "full": "Please collect the garbage.",
        "jp": "ゴミを集めてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 28,
    "word": "ALONG WITH",
    "meaning_core": "～と一緒に",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "LONG", "type": "strong" },
      { "text": "with", "type": "weak" }
    ],
    "synonyms": {
      "TOGETHER WITH": "～と共に",
      "BESIDES": "～に加えて",
      "PLUS": "～を足して"
    },
    "distractors": ["INSTEAD OF", "WITHOUT", "EXCEPT", "MINUS"],
    "meanings_expanded": ["～と一緒に", "～に加えて", "～と協力して"],
    "contexts": [
      {
        "parts": ["I ordered coffee", "a sandwich."],
        "full": "I ordered coffee along with a sandwich.",
        "jp": "私はサンドイッチと一緒にコーヒーを注文した。",
        "is_correct": true
      },
      {
        "parts": ["I went home", "my keys."],
        "full": "I went home without my keys.",
        "jp": "私は鍵を持たずに家に帰った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 29,
    "word": "ALTER",
    "meaning_core": "変える",
    "syllables": [
      { "text": "AL", "type": "strong" },
      { "text": "ter", "type": "weak" }
    ],
    "synonyms": {
      "CHANGE": "変える",
      "MODIFY": "修正する",
      "ADJUST": "調整する"
    },
    "distractors": ["PRESERVE", "KEEP", "MAINTAIN", "STAY"],
    "meanings_expanded": ["変える", "改める", "作り直す"],
    "contexts": [
      {
        "parts": ["We had to", "our plans."],
        "full": "We had to alter our plans.",
        "jp": "私たちは計画を変更しなければならなかった。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the door open."],
        "full": "Please keep the door open.",
        "jp": "ドアを開けたままにしておいて。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 30,
    "word": "ALTERNATIVE",
    "meaning_core": "代わりの",
    "syllables": [
      { "text": "al", "type": "weak" },
      { "text": "TER", "type": "strong" },
      { "text": "na", "type": "weak" },
      { "text": "tive", "type": "weak" }
    ],
    "synonyms": {
      "SUBSTITUTE": "代わりの",
      "OPTION": "選択肢",
      "CHOICE": "選択"
    },
    "distractors": ["PRIMARY", "MAIN", "OBLIGATION", "NECESSITY"],
    "meanings_expanded": ["代わりの", "代替の", "二者択一の"],
    "contexts": [
      {
        "parts": ["We need to find an", "energy source."],
        "full": "We need to find an alternative energy source.",
        "jp": "私たちは代替エネルギー源を見つける必要がある。",
        "is_correct": true
      },
      {
        "parts": ["This is the", "reason."],
        "full": "This is the main reason.",
        "jp": "これが主な理由だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 31,
    "word": "ALTITUDE",
    "meaning_core": "高度",
    "syllables": [
      { "text": "AL", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "tude", "type": "weak" }
    ],
    "synonyms": {
      "HEIGHT": "高さ",
      "ELEVATION": "海抜",
      "LEVEL": "水準"
    },
    "distractors": ["DEPTH", "BOTTOM", "LOW", "BASE"],
    "meanings_expanded": ["高度", "海抜", "標高"],
    "contexts": [
      {
        "parts": ["The plane is flying at a high", "."],
        "full": "The plane is flying at a high altitude.",
        "jp": "飛行機は高い高度を飛んでいる。",
        "is_correct": true
      },
      {
        "parts": ["The submarine dove to a great", "."],
        "full": "The submarine dove to a great depth.",
        "jp": "潜水艦は深い深度まで潜った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 32,
    "word": "AMBIGUITY",
    "meaning_core": "曖昧さ",
    "syllables": [
      { "text": "am", "type": "weak" },
      { "text": "bi", "type": "weak" },
      { "text": "GU", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "VAGUENESS": "漠然",
      "UNCERTAINTY": "不確実",
      "OBSCURITY": "不明瞭"
    },
    "distractors": ["CLARITY", "CERTAINTY", "CLEARNESS", "PRECISION"],
    "meanings_expanded": ["曖昧さ", "多義性", "不明瞭"],
    "contexts": [
      {
        "parts": ["There is some", "in the contract."],
        "full": "There is some ambiguity in the contract.",
        "jp": "その契約書にはいくつかの曖昧さがある。",
        "is_correct": true
      },
      {
        "parts": ["I like the", "of this water."],
        "full": "I like the clarity of this water.",
        "jp": "私はこの水の透明度が好きだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 33,
    "word": "AMBIGUOUS",
    "meaning_core": "曖昧な",
    "syllables": [
      { "text": "am", "type": "weak" },
      { "text": "BIG", "type": "strong" },
      { "text": "u", "type": "weak" },
      { "text": "ous", "type": "weak" }
    ],
    "synonyms": {
      "VAGUE": "漠然とした",
      "UNCLEAR": "不明瞭な",
      "INDEFINITE": "不確定な"
    },
    "distractors": ["CLEAR", "EXPLICIT", "DEFINITE", "OBVIOUS"],
    "meanings_expanded": ["曖昧な", "多義の", "不明瞭な"],
    "contexts": [
      {
        "parts": ["His answer was somewhat", "."],
        "full": "His answer was somewhat ambiguous.",
        "jp": "彼の答えはいくぶん曖昧だった。",
        "is_correct": true
      },
      {
        "parts": ["The instructions were very", "."],
        "full": "The instructions were very clear.",
        "jp": "指示は非常に明確だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 34,
    "word": "AMENITIES",
    "meaning_core": "快適な設備",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "MEN", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ties", "type": "weak" }
    ],
    "synonyms": {
      "FACILITIES": "施設",
      "CONVENIENCES": "便利なもの",
      "COMFORTS": "快適さ"
    },
    "distractors": ["NECESSITIES", "BASICS", "HARDSHIPS", "BURDENS"],
    "meanings_expanded": ["快適な設備", "アメニティ", "心地よさ"],
    "contexts": [
      {
        "parts": ["The hotel offers many", "like a pool."],
        "full": "The hotel offers many amenities like a pool.",
        "jp": "そのホテルはプールなど多くの快適な設備を提供している。",
        "is_correct": true
      },
      {
        "parts": ["Food and water are", "."],
        "full": "Food and water are necessities.",
        "jp": "食料と水は必需品だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 35,
    "word": "AMIABLE",
    "meaning_core": "愛想の良い",
    "syllables": [
      { "text": "A", "type": "strong" },
      { "text": "mi", "type": "weak" },
      { "text": "a", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "FRIENDLY": "友好的な",
      "PLEASANT": "感じの良い",
      "AGREEABLE": "好ましい"
    },
    "distractors": ["HOSTILE", "UNFRIENDLY", "RUDE", "COLD"],
    "meanings_expanded": ["愛想の良い", "好意的な", "社交的な"],
    "contexts": [
      {
        "parts": ["She is known for her", "personality."],
        "full": "She is known for her amiable personality.",
        "jp": "彼女は愛想の良い性格で知られている。",
        "is_correct": true
      },
      {
        "parts": ["He gave me a", "look."],
        "full": "He gave me a hostile look.",
        "jp": "彼は私に敵意のある視線を向けた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 36,
    "word": "AMONG",
    "meaning_core": "～の間で",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "MONG", "type": "strong" }
    ],
    "synonyms": {
      "AMIDST": "～の真ん中に",
      "BETWEEN": "～の間に",
      "IN": "～の中に"
    },
    "distractors": ["OUTSIDE", "APART", "AWAY", "BEYOND"],
    "meanings_expanded": ["（3つ以上）の間で", "～に囲まれて", "～の中の一人で"],
    "contexts": [
      {
        "parts": ["He is very popular", "the students."],
        "full": "He is very popular among the students.",
        "jp": "彼は生徒たちの間でとても人気がある。",
        "is_correct": true
      },
      {
        "parts": ["She walked", "the river."],
        "full": "She walked along the river.",
        "jp": "彼女は川沿いを歩いた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 37,
    "word": "AMPLIFY",
    "meaning_core": "増幅する",
    "syllables": [
      { "text": "AM", "type": "strong" },
      { "text": "pli", "type": "weak" },
      { "text": "fy", "type": "weak" }
    ],
    "synonyms": {
      "INCREASE": "増やす",
      "BOOST": "高める",
      "MAGNIFY": "拡大する"
    },
    "distractors": ["REDUCE", "DECREASE", "LOWER", "DIMINISH"],
    "meanings_expanded": ["増幅する", "拡大する", "詳しく述べる"],
    "contexts": [
      {
        "parts": ["This device will", "the sound signals."],
        "full": "This device will amplify the sound signals.",
        "jp": "この装置は音声信号を増幅する。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the volume."],
        "full": "Please lower the volume.",
        "jp": "音量を下げてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 38,
    "word": "ANALYZE",
    "meaning_core": "分析する",
    "syllables": [
      { "text": "AN", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "lyze", "type": "weak" }
    ],
    "synonyms": {
      "EXAMINE": "調査する",
      "STUDY": "研究する",
      "INVESTIGATE": "調査する"
    },
    "distractors": ["IGNORE", "NEGLECT", "OVERLOOK", "GUESS"],
    "meanings_expanded": ["分析する", "分解する", "検討する"],
    "contexts": [
      {
        "parts": ["Scientists", "the data carefully."],
        "full": "Scientists analyze the data carefully.",
        "jp": "科学者たちはデータを慎重に分析する。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "the instructions."],
        "full": "Don't ignore the instructions.",
        "jp": "指示を無視してはいけない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 39,
    "word": "ANTIQUE",
    "meaning_core": "骨董品",
    "syllables": [
      { "text": "an", "type": "weak" },
      { "text": "TIQUE", "type": "strong" }
    ],
    "synonyms": {
      "RELIC": "遺物",
      "ARTIFACT": "工芸品",
      "HEIRLOOM": "家宝"
    },
    "distractors": ["NOVELTY", "TRASH", "GARBAGE", "COPY"],
    "meanings_expanded": ["骨董品", "古美術品", "古風な"],
    "contexts": [
      {
        "parts": ["This vase is a valuable", "."],
        "full": "This vase is a valuable antique.",
        "jp": "この花瓶は貴重な骨董品だ。",
        "is_correct": true
      },
      {
        "parts": ["I bought a brand new", "."],
        "full": "I bought a brand new gadget.",
        "jp": "私は新品のガジェットを買った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 40,
    "word": "ANXIETY",
    "meaning_core": "不安",
    "syllables": [
      { "text": "ang", "type": "weak" },
      { "text": "ZI", "type": "strong" },
      { "text": "e", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "WORRY": "心配",
      "CONCERN": "懸念",
      "NERVOUSNESS": "神経質"
    },
    "distractors": ["CALM", "PEACE", "CONFIDENCE", "RELIEF"],
    "meanings_expanded": ["不安", "心配", "切望"],
    "contexts": [
      {
        "parts": ["She suffers from social", "."],
        "full": "She suffers from social anxiety.",
        "jp": "彼女は社交不安に苦しんでいる。",
        "is_correct": true
      },
      {
        "parts": ["He felt", "after passing the exam."],
        "full": "He felt relief after passing the exam.",
        "jp": "彼は試験に合格して安堵を感じた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 41,
    "word": "APPARENT",
    "meaning_core": "明白な",
    "syllables": [
      { "text": "ap", "type": "weak" },
      { "text": "PAR", "type": "strong" },
      { "text": "ent", "type": "weak" }
    ],
    "synonyms": {
      "OBVIOUS": "明らかな",
      "CLEAR": "明確な",
      "EVIDENT": "明白な"
    },
    "distractors": ["HIDDEN", "OBSCURE", "UNCLEAR", "SECRET"],
    "meanings_expanded": ["明白な", "一見して～らしい", "外見上の"],
    "contexts": [
      {
        "parts": ["It became", "that he was lying."],
        "full": "It became apparent that he was lying.",
        "jp": "彼が嘘をついていることが明白になった。",
        "is_correct": true
      },
      {
        "parts": ["The answer was", "to everyone."],
        "full": "The answer was unknown to everyone.",
        "jp": "その答えは誰にもわからなかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 42,
    "word": "APPARENTLY",
    "meaning_core": "どうやら～らしい",
    "syllables": [
      { "text": "ap", "type": "weak" },
      { "text": "PAR", "type": "strong" },
      { "text": "ent", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "SEEMINGLY": "見たところ",
      "EVIDENTLY": "明らかに",
      "SUPPOSEDLY": "たぶん"
    },
    "distractors": ["DEFINITELY", "ACTUALLY", "CERTAINLY", "SURELY"],
    "meanings_expanded": ["見たところでは", "どうやら～らしい"],
    "contexts": [
      {
        "parts": ["He is", "planning to resign."],
        "full": "He is apparently planning to resign.",
        "jp": "彼はどうやら辞職するつもりのようだ。",
        "is_correct": true
      },
      {
        "parts": ["I", "know the answer."],
        "full": "I definitely know the answer.",
        "jp": "私は間違いなく答えを知っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 43,
    "word": "APPRAISAL",
    "meaning_core": "評価",
    "syllables": [
      { "text": "ap", "type": "weak" },
      { "text": "PRAIS", "type": "strong" },
      { "text": "al", "type": "weak" }
    ],
    "synonyms": {
      "ASSESSMENT": "査定",
      "EVALUATION": "評価",
      "ESTIMATE": "見積もり"
    },
    "distractors": ["NEGLECT", "DISREGARD", "GUESS", "IGNORANCE"],
    "meanings_expanded": ["評価", "査定", "鑑定"],
    "contexts": [
      {
        "parts": ["He received a positive performance", "."],
        "full": "He received a positive performance appraisal.",
        "jp": "彼は肯定的な業績評価を受けた。",
        "is_correct": true
      },
      {
        "parts": ["We need an", "for the party."],
        "full": "We need an appetizer for the party.",
        "jp": "パーティーには前菜が必要だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 44,
    "word": "APPRECIATE",
    "meaning_core": "感謝する",
    "syllables": [
      { "text": "ap", "type": "weak" },
      { "text": "PRE", "type": "strong" },
      { "text": "ci", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "VALUE": "評価する",
      "CHERISH": "大事にする",
      "GRATEFUL": "感謝する"
    },
    "distractors": ["CRITICIZE", "DISREGARD", "SCORN", "HATE"],
    "meanings_expanded": ["感謝する", "正しく評価する", "理解する"],
    "contexts": [
      {
        "parts": ["I really", "your help."],
        "full": "I really appreciate your help.",
        "jp": "あなたの助けに本当に感謝しています。",
        "is_correct": true
      },
      {
        "parts": ["I", "rude people."],
        "full": "I dislike rude people.",
        "jp": "私は無礼な人が嫌いだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 45,
    "word": "APPREHEND",
    "meaning_core": "逮捕する",
    "syllables": [
      { "text": "ap", "type": "weak" },
      { "text": "pre", "type": "weak" },
      { "text": "HEND", "type": "strong" }
    ],
    "synonyms": {
      "ARREST": "逮捕する",
      "CAPTURE": "捕らえる",
      "SEIZE": "つかむ"
    },
    "distractors": ["RELEASE", "FREE", "MISS", "LOSE"],
    "meanings_expanded": ["逮捕する", "理解する", "懸念する"],
    "contexts": [
      {
        "parts": ["The police managed to", "the suspect."],
        "full": "The police managed to apprehend the suspect.",
        "jp": "警察はどうにか容疑者を逮捕した。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the bird."],
        "full": "Please release the bird.",
        "jp": "その鳥を放してあげてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 46,
    "word": "APPREHENSION",
    "meaning_core": "不安",
    "syllables": [
      { "text": "ap", "type": "weak" },
      { "text": "pre", "type": "weak" },
      { "text": "HEN", "type": "strong" },
      { "text": "sion", "type": "weak" }
    ],
    "synonyms": {
      "ANXIETY": "心配",
      "FEAR": "恐れ",
      "DREAD": "恐怖"
    },
    "distractors": ["CONFIDENCE", "CALM", "TRUST", "HOPE"],
    "meanings_expanded": ["不安", "懸念", "逮捕"],
    "contexts": [
      {
        "parts": ["He felt a sense of", "about the future."],
        "full": "He felt a sense of apprehension about the future.",
        "jp": "彼は将来に対して不安を感じた。",
        "is_correct": true
      },
      {
        "parts": ["She waited with", "for the gift."],
        "full": "She waited with excitement for the gift.",
        "jp": "彼女は贈り物を楽しみに待っていた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 47,
    "word": "APPROPRIATE",
    "meaning_core": "適切な",
    "syllables": [
      { "text": "ap", "type": "weak" },
      { "text": "PRO", "type": "strong" },
      { "text": "pri", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "SUITABLE": "適した",
      "PROPER": "適切な",
      "FITTING": "ふさわしい"
    },
    "distractors": ["IMPROPER", "WRONG", "UNSUITABLE", "INCORRECT"],
    "meanings_expanded": ["適切な", "ふさわしい"],
    "contexts": [
      {
        "parts": ["Wear clothes", "for the occasion."],
        "full": "Wear clothes appropriate for the occasion.",
        "jp": "その場にふさわしい服を着なさい。",
        "is_correct": true
      },
      {
        "parts": ["It is", "to arrive late."],
        "full": "It is rude to arrive late.",
        "jp": "遅刻するのは失礼だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 48,
    "word": "ARROGANT",
    "meaning_core": "尊大な",
    "syllables": [
      { "text": "AR", "type": "strong" },
      { "text": "ro", "type": "weak" },
      { "text": "gant", "type": "weak" }
    ],
    "synonyms": {
      "HAUGHTY": "高慢な",
      "PROUD": "誇り高い",
      "CONCEITED": "うぬぼれた"
    },
    "distractors": ["HUMBLE", "MODEST", "SHY", "MEEK"],
    "meanings_expanded": ["尊大な", "傲慢な", "横柄な"],
    "contexts": [
      {
        "parts": ["His", "attitude annoyed everyone."],
        "full": "His arrogant attitude annoyed everyone.",
        "jp": "彼の傲慢な態度は皆をイライラさせた。",
        "is_correct": true
      },
      {
        "parts": ["She is very", "and kind."],
        "full": "She is very humble and kind.",
        "jp": "彼女はとても謙虚で親切だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 49,
    "word": "ARTIFICIAL",
    "meaning_core": "人工の",
    "syllables": [
      { "text": "ar", "type": "weak" },
      { "text": "ti", "type": "weak" },
      { "text": "FI", "type": "strong" },
      { "text": "cial", "type": "weak" }
    ],
    "synonyms": {
      "SYNTHETIC": "合成の",
      "MAN-MADE": "人造の",
      "FAKE": "偽の"
    },
    "distractors": ["NATURAL", "REAL", "GENUINE", "AUTHENTIC"],
    "meanings_expanded": ["人工の", "模造の", "不自然な"],
    "contexts": [
      {
        "parts": ["This juice contains", "flavors."],
        "full": "This juice contains artificial flavors.",
        "jp": "このジュースには人工香料が含まれている。",
        "is_correct": true
      },
      {
        "parts": ["We enjoyed the", "scenery."],
        "full": "We enjoyed the natural scenery.",
        "jp": "私たちは自然の景色を楽しんだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 51,
    "word": "ASCERTAIN",
    "meaning_core": "確かめる",
    "syllables": [
      { "text": "as", "type": "weak" },
      { "text": "cer", "type": "weak" },
      { "text": "TAIN", "type": "strong" }
    ],
    "synonyms": {
      "CONFIRM": "確認する",
      "DETERMINE": "特定する",
      "VERIFY": "検証する"
    },
    "distractors": ["GUESS", "IGNORE", "ASSUME", "DOUBT"],
    "meanings_expanded": ["確かめる", "突き止める", "確認する"],
    "contexts": [
      {
        "parts": ["We need to", "the cause of the fire."],
        "full": "We need to ascertain the cause of the fire.",
        "jp": "我々は火事の原因を突き止める必要がある。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the door."],
        "full": "Please close the door.",
        "jp": "ドアを閉めてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 52,
    "word": "ASPECT",
    "meaning_core": "側面",
    "syllables": [
      { "text": "AS", "type": "strong" },
      { "text": "pect", "type": "weak" }
    ],
    "synonyms": {
      "FEATURE": "特徴",
      "FACET": "面",
      "PHASE": "局面"
    },
    "distractors": ["WHOLE", "TOTALITY", "ENTITY", "ALL"],
    "meanings_expanded": ["側面", "様相", "局面"],
    "contexts": [
      {
        "parts": ["Climate change affects every", "of our lives."],
        "full": "Climate change affects every aspect of our lives.",
        "jp": "気候変動は私たちの生活のあらゆる側面に影響を与える。",
        "is_correct": true
      },
      {
        "parts": ["He ate the whole", "."],
        "full": "He ate the whole cake.",
        "jp": "彼はケーキを全部食べた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 53,
    "word": "ASPIRE",
    "meaning_core": "熱望する",
    "syllables": [
      { "text": "as", "type": "weak" },
      { "text": "PIRE", "type": "strong" }
    ],
    "synonyms": {
      "DESIRE": "強く望む",
      "AIM": "目指す",
      "SEEK": "追い求める"
    },
    "distractors": ["HATE", "DISLIKE", "AVOID", "REJECT"],
    "meanings_expanded": ["熱望する", "目指す", "抱負を持つ"],
    "contexts": [
      {
        "parts": ["Many young people", "to be famous."],
        "full": "Many young people aspire to be famous.",
        "jp": "多くの若者が有名になることを熱望している。",
        "is_correct": true
      },
      {
        "parts": ["I", "eating vegetables."],
        "full": "I dislike eating vegetables.",
        "jp": "私は野菜を食べるのが嫌いだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 54,
    "word": "ASSEMBLE",
    "meaning_core": "集める",
    "syllables": [
      { "text": "as", "type": "weak" },
      { "text": "SEM", "type": "strong" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "GATHER": "集める",
      "COLLECT": "収集する",
      "CONSTRUCT": "組み立てる"
    },
    "distractors": ["DISPERSE", "SCATTER", "BREAK", "SEPARATE"],
    "meanings_expanded": ["集める", "組み立てる", "招集する"],
    "contexts": [
      {
        "parts": ["The students began to", "in the hall."],
        "full": "The students began to assemble in the hall.",
        "jp": "生徒たちはホールに集まり始めた。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the crowd."],
        "full": "Please disperse the crowd.",
        "jp": "群衆を解散させてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 55,
    "word": "ASSERT",
    "meaning_core": "断言する",
    "syllables": [
      { "text": "as", "type": "weak" },
      { "text": "SERT", "type": "strong" }
    ],
    "synonyms": {
      "DECLARE": "宣言する",
      "CLAIM": "主張する",
      "INSIST": "言い張る"
    },
    "distractors": ["DENY", "DOUBT", "QUESTION", "HIDE"],
    "meanings_expanded": ["断言する", "強く主張する", "権利を行使する"],
    "contexts": [
      {
        "parts": ["He continued to", "his innocence."],
        "full": "He continued to assert his innocence.",
        "jp": "彼は自分の無実を断言し続けた。",
        "is_correct": true
      },
      {
        "parts": ["I", "that he is lying."],
        "full": "I suspect that he is lying.",
        "jp": "私は彼が嘘をついていると疑っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 56,
    "word": "ASSESS",
    "meaning_core": "評価する",
    "syllables": [
      { "text": "as", "type": "weak" },
      { "text": "SESS", "type": "strong" }
    ],
    "synonyms": {
      "EVALUATE": "評価する",
      "ESTIMATE": "見積もる",
      "JUDGE": "判断する"
    },
    "distractors": ["GUESS", "IGNORE", "NEGLECT", "OVERLOOK"],
    "meanings_expanded": ["評価する", "査定する", "見極める"],
    "contexts": [
      {
        "parts": ["Experts will", "the damage caused by the storm."],
        "full": "Experts will assess the damage caused by the storm.",
        "jp": "専門家が嵐による被害を評価するだろう。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "the problem."],
        "full": "Don't ignore the problem.",
        "jp": "その問題を無視してはいけない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 57,
    "word": "ASSET",
    "meaning_core": "資産",
    "syllables": [
      { "text": "AS", "type": "strong" },
      { "text": "set", "type": "weak" }
    ],
    "synonyms": {
      "PROPERTY": "財産",
      "RESOURCE": "資源",
      "ADVANTAGE": "利点"
    },
    "distractors": ["LIABILITY", "DEBT", "DISADVANTAGE", "LOSS"],
    "meanings_expanded": ["資産", "財産", "貴重なもの"],
    "contexts": [
      {
        "parts": ["Good health is a great", "."],
        "full": "Good health is a great asset.",
        "jp": "健康は偉大な資産だ。",
        "is_correct": true
      },
      {
        "parts": ["His debt is a heavy", "."],
        "full": "His debt is a heavy liability.",
        "jp": "彼の借金は重い負債だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 58,
    "word": "ASSIGN",
    "meaning_core": "割り当てる",
    "syllables": [
      { "text": "as", "type": "weak" },
      { "text": "SIGN", "type": "strong" }
    ],
    "synonyms": {
      "ALLOCATE": "配分する",
      "APPOINT": "任命する",
      "DESIGNATE": "指定する"
    },
    "distractors": ["WITHDRAW", "REMOVE", "CANCEL", "KEEP"],
    "meanings_expanded": ["割り当てる", "任命する", "指定する"],
    "contexts": [
      {
        "parts": ["The teacher will", "homework to the class."],
        "full": "The teacher will assign homework to the class.",
        "jp": "先生はクラスに宿題を割り当てるだろう。",
        "is_correct": true
      },
      {
        "parts": ["Please", "your name here."],
        "full": "Please sign your name here.",
        "jp": "ここに署名してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 59,
    "word": "ASSIMILATE",
    "meaning_core": "同化する",
    "syllables": [
      { "text": "as", "type": "weak" },
      { "text": "SIM", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "late", "type": "weak" }
    ],
    "synonyms": {
      "ABSORB": "吸収する",
      "INTEGRATE": "統合する",
      "DIGEST": "消化する"
    },
    "distractors": ["SEPARATE", "REJECT", "EXCLUDE", "ISOLATE"],
    "meanings_expanded": ["同化する", "吸収する", "自分のものにする"],
    "contexts": [
      {
        "parts": ["Immigrants often try to", "into the new culture."],
        "full": "Immigrants often try to assimilate into the new culture.",
        "jp": "移民はしばしば新しい文化に同化しようとする。",
        "is_correct": true
      },
      {
        "parts": ["Water helps to", "plants."],
        "full": "Water helps to grow plants.",
        "jp": "水は植物を育てるのに役立つ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 60,
    "word": "ASSIST",
    "meaning_core": "助ける",
    "syllables": [
      { "text": "as", "type": "weak" },
      { "text": "SIST", "type": "strong" }
    ],
    "synonyms": {
      "HELP": "手伝う",
      "AID": "援助する",
      "SUPPORT": "支持する"
    },
    "distractors": ["HINDER", "BLOCK", "PREVENT", "STOP"],
    "meanings_expanded": ["助ける", "手伝う", "援助する"],
    "contexts": [
      {
        "parts": ["The nurse will", "the doctor during surgery."],
        "full": "The nurse will assist the doctor during surgery.",
        "jp": "看護師は手術中に医師を補助する。",
        "is_correct": true
      },
      {
        "parts": ["Please", "me alone."],
        "full": "Please leave me alone.",
        "jp": "私を放っておいてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 61,
    "word": "ASSOCIATE",
    "meaning_core": "関連づける",
    "syllables": [
      { "text": "as", "type": "weak" },
      { "text": "SO", "type": "strong" },
      { "text": "ci", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "CONNECT": "結びつける",
      "LINK": "リンクさせる",
      "RELATE": "関係させる"
    },
    "distractors": ["SEPARATE", "DISCONNECT", "DIVIDE", "ISOLATE"],
    "meanings_expanded": ["関連づける", "連想する", "交際する"],
    "contexts": [
      {
        "parts": ["People often", "green with nature."],
        "full": "People often associate green with nature.",
        "jp": "人々はしばしば緑を自然と関連づける。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "the wires."],
        "full": "Don't cut the wires.",
        "jp": "ワイヤーを切らないで。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 62,
    "word": "ASSUME",
    "meaning_core": "仮定する",
    "syllables": [
      { "text": "as", "type": "weak" },
      { "text": "SUME", "type": "strong" }
    ],
    "synonyms": {
      "PRESUME": "推定する",
      "SUPPOSE": "思う",
      "UNDERTAKE": "引き受ける"
    },
    "distractors": ["KNOW", "PROVE", "VERIFY", "DOUBT"],
    "meanings_expanded": ["仮定する", "思い込む", "（責任などを）引き受ける"],
    "contexts": [
      {
        "parts": ["I", "you are tired after the trip."],
        "full": "I assume you are tired after the trip.",
        "jp": "旅行の後で君は疲れているだろうと思う。",
        "is_correct": true
      },
      {
        "parts": ["I", "the answer is correct."],
        "full": "I know the answer is correct.",
        "jp": "私はその答えが正しいと知っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 63,
    "word": "ASSURE",
    "meaning_core": "保証する",
    "syllables": [
      { "text": "as", "type": "weak" },
      { "text": "SURE", "type": "strong" }
    ],
    "synonyms": {
      "GUARANTEE": "保証する",
      "PROMISE": "約束する",
      "CONVINCE": "納得させる"
    },
    "distractors": ["ALARM", "WORRY", "DOUBT", "THREATEN"],
    "meanings_expanded": ["保証する", "請け合う", "安心させる"],
    "contexts": [
      {
        "parts": ["I can", "you that he is safe."],
        "full": "I can assure you that he is safe.",
        "jp": "彼が無事であることを君に保証する。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the door is locked."],
        "full": "Please check if the door is locked.",
        "jp": "ドアが施錠されているか確認してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 64,
    "word": "ASTONISH",
    "meaning_core": "驚かせる",
    "syllables": [
      { "text": "as", "type": "weak" },
      { "text": "TON", "type": "strong" },
      { "text": "ish", "type": "weak" }
    ],
    "synonyms": {
      "SURPRISE": "驚かす",
      "AMAZE": "びっくりさせる",
      "SHOCK": "衝撃を与える"
    },
    "distractors": ["BORE", "CALM", "EXPECT", "SOOTHE"],
    "meanings_expanded": ["ひどく驚かせる", "びっくりさせる"],
    "contexts": [
      {
        "parts": ["His magic tricks always", "the audience."],
        "full": "His magic tricks always astonish the audience.",
        "jp": "彼の手品はいつも観客を驚かせる。",
        "is_correct": true
      },
      {
        "parts": ["The lecture will", "you."],
        "full": "The lecture will bore you.",
        "jp": "その講義は君を退屈させるだろう。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 65,
    "word": "ATMOSPHERE",
    "meaning_core": "雰囲気",
    "syllables": [
      { "text": "AT", "type": "strong" },
      { "text": "mos", "type": "weak" },
      { "text": "phere", "type": "weak" }
    ],
    "synonyms": {
      "MOOD": "気分",
      "AMBIANCE": "環境",
      "AIR": "空気"
    },
    "distractors": ["VACUUM", "VOID", "SOLID", "NOTHINGNESS"],
    "meanings_expanded": ["雰囲気", "大気", "空気"],
    "contexts": [
      {
        "parts": ["The restaurant has a cozy", "."],
        "full": "The restaurant has a cozy atmosphere.",
        "jp": "そのレストランは居心地の良い雰囲気だ。",
        "is_correct": true
      },
      {
        "parts": ["The earth orbits the", "."],
        "full": "The earth orbits the sun.",
        "jp": "地球は太陽の周りを回る。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 66,
    "word": "ATTACH",
    "meaning_core": "取り付ける",
    "syllables": [
      { "text": "at", "type": "weak" },
      { "text": "TACH", "type": "strong" }
    ],
    "synonyms": {
      "FASTEN": "留める",
      "CONNECT": "つなぐ",
      "AFFIX": "貼る"
    },
    "distractors": ["DETACH", "REMOVE", "SEPARATE", "LOOSEN"],
    "meanings_expanded": ["取り付ける", "添付する", "愛着を持たせる"],
    "contexts": [
      {
        "parts": ["Please", "a photo to your application."],
        "full": "Please attach a photo to your application.",
        "jp": "申込書に写真を添付してください。",
        "is_correct": true
      },
      {
        "parts": ["Please", "your seatbelt."],
        "full": "Please unfasten your seatbelt.",
        "jp": "シートベルトを外してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 67,
    "word": "ATTAIN",
    "meaning_core": "達成する",
    "syllables": [
      { "text": "at", "type": "weak" },
      { "text": "TAIN", "type": "strong" }
    ],
    "synonyms": {
      "ACHIEVE": "成し遂げる",
      "REACH": "到達する",
      "ACCOMPLISH": "完遂する"
    },
    "distractors": ["FAIL", "LOSE", "MISS", "ABANDON"],
    "meanings_expanded": ["達成する", "到達する", "手に入れる"],
    "contexts": [
      {
        "parts": ["He worked hard to", "his goals."],
        "full": "He worked hard to attain his goals.",
        "jp": "彼は目標を達成するために懸命に働いた。",
        "is_correct": true
      },
      {
        "parts": ["I hope to", "the bus."],
        "full": "I hope to catch the bus.",
        "jp": "バスに間に合うといいな。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 68,
    "word": "ATTEMPT",
    "meaning_core": "試みる",
    "syllables": [
      { "text": "at", "type": "weak" },
      { "text": "TEMPT", "type": "strong" }
    ],
    "synonyms": {
      "TRY": "試す",
      "ENDEAVOR": "努力する",
      "SEEK": "努める"
    },
    "distractors": ["GIVE UP", "QUIT", "SUCCEED", "IGNORE"],
    "meanings_expanded": ["試みる", "企てる", "試み"],
    "contexts": [
      {
        "parts": ["Don't", "to do it alone."],
        "full": "Don't attempt to do it alone.",
        "jp": "一人でやろうとしないで。",
        "is_correct": true
      },
      {
        "parts": ["I", "to eat dinner."],
        "full": "I want to eat dinner.",
        "jp": "私は夕食を食べたい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 69,
    "word": "ATTEND",
    "meaning_core": "出席する",
    "syllables": [
      { "text": "at", "type": "weak" },
      { "text": "TEND", "type": "strong" }
    ],
    "synonyms": {
      "PRESENT": "出席している",
      "JOIN": "参加する",
      "SERVE": "仕える"
    },
    "distractors": ["MISS", "ABSENT", "LEAVE", "IGNORE"],
    "meanings_expanded": ["出席する", "世話をする", "注意を払う"],
    "contexts": [
      {
        "parts": ["I will", "the meeting tomorrow."],
        "full": "I will attend the meeting tomorrow.",
        "jp": "私は明日の会議に出席するつもりだ。",
        "is_correct": true
      },
      {
        "parts": ["I", "to go home."],
        "full": "I want to go home.",
        "jp": "私は家に帰りたい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 70,
    "word": "ATTRIBUTE",
    "meaning_core": "～のせいにする",
    "syllables": [
      { "text": "at", "type": "weak" },
      { "text": "TRIB", "type": "strong" },
      { "text": "ute", "type": "weak" }
    ],
    "synonyms": {
      "ASCRIBE": "～に帰する",
      "CREDIT": "功績があるとする",
      "IMPUTE": "転嫁する"
    },
    "distractors": ["DENY", "DISCONNECT", "SEPARATE", "REMOVE"],
    "meanings_expanded": ["～のせいにする", "～のおかげと考える", "特質"],
    "contexts": [
      {
        "parts": ["He", "his success to hard work."],
        "full": "He attributes his success to hard work.",
        "jp": "彼は成功を勤勉のおかげだと考えている。",
        "is_correct": true
      },
      {
        "parts": ["I", "to the club."],
        "full": "I contribute to the club.",
        "jp": "私はそのクラブに貢献している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 71,
    "word": "AUDIBLE",
    "meaning_core": "聞こえる",
    "syllables": [
      { "text": "AU", "type": "strong" },
      { "text": "di", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "PERCEPTIBLE": "知覚できる",
      "DISTINCT": "はっきりした",
      "CLEAR": "明瞭な"
    },
    "distractors": ["SILENT", "INVISIBLE", "MUTE", "QUIET"],
    "meanings_expanded": ["聞こえる", "聞き取れる"],
    "contexts": [
      {
        "parts": ["Her voice was barely", "above the noise."],
        "full": "Her voice was barely audible above the noise.",
        "jp": "騒音の中で彼女の声はかろうじて聞こえた。",
        "is_correct": true
      },
      {
        "parts": ["The ghost was", "to the eye."],
        "full": "The ghost was invisible to the eye.",
        "jp": "幽霊は目に見えなかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 72,
    "word": "AUGMENT",
    "meaning_core": "増加させる",
    "syllables": [
      { "text": "aug", "type": "weak" },
      { "text": "MENT", "type": "strong" }
    ],
    "synonyms": {
      "INCREASE": "増やす",
      "ENHANCE": "高める",
      "BOOST": "押し上げる"
    },
    "distractors": ["DECREASE", "REDUCE", "LOWER", "SHORTEN"],
    "meanings_expanded": ["増加させる", "増大させる", "補う"],
    "contexts": [
      {
        "parts": ["He took a second job to", "his income."],
        "full": "He took a second job to augment his income.",
        "jp": "彼は収入を増やすために副業をした。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the waste."],
        "full": "Please reduce the waste.",
        "jp": "無駄を減らしてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 73,
    "word": "AUTHENTIC",
    "meaning_core": "本物の",
    "syllables": [
      { "text": "au", "type": "weak" },
      { "text": "THEN", "type": "strong" },
      { "text": "tic", "type": "weak" }
    ],
    "synonyms": {
      "GENUINE": "正真正銘の",
      "REAL": "本物の",
      "ORIGINAL": "独自の"
    },
    "distractors": ["FAKE", "FALSE", "COUNTERFEIT", "ARTIFICIAL"],
    "meanings_expanded": ["本物の", "信頼できる", "真正の"],
    "contexts": [
      {
        "parts": ["This restaurant serves", "Italian food."],
        "full": "This restaurant serves authentic Italian food.",
        "jp": "このレストランは本場のイタリア料理を出す。",
        "is_correct": true
      },
      {
        "parts": ["He bought a", "watch."],
        "full": "He bought a fake watch.",
        "jp": "彼は偽物の時計を買った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 74,
    "word": "AUTHORITY",
    "meaning_core": "権威",
    "syllables": [
      { "text": "au", "type": "weak" },
      { "text": "THOR", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "POWER": "権力",
      "CONTROL": "支配",
      "EXPERT": "専門家"
    },
    "distractors": ["WEAKNESS", "SERVANT", "FOLLOWER", "NOVICE"],
    "meanings_expanded": ["権威", "権限", "当局"],
    "contexts": [
      {
        "parts": ["She is an", "on ancient history."],
        "full": "She is an authority on ancient history.",
        "jp": "彼女は古代史の権威だ。",
        "is_correct": true
      },
      {
        "parts": ["I have no", "to do that."],
        "full": "I have no desire to do that.",
        "jp": "私にはそれをする願望がない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 75,
    "word": "AUTHORIZE",
    "meaning_core": "許可する",
    "syllables": [
      { "text": "AU", "type": "strong" },
      { "text": "thor", "type": "weak" },
      { "text": "ize", "type": "weak" }
    ],
    "synonyms": {
      "PERMIT": "許可する",
      "ALLOW": "許す",
      "APPROVE": "承認する"
    },
    "distractors": ["FORBID", "BAN", "PROHIBIT", "DENY"],
    "meanings_expanded": ["権限を与える", "認可する"],
    "contexts": [
      {
        "parts": ["Only the manager can", "refunds."],
        "full": "Only the manager can authorize refunds.",
        "jp": "マネージャーだけが返金を許可できる。",
        "is_correct": true
      },
      {
        "parts": ["Please", "smoking here."],
        "full": "Please stop smoking here.",
        "jp": "ここでタバコを吸うのはやめてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 76,
    "word": "AUTOMATIC",
    "meaning_core": "自動の",
    "syllables": [
      { "text": "au", "type": "weak" },
      { "text": "to", "type": "weak" },
      { "text": "MAT", "type": "strong" },
      { "text": "ic", "type": "weak" }
    ],
    "synonyms": {
      "MECHANICAL": "機械的な",
      "INSTANT": "即座の",
      "INVOLUNTARY": "無意識の"
    },
    "distractors": ["MANUAL", "HANDMADE", "DELIBERATE", "SLOW"],
    "meanings_expanded": ["自動の", "無意識の", "機械的な"],
    "contexts": [
      {
        "parts": ["The doors are", "."],
        "full": "The doors are automatic.",
        "jp": "そのドアは自動だ。",
        "is_correct": true
      },
      {
        "parts": ["This car has a", "transmission."],
        "full": "This car has a manual transmission.",
        "jp": "この車はマニュアル車だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 77,
    "word": "AUTONOMY",
    "meaning_core": "自治",
    "syllables": [
      { "text": "au", "type": "weak" },
      { "text": "TON", "type": "strong" },
      { "text": "o", "type": "weak" },
      { "text": "my", "type": "weak" }
    ],
    "synonyms": {
      "INDEPENDENCE": "独立",
      "SELF-RULE": "自治",
      "FREEDOM": "自由"
    },
    "distractors": ["DEPENDENCE", "SLAVERY", "CONTROL", "SUBJECTION"],
    "meanings_expanded": ["自治権", "自主性", "自律"],
    "contexts": [
      {
        "parts": ["The region demanded greater", "."],
        "full": "The region demanded greater autonomy.",
        "jp": "その地域はより大きな自治権を要求した。",
        "is_correct": true
      },
      {
        "parts": ["Children rely on their parents for", "."],
        "full": "Children rely on their parents for protection.",
        "jp": "子供は保護を求めて親に頼る。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 78,
    "word": "AUXILIARY",
    "meaning_core": "補助の",
    "syllables": [
      { "text": "aux", "type": "weak" },
      { "text": "IL", "type": "strong" },
      { "text": "ia", "type": "weak" },
      { "text": "ry", "type": "weak" }
    ],
    "synonyms": {
      "SUPPLEMENTARY": "補足の",
      "ADDITIONAL": "追加の",
      "BACKUP": "予備の"
    },
    "distractors": ["MAIN", "PRIMARY", "CHIEF", "MAJOR"],
    "meanings_expanded": ["補助の", "予備の", "助動詞"],
    "contexts": [
      {
        "parts": ["The hospital has an", "power generator."],
        "full": "The hospital has an auxiliary power generator.",
        "jp": "その病院には予備の発電機がある。",
        "is_correct": true
      },
      {
        "parts": ["This is the", "entrance."],
        "full": "This is the main entrance.",
        "jp": "これが正面玄関だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 79,
    "word": "AVAIL",
    "meaning_core": "役立つ",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "VAIL", "type": "strong" }
    ],
    "synonyms": {
      "BENEFIT": "利益になる",
      "HELP": "助けになる",
      "USE": "益"
    },
    "distractors": ["HARM", "FAIL", "HINDER", "LOSE"],
    "meanings_expanded": ["役立つ", "効力", "（～ oneself ofで）利用する"],
    "contexts": [
      {
        "parts": ["Our efforts were to no", "."],
        "full": "Our efforts were to no avail.",
        "jp": "私たちの努力は無駄だった。",
        "is_correct": true
      },
      {
        "parts": ["I will", "myself of this opportunity."],
        "full": "I will avail myself of this opportunity.",
        "jp": "私はこの機会を利用するつもりだ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 80,
    "word": "AVAILABLE",
    "meaning_core": "利用できる",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "VAIL", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "ACCESSIBLE": "アクセスできる",
      "OBTAINABLE": "入手可能な",
      "FREE": "空いている"
    },
    "distractors": ["OCCUPIED", "TAKEN", "BUSY", "UNAVAILABLE"],
    "meanings_expanded": ["利用できる", "入手できる", "（人が）手が空いている"],
    "contexts": [
      {
        "parts": ["Is this seat", "?"],
        "full": "Is this seat available?",
        "jp": "この席は空いていますか？",
        "is_correct": true
      },
      {
        "parts": ["The doctor is", "right now."],
        "full": "The doctor is busy right now.",
        "jp": "医者は今忙しい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 81,
    "word": "AVENUE",
    "meaning_core": "大通り",
    "syllables": [
      { "text": "AV", "type": "strong" },
      { "text": "e", "type": "weak" },
      { "text": "nue", "type": "weak" }
    ],
    "synonyms": {
      "STREET": "通り",
      "ROUTE": "道",
      "METHOD": "手段"
    },
    "distractors": ["ALLEY", "WALL", "BARRIER", "BLOCK"],
    "meanings_expanded": ["大通り", "手段", "道"],
    "contexts": [
      {
        "parts": ["We should explore every", "to solve the problem."],
        "full": "We should explore every avenue to solve the problem.",
        "jp": "問題解決のためにあらゆる手段を模索すべきだ。",
        "is_correct": true
      },
      {
        "parts": ["He lives on Fifth", "."],
        "full": "He lives on Fifth Avenue.",
        "jp": "彼は5番街に住んでいる。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 82,
    "word": "AVERT",
    "meaning_core": "避ける",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "VERT", "type": "strong" }
    ],
    "synonyms": {
      "PREVENT": "防ぐ",
      "AVOID": "避ける",
      "TURN AWAY": "そらす"
    },
    "distractors": ["CAUSE", "FACE", "CONFRONT", "INVITE"],
    "meanings_expanded": ["（危険などを）避ける", "（目などを）そらす"],
    "contexts": [
      {
        "parts": ["Diplomats tried to", "a war."],
        "full": "Diplomats tried to avert a war.",
        "jp": "外交官たちは戦争を回避しようとした。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "your eyes."],
        "full": "Don't avert your eyes.",
        "jp": "目をそらすな。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 83,
    "word": "AVIATION",
    "meaning_core": "航空",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "vi", "type": "weak" },
      { "text": "A", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "FLIGHT": "飛行",
      "AERONAUTICS": "航空学",
      "FLYING": "飛行"
    },
    "distractors": ["DRIVING", "SAILING", "WALKING", "DIVING"],
    "meanings_expanded": ["航空", "飛行", "航空産業"],
    "contexts": [
      {
        "parts": ["He works in the", "industry."],
        "full": "He works in the aviation industry.",
        "jp": "彼は航空業界で働いている。",
        "is_correct": true
      },
      {
        "parts": ["She is studying", "engineering."],
        "full": "She is studying marine engineering.",
        "jp": "彼女は海洋工学を学んでいる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 84,
    "word": "AVOID",
    "meaning_core": "避ける",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "VOID", "type": "strong" }
    ],
    "synonyms": {
      "EVADE": "逃れる",
      "SHUN": "避ける",
      "ESCAPE": "逃げる"
    },
    "distractors": ["SEEK", "CONFRONT", "FACE", "MEET"],
    "meanings_expanded": ["避ける", "回避する", "無効にする"],
    "contexts": [
      {
        "parts": ["You should", "making mistakes."],
        "full": "You should avoid making mistakes.",
        "jp": "間違いを犯さないようにすべきだ。",
        "is_correct": true
      },
      {
        "parts": ["Try to", "the traffic jam."],
        "full": "Try to avoid the traffic jam.",
        "jp": "交通渋滞を避けるようにしなさい。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 85,
    "word": "AWAIT",
    "meaning_core": "待つ",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "WAIT", "type": "strong" }
    ],
    "synonyms": {
      "WAIT FOR": "～を待つ",
      "EXPECT": "予期する",
      "ANTICIPATE": "楽しみに待つ"
    },
    "distractors": ["LEAVE", "DEPART", "IGNORE", "FORGET"],
    "meanings_expanded": ["待つ", "待ち受ける"],
    "contexts": [
      {
        "parts": ["We", "your reply."],
        "full": "We await your reply.",
        "jp": "お返事をお待ちしております。",
        "is_correct": true
      },
      {
        "parts": ["A surprise", "you."],
        "full": "A surprise awaits you.",
        "jp": "驚きがあなたを待っている。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 86,
    "word": "AWARD",
    "meaning_core": "賞",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "WARD", "type": "strong" }
    ],
    "synonyms": {
      "PRIZE": "賞",
      "GRANT": "授与する",
      "REWARD": "報酬"
    },
    "distractors": ["PENALTY", "FINE", "PUNISHMENT", "LOSS"],
    "meanings_expanded": ["賞", "授与する", "裁定"],
    "contexts": [
      {
        "parts": ["She won an", "for her acting."],
        "full": "She won an award for her acting.",
        "jp": "彼女は演技で賞を獲得した。",
        "is_correct": true
      },
      {
        "parts": ["The jury will", "damages."],
        "full": "The jury will award damages.",
        "jp": "陪審員は損害賠償を認めるだろう。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 87,
    "word": "AWARE",
    "meaning_core": "気づいている",
    "syllables": [
      { "text": "a", "type": "weak" },
      { "text": "WARE", "type": "strong" }
    ],
    "synonyms": {
      "CONSCIOUS": "意識している",
      "MINDFUL": "心に留めている",
      "INFORMED": "知らされている"
    },
    "distractors": ["IGNORANT", "UNAWARE", "BLIND", "OBLIVIOUS"],
    "meanings_expanded": ["気づいている", "知っている", "意識の高い"],
    "contexts": [
      {
        "parts": ["Are you", "of the risks?"],
        "full": "Are you aware of the risks?",
        "jp": "リスクに気づいていますか？",
        "is_correct": true
      },
      {
        "parts": ["He was", "of the time."],
        "full": "He was unaware of the time.",
        "jp": "彼は時間に気づいていなかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 88,
    "word": "AWE",
    "meaning_core": "畏敬",
    "syllables": [
      { "text": "AWE", "type": "strong" }
    ],
    "synonyms": {
      "WONDER": "驚異",
      "ADMIRATION": "称賛",
      "RESPECT": "尊敬"
    },
    "distractors": ["CONTEMPT", "DISGUST", "SCORN", "BOREDOM"],
    "meanings_expanded": ["畏敬", "畏怖", "恐れ多いと思わせる"],
    "contexts": [
      {
        "parts": ["We watched in", "as the rocket launched."],
        "full": "We watched in awe as the rocket launched.",
        "jp": "ロケットが打ち上がるのを我々は畏敬の念を持って見守った。",
        "is_correct": true
      },
      {
        "parts": ["I felt", "at the beautiful view."],
        "full": "I felt awe at the beautiful view.",
        "jp": "美しい景色に畏敬の念を抱いた。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 89,
    "word": "AWKWARD",
    "meaning_core": "気まずい",
    "syllables": [
      { "text": "AWK", "type": "strong" },
      { "text": "ward", "type": "weak" }
    ],
    "synonyms": {
      "CLUMSY": "不器用な",
      "UNCOMFORTABLE": "心地悪い",
      "EMBARRASSING": "恥ずかしい"
    },
    "distractors": ["GRACEFUL", "COMFORTABLE", "EASY", "NATURAL"],
    "meanings_expanded": ["気まずい", "不器用な", "扱いにくい"],
    "contexts": [
      {
        "parts": ["There was an", "silence."],
        "full": "There was an awkward silence.",
        "jp": "気まずい沈黙があった。",
        "is_correct": true
      },
      {
        "parts": ["He is an", "dancer."],
        "full": "He is an awkward dancer.",
        "jp": "彼は不器用なダンサーだ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 90,
    "word": "BANISH",
    "meaning_core": "追放する",
    "syllables": [
      { "text": "BAN", "type": "strong" },
      { "text": "ish", "type": "weak" }
    ],
    "synonyms": {
      "EXILE": "追放する",
      "EXPEL": "追い出す",
      "DEPORT": "強制送還する"
    },
    "distractors": ["WELCOME", "INVITE", "ADMIT", "KEEP"],
    "meanings_expanded": ["追放する", "追い払う", "心から取り除く"],
    "contexts": [
      {
        "parts": ["The king decided to", "the traitor."],
        "full": "The king decided to banish the traitor.",
        "jp": "王は裏切り者を追放することに決めた。",
        "is_correct": true
      },
      {
        "parts": ["Try to", "negative thoughts."],
        "full": "Try to banish negative thoughts.",
        "jp": "ネガティブな考えを追い払うようにしなさい。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 91,
    "word": "BANKRUPT",
    "meaning_core": "破産した",
    "syllables": [
      { "text": "BANK", "type": "strong" },
      { "text": "rupt", "type": "weak" }
    ],
    "synonyms": {
      "INSOLVENT": "支払い不能の",
      "RUINED": "破滅した",
      "BROKE": "一文無しの"
    },
    "distractors": ["WEALTHY", "RICH", "PROFITABLE", "SUCCESSFUL"],
    "meanings_expanded": ["破産した", "支払い不能の", "破綻した"],
    "contexts": [
      {
        "parts": ["The company went", "after the crisis."],
        "full": "The company went bankrupt after the crisis.",
        "jp": "その会社は危機の後に破産した。",
        "is_correct": true
      },
      {
        "parts": ["He is a", "man."],
        "full": "He is a wealthy man.",
        "jp": "彼は裕福な男だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 92,
    "word": "BARELY",
    "meaning_core": "かろうじて",
    "syllables": [
      { "text": "BARE", "type": "strong" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "HARDLY": "ほとんど～ない",
      "SCARCELY": "かろうじて",
      "ONLY": "～だけ"
    },
    "distractors": ["FULLY", "COMPLETELY", "EASILY", "TOTALLY"],
    "meanings_expanded": ["かろうじて", "ほとんど～ない", "わずかに"],
    "contexts": [
      {
        "parts": ["I could", "hear him speak."],
        "full": "I could barely hear him speak.",
        "jp": "彼が話すのがかろうじて聞こえた。",
        "is_correct": true
      },
      {
        "parts": ["She was", "awake."],
        "full": "She was fully awake.",
        "jp": "彼女は完全に目が覚めていた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 93,
    "word": "BARGAIN",
    "meaning_core": "取引",
    "syllables": [
      { "text": "BAR", "type": "strong" },
      { "text": "gain", "type": "weak" }
    ],
    "synonyms": {
      "DEAL": "取引",
      "AGREEMENT": "合意",
      "DISCOUNT": "値引き"
    },
    "distractors": ["RIP-OFF", "LOSS", "DEBT", "PENALTY"],
    "meanings_expanded": ["取引", "契約", "お買い得品"],
    "contexts": [
      {
        "parts": ["I struck a", "with the seller."],
        "full": "I struck a bargain with the seller.",
        "jp": "私は売り手と取引をまとめた。",
        "is_correct": true
      },
      {
        "parts": ["This car was a real", "."],
        "full": "This car was a real rip-off.",
        "jp": "この車は本当にぼったくりだった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 94,
    "word": "BARRIER",
    "meaning_core": "障壁",
    "syllables": [
      { "text": "BAR", "type": "strong" },
      { "text": "ri", "type": "weak" },
      { "text": "er", "type": "weak" }
    ],
    "synonyms": {
      "OBSTACLE": "障害",
      "BLOCK": "妨げ",
      "HURDLE": "ハードル"
    },
    "distractors": ["OPENING", "BRIDGE", "LINK", "AID"],
    "meanings_expanded": ["障壁", "防壁", "障害物"],
    "contexts": [
      {
        "parts": ["Language can be a", "to communication."],
        "full": "Language can be a barrier to communication.",
        "jp": "言語はコミュニケーションの障壁になり得る。",
        "is_correct": true
      },
      {
        "parts": ["We built a", "across the river."],
        "full": "We built a bridge across the river.",
        "jp": "私たちは川に橋を架けた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 95,
    "word": "BASIC",
    "meaning_core": "基本的な",
    "syllables": [
      { "text": "BA", "type": "strong" },
      { "text": "sic", "type": "weak" }
    ],
    "synonyms": {
      "FUNDAMENTAL": "根本的な",
      "ESSENTIAL": "不可欠な",
      "PRIMARY": "初歩的な"
    },
    "distractors": ["ADVANCED", "COMPLEX", "SECONDARY", "MINOR"],
    "meanings_expanded": ["基本的な", "基礎の", "根本的な"],
    "contexts": [
      {
        "parts": ["Food and water are", "needs."],
        "full": "Food and water are basic needs.",
        "jp": "食料と水は基本的な欲求だ。",
        "is_correct": true
      },
      {
        "parts": ["This is an", "course."],
        "full": "This is an advanced course.",
        "jp": "これは上級コースだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 96,
    "word": "BASIS",
    "meaning_core": "基礎",
    "syllables": [
      { "text": "BA", "type": "strong" },
      { "text": "sis", "type": "weak" }
    ],
    "synonyms": {
      "FOUNDATION": "土台",
      "BASE": "基盤",
      "GROUND": "根拠"
    },
    "distractors": ["TOP", "RESULT", "OUTCOME", "END"],
    "meanings_expanded": ["基礎", "根拠", "基準"],
    "contexts": [
      {
        "parts": ["Trust is the", "of friendship."],
        "full": "Trust is the basis of friendship.",
        "jp": "信頼は友情の基礎だ。",
        "is_correct": true
      },
      {
        "parts": ["What is the", "for your argument?"],
        "full": "What is the outcome of your argument?",
        "jp": "あなたの議論の結果は何ですか？",
        "is_correct": false
      }
    ]
  },
  {
    "id": 97,
    "word": "BEAR",
    "meaning_core": "耐える",
    "syllables": [
      { "text": "BEAR", "type": "strong" }
    ],
    "synonyms": {
      "ENDURE": "我慢する",
      "TOLERATE": "許容する",
      "STAND": "耐える"
    },
    "distractors": ["COLLAPSE", "SURRENDER", "YIELD", "DROP"],
    "meanings_expanded": ["耐える", "（責任を）負う", "（実を）結ぶ"],
    "contexts": [
      {
        "parts": ["I cannot", "the pain anymore."],
        "full": "I cannot bear the pain anymore.",
        "jp": "私はもう痛みに耐えられない。",
        "is_correct": true
      },
      {
        "parts": ["The tree will", "fruit soon."],
        "full": "The tree will drop fruit soon.",
        "jp": "その木はまもなく実を落とすだろう。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 98,
    "word": "BEHAVE",
    "meaning_core": "振る舞う",
    "syllables": [
      { "text": "be", "type": "weak" },
      { "text": "HAVE", "type": "strong" }
    ],
    "synonyms": {
      "ACT": "行動する",
      "CONDUCT": "振る舞う",
      "FUNCTION": "機能する"
    },
    "distractors": ["MISBEHAVE", "STOP", "REST", "IDLE"],
    "meanings_expanded": ["振る舞う", "行儀よくする", "作動する"],
    "contexts": [
      {
        "parts": ["Please", "yourself at the party."],
        "full": "Please behave yourself at the party.",
        "jp": "パーティーでは行儀よくしなさい。",
        "is_correct": true
      },
      {
        "parts": ["The children did not", "well."],
        "full": "The children did not sleep well.",
        "jp": "子供たちはよく眠れなかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 99,
    "word": "BEHAVIOR",
    "meaning_core": "振る舞い",
    "syllables": [
      { "text": "be", "type": "weak" },
      { "text": "HAV", "type": "strong" },
      { "text": "ior", "type": "weak" }
    ],
    "synonyms": {
      "CONDUCT": "品行",
      "ACTION": "行動",
      "MANNER": "態度"
    },
    "distractors": ["THOUGHT", "MIND", "BELIEF", "FEELING"],
    "meanings_expanded": ["振る舞い", "行動", "習性"],
    "contexts": [
      {
        "parts": ["His", "was strange yesterday."],
        "full": "His behavior was strange yesterday.",
        "jp": "昨日の彼の振る舞いは奇妙だった。",
        "is_correct": true
      },
      {
        "parts": ["I don't understand your", "."],
        "full": "I don't understand your thoughts.",
        "jp": "あなたの考えが理解できません。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 100,
    "word": "BELIEF",
    "meaning_core": "信念",
    "syllables": [
      { "text": "be", "type": "weak" },
      { "text": "LIEF", "type": "strong" }
    ],
    "synonyms": {
      "FAITH": "信仰",
      "TRUST": "信頼",
      "CONVICTION": "確信"
    },
    "distractors": ["DOUBT", "DISBELIEF", "SKEPTICISM", "FACT"],
    "meanings_expanded": ["信念", "信じること", "信仰"],
    "contexts": [
      {
        "parts": ["He has a strong", "in god."],
        "full": "He has a strong belief in god.",
        "jp": "彼は神に対して強い信仰を持っている。",
        "is_correct": true
      },
      {
        "parts": ["There is no", "that he is guilty."],
        "full": "There is no doubt that he is guilty.",
        "jp": "彼が有罪であることに疑いはない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 101,
    "word": "COINCIDENCE",
    "meaning_core": "偶然の一致",
    "syllables": [
      { "text": "co", "type": "weak" },
      { "text": "IN", "type": "strong" },
      { "text": "ci", "type": "weak" },
      { "text": "dence", "type": "weak" }
    ],
    "synonyms": {
      "CHANCE": "偶然",
      "ACCIDENT": "予期せぬ出来事",
      "LUCK": "運"
    },
    "distractors": ["PLAN", "INTENTION", "PURPOSE", "DESIGN"],
    "meanings_expanded": ["偶然の一致", "同時発生", "暗合"],
    "contexts": [
      {
        "parts": ["It was a mere", "that we met."],
        "full": "It was a mere coincidence that we met.",
        "jp": "私たちが会ったのは単なる偶然だった。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "event."],
        "full": "This is a planned event.",
        "jp": "これは計画されたイベントだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 102,
    "word": "COMMENCE",
    "meaning_core": "開始する",
    "syllables": [
      { "text": "com", "type": "weak" },
      { "text": "MENCE", "type": "strong" }
    ],
    "synonyms": {
      "START": "始める",
      "BEGIN": "開始する",
      "INITIATE": "着手する"
    },
    "distractors": ["FINISH", "END", "STOP", "CEASE"],
    "meanings_expanded": ["開始する", "始まる", "着手する"],
    "contexts": [
      {
        "parts": ["The ceremony will", "at noon."],
        "full": "The ceremony will commence at noon.",
        "jp": "式典は正午に開始される。",
        "is_correct": true
      },
      {
        "parts": ["Please", "working immediately."],
        "full": "Please stop working immediately.",
        "jp": "直ちに作業を中止してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 103,
    "word": "COMMERCIAL",
    "meaning_core": "商業の",
    "syllables": [
      { "text": "com", "type": "weak" },
      { "text": "MER", "type": "strong" },
      { "text": "cial", "type": "weak" }
    ],
    "synonyms": {
      "BUSINESS": "ビジネスの",
      "TRADE": "貿易の",
      "PROFITABLE": "営利的な"
    },
    "distractors": ["PRIVATE", "PERSONAL", "NONPROFIT", "DOMESTIC"],
    "meanings_expanded": ["商業の", "営利的な", "コマーシャル"],
    "contexts": [
      {
        "parts": ["This area is zoned for", "use."],
        "full": "This area is zoned for commercial use.",
        "jp": "この地域は商業利用のために区分されている。",
        "is_correct": true
      },
      {
        "parts": ["He works for a", "organization."],
        "full": "He works for a nonprofit organization.",
        "jp": "彼は非営利団体で働いている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 104,
    "word": "COMMIT",
    "meaning_core": "約束する",
    "syllables": [
      { "text": "com", "type": "weak" },
      { "text": "MIT", "type": "strong" }
    ],
    "synonyms": {
      "PLEDGE": "誓う",
      "PROMISE": "約束する",
      "PERFORM": "（犯罪などを）行う"
    },
    "distractors": ["WITHDRAW", "AVOID", "REFUSE", "DENY"],
    "meanings_expanded": ["～を約束する", "（犯罪などを）犯す", "委ねる"],
    "contexts": [
      {
        "parts": ["He decided to", "himself to the project."],
        "full": "He decided to commit himself to the project.",
        "jp": "彼はそのプロジェクトに専念することを決めた。",
        "is_correct": true
      },
      {
        "parts": ["Did he", "a crime?"],
        "full": "Did he commit a crime?",
        "jp": "彼は犯罪を犯しましたか？",
        "is_correct": true
      }
    ]
  },
  {
    "id": 105,
    "word": "COMPATIBLE",
    "meaning_core": "互換性のある",
    "syllables": [
      { "text": "com", "type": "weak" },
      { "text": "PAT", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "CONSISTENT": "一致する",
      "SUITABLE": "適合する",
      "HARMONIOUS": "調和した"
    },
    "distractors": ["DIFFERENT", "OPPOSITE", "CONFLICTING", "UNSUITABLE"],
    "meanings_expanded": ["互換性のある", "両立する", "相性が良い"],
    "contexts": [
      {
        "parts": ["This software is", "with Mac."],
        "full": "This software is compatible with Mac.",
        "jp": "このソフトウェアはMacと互換性がある。",
        "is_correct": true
      },
      {
        "parts": ["They are a very", "couple."],
        "full": "They are a very compatible couple.",
        "jp": "彼らはとても相性の良いカップルだ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 106,
    "word": "COMPEL",
    "meaning_core": "強制する",
    "syllables": [
      { "text": "com", "type": "weak" },
      { "text": "PEL", "type": "strong" }
    ],
    "synonyms": {
      "FORCE": "強いる",
      "OBLIGE": "義務付ける",
      "COERCE": "強要する"
    },
    "distractors": ["ALLOW", "PERMIT", "LET", "FREE"],
    "meanings_expanded": ["強制する", "無理に～させる"],
    "contexts": [
      {
        "parts": ["Illness might", "him to retire."],
        "full": "Illness might compel him to retire.",
        "jp": "病気が彼に引退を強いるかもしれない。",
        "is_correct": true
      },
      {
        "parts": ["Please", "me to help you."],
        "full": "Please allow me to help you.",
        "jp": "あなたを助けさせてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 107,
    "word": "COMPENSATE",
    "meaning_core": "補う",
    "syllables": [
      { "text": "COM", "type": "strong" },
      { "text": "pen", "type": "weak" },
      { "text": "sate", "type": "weak" }
    ],
    "synonyms": {
      "MAKE UP": "埋め合わせる",
      "REPAY": "返済する",
      "BALANCE": "釣り合わせる"
    },
    "distractors": ["PENALIZE", "FINE", "DAMAGE", "LOSE"],
    "meanings_expanded": ["補う", "償う", "補償する"],
    "contexts": [
      {
        "parts": ["Nothing can", "for the loss."],
        "full": "Nothing can compensate for the loss.",
        "jp": "その損失を埋め合わせることは何ものにもできない。",
        "is_correct": true
      },
      {
        "parts": ["He worked hard to", "his skills."],
        "full": "He worked hard to improve his skills.",
        "jp": "彼はスキルを向上させるために一生懸命働いた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 108,
    "word": "COMPLEX",
    "meaning_core": "複雑な",
    "syllables": [
      { "text": "com", "type": "weak" },
      { "text": "PLEX", "type": "strong" }
    ],
    "synonyms": {
      "COMPLICATED": "込み入った",
      "INTRICATE": "入り組んだ",
      "DIFFICULT": "難しい"
    },
    "distractors": ["SIMPLE", "EASY", "PLAIN", "CLEAR"],
    "meanings_expanded": ["複雑な", "複合の", "コンプレックス"],
    "contexts": [
      {
        "parts": ["The human brain is incredibly", "."],
        "full": "The human brain is incredibly complex.",
        "jp": "人間の脳は信じられないほど複雑だ。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "problem."],
        "full": "This is a simple problem.",
        "jp": "これは単純な問題だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 109,
    "word": "COMPOSER",
    "meaning_core": "作曲家",
    "syllables": [
      { "text": "com", "type": "weak" },
      { "text": "POS", "type": "strong" },
      { "text": "er", "type": "weak" }
    ],
    "synonyms": {
      "MUSICIAN": "音楽家",
      "WRITER": "作家",
      "ARTIST": "芸術家"
    },
    "distractors": ["LISTENER", "AUDIENCE", "CRITIC", "FAN"],
    "meanings_expanded": ["作曲家", "作者"],
    "contexts": [
      {
        "parts": ["Beethoven is a famous", "."],
        "full": "Beethoven is a famous composer.",
        "jp": "ベートーヴェンは有名な作曲家だ。",
        "is_correct": true
      },
      {
        "parts": ["He is a talented", "of poems."],
        "full": "He is a talented writer of poems.",
        "jp": "彼は才能ある詩の作家だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 110,
    "word": "COMPREHENSIVE",
    "meaning_core": "包括的な",
    "syllables": [
      { "text": "com", "type": "weak" },
      { "text": "pre", "type": "weak" },
      { "text": "HEN", "type": "strong" },
      { "text": "sive", "type": "weak" }
    ],
    "synonyms": {
      "COMPLETE": "完全な",
      "THOROUGH": "徹底的な",
      "INCLUSIVE": "すべてを含んだ"
    },
    "distractors": ["PARTIAL", "LIMITED", "INCOMPLETE", "NARROW"],
    "meanings_expanded": ["包括的な", "総合的な", "広範囲の"],
    "contexts": [
      {
        "parts": ["We need a", "plan."],
        "full": "We need a comprehensive plan.",
        "jp": "私たちには包括的な計画が必要だ。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "list."],
        "full": "This is a partial list.",
        "jp": "これは部分的なリストだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 111,
    "word": "COMPULSORY",
    "meaning_core": "義務的な",
    "syllables": [
      { "text": "com", "type": "weak" },
      { "text": "PUL", "type": "strong" },
      { "text": "so", "type": "weak" },
      { "text": "ry", "type": "weak" }
    ],
    "synonyms": {
      "MANDATORY": "必須の",
      "REQUIRED": "求められる",
      "OBLIGATORY": "義務の"
    },
    "distractors": ["OPTIONAL", "VOLUNTARY", "FREE", "UNNECESSARY"],
    "meanings_expanded": ["義務的な", "強制的な", "必修の"],
    "contexts": [
      {
        "parts": ["English is a", "subject."],
        "full": "English is a compulsory subject.",
        "jp": "英語は必修科目だ。",
        "is_correct": true
      },
      {
        "parts": ["Attendance is", "."],
        "full": "Attendance is optional.",
        "jp": "出席は任意だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 112,
    "word": "CONCENTRATE",
    "meaning_core": "集中する",
    "syllables": [
      { "text": "CON", "type": "strong" },
      { "text": "cen", "type": "weak" },
      { "text": "trate", "type": "weak" }
    ],
    "synonyms": {
      "FOCUS": "焦点を合わせる",
      "CENTER": "中心に置く",
      "GATHER": "集める"
    },
    "distractors": ["DISTRACT", "DISPERSE", "IGNORE", "SCATTER"],
    "meanings_expanded": ["集中する", "集結させる", "濃縮する"],
    "contexts": [
      {
        "parts": ["I need to", "on my studies."],
        "full": "I need to concentrate on my studies.",
        "jp": "私は勉強に集中する必要がある。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "while driving."],
        "full": "Don't text while driving.",
        "jp": "運転中にメールをしてはいけない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 113,
    "word": "CONCERNED",
    "meaning_core": "心配して",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "CERNED", "type": "strong" }
    ],
    "synonyms": {
      "WORRIED": "心配な",
      "ANXIOUS": "不安な",
      "INVOLVED": "関わっている"
    },
    "distractors": ["INDIFFERENT", "CALM", "UNINTERESTED", "RELAXED"],
    "meanings_expanded": ["心配して", "関心がある", "関係している"],
    "contexts": [
      {
        "parts": ["I am", "about his health."],
        "full": "I am concerned about his health.",
        "jp": "私は彼の健康を心配している。",
        "is_correct": true
      },
      {
        "parts": ["He is", "with the project."],
        "full": "He is involved with the project.",
        "jp": "彼はそのプロジェクトに関わっている。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 114,
    "word": "CONCISE",
    "meaning_core": "簡潔な",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "CISE", "type": "strong" }
    ],
    "synonyms": {
      "BRIEF": "短い",
      "SHORT": "短い",
      "COMPACT": "コンパクトな"
    },
    "distractors": ["LONG", "WORDY", "LENGTHY", "REPETITIVE"],
    "meanings_expanded": ["簡潔な", "簡明な"],
    "contexts": [
      {
        "parts": ["Please keep your report", "."],
        "full": "Please keep your report concise.",
        "jp": "レポートは簡潔にまとめてください。",
        "is_correct": true
      },
      {
        "parts": ["His speech was very", "."],
        "full": "His speech was very long.",
        "jp": "彼のスピーチはとても長かった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 115,
    "word": "CONDEMN",
    "meaning_core": "非難する",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "DEMN", "type": "strong" }
    ],
    "synonyms": {
      "CRITICIZE": "批判する",
      "BLAME": "責める",
      "DENOUNCE": "公然と非難する"
    },
    "distractors": ["PRAISE", "APPROVE", "SUPPORT", "COMMEND"],
    "meanings_expanded": ["非難する", "有罪を宣告する", "（運命などを）宣告する"],
    "contexts": [
      {
        "parts": ["We must", "violence."],
        "full": "We must condemn violence.",
        "jp": "我々は暴力を非難しなければならない。",
        "is_correct": true
      },
      {
        "parts": ["They", "him for his bravery."],
        "full": "They praised him for his bravery.",
        "jp": "彼らは彼の勇敢さを称賛した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 116,
    "word": "CONFIDENCE",
    "meaning_core": "自信",
    "syllables": [
      { "text": "CON", "type": "strong" },
      { "text": "fi", "type": "weak" },
      { "text": "dence", "type": "weak" }
    ],
    "synonyms": {
      "TRUST": "信頼",
      "ASSURANCE": "確信",
      "BELIEF": "信念"
    },
    "distractors": ["DOUBT", "UNCERTAINTY", "FEAR", "SHYNESS"],
    "meanings_expanded": ["自信", "信頼", "秘密"],
    "contexts": [
      {
        "parts": ["He lacks", "in himself."],
        "full": "He lacks confidence in himself.",
        "jp": "彼は自分に自信がない。",
        "is_correct": true
      },
      {
        "parts": ["I have", "in your ability."],
        "full": "I have faith in your ability.",
        "jp": "私はあなたの能力を信じている。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 117,
    "word": "CONFINE",
    "meaning_core": "閉じ込める",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "FINE", "type": "strong" }
    ],
    "synonyms": {
      "RESTRICT": "制限する",
      "LIMIT": "限定する",
      "IMPRISON": "投獄する"
    },
    "distractors": ["FREE", "RELEASE", "LIBERATE", "EXPAND"],
    "meanings_expanded": ["閉じ込める", "制限する", "（病気で）引きこもらせる"],
    "contexts": [
      {
        "parts": ["Please", "your remarks to the topic."],
        "full": "Please confine your remarks to the topic.",
        "jp": "発言は議題に限定してください。",
        "is_correct": true
      },
      {
        "parts": ["He was", "to bed by illness."],
        "full": "He was confined to bed by illness.",
        "jp": "彼は病気で床に伏せっていた。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 118,
    "word": "CONFIRM",
    "meaning_core": "確認する",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "FIRM", "type": "strong" }
    ],
    "synonyms": {
      "VERIFY": "検証する",
      "CHECK": "チェックする",
      "PROVE": "証明する"
    },
    "distractors": ["DENY", "REFUTE", "CANCEL", "IGNORE"],
    "meanings_expanded": ["確認する", "（予約などを）確定する", "裏付ける"],
    "contexts": [
      {
        "parts": ["Please", "your reservation."],
        "full": "Please confirm your reservation.",
        "jp": "予約を確認してください。",
        "is_correct": true
      },
      {
        "parts": ["I want to", "the flight."],
        "full": "I want to cancel the flight.",
        "jp": "フライトをキャンセルしたい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 119,
    "word": "CONFIRMATION",
    "meaning_core": "確認",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "fir", "type": "weak" },
      { "text": "MA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "PROOF": "証拠",
      "VERIFICATION": "検証",
      "APPROVAL": "承認"
    },
    "distractors": ["DENIAL", "REJECTION", "DOUBT", "CANCELLATION"],
    "meanings_expanded": ["確認", "裏付け", "確証"],
    "contexts": [
      {
        "parts": ["We are waiting for", "of the news."],
        "full": "We are waiting for confirmation of the news.",
        "jp": "私たちはそのニュースの確認を待っている。",
        "is_correct": true
      },
      {
        "parts": ["He received a", "letter."],
        "full": "He received a rejection letter.",
        "jp": "彼は不採用通知を受け取った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 120,
    "word": "CONFLICT",
    "meaning_core": "対立",
    "syllables": [
      { "text": "CON", "type": "strong" },
      { "text": "flict", "type": "weak" }
    ],
    "synonyms": {
      "DISPUTE": "紛争",
      "CLASH": "衝突",
      "STRUGGLE": "闘争"
    },
    "distractors": ["AGREEMENT", "PEACE", "HARMONY", "ACCORD"],
    "meanings_expanded": ["対立", "紛争", "衝突"],
    "contexts": [
      {
        "parts": ["There is a", "of interest."],
        "full": "There is a conflict of interest.",
        "jp": "利益相反がある。",
        "is_correct": true
      },
      {
        "parts": ["They reached an", "."],
        "full": "They reached an agreement.",
        "jp": "彼らは合意に達した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 121,
    "word": "CONFRONT",
    "meaning_core": "直面する",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "FRONT", "type": "strong" }
    ],
    "synonyms": {
      "FACE": "直面する",
      "ENCOUNTER": "出くわす",
      "CHALLENGE": "挑む"
    },
    "distractors": ["AVOID", "EVADE", "DODGE", "ESCAPE"],
    "meanings_expanded": ["直面する", "立ち向かう", "突きつける"],
    "contexts": [
      {
        "parts": ["You must", "your fears."],
        "full": "You must confront your fears.",
        "jp": "君は自分の恐怖に立ち向かわなければならない。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the problem."],
        "full": "Please ignore the problem.",
        "jp": "その問題を無視してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 122,
    "word": "CONGENIAL",
    "meaning_core": "気の合う",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "GEN", "type": "strong" },
      { "text": "ial", "type": "weak" }
    ],
    "synonyms": {
      "FRIENDLY": "友好的な",
      "AGREEABLE": "感じの良い",
      "COMPATIBLE": "相性の良い"
    },
    "distractors": ["UNPLEASANT", "HOSTILE", "DISAGREEABLE", "COLD"],
    "meanings_expanded": ["気の合う", "快適な", "性分に合った"],
    "contexts": [
      {
        "parts": ["He is a", "colleague."],
        "full": "He is a congenial colleague.",
        "jp": "彼は気の合う同僚だ。",
        "is_correct": true
      },
      {
        "parts": ["The atmosphere was", "."],
        "full": "The atmosphere was tense.",
        "jp": "雰囲気は張り詰めていた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 123,
    "word": "CONSENSUS",
    "meaning_core": "合意",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "SEN", "type": "strong" },
      { "text": "sus", "type": "weak" }
    ],
    "synonyms": {
      "AGREEMENT": "合意",
      "UNITY": "結束",
      "ACCORD": "一致"
    },
    "distractors": ["DISAGREEMENT", "CONFLICT", "DISPUTE", "DIVISION"],
    "meanings_expanded": ["合意", "総意", "意見の一致"],
    "contexts": [
      {
        "parts": ["We reached a", "on the issue."],
        "full": "We reached a consensus on the issue.",
        "jp": "我々はその問題について合意に達した。",
        "is_correct": true
      },
      {
        "parts": ["There was a", "among the members."],
        "full": "There was a conflict among the members.",
        "jp": "メンバーの間で対立があった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 124,
    "word": "CONSEQUENTLY",
    "meaning_core": "その結果として",
    "syllables": [
      { "text": "CON", "type": "strong" },
      { "text": "se", "type": "weak" },
      { "text": "quent", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "THEREFORE": "それゆえに",
      "THUS": "したがって",
      "AS A RESULT": "結果として"
    },
    "distractors": ["HOWEVER", "ALTHOUGH", "NEVERTHELESS", "BUT"],
    "meanings_expanded": ["その結果として", "したがって"],
    "contexts": [
      {
        "parts": ["It rained heavily;", ",", "the game was canceled."],
        "full": "It rained heavily; consequently, the game was canceled.",
        "jp": "激しく雨が降った。その結果、試合は中止になった。",
        "is_correct": true
      },
      {
        "parts": ["He studied hard;", ",", "he failed."],
        "full": "He studied hard; however, he failed.",
        "jp": "彼は一生懸命勉強した。しかし、失敗した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 125,
    "word": "CONSERVE",
    "meaning_core": "保存する",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "SERVE", "type": "strong" }
    ],
    "synonyms": {
      "PRESERVE": "保護する",
      "SAVE": "節約する",
      "PROTECT": "守る"
    },
    "distractors": ["WASTE", "DESTROY", "SPEND", "SQUANDER"],
    "meanings_expanded": ["保存する", "保護する", "節約する"],
    "contexts": [
      {
        "parts": ["We must", "energy."],
        "full": "We must conserve energy.",
        "jp": "私たちはエネルギーを節約しなければならない。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "water."],
        "full": "Don't waste water.",
        "jp": "水を無駄にするな。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 126,
    "word": "CONSIDERABLE",
    "meaning_core": "かなりの",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "SID", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "a", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "SUBSTANTIAL": "相当な",
      "SIGNIFICANT": "重要な",
      "LARGE": "大きな"
    },
    "distractors": ["INSIGNIFICANT", "TRIVIAL", "SMALL", "MINOR"],
    "meanings_expanded": ["かなりの", "相当な", "重要な"],
    "contexts": [
      {
        "parts": ["He spent a", "amount of money."],
        "full": "He spent a considerable amount of money.",
        "jp": "彼はかなりの金額を使った。",
        "is_correct": true
      },
      {
        "parts": ["It was a", "change."],
        "full": "It was a small change.",
        "jp": "それは小さな変化だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 127,
    "word": "CONSIST",
    "meaning_core": "～から成る",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "SIST", "type": "strong" }
    ],
    "synonyms": {
      "COMPRISE": "構成する",
      "CONTAIN": "含む",
      "INVOLVE": "伴う"
    },
    "distractors": ["LACK", "EXCLUDE", "MISS", "OMIT"],
    "meanings_expanded": ["～から成る", "（～に）ある"],
    "contexts": [
      {
        "parts": ["Water", "of hydrogen and oxygen."],
        "full": "Water consists of hydrogen and oxygen.",
        "jp": "水は水素と酸素から成る。",
        "is_correct": true
      },
      {
        "parts": ["Success", "in hard work."],
        "full": "Success lies in hard work.",
        "jp": "成功は勤勉にある。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 128,
    "word": "CONSISTENT",
    "meaning_core": "一貫した",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "SIS", "type": "strong" },
      { "text": "tent", "type": "weak" }
    ],
    "synonyms": {
      "STEADY": "安定した",
      "CONSTANT": "不変の",
      "UNIFORM": "均一な"
    },
    "distractors": ["INCONSISTENT", "VARIABLE", "CHANGING", "ERRATIC"],
    "meanings_expanded": ["一貫した", "矛盾のない", "着実な"],
    "contexts": [
      {
        "parts": ["He is a", "worker."],
        "full": "He is a consistent worker.",
        "jp": "彼は着実な働き手だ。",
        "is_correct": true
      },
      {
        "parts": ["Her grades are", "."],
        "full": "Her grades are erratic.",
        "jp": "彼女の成績は不安定だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 129,
    "word": "CONSPICUOUS",
    "meaning_core": "目立つ",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "SPIC", "type": "strong" },
      { "text": "u", "type": "weak" },
      { "text": "ous", "type": "weak" }
    ],
    "synonyms": {
      "NOTICEABLE": "目立つ",
      "PROMINENT": "顕著な",
      "OBVIOUS": "明らかな"
    },
    "distractors": ["OBSCURE", "HIDDEN", "INVISIBLE", "UNNOTICEABLE"],
    "meanings_expanded": ["目立つ", "人目を引く", "著名な"],
    "contexts": [
      {
        "parts": ["She felt", "in her bright dress."],
        "full": "She felt conspicuous in her bright dress.",
        "jp": "彼女は明るいドレスを着て目立っていると感じた。",
        "is_correct": true
      },
      {
        "parts": ["He tried to be", "."],
        "full": "He tried to be invisible.",
        "jp": "彼は目立たないようにしようとした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 130,
    "word": "CONSPIRACY",
    "meaning_core": "陰謀",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "SPIR", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "cy", "type": "weak" }
    ],
    "synonyms": {
      "PLOT": "企み",
      "SCHEME": "計画",
      "INTRIGUE": "陰謀"
    },
    "distractors": ["LOYALTY", "HONESTY", "TRUTH", "FACT"],
    "meanings_expanded": ["陰謀", "共謀"],
    "contexts": [
      {
        "parts": ["They uncovered a", "against the government."],
        "full": "They uncovered a conspiracy against the government.",
        "jp": "彼らは政府に対する陰謀を暴いた。",
        "is_correct": true
      },
      {
        "parts": ["It was a mere", "."],
        "full": "It was a mere coincidence.",
        "jp": "それは単なる偶然だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 131,
    "word": "CONSPIRE",
    "meaning_core": "共謀する",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "SPIRE", "type": "strong" }
    ],
    "synonyms": {
      "PLOT": "企む",
      "SCHEME": "画策する",
      "COLLUDE": "結託する"
    },
    "distractors": ["SUPPORT", "HELP", "AID", "ASSIST"],
    "meanings_expanded": ["共謀する", "企む", "協力して作用する"],
    "contexts": [
      {
        "parts": ["They", "to overthrow the king."],
        "full": "They conspired to overthrow the king.",
        "jp": "彼らは王を退位させようと共謀した。",
        "is_correct": true
      },
      {
        "parts": ["Events seemed to", "against him."],
        "full": "Events seemed to conspire against him.",
        "jp": "事態は彼に不利に作用しているようだった。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 132,
    "word": "CONSTANTLY",
    "meaning_core": "絶えず",
    "syllables": [
      { "text": "CON", "type": "strong" },
      { "text": "stant", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "ALWAYS": "いつも",
      "CONTINUOUSLY": "連続して",
      "FREQUENTLY": "頻繁に"
    },
    "distractors": ["RARELY", "NEVER", "SELDOM", "SOMETIMES"],
    "meanings_expanded": ["絶えず", "常に", "頻繁に"],
    "contexts": [
      {
        "parts": ["She talks", "about her dog."],
        "full": "She talks constantly about her dog.",
        "jp": "彼女は絶えず自分の犬について話している。",
        "is_correct": true
      },
      {
        "parts": ["He", "eats fast food."],
        "full": "He rarely eats fast food.",
        "jp": "彼はめったにファストフードを食べない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 133,
    "word": "CONSULT",
    "meaning_core": "相談する",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "SULT", "type": "strong" }
    ],
    "synonyms": {
      "ASK": "尋ねる",
      "CONFER": "協議する",
      "ADVISE": "助言を求める"
    },
    "distractors": ["IGNORE", "ORDER", "COMMAND", "DICTATE"],
    "meanings_expanded": ["相談する", "（辞書などを）調べる", "診察を受ける"],
    "contexts": [
      {
        "parts": ["You should", "a doctor."],
        "full": "You should consult a doctor.",
        "jp": "医者に相談すべきだ。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the dictionary."],
        "full": "Please consult the dictionary.",
        "jp": "辞書を引いてください。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 134,
    "word": "CONTAGIOUS",
    "meaning_core": "感染性の",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "TA", "type": "strong" },
      { "text": "gious", "type": "weak" }
    ],
    "synonyms": {
      "INFECTIOUS": "伝染性の",
      "CATCHING": "移りやすい",
      "SPREADING": "広まる"
    },
    "distractors": ["HARMLESS", "SAFE", "NONINFECTIOUS", "HEALTHY"],
    "meanings_expanded": ["感染性の", "移りやすい"],
    "contexts": [
      {
        "parts": ["The flu is highly", "."],
        "full": "The flu is highly contagious.",
        "jp": "インフルエンザは非常に感染力が強い。",
        "is_correct": true
      },
      {
        "parts": ["Her laughter was", "."],
        "full": "Her laughter was contagious.",
        "jp": "彼女の笑いは周りに伝染した。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 135,
    "word": "CONTEMPORARY",
    "meaning_core": "現代の",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "TEM", "type": "strong" },
      { "text": "po", "type": "weak" },
      { "text": "rar", "type": "weak" },
      { "text": "y", "type": "weak" }
    ],
    "synonyms": {
      "MODERN": "近代の",
      "CURRENT": "現在の",
      "PRESENT-DAY": "今日の"
    },
    "distractors": ["ANCIENT", "OLD", "PAST", "CLASSIC"],
    "meanings_expanded": ["現代の", "同時代の"],
    "contexts": [
      {
        "parts": ["He is interested in", "art."],
        "full": "He is interested in contemporary art.",
        "jp": "彼は現代美術に興味がある。",
        "is_correct": true
      },
      {
        "parts": ["I love", "music from the 18th century."],
        "full": "I love classical music from the 18th century.",
        "jp": "私は18世紀のクラシック音楽が大好きだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 136,
    "word": "CONTENTION",
    "meaning_core": "論争",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "TEN", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "DISPUTE": "紛争",
      "ARGUMENT": "議論",
      "CONFLICT": "対立"
    },
    "distractors": ["AGREEMENT", "HARMONY", "PEACE", "ACCORD"],
    "meanings_expanded": ["論争", "主張", "競争"],
    "contexts": [
      {
        "parts": ["This issue is a bone of", "."],
        "full": "This issue is a bone of contention.",
        "jp": "この問題は論争の種だ。",
        "is_correct": true
      },
      {
        "parts": ["It is my", "that he is innocent."],
        "full": "It is my contention that he is innocent.",
        "jp": "彼は無実であるというのが私の主張だ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 137,
    "word": "CONTRIBUTE",
    "meaning_core": "貢献する",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "TRIB", "type": "strong" },
      { "text": "ute", "type": "weak" }
    ],
    "synonyms": {
      "DONATE": "寄付する",
      "SUPPLY": "供給する",
      "ADD": "加える"
    },
    "distractors": ["TAKE", "SUBTRACT", "REMOVE", "WITHHOLD"],
    "meanings_expanded": ["貢献する", "寄付する", "（記事を）寄稿する"],
    "contexts": [
      {
        "parts": ["Everyone should", "to the team."],
        "full": "Everyone should contribute to the team.",
        "jp": "誰もがチームに貢献すべきだ。",
        "is_correct": true
      },
      {
        "parts": ["Smoking can", "to lung cancer."],
        "full": "Smoking can contribute to lung cancer.",
        "jp": "喫煙は肺がんの一因となり得る。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 138,
    "word": "CONTRIBUTION",
    "meaning_core": "貢献",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "tri", "type": "weak" },
      { "text": "BU", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "DONATION": "寄付",
      "GIFT": "贈り物",
      "INPUT": "入力"
    },
    "distractors": ["LOSS", "DAMAGE", "DEBT", "COST"],
    "meanings_expanded": ["貢献", "寄付金", "寄稿"],
    "contexts": [
      {
        "parts": ["He made a significant", "to science."],
        "full": "He made a significant contribution to science.",
        "jp": "彼は科学に多大な貢献をした。",
        "is_correct": true
      },
      {
        "parts": ["Thank you for your", "."],
        "full": "Thank you for your donation.",
        "jp": "ご寄付ありがとうございます。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 139,
    "word": "CONTROVERSIAL",
    "meaning_core": "議論を呼ぶ",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "tro", "type": "weak" },
      { "text": "VER", "type": "strong" },
      { "text": "sial", "type": "weak" }
    ],
    "synonyms": {
      "DEBATABLE": "議論の余地がある",
      "DISPUTED": "論争中の",
      "CONTENTIOUS": "争い好きな"
    },
    "distractors": ["CERTAIN", "UNDISPUTED", "AGREED", "SURE"],
    "meanings_expanded": ["議論を呼ぶ", "物議を醸す"],
    "contexts": [
      {
        "parts": ["The new policy is highly", "."],
        "full": "The new policy is highly controversial.",
        "jp": "新しい政策は非常に物議を醸している。",
        "is_correct": true
      },
      {
        "parts": ["It is a", "fact."],
        "full": "It is a known fact.",
        "jp": "それは既知の事実だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 140,
    "word": "CONVENIENT",
    "meaning_core": "便利な",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "VEN", "type": "strong" },
      { "text": "ient", "type": "weak" }
    ],
    "synonyms": {
      "USEFUL": "役に立つ",
      "HANDY": "手軽な",
      "SUITABLE": "都合の良い"
    },
    "distractors": ["INCONVENIENT", "USELESS", "TROUBLESOME", "DIFFICULT"],
    "meanings_expanded": ["便利な", "都合の良い"],
    "contexts": [
      {
        "parts": ["When is a", "time for you?"],
        "full": "When is a convenient time for you?",
        "jp": "ご都合の良い時間はいつですか？",
        "is_correct": true
      },
      {
        "parts": ["This tool is very", "."],
        "full": "This tool is very useful.",
        "jp": "この道具はとても役に立つ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 141,
    "word": "CONVENTION",
    "meaning_core": "慣習",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "VEN", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "CUSTOM": "習慣",
      "ASSEMBLY": "集会",
      "TRADITION": "伝統"
    },
    "distractors": ["INNOVATION", "EXCEPTION", "CHAOS", "DISORDER"],
    "meanings_expanded": ["慣習", "しきたり", "大会"],
    "contexts": [
      {
        "parts": ["Shaking hands is a social", "."],
        "full": "Shaking hands is a social convention.",
        "jp": "握手は社会的な慣習だ。",
        "is_correct": true
      },
      {
        "parts": ["He attended a comic", "."],
        "full": "He attended a comic convention.",
        "jp": "彼はコミックの大会に参加した。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 142,
    "word": "CONVENTIONAL",
    "meaning_core": "従来の",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "VEN", "type": "strong" },
      { "text": "tion", "type": "weak" },
      { "text": "al", "type": "weak" }
    ],
    "synonyms": {
      "TRADITIONAL": "伝統的な",
      "STANDARD": "標準的な",
      "ORTHODOX": "正統派の"
    },
    "distractors": ["UNUSUAL", "RADICAL", "MODERN", "NEW"],
    "meanings_expanded": ["従来の", "型にはまった", "平凡な"],
    "contexts": [
      {
        "parts": ["He prefers", "methods."],
        "full": "He prefers conventional methods.",
        "jp": "彼は従来の方法を好む。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "idea."],
        "full": "This is a revolutionary idea.",
        "jp": "これは革命的なアイデアだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 143,
    "word": "CONVERSION",
    "meaning_core": "変換",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "VER", "type": "strong" },
      { "text": "sion", "type": "weak" }
    ],
    "synonyms": {
      "TRANSFORMATION": "変形",
      "CHANGE": "変更",
      "ADAPTATION": "適応"
    },
    "distractors": ["CONSTANCY", "STABILITY", "MAINTENANCE", "KEEPING"],
    "meanings_expanded": ["変換", "転換", "改宗"],
    "contexts": [
      {
        "parts": ["The", "of water into steam requires heat."],
        "full": "The conversion of water into steam requires heat.",
        "jp": "水を蒸気に変換するには熱が必要だ。",
        "is_correct": true
      },
      {
        "parts": ["His", "to Buddhism surprised us."],
        "full": "His conversion to Buddhism surprised us.",
        "jp": "彼が仏教に改宗したことは私たちを驚かせた。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 144,
    "word": "CONVINCE",
    "meaning_core": "納得させる",
    "syllables": [
      { "text": "con", "type": "weak" },
      { "text": "VINCE", "type": "strong" }
    ],
    "synonyms": {
      "PERSUADE": "説得する",
      "SATISFY": "満足させる",
      "ASSURE": "確信させる"
    },
    "distractors": ["DISSUADE", "DOUBT", "CONFUSE", "PUZZLE"],
    "meanings_expanded": ["納得させる", "確信させる"],
    "contexts": [
      {
        "parts": ["I tried to", "him of my innocence."],
        "full": "I tried to convince him of my innocence.",
        "jp": "私は彼に自分の無実を納得させようとした。",
        "is_correct": true
      },
      {
        "parts": ["Don't let him", "you."],
        "full": "Don't let him deceive you.",
        "jp": "彼に騙されてはいけない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 145,
    "word": "COOPERATE",
    "meaning_core": "協力する",
    "syllables": [
      { "text": "co", "type": "weak" },
      { "text": "OP", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "COLLABORATE": "協同する",
      "WORK TOGETHER": "共に働く",
      "ASSIST": "助ける"
    },
    "distractors": ["OPPOSE", "COMPETE", "RESIST", "FIGHT"],
    "meanings_expanded": ["協力する", "協同する"],
    "contexts": [
      {
        "parts": ["We need to", "with each other."],
        "full": "We need to cooperate with each other.",
        "jp": "私たちはお互いに協力する必要がある。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the instructions."],
        "full": "Please follow the instructions.",
        "jp": "指示に従ってください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 146,
    "word": "CORPORATION",
    "meaning_core": "企業",
    "syllables": [
      { "text": "cor", "type": "weak" },
      { "text": "po", "type": "weak" },
      { "text": "RA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "COMPANY": "会社",
      "FIRM": "商社",
      "BUSINESS": "事業"
    },
    "distractors": ["INDIVIDUAL", "PERSON", "WORKER", "EMPLOYEE"],
    "meanings_expanded": ["企業", "株式会社", "法人"],
    "contexts": [
      {
        "parts": ["He works for a large multinational", "."],
        "full": "He works for a large multinational corporation.",
        "jp": "彼は巨大な多国籍企業で働いている。",
        "is_correct": true
      },
      {
        "parts": ["This is a small", "."],
        "full": "This is a small shop.",
        "jp": "これは小さなお店だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 147,
    "word": "CRAFT",
    "meaning_core": "工芸",
    "syllables": [
      { "text": "CRAFT", "type": "strong" }
    ],
    "synonyms": {
      "SKILL": "技術",
      "ART": "芸術",
      "TRADE": "手仕事"
    },
    "distractors": ["LUCK", "CHANCE", "NATURE", "CHAOS"],
    "meanings_expanded": ["工芸", "技術", "船"],
    "contexts": [
      {
        "parts": ["She is skilled at arts and", "."],
        "full": "She is skilled at arts and crafts.",
        "jp": "彼女は図画工作が得意だ。",
        "is_correct": true
      },
      {
        "parts": ["The", "landed on the moon."],
        "full": "The spacecraft landed on the moon.",
        "jp": "その宇宙船は月に着陸した。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 148,
    "word": "CREDIBILITY",
    "meaning_core": "信頼性",
    "syllables": [
      { "text": "cred", "type": "weak" },
      { "text": "i", "type": "weak" },
      { "text": "BIL", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "RELIABILITY": "信頼度",
      "TRUSTWORTHINESS": "信用性",
      "PLAUSIBILITY": "もっともらしさ"
    },
    "distractors": ["DOUBT", "DISTRUST", "LIE", "FALSEHOOD"],
    "meanings_expanded": ["信頼性", "信憑性"],
    "contexts": [
      {
        "parts": ["The scandal damaged his", "."],
        "full": "The scandal damaged his credibility.",
        "jp": "そのスキャンダルは彼の信頼性を傷つけた。",
        "is_correct": true
      },
      {
        "parts": ["I have no", "in him."],
        "full": "I have no faith in him.",
        "jp": "私は彼を信用していない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 149,
    "word": "CRISIS",
    "meaning_core": "危機",
    "syllables": [
      { "text": "CRI", "type": "strong" },
      { "text": "sis", "type": "weak" }
    ],
    "synonyms": {
      "EMERGENCY": "緊急事態",
      "DISASTER": "災害",
      "CATASTROPHE": "大惨事"
    },
    "distractors": ["PEACE", "SAFETY", "STABILITY", "CALM"],
    "meanings_expanded": ["危機", "重大局面"],
    "contexts": [
      {
        "parts": ["The country is facing an economic", "."],
        "full": "The country is facing an economic crisis.",
        "jp": "その国は経済危機に直面している。",
        "is_correct": true
      },
      {
        "parts": ["We enjoyed a time of", "."],
        "full": "We enjoyed a time of peace.",
        "jp": "私たちは平和な時を楽しんだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 150,
    "word": "CRITICAL",
    "meaning_core": "批判的な",
    "syllables": [
      { "text": "CRIT", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "cal", "type": "weak" }
    ],
    "synonyms": {
      "CRUCIAL": "重大な",
      "VITAL": "不可欠な",
      "DISAPPROVING": "非難する"
    },
    "distractors": ["UNIMPORTANT", "TRIVIAL", "PRAISING", "SAFE"],
    "meanings_expanded": ["批判的な", "重大な", "危機の"],
    "contexts": [
      {
        "parts": ["It is", "to solve this problem now."],
        "full": "It is critical to solve this problem now.",
        "jp": "今この問題を解決することが極めて重要だ。",
        "is_correct": true
      },
      {
        "parts": ["He was very", "of the plan."],
        "full": "He was very critical of the plan.",
        "jp": "彼はその計画に対して非常に批判的だった。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 151,
    "word": "CRITICISM",
    "meaning_core": "批判",
    "syllables": [
      { "text": "CRIT", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "cism", "type": "weak" }
    ],
    "synonyms": {
      "DISAPPROVAL": "不承認",
      "CENSURE": "非難",
      "REVIEW": "批評"
    },
    "distractors": ["PRAISE", "APPROVAL", "COMPLIMENT", "FLATTERY"],
    "meanings_expanded": ["批判", "批評", "非難"],
    "contexts": [
      {
        "parts": ["He accepted the", "gracefully."],
        "full": "He accepted the criticism gracefully.",
        "jp": "彼は批判を潔く受け入れた。",
        "is_correct": true
      },
      {
        "parts": ["She gave him a", "for his good work."],
        "full": "She gave him a compliment for his good work.",
        "jp": "彼女は彼の良い仕事に対して褒め言葉をかけた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 152,
    "word": "CRUCIAL",
    "meaning_core": "極めて重要な",
    "syllables": [
      { "text": "CRU", "type": "strong" },
      { "text": "cial", "type": "weak" }
    ],
    "synonyms": {
      "ESSENTIAL": "不可欠な",
      "VITAL": "極めて重要な",
      "DECISIVE": "決定的な"
    },
    "distractors": ["TRIVIAL", "UNIMPORTANT", "MINOR", "INSIGNIFICANT"],
    "meanings_expanded": ["極めて重要な", "決定的な", "厳しい"],
    "contexts": [
      {
        "parts": ["Water is", "for survival."],
        "full": "Water is crucial for survival.",
        "jp": "水は生存にとって極めて重要だ。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "detail."],
        "full": "This is a trivial detail.",
        "jp": "これは些細な詳細だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 153,
    "word": "CRUELTY",
    "meaning_core": "残酷さ",
    "syllables": [
      { "text": "CRU", "type": "strong" },
      { "text": "el", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "BRUTALITY": "残虐行為",
      "SAVAGERY": "野蛮",
      "HARSHNESS": "厳しさ"
    },
    "distractors": ["KINDNESS", "MERCY", "COMPASSION", "GENTLENESS"],
    "meanings_expanded": ["残酷さ", "無慈悲", "虐待"],
    "contexts": [
      {
        "parts": ["We must stop", "to animals."],
        "full": "We must stop cruelty to animals.",
        "jp": "私たちは動物への虐待を止めなければならない。",
        "is_correct": true
      },
      {
        "parts": ["She showed", "to the beggar."],
        "full": "She showed kindness to the beggar.",
        "jp": "彼女は物乞いに親切にした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 154,
    "word": "CULPRIT",
    "meaning_core": "犯人",
    "syllables": [
      { "text": "CUL", "type": "strong" },
      { "text": "prit", "type": "weak" }
    ],
    "synonyms": {
      "OFFENDER": "違反者",
      "CRIMINAL": "犯罪者",
      "PERPETRATOR": "加害者"
    },
    "distractors": ["VICTIM", "HERO", "INNOCENT", "POLICE"],
    "meanings_expanded": ["犯人", "容疑者", "原因となるもの"],
    "contexts": [
      {
        "parts": ["Police caught the", "."],
        "full": "Police caught the culprit.",
        "jp": "警察は犯人を捕まえた。",
        "is_correct": true
      },
      {
        "parts": ["Sugar is the main", "of tooth decay."],
        "full": "Sugar is the main culprit of tooth decay.",
        "jp": "砂糖は虫歯の主な原因だ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 155,
    "word": "CULTIVATE",
    "meaning_core": "耕す",
    "syllables": [
      { "text": "CUL", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "vate", "type": "weak" }
    ],
    "synonyms": {
      "FARM": "耕作する",
      "GROW": "育てる",
      "DEVELOP": "開発する"
    },
    "distractors": ["DESTROY", "NEGLECT", "ABANDON", "IGNORE"],
    "meanings_expanded": ["耕す", "栽培する", "（才能などを）養う"],
    "contexts": [
      {
        "parts": ["Farmers", "the land."],
        "full": "Farmers cultivate the land.",
        "jp": "農家は土地を耕す。",
        "is_correct": true
      },
      {
        "parts": ["He tries to", "friendships."],
        "full": "He tries to cultivate friendships.",
        "jp": "彼は友情を育もうとしている。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 156,
    "word": "CULTURE",
    "meaning_core": "文化",
    "syllables": [
      { "text": "CUL", "type": "strong" },
      { "text": "ture", "type": "weak" }
    ],
    "synonyms": {
      "SOCIETY": "社会",
      "CUSTOMS": "慣習",
      "CIVILIZATION": "文明"
    },
    "distractors": ["NATURE", "WILDERNESS", "ANIMAL", "CHAOS"],
    "meanings_expanded": ["文化", "教養", "培養"],
    "contexts": [
      {
        "parts": ["We learned about Japanese", "."],
        "full": "We learned about Japanese culture.",
        "jp": "私たちは日本文化について学んだ。",
        "is_correct": true
      },
      {
        "parts": ["He loves to explore", "."],
        "full": "He loves to explore nature.",
        "jp": "彼は自然を探検するのが好きだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 157,
    "word": "CURRENTLY",
    "meaning_core": "現在は",
    "syllables": [
      { "text": "CUR", "type": "strong" },
      { "text": "rent", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "PRESENTLY": "現在",
      "NOW": "今",
      "AT PRESENT": "目下"
    },
    "distractors": ["FORMERLY", "PREVIOUSLY", "FUTURE", "PAST"],
    "meanings_expanded": ["現在は", "目下"],
    "contexts": [
      {
        "parts": ["He is", "working in Tokyo."],
        "full": "He is currently working in Tokyo.",
        "jp": "彼は現在東京で働いている。",
        "is_correct": true
      },
      {
        "parts": ["She was", "a teacher."],
        "full": "She was formerly a teacher.",
        "jp": "彼女は以前教師だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 158,
    "word": "DEBATE",
    "meaning_core": "討論",
    "syllables": [
      { "text": "de", "type": "weak" },
      { "text": "BATE", "type": "strong" }
    ],
    "synonyms": {
      "ARGUMENT": "議論",
      "DISCUSSION": "話し合い",
      "DISPUTE": "論争"
    },
    "distractors": ["AGREEMENT", "ACCORD", "SILENCE", "PEACE"],
    "meanings_expanded": ["討論", "論争", "議論する"],
    "contexts": [
      {
        "parts": ["They held a", "on politics."],
        "full": "They held a debate on politics.",
        "jp": "彼らは政治について討論を行った。",
        "is_correct": true
      },
      {
        "parts": ["We reached an", "."],
        "full": "We reached an agreement.",
        "jp": "私たちは合意に達した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 159,
    "word": "DEBT",
    "meaning_core": "借金",
    "syllables": [
      { "text": "DEBT", "type": "strong" }
    ],
    "synonyms": {
      "LIABILITY": "負債",
      "DUE": "借り",
      "ARREARS": "滞納金"
    },
    "distractors": ["ASSET", "CREDIT", "PROFIT", "GAIN"],
    "meanings_expanded": ["借金", "負債", "恩義"],
    "contexts": [
      {
        "parts": ["He is deep in", "."],
        "full": "He is deep in debt.",
        "jp": "彼は借金まみれだ。",
        "is_correct": true
      },
      {
        "parts": ["Health is a great", "."],
        "full": "Health is a great asset.",
        "jp": "健康は偉大な資産だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 160,
    "word": "DECENT",
    "meaning_core": "礼儀にかなった",
    "syllables": [
      { "text": "DE", "type": "strong" },
      { "text": "cent", "type": "weak" }
    ],
    "synonyms": {
      "RESPECTABLE": "立派な",
      "PROPER": "適切な",
      "SUITABLE": "ふさわしい"
    },
    "distractors": ["INDECENT", "RUDE", "POOR", "BAD"],
    "meanings_expanded": ["礼儀にかなった", "きちんとした", "かなりの"],
    "contexts": [
      {
        "parts": ["He earns a", "salary."],
        "full": "He earns a decent salary.",
        "jp": "彼はかなりの給料を稼いでいる。",
        "is_correct": true
      },
      {
        "parts": ["That was a", "thing to do."],
        "full": "That was a rude thing to do.",
        "jp": "それは失礼なことだった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 161,
    "word": "DECIPHER",
    "meaning_core": "解読する",
    "syllables": [
      { "text": "de", "type": "weak" },
      { "text": "CI", "type": "strong" },
      { "text": "pher", "type": "weak" }
    ],
    "synonyms": {
      "DECODE": "解読する",
      "INTERPRET": "解釈する",
      "SOLVE": "解く"
    },
    "distractors": ["ENCODE", "HIDE", "CONCEAL", "BURY"],
    "meanings_expanded": ["解読する", "判読する"],
    "contexts": [
      {
        "parts": ["I couldn't", "his handwriting."],
        "full": "I couldn't decipher his handwriting.",
        "jp": "彼の筆跡を判読できなかった。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the message."],
        "full": "Please encrypt the message.",
        "jp": "メッセージを暗号化してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 162,
    "word": "DEFECTIVE",
    "meaning_core": "欠陥のある",
    "syllables": [
      { "text": "de", "type": "weak" },
      { "text": "FEC", "type": "strong" },
      { "text": "tive", "type": "weak" }
    ],
    "synonyms": {
      "FAULTY": "欠点のある",
      "FLAWED": "不備のある",
      "BROKEN": "壊れた"
    },
    "distractors": ["PERFECT", "FLAWLESS", "INTACT", "WORKING"],
    "meanings_expanded": ["欠陥のある", "不完全な"],
    "contexts": [
      {
        "parts": ["This machine is", "."],
        "full": "This machine is defective.",
        "jp": "この機械は欠陥がある。",
        "is_correct": true
      },
      {
        "parts": ["The diamond was", "."],
        "full": "The diamond was flawless.",
        "jp": "そのダイヤモンドは無傷だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 163,
    "word": "DEFICIT",
    "meaning_core": "赤字",
    "syllables": [
      { "text": "DEF", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "cit", "type": "weak" }
    ],
    "synonyms": {
      "SHORTAGE": "不足",
      "LOSS": "損失",
      "DEBT": "借金"
    },
    "distractors": ["SURPLUS", "PROFIT", "EXCESS", "GAIN"],
    "meanings_expanded": ["赤字", "不足額", "欠損"],
    "contexts": [
      {
        "parts": ["The government faces a budget", "."],
        "full": "The government faces a budget deficit.",
        "jp": "政府は財政赤字に直面している。",
        "is_correct": true
      },
      {
        "parts": ["We have a food", "."],
        "full": "We have a food surplus.",
        "jp": "食料が余っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 164,
    "word": "DEFINE",
    "meaning_core": "定義する",
    "syllables": [
      { "text": "de", "type": "weak" },
      { "text": "FINE", "type": "strong" }
    ],
    "synonyms": {
      "EXPLAIN": "説明する",
      "DESCRIBE": "描写する",
      "OUTLINE": "概説する"
    },
    "distractors": ["CONFUSE", "OBSCURE", "HIDE", "MIX"],
    "meanings_expanded": ["定義する", "明確にする", "規定する"],
    "contexts": [
      {
        "parts": ["Can you", "the word?"],
        "full": "Can you define the word?",
        "jp": "その単語を定義できますか？",
        "is_correct": true
      },
      {
        "parts": ["Please", "the issue."],
        "full": "Please confuse the issue.",
        "jp": "問題を混乱させてください。（不自然）",
        "is_correct": false
      }
    ]
  },
  {
    "id": 165,
    "word": "DEFINITE",
    "meaning_core": "明確な",
    "syllables": [
      { "text": "DEF", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "nite", "type": "weak" }
    ],
    "synonyms": {
      "CERTAIN": "確実な",
      "SURE": "確信している",
      "CLEAR": "はっきりした"
    },
    "distractors": ["VAGUE", "UNCERTAIN", "INDEFINITE", "DOUBTFUL"],
    "meanings_expanded": ["明確な", "限定された", "確実な"],
    "contexts": [
      {
        "parts": ["I need a", "answer."],
        "full": "I need a definite answer.",
        "jp": "明確な答えが必要だ。",
        "is_correct": true
      },
      {
        "parts": ["His plans are", "."],
        "full": "His plans are vague.",
        "jp": "彼の計画は曖昧だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 166,
    "word": "DEFINITION",
    "meaning_core": "定義",
    "syllables": [
      { "text": "def", "type": "weak" },
      { "text": "i", "type": "weak" },
      { "text": "NI", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "MEANING": "意味",
      "EXPLANATION": "説明",
      "DESCRIPTION": "記述"
    },
    "distractors": ["AMBIGUITY", "CONFUSION", "MYSTERY", "PUZZLE"],
    "meanings_expanded": ["定義", "解像度", "鮮明さ"],
    "contexts": [
      {
        "parts": ["Look up the", "in the dictionary."],
        "full": "Look up the definition in the dictionary.",
        "jp": "辞書で定義を調べなさい。",
        "is_correct": true
      },
      {
        "parts": ["This TV has high", "."],
        "full": "This TV has high definition.",
        "jp": "このテレビは高解像度だ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 167,
    "word": "DELIBERATE",
    "meaning_core": "熟考する",
    "syllables": [
      { "text": "de", "type": "weak" },
      { "text": "LIB", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "PONDER": "熟考する",
      "CONSIDER": "検討する",
      "REFLECT": "反省する"
    },
    "distractors": ["RUSH", "HURRY", "GUESS", "IGNORE"],
    "meanings_expanded": ["熟考する", "審議する", "故意の（形容詞）"],
    "contexts": [
      {
        "parts": ["The jury will", "tomorrow."],
        "full": "The jury will deliberate tomorrow.",
        "jp": "陪審員は明日審議を行う。",
        "is_correct": true
      },
      {
        "parts": ["It was a", "act."],
        "full": "It was a deliberate act.",
        "jp": "それは故意の行為だった。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 168,
    "word": "DEMOCRATIC",
    "meaning_core": "民主主義の",
    "syllables": [
      { "text": "dem", "type": "weak" },
      { "text": "o", "type": "weak" },
      { "text": "CRAT", "type": "strong" },
      { "text": "ic", "type": "weak" }
    ],
    "synonyms": {
      "POPULAR": "大衆の",
      "REPRESENTATIVE": "代表制の",
      "EGALITARIAN": "平等主義の"
    },
    "distractors": ["DICTATORIAL", "AUTOCRATIC", "TYRANNICAL", "TOTALITARIAN"],
    "meanings_expanded": ["民主主義の", "民主的な"],
    "contexts": [
      {
        "parts": ["We live in a", "society."],
        "full": "We live in a democratic society.",
        "jp": "私たちは民主主義社会に住んでいる。",
        "is_correct": true
      },
      {
        "parts": ["The country is under", "rule."],
        "full": "The country is under dictatorial rule.",
        "jp": "その国は独裁支配下にある。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 169,
    "word": "DEPICT",
    "meaning_core": "描写する",
    "syllables": [
      { "text": "de", "type": "weak" },
      { "text": "PICT", "type": "strong" }
    ],
    "synonyms": {
      "PORTRAY": "描く",
      "DESCRIBE": "描写する",
      "ILLUSTRATE": "図解する"
    },
    "distractors": ["HIDE", "CONCEAL", "IGNORE", "DISTORT"],
    "meanings_expanded": ["描写する", "描く"],
    "contexts": [
      {
        "parts": ["The painting", "a rural scene."],
        "full": "The painting depicts a rural scene.",
        "jp": "その絵は田園風景を描いている。",
        "is_correct": true
      },
      {
        "parts": ["Words cannot", "my feelings."],
        "full": "Words cannot describe my feelings.",
        "jp": "言葉では私の気持ちを表せない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 170,
    "word": "DEPOT",
    "meaning_core": "貯蔵庫",
    "syllables": [
      { "text": "DE", "type": "strong" },
      { "text": "pot", "type": "weak" }
    ],
    "synonyms": {
      "WAREHOUSE": "倉庫",
      "STATION": "駅",
      "TERMINAL": "ターミナル"
    },
    "distractors": ["HOME", "OFFICE", "FIELD", "PARK"],
    "meanings_expanded": ["貯蔵庫", "倉庫", "駅（米語）"],
    "contexts": [
      {
        "parts": ["The bus", "is near here."],
        "full": "The bus depot is near here.",
        "jp": "バスの車庫（発着所）はこの近くだ。",
        "is_correct": true
      },
      {
        "parts": ["We store goods in the", "."],
        "full": "We store goods in the depot.",
        "jp": "私たちは商品を倉庫に保管する。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 171,
    "word": "DESERTED",
    "meaning_core": "人通りの絶えた",
    "syllables": [
      { "text": "de", "type": "weak" },
      { "text": "SERT", "type": "strong" },
      { "text": "ed", "type": "weak" }
    ],
    "synonyms": {
      "ABANDONED": "見捨てられた",
      "EMPTY": "空の",
      "UNINHABITED": "無人の"
    },
    "distractors": ["CROWDED", "POPULATED", "BUSY", "FULL"],
    "meanings_expanded": ["人通りの絶えた", "見捨てられた", "荒涼とした"],
    "contexts": [
      {
        "parts": ["The streets were completely", "at night."],
        "full": "The streets were completely deserted at night.",
        "jp": "夜、通りは完全に人通りが絶えていた。",
        "is_correct": true
      },
      {
        "parts": ["The mall was", "with shoppers."],
        "full": "The mall was crowded with shoppers.",
        "jp": "ショッピングモールは買い物客で混雑していた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 172,
    "word": "DESERVE",
    "meaning_core": "～に値する",
    "syllables": [
      { "text": "de", "type": "weak" },
      { "text": "SERVE", "type": "strong" }
    ],
    "synonyms": {
      "MERIT": "値する",
      "EARN": "（権利を）得る",
      "WARRANT": "正当化する"
    },
    "distractors": ["LOSE", "FAIL", "FORFEIT", "MISS"],
    "meanings_expanded": ["～に値する", "～を受けるに足る"],
    "contexts": [
      {
        "parts": ["You", "a break after working so hard."],
        "full": "You deserve a break after working so hard.",
        "jp": "そんなに一生懸命働いたのだから、君は休憩するに値する。",
        "is_correct": true
      },
      {
        "parts": ["I don't", "to eat vegetables."],
        "full": "I don't like to eat vegetables.",
        "jp": "私は野菜を食べるのが好きではない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 173,
    "word": "DESPERATE",
    "meaning_core": "必死の",
    "syllables": [
      { "text": "DES", "type": "strong" },
      { "text": "per", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "HOPELESS": "絶望的な",
      "FRANTIC": "死に物狂いの",
      "URGENT": "緊急の"
    },
    "distractors": ["CALM", "HOPEFUL", "CONFIDENT", "SECURE"],
    "meanings_expanded": ["必死の", "絶望的な", "自暴自棄の"],
    "contexts": [
      {
        "parts": ["He made a", "attempt to escape."],
        "full": "He made a desperate attempt to escape.",
        "jp": "彼は逃げようと必死の試みをした。",
        "is_correct": true
      },
      {
        "parts": ["She felt", "about the future."],
        "full": "She felt hopeful about the future.",
        "jp": "彼女は将来について希望を感じた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 174,
    "word": "DESPITE",
    "meaning_core": "～にもかかわらず",
    "syllables": [
      { "text": "de", "type": "weak" },
      { "text": "SPITE", "type": "strong" }
    ],
    "synonyms": {
      "IN SPITE OF": "～にもかかわらず",
      "REGARDLESS OF": "～にかかわらず",
      "NOTWITHSTANDING": "～それにもかかわらず"
    },
    "distractors": ["BECAUSE OF", "DUE TO", "THANKS TO", "OWING TO"],
    "meanings_expanded": ["～にもかかわらず"],
    "contexts": [
      {
        "parts": ["He went out", "the heavy rain."],
        "full": "He went out despite the heavy rain.",
        "jp": "大雨にもかかわらず彼は外出した。",
        "is_correct": true
      },
      {
        "parts": ["I stayed home", "the bad weather."],
        "full": "I stayed home because of the bad weather.",
        "jp": "悪天候のため私は家にいた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 175,
    "word": "DEVASTATE",
    "meaning_core": "破壊する",
    "syllables": [
      { "text": "DEV", "type": "strong" },
      { "text": "as", "type": "weak" },
      { "text": "tate", "type": "weak" }
    ],
    "synonyms": {
      "DESTROY": "破壊する",
      "RUIN": "台無しにする",
      "RAVAGE": "荒らす"
    },
    "distractors": ["BUILD", "CREATE", "CONSTRUCT", "REPAIR"],
    "meanings_expanded": ["破壊する", "（精神的に）打ちのめす", "荒廃させる"],
    "contexts": [
      {
        "parts": ["The hurricane will", "the coast."],
        "full": "The hurricane will devastate the coast.",
        "jp": "ハリケーンは海岸地帯を破壊するだろう。",
        "is_correct": true
      },
      {
        "parts": ["We plan to", "a new bridge."],
        "full": "We plan to construct a new bridge.",
        "jp": "私たちは新しい橋を建設する予定だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 176,
    "word": "DEXTEROUS",
    "meaning_core": "器用な",
    "syllables": [
      { "text": "DEX", "type": "strong" },
      { "text": "ter", "type": "weak" },
      { "text": "ous", "type": "weak" }
    ],
    "synonyms": {
      "SKILLFUL": "巧みな",
      "ADROIT": "機敏な",
      "HANDY": "器用な"
    },
    "distractors": ["CLUMSY", "AWKWARD", "UNSKILLED", "INEPT"],
    "meanings_expanded": ["器用な", "機敏な", "巧妙な"],
    "contexts": [
      {
        "parts": ["He is", "with his hands."],
        "full": "He is dexterous with his hands.",
        "jp": "彼は手先が器用だ。",
        "is_correct": true
      },
      {
        "parts": ["She is", "at dancing."],
        "full": "She is clumsy at dancing.",
        "jp": "彼女はダンスが不器用だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 177,
    "word": "DIAGNOSE",
    "meaning_core": "診断する",
    "syllables": [
      { "text": "di", "type": "weak" },
      { "text": "ag", "type": "weak" },
      { "text": "NOSE", "type": "strong" }
    ],
    "synonyms": {
      "IDENTIFY": "特定する",
      "DETECT": "発見する",
      "DETERMINE": "判定する"
    },
    "distractors": ["IGNORE", "OVERLOOK", "GUESS", "MISS"],
    "meanings_expanded": ["診断する", "原因を突き止める"],
    "contexts": [
      {
        "parts": ["Doctors couldn't", "the disease."],
        "full": "Doctors couldn't diagnose the disease.",
        "jp": "医師たちはその病気を診断できなかった。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the patient."],
        "full": "Please treat the patient.",
        "jp": "患者を治療してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 178,
    "word": "DICTATE",
    "meaning_core": "指図する",
    "syllables": [
      { "text": "DIC", "type": "strong" },
      { "text": "tate", "type": "weak" }
    ],
    "synonyms": {
      "COMMAND": "命令する",
      "ORDER": "命じる",
      "IMPOSE": "課す"
    },
    "distractors": ["OBEY", "FOLLOW", "REQUEST", "ASK"],
    "meanings_expanded": ["指図する", "書き取らせる", "規定する"],
    "contexts": [
      {
        "parts": ["Don't let others", "your life."],
        "full": "Don't let others dictate your life.",
        "jp": "他人に自分の人生を指図させてはいけない。",
        "is_correct": true
      },
      {
        "parts": ["The secretary will", "the letter."],
        "full": "The secretary will type the letter.",
        "jp": "秘書が手紙をタイプするだろう。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 179,
    "word": "DILIGENTLY",
    "meaning_core": "勤勉に",
    "syllables": [
      { "text": "DIL", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "gent", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "INDUSTRIOUSLY": "熱心に",
      "HARD": "一生懸命",
      "CAREFULLY": "入念に"
    },
    "distractors": ["LAZILY", "IDLY", "CARELESSLY", "SLOWLY"],
    "meanings_expanded": ["勤勉に", "入念に", "こつこつと"],
    "contexts": [
      {
        "parts": ["She studied", "for the exam."],
        "full": "She studied diligently for the exam.",
        "jp": "彼女は試験のために勤勉に勉強した。",
        "is_correct": true
      },
      {
        "parts": ["He worked", "all day."],
        "full": "He worked lazily all day.",
        "jp": "彼は一日中怠けて働いた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 180,
    "word": "DISCOMFORT",
    "meaning_core": "不快",
    "syllables": [
      { "text": "dis", "type": "weak" },
      { "text": "COM", "type": "strong" },
      { "text": "fort", "type": "weak" }
    ],
    "synonyms": {
      "UNEASE": "不安",
      "PAIN": "痛み",
      "DISTRESS": "苦悩"
    },
    "distractors": ["COMFORT", "EASE", "RELIEF", "PLEASURE"],
    "meanings_expanded": ["不快", "不便", "軽い痛み"],
    "contexts": [
      {
        "parts": ["He felt some", "in his stomach."],
        "full": "He felt some discomfort in his stomach.",
        "jp": "彼は胃に少し不快感を感じた。",
        "is_correct": true
      },
      {
        "parts": ["I sat in", "on the sofa."],
        "full": "I sat in comfort on the sofa.",
        "jp": "私はソファで快適に座っていた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 181,
    "word": "DISCREETLY",
    "meaning_core": "慎重に",
    "syllables": [
      { "text": "dis", "type": "weak" },
      { "text": "CREET", "type": "strong" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "CAUTIOUSLY": "用心深く",
      "SECRETLY": "こっそりと",
      "TACTFULLY": "それとなく"
    },
    "distractors": ["OPENLY", "PUBLICLY", "LOUDLY", "OBVIOUSLY"],
    "meanings_expanded": ["慎重に", "控えめに", "目立たないように"],
    "contexts": [
      {
        "parts": ["He left the room", "."],
        "full": "He left the room discreetly.",
        "jp": "彼は慎重に部屋を出た。",
        "is_correct": true
      },
      {
        "parts": ["She spoke", "about her plans."],
        "full": "She spoke openly about her plans.",
        "jp": "彼女は自分の計画について公然と話した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 182,
    "word": "DISGUISE",
    "meaning_core": "変装",
    "syllables": [
      { "text": "dis", "type": "weak" },
      { "text": "GUISE", "type": "strong" }
    ],
    "synonyms": {
      "MASK": "仮面",
      "CAMOUFLAGE": "カモフラージュ",
      "COSTUME": "衣装"
    },
    "distractors": ["REALITY", "TRUTH", "HONESTY", "OPENNESS"],
    "meanings_expanded": ["変装", "見せかけ", "隠すこと"],
    "contexts": [
      {
        "parts": ["He wore a", "to hide his identity."],
        "full": "He wore a disguise to hide his identity.",
        "jp": "彼は正体を隠すために変装をした。",
        "is_correct": true
      },
      {
        "parts": ["She told the", "."],
        "full": "She told the truth.",
        "jp": "彼女は真実を話した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 183,
    "word": "DISMISS",
    "meaning_core": "解雇する",
    "syllables": [
      { "text": "dis", "type": "weak" },
      { "text": "MISS", "type": "strong" }
    ],
    "synonyms": {
      "FIRE": "クビにする",
      "REJECT": "却下する",
      "DISCHARGE": "免職する"
    },
    "distractors": ["HIRE", "EMPLOY", "ACCEPT", "ENGAGE"],
    "meanings_expanded": ["解雇する", "（考えなどを）退ける", "解散させる"],
    "contexts": [
      {
        "parts": ["The boss decided to", "him."],
        "full": "The boss decided to dismiss him.",
        "jp": "上司は彼を解雇することに決めた。",
        "is_correct": true
      },
      {
        "parts": ["We need to", "new staff."],
        "full": "We need to hire new staff.",
        "jp": "私たちは新しいスタッフを雇う必要がある。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 184,
    "word": "DISPERSE",
    "meaning_core": "分散させる",
    "syllables": [
      { "text": "dis", "type": "weak" },
      { "text": "PERSE", "type": "strong" }
    ],
    "synonyms": {
      "SCATTER": "まき散らす",
      "SPREAD": "広げる",
      "DISSIPATE": "散らす"
    },
    "distractors": ["GATHER", "COLLECT", "ASSEMBLE", "CONCENTRATE"],
    "meanings_expanded": ["分散させる", "散らばる", "消散させる"],
    "contexts": [
      {
        "parts": ["The police used tear gas to", "the crowd."],
        "full": "The police used tear gas to disperse the crowd.",
        "jp": "警察は群衆を分散させるために催涙ガスを使用した。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the papers."],
        "full": "Please collect the papers.",
        "jp": "書類を集めてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 185,
    "word": "DISTINCTION",
    "meaning_core": "区別",
    "syllables": [
      { "text": "dis", "type": "weak" },
      { "text": "TINC", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "DIFFERENCE": "違い",
      "DIFFERENTIATION": "差別化",
      "EXCELLENCE": "優秀さ"
    },
    "distractors": ["SIMILARITY", "RESEMBLANCE", "EQUALITY", "SAMENESS"],
    "meanings_expanded": ["区別", "卓越性", "特徴"],
    "contexts": [
      {
        "parts": ["It is hard to make a", "between the two."],
        "full": "It is hard to make a distinction between the two.",
        "jp": "その二つを区別するのは難しい。",
        "is_correct": true
      },
      {
        "parts": ["There is a strong", "between them."],
        "full": "There is a strong resemblance between them.",
        "jp": "彼らの間には強い類似性がある。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 186,
    "word": "DISTINGUISH",
    "meaning_core": "区別する",
    "syllables": [
      { "text": "dis", "type": "weak" },
      { "text": "TIN", "type": "strong" },
      { "text": "guish", "type": "weak" }
    ],
    "synonyms": {
      "DIFFERENTIATE": "識別する",
      "DISCRIMINATE": "区別する",
      "TELL APART": "見分ける"
    },
    "distractors": ["CONFUSE", "MIX", "BLEND", "IGNORE"],
    "meanings_expanded": ["区別する", "見分ける", "目立たせる"],
    "contexts": [
      {
        "parts": ["Can you", "between right and wrong?"],
        "full": "Can you distinguish between right and wrong?",
        "jp": "善悪の区別がつきますか？",
        "is_correct": true
      },
      {
        "parts": ["Don't", "the two issues."],
        "full": "Don't confuse the two issues.",
        "jp": "その二つの問題を混同しないで。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 187,
    "word": "DISTRIBUTE",
    "meaning_core": "配布する",
    "syllables": [
      { "text": "dis", "type": "weak" },
      { "text": "TRIB", "type": "strong" },
      { "text": "ute", "type": "weak" }
    ],
    "synonyms": {
      "HAND OUT": "配る",
      "SPREAD": "広める",
      "ALLOCATE": "割り当てる"
    },
    "distractors": ["COLLECT", "GATHER", "KEEP", "WITHHOLD"],
    "meanings_expanded": ["配布する", "分配する", "流通させる"],
    "contexts": [
      {
        "parts": ["Volunteers will", "food to the homeless."],
        "full": "Volunteers will distribute food to the homeless.",
        "jp": "ボランティアがホームレスに食料を配布する。",
        "is_correct": true
      },
      {
        "parts": ["We need to", "more information."],
        "full": "We need to gather more information.",
        "jp": "私たちはもっと情報を集める必要がある。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 188,
    "word": "DISTURB",
    "meaning_core": "邪魔する",
    "syllables": [
      { "text": "dis", "type": "weak" },
      { "text": "TURB", "type": "strong" }
    ],
    "synonyms": {
      "INTERRUPT": "中断させる",
      "BOTHER": "悩ませる",
      "UPSET": "動揺させる"
    },
    "distractors": ["CALM", "SOOTHE", "AID", "HELP"],
    "meanings_expanded": ["邪魔する", "乱す", "不安にさせる"],
    "contexts": [
      {
        "parts": ["Please do not", "him while he is working."],
        "full": "Please do not disturb him while he is working.",
        "jp": "仕事中の彼の邪魔をしないでください。",
        "is_correct": true
      },
      {
        "parts": ["Music helps to", "my mind."],
        "full": "Music helps to calm my mind.",
        "jp": "音楽は私の心を落ち着かせるのに役立つ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 189,
    "word": "DOCILE",
    "meaning_core": "従順な",
    "syllables": [
      { "text": "DOC", "type": "strong" },
      { "text": "ile", "type": "weak" }
    ],
    "synonyms": {
      "OBEDIENT": "従順な",
      "SUBMISSIVE": "服従的な",
      "TAME": "飼い慣らされた"
    },
    "distractors": ["AGGRESSIVE", "STUBBORN", "WILD", "REBELLIOUS"],
    "meanings_expanded": ["従順な", "扱いやすい", "素直な"],
    "contexts": [
      {
        "parts": ["The horse is very", "and easy to ride."],
        "full": "The horse is very docile and easy to ride.",
        "jp": "その馬はとても従順で乗りやすい。",
        "is_correct": true
      },
      {
        "parts": ["He has an", "personality."],
        "full": "He has an aggressive personality.",
        "jp": "彼は攻撃的な性格をしている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 190,
    "word": "DOWNFALL",
    "meaning_core": "没落",
    "syllables": [
      { "text": "DOWN", "type": "strong" },
      { "text": "fall", "type": "weak" }
    ],
    "synonyms": {
      "RUIN": "破滅",
      "COLLAPSE": "崩壊",
      "DEFEAT": "敗北"
    },
    "distractors": ["SUCCESS", "RISE", "TRIUMPH", "VICTORY"],
    "meanings_expanded": ["没落", "転落", "破滅の原因"],
    "contexts": [
      {
        "parts": ["Greed was the cause of his", "."],
        "full": "Greed was the cause of his downfall.",
        "jp": "強欲が彼の没落の原因だった。",
        "is_correct": true
      },
      {
        "parts": ["Hard work led to his", "."],
        "full": "Hard work led to his success.",
        "jp": "勤勉が彼の成功につながった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 191,
    "word": "DOWNSIZE",
    "meaning_core": "小型化する",
    "syllables": [
      { "text": "DOWN", "type": "strong" },
      { "text": "size", "type": "weak" }
    ],
    "synonyms": {
      "REDUCE": "減らす",
      "CUT": "削減する",
      "TRIM": "整理する"
    },
    "distractors": ["EXPAND", "GROW", "INCREASE", "ENLARGE"],
    "meanings_expanded": ["（人員などを）削減する", "小型化する"],
    "contexts": [
      {
        "parts": ["The company plans to", "its workforce."],
        "full": "The company plans to downsize its workforce.",
        "jp": "その会社は人員を削減する計画だ。",
        "is_correct": true
      },
      {
        "parts": ["They want to", "the business."],
        "full": "They want to expand the business.",
        "jp": "彼らは事業を拡大したいと考えている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 192,
    "word": "DRAMATIC",
    "meaning_core": "劇的な",
    "syllables": [
      { "text": "dra", "type": "weak" },
      { "text": "MAT", "type": "strong" },
      { "text": "ic", "type": "weak" }
    ],
    "synonyms": {
      "SUDDEN": "突然の",
      "STRIKING": "印象的な",
      "THEATRICAL": "芝居がかった"
    },
    "distractors": ["BORING", "ORDINARY", "GRADUAL", "SUBTLE"],
    "meanings_expanded": ["劇的な", "演劇の", "印象的な"],
    "contexts": [
      {
        "parts": ["There was a", "change in the weather."],
        "full": "There was a dramatic change in the weather.",
        "jp": "天候に劇的な変化があった。",
        "is_correct": true
      },
      {
        "parts": ["The movie was", "."],
        "full": "The movie was boring.",
        "jp": "その映画は退屈だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 193,
    "word": "DRASTIC",
    "meaning_core": "思い切った",
    "syllables": [
      { "text": "DRAS", "type": "strong" },
      { "text": "tic", "type": "weak" }
    ],
    "synonyms": {
      "EXTREME": "極端な",
      "RADICAL": "抜本的な",
      "SEVERE": "厳しい"
    },
    "distractors": ["MILD", "MODERATE", "GENTLE", "SLIGHT"],
    "meanings_expanded": ["思い切った", "徹底的な", "猛烈な"],
    "contexts": [
      {
        "parts": ["We need to take", "measures."],
        "full": "We need to take drastic measures.",
        "jp": "我々は思い切った措置を講じる必要がある。",
        "is_correct": true
      },
      {
        "parts": ["He made a", "change to the plan."],
        "full": "He made a slight change to the plan.",
        "jp": "彼は計画にわずかな変更を加えた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 194,
    "word": "DRASTICALLY",
    "meaning_core": "劇的に",
    "syllables": [
      { "text": "DRAS", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "cal", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "EXTREMELY": "極端に",
      "SIGNIFICANTLY": "著しく",
      "RADICALLY": "根本的に"
    },
    "distractors": ["SLIGHTLY", "BARELY", "MODERATELY", "GENTLY"],
    "meanings_expanded": ["劇的に", "徹底的に"],
    "contexts": [
      {
        "parts": ["Prices have fallen", "."],
        "full": "Prices have fallen drastically.",
        "jp": "価格が劇的に下落した。",
        "is_correct": true
      },
      {
        "parts": ["The temperature rose", "."],
        "full": "The temperature rose slightly.",
        "jp": "気温がわずかに上昇した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 195,
    "word": "DUBIOUS",
    "meaning_core": "疑わしい",
    "syllables": [
      { "text": "DU", "type": "strong" },
      { "text": "bi", "type": "weak" },
      { "text": "ous", "type": "weak" }
    ],
    "synonyms": {
      "DOUBTFUL": "疑わしい",
      "SUSPICIOUS": "怪しい",
      "UNCERTAIN": "不確かな"
    },
    "distractors": ["CERTAIN", "SURE", "TRUSTWORTHY", "RELIABLE"],
    "meanings_expanded": ["疑わしい", "怪しげな", "半信半疑の"],
    "contexts": [
      {
        "parts": ["I am", "about his claims."],
        "full": "I am dubious about his claims.",
        "jp": "私は彼の主張を疑わしく思っている。",
        "is_correct": true
      },
      {
        "parts": ["I am", "of the result."],
        "full": "I am certain of the result.",
        "jp": "私は結果を確信している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 196,
    "word": "DUE",
    "meaning_core": "支払期日の来た",
    "syllables": [
      { "text": "DUE", "type": "strong" }
    ],
    "synonyms": {
      "OWED": "支払われるべき",
      "EXPECTED": "予定されている",
      "SCHEDULED": "予定の"
    },
    "distractors": ["PAID", "EARLY", "OPTIONAL", "FREE"],
    "meanings_expanded": ["支払期日の来た", "到着予定で", "正当な"],
    "contexts": [
      {
        "parts": ["The rent is", "tomorrow."],
        "full": "The rent is due tomorrow.",
        "jp": "家賃は明日が支払期日だ。",
        "is_correct": true
      },
      {
        "parts": ["The train arrived", "."],
        "full": "The train arrived early.",
        "jp": "電車は早く到着した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 198,
    "word": "DURING",
    "meaning_core": "～の間に",
    "syllables": [
      { "text": "DUR", "type": "strong" },
      { "text": "ing", "type": "weak" }
    ],
    "synonyms": {
      "THROUGHOUT": "～の間中",
      "IN": "～の中に"
    },
    "distractors": ["BEFORE", "AFTER", "UNTIL", "SINCE"],
    "meanings_expanded": ["～の間に", "～の間中"],
    "contexts": [
      {
        "parts": ["I fell asleep", "the movie."],
        "full": "I fell asleep during the movie.",
        "jp": "私は映画の間に眠ってしまった。",
        "is_correct": true
      },
      {
        "parts": ["Please wash your hands", "eating."],
        "full": "Please wash your hands before eating.",
        "jp": "食事の前に手を洗ってください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 199,
    "word": "ECONOMY",
    "meaning_core": "経済",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "CON", "type": "strong" },
      { "text": "o", "type": "weak" },
      { "text": "my", "type": "weak" }
    ],
    "synonyms": {
      "WEALTH": "富",
      "SYSTEM": "システム",
      "THRIFT": "節約"
    },
    "distractors": ["WASTE", "POVERTY", "CHAOS", "SPENDING"],
    "meanings_expanded": ["経済", "景気", "節約"],
    "contexts": [
      {
        "parts": ["The global", "is recovering."],
        "full": "The global economy is recovering.",
        "jp": "世界経済は回復している。",
        "is_correct": true
      },
      {
        "parts": ["He lives in", "."],
        "full": "He lives in poverty.",
        "jp": "彼は貧困の中で暮らしている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 200,
    "word": "EFFECTIVE",
    "meaning_core": "効果的な",
    "syllables": [
      { "text": "ef", "type": "weak" },
      { "text": "FEC", "type": "strong" },
      { "text": "tive", "type": "weak" }
    ],
    "synonyms": {
      "SUCCESSFUL": "成功した",
      "POWERFUL": "強力な",
      "EFFICIENT": "効率的な"
    },
    "distractors": ["USELESS", "INEFFECTIVE", "WEAK", "POINTLESS"],
    "meanings_expanded": ["効果的な", "有効な", "実際の"],
    "contexts": [
      {
        "parts": ["This medicine is very", "."],
        "full": "This medicine is very effective.",
        "jp": "この薬はとても効果的だ。",
        "is_correct": true
      },
      {
        "parts": ["His plan was", "."],
        "full": "His plan was useless.",
        "jp": "彼の計画は役に立たなかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 201,
    "word": "EFFICIENT",
    "meaning_core": "効率的な",
    "syllables": [
      { "text": "ef", "type": "weak" },
      { "text": "FI", "type": "strong" },
      { "text": "cient", "type": "weak" }
    ],
    "synonyms": {
      "EFFECTIVE": "効果的な",
      "PRODUCTIVE": "生産的な",
      "COMPETENT": "有能な"
    },
    "distractors": ["WASTEFUL", "INEFFICIENT", "SLOW", "LAZY"],
    "meanings_expanded": ["効率的な", "有能な", "無駄のない"],
    "contexts": [
      {
        "parts": ["This new engine is very", "."],
        "full": "This new engine is very efficient.",
        "jp": "この新しいエンジンは非常に効率的だ。",
        "is_correct": true
      },
      {
        "parts": ["He is a", "worker."],
        "full": "He is a lazy worker.",
        "jp": "彼は怠惰な働き手だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 203,
    "word": "EJECT",
    "meaning_core": "外に出す",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "JECT", "type": "strong" }
    ],
    "synonyms": {
      "EXPEL": "追放する",
      "THROW OUT": "投げ出す",
      "EMIT": "放出する"
    },
    "distractors": ["KEEP", "RETAIN", "ABSORB", "HOLD"],
    "meanings_expanded": ["（ディスクなどを）取り出す", "噴出する", "脱出する"],
    "contexts": [
      {
        "parts": ["Press the button to", "the CD."],
        "full": "Press the button to eject the CD.",
        "jp": "ボタンを押してCDを取り出してください。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the disk inside."],
        "full": "Please keep the disk inside.",
        "jp": "ディスクを中に入れたままにしてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 204,
    "word": "ELASTIC",
    "meaning_core": "弾力性の",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "LAS", "type": "strong" },
      { "text": "tic", "type": "weak" }
    ],
    "synonyms": {
      "FLEXIBLE": "柔軟な",
      "STRETCHY": "伸縮性のある",
      "RESILIENT": "弾力のある"
    },
    "distractors": ["RIGID", "STIFF", "HARD", "BRITTLE"],
    "meanings_expanded": ["弾力性のある", "伸縮自在の", "融通の利く"],
    "contexts": [
      {
        "parts": ["Rubber is an", "material."],
        "full": "Rubber is an elastic material.",
        "jp": "ゴムは弾力性のある素材だ。",
        "is_correct": true
      },
      {
        "parts": ["This metal is very", "."],
        "full": "This metal is very rigid.",
        "jp": "この金属は非常に硬い。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 205,
    "word": "ELECT",
    "meaning_core": "選出する",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "LECT", "type": "strong" }
    ],
    "synonyms": {
      "CHOOSE": "選ぶ",
      "VOTE": "投票する",
      "SELECT": "選択する"
    },
    "distractors": ["REJECT", "DISMISS", "IGNORE", "APPOINT"],
    "meanings_expanded": ["選出する", "選挙する"],
    "contexts": [
      {
        "parts": ["They voted to", "a new president."],
        "full": "They voted to elect a new president.",
        "jp": "彼らは新しい大統領を選出するために投票した。",
        "is_correct": true
      },
      {
        "parts": ["We decided to", "the offer."],
        "full": "We decided to reject the offer.",
        "jp": "私たちはその申し出を断ることにした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 206,
    "word": "ELIMINATE",
    "meaning_core": "排除する",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "LIM", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "nate", "type": "weak" }
    ],
    "synonyms": {
      "REMOVE": "取り除く",
      "GET RID OF": "処分する",
      "ERADICATE": "根絶する"
    },
    "distractors": ["ADD", "INCLUDE", "CREATE", "KEEP"],
    "meanings_expanded": ["排除する", "削除する", "予選落ちさせる"],
    "contexts": [
      {
        "parts": ["We must", "waste."],
        "full": "We must eliminate waste.",
        "jp": "私たちは無駄を排除しなければならない。",
        "is_correct": true
      },
      {
        "parts": ["Please", "more details."],
        "full": "Please add more details.",
        "jp": "もっと詳細を追加してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 207,
    "word": "ELOQUENT",
    "meaning_core": "雄弁な",
    "syllables": [
      { "text": "EL", "type": "strong" },
      { "text": "o", "type": "weak" },
      { "text": "quent", "type": "weak" }
    ],
    "synonyms": {
      "ARTICULATE": "はっきりした",
      "EXPRESSIVE": "表現豊かな",
      "PERSUASIVE": "説得力のある"
    },
    "distractors": ["INARTICULATE", "SHY", "SILENT", "HESITANT"],
    "meanings_expanded": ["雄弁な", "説得力のある"],
    "contexts": [
      {
        "parts": ["He gave an", "speech."],
        "full": "He gave an eloquent speech.",
        "jp": "彼は雄弁なスピーチをした。",
        "is_correct": true
      },
      {
        "parts": ["He was", "and quiet."],
        "full": "He was shy and quiet.",
        "jp": "彼は恥ずかしがり屋で静かだった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 208,
    "word": "ELOQUENTLY",
    "meaning_core": "雄弁に",
    "syllables": [
      { "text": "EL", "type": "strong" },
      { "text": "o", "type": "weak" },
      { "text": "quent", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "FLUENTLY": "流暢に",
      "EXPRESSIVELY": "表情豊かに",
      "PERSUASIVELY": "説得力を持って"
    },
    "distractors": ["POORLY", "BADLY", "SILENTLY", "WEAKLY"],
    "meanings_expanded": ["雄弁に", "感動的に"],
    "contexts": [
      {
        "parts": ["She spoke", "about human rights."],
        "full": "She spoke eloquently about human rights.",
        "jp": "彼女は人権について雄弁に語った。",
        "is_correct": true
      },
      {
        "parts": ["He spoke", "and stumbled."],
        "full": "He spoke poorly and stumbled.",
        "jp": "彼は下手に話し、つっかえた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 209,
    "word": "EMBODY",
    "meaning_core": "体現する",
    "syllables": [
      { "text": "em", "type": "weak" },
      { "text": "BOD", "type": "strong" },
      { "text": "y", "type": "weak" }
    ],
    "synonyms": {
      "REPRESENT": "代表する",
      "PERSONIFY": "擬人化する",
      "EXEMPLIFY": "実証する"
    },
    "distractors": ["HIDE", "CONCEAL", "DENY", "REJECT"],
    "meanings_expanded": ["体現する", "具現化する", "具体的に表現する"],
    "contexts": [
      {
        "parts": ["She seems to", "kindness."],
        "full": "She seems to embody kindness.",
        "jp": "彼女は親切心を体現しているようだ。",
        "is_correct": true
      },
      {
        "parts": ["He tries to", "his feelings."],
        "full": "He tries to hide his feelings.",
        "jp": "彼は感情を隠そうとしている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 210,
    "word": "EMERGE",
    "meaning_core": "現れる",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "MERGE", "type": "strong" }
    ],
    "synonyms": {
      "APPEAR": "現れる",
      "ARISE": "生じる",
      "SURFACE": "浮上する"
    },
    "distractors": ["DISAPPEAR", "VANISH", "FADE", "HIDE"],
    "meanings_expanded": ["現れる", "出現する", "明らかになる"],
    "contexts": [
      {
        "parts": ["The sun began to", "from the clouds."],
        "full": "The sun began to emerge from the clouds.",
        "jp": "太陽が雲から現れ始めた。",
        "is_correct": true
      },
      {
        "parts": ["The ghost seemed to", "."],
        "full": "The ghost seemed to vanish.",
        "jp": "幽霊は消えてしまったようだった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 211,
    "word": "EMOTION",
    "meaning_core": "感情",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "MO", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "FEELING": "感情",
      "SENTIMENT": "情緒",
      "PASSION": "情熱"
    },
    "distractors": ["LOGIC", "REASON", "THOUGHT", "FACT"],
    "meanings_expanded": ["感情", "情緒", "感動"],
    "contexts": [
      {
        "parts": ["He showed no", "on his face."],
        "full": "He showed no emotion on his face.",
        "jp": "彼は顔に感情を表さなかった。",
        "is_correct": true
      },
      {
        "parts": ["Use your", "to solve the problem."],
        "full": "Use your logic to solve the problem.",
        "jp": "論理を使って問題を解決しなさい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 212,
    "word": "EMPATHETIC",
    "meaning_core": "共感的な",
    "syllables": [
      { "text": "em", "type": "weak" },
      { "text": "pa", "type": "weak" },
      { "text": "THET", "type": "strong" },
      { "text": "ic", "type": "weak" }
    ],
    "synonyms": {
      "COMPASSIONATE": "思いやりのある",
      "UNDERSTANDING": "理解ある",
      "SYMPATHETIC": "同情的な"
    },
    "distractors": ["COLD", "INDIFFERENT", "CRUEL", "UNCARING"],
    "meanings_expanded": ["共感的な", "親身な"],
    "contexts": [
      {
        "parts": ["She is very", "towards others."],
        "full": "She is very empathetic towards others.",
        "jp": "彼女は他人に対してとても共感的だ。",
        "is_correct": true
      },
      {
        "parts": ["He was", "to my suffering."],
        "full": "He was indifferent to my suffering.",
        "jp": "彼は私の苦しみに無関心だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 213,
    "word": "EMPHASIZE",
    "meaning_core": "強調する",
    "syllables": [
      { "text": "EM", "type": "strong" },
      { "text": "pha", "type": "weak" },
      { "text": "size", "type": "weak" }
    ],
    "synonyms": {
      "STRESS": "強調する",
      "HIGHLIGHT": "目立たせる",
      "ACCENTUATE": "際立たせる"
    },
    "distractors": ["IGNORE", "DOWNPLAY", "NEGLECT", "HIDE"],
    "meanings_expanded": ["強調する", "重視する"],
    "contexts": [
      {
        "parts": ["I want to", "the importance of this rule."],
        "full": "I want to emphasize the importance of this rule.",
        "jp": "私はこのルールの重要性を強調したい。",
        "is_correct": true
      },
      {
        "parts": ["He tried to", "his mistakes."],
        "full": "He tried to hide his mistakes.",
        "jp": "彼は自分の間違いを隠そうとした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 214,
    "word": "EMPHATICALLY",
    "meaning_core": "断固として",
    "syllables": [
      { "text": "em", "type": "weak" },
      { "text": "PHAT", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "cal", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "STRONGLY": "強く",
      "FIRMLY": "断固として",
      "CATEGORICALLY": "絶対的に"
    },
    "distractors": ["WEAKLY", "HESITANTLY", "UNCERTAINLY", "QUIETLY"],
    "meanings_expanded": ["断固として", "力強く", "強調して"],
    "contexts": [
      {
        "parts": ["He", "denied the accusations."],
        "full": "He emphatically denied the accusations.",
        "jp": "彼はその告発を断固として否定した。",
        "is_correct": true
      },
      {
        "parts": ["She spoke", "so I couldn't hear."],
        "full": "She spoke quietly so I couldn't hear.",
        "jp": "彼女は静かに話したので聞こえなかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 215,
    "word": "ENCOUNTER",
    "meaning_core": "遭遇する",
    "syllables": [
      { "text": "en", "type": "weak" },
      { "text": "COUN", "type": "strong" },
      { "text": "ter", "type": "weak" }
    ],
    "synonyms": {
      "MEET": "会う",
      "FACE": "直面する",
      "COME ACROSS": "出くわす"
    },
    "distractors": ["AVOID", "MISS", "ESCAPE", "EVADE"],
    "meanings_expanded": ["遭遇する", "出くわす", "直面する"],
    "contexts": [
      {
        "parts": ["We might", "problems along the way."],
        "full": "We might encounter problems along the way.",
        "jp": "途中で問題に遭遇するかもしれない。",
        "is_correct": true
      },
      {
        "parts": ["Try to", "traffic."],
        "full": "Try to avoid traffic.",
        "jp": "渋滞を避けるようにしなさい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 216,
    "word": "ENDORSEMENT",
    "meaning_core": "支持",
    "syllables": [
      { "text": "en", "type": "weak" },
      { "text": "DORSE", "type": "strong" },
      { "text": "ment", "type": "weak" }
    ],
    "synonyms": {
      "SUPPORT": "支持",
      "APPROVAL": "承認",
      "BACKING": "後援"
    },
    "distractors": ["OPPOSITION", "REJECTION", "DISAPPROVAL", "CRITICISM"],
    "meanings_expanded": ["支持", "承認", "推奨"],
    "contexts": [
      {
        "parts": ["The candidate received the", "of the mayor."],
        "full": "The candidate received the endorsement of the mayor.",
        "jp": "その候補者は市長の支持を受けた。",
        "is_correct": true
      },
      {
        "parts": ["He faced strong", "from the public."],
        "full": "He faced strong opposition from the public.",
        "jp": "彼は大衆からの強い反対に直面した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 217,
    "word": "ENERGY",
    "meaning_core": "エネルギー",
    "syllables": [
      { "text": "EN", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "gy", "type": "weak" }
    ],
    "synonyms": {
      "POWER": "力",
      "VITALITY": "活力",
      "STRENGTH": "強さ"
    },
    "distractors": ["LETHARGY", "WEAKNESS", "FATIGUE", "TIREDNESS"],
    "meanings_expanded": ["エネルギー", "活力", "精力"],
    "contexts": [
      {
        "parts": ["Solar power is a renewable", "source."],
        "full": "Solar power is a renewable energy source.",
        "jp": "太陽光は再生可能エネルギー源だ。",
        "is_correct": true
      },
      {
        "parts": ["He felt", "after the run."],
        "full": "He felt fatigue after the run.",
        "jp": "彼は走った後、疲労を感じた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 218,
    "word": "ENHANCE",
    "meaning_core": "高める",
    "syllables": [
      { "text": "en", "type": "weak" },
      { "text": "HANCE", "type": "strong" }
    ],
    "synonyms": {
      "IMPROVE": "改善する",
      "BOOST": "高める",
      "INCREASE": "増やす"
    },
    "distractors": ["DECREASE", "DIMINISH", "WORSEN", "REDUCE"],
    "meanings_expanded": ["高める", "強化する", "増す"],
    "contexts": [
      {
        "parts": ["This sauce will", "the flavor of the meat."],
        "full": "This sauce will enhance the flavor of the meat.",
        "jp": "このソースは肉の風味を引き立てる（高める）だろう。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "the quality."],
        "full": "Don't worsen the quality.",
        "jp": "品質を悪化させないで。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 219,
    "word": "ENLIGHTENED",
    "meaning_core": "啓発された",
    "syllables": [
      { "text": "en", "type": "weak" },
      { "text": "LIGHT", "type": "strong" },
      { "text": "ened", "type": "weak" }
    ],
    "synonyms": {
      "INFORMED": "知識のある",
      "EDUCATED": "教養のある",
      "AWARE": "認識している"
    },
    "distractors": ["IGNORANT", "CONFUSED", "DARK", "UNAWARE"],
    "meanings_expanded": ["啓発された", "進歩的な", "見識のある"],
    "contexts": [
      {
        "parts": ["He has an", "view of education."],
        "full": "He has an enlightened view of education.",
        "jp": "彼は教育に関して進歩的な考えを持っている。",
        "is_correct": true
      },
      {
        "parts": ["He is", "about the facts."],
        "full": "He is ignorant about the facts.",
        "jp": "彼は事実について無知だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 220,
    "word": "ENORMOUS",
    "meaning_core": "巨大な",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "NOR", "type": "strong" },
      { "text": "mous", "type": "weak" }
    ],
    "synonyms": {
      "HUGE": "巨大な",
      "MASSIVE": "大規模な",
      "VAST": "広大な"
    },
    "distractors": ["TINY", "SMALL", "LITTLE", "MINUTE"],
    "meanings_expanded": ["巨大な", "莫大な"],
    "contexts": [
      {
        "parts": ["The project requires an", "amount of money."],
        "full": "The project requires an enormous amount of money.",
        "jp": "そのプロジェクトには莫大な資金が必要だ。",
        "is_correct": true
      },
      {
        "parts": ["It was a", "mistake."],
        "full": "It was a tiny mistake.",
        "jp": "それは些細な間違いだった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 221,
    "word": "ENROLL",
    "meaning_core": "入学する",
    "syllables": [
      { "text": "en", "type": "weak" },
      { "text": "ROLL", "type": "strong" }
    ],
    "synonyms": {
      "REGISTER": "登録する",
      "JOIN": "参加する",
      "SIGN UP": "申し込む"
    },
    "distractors": ["QUIT", "LEAVE", "DROP OUT", "WITHDRAW"],
    "meanings_expanded": ["入学する", "登録する", "入会する"],
    "contexts": [
      {
        "parts": ["I decided to", "in the art course."],
        "full": "I decided to enroll in the art course.",
        "jp": "私はアートコースに登録することに決めた。",
        "is_correct": true
      },
      {
        "parts": ["He decided to", "school."],
        "full": "He decided to quit school.",
        "jp": "彼は学校を辞めることに決めた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 222,
    "word": "ENTANGLE",
    "meaning_core": "絡まる",
    "syllables": [
      { "text": "en", "type": "weak" },
      { "text": "TAN", "type": "strong" },
      { "text": "gle", "type": "weak" }
    ],
    "synonyms": {
      "TWIST": "ねじる",
      "TRAP": "罠にかける",
      "INVOLVE": "巻き込む"
    },
    "distractors": ["UNTANGLE", "FREE", "RELEASE", "SEPARATE"],
    "meanings_expanded": ["～に絡まる", "巻き込む"],
    "contexts": [
      {
        "parts": ["The dolphin became", "in the net."],
        "full": "The dolphin became entangled in the net.",
        "jp": "イルカは網に絡まってしまった。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the knot."],
        "full": "Please untangle the knot.",
        "jp": "結び目を解いてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 223,
    "word": "ENTERPRISE",
    "meaning_core": "事業",
    "syllables": [
      { "text": "EN", "type": "strong" },
      { "text": "ter", "type": "weak" },
      { "text": "prise", "type": "weak" }
    ],
    "synonyms": {
      "BUSINESS": "ビジネス",
      "VENTURE": "ベンチャー",
      "COMPANY": "会社"
    },
    "distractors": ["IDLENESS", "INACTIVITY", "SAFETY", "CAUTION"],
    "meanings_expanded": ["事業", "企業", "冒険心"],
    "contexts": [
      {
        "parts": ["This is a risky", "."],
        "full": "This is a risky enterprise.",
        "jp": "これはリスクのある事業だ。",
        "is_correct": true
      },
      {
        "parts": ["He prefers", "over work."],
        "full": "He prefers idleness over work.",
        "jp": "彼は仕事より怠惰を好む。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 224,
    "word": "EQUITY",
    "meaning_core": "公平",
    "syllables": [
      { "text": "EQ", "type": "strong" },
      { "text": "ui", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "FAIRNESS": "公正",
      "JUSTICE": "正義",
      "IMPARTIALITY": "公平無私"
    },
    "distractors": ["BIAS", "UNFAIRNESS", "INJUSTICE", "PARTIALITY"],
    "meanings_expanded": ["公平", "公正", "（株主）資本"],
    "contexts": [
      {
        "parts": ["We must ensure", "in education."],
        "full": "We must ensure equity in education.",
        "jp": "教育における公平性を確保しなければならない。",
        "is_correct": true
      },
      {
        "parts": ["The judge showed", "."],
        "full": "The judge showed bias.",
        "jp": "裁判官は偏見を示した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 225,
    "word": "ERRONEOUSLY",
    "meaning_core": "誤って",
    "syllables": [
      { "text": "er", "type": "weak" },
      { "text": "RO", "type": "strong" },
      { "text": "ne", "type": "weak" },
      { "text": "ous", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "WRONGLY": "間違って",
      "INCORRECTLY": "不正確に",
      "MISTAKENLY": "誤って"
    },
    "distractors": ["CORRECTLY", "RIGHTLY", "ACCURATELY", "TRULY"],
    "meanings_expanded": ["誤って", "間違って"],
    "contexts": [
      {
        "parts": ["The letter was", "delivered."],
        "full": "The letter was erroneously delivered.",
        "jp": "その手紙は誤って配達された。",
        "is_correct": true
      },
      {
        "parts": ["He answered the question", "."],
        "full": "He answered the question correctly.",
        "jp": "彼は質問に正しく答えた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 226,
    "word": "ESTABLISH",
    "meaning_core": "設立する",
    "syllables": [
      { "text": "es", "type": "weak" },
      { "text": "TAB", "type": "strong" },
      { "text": "lish", "type": "weak" }
    ],
    "synonyms": {
      "FOUND": "創設する",
      "SET UP": "立ち上げる",
      "CREATE": "作る"
    },
    "distractors": ["DESTROY", "ABOLISH", "RUIN", "CLOSE"],
    "meanings_expanded": ["設立する", "確立する", "立証する"],
    "contexts": [
      {
        "parts": ["They plan to", "a new branch."],
        "full": "They plan to establish a new branch.",
        "jp": "彼らは新しい支店を設立する計画だ。",
        "is_correct": true
      },
      {
        "parts": ["They decided to", "the law."],
        "full": "They decided to abolish the law.",
        "jp": "彼らはその法律を廃止することに決めた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 227,
    "word": "ESTIMATE",
    "meaning_core": "見積もる",
    "syllables": [
      { "text": "ES", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "mate", "type": "weak" }
    ],
    "synonyms": {
      "CALCULATE": "計算する",
      "GUESS": "推測する",
      "ASSESS": "評価する"
    },
    "distractors": ["MEASURE", "KNOW", "PROVE", "VERIFY"],
    "meanings_expanded": ["見積もる", "推定する", "見積もり"],
    "contexts": [
      {
        "parts": ["Can you", "the cost?"],
        "full": "Can you estimate the cost?",
        "jp": "費用を見積もれますか？",
        "is_correct": true
      },
      {
        "parts": ["I can", "the exact length."],
        "full": "I can measure the exact length.",
        "jp": "私は正確な長さを測ることができる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 228,
    "word": "ETHNIC",
    "meaning_core": "民族の",
    "syllables": [
      { "text": "ETH", "type": "strong" },
      { "text": "nic", "type": "weak" }
    ],
    "synonyms": {
      "CULTURAL": "文化の",
      "RACIAL": "人種の",
      "TRIBAL": "部族の"
    },
    "distractors": ["GLOBAL", "UNIVERSAL", "INTERNATIONAL", "MODERN"],
    "meanings_expanded": ["民族の", "人種の"],
    "contexts": [
      {
        "parts": ["We enjoy", "food."],
        "full": "We enjoy ethnic food.",
        "jp": "私たちはエスニック料理（民族料理）を楽しむ。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "problem."],
        "full": "This is a global problem.",
        "jp": "これは地球規模の問題だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 229,
    "word": "EVACUATE",
    "meaning_core": "避難する",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "VAC", "type": "strong" },
      { "text": "u", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "LEAVE": "去る",
      "ESCAPE": "逃げる",
      "ABANDON": "捨てる"
    },
    "distractors": ["ENTER", "STAY", "REMAIN", "OCCUPY"],
    "meanings_expanded": ["避難する", "立ち退く"],
    "contexts": [
      {
        "parts": ["Residents were told to", "the area."],
        "full": "Residents were told to evacuate the area.",
        "jp": "住民はその地域から避難するように言われた。",
        "is_correct": true
      },
      {
        "parts": ["Please", "in the room."],
        "full": "Please stay in the room.",
        "jp": "部屋にとどまってください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 230,
    "word": "EVALUATE",
    "meaning_core": "評価する",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "VAL", "type": "strong" },
      { "text": "u", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "ASSESS": "査定する",
      "JUDGE": "判断する",
      "RATE": "格付けする"
    },
    "distractors": ["GUESS", "IGNORE", "NEGLECT", "OVERLOOK"],
    "meanings_expanded": ["評価する", "査定する"],
    "contexts": [
      {
        "parts": ["Teachers", "student performance."],
        "full": "Teachers evaluate student performance.",
        "jp": "教師は生徒の成績を評価する。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "the details."],
        "full": "Don't ignore the details.",
        "jp": "詳細を無視してはいけない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 231,
    "word": "EVAPORATE",
    "meaning_core": "蒸発する",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "VAP", "type": "strong" },
      { "text": "o", "type": "weak" },
      { "text": "rate", "type": "weak" }
    ],
    "synonyms": {
      "VAPORIZE": "気化する",
      "DRY UP": "干上がる",
      "VANISH": "消える"
    },
    "distractors": ["FREEZE", "SOLIDIFY", "CONDENSE", "LIQUEFY"],
    "meanings_expanded": ["蒸発する", "消滅する"],
    "contexts": [
      {
        "parts": ["Water will", "in the sun."],
        "full": "Water will evaporate in the sun.",
        "jp": "水は太陽の下で蒸発するだろう。",
        "is_correct": true
      },
      {
        "parts": ["Water will", "at zero degrees."],
        "full": "Water will freeze at zero degrees.",
        "jp": "水は0度で凍る。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 232,
    "word": "EVASION",
    "meaning_core": "回避",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "VA", "type": "strong" },
      { "text": "sion", "type": "weak" }
    ],
    "synonyms": {
      "AVOIDANCE": "忌避",
      "DODGING": "かわすこと",
      "ESCAPE": "逃亡"
    },
    "distractors": ["CONFRONTATION", "MEETING", "FACING", "HONESTY"],
    "meanings_expanded": ["回避", "脱税"],
    "contexts": [
      {
        "parts": ["He was charged with tax", "."],
        "full": "He was charged with tax evasion.",
        "jp": "彼は脱税で告発された。",
        "is_correct": true
      },
      {
        "parts": ["We need a direct", "."],
        "full": "We need a direct confrontation.",
        "jp": "私たちには直接対決が必要だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 235,
    "word": "EVENTUALLY",
    "meaning_core": "最終的に",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "VEN", "type": "strong" },
      { "text": "tu", "type": "weak" },
      { "text": "al", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "FINALLY": "ついに",
      "ULTIMATELY": "結局",
      "IN THE END": "最後には"
    },
    "distractors": ["INITIALLY", "FIRST", "NEVER", "IMMEDIATELY"],
    "meanings_expanded": ["最終的に", "結局は"],
    "contexts": [
      {
        "parts": ["He", "became a doctor."],
        "full": "He eventually became a doctor.",
        "jp": "彼は最終的に医者になった。",
        "is_correct": true
      },
      {
        "parts": ["He", "refused the offer."],
        "full": "He initially refused the offer.",
        "jp": "彼は最初、その申し出を断った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 236,
    "word": "EVIDENT",
    "meaning_core": "明白な",
    "syllables": [
      { "text": "EV", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "dent", "type": "weak" }
    ],
    "synonyms": {
      "OBVIOUS": "明らかな",
      "CLEAR": "明確な",
      "APPARENT": "明白な"
    },
    "distractors": ["UNCLEAR", "OBSCURE", "HIDDEN", "VAGUE"],
    "meanings_expanded": ["明白な", "明らかな"],
    "contexts": [
      {
        "parts": ["It was", "that she was unhappy."],
        "full": "It was evident that she was unhappy.",
        "jp": "彼女が不幸であることは明白だった。",
        "is_correct": true
      },
      {
        "parts": ["The answer is", "."],
        "full": "The answer is unclear.",
        "jp": "答えは不明瞭だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 237,
    "word": "EVIDENTLY",
    "meaning_core": "明らかに",
    "syllables": [
      { "text": "EV", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "dent", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "OBVIOUSLY": "明らかに",
      "CLEARLY": "はっきりと",
      "APPARENTLY": "見たところ"
    },
    "distractors": ["DOUBTFULLY", "UNCERTAINLY", "VAGUELY", "SECRETLY"],
    "meanings_expanded": ["明らかに", "見たところ"],
    "contexts": [
      {
        "parts": ["He is", "upset about the news."],
        "full": "He is evidently upset about the news.",
        "jp": "彼はそのニュースに明らかに動揺している。",
        "is_correct": true
      },
      {
        "parts": ["He spoke", "about his plans."],
        "full": "He spoke vaguely about his plans.",
        "jp": "彼は自分の計画について曖昧に話した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 238,
    "word": "EVOLUTION",
    "meaning_core": "進化",
    "syllables": [
      { "text": "ev", "type": "weak" },
      { "text": "o", "type": "weak" },
      { "text": "LU", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "DEVELOPMENT": "発展",
      "PROGRESS": "進歩",
      "GROWTH": "成長"
    },
    "distractors": ["REGRESSION", "DECLINE", "STAGNATION", "STOP"],
    "meanings_expanded": ["進化", "発展", "展開"],
    "contexts": [
      {
        "parts": ["Darwin studied the", "of species."],
        "full": "Darwin studied the evolution of species.",
        "jp": "ダーウィンは種の進化を研究した。",
        "is_correct": true
      },
      {
        "parts": ["The economy is in", "."],
        "full": "The economy is in decline.",
        "jp": "経済は衰退している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 239,
    "word": "EVOLVE",
    "meaning_core": "進化する",
    "syllables": [
      { "text": "e", "type": "weak" },
      { "text": "VOLVE", "type": "strong" }
    ],
    "synonyms": {
      "DEVELOP": "発展する",
      "ADVANCE": "進歩する",
      "CHANGE": "変化する"
    },
    "distractors": ["REGRESS", "REMAIN", "STAY", "STOP"],
    "meanings_expanded": ["進化する", "発展する"],
    "contexts": [
      {
        "parts": ["Animals must", "to survive."],
        "full": "Animals must evolve to survive.",
        "jp": "動物は生き残るために進化しなければならない。",
        "is_correct": true
      },
      {
        "parts": ["Some traditions never", "."],
        "full": "Some traditions never change.",
        "jp": "いくつかの伝統は決して変わらない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 240,
    "word": "EXAGGERATE",
    "meaning_core": "誇張する",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "AG", "type": "strong" },
      { "text": "ger", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "OVERSTATE": "大げさに言う",
      "MAGNIFY": "拡大する",
      "EMBELLISH": "脚色する"
    },
    "distractors": ["UNDERSTATE", "MINIMIZE", "IGNORE", "HIDE"],
    "meanings_expanded": ["誇張する", "大げさに言う"],
    "contexts": [
      {
        "parts": ["Don't", "the size of the fish."],
        "full": "Don't exaggerate the size of the fish.",
        "jp": "魚の大きさを誇張してはいけない。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the risks."],
        "full": "Please minimize the risks.",
        "jp": "リスクを最小限に抑えてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 241,
    "word": "EXCEED",
    "meaning_core": "上回る",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "CEED", "type": "strong" }
    ],
    "synonyms": {
      "SURPASS": "超える",
      "OUTDO": "勝る",
      "GO BEYOND": "越える"
    },
    "distractors": ["FAIL", "FALL BEHIND", "LOSE", "TRAIL"],
    "meanings_expanded": ["上回る", "超える", "（限度を）越える"],
    "contexts": [
      {
        "parts": ["The cost should not", "the budget."],
        "full": "The cost should not exceed the budget.",
        "jp": "費用は予算を超えてはならない。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "behind the others."],
        "full": "Don't fall behind the others.",
        "jp": "他の人に遅れをとるな。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 242,
    "word": "EXCEPT",
    "meaning_core": "～を除いて",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "CEPT", "type": "strong" }
    ],
    "synonyms": {
      "EXCLUDING": "除いて",
      "BUT": "～以外",
      "APART FROM": "～は別として"
    },
    "distractors": ["INCLUDING", "PLUS", "WITH", "AND"],
    "meanings_expanded": ["～を除いて", "～以外は"],
    "contexts": [
      {
        "parts": ["Everyone went", "John."],
        "full": "Everyone went except John.",
        "jp": "ジョン以外はみんな行った。",
        "is_correct": true
      },
      {
        "parts": ["The price is $10,", "tax."],
        "full": "The price is $10, including tax.",
        "jp": "価格は税込みで10ドルだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 243,
    "word": "EXCESSIVE",
    "meaning_core": "過度の",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "CES", "type": "strong" },
      { "text": "sive", "type": "weak" }
    ],
    "synonyms": {
      "EXTREME": "極端な",
      "IMMODERATE": "節度のない",
      "TOO MUCH": "多すぎる"
    },
    "distractors": ["MODERATE", "INSUFFICIENT", "LITTLE", "REASONABLE"],
    "meanings_expanded": ["過度の", "過剰な", "法外な"],
    "contexts": [
      {
        "parts": ["Avoid", "drinking."],
        "full": "Avoid excessive drinking.",
        "jp": "過度の飲酒は避けなさい。",
        "is_correct": true
      },
      {
        "parts": ["He drinks a", "amount."],
        "full": "He drinks a moderate amount.",
        "jp": "彼は適量を飲む。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 244,
    "word": "EXHAUSTION",
    "meaning_core": "過度の疲労",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "HAUS", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "FATIGUE": "疲労",
      "TIREDNESS": "疲れ",
      "WEARINESS": "倦怠"
    },
    "distractors": ["ENERGY", "VIGOR", "STRENGTH", "LIVELINESS"],
    "meanings_expanded": ["極度の疲労", "消耗", "枯渇"],
    "contexts": [
      {
        "parts": ["He collapsed from", "."],
        "full": "He collapsed from exhaustion.",
        "jp": "彼は過労で倒れた。",
        "is_correct": true
      },
      {
        "parts": ["She is full of", "."],
        "full": "She is full of energy.",
        "jp": "彼女は活力に満ちている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 245,
    "word": "EXPAND",
    "meaning_core": "拡大する",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "PAND", "type": "strong" }
    ],
    "synonyms": {
      "ENLARGE": "大きくする",
      "EXTEND": "広げる",
      "GROW": "成長する"
    },
    "distractors": ["SHRINK", "CONTRACT", "REDUCE", "DECREASE"],
    "meanings_expanded": ["拡大する", "膨張する", "広げる"],
    "contexts": [
      {
        "parts": ["Heat makes metal", "."],
        "full": "Heat makes metal expand.",
        "jp": "熱は金属を膨張させる。",
        "is_correct": true
      },
      {
        "parts": ["Cold makes metal", "."],
        "full": "Cold makes metal shrink.",
        "jp": "冷気は金属を収縮させる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 246,
    "word": "EXPEDITION",
    "meaning_core": "遠征",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "pe", "type": "weak" },
      { "text": "DI", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "JOURNEY": "旅",
      "VOYAGE": "航海",
      "MISSION": "任務"
    },
    "distractors": ["STAY", "VACATION", "REST", "HALT"],
    "meanings_expanded": ["遠征", "探検", "迅速さ"],
    "contexts": [
      {
        "parts": ["They went on an", "to the North Pole."],
        "full": "They went on an expedition to the North Pole.",
        "jp": "彼らは北極への遠征に出かけた。",
        "is_correct": true
      },
      {
        "parts": ["We are planning a", "."],
        "full": "We are planning a vacation.",
        "jp": "私たちは休暇を計画している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 247,
    "word": "EXPENDITURE",
    "meaning_core": "支出",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "PEN", "type": "strong" },
      { "text": "di", "type": "weak" },
      { "text": "ture", "type": "weak" }
    ],
    "synonyms": {
      "SPENDING": "出費",
      "COST": "費用",
      "EXPENSE": "経費"
    },
    "distractors": ["INCOME", "REVENUE", "PROFIT", "SAVINGS"],
    "meanings_expanded": ["支出", "経費", "消費"],
    "contexts": [
      {
        "parts": ["We need to cut", "on advertising."],
        "full": "We need to cut expenditure on advertising.",
        "jp": "私たちは広告への支出を削減する必要がある。",
        "is_correct": true
      },
      {
        "parts": ["Our", "has increased."],
        "full": "Our income has increased.",
        "jp": "私たちの収入は増加した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 248,
    "word": "EXPERTISE",
    "meaning_core": "専門知識",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "per", "type": "weak" },
      { "text": "TISE", "type": "strong" }
    ],
    "synonyms": {
      "SKILL": "技能",
      "KNOWLEDGE": "知識",
      "PROFICIENCY": "熟達"
    },
    "distractors": ["IGNORANCE", "INCOMPETENCE", "AMATEURISM", "CLUMSINESS"],
    "meanings_expanded": ["専門知識", "専門的技術"],
    "contexts": [
      {
        "parts": ["We need someone with", "in coding."],
        "full": "We need someone with expertise in coding.",
        "jp": "コーディングの専門知識を持つ人が必要だ。",
        "is_correct": true
      },
      {
        "parts": ["He showed", "of the subject."],
        "full": "He showed ignorance of the subject.",
        "jp": "彼はその主題について無知であることを示した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 249,
    "word": "EXPIRE",
    "meaning_core": "期限が切れる",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "PIRE", "type": "strong" }
    ],
    "synonyms": {
      "RUN OUT": "切れる",
      "END": "終わる",
      "TERMINATE": "終了する"
    },
    "distractors": ["START", "BEGIN", "RENEW", "CONTINUE"],
    "meanings_expanded": ["期限が切れる", "満了する", "息を引き取る"],
    "contexts": [
      {
        "parts": ["My passport will", "next month."],
        "full": "My passport will expire next month.",
        "jp": "私のパスポートは来月期限が切れる。",
        "is_correct": true
      },
      {
        "parts": ["The contract will", "soon."],
        "full": "The contract will start soon.",
        "jp": "契約はまもなく始まる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 250,
    "word": "EXPLICIT",
    "meaning_core": "明確な",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "PLIC", "type": "strong" },
      { "text": "it", "type": "weak" }
    ],
    "synonyms": {
      "CLEAR": "明らかな",
      "DIRECT": "直接的な",
      "PRECISE": "正確な"
    },
    "distractors": ["IMPLICIT", "VAGUE", "AMBIGUOUS", "UNCLEAR"],
    "meanings_expanded": ["明確な", "あからさまな", "率直な"],
    "contexts": [
      {
        "parts": ["He gave", "instructions."],
        "full": "He gave explicit instructions.",
        "jp": "彼は明確な指示を与えた。",
        "is_correct": true
      },
      {
        "parts": ["His answer was", "."],
        "full": "His answer was vague.",
        "jp": "彼の答えは曖昧だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 251,
    "word": "EXPLICITLY",
    "meaning_core": "明示的に",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "PLIC", "type": "strong" },
      { "text": "it", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "CLEARLY": "明確に",
      "DIRECTLY": "直接的に",
      "PLAINLY": "はっきりと"
    },
    "distractors": ["IMPLICITLY", "VAGUELY", "SECRETLY", "OBSCURELY"],
    "meanings_expanded": ["明示的に", "はっきりと", "露骨に"],
    "contexts": [
      {
        "parts": ["The rules were", "stated."],
        "full": "The rules were explicitly stated.",
        "jp": "ルールは明示的に述べられていた。",
        "is_correct": true
      },
      {
        "parts": ["He spoke", "about his plans."],
        "full": "He spoke vaguely about his plans.",
        "jp": "彼は計画について曖昧に話した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 252,
    "word": "EXTENSIVE",
    "meaning_core": "広範囲にわたる",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "TEN", "type": "strong" },
      { "text": "sive", "type": "weak" }
    ],
    "synonyms": {
      "VAST": "広大な",
      "WIDE": "広い",
      "COMPREHENSIVE": "包括的な"
    },
    "distractors": ["LIMITED", "NARROW", "SMALL", "RESTRICTED"],
    "meanings_expanded": ["広範囲にわたる", "大規模な", "広大な"],
    "contexts": [
      {
        "parts": ["The fire caused", "damage."],
        "full": "The fire caused extensive damage.",
        "jp": "火事は広範囲にわたる被害をもたらした。",
        "is_correct": true
      },
      {
        "parts": ["He has", "knowledge of the topic."],
        "full": "He has limited knowledge of the topic.",
        "jp": "彼はその話題について限られた知識しか持っていない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 253,
    "word": "EXTENSIVELY",
    "meaning_core": "広範囲に",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "TEN", "type": "strong" },
      { "text": "sive", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "WIDELY": "広く",
      "BROADLY": "広範に",
      "GREATLY": "大いに"
    },
    "distractors": ["SLIGHTLY", "BARELY", "LITTLE", "NARROWLY"],
    "meanings_expanded": ["広範囲に", "詳細に"],
    "contexts": [
      {
        "parts": ["She has traveled", "in Europe."],
        "full": "She has traveled extensively in Europe.",
        "jp": "彼女はヨーロッパを広範囲に旅行した。",
        "is_correct": true
      },
      {
        "parts": ["The topic was discussed", "."],
        "full": "The topic was discussed briefly.",
        "jp": "その話題は手短に議論された。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 254,
    "word": "EXTENT",
    "meaning_core": "範囲",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "TENT", "type": "strong" }
    ],
    "synonyms": {
      "DEGREE": "程度",
      "SCOPE": "範囲",
      "SCALE": "規模"
    },
    "distractors": ["NOTHING", "ZERO", "LACK", "NONE"],
    "meanings_expanded": ["範囲", "程度", "広がり"],
    "contexts": [
      {
        "parts": ["I agree with you to some", "."],
        "full": "I agree with you to some extent.",
        "jp": "ある程度までは君に同意する。",
        "is_correct": true
      },
      {
        "parts": ["What is the", "of the damage?"],
        "full": "What is the cause of the damage?",
        "jp": "被害の原因は何ですか？",
        "is_correct": false
      }
    ]
  },
  {
    "id": 255,
    "word": "EXTINCTION",
    "meaning_core": "絶滅",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "TINC", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "DISAPPEARANCE": "消滅",
      "DESTRUCTION": "破壊",
      "ELIMINATION": "排除"
    },
    "distractors": ["SURVIVAL", "EXISTENCE", "BIRTH", "CREATION"],
    "meanings_expanded": ["絶滅", "消滅", "鎮火"],
    "contexts": [
      {
        "parts": ["Many species face", "due to climate change."],
        "full": "Many species face extinction due to climate change.",
        "jp": "多くの種が気候変動により絶滅の危機に瀕している。",
        "is_correct": true
      },
      {
        "parts": ["We celebrate the", "of a new species."],
        "full": "We celebrate the discovery of a new species.",
        "jp": "私たちは新種の発見を祝う。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 256,
    "word": "EXTREMELY",
    "meaning_core": "極めて",
    "syllables": [
      { "text": "ex", "type": "weak" },
      { "text": "TREME", "type": "strong" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "VERY": "とても",
      "HIGHLY": "大いに",
      "EXCEEDINGLY": "非常に"
    },
    "distractors": ["SLIGHTLY", "A BIT", "FAIRLY", "MODERATELY"],
    "meanings_expanded": ["極めて", "極端に", "非常に"],
    "contexts": [
      {
        "parts": ["It is", "dangerous to swim here."],
        "full": "It is extremely dangerous to swim here.",
        "jp": "ここで泳ぐのは極めて危険だ。",
        "is_correct": true
      },
      {
        "parts": ["He was", "tired."],
        "full": "He was slightly tired.",
        "jp": "彼は少し疲れていた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 257,
    "word": "FACILITY",
    "meaning_core": "施設",
    "syllables": [
      { "text": "fa", "type": "weak" },
      { "text": "CIL", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "AMENITY": "設備",
      "ESTABLISHMENT": "施設",
      "EQUIPMENT": "備品"
    },
    "distractors": ["DIFFICULTY", "BARRIER", "PROBLEM", "OBSTACLE"],
    "meanings_expanded": ["施設", "設備", "才能"],
    "contexts": [
      {
        "parts": ["The new sports", "is open."],
        "full": "The new sports facility is open.",
        "jp": "新しいスポーツ施設がオープンした。",
        "is_correct": true
      },
      {
        "parts": ["She has a", "for languages."],
        "full": "She has a talent for languages.",
        "jp": "彼女には語学の才能がある。（※facilityは才能という意味も持つが文脈としてはtalentが一般的）",
        "is_correct": true
      }
    ]
  },
  {
    "id": 258,
    "word": "FAMINE",
    "meaning_core": "飢饉",
    "syllables": [
      { "text": "FAM", "type": "strong" },
      { "text": "ine", "type": "weak" }
    ],
    "synonyms": {
      "STARVATION": "飢餓",
      "HUNGER": "飢え",
      "SCARCITY": "不足"
    },
    "distractors": ["FEAST", "PLENTY", "ABUNDANCE", "SURPLUS"],
    "meanings_expanded": ["飢饉", "深刻な欠乏", "飢餓"],
    "contexts": [
      {
        "parts": ["The war caused widespread", "."],
        "full": "The war caused widespread famine.",
        "jp": "戦争は広範囲にわたる飢饉を引き起こした。",
        "is_correct": true
      },
      {
        "parts": ["They celebrated with a", "."],
        "full": "They celebrated with a feast.",
        "jp": "彼らは宴会で祝った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 259,
    "word": "FASCINATION",
    "meaning_core": "魅力",
    "syllables": [
      { "text": "fas", "type": "weak" },
      { "text": "ci", "type": "weak" },
      { "text": "NA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "INTEREST": "興味",
      "ATTRACTION": "魅力",
      "CHARM": "魅力"
    },
    "distractors": ["BOREDOM", "DISINTEREST", "APATHY", "DISGUST"],
    "meanings_expanded": ["魅力", "興味", "うっとりさせる状態"],
    "contexts": [
      {
        "parts": ["She has a", "with ancient history."],
        "full": "She has a fascination with ancient history.",
        "jp": "彼女は古代史に魅了されている。",
        "is_correct": true
      },
      {
        "parts": ["I felt", "during the lecture."],
        "full": "I felt boredom during the lecture.",
        "jp": "私は講義中退屈を感じた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 260,
    "word": "FATAL",
    "meaning_core": "致命的な",
    "syllables": [
      { "text": "FA", "type": "strong" },
      { "text": "tal", "type": "weak" }
    ],
    "synonyms": {
      "DEADLY": "致命的な",
      "LETHAL": "致死の",
      "MORTAL": "死に至る"
    },
    "distractors": ["HARMLESS", "SAFE", "MINOR", "TRIVIAL"],
    "meanings_expanded": ["致命的な", "命に関わる", "運命の"],
    "contexts": [
      {
        "parts": ["It was a", "mistake."],
        "full": "It was a fatal mistake.",
        "jp": "それは致命的な間違いだった。",
        "is_correct": true
      },
      {
        "parts": ["He suffered a", "injury."],
        "full": "He suffered a minor injury.",
        "jp": "彼は軽い怪我をした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 261,
    "word": "FEASIBLE",
    "meaning_core": "実現可能な",
    "syllables": [
      { "text": "FEA", "type": "strong" },
      { "text": "si", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "POSSIBLE": "可能な",
      "PRACTICAL": "実用的な",
      "VIABLE": "実行可能な"
    },
    "distractors": ["IMPOSSIBLE", "IMPRACTICAL", "UNLIKELY", "HOPELESS"],
    "meanings_expanded": ["実現可能な", "実行できる", "もっともらしい"],
    "contexts": [
      {
        "parts": ["The plan seems", "."],
        "full": "The plan seems feasible.",
        "jp": "その計画は実現可能に見える。",
        "is_correct": true
      },
      {
        "parts": ["It is", "to fly to the sun."],
        "full": "It is impossible to fly to the sun.",
        "jp": "太陽まで飛ぶことは不可能だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 262,
    "word": "FEATURE",
    "meaning_core": "特徴",
    "syllables": [
      { "text": "FEA", "type": "strong" },
      { "text": "ture", "type": "weak" }
    ],
    "synonyms": {
      "CHARACTERISTIC": "特徴",
      "TRAIT": "特性",
      "ASPECT": "側面"
    },
    "distractors": ["WHOLE", "TOTALITY", "EXCEPTION", "LACK"],
    "meanings_expanded": ["特徴", "顔立ち", "特集記事"],
    "contexts": [
      {
        "parts": ["The camera has a zoom", "."],
        "full": "The camera has a zoom feature.",
        "jp": "そのカメラにはズーム機能がある。",
        "is_correct": true
      },
      {
        "parts": ["The magazine will", "an interview with him."],
        "full": "The magazine will feature an interview with him.",
        "jp": "その雑誌は彼のインタビューを特集するだろう。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 263,
    "word": "FIRM",
    "meaning_core": "固い",
    "syllables": [
      { "text": "FIRM", "type": "strong" }
    ],
    "synonyms": {
      "HARD": "固い",
      "SOLID": "堅固な",
      "STRICT": "厳しい"
    },
    "distractors": ["SOFT", "WEAK", "FLEXIBLE", "LOOSE"],
    "meanings_expanded": ["固い", "断固とした", "会社"],
    "contexts": [
      {
        "parts": ["He gave me a", "handshake."],
        "full": "He gave me a firm handshake.",
        "jp": "彼は私と固い握手を交わした。",
        "is_correct": true
      },
      {
        "parts": ["The mattress is too", "."],
        "full": "The mattress is too soft.",
        "jp": "そのマットレスは柔らかすぎる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 264,
    "word": "FLATTER",
    "meaning_core": "お世辞を言う",
    "syllables": [
      { "text": "FLAT", "type": "strong" },
      { "text": "ter", "type": "weak" }
    ],
    "synonyms": {
      "PRAISE": "褒める",
      "COMPLIMENT": "賛辞を贈る",
      "BUTTER UP": "ご機嫌をとる"
    },
    "distractors": ["INSULT", "CRITICIZE", "OFFEND", "MOCK"],
    "meanings_expanded": ["お世辞を言う", "実物より良く見せる", "うれしがらせる"],
    "contexts": [
      {
        "parts": ["Don't try to", "me."],
        "full": "Don't try to flatter me.",
        "jp": "私にお世辞を言おうとしないで。",
        "is_correct": true
      },
      {
        "parts": ["That photo really", "you."],
        "full": "That photo really flatters you.",
        "jp": "その写真は君を実物より良く見せている（写りがいい）。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 265,
    "word": "FLEXIBLE",
    "meaning_core": "柔軟な",
    "syllables": [
      { "text": "FLEX", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "ADAPTABLE": "適応できる",
      "PLIABLE": "曲げやすい",
      "ELASTIC": "弾力のある"
    },
    "distractors": ["RIGID", "STIFF", "STUBBORN", "FIXED"],
    "meanings_expanded": ["柔軟な", "融通の利く", "曲げやすい"],
    "contexts": [
      {
        "parts": ["My schedule is quite", "."],
        "full": "My schedule is quite flexible.",
        "jp": "私のスケジュールはかなり融通が利く。",
        "is_correct": true
      },
      {
        "parts": ["This material is", "and hard."],
        "full": "This material is rigid and hard.",
        "jp": "この素材は硬くて固い。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 266,
    "word": "FLOCK",
    "meaning_core": "群れ",
    "syllables": [
      { "text": "FLOCK", "type": "strong" }
    ],
    "synonyms": {
      "GROUP": "集団",
      "HERD": "（家畜の）群れ",
      "CROWD": "群衆"
    },
    "distractors": ["INDIVIDUAL", "ONE", "SINGLE", "SOLO"],
    "meanings_expanded": ["（鳥・羊などの）群れ", "群衆", "集まる"],
    "contexts": [
      {
        "parts": ["A", "of birds flew over the lake."],
        "full": "A flock of birds flew over the lake.",
        "jp": "鳥の群れが湖の上を飛んでいった。",
        "is_correct": true
      },
      {
        "parts": ["People", "to the beach in summer."],
        "full": "People flock to the beach in summer.",
        "jp": "夏には人々がビーチに押し寄せる。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 267,
    "word": "FLUCTUATE",
    "meaning_core": "変動する",
    "syllables": [
      { "text": "FLUC", "type": "strong" },
      { "text": "tu", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "VARY": "変わる",
      "CHANGE": "変化する",
      "SHIFT": "移行する"
    },
    "distractors": ["STABILIZE", "REMAIN", "STAY", "FIX"],
    "meanings_expanded": ["変動する", "上下する", "動揺する"],
    "contexts": [
      {
        "parts": ["Oil prices", "daily."],
        "full": "Oil prices fluctuate daily.",
        "jp": "石油価格は毎日変動する。",
        "is_correct": true
      },
      {
        "parts": ["The temperature remained", "."],
        "full": "The temperature remained stable.",
        "jp": "気温は安定していた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 268,
    "word": "FORESEE",
    "meaning_core": "予見する",
    "syllables": [
      { "text": "fore", "type": "weak" },
      { "text": "SEE", "type": "strong" }
    ],
    "synonyms": {
      "PREDICT": "予測する",
      "ANTICIPATE": "予期する",
      "EXPECT": "期待する"
    },
    "distractors": ["IGNORE", "MISS", "DOUBT", "FORGET"],
    "meanings_expanded": ["予見する", "見越す"],
    "contexts": [
      {
        "parts": ["I didn't", "any problems."],
        "full": "I didn't foresee any problems.",
        "jp": "私は何の問題も予見していなかった。",
        "is_correct": true
      },
      {
        "parts": ["Can you", "the future?"],
        "full": "Can you predict the future?",
        "jp": "未来を予測できますか？",
        "is_correct": true
      }
    ]
  },
  {
    "id": 269,
    "word": "FORGE",
    "meaning_core": "築き上げる",
    "syllables": [
      { "text": "FORGE", "type": "strong" }
    ],
    "synonyms": {
      "BUILD": "築く",
      "CREATE": "作る",
      "FAKE": "偽造する"
    },
    "distractors": ["DESTROY", "BREAK", "RUIN", "DEMOLISH"],
    "meanings_expanded": ["築き上げる", "偽造する", "鍛造する"],
    "contexts": [
      {
        "parts": ["They managed to", "a strong alliance."],
        "full": "They managed to forge a strong alliance.",
        "jp": "彼らは強力な同盟を築き上げることができた。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "my signature."],
        "full": "Don't forge my signature.",
        "jp": "私の署名を偽造しないで。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 270,
    "word": "FORMIDABLE",
    "meaning_core": "恐るべき",
    "syllables": [
      { "text": "FOR", "type": "strong" },
      { "text": "mi", "type": "weak" },
      { "text": "da", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "INTIMIDATING": "威圧的な",
      "IMPRESSIVE": "印象的な",
      "POWERFUL": "強力な"
    },
    "distractors": ["WEAK", "EASY", "HARMLESS", "TINY"],
    "meanings_expanded": ["恐るべき", "手強い", "畏敬の念を起こさせる"],
    "contexts": [
      {
        "parts": ["He is a", "opponent."],
        "full": "He is a formidable opponent.",
        "jp": "彼は手強い相手だ。",
        "is_correct": true
      },
      {
        "parts": ["The task was", "easy."],
        "full": "The task was surprisingly easy.",
        "jp": "その仕事は驚くほど簡単だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 271,
    "word": "FORTUNATE",
    "meaning_core": "幸運な",
    "syllables": [
      { "text": "FOR", "type": "strong" },
      { "text": "tu", "type": "weak" },
      { "text": "nate", "type": "weak" }
    ],
    "synonyms": {
      "LUCKY": "運が良い",
      "BLESSED": "恵まれた",
      "FAVORABLE": "好都合な"
    },
    "distractors": ["UNLUCKY", "TRAGIC", "SAD", "POOR"],
    "meanings_expanded": ["幸運な", "運が良い"],
    "contexts": [
      {
        "parts": ["We were", "to escape unhurt."],
        "full": "We were fortunate to escape unhurt.",
        "jp": "私たちは幸運にも無傷で逃げることができた。",
        "is_correct": true
      },
      {
        "parts": ["It was a", "accident."],
        "full": "It was a tragic accident.",
        "jp": "それは悲劇的な事故だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 272,
    "word": "FOSTER",
    "meaning_core": "育成する",
    "syllables": [
      { "text": "FOS", "type": "strong" },
      { "text": "ter", "type": "weak" }
    ],
    "synonyms": {
      "NURTURE": "育てる",
      "PROMOTE": "促進する",
      "ENCOURAGE": "助長する"
    },
    "distractors": ["NEGLECT", "IGNORE", "HINDER", "HALT"],
    "meanings_expanded": ["育成する", "促進する", "養育する"],
    "contexts": [
      {
        "parts": ["We want to", "innovation."],
        "full": "We want to foster innovation.",
        "jp": "私たちはイノベーションを育成したい。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the growth of weeds."],
        "full": "Please stop the growth of weeds.",
        "jp": "雑草の成長を止めてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 273,
    "word": "FRACTURE",
    "meaning_core": "骨折",
    "syllables": [
      { "text": "FRAC", "type": "strong" },
      { "text": "ture", "type": "weak" }
    ],
    "synonyms": {
      "BREAK": "破損",
      "CRACK": "ひび",
      "SPLIT": "裂け目"
    },
    "distractors": ["HEALING", "CURE", "WHOLE", "REPAIR"],
    "meanings_expanded": ["骨折", "割れ目", "破砕"],
    "contexts": [
      {
        "parts": ["He suffered a leg", "."],
        "full": "He suffered a leg fracture.",
        "jp": "彼は足を骨折した。",
        "is_correct": true
      },
      {
        "parts": ["The", "was healed."],
        "full": "The wound was healed.",
        "jp": "傷は癒えた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 274,
    "word": "FRAGILE",
    "meaning_core": "こわれやすい",
    "syllables": [
      { "text": "FRAG", "type": "strong" },
      { "text": "ile", "type": "weak" }
    ],
    "synonyms": {
      "DELICATE": "繊細な",
      "BREAKABLE": "壊れやすい",
      "WEAK": "弱い"
    },
    "distractors": ["STRONG", "TOUGH", "DURABLE", "ROBUST"],
    "meanings_expanded": ["こわれやすい", "もろい", "虚弱な"],
    "contexts": [
      {
        "parts": ["Handle with care; it is", "."],
        "full": "Handle with care; it is fragile.",
        "jp": "取扱注意、それは壊れやすい。",
        "is_correct": true
      },
      {
        "parts": ["This box is", "and heavy."],
        "full": "This box is strong and heavy.",
        "jp": "この箱は丈夫で重い。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 275,
    "word": "FRICTION",
    "meaning_core": "摩擦",
    "syllables": [
      { "text": "FRIC", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "RUBBING": "擦れ",
      "CONFLICT": "対立",
      "RESISTANCE": "抵抗"
    },
    "distractors": ["HARMONY", "PEACE", "SMOOTHNESS", "SLIP"],
    "meanings_expanded": ["摩擦", "不和", "軋轢"],
    "contexts": [
      {
        "parts": ["Oil reduces", "in the engine."],
        "full": "Oil reduces friction in the engine.",
        "jp": "油はエンジンの摩擦を減らす。",
        "is_correct": true
      },
      {
        "parts": ["There is", "between the two countries."],
        "full": "There is peace between the two countries.",
        "jp": "二国間には平和がある。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 276,
    "word": "FRUSTRATION",
    "meaning_core": "欲求不満",
    "syllables": [
      { "text": "frus", "type": "weak" },
      { "text": "TRA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "ANNOYANCE": "いらだち",
      "IRRITATION": "焦燥",
      "DISAPPOINTMENT": "失望"
    },
    "distractors": ["SATISFACTION", "JOY", "PLEASURE", "CONTENTMENT"],
    "meanings_expanded": ["欲求不満", "挫折", "イライラ"],
    "contexts": [
      {
        "parts": ["He shouted in", "."],
        "full": "He shouted in frustration.",
        "jp": "彼は欲求不満で叫んだ。",
        "is_correct": true
      },
      {
        "parts": ["She smiled with", "."],
        "full": "She smiled with satisfaction.",
        "jp": "彼女は満足げに微笑んだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 277,
    "word": "FUND",
    "meaning_core": "資金提供する",
    "syllables": [
      { "text": "FUND", "type": "strong" }
    ],
    "synonyms": {
      "FINANCE": "融資する",
      "SUPPORT": "支援する",
      "SUBSIDIZE": "助成する"
    },
    "distractors": ["DEFUND", "WITHDRAW", "DEBT", "OWE"],
    "meanings_expanded": ["資金提供する", "資金", "基金"],
    "contexts": [
      {
        "parts": ["The government will", "the project."],
        "full": "The government will fund the project.",
        "jp": "政府はそのプロジェクトに資金を提供するだろう。",
        "is_correct": true
      },
      {
        "parts": ["We need to", "money from the bank."],
        "full": "We need to borrow money from the bank.",
        "jp": "私たちは銀行からお金を借りる必要がある。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 278,
    "word": "FUSS",
    "meaning_core": "大騒ぎ",
    "syllables": [
      { "text": "FUSS", "type": "strong" }
    ],
    "synonyms": {
      "COMMOTION": "騒動",
      "BOTHER": "面倒",
      "STIR": "騒ぎ"
    },
    "distractors": ["CALM", "PEACE", "SILENCE", "QUIET"],
    "meanings_expanded": ["大騒ぎ", "空騒ぎ", "やきもきすること"],
    "contexts": [
      {
        "parts": ["Don't make a", "over nothing."],
        "full": "Don't make a fuss over nothing.",
        "jp": "何でもないことで大騒ぎするな。",
        "is_correct": true
      },
      {
        "parts": ["Enjoy the", "and quiet."],
        "full": "Enjoy the peace and quiet.",
        "jp": "平穏と静寂を楽しんで。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 279,
    "word": "GENDER",
    "meaning_core": "性別",
    "syllables": [
      { "text": "GEN", "type": "strong" },
      { "text": "der", "type": "weak" }
    ],
    "synonyms": {
      "SEX": "性",
      "TYPE": "種類",
      "KIND": "種"
    },
    "distractors": ["AGE", "HEIGHT", "WEIGHT", "COLOR"],
    "meanings_expanded": ["ジェンダー", "性別"],
    "contexts": [
      {
        "parts": ["Discrimination based on", "is illegal."],
        "full": "Discrimination based on gender is illegal.",
        "jp": "性別に基づく差別は違法だ。",
        "is_correct": true
      },
      {
        "parts": ["What is your", "?"],
        "full": "What is your age?",
        "jp": "あなたの年齢は何歳ですか？",
        "is_correct": false
      }
    ]
  },
  {
    "id": 280,
    "word": "GENERATE",
    "meaning_core": "生み出す",
    "syllables": [
      { "text": "GEN", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "PRODUCE": "生産する",
      "CREATE": "創造する",
      "MAKE": "作る"
    },
    "distractors": ["DESTROY", "STOP", "END", "KILL"],
    "meanings_expanded": ["生み出す", "発生させる", "引き起こす"],
    "contexts": [
      {
        "parts": ["Solar panels", "electricity."],
        "full": "Solar panels generate electricity.",
        "jp": "ソーラーパネルは電気を生み出す。",
        "is_correct": true
      },
      {
        "parts": ["Fire can", "wood."],
        "full": "Fire can destroy wood.",
        "jp": "火は木を破壊しうる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 281,
    "word": "GENEROUS",
    "meaning_core": "気前のよい",
    "syllables": [
      { "text": "GEN", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "ous", "type": "weak" }
    ],
    "synonyms": {
      "LIBERAL": "気前のよい",
      "KIND": "親切な",
      "CHARITABLE": "慈悲深い"
    },
    "distractors": ["STINGY", "SELFISH", "MEAN", "GREEDY"],
    "meanings_expanded": ["気前のよい", "寛大な", "たくさんの"],
    "contexts": [
      {
        "parts": ["He made a", "donation."],
        "full": "He made a generous donation.",
        "jp": "彼は気前のよい寄付をした。",
        "is_correct": true
      },
      {
        "parts": ["He is very", "with his money."],
        "full": "He is very stingy with his money.",
        "jp": "彼はお金にとてもケチだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 282,
    "word": "GLORIOUS",
    "meaning_core": "栄光の",
    "syllables": [
      { "text": "GLO", "type": "strong" },
      { "text": "ri", "type": "weak" },
      { "text": "ous", "type": "weak" }
    ],
    "synonyms": {
      "MAGNIFICENT": "壮大な",
      "SPLENDID": "素晴らしい",
      "GRAND": "雄大な"
    },
    "distractors": ["SHAMEFUL", "TERRIBLE", "BAD", "AWFUL"],
    "meanings_expanded": ["栄光の", "素晴らしい", "輝かしい"],
    "contexts": [
      {
        "parts": ["It was a", "victory."],
        "full": "It was a glorious victory.",
        "jp": "それは栄光の勝利だった。",
        "is_correct": true
      },
      {
        "parts": ["It was a", "defeat."],
        "full": "It was a shameful defeat.",
        "jp": "それは恥ずべき敗北だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 283,
    "word": "GOVERN",
    "meaning_core": "統治する",
    "syllables": [
      { "text": "GOV", "type": "strong" },
      { "text": "ern", "type": "weak" }
    ],
    "synonyms": {
      "RULE": "支配する",
      "CONTROL": "管理する",
      "LEAD": "導く"
    },
    "distractors": ["OBEY", "FOLLOW", "SERVE", "SUBMIT"],
    "meanings_expanded": ["統治する", "治める", "左右する"],
    "contexts": [
      {
        "parts": ["The president will", "the country."],
        "full": "The president will govern the country.",
        "jp": "大統領が国を統治するだろう。",
        "is_correct": true
      },
      {
        "parts": ["Citizens must", "the law."],
        "full": "Citizens must obey the law.",
        "jp": "市民は法律に従わなければならない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 284,
    "word": "GRACE",
    "meaning_core": "優雅さ",
    "syllables": [
      { "text": "GRACE", "type": "strong" }
    ],
    "synonyms": {
      "ELEGANCE": "優雅",
      "CHARM": "魅力",
      "POISE": "釣り合い"
    },
    "distractors": ["CLUMSINESS", "AWKWARDNESS", "RUDENESS", "UGLINESS"],
    "meanings_expanded": ["優雅さ", "気品", "恩寵"],
    "contexts": [
      {
        "parts": ["She danced with", "."],
        "full": "She danced with grace.",
        "jp": "彼女は優雅に踊った。",
        "is_correct": true
      },
      {
        "parts": ["He moved with", "."],
        "full": "He moved with clumsiness.",
        "jp": "彼は不器用に動いた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 285,
    "word": "GRACIOUS",
    "meaning_core": "礼儀正しい",
    "syllables": [
      { "text": "GRA", "type": "strong" },
      { "text": "cious", "type": "weak" }
    ],
    "synonyms": {
      "POLITE": "礼儀正しい",
      "COURTEOUS": "丁寧な",
      "KIND": "親切な"
    },
    "distractors": ["RUDE", "IMPOLITE", "MEAN", "UNKIND"],
    "meanings_expanded": ["礼儀正しい", "親切な", "優雅な"],
    "contexts": [
      {
        "parts": ["She was a", "host."],
        "full": "She was a gracious host.",
        "jp": "彼女は礼儀正しいホストだった。",
        "is_correct": true
      },
      {
        "parts": ["He made a", "remark."],
        "full": "He made a rude remark.",
        "jp": "彼は失礼な発言をした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 286,
    "word": "GRADUALLY",
    "meaning_core": "徐々に",
    "syllables": [
      { "text": "GRAD", "type": "strong" },
      { "text": "u", "type": "weak" },
      { "text": "al", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "SLOWLY": "ゆっくりと",
      "STEADILY": "着実に",
      "LITTLE BY LITTLE": "少しずつ"
    },
    "distractors": ["SUDDENLY", "QUICKLY", "INSTANTLY", "IMMEDIATELY"],
    "meanings_expanded": ["徐々に", "次第に"],
    "contexts": [
      {
        "parts": ["The weather is", "getting warmer."],
        "full": "The weather is gradually getting warmer.",
        "jp": "天気は徐々に暖かくなっている。",
        "is_correct": true
      },
      {
        "parts": ["The car stopped", "."],
        "full": "The car stopped suddenly.",
        "jp": "車は突然止まった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 287,
    "word": "GREGARIOUS",
    "meaning_core": "社交的な",
    "syllables": [
      { "text": "gre", "type": "weak" },
      { "text": "GAR", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ous", "type": "weak" }
    ],
    "synonyms": {
      "SOCIABLE": "社交的な",
      "OUTGOING": "外向的な",
      "FRIENDLY": "友好的な"
    },
    "distractors": ["SHY", "INTROVERTED", "LONELY", "RESERVED"],
    "meanings_expanded": ["社交的な", "群居する"],
    "contexts": [
      {
        "parts": ["He is a", "person who loves parties."],
        "full": "He is a gregarious person who loves parties.",
        "jp": "彼はパーティー好きの社交的な人だ。",
        "is_correct": true
      },
      {
        "parts": ["She is very", "and quiet."],
        "full": "She is very shy and quiet.",
        "jp": "彼女はとても恥ずかしがり屋で静かだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 288,
    "word": "GRIEVANCE",
    "meaning_core": "不平",
    "syllables": [
      { "text": "GRIEV", "type": "strong" },
      { "text": "ance", "type": "weak" }
    ],
    "synonyms": {
      "COMPLAINT": "不満",
      "INJUSTICE": "不正",
      "GRUDGE": "恨み"
    },
    "distractors": ["PRAISE", "COMPLIMENT", "JOY", "SATISFACTION"],
    "meanings_expanded": ["不平", "苦情", "不当な扱い"],
    "contexts": [
      {
        "parts": ["Employees filed a", "against the company."],
        "full": "Employees filed a grievance against the company.",
        "jp": "従業員たちは会社に対して苦情を申し立てた。",
        "is_correct": true
      },
      {
        "parts": ["He received", "for his work."],
        "full": "He received praise for his work.",
        "jp": "彼は仕事に対して称賛を受けた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 289,
    "word": "GRIEVE",
    "meaning_core": "悲しむ",
    "syllables": [
      { "text": "GRIEVE", "type": "strong" }
    ],
    "synonyms": {
      "MOURN": "喪に服す",
      "SORROW": "悲しむ",
      "LAMENT": "嘆く"
    },
    "distractors": ["REJOICE", "CELEBRATE", "LAUGH", "SMILE"],
    "meanings_expanded": ["深く悲しむ", "嘆き悲しむ"],
    "contexts": [
      {
        "parts": ["We", "for the loss of our friend."],
        "full": "We grieve for the loss of our friend.",
        "jp": "私たちは友人を失ったことを悲しんでいる。",
        "is_correct": true
      },
      {
        "parts": ["We should", "the victory."],
        "full": "We should celebrate the victory.",
        "jp": "私たちは勝利を祝うべきだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 290,
    "word": "GUILT",
    "meaning_core": "罪悪感",
    "syllables": [
      { "text": "GUILT", "type": "strong" }
    ],
    "synonyms": {
      "SHAME": "恥",
      "REMORSE": "後悔",
      "REGRET": "遺憾"
    },
    "distractors": ["INNOCENCE", "PRIDE", "JOY", "HAPPINESS"],
    "meanings_expanded": ["罪悪感", "有罪", "罪"],
    "contexts": [
      {
        "parts": ["He felt", "about lying."],
        "full": "He felt guilt about lying.",
        "jp": "彼は嘘をついたことに罪悪感を感じた。",
        "is_correct": true
      },
      {
        "parts": ["He proved his", "."],
        "full": "He proved his innocence.",
        "jp": "彼は自分の無実を証明した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 291,
    "word": "HAPHAZARDLY",
    "meaning_core": "でたらめに",
    "syllables": [
      { "text": "hap", "type": "weak" },
      { "text": "HAZ", "type": "strong" },
      { "text": "ard", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "RANDOMLY": "無作為に",
      "CARELESSLY": "不注意に",
      "AIMLESSLY": "目的なく"
    },
    "distractors": ["CAREFULLY", "METHODICALLY", "SYSTEMATICALLY", "ORDERLY"],
    "meanings_expanded": ["でたらめに", "無計画に", "偶然に"],
    "contexts": [
      {
        "parts": ["Books were piled", "on the floor."],
        "full": "Books were piled haphazardly on the floor.",
        "jp": "本が床にでたらめに積み上げられていた。",
        "is_correct": true
      },
      {
        "parts": ["She arranged the flowers", "."],
        "full": "She arranged the flowers carefully.",
        "jp": "彼女は花を丁寧に活けた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 292,
    "word": "HARMFUL",
    "meaning_core": "有害な",
    "syllables": [
      { "text": "HARM", "type": "strong" },
      { "text": "ful", "type": "weak" }
    ],
    "synonyms": {
      "DAMAGING": "損害を与える",
      "DANGEROUS": "危険な",
      "INJURIOUS": "有害な"
    },
    "distractors": ["BENEFICIAL", "SAFE", "HELPFUL", "GOOD"],
    "meanings_expanded": ["有害な", "危険な"],
    "contexts": [
      {
        "parts": ["Smoking is", "to your health."],
        "full": "Smoking is harmful to your health.",
        "jp": "喫煙は健康に有害だ。",
        "is_correct": true
      },
      {
        "parts": ["Exercise is", "to your body."],
        "full": "Exercise is beneficial to your body.",
        "jp": "運動は体に有益だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 293,
    "word": "HARSH",
    "meaning_core": "厳しい",
    "syllables": [
      { "text": "HARSH", "type": "strong" }
    ],
    "synonyms": {
      "SEVERE": "深刻な",
      "STRICT": "厳格な",
      "CRUEL": "残酷な"
    },
    "distractors": ["GENTLE", "MILD", "SOFT", "KIND"],
    "meanings_expanded": ["厳しい", "不快な", "粗い"],
    "contexts": [
      {
        "parts": ["The punishment was too", "."],
        "full": "The punishment was too harsh.",
        "jp": "その罰は厳しすぎた。",
        "is_correct": true
      },
      {
        "parts": ["He has a", "voice."],
        "full": "He has a gentle voice.",
        "jp": "彼は優しい声をしている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 294,
    "word": "HARSHLY",
    "meaning_core": "激しく",
    "syllables": [
      { "text": "HARSH", "type": "strong" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "SEVERELY": "厳しく",
      "STRICTLY": "厳格に",
      "CRUELLY": "残酷に"
    },
    "distractors": ["GENTLY", "KINDLY", "SOFTLY", "MILDLY"],
    "meanings_expanded": ["厳しく", "激しく", "耳障りに"],
    "contexts": [
      {
        "parts": ["He was criticized", "for his mistake."],
        "full": "He was criticized harshly for his mistake.",
        "jp": "彼は間違いを厳しく批判された。",
        "is_correct": true
      },
      {
        "parts": ["She spoke", "to the child."],
        "full": "She spoke gently to the child.",
        "jp": "彼女は子供に優しく話しかけた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 295,
    "word": "HAUNT",
    "meaning_core": "出没する",
    "syllables": [
      { "text": "HAUNT", "type": "strong" }
    ],
    "synonyms": {
      "TORMENT": "苦しめる",
      "PLAGUE": "悩ます",
      "VISIT": "訪れる"
    },
    "distractors": ["COMFORT", "SOOTHE", "LEAVE", "PLEASE"],
    "meanings_expanded": ["（幽霊が）出没する", "（考えなどが）つきまとう"],
    "contexts": [
      {
        "parts": ["The memory will", "him forever."],
        "full": "The memory will haunt him forever.",
        "jp": "その記憶は彼に永遠につきまとうだろう。",
        "is_correct": true
      },
      {
        "parts": ["The music will", "you."],
        "full": "The music will comfort you.",
        "jp": "その音楽はあなたを慰めるだろう。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 296,
    "word": "HAZARD",
    "meaning_core": "危険要因",
    "syllables": [
      { "text": "HAZ", "type": "strong" },
      { "text": "ard", "type": "weak" }
    ],
    "synonyms": {
      "DANGER": "危険",
      "RISK": "リスク",
      "PERIL": "危難"
    },
    "distractors": ["SAFETY", "SECURITY", "PROTECTION", "SHELTER"],
    "meanings_expanded": ["危険要因", "危険", "偶然"],
    "contexts": [
      {
        "parts": ["Smoking is a health", "."],
        "full": "Smoking is a health hazard.",
        "jp": "喫煙は健康への危険要因だ。",
        "is_correct": true
      },
      {
        "parts": ["He works in", "."],
        "full": "He works in safety.",
        "jp": "彼は安全に働いている。（文脈として不自然だが対比として）",
        "is_correct": false
      }
    ]
  },
  {
    "id": 297,
    "word": "HEED",
    "meaning_core": "気を付ける",
    "syllables": [
      { "text": "HEED", "type": "strong" }
    ],
    "synonyms": {
      "LISTEN TO": "聞く",
      "MIND": "気にする",
      "PAY ATTENTION TO": "注意を払う"
    },
    "distractors": ["IGNORE", "DISREGARD", "NEGLECT", "OVERLOOK"],
    "meanings_expanded": ["（忠告などを）心に留める", "注意する"],
    "contexts": [
      {
        "parts": ["You should", "my advice."],
        "full": "You should heed my advice.",
        "jp": "私の忠告を心に留めるべきだ。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "the warning."],
        "full": "Don't ignore the warning.",
        "jp": "警告を無視するな。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 298,
    "word": "HERITAGE",
    "meaning_core": "遺産",
    "syllables": [
      { "text": "HER", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "tage", "type": "weak" }
    ],
    "synonyms": {
      "LEGACY": "遺産",
      "TRADITION": "伝統",
      "INHERITANCE": "相続財産"
    },
    "distractors": ["FUTURE", "NOVELTY", "INNOVATION", "NEWNESS"],
    "meanings_expanded": ["遺産", "伝統", "継承物"],
    "contexts": [
      {
        "parts": ["We must preserve our cultural", "."],
        "full": "We must preserve our cultural heritage.",
        "jp": "私たちは文化遺産を保存しなければならない。",
        "is_correct": true
      },
      {
        "parts": ["We look forward to the", "."],
        "full": "We look forward to the future.",
        "jp": "私たちは未来を楽しみにしている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 299,
    "word": "HILARIOUS",
    "meaning_core": "大変陽気な",
    "syllables": [
      { "text": "hi", "type": "weak" },
      { "text": "LAR", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ous", "type": "weak" }
    ],
    "synonyms": {
      "FUNNY": "面白い",
      "AMUSING": "楽しい",
      "COMICAL": "滑稽な"
    },
    "distractors": ["SAD", "SERIOUS", "BORING", "GRAVE"],
    "meanings_expanded": ["大変陽気な", "大笑いさせる", "滑稽な"],
    "contexts": [
      {
        "parts": ["The movie was absolutely", "."],
        "full": "The movie was absolutely hilarious.",
        "jp": "その映画は最高に面白かった。",
        "is_correct": true
      },
      {
        "parts": ["The news was very", "."],
        "full": "The news was very sad.",
        "jp": "そのニュースはとても悲しかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 300,
    "word": "HOSPITALITY",
    "meaning_core": "もてなし",
    "syllables": [
      { "text": "hos", "type": "weak" },
      { "text": "pi", "type": "weak" },
      { "text": "TAL", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "WELCOME": "歓迎",
      "FRIENDLINESS": "親切",
      "WARMTH": "温かさ"
    },
    "distractors": ["HOSTILITY", "UNFRIENDLINESS", "COLDNESS", "RUDENESS"],
    "meanings_expanded": ["もてなし", "歓待", "親切"],
    "contexts": [
      {
        "parts": ["Thank you for your kind", "."],
        "full": "Thank you for your kind hospitality.",
        "jp": "ご親切なもてなしをありがとう。",
        "is_correct": true
      },
      {
        "parts": ["I sensed", "in his voice."],
        "full": "I sensed hostility in his voice.",
        "jp": "彼の声に敵意を感じた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 301,
    "word": "HUMILIATE",
    "meaning_core": "恥をかかせる",
    "syllables": [
      { "text": "hu", "type": "weak" },
      { "text": "MIL", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "EMBARRASS": "当惑させる",
      "SHAME": "恥じ入らせる",
      "DISGRACE": "面目を失わせる"
    },
    "distractors": ["HONOR", "PRAISE", "RESPECT", "ELEVATE"],
    "meanings_expanded": ["恥をかかせる", "屈辱を与える"],
    "contexts": [
      {
        "parts": ["He tried to", "me in public."],
        "full": "He tried to humiliate me in public.",
        "jp": "彼は人前で私に恥をかかせようとした。",
        "is_correct": true
      },
      {
        "parts": ["The teacher wanted to", "the student."],
        "full": "The teacher wanted to praise the student.",
        "jp": "先生はその生徒を褒めたかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 302,
    "word": "HYBRID",
    "meaning_core": "雑種",
    "syllables": [
      { "text": "HY", "type": "strong" },
      { "text": "brid", "type": "weak" }
    ],
    "synonyms": {
      "MIXTURE": "混合物",
      "CROSS": "交配種",
      "BLEND": "混合"
    },
    "distractors": ["PURE", "ORIGINAL", "SINGLE", "SIMPLE"],
    "meanings_expanded": ["雑種", "ハイブリッド", "混合物"],
    "contexts": [
      {
        "parts": ["This car is a", "model."],
        "full": "This car is a hybrid model.",
        "jp": "この車はハイブリッドモデルだ。",
        "is_correct": true
      },
      {
        "parts": ["He owns a", "dog."],
        "full": "He owns a purebred dog.",
        "jp": "彼は純血種の犬を飼っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 303,
    "word": "IDENTIFY",
    "meaning_core": "特定する",
    "syllables": [
      { "text": "i", "type": "weak" },
      { "text": "DEN", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "fy", "type": "weak" }
    ],
    "synonyms": {
      "RECOGNIZE": "認識する",
      "PINPOINT": "正確に示す",
      "DISTINGUISH": "区別する"
    },
    "distractors": ["CONFUSE", "IGNORE", "OVERLOOK", "MISS"],
    "meanings_expanded": ["特定する", "確認する", "同一視する"],
    "contexts": [
      {
        "parts": ["Can you", "the suspect?"],
        "full": "Can you identify the suspect?",
        "jp": "容疑者を特定できますか？",
        "is_correct": true
      },
      {
        "parts": ["Please", "the mistake."],
        "full": "Please ignore the mistake.",
        "jp": "間違いを無視してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 304,
    "word": "IDEOLOGY",
    "meaning_core": "イデオロギー",
    "syllables": [
      { "text": "i", "type": "weak" },
      { "text": "de", "type": "weak" },
      { "text": "OL", "type": "strong" },
      { "text": "o", "type": "weak" },
      { "text": "gy", "type": "weak" }
    ],
    "synonyms": {
      "BELIEF": "信念",
      "DOCTRINE": "教義",
      "PHILOSOPHY": "哲学"
    },
    "distractors": ["FACT", "REALITY", "TRUTH", "SCIENCE"],
    "meanings_expanded": ["イデオロギー", "思想傾向", "観念形態"],
    "contexts": [
      {
        "parts": ["Political", "can divide people."],
        "full": "Political ideology can divide people.",
        "jp": "政治的イデオロギーは人々を分断しうる。",
        "is_correct": true
      },
      {
        "parts": ["We need to rely on", "."],
        "full": "We need to rely on facts.",
        "jp": "私たちは事実に頼る必要がある。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 305,
    "word": "IGNORE",
    "meaning_core": "無視する",
    "syllables": [
      { "text": "ig", "type": "weak" },
      { "text": "NORE", "type": "strong" }
    ],
    "synonyms": {
      "DISREGARD": "軽視する",
      "OVERLOOK": "見落とす",
      "NEGLECT": "怠る"
    },
    "distractors": ["NOTICE", "HEED", "OBSERVE", "LISTEN"],
    "meanings_expanded": ["無視する", "知らないふりをする"],
    "contexts": [
      {
        "parts": ["Don't", "the warning signs."],
        "full": "Don't ignore the warning signs.",
        "jp": "警告のサインを無視するな。",
        "is_correct": true
      },
      {
        "parts": ["Please", "my advice."],
        "full": "Please follow my advice.",
        "jp": "私のアドバイスに従ってください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 306,
    "word": "ILLUSION",
    "meaning_core": "幻想",
    "syllables": [
      { "text": "il", "type": "weak" },
      { "text": "LU", "type": "strong" },
      { "text": "sion", "type": "weak" }
    ],
    "synonyms": {
      "DELUSION": "妄想",
      "FANTASY": "空想",
      "HALLUCINATION": "幻覚"
    },
    "distractors": ["REALITY", "FACT", "TRUTH", "ACTUALITY"],
    "meanings_expanded": ["幻想", "錯覚", "幻影"],
    "contexts": [
      {
        "parts": ["The magician created an", "."],
        "full": "The magician created an illusion.",
        "jp": "手品師は錯覚を作り出した。",
        "is_correct": true
      },
      {
        "parts": ["We must face", "."],
        "full": "We must face reality.",
        "jp": "私たちは現実に直面しなければならない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 307,
    "word": "ILLUSTRATE",
    "meaning_core": "例証する",
    "syllables": [
      { "text": "IL", "type": "strong" },
      { "text": "lus", "type": "weak" },
      { "text": "trate", "type": "weak" }
    ],
    "synonyms": {
      "DEMONSTRATE": "実証する",
      "EXPLAIN": "説明する",
      "DEPICT": "描く"
    },
    "distractors": ["CONFUSE", "OBSCURE", "HIDE", "COMPLICATE"],
    "meanings_expanded": ["例証する", "説明する", "挿絵を入れる"],
    "contexts": [
      {
        "parts": ["Let me", "this point with a story."],
        "full": "Let me illustrate this point with a story.",
        "jp": "ある話でこの点を説明させてください。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the text."],
        "full": "Please read the text.",
        "jp": "その文章を読んでください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 308,
    "word": "IMMEDIATE",
    "meaning_core": "即座の",
    "syllables": [
      { "text": "im", "type": "weak" },
      { "text": "ME", "type": "strong" },
      { "text": "di", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "INSTANT": "瞬時の",
      "PROMPT": "迅速な",
      "DIRECT": "直接の"
    },
    "distractors": ["DELAYED", "DISTANT", "SLOW", "LATER"],
    "meanings_expanded": ["即座の", "直接の", "当面の"],
    "contexts": [
      {
        "parts": ["We need an", "response."],
        "full": "We need an immediate response.",
        "jp": "即座の返答が必要だ。",
        "is_correct": true
      },
      {
        "parts": ["Take", "action."],
        "full": "Take delayed action.",
        "jp": "遅れた行動を取りなさい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 309,
    "word": "IMPENDING",
    "meaning_core": "差し迫った",
    "syllables": [
      { "text": "im", "type": "weak" },
      { "text": "PEND", "type": "strong" },
      { "text": "ing", "type": "weak" }
    ],
    "synonyms": {
      "IMMINENT": "切迫した",
      "APPROACHING": "近づいている",
      "LOOMING": "迫りくる"
    },
    "distractors": ["DISTANT", "REMOTE", "PAST", "GONE"],
    "meanings_expanded": ["差し迫った", "切迫した"],
    "contexts": [
      {
        "parts": ["They warned of", "danger."],
        "full": "They warned of impending danger.",
        "jp": "彼らは差し迫った危険について警告した。",
        "is_correct": true
      },
      {
        "parts": ["The storm is", "."],
        "full": "The storm is far away.",
        "jp": "嵐は遠くにある。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 310,
    "word": "IMPLEMENT",
    "meaning_core": "実行する",
    "syllables": [
      { "text": "IM", "type": "strong" },
      { "text": "ple", "type": "weak" },
      { "text": "ment", "type": "weak" }
    ],
    "synonyms": {
      "EXECUTE": "遂行する",
      "CARRY OUT": "実行する",
      "APPLY": "適用する"
    },
    "distractors": ["CANCEL", "DELAY", "STOP", "IGNORE"],
    "meanings_expanded": ["実行する", "履行する", "道具"],
    "contexts": [
      {
        "parts": ["We plan to", "the new rules soon."],
        "full": "We plan to implement the new rules soon.",
        "jp": "私たちはまもなく新しいルールを実行する予定だ。",
        "is_correct": true
      },
      {
        "parts": ["They decided to", "the project."],
        "full": "They decided to cancel the project.",
        "jp": "彼らはプロジェクトを中止することに決めた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 311,
    "word": "IMPLICATION",
    "meaning_core": "言外の意味",
    "syllables": [
      { "text": "im", "type": "weak" },
      { "text": "pli", "type": "weak" },
      { "text": "CA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "SUGGESTION": "暗示",
      "INFERENCE": "推論",
      "CONSEQUENCE": "結果"
    },
    "distractors": ["STATEMENT", "FACT", "PROOF", "REALITY"],
    "meanings_expanded": ["言外の意味", "暗示", "影響"],
    "contexts": [
      {
        "parts": ["What is the", "of his statement?"],
        "full": "What is the implication of his statement?",
        "jp": "彼の発言の言外の意味は何ですか？",
        "is_correct": true
      },
      {
        "parts": ["This is a direct", "."],
        "full": "This is a direct statement.",
        "jp": "これは直接的な発言だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 312,
    "word": "IMPLICITLY",
    "meaning_core": "暗黙のうちに",
    "syllables": [
      { "text": "im", "type": "weak" },
      { "text": "PLIC", "type": "strong" },
      { "text": "it", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "TACITLY": "それとなく",
      "SILENTLY": "静かに",
      "INDIRECTLY": "間接的に"
    },
    "distractors": ["EXPLICITLY", "OPENLY", "DIRECTLY", "CLEARLY"],
    "meanings_expanded": ["暗黙のうちに", "絶対的に"],
    "contexts": [
      {
        "parts": ["She", "agreed to the plan."],
        "full": "She implicitly agreed to the plan.",
        "jp": "彼女は暗黙のうちにその計画に同意した。",
        "is_correct": true
      },
      {
        "parts": ["He stated his opinion", "."],
        "full": "He stated his opinion explicitly.",
        "jp": "彼は自分の意見を明確に述べた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 313,
    "word": "IMPOSING",
    "meaning_core": "堂々とした",
    "syllables": [
      { "text": "im", "type": "weak" },
      { "text": "POS", "type": "strong" },
      { "text": "ing", "type": "weak" }
    ],
    "synonyms": {
      "IMPRESSIVE": "印象的な",
      "GRAND": "壮大な",
      "MAJESTIC": "威厳のある"
    },
    "distractors": ["SMALL", "MODEST", "HUMBLE", "TINY"],
    "meanings_expanded": ["堂々とした", "印象的な"],
    "contexts": [
      {
        "parts": ["The castle is an", "structure."],
        "full": "The castle is an imposing structure.",
        "jp": "その城は堂々とした建造物だ。",
        "is_correct": true
      },
      {
        "parts": ["He lives in a", "house."],
        "full": "He lives in a small house.",
        "jp": "彼は小さな家に住んでいる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 314,
    "word": "IMPRACTICAL",
    "meaning_core": "非実用的な",
    "syllables": [
      { "text": "im", "type": "weak" },
      { "text": "PRAC", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "cal", "type": "weak" }
    ],
    "synonyms": {
      "UNREALISTIC": "非現実的な",
      "USELESS": "役に立たない",
      "IDEALISTIC": "理想主義的な"
    },
    "distractors": ["PRACTICAL", "USEFUL", "REALISTIC", "SENSIBLE"],
    "meanings_expanded": ["非実用的な", "実践的でない"],
    "contexts": [
      {
        "parts": ["Your idea sounds", "."],
        "full": "Your idea sounds impractical.",
        "jp": "君のアイデアは非実用的に聞こえる。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "solution."],
        "full": "This is a practical solution.",
        "jp": "これは実用的な解決策だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 315,
    "word": "IMPRESSIVE",
    "meaning_core": "印象的な",
    "syllables": [
      { "text": "im", "type": "weak" },
      { "text": "PRES", "type": "strong" },
      { "text": "sive", "type": "weak" }
    ],
    "synonyms": {
      "REMARKABLE": "注目すべき",
      "STRIKING": "際立った",
      "AWESOME": "素晴らしい"
    },
    "distractors": ["ORDINARY", "UNIMPRESSIVE", "BORING", "DULL"],
    "meanings_expanded": ["印象的な", "感動的な"],
    "contexts": [
      {
        "parts": ["She gave an", "performance."],
        "full": "She gave an impressive performance.",
        "jp": "彼女は印象的な演技をした。",
        "is_correct": true
      },
      {
        "parts": ["It was an", "day."],
        "full": "It was an ordinary day.",
        "jp": "それは平凡な一日だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 323,
    "word": "INCENTIVE",
    "meaning_core": "動機",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "CEN", "type": "strong" },
      { "text": "tive", "type": "weak" }
    ],
    "synonyms": {
      "MOTIVATION": "動機付け",
      "STIMULUS": "刺激",
      "REWARD": "報酬"
    },
    "distractors": ["PUNISHMENT", "PENALTY", "DETERRENT", "OBSTACLE"],
    "meanings_expanded": ["動機", "誘因", "奨励金"],
    "contexts": [
      {
        "parts": ["Money is a strong", "to work."],
        "full": "Money is a strong incentive to work.",
        "jp": "お金は働くための強い動機となる。",
        "is_correct": true
      },
      {
        "parts": ["He lacked the", "to study."],
        "full": "He lacked the incentive to study.",
        "jp": "彼には勉強する動機が欠けていた。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 324,
    "word": "INCESSANTLY",
    "meaning_core": "絶え間なく",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "CES", "type": "strong" },
      { "text": "sant", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "CONSTANTLY": "絶えず",
      "CONTINUOUSLY": "連続して",
      "ENDLESSLY": "果てしなく"
    },
    "distractors": ["RARELY", "OCCASIONALLY", "SELDOM", "SPORADICALLY"],
    "meanings_expanded": ["絶え間なく", "ひっきりなしに"],
    "contexts": [
      {
        "parts": ["It rained", "for three days."],
        "full": "It rained incessantly for three days.",
        "jp": "3日間、絶え間なく雨が降った。",
        "is_correct": true
      },
      {
        "parts": ["He talked", "during the movie."],
        "full": "He talked incessantly during the movie.",
        "jp": "彼は映画の間中、ひっきりなしに話していた。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 325,
    "word": "INCREASINGLY",
    "meaning_core": "ますます",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "CREAS", "type": "strong" },
      { "text": "ing", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "MORE AND MORE": "ますます",
      "PROGRESSIVELY": "徐々に",
      "STEADILY": "着実に"
    },
    "distractors": ["LESS", "DECREASINGLY", "RARELY", "SELDOM"],
    "meanings_expanded": ["ますます", "いよいよ", "さらに"],
    "contexts": [
      {
        "parts": ["It is becoming", "difficult."],
        "full": "It is becoming increasingly difficult.",
        "jp": "それはますます難しくなっている。",
        "is_correct": true
      },
      {
        "parts": ["He became", "popular."],
        "full": "He became increasingly popular.",
        "jp": "彼はますます人気が出た。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 326,
    "word": "INDEFINITELY",
    "meaning_core": "無期限に",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "DEF", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "nite", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "ENDLESSLY": "果てしなく",
      "FOREVER": "永遠に",
      "PERMANENTLY": "永続的に"
    },
    "distractors": ["TEMPORARILY", "BRIEFLY", "MOMENTARILY", "SHORTLY"],
    "meanings_expanded": ["無期限に", "いつまでも"],
    "contexts": [
      {
        "parts": ["The meeting was postponed", "."],
        "full": "The meeting was postponed indefinitely.",
        "jp": "会議は無期限に延期された。",
        "is_correct": true
      },
      {
        "parts": ["He will stay here", "."],
        "full": "He will stay here temporarily.",
        "jp": "彼は一時的にここに滞在する。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 327,
    "word": "INDIGENOUS",
    "meaning_core": "原産の",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "DIG", "type": "strong" },
      { "text": "e", "type": "weak" },
      { "text": "nous", "type": "weak" }
    ],
    "synonyms": {
      "NATIVE": "原産の",
      "LOCAL": "地元の",
      "ABORIGINAL": "先住の"
    },
    "distractors": ["FOREIGN", "ALIEN", "EXOTIC", "IMPORTED"],
    "meanings_expanded": ["原産の", "先住の", "固有の"],
    "contexts": [
      {
        "parts": ["These plants are", "to this region."],
        "full": "These plants are indigenous to this region.",
        "jp": "これらの植物はこの地域の原産だ。",
        "is_correct": true
      },
      {
        "parts": ["The kangaroo is", "to Australia."],
        "full": "The kangaroo is indigenous to Australia.",
        "jp": "カンガルーはオーストラリア固有の動物だ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 328,
    "word": "INDIGNANT",
    "meaning_core": "憤慨した",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "DIG", "type": "strong" },
      { "text": "nant", "type": "weak" }
    ],
    "synonyms": {
      "ANGRY": "怒った",
      "OFFENDED": "気分を害した",
      "FURIOUS": "激怒した"
    },
    "distractors": ["HAPPY", "PLEASED", "CONTENT", "CALM"],
    "meanings_expanded": ["憤慨した", "怒った"],
    "contexts": [
      {
        "parts": ["She was", "about the insult."],
        "full": "She was indignant about the insult.",
        "jp": "彼女はその侮辱に憤慨した。",
        "is_correct": true
      },
      {
        "parts": ["He gave an", "reply."],
        "full": "He gave an indignant reply.",
        "jp": "彼は憤然とした返事をした。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 329,
    "word": "INDIGNANTLY",
    "meaning_core": "憤慨して",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "DIG", "type": "strong" },
      { "text": "nant", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "ANGRILY": "怒って",
      "FURIOUSLY": "激怒して"
    },
    "distractors": ["HAPPILY", "CALMLY", "GENTLY", "SOFTLY"],
    "meanings_expanded": ["憤慨して", "怒って"],
    "contexts": [
      {
        "parts": ["'It's not fair!' she said", "."],
        "full": "'It's not fair!' she said indignantly.",
        "jp": "「不公平だ！」と彼女は憤慨して言った。",
        "is_correct": true
      },
      {
        "parts": ["He shouted", "at the referee."],
        "full": "He shouted indignantly at the referee.",
        "jp": "彼は審判に対して憤然と叫んだ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 330,
    "word": "INDISPENSABLE",
    "meaning_core": "不可欠な",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "dis", "type": "weak" },
      { "text": "PEN", "type": "strong" },
      { "text": "sa", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "ESSENTIAL": "不可欠な",
      "CRUCIAL": "決定的な",
      "NECESSARY": "必要な"
    },
    "distractors": ["USELESS", "UNNECESSARY", "OPTIONAL", "DISPENSABLE"],
    "meanings_expanded": ["不可欠な", "絶対必要な"],
    "contexts": [
      {
        "parts": ["Water is", "to life."],
        "full": "Water is indispensable to life.",
        "jp": "水は生命にとって不可欠だ。",
        "is_correct": true
      },
      {
        "parts": ["His help was", "."],
        "full": "His help was indispensable.",
        "jp": "彼の助けは不可欠だった。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 331,
    "word": "INDUCE",
    "meaning_core": "誘発する",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "DUCE", "type": "strong" }
    ],
    "synonyms": {
      "CAUSE": "引き起こす",
      "PROVOKE": "誘発する",
      "PERSUADE": "説得する"
    },
    "distractors": ["PREVENT", "STOP", "HALT", "DISCOURAGE"],
    "meanings_expanded": ["誘発する", "引き起こす", "勧誘する"],
    "contexts": [
      {
        "parts": ["The drug may", "sleep."],
        "full": "The drug may induce sleep.",
        "jp": "その薬は眠気を誘発するかもしれない。",
        "is_correct": true
      },
      {
        "parts": ["Nothing could", "him to stay."],
        "full": "Nothing could induce him to stay.",
        "jp": "何があっても彼を引き留めることはできなかった（彼を説得して留まらせることはできなかった）。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 332,
    "word": "INFECTIOUS",
    "meaning_core": "伝染性の",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "FEC", "type": "strong" },
      { "text": "tious", "type": "weak" }
    ],
    "synonyms": {
      "CONTAGIOUS": "感染性の",
      "CATCHING": "移りやすい",
      "SPREADING": "広がる"
    },
    "distractors": ["HARMLESS", "NONINFECTIOUS", "SAFE", "HEALTHY"],
    "meanings_expanded": ["伝染性の", "感染症の"],
    "contexts": [
      {
        "parts": ["The flu is highly", "."],
        "full": "The flu is highly infectious.",
        "jp": "インフルエンザは非常に伝染性が高い。",
        "is_correct": true
      },
      {
        "parts": ["His enthusiasm was", "."],
        "full": "His enthusiasm was infectious.",
        "jp": "彼の熱意は周りに伝染した。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 333,
    "word": "INFINITELY",
    "meaning_core": "無限に",
    "syllables": [
      { "text": "IN", "type": "strong" },
      { "text": "fi", "type": "weak" },
      { "text": "nite", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "ENDLESSLY": "果てしなく",
      "BOUNDLESSLY": "限りなく",
      "VASTLY": "広大に"
    },
    "distractors": ["LIMITEDLY", "FINITELY", "SLIGHTLY", "LITTLE"],
    "meanings_expanded": ["無限に", "はるかに"],
    "contexts": [
      {
        "parts": ["The universe is", "large."],
        "full": "The universe is infinitely large.",
        "jp": "宇宙は無限に大きい。",
        "is_correct": true
      },
      {
        "parts": ["This is", "better."],
        "full": "This is infinitely better.",
        "jp": "これのほうがはるかに良い。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 334,
    "word": "INFLUENTIAL",
    "meaning_core": "影響力のある",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "flu", "type": "weak" },
      { "text": "EN", "type": "strong" },
      { "text": "tial", "type": "weak" }
    ],
    "synonyms": {
      "POWERFUL": "強力な",
      "IMPORTANT": "重要な",
      "DOMINANT": "支配的な"
    },
    "distractors": ["WEAK", "INSIGNIFICANT", "POWERLESS", "MINOR"],
    "meanings_expanded": ["影響力のある", "有力な"],
    "contexts": [
      {
        "parts": ["He is an", "politician."],
        "full": "He is an influential politician.",
        "jp": "彼は有力な政治家だ。",
        "is_correct": true
      },
      {
        "parts": ["She played an", "role."],
        "full": "She played an influential role.",
        "jp": "彼女は影響力のある役割を果たした。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 335,
    "word": "INFRASTRUCTURE",
    "meaning_core": "社会基盤",
    "syllables": [
      { "text": "IN", "type": "strong" },
      { "text": "fra", "type": "weak" },
      { "text": "struc", "type": "weak" },
      { "text": "ture", "type": "weak" }
    ],
    "synonyms": {
      "FOUNDATION": "基盤",
      "BASE": "土台",
      "FRAMEWORK": "枠組み"
    },
    "distractors": ["DECORATION", "ORNAMENT", "ACCESSORY", "DETAIL"],
    "meanings_expanded": ["インフラ", "社会基盤", "下部構造"],
    "contexts": [
      {
        "parts": ["The country needs to improve its", "."],
        "full": "The country needs to improve its infrastructure.",
        "jp": "その国はインフラを改善する必要がある。",
        "is_correct": true
      },
      {
        "parts": ["Roads and bridges are part of the", "."],
        "full": "Roads and bridges are part of the infrastructure.",
        "jp": "道路や橋は社会基盤の一部だ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 336,
    "word": "INHERENT",
    "meaning_core": "本来備わっている",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "HER", "type": "strong" },
      { "text": "ent", "type": "weak" }
    ],
    "synonyms": {
      "INTRINSIC": "本来の",
      "NATIVE": "生来の",
      "BUILT-IN": "組み込みの"
    },
    "distractors": ["ACQUIRED", "EXTERNAL", "ALIEN", "FOREIGN"],
    "meanings_expanded": ["本来備わっている", "固有の", "生来の"],
    "contexts": [
      {
        "parts": ["There are risks", "in this plan."],
        "full": "There are risks inherent in this plan.",
        "jp": "この計画には固有のリスクがある。",
        "is_correct": true
      },
      {
        "parts": ["Freedom is an", "right."],
        "full": "Freedom is an inherent right.",
        "jp": "自由は天賦の権利だ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 337,
    "word": "INITIATE",
    "meaning_core": "開始する",
    "syllables": [
      { "text": "i", "type": "weak" },
      { "text": "NI", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "START": "始める",
      "BEGIN": "開始する",
      "LAUNCH": "着手する"
    },
    "distractors": ["STOP", "END", "FINISH", "HALT"],
    "meanings_expanded": ["開始する", "着手する", "手ほどきをする"],
    "contexts": [
      {
        "parts": ["They plan to", "a new project."],
        "full": "They plan to initiate a new project.",
        "jp": "彼らは新しいプロジェクトを開始する計画だ。",
        "is_correct": true
      },
      {
        "parts": ["He was", "into the club."],
        "full": "He was initiated into the club.",
        "jp": "彼はクラブに入会させられた。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 338,
    "word": "INITIATIVE",
    "meaning_core": "主導権",
    "syllables": [
      { "text": "i", "type": "weak" },
      { "text": "NI", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "a", "type": "weak" },
      { "text": "tive", "type": "weak" }
    ],
    "synonyms": {
      "LEADERSHIP": "指導力",
      "PLAN": "計画",
      "ACTION": "行動"
    },
    "distractors": ["APATHY", "LAZINESS", "INACTION", "PASSIVITY"],
    "meanings_expanded": ["主導権", "自発性", "新しい取り組み"],
    "contexts": [
      {
        "parts": ["He took the", "to solve the problem."],
        "full": "He took the initiative to solve the problem.",
        "jp": "彼は率先して（主導権を取って）問題を解決した。",
        "is_correct": true
      },
      {
        "parts": ["The government launched a new", "."],
        "full": "The government launched a new initiative.",
        "jp": "政府は新しい取り組みを開始した。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 339,
    "word": "INNATE",
    "meaning_core": "生まれつきの",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "NATE", "type": "strong" }
    ],
    "synonyms": {
      "NATURAL": "生まれつきの",
      "INBORN": "先天的な",
      "INHERENT": "本来の"
    },
    "distractors": ["ACQUIRED", "LEARNED", "FOREIGN", "ARTIFICIAL"],
    "meanings_expanded": ["生まれつきの", "先天的な"],
    "contexts": [
      {
        "parts": ["She has an", "talent for music."],
        "full": "She has an innate talent for music.",
        "jp": "彼女には音楽の天賦の才がある。",
        "is_correct": true
      },
      {
        "parts": ["Language ability is", "."],
        "full": "Language ability is innate.",
        "jp": "言語能力は生まれつきのものだ（という説がある）。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 340,
    "word": "INNOVATION",
    "meaning_core": "革新",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "no", "type": "weak" },
      { "text": "VA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "INVENTION": "発明",
      "CHANGE": "変革",
      "NOVELTY": "新しさ"
    },
    "distractors": ["TRADITION", "ROUTINE", "HABIT", "STAGNATION"],
    "meanings_expanded": ["革新", "技術革新", "新機軸"],
    "contexts": [
      {
        "parts": ["Technological", "changes our lives."],
        "full": "Technological innovation changes our lives.",
        "jp": "技術革新は私たちの生活を変える。",
        "is_correct": true
      },
      {
        "parts": ["We need", "in design."],
        "full": "We need innovation in design.",
        "jp": "デザインにおける革新が必要だ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 341,
    "word": "INQUIRY",
    "meaning_core": "調査",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "QUIR", "type": "strong" },
      { "text": "y", "type": "weak" }
    ],
    "synonyms": {
      "INVESTIGATION": "調査",
      "QUESTION": "質問",
      "QUERY": "問い合わせ"
    },
    "distractors": ["ANSWER", "REPLY", "RESPONSE", "STATEMENT"],
    "meanings_expanded": ["調査", "問い合わせ", "探求"],
    "contexts": [
      {
        "parts": ["The police launched an", "into the case."],
        "full": "The police launched an inquiry into the case.",
        "jp": "警察はその事件の調査を開始した。",
        "is_correct": true
      },
      {
        "parts": ["We received an", "about the product."],
        "full": "We received an inquiry about the product.",
        "jp": "その製品についての問い合わせを受けた。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 342,
    "word": "INSIDE",
    "meaning_core": "～の内側に",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "SIDE", "type": "strong" }
    ],
    "synonyms": {
      "WITHIN": "内部に",
      "IN": "中に"
    },
    "distractors": ["OUTSIDE", "WITHOUT", "EXTERIOR"],
    "meanings_expanded": ["～の内側に", "～の中に"],
    "contexts": [
      {
        "parts": ["He stayed", "the house."],
        "full": "He stayed inside the house.",
        "jp": "彼は家の中にいた。",
        "is_correct": true
      },
      {
        "parts": ["The toy was", "the box."],
        "full": "The toy was inside the box.",
        "jp": "おもちゃは箱の中にあった。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 343,
    "word": "INSIST",
    "meaning_core": "主張する",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "SIST", "type": "strong" }
    ],
    "synonyms": {
      "DEMAND": "要求する",
      "ASSERT": "断言する",
      "PERSIST": "固執する"
    },
    "distractors": ["GIVE UP", "YIELD", "AGREE", "COMPLY"],
    "meanings_expanded": ["主張する", "言い張る", "強く要求する"],
    "contexts": [
      {
        "parts": ["I", "on paying for dinner."],
        "full": "I insist on paying for dinner.",
        "jp": "夕食代は私が払うと言い張ります。",
        "is_correct": true
      },
      {
        "parts": ["He", "that he was innocent."],
        "full": "He insisted that he was innocent.",
        "jp": "彼は自分が無実だと主張した。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 344,
    "word": "INSTANTANEOUSLY",
    "meaning_core": "すぐに",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "stan", "type": "weak" },
      { "text": "TA", "type": "strong" },
      { "text": "neous", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "IMMEDIATELY": "即座に",
      "INSTANTLY": "瞬時に",
      "AT ONCE": "直ちに"
    },
    "distractors": ["SLOWLY", "GRADUALLY", "LATER", "EVENTUALLY"],
    "meanings_expanded": ["即座に", "瞬時に"],
    "contexts": [
      {
        "parts": ["The bomb exploded", "."],
        "full": "The bomb exploded instantaneously.",
        "jp": "爆弾は瞬時に爆発した。",
        "is_correct": true
      },
      {
        "parts": ["The message was sent", "."],
        "full": "The message was sent instantaneously.",
        "jp": "メッセージは即座に送信された。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 345,
    "word": "INTEGRITY",
    "meaning_core": "誠実さ",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "TEG", "type": "strong" },
      { "text": "ri", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "HONESTY": "正直",
      "MORALITY": "道徳性",
      "UPRIGHTNESS": "高潔"
    },
    "distractors": ["DISHONESTY", "CORRUPTION", "DECEIT", "FRAUD"],
    "meanings_expanded": ["誠実さ", "高潔", "完全性"],
    "contexts": [
      {
        "parts": ["He is a man of", "."],
        "full": "He is a man of integrity.",
        "jp": "彼は誠実な人だ。",
        "is_correct": true
      },
      {
        "parts": ["The engineer checked the structural", "."],
        "full": "The engineer checked the structural integrity.",
        "jp": "技術者は構造の完全性をチェックした。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 346,
    "word": "INTELLECTUAL",
    "meaning_core": "知的な",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "tel", "type": "weak" },
      { "text": "LEC", "type": "strong" },
      { "text": "tu", "type": "weak" },
      { "text": "al", "type": "weak" }
    ],
    "synonyms": {
      "MENTAL": "精神の",
      "ACADEMIC": "学問的な",
      "SMART": "賢い"
    },
    "distractors": ["PHYSICAL", "EMOTIONAL", "FOOLISH", "STUPID"],
    "meanings_expanded": ["知的な", "知性の", "知識人"],
    "contexts": [
      {
        "parts": ["She has great", "curiosity."],
        "full": "She has great intellectual curiosity.",
        "jp": "彼女は旺盛な知的好奇心を持っている。",
        "is_correct": true
      },
      {
        "parts": ["Protect your", "property."],
        "full": "Protect your intellectual property.",
        "jp": "知的財産を守りなさい。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 347,
    "word": "INTERFERE",
    "meaning_core": "干渉する",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "ter", "type": "weak" },
      { "text": "FERE", "type": "strong" }
    ],
    "synonyms": {
      "MEDDLE": "おせっかいをする",
      "HINDER": "妨げる",
      "OBSTRUCT": "邪魔する"
    },
    "distractors": ["HELP", "ASSIST", "SUPPORT", "AID"],
    "meanings_expanded": ["干渉する", "邪魔する", "介入する"],
    "contexts": [
      {
        "parts": ["Don't", "in my business."],
        "full": "Don't interfere in my business.",
        "jp": "私のことに干渉しないで。",
        "is_correct": true
      },
      {
        "parts": ["Noise can", "with sleep."],
        "full": "Noise can interfere with sleep.",
        "jp": "騒音は睡眠を妨げることがある。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 348,
    "word": "INTERVENE",
    "meaning_core": "介入する",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "ter", "type": "weak" },
      { "text": "VENE", "type": "strong" }
    ],
    "synonyms": {
      "STEP IN": "介入する",
      "MEDIATE": "調停する",
      "INTERFERE": "干渉する"
    },
    "distractors": ["IGNORE", "WITHDRAW", "LEAVE", "NEGLECT"],
    "meanings_expanded": ["介入する", "仲裁する", "介在する"],
    "contexts": [
      {
        "parts": ["The police had to", "to stop the fight."],
        "full": "The police had to intervene to stop the fight.",
        "jp": "喧嘩を止めるために警察が介入しなければならなかった。",
        "is_correct": true
      },
      {
        "parts": ["The government refused to", "."],
        "full": "The government refused to intervene.",
        "jp": "政府は介入を拒否した。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 349,
    "word": "INTRICATE",
    "meaning_core": "複雑な",
    "syllables": [
      { "text": "IN", "type": "strong" },
      { "text": "tri", "type": "weak" },
      { "text": "cate", "type": "weak" }
    ],
    "synonyms": {
      "COMPLEX": "複雑な",
      "COMPLICATED": "込み入った",
      "ELABORATE": "精巧な"
    },
    "distractors": ["SIMPLE", "PLAIN", "EASY", "BASIC"],
    "meanings_expanded": ["入り組んだ", "複雑な", "難解な"],
    "contexts": [
      {
        "parts": ["The watch has an", "mechanism."],
        "full": "The watch has an intricate mechanism.",
        "jp": "その時計は複雑な機構を持っている。",
        "is_correct": true
      },
      {
        "parts": ["This is an", "design."],
        "full": "This is an intricate design.",
        "jp": "これは入り組んだデザインだ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 350,
    "word": "INTRICATELY",
    "meaning_core": "複雑に",
    "syllables": [
      { "text": "IN", "type": "strong" },
      { "text": "tri", "type": "weak" },
      { "text": "cate", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "COMPLEXLY": "複雑に",
      "ELABORATELY": "精巧に"
    },
    "distractors": ["SIMPLY", "PLAINLY", "EASILY", "CLEARLY"],
    "meanings_expanded": ["複雑に", "入り組んで"],
    "contexts": [
      {
        "parts": ["The rug is", "woven."],
        "full": "The rug is intricately woven.",
        "jp": "その敷物は複雑に織られている。",
        "is_correct": true
      },
      {
        "parts": ["The plot is", "constructed."],
        "full": "The plot is intricately constructed.",
        "jp": "その筋書きは複雑に構成されている。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 351,
    "word": "INTRINSIC",
    "meaning_core": "本来備わっている",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "TRIN", "type": "strong" },
      { "text": "sic", "type": "weak" }
    ],
    "synonyms": {
      "INHERENT": "固有の",
      "INNATE": "生まれつきの",
      "ESSENTIAL": "本質的な"
    },
    "distractors": ["EXTRINSIC", "ACQUIRED", "EXTERNAL", "ACCIDENTAL"],
    "meanings_expanded": ["本来備わっている", "固有の", "本質的な"],
    "contexts": [
      {
        "parts": ["Gold has", "value."],
        "full": "Gold has intrinsic value.",
        "jp": "金には本質的な価値がある。",
        "is_correct": true
      },
      {
        "parts": ["The error was", "."],
        "full": "The error was accidental.",
        "jp": "その誤りは偶然だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 352,
    "word": "INVALID",
    "meaning_core": "無効な",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "VAL", "type": "strong" },
      { "text": "id", "type": "weak" }
    ],
    "synonyms": {
      "VOID": "無効の",
      "NULL": "無価値の",
      "FALSE": "誤った"
    },
    "distractors": ["VALID", "LEGAL", "TRUE", "SOUND"],
    "meanings_expanded": ["無効な", "根拠のない"],
    "contexts": [
      {
        "parts": ["Your passport is", "."],
        "full": "Your passport is invalid.",
        "jp": "あなたのパスポートは無効だ。",
        "is_correct": true
      },
      {
        "parts": ["This ticket is", "for one day."],
        "full": "This ticket is valid for one day.",
        "jp": "このチケットは1日有効だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 353,
    "word": "INVARIABLY",
    "meaning_core": "いつも",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "VAR", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "a", "type": "weak" },
      { "text": "bly", "type": "weak" }
    ],
    "synonyms": {
      "ALWAYS": "常に",
      "CONSTANTLY": "絶えず",
      "PERPETUALLY": "永続的に"
    },
    "distractors": ["NEVER", "RARELY", "SELDOM", "SOMETIMES"],
    "meanings_expanded": ["いつも", "変わることなく", "必ず"],
    "contexts": [
      {
        "parts": ["He is", "late for meetings."],
        "full": "He is invariably late for meetings.",
        "jp": "彼は決まって（いつも）会議に遅れる。",
        "is_correct": true
      },
      {
        "parts": ["It", "snows here in summer."],
        "full": "It never snows here in summer.",
        "jp": "ここでは夏に雪は決して降らない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 354,
    "word": "INVENT",
    "meaning_core": "発明する",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "VENT", "type": "strong" }
    ],
    "synonyms": {
      "CREATE": "創造する",
      "DEVISE": "考案する",
      "DESIGN": "設計する"
    },
    "distractors": ["DESTROY", "COPY", "IMITATE", "RUIN"],
    "meanings_expanded": ["発明する", "考案する", "でっち上げる"],
    "contexts": [
      {
        "parts": ["Edison didn't", "the light bulb alone."],
        "full": "Edison didn't invent the light bulb alone.",
        "jp": "エジソンは一人で電球を発明したわけではない。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "my work."],
        "full": "Don't copy my work.",
        "jp": "私の作品を真似するな。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 355,
    "word": "INVOLVE",
    "meaning_core": "～を伴う",
    "syllables": [
      { "text": "in", "type": "weak" },
      { "text": "VOLVE", "type": "strong" }
    ],
    "synonyms": {
      "INCLUDE": "含む",
      "ENTAIL": "伴う",
      "REQUIRE": "必要とする"
    },
    "distractors": ["EXCLUDE", "OMIT", "IGNORE", "REJECT"],
    "meanings_expanded": ["～を伴う", "巻き込む", "熱中させる"],
    "contexts": [
      {
        "parts": ["The job will", "travel."],
        "full": "The job will involve travel.",
        "jp": "その仕事は移動（出張）を伴うだろう。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "me in your argument."],
        "full": "Don't involve me in your argument.",
        "jp": "私を口論に巻き込まないで。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 356,
    "word": "IRRITATING",
    "meaning_core": "いらいらさせる",
    "syllables": [
      { "text": "IR", "type": "strong" },
      { "text": "ri", "type": "weak" },
      { "text": "tat", "type": "weak" },
      { "text": "ing", "type": "weak" }
    ],
    "synonyms": {
      "ANNOYING": "うっとうしい",
      "BATHERSOME": "厄介な",
      "FRUSTRATING": "イライラさせる"
    },
    "distractors": ["PLEASANT", "SOOTHING", "CALMING", "DELIGHTFUL"],
    "meanings_expanded": ["いらいらさせる", "刺激する"],
    "contexts": [
      {
        "parts": ["He has an", "habit."],
        "full": "He has an irritating habit.",
        "jp": "彼にはイライラさせる癖がある。",
        "is_correct": true
      },
      {
        "parts": ["The music is very", "."],
        "full": "The music is very soothing.",
        "jp": "その音楽はとても心が安らぐ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 357,
    "word": "IRRITATION",
    "meaning_core": "いらだち",
    "syllables": [
      { "text": "ir", "type": "weak" },
      { "text": "ri", "type": "weak" },
      { "text": "TA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "ANNOYANCE": "いらだち",
      "ANGER": "怒り",
      "AGITATION": "動揺"
    },
    "distractors": ["PLEASURE", "JOY", "COMFORT", "DELIGHT"],
    "meanings_expanded": ["いらだち", "炎症", "刺激"],
    "contexts": [
      {
        "parts": ["He couldn't hide his", "."],
        "full": "He couldn't hide his irritation.",
        "jp": "彼はいらだちを隠せなかった。",
        "is_correct": true
      },
      {
        "parts": ["The cream reduces skin", "."],
        "full": "The cream reduces skin irritation.",
        "jp": "そのクリームは肌の炎症を抑える。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 358,
    "word": "ITINERARY",
    "meaning_core": "旅程",
    "syllables": [
      { "text": "i", "type": "weak" },
      { "text": "TIN", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "ar", "type": "weak" },
      { "text": "y", "type": "weak" }
    ],
    "synonyms": {
      "SCHEDULE": "予定",
      "ROUTE": "ルート",
      "PLAN": "計画"
    },
    "distractors": ["DESTINATION", "LUGGAGE", "PASSPORT", "TICKET"],
    "meanings_expanded": ["旅程", "旅行計画"],
    "contexts": [
      {
        "parts": ["Here is a copy of my", "."],
        "full": "Here is a copy of my itinerary.",
        "jp": "これが私の旅程のコピーです。",
        "is_correct": true
      },
      {
        "parts": ["We reached our", "."],
        "full": "We reached our destination.",
        "jp": "私たちは目的地に到着した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 359,
    "word": "JUDICIOUSLY",
    "meaning_core": "賢明に",
    "syllables": [
      { "text": "ju", "type": "weak" },
      { "text": "DI", "type": "strong" },
      { "text": "cious", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "WISELY": "賢く",
      "SENSIBLY": "分別を持って",
      "PRUDENTLY": "慎重に"
    },
    "distractors": ["FOOLISHLY", "RASHLY", "CARELESSLY", "STUPIDLY"],
    "meanings_expanded": ["賢明に", "慎重に"],
    "contexts": [
      {
        "parts": ["You should spend money", "."],
        "full": "You should spend money judiciously.",
        "jp": "お金は賢明に使うべきだ。",
        "is_correct": true
      },
      {
        "parts": ["He acted", "."],
        "full": "He acted foolishly.",
        "jp": "彼は愚かにも行動した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 360,
    "word": "JUSTIFY",
    "meaning_core": "正当化する",
    "syllables": [
      { "text": "JUS", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "fy", "type": "weak" }
    ],
    "synonyms": {
      "DEFEND": "弁護する",
      "VALIDATE": "正当と認める",
      "EXCUSE": "弁解する"
    },
    "distractors": ["CONDEMN", "CRITICIZE", "ATTACK", "BLAME"],
    "meanings_expanded": ["正当化する", "弁明する", "正当な理由となる"],
    "contexts": [
      {
        "parts": ["You can't", "stealing."],
        "full": "You can't justify stealing.",
        "jp": "盗みを正当化することはできない。",
        "is_correct": true
      },
      {
        "parts": ["The end does not", "the means."],
        "full": "The end does not justify the means.",
        "jp": "目的は手段を正当化しない。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 361,
    "word": "LANDSCAPE",
    "meaning_core": "風景",
    "syllables": [
      { "text": "LAND", "type": "strong" },
      { "text": "scape", "type": "weak" }
    ],
    "synonyms": {
      "SCENERY": "景色",
      "VIEW": "眺め",
      "TERRAIN": "地形"
    },
    "distractors": ["PORTRAIT", "INDOORS", "BUILDING", "ROOM"],
    "meanings_expanded": ["風景", "景観", "造園する"],
    "contexts": [
      {
        "parts": ["The rural", "is beautiful."],
        "full": "The rural landscape is beautiful.",
        "jp": "田舎の風景は美しい。",
        "is_correct": true
      },
      {
        "parts": ["He painted a", "of his wife."],
        "full": "He painted a portrait of his wife.",
        "jp": "彼は妻の肖像画を描いた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 362,
    "word": "LAUNCH",
    "meaning_core": "送り出す",
    "syllables": [
      { "text": "LAUNCH", "type": "strong" }
    ],
    "synonyms": {
      "START": "始める",
      "INITIATE": "開始する",
      "FIRE": "発射する"
    },
    "distractors": ["STOP", "END", "LAND", "FINISH"],
    "meanings_expanded": ["（ロケットを）打ち上げる", "（事業を）開始する", "送り出す"],
    "contexts": [
      {
        "parts": ["We will", "a new product."],
        "full": "We will launch a new product.",
        "jp": "私たちは新製品を発売（開始）する。",
        "is_correct": true
      },
      {
        "parts": ["The rocket will", "tomorrow."],
        "full": "The rocket will launch tomorrow.",
        "jp": "ロケットは明日打ち上げられる。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 363,
    "word": "LEGIBLE",
    "meaning_core": "判読可能な",
    "syllables": [
      { "text": "LEG", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "READABLE": "読める",
      "CLEAR": "明瞭な",
      "DISTINCT": "はっきりした"
    },
    "distractors": ["ILLEGIBLE", "UNCLEAR", "MESSY", "OBSCURE"],
    "meanings_expanded": ["判読可能な", "読みやすい"],
    "contexts": [
      {
        "parts": ["His handwriting is barely", "."],
        "full": "His handwriting is barely legible.",
        "jp": "彼の筆跡はかろうじて判読可能だ。",
        "is_correct": true
      },
      {
        "parts": ["The text is", "."],
        "full": "The text is illegible.",
        "jp": "その文字は判読不可能だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 364,
    "word": "LEGISLATION",
    "meaning_core": "法律制定",
    "syllables": [
      { "text": "leg", "type": "weak" },
      { "text": "is", "type": "weak" },
      { "text": "LA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "LAW": "法律",
      "STATUTE": "法令",
      "ACT": "条例"
    },
    "distractors": ["CRIME", "VIOLATION", "ANARCHY", "CHAOS"],
    "meanings_expanded": ["法律制定", "立法", "法律"],
    "contexts": [
      {
        "parts": ["New", "was passed today."],
        "full": "New legislation was passed today.",
        "jp": "今日、新しい法律が可決された。",
        "is_correct": true
      },
      {
        "parts": ["He committed a", "."],
        "full": "He committed a crime.",
        "jp": "彼は犯罪を犯した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 365,
    "word": "LIABILITY",
    "meaning_core": "責任",
    "syllables": [
      { "text": "li", "type": "weak" },
      { "text": "a", "type": "weak" },
      { "text": "BIL", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "RESPONSIBILITY": "責任",
      "DEBT": "負債",
      "ACCOUNTABILITY": "説明責任"
    },
    "distractors": ["ASSET", "BENEFIT", "ADVANTAGE", "GAIN"],
    "meanings_expanded": ["法的責任", "負債", "不利な点"],
    "contexts": [
      {
        "parts": ["The company admitted", "for the accident."],
        "full": "The company admitted liability for the accident.",
        "jp": "会社は事故の法的責任を認めた。",
        "is_correct": true
      },
      {
        "parts": ["Good health is an", "."],
        "full": "Good health is an asset.",
        "jp": "健康は資産だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 366,
    "word": "LIMITED",
    "meaning_core": "限られた",
    "syllables": [
      { "text": "LIM", "type": "strong" },
      { "text": "it", "type": "weak" },
      { "text": "ed", "type": "weak" }
    ],
    "synonyms": {
      "RESTRICTED": "制限された",
      "FINITE": "有限の",
      "NARROW": "狭い"
    },
    "distractors": ["UNLIMITED", "INFINITE", "ENDLESS", "BOUNDLESS"],
    "meanings_expanded": ["限られた", "有限の", "わずかな"],
    "contexts": [
      {
        "parts": ["Space is", "in this room."],
        "full": "Space is limited in this room.",
        "jp": "この部屋のスペースは限られている。",
        "is_correct": true
      },
      {
        "parts": ["The possibilities are", "."],
        "full": "The possibilities are unlimited.",
        "jp": "可能性は無限だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 367,
    "word": "LOITER",
    "meaning_core": "ぶらぶらする",
    "syllables": [
      { "text": "LOI", "type": "strong" },
      { "text": "ter", "type": "weak" }
    ],
    "synonyms": {
      "LINGER": "長居する",
      "HANG AROUND": "うろつく",
      "DAWDLE": "ぐずぐずする"
    },
    "distractors": ["HURRY", "RUSH", "RUN", "LEAVE"],
    "meanings_expanded": ["ぶらぶらする", "うろつく"],
    "contexts": [
      {
        "parts": ["Do not", "in the lobby."],
        "full": "Do not loiter in the lobby.",
        "jp": "ロビーでぶらぶらしないでください。",
        "is_correct": true
      },
      {
        "parts": ["Please", "to the gate."],
        "full": "Please hurry to the gate.",
        "jp": "ゲートへ急いでください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 368,
    "word": "LONG-TERM",
    "meaning_core": "長期的な",
    "syllables": [
      { "text": "LONG", "type": "strong" },
      { "text": "term", "type": "weak" }
    ],
    "synonyms": {
      "LASTING": "長続きする",
      "PERMANENT": "永続的な",
      "PROLONGED": "長期の"
    },
    "distractors": ["SHORT-TERM", "TEMPORARY", "BRIEF", "FLEETING"],
    "meanings_expanded": ["長期的な", "長期にわたる"],
    "contexts": [
      {
        "parts": ["We need a", "plan."],
        "full": "We need a long-term plan.",
        "jp": "私たちは長期的な計画が必要だ。",
        "is_correct": true
      },
      {
        "parts": ["It is a", "solution."],
        "full": "It is a short-term solution.",
        "jp": "それは短期的な解決策だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 369,
    "word": "MAGNET",
    "meaning_core": "磁石",
    "syllables": [
      { "text": "MAG", "type": "strong" },
      { "text": "net", "type": "weak" }
    ],
    "synonyms": {
      "ATTRACTION": "引きつけるもの",
      "DRAW": "呼び物"
    },
    "distractors": ["REPELLENT", "PLASTIC", "WOOD", "GLASS"],
    "meanings_expanded": ["磁石", "人を引きつける人・物"],
    "contexts": [
      {
        "parts": ["The city is a", "for tourists."],
        "full": "The city is a magnet for tourists.",
        "jp": "その都市は観光客を引きつける場所だ。",
        "is_correct": true
      },
      {
        "parts": ["Iron is attracted to a", "."],
        "full": "Iron is attracted to a magnet.",
        "jp": "鉄は磁石に引き寄せられる。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 370,
    "word": "MAGNIFY",
    "meaning_core": "拡大する",
    "syllables": [
      { "text": "MAG", "type": "strong" },
      { "text": "ni", "type": "weak" },
      { "text": "fy", "type": "weak" }
    ],
    "synonyms": {
      "ENLARGE": "大きくする",
      "AMPLIFY": "増幅する",
      "EXAGGERATE": "誇張する"
    },
    "distractors": ["REDUCE", "SHRINK", "DIMINISH", "MINIMIZE"],
    "meanings_expanded": ["拡大する", "誇張する"],
    "contexts": [
      {
        "parts": ["This lens will", "the object."],
        "full": "This lens will magnify the object.",
        "jp": "このレンズは物体を拡大する。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "the problem."],
        "full": "Don't exaggerate the problem.",
        "jp": "問題を誇張（拡大解釈）するな。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 371,
    "word": "MAJORITY",
    "meaning_core": "大多数",
    "syllables": [
      { "text": "ma", "type": "weak" },
      { "text": "JOR", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "MOST": "大部分",
      "MASS": "大衆",
      "BULK": "大半"
    },
    "distractors": ["MINORITY", "FEW", "SOME", "NONE"],
    "meanings_expanded": ["大多数", "過半数"],
    "contexts": [
      {
        "parts": ["The", "of people voted yes."],
        "full": "The majority of people voted yes.",
        "jp": "大多数の人々が賛成票を投じた。",
        "is_correct": true
      },
      {
        "parts": ["Only a", "agreed."],
        "full": "Only a minority agreed.",
        "jp": "少数の人だけが同意した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 372,
    "word": "MAMMAL",
    "meaning_core": "哺乳類",
    "syllables": [
      { "text": "MAM", "type": "strong" },
      { "text": "mal", "type": "weak" }
    ],
    "synonyms": {
      "ANIMAL": "動物",
      "CREATURE": "生き物",
      "BEAST": "獣"
    },
    "distractors": ["REPTILE", "BIRD", "FISH", "INSECT"],
    "meanings_expanded": ["哺乳類", "哺乳動物"],
    "contexts": [
      {
        "parts": ["The whale is a large", "."],
        "full": "The whale is a large mammal.",
        "jp": "クジラは大型の哺乳類だ。",
        "is_correct": true
      },
      {
        "parts": ["A snake is a", "."],
        "full": "A snake is a reptile.",
        "jp": "ヘビは爬虫類だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 373,
    "word": "MANUAL",
    "meaning_core": "手作業の",
    "syllables": [
      { "text": "MAN", "type": "strong" },
      { "text": "u", "type": "weak" },
      { "text": "al", "type": "weak" }
    ],
    "synonyms": {
      "HAND-OPERATED": "手動の",
      "PHYSICAL": "身体の",
      "GUIDEBOOK": "説明書"
    },
    "distractors": ["AUTOMATIC", "DIGITAL", "ELECTRONIC", "MENTAL"],
    "meanings_expanded": ["手作業の", "手動の", "説明書"],
    "contexts": [
      {
        "parts": ["He does", "labor."],
        "full": "He does manual labor.",
        "jp": "彼は肉体労働（手作業）をしている。",
        "is_correct": true
      },
      {
        "parts": ["This car has an", "transmission."],
        "full": "This car has an automatic transmission.",
        "jp": "この車はオートマチック車だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 374,
    "word": "MARKET",
    "meaning_core": "市場",
    "syllables": [
      { "text": "MAR", "type": "strong" },
      { "text": "ket", "type": "weak" }
    ],
    "synonyms": {
      "MARKETPLACE": "市場",
      "BAZAAR": "バザール",
      "TRADE": "取引"
    },
    "distractors": ["HOME", "SCHOOL", "OFFICE", "PRIVATE"],
    "meanings_expanded": ["市場", "相場", "市況"],
    "contexts": [
      {
        "parts": ["The stock", "crashed today."],
        "full": "The stock market crashed today.",
        "jp": "今日、株式市場が暴落した。",
        "is_correct": true
      },
      {
        "parts": ["We bought vegetables at the", "."],
        "full": "We bought vegetables at the market.",
        "jp": "私たちは市場で野菜を買った。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 375,
    "word": "MEADOW",
    "meaning_core": "牧草地",
    "syllables": [
      { "text": "MEAD", "type": "strong" },
      { "text": "ow", "type": "weak" }
    ],
    "synonyms": {
      "FIELD": "野原",
      "PASTURE": "牧草地",
      "GRASSLAND": "草原"
    },
    "distractors": ["FOREST", "DESERT", "CITY", "MOUNTAIN"],
    "meanings_expanded": ["牧草地", "草地"],
    "contexts": [
      {
        "parts": ["Cows were grazing in the", "."],
        "full": "Cows were grazing in the meadow.",
        "jp": "牛たちが牧草地で草を食べていた。",
        "is_correct": true
      },
      {
        "parts": ["We walked through the dark", "."],
        "full": "We walked through the dark forest.",
        "jp": "私たちは暗い森を歩いた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 376,
    "word": "MEDITATE",
    "meaning_core": "瞑想する",
    "syllables": [
      { "text": "MED", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "tate", "type": "weak" }
    ],
    "synonyms": {
      "CONTEMPLATE": "沈思黙考する",
      "PONDER": "熟考する",
      "REFLECT": "内省する"
    },
    "distractors": ["IGNORE", "RUSH", "ACT", "SPEAK"],
    "meanings_expanded": ["瞑想する", "熟考する", "企てる"],
    "contexts": [
      {
        "parts": ["I", "every morning to relax."],
        "full": "I meditate every morning to relax.",
        "jp": "私はリラックスするために毎朝瞑想する。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "without thinking."],
        "full": "Don't act without thinking.",
        "jp": "考えずに行動するな。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 377,
    "word": "MERELY",
    "meaning_core": "単に",
    "syllables": [
      { "text": "MERE", "type": "strong" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "ONLY": "ただ～だけ",
      "SIMPLY": "単に",
      "JUST": "ただ"
    },
    "distractors": ["COMPLETELY", "FULLY", "ABSOLUTELY", "EXTREMELY"],
    "meanings_expanded": ["単に", "ただ～にすぎない"],
    "contexts": [
      {
        "parts": ["I was", "joking."],
        "full": "I was merely joking.",
        "jp": "私は単に冗談を言っていただけだ。",
        "is_correct": true
      },
      {
        "parts": ["He is", "qualified."],
        "full": "He is fully qualified.",
        "jp": "彼は十分な資格を持っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 378,
    "word": "MIMIC",
    "meaning_core": "まねる",
    "syllables": [
      { "text": "MIM", "type": "strong" },
      { "text": "ic", "type": "weak" }
    ],
    "synonyms": {
      "IMITATE": "模倣する",
      "COPY": "コピーする",
      "MOCK": "あざける"
    },
    "distractors": ["ORIGINATE", "CREATE", "INVENT", "IGNORE"],
    "meanings_expanded": ["まねる", "模倣する", "（生物が）擬態する"],
    "contexts": [
      {
        "parts": ["Parrots can", "human speech."],
        "full": "Parrots can mimic human speech.",
        "jp": "オウムは人間の言葉をまねることができる。",
        "is_correct": true
      },
      {
        "parts": ["Please", "your own story."],
        "full": "Please create your own story.",
        "jp": "あなた自身の物語を作ってください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 379,
    "word": "MODERNIZATION",
    "meaning_core": "近代化",
    "syllables": [
      { "text": "mod", "type": "weak" },
      { "text": "ern", "type": "weak" },
      { "text": "i", "type": "weak" },
      { "text": "ZA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "DEVELOPMENT": "開発",
      "UPDATE": "更新",
      "IMPROVEMENT": "改善"
    },
    "distractors": ["TRADITION", "DECLINE", "DECAY", "STAGNATION"],
    "meanings_expanded": ["近代化", "現代化", "最新式にすること"],
    "contexts": [
      {
        "parts": ["The rapid", "of the city."],
        "full": "The rapid modernization of the city.",
        "jp": "その都市の急速な近代化。",
        "is_correct": true
      },
      {
        "parts": ["We value", "over change."],
        "full": "We value tradition over change.",
        "jp": "私たちは変化よりも伝統を重んじる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 380,
    "word": "MODIFY",
    "meaning_core": "修正する",
    "syllables": [
      { "text": "MOD", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "fy", "type": "weak" }
    ],
    "synonyms": {
      "CHANGE": "変える",
      "ALTER": "変更する",
      "ADJUST": "調整する"
    },
    "distractors": ["KEEP", "MAINTAIN", "PRESERVE", "STAY"],
    "meanings_expanded": ["修正する", "変更する", "緩和する"],
    "contexts": [
      {
        "parts": ["We need to", "the plan."],
        "full": "We need to modify the plan.",
        "jp": "私たちは計画を修正する必要がある。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the status quo."],
        "full": "Please maintain the status quo.",
        "jp": "現状を維持してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 381,
    "word": "MONOPOLY",
    "meaning_core": "独占",
    "syllables": [
      { "text": "mo", "type": "weak" },
      { "text": "NOP", "type": "strong" },
      { "text": "o", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "CONTROL": "支配",
      "DOMINANCE": "優位",
      "TRUST": "企業合同"
    },
    "distractors": ["COMPETITION", "SHARING", "DISTRIBUTION", "DIVISION"],
    "meanings_expanded": ["独占", "専売", "独り占め"],
    "contexts": [
      {
        "parts": ["The company has a", "on the market."],
        "full": "The company has a monopoly on the market.",
        "jp": "その会社は市場を独占している。",
        "is_correct": true
      },
      {
        "parts": ["We encourage fair", "."],
        "full": "We encourage fair competition.",
        "jp": "私たちは公正な競争を奨励する。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 382,
    "word": "MONOTONOUS",
    "meaning_core": "単調な",
    "syllables": [
      { "text": "mo", "type": "weak" },
      { "text": "NOT", "type": "strong" },
      { "text": "o", "type": "weak" },
      { "text": "nous", "type": "weak" }
    ],
    "synonyms": {
      "BORING": "退屈な",
      "DULL": "鈍い",
      "REPETITIVE": "繰り返しの"
    },
    "distractors": ["EXCITING", "VARIED", "INTERESTING", "DIVERSE"],
    "meanings_expanded": ["単調な", "一本調子の", "変化のない"],
    "contexts": [
      {
        "parts": ["He has a", "voice."],
        "full": "He has a monotonous voice.",
        "jp": "彼は一本調子の（単調な）声をしている。",
        "is_correct": true
      },
      {
        "parts": ["The movie was very", "."],
        "full": "The movie was very exciting.",
        "jp": "その映画はとても刺激的だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 383,
    "word": "MORAL",
    "meaning_core": "道徳的な",
    "syllables": [
      { "text": "MOR", "type": "strong" },
      { "text": "al", "type": "weak" }
    ],
    "synonyms": {
      "ETHICAL": "倫理的な",
      "VIRTUOUS": "高潔な",
      "RIGHT": "正しい"
    },
    "distractors": ["IMMORAL", "WRONG", "BAD", "EVIL"],
    "meanings_expanded": ["道徳的な", "倫理の", "教訓"],
    "contexts": [
      {
        "parts": ["We have a", "obligation to help."],
        "full": "We have a moral obligation to help.",
        "jp": "私たちには助けるという道徳的義務がある。",
        "is_correct": true
      },
      {
        "parts": ["Stealing is", "."],
        "full": "Stealing is immoral.",
        "jp": "盗みは不道徳だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 384,
    "word": "MOREOVER",
    "meaning_core": "さらに",
    "syllables": [
      { "text": "more", "type": "weak" },
      { "text": "O", "type": "strong" },
      { "text": "ver", "type": "weak" }
    ],
    "synonyms": {
      "FURTHERMORE": "その上",
      "BESIDES": "加えて",
      "ADDITIONALLY": "さらに"
    },
    "distractors": ["HOWEVER", "THEREFORE", "THUS", "INSTEAD"],
    "meanings_expanded": ["さらに", "その上"],
    "contexts": [
      {
        "parts": ["The rent is cheap;", ",", "the location is good."],
        "full": "The rent is cheap; moreover, the location is good.",
        "jp": "家賃は安い。さらに、立地も良い。",
        "is_correct": true
      },
      {
        "parts": ["He is smart;", ",", "he is lazy."],
        "full": "He is smart; however, he is lazy.",
        "jp": "彼は賢い。しかし、怠け者だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 385,
    "word": "MORTALITY",
    "meaning_core": "死亡率",
    "syllables": [
      { "text": "mor", "type": "weak" },
      { "text": "TAL", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "DEATH": "死",
      "FATALITY": "死亡者数"
    },
    "distractors": ["BIRTH", "LIFE", "SURVIVAL", "IMMORTALITY"],
    "meanings_expanded": ["死亡率", "死ぬ運命", "死亡数"],
    "contexts": [
      {
        "parts": ["The infant", "rate has decreased."],
        "full": "The infant mortality rate has decreased.",
        "jp": "乳幼児死亡率は低下した。",
        "is_correct": true
      },
      {
        "parts": ["We celebrated the", "of the baby."],
        "full": "We celebrated the birth of the baby.",
        "jp": "私たちは赤ちゃんの誕生を祝った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 386,
    "word": "MUTUAL",
    "meaning_core": "相互の",
    "syllables": [
      { "text": "MU", "type": "strong" },
      { "text": "tu", "type": "weak" },
      { "text": "al", "type": "weak" }
    ],
    "synonyms": {
      "SHARED": "共有の",
      "JOINT": "共同の",
      "RECIPROCAL": "互恵的な"
    },
    "distractors": ["ONE-SIDED", "INDIVIDUAL", "SEPARATE", "SOLE"],
    "meanings_expanded": ["相互の", "共通の"],
    "contexts": [
      {
        "parts": ["Respect should be", "."],
        "full": "Respect should be mutual.",
        "jp": "尊敬は相互のものであるべきだ。",
        "is_correct": true
      },
      {
        "parts": ["It was a", "decision."],
        "full": "It was a one-sided decision.",
        "jp": "それは一方的な決定だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 387,
    "word": "MUTUALLY",
    "meaning_core": "相互に",
    "syllables": [
      { "text": "MU", "type": "strong" },
      { "text": "tu", "type": "weak" },
      { "text": "al", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "JOINTLY": "共同で",
      "RECIPROCALLY": "お互いに"
    },
    "distractors": ["SEPARATELY", "INDIVIDUALLY", "ALONE", "SINGLY"],
    "meanings_expanded": ["相互に", "互いに"],
    "contexts": [
      {
        "parts": ["The agreement was", "beneficial."],
        "full": "The agreement was mutually beneficial.",
        "jp": "その合意は相互に利益があった。",
        "is_correct": true
      },
      {
        "parts": ["They worked", "."],
        "full": "They worked separately.",
        "jp": "彼らは別々に働いた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 388,
    "word": "NASTY",
    "meaning_core": "不快な",
    "syllables": [
      { "text": "NAS", "type": "strong" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "UNPLEASANT": "不愉快な",
      "MEAN": "意地悪な",
      "DISGUSTING": "むかつく"
    },
    "distractors": ["NICE", "PLEASANT", "KIND", "SWEET"],
    "meanings_expanded": ["不快な", "意地悪な", "汚い"],
    "contexts": [
      {
        "parts": ["He has a", "habit of biting his nails."],
        "full": "He has a nasty habit of biting his nails.",
        "jp": "彼には爪を噛むという不快な癖がある。",
        "is_correct": true
      },
      {
        "parts": ["She is a very", "person."],
        "full": "She is a very nice person.",
        "jp": "彼女はとても素敵な人だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 389,
    "word": "NECESSARILY",
    "meaning_core": "必ずしも",
    "syllables": [
      { "text": "nec", "type": "weak" },
      { "text": "es", "type": "weak" },
      { "text": "SAR", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "INEVITABLY": "必然的に",
      "AUTOMATICALLY": "自動的に"
    },
    "distractors": ["POSSIBLY", "PERHAPS", "MAYBE", "NEVER"],
    "meanings_expanded": ["必ずしも（～ない）", "必然的に"],
    "contexts": [
      {
        "parts": ["Big doesn't", "mean better."],
        "full": "Big doesn't necessarily mean better.",
        "jp": "大きいことが必ずしも良いこととは限らない。",
        "is_correct": true
      },
      {
        "parts": ["It will", "rain tomorrow."],
        "full": "It will probably rain tomorrow.",
        "jp": "明日はたぶん雨が降るだろう。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 390,
    "word": "NEGLIGENCE",
    "meaning_core": "過失",
    "syllables": [
      { "text": "NEG", "type": "strong" },
      { "text": "li", "type": "weak" },
      { "text": "gence", "type": "weak" }
    ],
    "synonyms": {
      "CARELESSNESS": "不注意",
      "NEGLECT": "怠慢",
      "FAILURE": "怠慢"
    },
    "distractors": ["CARE", "ATTENTION", "DILIGENCE", "CAUTION"],
    "meanings_expanded": ["過失", "怠慢", "不注意"],
    "contexts": [
      {
        "parts": ["The accident was caused by", "."],
        "full": "The accident was caused by negligence.",
        "jp": "その事故は過失（不注意）によって引き起こされた。",
        "is_correct": true
      },
      {
        "parts": ["Handle with", "."],
        "full": "Handle with care.",
        "jp": "取扱注意。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 391,
    "word": "NEGOTIATE",
    "meaning_core": "交渉する",
    "syllables": [
      { "text": "ne", "type": "weak" },
      { "text": "GO", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "BARGAIN": "取引する",
      "DISCUSS": "議論する",
      "DEAL": "扱う"
    },
    "distractors": ["FIGHT", "ARGUE", "IGNORE", "REJECT"],
    "meanings_expanded": ["交渉する", "取り決める", "（障害を）切り抜ける"],
    "contexts": [
      {
        "parts": ["We need to", "the price."],
        "full": "We need to negotiate the price.",
        "jp": "私たちは価格を交渉する必要がある。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "with him."],
        "full": "Don't fight with him.",
        "jp": "彼と喧嘩するな。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 393,
    "word": "NOBLE",
    "meaning_core": "高潔な",
    "syllables": [
      { "text": "NO", "type": "strong" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "HONORABLE": "名誉ある",
      "ARISTOCRATIC": "貴族の",
      "VIRTUOUS": "徳のある"
    },
    "distractors": ["BASE", "LOW", "MEAN", "COMMON"],
    "meanings_expanded": ["高潔な", "貴族の", "崇高な"],
    "contexts": [
      {
        "parts": ["It was a", "cause."],
        "full": "It was a noble cause.",
        "jp": "それは崇高な大義だった。",
        "is_correct": true
      },
      {
        "parts": ["He did a", "thing."],
        "full": "He did a mean thing.",
        "jp": "彼は卑劣なことをした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 394,
    "word": "NOMINATE",
    "meaning_core": "任命する",
    "syllables": [
      { "text": "NOM", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "nate", "type": "weak" }
    ],
    "synonyms": {
      "APPOINT": "任命する",
      "PROPOSE": "提案する",
      "NAME": "指名する"
    },
    "distractors": ["DISMISS", "FIRE", "REJECT", "IGNORE"],
    "meanings_expanded": ["任命する", "指名する", "推薦する"],
    "contexts": [
      {
        "parts": ["I will", "him for president."],
        "full": "I will nominate him for president.",
        "jp": "私は彼を社長に推薦するつもりだ。",
        "is_correct": true
      },
      {
        "parts": ["They decided to", "him."],
        "full": "They decided to fire him.",
        "jp": "彼らは彼を解雇することに決めた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 395,
    "word": "NOR",
    "meaning_core": "～もまたない",
    "syllables": [
      { "text": "NOR", "type": "strong" }
    ],
    "synonyms": {
      "NEITHER": "～もまたない"
    },
    "distractors": ["AND", "OR", "BUT", "ALSO"],
    "meanings_expanded": ["～もまたない（否定の継続）"],
    "contexts": [
      {
        "parts": ["He didn't go,", "did I."],
        "full": "He didn't go, nor did I.",
        "jp": "彼は行かなかったし、私も行かなかった。",
        "is_correct": true
      },
      {
        "parts": ["He went,", "did I."],
        "full": "He went, and so did I.",
        "jp": "彼は行ったし、私も行った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 396,
    "word": "NORM",
    "meaning_core": "規範",
    "syllables": [
      { "text": "NORM", "type": "strong" }
    ],
    "synonyms": {
      "STANDARD": "基準",
      "RULE": "ルール",
      "AVERAGE": "平均"
    },
    "distractors": ["EXCEPTION", "ABNORMALITY", "DEVIATION", "ODDITY"],
    "meanings_expanded": ["規範", "標準", "平均"],
    "contexts": [
      {
        "parts": ["Working late is the", "here."],
        "full": "Working late is the norm here.",
        "jp": "ここでは残業が当たり前（標準）だ。",
        "is_correct": true
      },
      {
        "parts": ["This is an", "to the rule."],
        "full": "This is an exception to the rule.",
        "jp": "これはルールの例外だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 398,
    "word": "NOTION",
    "meaning_core": "概念",
    "syllables": [
      { "text": "NO", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "IDEA": "考え",
      "CONCEPT": "概念",
      "BELIEF": "信念"
    },
    "distractors": ["FACT", "REALITY", "TRUTH", "PROOF"],
    "meanings_expanded": ["概念", "考え", "意向"],
    "contexts": [
      {
        "parts": ["I have no", "what you mean."],
        "full": "I have no notion what you mean.",
        "jp": "君が何を言っているのか全く見当がつかない。",
        "is_correct": true
      },
      {
        "parts": ["This is a proven", "."],
        "full": "This is a proven fact.",
        "jp": "これは証明された事実だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 399,
    "word": "NUISANCE",
    "meaning_core": "厄介なこと",
    "syllables": [
      { "text": "NUI", "type": "strong" },
      { "text": "sance", "type": "weak" }
    ],
    "synonyms": {
      "ANNOYANCE": "迷惑",
      "BOTHER": "面倒",
      "PEST": "害虫（厄介者）"
    },
    "distractors": ["JOY", "DELIGHT", "HELP", "PLEASURE"],
    "meanings_expanded": ["厄介なこと", "迷惑な人", "不快なもの"],
    "contexts": [
      {
        "parts": ["The noise is a real", "."],
        "full": "The noise is a real nuisance.",
        "jp": "その騒音は本当に迷惑だ。",
        "is_correct": true
      },
      {
        "parts": ["It was a", "to meet you."],
        "full": "It was a pleasure to meet you.",
        "jp": "お会いできて光栄でした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 400,
    "word": "NUTRIENT",
    "meaning_core": "栄養素",
    "syllables": [
      { "text": "NU", "type": "strong" },
      { "text": "tri", "type": "weak" },
      { "text": "ent", "type": "weak" }
    ],
    "synonyms": {
      "NOURISHMENT": "栄養",
      "FOOD": "食物",
      "VITAMIN": "ビタミン"
    },
    "distractors": ["POISON", "TOXIN", "WASTE", "GARBAGE"],
    "meanings_expanded": ["栄養素", "滋養物"],
    "contexts": [
      {
        "parts": ["Plants need", "from the soil."],
        "full": "Plants need nutrient from the soil.",
        "jp": "植物は土壌からの栄養素を必要とする。",
        "is_correct": true
      },
      {
        "parts": ["This is a deadly", "."],
        "full": "This is a deadly poison.",
        "jp": "これは致死性の毒だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 401,
    "word": "NUTRITIOUS",
    "meaning_core": "栄養のある",
    "syllables": [
      { "text": "nu", "type": "weak" },
      { "text": "TRI", "type": "strong" },
      { "text": "tious", "type": "weak" }
    ],
    "synonyms": {
      "HEALTHY": "健康的な",
      "NOURISHING": "滋養のある",
      "WHOLESOME": "健康に良い"
    },
    "distractors": ["UNHEALTHY", "TOXIC", "BAD", "POOR"],
    "meanings_expanded": ["栄養のある", "栄養価の高い"],
    "contexts": [
      {
        "parts": ["Vegetables are very", "."],
        "full": "Vegetables are very nutritious.",
        "jp": "野菜はとても栄養がある。",
        "is_correct": true
      },
      {
        "parts": ["Candy is very", "."],
        "full": "Candy is very healthy.",
        "jp": "キャンディはとても健康的だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 402,
    "word": "OBEDIENT",
    "meaning_core": "従順な",
    "syllables": [
      { "text": "o", "type": "weak" },
      { "text": "BE", "type": "strong" },
      { "text": "di", "type": "weak" },
      { "text": "ent", "type": "weak" }
    ],
    "synonyms": {
      "COMPLIANT": "言いなりになる",
      "SUBMISSIVE": "服従的な",
      "DUTIFUL": "義理堅い"
    },
    "distractors": ["REBELLIOUS", "STUBBORN", "WILD", "NAUGHTY"],
    "meanings_expanded": ["従順な", "素直な"],
    "contexts": [
      {
        "parts": ["The dog is very", "."],
        "full": "The dog is very obedient.",
        "jp": "その犬はとても従順だ。",
        "is_correct": true
      },
      {
        "parts": ["He is an", "child."],
        "full": "He is a rebellious child.",
        "jp": "彼は反抗的な子供だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 403,
    "word": "OBJECTION",
    "meaning_core": "異議",
    "syllables": [
      { "text": "ob", "type": "weak" },
      { "text": "JEC", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "PROTEST": "抗議",
      "COMPLAINT": "苦情",
      "OPPOSITION": "反対"
    },
    "distractors": ["AGREEMENT", "APPROVAL", "CONSENT", "SUPPORT"],
    "meanings_expanded": ["異議", "反対", "欠点"],
    "contexts": [
      {
        "parts": ["I have no", "to the plan."],
        "full": "I have no objection to the plan.",
        "jp": "私はその計画に異議はない。",
        "is_correct": true
      },
      {
        "parts": ["He raised an", "."],
        "full": "He raised an agreement.",
        "jp": "彼は同意を提起した（不自然）。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 404,
    "word": "OBLIGE",
    "meaning_core": "義務付ける",
    "syllables": [
      { "text": "o", "type": "weak" },
      { "text": "BLIGE", "type": "strong" }
    ],
    "synonyms": {
      "FORCE": "強いる",
      "COMPEL": "強制する",
      "REQUIRE": "要求する"
    },
    "distractors": ["FREE", "ALLOW", "LET", "RELEASE"],
    "meanings_expanded": ["義務付ける", "強いる", "恩義を施す"],
    "contexts": [
      {
        "parts": ["The law", "us to pay taxes."],
        "full": "The law obliges us to pay taxes.",
        "jp": "法律は私たちに納税を義務付けている。",
        "is_correct": true
      },
      {
        "parts": ["I will", "you to leave."],
        "full": "I will allow you to leave.",
        "jp": "あなたが去ることを許可する。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 405,
    "word": "OBLIVIOUS",
    "meaning_core": "気づかない",
    "syllables": [
      { "text": "o", "type": "weak" },
      { "text": "BLIV", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ous", "type": "weak" }
    ],
    "synonyms": {
      "UNAWARE": "気づかない",
      "IGNORANT": "知らない",
      "UNMINDFUL": "気に留めない"
    },
    "distractors": ["AWARE", "CONSCIOUS", "MINDFUL", "ALERT"],
    "meanings_expanded": ["気づかない", "忘れている"],
    "contexts": [
      {
        "parts": ["He was", "to the danger."],
        "full": "He was oblivious to the danger.",
        "jp": "彼は危険に気づいていなかった。",
        "is_correct": true
      },
      {
        "parts": ["She was", "of the time."],
        "full": "She was aware of the time.",
        "jp": "彼女は時間に気づいていた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 406,
    "word": "OBSOLETE",
    "meaning_core": "廃れた",
    "syllables": [
      { "text": "ob", "type": "weak" },
      { "text": "so", "type": "weak" },
      { "text": "LETE", "type": "strong" }
    ],
    "synonyms": {
      "OUTDATED": "時代遅れの",
      "OLD-FASHIONED": "旧式の",
      "ARCHAIC": "古風な"
    },
    "distractors": ["MODERN", "NEW", "CURRENT", "LATEST"],
    "meanings_expanded": ["廃れた", "時代遅れの", "陳腐化した"],
    "contexts": [
      {
        "parts": ["Typewriters are now", "."],
        "full": "Typewriters are now obsolete.",
        "jp": "タイプライターは今や廃れている。",
        "is_correct": true
      },
      {
        "parts": ["This computer is", "."],
        "full": "This computer is brand new.",
        "jp": "このコンピュータは新品だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 407,
    "word": "OBSTACLE",
    "meaning_core": "障害",
    "syllables": [
      { "text": "OB", "type": "strong" },
      { "text": "sta", "type": "weak" },
      { "text": "cle", "type": "weak" }
    ],
    "synonyms": {
      "BARRIER": "障壁",
      "HURDLE": "ハードル",
      "BLOCK": "妨害"
    },
    "distractors": ["AID", "HELP", "ADVANTAGE", "OPENING"],
    "meanings_expanded": ["障害", "邪魔者"],
    "contexts": [
      {
        "parts": ["Fear is the biggest", "to success."],
        "full": "Fear is the biggest obstacle to success.",
        "jp": "恐怖は成功への最大の障害だ。",
        "is_correct": true
      },
      {
        "parts": ["Money is an", "."],
        "full": "Money is an aid.",
        "jp": "お金は助けになる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 408,
    "word": "OBTAIN",
    "meaning_core": "手に入れる",
    "syllables": [
      { "text": "ob", "type": "weak" },
      { "text": "TAIN", "type": "strong" }
    ],
    "synonyms": {
      "GET": "得る",
      "ACQUIRE": "獲得する",
      "GAIN": "手に入れる"
    },
    "distractors": ["LOSE", "MISS", "GIVE", "DONATE"],
    "meanings_expanded": ["手に入れる", "獲得する", "通用する"],
    "contexts": [
      {
        "parts": ["Where can I", "a map?"],
        "full": "Where can I obtain a map?",
        "jp": "どこで地図を手に入れられますか？",
        "is_correct": true
      },
      {
        "parts": ["I want to", "my keys."],
        "full": "I want to lose my keys.",
        "jp": "私は鍵をなくしたい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 409,
    "word": "OCCASIONAL",
    "meaning_core": "時々の",
    "syllables": [
      { "text": "oc", "type": "weak" },
      { "text": "CA", "type": "strong" },
      { "text": "sion", "type": "weak" },
      { "text": "al", "type": "weak" }
    ],
    "synonyms": {
      "INFREQUENT": "まれな",
      "RARE": "珍しい",
      "SPORADIC": "散発的な"
    },
    "distractors": ["CONSTANT", "FREQUENT", "REGULAR", "USUAL"],
    "meanings_expanded": ["時々の", "たまの"],
    "contexts": [
      {
        "parts": ["We enjoy an", "glass of wine."],
        "full": "We enjoy an occasional glass of wine.",
        "jp": "私たちは時々ワインを楽しむ。",
        "is_correct": true
      },
      {
        "parts": ["It rains", "here."],
        "full": "It rains constantly here.",
        "jp": "ここでは絶えず雨が降る。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 410,
    "word": "OCCUR",
    "meaning_core": "起こる",
    "syllables": [
      { "text": "oc", "type": "weak" },
      { "text": "CUR", "type": "strong" }
    ],
    "synonyms": {
      "HAPPEN": "起こる",
      "TAKE PLACE": "開催される",
      "ARISE": "生じる"
    },
    "distractors": ["STOP", "END", "CEASE", "PREVENT"],
    "meanings_expanded": ["起こる", "生じる", "（心に）浮かぶ"],
    "contexts": [
      {
        "parts": ["Accidents often", "at home."],
        "full": "Accidents often occur at home.",
        "jp": "事故は家でよく起こる。",
        "is_correct": true
      },
      {
        "parts": ["The meeting will", "tomorrow."],
        "full": "The meeting will stop tomorrow.",
        "jp": "会議は明日中止になる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 413,
    "word": "OPERATE",
    "meaning_core": "操作する",
    "syllables": [
      { "text": "OP", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "WORK": "動く",
      "FUNCTION": "機能する",
      "MANAGE": "管理する"
    },
    "distractors": ["BREAK", "STOP", "HALT", "IDLE"],
    "meanings_expanded": ["操作する", "作動する", "手術する"],
    "contexts": [
      {
        "parts": ["Do not", "machinery while drowsy."],
        "full": "Do not operate machinery while drowsy.",
        "jp": "眠い時は機械を操作しないでください。",
        "is_correct": true
      },
      {
        "parts": ["The doctor will", "the patient."],
        "full": "The doctor will cure the patient.",
        "jp": "医師は患者を治癒する。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 414,
    "word": "OPPOSE",
    "meaning_core": "反対する",
    "syllables": [
      { "text": "op", "type": "weak" },
      { "text": "POSE", "type": "strong" }
    ],
    "synonyms": {
      "RESIST": "抵抗する",
      "FIGHT": "戦う",
      "WITHSTAND": "逆らう"
    },
    "distractors": ["SUPPORT", "AGREE", "HELP", "AID"],
    "meanings_expanded": ["反対する", "対抗する"],
    "contexts": [
      {
        "parts": ["Many people", "the new tax."],
        "full": "Many people oppose the new tax.",
        "jp": "多くの人々が新税に反対している。",
        "is_correct": true
      },
      {
        "parts": ["I", "your opinion."],
        "full": "I support your opinion.",
        "jp": "私はあなたの意見を支持する。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 415,
    "word": "OPPOSITE",
    "meaning_core": "反対の",
    "syllables": [
      { "text": "OP", "type": "strong" },
      { "text": "po", "type": "weak" },
      { "text": "site", "type": "weak" }
    ],
    "synonyms": {
      "CONTRARY": "正反対の",
      "REVERSE": "逆の",
      "CONFLICTING": "矛盾する"
    },
    "distractors": ["SAME", "SIMILAR", "ALIKE", "IDENTICAL"],
    "meanings_expanded": ["反対の", "向かい側の"],
    "contexts": [
      {
        "parts": ["They sat on", "sides of the table."],
        "full": "They sat on opposite sides of the table.",
        "jp": "彼らはテーブルの反対側に座った。",
        "is_correct": true
      },
      {
        "parts": ["We have the", "opinion."],
        "full": "We have the same opinion.",
        "jp": "私たちは同じ意見を持っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 416,
    "word": "ORGANISM",
    "meaning_core": "生物",
    "syllables": [
      { "text": "OR", "type": "strong" },
      { "text": "gan", "type": "weak" },
      { "text": "ism", "type": "weak" }
    ],
    "synonyms": {
      "CREATURE": "生き物",
      "BEING": "存在",
      "LIVING THING": "生物"
    },
    "distractors": ["OBJECT", "MINERAL", "ROCK", "MACHINE"],
    "meanings_expanded": ["生物", "有機体"],
    "contexts": [
      {
        "parts": ["A cell is the smallest unit of an", "."],
        "full": "A cell is the smallest unit of an organism.",
        "jp": "細胞は生物の最小単位だ。",
        "is_correct": true
      },
      {
        "parts": ["A stone is a living", "."],
        "full": "A stone is a living creature.",
        "jp": "石は生き物だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 417,
    "word": "OTHERWISE",
    "meaning_core": "さもなければ",
    "syllables": [
      { "text": "OTH", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "wise", "type": "weak" }
    ],
    "synonyms": {
      "OR ELSE": "さもないと",
      "DIFFERENTLY": "別の方法で"
    },
    "distractors": ["SIMILARLY", "LIKEWISE", "ALSO", "TOO"],
    "meanings_expanded": ["さもなければ", "そうでないと", "別の方法で"],
    "contexts": [
      {
        "parts": ["Hurry up,", "you'll be late."],
        "full": "Hurry up, otherwise you'll be late.",
        "jp": "急ぎなさい、さもなければ遅刻するよ。",
        "is_correct": true
      },
      {
        "parts": ["He is smart,", "he is kind."],
        "full": "He is smart, also he is kind.",
        "jp": "彼は賢い、また親切でもある。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 419,
    "word": "OUTRAGEOUS",
    "meaning_core": "とんでもない",
    "syllables": [
      { "text": "out", "type": "weak" },
      { "text": "RA", "type": "strong" },
      { "text": "geous", "type": "weak" }
    ],
    "synonyms": {
      "SHOCKING": "衝撃的な",
      "SCANDALOUS": "不名誉な",
      "UNREASONABLE": "理不尽な"
    },
    "distractors": ["REASONABLE", "NORMAL", "FAIR", "MILD"],
    "meanings_expanded": ["とんでもない", "法外な", "けしからん"],
    "contexts": [
      {
        "parts": ["The price of the ticket was", "."],
        "full": "The price of the ticket was outrageous.",
        "jp": "チケットの値段は法外だった。",
        "is_correct": true
      },
      {
        "parts": ["His behavior was", "."],
        "full": "His behavior was normal.",
        "jp": "彼の振る舞いは普通だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 420,
    "word": "OUTSIDE",
    "meaning_core": "～の外側に",
    "syllables": [
      { "text": "out", "type": "weak" },
      { "text": "SIDE", "type": "strong" }
    ],
    "synonyms": {
      "EXTERIOR": "外部",
      "OUTDOORS": "屋外"
    },
    "distractors": ["INSIDE", "INTERIOR", "WITHIN", "IN"],
    "meanings_expanded": ["～の外側に", "外側"],
    "contexts": [
      {
        "parts": ["It is cold", "."],
        "full": "It is cold outside.",
        "jp": "外は寒い。",
        "is_correct": true
      },
      {
        "parts": ["Let's go", "."],
        "full": "Let's go inside.",
        "jp": "中に入ろう。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 421,
    "word": "OUTSTANDING",
    "meaning_core": "目立った",
    "syllables": [
      { "text": "out", "type": "weak" },
      { "text": "STAND", "type": "strong" },
      { "text": "ing", "type": "weak" }
    ],
    "synonyms": {
      "EXCELLENT": "優れた",
      "REMARKABLE": "注目すべき",
      "UNPAID": "未払いの"
    },
    "distractors": ["AVERAGE", "ORDINARY", "POOR", "PAID"],
    "meanings_expanded": ["目立った", "傑出した", "未払いの"],
    "contexts": [
      {
        "parts": ["He did an", "job."],
        "full": "He did an outstanding job.",
        "jp": "彼は素晴らしい仕事をした。",
        "is_correct": true
      },
      {
        "parts": ["I have an", "bill."],
        "full": "I have an outstanding bill.",
        "jp": "私には未払いの請求書がある。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 422,
    "word": "OVERLOOK",
    "meaning_core": "大目に見る",
    "syllables": [
      { "text": "o", "type": "weak" },
      { "text": "ver", "type": "weak" },
      { "text": "LOOK", "type": "strong" }
    ],
    "synonyms": {
      "IGNORE": "無視する",
      "MISS": "見落とす",
      "FORGIVE": "許す"
    },
    "distractors": ["NOTICE", "OBSERVE", "SCRUTINIZE", "PUNISH"],
    "meanings_expanded": ["大目に見る", "見渡す", "見落とす"],
    "contexts": [
      {
        "parts": ["I will", "your mistake this time."],
        "full": "I will overlook your mistake this time.",
        "jp": "今回だけは君の間違いを大目に見よう。",
        "is_correct": true
      },
      {
        "parts": ["The hotel room", "the ocean."],
        "full": "The hotel room overlooks the ocean.",
        "jp": "ホテルの部屋からは海が見渡せる。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 423,
    "word": "OVERSEAS",
    "meaning_core": "海外の",
    "syllables": [
      { "text": "o", "type": "weak" },
      { "text": "ver", "type": "weak" },
      { "text": "SEAS", "type": "strong" }
    ],
    "synonyms": {
      "ABROAD": "海外へ",
      "FOREIGN": "外国の",
      "INTERNATIONAL": "国際的な"
    },
    "distractors": ["DOMESTIC", "LOCAL", "HOME", "NATIVE"],
    "meanings_expanded": ["海外の", "外国への"],
    "contexts": [
      {
        "parts": ["He works", "."],
        "full": "He works overseas.",
        "jp": "彼は海外で働いている。",
        "is_correct": true
      },
      {
        "parts": ["We promote", "travel."],
        "full": "We promote domestic travel.",
        "jp": "私たちは国内旅行を促進している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 424,
    "word": "OVERWHELMING",
    "meaning_core": "圧倒するような",
    "syllables": [
      { "text": "o", "type": "weak" },
      { "text": "ver", "type": "weak" },
      { "text": "WHELM", "type": "strong" },
      { "text": "ing", "type": "weak" }
    ],
    "synonyms": {
      "OVERPOWERING": "圧倒的な",
      "INTENSE": "強烈な",
      "STAGGERING": "驚異的な"
    },
    "distractors": ["WEAK", "MILD", "SMALL", "INSIGNIFICANT"],
    "meanings_expanded": ["圧倒的な", "抵抗できない"],
    "contexts": [
      {
        "parts": ["The evidence was", "."],
        "full": "The evidence was overwhelming.",
        "jp": "証拠は圧倒的だった。",
        "is_correct": true
      },
      {
        "parts": ["He felt an", "joy."],
        "full": "He felt an overwhelming joy.",
        "jp": "彼は圧倒的な喜びを感じた。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 425,
    "word": "OXYGEN",
    "meaning_core": "酸素",
    "syllables": [
      { "text": "OX", "type": "strong" },
      { "text": "y", "type": "weak" },
      { "text": "gen", "type": "weak" }
    ],
    "synonyms": {
      "O2": "O2",
      "AIR": "空気"
    },
    "distractors": ["CARBON", "NITROGEN", "WATER", "POISON"],
    "meanings_expanded": ["酸素"],
    "contexts": [
      {
        "parts": ["Humans need", "to breathe."],
        "full": "Humans need oxygen to breathe.",
        "jp": "人間は呼吸するために酸素が必要だ。",
        "is_correct": true
      },
      {
        "parts": ["Plants produce", "."],
        "full": "Plants produce oxygen.",
        "jp": "植物は酸素を作り出す。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 426,
    "word": "PARADIGM",
    "meaning_core": "パラダイム",
    "syllables": [
      { "text": "PAR", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "digm", "type": "weak" }
    ],
    "synonyms": {
      "MODEL": "模範",
      "PATTERN": "様式",
      "FRAMEWORK": "枠組み"
    },
    "distractors": ["CHAOS", "DISORDER", "EXCEPTION", "ANOMALY"],
    "meanings_expanded": ["パラダイム", "思考の枠組み", "模範"],
    "contexts": [
      {
        "parts": ["This is a new", "in science."],
        "full": "This is a new paradigm in science.",
        "jp": "これは科学における新しいパラダイムだ。",
        "is_correct": true
      },
      {
        "parts": ["We need to shift the", "."],
        "full": "We need to shift the paradigm.",
        "jp": "私たちはパラダイムを転換する必要がある。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 427,
    "word": "PARTICIPATE",
    "meaning_core": "参加する",
    "syllables": [
      { "text": "par", "type": "weak" },
      { "text": "TIC", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "pate", "type": "weak" }
    ],
    "synonyms": {
      "TAKE PART": "参加する",
      "JOIN": "加わる",
      "ENGAGE": "従事する"
    },
    "distractors": ["AVOID", "WATCH", "OBSERVE", "WITHDRAW"],
    "meanings_expanded": ["参加する", "関与する"],
    "contexts": [
      {
        "parts": ["I want to", "in the contest."],
        "full": "I want to participate in the contest.",
        "jp": "私はコンテストに参加したい。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the event."],
        "full": "Please watch the event.",
        "jp": "イベントを見てください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 428,
    "word": "PARTICULARLY",
    "meaning_core": "特に",
    "syllables": [
      { "text": "par", "type": "weak" },
      { "text": "TIC", "type": "strong" },
      { "text": "u", "type": "weak" },
      { "text": "lar", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "ESPECIALLY": "特に",
      "SPECIFICALLY": "具体的に",
      "NOTABLY": "とりわけ"
    },
    "distractors": ["GENERALLY", "USUALLY", "BROADLY", "SLIGHTLY"],
    "meanings_expanded": ["特に", "とりわけ"],
    "contexts": [
      {
        "parts": ["I am", "interested in art."],
        "full": "I am particularly interested in art.",
        "jp": "私は特に芸術に興味がある。",
        "is_correct": true
      },
      {
        "parts": ["He is", "good at math."],
        "full": "He is generally good at math.",
        "jp": "彼は概して数学が得意だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 429,
    "word": "PATIENT",
    "meaning_core": "忍耐強い",
    "syllables": [
      { "text": "PA", "type": "strong" },
      { "text": "tient", "type": "weak" }
    ],
    "synonyms": {
      "TOLERANT": "寛容な",
      "ENDURING": "辛抱強い",
      "CALM": "穏やかな"
    },
    "distractors": ["IMPATIENT", "HASTY", "ANGRY", "RUSHED"],
    "meanings_expanded": ["忍耐強い", "患者（名詞）"],
    "contexts": [
      {
        "parts": ["You must be", "with children."],
        "full": "You must be patient with children.",
        "jp": "子供に対しては忍耐強くなければならない。",
        "is_correct": true
      },
      {
        "parts": ["The doctor examined the", "."],
        "full": "The doctor examined the patient.",
        "jp": "医師は患者を診察した。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 430,
    "word": "PENETRATE",
    "meaning_core": "貫通する",
    "syllables": [
      { "text": "PEN", "type": "strong" },
      { "text": "e", "type": "weak" },
      { "text": "trate", "type": "weak" }
    ],
    "synonyms": {
      "PIERCE": "突き通す",
      "ENTER": "入る",
      "PERMEATE": "浸透する"
    },
    "distractors": ["BOUNCE", "REFLECT", "STOP", "BLOCK"],
    "meanings_expanded": ["貫通する", "浸透する", "見抜く"],
    "contexts": [
      {
        "parts": ["The bullet failed to", "the armor."],
        "full": "The bullet failed to penetrate the armor.",
        "jp": "弾丸は装甲を貫通しなかった。",
        "is_correct": true
      },
      {
        "parts": ["Sunlight can", "deep water."],
        "full": "Sunlight can penetrate deep water.",
        "jp": "日光は深い水中まで届く（浸透する）。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 431,
    "word": "PERCEPTIBLE",
    "meaning_core": "知覚できる",
    "syllables": [
      { "text": "per", "type": "weak" },
      { "text": "CEP", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "NOTICEABLE": "目立つ",
      "DETECTABLE": "検知できる",
      "VISIBLE": "目に見える"
    },
    "distractors": ["IMPERCEPTIBLE", "INVISIBLE", "HIDDEN", "UNNOTICEABLE"],
    "meanings_expanded": ["知覚できる", "かなりの"],
    "contexts": [
      {
        "parts": ["There was a", "change in temperature."],
        "full": "There was a perceptible change in temperature.",
        "jp": "気温に知覚できるほどの変化があった。",
        "is_correct": true
      },
      {
        "parts": ["The sound was barely", "."],
        "full": "The sound was barely audible.",
        "jp": "その音はかろうじて聞こえた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 432,
    "word": "PERCEPTION",
    "meaning_core": "知覚",
    "syllables": [
      { "text": "per", "type": "weak" },
      { "text": "CEP", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "AWARENESS": "認識",
      "SENSE": "感覚",
      "VIEW": "見方"
    },
    "distractors": ["IGNORANCE", "BLINDNESS", "REALITY", "FACT"],
    "meanings_expanded": ["知覚", "認識", "見解"],
    "contexts": [
      {
        "parts": ["His", "of reality is distorted."],
        "full": "His perception of reality is distorted.",
        "jp": "彼の現実認識は歪んでいる。",
        "is_correct": true
      },
      {
        "parts": ["Public", "has changed."],
        "full": "Public perception has changed.",
        "jp": "世間の見方は変わった。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 433,
    "word": "PERILOUS",
    "meaning_core": "危険な",
    "syllables": [
      { "text": "PER", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "lous", "type": "weak" }
    ],
    "synonyms": {
      "DANGEROUS": "危険な",
      "HAZARDOUS": "有害な",
      "RISKY": "冒険的な"
    },
    "distractors": ["SAFE", "SECURE", "HARMLESS", "EASY"],
    "meanings_expanded": ["危険な", "冒険的な"],
    "contexts": [
      {
        "parts": ["The journey was", "."],
        "full": "The journey was perilous.",
        "jp": "その旅は危険だった。",
        "is_correct": true
      },
      {
        "parts": ["It is", "to swim here."],
        "full": "It is safe to swim here.",
        "jp": "ここで泳ぐのは安全だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 434,
    "word": "PERMANENT",
    "meaning_core": "永久の",
    "syllables": [
      { "text": "PER", "type": "strong" },
      { "text": "ma", "type": "weak" },
      { "text": "nent", "type": "weak" }
    ],
    "synonyms": {
      "LASTING": "永続的な",
      "ETERNAL": "永遠の",
      "CONSTANT": "不変の"
    },
    "distractors": ["TEMPORARY", "BRIEF", "SHORT-TERM", "FLEETING"],
    "meanings_expanded": ["永久の", "常設の", "耐久の"],
    "contexts": [
      {
        "parts": ["He is looking for a", "job."],
        "full": "He is looking for a permanent job.",
        "jp": "彼は正社員（永久の職）を探している。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "solution."],
        "full": "This is a temporary solution.",
        "jp": "これは一時的な解決策だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 435,
    "word": "PERMIT",
    "meaning_core": "許可する",
    "syllables": [
      { "text": "per", "type": "weak" },
      { "text": "MIT", "type": "strong" }
    ],
    "synonyms": {
      "ALLOW": "許す",
      "AUTHORIZE": "認可する",
      "GRANT": "与える"
    },
    "distractors": ["FORBID", "BAN", "PROHIBIT", "DENY"],
    "meanings_expanded": ["許可する", "許す", "許可証（名詞・アクセント第一音節）"],
    "contexts": [
      {
        "parts": ["Smoking is not", "here."],
        "full": "Smoking is not permitted here.",
        "jp": "ここでは喫煙は許可されていない。",
        "is_correct": true
      },
      {
        "parts": ["Please", "me to enter."],
        "full": "Please allow me to enter.",
        "jp": "中に入るのを許可してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 436,
    "word": "PERPETRATOR",
    "meaning_core": "犯人",
    "syllables": [
      { "text": "PER", "type": "strong" },
      { "text": "pe", "type": "weak" },
      { "text": "tra", "type": "weak" },
      { "text": "tor", "type": "weak" }
    ],
    "synonyms": {
      "CRIMINAL": "犯罪者",
      "CULPRIT": "容疑者",
      "OFFENDER": "違反者"
    },
    "distractors": ["VICTIM", "POLICE", "WITNESS", "HERO"],
    "meanings_expanded": ["犯人", "加害者"],
    "contexts": [
      {
        "parts": ["Police are looking for the", "."],
        "full": "Police are looking for the perpetrator.",
        "jp": "警察は犯人を探している。",
        "is_correct": true
      },
      {
        "parts": ["The", "was injured."],
        "full": "The victim was injured.",
        "jp": "被害者は怪我をした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 437,
    "word": "PERSUADE",
    "meaning_core": "説得する",
    "syllables": [
      { "text": "per", "type": "weak" },
      { "text": "SUADE", "type": "strong" }
    ],
    "synonyms": {
      "CONVINCE": "納得させる",
      "INFLUENCE": "影響を与える",
      "URGE": "促す"
    },
    "distractors": ["DISSUADE", "FORCE", "ORDER", "PREVENT"],
    "meanings_expanded": ["説得する", "信じさせる"],
    "contexts": [
      {
        "parts": ["I tried to", "him to go."],
        "full": "I tried to persuade him to go.",
        "jp": "私は彼に行くように説得しようとした。",
        "is_correct": true
      },
      {
        "parts": ["I managed to", "him."],
        "full": "I managed to convince him.",
        "jp": "私は彼を納得させることができた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 438,
    "word": "PHENOMENON",
    "meaning_core": "現象",
    "syllables": [
      { "text": "phe", "type": "weak" },
      { "text": "NOM", "type": "strong" },
      { "text": "e", "type": "weak" },
      { "text": "non", "type": "weak" }
    ],
    "synonyms": {
      "OCCURRENCE": "出来事",
      "EVENT": "事象",
      "FACT": "事実"
    },
    "distractors": ["THEORY", "IDEA", "ILLUSION", "FANTASY"],
    "meanings_expanded": ["現象", "事象", "非凡な人"],
    "contexts": [
      {
        "parts": ["Gravity is a natural", "."],
        "full": "Gravity is a natural phenomenon.",
        "jp": "重力は自然現象だ。",
        "is_correct": true
      },
      {
        "parts": ["This is a rare", "."],
        "full": "This is a rare event.",
        "jp": "これは珍しい出来事だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 439,
    "word": "PIONEER",
    "meaning_core": "開拓者",
    "syllables": [
      { "text": "pi", "type": "weak" },
      { "text": "o", "type": "weak" },
      { "text": "NEER", "type": "strong" }
    ],
    "synonyms": {
      "INNOVATOR": "革新者",
      "LEADER": "指導者",
      "EXPLORER": "探検家"
    },
    "distractors": ["FOLLOWER", "IMITATOR", "LATECOMER", "FOE"],
    "meanings_expanded": ["開拓者", "先駆者", "切り開く"],
    "contexts": [
      {
        "parts": ["He is a", "in space travel."],
        "full": "He is a pioneer in space travel.",
        "jp": "彼は宇宙旅行の先駆者だ。",
        "is_correct": true
      },
      {
        "parts": ["She is a", "of fashion."],
        "full": "She is a follower of fashion.",
        "jp": "彼女はファッションの追従者だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 440,
    "word": "PLAUSIBLE",
    "meaning_core": "もっともらしい",
    "syllables": [
      { "text": "PLAU", "type": "strong" },
      { "text": "si", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "BELIEVABLE": "信じられる",
      "REASONABLE": "妥当な",
      "CREDIBLE": "信用できる"
    },
    "distractors": ["IMPLAUSIBLE", "UNLIKELY", "IMPOSSIBLE", "ABSURD"],
    "meanings_expanded": ["もっともらしい", "まことしやかな"],
    "contexts": [
      {
        "parts": ["His explanation sounds", "."],
        "full": "His explanation sounds plausible.",
        "jp": "彼の説明はもっともらしく聞こえる。",
        "is_correct": true
      },
      {
        "parts": ["That is an", "excuse."],
        "full": "That is an unlikely excuse.",
        "jp": "それはありそうもない言い訳だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 441,
    "word": "PLAUSIBLY",
    "meaning_core": "もっともらしく",
    "syllables": [
      { "text": "PLAU", "type": "strong" },
      { "text": "si", "type": "weak" },
      { "text": "bly", "type": "weak" }
    ],
    "synonyms": {
      "BELIEVABLY": "信じられるように",
      "REASONABLY": "合理的に"
    },
    "distractors": ["IMPLAUSIBLY", "ABSURDLY", "RIDICULOUSLY", "FALSELY"],
    "meanings_expanded": ["もっともらしく"],
    "contexts": [
      {
        "parts": ["She argued", "that she was innocent."],
        "full": "She argued plausibly that she was innocent.",
        "jp": "彼女は自分が無実であるともっともらしく主張した。",
        "is_correct": true
      },
      {
        "parts": ["He lied", "."],
        "full": "He lied convincingly.",
        "jp": "彼は説得力を持って嘘をついた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 442,
    "word": "PLEA",
    "meaning_core": "嘆願",
    "syllables": [
      { "text": "PLEA", "type": "strong" }
    ],
    "synonyms": {
      "APPEAL": "懇願",
      "REQUEST": "要請",
      "PETITION": "請願"
    },
    "distractors": ["COMMAND", "ORDER", "DEMAND", "REFUSAL"],
    "meanings_expanded": ["嘆願", "懇願", "弁解"],
    "contexts": [
      {
        "parts": ["He made a", "for mercy."],
        "full": "He made a plea for mercy.",
        "jp": "彼は慈悲を求めて嘆願した。",
        "is_correct": true
      },
      {
        "parts": ["The judge rejected his", "."],
        "full": "The judge rejected his appeal.",
        "jp": "裁判官は彼の訴えを却下した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 443,
    "word": "PLEASANT",
    "meaning_core": "快適な",
    "syllables": [
      { "text": "PLEAS", "type": "strong" },
      { "text": "ant", "type": "weak" }
    ],
    "synonyms": {
      "AGREEABLE": "感じの良い",
      "NICE": "素敵な",
      "ENJOYABLE": "楽しい"
    },
    "distractors": ["UNPLEASANT", "BAD", "TERRIBLE", "NASTY"],
    "meanings_expanded": ["快適な", "楽しい", "好感の持てる"],
    "contexts": [
      {
        "parts": ["We had a", "evening."],
        "full": "We had a pleasant evening.",
        "jp": "私たちは楽しい夜を過ごした。",
        "is_correct": true
      },
      {
        "parts": ["The weather is", "."],
        "full": "The weather is nice.",
        "jp": "天気は良い。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 444,
    "word": "PLUMBER",
    "meaning_core": "配管工",
    "syllables": [
      { "text": "PLUM", "type": "strong" },
      { "text": "er", "type": "weak" }
    ],
    "synonyms": {
      "PIPE FITTER": "配管工"
    },
    "distractors": ["ELECTRICIAN", "CARPENTER", "DOCTOR", "TEACHER"],
    "meanings_expanded": ["配管工", "水道屋"],
    "contexts": [
      {
        "parts": ["Call a", "to fix the leak."],
        "full": "Call a plumber to fix the leak.",
        "jp": "水漏れを直すために配管工を呼びなさい。",
        "is_correct": true
      },
      {
        "parts": ["The", "fixed the lights."],
        "full": "The electrician fixed the lights.",
        "jp": "電気技師が明かりを修理した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 445,
    "word": "POLICY",
    "meaning_core": "政策",
    "syllables": [
      { "text": "POL", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "cy", "type": "weak" }
    ],
    "synonyms": {
      "STRATEGY": "戦略",
      "PLAN": "計画",
      "RULE": "規則"
    },
    "distractors": ["CHAOS", "CHANCE", "ACCIDENT", "LUCK"],
    "meanings_expanded": ["政策", "方針", "保険証券"],
    "contexts": [
      {
        "parts": ["Honesty is the best", "."],
        "full": "Honesty is the best policy.",
        "jp": "正直は最良の策（方針）だ。",
        "is_correct": true
      },
      {
        "parts": ["The government announced a new", "."],
        "full": "The government announced a new plan.",
        "jp": "政府は新しい計画を発表した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 446,
    "word": "POLLUTANT",
    "meaning_core": "汚染物質",
    "syllables": [
      { "text": "pol", "type": "weak" },
      { "text": "LU", "type": "strong" },
      { "text": "tant", "type": "weak" }
    ],
    "synonyms": {
      "CONTAMINANT": "汚染物質",
      "WASTE": "廃棄物",
      "POISON": "毒"
    },
    "distractors": ["PURIFIER", "CLEANER", "NUTRIENT", "FOOD"],
    "meanings_expanded": ["汚染物質", "汚染源"],
    "contexts": [
      {
        "parts": ["Carbon dioxide is a major", "."],
        "full": "Carbon dioxide is a major pollutant.",
        "jp": "二酸化炭素は主要な汚染物質だ。",
        "is_correct": true
      },
      {
        "parts": ["Water acts as a", "."],
        "full": "Water acts as a cleaner.",
        "jp": "水は洗浄剤として作用する。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 447,
    "word": "PORTRAY",
    "meaning_core": "描写する",
    "syllables": [
      { "text": "por", "type": "weak" },
      { "text": "TRAY", "type": "strong" }
    ],
    "synonyms": {
      "DEPICT": "描く",
      "DESCRIBE": "描写する",
      "REPRESENT": "表現する"
    },
    "distractors": ["HIDE", "CONCEAL", "IGNORE", "DISTORT"],
    "meanings_expanded": ["描写する", "（役を）演じる", "肖像を描く"],
    "contexts": [
      {
        "parts": ["The movie", "him as a hero."],
        "full": "The movie portrays him as a hero.",
        "jp": "その映画は彼を英雄として描いている。",
        "is_correct": true
      },
      {
        "parts": ["She", "the main character."],
        "full": "She played the main character.",
        "jp": "彼女は主人公を演じた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 448,
    "word": "POTENTIAL",
    "meaning_core": "潜在的な",
    "syllables": [
      { "text": "po", "type": "weak" },
      { "text": "TEN", "type": "strong" },
      { "text": "tial", "type": "weak" }
    ],
    "synonyms": {
      "POSSIBLE": "可能性のある",
      "PROBABLE": "ありそうな",
      "LATENT": "潜伏している"
    },
    "distractors": ["IMPOSSIBLE", "ACTUAL", "REAL", "EXISTING"],
    "meanings_expanded": ["潜在的な", "可能性", "見込み"],
    "contexts": [
      {
        "parts": ["He has great", "as a pianist."],
        "full": "He has great potential as a pianist.",
        "jp": "彼はピアニストとして大きな可能性を秘めている。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "danger."],
        "full": "This is a real danger.",
        "jp": "これは現実の危険だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 449,
    "word": "POVERTY",
    "meaning_core": "貧困",
    "syllables": [
      { "text": "POV", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "NEED": "困窮",
      "DESTITUTION": "極貧",
      "SCARCITY": "欠乏"
    },
    "distractors": ["WEALTH", "RICHES", "AFFLUENCE", "PLENTY"],
    "meanings_expanded": ["貧困", "貧乏", "欠乏"],
    "contexts": [
      {
        "parts": ["Many people live in", "."],
        "full": "Many people live in poverty.",
        "jp": "多くの人々が貧困の中で暮らしている。",
        "is_correct": true
      },
      {
        "parts": ["He enjoys great", "."],
        "full": "He enjoys great wealth.",
        "jp": "彼は莫大な富を享受している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 450,
    "word": "PRECEDE",
    "meaning_core": "先行する",
    "syllables": [
      { "text": "pre", "type": "weak" },
      { "text": "CEDE", "type": "strong" }
    ],
    "synonyms": {
      "COME BEFORE": "先に来る",
      "LEAD": "先導する",
      "HERALD": "予告する"
    },
    "distractors": ["FOLLOW", "SUCCEED", "COME AFTER", "TRAIL"],
    "meanings_expanded": ["先行する", "（地位などが）上位である"],
    "contexts": [
      {
        "parts": ["Lightning usually", "thunder."],
        "full": "Lightning usually precedes thunder.",
        "jp": "稲妻はたいてい雷鳴に先行する。",
        "is_correct": true
      },
      {
        "parts": ["B follows A.", "B", "A."],
        "full": "B succeeds A.",
        "jp": "BはAに続く。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 451,
    "word": "PRECIOUS",
    "meaning_core": "貴重な",
    "syllables": [
      { "text": "PRE", "type": "strong" },
      { "text": "cious", "type": "weak" }
    ],
    "synonyms": {
      "VALUABLE": "高価な",
      "PRICELESS": "プライスレスな",
      "DEAR": "愛しい"
    },
    "distractors": ["CHEAP", "WORTHLESS", "USELESS", "COMMON"],
    "meanings_expanded": ["貴重な", "高価な", "大切な"],
    "contexts": [
      {
        "parts": ["Time is", ", so don't waste it."],
        "full": "Time is precious, so don't waste it.",
        "jp": "時間は貴重だから、無駄にしてはいけない。",
        "is_correct": true
      },
      {
        "parts": ["This garbage is", "."],
        "full": "This garbage is precious.",
        "jp": "このゴミは貴重だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 452,
    "word": "PRECISE",
    "meaning_core": "正確な",
    "syllables": [
      { "text": "pre", "type": "weak" },
      { "text": "CISE", "type": "strong" }
    ],
    "synonyms": {
      "EXACT": "正確な",
      "ACCURATE": "精密な",
      "SPECIFIC": "特定の"
    },
    "distractors": ["VAGUE", "ROUGH", "UNCERTAIN", "APPROXIMATE"],
    "meanings_expanded": ["正確な", "精密な", "寸分違わぬ"],
    "contexts": [
      {
        "parts": ["Please give me a", "answer."],
        "full": "Please give me a precise answer.",
        "jp": "正確な答えをください。",
        "is_correct": true
      },
      {
        "parts": ["His directions were", "."],
        "full": "His directions were vague.",
        "jp": "彼の道案内は曖昧だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 453,
    "word": "PRECISION",
    "meaning_core": "正確さ",
    "syllables": [
      { "text": "pre", "type": "weak" },
      { "text": "CI", "type": "strong" },
      { "text": "sion", "type": "weak" }
    ],
    "synonyms": {
      "ACCURACY": "正確度",
      "EXACTNESS": "厳密さ"
    },
    "distractors": ["ERROR", "MISTAKE", "GUESS", "ROUGHNESS"],
    "meanings_expanded": ["正確さ", "精密", "几帳面さ"],
    "contexts": [
      {
        "parts": ["The robot works with high", "."],
        "full": "The robot works with high precision.",
        "jp": "そのロボットは高い精度で動作する。",
        "is_correct": true
      },
      {
        "parts": ["He guessed with", "."],
        "full": "He guessed with confidence.",
        "jp": "彼は自信を持って推測した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 454,
    "word": "PREJUDICE",
    "meaning_core": "偏見",
    "syllables": [
      { "text": "PREJ", "type": "strong" },
      { "text": "u", "type": "weak" },
      { "text": "dice", "type": "weak" }
    ],
    "synonyms": {
      "BIAS": "偏り",
      "DISCRIMINATION": "差別",
      "BIGOTRY": "偏狭"
    },
    "distractors": ["FAIRNESS", "JUSTICE", "EQUALITY", "TRUTH"],
    "meanings_expanded": ["偏見", "先入観"],
    "contexts": [
      {
        "parts": ["We must fight against racial", "."],
        "full": "We must fight against racial prejudice.",
        "jp": "私たちは人種的偏見と戦わなければならない。",
        "is_correct": true
      },
      {
        "parts": ["He judged with", "."],
        "full": "He judged with fairness.",
        "jp": "彼は公平に判断した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 455,
    "word": "PRESCRIBE",
    "meaning_core": "処方する",
    "syllables": [
      { "text": "pre", "type": "weak" },
      { "text": "SCRIBE", "type": "strong" }
    ],
    "synonyms": {
      "ORDER": "指示する",
      "DIRECT": "指図する"
    },
    "distractors": ["TAKE", "IGNORE", "REFUSE", "FORBID"],
    "meanings_expanded": ["処方する", "規定する"],
    "contexts": [
      {
        "parts": ["The doctor will", "medicine."],
        "full": "The doctor will prescribe medicine.",
        "jp": "医師が薬を処方するだろう。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the law."],
        "full": "Please break the law.",
        "jp": "法律を破ってください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 456,
    "word": "PRESCRIPTION",
    "meaning_core": "処方箋",
    "syllables": [
      { "text": "pre", "type": "weak" },
      { "text": "SCRIP", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "INSTRUCTION": "指示",
      "ORDER": "命令"
    },
    "distractors": ["DISEASE", "ILLNESS", "POISON", "SYMPTOM"],
    "meanings_expanded": ["処方箋", "規定"],
    "contexts": [
      {
        "parts": ["You need a", "to buy this drug."],
        "full": "You need a prescription to buy this drug.",
        "jp": "この薬を買うには処方箋が必要だ。",
        "is_correct": true
      },
      {
        "parts": ["I lost my", "ticket."],
        "full": "I lost my plane ticket.",
        "jp": "私は航空券をなくした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 457,
    "word": "PRESERVE",
    "meaning_core": "保存する",
    "syllables": [
      { "text": "pre", "type": "weak" },
      { "text": "SERVE", "type": "strong" }
    ],
    "synonyms": {
      "PROTECT": "保護する",
      "MAINTAIN": "維持する",
      "SAVE": "守る"
    },
    "distractors": ["DESTROY", "RUIN", "DAMAGE", "WASTE"],
    "meanings_expanded": ["保存する", "保護する", "保つ"],
    "contexts": [
      {
        "parts": ["Salt helps to", "food."],
        "full": "Salt helps to preserve food.",
        "jp": "塩は食品を保存するのに役立つ。",
        "is_correct": true
      },
      {
        "parts": ["We must", "the environment."],
        "full": "We must destroy the environment.",
        "jp": "私たちは環境を破壊しなければならない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 458,
    "word": "PRESTIGIOUS",
    "meaning_core": "著名な",
    "syllables": [
      { "text": "pres", "type": "weak" },
      { "text": "TIG", "type": "strong" },
      { "text": "ious", "type": "weak" }
    ],
    "synonyms": {
      "FAMOUS": "有名な",
      "DISTINGUISHED": "著名な",
      "ESTEEMED": "尊敬される"
    },
    "distractors": ["UNKNOWN", "COMMON", "OBSCURE", "ORDINARY"],
    "meanings_expanded": ["著名な", "名声のある", "一流の"],
    "contexts": [
      {
        "parts": ["She attends a", "university."],
        "full": "She attends a prestigious university.",
        "jp": "彼女は名門大学に通っている。",
        "is_correct": true
      },
      {
        "parts": ["It is a", "award."],
        "full": "It is a shameful award.",
        "jp": "それは恥ずべき賞だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 459,
    "word": "PRETEXT",
    "meaning_core": "口実",
    "syllables": [
      { "text": "PRE", "type": "strong" },
      { "text": "text", "type": "weak" }
    ],
    "synonyms": {
      "EXCUSE": "言い訳",
      "PRETENSE": "見せかけ"
    },
    "distractors": ["TRUTH", "FACT", "REALITY", "HONESTY"],
    "meanings_expanded": ["口実", "弁解"],
    "contexts": [
      {
        "parts": ["He left early on the", "of illness."],
        "full": "He left early on the pretext of illness.",
        "jp": "彼は病気を口実に早退した。",
        "is_correct": true
      },
      {
        "parts": ["Tell me the", "."],
        "full": "Tell me the truth.",
        "jp": "真実を教えて。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 460,
    "word": "PREVAIL",
    "meaning_core": "普及する",
    "syllables": [
      { "text": "pre", "type": "weak" },
      { "text": "VAIL", "type": "strong" }
    ],
    "synonyms": {
      "TRIUMPH": "勝利する",
      "SUCCEED": "成功する",
      "DOMINATE": "支配する"
    },
    "distractors": ["FAIL", "LOSE", "SURRENDER", "DISAPPEAR"],
    "meanings_expanded": ["普及する", "優勢である", "打ち勝つ"],
    "contexts": [
      {
        "parts": ["Justice will", "in the end."],
        "full": "Justice will prevail in the end.",
        "jp": "最後には正義が勝つ。",
        "is_correct": true
      },
      {
        "parts": ["Silence", "in the room."],
        "full": "Silence prevailed in the room.",
        "jp": "部屋には静寂が支配していた。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 461,
    "word": "PREVALENT",
    "meaning_core": "普及している",
    "syllables": [
      { "text": "PREV", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "lent", "type": "weak" }
    ],
    "synonyms": {
      "COMMON": "一般的な",
      "WIDESPREAD": "広まっている",
      "POPULAR": "人気のある"
    },
    "distractors": ["RARE", "UNCOMMON", "SCARCE", "UNIQUE"],
    "meanings_expanded": ["普及している", "流行している"],
    "contexts": [
      {
        "parts": ["Flu is", "in winter."],
        "full": "Flu is prevalent in winter.",
        "jp": "インフルエンザは冬に流行する。",
        "is_correct": true
      },
      {
        "parts": ["This disease is", "."],
        "full": "This disease is rare.",
        "jp": "この病気は稀だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 462,
    "word": "PREVIOUSLY",
    "meaning_core": "以前に",
    "syllables": [
      { "text": "PRE", "type": "strong" },
      { "text": "vi", "type": "weak" },
      { "text": "ous", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "BEFORE": "以前",
      "FORMERLY": "かつて",
      "EARLIER": "より早く"
    },
    "distractors": ["CURRENTLY", "NOW", "LATER", "FUTURE"],
    "meanings_expanded": ["以前に", "前もって"],
    "contexts": [
      {
        "parts": ["I have met him", "."],
        "full": "I have met him previously.",
        "jp": "私は以前彼に会ったことがある。",
        "is_correct": true
      },
      {
        "parts": ["I am", "working here."],
        "full": "I am currently working here.",
        "jp": "私は現在ここで働いている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 463,
    "word": "PRIMARILY",
    "meaning_core": "主に",
    "syllables": [
      { "text": "PRI", "type": "strong" },
      { "text": "ma", "type": "weak" },
      { "text": "ri", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "MAINLY": "主に",
      "CHIEFLY": "主として",
      "MOSTLY": "大部分は"
    },
    "distractors": ["SECONDARILY", "FINALLY", "LASTLY", "RARELY"],
    "meanings_expanded": ["主に", "第一に"],
    "contexts": [
      {
        "parts": ["The diet consists", "of vegetables."],
        "full": "The diet consists primarily of vegetables.",
        "jp": "その食事は主に野菜で構成されている。",
        "is_correct": true
      },
      {
        "parts": ["He is", "interested in money."],
        "full": "He is solely interested in money.",
        "jp": "彼は金にしか興味がない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 464,
    "word": "PRIME",
    "meaning_core": "最も重要な",
    "syllables": [
      { "text": "PRIME", "type": "strong" }
    ],
    "synonyms": {
      "MAIN": "主な",
      "MAJOR": "主要な",
      "BEST": "最高の"
    },
    "distractors": ["MINOR", "WORST", "LAST", "LEAST"],
    "meanings_expanded": ["最も重要な", "主要な", "最良の"],
    "contexts": [
      {
        "parts": ["He is the", "suspect."],
        "full": "He is the prime suspect.",
        "jp": "彼は主要な容疑者だ。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "example."],
        "full": "This is a bad example.",
        "jp": "これは悪い例だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 465,
    "word": "PRINCIPAL",
    "meaning_core": "主要な",
    "syllables": [
      { "text": "PRIN", "type": "strong" },
      { "text": "ci", "type": "weak" },
      { "text": "pal", "type": "weak" }
    ],
    "synonyms": {
      "MAIN": "主な",
      "CHIEF": "長の",
      "KEY": "重要な"
    },
    "distractors": ["MINOR", "SECONDARY", "TRIVIAL", "UNIMPORTANT"],
    "meanings_expanded": ["主要な", "校長（名詞）", "主役"],
    "contexts": [
      {
        "parts": ["The", "reason for his failure was laziness."],
        "full": "The principal reason for his failure was laziness.",
        "jp": "彼の失敗の主な理由は怠惰だった。",
        "is_correct": true
      },
      {
        "parts": ["He is the school", "."],
        "full": "He is the school principal.",
        "jp": "彼は学校の校長だ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 466,
    "word": "PRINCIPLE",
    "meaning_core": "原理",
    "syllables": [
      { "text": "PRIN", "type": "strong" },
      { "text": "ci", "type": "weak" },
      { "text": "ple", "type": "weak" }
    ],
    "synonyms": {
      "RULE": "規則",
      "DOCTRINE": "教義",
      "BELIEF": "信念"
    },
    "distractors": ["EXCEPTION", "PRACTICE", "ACTION", "CHAOS"],
    "meanings_expanded": ["原理", "原則", "主義"],
    "contexts": [
      {
        "parts": ["It's a matter of", "."],
        "full": "It's a matter of principle.",
        "jp": "それは主義の問題だ。",
        "is_correct": true
      },
      {
        "parts": ["I agree in", "."],
        "full": "I agree in principle.",
        "jp": "私は原則としては同意する。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 467,
    "word": "PRIVILEGE",
    "meaning_core": "特権",
    "syllables": [
      { "text": "PRIV", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "lege", "type": "weak" }
    ],
    "synonyms": {
      "HONOR": "名誉",
      "RIGHT": "権利",
      "ADVANTAGE": "利点"
    },
    "distractors": ["BURDEN", "DUTY", "DISADVANTAGE", "OBLIGATION"],
    "meanings_expanded": ["特権", "名誉"],
    "contexts": [
      {
        "parts": ["It is a", "to meet you."],
        "full": "It is a privilege to meet you.",
        "jp": "お会いできて光栄（特権）です。",
        "is_correct": true
      },
      {
        "parts": ["Education is a", ", not a right."],
        "full": "Education is a privilege, not a right.",
        "jp": "教育は特権であって、権利ではない（という意見もある）。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 468,
    "word": "PROBABLE",
    "meaning_core": "ありそうな",
    "syllables": [
      { "text": "PROB", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "LIKELY": "ありそうな",
      "POSSIBLE": "可能な",
      "EXPECTED": "予想される"
    },
    "distractors": ["UNLIKELY", "IMPROBABLE", "IMPOSSIBLE", "RARE"],
    "meanings_expanded": ["ありそうな", "確からしい"],
    "contexts": [
      {
        "parts": ["It is", "that he will win."],
        "full": "It is probable that he will win.",
        "jp": "彼が勝つ可能性が高い。",
        "is_correct": true
      },
      {
        "parts": ["Snow in summer is", "."],
        "full": "Snow in summer is improbable.",
        "jp": "夏の雪はありそうもない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 469,
    "word": "PROCEDURE",
    "meaning_core": "手順",
    "syllables": [
      { "text": "pro", "type": "weak" },
      { "text": "CE", "type": "strong" },
      { "text": "dure", "type": "weak" }
    ],
    "synonyms": {
      "PROCESS": "過程",
      "METHOD": "方法",
      "SYSTEM": "方式"
    },
    "distractors": ["CHAOS", "DISORDER", "RESULT", "END"],
    "meanings_expanded": ["手順", "手続き", "処置"],
    "contexts": [
      {
        "parts": ["Follow the correct", "."],
        "full": "Follow the correct procedure.",
        "jp": "正しい手順に従いなさい。",
        "is_correct": true
      },
      {
        "parts": ["The", "was successful."],
        "full": "The operation was successful.",
        "jp": "手術は成功した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 470,
    "word": "PROFICIENCY",
    "meaning_core": "熟練",
    "syllables": [
      { "text": "pro", "type": "weak" },
      { "text": "FI", "type": "strong" },
      { "text": "cien", "type": "weak" },
      { "text": "cy", "type": "weak" }
    ],
    "synonyms": {
      "SKILL": "技能",
      "EXPERTISE": "専門知識",
      "COMPETENCE": "能力"
    },
    "distractors": ["INCOMPETENCE", "IGNORANCE", "CLUMSINESS", "ABILITY"],
    "meanings_expanded": ["熟練", "堪能", "実力"],
    "contexts": [
      {
        "parts": ["He showed high", "in English."],
        "full": "He showed high proficiency in English.",
        "jp": "彼は英語で高い熟練度を示した。",
        "is_correct": true
      },
      {
        "parts": ["She lacks", "in math."],
        "full": "She lacks skill in math.",
        "jp": "彼女は数学のスキルが欠けている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 471,
    "word": "PROFITABLE",
    "meaning_core": "利益の上がる",
    "syllables": [
      { "text": "PROF", "type": "strong" },
      { "text": "it", "type": "weak" },
      { "text": "a", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "LUCRATIVE": "儲かる",
      "GAINFUL": "利益のある",
      "BENEFICIAL": "有益な"
    },
    "distractors": ["UNPROFITABLE", "USELESS", "LOSING", "WASTEFUL"],
    "meanings_expanded": ["利益の上がる", "有益な", "儲かる"],
    "contexts": [
      {
        "parts": ["The business is very", "."],
        "full": "The business is very profitable.",
        "jp": "その事業は非常に利益が上がっている。",
        "is_correct": true
      },
      {
        "parts": ["Losing money is", "."],
        "full": "Losing money is profitable.",
        "jp": "お金を失うことは利益になる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 472,
    "word": "PROFOUND",
    "meaning_core": "深遠な",
    "syllables": [
      { "text": "pro", "type": "weak" },
      { "text": "FOUND", "type": "strong" }
    ],
    "synonyms": {
      "DEEP": "深い",
      "INTENSE": "強烈な",
      "SERIOUS": "深刻な"
    },
    "distractors": ["SHALLOW", "SUPERFICIAL", "LIGHT", "MILD"],
    "meanings_expanded": ["深遠な", "深い", "心からの"],
    "contexts": [
      {
        "parts": ["He has a", "knowledge of history."],
        "full": "He has a profound knowledge of history.",
        "jp": "彼は歴史について深遠な知識を持っている。",
        "is_correct": true
      },
      {
        "parts": ["The water was", "."],
        "full": "The water was shallow.",
        "jp": "水は浅かった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 473,
    "word": "PROFOUNDLY",
    "meaning_core": "深く",
    "syllables": [
      { "text": "pro", "type": "weak" },
      { "text": "FOUND", "type": "strong" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "DEEPLY": "深く",
      "GREATLY": "大いに",
      "EXTREMELY": "極めて"
    },
    "distractors": ["SLIGHTLY", "BARELY", "HARDLY", "LITTLE"],
    "meanings_expanded": ["深く", "大いに", "心から"],
    "contexts": [
      {
        "parts": ["I was", "moved by the movie."],
        "full": "I was profoundly moved by the movie.",
        "jp": "私はその映画に深く感動した。",
        "is_correct": true
      },
      {
        "parts": ["He was", "asleep."],
        "full": "He was slightly asleep.",
        "jp": "彼は少し眠っていた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 474,
    "word": "PROGRESSIVE",
    "meaning_core": "進歩的な",
    "syllables": [
      { "text": "pro", "type": "weak" },
      { "text": "GRES", "type": "strong" },
      { "text": "sive", "type": "weak" }
    ],
    "synonyms": {
      "ADVANCED": "進んだ",
      "MODERN": "現代的な",
      "FORWARD": "前進する"
    },
    "distractors": ["CONSERVATIVE", "TRADITIONAL", "BACKWARD", "OLD"],
    "meanings_expanded": ["進歩的な", "革新的な", "進行性の"],
    "contexts": [
      {
        "parts": ["This school has a", "approach."],
        "full": "This school has a progressive approach.",
        "jp": "この学校は進歩的なアプローチをとっている。",
        "is_correct": true
      },
      {
        "parts": ["He has very", "ideas."],
        "full": "He has very conservative ideas.",
        "jp": "彼は非常に保守的な考えを持っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 475,
    "word": "PROMOTE",
    "meaning_core": "促進する",
    "syllables": [
      { "text": "pro", "type": "weak" },
      { "text": "MOTE", "type": "strong" }
    ],
    "synonyms": {
      "ENCOURAGE": "奨励する",
      "ADVANCE": "前進させる",
      "ADVERTISE": "宣伝する"
    },
    "distractors": ["HINDER", "BLOCK", "PREVENT", "STOP"],
    "meanings_expanded": ["促進する", "昇進させる", "宣伝する"],
    "contexts": [
      {
        "parts": ["Exercise helps to", "good health."],
        "full": "Exercise helps to promote good health.",
        "jp": "運動は健康を促進するのに役立つ。",
        "is_correct": true
      },
      {
        "parts": ["We want to", "sales."],
        "full": "We want to stop sales.",
        "jp": "私たちは販売を止めたい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 476,
    "word": "PROPAGANDA",
    "meaning_core": "宣伝",
    "syllables": [
      { "text": "prop", "type": "weak" },
      { "text": "a", "type": "weak" },
      { "text": "GAN", "type": "strong" },
      { "text": "da", "type": "weak" }
    ],
    "synonyms": {
      "PUBLICITY": "宣伝",
      "ADVERTISING": "広告",
      "HYPE": "誇大広告"
    },
    "distractors": ["TRUTH", "FACT", "REALITY", "HONESTY"],
    "meanings_expanded": ["宣伝（活動）", "プロパガンダ"],
    "contexts": [
      {
        "parts": ["The government used", "to influence people."],
        "full": "The government used propaganda to influence people.",
        "jp": "政府は人々に影響を与えるためにプロパガンダを利用した。",
        "is_correct": true
      },
      {
        "parts": ["This news is pure", "."],
        "full": "This news is pure fact.",
        "jp": "このニュースは純粋な事実だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 477,
    "word": "PROPERLY",
    "meaning_core": "適切に",
    "syllables": [
      { "text": "PROP", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "CORRECTLY": "正しく",
      "APPROPRIATELY": "適切に",
      "RIGHTLY": "正当に"
    },
    "distractors": ["INCORRECTLY", "WRONGLY", "BADLY", "POORLY"],
    "meanings_expanded": ["適切に", "きちんと", "正しく"],
    "contexts": [
      {
        "parts": ["Please behave", "."],
        "full": "Please behave properly.",
        "jp": "きちんとした振る舞いをしてください。",
        "is_correct": true
      },
      {
        "parts": ["The machine is working", "."],
        "full": "The machine is working badly.",
        "jp": "機械の調子が悪い。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 478,
    "word": "PROPERTY",
    "meaning_core": "財産",
    "syllables": [
      { "text": "PROP", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "POSSESSION": "所有物",
      "ASSET": "資産",
      "REAL ESTATE": "不動産"
    },
    "distractors": ["DEBT", "LIABILITY", "LOSS", "POVERTY"],
    "meanings_expanded": ["財産", "不動産", "特性"],
    "contexts": [
      {
        "parts": ["This land is private", "."],
        "full": "This land is private property.",
        "jp": "この土地は私有財産だ。",
        "is_correct": true
      },
      {
        "parts": ["Water has the", "of being wet."],
        "full": "Water has the property of being wet.",
        "jp": "水には濡れているという特性がある。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 479,
    "word": "PROPORTION",
    "meaning_core": "割合",
    "syllables": [
      { "text": "pro", "type": "weak" },
      { "text": "POR", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "RATIO": "比率",
      "PERCENTAGE": "パーセンテージ",
      "SHARE": "分け前"
    },
    "distractors": ["WHOLE", "TOTALITY", "ALL", "ENTIRETY"],
    "meanings_expanded": ["割合", "比率", "釣り合い"],
    "contexts": [
      {
        "parts": ["A large", "of the budget is spent on food."],
        "full": "A large proportion of the budget is spent on food.",
        "jp": "予算の大部分が食費に使われる。",
        "is_correct": true
      },
      {
        "parts": ["The head is out of", "with the body."],
        "full": "The head is out of proportion with the body.",
        "jp": "頭が体と釣り合っていない。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 480,
    "word": "PROPOSE",
    "meaning_core": "提案する",
    "syllables": [
      { "text": "pro", "type": "weak" },
      { "text": "POSE", "type": "strong" }
    ],
    "synonyms": {
      "SUGGEST": "提案する",
      "RECOMMEND": "推奨する",
      "OFFER": "申し出る"
    },
    "distractors": ["REJECT", "DENY", "WITHDRAW", "REFUSE"],
    "meanings_expanded": ["提案する", "結婚を申し込む"],
    "contexts": [
      {
        "parts": ["I", "a change in the plan."],
        "full": "I propose a change in the plan.",
        "jp": "私は計画の変更を提案する。",
        "is_correct": true
      },
      {
        "parts": ["He plans to", "to her tonight."],
        "full": "He plans to propose to her tonight.",
        "jp": "彼は今夜彼女にプロポーズするつもりだ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 481,
    "word": "PROSPECT",
    "meaning_core": "見通し",
    "syllables": [
      { "text": "PROS", "type": "strong" },
      { "text": "pect", "type": "weak" }
    ],
    "synonyms": {
      "OUTLOOK": "見通し",
      "POSSIBILITY": "可能性",
      "CHANCE": "機会"
    },
    "distractors": ["PAST", "HISTORY", "MEMORY", "REALITY"],
    "meanings_expanded": ["見通し", "可能性", "有望な人"],
    "contexts": [
      {
        "parts": ["There is little", "of success."],
        "full": "There is little prospect of success.",
        "jp": "成功の見込みはほとんどない。",
        "is_correct": true
      },
      {
        "parts": ["He is a promising", "for the team."],
        "full": "He is a promising prospect for the team.",
        "jp": "彼はチームにとって有望な新人だ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 482,
    "word": "PROTOCOL",
    "meaning_core": "議定書",
    "syllables": [
      { "text": "PRO", "type": "strong" },
      { "text": "to", "type": "weak" },
      { "text": "col", "type": "weak" }
    ],
    "synonyms": {
      "PROCEDURE": "手順",
      "RULE": "規則",
      "AGREEMENT": "協定"
    },
    "distractors": ["CHAOS", "DISORDER", "ANARCHY", "CONFUSION"],
    "meanings_expanded": ["議定書", "手順", "儀礼"],
    "contexts": [
      {
        "parts": ["You must follow the safety", "."],
        "full": "You must follow the safety protocol.",
        "jp": "安全手順（プロトコル）に従わなければならない。",
        "is_correct": true
      },
      {
        "parts": ["They signed the Kyoto", "."],
        "full": "They signed the Kyoto Protocol.",
        "jp": "彼らは京都議定書に署名した。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 484,
    "word": "PROVOKE",
    "meaning_core": "引き起こす",
    "syllables": [
      { "text": "pro", "type": "weak" },
      { "text": "VOKE", "type": "strong" }
    ],
    "synonyms": {
      "CAUSE": "引き起こす",
      "INCITE": "扇動する",
      "ANGER": "怒らせる"
    },
    "distractors": ["CALM", "SOOTHE", "PACIFY", "PLEASE"],
    "meanings_expanded": ["引き起こす", "怒らせる", "挑発する"],
    "contexts": [
      {
        "parts": ["His rude remark", "an argument."],
        "full": "His rude remark provoked an argument.",
        "jp": "彼の失礼な発言が口論を引き起こした。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "the dog."],
        "full": "Don't provoke the dog.",
        "jp": "その犬を挑発するな。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 485,
    "word": "PRUDENTLY",
    "meaning_core": "賢明に",
    "syllables": [
      { "text": "PRU", "type": "strong" },
      { "text": "dent", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "WISELY": "賢く",
      "CAUTIOUSLY": "用心深く",
      "SENSIBLY": "分別を持って"
    },
    "distractors": ["FOOLISHLY", "RASHLY", "CARELESSLY", "RECKLESSLY"],
    "meanings_expanded": ["賢明に", "慎重に"],
    "contexts": [
      {
        "parts": ["She spent her money", "."],
        "full": "She spent her money prudently.",
        "jp": "彼女はお金を賢明に使った。",
        "is_correct": true
      },
      {
        "parts": ["He acted", "and got hurt."],
        "full": "He acted recklessly and got hurt.",
        "jp": "彼は無謀に行動して怪我をした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 486,
    "word": "PSYCHOLOGICAL",
    "meaning_core": "心理的な",
    "syllables": [
      { "text": "psy", "type": "weak" },
      { "text": "cho", "type": "weak" },
      { "text": "LOG", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "cal", "type": "weak" }
    ],
    "synonyms": {
      "MENTAL": "精神の",
      "EMOTIONAL": "感情の",
      "INNER": "内面の"
    },
    "distractors": ["PHYSICAL", "BODILY", "EXTERNAL", "MATERIAL"],
    "meanings_expanded": ["心理的な", "精神の"],
    "contexts": [
      {
        "parts": ["The problem is", ", not physical."],
        "full": "The problem is psychological, not physical.",
        "jp": "その問題は心理的なものであり、身体的なものではない。",
        "is_correct": true
      },
      {
        "parts": ["He suffered", "damage."],
        "full": "He suffered psychological damage.",
        "jp": "彼は精神的なダメージを受けた。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 487,
    "word": "PURSUE",
    "meaning_core": "追求する",
    "syllables": [
      { "text": "pur", "type": "weak" },
      { "text": "SUE", "type": "strong" }
    ],
    "synonyms": {
      "CHASE": "追う",
      "FOLLOW": "従う",
      "SEEK": "求める"
    },
    "distractors": ["AVOID", "FLEE", "IGNORE", "GIVE UP"],
    "meanings_expanded": ["追求する", "追跡する", "従事する"],
    "contexts": [
      {
        "parts": ["He decided to", "a career in music."],
        "full": "He decided to pursue a career in music.",
        "jp": "彼は音楽の道を追求することに決めた。",
        "is_correct": true
      },
      {
        "parts": ["The police", "the thief."],
        "full": "The police pursued the thief.",
        "jp": "警察は泥棒を追跡した。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 488,
    "word": "QUARREL",
    "meaning_core": "口論",
    "syllables": [
      { "text": "QUAR", "type": "strong" },
      { "text": "rel", "type": "weak" }
    ],
    "synonyms": {
      "ARGUMENT": "議論",
      "DISPUTE": "論争",
      "FIGHT": "喧嘩"
    },
    "distractors": ["AGREEMENT", "HARMONY", "PEACE", "ACCORD"],
    "meanings_expanded": ["口論", "喧嘩"],
    "contexts": [
      {
        "parts": ["They had a", "about money."],
        "full": "They had a quarrel about money.",
        "jp": "彼らはお金について口論した。",
        "is_correct": true
      },
      {
        "parts": ["They reached an", "."],
        "full": "They reached an agreement.",
        "jp": "彼らは合意に達した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 489,
    "word": "RAMPAGE",
    "meaning_core": "暴動",
    "syllables": [
      { "text": "RAM", "type": "strong" },
      { "text": "page", "type": "weak" }
    ],
    "synonyms": {
      "RIOT": "暴動",
      "FRENZY": "狂乱",
      "UPROAR": "騒動"
    },
    "distractors": ["CALM", "PEACE", "ORDER", "QUIET"],
    "meanings_expanded": ["暴れ回ること", "凶暴な行動"],
    "contexts": [
      {
        "parts": ["The elephant went on a", "."],
        "full": "The elephant went on a rampage.",
        "jp": "その象は暴れ回った。",
        "is_correct": true
      },
      {
        "parts": ["The crowd was in a", "."],
        "full": "The crowd was in a frenzy.",
        "jp": "群衆は狂乱状態だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 490,
    "word": "RANGE",
    "meaning_core": "範囲",
    "syllables": [
      { "text": "RANGE", "type": "strong" }
    ],
    "synonyms": {
      "SCOPE": "範囲",
      "EXTENT": "程度",
      "VARIETY": "多様性"
    },
    "distractors": ["POINT", "LIMIT", "STAGNATION", "FIXEDNESS"],
    "meanings_expanded": ["範囲", "山脈", "（範囲が）及ぶ"],
    "contexts": [
      {
        "parts": ["The price", "is from $10 to $20."],
        "full": "The price range is from $10 to $20.",
        "jp": "価格帯は10ドルから20ドルだ。",
        "is_correct": true
      },
      {
        "parts": ["The mountains", "from north to south."],
        "full": "The mountains range from north to south.",
        "jp": "山脈は北から南へと連なっている。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 491,
    "word": "RATIONAL",
    "meaning_core": "合理的な",
    "syllables": [
      { "text": "RA", "type": "strong" },
      { "text": "tion", "type": "weak" },
      { "text": "al", "type": "weak" }
    ],
    "synonyms": {
      "LOGICAL": "論理的な",
      "REASONABLE": "妥当な",
      "SENSIBLE": "分別のある"
    },
    "distractors": ["IRRATIONAL", "EMOTIONAL", "FOOLISH", "ABSURD"],
    "meanings_expanded": ["合理的な", "理性的な"],
    "contexts": [
      {
        "parts": ["Let's make a", "decision."],
        "full": "Let's make a rational decision.",
        "jp": "合理的な決定を下そう。",
        "is_correct": true
      },
      {
        "parts": ["He was too", "to think clearly."],
        "full": "He was too emotional to think clearly.",
        "jp": "彼は感情的すぎて明確に考えられなかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 492,
    "word": "RAW",
    "meaning_core": "生の",
    "syllables": [
      { "text": "RAW", "type": "strong" }
    ],
    "synonyms": {
      "UNCOOKED": "未調理の",
      "CRUDE": "粗野な",
      "UNPROCESSED": "未加工の"
    },
    "distractors": ["COOKED", "PROCESSED", "REFINED", "DONE"],
    "meanings_expanded": ["生の", "未加工の", "未熟な"],
    "contexts": [
      {
        "parts": ["Sushi is made with", "fish."],
        "full": "Sushi is made with raw fish.",
        "jp": "寿司は生の魚で作られる。",
        "is_correct": true
      },
      {
        "parts": ["We export", "materials."],
        "full": "We export raw materials.",
        "jp": "私たちは原材料を輸出している。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 493,
    "word": "RECESSION",
    "meaning_core": "不況",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "CES", "type": "strong" },
      { "text": "sion", "type": "weak" }
    ],
    "synonyms": {
      "DOWNTURN": "下降",
      "SLUMP": "不振",
      "DEPRESSION": "不景気"
    },
    "distractors": ["BOOM", "GROWTH", "RECOVERY", "PROSPERITY"],
    "meanings_expanded": ["不況", "景気後退"],
    "contexts": [
      {
        "parts": ["The economy is in a deep", "."],
        "full": "The economy is in a deep recession.",
        "jp": "経済は深刻な不況にある。",
        "is_correct": true
      },
      {
        "parts": ["The country is enjoying an economic", "."],
        "full": "The country is enjoying an economic boom.",
        "jp": "その国は経済ブームを享受している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 494,
    "word": "RECKLESSLY",
    "meaning_core": "向こう見ずに",
    "syllables": [
      { "text": "RECK", "type": "strong" },
      { "text": "less", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "CARELESSLY": "不注意に",
      "RASHLY": "軽率に",
      "WILDLY": "乱暴に"
    },
    "distractors": ["CAREFULLY", "CAUTIOUSLY", "PRUDENTLY", "WISELY"],
    "meanings_expanded": ["向こう見ずに", "無謀に"],
    "contexts": [
      {
        "parts": ["He drove", "down the highway."],
        "full": "He drove recklessly down the highway.",
        "jp": "彼は高速道路を無謀に運転した。",
        "is_correct": true
      },
      {
        "parts": ["She handled the glass", "."],
        "full": "She handled the glass carefully.",
        "jp": "彼女はグラスを慎重に扱った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 495,
    "word": "RECONCILIATION",
    "meaning_core": "和解",
    "syllables": [
      { "text": "rec", "type": "weak" },
      { "text": "on", "type": "weak" },
      { "text": "cil", "type": "weak" },
      { "text": "i", "type": "weak" },
      { "text": "A", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "AGREEMENT": "合意",
      "HARMONY": "調和",
      "SETTLEMENT": "解決"
    },
    "distractors": ["CONFLICT", "WAR", "DISPUTE", "FIGHT"],
    "meanings_expanded": ["和解", "仲直り", "調停"],
    "contexts": [
      {
        "parts": ["They reached a", "after the fight."],
        "full": "They reached a reconciliation after the fight.",
        "jp": "彼らは喧嘩の後、和解に達した。",
        "is_correct": true
      },
      {
        "parts": ["The war ended in", "."],
        "full": "The war ended in peace.",
        "jp": "戦争は平和に終わった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 496,
    "word": "REFER",
    "meaning_core": "言及する",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "FER", "type": "strong" }
    ],
    "synonyms": {
      "MENTION": "言及する",
      "CONSULT": "参照する",
      "RELATE": "関連する"
    },
    "distractors": ["IGNORE", "HIDE", "CONCEAL", "FORGET"],
    "meanings_expanded": ["言及する", "参照する", "紹介する"],
    "contexts": [
      {
        "parts": ["Please", "to the manual."],
        "full": "Please refer to the manual.",
        "jp": "マニュアルを参照してください。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "to that incident."],
        "full": "Don't refer to that incident.",
        "jp": "その事件には言及しないで。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 497,
    "word": "REFLECT",
    "meaning_core": "反映する",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "FLECT", "type": "strong" }
    ],
    "synonyms": {
      "MIRROR": "映す",
      "SHOW": "示す",
      "THINK": "熟考する"
    },
    "distractors": ["ABSORB", "HIDE", "IGNORE", "FORGET"],
    "meanings_expanded": ["反映する", "反射する", "熟考する"],
    "contexts": [
      {
        "parts": ["The mirror", "your face."],
        "full": "The mirror reflects your face.",
        "jp": "鏡はあなたの顔を映す。",
        "is_correct": true
      },
      {
        "parts": ["His grades", "his effort."],
        "full": "His grades reflect his effort.",
        "jp": "彼の成績は彼の努力を反映している。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 498,
    "word": "REGARD",
    "meaning_core": "みなす",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "GARD", "type": "strong" }
    ],
    "synonyms": {
      "CONSIDER": "みなす",
      "VIEW": "見る",
      "RESPECT": "尊敬する"
    },
    "distractors": ["IGNORE", "DISREGARD", "SCORN", "NEGLECT"],
    "meanings_expanded": ["みなす", "評価する", "敬意"],
    "contexts": [
      {
        "parts": ["I", "him as a friend."],
        "full": "I regard him as a friend.",
        "jp": "私は彼を友人とみなしている。",
        "is_correct": true
      },
      {
        "parts": ["Please", "my advice."],
        "full": "Please disregard my advice.",
        "jp": "私のアドバイスは無視してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 500,
    "word": "REGULATE",
    "meaning_core": "規制する",
    "syllables": [
      { "text": "REG", "type": "strong" },
      { "text": "u", "type": "weak" },
      { "text": "late", "type": "weak" }
    ],
    "synonyms": {
      "CONTROL": "管理する",
      "MANAGE": "運営する",
      "GOVERN": "統治する"
    },
    "distractors": ["DEREGULATE", "CHAOS", "CONFUSE", "DISORDER"],
    "meanings_expanded": ["規制する", "調整する", "取り締まる"],
    "contexts": [
      {
        "parts": ["The law is designed to", "trade."],
        "full": "The law is designed to regulate trade.",
        "jp": "その法律は貿易を規制するために作られた。",
        "is_correct": true
      },
      {
        "parts": ["We need to", "the temperature."],
        "full": "We need to regulate the temperature.",
        "jp": "私たちは温度を調整する必要がある。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 501,
    "word": "REGULATION",
    "meaning_core": "規制",
    "syllables": [
      { "text": "reg", "type": "weak" },
      { "text": "u", "type": "weak" },
      { "text": "LA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "RULE": "規則",
      "CONTROL": "管理",
      "RESTRICTION": "制限"
    },
    "distractors": ["FREEDOM", "CHAOS", "LIBERTY", "LICENSE"],
    "meanings_expanded": ["規制", "規則", "調整"],
    "contexts": [
      {
        "parts": ["We must follow the safety", "."],
        "full": "We must follow the safety regulation.",
        "jp": "私たちは安全規則に従わなければならない。",
        "is_correct": true
      },
      {
        "parts": ["The", "of the sun is hot."],
        "full": "The light of the sun is hot.",
        "jp": "太陽の光は熱い。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 502,
    "word": "REIGN",
    "meaning_core": "統治",
    "syllables": [
      { "text": "REIGN", "type": "strong" }
    ],
    "synonyms": {
      "RULE": "支配",
      "GOVERNMENT": "政治",
      "SOVEREIGNTY": "主権"
    },
    "distractors": ["SERVITUDE", "SLAVERY", "OBEDIENCE", "SUBMISSION"],
    "meanings_expanded": ["統治", "治世", "支配する"],
    "contexts": [
      {
        "parts": ["The queen's", "lasted for 50 years."],
        "full": "The queen's reign lasted for 50 years.",
        "jp": "女王の治世は50年続いた。",
        "is_correct": true
      },
      {
        "parts": ["He took a", "in the park."],
        "full": "He took a walk in the park.",
        "jp": "彼は公園を散歩した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 503,
    "word": "RELATE",
    "meaning_core": "関連づける",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "LATE", "type": "strong" }
    ],
    "synonyms": {
      "CONNECT": "結びつける",
      "LINK": "関連させる",
      "ASSOCIATE": "連想する"
    },
    "distractors": ["SEPARATE", "DISCONNECT", "ISOLATE", "DIVIDE"],
    "meanings_expanded": ["関連づける", "（話を）物語る", "共感する"],
    "contexts": [
      {
        "parts": ["It is difficult to", "theory to practice."],
        "full": "It is difficult to relate theory to practice.",
        "jp": "理論を実践に関連づけるのは難しい。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the door."],
        "full": "Please open the door.",
        "jp": "ドアを開けてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 504,
    "word": "RELATIVE",
    "meaning_core": "相対的な",
    "syllables": [
      { "text": "REL", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "tive", "type": "weak" }
    ],
    "synonyms": {
      "COMPARATIVE": "比較の",
      "RELEVANT": "関連した"
    },
    "distractors": ["ABSOLUTE", "TOTAL", "COMPLETE", "INDEPENDENT"],
    "meanings_expanded": ["相対的な", "親戚（名詞）"],
    "contexts": [
      {
        "parts": ["The", "merits of the two plans."],
        "full": "The relative merits of the two plans.",
        "jp": "その2つの計画の相対的なメリット。",
        "is_correct": true
      },
      {
        "parts": ["This is the", "truth."],
        "full": "This is the absolute truth.",
        "jp": "これは絶対的な真実だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 505,
    "word": "RELATIVELY",
    "meaning_core": "比較的",
    "syllables": [
      { "text": "REL", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "tive", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "COMPARATIVELY": "比較的に",
      "RATHER": "いくぶん",
      "SOMEWHAT": "多少"
    },
    "distractors": ["ABSOLUTELY", "COMPLETELY", "TOTALLY", "ENTIRELY"],
    "meanings_expanded": ["比較的", "割合に"],
    "contexts": [
      {
        "parts": ["The test was", "easy."],
        "full": "The test was relatively easy.",
        "jp": "そのテストは比較的簡単だった。",
        "is_correct": true
      },
      {
        "parts": ["He is", "sure."],
        "full": "He is absolutely sure.",
        "jp": "彼は絶対的な自信を持っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 506,
    "word": "RELEVANT",
    "meaning_core": "関連のある",
    "syllables": [
      { "text": "REL", "type": "strong" },
      { "text": "e", "type": "weak" },
      { "text": "vant", "type": "weak" }
    ],
    "synonyms": {
      "PERTINENT": "適切な",
      "APPLICABLE": "適用できる",
      "RELATED": "関係のある"
    },
    "distractors": ["IRRELEVANT", "UNRELATED", "USELESS", "POINTLESS"],
    "meanings_expanded": ["関連のある", "適切な", "今日的な意義のある"],
    "contexts": [
      {
        "parts": ["Please provide", "documents."],
        "full": "Please provide relevant documents.",
        "jp": "関連書類を提出してください。",
        "is_correct": true
      },
      {
        "parts": ["His comment was", "to the topic."],
        "full": "His comment was irrelevant to the topic.",
        "jp": "彼のコメントは話題と無関係だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 507,
    "word": "RELIABLE",
    "meaning_core": "信頼できる",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "LI", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "DEPENDABLE": "頼りになる",
      "TRUSTWORTHY": "信用できる",
      "CREDIBLE": "確かな"
    },
    "distractors": ["UNRELIABLE", "DOUBTFUL", "FALSE", "UNTRUSTWORTHY"],
    "meanings_expanded": ["信頼できる", "頼りになる", "確実な"],
    "contexts": [
      {
        "parts": ["He is a", "source of information."],
        "full": "He is a reliable source of information.",
        "jp": "彼は信頼できる情報源だ。",
        "is_correct": true
      },
      {
        "parts": ["This car is very", "."],
        "full": "This car is very unreliable.",
        "jp": "この車はとても信頼できない（よく故障する）。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 508,
    "word": "RELIGIOUS",
    "meaning_core": "宗教の",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "LI", "type": "strong" },
      { "text": "gious", "type": "weak" }
    ],
    "synonyms": {
      "SPIRITUAL": "精神的な",
      "DEVOUT": "信心深い",
      "HOLY": "神聖な"
    },
    "distractors": ["SECULAR", "ATHEIST", "WORLDLY", "IRRELIGIOUS"],
    "meanings_expanded": ["宗教の", "信心深い"],
    "contexts": [
      {
        "parts": ["Freedom of", "belief is important."],
        "full": "Freedom of religious belief is important.",
        "jp": "宗教的信条の自由は重要だ。",
        "is_correct": true
      },
      {
        "parts": ["He is not very", "."],
        "full": "He is not very religious.",
        "jp": "彼はあまり信心深くない。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 509,
    "word": "RELY",
    "meaning_core": "頼る",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "LY", "type": "strong" }
    ],
    "synonyms": {
      "DEPEND": "依存する",
      "COUNT ON": "当てにする",
      "TRUST": "信頼する"
    },
    "distractors": ["DOUBT", "DISTRUST", "IGNORE", "REJECT"],
    "meanings_expanded": ["～に頼る", "信頼する"],
    "contexts": [
      {
        "parts": ["You can", "on me."],
        "full": "You can rely on me.",
        "jp": "私を頼りにしていいよ。",
        "is_correct": true
      },
      {
        "parts": ["I", "to eat lunch."],
        "full": "I want to eat lunch.",
        "jp": "私は昼食を食べたい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 510,
    "word": "REMARKABLE",
    "meaning_core": "注目すべき",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "MARK", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "EXTRAORDINARY": "並外れた",
      "NOTABLE": "注目に値する",
      "IMPRESSIVE": "印象的な"
    },
    "distractors": ["ORDINARY", "COMMON", "AVERAGE", "UNREMARKABLE"],
    "meanings_expanded": ["注目すべき", "驚くべき", "非凡な"],
    "contexts": [
      {
        "parts": ["She has a", "talent."],
        "full": "She has a remarkable talent.",
        "jp": "彼女は驚くべき才能を持っている。",
        "is_correct": true
      },
      {
        "parts": ["It was an", "day."],
        "full": "It was an ordinary day.",
        "jp": "それは平凡な一日だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 511,
    "word": "REMIND",
    "meaning_core": "思い出させる",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "MIND", "type": "strong" }
    ],
    "synonyms": {
      "PROMPT": "促す",
      "RECALL": "思い出させる",
      "ALERT": "警告する"
    },
    "distractors": ["FORGET", "IGNORE", "SUPPRESS", "HIDE"],
    "meanings_expanded": ["思い出させる", "気づかせる"],
    "contexts": [
      {
        "parts": ["Please", "me to call him."],
        "full": "Please remind me to call him.",
        "jp": "彼に電話するのを思い出させてください。",
        "is_correct": true
      },
      {
        "parts": ["I", "my keys."],
        "full": "I forgot my keys.",
        "jp": "私は鍵を忘れた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 512,
    "word": "REMNANT",
    "meaning_core": "残り",
    "syllables": [
      { "text": "REM", "type": "strong" },
      { "text": "nant", "type": "weak" }
    ],
    "synonyms": {
      "REMAINS": "遺跡・残り",
      "RESIDUE": "残留物",
      "FRAGMENT": "破片"
    },
    "distractors": ["WHOLE", "TOTALITY", "BULK", "MASS"],
    "meanings_expanded": ["残り", "面影", "残余"],
    "contexts": [
      {
        "parts": ["The", "of an ancient city."],
        "full": "The remnant of an ancient city.",
        "jp": "古代都市の遺跡（残り）。",
        "is_correct": true
      },
      {
        "parts": ["He ate the", "cake."],
        "full": "He ate the whole cake.",
        "jp": "彼はケーキを全部食べた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 513,
    "word": "REMOTE",
    "meaning_core": "遠い",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "MOTE", "type": "strong" }
    ],
    "synonyms": {
      "DISTANT": "遠い",
      "ISOLATED": "孤立した",
      "FARAWAY": "はるか彼方の"
    },
    "distractors": ["NEAR", "CLOSE", "ADJACENT", "LOCAL"],
    "meanings_expanded": ["遠い", "へんぴな", "（可能性が）わずかな"],
    "contexts": [
      {
        "parts": ["He lives in a", "village."],
        "full": "He lives in a remote village.",
        "jp": "彼はへんぴな村に住んでいる。",
        "is_correct": true
      },
      {
        "parts": ["The store is", "here."],
        "full": "The store is near here.",
        "jp": "店はこの近くだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 514,
    "word": "REPERTOIRE",
    "meaning_core": "レパートリー",
    "syllables": [
      { "text": "REP", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "toire", "type": "weak" }
    ],
    "synonyms": {
      "COLLECTION": "コレクション",
      "RANGE": "範囲",
      "STOCK": "蓄え"
    },
    "distractors": ["LACK", "SHORTAGE", "DEFICIT", "NEED"],
    "meanings_expanded": ["レパートリー", "上演目録", "演奏曲目"],
    "contexts": [
      {
        "parts": ["The pianist has a wide", "."],
        "full": "The pianist has a wide repertoire.",
        "jp": "そのピアニストは広いレパートリーを持っている。",
        "is_correct": true
      },
      {
        "parts": ["He has a", "of money."],
        "full": "He has a shortage of money.",
        "jp": "彼はお金が不足している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 515,
    "word": "REPLACE",
    "meaning_core": "取って代わる",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "PLACE", "type": "strong" }
    ],
    "synonyms": {
      "SUBSTITUTE": "代用する",
      "EXCHANGE": "交換する",
      "SUPPLANT": "取って代わる"
    },
    "distractors": ["KEEP", "MAINTAIN", "PRESERVE", "HOLD"],
    "meanings_expanded": ["取って代わる", "取り替える", "交換する"],
    "contexts": [
      {
        "parts": ["Robots may", "human workers."],
        "full": "Robots may replace human workers.",
        "jp": "ロボットが人間の労働者に取って代わるかもしれない。",
        "is_correct": true
      },
      {
        "parts": ["Please", "your seat."],
        "full": "Please keep your seat.",
        "jp": "席を立たないでください（席を保ってください）。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 516,
    "word": "REPRESENT",
    "meaning_core": "代表する",
    "syllables": [
      { "text": "rep", "type": "weak" },
      { "text": "re", "type": "weak" },
      { "text": "SENT", "type": "strong" }
    ],
    "synonyms": {
      "SYMBOLIZE": "象徴する",
      "STAND FOR": "表す",
      "SPEAK FOR": "代弁する"
    },
    "distractors": ["MISREPRESENT", "HIDE", "CONCEAL", "IGNORE"],
    "meanings_expanded": ["代表する", "表す", "象徴する"],
    "contexts": [
      {
        "parts": ["The stars", "the states."],
        "full": "The stars represent the states.",
        "jp": "星は州を象徴している。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the facts."],
        "full": "Please hide the facts.",
        "jp": "事実を隠してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 517,
    "word": "RESIDE",
    "meaning_core": "居住する",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "SIDE", "type": "strong" }
    ],
    "synonyms": {
      "LIVE": "住む",
      "DWELL": "居住する",
      "INHABIT": "生息する"
    },
    "distractors": ["VISIT", "LEAVE", "DEPART", "VACATE"],
    "meanings_expanded": ["居住する", "（性質などが）備わっている"],
    "contexts": [
      {
        "parts": ["He", "in New York."],
        "full": "He resides in New York.",
        "jp": "彼はニューヨークに住んでいる。",
        "is_correct": true
      },
      {
        "parts": ["We plan to", "Paris."],
        "full": "We plan to visit Paris.",
        "jp": "私たちはパリを訪れる予定だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 518,
    "word": "RESILIENT",
    "meaning_core": "回復力のある",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "SIL", "type": "strong" },
      { "text": "ient", "type": "weak" }
    ],
    "synonyms": {
      "TOUGH": "たくましい",
      "STRONG": "強い",
      "FLEXIBLE": "柔軟な"
    },
    "distractors": ["FRAGILE", "WEAK", "DELICATE", "BRITTLE"],
    "meanings_expanded": ["回復力のある", "立ち直りの早い", "弾力のある"],
    "contexts": [
      {
        "parts": ["Children are remarkably", "."],
        "full": "Children are remarkably resilient.",
        "jp": "子供たちは驚くほど回復力がある。",
        "is_correct": true
      },
      {
        "parts": ["The glass is", "."],
        "full": "The glass is fragile.",
        "jp": "そのガラスは壊れやすい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 519,
    "word": "RESOLUTION",
    "meaning_core": "決意",
    "syllables": [
      { "text": "res", "type": "weak" },
      { "text": "o", "type": "weak" },
      { "text": "LU", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "DECISION": "決定",
      "DETERMINATION": "決意",
      "SOLUTION": "解決"
    },
    "distractors": ["HESITATION", "INDECISION", "DOUBT", "PROBLEM"],
    "meanings_expanded": ["決意", "解決", "解像度"],
    "contexts": [
      {
        "parts": ["She made a New Year's", "."],
        "full": "She made a New Year's resolution.",
        "jp": "彼女は新年の抱負（決意）を立てた。",
        "is_correct": true
      },
      {
        "parts": ["We need a", "to the problem."],
        "full": "We need a solution to the problem.",
        "jp": "我々には問題の解決策が必要だ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 520,
    "word": "RESONATE",
    "meaning_core": "共鳴する",
    "syllables": [
      { "text": "RES", "type": "strong" },
      { "text": "o", "type": "weak" },
      { "text": "nate", "type": "weak" }
    ],
    "synonyms": {
      "ECHO": "響く",
      "VIBRATE": "振動する",
      "APPEAL": "訴えかける"
    },
    "distractors": ["DAMPEN", "SILENCE", "MUFFLE", "IGNORE"],
    "meanings_expanded": ["共鳴する", "響き渡る", "心に響く"],
    "contexts": [
      {
        "parts": ["His words", "with the audience."],
        "full": "His words resonated with the audience.",
        "jp": "彼の言葉は聴衆の心に響いた（共鳴した）。",
        "is_correct": true
      },
      {
        "parts": ["The sound", "quickly."],
        "full": "The sound faded quickly.",
        "jp": "音はすぐに消えた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 521,
    "word": "RESOURCE",
    "meaning_core": "資源",
    "syllables": [
      { "text": "RE", "type": "strong" },
      { "text": "source", "type": "weak" }
    ],
    "synonyms": {
      "SUPPLY": "供給",
      "ASSET": "資産",
      "MEANS": "手段"
    },
    "distractors": ["LACK", "DEBT", "WASTE", "TRASH"],
    "meanings_expanded": ["資源", "財源", "資質"],
    "contexts": [
      {
        "parts": ["Water is a vital", "."],
        "full": "Water is a vital resource.",
        "jp": "水は不可欠な資源だ。",
        "is_correct": true
      },
      {
        "parts": ["We have a", "of food."],
        "full": "We have a lack of food.",
        "jp": "私たちには食料が不足している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 522,
    "word": "RESPONSIBILITY",
    "meaning_core": "責任",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "spon", "type": "weak" },
      { "text": "si", "type": "weak" },
      { "text": "BIL", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "DUTY": "義務",
      "OBLIGATION": "責務",
      "LIABILITY": "責任"
    },
    "distractors": ["FREEDOM", "EXCUSE", "EXEMPTION", "FUN"],
    "meanings_expanded": ["責任", "義務"],
    "contexts": [
      {
        "parts": ["It is your", "to finish the work."],
        "full": "It is your responsibility to finish the work.",
        "jp": "仕事を終わらせるのは君の責任だ。",
        "is_correct": true
      },
      {
        "parts": ["I have no", "to help you."],
        "full": "I have no obligation to help you.",
        "jp": "君を助ける義務はない。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 523,
    "word": "RESPONSIBLE",
    "meaning_core": "責任がある",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "SPON", "type": "strong" },
      { "text": "si", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "ACCOUNTABLE": "説明責任がある",
      "IN CHARGE": "担当して",
      "RELIABLE": "信頼できる"
    },
    "distractors": ["IRRESPONSIBLE", "FREE", "CARELESS", "INNOCENT"],
    "meanings_expanded": ["責任がある", "原因である"],
    "contexts": [
      {
        "parts": ["Who is", "for this mess?"],
        "full": "Who is responsible for this mess?",
        "jp": "この散らかりの責任は誰にあるのか？",
        "is_correct": true
      },
      {
        "parts": ["He is an", "person."],
        "full": "He is an irresponsible person.",
        "jp": "彼は無責任な人だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 524,
    "word": "RESTRAIN",
    "meaning_core": "抑制する",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "STRAIN", "type": "strong" }
    ],
    "synonyms": {
      "CONTROL": "制御する",
      "HOLD BACK": "抑える",
      "LIMIT": "制限する"
    },
    "distractors": ["RELEASE", "FREE", "ENCOURAGE", "INCITE"],
    "meanings_expanded": ["抑制する", "制止する", "拘束する"],
    "contexts": [
      {
        "parts": ["He could barely", "his anger."],
        "full": "He could barely restrain his anger.",
        "jp": "彼は怒りをかろうじて抑えた。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the bird."],
        "full": "Please release the bird.",
        "jp": "その鳥を放してあげてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 525,
    "word": "RETAIN",
    "meaning_core": "保持する",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "TAIN", "type": "strong" }
    ],
    "synonyms": {
      "KEEP": "保つ",
      "MAINTAIN": "維持する",
      "HOLD": "保有する"
    },
    "distractors": ["LOSE", "DISCARD", "DROP", "ABANDON"],
    "meanings_expanded": ["保持する", "雇っておく", "記憶しておく"],
    "contexts": [
      {
        "parts": ["This soil", "water well."],
        "full": "This soil retains water well.",
        "jp": "この土壌は水をよく保つ（保水性が良い）。",
        "is_correct": true
      },
      {
        "parts": ["I", "my keys yesterday."],
        "full": "I lost my keys yesterday.",
        "jp": "私は昨日鍵をなくした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 526,
    "word": "REVENUE",
    "meaning_core": "収益",
    "syllables": [
      { "text": "REV", "type": "strong" },
      { "text": "e", "type": "weak" },
      { "text": "nue", "type": "weak" }
    ],
    "synonyms": {
      "INCOME": "所得",
      "PROFIT": "利益",
      "EARNINGS": "稼ぎ"
    },
    "distractors": ["EXPENSE", "COST", "LOSS", "DEBT"],
    "meanings_expanded": ["収益", "歳入", "収入"],
    "contexts": [
      {
        "parts": ["The company's", "increased significantly."],
        "full": "The company's revenue increased significantly.",
        "jp": "会社の収益は大幅に増加した。",
        "is_correct": true
      },
      {
        "parts": ["We need to cut", "."],
        "full": "We need to cut expenses.",
        "jp": "私たちは経費を削減する必要がある。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 527,
    "word": "REVISION",
    "meaning_core": "改訂",
    "syllables": [
      { "text": "re", "type": "weak" },
      { "text": "VI", "type": "strong" },
      { "text": "sion", "type": "weak" }
    ],
    "synonyms": {
      "CORRECTION": "訂正",
      "AMENDMENT": "修正",
      "REVIEW": "見直し"
    },
    "distractors": ["CREATION", "ORIGIN", "START", "DESTRUCTION"],
    "meanings_expanded": ["改訂", "修正", "復習"],
    "contexts": [
      {
        "parts": ["The book needs a", "."],
        "full": "The book needs a revision.",
        "jp": "その本は改訂が必要だ。",
        "is_correct": true
      },
      {
        "parts": ["He made a new", "."],
        "full": "He made a new creation.",
        "jp": "彼は新しい作品を作った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 528,
    "word": "RIGID",
    "meaning_core": "厳格な",
    "syllables": [
      { "text": "RIG", "type": "strong" },
      { "text": "id", "type": "weak" }
    ],
    "synonyms": {
      "STIFF": "硬い",
      "INFLEXIBLE": "曲がらない",
      "STRICT": "厳しい"
    },
    "distractors": ["FLEXIBLE", "SOFT", "ELASTIC", "GENTLE"],
    "meanings_expanded": ["厳格な", "硬直した", "曲がらない"],
    "contexts": [
      {
        "parts": ["The rules are very", "."],
        "full": "The rules are very rigid.",
        "jp": "そのルールは非常に厳格だ。",
        "is_correct": true
      },
      {
        "parts": ["Rubber is", "."],
        "full": "Rubber is flexible.",
        "jp": "ゴムは柔軟だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 529,
    "word": "RIGOROUS",
    "meaning_core": "厳しい",
    "syllables": [
      { "text": "RIG", "type": "strong" },
      { "text": "or", "type": "weak" },
      { "text": "ous", "type": "weak" }
    ],
    "synonyms": {
      "STRICT": "厳しい",
      "THOROUGH": "徹底的な",
      "SEVERE": "過酷な"
    },
    "distractors": ["EASY", "LAX", "GENTLE", "MILD"],
    "meanings_expanded": ["厳しい", "厳密な", "徹底的な"],
    "contexts": [
      {
        "parts": ["The training was", "."],
        "full": "The training was rigorous.",
        "jp": "その訓練は厳しかった。",
        "is_correct": true
      },
      {
        "parts": ["He is", "with his time."],
        "full": "He is careless with his time.",
        "jp": "彼は時間にルーズだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 530,
    "word": "RURAL",
    "meaning_core": "田舎の",
    "syllables": [
      { "text": "RU", "type": "strong" },
      { "text": "ral", "type": "weak" }
    ],
    "synonyms": {
      "COUNTRY": "田舎の",
      "RUSTIC": "素朴な",
      "PASTORAL": "牧歌的な"
    },
    "distractors": ["URBAN", "CITY", "METROPOLITAN", "MODERN"],
    "meanings_expanded": ["田舎の", "農村の"],
    "contexts": [
      {
        "parts": ["He lives in a", "area."],
        "full": "He lives in a rural area.",
        "jp": "彼は田舎の地域に住んでいる。",
        "is_correct": true
      },
      {
        "parts": ["Tokyo is an", "city."],
        "full": "Tokyo is an urban city.",
        "jp": "東京は都会の都市だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 531,
    "word": "SARCASTIC",
    "meaning_core": "皮肉な",
    "syllables": [
      { "text": "sar", "type": "weak" },
      { "text": "CAS", "type": "strong" },
      { "text": "tic", "type": "weak" }
    ],
    "synonyms": {
      "IRONIC": "皮肉な",
      "MOCKING": "あざける",
      "CYNICAL": "冷笑的な"
    },
    "distractors": ["SINCERE", "HONEST", "KIND", "SERIOUS"],
    "meanings_expanded": ["皮肉な", "嫌味な"],
    "contexts": [
      {
        "parts": ["He made a", "remark."],
        "full": "He made a sarcastic remark.",
        "jp": "彼は皮肉な発言をした。",
        "is_correct": true
      },
      {
        "parts": ["She gave a", "apology."],
        "full": "She gave a sincere apology.",
        "jp": "彼女は心からの謝罪をした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 532,
    "word": "SATELLITE",
    "meaning_core": "衛星",
    "syllables": [
      { "text": "SAT", "type": "strong" },
      { "text": "el", "type": "weak" },
      { "text": "lite", "type": "weak" }
    ],
    "synonyms": {
      "MOON": "衛星（月）",
      "ORBITER": "周回機"
    },
    "distractors": ["PLANET", "STAR", "SUN", "CORE"],
    "meanings_expanded": ["衛星", "人工衛星"],
    "contexts": [
      {
        "parts": ["The moon is a", "of the Earth."],
        "full": "The moon is a satellite of the Earth.",
        "jp": "月は地球の衛星だ。",
        "is_correct": true
      },
      {
        "parts": ["Mars is a", "."],
        "full": "Mars is a planet.",
        "jp": "火星は惑星だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 533,
    "word": "SATISFACTION",
    "meaning_core": "満足",
    "syllables": [
      { "text": "sat", "type": "weak" },
      { "text": "is", "type": "weak" },
      { "text": "FAC", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "CONTENTMENT": "満足感",
      "PLEASURE": "喜び",
      "FULFILLMENT": "充実感"
    },
    "distractors": ["DISSATISFACTION", "DISAPPOINTMENT", "ANGER", "FRUSTRATION"],
    "meanings_expanded": ["満足", "充足"],
    "contexts": [
      {
        "parts": ["Customer", "is our goal."],
        "full": "Customer satisfaction is our goal.",
        "jp": "顧客満足が私たちの目標だ。",
        "is_correct": true
      },
      {
        "parts": ["He expressed his", "with the service."],
        "full": "He expressed his dissatisfaction with the service.",
        "jp": "彼はサービスに対する不満を表明した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 534,
    "word": "SCALE",
    "meaning_core": "規模",
    "syllables": [
      { "text": "SCALE", "type": "strong" }
    ],
    "synonyms": {
      "SIZE": "大きさ",
      "EXTENT": "程度",
      "DEGREE": "度合い"
    },
    "distractors": ["POINT", "DOT", "DETAIL", "NOTHING"],
    "meanings_expanded": ["規模", "尺度", "（魚などの）うろこ"],
    "contexts": [
      {
        "parts": ["This map is drawn to", "."],
        "full": "This map is drawn to scale.",
        "jp": "この地図は縮尺通りに描かれている。",
        "is_correct": true
      },
      {
        "parts": ["The", "of the disaster was huge."],
        "full": "The scale of the disaster was huge.",
        "jp": "災害の規模は甚大だった。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 535,
    "word": "SCARCE",
    "meaning_core": "乏しい",
    "syllables": [
      { "text": "SCARCE", "type": "strong" }
    ],
    "synonyms": {
      "RARE": "珍しい",
      "LIMITED": "限られた",
      "INSUFFICIENT": "不十分な"
    },
    "distractors": ["ABUNDANT", "PLENTIFUL", "COMMON", "ENOUGH"],
    "meanings_expanded": ["乏しい", "不足している", "稀な"],
    "contexts": [
      {
        "parts": ["Food was", "during the war."],
        "full": "Food was scarce during the war.",
        "jp": "戦時中は食料が乏しかった。",
        "is_correct": true
      },
      {
        "parts": ["Water is", "here."],
        "full": "Water is abundant here.",
        "jp": "ここでは水が豊富だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 536,
    "word": "SCARCELY",
    "meaning_core": "ほとんど～ない",
    "syllables": [
      { "text": "SCARCE", "type": "strong" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "HARDLY": "ほとんど～ない",
      "BARELY": "かろうじて",
      "RARELY": "めったに～ない"
    },
    "distractors": ["FREQUENTLY", "OFTEN", "ALWAYS", "COMPLETELY"],
    "meanings_expanded": ["ほとんど～ない", "かろうじて"],
    "contexts": [
      {
        "parts": ["I could", "believe my eyes."],
        "full": "I could scarcely believe my eyes.",
        "jp": "私は自分の目をほとんど信じられなかった。",
        "is_correct": true
      },
      {
        "parts": ["He", "visits us."],
        "full": "He often visits us.",
        "jp": "彼はよく私たちを訪ねてくる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 537,
    "word": "SECONDARY",
    "meaning_core": "第二の",
    "syllables": [
      { "text": "SEC", "type": "strong" },
      { "text": "on", "type": "weak" },
      { "text": "dar", "type": "weak" },
      { "text": "y", "type": "weak" }
    ],
    "synonyms": {
      "MINOR": "重要でない",
      "SUBORDINATE": "従属的な",
      "LESSER": "より小さい"
    },
    "distractors": ["PRIMARY", "MAIN", "MAJOR", "FIRST"],
    "meanings_expanded": ["第二の", "中等の", "二次的な"],
    "contexts": [
      {
        "parts": ["Money is of", "importance."],
        "full": "Money is of secondary importance.",
        "jp": "お金は二の次（二次的な重要性）だ。",
        "is_correct": true
      },
      {
        "parts": ["Safety is our", "concern."],
        "full": "Safety is our primary concern.",
        "jp": "安全は私たちの最大の関心事だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 538,
    "word": "SEEK",
    "meaning_core": "探し求める",
    "syllables": [
      { "text": "SEEK", "type": "strong" }
    ],
    "synonyms": {
      "SEARCH FOR": "探す",
      "LOOK FOR": "探す",
      "PURSUE": "追求する"
    },
    "distractors": ["IGNORE", "AVOID", "HIDE", "FIND"],
    "meanings_expanded": ["探し求める", "～しようと努める"],
    "contexts": [
      {
        "parts": ["They", "shelter from the rain."],
        "full": "They seek shelter from the rain.",
        "jp": "彼らは雨宿りする場所を探し求めている。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "trouble."],
        "full": "Don't seek trouble.",
        "jp": "トラブルを自ら招くな（探し求めるな）。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 539,
    "word": "SEEMINGLY",
    "meaning_core": "どうやら〜らしい",
    "syllables": [
      { "text": "SEEM", "type": "strong" },
      { "text": "ing", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "APPARENTLY": "見たところ",
      "OUTWARDLY": "表面上は",
      "SUPPOSEDLY": "たぶん"
    },
    "distractors": ["ACTUALLY", "REALLY", "TRULY", "DEFINITELY"],
    "meanings_expanded": ["どうやら～らしい", "見たところ"],
    "contexts": [
      {
        "parts": ["It was a", "impossible task."],
        "full": "It was a seemingly impossible task.",
        "jp": "それは一見不可能に思える仕事だった。",
        "is_correct": true
      },
      {
        "parts": ["He is", "happy."],
        "full": "He is truly happy.",
        "jp": "彼は本当に幸せだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 540,
    "word": "SENIOR",
    "meaning_core": "年上の",
    "syllables": [
      { "text": "SEN", "type": "strong" },
      { "text": "ior", "type": "weak" }
    ],
    "synonyms": {
      "ELDER": "年長の",
      "SUPERIOR": "上位の",
      "HIGHER": "より高い"
    },
    "distractors": ["JUNIOR", "YOUNGER", "INFERIOR", "MINOR"],
    "meanings_expanded": ["年上の", "先輩の", "上級の"],
    "contexts": [
      {
        "parts": ["He is", "to me by two years."],
        "full": "He is senior to me by two years.",
        "jp": "彼は私より2歳年上だ。",
        "is_correct": true
      },
      {
        "parts": ["She is a", "member of the team."],
        "full": "She is a junior member of the team.",
        "jp": "彼女はチームの若手メンバーだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 541,
    "word": "SENSIBLE",
    "meaning_core": "分別のある",
    "syllables": [
      { "text": "SEN", "type": "strong" },
      { "text": "si", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "REASONABLE": "合理的な",
      "PRACTICAL": "実用的な",
      "WISE": "賢い"
    },
    "distractors": ["FOOLISH", "STUPID", "SENSELESS", "CRAZY"],
    "meanings_expanded": ["分別のある", "賢明な", "実用的な"],
    "contexts": [
      {
        "parts": ["That was a", "decision."],
        "full": "That was a sensible decision.",
        "jp": "それは賢明な判断だった。",
        "is_correct": true
      },
      {
        "parts": ["It would be", "to quit now."],
        "full": "It would be foolish to quit now.",
        "jp": "今やめるのは愚かだろう。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 542,
    "word": "SENSITIVE",
    "meaning_core": "敏感な",
    "syllables": [
      { "text": "SEN", "type": "strong" },
      { "text": "si", "type": "weak" },
      { "text": "tive", "type": "weak" }
    ],
    "synonyms": {
      "DELICATE": "繊細な",
      "RESPONSIVE": "反応する",
      "TOUCHY": "怒りっぽい"
    },
    "distractors": ["INSENSITIVE", "TOUGH", "NUMB", "INDIFFERENT"],
    "meanings_expanded": ["敏感な", "繊細な", "傷つきやすい"],
    "contexts": [
      {
        "parts": ["She is very", "to criticism."],
        "full": "She is very sensitive to criticism.",
        "jp": "彼女は批判に対してとても敏感だ。",
        "is_correct": true
      },
      {
        "parts": ["My teeth are", "to cold."],
        "full": "My teeth are sensitive to cold.",
        "jp": "私の歯は冷たいものにしみる（敏感だ）。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 543,
    "word": "SEPARATE",
    "meaning_core": "別々の",
    "syllables": [
      { "text": "SEP", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "rate", "type": "weak" }
    ],
    "synonyms": {
      "DISTINCT": "別個の",
      "DETACHED": "離れた",
      "DIFFERENT": "異なる"
    },
    "distractors": ["CONNECTED", "JOINED", "UNITED", "SAME"],
    "meanings_expanded": ["別々の", "離れた", "分離する（動詞）"],
    "contexts": [
      {
        "parts": ["We have", "rooms."],
        "full": "We have separate rooms.",
        "jp": "私たちは別々の部屋を持っている。",
        "is_correct": true
      },
      {
        "parts": ["The two issues are", "."],
        "full": "The two issues are connected.",
        "jp": "その2つの問題は関連している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 544,
    "word": "SEQUEL",
    "meaning_core": "続編",
    "syllables": [
      { "text": "SE", "type": "strong" },
      { "text": "quel", "type": "weak" }
    ],
    "synonyms": {
      "FOLLOW-UP": "続編",
      "CONTINUATION": "続き",
      "PART TWO": "パート2"
    },
    "distractors": ["PREQUEL", "ORIGINAL", "BEGINNING", "START"],
    "meanings_expanded": ["続編", "後日談", "成り行き"],
    "contexts": [
      {
        "parts": ["The movie", "was disappointing."],
        "full": "The movie sequel was disappointing.",
        "jp": "映画の続編は期待外れだった。",
        "is_correct": true
      },
      {
        "parts": ["This is the", "story."],
        "full": "This is the original story.",
        "jp": "これが原作の物語だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 545,
    "word": "SEQUEL",
    "meaning_core": "続編",
    "syllables": [
      { "text": "SE", "type": "strong" },
      { "text": "quel", "type": "weak" }
    ],
    "synonyms": {
      "CONTINUATION": "続き",
      "SUCCESSOR": "後継"
    },
    "distractors": ["ORIGIN", "SOURCE", "PREFACE"],
    "meanings_expanded": ["続編", "結果"],
    "contexts": [
      {
        "parts": ["I am writing a", "to my book."],
        "full": "I am writing a sequel to my book.",
        "jp": "私は自分の本の続編を書いている。",
        "is_correct": true
      },
      {
        "parts": ["The", "came before the first movie."],
        "full": "The prequel came before the first movie.",
        "jp": "前日譚は最初の映画より前の話だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 546,
    "word": "SERENE",
    "meaning_core": "穏やかな",
    "syllables": [
      { "text": "se", "type": "weak" },
      { "text": "RENE", "type": "strong" }
    ],
    "synonyms": {
      "CALM": "静かな",
      "PEACEFUL": "平和な",
      "TRANQUIL": "平穏な"
    },
    "distractors": ["STORMY", "CHAOTIC", "NOISY", "AGITATED"],
    "meanings_expanded": ["穏やかな", "静かな", "落ち着いた"],
    "contexts": [
      {
        "parts": ["The lake looked", "in the moonlight."],
        "full": "The lake looked serene in the moonlight.",
        "jp": "月光の中で湖は穏やかに見えた。",
        "is_correct": true
      },
      {
        "parts": ["The ocean was", "and rough."],
        "full": "The ocean was stormy and rough.",
        "jp": "海は嵐で荒れていた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 547,
    "word": "SERENELY",
    "meaning_core": "穏やかに",
    "syllables": [
      { "text": "se", "type": "weak" },
      { "text": "RENE", "type": "strong" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "CALMLY": "静かに",
      "PEACEFULLY": "平和に"
    },
    "distractors": ["ANGRILY", "VIOLENTLY", "LOUDLY", "WILDLY"],
    "meanings_expanded": ["穏やかに", "静かに"],
    "contexts": [
      {
        "parts": ["She smiled", "."],
        "full": "She smiled serenely.",
        "jp": "彼女は穏やかに微笑んだ。",
        "is_correct": true
      },
      {
        "parts": ["He shouted", "."],
        "full": "He shouted angrily.",
        "jp": "彼は怒って叫んだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 548,
    "word": "SEVERE",
    "meaning_core": "厳しい",
    "syllables": [
      { "text": "se", "type": "weak" },
      { "text": "VERE", "type": "strong" }
    ],
    "synonyms": {
      "STRICT": "厳格な",
      "HARSH": "過酷な",
      "SERIOUS": "深刻な"
    },
    "distractors": ["MILD", "GENTLE", "MINOR", "LIGHT"],
    "meanings_expanded": ["厳しい", "深刻な", "激しい"],
    "contexts": [
      {
        "parts": ["He suffered", "injuries."],
        "full": "He suffered severe injuries.",
        "jp": "彼は重傷（深刻な怪我）を負った。",
        "is_correct": true
      },
      {
        "parts": ["I have a", "headache."],
        "full": "I have a slight headache.",
        "jp": "軽い頭痛がする。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 549,
    "word": "SHORT-TERM",
    "meaning_core": "短期的な",
    "syllables": [
      { "text": "SHORT", "type": "strong" },
      { "text": "term", "type": "weak" }
    ],
    "synonyms": {
      "TEMPORARY": "一時的な",
      "BRIEF": "短い",
      "FLEETING": "つかの間の"
    },
    "distractors": ["LONG-TERM", "PERMANENT", "LASTING", "FOREVER"],
    "meanings_expanded": ["短期的な", "短期間の"],
    "contexts": [
      {
        "parts": ["This is a", "solution."],
        "full": "This is a short-term solution.",
        "jp": "これは短期的な解決策だ。",
        "is_correct": true
      },
      {
        "parts": ["We need a", "plan."],
        "full": "We need a long-term plan.",
        "jp": "私たちは長期的な計画が必要だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 550,
    "word": "SHRED",
    "meaning_core": "ちぎる",
    "syllables": [
      { "text": "SHRED", "type": "strong" }
    ],
    "synonyms": {
      "TEAR": "引き裂く",
      "RIP": "破る",
      "CUT": "切る"
    },
    "distractors": ["MEND", "REPAIR", "FIX", "JOIN"],
    "meanings_expanded": ["ちぎる", "細断する", "断片"],
    "contexts": [
      {
        "parts": ["Please", "these documents."],
        "full": "Please shred these documents.",
        "jp": "これらの書類をシュレッダーにかけて（細断して）ください。",
        "is_correct": true
      },
      {
        "parts": ["There is not a", "of evidence."],
        "full": "There is not a shred of evidence.",
        "jp": "証拠のかけらもない。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 551,
    "word": "SIGNIFICANTLY",
    "meaning_core": "かなり",
    "syllables": [
      { "text": "sig", "type": "weak" },
      { "text": "NIF", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "cant", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "CONSIDERABLY": "相当に",
      "NOTABLY": "著しく",
      "GREATLY": "大いに"
    },
    "distractors": ["SLIGHTLY", "BARELY", "HARDLY", "LITTLE"],
    "meanings_expanded": ["かなり", "著しく", "意味ありげに"],
    "contexts": [
      {
        "parts": ["Sales have increased", "."],
        "full": "Sales have increased significantly.",
        "jp": "売上がかなり増加した。",
        "is_correct": true
      },
      {
        "parts": ["He changed", "."],
        "full": "He changed slightly.",
        "jp": "彼はわずかに変わった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 552,
    "word": "SINCERITY",
    "meaning_core": "誠実さ",
    "syllables": [
      { "text": "sin", "type": "weak" },
      { "text": "CER", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "HONESTY": "正直",
      "GENUINENESS": "純粋さ",
      "TRUTH": "真実"
    },
    "distractors": ["HYPOCRISY", "DECEIT", "LIES", "DISHONESTY"],
    "meanings_expanded": ["誠実さ", "正直", "本心"],
    "contexts": [
      {
        "parts": ["I doubt his", "."],
        "full": "I doubt his sincerity.",
        "jp": "私は彼の誠実さを疑っている。",
        "is_correct": true
      },
      {
        "parts": ["He spoke with", "lies."],
        "full": "He spoke with obvious lies.",
        "jp": "彼は明らかな嘘をついた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 553,
    "word": "SKEPTICAL",
    "meaning_core": "懐疑的な",
    "syllables": [
      { "text": "SKEP", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "cal", "type": "weak" }
    ],
    "synonyms": {
      "DOUBTFUL": "疑っている",
      "SUSPICIOUS": "怪しんでいる",
      "CYNICAL": "冷笑的な"
    },
    "distractors": ["CERTAIN", "SURE", "CONFIDENT", "CONVINCED"],
    "meanings_expanded": ["懐疑的な", "疑い深い"],
    "contexts": [
      {
        "parts": ["I am", "about the plan."],
        "full": "I am skeptical about the plan.",
        "jp": "私はその計画に懐疑的だ。",
        "is_correct": true
      },
      {
        "parts": ["He is", "that he will win."],
        "full": "He is certain that he will win.",
        "jp": "彼は勝つと確信している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 554,
    "word": "SLIGHT",
    "meaning_core": "わずかな",
    "syllables": [
      { "text": "SLIGHT", "type": "strong" }
    ],
    "synonyms": {
      "SMALL": "小さい",
      "MINOR": "些細な",
      "TINY": "ごくわずかな"
    },
    "distractors": ["HUGE", "SIGNIFICANT", "MAJOR", "LARGE"],
    "meanings_expanded": ["わずかな", "少しの", "ほっそりした"],
    "contexts": [
      {
        "parts": ["There is a", "chance of rain."],
        "full": "There is a slight chance of rain.",
        "jp": "雨の可能性がわずかにある。",
        "is_correct": true
      },
      {
        "parts": ["It was a", "mistake."],
        "full": "It was a huge mistake.",
        "jp": "それは大きな間違いだった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 555,
    "word": "SLUGGISH",
    "meaning_core": "不景気な",
    "syllables": [
      { "text": "SLUG", "type": "strong" },
      { "text": "gish", "type": "weak" }
    ],
    "synonyms": {
      "SLOW": "遅い",
      "INACTIVE": "不活発な",
      "STAGNANT": "停滞した"
    },
    "distractors": ["ACTIVE", "FAST", "BOOMING", "ENERGETIC"],
    "meanings_expanded": ["不景気な", "停滞した", "のろい"],
    "contexts": [
      {
        "parts": ["The economy is", "."],
        "full": "The economy is sluggish.",
        "jp": "経済は停滞している（不景気だ）。",
        "is_correct": true
      },
      {
        "parts": ["He is a", "runner."],
        "full": "He is a fast runner.",
        "jp": "彼は速いランナーだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 556,
    "word": "SOCIALIZE",
    "meaning_core": "つきあう",
    "syllables": [
      { "text": "SO", "type": "strong" },
      { "text": "cial", "type": "weak" },
      { "text": "ize", "type": "weak" }
    ],
    "synonyms": {
      "MINGLE": "交わる",
      "MIX": "交流する",
      "ASSOCIATE": "交際する"
    },
    "distractors": ["ISOLATE", "AVOID", "WITHDRAW", "HIDE"],
    "meanings_expanded": ["社交的に交わる", "付き合う", "社会化する"],
    "contexts": [
      {
        "parts": ["He likes to", "with his colleagues."],
        "full": "He likes to socialize with his colleagues.",
        "jp": "彼は同僚と付き合う（交流する）のが好きだ。",
        "is_correct": true
      },
      {
        "parts": ["She prefers to", "herself."],
        "full": "She prefers to isolate herself.",
        "jp": "彼女は孤立することを好む。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 557,
    "word": "SOOTHE",
    "meaning_core": "なだめる",
    "syllables": [
      { "text": "SOOTHE", "type": "strong" }
    ],
    "synonyms": {
      "CALM": "落ち着かせる",
      "COMFORT": "慰める",
      "RELIEVE": "和らげる"
    },
    "distractors": ["AGITATE", "UPSET", "ANNOY", "PROVOKE"],
    "meanings_expanded": ["なだめる", "和らげる", "落ち着かせる"],
    "contexts": [
      {
        "parts": ["Music can", "the mind."],
        "full": "Music can soothe the mind.",
        "jp": "音楽は心をなだめることができる。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "the angry dog."],
        "full": "Don't provoke the angry dog.",
        "jp": "怒っている犬を挑発するな。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 558,
    "word": "SOPHISTICATED",
    "meaning_core": "洗練された",
    "syllables": [
      { "text": "so", "type": "weak" },
      { "text": "PHIS", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "cat", "type": "weak" },
      { "text": "ed", "type": "weak" }
    ],
    "synonyms": {
      "ADVANCED": "高度な",
      "REFINED": "上品な",
      "COMPLEX": "精巧な"
    },
    "distractors": ["SIMPLE", "PRIMITIVE", "CRUDE", "NAIVE"],
    "meanings_expanded": ["洗練された", "精巧な", "教養のある"],
    "contexts": [
      {
        "parts": ["This is a", "machine."],
        "full": "This is a sophisticated machine.",
        "jp": "これは精巧な（洗練された）機械だ。",
        "is_correct": true
      },
      {
        "parts": ["He uses", "tools."],
        "full": "He uses simple tools.",
        "jp": "彼は単純な道具を使う。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 559,
    "word": "SPARKLE",
    "meaning_core": "輝く",
    "syllables": [
      { "text": "SPAR", "type": "strong" },
      { "text": "kle", "type": "weak" }
    ],
    "synonyms": {
      "SHINE": "光る",
      "GLITTER": "きらめく",
      "TWINKLE": "またたく"
    },
    "distractors": ["DULL", "FADE", "DARKEN", "DIM"],
    "meanings_expanded": ["輝く", "きらめく", "活気にあふれる"],
    "contexts": [
      {
        "parts": ["Her eyes", "with joy."],
        "full": "Her eyes sparkle with joy.",
        "jp": "彼女の目は喜びで輝いている。",
        "is_correct": true
      },
      {
        "parts": ["The light began to", "."],
        "full": "The light began to fade.",
        "jp": "光は消え始めた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 560,
    "word": "SPARSELY",
    "meaning_core": "まばらに",
    "syllables": [
      { "text": "SPARSE", "type": "strong" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "THINLY": "薄く",
      "SCANTILY": "乏しく"
    },
    "distractors": ["DENSELY", "THICKLY", "HEAVILY", "CROWDEDLY"],
    "meanings_expanded": ["まばらに", "ちらほらと"],
    "contexts": [
      {
        "parts": ["The area is", "populated."],
        "full": "The area is sparsely populated.",
        "jp": "その地域は人口がまばらだ。",
        "is_correct": true
      },
      {
        "parts": ["The forest is", "wooded."],
        "full": "The forest is densely wooded.",
        "jp": "その森は木が密集している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 561,
    "word": "SPECIES",
    "meaning_core": "種",
    "syllables": [
      { "text": "SPE", "type": "strong" },
      { "text": "cies", "type": "weak" }
    ],
    "synonyms": {
      "TYPE": "種類",
      "KIND": "種",
      "BREED": "品種"
    },
    "distractors": ["INDIVIDUAL", "OBJECT", "THING", "ROCK"],
    "meanings_expanded": ["（生物の）種", "種類"],
    "contexts": [
      {
        "parts": ["This", "is endangered."],
        "full": "This species is endangered.",
        "jp": "この種は絶滅の危機に瀕している。",
        "is_correct": true
      },
      {
        "parts": ["A stone is a living", "."],
        "full": "A stone is a living creature.",
        "jp": "石は生き物だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 562,
    "word": "SPECIFIC",
    "meaning_core": "具体的な",
    "syllables": [
      { "text": "spe", "type": "weak" },
      { "text": "CIF", "type": "strong" },
      { "text": "ic", "type": "weak" }
    ],
    "synonyms": {
      "PARTICULAR": "特定の",
      "PRECISE": "明確な",
      "EXACT": "正確な"
    },
    "distractors": ["GENERAL", "VAGUE", "BROAD", "UNCLEAR"],
    "meanings_expanded": ["具体的な", "特定の", "特有の"],
    "contexts": [
      {
        "parts": ["Can you be more", "?"],
        "full": "Can you be more specific?",
        "jp": "もっと具体的にお願いできますか？",
        "is_correct": true
      },
      {
        "parts": ["I have a", "idea."],
        "full": "I have a vague idea.",
        "jp": "私は漠然とした考えを持っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 563,
    "word": "SPECIFICALLY",
    "meaning_core": "具体的に",
    "syllables": [
      { "text": "spe", "type": "weak" },
      { "text": "CIF", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "cal", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "PARTICULARLY": "特に",
      "ESPECIALLY": "とりわけ",
      "PRECISELY": "正確に"
    },
    "distractors": ["GENERALLY", "BROADLY", "VAGUELY", "ROUGHLY"],
    "meanings_expanded": ["具体的に", "特に", "明確に"],
    "contexts": [
      {
        "parts": ["I bought this", "for you."],
        "full": "I bought this specifically for you.",
        "jp": "私はこれを特にあなたのために買った。",
        "is_correct": true
      },
      {
        "parts": ["Generally speaking, but", "."],
        "full": "Generally speaking, but vaguely.",
        "jp": "一般的に言って、しかし漠然と。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 564,
    "word": "SPECULATE",
    "meaning_core": "推測する",
    "syllables": [
      { "text": "SPEC", "type": "strong" },
      { "text": "u", "type": "weak" },
      { "text": "late", "type": "weak" }
    ],
    "synonyms": {
      "GUESS": "推測する",
      "THEORIZE": "理論づける",
      "INVEST": "投機する"
    },
    "distractors": ["KNOW", "PROVE", "VERIFY", "MEASURE"],
    "meanings_expanded": ["推測する", "投機する", "思索する"],
    "contexts": [
      {
        "parts": ["We can only", "about the future."],
        "full": "We can only speculate about the future.",
        "jp": "私たちは未来について推測することしかできない。",
        "is_correct": true
      },
      {
        "parts": ["I", "the answer is correct."],
        "full": "I know the answer is correct.",
        "jp": "私はその答えが正しいと知っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 565,
    "word": "SPONTANEOUS",
    "meaning_core": "自発的な",
    "syllables": [
      { "text": "spon", "type": "weak" },
      { "text": "TA", "type": "strong" },
      { "text": "ne", "type": "weak" },
      { "text": "ous", "type": "weak" }
    ],
    "synonyms": {
      "UNPLANNED": "計画外の",
      "NATURAL": "自然な",
      "IMPULSIVE": "衝動的な"
    },
    "distractors": ["FORCED", "PLANNED", "PREPARED", "DELIBERATE"],
    "meanings_expanded": ["自発的な", "自然に起こる", "のびのびとした"],
    "contexts": [
      {
        "parts": ["The crowd burst into", "applause."],
        "full": "The crowd burst into spontaneous applause.",
        "jp": "群衆から自発的な拍手が沸き起こった。",
        "is_correct": true
      },
      {
        "parts": ["It was a", "decision."],
        "full": "It was a planned decision.",
        "jp": "それは計画された決定だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 566,
    "word": "SPONTANEOUSLY",
    "meaning_core": "自発的に",
    "syllables": [
      { "text": "spon", "type": "weak" },
      { "text": "TA", "type": "strong" },
      { "text": "ne", "type": "weak" },
      { "text": "ous", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "NATURALLY": "自然に",
      "INSTINCTIVELY": "本能的に"
    },
    "distractors": ["DELIBERATELY", "INTENTIONALLY", "FORCEDLY", "PLANNEDLY"],
    "meanings_expanded": ["自発的に", "自然に"],
    "contexts": [
      {
        "parts": ["They started dancing", "."],
        "full": "They started dancing spontaneously.",
        "jp": "彼らは自然と踊り始めた。",
        "is_correct": true
      },
      {
        "parts": ["He acted", "to hurt her."],
        "full": "He acted deliberately to hurt her.",
        "jp": "彼は彼女を傷つけるために故意に行動した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 567,
    "word": "STABLE",
    "meaning_core": "安定した",
    "syllables": [
      { "text": "STA", "type": "strong" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "STEADY": "着実な",
      "FIRM": "堅固な",
      "SECURE": "安全な"
    },
    "distractors": ["UNSTABLE", "SHAKY", "VARIABLE", "WEAK"],
    "meanings_expanded": ["安定した", "しっかりした", "馬小屋（名詞）"],
    "contexts": [
      {
        "parts": ["The patient is in", "condition."],
        "full": "The patient is in stable condition.",
        "jp": "患者の容体は安定している。",
        "is_correct": true
      },
      {
        "parts": ["The economy is very", "."],
        "full": "The economy is very unstable.",
        "jp": "経済は非常に不安定だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 568,
    "word": "STARVATION",
    "meaning_core": "飢餓",
    "syllables": [
      { "text": "star", "type": "weak" },
      { "text": "VA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "HUNGER": "飢え",
      "FAMINE": "飢饉"
    },
    "distractors": ["FEAST", "PLENTY", "FULLNESS", "GLUTTONY"],
    "meanings_expanded": ["飢餓", "餓死"],
    "contexts": [
      {
        "parts": ["Many people died of", "."],
        "full": "Many people died of starvation.",
        "jp": "多くの人々が餓死した。",
        "is_correct": true
      },
      {
        "parts": ["They enjoyed a", "."],
        "full": "They enjoyed a feast.",
        "jp": "彼らはご馳走を楽しんだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 569,
    "word": "STEADY",
    "meaning_core": "着実な",
    "syllables": [
      { "text": "STEAD", "type": "strong" },
      { "text": "y", "type": "weak" }
    ],
    "synonyms": {
      "CONSTANT": "一定の",
      "STABLE": "安定した",
      "REGULAR": "規則的な"
    },
    "distractors": ["UNSTEADY", "SHAKY", "SUDDEN", "VARIABLE"],
    "meanings_expanded": ["着実な", "安定した", "固定された"],
    "contexts": [
      {
        "parts": ["Slow and", "wins the race."],
        "full": "Slow and steady wins the race.",
        "jp": "急がば回れ（ゆっくり着実なのがレースに勝つ）。",
        "is_correct": true
      },
      {
        "parts": ["His hands were", "."],
        "full": "His hands were shaking.",
        "jp": "彼の手は震えていた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 570,
    "word": "STERN",
    "meaning_core": "厳格な",
    "syllables": [
      { "text": "STERN", "type": "strong" }
    ],
    "synonyms": {
      "STRICT": "厳しい",
      "HARSH": "過酷な",
      "SEVERE": "深刻な"
    },
    "distractors": ["GENTLE", "KIND", "MILD", "SOFT"],
    "meanings_expanded": ["厳格な", "いかめしい", "船尾（名詞）"],
    "contexts": [
      {
        "parts": ["He gave me a", "look."],
        "full": "He gave me a stern look.",
        "jp": "彼は私に厳しい視線を向けた。",
        "is_correct": true
      },
      {
        "parts": ["She has a", "voice."],
        "full": "She has a gentle voice.",
        "jp": "彼女は優しい声をしている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 571,
    "word": "STING",
    "meaning_core": "刺す",
    "syllables": [
      { "text": "STING", "type": "strong" }
    ],
    "synonyms": {
      "BITE": "噛む",
      "PRICK": "刺す",
      "HURT": "痛む"
    },
    "distractors": ["SOOTHE", "HEAL", "COMFORT", "CURE"],
    "meanings_expanded": ["刺す", "ヒリヒリする", "針"],
    "contexts": [
      {
        "parts": ["Bees can", "you."],
        "full": "Bees can sting you.",
        "jp": "蜂は君を刺すことがある。",
        "is_correct": true
      },
      {
        "parts": ["The medicine will", "the pain."],
        "full": "The medicine will soothe the pain.",
        "jp": "その薬は痛みを和らげるだろう。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 572,
    "word": "STRAIGHTFORWARD",
    "meaning_core": "率直な",
    "syllables": [
      { "text": "straight", "type": "strong" },
      { "text": "FOR", "type": "strong" },
      { "text": "ward", "type": "weak" }
    ],
    "synonyms": {
      "SIMPLE": "単純な",
      "HONEST": "正直な",
      "DIRECT": "直接的な"
    },
    "distractors": ["COMPLICATED", "CONFUSING", "DISHONEST", "INDIRECT"],
    "meanings_expanded": ["率直な", "簡単な", "まっすぐな"],
    "contexts": [
      {
        "parts": ["It was a", "answer."],
        "full": "It was a straightforward answer.",
        "jp": "それは率直な答えだった。",
        "is_correct": true
      },
      {
        "parts": ["The problem is", "."],
        "full": "The problem is complicated.",
        "jp": "その問題は複雑だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 573,
    "word": "STRAIN",
    "meaning_core": "負担",
    "syllables": [
      { "text": "STRAIN", "type": "strong" }
    ],
    "synonyms": {
      "STRESS": "ストレス",
      "TENSION": "緊張",
      "PRESSURE": "圧力"
    },
    "distractors": ["RELAXATION", "EASE", "COMFORT", "RELIEF"],
    "meanings_expanded": ["負担", "緊張", "（筋肉を）痛める"],
    "contexts": [
      {
        "parts": ["He is under a lot of", "."],
        "full": "He is under a lot of strain.",
        "jp": "彼は多くの負担（重圧）を感じている。",
        "is_correct": true
      },
      {
        "parts": ["She felt total", "."],
        "full": "She felt total relaxation.",
        "jp": "彼女は完全にリラックスしていた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 574,
    "word": "STRATEGY",
    "meaning_core": "戦略",
    "syllables": [
      { "text": "STRAT", "type": "strong" },
      { "text": "e", "type": "weak" },
      { "text": "gy", "type": "weak" }
    ],
    "synonyms": {
      "PLAN": "計画",
      "TACTIC": "戦術",
      "POLICY": "方針"
    },
    "distractors": ["CHAOS", "LUCK", "CHANCE", "ACCIDENT"],
    "meanings_expanded": ["戦略", "策略"],
    "contexts": [
      {
        "parts": ["We need a marketing", "."],
        "full": "We need a marketing strategy.",
        "jp": "私たちにはマーケティング戦略が必要だ。",
        "is_correct": true
      },
      {
        "parts": ["It was pure", "."],
        "full": "It was pure luck.",
        "jp": "それは単なる運だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 575,
    "word": "STROLL",
    "meaning_core": "ぶらぶらする",
    "syllables": [
      { "text": "STROLL", "type": "strong" }
    ],
    "synonyms": {
      "WALK": "歩く",
      "WANDER": "さまよう",
      "RAMBLE": "散策する"
    },
    "distractors": ["RUN", "RUSH", "SPRINT", "HURRY"],
    "meanings_expanded": ["ぶらぶら歩く", "散歩する"],
    "contexts": [
      {
        "parts": ["Let's", "in the park."],
        "full": "Let's stroll in the park.",
        "jp": "公園をぶらぶら歩こう。",
        "is_correct": true
      },
      {
        "parts": ["We must", "to catch the bus."],
        "full": "We must run to catch the bus.",
        "jp": "バスに間に合うように走らなければならない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 576,
    "word": "STUN",
    "meaning_core": "唖然とさせる",
    "syllables": [
      { "text": "STUN", "type": "strong" }
    ],
    "synonyms": {
      "SHOCK": "衝撃を与える",
      "AMAZE": "びっくりさせる",
      "DAZE": "呆然とさせる"
    },
    "distractors": ["BORE", "CALM", "EXPECT", "SOOTHE"],
    "meanings_expanded": ["唖然とさせる", "気絶させる"],
    "contexts": [
      {
        "parts": ["The news will", "everyone."],
        "full": "The news will stun everyone.",
        "jp": "そのニュースは皆を唖然とさせるだろう。",
        "is_correct": true
      },
      {
        "parts": ["The lecture will", "you."],
        "full": "The lecture will bore you.",
        "jp": "その講義は君を退屈させるだろう。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 577,
    "word": "STURDY",
    "meaning_core": "頑健な",
    "syllables": [
      { "text": "STUR", "type": "strong" },
      { "text": "dy", "type": "weak" }
    ],
    "synonyms": {
      "STRONG": "強い",
      "ROBUST": "たくましい",
      "DURABLE": "耐久性のある"
    },
    "distractors": ["WEAK", "FRAGILE", "DELICATE", "FLIMSY"],
    "meanings_expanded": ["頑健な", "丈夫な", "不屈の"],
    "contexts": [
      {
        "parts": ["This table is very", "."],
        "full": "This table is very sturdy.",
        "jp": "このテーブルはとても頑丈だ。",
        "is_correct": true
      },
      {
        "parts": ["The glass is", "."],
        "full": "The glass is fragile.",
        "jp": "そのガラスは壊れやすい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 578,
    "word": "SUBLIME",
    "meaning_core": "崇高な",
    "syllables": [
      { "text": "sub", "type": "weak" },
      { "text": "LIME", "type": "strong" }
    ],
    "synonyms": {
      "MAGNIFICENT": "壮大な",
      "NOBLE": "高潔な",
      "GRAND": "雄大な"
    },
    "distractors": ["ORDINARY", "BAD", "LOW", "COMMON"],
    "meanings_expanded": ["崇高な", "荘厳な", "卓越した"],
    "contexts": [
      {
        "parts": ["The view was", "."],
        "full": "The view was sublime.",
        "jp": "その景色は崇高（壮大）だった。",
        "is_correct": true
      },
      {
        "parts": ["It was an", "day."],
        "full": "It was an ordinary day.",
        "jp": "それは平凡な一日だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 579,
    "word": "SUBSIDIES",
    "meaning_core": "補助金",
    "syllables": [
      { "text": "SUB", "type": "strong" },
      { "text": "si", "type": "weak" },
      { "text": "dies", "type": "weak" }
    ],
    "synonyms": {
      "GRANTS": "助成金",
      "FUNDS": "資金",
      "AID": "援助"
    },
    "distractors": ["TAXES", "DEBTS", "FINES", "COSTS"],
    "meanings_expanded": ["補助金", "助成金"],
    "contexts": [
      {
        "parts": ["Farmers receive government", "."],
        "full": "Farmers receive government subsidies.",
        "jp": "農家は政府の補助金を受け取っている。",
        "is_correct": true
      },
      {
        "parts": ["They have to pay", "."],
        "full": "They have to pay taxes.",
        "jp": "彼らは税金を払わなければならない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 580,
    "word": "SUBSIDIZE",
    "meaning_core": "助成金を払う",
    "syllables": [
      { "text": "SUB", "type": "strong" },
      { "text": "si", "type": "weak" },
      { "text": "dize", "type": "weak" }
    ],
    "synonyms": {
      "FUND": "資金を提供する",
      "SUPPORT": "支援する",
      "FINANCE": "融資する"
    },
    "distractors": ["TAX", "CHARGE", "FINE", "BILL"],
    "meanings_expanded": ["助成金を支給する", "援助する"],
    "contexts": [
      {
        "parts": ["The state will", "housing."],
        "full": "The state will subsidize housing.",
        "jp": "州は住宅に助成金を出す予定だ。",
        "is_correct": true
      },
      {
        "parts": ["We will", "you for the service."],
        "full": "We will charge you for the service.",
        "jp": "サービス料を請求します。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 581,
    "word": "SUBTLE",
    "meaning_core": "微妙な",
    "syllables": [
      { "text": "SUB", "type": "strong" },
      { "text": "tle", "type": "weak" }
    ],
    "synonyms": {
      "FAINT": "かすかな",
      "SLIGHT": "わずかな",
      "DELICATE": "繊細な"
    },
    "distractors": ["OBVIOUS", "CLEAR", "STRONG", "PLAIN"],
    "meanings_expanded": ["微妙な", "かすかな", "巧妙な"],
    "contexts": [
      {
        "parts": ["There is a", "difference."],
        "full": "There is a subtle difference.",
        "jp": "微妙な違いがある。",
        "is_correct": true
      },
      {
        "parts": ["The answer is", "."],
        "full": "The answer is obvious.",
        "jp": "答えは明白だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 582,
    "word": "SUBTLY",
    "meaning_core": "微妙に",
    "syllables": [
      { "text": "SUB", "type": "strong" },
      { "text": "tly", "type": "weak" }
    ],
    "synonyms": {
      "SLIGHTLY": "わずかに",
      "FAINTLY": "かすかに"
    },
    "distractors": ["OBVIOUSLY", "CLEARLY", "GREATLY", "STRONGLY"],
    "meanings_expanded": ["微妙に", "かすかに"],
    "contexts": [
      {
        "parts": ["The flavor changed", "."],
        "full": "The flavor changed subtly.",
        "jp": "味が微妙に変わった。",
        "is_correct": true
      },
      {
        "parts": ["He spoke", "."],
        "full": "He spoke loudly.",
        "jp": "彼は大声で話した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 583,
    "word": "SUCCINCT",
    "meaning_core": "簡潔な",
    "syllables": [
      { "text": "suc", "type": "weak" },
      { "text": "CINCT", "type": "strong" }
    ],
    "synonyms": {
      "CONCISE": "簡潔な",
      "BRIEF": "短い",
      "SHORT": "短い"
    },
    "distractors": ["WORDY", "LONG", "LENGTHY", "VERBOSE"],
    "meanings_expanded": ["簡潔な", "簡明な"],
    "contexts": [
      {
        "parts": ["Give a", "summary."],
        "full": "Give a succinct summary.",
        "jp": "簡潔な要約を出しなさい。",
        "is_correct": true
      },
      {
        "parts": ["His speech was", "."],
        "full": "His speech was wordy.",
        "jp": "彼のスピーチは冗長だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 584,
    "word": "SUCCINCTLY",
    "meaning_core": "簡潔に",
    "syllables": [
      { "text": "suc", "type": "weak" },
      { "text": "CINCT", "type": "strong" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "BRIEFLY": "手短に",
      "CONCISELY": "簡潔に"
    },
    "distractors": ["WORDILY", "AT LENGTH", "LONG", "VERBOSELY"],
    "meanings_expanded": ["簡潔に", "手短に"],
    "contexts": [
      {
        "parts": ["Please state your point", "."],
        "full": "Please state your point succinctly.",
        "jp": "要点を簡潔に述べてください。",
        "is_correct": true
      },
      {
        "parts": ["He explained it", "."],
        "full": "He explained it at length.",
        "jp": "彼はそれを長々と説明した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 585,
    "word": "SUFFER",
    "meaning_core": "苦しむ",
    "syllables": [
      { "text": "SUF", "type": "strong" },
      { "text": "fer", "type": "weak" }
    ],
    "synonyms": {
      "ENDURE": "耐える",
      "EXPERIENCE": "経験する",
      "BEAR": "我慢する"
    },
    "distractors": ["ENJOY", "FLOURISH", "PROSPER", "BENEFIT"],
    "meanings_expanded": ["～に苦しむ", "（損害などを）受ける"],
    "contexts": [
      {
        "parts": ["Many people", "from allergies."],
        "full": "Many people suffer from allergies.",
        "jp": "多くの人がアレルギーに苦しんでいる。",
        "is_correct": true
      },
      {
        "parts": ["We", "the holiday."],
        "full": "We enjoyed the holiday.",
        "jp": "私たちは休日を楽しんだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 586,
    "word": "SUFFICIENT",
    "meaning_core": "十分な",
    "syllables": [
      { "text": "suf", "type": "weak" },
      { "text": "FI", "type": "strong" },
      { "text": "cient", "type": "weak" }
    ],
    "synonyms": {
      "ENOUGH": "十分な",
      "ADEQUATE": "適切な",
      "AMPLE": "豊富な"
    },
    "distractors": ["INSUFFICIENT", "LACKING", "SCARCE", "POOR"],
    "meanings_expanded": ["十分な", "足りる"],
    "contexts": [
      {
        "parts": ["We have", "food."],
        "full": "We have sufficient food.",
        "jp": "私たちには十分な食料がある。",
        "is_correct": true
      },
      {
        "parts": ["Funds are", "."],
        "full": "Funds are insufficient.",
        "jp": "資金が不足している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 587,
    "word": "SUPPOSE",
    "meaning_core": "～だと思う",
    "syllables": [
      { "text": "sup", "type": "weak" },
      { "text": "POSE", "type": "strong" }
    ],
    "synonyms": {
      "ASSUME": "仮定する",
      "THINK": "思う",
      "GUESS": "推測する"
    },
    "distractors": ["KNOW", "PROVE", "VERIFY", "DENY"],
    "meanings_expanded": ["～だと思う", "仮定する", "（be supposed toで）～することになっている"],
    "contexts": [
      {
        "parts": ["I", "he is right."],
        "full": "I suppose he is right.",
        "jp": "彼は正しいと思う。",
        "is_correct": true
      },
      {
        "parts": ["I", "the answer."],
        "full": "I know the answer.",
        "jp": "私は答えを知っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 588,
    "word": "SUPPRESS",
    "meaning_core": "抑圧する",
    "syllables": [
      { "text": "sup", "type": "weak" },
      { "text": "PRESS", "type": "strong" }
    ],
    "synonyms": {
      "REPRESS": "抑制する",
      "CRUSH": "押しつぶす",
      "STIFLE": "抑える"
    },
    "distractors": ["RELEASE", "EXPRESS", "ENCOURAGE", "FREE"],
    "meanings_expanded": ["抑圧する", "鎮圧する", "（感情を）抑える"],
    "contexts": [
      {
        "parts": ["The army was sent to", "the rebellion."],
        "full": "The army was sent to suppress the rebellion.",
        "jp": "軍隊は反乱を鎮圧するために派遣された。",
        "is_correct": true
      },
      {
        "parts": ["You should", "your feelings."],
        "full": "You should express your feelings.",
        "jp": "あなたは自分の感情を表現すべきだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 589,
    "word": "SURPASS",
    "meaning_core": "上回る",
    "syllables": [
      { "text": "sur", "type": "weak" },
      { "text": "PASS", "type": "strong" }
    ],
    "synonyms": {
      "EXCEED": "超える",
      "OUTDO": "しのぐ",
      "BEAT": "勝る"
    },
    "distractors": ["FAIL", "LOSE", "TRAIL", "FALL BEHIND"],
    "meanings_expanded": ["上回る", "まさる", "越える"],
    "contexts": [
      {
        "parts": ["Sales will", "expectations."],
        "full": "Sales will surpass expectations.",
        "jp": "売上は予想を上回るだろう。",
        "is_correct": true
      },
      {
        "parts": ["He will", "the race."],
        "full": "He will lose the race.",
        "jp": "彼はレースに負けるだろう。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 590,
    "word": "SURRENDER",
    "meaning_core": "降伏する",
    "syllables": [
      { "text": "sur", "type": "weak" },
      { "text": "REN", "type": "strong" },
      { "text": "der", "type": "weak" }
    ],
    "synonyms": {
      "YIELD": "屈する",
      "GIVE UP": "あきらめる",
      "SUBMIT": "服従する"
    },
    "distractors": ["FIGHT", "RESIST", "WIN", "CONQUER"],
    "meanings_expanded": ["降伏する", "引き渡す", "あけ渡す"],
    "contexts": [
      {
        "parts": ["The enemy was forced to", "."],
        "full": "The enemy was forced to surrender.",
        "jp": "敵は降伏を余儀なくされた。",
        "is_correct": true
      },
      {
        "parts": ["They decided to", "back."],
        "full": "They decided to fight back.",
        "jp": "彼らは反撃することに決めた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 591,
    "word": "SUSPEND",
    "meaning_core": "一時停止する",
    "syllables": [
      { "text": "sus", "type": "weak" },
      { "text": "PEND", "type": "strong" }
    ],
    "synonyms": {
      "DELAY": "遅らせる",
      "PAUSE": "中断する",
      "HANG": "つるす"
    },
    "distractors": ["CONTINUE", "RESUME", "START", "BEGIN"],
    "meanings_expanded": ["一時停止する", "つるす", "停職にする"],
    "contexts": [
      {
        "parts": ["They agreed to", "the talks."],
        "full": "They agreed to suspend the talks.",
        "jp": "彼らは会談を一時中断することに合意した。",
        "is_correct": true
      },
      {
        "parts": ["Please", "working."],
        "full": "Please continue working.",
        "jp": "作業を続けてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 592,
    "word": "SYMBOL",
    "meaning_core": "象徴",
    "syllables": [
      { "text": "SYM", "type": "strong" },
      { "text": "bol", "type": "weak" }
    ],
    "synonyms": {
      "SIGN": "記号",
      "EMBLEM": "紋章",
      "TOKEN": "しるし"
    },
    "distractors": ["REALITY", "FACT", "THING", "OBJECT"],
    "meanings_expanded": ["象徴", "シンボル", "記号"],
    "contexts": [
      {
        "parts": ["The dove is a", "of peace."],
        "full": "The dove is a symbol of peace.",
        "jp": "鳩は平和の象徴だ。",
        "is_correct": true
      },
      {
        "parts": ["This is a red", "."],
        "full": "This is a red object.",
        "jp": "これは赤い物体だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 593,
    "word": "SYMPATHY",
    "meaning_core": "同情",
    "syllables": [
      { "text": "SYM", "type": "strong" },
      { "text": "pa", "type": "weak" },
      { "text": "thy", "type": "weak" }
    ],
    "synonyms": {
      "COMPASSION": "哀れみ",
      "PITY": "同情",
      "UNDERSTANDING": "理解"
    },
    "distractors": ["CRUELTY", "INDIFFERENCE", "HATRED", "APATHY"],
    "meanings_expanded": ["同情", "共感", "思いやり"],
    "contexts": [
      {
        "parts": ["I have deep", "for the victims."],
        "full": "I have deep sympathy for the victims.",
        "jp": "私は被害者に深い同情を持っている。",
        "is_correct": true
      },
      {
        "parts": ["He showed total", "."],
        "full": "He showed total indifference.",
        "jp": "彼は完全な無関心を示した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 594,
    "word": "SYMPTOM",
    "meaning_core": "症状",
    "syllables": [
      { "text": "SYMP", "type": "strong" },
      { "text": "tom", "type": "weak" }
    ],
    "synonyms": {
      "SIGN": "兆候",
      "INDICATION": "しるし",
      "MARK": "徴候"
    },
    "distractors": ["CURE", "REMEDY", "HEALTH", "SOLUTION"],
    "meanings_expanded": ["症状", "兆候", "しるし"],
    "contexts": [
      {
        "parts": ["Fever is a common", "of the flu."],
        "full": "Fever is a common symptom of the flu.",
        "jp": "発熱はインフルエンザの一般的な症状だ。",
        "is_correct": true
      },
      {
        "parts": ["Rest is the best", "."],
        "full": "Rest is the best cure.",
        "jp": "休息は最良の治療法だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 595,
    "word": "TACITLY",
    "meaning_core": "暗黙のうちに",
    "syllables": [
      { "text": "TAC", "type": "strong" },
      { "text": "it", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "IMPLICITLY": "暗黙に",
      "SILENTLY": "無言で"
    },
    "distractors": ["EXPLICITLY", "OPENLY", "CLEARLY", "LOUDLY"],
    "meanings_expanded": ["暗黙のうちに", "それとなく"],
    "contexts": [
      {
        "parts": ["They", "agreed to the deal."],
        "full": "They tacitly agreed to the deal.",
        "jp": "彼らは暗黙のうちにその取引に合意した。",
        "is_correct": true
      },
      {
        "parts": ["He stated his views", "."],
        "full": "He stated his views explicitly.",
        "jp": "彼は自分の見解を明確に述べた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 596,
    "word": "TACKLE",
    "meaning_core": "取り組む",
    "syllables": [
      { "text": "TACK", "type": "strong" },
      { "text": "le", "type": "weak" }
    ],
    "synonyms": {
      "ADDRESS": "対処する",
      "DEAL WITH": "扱う",
      "UNDERTAKE": "引き受ける"
    },
    "distractors": ["AVOID", "IGNORE", "DODGE", "EVADE"],
    "meanings_expanded": ["取り組む", "タックルする", "道具"],
    "contexts": [
      {
        "parts": ["We need to", "the problem immediately."],
        "full": "We need to tackle the problem immediately.",
        "jp": "私たちは直ちにその問題に取り組む必要がある。",
        "is_correct": true
      },
      {
        "parts": ["Try to", "stress."],
        "full": "Try to avoid stress.",
        "jp": "ストレスを避けるようにしなさい。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 597,
    "word": "TACTFULLY",
    "meaning_core": "巧みに",
    "syllables": [
      { "text": "TACT", "type": "strong" },
      { "text": "ful", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "DIPLOMATICALLY": "外交的に",
      "POLITELY": "丁寧に",
      "SKILLFULLY": "巧みに"
    },
    "distractors": ["RUDELY", "BLUNTLY", "CLUMSILY", "AWKWARDLY"],
    "meanings_expanded": ["巧みに", "そつなく", "機転を利かせて"],
    "contexts": [
      {
        "parts": ["She handled the situation", "."],
        "full": "She handled the situation tactfully.",
        "jp": "彼女はその状況を巧みに処理した。",
        "is_correct": true
      },
      {
        "parts": ["He spoke", "to the guest."],
        "full": "He spoke rudely to the guest.",
        "jp": "彼は客に対して失礼に話した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 598,
    "word": "TAME",
    "meaning_core": "飼い慣らされた",
    "syllables": [
      { "text": "TAME", "type": "strong" }
    ],
    "synonyms": {
      "DOMESTICATED": "家畜化された",
      "GENTLE": "おとなしい",
      "OBEDIENT": "従順な"
    },
    "distractors": ["WILD", "FERAL", "AGGRESSIVE", "SAVAGE"],
    "meanings_expanded": ["飼い慣らされた", "退屈な", "従順な"],
    "contexts": [
      {
        "parts": ["The lion was quite", "."],
        "full": "The lion was quite tame.",
        "jp": "そのライオンはかなり飼い慣らされていた。",
        "is_correct": true
      },
      {
        "parts": ["Wolves are", "animals."],
        "full": "Wolves are wild animals.",
        "jp": "狼は野生動物だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 599,
    "word": "TANGIBLE",
    "meaning_core": "明白な",
    "syllables": [
      { "text": "TAN", "type": "strong" },
      { "text": "gi", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "CONCRETE": "具体的な",
      "REAL": "実在する",
      "PALPABLE": "明白な"
    },
    "distractors": ["INTANGIBLE", "ABSTRACT", "VAGUE", "IMAGINARY"],
    "meanings_expanded": ["明白な", "触れられる", "有形の"],
    "contexts": [
      {
        "parts": ["We need", "evidence."],
        "full": "We need tangible evidence.",
        "jp": "私たちには明白な（形のある）証拠が必要だ。",
        "is_correct": true
      },
      {
        "parts": ["Love is an", "feeling."],
        "full": "Love is an intangible feeling.",
        "jp": "愛は形のない感情だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 600,
    "word": "TARIFF",
    "meaning_core": "関税",
    "syllables": [
      { "text": "TAR", "type": "strong" },
      { "text": "iff", "type": "weak" }
    ],
    "synonyms": {
      "TAX": "税金",
      "DUTY": "関税",
      "LEVY": "徴税"
    },
    "distractors": ["SUBSIDY", "GRANT", "DISCOUNT", "REFUND"],
    "meanings_expanded": ["関税", "料金表"],
    "contexts": [
      {
        "parts": ["The government imposed a", "on imports."],
        "full": "The government imposed a tariff on imports.",
        "jp": "政府は輸入品に関税を課した。",
        "is_correct": true
      },
      {
        "parts": ["Farmers received a", "."],
        "full": "Farmers received a subsidy.",
        "jp": "農家は補助金を受け取った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 601,
    "word": "TAX",
    "meaning_core": "税金",
    "syllables": [
      { "text": "TAX", "type": "strong" }
    ],
    "synonyms": {
      "LEVY": "徴税",
      "DUTY": "関税",
      "TARIFF": "税率"
    },
    "distractors": ["REFUND", "GIFT", "GRANT", "INCOME"],
    "meanings_expanded": ["税金", "重荷"],
    "contexts": [
      {
        "parts": ["We have to pay", "on our income."],
        "full": "We have to pay tax on our income.",
        "jp": "私たちは所得に対して税金を払わなければならない。",
        "is_correct": true
      },
      {
        "parts": ["He received a", "from the government."],
        "full": "He received a grant from the government.",
        "jp": "彼は政府から助成金を受け取った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 602,
    "word": "TECHNOLOGY",
    "meaning_core": "技術",
    "syllables": [
      { "text": "tech", "type": "weak" },
      { "text": "NOL", "type": "strong" },
      { "text": "o", "type": "weak" },
      { "text": "gy", "type": "weak" }
    ],
    "synonyms": {
      "ENGINEERING": "工学",
      "INNOVATION": "革新",
      "TECHNIQUE": "技法"
    },
    "distractors": ["NATURE", "TRADITION", "HISTORY", "BIOLOGY"],
    "meanings_expanded": ["科学技術", "テクノロジー"],
    "contexts": [
      {
        "parts": ["Modern", "has changed our lives."],
        "full": "Modern technology has changed our lives.",
        "jp": "現代の科学技術は私たちの生活を変えた。",
        "is_correct": true
      },
      {
        "parts": ["He studies ancient", "."],
        "full": "He studies ancient history.",
        "jp": "彼は古代史を研究している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 603,
    "word": "TEMPER",
    "meaning_core": "気性",
    "syllables": [
      { "text": "TEM", "type": "strong" },
      { "text": "per", "type": "weak" }
    ],
    "synonyms": {
      "MOOD": "機嫌",
      "DISPOSITION": "気質",
      "ANGER": "怒り"
    },
    "distractors": ["CALM", "PEACE", "SILENCE", "JOY"],
    "meanings_expanded": ["気性", "かんしゃく", "落ち着き"],
    "contexts": [
      {
        "parts": ["He has a short", "."],
        "full": "He has a short temper.",
        "jp": "彼は短気だ（気性が短い）。",
        "is_correct": true
      },
      {
        "parts": ["She lost her", "."],
        "full": "She lost her temper.",
        "jp": "彼女は腹を立てた（落ち着きを失った）。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 604,
    "word": "TEMPORARY",
    "meaning_core": "一時的な",
    "syllables": [
      { "text": "TEM", "type": "strong" },
      { "text": "po", "type": "weak" },
      { "text": "rar", "type": "weak" },
      { "text": "y", "type": "weak" }
    ],
    "synonyms": {
      "BRIEF": "短い",
      "INTERIM": "当座の",
      "MOMENTARY": "瞬間的な"
    },
    "distractors": ["PERMANENT", "ETERNAL", "LASTING", "FOREVER"],
    "meanings_expanded": ["一時的な", "仮の"],
    "contexts": [
      {
        "parts": ["This is a", "solution."],
        "full": "This is a temporary solution.",
        "jp": "これは一時的な解決策だ。",
        "is_correct": true
      },
      {
        "parts": ["We need a", "fix."],
        "full": "We need a permanent fix.",
        "jp": "私たちは恒久的な修理が必要だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 605,
    "word": "TENACIOUS",
    "meaning_core": "粘り強い",
    "syllables": [
      { "text": "te", "type": "weak" },
      { "text": "NA", "type": "strong" },
      { "text": "cious", "type": "weak" }
    ],
    "synonyms": {
      "PERSISTENT": "しつこい",
      "DETERMINED": "決意の固い",
      "STUBBORN": "頑固な"
    },
    "distractors": ["WEAK", "YIELDING", "LAZY", "FRAGILE"],
    "meanings_expanded": ["粘り強い", "執拗な", "固執する"],
    "contexts": [
      {
        "parts": ["She is a", "negotiator."],
        "full": "She is a tenacious negotiator.",
        "jp": "彼女は粘り強い交渉人だ。",
        "is_correct": true
      },
      {
        "parts": ["He gave a", "effort."],
        "full": "He gave a weak effort.",
        "jp": "彼の努力は弱々しかった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 606,
    "word": "TEND",
    "meaning_core": "～する傾向がある",
    "syllables": [
      { "text": "TEND", "type": "strong" }
    ],
    "synonyms": {
      "INCLINE": "～したいと思う",
      "BE APT": "～しがちである",
      "CARE FOR": "世話をする"
    },
    "distractors": ["AVOID", "REFUSE", "IGNORE", "NEGLECT"],
    "meanings_expanded": ["傾向がある", "世話をする"],
    "contexts": [
      {
        "parts": ["Prices", "to rise in summer."],
        "full": "Prices tend to rise in summer.",
        "jp": "夏には価格が上がる傾向がある。",
        "is_correct": true
      },
      {
        "parts": ["She", "to her garden."],
        "full": "She tends to her garden.",
        "jp": "彼女は庭の手入れをする。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 607,
    "word": "TERM",
    "meaning_core": "期間",
    "syllables": [
      { "text": "TERM", "type": "strong" }
    ],
    "synonyms": {
      "PERIOD": "期間",
      "WORD": "言葉",
      "CONDITION": "条件"
    },
    "distractors": ["SILENCE", "PAUSE", "BREAK", "GAP"],
    "meanings_expanded": ["用語", "期間", "学期", "条件"],
    "contexts": [
      {
        "parts": ["The President serves a four-year", "."],
        "full": "The President serves a four-year term.",
        "jp": "大統領の任期は4年だ。",
        "is_correct": true
      },
      {
        "parts": ["This is a technical", "."],
        "full": "This is a technical term.",
        "jp": "これは専門用語だ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 608,
    "word": "TESTIMONY",
    "meaning_core": "証言",
    "syllables": [
      { "text": "TES", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "mo", "type": "weak" },
      { "text": "ny", "type": "weak" }
    ],
    "synonyms": {
      "EVIDENCE": "証拠",
      "STATEMENT": "陳述",
      "PROOF": "証明"
    },
    "distractors": ["LIE", "SILENCE", "DENIAL", "SECRET"],
    "meanings_expanded": ["証言", "証拠"],
    "contexts": [
      {
        "parts": ["His", "convinced the jury."],
        "full": "His testimony convinced the jury.",
        "jp": "彼の証言は陪審員を納得させた。",
        "is_correct": true
      },
      {
        "parts": ["She refused to give", "."],
        "full": "She refused to give testimony.",
        "jp": "彼女は証言を拒否した。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 609,
    "word": "THERAPY",
    "meaning_core": "治療",
    "syllables": [
      { "text": "THER", "type": "strong" },
      { "text": "a", "type": "weak" },
      { "text": "py", "type": "weak" }
    ],
    "synonyms": {
      "TREATMENT": "治療",
      "CURE": "治療法",
      "HEALING": "癒やし"
    },
    "distractors": ["DISEASE", "INJURY", "HARM", "PAIN"],
    "meanings_expanded": ["療法", "治療"],
    "contexts": [
      {
        "parts": ["He is undergoing physical", "."],
        "full": "He is undergoing physical therapy.",
        "jp": "彼は理学療法を受けている。",
        "is_correct": true
      },
      {
        "parts": ["The", "caused more pain."],
        "full": "The injury caused more pain.",
        "jp": "その怪我はさらなる痛みを引き起こした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 610,
    "word": "THESIS",
    "meaning_core": "論文",
    "syllables": [
      { "text": "THE", "type": "strong" },
      { "text": "sis", "type": "weak" }
    ],
    "synonyms": {
      "DISSERTATION": "学位論文",
      "THEORY": "理論",
      "ARGUMENT": "主張"
    },
    "distractors": ["FACT", "DATA", "PROOF", "TRUTH"],
    "meanings_expanded": ["論文", "主題", "命題"],
    "contexts": [
      {
        "parts": ["She is writing her master's", "."],
        "full": "She is writing her master's thesis.",
        "jp": "彼女は修士論文を書いている。",
        "is_correct": true
      },
      {
        "parts": ["This is a proven", "."],
        "full": "This is a proven fact.",
        "jp": "これは証明された事実だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 611,
    "word": "THOROUGH",
    "meaning_core": "徹底的な",
    "syllables": [
      { "text": "THOR", "type": "strong" },
      { "text": "ough", "type": "weak" }
    ],
    "synonyms": {
      "COMPLETE": "完全な",
      "COMPREHENSIVE": "包括的な",
      "CAREFUL": "注意深い"
    },
    "distractors": ["PARTIAL", "INCOMPLETE", "CARELESS", "SUPERFICIAL"],
    "meanings_expanded": ["徹底的な", "完全な", "几帳面な"],
    "contexts": [
      {
        "parts": ["The police conducted a", "search."],
        "full": "The police conducted a thorough search.",
        "jp": "警察は徹底的な捜索を行った。",
        "is_correct": true
      },
      {
        "parts": ["He did a", "job."],
        "full": "He did a careless job.",
        "jp": "彼はいい加減な仕事をした。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 612,
    "word": "THOROUGHLY",
    "meaning_core": "徹底的に",
    "syllables": [
      { "text": "THOR", "type": "strong" },
      { "text": "ough", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "COMPLETELY": "完全に",
      "FULLY": "十分に",
      "TOTALLY": "全く"
    },
    "distractors": ["PARTIALLY", "BARELY", "SLIGHTLY", "HARDLY"],
    "meanings_expanded": ["徹底的に", "完全に"],
    "contexts": [
      {
        "parts": ["I", "enjoyed the show."],
        "full": "I thoroughly enjoyed the show.",
        "jp": "私はショーを心から（徹底的に）楽しんだ。",
        "is_correct": true
      },
      {
        "parts": ["He was", "confused."],
        "full": "He was slightly confused.",
        "jp": "彼は少し混乱していた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 613,
    "word": "THREAT",
    "meaning_core": "脅威",
    "syllables": [
      { "text": "THREAT", "type": "strong" }
    ],
    "synonyms": {
      "DANGER": "危険",
      "RISK": "リスク",
      "MENACE": "脅し"
    },
    "distractors": ["SAFETY", "PROTECTION", "SECURITY", "HELP"],
    "meanings_expanded": ["脅威", "脅し", "予兆"],
    "contexts": [
      {
        "parts": ["Pollution is a", "to the environment."],
        "full": "Pollution is a threat to the environment.",
        "jp": "汚染は環境への脅威だ。",
        "is_correct": true
      },
      {
        "parts": ["This area offers", "."],
        "full": "This area offers safety.",
        "jp": "この地域は安全を提供している。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 614,
    "word": "THREATEN",
    "meaning_core": "脅かす",
    "syllables": [
      { "text": "THREAT", "type": "strong" },
      { "text": "en", "type": "weak" }
    ],
    "synonyms": {
      "INTIMIDATE": "脅す",
      "ENDANGER": "危険にさらす",
      "WARN": "警告する"
    },
    "distractors": ["PROTECT", "SAVE", "DEFEND", "ASSURE"],
    "meanings_expanded": ["脅す", "脅かす", "～の恐れがある"],
    "contexts": [
      {
        "parts": ["Don't", "me."],
        "full": "Don't threaten me.",
        "jp": "私を脅さないで。",
        "is_correct": true
      },
      {
        "parts": ["Dark clouds", "rain."],
        "full": "Dark clouds threaten rain.",
        "jp": "暗い雲は雨の恐れがある（雨を予兆させる）。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 615,
    "word": "THROUGHOUT",
    "meaning_core": "～の至る所で",
    "syllables": [
      { "text": "through", "type": "weak" },
      { "text": "OUT", "type": "strong" }
    ],
    "synonyms": {
      "ALL OVER": "～中",
      "DURING": "～の間ずっと"
    },
    "distractors": ["OUTSIDE", "WITHOUT", "EXCEPT"],
    "meanings_expanded": ["～の至る所で", "～の間中ずっと"],
    "contexts": [
      {
        "parts": ["He traveled", "Europe."],
        "full": "He traveled throughout Europe.",
        "jp": "彼はヨーロッパ中を旅行した。",
        "is_correct": true
      },
      {
        "parts": ["She slept", "the movie."],
        "full": "She slept throughout the movie.",
        "jp": "彼女は映画の間ずっと眠っていた。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 616,
    "word": "THUS",
    "meaning_core": "したがって",
    "syllables": [
      { "text": "THUS", "type": "strong" }
    ],
    "synonyms": {
      "THEREFORE": "それゆえ",
      "SO": "だから",
      "HENCE": "したがって"
    },
    "distractors": ["BUT", "HOWEVER", "ALTHOUGH", "YET"],
    "meanings_expanded": ["したがって", "このようにして"],
    "contexts": [
      {
        "parts": ["He didn't study;", ",", "he failed."],
        "full": "He didn't study; thus, he failed.",
        "jp": "彼は勉強しなかった。したがって、彼は落ちた。",
        "is_correct": true
      },
      {
        "parts": ["It was raining;", ",", "we went out."],
        "full": "It was raining; however, we went out.",
        "jp": "雨が降っていたが、私たちは外出した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 617,
    "word": "TIGHTROPE",
    "meaning_core": "綱渡り",
    "syllables": [
      { "text": "TIGHT", "type": "strong" },
      { "text": "rope", "type": "weak" }
    ],
    "synonyms": {
      "WIRE": "ワイヤー"
    },
    "distractors": ["GROUND", "FLOOR", "ROAD", "SIDEWALK"],
    "meanings_expanded": ["綱渡り", "危ない橋"],
    "contexts": [
      {
        "parts": ["The acrobat walked the", "."],
        "full": "The acrobat walked the tightrope.",
        "jp": "アクロバットは綱渡りをした。",
        "is_correct": true
      },
      {
        "parts": ["He walked on the", "."],
        "full": "He walked on the ground.",
        "jp": "彼は地面を歩いた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 618,
    "word": "TOKEN",
    "meaning_core": "しるし",
    "syllables": [
      { "text": "TO", "type": "strong" },
      { "text": "ken", "type": "weak" }
    ],
    "synonyms": {
      "SYMBOL": "象徴",
      "SIGN": "しるし",
      "MARK": "証拠"
    },
    "distractors": ["REALITY", "FACT", "NOTHING", "VOID"],
    "meanings_expanded": ["しるし", "形見", "代用貨幣"],
    "contexts": [
      {
        "parts": ["Please accept this gift as a", "of my gratitude."],
        "full": "Please accept this gift as a token of my gratitude.",
        "jp": "感謝のしるしとしてこの贈り物を受け取ってください。",
        "is_correct": true
      },
      {
        "parts": ["This coin is a bus", "."],
        "full": "This coin is a bus token.",
        "jp": "このコインはバスの代用貨幣だ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 619,
    "word": "TOLERANCE",
    "meaning_core": "寛容",
    "syllables": [
      { "text": "TOL", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "ance", "type": "weak" }
    ],
    "synonyms": {
      "PATIENCE": "忍耐",
      "ACCEPTANCE": "受容",
      "ENDURANCE": "我慢"
    },
    "distractors": ["INTOLERANCE", "PREJUDICE", "BIGOTRY", "HATRED"],
    "meanings_expanded": ["寛容", "忍耐力", "耐性"],
    "contexts": [
      {
        "parts": ["We need more", "for others."],
        "full": "We need more tolerance for others.",
        "jp": "私たちは他人に対してもっと寛容である必要がある。",
        "is_correct": true
      },
      {
        "parts": ["He has a low", "for alcohol."],
        "full": "He has a low tolerance for alcohol.",
        "jp": "彼はアルコールへの耐性が低い（お酒に弱い）。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 620,
    "word": "TOLERATE",
    "meaning_core": "許容する",
    "syllables": [
      { "text": "TOL", "type": "strong" },
      { "text": "er", "type": "weak" },
      { "text": "ate", "type": "weak" }
    ],
    "synonyms": {
      "ENDURE": "耐える",
      "BEAR": "我慢する",
      "ALLOW": "許す"
    },
    "distractors": ["FORBID", "BAN", "PROHIBIT", "STOP"],
    "meanings_expanded": ["許容する", "大目に見る", "耐える"],
    "contexts": [
      {
        "parts": ["I cannot", "such behavior."],
        "full": "I cannot tolerate such behavior.",
        "jp": "そのような振る舞いは許容できない。",
        "is_correct": true
      },
      {
        "parts": ["Please", "smoking."],
        "full": "Please stop smoking.",
        "jp": "喫煙をやめてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 621,
    "word": "TORMENT",
    "meaning_core": "苦しめる",
    "syllables": [
      { "text": "tor", "type": "weak" },
      { "text": "MENT", "type": "strong" }
    ],
    "synonyms": {
      "TORTURE": "拷問にかける",
      "DISTRESS": "苦しめる",
      "PLAGUE": "悩ます"
    },
    "distractors": ["COMFORT", "SOOTHE", "PLEASE", "AID"],
    "meanings_expanded": ["苦しめる", "悩ます", "激痛（名詞）"],
    "contexts": [
      {
        "parts": ["Guilt continued to", "him."],
        "full": "Guilt continued to torment him.",
        "jp": "罪悪感が彼を苦しめ続けた。",
        "is_correct": true
      },
      {
        "parts": ["Music will", "you."],
        "full": "Music will soothe you.",
        "jp": "音楽はあなたを癒やすだろう。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 622,
    "word": "TOWARD",
    "meaning_core": "～の方へ",
    "syllables": [
      { "text": "TO", "type": "strong" },
      { "text": "ward", "type": "weak" }
    ],
    "synonyms": {
      "TOWARDS": "～の方へ",
      "IN THE DIRECTION OF": "～の方向へ"
    },
    "distractors": ["AWAY FROM", "AGAINST", "FROM"],
    "meanings_expanded": ["～の方へ", "～に向かって"],
    "contexts": [
      {
        "parts": ["He walked", "the door."],
        "full": "He walked toward the door.",
        "jp": "彼はドアの方へ歩いた。",
        "is_correct": true
      },
      {
        "parts": ["He ran", "the fire."],
        "full": "He ran away from the fire.",
        "jp": "彼は火事から逃げた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 623,
    "word": "TRANSFORMATION",
    "meaning_core": "変形",
    "syllables": [
      { "text": "trans", "type": "weak" },
      { "text": "for", "type": "weak" },
      { "text": "MA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "CHANGE": "変化",
      "CONVERSION": "転換",
      "ALTERATION": "変更"
    },
    "distractors": ["STABILITY", "CONSTANCY", "PRESERVATION", "SAMENESS"],
    "meanings_expanded": ["変形", "変質", "変化"],
    "contexts": [
      {
        "parts": ["The", "from caterpillar to butterfly."],
        "full": "The transformation from caterpillar to butterfly.",
        "jp": "芋虫から蝶への変身。",
        "is_correct": true
      },
      {
        "parts": ["The", "of the building remains."],
        "full": "The structure of the building remains.",
        "jp": "建物の構造は残っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 624,
    "word": "TRANSMIT",
    "meaning_core": "送る",
    "syllables": [
      { "text": "trans", "type": "weak" },
      { "text": "MIT", "type": "strong" }
    ],
    "synonyms": {
      "SEND": "送る",
      "BROADCAST": "放送する",
      "CONVEY": "伝える"
    },
    "distractors": ["RECEIVE", "GET", "KEEP", "HOLD"],
    "meanings_expanded": ["送る", "伝える", "感染させる"],
    "contexts": [
      {
        "parts": ["Mosquitoes can", "diseases."],
        "full": "Mosquitoes can transmit diseases.",
        "jp": "蚊は病気を媒介する（送る）ことがある。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the message."],
        "full": "Please receive the message.",
        "jp": "メッセージを受け取ってください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 625,
    "word": "TRANSPARENCY",
    "meaning_core": "透明性",
    "syllables": [
      { "text": "trans", "type": "weak" },
      { "text": "PAR", "type": "strong" },
      { "text": "en", "type": "weak" },
      { "text": "cy", "type": "weak" }
    ],
    "synonyms": {
      "CLARITY": "明快さ",
      "OPENNESS": "開放性",
      "CLEARNESS": "透明度"
    },
    "distractors": ["OPACITY", "SECRECY", "DARKNESS", "OBSCURITY"],
    "meanings_expanded": ["透明性", "透明度"],
    "contexts": [
      {
        "parts": ["We need more", "in government."],
        "full": "We need more transparency in government.",
        "jp": "政府にはもっと透明性が必要だ。",
        "is_correct": true
      },
      {
        "parts": ["The window lacks", "."],
        "full": "The window lacks opacity.",
        "jp": "その窓は不透明さに欠ける（透けている）。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 626,
    "word": "TREMENDOUS",
    "meaning_core": "すさまじい",
    "syllables": [
      { "text": "tre", "type": "weak" },
      { "text": "MEN", "type": "strong" },
      { "text": "dous", "type": "weak" }
    ],
    "synonyms": {
      "HUGE": "巨大な",
      "ENORMOUS": "莫大な",
      "IMMENSE": "計り知れない"
    },
    "distractors": ["TINY", "SMALL", "LITTLE", "INSIGNIFICANT"],
    "meanings_expanded": ["すさまじい", "ものすごい", "巨大な"],
    "contexts": [
      {
        "parts": ["It was a", "success."],
        "full": "It was a tremendous success.",
        "jp": "それはものすごい成功だった。",
        "is_correct": true
      },
      {
        "parts": ["It was a", "change."],
        "full": "It was a small change.",
        "jp": "それは小さな変化だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 627,
    "word": "TRESPASS",
    "meaning_core": "侵入する",
    "syllables": [
      { "text": "TRES", "type": "strong" },
      { "text": "pass", "type": "weak" }
    ],
    "synonyms": {
      "INTRUDE": "侵入する",
      "INVADE": "侵略する",
      "ENTER": "入る"
    },
    "distractors": ["LEAVE", "EXIT", "RETREAT", "WITHDRAW"],
    "meanings_expanded": ["不法侵入する", "侵害する"],
    "contexts": [
      {
        "parts": ["Do not", "on private property."],
        "full": "Do not trespass on private property.",
        "jp": "私有地に不法侵入してはいけない。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the room."],
        "full": "Please leave the room.",
        "jp": "部屋を出てください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 628,
    "word": "TRIGGER",
    "meaning_core": "引き起こす",
    "syllables": [
      { "text": "TRIG", "type": "strong" },
      { "text": "ger", "type": "weak" }
    ],
    "synonyms": {
      "CAUSE": "引き起こす",
      "ACTIVATE": "作動させる",
      "START": "始める"
    },
    "distractors": ["STOP", "PREVENT", "BLOCK", "END"],
    "meanings_expanded": ["引き起こす", "きっかけとなる", "引き金（名詞）"],
    "contexts": [
      {
        "parts": ["Smoke can", "the alarm."],
        "full": "Smoke can trigger the alarm.",
        "jp": "煙は警報を作動させる（引き起こす）可能性がある。",
        "is_correct": true
      },
      {
        "parts": ["The police pulled the", "."],
        "full": "The police pulled the trigger.",
        "jp": "警察は引き金を引いた。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 629,
    "word": "TRIUMPH",
    "meaning_core": "勝利",
    "syllables": [
      { "text": "TRI", "type": "strong" },
      { "text": "umph", "type": "weak" }
    ],
    "synonyms": {
      "VICTORY": "勝利",
      "SUCCESS": "成功",
      "CONQUEST": "征服"
    },
    "distractors": ["DEFEAT", "FAILURE", "LOSS", "DISASTER"],
    "meanings_expanded": ["勝利", "征服", "大成功"],
    "contexts": [
      {
        "parts": ["It was a great", "for our team."],
        "full": "It was a great triumph for our team.",
        "jp": "それは私たちのチームにとって大勝利だった。",
        "is_correct": true
      },
      {
        "parts": ["We suffered a bitter", "."],
        "full": "We suffered a bitter defeat.",
        "jp": "私たちは苦い敗北を喫した。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 630,
    "word": "TUITION",
    "meaning_core": "授業料",
    "syllables": [
      { "text": "tu", "type": "weak" },
      { "text": "I", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "FEES": "料金",
      "INSTRUCTION": "指導",
      "TEACHING": "教育"
    },
    "distractors": ["SALARY", "WAGE", "INCOME", "PAYMENT"],
    "meanings_expanded": ["授業料", "授業"],
    "contexts": [
      {
        "parts": ["College", "is very expensive."],
        "full": "College tuition is very expensive.",
        "jp": "大学の授業料はとても高い。",
        "is_correct": true
      },
      {
        "parts": ["He receives a monthly", "."],
        "full": "He receives a monthly salary.",
        "jp": "彼は月給を受け取っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 631,
    "word": "TYPICALLY",
    "meaning_core": "典型的に",
    "syllables": [
      { "text": "TYP", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "cal", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "USUALLY": "たいてい",
      "GENERALLY": "一般的に",
      "NORMALLY": "普通は"
    },
    "distractors": ["RARELY", "NEVER", "UNUSUALLY", "SELDOM"],
    "meanings_expanded": ["典型的に", "一般的に", "概して"],
    "contexts": [
      {
        "parts": ["He", "arrives at 9 a.m."],
        "full": "He typically arrives at 9 a.m.",
        "jp": "彼は概して（典型的には）午前9時に到着する。",
        "is_correct": true
      },
      {
        "parts": ["It never rains", "."],
        "full": "It never rains typically.",
        "jp": "決して雨は降らない。（文脈が不自然）",
        "is_correct": false
      }
    ]
  },
  {
    "id": 632,
    "word": "UNANIMOUS",
    "meaning_core": "満場一致の",
    "syllables": [
      { "text": "u", "type": "weak" },
      { "text": "NAN", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "mous", "type": "weak" }
    ],
    "synonyms": {
      "AGREED": "合意した",
      "UNITED": "団結した",
      "UNDIVIDED": "分裂していない"
    },
    "distractors": ["DIVIDED", "SPLIT", "CONFLICTING", "DIFFERENT"],
    "meanings_expanded": ["満場一致の", "異口同音の"],
    "contexts": [
      {
        "parts": ["The jury reached a", "verdict."],
        "full": "The jury reached a unanimous verdict.",
        "jp": "陪審員は満場一致の評決に達した。",
        "is_correct": true
      },
      {
        "parts": ["We had a", "opinion."],
        "full": "We had a split opinion.",
        "jp": "私たちの意見は分かれた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 633,
    "word": "UNANIMOUSLY",
    "meaning_core": "満場一致で",
    "syllables": [
      { "text": "u", "type": "weak" },
      { "text": "NAN", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "mous", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "COLLECTIVELY": "集合的に",
      "JOINTLY": "共同で"
    },
    "distractors": ["SEPARATELY", "INDIVIDUALLY", "PARTIALLY", "SINGLY"],
    "meanings_expanded": ["満場一致で"],
    "contexts": [
      {
        "parts": ["They voted", "to pass the law."],
        "full": "They voted unanimously to pass the law.",
        "jp": "彼らは満場一致でその法律を可決した。",
        "is_correct": true
      },
      {
        "parts": ["They voted", "against it."],
        "full": "They voted separately against it.",
        "jp": "彼らは別々に反対票を投じた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 634,
    "word": "UNAWARE",
    "meaning_core": "気づかない",
    "syllables": [
      { "text": "un", "type": "weak" },
      { "text": "a", "type": "weak" },
      { "text": "WARE", "type": "strong" }
    ],
    "synonyms": {
      "IGNORANT": "知らない",
      "OBLIVIOUS": "気づいていない",
      "UNCONSCIOUS": "意識していない"
    },
    "distractors": ["AWARE", "CONSCIOUS", "KNOWING", "MINDFUL"],
    "meanings_expanded": ["気づかない", "知らない"],
    "contexts": [
      {
        "parts": ["He was", "of the danger."],
        "full": "He was unaware of the danger.",
        "jp": "彼は危険に気づいていなかった。",
        "is_correct": true
      },
      {
        "parts": ["She was fully", "of the facts."],
        "full": "She was fully aware of the facts.",
        "jp": "彼女は事実を完全に知っていた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 635,
    "word": "UNDERGO",
    "meaning_core": "経験する",
    "syllables": [
      { "text": "un", "type": "weak" },
      { "text": "der", "type": "weak" },
      { "text": "GO", "type": "strong" }
    ],
    "synonyms": {
      "EXPERIENCE": "経験する",
      "ENDURE": "耐える",
      "GO THROUGH": "経験する"
    },
    "distractors": ["AVOID", "SKIP", "MISS", "ESCAPE"],
    "meanings_expanded": ["（変化・試練などを）経験する", "受ける"],
    "contexts": [
      {
        "parts": ["He must", "surgery."],
        "full": "He must undergo surgery.",
        "jp": "彼は手術を受けなければならない。",
        "is_correct": true
      },
      {
        "parts": ["We will", "the party."],
        "full": "We will enjoy the party.",
        "jp": "私たちはパーティーを楽しむだろう。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 636,
    "word": "UNEXPECTED",
    "meaning_core": "予期しない",
    "syllables": [
      { "text": "un", "type": "weak" },
      { "text": "ex", "type": "weak" },
      { "text": "PEC", "type": "strong" },
      { "text": "ted", "type": "weak" }
    ],
    "synonyms": {
      "SURPRISING": "驚くべき",
      "SUDDEN": "突然の",
      "UNFORESEEN": "予見していない"
    },
    "distractors": ["EXPECTED", "PREDICTABLE", "PLANNED", "KNOWN"],
    "meanings_expanded": ["予期しない", "思いがけない"],
    "contexts": [
      {
        "parts": ["The news was completely", "."],
        "full": "The news was completely unexpected.",
        "jp": "そのニュースは完全に予期しないものだった。",
        "is_correct": true
      },
      {
        "parts": ["The result was", "."],
        "full": "The result was expected.",
        "jp": "結果は予想通りだった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 637,
    "word": "UNIFORM",
    "meaning_core": "均一の",
    "syllables": [
      { "text": "U", "type": "strong" },
      { "text": "ni", "type": "weak" },
      { "text": "form", "type": "weak" }
    ],
    "synonyms": {
      "CONSISTENT": "一貫した",
      "SAME": "同じ",
      "EVEN": "平らな"
    },
    "distractors": ["VARIED", "DIFFERENT", "DIVERSE", "CHANGING"],
    "meanings_expanded": ["均一の", "一定の", "制服（名詞）"],
    "contexts": [
      {
        "parts": ["The temperature should be", "."],
        "full": "The temperature should be uniform.",
        "jp": "温度は均一でなければならない。",
        "is_correct": true
      },
      {
        "parts": ["The colors are", "."],
        "full": "The colors are varied.",
        "jp": "色は様々だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 638,
    "word": "UNIVERSE",
    "meaning_core": "宇宙",
    "syllables": [
      { "text": "U", "type": "strong" },
      { "text": "ni", "type": "weak" },
      { "text": "verse", "type": "weak" }
    ],
    "synonyms": {
      "COSMOS": "宇宙",
      "SPACE": "宇宙空間",
      "WORLD": "世界"
    },
    "distractors": ["EARTH", "ATOM", "PARTICLE", "NOTHING"],
    "meanings_expanded": ["宇宙", "万物"],
    "contexts": [
      {
        "parts": ["The", "is expanding."],
        "full": "The universe is expanding.",
        "jp": "宇宙は膨張している。",
        "is_correct": true
      },
      {
        "parts": ["He lives on", "."],
        "full": "He lives on Earth.",
        "jp": "彼は地球に住んでいる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 639,
    "word": "UNKNOWN",
    "meaning_core": "未知の",
    "syllables": [
      { "text": "un", "type": "weak" },
      { "text": "KNOWN", "type": "strong" }
    ],
    "synonyms": {
      "UNFAMILIAR": "なじみのない",
      "STRANGE": "奇妙な",
      "MYSTERIOUS": "神秘的な"
    },
    "distractors": ["KNOWN", "FAMOUS", "FAMILIAR", "POPULAR"],
    "meanings_expanded": ["未知の", "知られていない", "無名の"],
    "contexts": [
      {
        "parts": ["The cause of the fire is", "."],
        "full": "The cause of the fire is unknown.",
        "jp": "火事の原因は不明（未知）だ。",
        "is_correct": true
      },
      {
        "parts": ["He is a", "singer."],
        "full": "He is a famous singer.",
        "jp": "彼は有名な歌手だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 640,
    "word": "UNLESS",
    "meaning_core": "もし～でなければ",
    "syllables": [
      { "text": "un", "type": "weak" },
      { "text": "LESS", "type": "strong" }
    ],
    "synonyms": {
      "EXCEPT IF": "～の場合を除いて"
    },
    "distractors": ["IF", "BECAUSE", "SINCE", "WHEN"],
    "meanings_expanded": ["もし～でなければ"],
    "contexts": [
      {
        "parts": ["I won't go", "you go."],
        "full": "I won't go unless you go.",
        "jp": "君が行かないなら私も行かない。",
        "is_correct": true
      },
      {
        "parts": ["I will go", "it rains."],
        "full": "I will go if it rains.",
        "jp": "雨が降れば私は行く。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 641,
    "word": "UNLIKELY",
    "meaning_core": "～しそうにない",
    "syllables": [
      { "text": "un", "type": "weak" },
      { "text": "LIKE", "type": "strong" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "IMPROBABLE": "ありそうもない",
      "DOUBTFUL": "疑わしい"
    },
    "distractors": ["LIKELY", "PROBABLE", "CERTAIN", "SURE"],
    "meanings_expanded": ["～しそうにない", "ありそうもない"],
    "contexts": [
      {
        "parts": ["It is", "to rain today."],
        "full": "It is unlikely to rain today.",
        "jp": "今日は雨が降りそうにない。",
        "is_correct": true
      },
      {
        "parts": ["He is", "to succeed."],
        "full": "He is likely to succeed.",
        "jp": "彼は成功しそうだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 642,
    "word": "UNPRECEDENTED",
    "meaning_core": "前例のない",
    "syllables": [
      { "text": "un", "type": "weak" },
      { "text": "PREC", "type": "strong" },
      { "text": "e", "type": "weak" },
      { "text": "den", "type": "weak" },
      { "text": "ted", "type": "weak" }
    ],
    "synonyms": {
      "UNPARALLELED": "並ぶもののない",
      "NEW": "新しい",
      "EXTRAORDINARY": "異常な"
    },
    "distractors": ["COMMON", "USUAL", "NORMAL", "TYPICAL"],
    "meanings_expanded": ["前例のない", "空前の"],
    "contexts": [
      {
        "parts": ["This is an", "event."],
        "full": "This is an unprecedented event.",
        "jp": "これは前例のない出来事だ。",
        "is_correct": true
      },
      {
        "parts": ["It was a", "occurrence."],
        "full": "It was a common occurrence.",
        "jp": "それはよくある出来事だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 643,
    "word": "UNREST",
    "meaning_core": "不安",
    "syllables": [
      { "text": "un", "type": "weak" },
      { "text": "REST", "type": "strong" }
    ],
    "synonyms": {
      "TURMOIL": "騒乱",
      "DISTURBANCE": "騒動",
      "AGITATION": "動揺"
    },
    "distractors": ["PEACE", "CALM", "ORDER", "TRANQUILITY"],
    "meanings_expanded": ["（社会的な）不安", "動揺", "不穏"],
    "contexts": [
      {
        "parts": ["Political", "is growing."],
        "full": "Political unrest is growing.",
        "jp": "政治的不安が高まっている。",
        "is_correct": true
      },
      {
        "parts": ["The city is at", "."],
        "full": "The city is at peace.",
        "jp": "その都市は平和だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 644,
    "word": "UNUSUAL",
    "meaning_core": "普通でない",
    "syllables": [
      { "text": "un", "type": "weak" },
      { "text": "U", "type": "strong" },
      { "text": "su", "type": "weak" },
      { "text": "al", "type": "weak" }
    ],
    "synonyms": {
      "RARE": "珍しい",
      "STRANGE": "奇妙な",
      "UNCOMMON": "一般的でない"
    },
    "distractors": ["USUAL", "COMMON", "NORMAL", "TYPICAL"],
    "meanings_expanded": ["普通でない", "珍しい", "異常な"],
    "contexts": [
      {
        "parts": ["It is", "for him to be late."],
        "full": "It is unusual for him to be late.",
        "jp": "彼が遅刻するのは珍しい（普通ではない）。",
        "is_correct": true
      },
      {
        "parts": ["It is", "to see birds here."],
        "full": "It is common to see birds here.",
        "jp": "ここで鳥を見るのは一般的だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 645,
    "word": "UPHOLD",
    "meaning_core": "支持する",
    "syllables": [
      { "text": "up", "type": "weak" },
      { "text": "HOLD", "type": "strong" }
    ],
    "synonyms": {
      "SUPPORT": "支持する",
      "MAINTAIN": "維持する",
      "DEFEND": "守る"
    },
    "distractors": ["OPPOSE", "REJECT", "DESTROY", "ABOLISH"],
    "meanings_expanded": ["支持する", "（法などを）守る", "確認する"],
    "contexts": [
      {
        "parts": ["We must", "the law."],
        "full": "We must uphold the law.",
        "jp": "私たちは法律を守ら（支持し）なければならない。",
        "is_correct": true
      },
      {
        "parts": ["He decided to", "the proposal."],
        "full": "He decided to reject the proposal.",
        "jp": "彼は提案を拒否することに決めた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 646,
    "word": "URGENT",
    "meaning_core": "緊急の",
    "syllables": [
      { "text": "UR", "type": "strong" },
      { "text": "gent", "type": "weak" }
    ],
    "synonyms": {
      "PRESSING": "差し迫った",
      "CRITICAL": "重大な",
      "IMMEDIATE": "即座の"
    },
    "distractors": ["TRIVIAL", "MINOR", "UNIMPORTANT", "DELAYED"],
    "meanings_expanded": ["緊急の", "差し迫った"],
    "contexts": [
      {
        "parts": ["I have an", "message."],
        "full": "I have an urgent message.",
        "jp": "緊急のメッセージがあります。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "matter."],
        "full": "This is a trivial matter.",
        "jp": "これは些細な問題だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 647,
    "word": "USELESS",
    "meaning_core": "役に立たない",
    "syllables": [
      { "text": "USE", "type": "strong" },
      { "text": "less", "type": "weak" }
    ],
    "synonyms": {
      "FUTILE": "無駄な",
      "WORTHLESS": "価値のない",
      "INEFFECTIVE": "効果のない"
    },
    "distractors": ["USEFUL", "HELPFUL", "VALUABLE", "EFFECTIVE"],
    "meanings_expanded": ["役に立たない", "無駄な"],
    "contexts": [
      {
        "parts": ["This tool is broken and", "."],
        "full": "This tool is broken and useless.",
        "jp": "この道具は壊れていて役に立たない。",
        "is_correct": true
      },
      {
        "parts": ["His advice was very", "."],
        "full": "His advice was very useful.",
        "jp": "彼のアドバイスはとても役に立った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 648,
    "word": "UTILIZE",
    "meaning_core": "利用する",
    "syllables": [
      { "text": "U", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "lize", "type": "weak" }
    ],
    "synonyms": {
      "USE": "使う",
      "EMPLOY": "用いる",
      "EXPLOIT": "活用する"
    },
    "distractors": ["WASTE", "IGNORE", "NEGLECT", "DISCARD"],
    "meanings_expanded": ["利用する", "活用する"],
    "contexts": [
      {
        "parts": ["We should", "solar energy."],
        "full": "We should utilize solar energy.",
        "jp": "私たちは太陽エネルギーを利用すべきだ。",
        "is_correct": true
      },
      {
        "parts": ["Don't", "your time."],
        "full": "Don't waste your time.",
        "jp": "時間を無駄にするな。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 649,
    "word": "VALIDATION",
    "meaning_core": "検証",
    "syllables": [
      { "text": "val", "type": "weak" },
      { "text": "i", "type": "weak" },
      { "text": "DA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "CONFIRMATION": "確認",
      "VERIFICATION": "立証",
      "APPROVAL": "承認"
    },
    "distractors": ["REJECTION", "DENIAL", "REFUSAL", "INVALIDATION"],
    "meanings_expanded": ["検証", "確認", "承認"],
    "contexts": [
      {
        "parts": ["The results require", "."],
        "full": "The results require validation.",
        "jp": "結果には検証が必要だ。",
        "is_correct": true
      },
      {
        "parts": ["He received a letter of", "."],
        "full": "He received a letter of rejection.",
        "jp": "彼は拒絶の手紙を受け取った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 650,
    "word": "VALUE",
    "meaning_core": "尊重する",
    "syllables": [
      { "text": "VAL", "type": "strong" },
      { "text": "ue", "type": "weak" }
    ],
    "synonyms": {
      "APPRECIATE": "評価する",
      "CHERISH": "大事にする",
      "RESPECT": "尊重する"
    },
    "distractors": ["SCORN", "HATE", "DISREGARD", "IGNORE"],
    "meanings_expanded": ["尊重する", "評価する", "価値（名詞）"],
    "contexts": [
      {
        "parts": ["I", "your friendship."],
        "full": "I value your friendship.",
        "jp": "私はあなたの友情を尊重している。",
        "is_correct": true
      },
      {
        "parts": ["I", "his rudeness."],
        "full": "I hate his rudeness.",
        "jp": "私は彼の無礼さが嫌いだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 651,
    "word": "VANDALISM",
    "meaning_core": "器物損壊",
    "syllables": [
      { "text": "VAN", "type": "strong" },
      { "text": "dal", "type": "weak" },
      { "text": "ism", "type": "weak" }
    ],
    "synonyms": {
      "DESTRUCTION": "破壊",
      "DAMAGE": "損害",
      "DEFACEMENT": "汚損"
    },
    "distractors": ["CONSTRUCTION", "REPAIR", "ART", "CREATION"],
    "meanings_expanded": ["器物損壊", "芸術破壊", "公共物汚損"],
    "contexts": [
      {
        "parts": ["Graffiti is a form of", "."],
        "full": "Graffiti is a form of vandalism.",
        "jp": "落書きは器物損壊の一形態だ。",
        "is_correct": true
      },
      {
        "parts": ["He was arrested for", "."],
        "full": "He was arrested for construction.",
        "jp": "彼は建設のために逮捕された。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 652,
    "word": "VANISH",
    "meaning_core": "消える",
    "syllables": [
      { "text": "VAN", "type": "strong" },
      { "text": "ish", "type": "weak" }
    ],
    "synonyms": {
      "DISAPPEAR": "姿を消す",
      "FADE": "薄れる",
      "EVAPORATE": "蒸発する"
    },
    "distractors": ["APPEAR", "ARRIVE", "STAY", "REMAIN"],
    "meanings_expanded": ["消える", "見えなくなる", "消滅する"],
    "contexts": [
      {
        "parts": ["The magician made the rabbit", "."],
        "full": "The magician made the rabbit vanish.",
        "jp": "手品師はウサギを消した。",
        "is_correct": true
      },
      {
        "parts": ["The sun will", "in the morning."],
        "full": "The sun will appear in the morning.",
        "jp": "太陽は朝に現れる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 653,
    "word": "VAST",
    "meaning_core": "広大な",
    "syllables": [
      { "text": "VAST", "type": "strong" }
    ],
    "synonyms": {
      "HUGE": "巨大な",
      "IMMENSE": "計り知れない",
      "ENORMOUS": "莫大な"
    },
    "distractors": ["TINY", "SMALL", "NARROW", "LIMITED"],
    "meanings_expanded": ["広大な", "莫大な", "広がり"],
    "contexts": [
      {
        "parts": ["The Sahara is a", "desert."],
        "full": "The Sahara is a vast desert.",
        "jp": "サハラ砂漠は広大な砂漠だ。",
        "is_correct": true
      },
      {
        "parts": ["He has a", "amount of money."],
        "full": "He has a small amount of money.",
        "jp": "彼は少額のお金を持っている。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 654,
    "word": "VEHEMENT",
    "meaning_core": "猛烈な",
    "syllables": [
      { "text": "VE", "type": "strong" },
      { "text": "he", "type": "weak" },
      { "text": "ment", "type": "weak" }
    ],
    "synonyms": {
      "INTENSE": "激しい",
      "PASSIONATE": "情熱的な",
      "FIERCE": "どう猛な"
    },
    "distractors": ["MILD", "CALM", "GENTLE", "WEAK"],
    "meanings_expanded": ["猛烈な", "熱烈な", "激しい"],
    "contexts": [
      {
        "parts": ["He issued a", "denial."],
        "full": "He issued a vehement denial.",
        "jp": "彼は猛烈に否定した。",
        "is_correct": true
      },
      {
        "parts": ["She gave a", "smile."],
        "full": "She gave a gentle smile.",
        "jp": "彼女は優しく微笑んだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 655,
    "word": "VENTILATE",
    "meaning_core": "換気する",
    "syllables": [
      { "text": "VEN", "type": "strong" },
      { "text": "ti", "type": "weak" },
      { "text": "late", "type": "weak" }
    ],
    "synonyms": {
      "AIR": "風を通す",
      "AERATE": "通気する",
      "FRESHEN": "一新する"
    },
    "distractors": ["CLOSE", "SEAL", "BLOCK", "SUFFOCATE"],
    "meanings_expanded": ["換気する", "（感情を）出し切る"],
    "contexts": [
      {
        "parts": ["Open the window to", "the room."],
        "full": "Open the window to ventilate the room.",
        "jp": "部屋を換気するために窓を開けなさい。",
        "is_correct": true
      },
      {
        "parts": ["Please", "the door."],
        "full": "Please close the door.",
        "jp": "ドアを閉めてください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 656,
    "word": "VENUE",
    "meaning_core": "会場",
    "syllables": [
      { "text": "VEN", "type": "strong" },
      { "text": "ue", "type": "weak" }
    ],
    "synonyms": {
      "LOCATION": "場所",
      "SITE": "現場",
      "PLACE": "所"
    },
    "distractors": ["TIME", "DATE", "PERSON", "EVENT"],
    "meanings_expanded": ["会場", "開催地"],
    "contexts": [
      {
        "parts": ["The stadium is a popular", "for concerts."],
        "full": "The stadium is a popular venue for concerts.",
        "jp": "そのスタジアムはコンサートの人気会場だ。",
        "is_correct": true
      },
      {
        "parts": ["What is the", "of the meeting?"],
        "full": "What is the time of the meeting?",
        "jp": "会議の時間はいつですか？",
        "is_correct": false
      }
    ]
  },
  {
    "id": 657,
    "word": "VERBAL",
    "meaning_core": "言葉の",
    "syllables": [
      { "text": "VER", "type": "strong" },
      { "text": "bal", "type": "weak" }
    ],
    "synonyms": {
      "ORAL": "口頭の",
      "SPOKEN": "話された",
      "LINGUISTIC": "言語の"
    },
    "distractors": ["WRITTEN", "VISUAL", "NONVERBAL", "SILENT"],
    "meanings_expanded": ["言葉の", "口頭の", "動詞の"],
    "contexts": [
      {
        "parts": ["They made a", "agreement."],
        "full": "They made a verbal agreement.",
        "jp": "彼らは口頭で合意した。",
        "is_correct": true
      },
      {
        "parts": ["Please submit a", "report."],
        "full": "Please submit a written report.",
        "jp": "書面での報告書を提出してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 658,
    "word": "VIBRANT",
    "meaning_core": "活気に満ちた",
    "syllables": [
      { "text": "VI", "type": "strong" },
      { "text": "brant", "type": "weak" }
    ],
    "synonyms": {
      "LIVELY": "生き生きとした",
      "BRIGHT": "鮮やかな",
      "ENERGETIC": "精力的な"
    },
    "distractors": ["DULL", "PALE", "WEAK", "LIFELESS"],
    "meanings_expanded": ["活気に満ちた", "鮮やかな", "振動する"],
    "contexts": [
      {
        "parts": ["Tokyo is a", "city."],
        "full": "Tokyo is a vibrant city.",
        "jp": "東京は活気に満ちた都市だ。",
        "is_correct": true
      },
      {
        "parts": ["The colors were", "."],
        "full": "The colors were dull.",
        "jp": "色はくすんでいた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 659,
    "word": "VIRTUALLY",
    "meaning_core": "事実上",
    "syllables": [
      { "text": "VIR", "type": "strong" },
      { "text": "tu", "type": "weak" },
      { "text": "al", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "PRACTICALLY": "実際的に",
      "ALMOST": "ほとんど",
      "NEARLY": "ほぼ"
    },
    "distractors": ["EXACTLY", "PRECISELY", "LITERALLY", "COMPLETELY"],
    "meanings_expanded": ["事実上", "実質的に", "仮想的に"],
    "contexts": [
      {
        "parts": ["The disease has been", "eliminated."],
        "full": "The disease has been virtually eliminated.",
        "jp": "その病気は事実上根絶された。",
        "is_correct": true
      },
      {
        "parts": ["He is", "six feet tall."],
        "full": "He is exactly six feet tall.",
        "jp": "彼はちょうど6フィートの高さだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 660,
    "word": "VIRTUOUS",
    "meaning_core": "有徳な",
    "syllables": [
      { "text": "VIR", "type": "strong" },
      { "text": "tu", "type": "weak" },
      { "text": "ous", "type": "weak" }
    ],
    "synonyms": {
      "MORAL": "道徳的な",
      "GOOD": "善良な",
      "RIGHTEOUS": "正義の"
    },
    "distractors": ["WICKED", "EVIL", "BAD", "SINFUL"],
    "meanings_expanded": ["有徳な", "高潔な", "貞淑な"],
    "contexts": [
      {
        "parts": ["She lived a", "life."],
        "full": "She lived a virtuous life.",
        "jp": "彼女は高潔な人生を送った。",
        "is_correct": true
      },
      {
        "parts": ["He is a", "man."],
        "full": "He is a wicked man.",
        "jp": "彼は邪悪な男だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 661,
    "word": "VISIBLE",
    "meaning_core": "目に見える",
    "syllables": [
      { "text": "VIS", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "SEEABLE": "見える",
      "APPARENT": "明らかな",
      "CLEAR": "はっきりした"
    },
    "distractors": ["INVISIBLE", "HIDDEN", "OBSCURE", "UNSEEN"],
    "meanings_expanded": ["目に見える", "明白な"],
    "contexts": [
      {
        "parts": ["The stars are", "tonight."],
        "full": "The stars are visible tonight.",
        "jp": "今夜は星が見える。",
        "is_correct": true
      },
      {
        "parts": ["The germ is", "to the eye."],
        "full": "The germ is invisible to the eye.",
        "jp": "その細菌は目に見えない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 662,
    "word": "VITAL",
    "meaning_core": "不可欠な",
    "syllables": [
      { "text": "VI", "type": "strong" },
      { "text": "tal", "type": "weak" }
    ],
    "synonyms": {
      "ESSENTIAL": "不可欠な",
      "CRUCIAL": "極めて重要な",
      "IMPORTANT": "重要な"
    },
    "distractors": ["UNIMPORTANT", "TRIVIAL", "MINOR", "USELESS"],
    "meanings_expanded": ["不可欠な", "生命の", "活気のある"],
    "contexts": [
      {
        "parts": ["Water is", "for life."],
        "full": "Water is vital for life.",
        "jp": "水は生命にとって不可欠だ。",
        "is_correct": true
      },
      {
        "parts": ["This is a", "detail."],
        "full": "This is a trivial detail.",
        "jp": "これは些細な詳細だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 663,
    "word": "VIVID",
    "meaning_core": "鮮やかな",
    "syllables": [
      { "text": "VIV", "type": "strong" },
      { "text": "id", "type": "weak" }
    ],
    "synonyms": {
      "BRIGHT": "明るい",
      "CLEAR": "鮮明な",
      "INTENSE": "強烈な"
    },
    "distractors": ["DULL", "PALE", "FADED", "VAGUE"],
    "meanings_expanded": ["鮮やかな", "生き生きとした", "鮮明な"],
    "contexts": [
      {
        "parts": ["I have", "memories of my childhood."],
        "full": "I have vivid memories of my childhood.",
        "jp": "私には子供の頃の鮮明な記憶がある。",
        "is_correct": true
      },
      {
        "parts": ["The colors are", "."],
        "full": "The colors are dull.",
        "jp": "色はくすんでいる。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 664,
    "word": "VOCATION",
    "meaning_core": "天職",
    "syllables": [
      { "text": "vo", "type": "weak" },
      { "text": "CA", "type": "strong" },
      { "text": "tion", "type": "weak" }
    ],
    "synonyms": {
      "CALLING": "天職",
      "CAREER": "経歴",
      "JOB": "仕事"
    },
    "distractors": ["HOBBY", "PASTIME", "VACATION", "LEISURE"],
    "meanings_expanded": ["天職", "職業", "使命感"],
    "contexts": [
      {
        "parts": ["Teaching is her", "."],
        "full": "Teaching is her vocation.",
        "jp": "教えることは彼女の天職だ。",
        "is_correct": true
      },
      {
        "parts": ["I am going on", "."],
        "full": "I am going on vacation.",
        "jp": "私は休暇に出かける。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 665,
    "word": "VOID",
    "meaning_core": "無効の",
    "syllables": [
      { "text": "VOID", "type": "strong" }
    ],
    "synonyms": {
      "INVALID": "無効な",
      "EMPTY": "空の",
      "NULL": "無価値の"
    },
    "distractors": ["VALID", "FULL", "FILLED", "LEGAL"],
    "meanings_expanded": ["無効の", "空の", "空間"],
    "contexts": [
      {
        "parts": ["The contract is null and", "."],
        "full": "The contract is null and void.",
        "jp": "その契約は無効だ。",
        "is_correct": true
      },
      {
        "parts": ["The glass is", "."],
        "full": "The glass is full.",
        "jp": "グラスはいっぱいだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 666,
    "word": "VOLUNTARY",
    "meaning_core": "自発的な",
    "syllables": [
      { "text": "VOL", "type": "strong" },
      { "text": "un", "type": "weak" },
      { "text": "tar", "type": "weak" },
      { "text": "y", "type": "weak" }
    ],
    "synonyms": {
      "OPTIONAL": "任意の",
      "WILLING": "自ら進んでやる",
      "FREE": "自由な"
    },
    "distractors": ["COMPULSORY", "MANDATORY", "FORCED", "REQUIRED"],
    "meanings_expanded": ["自発的な", "任意の", "ボランティアの"],
    "contexts": [
      {
        "parts": ["Attendance is", "."],
        "full": "Attendance is voluntary.",
        "jp": "出席は任意（自発的）だ。",
        "is_correct": true
      },
      {
        "parts": ["Taxes are", "."],
        "full": "Taxes are mandatory.",
        "jp": "税金は義務だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 667,
    "word": "VULNERABILITY",
    "meaning_core": "脆弱性",
    "syllables": [
      { "text": "vul", "type": "weak" },
      { "text": "ner", "type": "weak" },
      { "text": "a", "type": "weak" },
      { "text": "BIL", "type": "strong" },
      { "text": "i", "type": "weak" },
      { "text": "ty", "type": "weak" }
    ],
    "synonyms": {
      "WEAKNESS": "弱点",
      "FRAGILITY": "もろさ",
      "SUSCEPTIBILITY": "感受性"
    },
    "distractors": ["STRENGTH", "SECURITY", "SAFETY", "RESILIENCE"],
    "meanings_expanded": ["脆弱性", "傷つきやすさ", "弱点"],
    "contexts": [
      {
        "parts": ["The system has a security", "."],
        "full": "The system has a security vulnerability.",
        "jp": "そのシステムにはセキュリティ上の脆弱性がある。",
        "is_correct": true
      },
      {
        "parts": ["He showed great", "."],
        "full": "He showed great strength.",
        "jp": "彼は素晴らしい強さを見せた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 668,
    "word": "VULNERABLE",
    "meaning_core": "傷つきやすい",
    "syllables": [
      { "text": "VUL", "type": "strong" },
      { "text": "ner", "type": "weak" },
      { "text": "a", "type": "weak" },
      { "text": "ble", "type": "weak" }
    ],
    "synonyms": {
      "WEAK": "弱い",
      "DEFENSELESS": "無防備な",
      "SUSCEPTIBLE": "影響を受けやすい"
    },
    "distractors": ["STRONG", "SAFE", "SECURE", "PROTECTED"],
    "meanings_expanded": ["傷つきやすい", "攻撃されやすい", "弱い"],
    "contexts": [
      {
        "parts": ["Children are", "to infection."],
        "full": "Children are vulnerable to infection.",
        "jp": "子供は感染症にかかりやすい（脆弱だ）。",
        "is_correct": true
      },
      {
        "parts": ["The castle is", "."],
        "full": "The castle is secure.",
        "jp": "城は安全だ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 669,
    "word": "WARRANT",
    "meaning_core": "令状",
    "syllables": [
      { "text": "WAR", "type": "strong" },
      { "text": "rant", "type": "weak" }
    ],
    "synonyms": {
      "AUTHORIZATION": "認可",
      "PERMIT": "許可証",
      "LICENSE": "免許"
    },
    "distractors": ["DENIAL", "REFUSAL", "BAN", "PROHIBITION"],
    "meanings_expanded": ["令状", "正当な理由", "保証する（動詞）"],
    "contexts": [
      {
        "parts": ["The police have a search", "."],
        "full": "The police have a search warrant.",
        "jp": "警察は捜索令状を持っている。",
        "is_correct": true
      },
      {
        "parts": ["There is no", "for concern."],
        "full": "There is no need for concern.",
        "jp": "心配する必要はない。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 670,
    "word": "WEALTHY",
    "meaning_core": "裕福な",
    "syllables": [
      { "text": "WEAL", "type": "strong" },
      { "text": "thy", "type": "weak" }
    ],
    "synonyms": {
      "RICH": "金持ちの",
      "AFFLUENT": "裕福な",
      "PROSPEROUS": "繁栄している"
    },
    "distractors": ["POOR", "NEEDY", "BROKE", "DESTITUTE"],
    "meanings_expanded": ["裕福な", "豊富な"],
    "contexts": [
      {
        "parts": ["He is a", "businessman."],
        "full": "He is a wealthy businessman.",
        "jp": "彼は裕福な実業家だ。",
        "is_correct": true
      },
      {
        "parts": ["She grew up in a", "family."],
        "full": "She grew up in a poor family.",
        "jp": "彼女は貧しい家庭で育った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 671,
    "word": "WEARY",
    "meaning_core": "疲れた",
    "syllables": [
      { "text": "WEA", "type": "strong" },
      { "text": "ry", "type": "weak" }
    ],
    "synonyms": {
      "TIRED": "疲れた",
      "EXHAUSTED": "疲れ切った",
      "FATIGUED": "疲労した"
    },
    "distractors": ["ENERGETIC", "FRESH", "ACTIVE", "LIVELY"],
    "meanings_expanded": ["疲れた", "飽き飽きした"],
    "contexts": [
      {
        "parts": ["I am", "after a long day."],
        "full": "I am weary after a long day.",
        "jp": "長い一日を終えて私は疲れている。",
        "is_correct": true
      },
      {
        "parts": ["He felt", "and ready to go."],
        "full": "He felt fresh and ready to go.",
        "jp": "彼は気分が爽快で、出かける準備ができていた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 672,
    "word": "WHEREAS",
    "meaning_core": "～である一方",
    "syllables": [
      { "text": "where", "type": "weak" },
      { "text": "AS", "type": "strong" }
    ],
    "synonyms": {
      "WHILE": "～の一方で",
      "ALTHOUGH": "～だけれども"
    },
    "distractors": ["BECAUSE", "SINCE", "THEREFORE", "SO"],
    "meanings_expanded": ["～である一方", "ところが"],
    "contexts": [
      {
        "parts": ["He likes coffee,", "I like tea."],
        "full": "He likes coffee, whereas I like tea.",
        "jp": "彼はコーヒーが好きだが、私はお茶が好きだ。",
        "is_correct": true
      },
      {
        "parts": ["It was raining,", "we stayed home."],
        "full": "It was raining, so we stayed home.",
        "jp": "雨が降っていたので、私たちは家にいた。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 673,
    "word": "WILLING",
    "meaning_core": "～するのをいとわない",
    "syllables": [
      { "text": "WIL", "type": "strong" },
      { "text": "ling", "type": "weak" }
    ],
    "synonyms": {
      "READY": "準備ができている",
      "EAGER": "熱望している",
      "PREPARED": "覚悟ができている"
    },
    "distractors": ["UNWILLING", "RELUCTANT", "REFUSING", "HESITANT"],
    "meanings_expanded": ["～するのをいとわない", "自発的な"],
    "contexts": [
      {
        "parts": ["I am", "to help you."],
        "full": "I am willing to help you.",
        "jp": "喜んであなたを助けます（助けるのをいとわない）。",
        "is_correct": true
      },
      {
        "parts": ["He was", "to apologize."],
        "full": "He was reluctant to apologize.",
        "jp": "彼は謝るのを渋った。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 674,
    "word": "WITHDRAW",
    "meaning_core": "引き出す",
    "syllables": [
      { "text": "with", "type": "weak" },
      { "text": "DRAW", "type": "strong" }
    ],
    "synonyms": {
      "REMOVE": "取り除く",
      "RETREAT": "撤退する",
      "EXTRACT": "引き抜く"
    },
    "distractors": ["DEPOSIT", "INSERT", "ENTER", "ADVANCE"],
    "meanings_expanded": ["引き出す", "撤退する", "取り下げる"],
    "contexts": [
      {
        "parts": ["I need to", "money from the bank."],
        "full": "I need to withdraw money from the bank.",
        "jp": "私は銀行からお金を引き出す必要がある。",
        "is_correct": true
      },
      {
        "parts": ["Please", "your card."],
        "full": "Please insert your card.",
        "jp": "カードを挿入してください。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 675,
    "word": "WITHER",
    "meaning_core": "しぼむ",
    "syllables": [
      { "text": "WITH", "type": "strong" },
      { "text": "er", "type": "weak" }
    ],
    "synonyms": {
      "FADE": "あせる",
      "DRY UP": "干からびる",
      "DECAY": "衰える"
    },
    "distractors": ["BLOOM", "FLOURISH", "GROW", "THRIVE"],
    "meanings_expanded": ["しぼむ", "枯れる", "衰える"],
    "contexts": [
      {
        "parts": ["The flowers began to", "."],
        "full": "The flowers began to wither.",
        "jp": "花がしぼみ始めた。",
        "is_correct": true
      },
      {
        "parts": ["The roses will", "in spring."],
        "full": "The roses will bloom in spring.",
        "jp": "バラは春に咲く。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 676,
    "word": "WITHIN",
    "meaning_core": "～以内に",
    "syllables": [
      { "text": "with", "type": "weak" },
      { "text": "IN", "type": "strong" }
    ],
    "synonyms": {
      "INSIDE": "内側に",
      "IN": "中に"
    },
    "distractors": ["OUTSIDE", "BEYOND", "WITHOUT"],
    "meanings_expanded": ["～以内に", "～の範囲内で"],
    "contexts": [
      {
        "parts": ["Please finish", "an hour."],
        "full": "Please finish within an hour.",
        "jp": "1時間以内に終わらせてください。",
        "is_correct": true
      },
      {
        "parts": ["It is", "my power."],
        "full": "It is beyond my power.",
        "jp": "それは私の力の及ばないことだ。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 677,
    "word": "WORTH",
    "meaning_core": "価値がある",
    "syllables": [
      { "text": "WORTH", "type": "strong" }
    ],
    "synonyms": {
      "VALUE": "価値",
      "MERIT": "長所"
    },
    "distractors": ["WORTHLESS", "USELESS", "WASTE"],
    "meanings_expanded": ["～の価値がある", "価値"],
    "contexts": [
      {
        "parts": ["This book is", "reading."],
        "full": "This book is worth reading.",
        "jp": "この本は読む価値がある。",
        "is_correct": true
      },
      {
        "parts": ["It is", "trying."],
        "full": "It is worth trying.",
        "jp": "試してみる価値はある。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 678,
    "word": "YIELD",
    "meaning_core": "収穫",
    "syllables": [
      { "text": "YIELD", "type": "strong" }
    ],
    "synonyms": {
      "PRODUCE": "産出する",
      "HARVEST": "収穫",
      "SURRENDER": "降伏する"
    },
    "distractors": ["KEEP", "RETAIN", "HOLD", "RESIST"],
    "meanings_expanded": ["収穫", "産出する", "屈する"],
    "contexts": [
      {
        "parts": ["The farm has a high", "."],
        "full": "The farm has a high yield.",
        "jp": "その農場は収穫量が多い。",
        "is_correct": true
      },
      {
        "parts": ["He refused to", "."],
        "full": "He refused to yield.",
        "jp": "彼は屈することを拒んだ。",
        "is_correct": true
      }
    ]
  },
  {
    "id": 679,
    "word": "ZEALOUS",
    "meaning_core": "熱心な",
    "syllables": [
      { "text": "ZEAL", "type": "strong" },
      { "text": "ous", "type": "weak" }
    ],
    "synonyms": {
      "ENTHUSIASTIC": "熱狂的な",
      "EAGER": "熱望している",
      "PASSIONATE": "情熱的な"
    },
    "distractors": ["APATHETIC", "INDIFFERENT", "BORED", "LAZY"],
    "meanings_expanded": ["熱心な", "熱狂的な"],
    "contexts": [
      {
        "parts": ["He is a", "supporter."],
        "full": "He is a zealous supporter.",
        "jp": "彼は熱心な支持者だ。",
        "is_correct": true
      },
      {
        "parts": ["She was", "about the news."],
        "full": "She was indifferent about the news.",
        "jp": "彼女はそのニュースに無関心だった。",
        "is_correct": false
      }
    ]
  },
  {
    "id": 680,
    "word": "ZEALOUSLY",
    "meaning_core": "熱心に",
    "syllables": [
      { "text": "ZEAL", "type": "strong" },
      { "text": "ous", "type": "weak" },
      { "text": "ly", "type": "weak" }
    ],
    "synonyms": {
      "ENTHUSIASTICALLY": "熱狂的に",
      "EAGERLY": "熱心に"
    },
    "distractors": ["APATHETICALLY", "INDIFFERENTLY", "LAZILY"],
    "meanings_expanded": ["熱心に", "熱狂的に"],
    "contexts": [
      {
        "parts": ["They worked", "to finish the project."],
        "full": "They worked zealously to finish the project.",
        "jp": "彼らはプロジェクトを終わらせるために熱心に働いた。",
        "is_correct": true
      },
      {
        "parts": ["He listened", "."],
        "full": "He listened indifferently.",
        "jp": "彼は無関心に聞いた。",
        "is_correct": false
      }
    ]
  }
];