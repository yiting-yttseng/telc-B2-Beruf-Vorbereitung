// Wortfamilien Tracker — data.js
// 新增單字只需在此檔案加入新物件，介面自動更新。
// 欄位說明：
//   id        唯一編號（數字，不重複）
//   word      德文單字
//   artikel   冠詞（動詞留空）
//   root      詞根分組名稱（如 "schließen", "sicht"）
//   rootMeaning 詞根意思（只需第一個同組字填寫即可，其餘相同）
//   zh        中文翻譯
//   en        英文翻譯
//   breakdown 拆解記憶說明（HTML 可用 → 表示箭頭）
//   collocations 常見搭配 [ {de, zh} ]
//   synonyms  同義字 []
//   related   同根字 []（點擊可搜尋）
//   examples  例句 [ {de, zh} ]

const WORDS = [

  // ══════════════════════════════════════════════
  //  詞根：schließen（關、鎖）
  // ══════════════════════════════════════════════

  {
    id: 1,
    word: "ausschließen",
    artikel: "",
    root: "schließen",
    rootMeaning: "關、鎖（to close / lock）",
    zh: "排除、把……關在外面",
    en: "to exclude, to lock out",
    breakdown: "aus-（向外、out）+ schließen（關、鎖）\n→ 把門鎖上讓人出不去 → 「排除在外」",
    collocations: [
      { de: "jemanden aus etw. (Dat.) ausschließen", zh: "把某人排除在某事之外" },
      { de: "eine Möglichkeit ausschließen", zh: "排除一種可能性" },
      { de: "Fehler ausschließen", zh: "排除錯誤" },
      { de: "nicht ausgeschlossen sein", zh: "不能排除（某可能性）" }
    ],
    synonyms: ["aussondern", "eliminieren", "ausklammern"],
    related: ["einschließen", "abschließen", "aufschließen", "verschließen", "schließen"],
    examples: [
      { de: "Wir können technische Fehler nicht vollständig ausschließen.", zh: "我們無法完全排除技術錯誤。" },
      { de: "Er wurde von der Prüfung ausgeschlossen.", zh: "他被取消了考試資格。" }
    ]
  },

  {
    id: 2,
    word: "einschließen",
    artikel: "",
    root: "schließen",
    rootMeaning: "關、鎖（to close / lock）",
    zh: "包含、把……關進去",
    en: "to include, to lock in",
    breakdown: "ein-（向內、in）+ schließen（關、鎖）\n→ 把東西鎖在裡面 → 「包含在內」",
    collocations: [
      { de: "etw. einschließen", zh: "包含某事物" },
      { de: "jemanden einschließen", zh: "把某人關起來" },
      { de: "alle Kosten einschließen", zh: "包含所有費用" }
    ],
    synonyms: ["beinhalten", "umfassen", "enthalten"],
    related: ["ausschließen", "abschließen", "aufschließen", "verschließen", "schließen"],
    examples: [
      { de: "Der Preis schließt alle Gebühren ein.", zh: "價格包含所有費用。" },
      { de: "Die Regelung schließt auch Teilzeitkräfte ein.", zh: "這項規定也包含兼職員工。" }
    ]
  },

  {
    id: 3,
    word: "abschließen",
    artikel: "",
    root: "schließen",
    rootMeaning: "關、鎖（to close / lock）",
    zh: "鎖上、完成、簽訂（合約）",
    en: "to lock up, to conclude, to sign (a contract)",
    breakdown: "ab-（完全、徹底）+ schließen（關）\n→ 徹底關上 → 引申為「完成、結束、簽訂」",
    collocations: [
      { de: "einen Vertrag abschließen", zh: "簽訂合約" },
      { de: "eine Ausbildung abschließen", zh: "完成職業培訓" },
      { de: "die Tür abschließen", zh: "把門鎖上" },
      { de: "eine Versicherung abschließen", zh: "投保、簽保險合約" }
    ],
    synonyms: ["beenden", "vollenden", "unterzeichnen"],
    related: ["ausschließen", "einschließen", "aufschließen", "verschließen", "schließen"],
    examples: [
      { de: "Sie hat ihre Ausbildung erfolgreich abgeschlossen.", zh: "她成功完成了職業培訓。" },
      { de: "Bitte schließen Sie die Tür ab, wenn Sie gehen.", zh: "離開時請把門鎖上。" }
    ]
  },

  {
    id: 4,
    word: "aufschließen",
    artikel: "",
    root: "schließen",
    rootMeaning: "關、鎖（to close / lock）",
    zh: "開鎖、打開",
    en: "to unlock, to open up",
    breakdown: "auf-（打開、up）+ schließen（鎖）\n→ 把鎖打開 → 「開鎖」",
    collocations: [
      { de: "die Tür aufschließen", zh: "開門（用鑰匙）" },
      { de: "das Büro aufschließen", zh: "開辦公室的門" }
    ],
    synonyms: ["öffnen", "entsperren"],
    related: ["ausschließen", "einschließen", "abschließen", "verschließen", "schließen"],
    examples: [
      { de: "Kannst du bitte die Tür aufschließen?", zh: "你能幫忙開一下門嗎？" }
    ]
  },

  {
    id: 5,
    word: "schließen",
    artikel: "",
    root: "schließen",
    rootMeaning: "關、鎖（to close / lock）",
    zh: "關閉、鎖上；推斷",
    en: "to close, to lock; to conclude (logically)",
    breakdown: "基本字根。\n→ 字面：關閉、鎖上\n→ 引申：從某事推斷出結論（daraus schließen）",
    collocations: [
      { de: "die Tür schließen", zh: "關門" },
      { de: "daraus schließen, dass …", zh: "由此推斷……" },
      { de: "Freundschaft schließen", zh: "結交朋友" }
    ],
    synonyms: ["zumachen", "schlussfolgern"],
    related: ["ausschließen", "einschließen", "abschließen", "aufschließen", "verschließen"],
    examples: [
      { de: "Das Geschäft schließt um 20 Uhr.", zh: "店鋪在晚上八點關門。" },
      { de: "Daraus lässt sich schließen, dass das Modell fehlerhaft ist.", zh: "由此可以推斷該模型有誤。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：sicht（看、視線）
  // ══════════════════════════════════════════════

  {
    id: 6,
    word: "Voraussicht",
    artikel: "die",
    root: "sicht",
    rootMeaning: "看、視線（sight / view）",
    zh: "預見、遠見",
    en: "foresight, forethought",
    breakdown: "voraus-（提前、in advance）+ Sicht（視線）\n→ 提前往前看 → 「預見、遠見」\n注意：Voraussicht（預見）vs. Vorsicht（小心）— 意思不同！",
    collocations: [
      { de: "mit Voraussicht handeln", zh: "有遠見地行動" },
      { de: "aller Voraussicht nach", zh: "按照預期；照理說（固定短語）" },
      { de: "Voraussicht haben / zeigen", zh: "展現遠見" }
    ],
    synonyms: ["Weitsicht", "Weitblick", "Umsicht"],
    related: ["Vorsicht", "Rücksicht", "Hinsicht", "Übersicht", "Absicht", "Aussicht", "Einsicht", "Zuversicht"],
    examples: [
      { de: "Aller Voraussicht nach wird das Projekt im Juni abgeschlossen.", zh: "按照預期，該項目將在六月完成。" },
      { de: "Mit mehr Voraussicht hätten wir dieses Problem vermeiden können.", zh: "如果有更好的預見性，我們本可以避免這個問題。" }
    ]
  },

  {
    id: 7,
    word: "Vorsicht",
    artikel: "die",
    root: "sicht",
    rootMeaning: "看、視線（sight / view）",
    zh: "小心、謹慎",
    en: "caution, care",
    breakdown: "vor-（前方）+ Sicht（視線）\n→ 往前看清楚再走 → 「小心、謹慎」\n常見於警告標語：Vorsicht! = 小心！",
    collocations: [
      { de: "Vorsicht walten lassen", zh: "保持謹慎（正式用法）" },
      { de: "zur Vorsicht raten", zh: "建議謹慎行事" },
      { de: "Vorsicht, Stufe!", zh: "小心台階！（警告）" },
      { de: "aus Vorsicht", zh: "出於謹慎" }
    ],
    synonyms: ["Vorsichtigkeit", "Behutsamkeit"],
    related: ["Voraussicht", "Rücksicht", "Hinsicht", "Übersicht", "Absicht", "Aussicht", "Einsicht", "Zuversicht"],
    examples: [
      { de: "Vorsicht ist besser als Nachsicht.", zh: "謹慎勝過事後後悔。（諺語）" },
      { de: "Aus Vorsicht sollten Sie einen Arzt aufsuchen.", zh: "出於謹慎，您應該去看醫生。" }
    ]
  },

  {
    id: 8,
    word: "Rücksicht",
    artikel: "die",
    root: "sicht",
    rootMeaning: "看、視線（sight / view）",
    zh: "體諒、顧慮",
    en: "consideration, regard",
    breakdown: "Rück-（向後）+ Sicht（視線）\n→ 往後看、顧及他人 → 「體諒、顧慮」",
    collocations: [
      { de: "Rücksicht nehmen auf (Akk.)", zh: "顧及……、考慮到……" },
      { de: "keine Rücksicht nehmen", zh: "不顧及他人" },
      { de: "aus Rücksicht auf", zh: "出於對……的考慮" },
      { de: "rücksichtslos", zh: "不顧他人的、魯莽的" }
    ],
    synonyms: ["Rücksichtnahme", "Achtsamkeit"],
    related: ["Voraussicht", "Vorsicht", "Hinsicht", "Übersicht", "Absicht", "Aussicht", "Einsicht", "Zuversicht"],
    examples: [
      { de: "Bitte nehmen Sie Rücksicht auf Ihre Kollegen.", zh: "請顧及您的同事。" },
      { de: "Aus Rücksicht auf kranke Mitarbeiter wurde die Veranstaltung abgesagt.", zh: "出於對病假員工的考慮，活動被取消了。" }
    ]
  },

  {
    id: 9,
    word: "Hinsicht",
    artikel: "die",
    root: "sicht",
    rootMeaning: "看、視線（sight / view）",
    zh: "方面、角度",
    en: "respect, regard, aspect",
    breakdown: "hin-（往某方向）+ Sicht（視線）\n→ 往某個方向看 → 「從某方面來看」\n幾乎只用於固定短語 in … Hinsicht",
    collocations: [
      { de: "in dieser Hinsicht", zh: "在這方面" },
      { de: "in jeder Hinsicht", zh: "在各方面" },
      { de: "in beruflicher Hinsicht", zh: "在職業方面" },
      { de: "in gewisser Hinsicht", zh: "在某種程度上" }
    ],
    synonyms: ["Hinsichtlich", "Bezug", "Aspekt"],
    related: ["Voraussicht", "Vorsicht", "Rücksicht", "Übersicht", "Absicht", "Aussicht", "Einsicht", "Zuversicht"],
    examples: [
      { de: "In dieser Hinsicht unterscheidet sich unser Modell von den anderen.", zh: "在這方面，我們的模型與其他模型有所不同。" },
      { de: "Die Zusammenarbeit war in jeder Hinsicht erfolgreich.", zh: "合作在各方面都很成功。" }
    ]
  },

  {
    id: 10,
    word: "Übersicht",
    artikel: "die",
    root: "sicht",
    rootMeaning: "看、視線（sight / view）",
    zh: "概覽、總覽",
    en: "overview, summary",
    breakdown: "über-（從上方）+ Sicht（視線）\n→ 從上往下俯視 → 「概覽、全局掌握」",
    collocations: [
      { de: "eine Übersicht geben / erstellen", zh: "提供概覽 / 製作一覽表" },
      { de: "die Übersicht behalten / verlieren", zh: "保持 / 失去全局掌握" },
      { de: "zur Übersicht", zh: "供參考、一覽用（標題語）" }
    ],
    synonyms: ["Zusammenfassung", "Überblick"],
    related: ["Voraussicht", "Vorsicht", "Rücksicht", "Hinsicht", "Absicht", "Aussicht", "Einsicht", "Zuversicht"],
    examples: [
      { de: "Die folgende Tabelle gibt eine Übersicht über die Ergebnisse.", zh: "下表提供了結果的概覽。" },
      { de: "Bei so vielen Aufgaben verliert man leicht die Übersicht.", zh: "任務這麼多，很容易失去全局掌握。" }
    ]
  },

  {
    id: 11,
    word: "Absicht",
    artikel: "die",
    root: "sicht",
    rootMeaning: "看、視線（sight / view）",
    zh: "意圖、目的",
    en: "intention, purpose",
    breakdown: "ab-（鎖定、針對）+ Sicht（視線）\n→ 視線鎖定某目標 → 「意圖、目的」",
    collocations: [
      { de: "die Absicht haben zu + Inf.", zh: "有意圖要做……" },
      { de: "mit Absicht", zh: "故意地" },
      { de: "ohne Absicht", zh: "無意地" },
      { de: "gute Absichten haben", zh: "出於好意" }
    ],
    synonyms: ["Intention", "Vorhaben", "Ziel"],
    related: ["Voraussicht", "Vorsicht", "Rücksicht", "Hinsicht", "Übersicht", "Aussicht", "Einsicht", "Zuversicht"],
    examples: [
      { de: "Er hat die Datei mit Absicht gelöscht.", zh: "他故意刪除了那個檔案。" },
      { de: "Ich hatte nicht die Absicht, Sie zu beleidigen.", zh: "我無意冒犯您。" }
    ]
  },

  {
    id: 12,
    word: "Aussicht",
    artikel: "die",
    root: "sicht",
    rootMeaning: "看、視線（sight / view）",
    zh: "前景、展望；景色",
    en: "prospect, outlook; view",
    breakdown: "aus-（向外）+ Sicht（視線）\n→ 往外看出去 → 「展望未來」或「窗外景色」",
    collocations: [
      { de: "gute Aussichten haben", zh: "有良好的前景" },
      { de: "Aussichten auf Erfolg", zh: "成功的前景" },
      { de: "in Aussicht stellen", zh: "預示、承諾（某事）" },
      { de: "eine schöne Aussicht", zh: "美麗的景色（字面）" }
    ],
    synonyms: ["Perspektive", "Chance", "Blick"],
    related: ["Voraussicht", "Vorsicht", "Rücksicht", "Hinsicht", "Übersicht", "Absicht", "Einsicht", "Zuversicht"],
    examples: [
      { de: "Die Aussichten auf dem Arbeitsmarkt sind derzeit gut.", zh: "目前就業市場的前景良好。" },
      { de: "Der Chef stellte eine Gehaltserhöhung in Aussicht.", zh: "老闆暗示有可能加薪。" }
    ]
  },

  {
    id: 13,
    word: "Einsicht",
    artikel: "die",
    root: "sicht",
    rootMeaning: "看、視線（sight / view）",
    zh: "理解、洞察；認識錯誤",
    en: "insight, understanding; admission of fault",
    breakdown: "ein-（向內）+ Sicht（視線）\n→ 看進去、看透 → 「洞察、理解」\n→ 引申：承認自己的錯誤（zur Einsicht kommen）",
    collocations: [
      { de: "zur Einsicht kommen", zh: "醒悟、認識到（自己的錯誤）" },
      { de: "Einsicht zeigen", zh: "表現出悔悟、認錯" },
      { de: "Einsicht in etw. (Akk.) nehmen", zh: "查閱某文件（正式用語）" }
    ],
    synonyms: ["Erkenntnis", "Verständnis", "Einblick"],
    related: ["Voraussicht", "Vorsicht", "Rücksicht", "Hinsicht", "Übersicht", "Absicht", "Aussicht", "Zuversicht"],
    examples: [
      { de: "Er zeigte keine Einsicht und wiederholte denselben Fehler.", zh: "他毫無悔意，重複了同樣的錯誤。" },
      { de: "Diese Erfahrung hat mir eine wichtige Einsicht gebracht.", zh: "這段經歷讓我獲得了重要的領悟。" }
    ]
  },

  {
    id: 14,
    word: "Zuversicht",
    artikel: "die",
    root: "sicht",
    rootMeaning: "看、視線（sight / view）",
    zh: "信心、樂觀",
    en: "confidence, optimism",
    breakdown: "zu-（朝向、趨向）+ Versicht（確信的視野）\n→ 往前看並有把握 → 「信心、樂觀」\n→ zuversichtlich（形容詞）= 充滿信心的",
    collocations: [
      { de: "mit Zuversicht", zh: "充滿信心地" },
      { de: "Zuversicht ausstrahlen", zh: "散發信心" },
      { de: "voller Zuversicht sein", zh: "充滿信心" },
      { de: "zuversichtlich sein / bleiben", zh: "保持樂觀" }
    ],
    synonyms: ["Optimismus", "Vertrauen", "Selbstvertrauen"],
    related: ["Voraussicht", "Vorsicht", "Rücksicht", "Hinsicht", "Übersicht", "Absicht", "Aussicht", "Einsicht"],
    examples: [
      { de: "Trotz der Schwierigkeiten blickt das Team mit Zuversicht in die Zukunft.", zh: "儘管困難重重，團隊仍樂觀地展望未來。" },
      { de: "Seine Zuversicht hat uns alle motiviert.", zh: "他的信心激勵了我們所有人。" }
    ]
  }

];
