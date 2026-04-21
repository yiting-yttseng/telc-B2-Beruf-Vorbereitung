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
  },

// ══════════════════════════════════════════════
  //  詞根：dauer（持續、持久）
  // ══════════════════════════════════════════════

  {
    id: 15,
    word: "bedauerlich",
    artikel: "",
    root: "dauer",
    rootMeaning: "持續、持久（duration / lasting）",
    zh: "令人遺憾的、可惜的",
    en: "regrettable, unfortunate",
    breakdown: "be- + dauern（使人感到遺憾）+ -lich（形容詞字尾）\n→ dauern 在此是另一個意思：「讓人覺得可惜」\n→ Es dauert mich = 我感到遺憾（古語，現代保留在 bedauern）",
    collocations: [
      { de: "Es ist bedauerlich, dass …", zh: "很遺憾的是……" },
      { de: "ein bedauerlicher Fehler", zh: "一個令人遺憾的錯誤" },
      { de: "bedauerlicherweise", zh: "遺憾地、可惜地（副詞）" }
    ],
    synonyms: ["schade", "leider", "unglücklicherweise"],
    related: ["bedauern", "ausdauernd", "dauerhaft", "andauern"],
    examples: [
      { de: "Es ist bedauerlich, dass das Projekt abgebrochen wurde.", zh: "很遺憾這個項目被中止了。" },
      { de: "Bedauerlicherweise konnte er nicht teilnehmen.", zh: "很可惜他無法參加。" }
    ]
  },

  {
    id: 16,
    word: "ausdauernd",
    artikel: "",
    root: "dauer",
    rootMeaning: "持續、持久（duration / lasting）",
    zh: "有毅力的、持之以恆的",
    en: "persevering, persistent, enduring",
    breakdown: "aus-（徹底、一路到底）+ dauern（持續）+ -d（形容詞字尾，相當於 -ing）\n→ 「一直持續下去的」→ 有毅力、不放棄",
    collocations: [
      { de: "ausdauernd arbeiten", zh: "持之以恆地工作" },
      { de: "ein ausdauernder Mensch", zh: "一個有毅力的人" },
      { de: "Ausdauer haben", zh: "有耐力、有毅力（名詞用法）" }
    ],
    synonyms: ["beharrlich", "zielstrebig", "durchhaltefähig", "hartnäckig"],
    related: ["bedauerlich", "dauerhaft", "andauern", "Ausdauer"],
    examples: [
      { de: "Für eine Promotion braucht man eine ausdauernde Arbeitsweise.", zh: "攻讀博士需要持之以恆的工作方式。" },
      { de: "Sie hat ausdauernd für das Zertifikat gelernt.", zh: "她持之以恆地為這個證書備考。" }
    ]
  },

  {
    id: 17,
    word: "dauerhaft",
    artikel: "",
    root: "dauer",
    rootMeaning: "持續、持久（duration / lasting）",
    zh: "持久的、長久的",
    en: "lasting, permanent, durable",
    breakdown: "Dauer（持續、時間長度）+ -haft（具有……特性的）\n→ 「具有持久性質的」",
    collocations: [
      { de: "eine dauerhafte Lösung", zh: "一個持久的解決方案" },
      { de: "dauerhaft beschäftigt sein", zh: "長期受雇" },
      { de: "dauerhaft wirken", zh: "產生持久效果" }
    ],
    synonyms: ["langfristig", "beständig", "nachhaltig"],
    related: ["bedauerlich", "ausdauernd", "andauern", "Ausdauer"],
    examples: [
      { de: "Wir suchen nach einer dauerhaften Lösung für dieses Problem.", zh: "我們正在尋找這個問題的持久解決方案。" },
      { de: "Die Simulationsergebnisse zeigen eine dauerhafte Wirkung.", zh: "模擬結果顯示出持久的效果。" }
    ]
  },

  {
    id: 18,
    word: "andauern",
    artikel: "",
    root: "dauer",
    rootMeaning: "持續、持久（duration / lasting）",
    zh: "持續、繼續進行",
    en: "to continue, to persist, to last",
    breakdown: "an-（持續進行）+ dauern（持續）\n→ 「一直在持續中」，強調狀態還在進行",
    collocations: [
      { de: "Die Verhandlungen dauern an.", zh: "談判仍在繼續。" },
      { de: "andauernd (副詞)", zh: "持續地、不斷地" },
      { de: "ein andauerndes Problem", zh: "一個持續存在的問題" }
    ],
    synonyms: ["anhalten", "fortdauern", "weiterhin bestehen"],
    related: ["bedauerlich", "ausdauernd", "dauerhaft", "Ausdauer"],
    examples: [
      { de: "Der Konflikt dauert bereits seit Monaten an.", zh: "這場衝突已持續數月。" },
      { de: "Die Unsicherheit im Projekt dauert an.", zh: "項目中的不確定性持續存在。" }
    ]
  },

// ══════════════════════════════════════════════
  //  詞根：nehmen（拿取）
  // ══════════════════════════════════════════════

  {
    id: 19,
    word: "entgegennehmen",
    artikel: "",
    root: "nehmen",
    rootMeaning: "拿取（to take）",
    zh: "接受、收取（正式）",
    en: "to receive, to accept",
    breakdown: "entgegen-（朝向、迎向）+ nehmen（拿取）\n→ 伸手迎向對方來拿 → 「接收、收取」",
    collocations: [
      { de: "eine Bestellung entgegennehmen", zh: "接受訂單" },
      { de: "einen Anruf entgegennehmen", zh: "接聽電話" },
      { de: "Beschwerden entgegennehmen", zh: "受理投訴" }
    ],
    synonyms: ["annehmen", "empfangen", "in Empfang nehmen"],
    related: ["annehmen", "aufnehmen", "übernehmen", "wahrnehmen", "teilnehmen", "nehmen"],
    examples: [
      { de: "Die Sekretärin nimmt alle Bestellungen telefonisch entgegen.", zh: "秘書負責電話接收所有訂單。" },
      { de: "Wir nehmen Ihre Beschwerde gerne entgegen.", zh: "我們很樂意受理您的投訴。" }
    ]
  },

  {
    id: 20,
    word: "annehmen",
    artikel: "",
    root: "nehmen",
    rootMeaning: "拿取（to take）",
    zh: "接受；假設、推測",
    en: "to accept; to assume",
    breakdown: "an-（靠近）+ nehmen（拿取）\n→ 把東西拿到自己身邊\n→ 引申：「假設某事為真」",
    collocations: [
      { de: "ein Angebot annehmen", zh: "接受一個提案" },
      { de: "einen Auftrag annehmen", zh: "接受一項任務" },
      { de: "Ich nehme an, dass …", zh: "我假設／我推測……" }
    ],
    synonyms: ["akzeptieren", "vermuten", "voraussetzen"],
    related: ["entgegennehmen", "aufnehmen", "übernehmen", "wahrnehmen", "teilnehmen"],
    examples: [
      { de: "Ich nehme an, dass die Simulation korrekt ist.", zh: "我推測模擬結果是正確的。" },
      { de: "Sie hat das Jobangebot angenommen.", zh: "她接受了那份工作邀約。" }
    ]
  },

  {
    id: 21,
    word: "aufnehmen",
    artikel: "",
    root: "nehmen",
    rootMeaning: "拿取（to take）",
    zh: "錄取、吸收；錄音、錄影",
    en: "to record; to absorb; to admit",
    breakdown: "auf-（向上拿起）+ nehmen（拿取）\n→ 把東西拿起來 → 引申為「錄製」或「納入」",
    collocations: [
      { de: "in die Liste aufnehmen", zh: "納入清單" },
      { de: "ein Video / ein Interview aufnehmen", zh: "錄製影片／採訪" },
      { de: "Kontakt aufnehmen", zh: "取得聯繫" }
    ],
    synonyms: ["registrieren", "erfassen", "aufzeichnen"],
    related: ["entgegennehmen", "annehmen", "übernehmen", "wahrnehmen", "teilnehmen"],
    examples: [
      { de: "Wir nehmen Ihren Antrag gerne in die Bearbeitung auf.", zh: "我們很樂意將您的申請納入處理程序。" },
      { de: "Die Konferenz wurde vollständig aufgenommen.", zh: "會議被完整錄製下來。" }
    ]
  },

  {
    id: 22,
    word: "übernehmen",
    artikel: "",
    root: "nehmen",
    rootMeaning: "拿取（to take）",
    zh: "承擔、接手、接管",
    en: "to take over, to take on",
    breakdown: "über-（從上方越過）+ nehmen（拿取）\n→ 從別人手上接過來 → 「接手、承擔」",
    collocations: [
      { de: "Verantwortung übernehmen", zh: "承擔責任" },
      { de: "eine Aufgabe übernehmen", zh: "接手一項任務" },
      { de: "die Leitung übernehmen", zh: "接管領導職位" }
    ],
    synonyms: ["übernehmen", "sich annehmen", "in die Hand nehmen"],
    related: ["entgegennehmen", "annehmen", "aufnehmen", "wahrnehmen", "teilnehmen"],
    examples: [
      { de: "Er hat die Verantwortung für das Projekt übernommen.", zh: "他承擔了這個項目的責任。" },
      { de: "Die neue Kollegin übernimmt ab Montag die Abteilungsleitung.", zh: "新同事從週一起接管部門領導職位。" }
    ]
  },

  {
    id: 23,
    word: "wahrnehmen",
    artikel: "",
    root: "nehmen",
    rootMeaning: "拿取（to take）",
    zh: "感知、察覺；把握（機會）",
    en: "to perceive, to notice; to make use of",
    breakdown: "wahr（真實的）+ nehmen（拿取）\n→ 「真實地把某事拿進意識裡」= 感知、察覺\n→ 引申：把握機會（eine Chance wahrnehmen）",
    collocations: [
      { de: "eine Veränderung wahrnehmen", zh: "察覺到一個變化" },
      { de: "einen Termin wahrnehmen", zh: "赴約、出席預約" },
      { de: "seine Interessen wahrnehmen", zh: "維護自身利益" }
    ],
    synonyms: ["bemerken", "erkennen", "spüren"],
    related: ["entgegennehmen", "annehmen", "aufnehmen", "übernehmen", "teilnehmen"],
    examples: [
      { de: "Ich habe eine deutliche Verbesserung in den Ergebnissen wahrgenommen.", zh: "我察覺到結果有明顯改善。" },
      { de: "Bitte nehmen Sie den Beratungstermin wahr.", zh: "請務必出席諮詢預約。" }
    ]
  },

  {
    id: 24,
    word: "teilnehmen",
    artikel: "",
    root: "nehmen",
    rootMeaning: "拿取（to take）",
    zh: "參加、參與",
    en: "to participate, to take part",
    breakdown: "Teil（部分）+ nehmen（拿取）\n→ 「拿走一份份額」= 參與其中",
    collocations: [
      { de: "an einem Kurs teilnehmen", zh: "參加課程" },
      { de: "an der Prüfung teilnehmen", zh: "參加考試" },
      { de: "die Teilnahme", zh: "參與（名詞）" }
    ],
    synonyms: ["mitmachen", "sich beteiligen", "mitwirken"],
    related: ["entgegennehmen", "annehmen", "aufnehmen", "übernehmen", "wahrnehmen"],
    examples: [
      { de: "Ich nehme an dem Deutschkurs der Bundesagentur für Arbeit teil.", zh: "我參加了聯邦就業局的德語課程。" },
      { de: "An der Konferenz haben über 50 Personen teilgenommen.", zh: "超過五十人參加了這場會議。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：teilen（分、分配）
  // ══════════════════════════════════════════════

  {
    id: 25,
    word: "erteilen",
    artikel: "",
    root: "teilen",
    rootMeaning: "分、分配（to share / divide）",
    zh: "給予、授予（正式）",
    en: "to grant, to give formally, to issue",
    breakdown: "er-（達成某結果）+ teilen（分）\n→ 「分出去並完成交付」= 正式給予\n→ 方向：由上往下授予",
    collocations: [
      { de: "eine Auskunft erteilen", zh: "提供資訊" },
      { de: "eine Genehmigung erteilen", zh: "給予許可" },
      { de: "einen Auftrag erteilen", zh: "下達任務" },
      { de: "eine Absage erteilen", zh: "正式拒絕" }
    ],
    synonyms: ["geben", "gewähren", "ausstellen"],
    related: ["verteilen", "mitteilen", "aufteilen", "einteilen", "zuteilen"],
    examples: [
      { de: "Der Vorgesetzte erteilte dem Team einen neuen Auftrag.", zh: "上司向團隊下達了一項新任務。" },
      { de: "Die Behörde hat die Genehmigung erteilt.", zh: "該機關已給予許可。" }
    ]
  },

  {
    id: 26,
    word: "verteilen",
    artikel: "",
    root: "teilen",
    rootMeaning: "分、分配（to share / divide）",
    zh: "分發、分配、散布",
    en: "to distribute, to hand out, to spread",
    breakdown: "ver-（向四面八方擴散）+ teilen（分）\n→ 「向四方分散出去」= 分發給多人",
    collocations: [
      { de: "Aufgaben verteilen", zh: "分配任務" },
      { de: "Materialien verteilen", zh: "發放材料" },
      { de: "gleichmäßig verteilen", zh: "均勻分配" }
    ],
    synonyms: ["austeilen", "aufteilen", "ausgeben"],
    related: ["erteilen", "mitteilen", "aufteilen", "einteilen", "zuteilen"],
    examples: [
      { de: "Die Aufgaben wurden gleichmäßig im Team verteilt.", zh: "任務在團隊中被均勻分配。" },
      { de: "Die Materialien werden am Eingang verteilt.", zh: "材料將在入口處發放。" }
    ]
  },

  {
    id: 27,
    word: "mitteilen",
    artikel: "",
    root: "teilen",
    rootMeaning: "分、分配（to share / divide）",
    zh: "告知、通知",
    en: "to inform, to notify, to communicate",
    breakdown: "mit-（一起）+ teilen（分享）\n→ 「把資訊一起分給對方」= 告知",
    collocations: [
      { de: "jemandem etw. mitteilen", zh: "告知某人某事" },
      { de: "hiermit teilen wir mit, dass …", zh: "茲通知您……（書信用語）" },
      { de: "die Mitteilung", zh: "通知、訊息（名詞）" }
    ],
    synonyms: ["informieren", "benachrichtigen", "bekanntgeben"],
    related: ["erteilen", "verteilen", "aufteilen", "einteilen", "zuteilen"],
    examples: [
      { de: "Hiermit teilen wir Ihnen mit, dass Ihre Bewerbung eingegangen ist.", zh: "茲通知您，您的申請已收到。" },
      { de: "Bitte teilen Sie uns Ihre neue Adresse mit.", zh: "請告知我們您的新地址。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：stellen（放置）
  // ══════════════════════════════════════════════

  {
    id: 28,
    word: "ausstellen",
    artikel: "",
    root: "stellen",
    rootMeaning: "放置（to place / put）",
    zh: "開具（文件）；展示（展品）",
    en: "to issue (documents); to exhibit",
    breakdown: "aus-（向外）+ stellen（放置）\n→ 「向外放出去」\n→ 文件：讓文件正式對外生效 = 開具\n→ 物品：把東西放出來給人看 = 展示",
    collocations: [
      { de: "ein Zeugnis / einen Ausweis ausstellen", zh: "開具證書／身分證件" },
      { de: "eine Rechnung ausstellen", zh: "開具發票" },
      { de: "Produkte ausstellen", zh: "展示產品" }
    ],
    synonyms: ["ausfertigen", "zeigen", "präsentieren"],
    related: ["erstellen", "vorstellen", "darstellen", "herstellen", "feststellen", "einstellen", "aufstellen"],
    examples: [
      { de: "Das Arbeitsamt stellt nach Antragstellung einen Bescheid aus.", zh: "就業服務中心在申請後開具一份通知書。" },
      { de: "Das Unternehmen stellt bei der Messe neue Produkte aus.", zh: "公司在展覽會上展示新產品。" }
    ]
  },

  {
    id: 29,
    word: "erstellen",
    artikel: "",
    root: "stellen",
    rootMeaning: "放置（to place / put）",
    zh: "製作、建立（文件、報告）",
    en: "to create, to draw up, to produce",
    breakdown: "er-（達成某結果）+ stellen（放置）\n→ 「把它建立起來完成放好」= 製作、建立\n注意：erstellen = 從無到有創建；ausstellen = 正式開具或展示",
    collocations: [
      { de: "einen Bericht / ein Protokoll erstellen", zh: "製作報告／會議記錄" },
      { de: "ein Konzept erstellen", zh: "制定概念" },
      { de: "eine Datei erstellen", zh: "建立檔案" }
    ],
    synonyms: ["anfertigen", "verfassen", "ausarbeiten"],
    related: ["ausstellen", "vorstellen", "darstellen", "herstellen", "feststellen", "einstellen", "aufstellen"],
    examples: [
      { de: "Für die Simulation habe ich einen detaillierten Bericht erstellt.", zh: "為了這次模擬，我製作了一份詳細的報告。" },
      { de: "Das Team erstellt regelmäßig Protokolle nach jedem Meeting.", zh: "團隊在每次會議後定期製作會議記錄。" }
    ]
  },

  {
    id: 30,
    word: "feststellen",
    artikel: "",
    root: "stellen",
    rootMeaning: "放置（to place / put）",
    zh: "確認、發現、查明",
    en: "to determine, to find out, to establish",
    breakdown: "fest（牢固地）+ stellen（放置）\n→ 「牢固地確立某事」= 確認事實",
    collocations: [
      { de: "einen Fehler feststellen", zh: "發現一個錯誤" },
      { de: "feststellen, dass …", zh: "查明……" },
      { de: "die Feststellung", zh: "確認、發現（名詞）" }
    ],
    synonyms: ["herausfinden", "ermitteln", "erkennen"],
    related: ["ausstellen", "erstellen", "vorstellen", "darstellen", "herstellen", "einstellen", "aufstellen"],
    examples: [
      { de: "Wir haben festgestellt, dass die Simulation einen systematischen Fehler enthält.", zh: "我們發現模擬中存在系統性錯誤。" },
      { de: "Es wurde festgestellt, dass die Lieferung beschädigt war.", zh: "查明貨物在送達時已受損。" }
    ]
  },

  {
    id: 31,
    word: "herstellen",
    artikel: "",
    root: "stellen",
    rootMeaning: "放置（to place / put）",
    zh: "製造、生產",
    en: "to produce, to manufacture",
    breakdown: "her-（把成品帶過來）+ stellen（放置）\n→ 「把東西做出來放在這裡」= 製造",
    collocations: [
      { de: "ein Produkt herstellen", zh: "製造一個產品" },
      { de: "Kontakt herstellen", zh: "建立聯繫" },
      { de: "der Hersteller", zh: "製造商（名詞）" }
    ],
    synonyms: ["produzieren", "fertigen", "erzeugen"],
    related: ["ausstellen", "erstellen", "vorstellen", "darstellen", "feststellen", "einstellen", "aufstellen"],
    examples: [
      { de: "Das Unternehmen stellt Bauteile für die Automobilindustrie her.", zh: "該公司為汽車業製造零組件。" },
      { de: "Wir möchten einen direkten Kontakt zum Lieferanten herstellen.", zh: "我們希望與供應商建立直接聯繫。" }
    ]
  },

  {
    id: 32,
    word: "einstellen",
    artikel: "",
    root: "stellen",
    rootMeaning: "放置（to place / put）",
    zh: "僱用；調整；停止",
    en: "to hire; to adjust; to cease",
    breakdown: "ein-（放進去）+ stellen（放置）\n→ 把人放進公司 = 僱用\n→ 把設備調整到位 = 調整\n→ 把活動放進停止狀態 = 停止\n⚠️ 一個字三個意思，靠搭配判斷！",
    collocations: [
      { de: "neue Mitarbeiter einstellen", zh: "僱用新員工" },
      { de: "den Alarm einstellen", zh: "設定鬧鐘" },
      { de: "die Produktion einstellen", zh: "停止生產" }
    ],
    synonyms: ["anstellen / engagieren（僱用）", "regulieren（調整）", "aufhören（停止）"],
    related: ["ausstellen", "erstellen", "vorstellen", "darstellen", "herstellen", "feststellen", "aufstellen"],
    examples: [
      { de: "Das Unternehmen stellt dieses Jahr zehn neue Ingenieure ein.", zh: "公司今年招聘十名新工程師。" },
      { de: "Die Fabrik hat die Produktion vorübergehend eingestellt.", zh: "工廠暫時停止了生產。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：führen（帶領、引導）
  // ══════════════════════════════════════════════

  {
    id: 33,
    word: "durchführen",
    artikel: "",
    root: "führen",
    rootMeaning: "帶領、引導（to lead / guide）",
    zh: "執行、實施、進行",
    en: "to carry out, to conduct, to implement",
    breakdown: "durch-（穿越、從頭到尾）+ führen（帶領）\n→ 「從頭帶到尾、貫徹執行」= 執行、實施",
    collocations: [
      { de: "ein Experiment durchführen", zh: "進行實驗" },
      { de: "eine Maßnahme durchführen", zh: "實施措施" },
      { de: "eine Prüfung durchführen", zh: "舉行考試" }
    ],
    synonyms: ["umsetzen", "realisieren", "ausführen"],
    related: ["ausführen", "einführen", "anführen", "vorführen", "zurückführen", "führen"],
    examples: [
      { de: "Das Forschungsteam hat eine neue Simulationsmethode erfolgreich durchgeführt.", zh: "研究團隊成功執行了一種新的模擬方法。" },
      { de: "Die geplanten Maßnahmen wurden pünktlich durchgeführt.", zh: "預定的措施按時實施了。" }
    ]
  },

  {
    id: 34,
    word: "ausführen",
    artikel: "",
    root: "führen",
    rootMeaning: "帶領、引導（to lead / guide）",
    zh: "執行；說明、闡述",
    en: "to execute, to carry out; to elaborate",
    breakdown: "aus-（向外帶出去）+ führen（帶領）\n→ 「帶出去完成」= 執行\n→ 引申：把想法帶出來說清楚 = 闡述",
    collocations: [
      { de: "einen Auftrag ausführen", zh: "執行一項任務" },
      { de: "etw. näher ausführen", zh: "進一步說明某事" },
      { de: "die Ausführung", zh: "執行；款式（名詞）" }
    ],
    synonyms: ["umsetzen", "erläutern", "erklären"],
    related: ["durchführen", "einführen", "anführen", "vorführen", "zurückführen", "führen"],
    examples: [
      { de: "Könnten Sie diesen Punkt bitte näher ausführen?", zh: "您能進一步說明這一點嗎？" },
      { de: "Der Auftrag wurde fristgerecht ausgeführt.", zh: "任務在期限內完成執行。" }
    ]
  },

  {
    id: 35,
    word: "einführen",
    artikel: "",
    root: "führen",
    rootMeaning: "帶領、引導（to lead / guide）",
    zh: "引進、介紹；進口",
    en: "to introduce, to implement; to import",
    breakdown: "ein-（帶進來）+ führen（帶領）\n→ 「把東西帶進來」= 引進、介紹",
    collocations: [
      { de: "ein neues System einführen", zh: "引進新系統" },
      { de: "jemanden in etw. einführen", zh: "帶領某人進入某領域" },
      { de: "Waren einführen", zh: "進口貨物" }
    ],
    synonyms: ["einleiten", "implementieren", "importieren"],
    related: ["durchführen", "ausführen", "anführen", "vorführen", "zurückführen", "führen"],
    examples: [
      { de: "Das Unternehmen führt ein neues Qualitätssystem ein.", zh: "公司引進了新的品質系統。" },
      { de: "Neue Mitarbeiter werden in ihre Aufgaben eingeführt.", zh: "新員工被帶入熟悉各自的任務。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：sprechen（說話）
  // ══════════════════════════════════════════════

  {
    id: 36,
    word: "absprechen",
    artikel: "",
    root: "sprechen",
    rootMeaning: "說話（to speak）",
    zh: "事先協商、說好",
    en: "to arrange, to agree in advance",
    breakdown: "ab-（完成、結束）+ sprechen（說話）\n→ 「把事情說好定下來」= 事先協商\n→ die Absprache（名詞）= 事先約定",
    collocations: [
      { de: "einen Termin absprechen", zh: "協商確定時間" },
      { de: "in Absprache mit jemandem", zh: "與某人協調後" },
      { de: "ohne Absprache", zh: "沒有事先協調" }
    ],
    synonyms: ["vereinbaren", "abstimmen", "klären"],
    related: ["aussprechen", "ansprechen", "besprechen", "versprechen", "widersprechen"],
    examples: [
      { de: "In Absprache mit der Teamleiterin habe ich den Termin verschoben.", zh: "在與團隊領導協調後，我把會議改期了。" },
      { de: "Ohne vorherige Absprache sollte man keine wichtigen Entscheidungen treffen.", zh: "不應在沒有事先協調的情況下做出重要決定。" }
    ]
  },

  {
    id: 37,
    word: "besprechen",
    artikel: "",
    root: "sprechen",
    rootMeaning: "說話（to speak）",
    zh: "討論、商議",
    en: "to discuss, to talk over",
    breakdown: "be-（施加動作於對象）+ sprechen（說話）\n→ 「對某事說話、針對某事討論」= 討論",
    collocations: [
      { de: "ein Thema besprechen", zh: "討論一個主題" },
      { de: "die Ergebnisse besprechen", zh: "討論結果" },
      { de: "sich besprechen mit", zh: "與某人商量" }
    ],
    synonyms: ["diskutieren", "erörtern", "beraten"],
    related: ["absprechen", "aussprechen", "ansprechen", "versprechen", "widersprechen"],
    examples: [
      { de: "Wir besprechen die Simulationsergebnisse im nächsten Meeting.", zh: "我們在下次會議中討論模擬結果。" },
      { de: "Ich muss das zuerst mit meiner Vorgesetzten besprechen.", zh: "我必須先與我的上司商量這件事。" }
    ]
  },

  {
    id: 38,
    word: "versprechen",
    artikel: "",
    root: "sprechen",
    rootMeaning: "說話（to speak）",
    zh: "承諾；說錯話（sich versprechen）",
    en: "to promise; to make a slip of the tongue",
    breakdown: "ver-（①完成交付 ②做錯偏離）+ sprechen（說話）\n→ 說出去並兌現 = 承諾\n→ sich versprechen = 說偏了、說錯 = 口誤\n⚠️ 有無 sich 意思完全不同！",
    collocations: [
      { de: "jemandem etw. versprechen", zh: "向某人承諾某事" },
      { de: "ein Versprechen halten / brechen", zh: "遵守／違背承諾" },
      { de: "sich versprechen", zh: "說錯話（口誤）" }
    ],
    synonyms: ["zusagen", "zusichern（承諾）"],
    related: ["absprechen", "aussprechen", "ansprechen", "besprechen", "widersprechen"],
    examples: [
      { de: "Er hat versprochen, pünktlich zu sein.", zh: "他承諾準時到。" },
      { de: "Entschuldigung, ich habe mich versprochen.", zh: "抱歉，我說錯了。" }
    ]
  },

  {
    id: 39,
    word: "widersprechen",
    artikel: "",
    root: "sprechen",
    rootMeaning: "說話（to speak）",
    zh: "反駁、反對",
    en: "to contradict, to object",
    breakdown: "wider-（反對、相反方向）+ sprechen（說話）\n→ 「說相反的話」= 反駁",
    collocations: [
      { de: "jemandem widersprechen", zh: "反駁某人（Dativ！）" },
      { de: "einer Aussage widersprechen", zh: "反駁一個說法" },
      { de: "sich widersprechen", zh: "自相矛盾" }
    ],
    synonyms: ["protestieren", "einwenden", "ablehnen"],
    related: ["absprechen", "aussprechen", "ansprechen", "besprechen", "versprechen"],
    examples: [
      { de: "Ich muss Ihrer Einschätzung hier widersprechen.", zh: "在這一點上，我必須反駁您的評估。" },
      { de: "Die beiden Berichte widersprechen sich.", zh: "這兩份報告互相矛盾。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：gleich（相等）
  // ══════════════════════════════════════════════

  {
    id: 40,
    word: "begleichen",
    artikel: "",
    root: "gleich",
    rootMeaning: "相等（equal）",
    zh: "結清、償還（款項）",
    en: "to settle, to pay off, to clear",
    breakdown: "be-（施加動作於對象）+ gleichen（使相等）\n→ 「讓雙方帳目相等、把差距補平」= 結清\n想像天平：欠款讓天平不平，begleichen 把天平補回平衡",
    collocations: [
      { de: "eine Rechnung begleichen", zh: "結清帳單" },
      { de: "eine Schuld begleichen", zh: "償還債務" },
      { de: "den Betrag begleichen", zh: "結清金額" }
    ],
    synonyms: ["bezahlen", "tilgen", "abbezahlen"],
    related: ["ausgleichen", "vergleichen", "angleichen", "gleichen"],
    examples: [
      { de: "Die Firma hat die offene Rechnung innerhalb von 30 Tagen beglichen.", zh: "公司在30天內結清了未付的帳單。" },
      { de: "Er bat um eine Ratenzahlung, da er die Schuld nicht sofort begleichen konnte.", zh: "他請求分期付款，因為無法立即償還債務。" }
    ]
  },

  {
    id: 41,
    word: "ausgleichen",
    artikel: "",
    root: "gleich",
    rootMeaning: "相等（equal）",
    zh: "補償、平衡、彌補",
    en: "to compensate, to balance out, to offset",
    breakdown: "aus-（完全、徹底）+ gleichen（使相等）\n→ 「把差距完全補平」= 補償、取得平衡\n與 begleichen 同根，但 ausgleichen 更強調「補償差距」",
    collocations: [
      { de: "einen Nachteil ausgleichen", zh: "彌補一個劣勢" },
      { de: "Verluste ausgleichen", zh: "彌補損失" },
      { de: "der Ausgleich", zh: "補償、平衡（名詞）" }
    ],
    synonyms: ["kompensieren", "wettmachen", "abfedern"],
    related: ["begleichen", "vergleichen", "angleichen", "gleichen"],
    examples: [
      { de: "Sport kann einen guten Ausgleich zum Büroalltag schaffen.", zh: "運動可以為辦公室日常生活提供良好的平衡。" },
      { de: "Die Überstunden werden durch Freizeitausgleich ausgeglichen.", zh: "加班時間以補休方式補償。" }
    ]
  },

  {
    id: 42,
    word: "vergleichen",
    artikel: "",
    root: "gleich",
    rootMeaning: "相等（equal）",
    zh: "比較",
    en: "to compare",
    breakdown: "ver-（把兩者放在一起衡量）+ gleichen（使相等）\n→ 「把兩者放在一起看是否相等」= 比較",
    collocations: [
      { de: "etw. mit etw. vergleichen", zh: "把某事與某事比較" },
      { de: "zum Vergleich", zh: "作為比較" },
      { de: "im Vergleich zu", zh: "與……相比" }
    ],
    synonyms: ["gegenüberstellen", "abwägen"],
    related: ["begleichen", "ausgleichen", "angleichen", "gleichen"],
    examples: [
      { de: "Im Vergleich zum letzten Jahr sind die Ergebnisse deutlich besser.", zh: "與去年相比，結果明顯更好。" },
      { de: "Man sollte die Angebote sorgfältig vergleichen.", zh: "應該仔細比較各個報價。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：weisen（指示、指引）
  // ══════════════════════════════════════════════

  {
    id: 43,
    word: "verweisen",
    artikel: "",
    root: "weisen",
    rootMeaning: "指示、指引（to point / direct）",
    zh: "指引、轉介、引用",
    en: "to refer to, to direct to",
    breakdown: "ver-（強化、完成）+ weisen（指引）\n→ 「明確地指向某處」= 引用或把人轉介過去",
    collocations: [
      { de: "auf eine Regelung verweisen", zh: "引用規定" },
      { de: "jemanden an eine Abteilung verweisen", zh: "把某人轉介到某部門" },
      { de: "der Verweis", zh: "引用；警告（名詞）" }
    ],
    synonyms: ["hinweisen auf", "Bezug nehmen auf"],
    related: ["hinweisen", "nachweisen", "ausweisen", "überweisen", "anweisen"],
    examples: [
      { de: "In diesem Fall verweisen wir auf unsere allgemeinen Geschäftsbedingungen.", zh: "在這種情況下，我們引用我們的一般交易條款。" },
      { de: "Die Kollegin wurde an die zuständige Abteilung verwiesen.", zh: "這位同事被轉介到負責的部門。" }
    ]
  },

  {
    id: 44,
    word: "hinweisen",
    artikel: "",
    root: "weisen",
    rootMeaning: "指示、指引（to point / direct）",
    zh: "提醒、指出、告知",
    en: "to point out, to draw attention to",
    breakdown: "hin-（朝那個方向）+ weisen（指引）\n→ 「指向那裡讓人注意」= 提醒、指出",
    collocations: [
      { de: "auf ein Problem hinweisen", zh: "指出一個問題" },
      { de: "darauf hinweisen, dass …", zh: "指出……" },
      { de: "der Hinweis", zh: "提示、線索（名詞）" }
    ],
    synonyms: ["aufmerksam machen auf", "erwähnen", "betonen"],
    related: ["verweisen", "nachweisen", "ausweisen", "überweisen", "anweisen"],
    examples: [
      { de: "Ich möchte darauf hinweisen, dass die Frist am Freitag endet.", zh: "我想指出，截止日期是週五。" },
      { de: "Der Bericht weist auf mögliche Fehlerquellen hin.", zh: "報告指出了可能的錯誤來源。" }
    ]
  },

  {
    id: 45,
    word: "nachweisen",
    artikel: "",
    root: "weisen",
    rootMeaning: "指示、指引（to pull / direct）",
    zh: "證明、提供證明",
    en: "to prove, to demonstrate, to provide evidence",
    breakdown: "nach-（跟在後面、追蹤）+ weisen（指引）\n→ 「追蹤指出以證明」= 用證據證明\n→ der Nachweis = 證明文件",
    collocations: [
      { de: "etw. nachweisen", zh: "證明某事" },
      { de: "Kenntnisse nachweisen", zh: "證明具備知識能力" },
      { de: "der Nachweis", zh: "證明文件（名詞）" }
    ],
    synonyms: ["beweisen", "belegen", "dokumentieren"],
    related: ["verweisen", "hinweisen", "ausweisen", "überweisen", "anweisen"],
    examples: [
      { de: "Sie müssen Ihre Sprachkenntnisse durch ein Zertifikat nachweisen.", zh: "您必須透過證書證明您的語言能力。" },
      { de: "Der Fehler konnte eindeutig nachgewiesen werden.", zh: "錯誤能夠被清楚地證明。" }
    ]
  },

  {
    id: 46,
    word: "überweisen",
    artikel: "",
    root: "weisen",
    rootMeaning: "指示、指引（to point / direct）",
    zh: "匯款；轉診",
    en: "to transfer (money); to refer (to a specialist)",
    breakdown: "über-（越過、轉移到另一方）+ weisen（指引）\n→ 「把東西指引過去給另一方」= 匯款或轉介",
    collocations: [
      { de: "Geld überweisen", zh: "匯款" },
      { de: "zum Facharzt überweisen", zh: "轉介到專科醫師" },
      { de: "die Überweisung", zh: "匯款單；轉診單（名詞）" }
    ],
    synonyms: ["transferieren（匯款）", "weiterleiten（轉介）"],
    related: ["verweisen", "hinweisen", "nachweisen", "ausweisen", "anweisen"],
    examples: [
      { de: "Bitte überweisen Sie den Betrag auf folgendes Konto.", zh: "請將金額匯至以下帳戶。" },
      { de: "Der Hausarzt hat mich zum Spezialisten überwiesen.", zh: "家庭醫師把我轉介給專科醫師。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：zwingen（強迫）
  // ══════════════════════════════════════════════

  {
    id: 47,
    word: "zwingen",
    artikel: "",
    root: "zwingen",
    rootMeaning: "強迫、強制（to force / compel）",
    zh: "強迫、迫使（人）",
    en: "to force, to compel",
    breakdown: "基本字根。\n→ 對象是「人」（Akkusativ）\n→ 搭配 zu + Infinitiv\n→ gezwungen sein = 被迫（形容詞用法）",
    collocations: [
      { de: "jemanden zu etw. zwingen", zh: "強迫某人做某事" },
      { de: "gezwungen sein, etw. zu tun", zh: "被迫做某事" },
      { de: "sich gezwungen fühlen", zh: "感到被迫" }
    ],
    synonyms: ["nötigen", "drängen", "verpflichten"],
    related: ["erzwingen", "der Zwang", "zwanghaft", "unfreiwillig"],
    examples: [
      { de: "Ich war gezwungen, das Angebot abzulehnen.", zh: "我被迫拒絕了那個提案。" },
      { de: "Die Situation hat mich dazu gezwungen, schnell zu entscheiden.", zh: "情況迫使我迅速做出決定。" }
    ]
  },

  {
    id: 48,
    word: "erzwingen",
    artikel: "",
    root: "zwingen",
    rootMeaning: "強迫、強制（to force / compel）",
    zh: "強行取得（結果）",
    en: "to force something to happen, to extort a result",
    breakdown: "er-（達成某結果）+ zwingen（強迫）\n→ 對象是「事情、結果」（Akkusativ）\n→ zwingen 強迫人；erzwingen 強行取得結果",
    collocations: [
      { de: "eine Entscheidung erzwingen", zh: "強行逼出決定" },
      { de: "ein Geständnis erzwingen", zh: "強迫取得供詞" },
      { de: "einen Erfolg erzwingen", zh: "強行達成成果" }
    ],
    synonyms: ["durchsetzen", "erkämpfen", "sich erkämpfen"],
    related: ["zwingen", "der Zwang", "zwanghaft"],
    examples: [
      { de: "Ein gutes Ergebnis lässt sich nicht immer erzwingen.", zh: "好的結果並不總是能強行取得的。" },
      { de: "Die Gewerkschaft erzwang eine Lohnerhöhung.", zh: "工會強行爭取到加薪。" }
    ]
  },

// ══════════════════════════════════════════════
  //  詞根：führen 補充
  // ══════════════════════════════════════════════

  {
    id: 49,
    word: "vorführen",
    artikel: "",
    root: "führen",
    rootMeaning: "帶領、引導（to lead / guide）",
    zh: "示範、展示、放映",
    en: "to demonstrate, to show, to present",
    breakdown: "vor-（在前方）+ führen（帶領）\n→ 「把東西帶到人前面展示」= 示範、展示",
    collocations: [
      { de: "ein Gerät vorführen", zh: "示範一台設備" },
      { de: "einen Film vorführen", zh: "放映電影" },
      { de: "eine Technik vorführen", zh: "示範一種技術" }
    ],
    synonyms: ["demonstrieren", "präsentieren", "zeigen"],
    related: ["durchführen", "ausführen", "einführen", "anführen", "zurückführen"],
    examples: [
      { de: "Der Techniker führt die neue Maschine vor.", zh: "技術人員示範這台新機器。" },
      { de: "Die Simulation wurde dem Team erfolgreich vorgeführt.", zh: "模擬成功地向團隊展示了。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：wirken（作用、效果）
  // ══════════════════════════════════════════════

  {
    id: 50,
    word: "wirken",
    artikel: "",
    root: "wirken",
    rootMeaning: "作用、效果（to work / have effect）",
    zh: "產生效果、起作用；看起來（像）",
    en: "to work, to have an effect; to appear, to seem",
    breakdown: "基本字根，來自古德語「做、工作」\n→ 字面：產生作用\n→ 引申：外表給人某種感覺（wirken + 形容詞）",
    collocations: [
      { de: "abschreckend wirken", zh: "產生嚇阻效果" },
      { de: "beruhigend wirken", zh: "有安撫效果" },
      { de: "müde / nervös wirken", zh: "看起來疲憊／緊張" },
      { de: "Wirkung haben / erzielen", zh: "產生效果" }
    ],
    synonyms: ["funktionieren", "Wirkung haben", "aussehen"],
    related: ["auswirken", "bewirken", "mitwirken", "die Wirkung", "wirksam"],
    examples: [
      { de: "Die Maßnahme wirkt abschreckend auf potenzielle Täter.", zh: "這項措施對潛在違規者產生嚇阻效果。" },
      { de: "Er wirkt in Meetings immer sehr überzeugend.", zh: "他在會議上總是顯得非常有說服力。" }
    ]
  },

  {
    id: 51,
    word: "auswirken",
    artikel: "",
    root: "wirken",
    rootMeaning: "作用、效果（to work / have effect）",
    zh: "產生影響、造成效果",
    en: "to affect, to have an impact on",
    breakdown: "aus-（向外作用出去）+ wirken（作用）\n→ 「把效果向外擴散出去」= 產生影響\n⚠️ 固定搭配：sich auswirken auf + Akkusativ",
    collocations: [
      { de: "sich negativ / positiv auswirken auf", zh: "對……產生負面／正面影響" },
      { de: "die Auswirkung", zh: "影響、後果（名詞）" },
      { de: "weitreichende Auswirkungen haben", zh: "有深遠的影響" }
    ],
    synonyms: ["beeinflussen", "Folgen haben", "sich niederschlagen auf"],
    related: ["wirken", "bewirken", "mitwirken"],
    examples: [
      { de: "Der Fehler in der Simulation wirkt sich auf alle Ergebnisse aus.", zh: "模擬中的錯誤影響了所有結果。" },
      { de: "Die neuen Regelungen wirken sich positiv auf die Arbeitsqualität aus.", zh: "新規定對工作品質產生了正面影響。" }
    ]
  },

  {
    id: 52,
    word: "bewirken",
    artikel: "",
    root: "wirken",
    rootMeaning: "作用、效果（to work / have effect）",
    zh: "造成、引發（某結果）",
    en: "to cause, to bring about, to achieve",
    breakdown: "be-（施加到某對象）+ wirken（作用）\n→ 「對某事施加作用，造成結果」= 引發、造成",
    collocations: [
      { de: "eine Veränderung bewirken", zh: "造成一個改變" },
      { de: "das Gegenteil bewirken", zh: "造成反效果" },
      { de: "viel / wenig bewirken", zh: "達成很多／很少" }
    ],
    synonyms: ["verursachen", "herbeiführen", "erreichen"],
    related: ["wirken", "auswirken", "mitwirken"],
    examples: [
      { de: "Diese Maßnahme hat kaum etwas bewirkt.", zh: "這項措施幾乎沒有達成任何效果。" },
      { de: "Mit einem klaren Konzept kann man viel bewirken.", zh: "有了清晰的方案，可以達成很多事情。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：ziehen（拉、移動）
  // ══════════════════════════════════════════════

  {
    id: 53,
    word: "bevorzugen",
    artikel: "",
    root: "ziehen",
    rootMeaning: "拉、移動（to pull / move）",
    zh: "偏好、優先選擇",
    en: "to prefer, to favour",
    breakdown: "be- + vor-（前面）+ ziehen（拉）\n→ 「把某人/事拉到前面」= 偏好、優先對待",
    collocations: [
      { de: "etw. bevorzugen", zh: "偏好某物" },
      { de: "bevorzugt behandeln", zh: "優先對待" },
      { de: "die Bevorzugung", zh: "偏袒（名詞）" }
    ],
    synonyms: ["vorziehen", "präferieren", "den Vorzug geben"],
    related: ["vorziehen", "anziehen", "ausziehen", "beziehen", "bezüglich", "beziehungsweise"],
    examples: [
      { de: "Ich bevorzuge schriftliche Kommunikation bei komplexen Themen.", zh: "在複雜的話題上，我偏好書面溝通。" },
      { de: "Erfahrene Bewerber werden bevorzugt.", zh: "有經驗的應聘者將被優先考慮。" }
    ]
  },

  {
    id: 54,
    word: "vorziehen",
    artikel: "",
    root: "ziehen",
    rootMeaning: "拉、移動（to pull / move）",
    zh: "偏好（較口語）；提前",
    en: "to prefer; to bring forward",
    breakdown: "vor-（到前面）+ ziehen（拉）\n→ 「把某事拉到前面」= 偏好；把時間提前\n→ 比 bevorzugen 更口語",
    collocations: [
      { de: "A B vorziehen", zh: "偏好 A 勝過 B" },
      { de: "einen Termin vorziehen", zh: "把時間提前" }
    ],
    synonyms: ["bevorzugen", "präferieren"],
    related: ["bevorzugen", "anziehen", "ausziehen", "beziehen", "bezüglich", "beziehungsweise"],
    examples: [
      { de: "Ich ziehe persönliche Gespräche E-Mails vor.", zh: "我偏好當面交談勝過電子郵件。" },
      { de: "Der Termin wurde auf Montag vorgezogen.", zh: "會議時間被提前到週一。" }
    ]
  },

  {
    id: 55,
    word: "anziehen",
    artikel: "",
    root: "ziehen",
    rootMeaning: "拉、移動（to pull / move）",
    zh: "吸引；穿衣服",
    en: "to attract; to put on (clothing)",
    breakdown: "an-（靠近、朝向）+ ziehen（拉）\n→ 「把東西拉向自己」= 吸引\n→ 把衣服拉向身體 = 穿上",
    collocations: [
      { de: "Interesse / Bewerber anziehen", zh: "吸引興趣／應聘者" },
      { de: "sich anziehen", zh: "穿衣服（反身）" },
      { de: "anziehend wirken", zh: "具有吸引力" }
    ],
    synonyms: ["attrahieren（吸引）", "sich kleiden（穿衣）"],
    related: ["bevorzugen", "vorziehen", "ausziehen", "beziehen", "bezüglich", "beziehungsweise"],
    examples: [
      { de: "Das Angebot zieht viele Bewerber an.", zh: "這個職缺吸引了很多應聘者。" },
      { de: "Bitte ziehen Sie sich um, bevor Sie das Labor betreten.", zh: "進入實驗室前請更換衣服。" }
    ]
  },

  {
    id: 56,
    word: "beziehen",
    artikel: "",
    root: "ziehen",
    rootMeaning: "拉、移動（to pull / move）",
    zh: "涉及、關聯；取得；訂閱",
    en: "to relate to; to obtain; to subscribe",
    breakdown: "be-（施加動作）+ ziehen（拉）\n→ 「把某事拉向自己」= 關聯、涉及\n→ 引申：取得某物、訂閱\n→ sich beziehen auf = 參照、涉及（書信常用）",
    collocations: [
      { de: "sich beziehen auf + A.", zh: "參照、涉及……" },
      { de: "Gehalt beziehen", zh: "領取薪資" },
      { de: "eine Zeitung beziehen", zh: "訂閱報紙" },
      { de: "der Bezug", zh: "關聯、來源（名詞）" }
    ],
    synonyms: ["sich beziehen（涉及）", "erhalten（取得）", "abonnieren（訂閱）"],
    related: ["bevorzugen", "vorziehen", "anziehen", "ausziehen", "bezüglich", "beziehungsweise"],
    examples: [
      { de: "Ich beziehe mich auf Ihre E-Mail vom 15. April.", zh: "我參照您4月15日的電子郵件。" },
      { de: "Er bezieht seit Jahren dieselbe Fachzeitschrift.", zh: "他多年來一直訂閱同一份專業期刊。" }
    ]
  },

  {
    id: 57,
    word: "bezüglich",
    artikel: "",
    root: "ziehen",
    rootMeaning: "拉、移動（to pull / move）",
    zh: "關於、就……而言（介系詞，接 Genitiv）",
    en: "regarding, concerning, with respect to",
    breakdown: "Bezug（來自 beziehen）+ -lich（形容詞/介系詞後綴）\n→ ziehen → beziehen → der Bezug → bezüglich\n⚠️ 接 Genitiv：bezüglich des Vertrags（不是 den！）",
    collocations: [
      { de: "bezüglich Ihrer Anfrage", zh: "關於您的詢問" },
      { de: "bezüglich des Problems", zh: "關於這個問題" },
      { de: "bezüglich der Kosten", zh: "關於費用方面" }
    ],
    synonyms: ["hinsichtlich", "in Bezug auf", "was ... betrifft"],
    related: ["beziehen", "bevorzugen", "vorziehen", "anziehen", "beziehungsweise"],
    examples: [
      { de: "Bezüglich Ihrer Anfrage teilen wir Ihnen mit, dass die Lieferung verzögert wird.", zh: "關於您的詢問，我們告知您貨物將延誤。" },
      { de: "Bezüglich der Kosten können wir noch verhandeln.", zh: "關於費用方面，我們還可以協商。" }
    ]
  },

  {
    id: 58,
    word: "beziehungsweise",
    artikel: "",
    root: "ziehen",
    rootMeaning: "拉、移動（to pull / move）",
    zh: "或者；分別是；更確切地說",
    en: "or; respectively; or rather",
    breakdown: "Beziehung（關係，來自 beziehen）+ weise（方式）\n→ ziehen → beziehen → Beziehung → beziehungsweise\n→ 「就各自關係而言」= 分別對應；更確切地說\n縮寫：bzw.（書面常見）",
    collocations: [
      { de: "A bzw. B", zh: "A 或 B；分別是 A 和 B" },
      { de: "200 bzw. 250 Euro", zh: "分別是 200 和 250 歐元" },
      { de: "morgen bzw. übermorgen", zh: "明天或後天" }
    ],
    synonyms: ["oder", "respektive", "genauer gesagt"],
    related: ["beziehen", "bezüglich", "bevorzugen", "vorziehen", "anziehen"],
    examples: [
      { de: "Die Kosten betragen 200 bzw. 250 Euro, je nach Modell.", zh: "費用分別為 200 和 250 歐元，視型號而定。" },
      { de: "Bitte wenden Sie sich an Herrn Müller bzw. seine Vertretung.", zh: "請聯繫 Müller 先生或他的代理人。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：legen（放置）
  // ══════════════════════════════════════════════

  {
    id: 59,
    word: "festlegen",
    artikel: "",
    root: "legen",
    rootMeaning: "放置（to lay / place）",
    zh: "確定、制定、規定",
    en: "to determine, to set, to establish",
    breakdown: "fest（牢固）+ legen（放置）\n→ 「牢固地放定、釘死」= 確定不變\n→ sich festlegen = 讓自己表態、承諾",
    collocations: [
      { de: "einen Termin festlegen", zh: "確定日期" },
      { de: "Regeln / Ziele festlegen", zh: "制定規則／目標" },
      { de: "sich festlegen auf", zh: "承諾、表態（反身）" }
    ],
    synonyms: ["bestimmen", "definieren", "vereinbaren", "festsetzen"],
    related: ["verlegen", "vorlegen", "belegen", "auflegen", "anlegen"],
    examples: [
      { de: "Wir müssen den Abgabetermin klar festlegen.", zh: "我們必須明確確定交件日期。" },
      { de: "Ich möchte mich noch nicht festlegen.", zh: "我還不想表態。" }
    ]
  },

  {
    id: 60,
    word: "verlegen",
    artikel: "",
    root: "legen",
    rootMeaning: "放置（to lay / place）",
    zh: "改期、遷移；出版；放錯地方",
    en: "to postpone; to relocate; to publish; to misplace",
    breakdown: "ver-（移動偏離）+ legen（放置）\n→ 把東西放到別的地方，三種意思：\n① 改期（把時間移走）\n② 出版（把書發行出去）\n③ sich verlegen = 放錯地方找不到",
    collocations: [
      { de: "einen Termin verlegen", zh: "改期" },
      { de: "ein Buch verlegen", zh: "出版一本書" },
      { de: "den Schlüssel verlegt haben", zh: "把鑰匙放到不知哪裡去了" }
    ],
    synonyms: ["verschieben（改期）", "publizieren（出版）"],
    related: ["festlegen", "vorlegen", "belegen", "auflegen", "anlegen"],
    examples: [
      { de: "Der Termin muss leider verlegt werden.", zh: "很遺憾，日期必須改期。" },
      { de: "Ich habe meine Schlüssel verlegt.", zh: "我把鑰匙放到不知哪裡去了。" }
    ]
  },

  {
    id: 61,
    word: "vorlegen",
    artikel: "",
    root: "legen",
    rootMeaning: "放置（to lay / place）",
    zh: "提交、出示（文件）",
    en: "to submit, to present, to produce (documents)",
    breakdown: "vor-（在前面）+ legen（放置）\n→ 「把東西放到對方面前」= 提交、出示",
    collocations: [
      { de: "Unterlagen vorlegen", zh: "提交文件" },
      { de: "einen Ausweis vorlegen", zh: "出示身分證件" },
      { de: "einen Plan vorlegen", zh: "提出計畫" }
    ],
    synonyms: ["einreichen", "präsentieren", "unterbreiten"],
    related: ["festlegen", "verlegen", "belegen", "auflegen", "anlegen"],
    examples: [
      { de: "Bitte legen Sie alle erforderlichen Unterlagen vor.", zh: "請提交所有必要的文件。" },
      { de: "Der Bericht wird dem Vorstand nächste Woche vorgelegt.", zh: "報告將於下週提交給董事會。" }
    ]
  },

  {
    id: 62,
    word: "belegen",
    artikel: "",
    root: "legen",
    rootMeaning: "放置（to lay / place）",
    zh: "證明、記錄；佔用；選修（課程）",
    en: "to prove, to document; to occupy; to enrol in",
    breakdown: "be-（施加到某對象上）+ legen（放置）\n→ 「把證據放上去」= 證明、記錄\n→ 「把自己放在某位置上」= 佔用、選修",
    collocations: [
      { de: "etw. mit Dokumenten belegen", zh: "用文件證明某事" },
      { de: "einen Kurs belegen", zh: "選修課程" },
      { de: "einen Platz belegen", zh: "佔用一個位置" }
    ],
    synonyms: ["beweisen", "dokumentieren", "nachweisen"],
    related: ["festlegen", "verlegen", "vorlegen", "auflegen", "anlegen"],
    examples: [
      { de: "Bitte belegen Sie Ihre Angaben mit entsprechenden Nachweisen.", zh: "請用相應的證明文件來佐證您的資料。" },
      { de: "Sie hat einen Kurs in Projektmanagement belegt.", zh: "她選修了一門專案管理課程。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：treten（踩、踏、步入）
  // ══════════════════════════════════════════════

  {
    id: 63,
    word: "betreten",
    artikel: "",
    root: "treten",
    rootMeaning: "踩、踏、步入（to step / tread）",
    zh: "踏入、進入（某空間）",
    en: "to enter, to step into",
    breakdown: "be-（施加動作）+ treten（踩踏）\n→ 「踏進去」= 進入某空間\n→ Betreten verboten! = 禁止進入！（常見告示）",
    collocations: [
      { de: "das Gebäude betreten", zh: "進入建築" },
      { de: "Betreten verboten!", zh: "禁止進入！" },
      { de: "Neuland betreten", zh: "踏入新領域（慣用語）" }
    ],
    synonyms: ["eintreten", "hineingehen"],
    related: ["antreten", "eintreten", "auftreten", "vertreten", "übertreten"],
    examples: [
      { de: "Das Labor darf nur mit Schutzausrüstung betreten werden.", zh: "進入實驗室必須穿戴防護裝備。" },
      { de: "Mit diesem Projekt betreten wir völliges Neuland.", zh: "透過這個項目，我們進入了全新的領域。" }
    ]
  },

  {
    id: 64,
    word: "antreten",
    artikel: "",
    root: "treten",
    rootMeaning: "踩、踏、步入（to step / tread）",
    zh: "就職、開始（職務）；應考",
    en: "to take up (a position); to sit (an exam)",
    breakdown: "an-（靠近、開始）+ treten（踏）\n→ 「踏進去正式開始」= 就職、應考",
    collocations: [
      { de: "eine Stelle antreten", zh: "就職、開始新工作" },
      { de: "den Dienst antreten", zh: "開始值班" },
      { de: "zur Prüfung antreten", zh: "應考" }
    ],
    synonyms: ["beginnen", "aufnehmen（die Arbeit）", "starten"],
    related: ["betreten", "eintreten", "auftreten", "vertreten", "übertreten"],
    examples: [
      { de: "Sie tritt am ersten Mai ihre neue Stelle an.", zh: "她在五月一日就任新職位。" },
      { de: "Alle Kandidaten traten pünktlich zur Prüfung an.", zh: "所有應試者準時應考。" }
    ]
  },

  {
    id: 65,
    word: "eintreten",
    artikel: "",
    root: "treten",
    rootMeaning: "踩、踏、步入（to step / tread）",
    zh: "進入；加入；發生",
    en: "to enter; to join; to occur",
    breakdown: "ein-（向內）+ treten（踏）\n→ 「踏進去」= 進入、加入\n→ 引申：某情況發生（der Fall tritt ein）",
    collocations: [
      { de: "in eine Organisation eintreten", zh: "加入一個組織" },
      { de: "für jemanden eintreten", zh: "為某人挺身而出" },
      { de: "der Fall tritt ein", zh: "情況發生了" }
    ],
    synonyms: ["betreten（進入）", "beitreten（加入）", "geschehen（發生）"],
    related: ["betreten", "antreten", "auftreten", "vertreten", "übertreten"],
    examples: [
      { de: "Sie ist letztes Jahr in den Betriebsrat eingetreten.", zh: "她去年加入了職工委員會。" },
      { de: "Im schlimmsten Fall tritt eine Verzögerung ein.", zh: "最壞的情況下，會出現延誤。" }
    ]
  },

  {
    id: 66,
    word: "auftreten",
    artikel: "",
    root: "treten",
    rootMeaning: "踩、踏、步入（to step / tread）",
    zh: "出現、發生；舉止、表現；上臺",
    en: "to appear, to occur; to behave; to perform",
    breakdown: "auf-（向上、走到前面）+ treten（踏）\n→ 「踏上舞台」= 上臺\n→ 引申：某問題出現；某人的行為舉止",
    collocations: [
      { de: "selbstbewusst auftreten", zh: "自信地表現自己" },
      { de: "Probleme / Fehler treten auf", zh: "問題／錯誤出現了" },
      { de: "das Auftreten", zh: "舉止、表現（名詞）" }
    ],
    synonyms: ["erscheinen（出現）", "sich verhalten（行為）", "vorkommen（發生）"],
    related: ["betreten", "antreten", "eintreten", "vertreten", "übertreten"],
    examples: [
      { de: "In der Simulation traten unerwartete Fehler auf.", zh: "模擬中出現了意外的錯誤。" },
      { de: "Beim Vorstellungsgespräch sollte man selbstbewusst auftreten.", zh: "面試時應該自信地表現自己。" }
    ]
  },

  {
    id: 67,
    word: "vertreten",
    artikel: "",
    root: "treten",
    rootMeaning: "踩、踏、步入（to step / tread）",
    zh: "代表、代理；持有（立場）",
    en: "to represent; to hold (a position/view)",
    breakdown: "ver-（代替、取而代之）+ treten（踏）\n→ 「踏到對方的位置上」= 代表、代理\n→ 引申：支持某立場（eine Meinung vertreten）",
    collocations: [
      { de: "jemanden vertreten", zh: "代理某人" },
      { de: "eine Meinung / einen Standpunkt vertreten", zh: "持有某立場／意見" },
      { de: "die Interessen vertreten", zh: "代表利益" }
    ],
    synonyms: ["repräsentieren", "stellvertretend handeln"],
    related: ["betreten", "antreten", "eintreten", "auftreten", "übertreten"],
    examples: [
      { de: "Sie vertritt ihre Kollegin während des Urlaubs.", zh: "她在同事度假期間代理其工作。" },
      { de: "Ich vertrete die Ansicht, dass Qualität wichtiger als Geschwindigkeit ist.", zh: "我持有這樣的立場：品質比速度更重要。" }
    ]
  }  

];
