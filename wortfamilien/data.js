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
    breakdown: "entgegen-（朝向、迎向）+ nehmen（拿取）\n→ 「伸手迎向對方來拿」= 接收、收取\n→ 重點是「物理上/程序上收到」，不涉及內心認同\n\n⚠️ vs. annehmen：\nentgegennehmen = 收到（客觀動作）\nannehmen = 接受（內心認同）\n→ eine Beschwerde entgegennehmen = 受理投訴（不代表同意）\n→ Kritik annehmen = 接受批評（內心認可）",
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
    breakdown: "an-（靠近）+ nehmen（拿取）\n→ 「把東西拿到自己身邊並認可」= 接受\n→ 重點是內心接受、同意、認同\n\n⚠️ vs. entgegennehmen：\nannehmen = 內心接受（認同）\nentgegennehmen = 程序上收取（不代表同意）\n→ Ich nehme an, dass … = 我推測……（另一個常見用法）",
    collocations: [
      { de: "ein Angebot annehmen", zh: "接受一個提案" },
      { de: "einen Auftrag annehmen", zh: "接受一項任務" },
      { de: "Kritik annehmen", zh: "接受批評（內心認可）" },
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
      { de: "Daten / Informationen aufnehmen", zh: "記錄資料／資訊" },
      { de: "Kontakt aufnehmen", zh: "取得聯繫" },
      { de: "ein Video / ein Interview aufnehmen", zh: "錄製影片／採訪" }
      
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
      { de: "die Leitung übernehmen", zh: "接管領導職位" },
      { de: "Kosten übernehmen", zh: "承擔費用" }
    ],
    synonyms: ["übernehmen", "sich annehmen", "in die Hand nehmen"],
    related: ["entgegennehmen", "annehmen", "aufnehmen", "wahrnehmen", "teilnehmen"],
    examples: [
      { de: "Er hat die Verantwortung für das Projekt übernommen.", zh: "他承擔了這個項目的責任。" },
      { de: "Die neue Kollegin übernimmt ab Montag die Abteilungsleitung.", zh: "新同事從週一起接管部門領導職位。" },
      { de: "Wir übernehmen die Kosten für die Reparatur.", zh: "我們承擔維修費用。" }
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
      { de: "Müller (2020) verweist darauf, dass Simulationsergebnisse stark von den Eingabeparametern abhängen.", zh: "Müller (2020) 指出，模擬結果在很大程度上取決於輸入參數。" },
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
      { de: "Die Proben wurden bei 200 bzw. 400 Grad Celsius getestet.", zh: "樣品分別在攝氏 200 度和 400 度下進行測試。（respectively：兩個對應值）" },
      { de: "Bitte wenden Sie sich an Herrn Müller bzw. seine Vertretung.", zh: "請聯繫 Müller 先生或他的代理人。（or / or rather：擇一）" }
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
  },
// ══════════════════════════════════════════════
  //  詞根：schließen 補充
  // ══════════════════════════════════════════════

  {
    id: 68,
    word: "entschließen",
    artikel: "",
    root: "schließen",
    rootMeaning: "關、鎖（to close / lock）",
    zh: "決定、下決心（sich entschließen）",
    en: "to decide, to make up one's mind",
    breakdown: "ent-（從內部解開、釋放）+ schließen（鎖）\n→ 「把內心鎖住的東西解開放出來」= 下定決心\n→ 幾乎只用反身形式：sich entschließen zu + Inf.\n→ der Entschluss = 決定、決心（名詞）",
    collocations: [
      { de: "sich zu etw. entschließen", zh: "決定做某事" },
      { de: "einen Entschluss fassen", zh: "下定決心（名詞搭配）" },
      { de: "fest entschlossen sein", zh: "態度堅定、下定決心" },
      { de: "kurzentschlossen", zh: "當機立斷地（副詞）" }
    ],
    synonyms: ["sich entscheiden", "beschließen", "sich vornehmen"],
    related: ["ausschließen", "einschließen", "abschließen", "aufschließen", "schließen"],
    examples: [
      { de: "Sie hat sich entschlossen, eine neue Stelle anzutreten.", zh: "她決定接受新職位。" },
      { de: "Der Entschluss, das Projekt abzubrechen, fiel nicht leicht.", zh: "中止項目的決定並不容易。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：weisen 補充
  // ══════════════════════════════════════════════

  {
    id: 69,
    word: "beweisen",
    artikel: "",
    root: "weisen",
    rootMeaning: "指示、指引（to point / direct）",
    zh: "證明、證實",
    en: "to prove, to demonstrate",
    breakdown: "be-（施加動作於對象）+ weisen（指引）\n→ 「指向某事並確立其為真」= 證明\n→ der Beweis = 證明、證據（名詞）\n區別：beweisen（科學/邏輯證明）vs. nachweisen（文件/資料佐證）",
    collocations: [
      { de: "etw. beweisen", zh: "證明某事" },
      { de: "seine Unschuld beweisen", zh: "證明清白" },
      { de: "der Beweis", zh: "證據、證明（名詞）" },
      { de: "Beweise vorlegen / liefern", zh: "提出 / 提供證據" }
    ],
    synonyms: ["nachweisen", "belegen", "unter Beweis stellen"],
    related: ["verweisen", "hinweisen", "nachweisen", "ausweisen", "überweisen"],
    examples: [
      { de: "Die Simulation beweist, dass das Modell korrekt ist.", zh: "模擬證明了該模型是正確的。" },
      { de: "Ohne ausreichende Beweise kann keine Entscheidung getroffen werden.", zh: "沒有充分的證據，無法做出決定。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：kündigen（宣告、終止）
  // ══════════════════════════════════════════════

  {
    id: 70,
    word: "kündigen",
    artikel: "",
    root: "kündigen",
    rootMeaning: "宣告、通知終止（to give notice）",
    zh: "辭職；解僱；終止（合約）",
    en: "to resign; to dismiss; to terminate (a contract)",
    breakdown: "來自古德語 künden（宣告、通知）\n→ 「正式通知對方終止關係」\n⚠️ 方向很重要：\n→ kündigen（不及物）= 辭職（員工主動）\n→ jemandem kündigen = 解僱某人（公司→員工）\n→ den Vertrag kündigen = 終止合約\n\n⚠️ 易混淆：sich erkundigen（打聽、詢問）\n字形相似但意思完全不同！來自不同字根。",
    collocations: [
      { de: "kündigen（不及物）", zh: "辭職" },
      { de: "jemandem kündigen", zh: "解僱某人" },
      { de: "den Vertrag / die Wohnung kündigen", zh: "終止合約 / 退租" },
      { de: "fristgerecht kündigen", zh: "按期限提前通知終止" }
    ],
    synonyms: ["entlassen（解僱）", "zurücktreten（辭職，較正式）"],
    related: ["die Kündigung", "ankündigen", "verkündigen", "unkündbar"],
    examples: [
      { de: "Sie hat gekündigt und sucht jetzt eine neue Stelle.", zh: "她辭職了，現在正在找新工作。" },
      { de: "Dem Mitarbeiter wurde fristlos gekündigt.", zh: "該員工被即時解僱（無需預告期）。" }
    ]
  },

  {
    id: 71,
    word: "die Kündigung",
    artikel: "die",
    root: "kündigen",
    rootMeaning: "宣告、通知終止（to give notice）",
    zh: "解僱通知；辭職信；終止通知",
    en: "dismissal notice; resignation; termination notice",
    breakdown: "kündigen（終止）+ -ung（名詞後綴）\n→ 「宣告終止的那份文件或行為」= 解僱通知、辭職信",
    collocations: [
      { de: "eine Kündigung erhalten / bekommen", zh: "收到解僱通知" },
      { de: "eine Kündigung einreichen / aussprechen", zh: "提交辭呈 / 宣布解僱" },
      { de: "die Kündigungsfrist", zh: "預告期（名詞）" },
      { de: "eine fristlose Kündigung", zh: "即時解僱（無預告期）" }
    ],
    synonyms: ["die Entlassung（解僱）", "der Rücktritt（辭職，較正式）"],
    related: ["kündigen", "ankündigen", "verkündigen", "unkündbar"],
    examples: [
      { de: "Er hat die Kündigung schriftlich eingereicht.", zh: "他以書面方式提交了辭呈。" },
      { de: "Die Kündigung muss die gesetzliche Kündigungsfrist einhalten.", zh: "解僱通知必須遵守法定預告期。" }
    ]
  },

  {
    id: 72,
    word: "ankündigen",
    artikel: "",
    root: "kündigen",
    rootMeaning: "宣告、通知終止（to give notice）",
    zh: "宣布、預告、告知（即將發生的事）",
    en: "to announce, to give advance notice of",
    breakdown: "an-（指向、開始）+ kündigen（宣告）\n→ 「預先宣告某事即將來臨」= 宣布、預告\n→ 與 kündigen（終止）方向相反：ankündigen 是「宣布開始/即將發生」",
    collocations: [
      { de: "einen Besuch ankündigen", zh: "預告拜訪" },
      { de: "Maßnahmen ankündigen", zh: "宣布措施" },
      { de: "wie angekündigt", zh: "如事先宣布的那樣" },
      { de: "die Ankündigung", zh: "公告、預告（名詞）" }
    ],
    synonyms: ["bekanntgeben", "mitteilen", "verkünden"],
    related: ["kündigen", "die Kündigung", "verkündigen", "unkündbar"],
    examples: [
      { de: "Die Geschäftsführung kündigte Änderungen in der Unternehmensstruktur an.", zh: "管理層宣布了公司結構的變動。" },
      { de: "Der Streik wurde zwei Wochen im Voraus angekündigt.", zh: "罷工在兩週前就提前宣布了。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：richten（對準、整理）
  // ══════════════════════════════════════════════

  {
    id: 73,
    word: "ausrichten",
    artikel: "",
    root: "richten",
    rootMeaning: "對準、整理、判斷（to align / direct / judge）",
    zh: "傳達（訊息）；舉辦；對準方向",
    en: "to convey (a message); to organise; to align",
    breakdown: "aus-（向外）+ richten（對準）\n→ 「向外對準某目標傳遞」= 傳達訊息\n→ 「向外把東西整理好」= 舉辦活動\n→ ausgerichtet auf = 針對……、以……為導向（形容詞用法）",
    collocations: [
      { de: "eine Veranstaltung ausrichten", zh: "舉辦活動" },
      { de: "jemandem etw. ausrichten", zh: "轉告某人某事" },
      { de: "auf etw. ausgerichtet sein", zh: "針對……、以……為導向" },
      { de: "Richten Sie ihm bitte aus, dass …", zh: "請轉告他……" }
    ],
    synonyms: ["übermitteln（傳達）", "organisieren（舉辦）", "orientieren（對準）"],
    related: ["einrichten", "errichten", "berichten", "abrichten", "richten"],
    examples: [
      { de: "Unser Angebot ist auf internationale Kunden ausgerichtet.", zh: "我們的服務是針對國際客戶的。" },
      { de: "Können Sie ihm ausrichten, dass die Besprechung verschoben wird?", zh: "您能轉告他會議改期了嗎？" }
    ]
  },

  {
    id: 74,
    word: "einrichten",
    artikel: "",
    root: "richten",
    rootMeaning: "對準、整理、判斷（to align / direct / judge）",
    zh: "佈置（房間）；設立；安排",
    en: "to furnish; to set up; to arrange",
    breakdown: "ein-（向內）+ richten（整理對準）\n→ 「把東西放進去並整理好」= 佈置、設立\n→ sich einrichten = 安頓下來、適應",
    collocations: [
      { de: "eine Wohnung einrichten", zh: "佈置公寓" },
      { de: "ein Konto einrichten", zh: "開設帳戶" },
      { de: "sich einrichten auf", zh: "為……做準備、適應" },
      { de: "die Einrichtung", zh: "家具；設施（名詞）" }
    ],
    synonyms: ["ausstatten", "aufbauen", "installieren"],
    related: ["ausrichten", "errichten", "berichten", "abrichten", "richten"],
    examples: [
      { de: "Sie haben ihre neue Wohnung modern eingerichtet.", zh: "她們把新公寓佈置得很現代。" },
      { de: "Das Büro wurde mit neuen Geräten eingerichtet.", zh: "辦公室配置了新設備。" }
    ]
  },

  {
    id: 75,
    word: "berichten",
    artikel: "",
    root: "richten",
    rootMeaning: "對準、整理、判斷（to align / direct / judge）",
    zh: "報告、報導、彙報",
    en: "to report, to inform",
    breakdown: "be-（施加動作於對象）+ richten（對準）\n→ 「把資訊對準某人傳遞」= 報告、彙報\n→ der Bericht = 報告、報導（名詞）",
    collocations: [
      { de: "über etw. berichten", zh: "就某事報告" },
      { de: "jemandem berichten", zh: "向某人彙報" },
      { de: "der Bericht", zh: "報告（名詞）" },
      { de: "einen Bericht erstatten", zh: "提交報告（正式）" }
    ],
    synonyms: ["melden", "mitteilen", "schildern"],
    related: ["ausrichten", "einrichten", "errichten", "abrichten", "richten"],
    examples: [
      { de: "Sie berichtet regelmäßig über den Fortschritt des Projekts.", zh: "她定期彙報項目進度。" },
      { de: "Der Bericht enthält alle wichtigen Simulationsergebnisse.", zh: "報告包含所有重要的模擬結果。" }
    ]
  },

  {
    id: 76,
    word: "errichten",
    artikel: "",
    root: "richten",
    rootMeaning: "對準、整理、判斷（to align / direct / judge）",
    zh: "建立、建造、設立",
    en: "to erect, to establish, to set up",
    breakdown: "er-（達成某結果）+ richten（對準豎立）\n→ 「豎立起來完成」= 建造、設立\n→ 比 aufbauen 更正式，常用於機構、建築",
    collocations: [
      { de: "ein Gebäude / ein Denkmal errichten", zh: "建造建築 / 立碑" },
      { de: "ein Unternehmen errichten", zh: "設立公司" },
      { de: "eine Barriere errichten", zh: "建立障礙" }
    ],
    synonyms: ["aufbauen", "gründen", "aufstellen"],
    related: ["ausrichten", "einrichten", "berichten", "abrichten", "richten"],
    examples: [
      { de: "In der Innenstadt wurde ein neues Forschungszentrum errichtet.", zh: "市中心建立了一個新的研究中心。" },
      { de: "Die Behörde errichtete eine neue Kontrollstelle.", zh: "機關設立了新的檢查站。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：drücken（壓、印）
  // ══════════════════════════════════════════════

  {
    id: 77,
    word: "ausdrücken",
    artikel: "",
    root: "drücken",
    rootMeaning: "壓、印（to press / push）",
    zh: "表達、表示；擠壓出來",
    en: "to express; to squeeze out",
    breakdown: "aus-（向外）+ drücken（壓）\n→ 「把內部的東西壓出來」= 表達（把想法擠出來說）\n→ sich ausdrücken = 表達自己\n→ der Ausdruck = 表達、詞彙、表情（名詞）",
    collocations: [
      { de: "sich ausdrücken", zh: "表達自己" },
      { de: "Dankbarkeit / Bedauern ausdrücken", zh: "表達感謝 / 遺憾" },
      { de: "der Ausdruck", zh: "表達；詞彙；表情（名詞）" },
      { de: "zum Ausdruck bringen", zh: "表達出來（正式）" }
    ],
    synonyms: ["äußern", "formulieren", "zum Ausdruck bringen"],
    related: ["eindrücken", "unterdrücken", "bedrücken", "aufdrücken", "drücken"],
    examples: [
      { de: "Er drückte seine Zufriedenheit mit den Ergebnissen aus.", zh: "他表達了對結果的滿意。" },
      { de: "Zum Ausdruck bringen, dass man zufrieden ist, wirkt professionell.", zh: "表達自己的滿意，顯得很專業。" }
    ]
  },

  {
    id: 78,
    word: "der Eindruck",
    artikel: "der",
    root: "drücken",
    rootMeaning: "壓、印（to press / push）",
    zh: "印象",
    en: "impression",
    breakdown: "ein-（向內壓進去）+ Druck（壓力）\n→ 「壓進心裡留下的痕跡」= 印象\n→ einen Eindruck machen / hinterlassen = 留下印象\n→ unter dem Eindruck stehen, dass … = 有……的感覺",
    collocations: [
      { de: "einen guten / schlechten Eindruck machen", zh: "留下好 / 壞印象" },
      { de: "einen Eindruck hinterlassen", zh: "留下印象" },
      { de: "unter dem Eindruck stehen, dass …", zh: "有……的感覺、以為……" },
      { de: "Eindruck schinden", zh: "刻意表現、博取印象（口語）" }
    ],
    synonyms: ["das Gefühl", "die Wahrnehmung", "das Bild"],
    related: ["ausdrücken", "unterdrücken", "bedrücken", "aufdrücken", "drücken"],
    examples: [
      { de: "Beim Vorstellungsgespräch sollte man einen professionellen Eindruck machen.", zh: "面試時應該留下專業的印象。" },
      { de: "Ich habe den Eindruck, dass das Projekt gut vorangeht.", zh: "我有種感覺項目進展順利。" }
    ]
  },

  {
    id: 79,
    word: "unterdrücken",
    artikel: "",
    root: "drücken",
    rootMeaning: "壓、印（to press / push）",
    zh: "壓制、抑制、鎮壓",
    en: "to suppress, to oppress, to repress",
    breakdown: "unter-（在下方）+ drücken（壓）\n→ 「從上往下壓住」= 壓制、抑制",
    collocations: [
      { de: "Gefühle unterdrücken", zh: "壓抑情緒" },
      { de: "einen Aufstand unterdrücken", zh: "鎮壓暴動" },
      { de: "Informationen unterdrücken", zh: "壓制資訊" }
    ],
    synonyms: ["zurückhalten", "niederschlagen", "hemmen"],
    related: ["ausdrücken", "eindrücken", "bedrücken", "aufdrücken", "drücken"],
    examples: [
      { de: "Er versuchte, seine Enttäuschung zu unterdrücken.", zh: "他試圖壓抑自己的失望。" },
      { de: "Wichtige Informationen sollten nicht unterdrückt werden.", zh: "重要資訊不應被壓制。" }
    ]
  },

  {
    id: 80,
    word: "bedrücken",
    artikel: "",
    root: "drücken",
    rootMeaning: "壓、印（to press / push）",
    zh: "使心情沉重、壓抑（情感上）",
    en: "to weigh on, to depress (emotionally)",
    breakdown: "be-（施加動作於對象）+ drücken（壓）\n→ 「壓在某人心上」= 使心情沉重\n→ 幾乎只用於情感/心理層面",
    collocations: [
      { de: "etw. bedrückt jemanden", zh: "某事讓某人感到沉重" },
      { de: "bedrückt sein", zh: "心情沉重、鬱悶" },
      { de: "bedrückend", zh: "令人壓抑的（形容詞）" }
    ],
    synonyms: ["belasten", "niederdrücken", "deprimieren"],
    related: ["ausdrücken", "eindrücken", "unterdrücken", "aufdrücken", "drücken"],
    examples: [
      { de: "Die Unsicherheit über die Zukunft bedrückt ihn sehr.", zh: "對未來的不確定性讓他非常沉重。" },
      { de: "Es herrschte eine bedrückende Stille im Raum.", zh: "房間裡瀰漫著一種令人壓抑的沉默。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：wirten（待客、主持）
  // ══════════════════════════════════════════════

  {
    id: 81,
    word: "bewirten",
    artikel: "",
    root: "wirten",
    rootMeaning: "待客、款待（to host / entertain guests）",
    zh: "款待（賓客）、提供餐飲招待",
    en: "to entertain, to cater for, to serve guests",
    breakdown: "be-（施加動作於對象）+ wirten（待客）\n→ 「對客人施加待客之道」= 款待\n→ die Bewirtung = 款待、餐飲招待（名詞）\n→ der Wirt = 老闆、房東（字根）",
    collocations: [
      { de: "Gäste bewirten", zh: "款待賓客" },
      { de: "die Bewirtung", zh: "款待、餐飲招待（名詞）" },
      { de: "Bewirtungskosten", zh: "餐飲費用（商業/稅務用語）" },
      { de: "sich bewirten lassen", zh: "接受款待" }
    ],
    synonyms: ["verköstigen", "beköstigen", "einladen"],
    related: ["der Wirt", "die Wirtin", "das Gasthaus", "die Gastronomie"],
    examples: [
      { de: "Die Firma bewirtete ihre Geschäftspartner beim Jahresabschluss.", zh: "公司在年終設宴款待了商業合作夥伴。" },
      { de: "Bewirtungskosten können steuerlich abgesetzt werden.", zh: "餐飲招待費用可以作為稅務抵扣。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：verzichten（放棄）
  // ══════════════════════════════════════════════

  {
    id: 82,
    word: "verzichten",
    artikel: "",
    root: "verzichten",
    rootMeaning: "放棄、捨棄（to renounce / do without）",
    zh: "放棄、捨棄（主動不要某事物）",
    en: "to renounce, to forgo, to do without",
    breakdown: "ver-（徹底）+ zichten（古德語，要求、索取）\n→ 「徹底放手不再要求」= 放棄\n⚠️ 固定搭配：verzichten auf + Akkusativ\n→ der Verzicht = 放棄（名詞）\n→ unverzichtbar = 不可或缺的（常用！）",
    collocations: [
      { de: "auf etw. verzichten", zh: "放棄某事物（固定搭配）" },
      { de: "freiwillig verzichten", zh: "自願放棄" },
      { de: "der Verzicht auf etw.", zh: "對某事物的放棄（名詞）" },
      { de: "unverzichtbar", zh: "不可或缺的（反義形容詞，超常用）" }
    ],
    synonyms: ["aufgeben", "absehen von", "sich enthalten"],
    related: ["der Verzicht", "unverzichtbar", "verzichtbar"],
    examples: [
      { de: "Aus Rücksicht auf ihre Kollegen verzichtete sie auf die Gehaltserhöhung.", zh: "出於對同事的體諒，她放棄了加薪。" },
      { de: "Pünktlichkeit ist in diesem Berufsfeld unverzichtbar.", zh: "準時在這個職業領域是不可或缺的。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：erkunden（探查、打聽）
  // ══════════════════════════════════════════════

  {
    id: 83,
    word: "erkundigen",
    artikel: "",
    root: "erkunden",
    rootMeaning: "探查、打聽（to inquire / find out）",
    zh: "詢問、打聽（sich erkundigen）",
    en: "to inquire, to ask about, to find out",
    breakdown: "er-（達成某結果）+ kunden（古德語，探查、了解）\n→ 「主動去了解未知的事」= 詢問、打聽\n⚠️ 幾乎只用反身形式：sich erkundigen nach + Dativ\n\n⚠️ 易混淆：kündigen（終止合約/辭職）\n字形相似但來自不同字根，意思完全不同！\n→ kündigen = 宣告終止\n→ sich erkundigen = 主動詢問了解",
    collocations: [
      { de: "sich nach etw. erkundigen", zh: "打聽某事（固定搭配 nach + Dat.）" },
      { de: "sich nach dem Stand erkundigen", zh: "詢問進度" },
      { de: "sich telefonisch erkundigen", zh: "電話詢問" },
      { de: "die Erkundigung", zh: "詢問、打聽（名詞）" }
    ],
    synonyms: ["nachfragen", "anfragen", "sich informieren über"],
    related: ["erkunden", "die Erkundigung"],
    examples: [
      { de: "Ich erkundige mich nach dem Stand meiner Bewerbung.", zh: "我詢問我的申請進度。" },
      { de: "Bitte erkundigen Sie sich beim zuständigen Amt nach den genauen Anforderungen.", zh: "請向負責機關詢問確切要求。" }
    ]
  },
  {
    id: 84,
    word: "entnehmen",
    artikel: "",
    root: "nehmen",
    rootMeaning: "拿取（to take）",
    zh: "從……取出；從……得知（正式）",
    en: "to take from; to gather / infer from",
    breakdown: "ent-（從內部取出、分離）+ nehmen（拿取）\n→ 「從某處把東西取出來」= 取出\n→ 引申：從文件/資料中「取出」資訊 = 得知\n→ 後者是書面/正式德語常用表達\n⚠️ 固定搭配：etw. etw. (Dat.) entnehmen",
    collocations: [
      { de: "etw. einer Tabelle / dem Anhang entnehmen", zh: "從表格／附件中查看" },
      { de: "Entnehmen Sie bitte der folgenden Tabelle …", zh: "請從下表中查看……（正式書面）" },
      { de: "aus etw. entnehmen, dass …", zh: "從某處得知……" },
      { de: "eine Probe entnehmen", zh: "取樣（字面：取出樣本）" }
    ],
    synonyms: ["entnehmen", "herausnehmen（取出）", "ersehen aus（得知，同義正式用法）"],
    related: ["entgegennehmen", "annehmen", "aufnehmen", "übernehmen", "wahrnehmen", "teilnehmen"],
    examples: [
      { de: "Die Informationen entnehmen Sie bitte dem Anhang.", zh: "請從附件中查看相關資訊。" },
      { de: "Aus dem Bericht lässt sich entnehmen, dass die Simulation erfolgreich war.", zh: "從報告中可以得知模擬已成功完成。" }
    ]
  },  
// ══════════════════════════════════════════════
  //  詞根：halten（持有、保持）
  // ══════════════════════════════════════════════

  {
    id: 85,
    word: "einhalten",
    artikel: "",
    root: "halten",
    rootMeaning: "持有、保持（to hold / keep）",
    zh: "遵守、遵循（規定、期限）",
    en: "to comply with, to observe, to keep (a deadline)",
    breakdown: "ein-（進入、納入）+ halten（保持）\n→ 「把規定保持在自己行為之內」= 遵守\n⚠️ 固定搭配：etw. einhalten（不加 sich）",
    collocations: [
      { de: "Regeln / Vorschriften einhalten", zh: "遵守規定" },
      { de: "einen Termin / eine Frist einhalten", zh: "遵守約定時間 / 期限" },
      { de: "die Kündigungsfrist einhalten", zh: "遵守預告期" }
    ],
    synonyms: ["befolgen", "beachten", "respektieren"],
    related: ["aufhalten", "behalten", "erhalten", "verhalten", "anhalten", "festhalten"],
    examples: [
      { de: "Alle Mitarbeiter müssen die Sicherheitsvorschriften einhalten.", zh: "所有員工必須遵守安全規定。" },
      { de: "Bitte halten Sie den vereinbarten Termin ein.", zh: "請遵守約定的時間。" }
    ]
  },

  {
    id: 86,
    word: "festhalten",
    artikel: "",
    root: "halten",
    rootMeaning: "持有、保持（to hold / keep）",
    zh: "記錄、記下；堅持；抓住",
    en: "to record, to note down; to hold on to; to hold fast",
    breakdown: "fest-（牢固）+ halten（保持）\n→ 「牢固地保持」= 抓住、記錄下來\n→ 常見兩義：\n① 把想法/結果記下來（schriftlich festhalten）\n② 堅持某立場（an etw. festhalten）",
    collocations: [
      { de: "etw. schriftlich festhalten", zh: "書面記錄某事" },
      { de: "an einem Plan / einer Meinung festhalten", zh: "堅持計畫／意見" },
      { de: "im Protokoll festhalten", zh: "在會議記錄中記下" }
    ],
    synonyms: ["dokumentieren（記錄）", "bestehen auf（堅持）"],
    related: ["einhalten", "aufhalten", "behalten", "erhalten", "verhalten", "anhalten"],
    examples: [
      { de: "Die Ergebnisse wurden im Bericht schriftlich festgehalten.", zh: "結果被書面記錄在報告中。" },
      { de: "Sie hält an ihrem Plan fest, obwohl es Schwierigkeiten gibt.", zh: "儘管有困難，她仍堅持自己的計畫。" }
    ]
  },

  {
    id: 87,
    word: "anhalten",
    artikel: "",
    root: "halten",
    rootMeaning: "持有、保持（to hold / keep）",
    zh: "停止；持續；催促（某人做某事）",
    en: "to stop; to continue; to urge",
    breakdown: "an-（靠近、施加）+ halten（保持）\n→ 「把動作保持在某處」= 停止\n→ 引申：「持續」（der Zustand hält an = andauern）\n→ 「施加壓力讓某人做」= 催促",
    collocations: [
      { de: "das Auto anhalten", zh: "把車停下來" },
      { de: "Der Regen hält an.", zh: "雨持續下著。" },
      { de: "jemanden zur Pünktlichkeit anhalten", zh: "督促某人守時" }
    ],
    synonyms: ["stoppen（停止）", "andauern（持續）", "auffordern（催促）"],
    related: ["einhalten", "festhalten", "aufhalten", "behalten", "erhalten", "verhalten"],
    examples: [
      { de: "Das schlechte Wetter hält bereits seit einer Woche an.", zh: "壞天氣已經持續一週了。" },
      { de: "Der Fahrer hielt das Fahrzeug sofort an.", zh: "司機立即將車輛停下。" }
    ]
  },

  {
    id: 88,
    word: "verhalten",
    artikel: "",
    root: "halten",
    rootMeaning: "持有、保持（to hold / keep）",
    zh: "行為、舉止（sich verhalten）；抑制的",
    en: "to behave; restrained (adj.)",
    breakdown: "ver-（朝某方向完成）+ halten（保持）\n→ 「保持住自己的狀態」= 行為、舉止\n→ sich verhalten = 表現、行動（反身）\n→ verhalten（形容詞）= 克制的、低調的",
    collocations: [
      { de: "sich professionell / korrekt verhalten", zh: "表現專業 / 行為得當" },
      { de: "das Verhalten", zh: "行為、舉止（名詞）" },
      { de: "sich ruhig verhalten", zh: "保持冷靜" }
    ],
    synonyms: ["sich benehmen", "sich aufführen"],
    related: ["einhalten", "festhalten", "anhalten", "aufhalten", "behalten", "erhalten"],
    examples: [
      { de: "Im Vorstellungsgespräch sollte man sich professionell verhalten.", zh: "面試時應該表現得專業。" },
      { de: "Das Verhalten des Mitarbeiters war vorbildlich.", zh: "那位員工的行為堪稱典範。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  nehmen 補充
  // ══════════════════════════════════════════════

  {
    id: 89,
    word: "unternehmen",
    artikel: "",
    root: "nehmen",
    rootMeaning: "拿取（to take）",
    zh: "從事、進行（某活動）；das Unternehmen = 企業",
    en: "to undertake, to do (something); the company (noun)",
    breakdown: "unter-（在……之下、承擔）+ nehmen（拿取）\n→ 「把任務拿到自己身上承擔」= 從事、進行\n→ das Unternehmen = 企業（「承擔事業的單位」）\n⚠️ 兩種詞性，意思不同：\n動詞 unternehmen = 進行活動\n名詞 das Unternehmen = 企業",
    collocations: [
      { de: "etwas unternehmen", zh: "做點什麼、採取行動" },
      { de: "einen Ausflug unternehmen", zh: "進行一次郊遊" },
      { de: "das Unternehmen", zh: "企業（名詞）" },
      { de: "unternehmerisch denken", zh: "有創業精神地思考" }
    ],
    synonyms: ["durchführen", "machen", "starten"],
    related: ["entgegennehmen", "annehmen", "aufnehmen", "übernehmen", "wahrnehmen", "teilnehmen", "entnehmen"],
    examples: [
      { de: "Wir müssen etwas unternehmen, um das Problem zu lösen.", zh: "我們必須採取行動來解決問題。" },
      { de: "Das Unternehmen beschäftigt über 500 Mitarbeiter.", zh: "這家企業僱用了超過500名員工。" }
    ]
  },

  {
    id: 90,
    word: "genehmigen",
    artikel: "",
    root: "nehmen",
    rootMeaning: "拿取（to take）",
    zh: "批准、許可",
    en: "to approve, to authorize, to grant",
    breakdown: "ge- + nehm（來自 nehmen）+ -igen（動詞後綴）\n→ 「讓對方可以拿取、使用」= 批准\n→ die Genehmigung = 許可、批准（名詞）",
    collocations: [
      { de: "einen Antrag genehmigen", zh: "批准一份申請" },
      { de: "die Genehmigung erteilen / einholen", zh: "給予 / 取得許可" },
      { de: "genehmigungspflichtig", zh: "需要許可的" }
    ],
    synonyms: ["bewilligen", "erlauben", "zustimmen"],
    related: ["entgegennehmen", "annehmen", "aufnehmen", "übernehmen", "wahrnehmen", "entnehmen"],
    examples: [
      { de: "Der Antrag wurde von der Behörde genehmigt.", zh: "申請已獲機關批准。" },
      { de: "Ohne Genehmigung darf das Gebäude nicht betreten werden.", zh: "沒有許可不得進入該建築。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：stellen 補充
  // ══════════════════════════════════════════════

  {
    id: 91,
    word: "aufstellen",
    artikel: "",
    root: "stellen",
    rootMeaning: "放置（to place / put）",
    zh: "制定、建立；豎立；組建",
    en: "to draw up, to establish; to erect; to form (a team)",
    breakdown: "auf-（向上）+ stellen（放置）\n→ 「把東西豎立起來」= 豎立\n→ 引申：「把規則/計畫建立起來」= 制定",
    collocations: [
      { de: "eine Regel aufstellen", zh: "制定規則" },
      { de: "einen Plan aufstellen", zh: "制定計畫" },
      { de: "eine Behauptung aufstellen", zh: "提出一個主張" },
      { de: "gut aufgestellt sein", zh: "準備充分的、佈局良好的" }
    ],
    synonyms: ["formulieren", "festlegen", "erarbeiten"],
    related: ["ausstellen", "erstellen", "feststellen", "herstellen", "einstellen", "festlegen"],
    examples: [
      { de: "Das Team hat klare Regeln für die Zusammenarbeit aufgestellt.", zh: "團隊為合作制定了明確的規則。" },
      { de: "Das Unternehmen ist gut aufgestellt für die Zukunft.", zh: "公司為未來做好了充分準備。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  legen 補充
  // ══════════════════════════════════════════════

  {
    id: 92,
    word: "ablegen",
    artikel: "",
    root: "legen",
    rootMeaning: "放置（to lay / place）",
    zh: "放下（衣物）；參加（考試）；存放（文件）",
    en: "to take off (clothing); to sit (an exam); to file (documents)",
    breakdown: "ab-（離開、放到一邊）+ legen（放置）\n→ 「把東西放到一邊」= 放下\n→ 引申：參加考試（Prüfung ablegen = 把考試放到一邊完成）\n→ 存放文件（Akten ablegen）",
    collocations: [
      { de: "eine Prüfung ablegen", zh: "參加考試（正式用語）" },
      { de: "einen Eid ablegen", zh: "宣誓" },
      { de: "Akten / Dokumente ablegen", zh: "歸檔文件" },
      { de: "den Mantel ablegen", zh: "脫外套" }
    ],
    synonyms: ["ablegen（參加）", "archivieren（歸檔）"],
    related: ["festlegen", "verlegen", "vorlegen", "belegen", "hinterlegen"],
    examples: [
      { de: "Sie hat die Abschlussprüfung erfolgreich abgelegt.", zh: "她成功地通過了畢業考試。" },
      { de: "Bitte legen Sie die Unterlagen nach Datum ab.", zh: "請按日期歸檔文件。" }
    ]
  },

  {
    id: 93,
    word: "hinterlegen",
    artikel: "",
    root: "legen",
    rootMeaning: "放置（to lay / place）",
    zh: "存放、寄存；留存（資料）",
    en: "to deposit, to store, to leave (for safekeeping)",
    breakdown: "hinter-（在後面、留置）+ legen（放置）\n→ 「把東西放在後面留存」= 存放、寄存",
    collocations: [
      { de: "Daten im System hinterlegen", zh: "在系統中存入資料" },
      { de: "einen Schlüssel hinterlegen", zh: "寄存鑰匙" },
      { de: "Sicherheiten hinterlegen", zh: "存入擔保物" }
    ],
    synonyms: ["deponieren", "einlagern", "speichern"],
    related: ["festlegen", "verlegen", "vorlegen", "belegen", "ablegen"],
    examples: [
      { de: "Bitte hinterlegen Sie Ihre Kontaktdaten im System.", zh: "請在系統中存入您的聯繫資料。" },
      { de: "Der Schlüssel wurde beim Hausmeister hinterlegt.", zh: "鑰匙寄存在看門人那裡。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  sprechen 補充
  // ══════════════════════════════════════════════

  {
    id: 94,
    word: "ansprechen",
    artikel: "",
    root: "sprechen",
    rootMeaning: "說話（to speak）",
    zh: "跟某人說話、提及（問題）；吸引",
    en: "to address, to approach; to bring up (an issue); to appeal to",
    breakdown: "an-（指向某人）+ sprechen（說話）\n→ 「對著某人說話」= 主動開口\n→ 引申：把問題提出來討論（ein Problem ansprechen）\n→ 引申②：某物吸引某人（Das spricht mich an.）",
    collocations: [
      { de: "ein Problem / Thema ansprechen", zh: "提出問題／主題" },
      { de: "jemanden auf etw. ansprechen", zh: "就某事詢問某人" },
      { de: "Das spricht mich an.", zh: "這吸引了我。（這很合我的意）" }
    ],
    synonyms: ["erwähnen", "thematisieren", "heransprechen"],
    related: ["absprechen", "besprechen", "versprechen", "widersprechen", "aussprechen"],
    examples: [
      { de: "Ich möchte ein wichtiges Problem ansprechen.", zh: "我想提出一個重要的問題。" },
      { de: "Er sprach den Kollegen direkt auf den Fehler an.", zh: "他直接就那個錯誤詢問了同事。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：greifen（抓取）
  // ══════════════════════════════════════════════

  {
    id: 95,
    word: "ergreifen",
    artikel: "",
    root: "greifen",
    rootMeaning: "抓取（to grasp / seize）",
    zh: "採取（措施）；抓住；選擇（職業）",
    en: "to take (measures); to seize; to take up (a profession)",
    breakdown: "er-（達成某結果）+ greifen（抓取）\n→ 「抓取並完成」= 採取、抓住\n→ 常見於職場固定搭配",
    collocations: [
      { de: "Maßnahmen ergreifen", zh: "採取措施" },
      { de: "einen Beruf ergreifen", zh: "選擇從事某職業" },
      { de: "die Initiative ergreifen", zh: "主動採取行動" },
      { de: "eine Chance ergreifen", zh: "抓住機會" }
    ],
    synonyms: ["einleiten", "treffen（Maßnahmen）", "wählen（Beruf）"],
    related: ["zugreifen", "angreifen", "begreifen", "eingreifen", "aufgreifen"],
    examples: [
      { de: "Das Unternehmen muss sofort Maßnahmen ergreifen.", zh: "公司必須立即採取措施。" },
      { de: "Sie hat den Beruf der Physikerin ergriffen.", zh: "她選擇從事物理學家的職業。" }
    ]
  },

  {
    id: 96,
    word: "zugreifen",
    artikel: "",
    root: "greifen",
    rootMeaning: "抓取（to grasp / seize）",
    zh: "存取（資料）；抓住機會；動手（拿食物）",
    en: "to access (data); to grab an opportunity; to help oneself",
    breakdown: "zu-（朝向）+ greifen（抓取）\n→ 「朝某物抓取」= 存取、取用\n→ IT 用語：auf eine Datei zugreifen = 存取檔案",
    collocations: [
      { de: "auf eine Datei / Daten zugreifen", zh: "存取檔案 / 資料" },
      { de: "auf ein System zugreifen", zh: "存取系統" },
      { de: "Bitte greifen Sie zu!", zh: "請動手吃！（餐桌用語）" }
    ],
    synonyms: ["abrufen", "öffnen", "nutzen"],
    related: ["ergreifen", "angreifen", "begreifen", "eingreifen", "aufgreifen"],
    examples: [
      { de: "Nur autorisierte Benutzer dürfen auf diese Daten zugreifen.", zh: "只有授權用戶才可以存取這些資料。" },
      { de: "Auf die Datei kann ich von zu Hause aus zugreifen.", zh: "我可以從家裡存取這個檔案。" }
    ]
  },

  {
    id: 97,
    word: "eingreifen",
    artikel: "",
    root: "greifen",
    rootMeaning: "抓取（to grasp / seize）",
    zh: "介入、干預",
    en: "to intervene, to step in, to interfere",
    breakdown: "ein-（進入）+ greifen（抓取）\n→ 「插手進去抓住局勢」= 介入、干預",
    collocations: [
      { de: "in einen Prozess eingreifen", zh: "介入一個流程" },
      { de: "rechtzeitig eingreifen", zh: "及時介入" },
      { de: "der Eingriff", zh: "介入；手術（名詞）" }
    ],
    synonyms: ["intervenieren", "einschreiten", "sich einmischen"],
    related: ["ergreifen", "zugreifen", "angreifen", "begreifen", "aufgreifen"],
    examples: [
      { de: "Bei diesem Fehler muss die Teamleitung eingreifen.", zh: "發生這個錯誤時，團隊領導必須介入。" },
      { de: "Es war notwendig, sofort einzugreifen.", zh: "有必要立即介入。" }
    ]
  },

  {
    id: 98,
    word: "begreifen",
    artikel: "",
    root: "greifen",
    rootMeaning: "抓取（to grasp / seize）",
    zh: "理解、領悟",
    en: "to comprehend, to grasp, to understand",
    breakdown: "be-（施加到對象）+ greifen（抓取）\n→ 「把概念抓進腦子裡」= 理解、領悟\n→ 比 verstehen 更強調「終於抓到了」的感覺",
    collocations: [
      { de: "etw. begreifen", zh: "理解某事" },
      { de: "schwer zu begreifen", zh: "難以理解" },
      { de: "begreiflich machen", zh: "讓某人明白" }
    ],
    synonyms: ["verstehen", "erfassen", "nachvollziehen"],
    related: ["ergreifen", "zugreifen", "angreifen", "eingreifen", "aufgreifen"],
    examples: [
      { de: "Ich begreife nicht, warum der Fehler immer wieder auftritt.", zh: "我不理解為什麼這個錯誤一再出現。" },
      { de: "Langsam beginnt er zu begreifen, worum es geht.", zh: "他慢慢開始理解這是怎麼回事。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：trauen（信任、託付）
  // ══════════════════════════════════════════════

  {
    id: 99,
    word: "vertrauen",
    artikel: "",
    root: "trauen",
    rootMeaning: "信任、託付（to trust）",
    zh: "信任、信賴",
    en: "to trust, to rely on",
    breakdown: "ver-（強化、完成）+ trauen（信任）\n→ 「完全信任」= 信賴\n→ vertrauen auf + Akk. = 依賴、信賴某人/某事\n→ das Vertrauen = 信任（名詞）",
    collocations: [
      { de: "jemandem vertrauen", zh: "信任某人" },
      { de: "auf jemanden / etw. vertrauen", zh: "依賴某人 / 某事" },
      { de: "das Vertrauen aufbauen / verlieren", zh: "建立 / 失去信任" }
    ],
    synonyms: ["sich verlassen auf", "glauben an"],
    related: ["zutrauen", "vertraut", "vertrauensvoll", "vertraulich", "Selbstvertrauen"],
    examples: [
      { de: "Im Team ist es wichtig, sich gegenseitig zu vertrauen.", zh: "在團隊中，相互信任非常重要。" },
      { de: "Ich vertraue darauf, dass das Projekt pünktlich abgeschlossen wird.", zh: "我信任這個項目會按時完成。" }
    ]
  },

  {
    id: 100,
    word: "zutrauen",
    artikel: "",
    root: "trauen",
    rootMeaning: "信任、託付（to trust）",
    zh: "認為某人能勝任、對某人有信心",
    en: "to believe someone is capable of, to credit someone with",
    breakdown: "zu-（朝向、針對某人）+ trauen（信任）\n→ 「把信任投向某人，認為他做得到」= 認為某人有能力\n→ 固定搭配：jemandem etw. zutrauen",
    collocations: [
      { de: "jemandem etw. zutrauen", zh: "認為某人能做到某事" },
      { de: "sich etw. zutrauen", zh: "自認有能力做某事" },
      { de: "Das traue ich ihr zu.", zh: "我認為她做得到這件事。" }
    ],
    synonyms: ["glauben", "sich vorstellen", "jemanden für fähig halten"],
    related: ["vertrauen", "vertraut", "vertrauensvoll", "vertraulich", "Selbstvertrauen"],
    examples: [
      { de: "Ich traue mir zu, diese Aufgabe selbstständig zu erledigen.", zh: "我認為我有能力獨立完成這項任務。" },
      { de: "Die Chefin traut ihm die Projektleitung zu.", zh: "女主管認為他能勝任項目領導職務。" }
    ]
  },

  {
    id: 101,
    word: "vertraut",
    artikel: "",
    root: "trauen",
    rootMeaning: "信任、託付（to trust）",
    zh: "熟悉的、親密的",
    en: "familiar, intimate, well-acquainted",
    breakdown: "ver- + traut（來自 trauen）\n→ 「充分信任的狀態」= 熟悉、親密\n→ vertraut mit etw. sein = 熟悉某事",
    collocations: [
      { de: "mit etw. vertraut sein", zh: "熟悉某事" },
      { de: "sich vertraut machen mit", zh: "讓自己熟悉……" },
      { de: "vertraute Umgebung", zh: "熟悉的環境" }
    ],
    synonyms: ["bekannt", "geläufig", "erfahren in"],
    related: ["vertrauen", "zutrauen", "vertrauensvoll", "vertraulich", "Selbstvertrauen"],
    examples: [
      { de: "Sie ist mit den Sicherheitsvorschriften gut vertraut.", zh: "她對安全規定非常熟悉。" },
      { de: "Neue Mitarbeiter müssen sich zunächst mit dem System vertraut machen.", zh: "新員工必須首先熟悉系統。" }
    ]
  },

  {
    id: 102,
    word: "das Selbstvertrauen",
    artikel: "das",
    root: "trauen",
    rootMeaning: "信任、託付（to trust）",
    zh: "自信",
    en: "self-confidence, self-assurance",
    breakdown: "Selbst（自己）+ Vertrauen（信任）\n→ 「對自己的信任」= 自信",
    collocations: [
      { de: "Selbstvertrauen haben / zeigen", zh: "有 / 展現自信" },
      { de: "das Selbstvertrauen stärken", zh: "增強自信" },
      { de: "selbstbewusst auftreten", zh: "自信地表現（近義搭配）" }
    ],
    synonyms: ["das Selbstbewusstsein", "die Sicherheit"],
    related: ["vertrauen", "zutrauen", "vertraut", "vertrauensvoll", "vertraulich"],
    examples: [
      { de: "Beim Vorstellungsgespräch ist Selbstvertrauen sehr wichtig.", zh: "面試時自信非常重要。" },
      { de: "Durch Erfolge wächst das Selbstvertrauen.", zh: "透過成功，自信會增長。" }
    ]
  },

  {
    id: 103,
    word: "vertraulich",
    artikel: "",
    root: "trauen",
    rootMeaning: "信任、託付（to trust）",
    zh: "機密的、保密的；親密的",
    en: "confidential; intimate",
    breakdown: "ver- + trau- + -lich（形容詞後綴）\n→ 「只在信任範圍內的」= 機密、保密\n→ 常見於職場文件、郵件標示",
    collocations: [
      { de: "vertrauliche Informationen", zh: "機密資訊" },
      { de: "streng vertraulich", zh: "嚴格保密" },
      { de: "etw. vertraulich behandeln", zh: "以保密方式處理某事" }
    ],
    synonyms: ["geheim", "nicht öffentlich", "intern"],
    related: ["vertrauen", "zutrauen", "vertraut", "vertrauensvoll", "Selbstvertrauen"],
    examples: [
      { de: "Diese Informationen sind streng vertraulich und dürfen nicht weitergegeben werden.", zh: "這些資訊嚴格保密，不得外傳。" },
      { de: "Bitte behandeln Sie diesen Bericht als vertraulich.", zh: "請將這份報告視為機密。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：tragen（攜帶、承擔）
  // ══════════════════════════════════════════════

  {
    id: 104,
    word: "eintragen",
    artikel: "",
    root: "tragen",
    rootMeaning: "攜帶、承擔（to carry / bear）",
    zh: "填入、登記、記入",
    en: "to enter, to register, to fill in",
    breakdown: "ein-（進入）+ tragen（攜帶）\n→ 「把資料帶進去填入」= 填寫、登記",
    collocations: [
      { de: "persönliche Angaben eintragen", zh: "填入個人資料" },
      { de: "einen Termin eintragen", zh: "記入一個約定時間" },
      { de: "sich in eine Liste eintragen", zh: "在清單上登記" }
    ],
    synonyms: ["einschreiben", "notieren", "erfassen"],
    related: ["übertragen", "beitragen", "vortragen", "beauftragen", "tragen"],
    examples: [
      { de: "Bitte tragen Sie Ihre persönlichen Angaben in das Formular ein.", zh: "請將您的個人資料填入表格中。" },
      { de: "Der Termin wurde in den Kalender eingetragen.", zh: "約定時間已記入行事曆。" }
    ]
  },

  {
    id: 105,
    word: "übertragen",
    artikel: "",
    root: "tragen",
    rootMeaning: "攜帶、承擔（to carry / bear）",
    zh: "傳輸（資料）；授權、轉交（任務）；翻譯",
    en: "to transfer (data); to delegate (a task); to translate",
    breakdown: "über-（越過、轉移）+ tragen（攜帶）\n→ 「把東西帶到另一方」= 傳輸、轉交\n→ 三種意思靠搭配判斷",
    collocations: [
      { de: "Daten auf ein Gerät übertragen", zh: "把資料傳輸到設備上" },
      { de: "jemandem eine Aufgabe übertragen", zh: "把任務授權給某人" },
      { de: "ins Deutsche übertragen", zh: "翻譯成德文" }
    ],
    synonyms: ["transferieren（傳輸）", "delegieren（授權）", "übersetzen（翻譯）"],
    related: ["eintragen", "beitragen", "vortragen", "beauftragen", "tragen"],
    examples: [
      { de: "Die Aufgabe wurde dem neuen Mitarbeiter übertragen.", zh: "這項任務被授權給了新員工。" },
      { de: "Bitte übertragen Sie die Daten auf das neue Gerät.", zh: "請將資料傳輸到新設備上。" }
    ]
  },

  {
    id: 106,
    word: "beitragen",
    artikel: "",
    root: "tragen",
    rootMeaning: "攜帶、承擔（to carry / bear）",
    zh: "貢獻、有助於",
    en: "to contribute to, to help",
    breakdown: "bei-（一起、附加）+ tragen（承擔）\n→ 「把自己的一份帶進來」= 貢獻\n→ 固定搭配：zu etw. beitragen",
    collocations: [
      { de: "zu etw. beitragen", zh: "對……有所貢獻" },
      { de: "wesentlich beitragen", zh: "做出重要貢獻" },
      { de: "der Beitrag", zh: "貢獻、文章、費用（名詞）" }
    ],
    synonyms: ["helfen", "fördern", "unterstützen"],
    related: ["eintragen", "übertragen", "vortragen", "beauftragen", "tragen"],
    examples: [
      { de: "Jeder kann zum Erfolg des Teams beitragen.", zh: "每個人都可以為團隊的成功做出貢獻。" },
      { de: "Dieses Projekt trägt zur Verbesserung der Simulationsqualität bei.", zh: "這個項目有助於提升模擬品質。" }
    ]
  },

  {
    id: 107,
    word: "vortragen",
    artikel: "",
    root: "tragen",
    rootMeaning: "攜帶、承擔（to carry / bear）",
    zh: "呈報、提出（意見/要求）；演講",
    en: "to present, to submit (a request); to give a presentation",
    breakdown: "vor-（在前面）+ tragen（攜帶）\n→ 「把東西帶到眾人前面」= 提出、呈報、演講",
    collocations: [
      { de: "ein Anliegen vortragen", zh: "提出一個訴求" },
      { de: "Ergebnisse vortragen", zh: "呈報結果" },
      { de: "einen Vortrag halten", zh: "進行演講（名詞搭配）" }
    ],
    synonyms: ["präsentieren", "darlegen", "vorstellen"],
    related: ["eintragen", "übertragen", "beitragen", "beauftragen", "tragen"],
    examples: [
      { de: "Sie trug ihr Anliegen direkt dem Vorgesetzten vor.", zh: "她直接向上司提出了她的訴求。" },
      { de: "Die Ergebnisse werden im nächsten Meeting vorgetragen.", zh: "結果將在下次會議中呈報。" }
    ]
  },

  {
    id: 108,
    word: "beauftragen",
    artikel: "",
    root: "tragen",
    rootMeaning: "攜帶、承擔（to carry / bear）",
    zh: "委託、授權（某人做某事）",
    en: "to commission, to instruct, to assign",
    breakdown: "be-（施加到對象）+ Auftrag（任務）+ -en\n→ 「把任務交付給對方讓他承擔」= 委託\n→ 固定搭配：jemanden mit etw. beauftragen",
    collocations: [
      { de: "jemanden mit etw. beauftragen", zh: "委託某人做某事" },
      { de: "eine Firma beauftragen", zh: "委託一家公司" },
      { de: "den Einbau / die Wartung beauftragen", zh: "委託安裝 / 維護" }
    ],
    synonyms: ["in Auftrag geben", "bestellen", "anweisen"],
    related: ["eintragen", "übertragen", "beitragen", "vortragen", "tragen"],
    examples: [
      { de: "Wir haben eine externe Firma mit der Wartung beauftragt.", zh: "我們委託了一家外部公司進行維護。" },
      { de: "Der Projektleiter wurde mit der Koordination beauftragt.", zh: "項目負責人被委託負責協調工作。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：leuchten（發光）
  // ══════════════════════════════════════════════

  {
    id: 109,
    word: "aufleuchten",
    artikel: "",
    root: "leuchten",
    rootMeaning: "發光（to shine / light up）",
    zh: "閃亮、突然發光；（眼神）閃現",
    en: "to light up, to flash",
    breakdown: "auf-（突然向上）+ leuchten（發光）\n→ 「突然亮起來」= 閃亮、亮起",
    collocations: [
      { de: "ein Licht leuchtet auf", zh: "燈光亮起" },
      { de: "eine Idee leuchtet auf", zh: "一個想法突然閃現" },
      { de: "Die Augen leuchten auf.", zh: "眼睛閃亮（喜悅時）" }
    ],
    synonyms: ["aufblinken", "erhellen", "aufflackern"],
    related: ["einleuchten", "beleuchten", "leuchten", "erleuchten"],
    examples: [
      { de: "Auf dem Bildschirm leuchtete ein Warnsignal auf.", zh: "螢幕上突然亮起了警告信號。" },
      { de: "Ihre Augen leuchteten auf, als sie das Angebot hörte.", zh: "當她聽到這個提案時，眼睛閃亮了起來。" }
    ]
  },

  {
    id: 110,
    word: "einleuchten",
    artikel: "",
    root: "leuchten",
    rootMeaning: "發光（to shine / light up）",
    zh: "說得通、顯而易見（einleuchtend）",
    en: "to make sense, to be obvious (einleuchtend = plausible)",
    breakdown: "ein-（進入、照入）+ leuchten（發光）\n→ 「光照進來，讓人看清楚」= 說得通、有道理\n→ 幾乎只用於：Das leuchtet mir ein. / einleuchtend（形容詞）",
    collocations: [
      { de: "Das leuchtet mir ein.", zh: "我覺得這說得通。" },
      { de: "eine einleuchtende Erklärung", zh: "一個令人信服的解釋" },
      { de: "einleuchtend sein", zh: "顯而易見、合理" }
    ],
    synonyms: ["logisch sein", "nachvollziehbar sein", "verständlich sein"],
    related: ["aufleuchten", "beleuchten", "leuchten", "erleuchten"],
    examples: [
      { de: "Die Erklärung ist sehr einleuchtend und leicht zu verstehen.", zh: "這個解釋非常合理，容易理解。" },
      { de: "Das leuchtet mir sofort ein – ich verstehe das Problem jetzt.", zh: "我立刻覺得這說得通——我現在理解這個問題了。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：fassen（抓取、理解）
  // ══════════════════════════════════════════════

  {
    id: 111,
    word: "erfassen",
    artikel: "",
    root: "fassen",
    rootMeaning: "抓取、理解（to grasp / comprehend）",
    zh: "記錄、登記；理解；掌握全貌",
    en: "to record, to capture (data); to comprehend; to cover",
    breakdown: "er-（達成結果）+ fassen（抓取）\n→ 「把資料抓取並完成記錄」= 記錄、登記\n→ 引申：「把概念完全抓住」= 理解",
    collocations: [
      { de: "Daten erfassen", zh: "記錄資料" },
      { de: "die Arbeitszeit erfassen", zh: "記錄工作時間" },
      { de: "die Lage erfassen", zh: "掌握情況" },
      { de: "die Zeiterfassung", zh: "工時記錄（名詞）" }
    ],
    synonyms: ["aufnehmen", "registrieren", "verstehen"],
    related: ["zusammenfassen", "befassen", "umfassen", "auffassen", "fassen"],
    examples: [
      { de: "Die Arbeitszeiten werden elektronisch erfasst.", zh: "工作時間以電子方式記錄。" },
      { de: "Ich habe die Situation sofort erfasst.", zh: "我立刻掌握了情況。" }
    ]
  },

  {
    id: 112,
    word: "zusammenfassen",
    artikel: "",
    root: "fassen",
    rootMeaning: "抓取、理解（to grasp / comprehend）",
    zh: "總結、概括",
    en: "to summarize, to sum up",
    breakdown: "zusammen-（一起）+ fassen（抓取）\n→ 「把所有要點抓在一起」= 總結",
    collocations: [
      { de: "kurz zusammenfassen", zh: "簡短概括" },
      { de: "stichpunktartig zusammenfassen", zh: "以要點形式概括" },
      { de: "die Zusammenfassung", zh: "摘要（名詞）" }
    ],
    synonyms: ["zusammenstellen", "resümieren", "überblicken"],
    related: ["erfassen", "befassen", "umfassen", "auffassen", "fassen"],
    examples: [
      { de: "Können Sie die wichtigsten Punkte kurz zusammenfassen?", zh: "您能簡短概括一下要點嗎？" },
      { de: "Die Ergebnisse werden stichpunktartig zusammengefasst.", zh: "結果以要點形式概括。" }
    ]
  },

  {
    id: 113,
    word: "befassen",
    artikel: "",
    root: "fassen",
    rootMeaning: "抓取、理解（to grasp / comprehend）",
    zh: "處理、研究（sich befassen mit）",
    en: "to deal with, to concern oneself with",
    breakdown: "be-（施加到對象）+ fassen（抓取）\n→ 「把某課題抓在手上處理」= 處理、研究\n→ 幾乎只用反身形式：sich befassen mit + Dativ",
    collocations: [
      { de: "sich mit einem Thema befassen", zh: "研究、處理某主題" },
      { de: "sich eingehend befassen mit", zh: "深入研究" },
      { de: "sich beruflich befassen mit", zh: "從職業上處理……" }
    ],
    synonyms: ["sich beschäftigen mit", "sich widmen", "behandeln"],
    related: ["erfassen", "zusammenfassen", "umfassen", "auffassen", "fassen"],
    examples: [
      { de: "In meiner Forschung befasse ich mich mit Materialsimulation.", zh: "在我的研究中，我研究材料模擬。" },
      { de: "Das Team befasst sich derzeit mit diesem Problem.", zh: "團隊目前正在處理這個問題。" }
    ]
  },

  {
    id: 114,
    word: "umfassen",
    artikel: "",
    root: "fassen",
    rootMeaning: "抓取、理解（to grasp / comprehend）",
    zh: "包含、涵蓋",
    en: "to include, to cover, to encompass",
    breakdown: "um-（圍繞、環抱）+ fassen（抓取）\n→ 「把範圍都環抱住」= 包含、涵蓋\n→ 比 einschließen 更強調「全面涵蓋」",
    collocations: [
      { de: "etw. umfasst etw.", zh: "某物涵蓋某物" },
      { de: "umfassend", zh: "全面的、廣泛的（形容詞）" },
      { de: "das Angebot umfasst", zh: "服務包含……" }
    ],
    synonyms: ["beinhalten", "einschließen", "enthalten"],
    related: ["erfassen", "zusammenfassen", "befassen", "auffassen", "fassen"],
    examples: [
      { de: "Die Ausbildung umfasst theoretische und praktische Teile.", zh: "培訓包含理論和實踐部分。" },
      { de: "Der Bericht umfasst alle relevanten Daten.", zh: "報告涵蓋所有相關資料。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：gehen（走、進行）
  // ══════════════════════════════════════════════

  {
    id: 115,
    word: "vorgehen",
    artikel: "",
    root: "gehen",
    rootMeaning: "走、進行（to go / proceed）",
    zh: "進行、採取行動；優先",
    en: "to proceed, to take action; to have priority",
    breakdown: "vor-（在前面）+ gehen（走）\n→ 「往前走、率先行動」= 採取步驟\n→ 引申：優先（Sicherheit geht vor = 安全優先）\n→ das Vorgehen = 做法、程序（名詞）",
    collocations: [
      { de: "methodisch / schrittweise vorgehen", zh: "有條理地 / 逐步進行" },
      { de: "das Vorgehen", zh: "做法、程序（名詞）" },
      { de: "Sicherheit geht vor.", zh: "安全優先。" }
    ],
    synonyms: ["handeln", "verfahren", "agieren"],
    related: ["vorübergehen", "eingehen", "ausgehen", "übergehen", "angehen"],
    examples: [
      { de: "Wir müssen methodisch vorgehen, um das Problem zu lösen.", zh: "我們必須有條理地進行，以解決問題。" },
      { de: "Das Vorgehen des Teams war sehr professionell.", zh: "團隊的做法非常專業。" }
    ]
  },

  {
    id: 116,
    word: "vorübergehen",
    artikel: "",
    root: "gehen",
    rootMeaning: "走、進行（to go / proceed）",
    zh: "暫時的、過去的（vorübergehend）；經過",
    en: "to pass by; temporary (vorübergehend)",
    breakdown: "vorüber-（經過、過去）+ gehen（走）\n→ 「走過去了」= 暫時的、一時的\n→ vorübergehend（形容詞/副詞）= 暫時地",
    collocations: [
      { de: "vorübergehend geschlossen", zh: "暫時關閉" },
      { de: "eine vorübergehende Lösung", zh: "一個暫時的解決方案" },
      { de: "Die Schwierigkeiten gehen vorüber.", zh: "困難會過去的。" }
    ],
    synonyms: ["temporär", "zeitweilig", "kurzfristig"],
    related: ["vorgehen", "eingehen", "ausgehen", "übergehen", "angehen"],
    examples: [
      { de: "Die Produktion wurde vorübergehend eingestellt.", zh: "生產被暫時停止了。" },
      { de: "Das ist nur eine vorübergehende Schwierigkeit.", zh: "這只是一個暫時的困難。" }
    ]
  },

  {
    id: 117,
    word: "eingehen",
    artikel: "",
    root: "gehen",
    rootMeaning: "走、進行（to go / proceed）",
    zh: "回應、深入討論；簽訂；縮水",
    en: "to respond to, to address (a point); to enter into (an agreement); to shrink",
    breakdown: "ein-（進入）+ gehen（走）\n→ 「走進某事」= 深入討論、回應\n→ 引申：簽訂協議（eine Vereinbarung eingehen）",
    collocations: [
      { de: "auf etw. eingehen", zh: "回應 / 深入討論某事" },
      { de: "eine Vereinbarung / ein Risiko eingehen", zh: "簽訂協議 / 承擔風險" },
      { de: "Ich gehe näher darauf ein.", zh: "我來詳細說明這一點。" }
    ],
    synonyms: ["ansprechen（討論）", "abschließen（簽訂）"],
    related: ["vorgehen", "vorübergehen", "ausgehen", "übergehen", "angehen"],
    examples: [
      { de: "Ich möchte näher auf diesen Punkt eingehen.", zh: "我想詳細討論這一點。" },
      { de: "Das Unternehmen ist eine Partnerschaft mit einem chinesischen Hersteller eingegangen.", zh: "公司與一家中國製造商建立了合作關係。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：geben（給予）
  // ══════════════════════════════════════════════

  {
    id: 118,
    word: "aufgeben",
    artikel: "",
    root: "geben",
    rootMeaning: "給予（to give）",
    zh: "放棄；提交（任務）；寄出（包裹）",
    en: "to give up; to assign (homework); to send (a parcel)",
    breakdown: "auf-（向上、結束）+ geben（給予）\n→ 「把東西給出去並放手」= 放棄\n→ 引申：提交作業、寄出包裹（都是「交出去」）\n→ ⚠️ aufzugeben = 動詞原形的 zu-不定式",
    collocations: [
      { de: "nicht aufgeben", zh: "不放棄" },
      { de: "eine Aufgabe aufgeben", zh: "布置作業" },
      { de: "ein Paket aufgeben", zh: "寄出包裹" },
      { de: "den Beruf aufgeben", zh: "放棄職業" }
    ],
    synonyms: ["verzichten auf（放棄）", "einreichen（提交）"],
    related: ["angeben", "ausgeben", "vergeben", "hingeben", "abgeben"],
    examples: [
      { de: "Es ist wichtig, niemals aufzugeben.", zh: "永不放棄是很重要的。" },
      { de: "Sie hat ihren Job aufgegeben, um eine neue Stelle anzutreten.", zh: "她放棄了工作，去接任新職位。" }
    ]
  },

  {
    id: 119,
    word: "angeben",
    artikel: "",
    root: "geben",
    rootMeaning: "給予（to give）",
    zh: "填寫、提供（資料）；標示；誇口",
    en: "to state, to provide (information); to indicate; to show off",
    breakdown: "an-（指向、靠近）+ geben（給予）\n→ 「把資料給出去」= 填寫、提供\n→ 引申：標示（Preis angeben）\n→ 口語：誇口（Er gibt an. = 他愛吹牛。）",
    collocations: [
      { de: "persönliche Angaben angeben", zh: "填寫個人資料" },
      { de: "den Grund angeben", zh: "說明原因" },
      { de: "die Angabe", zh: "資料、說明（名詞，常用複數 Angaben）" }
    ],
    synonyms: ["nennen", "mitteilen", "eintragen"],
    related: ["aufgeben", "ausgeben", "vergeben", "hingeben", "abgeben"],
    examples: [
      { de: "Bitte geben Sie alle erforderlichen Angaben an.", zh: "請填寫所有必要的資料。" },
      { de: "Der Preis wird auf der Rechnung angegeben.", zh: "價格標示在發票上。" }
    ]
  },

  {
    id: 120,
    word: "ausgeben",
    artikel: "",
    root: "geben",
    rootMeaning: "給予（to give）",
    zh: "花費（金錢）；發放；充當",
    en: "to spend (money); to distribute; to pass oneself off as",
    breakdown: "aus-（向外）+ geben（給予）\n→ 「把錢向外給出去」= 花費\n→ 引申：發放物品（Materialien ausgeben）",
    collocations: [
      { de: "Geld ausgeben", zh: "花費金錢" },
      { de: "Materialien / Medikamente ausgeben", zh: "發放材料 / 藥物" },
      { de: "sich als etw. ausgeben", zh: "自稱是……、冒充" }
    ],
    synonyms: ["verausgaben（金錢）", "verteilen（發放）"],
    related: ["aufgeben", "angeben", "vergeben", "hingeben", "abgeben"],
    examples: [
      { de: "Das Unternehmen hat viel Geld für Forschung ausgegeben.", zh: "公司在研究上花費了大量資金。" },
      { de: "Die Schutzausrüstung wird am Eingang ausgegeben.", zh: "防護裝備在入口處發放。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：Maß（尺度、標準）
  // ══════════════════════════════════════════════

  {
    id: 121,
    word: "das Maß",
    artikel: "das",
    root: "Maß",
    rootMeaning: "尺度、標準（measure / standard）",
    zh: "尺度、程度；措施（複數 Maße）",
    en: "measure, degree, extent",
    breakdown: "基本字根，來自古德語「測量」\n→ in hohem Maße = 在很大程度上\n→ das Maß halten = 保持適度\n→ auf Maß = 按尺寸訂製",
    collocations: [
      { de: "in hohem / gewissem Maße", zh: "在很大 / 一定程度上" },
      { de: "über das Maß hinausgehen", zh: "超過限度" },
      { de: "das Maß halten", zh: "保持適度" }
    ],
    synonyms: ["das Ausmaß", "der Grad", "das Niveau"],
    related: ["Maßnahme", "gemäß", "maßgeblich", "angemessen", "übermäßig"],
    examples: [
      { de: "In hohem Maße hängt das Ergebnis von der Qualität der Daten ab.", zh: "結果在很大程度上取決於資料的品質。" },
      { de: "Das Ausmaß des Fehlers war nicht sofort erkennbar.", zh: "錯誤的程度起初並不明顯。" }
    ]
  },

  {
    id: 122,
    word: "die Maßnahme",
    artikel: "die",
    root: "Maß",
    rootMeaning: "尺度、標準（measure / standard）",
    zh: "措施、行動",
    en: "measure, step, action",
    breakdown: "Maß（尺度）+ Nahme（拿取，來自 nehmen）\n→ 「按照尺度採取的行動」= 措施\n→ 超高頻職場用字",
    collocations: [
      { de: "Maßnahmen ergreifen / treffen / einleiten", zh: "採取措施" },
      { de: "Maßnahmen umsetzen", zh: "實施措施" },
      { de: "geeignete Maßnahmen", zh: "適當的措施" }
    ],
    synonyms: ["der Schritt", "die Aktion", "das Vorgehen"],
    related: ["das Maß", "gemäß", "maßgeblich", "angemessen"],
    examples: [
      { de: "Das Unternehmen ergreift geeignete Maßnahmen zur Qualitätssicherung.", zh: "公司採取適當措施確保品質。" },
      { de: "Die beschlossenen Maßnahmen werden sofort umgesetzt.", zh: "已決定的措施將立即實施。" }
    ]
  },

  {
    id: 123,
    word: "gemäß",
    artikel: "",
    root: "Maß",
    rootMeaning: "尺度、標準（measure / standard）",
    zh: "根據、依照（介系詞，接 Dativ）",
    en: "in accordance with, pursuant to, according to",
    breakdown: "ge- + Maß（尺度）\n→ 「按照某個尺度標準」= 根據、依照\n→ 正式書面德語常用\n⚠️ 接 Dativ：gemäß dem Vertrag / gemäß § 5",
    collocations: [
      { de: "gemäß den Vorschriften", zh: "根據規定" },
      { de: "gemäß dem Vertrag", zh: "根據合約" },
      { de: "gemäß § 5", zh: "根據第5條" }
    ],
    synonyms: ["entsprechend", "laut", "nach", "zufolge"],
    related: ["das Maß", "die Maßnahme", "maßgeblich", "angemessen"],
    examples: [
      { de: "Gemäß den Vorschriften muss jeder Mitarbeiter eine Einweisung erhalten.", zh: "根據規定，每位員工必須接受指導說明。" },
      { de: "Die Zahlung erfolgt gemäß dem vereinbarten Zahlungsplan.", zh: "付款按照商定的付款計畫進行。" }
    ]
  },

  {
    id: 124,
    word: "maßgeblich",
    artikel: "",
    root: "Maß",
    rootMeaning: "尺度、標準（measure / standard）",
    zh: "決定性的、主要的；標準性的",
    en: "decisive, authoritative, significant",
    breakdown: "Maß（尺度）+ geb-（給予）+ -lich（形容詞後綴）\n→ 「設定尺度標準的」= 決定性的、有權威的",
    collocations: [
      { de: "maßgeblich beitragen zu", zh: "對……有決定性貢獻" },
      { de: "maßgeblich beteiligt sein", zh: "起主要作用" },
      { de: "maßgeblich für etw. sein", zh: "對某事有決定性影響" }
    ],
    synonyms: ["entscheidend", "ausschlaggebend", "wesentlich"],
    related: ["das Maß", "die Maßnahme", "gemäß", "angemessen"],
    examples: [
      { de: "Sie hat maßgeblich zum Erfolg des Projekts beigetragen.", zh: "她對項目的成功做出了決定性的貢獻。" },
      { de: "Die Qualität der Daten ist maßgeblich für das Simulationsergebnis.", zh: "資料品質對模擬結果有決定性影響。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：erfolgen / Erfolg
  // ══════════════════════════════════════════════

  {
    id: 125,
    word: "erfolgen",
    artikel: "",
    root: "folgen",
    rootMeaning: "跟隨（to follow）",
    zh: "進行、發生、完成（正式）",
    en: "to take place, to occur, to be carried out (formal)",
    breakdown: "er-（達成某結果）+ folgen（跟隨）\n→ 「跟著發生、結果產生」= 進行、發生\n→ 超正式書面德語，常見於通知、合約\n→ 常用句型：Die Zahlung erfolgt am …",
    collocations: [
      { de: "Die Zahlung erfolgt bis …", zh: "付款將在……之前完成" },
      { de: "Die Benachrichtigung erfolgt schriftlich.", zh: "通知將以書面方式進行" },
      { de: "Die Lieferung erfolgt innerhalb von …", zh: "交貨將在……內完成" }
    ],
    synonyms: ["stattfinden", "geschehen", "durchgeführt werden"],
    related: ["der Erfolg", "erfolgreich", "erfolglos", "folgen"],
    examples: [
      { de: "Die Zahlung erfolgt innerhalb von 30 Tagen nach Rechnungsstellung.", zh: "付款將在開具發票後30天內完成。" },
      { de: "Die Prüfung erfolgt gemäß den geltenden Vorschriften.", zh: "檢查按照現行規定進行。" }
    ]
  },

  {
    id: 126,
    word: "erfolgreich",
    artikel: "",
    root: "folgen",
    rootMeaning: "跟隨（to follow）",
    zh: "成功的、有成效的",
    en: "successful, effective",
    breakdown: "Erfolg（成功）+ -reich（充滿……的）\n→ 「充滿成功的」= 成功的\n→ 注意：erfolgreich（達成目標）vs. gelungen（結果出色）",
    collocations: [
      { de: "erfolgreich abschließen", zh: "成功完成" },
      { de: "erfolgreich durchführen", zh: "成功執行" },
      { de: "eine erfolgreiche Bewerbung", zh: "一份成功的申請" }
    ],
    synonyms: ["gelungen（結果出色）", "wirksam（有效的）"],
    related: ["der Erfolg", "erfolgen", "erfolglos", "folgen"],
    examples: [
      { de: "Die Simulation wurde erfolgreich durchgeführt.", zh: "模擬被成功執行了。" },
      { de: "Sie hat die Ausbildung erfolgreich abgeschlossen.", zh: "她成功地完成了培訓。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：rufen（呼叫）
  // ══════════════════════════════════════════════

  {
    id: 127,
    word: "aufrufen",
    artikel: "",
    root: "rufen",
    rootMeaning: "呼叫（to call）",
    zh: "呼叫、開啟（程式/選單）；點名；號召",
    en: "to call up, to open (a menu/program); to call on; to appeal",
    breakdown: "auf-（向上、開啟）+ rufen（呼叫）\n→ 「把程式叫起來」= 開啟\n→ 引申：點名、號召",
    collocations: [
      { de: "ein Menü / ein Programm aufrufen", zh: "開啟選單 / 程式" },
      { de: "eine Datei aufrufen", zh: "開啟一個檔案" },
      { de: "jemanden aufrufen", zh: "點名某人" }
    ],
    synonyms: ["öffnen", "starten", "auffordern"],
    related: ["anrufen", "herrufen", "abrufen", "herausfordern", "rufen"],
    examples: [
      { de: "Rufen Sie bitte das Menü auf und wählen Sie die entsprechende Option.", zh: "請開啟選單並選擇相應的選項。" },
      { de: "Die Datei kann jederzeit aufgerufen werden.", zh: "該檔案隨時可以開啟。" }
    ]
  },

  {
    id: 128,
    word: "anrufen",
    artikel: "",
    root: "rufen",
    rootMeaning: "呼叫（to call）",
    zh: "打電話",
    en: "to call, to phone",
    breakdown: "an-（靠近、朝向）+ rufen（呼叫）\n→ 「把呼叫投向某人」= 打電話",
    collocations: [
      { de: "jemanden anrufen", zh: "打電話給某人" },
      { de: "zurückrufen", zh: "回電" },
      { de: "der Anruf", zh: "電話（名詞）" }
    ],
    synonyms: ["telefonieren", "einen Anruf tätigen"],
    related: ["aufrufen", "abrufen", "herrufen", "rufen"],
    examples: [
      { de: "Bitte rufen Sie mich morgen an.", zh: "請明天打電話給我。" },
      { de: "Ich werde Sie zurückrufen, sobald ich mehr Informationen habe.", zh: "一旦我有更多資訊，我會回電給您。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  weisen 補充
  // ══════════════════════════════════════════════

  {
    id: 129,
    word: "unterweisen",
    artikel: "",
    root: "weisen",
    rootMeaning: "指示、指引（to point / direct）",
    zh: "指導、教導、講解（正式）",
    en: "to instruct, to brief, to train",
    breakdown: "unter-（在……之下）+ weisen（指引）\n→ 「在指導下引導某人」= 正式指導\n→ die Unterweisung = 指導說明（名詞，職場安全教育常用）",
    collocations: [
      { de: "Mitarbeiter unterweisen", zh: "對員工進行指導" },
      { de: "in Sicherheitsvorschriften unterweisen", zh: "就安全規定進行指導" },
      { de: "die Unterweisung", zh: "指導說明（名詞，常見於職場安全）" }
    ],
    synonyms: ["einweisen", "schulen", "anleiten"],
    related: ["verweisen", "hinweisen", "nachweisen", "ausweisen", "überweisen", "beweisen", "anweisen"],
    examples: [
      { de: "Neue Mitarbeiter werden in die Sicherheitsvorschriften unterwiesen.", zh: "新員工會接受安全規定的指導說明。" },
      { de: "Die Unterweisung muss jährlich wiederholt werden.", zh: "指導說明必須每年重複進行。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：läutern / erläutern
  // ══════════════════════════════════════════════

  {
    id: 130,
    word: "erläutern",
    artikel: "",
    root: "erläutern",
    rootMeaning: "解釋、說明（to explain / elucidate）",
    zh: "說明、解釋（較詳細）",
    en: "to explain, to elaborate, to clarify",
    breakdown: "er-（達成結果）+ läutern（純化、使清晰）\n→ 「把模糊的東西變清晰」= 詳細說明\n→ 比 erklären 更正式，強調有條理的詳細解釋",
    collocations: [
      { de: "etw. näher erläutern", zh: "進一步詳細說明某事" },
      { de: "den Hintergrund erläutern", zh: "說明背景" },
      { de: "die Erläuterung", zh: "說明、解釋（名詞）" }
    ],
    synonyms: ["erklären", "ausführen", "darlegen"],
    related: ["erklären", "ausführen", "beschreiben"],
    examples: [
      { de: "Könnten Sie diesen Punkt bitte näher erläutern?", zh: "您能進一步說明這一點嗎？" },
      { de: "Im Folgenden erläutere ich die wichtigsten Schritte.", zh: "以下我將說明最重要的步驟。" }
    ]
  },

// ══════════════════════════════════════════════
  //  詞根：kommen（來）
  // ══════════════════════════════════════════════

  {
    id: 131,
    word: "kommen",
    artikel: "",
    root: "kommen",
    rootMeaning: "來、到來（to come）",
    zh: "來（基本字根）",
    en: "to come",
    breakdown: "基本字根，衍生出大量前綴動詞和名詞（-kunft 家族）\n→ 注意：kommen 的名詞形式變成 -kunft\n（an + kommen → Ankunft；zu + kommen → Zukunft）",
    collocations: [
      { de: "jemandem etw. zukommen lassen", zh: "把某事物轉達／送達給某人" },
      { de: "zum Einsatz kommen", zh: "被投入使用" },
      { de: "zu einem Ergebnis kommen", zh: "得出結果" },
      { de: "infrage kommen", zh: "值得考慮、適合" }
    ],
    synonyms: ["ankommen", "eintreffen", "erscheinen"],
    related: ["ankommen", "auskommen", "vorkommen", "zukommen", "bekommen", "entkommen"],
    examples: [
      { de: "Wir lassen Ihnen die Unterlagen so bald wie möglich zukommen.", zh: "我們會盡快將文件送達給您。" },
      { de: "Diese Lösung kommt für uns nicht infrage.", zh: "這個解決方案對我們來說不適合。" }
    ]
  },

  {
    id: 132,
    word: "ankommen",
    artikel: "",
    root: "kommen",
    rootMeaning: "來、到來（to come）",
    zh: "抵達；取決於；重要",
    en: "to arrive; to depend on; to matter",
    breakdown: "an-（靠近、到達）+ kommen（來）\n→ 「來到某處」= 抵達\n→ 引申：es kommt auf etw. an = 取決於某事",
    collocations: [
      { de: "pünktlich ankommen", zh: "準時抵達" },
      { de: "Es kommt darauf an, dass …", zh: "關鍵在於……；取決於……" },
      { de: "gut ankommen", zh: "受到好評（某事受歡迎）" }
    ],
    synonyms: ["eintreffen", "erscheinen"],
    related: ["kommen", "auskommen", "vorkommen", "zukommen", "bekommen"],
    examples: [
      { de: "Der Zug kommt pünktlich um 10 Uhr an.", zh: "火車準時在十點抵達。" },
      { de: "Es kommt vor allem auf die Qualität der Daten an.", zh: "最重要的是取決於資料的品質。" }
    ]
  },

  {
    id: 133,
    word: "vorkommen",
    artikel: "",
    root: "kommen",
    rootMeaning: "來、到來（to come）",
    zh: "發生、出現；感覺（好像）",
    en: "to occur, to happen; to seem",
    breakdown: "vor-（在前面出現）+ kommen（來）\n→ 「出現在眼前」= 發生、出現\n→ 引申：das kommt mir komisch vor = 這讓我感覺很奇怪",
    collocations: [
      { de: "Fehler kommen vor.", zh: "錯誤時有發生。" },
      { de: "das kommt mir bekannt vor", zh: "這讓我感覺很熟悉" },
      { de: "In dieser Situation kommt es oft vor, dass …", zh: "在這種情況下，常常發生……" }
    ],
    synonyms: ["auftreten", "passieren", "erscheinen"],
    related: ["kommen", "ankommen", "auskommen", "zukommen", "bekommen"],
    examples: [
      { de: "Solche Fehler kommen in der Praxis häufig vor.", zh: "這類錯誤在實踐中經常發生。" },
      { de: "Das kommt mir seltsam vor.", zh: "這讓我感覺很奇怪。" }
    ]
  },

  {
    id: 134,
    word: "auskommen",
    artikel: "",
    root: "kommen",
    rootMeaning: "來、到來（to come）",
    zh: "相處融洽；應付、湊合",
    en: "to get along (with someone); to manage (with something)",
    breakdown: "aus-（向外、應付出去）+ kommen（來）\n→ 「能從情況中出來」= 應付、湊合\n→ 引申：mit jemandem auskommen = 與某人相處融洽",
    collocations: [
      { de: "mit jemandem gut auskommen", zh: "與某人相處融洽" },
      { de: "mit etw. auskommen", zh: "用某物應付、湊合" },
      { de: "ohne etw. auskommen", zh: "不需要某物也能應付" }
    ],
    synonyms: ["harmonieren（相處）", "zurechtkommen（應付）"],
    related: ["kommen", "ankommen", "vorkommen", "zukommen", "bekommen"],
    examples: [
      { de: "Im Team kommen alle gut miteinander aus.", zh: "團隊裡大家相處融洽。" },
      { de: "Mit diesem Budget kommen wir nicht aus.", zh: "這個預算我們應付不來。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：-kunft（kommen 的名詞形式）
  // ══════════════════════════════════════════════

  {
    id: 135,
    word: "die Auskunft",
    artikel: "die",
    root: "kunft",
    rootMeaning: "kommen（來）的名詞形式",
    zh: "資訊、回覆、問詢",
    en: "information, inquiry response",
    breakdown: "aus-（向外）+ Kunft（來自 kommen）\n→ 「讓資訊從裡面向外出來」= 提供的資訊\n→ 常用搭配：Auskunft geben / erteilen / einholen\n→ ⚠️ 注意：Auskunft（資訊回覆）≠ Information（一般資訊）",
    collocations: [
      { de: "Auskunft geben / erteilen über", zh: "就……提供資訊" },
      { de: "Auskunft einholen", zh: "取得資訊" },
      { de: "um Auskunft bitten", zh: "請求提供資訊" }
    ],
    synonyms: ["die Information", "die Antwort", "die Mitteilung"],
    related: ["Ankunft", "Zukunft", "Herkunft", "Unterkunft"],
    examples: [
      { de: "Können Sie mir bitte Auskunft über die Öffnungszeiten geben?", zh: "您能告訴我開放時間嗎？" },
      { de: "Der Kundendienst erteilt gerne Auskunft über Lieferzeiten.", zh: "客服部門很樂意提供交貨時間的資訊。" }
    ]
  },

  {
    id: 136,
    word: "die Ankunft",
    artikel: "die",
    root: "kunft",
    rootMeaning: "kommen（來）的名詞形式",
    zh: "抵達",
    en: "arrival",
    breakdown: "an-（靠近）+ Kunft（kommen）→ 「到來」= 抵達\n→ 反義：die Abfahrt（出發）",
    collocations: [
      { de: "bei der Ankunft", zh: "抵達時" },
      { de: "die voraussichtliche Ankunft", zh: "預計抵達時間" },
      { de: "Ankunft und Abfahrt", zh: "抵達與出發" }
    ],
    synonyms: ["das Eintreffen"],
    related: ["Auskunft", "Zukunft", "Herkunft", "Unterkunft"],
    examples: [
      { de: "Bei der Ankunft bitte am Empfang melden.", zh: "抵達時請在前台報到。" },
      { de: "Die voraussichtliche Ankunftszeit ist 15 Uhr.", zh: "預計抵達時間為下午三點。" }
    ]
  },

  {
    id: 137,
    word: "die Zukunft",
    artikel: "die",
    root: "kunft",
    rootMeaning: "kommen（來）的名詞形式",
    zh: "未來",
    en: "future",
    breakdown: "zu-（朝向）+ Kunft（kommen）→ 「即將到來的」= 未來\n→ zukünftig（形容詞）= 未來的、今後的",
    collocations: [
      { de: "in der / für die Zukunft", zh: "在未來 / 為了未來" },
      { de: "zukunftsorientiert", zh: "面向未來的" },
      { de: "zukünftig", zh: "今後、未來的（形容詞）" }
    ],
    synonyms: ["die Perspektive"],
    related: ["Auskunft", "Ankunft", "Herkunft", "Unterkunft"],
    examples: [
      { de: "In Zukunft werden alle Daten digital erfasst.", zh: "今後所有資料將以數位方式記錄。" },
      { de: "Das Unternehmen ist gut aufgestellt für die Zukunft.", zh: "公司為未來做好了充分準備。" }
    ]
  },

  {
    id: 138,
    word: "die Herkunft",
    artikel: "die",
    root: "kunft",
    rootMeaning: "kommen（來）的名詞形式",
    zh: "來源、出身、產地",
    en: "origin, background, provenance",
    breakdown: "her-（從那裡來）+ Kunft（kommen）→ 「從哪裡來的」= 來源、出身",
    collocations: [
      { de: "die berufliche / soziale Herkunft", zh: "職業 / 社會背景" },
      { de: "das Herkunftsland", zh: "原產地國" },
      { de: "unabhängig von der Herkunft", zh: "不論出身" }
    ],
    synonyms: ["der Ursprung", "die Abstammung"],
    related: ["Auskunft", "Ankunft", "Zukunft", "Unterkunft"],
    examples: [
      { de: "Die Herkunft des Materials muss dokumentiert werden.", zh: "材料的來源必須記錄在案。" },
      { de: "Unabhängig von der Herkunft werden alle Bewerber gleich behandelt.", zh: "不論出身，所有應聘者都受到平等對待。" }
    ]
  },

  {
    id: 139,
    word: "die Unterkunft",
    artikel: "die",
    root: "kunft",
    rootMeaning: "kommen（來）的名詞形式",
    zh: "住宿、住所",
    en: "accommodation, lodging",
    breakdown: "unter-（在下面、容納在內）+ Kunft（kommen）\n→ 「讓人來到並容納的地方」= 住宿",
    collocations: [
      { de: "eine Unterkunft suchen / buchen", zh: "尋找 / 預訂住宿" },
      { de: "Unterkunft und Verpflegung", zh: "食宿" },
      { de: "die Unterkunftskosten", zh: "住宿費用" }
    ],
    synonyms: ["die Unterkunft", "das Quartier", "die Wohnung"],
    related: ["Auskunft", "Ankunft", "Zukunft", "Herkunft"],
    examples: [
      { de: "Das Angebot schließt Unterkunft und Verpflegung ein.", zh: "這個方案包含食宿。" },
      { de: "Für die Schulung wird eine Unterkunft in der Nähe gebucht.", zh: "培訓期間將在附近預訂住宿。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  schließen 補充（beschließen）
  // ══════════════════════════════════════════════

  {
    id: 140,
    word: "beschließen",
    artikel: "",
    root: "schließen",
    rootMeaning: "關、鎖（to close / lock）",
    zh: "決議、決定（集體）；結束",
    en: "to decide, to resolve (collectively); to conclude",
    breakdown: "be-（施加到某對象）+ schließen（鎖、關）\n→ 「把討論鎖定、結束」= 做出決議\n→ der Beschluss = 決議、決定（名詞）\n→ ⚠️ 區別：sich entschließen = 個人決定；beschließen = 集體決議",
    collocations: [
      { de: "einen Beschluss fassen", zh: "通過決議（名詞搭配）" },
      { de: "eine Maßnahme beschließen", zh: "決議採取一項措施" },
      { de: "die Verordnung wurde beschlossen", zh: "法規被通過決議" }
    ],
    synonyms: ["entscheiden", "vereinbaren", "verabschieden"],
    related: ["ausschließen", "einschließen", "abschließen", "entschließen", "schließen"],
    examples: [
      { de: "Der Vorstand hat beschlossen, das Projekt fortzusetzen.", zh: "董事會決議繼續推進這個項目。" },
      { de: "Die neue Verordnung wurde gestern beschlossen.", zh: "新法規昨天被通過決議。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  nehmen 補充
  // ══════════════════════════════════════════════

  {
    id: 141,
    word: "vornehmen",
    artikel: "",
    root: "nehmen",
    rootMeaning: "拿取（to take）",
    zh: "進行（某操作）；計畫、打算（sich vornehmen）",
    en: "to carry out, to make (a change); to intend, to resolve",
    breakdown: "vor-（在前面）+ nehmen（拿取）\n→ 「把某事拿到前面來處理」= 進行某操作\n→ sich vornehmen = 下定決心、計畫做\n→ 職場常見：Änderungen vornehmen = 進行修改",
    collocations: [
      { de: "Änderungen vornehmen", zh: "進行修改" },
      { de: "Anpassungen vornehmen", zh: "進行調整" },
      { de: "sich etw. vornehmen", zh: "計畫做某事；下定決心" }
    ],
    synonyms: ["durchführen（進行）", "planen（計畫）"],
    related: ["entgegennehmen", "annehmen", "aufnehmen", "übernehmen", "unternehmen", "entnehmen"],
    examples: [
      { de: "Am Dokument wurden mehrere Änderungen vorgenommen.", zh: "文件進行了多處修改。" },
      { de: "Ich habe mir vorgenommen, täglich Deutsch zu üben.", zh: "我下定決心每天練習德語。" }
    ]
  },

  {
    id: 142,
    word: "die Ausnahme",
    artikel: "die",
    root: "nehmen",
    rootMeaning: "拿取（to take）",
    zh: "例外",
    en: "exception",
    breakdown: "aus-（向外）+ Nahme（nahm，nehmen 的名詞形式）\n→ 「從規則中拿出去的」= 例外\n→ ausnahmsweise = 作為例外（副詞）\n→ keine Ausnahme = 沒有例外",
    collocations: [
      { de: "eine Ausnahme machen", zh: "破例" },
      { de: "ohne Ausnahme", zh: "毫無例外地" },
      { de: "ausnahmsweise", zh: "作為例外；例外地（副詞）" },
      { de: "Ausnahmen bestätigen die Regel.", zh: "例外印證規則。（諺語）" }
    ],
    synonyms: ["der Sonderfall", "die Abweichung"],
    related: ["entgegennehmen", "annehmen", "aufnehmen", "vornehmen", "Stellungnahme"],
    examples: [
      { de: "In diesem Fall kann eine Ausnahme gemacht werden.", zh: "這種情況下可以破例。" },
      { de: "Diese Regel gilt ohne Ausnahme für alle Mitarbeiter.", zh: "這條規定對所有員工毫無例外地適用。" }
    ]
  },

  {
    id: 143,
    word: "die Stellungnahme",
    artikel: "die",
    root: "nehmen",
    rootMeaning: "拿取（to take）",
    zh: "聲明、表態、意見書",
    en: "statement, position paper, comment",
    breakdown: "Stellung（立場、位置）+ Nahme（nahm，nehmen 名詞形式）\n→ 「拿定立場」= 聲明、表態\n→ eine Stellungnahme abgeben = 發表聲明",
    collocations: [
      { de: "eine Stellungnahme abgeben", zh: "發表聲明" },
      { de: "um eine Stellungnahme bitten", zh: "請求表態" },
      { de: "eine schriftliche Stellungnahme", zh: "書面聲明" }
    ],
    synonyms: ["die Erklärung", "die Äußerung", "das Statement"],
    related: ["vornehmen", "annehmen", "aufnehmen", "die Ausnahme"],
    examples: [
      { de: "Die Firma hat eine offizielle Stellungnahme zu dem Vorfall abgegeben.", zh: "公司就這起事件發表了官方聲明。" },
      { de: "Wir bitten um Ihre Stellungnahme bis Freitag.", zh: "請在週五前提供您的意見。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  geben 補充（zugeben）
  // ══════════════════════════════════════════════

  {
    id: 144,
    word: "zugeben",
    artikel: "",
    root: "geben",
    rootMeaning: "給予（to give）",
    zh: "承認、坦承",
    en: "to admit, to confess, to acknowledge",
    breakdown: "zu-（朝向、加入）+ geben（給予）\n→ 「把事實交出去給對方」= 坦承、承認\n→ ⚠️ 比 gestehen 語氣更輕，日常用語",
    collocations: [
      { de: "einen Fehler zugeben", zh: "承認錯誤" },
      { de: "offen zugeben", zh: "坦率承認" },
      { de: "ich muss zugeben, dass …", zh: "我必須承認……" }
    ],
    synonyms: ["eingestehen", "gestehen", "einräumen"],
    related: ["aufgeben", "angeben", "ausgeben", "vergeben", "abgeben"],
    examples: [
      { de: "Er musste zugeben, dass er einen Fehler gemacht hatte.", zh: "他不得不承認自己犯了一個錯誤。" },
      { de: "Ich muss zugeben, dass die Lösung besser ist als ich dachte.", zh: "我必須承認，這個解決方案比我想的要好。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：wenden（轉向）
  // ══════════════════════════════════════════════

  {
    id: 145,
    word: "anwenden",
    artikel: "",
    root: "wenden",
    rootMeaning: "轉向、應用（to turn / apply）",
    zh: "應用、使用、運用",
    en: "to apply, to use, to employ",
    breakdown: "an-（靠近、施加）+ wenden（轉向）\n→ 「把方法轉向某對象使用」= 應用\n→ die Anwendung = 應用、程式（App）（名詞）",
    collocations: [
      { de: "eine Methode anwenden", zh: "應用一種方法" },
      { de: "Kenntnisse anwenden", zh: "運用知識" },
      { de: "die Anwendung", zh: "應用、程式（名詞）" },
      { de: "anwendungsorientiert", zh: "以應用為導向的" }
    ],
    synonyms: ["einsetzen", "verwenden", "nutzen"],
    related: ["verwenden", "abwenden", "zuwenden", "sich wenden an"],
    examples: [
      { de: "Im Praktikum kann man das erlernte Wissen direkt anwenden.", zh: "在實習中可以直接應用所學的知識。" },
      { de: "Welche Methode soll hier angewendet werden?", zh: "這裡應該應用哪種方法？" }
    ]
  },

  {
    id: 146,
    word: "verwenden",
    artikel: "",
    root: "wenden",
    rootMeaning: "轉向、應用（to turn / apply）",
    zh: "使用、採用",
    en: "to use, to employ, to utilize",
    breakdown: "ver-（轉化、應用）+ wenden（轉向）\n→ 「把資源轉化投入使用」= 使用\n→ 比 benutzen 更正式；比 anwenden 更強調「投入資源」",
    collocations: [
      { de: "Materialien / Ressourcen verwenden", zh: "使用材料 / 資源" },
      { de: "Zeit und Mühe verwenden", zh: "花費時間和精力" },
      { de: "die Verwendung", zh: "使用、用途（名詞）" }
    ],
    synonyms: ["benutzen", "einsetzen", "anwenden"],
    related: ["anwenden", "abwenden", "zuwenden", "sich wenden an"],
    examples: [
      { de: "Für dieses Experiment wurden modernste Messgeräte verwendet.", zh: "這個實驗使用了最先進的測量設備。" },
      { de: "Welche Software wird in Ihrem Unternehmen verwendet?", zh: "您的公司使用哪種軟體？" }
    ]
  },

  {
    id: 147,
    word: "sich wenden an",
    artikel: "",
    root: "wenden",
    rootMeaning: "轉向、應用（to turn / apply）",
    zh: "聯繫、求助於、向……求助",
    en: "to contact, to turn to, to address",
    breakdown: "sich wenden（轉身面向）+ an（靠近）\n→ 「轉身面向某人」= 聯繫、求助\n→ 書信/職場超高頻固定搭配",
    collocations: [
      { de: "sich an jemanden wenden", zh: "聯繫某人、向某人求助" },
      { de: "sich an die zuständige Abteilung wenden", zh: "聯繫負責部門" },
      { de: "Bitte wenden Sie sich an …", zh: "請聯繫……" }
    ],
    synonyms: ["kontaktieren", "anfragen bei"],
    related: ["anwenden", "verwenden", "abwenden", "zuwenden"],
    examples: [
      { de: "Bitte wenden Sie sich in dieser Angelegenheit an unsere Rechtsabteilung.", zh: "在這件事上，請聯繫我們的法律部門。" },
      { de: "Bei Fragen können Sie sich jederzeit an mich wenden.", zh: "如有問題，您隨時可以聯繫我。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：bringen（帶來）
  // ══════════════════════════════════════════════

  {
    id: 148,
    word: "einbringen",
    artikel: "",
    root: "bringen",
    rootMeaning: "帶來（to bring）",
    zh: "貢獻、投入（技能/想法）；提出（議案）",
    en: "to contribute, to bring in; to introduce (a motion)",
    breakdown: "ein-（進入）+ bringen（帶來）\n→ 「把東西帶進來投入」= 貢獻、投入\n→ Kompetenzen einbringen = 投入自己的能力",
    collocations: [
      { de: "Kompetenzen / Erfahrungen einbringen", zh: "貢獻能力 / 經驗" },
      { de: "Ideen einbringen", zh: "提出想法" },
      { de: "sich einbringen", zh: "積極參與、投入（反身）" }
    ],
    synonyms: ["beitragen", "einsetzen", "einbringen"],
    related: ["mitbringen", "anbringen", "erbringen", "verbringen", "angebracht"],
    examples: [
      { de: "In diesem Team kann jeder seine Kompetenzen aktiv einbringen.", zh: "在這個團隊中，每個人都可以積極貢獻自己的能力。" },
      { de: "Sie brachte viele neue Ideen in das Projekt ein.", zh: "她為這個項目提出了許多新想法。" }
    ]
  },

  {
    id: 149,
    word: "angebracht",
    artikel: "",
    root: "bringen",
    rootMeaning: "帶來（to bring）",
    zh: "適當的、恰當的",
    en: "appropriate, suitable, fitting",
    breakdown: "an-（靠近、附上）+ gebracht（bringen 的 Partizip II）\n→ 「被帶到恰當的位置上」= 適當的、合宜的\n→ 幾乎只用形容詞形式：angebracht sein",
    collocations: [
      { de: "angebracht sein", zh: "是適當的、合適的" },
      { de: "nicht angebracht sein", zh: "不適當、不合宜" },
      { de: "es wäre angebracht, etw. zu tun", zh: "做某事是恰當的" }
    ],
    synonyms: ["passend", "geeignet", "zweckmäßig", "angemessen"],
    related: ["einbringen", "mitbringen", "erbringen", "verbringen"],
    examples: [
      { de: "In dieser Situation ist Vorsicht angebracht.", zh: "在這種情況下，謹慎是適當的。" },
      { de: "Eine kurze Entschuldigung wäre hier angebracht.", zh: "在這裡，簡短道歉是恰當的。" }
    ]
  },

  {
    id: 150,
    word: "erbringen",
    artikel: "",
    root: "bringen",
    rootMeaning: "帶來（to bring）",
    zh: "提供（服務/證明）；達到（成果）",
    en: "to provide (proof/service); to achieve (results)",
    breakdown: "er-（達成某結果）+ bringen（帶來）\n→ 「帶來並完成交付」= 提供、達到\n→ 正式用語，常見於合約和職場",
    collocations: [
      { de: "den Nachweis erbringen", zh: "提供證明" },
      { de: "Leistungen erbringen", zh: "提供服務；達到績效" },
      { de: "gute Ergebnisse erbringen", zh: "達到好的結果" }
    ],
    synonyms: ["liefern", "nachweisen", "leisten"],
    related: ["einbringen", "mitbringen", "angebracht", "verbringen"],
    examples: [
      { de: "Der Bewerber muss den Nachweis seiner Qualifikationen erbringen.", zh: "應聘者必須提供其資格認證的證明。" },
      { de: "Das Team hat hervorragende Leistungen erbracht.", zh: "團隊取得了傑出的績效。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：stehen（站立、存在）
  // ══════════════════════════════════════════════

  {
    id: 151,
    word: "anstehen",
    artikel: "",
    root: "stehen",
    rootMeaning: "站立、存在（to stand）",
    zh: "即將發生的、待辦的；排隊",
    en: "upcoming, pending; to queue",
    breakdown: "an-（靠近、即將）+ stehen（站立）\n→ 「站在門口準備發生」= 即將到來的、待辦的\n→ anstehend（形容詞）= 即將的、待處理的",
    collocations: [
      { de: "anstehende Aufgaben / Termine", zh: "待辦任務 / 即將到來的約定" },
      { de: "Was steht als nächstes an?", zh: "接下來有什麼事？" },
      { de: "die anstehenden Änderungen", zh: "即將進行的修改" }
    ],
    synonyms: ["bevorstehen", "geplant sein", "zu erledigen sein"],
    related: ["verstehen", "bestehen", "entstehen", "feststehen", "vorstehen"],
    examples: [
      { de: "Bitte bereiten Sie sich auf die anstehende Prüfung vor.", zh: "請為即將到來的考試做好準備。" },
      { de: "Was steht diese Woche noch an?", zh: "這週還有什麼待辦事項？" }
    ]
  },

  {
    id: 152,
    word: "bestehen",
    artikel: "",
    root: "stehen",
    rootMeaning: "站立、存在（to stand）",
    zh: "通過（考試）；堅持；由……組成；存在",
    en: "to pass (an exam); to insist; to consist of; to exist",
    breakdown: "be-（施加到對象）+ stehen（站立）\n→ 「站穩、存在」→ 多重意思：\n① 通過考試（站得住腳）\n② 堅持（bestehen auf）\n③ 由……組成（bestehen aus）\n④ 存在（das Unternehmen besteht seit 10 Jahren）",
    collocations: [
      { de: "eine Prüfung bestehen", zh: "通過考試" },
      { de: "auf etw. bestehen", zh: "堅持某事" },
      { de: "aus etw. bestehen", zh: "由……組成" }
    ],
    synonyms: ["durchkommen（通過）", "beharren auf（堅持）", "sich zusammensetzen aus（組成）"],
    related: ["anstehen", "verstehen", "entstehen", "feststehen", "vorstehen"],
    examples: [
      { de: "Sie hat die Prüfung beim ersten Versuch bestanden.", zh: "她第一次嘗試就通過了考試。" },
      { de: "Das Team besteht aus zehn Fachleuten.", zh: "這個團隊由十位專業人員組成。" }
    ]
  },

  {
    id: 153,
    word: "verstehen",
    artikel: "",
    root: "stehen",
    rootMeaning: "站立、存在（to stand）",
    zh: "理解、明白",
    en: "to understand, to comprehend",
    breakdown: "ver-（完全）+ stehen（站立）\n→ 「完全站穩在某知識上」= 理解\n→ sich verstehen mit = 與某人相處\n→ unter etw. verstehen = 對某詞的理解",
    collocations: [
      { de: "etw. / jemanden verstehen", zh: "理解某事 / 某人" },
      { de: "sich verstehen mit", zh: "與……相處融洽" },
      { de: "Was verstehen Sie unter …?", zh: "您對……的理解是什麼？" }
    ],
    synonyms: ["begreifen", "nachvollziehen", "erfassen"],
    related: ["anstehen", "bestehen", "entstehen", "feststehen", "vorstehen"],
    examples: [
      { de: "Haben Sie die Aufgabenstellung richtig verstanden?", zh: "您正確理解了任務說明嗎？" },
      { de: "Was verstehen Sie unter dem Begriff Nachhaltigkeit?", zh: "您對「永續性」這個概念的理解是什麼？" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：fordern（要求）
  // ══════════════════════════════════════════════

  {
    id: 154,
    word: "einfordern",
    artikel: "",
    root: "fordern",
    rootMeaning: "要求（to demand）",
    zh: "要求提交、催繳、索取",
    en: "to demand, to call in, to enforce",
    breakdown: "ein-（進入、收回）+ fordern（要求）\n→ 「要求對方把東西交回來」= 催繳、索取",
    collocations: [
      { de: "Dokumente / Nachweise einfordern", zh: "要求提交文件 / 證明" },
      { de: "Rechenschaft einfordern", zh: "要求問責" },
      { de: "ausstehende Zahlungen einfordern", zh: "催繳未付款項" }
    ],
    synonyms: ["anfordern", "verlangen", "einmahnen"],
    related: ["auffordern", "herausfordern", "überfordern", "anforderung"],
    examples: [
      { de: "Die Behörde forderte alle fehlenden Unterlagen ein.", zh: "機關要求提交所有缺少的文件。" },
      { de: "Der Kunde forderte eine vollständige Dokumentation ein.", zh: "客戶要求提交完整的文件。" }
    ]
  },

  {
    id: 155,
    word: "auffordern",
    artikel: "",
    root: "fordern",
    rootMeaning: "要求（to demand）",
    zh: "要求、請求（某人做某事）",
    en: "to ask, to request, to call upon",
    breakdown: "auf-（向上、啟動）+ fordern（要求）\n→ 「提出要求讓對方行動」= 要求、請求\n→ 比 bitten 更正式、有一定權威性",
    collocations: [
      { de: "jemanden auffordern, etw. zu tun", zh: "要求某人做某事" },
      { de: "zur Stellungnahme auffordern", zh: "要求表態" },
      { de: "die Aufforderung", zh: "要求、通知（名詞）" }
    ],
    synonyms: ["bitten", "verlangen", "anweisen"],
    related: ["einfordern", "herausfordern", "überfordern", "anforderung"],
    examples: [
      { de: "Die Kunden werden aufgefordert, das Formular vollständig auszufüllen.", zh: "客戶被要求完整填寫表格。" },
      { de: "Er wurde aufgefordert, eine schriftliche Stellungnahme abzugeben.", zh: "他被要求提交一份書面聲明。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  tragen 補充（betragen）
  // ══════════════════════════════════════════════

  {
    id: 156,
    word: "betragen",
    artikel: "",
    root: "tragen",
    rootMeaning: "攜帶、承擔（to carry / bear）",
    zh: "總計、達到（金額/數量）",
    en: "to amount to, to total, to come to",
    breakdown: "be-（施加到數量對象）+ tragen（承擔）\n→ 「數量承載到這個值」= 總計\n→ 只用於金額、數量等客觀數值，不用於行為",
    collocations: [
      { de: "Der Betrag beträgt …", zh: "金額為……" },
      { de: "Die Kosten betragen …", zh: "費用為……" },
      { de: "Der Schaden beträgt …", zh: "損失達……" }
    ],
    synonyms: ["ausmachen", "sich belaufen auf", "kosten"],
    related: ["eintragen", "übertragen", "beitragen", "vortragen", "beauftragen"],
    examples: [
      { de: "Der Gesamtbetrag beträgt 1.200 Euro.", zh: "總金額為1,200歐元。" },
      { de: "Die Reparaturkosten betragen circa 500 Euro.", zh: "維修費用約為500歐元。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：breiten（展開、鋪開）
  // ══════════════════════════════════════════════

  {
    id: 157,
    word: "unterbreiten",
    artikel: "",
    root: "breiten",
    rootMeaning: "展開、鋪開（to spread）",
    zh: "正式提出、呈遞（建議/方案）",
    en: "to present, to submit, to put forward",
    breakdown: "unter-（在下方）+ breiten（鋪展）\n→ 「在對方面前恭敬地攤開來」= 正式提出\n→ 比 vorschlagen 更正式，含有「呈遞給對方審閱」的語感",
    collocations: [
      { de: "einen Vorschlag unterbreiten", zh: "提出建議" },
      { de: "ein Angebot unterbreiten", zh: "提出報價 / 提案" },
      { de: "einen Plan unterbreiten", zh: "呈遞計畫" }
    ],
    synonyms: ["vorschlagen", "vorlegen", "präsentieren"],
    related: ["ausbreiten", "verbreiten", "breit"],
    examples: [
      { de: "Wir möchten Ihnen einen konkreten Vorschlag unterbreiten.", zh: "我們想向您提出一個具體的建議。" },
      { de: "Die Firma unterbreitete dem Kunden ein attraktives Angebot.", zh: "公司向客戶提出了一個有吸引力的提案。" }
    ]
  },

  {
    id: 158,
    word: "verbreiten",
    artikel: "",
    root: "breiten",
    rootMeaning: "展開、鋪開（to spread）",
    zh: "傳播、散布",
    en: "to spread, to disseminate, to circulate",
    breakdown: "ver-（向四方擴散）+ breiten（鋪展）\n→ 「向四方鋪展開去」= 傳播",
    collocations: [
      { de: "Informationen / Nachrichten verbreiten", zh: "傳播資訊 / 消息" },
      { de: "weit verbreitet", zh: "廣泛流傳的、普遍的" },
      { de: "eine Methode verbreiten", zh: "推廣一種方法" }
    ],
    synonyms: ["weitergeben", "kommunizieren", "bekanntmachen"],
    related: ["unterbreiten", "ausbreiten", "breit"],
    examples: [
      { de: "Diese Methode ist in der Industrie weit verbreitet.", zh: "這種方法在工業中廣泛應用。" },
      { de: "Bitte verbreiten Sie diese Information an alle Mitarbeiter.", zh: "請將這個資訊傳達給所有員工。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  gehen 補充（zugänglich）
  // ══════════════════════════════════════════════

  {
    id: 159,
    word: "zugänglich",
    artikel: "",
    root: "gehen",
    rootMeaning: "走、進行（to go / proceed）",
    zh: "可進入的、易於接觸的；平易近人的",
    en: "accessible, approachable",
    breakdown: "Zugang（入口、途徑，來自 zugehen）+ -lich（形容詞後綴）\n→ 「有途徑可以進入的」= 可存取的\n→ 引申：平易近人（Vorgesetzter ist zugänglich）",
    collocations: [
      { de: "öffentlich zugänglich", zh: "公開可存取的" },
      { de: "für alle zugänglich sein", zh: "對所有人開放" },
      { de: "leicht / schwer zugänglich", zh: "容易 / 難以取得" }
    ],
    synonyms: ["erreichbar", "verfügbar", "offen"],
    related: ["vorgehen", "vorübergehen", "eingehen", "übergehen", "zugehen"],
    examples: [
      { de: "Die Daten sind für alle autorisierten Benutzer zugänglich.", zh: "資料對所有授權用戶開放存取。" },
      { de: "Die Unterlagen sind online zugänglich.", zh: "相關文件可在網上取得。" }
    ]
  },

  // ══════════════════════════════════════════════
  //  Maß 補充（folgendermaßen）
  // ══════════════════════════════════════════════

  {
    id: 160,
    word: "folgendermaßen",
    artikel: "",
    root: "Maß",
    rootMeaning: "尺度、標準（measure / standard）",
    zh: "如下、以下述方式",
    en: "as follows, in the following manner",
    breakdown: "folgend（以下的）+ er- + maßen（以……方式，來自 Maß）\n→ 「以如下的尺度方式」= 如下\n→ 書面德語書信常用語",
    collocations: [
      { de: "folgendermaßen vorgehen", zh: "按如下方式進行" },
      { de: "Das Verfahren läuft folgendermaßen ab:", zh: "程序如下：" },
      { de: "Ich erkläre das folgendermaßen:", zh: "我如下解釋：" }
    ],
    synonyms: ["wie folgt", "auf folgende Weise", "in folgender Weise"],
    related: ["das Maß", "die Maßnahme", "gemäß", "maßgeblich", "gleichermaßen"],
    examples: [
      { de: "Das Verfahren läuft folgendermaßen ab: Zuerst …", zh: "程序如下進行：首先……" },
      { de: "Bitte gehen Sie folgendermaßen vor:", zh: "請按如下方式進行：" }
    ]
  },

  // ══════════════════════════════════════════════
  //  詞根：schildern（描述）
  // ══════════════════════════════════════════════

  {
    id: 161,
    word: "schildern",
    artikel: "",
    root: "schildern",
    rootMeaning: "描述、敘述（to describe / depict）",
    zh: "描述、敘述（某情況/經過）",
    en: "to describe, to depict, to recount",
    breakdown: "來自 Schild（牌子、盾牌）→ 「像描繪牌子上的圖樣一樣」= 描述\n→ 比 beschreiben 更強調敘述事件的過程\n→ 常見於：Sachverhalt schildern = 描述事實情況",
    collocations: [
      { de: "den Sachverhalt schildern", zh: "描述事實情況" },
      { de: "den Vorfall schildern", zh: "描述事件經過" },
      { de: "die Situation schildern", zh: "描述情況" }
    ],
    synonyms: ["beschreiben", "darstellen", "erzählen"],
    related: ["beschreiben", "darstellen", "berichten"],
    examples: [
      { de: "Bitte schildern Sie den Vorfall so genau wie möglich.", zh: "請盡可能詳細地描述事件經過。" },
      { de: "Der Zeuge schilderte den Sachverhalt aus seiner Perspektive.", zh: "證人從自己的角度描述了事實情況。" }
    ]
  },

];
