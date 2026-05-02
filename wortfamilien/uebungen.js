// uebungen.js — Wortfamilien Übungen
// 每題結構：
//   id         唯一編號
//   wordId     對應 data.js 的單字 id
//   root       詞根（用於篩選）
//   word       考的單字
//   sentence   挖空句子，用 ___ 表示空格
//   answer     答案（填入 ___ 的部分）
//   full       完整句子（顯示答案時呈現）
//   hint       提示（單字意思）
//   type       "existing"（來自例句/搭配）或 "new"（新造句）

const UEBUNGEN = [

  // ══════════════════════════════════════════════
  //  schließen
  // ══════════════════════════════════════════════

  // ausschließen (id:1)
  {
    id: 1, wordId: 1, root: "schließen", word: "ausschließen",
    sentence: "Wir können technische Fehler nicht vollständig ___.",
    answer: "ausschließen",
    full: "Wir können technische Fehler nicht vollständig ausschließen.",
    hint: "ausschließen = 排除",
    type: "existing"
  },
  {
    id: 2, wordId: 1, root: "schließen", word: "ausschließen",
    sentence: "Er wurde von der Prüfung ___.",
    answer: "ausgeschlossen",
    full: "Er wurde von der Prüfung ausgeschlossen.",
    hint: "ausschließen（Partizip II）= 被排除、取消資格",
    type: "existing"
  },
  {
    id: 3, wordId: 1, root: "schließen", word: "ausschließen",
    sentence: "Eine Verwechslung lässt sich in diesem Fall nicht ___.",
    answer: "ausschließen",
    full: "Eine Verwechslung lässt sich in diesem Fall nicht ausschließen.",
    hint: "ausschließen = 排除（某可能性）",
    type: "new"
  },

  // einschließen (id:2)
  {
    id: 4, wordId: 2, root: "schließen", word: "einschließen",
    sentence: "Der Preis schließt alle Gebühren ___.",
    answer: "ein",
    full: "Der Preis schließt alle Gebühren ein.",
    hint: "einschließen（可分）= 包含",
    type: "existing"
  },
  {
    id: 5, wordId: 2, root: "schließen", word: "einschließen",
    sentence: "Die Regelung schließt auch Teilzeitkräfte ___.",
    answer: "ein",
    full: "Die Regelung schließt auch Teilzeitkräfte ein.",
    hint: "einschließen = 包含在內",
    type: "existing"
  },
  {
    id: 6, wordId: 2, root: "schließen", word: "einschließen",
    sentence: "Das Angebot schließt Unterkunft und Verpflegung ___.",
    answer: "ein",
    full: "Das Angebot schließt Unterkunft und Verpflegung ein.",
    hint: "einschließen = 包含（住宿和餐飲）",
    type: "new"
  },

  // abschließen (id:3)
  {
    id: 7, wordId: 3, root: "schließen", word: "abschließen",
    sentence: "Sie hat ihre Ausbildung erfolgreich ___.",
    answer: "abgeschlossen",
    full: "Sie hat ihre Ausbildung erfolgreich abgeschlossen.",
    hint: "abschließen = 完成",
    type: "existing"
  },
  {
    id: 8, wordId: 3, root: "schließen", word: "abschließen",
    sentence: "Bitte schließen Sie die Tür ___, wenn Sie gehen.",
    answer: "ab",
    full: "Bitte schließen Sie die Tür ab, wenn Sie gehen.",
    hint: "abschließen（可分）= 鎖上",
    type: "existing"
  },
  {
    id: 9, wordId: 3, root: "schließen", word: "abschließen",
    sentence: "Die Firma möchte einen neuen Vertrag mit dem Lieferanten ___.",
    answer: "abschließen",
    full: "Die Firma möchte einen neuen Vertrag mit dem Lieferanten abschließen.",
    hint: "abschließen = 簽訂（合約）",
    type: "new"
  },

  // aufschließen (id:4)
  {
    id: 10, wordId: 4, root: "schließen", word: "aufschließen",
    sentence: "Kannst du bitte die Tür ___?",
    answer: "aufschließen",
    full: "Kannst du bitte die Tür aufschließen?",
    hint: "aufschließen = 開鎖",
    type: "existing"
  },
  {
    id: 11, wordId: 4, root: "schließen", word: "aufschließen",
    sentence: "Der Hausmeister schließt das Gebäude jeden Morgen um 7 Uhr ___.",
    answer: "auf",
    full: "Der Hausmeister schließt das Gebäude jeden Morgen um 7 Uhr auf.",
    hint: "aufschließen（可分）= 開門",
    type: "new"
  },

  // schließen (id:5)
  {
    id: 12, wordId: 5, root: "schließen", word: "schließen",
    sentence: "Das Geschäft ___ um 20 Uhr.",
    answer: "schließt",
    full: "Das Geschäft schließt um 20 Uhr.",
    hint: "schließen = 關閉",
    type: "existing"
  },
  {
    id: 13, wordId: 5, root: "schließen", word: "schließen",
    sentence: "Daraus lässt sich ___, dass das Modell fehlerhaft ist.",
    answer: "schließen",
    full: "Daraus lässt sich schließen, dass das Modell fehlerhaft ist.",
    hint: "schließen = 推斷",
    type: "existing"
  },
  {
    id: 14, wordId: 5, root: "schließen", word: "schließen",
    sentence: "Aus den Ergebnissen kann man ___, dass die Hypothese korrekt ist.",
    answer: "schließen",
    full: "Aus den Ergebnissen kann man schließen, dass die Hypothese korrekt ist.",
    hint: "schließen = 推斷、得出結論",
    type: "new"
  },

  // entschließen (id:68)
  {
    id: 15, wordId: 68, root: "schließen", word: "entschließen",
    sentence: "Sie hat sich ___, eine neue Stelle anzutreten.",
    answer: "entschlossen",
    full: "Sie hat sich entschlossen, eine neue Stelle anzutreten.",
    hint: "sich entschließen = 決定",
    type: "existing"
  },
  {
    id: 16, wordId: 68, root: "schließen", word: "entschließen",
    sentence: "Er konnte sich lange nicht ___, das Angebot anzunehmen.",
    answer: "entschließen",
    full: "Er konnte sich lange nicht entschließen, das Angebot anzunehmen.",
    hint: "sich entschließen = 下決心",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  sicht
  // ══════════════════════════════════════════════

  // Voraussicht (id:6)
  {
    id: 17, wordId: 6, root: "sicht", word: "Voraussicht",
    sentence: "Aller ___ nach wird das Projekt im Juni abgeschlossen.",
    answer: "Voraussicht",
    full: "Aller Voraussicht nach wird das Projekt im Juni abgeschlossen.",
    hint: "aller Voraussicht nach = 按照預期（固定短語）",
    type: "existing"
  },
  {
    id: 18, wordId: 6, root: "sicht", word: "Voraussicht",
    sentence: "Mit mehr ___ hätten wir dieses Problem vermeiden können.",
    answer: "Voraussicht",
    full: "Mit mehr Voraussicht hätten wir dieses Problem vermeiden können.",
    hint: "Voraussicht = 預見、遠見",
    type: "existing"
  },
  {
    id: 19, wordId: 6, root: "sicht", word: "Voraussicht",
    sentence: "Aller ___ nach wird die Lieferung bis Freitag eintreffen.",
    answer: "Voraussicht",
    full: "Aller Voraussicht nach wird die Lieferung bis Freitag eintreffen.",
    hint: "aller Voraussicht nach = 預計、按照預期",
    type: "new"
  },

  // Vorsicht (id:7)
  {
    id: 20, wordId: 7, root: "sicht", word: "Vorsicht",
    sentence: "___ ist besser als Nachsicht.",
    answer: "Vorsicht",
    full: "Vorsicht ist besser als Nachsicht.",
    hint: "Vorsicht = 謹慎（諺語）",
    type: "existing"
  },
  {
    id: 21, wordId: 7, root: "sicht", word: "Vorsicht",
    sentence: "Aus ___ sollten Sie einen Arzt aufsuchen.",
    answer: "Vorsicht",
    full: "Aus Vorsicht sollten Sie einen Arzt aufsuchen.",
    hint: "aus Vorsicht = 出於謹慎",
    type: "existing"
  },
  {
    id: 22, wordId: 7, root: "sicht", word: "Vorsicht",
    sentence: "Bei diesem Experiment ist besondere ___ geboten.",
    answer: "Vorsicht",
    full: "Bei diesem Experiment ist besondere Vorsicht geboten.",
    hint: "Vorsicht = 小心、謹慎",
    type: "new"
  },

  // Rücksicht (id:8)
  {
    id: 23, wordId: 8, root: "sicht", word: "Rücksicht",
    sentence: "Bitte nehmen Sie ___ auf Ihre Kollegen.",
    answer: "Rücksicht",
    full: "Bitte nehmen Sie Rücksicht auf Ihre Kollegen.",
    hint: "Rücksicht nehmen auf = 顧及",
    type: "existing"
  },
  {
    id: 24, wordId: 8, root: "sicht", word: "Rücksicht",
    sentence: "Aus ___ auf kranke Mitarbeiter wurde die Veranstaltung abgesagt.",
    answer: "Rücksicht",
    full: "Aus Rücksicht auf kranke Mitarbeiter wurde die Veranstaltung abgesagt.",
    hint: "aus Rücksicht auf = 出於對……的考慮",
    type: "existing"
  },
  {
    id: 25, wordId: 8, root: "sicht", word: "Rücksicht",
    sentence: "Im Büro sollte man ___ auf andere nehmen und leise telefonieren.",
    answer: "Rücksicht",
    full: "Im Büro sollte man Rücksicht auf andere nehmen und leise telefonieren.",
    hint: "Rücksicht nehmen = 體諒他人",
    type: "new"
  },

  // Hinsicht (id:9)
  {
    id: 26, wordId: 9, root: "sicht", word: "Hinsicht",
    sentence: "In dieser ___ unterscheidet sich unser Modell von den anderen.",
    answer: "Hinsicht",
    full: "In dieser Hinsicht unterscheidet sich unser Modell von den anderen.",
    hint: "in dieser Hinsicht = 在這方面",
    type: "existing"
  },
  {
    id: 27, wordId: 9, root: "sicht", word: "Hinsicht",
    sentence: "Die Zusammenarbeit war in jeder ___ erfolgreich.",
    answer: "Hinsicht",
    full: "Die Zusammenarbeit war in jeder Hinsicht erfolgreich.",
    hint: "in jeder Hinsicht = 在各方面",
    type: "existing"
  },
  {
    id: 28, wordId: 9, root: "sicht", word: "Hinsicht",
    sentence: "In beruflicher ___ hat sie große Fortschritte gemacht.",
    answer: "Hinsicht",
    full: "In beruflicher Hinsicht hat sie große Fortschritte gemacht.",
    hint: "in beruflicher Hinsicht = 在職業方面",
    type: "new"
  },

  // Übersicht (id:10)
  {
    id: 29, wordId: 10, root: "sicht", word: "Übersicht",
    sentence: "Die folgende Tabelle gibt eine ___ über die Ergebnisse.",
    answer: "Übersicht",
    full: "Die folgende Tabelle gibt eine Übersicht über die Ergebnisse.",
    hint: "eine Übersicht geben = 提供概覽",
    type: "existing"
  },
  {
    id: 30, wordId: 10, root: "sicht", word: "Übersicht",
    sentence: "Bei so vielen Aufgaben verliert man leicht die ___.",
    answer: "Übersicht",
    full: "Bei so vielen Aufgaben verliert man leicht die Übersicht.",
    hint: "die Übersicht verlieren = 失去全局掌握",
    type: "existing"
  },
  {
    id: 31, wordId: 10, root: "sicht", word: "Übersicht",
    sentence: "Ich habe eine ___ aller offenen Aufgaben erstellt.",
    answer: "Übersicht",
    full: "Ich habe eine Übersicht aller offenen Aufgaben erstellt.",
    hint: "eine Übersicht erstellen = 製作一覽表",
    type: "new"
  },

  // Absicht (id:11)
  {
    id: 32, wordId: 11, root: "sicht", word: "Absicht",
    sentence: "Er hat die Datei mit ___ gelöscht.",
    answer: "Absicht",
    full: "Er hat die Datei mit Absicht gelöscht.",
    hint: "mit Absicht = 故意地",
    type: "existing"
  },
  {
    id: 33, wordId: 11, root: "sicht", word: "Absicht",
    sentence: "Ich hatte nicht die ___, Sie zu beleidigen.",
    answer: "Absicht",
    full: "Ich hatte nicht die Absicht, Sie zu beleidigen.",
    hint: "die Absicht haben = 有意圖",
    type: "existing"
  },
  {
    id: 34, wordId: 11, root: "sicht", word: "Absicht",
    sentence: "Es war keine böse ___ – der Fehler ist versehentlich passiert.",
    answer: "Absicht",
    full: "Es war keine böse Absicht – der Fehler ist versehentlich passiert.",
    hint: "Absicht = 意圖（keine böse Absicht = 沒有惡意）",
    type: "new"
  },

  // Aussicht (id:12)
  {
    id: 35, wordId: 12, root: "sicht", word: "Aussicht",
    sentence: "Die ___ auf dem Arbeitsmarkt sind derzeit gut.",
    answer: "Aussichten",
    full: "Die Aussichten auf dem Arbeitsmarkt sind derzeit gut.",
    hint: "Aussichten（複數）= 前景",
    type: "existing"
  },
  {
    id: 36, wordId: 12, root: "sicht", word: "Aussicht",
    sentence: "Der Chef stellte eine Gehaltserhöhung in ___.",
    answer: "Aussicht",
    full: "Der Chef stellte eine Gehaltserhöhung in Aussicht.",
    hint: "in Aussicht stellen = 預示、承諾",
    type: "existing"
  },
  {
    id: 37, wordId: 12, root: "sicht", word: "Aussicht",
    sentence: "Es besteht gute ___ auf eine Verlängerung des Projekts.",
    answer: "Aussicht",
    full: "Es besteht gute Aussicht auf eine Verlängerung des Projekts.",
    hint: "Aussicht auf = 對……的前景",
    type: "new"
  },

  // Einsicht (id:13)
  {
    id: 38, wordId: 13, root: "sicht", word: "Einsicht",
    sentence: "Er zeigte keine ___ und wiederholte denselben Fehler.",
    answer: "Einsicht",
    full: "Er zeigte keine Einsicht und wiederholte denselben Fehler.",
    hint: "Einsicht zeigen = 表現出悔悟",
    type: "existing"
  },
  {
    id: 39, wordId: 13, root: "sicht", word: "Einsicht",
    sentence: "Nach dem Gespräch kam er zur ___.",
    answer: "Einsicht",
    full: "Nach dem Gespräch kam er zur Einsicht.",
    hint: "zur Einsicht kommen = 醒悟",
    type: "new"
  },

  // Zuversicht (id:14)
  {
    id: 40, wordId: 14, root: "sicht", word: "Zuversicht",
    sentence: "Trotz der Schwierigkeiten blickt das Team mit ___ in die Zukunft.",
    answer: "Zuversicht",
    full: "Trotz der Schwierigkeiten blickt das Team mit Zuversicht in die Zukunft.",
    hint: "mit Zuversicht = 充滿信心地",
    type: "existing"
  },
  {
    id: 41, wordId: 14, root: "sicht", word: "Zuversicht",
    sentence: "Seine ___ hat uns alle motiviert.",
    answer: "Zuversicht",
    full: "Seine Zuversicht hat uns alle motiviert.",
    hint: "Zuversicht = 信心、樂觀",
    type: "existing"
  },
  {
    id: 42, wordId: 14, root: "sicht", word: "Zuversicht",
    sentence: "Trotz der schlechten Nachrichten blieb sie ___.",
    answer: "zuversichtlich",
    full: "Trotz der schlechten Nachrichten blieb sie zuversichtlich.",
    hint: "zuversichtlich = 充滿信心的（形容詞）",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  dauer
  // ══════════════════════════════════════════════

  // bedauerlich (id:15)
  {
    id: 43, wordId: 15, root: "dauer", word: "bedauerlich",
    sentence: "Es ist ___, dass das Projekt abgebrochen wurde.",
    answer: "bedauerlich",
    full: "Es ist bedauerlich, dass das Projekt abgebrochen wurde.",
    hint: "bedauerlich = 令人遺憾的",
    type: "existing"
  },
  {
    id: 44, wordId: 15, root: "dauer", word: "bedauerlich",
    sentence: "___ konnte er nicht teilnehmen.",
    answer: "Bedauerlicherweise",
    full: "Bedauerlicherweise konnte er nicht teilnehmen.",
    hint: "bedauerlicherweise = 令人遺憾地（副詞）",
    type: "existing"
  },
  {
    id: 45, wordId: 15, root: "dauer", word: "bedauerlich",
    sentence: "Das ist ein ___ Missverständnis, das wir klären müssen.",
    answer: "bedauerliches",
    full: "Das ist ein bedauerliches Missverständnis, das wir klären müssen.",
    hint: "bedauerlich = 令人遺憾的（形容詞）",
    type: "new"
  },

  // ausdauernd (id:16)
  {
    id: 46, wordId: 16, root: "dauer", word: "ausdauernd",
    sentence: "Für eine Promotion braucht man eine ___ Arbeitsweise.",
    answer: "ausdauernde",
    full: "Für eine Promotion braucht man eine ausdauernde Arbeitsweise.",
    hint: "ausdauernd = 有毅力的",
    type: "existing"
  },
  {
    id: 47, wordId: 16, root: "dauer", word: "ausdauernd",
    sentence: "Nur wer ___ lernt, wird die Prüfung bestehen.",
    answer: "ausdauernd",
    full: "Nur wer ausdauernd lernt, wird die Prüfung bestehen.",
    hint: "ausdauernd = 持之以恆地",
    type: "new"
  },

  // dauerhaft (id:17)
  {
    id: 48, wordId: 17, root: "dauer", word: "dauerhaft",
    sentence: "Wir suchen nach einer ___ Lösung für dieses Problem.",
    answer: "dauerhaften",
    full: "Wir suchen nach einer dauerhaften Lösung für dieses Problem.",
    hint: "dauerhaft = 持久的",
    type: "existing"
  },
  {
    id: 49, wordId: 17, root: "dauer", word: "dauerhaft",
    sentence: "Eine ___ Beschäftigung ist ihr wichtiger als ein hohes Gehalt.",
    answer: "dauerhafte",
    full: "Eine dauerhafte Beschäftigung ist ihr wichtiger als ein hohes Gehalt.",
    hint: "dauerhaft = 長期的、穩定的",
    type: "new"
  },

  // andauern (id:18)
  {
    id: 50, wordId: 18, root: "dauer", word: "andauern",
    sentence: "Der Konflikt dauert bereits seit Monaten ___.",
    answer: "an",
    full: "Der Konflikt dauert bereits seit Monaten an.",
    hint: "andauern（可分）= 持續",
    type: "existing"
  },
  {
    id: 51, wordId: 18, root: "dauer", word: "andauern",
    sentence: "Die Verhandlungen ___ noch an – ein Ergebnis ist nicht in Sicht.",
    answer: "dauern",
    full: "Die Verhandlungen dauern noch an – ein Ergebnis ist nicht in Sicht.",
    hint: "andauern = 仍在持續",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  nehmen
  // ══════════════════════════════════════════════

  // entgegennehmen (id:19)
  {
    id: 52, wordId: 19, root: "nehmen", word: "entgegennehmen",
    sentence: "Die Sekretärin nimmt alle Bestellungen telefonisch ___.",
    answer: "entgegen",
    full: "Die Sekretärin nimmt alle Bestellungen telefonisch entgegen.",
    hint: "entgegennehmen（可分）= 接收、收取",
    type: "existing"
  },
  {
    id: 53, wordId: 19, root: "nehmen", word: "entgegennehmen",
    sentence: "Wir nehmen Ihre Beschwerde gerne ___.",
    answer: "entgegen",
    full: "Wir nehmen Ihre Beschwerde gerne entgegen.",
    hint: "entgegennehmen = 受理（程序上收到，不代表同意）",
    type: "existing"
  },
  {
    id: 54, wordId: 19, root: "nehmen", word: "entgegennehmen",
    sentence: "Der Empfang nimmt Pakete für Mitarbeiter ___.",
    answer: "entgegen",
    full: "Der Empfang nimmt Pakete für Mitarbeiter entgegen.",
    hint: "entgegennehmen = 代收（物理上收取）",
    type: "new"
  },

  // annehmen (id:20)
  {
    id: 55, wordId: 20, root: "nehmen", word: "annehmen",
    sentence: "Ich nehme ___, dass die Simulation korrekt ist.",
    answer: "an",
    full: "Ich nehme an, dass die Simulation korrekt ist.",
    hint: "annehmen = 推測、假設",
    type: "existing"
  },
  {
    id: 56, wordId: 20, root: "nehmen", word: "annehmen",
    sentence: "Sie hat das Jobangebot ___.",
    answer: "angenommen",
    full: "Sie hat das Jobangebot angenommen.",
    hint: "annehmen = 接受（內心認同）",
    type: "existing"
  },
  {
    id: 57, wordId: 20, root: "nehmen", word: "annehmen",
    sentence: "Er kann Kritik nicht gut ___ – das ist ein Problem im Team.",
    answer: "annehmen",
    full: "Er kann Kritik nicht gut annehmen – das ist ein Problem im Team.",
    hint: "Kritik annehmen = 接受批評（最常用用法）",
    type: "new"
  },

  // aufnehmen (id:21)
  {
    id: 58, wordId: 21, root: "nehmen", word: "aufnehmen",
    sentence: "Wir nehmen Ihre Daten ins System ___.",
    answer: "auf",
    full: "Wir nehmen Ihre Daten ins System auf.",
    hint: "aufnehmen = 登錄、記錄",
    type: "existing"
  },
  {
    id: 59, wordId: 21, root: "nehmen", word: "aufnehmen",
    sentence: "Dieses Thema wurde nicht ins Programm ___.",
    answer: "aufgenommen",
    full: "Dieses Thema wurde nicht ins Programm aufgenommen.",
    hint: "aufnehmen = 納入",
    type: "existing"
  },
  {
    id: 60, wordId: 21, root: "nehmen", word: "aufnehmen",
    sentence: "Bitte nehmen Sie so bald wie möglich Kontakt mit uns ___.",
    answer: "auf",
    full: "Bitte nehmen Sie so bald wie möglich Kontakt mit uns auf.",
    hint: "Kontakt aufnehmen = 取得聯繫（最常用搭配）",
    type: "new"
  },

  // übernehmen (id:22)
  {
    id: 61, wordId: 22, root: "nehmen", word: "übernehmen",
    sentence: "Er hat die Verantwortung für das Projekt ___.",
    answer: "übernommen",
    full: "Er hat die Verantwortung für das Projekt übernommen.",
    hint: "übernehmen = 承擔",
    type: "existing"
  },
  {
    id: 62, wordId: 22, root: "nehmen", word: "übernehmen",
    sentence: "Wir ___ die Kosten für die Reparatur.",
    answer: "übernehmen",
    full: "Wir übernehmen die Kosten für die Reparatur.",
    hint: "Kosten übernehmen = 承擔費用",
    type: "existing"
  },
  {
    id: 63, wordId: 22, root: "nehmen", word: "übernehmen",
    sentence: "Die neue Kollegin ___ ab Montag die Abteilungsleitung.",
    answer: "übernimmt",
    full: "Die neue Kollegin übernimmt ab Montag die Abteilungsleitung.",
    hint: "übernehmen = 接管（職位）",
    type: "new"
  },

  // wahrnehmen (id:23)
  {
    id: 64, wordId: 23, root: "nehmen", word: "wahrnehmen",
    sentence: "Ich habe eine deutliche Verbesserung in den Ergebnissen ___.",
    answer: "wahrgenommen",
    full: "Ich habe eine deutliche Verbesserung in den Ergebnissen wahrgenommen.",
    hint: "wahrnehmen = 察覺",
    type: "existing"
  },
  {
    id: 65, wordId: 23, root: "nehmen", word: "wahrnehmen",
    sentence: "Bitte nehmen Sie den Beratungstermin ___.",
    answer: "wahr",
    full: "Bitte nehmen Sie den Beratungstermin wahr.",
    hint: "wahrnehmen = 出席、把握（預約）",
    type: "existing"
  },
  {
    id: 66, wordId: 23, root: "nehmen", word: "wahrnehmen",
    sentence: "Sie nimmt ihre Interessen im Betrieb aktiv ___.",
    answer: "wahr",
    full: "Sie nimmt ihre Interessen im Betrieb aktiv wahr.",
    hint: "Interessen wahrnehmen = 維護自身利益（最常用搭配）",
    type: "new"
  },

  // teilnehmen (id:24)
  {
    id: 67, wordId: 24, root: "nehmen", word: "teilnehmen",
    sentence: "Ich nehme an dem Deutschkurs der Bundesagentur für Arbeit ___.",
    answer: "teil",
    full: "Ich nehme an dem Deutschkurs der Bundesagentur für Arbeit teil.",
    hint: "teilnehmen an = 參加",
    type: "existing"
  },
  {
    id: 68, wordId: 24, root: "nehmen", word: "teilnehmen",
    sentence: "An der Konferenz haben über 50 Personen ___.",
    answer: "teilgenommen",
    full: "An der Konferenz haben über 50 Personen teilgenommen.",
    hint: "teilnehmen = 參與",
    type: "existing"
  },
  {
    id: 69, wordId: 24, root: "nehmen", word: "teilnehmen",
    sentence: "Alle Mitarbeiter sind eingeladen, an der Umfrage ___.",
    answer: "teilzunehmen",
    full: "Alle Mitarbeiter sind eingeladen, an der Umfrage teilzunehmen.",
    hint: "teilnehmen（zu-Infinitiv）= 參加",
    type: "new"
  },

  // entnehmen (id:84)
  {
    id: 70, wordId: 84, root: "nehmen", word: "entnehmen",
    sentence: "Die Informationen ___ Sie bitte dem Anhang.",
    answer: "entnehmen",
    full: "Die Informationen entnehmen Sie bitte dem Anhang.",
    hint: "entnehmen = 從……取出、查看（正式）",
    type: "existing"
  },
  {
    id: 71, wordId: 84, root: "nehmen", word: "entnehmen",
    sentence: "Aus dem Bericht lässt sich ___, dass die Simulation erfolgreich war.",
    answer: "entnehmen",
    full: "Aus dem Bericht lässt sich entnehmen, dass die Simulation erfolgreich war.",
    hint: "entnehmen = 從……得知（書面用語）",
    type: "existing"
  },
  {
    id: 72, wordId: 84, root: "nehmen", word: "entnehmen",
    sentence: "Bitte ___ Sie die genauen Angaben der folgenden Tabelle.",
    answer: "entnehmen",
    full: "Bitte entnehmen Sie die genauen Angaben der folgenden Tabelle.",
    hint: "entnehmen = 請從……查看（最常用正式書面用法）",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  teilen
  // ══════════════════════════════════════════════

  // erteilen (id:25)
  {
    id: 73, wordId: 25, root: "teilen", word: "erteilen",
    sentence: "Der Vorgesetzte erteilte dem Team einen neuen ___.",
    answer: "Auftrag",
    full: "Der Vorgesetzte erteilte dem Team einen neuen Auftrag.",
    hint: "einen Auftrag erteilen = 下達任務",
    type: "existing"
  },
  {
    id: 74, wordId: 25, root: "teilen", word: "erteilen",
    sentence: "Die Behörde hat die Genehmigung ___.",
    answer: "erteilt",
    full: "Die Behörde hat die Genehmigung erteilt.",
    hint: "erteilen = 給予、授予（正式）",
    type: "existing"
  },
  {
    id: 75, wordId: 25, root: "teilen", word: "erteilen",
    sentence: "Der Kundendienst ___ gerne Auskunft über die Lieferzeiten.",
    answer: "erteilt",
    full: "Der Kundendienst erteilt gerne Auskunft über die Lieferzeiten.",
    hint: "eine Auskunft erteilen = 提供資訊（最常用搭配）",
    type: "new"
  },

  // verteilen (id:26)
  {
    id: 76, wordId: 26, root: "teilen", word: "verteilen",
    sentence: "Die Aufgaben wurden gleichmäßig im Team ___.",
    answer: "verteilt",
    full: "Die Aufgaben wurden gleichmäßig im Team verteilt.",
    hint: "verteilen = 分配",
    type: "existing"
  },
  {
    id: 77, wordId: 26, root: "teilen", word: "verteilen",
    sentence: "Bitte ___ Sie die Unterlagen an alle Teilnehmer.",
    answer: "verteilen",
    full: "Bitte verteilen Sie die Unterlagen an alle Teilnehmer.",
    hint: "verteilen = 分發（給多人）",
    type: "new"
  },

  // mitteilen (id:27)
  {
    id: 78, wordId: 27, root: "teilen", word: "mitteilen",
    sentence: "Hiermit teilen wir Ihnen ___, dass Ihre Bewerbung eingegangen ist.",
    answer: "mit",
    full: "Hiermit teilen wir Ihnen mit, dass Ihre Bewerbung eingegangen ist.",
    hint: "mitteilen（可分）= 告知",
    type: "existing"
  },
  {
    id: 79, wordId: 27, root: "teilen", word: "mitteilen",
    sentence: "Bitte ___ Sie uns Ihre neue Adresse ___.",
    answer: "teilen … mit",
    full: "Bitte teilen Sie uns Ihre neue Adresse mit.",
    hint: "mitteilen = 告知、通知",
    type: "existing"
  },
  {
    id: 80, wordId: 27, root: "teilen", word: "mitteilen",
    sentence: "Wir möchten Ihnen ___, dass die Lieferung verzögert wird.",
    answer: "mitteilen",
    full: "Wir möchten Ihnen mitteilen, dass die Lieferung verzögert wird.",
    hint: "mitteilen = 告知（書信常用）",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  stellen
  // ══════════════════════════════════════════════

  // ausstellen (id:28)
  {
    id: 81, wordId: 28, root: "stellen", word: "ausstellen",
    sentence: "Das Arbeitsamt stellt nach Antragstellung einen Bescheid ___.",
    answer: "aus",
    full: "Das Arbeitsamt stellt nach Antragstellung einen Bescheid aus.",
    hint: "ausstellen = 開具（文件）",
    type: "existing"
  },
  {
    id: 82, wordId: 28, root: "stellen", word: "ausstellen",
    sentence: "Können Sie mir bitte eine Rechnung ___?",
    answer: "ausstellen",
    full: "Können Sie mir bitte eine Rechnung ausstellen?",
    hint: "ausstellen = 開具（發票）",
    type: "new"
  },

  // erstellen (id:29)
  {
    id: 83, wordId: 29, root: "stellen", word: "erstellen",
    sentence: "Für die Simulation habe ich einen detaillierten Bericht ___.",
    answer: "erstellt",
    full: "Für die Simulation habe ich einen detaillierten Bericht erstellt.",
    hint: "erstellen = 製作",
    type: "existing"
  },
  {
    id: 84, wordId: 29, root: "stellen", word: "erstellen",
    sentence: "Bitte ___ Sie einen Zeitplan für das Projekt.",
    answer: "erstellen",
    full: "Bitte erstellen Sie einen Zeitplan für das Projekt.",
    hint: "erstellen = 從無到有建立",
    type: "new"
  },

  // feststellen (id:30)
  {
    id: 85, wordId: 30, root: "stellen", word: "feststellen",
    sentence: "Wir haben ___, dass die Simulation einen systematischen Fehler enthält.",
    answer: "festgestellt",
    full: "Wir haben festgestellt, dass die Simulation einen systematischen Fehler enthält.",
    hint: "feststellen = 發現、確認",
    type: "existing"
  },
  {
    id: 86, wordId: 30, root: "stellen", word: "feststellen",
    sentence: "Bei der Prüfung wurde ___, dass die Ware beschädigt war.",
    answer: "festgestellt",
    full: "Bei der Prüfung wurde festgestellt, dass die Ware beschädigt war.",
    hint: "feststellen = 查明",
    type: "new"
  },

  // herstellen (id:31)
  {
    id: 87, wordId: 31, root: "stellen", word: "herstellen",
    sentence: "Das Unternehmen stellt Bauteile für die Automobilindustrie ___.",
    answer: "her",
    full: "Das Unternehmen stellt Bauteile für die Automobilindustrie her.",
    hint: "herstellen（可分）= 製造",
    type: "existing"
  },
  {
    id: 88, wordId: 31, root: "stellen", word: "herstellen",
    sentence: "Wir möchten einen direkten Kontakt zum Lieferanten ___.",
    answer: "herstellen",
    full: "Wir möchten einen direkten Kontakt zum Lieferanten herstellen.",
    hint: "Kontakt herstellen = 建立聯繫（最常用搭配）",
    type: "new"
  },

  // einstellen (id:32)
  {
    id: 89, wordId: 32, root: "stellen", word: "einstellen",
    sentence: "Das Unternehmen stellt dieses Jahr zehn neue Ingenieure ___.",
    answer: "ein",
    full: "Das Unternehmen stellt dieses Jahr zehn neue Ingenieure ein.",
    hint: "einstellen = 僱用",
    type: "existing"
  },
  {
    id: 90, wordId: 32, root: "stellen", word: "einstellen",
    sentence: "Die Fabrik hat die Produktion vorübergehend ___.",
    answer: "eingestellt",
    full: "Die Fabrik hat die Produktion vorübergehend eingestellt.",
    hint: "einstellen = 停止",
    type: "existing"
  },
  {
    id: 91, wordId: 32, root: "stellen", word: "einstellen",
    sentence: "Wir möchten eine erfahrene Fachkraft ___.",
    answer: "einstellen",
    full: "Wir möchten eine erfahrene Fachkraft einstellen.",
    hint: "einstellen = 僱用（最常用用法）",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  führen
  // ══════════════════════════════════════════════

  // durchführen (id:33)
  {
    id: 92, wordId: 33, root: "führen", word: "durchführen",
    sentence: "Das Forschungsteam hat eine neue Simulationsmethode erfolgreich ___.",
    answer: "durchgeführt",
    full: "Das Forschungsteam hat eine neue Simulationsmethode erfolgreich durchgeführt.",
    hint: "durchführen = 執行、實施",
    type: "existing"
  },
  {
    id: 93, wordId: 33, root: "führen", word: "durchführen",
    sentence: "Die Prüfung wird nächste Woche ___.",
    answer: "durchgeführt",
    full: "Die Prüfung wird nächste Woche durchgeführt.",
    hint: "durchführen = 舉行（考試）",
    type: "new"
  },

  // ausführen (id:34)
  {
    id: 94, wordId: 34, root: "führen", word: "ausführen",
    sentence: "Könnten Sie diesen Punkt bitte näher ___?",
    answer: "ausführen",
    full: "Könnten Sie diesen Punkt bitte näher ausführen?",
    hint: "ausführen = 進一步說明",
    type: "existing"
  },
  {
    id: 95, wordId: 34, root: "führen", word: "ausführen",
    sentence: "Der Auftrag wurde fristgerecht ___.",
    answer: "ausgeführt",
    full: "Der Auftrag wurde fristgerecht ausgeführt.",
    hint: "ausführen = 執行（任務）",
    type: "new"
  },

  // einführen (id:35)
  {
    id: 96, wordId: 35, root: "führen", word: "einführen",
    sentence: "Das Unternehmen führt ein neues Qualitätssystem ___.",
    answer: "ein",
    full: "Das Unternehmen führt ein neues Qualitätssystem ein.",
    hint: "einführen（可分）= 引進",
    type: "existing"
  },
  {
    id: 97, wordId: 35, root: "führen", word: "einführen",
    sentence: "Neue Mitarbeiter werden in ihre Aufgaben ___.",
    answer: "eingeführt",
    full: "Neue Mitarbeiter werden in ihre Aufgaben eingeführt.",
    hint: "einführen = 帶入、介紹",
    type: "new"
  },

  // vorführen (id:49)
  {
    id: 98, wordId: 49, root: "führen", word: "vorführen",
    sentence: "Der Techniker führt die neue Maschine ___.",
    answer: "vor",
    full: "Der Techniker führt die neue Maschine vor.",
    hint: "vorführen（可分）= 示範",
    type: "existing"
  },
  {
    id: 99, wordId: 49, root: "führen", word: "vorführen",
    sentence: "Beim Gespräch wurden die neuesten Ergebnisse ___.",
    answer: "vorgeführt",
    full: "Beim Gespräch wurden die neuesten Ergebnisse vorgeführt.",
    hint: "vorführen = 展示",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  sprechen
  // ══════════════════════════════════════════════

  // absprechen (id:36)
  {
    id: 100, wordId: 36, root: "sprechen", word: "absprechen",
    sentence: "In ___ mit der Teamleiterin habe ich den Termin verschoben.",
    answer: "Absprache",
    full: "In Absprache mit der Teamleiterin habe ich den Termin verschoben.",
    hint: "in Absprache mit = 與……協調後",
    type: "existing"
  },
  {
    id: 101, wordId: 36, root: "sprechen", word: "absprechen",
    sentence: "Ohne vorherige ___ sollte man keine wichtigen Entscheidungen treffen.",
    answer: "Absprache",
    full: "Ohne vorherige Absprache sollte man keine wichtigen Entscheidungen treffen.",
    hint: "Absprache = 事先協議",
    type: "existing"
  },
  {
    id: 102, wordId: 36, root: "sprechen", word: "absprechen",
    sentence: "Das müssen wir noch genau ___.",
    answer: "absprechen",
    full: "Das müssen wir noch genau absprechen.",
    hint: "absprechen = 事先說好、協商定好",
    type: "new"
  },

  // besprechen (id:37)
  {
    id: 103, wordId: 37, root: "sprechen", word: "besprechen",
    sentence: "Wir ___ die Simulationsergebnisse im nächsten Meeting.",
    answer: "besprechen",
    full: "Wir besprechen die Simulationsergebnisse im nächsten Meeting.",
    hint: "besprechen = 討論",
    type: "existing"
  },
  {
    id: 104, wordId: 37, root: "sprechen", word: "besprechen",
    sentence: "Ich muss das zuerst mit meiner Vorgesetzten ___.",
    answer: "besprechen",
    full: "Ich muss das zuerst mit meiner Vorgesetzten besprechen.",
    hint: "besprechen = 商量、討論",
    type: "new"
  },

  // versprechen (id:38)
  {
    id: 105, wordId: 38, root: "sprechen", word: "versprechen",
    sentence: "Er hat ___, pünktlich zu sein.",
    answer: "versprochen",
    full: "Er hat versprochen, pünktlich zu sein.",
    hint: "versprechen = 承諾",
    type: "existing"
  },
  {
    id: 106, wordId: 38, root: "sprechen", word: "versprechen",
    sentence: "Entschuldigung, ich habe mich ___.",
    answer: "versprochen",
    full: "Entschuldigung, ich habe mich versprochen.",
    hint: "sich versprechen = 說錯話（口誤）",
    type: "existing"
  },
  {
    id: 107, wordId: 38, root: "sprechen", word: "versprechen",
    sentence: "Sie ___ dem Kunden, das Problem bis morgen zu lösen.",
    answer: "verspricht",
    full: "Sie verspricht dem Kunden, das Problem bis morgen zu lösen.",
    hint: "versprechen = 向某人承諾（最常用用法）",
    type: "new"
  },

  // widersprechen (id:39)
  {
    id: 108, wordId: 39, root: "sprechen", word: "widersprechen",
    sentence: "Ich muss Ihrer Einschätzung hier ___.",
    answer: "widersprechen",
    full: "Ich muss Ihrer Einschätzung hier widersprechen.",
    hint: "widersprechen + Dativ = 反駁某人",
    type: "existing"
  },
  {
    id: 109, wordId: 39, root: "sprechen", word: "widersprechen",
    sentence: "Die beiden Berichte ___ sich.",
    answer: "widersprechen",
    full: "Die beiden Berichte widersprechen sich.",
    hint: "sich widersprechen = 自相矛盾",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  gleich
  // ══════════════════════════════════════════════

  // begleichen (id:40)
  {
    id: 110, wordId: 40, root: "gleich", word: "begleichen",
    sentence: "Die Firma hat die offene Rechnung innerhalb von 30 Tagen ___.",
    answer: "beglichen",
    full: "Die Firma hat die offene Rechnung innerhalb von 30 Tagen beglichen.",
    hint: "begleichen = 結清",
    type: "existing"
  },
  {
    id: 111, wordId: 40, root: "gleich", word: "begleichen",
    sentence: "Bitte ___ Sie den ausstehenden Betrag bis Ende des Monats.",
    answer: "begleichen",
    full: "Bitte begleichen Sie den ausstehenden Betrag bis Ende des Monats.",
    hint: "begleichen = 結清款項（最常用用法）",
    type: "new"
  },

  // ausgleichen (id:41)
  {
    id: 112, wordId: 41, root: "gleich", word: "ausgleichen",
    sentence: "Die Überstunden werden durch Freizeitausgleich ___.",
    answer: "ausgeglichen",
    full: "Die Überstunden werden durch Freizeitausgleich ausgeglichen.",
    hint: "ausgleichen = 補償",
    type: "existing"
  },
  {
    id: 113, wordId: 41, root: "gleich", word: "ausgleichen",
    sentence: "Sport kann einen guten ___ zum Büroalltag schaffen.",
    answer: "Ausgleich",
    full: "Sport kann einen guten Ausgleich zum Büroalltag schaffen.",
    hint: "der Ausgleich = 平衡、補償（名詞）",
    type: "existing"
  },
  {
    id: 114, wordId: 41, root: "gleich", word: "ausgleichen",
    sentence: "Die Verluste aus dem ersten Quartal konnten im zweiten Quartal ___ werden.",
    answer: "ausgeglichen",
    full: "Die Verluste aus dem ersten Quartal konnten im zweiten Quartal ausgeglichen werden.",
    hint: "ausgleichen = 彌補損失",
    type: "new"
  },

  // vergleichen (id:42)
  {
    id: 115, wordId: 42, root: "gleich", word: "vergleichen",
    sentence: "Im ___ zum letzten Jahr sind die Ergebnisse deutlich besser.",
    answer: "Vergleich",
    full: "Im Vergleich zum letzten Jahr sind die Ergebnisse deutlich besser.",
    hint: "im Vergleich zu = 與……相比",
    type: "existing"
  },
  {
    id: 116, wordId: 42, root: "gleich", word: "vergleichen",
    sentence: "Man sollte die Angebote sorgfältig ___.",
    answer: "vergleichen",
    full: "Man sollte die Angebote sorgfältig vergleichen.",
    hint: "vergleichen = 比較",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  weisen
  // ══════════════════════════════════════════════

  // verweisen (id:43)
  {
    id: 117, wordId: 43, root: "weisen", word: "verweisen",
    sentence: "In diesem Fall verweisen wir auf unsere allgemeinen ___.",
    answer: "Geschäftsbedingungen",
    full: "In diesem Fall verweisen wir auf unsere allgemeinen Geschäftsbedingungen.",
    hint: "verweisen auf = 引用（規定）",
    type: "existing"
  },
  {
    id: 118, wordId: 43, root: "weisen", word: "verweisen",
    sentence: "Müller (2020) ___ darauf, dass Simulationsergebnisse stark von den Eingabeparametern abhängen.",
    answer: "verweist",
    full: "Müller (2020) verweist darauf, dass Simulationsergebnisse stark von den Eingabeparametern abhängen.",
    hint: "verweisen = 指出（學術引用用法）",
    type: "existing"
  },
  {
    id: 119, wordId: 43, root: "weisen", word: "verweisen",
    sentence: "Der Kunde wurde an die Fachabteilung ___.",
    answer: "verwiesen",
    full: "Der Kunde wurde an die Fachabteilung verwiesen.",
    hint: "verweisen = 轉介（到某部門）",
    type: "new"
  },

  // hinweisen (id:44)
  {
    id: 120, wordId: 44, root: "weisen", word: "hinweisen",
    sentence: "Ich möchte darauf ___, dass die Frist am Freitag endet.",
    answer: "hinweisen",
    full: "Ich möchte darauf hinweisen, dass die Frist am Freitag endet.",
    hint: "hinweisen auf = 指出、提醒",
    type: "existing"
  },
  {
    id: 121, wordId: 44, root: "weisen", word: "hinweisen",
    sentence: "Der Bericht weist auf mögliche Fehlerquellen ___.",
    answer: "hin",
    full: "Der Bericht weist auf mögliche Fehlerquellen hin.",
    hint: "hinweisen（可分）= 指出",
    type: "existing"
  },
  {
    id: 122, wordId: 44, root: "weisen", word: "hinweisen",
    sentence: "Darf ich darauf ___, dass diese Methode bereits erprobt wurde?",
    answer: "hinweisen",
    full: "Darf ich darauf hinweisen, dass diese Methode bereits erprobt wurde?",
    hint: "hinweisen = 提醒注意",
    type: "new"
  },

  // nachweisen (id:45)
  {
    id: 123, wordId: 45, root: "weisen", word: "nachweisen",
    sentence: "Sie müssen Ihre Sprachkenntnisse durch ein Zertifikat ___.",
    answer: "nachweisen",
    full: "Sie müssen Ihre Sprachkenntnisse durch ein Zertifikat nachweisen.",
    hint: "nachweisen = 證明（文件佐證）",
    type: "existing"
  },
  {
    id: 124, wordId: 45, root: "weisen", word: "nachweisen",
    sentence: "Bitte legen Sie entsprechende ___ für Ihre Berufserfahrung vor.",
    answer: "Nachweise",
    full: "Bitte legen Sie entsprechende Nachweise für Ihre Berufserfahrung vor.",
    hint: "der Nachweis = 證明文件",
    type: "new"
  },

  // überweisen (id:46)
  {
    id: 125, wordId: 46, root: "weisen", word: "überweisen",
    sentence: "Bitte ___ Sie den Betrag auf folgendes Konto.",
    answer: "überweisen",
    full: "Bitte überweisen Sie den Betrag auf folgendes Konto.",
    hint: "überweisen = 匯款",
    type: "existing"
  },
  {
    id: 126, wordId: 46, root: "weisen", word: "überweisen",
    sentence: "Der Hausarzt hat mich zum Spezialisten ___.",
    answer: "überwiesen",
    full: "Der Hausarzt hat mich zum Spezialisten überwiesen.",
    hint: "überweisen = 轉診",
    type: "new"
  },

  // beweisen (id:69)
  {
    id: 127, wordId: 69, root: "weisen", word: "beweisen",
    sentence: "Die Simulation ___, dass das Modell korrekt ist.",
    answer: "beweist",
    full: "Die Simulation beweist, dass das Modell korrekt ist.",
    hint: "beweisen = 證明（科學/邏輯）",
    type: "existing"
  },
  {
    id: 128, wordId: 69, root: "weisen", word: "beweisen",
    sentence: "Ohne ausreichende ___ kann keine Entscheidung getroffen werden.",
    answer: "Beweise",
    full: "Ohne ausreichende Beweise kann keine Entscheidung getroffen werden.",
    hint: "der Beweis（複數 Beweise）= 證據",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  zwingen
  // ══════════════════════════════════════════════

  // zwingen (id:47)
  {
    id: 129, wordId: 47, root: "zwingen", word: "zwingen",
    sentence: "Ich war ___, das Angebot abzulehnen.",
    answer: "gezwungen",
    full: "Ich war gezwungen, das Angebot abzulehnen.",
    hint: "gezwungen sein = 被迫",
    type: "existing"
  },
  {
    id: 130, wordId: 47, root: "zwingen", word: "zwingen",
    sentence: "Die Situation hat mich dazu ___, schnell zu entscheiden.",
    answer: "gezwungen",
    full: "Die Situation hat mich dazu gezwungen, schnell zu entscheiden.",
    hint: "zwingen zu = 迫使做某事",
    type: "new"
  },

  // erzwingen (id:48)
  {
    id: 131, wordId: 48, root: "zwingen", word: "erzwingen",
    sentence: "Ein gutes Ergebnis lässt sich nicht immer ___.",
    answer: "erzwingen",
    full: "Ein gutes Ergebnis lässt sich nicht immer erzwingen.",
    hint: "erzwingen = 強行取得（結果）",
    type: "existing"
  },
  {
    id: 132, wordId: 48, root: "zwingen", word: "erzwingen",
    sentence: "Die Gewerkschaft ___ eine Lohnerhöhung.",
    answer: "erzwang",
    full: "Die Gewerkschaft erzwang eine Lohnerhöhung.",
    hint: "erzwingen = 強行爭取到（結果）",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  wirken
  // ══════════════════════════════════════════════

  // wirken (id:50)
  {
    id: 133, wordId: 50, root: "wirken", word: "wirken",
    sentence: "Er ___ in Meetings immer sehr überzeugend.",
    answer: "wirkt",
    full: "Er wirkt in Meetings immer sehr überzeugend.",
    hint: "wirken + Adjektiv = 看起來像",
    type: "existing"
  },
  {
    id: 134, wordId: 50, root: "wirken", word: "wirken",
    sentence: "Beim Vorstellungsgespräch sollte man selbstbewusst ___.",
    answer: "wirken",
    full: "Beim Vorstellungsgespräch sollte man selbstbewusst wirken.",
    hint: "wirken = 給人……的印象（最常用用法）",
    type: "new"
  },

  // auswirken (id:51)
  {
    id: 135, wordId: 51, root: "wirken", word: "auswirken",
    sentence: "Der Fehler in der Simulation wirkt sich auf alle Ergebnisse ___.",
    answer: "aus",
    full: "Der Fehler in der Simulation wirkt sich auf alle Ergebnisse aus.",
    hint: "sich auswirken auf（可分）= 影響",
    type: "existing"
  },
  {
    id: 136, wordId: 51, root: "wirken", word: "auswirken",
    sentence: "Die neuen Regelungen ___ sich positiv auf die Arbeitsqualität ___.",
    answer: "wirken … aus",
    full: "Die neuen Regelungen wirken sich positiv auf die Arbeitsqualität aus.",
    hint: "sich auswirken auf + Akk. = 產生影響（固定搭配）",
    type: "new"
  },

  // bewirken (id:52)
  {
    id: 137, wordId: 52, root: "wirken", word: "bewirken",
    sentence: "Diese Maßnahme hat kaum etwas ___.",
    answer: "bewirkt",
    full: "Diese Maßnahme hat kaum etwas bewirkt.",
    hint: "bewirken = 達成、造成",
    type: "existing"
  },
  {
    id: 138, wordId: 52, root: "wirken", word: "bewirken",
    sentence: "Mit einem klaren Konzept kann man viel ___.",
    answer: "bewirken",
    full: "Mit einem klaren Konzept kann man viel bewirken.",
    hint: "bewirken = 引發某結果",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  ziehen
  // ══════════════════════════════════════════════

  // bevorzugen (id:53)
  {
    id: 139, wordId: 53, root: "ziehen", word: "bevorzugen",
    sentence: "Erfahrene Bewerber werden ___.",
    answer: "bevorzugt",
    full: "Erfahrene Bewerber werden bevorzugt.",
    hint: "bevorzugen = 優先對待",
    type: "existing"
  },
  {
    id: 140, wordId: 53, root: "ziehen", word: "bevorzugen",
    sentence: "Ich ___ schriftliche Kommunikation bei komplexen Themen.",
    answer: "bevorzuge",
    full: "Ich bevorzuge schriftliche Kommunikation bei komplexen Themen.",
    hint: "bevorzugen = 偏好",
    type: "new"
  },

  // vorziehen (id:54)
  {
    id: 141, wordId: 54, root: "ziehen", word: "vorziehen",
    sentence: "Ich ziehe persönliche Gespräche E-Mails ___.",
    answer: "vor",
    full: "Ich ziehe persönliche Gespräche E-Mails vor.",
    hint: "vorziehen（可分）= 偏好 A 勝過 B",
    type: "existing"
  },
  {
    id: 142, wordId: 54, root: "ziehen", word: "vorziehen",
    sentence: "Der Termin wurde auf Montag ___.",
    answer: "vorgezogen",
    full: "Der Termin wurde auf Montag vorgezogen.",
    hint: "vorziehen = 提前",
    type: "new"
  },

  // anziehen (id:55)
  {
    id: 143, wordId: 55, root: "ziehen", word: "anziehen",
    sentence: "Das Angebot zieht viele Bewerber ___.",
    answer: "an",
    full: "Das Angebot zieht viele Bewerber an.",
    hint: "anziehen（可分）= 吸引",
    type: "existing"
  },
  {
    id: 144, wordId: 55, root: "ziehen", word: "anziehen",
    sentence: "Diese Art von Arbeit ___ mich sehr ___.",
    answer: "zieht … an",
    full: "Diese Art von Arbeit zieht mich sehr an.",
    hint: "anziehen = 吸引（人）",
    type: "new"
  },

  // beziehen (id:56)
  {
    id: 145, wordId: 56, root: "ziehen", word: "beziehen",
    sentence: "Ich ___ mich auf Ihre E-Mail vom 15. April.",
    answer: "beziehe",
    full: "Ich beziehe mich auf Ihre E-Mail vom 15. April.",
    hint: "sich beziehen auf = 參照（書信常用）",
    type: "existing"
  },
  {
    id: 146, wordId: 56, root: "ziehen", word: "beziehen",
    sentence: "___ auf unser Telefonat sende ich Ihnen die gewünschten Unterlagen.",
    answer: "Bezugnehmend",
    full: "Bezugnehmend auf unser Telefonat sende ich Ihnen die gewünschten Unterlagen.",
    hint: "bezugnehmend auf = 就……而言（書信開頭）",
    type: "new"
  },

  // bezüglich (id:57)
  {
    id: 147, wordId: 57, root: "ziehen", word: "bezüglich",
    sentence: "___ Ihrer Anfrage teilen wir Ihnen mit, dass die Lieferung verzögert wird.",
    answer: "Bezüglich",
    full: "Bezüglich Ihrer Anfrage teilen wir Ihnen mit, dass die Lieferung verzögert wird.",
    hint: "bezüglich + Genitiv = 關於",
    type: "existing"
  },
  {
    id: 148, wordId: 57, root: "ziehen", word: "bezüglich",
    sentence: "___ der Kosten können wir noch verhandeln.",
    answer: "Bezüglich",
    full: "Bezüglich der Kosten können wir noch verhandeln.",
    hint: "bezüglich = 關於（接 Genitiv）",
    type: "new"
  },

  // beziehungsweise (id:58)
  {
    id: 149, wordId: 58, root: "ziehen", word: "beziehungsweise",
    sentence: "Die Proben wurden bei 200 ___ 400 Grad Celsius getestet.",
    answer: "bzw.",
    full: "Die Proben wurden bei 200 bzw. 400 Grad Celsius getestet.",
    hint: "bzw. = beziehungsweise = 分別是（respectively）",
    type: "existing"
  },
  {
    id: 150, wordId: 58, root: "ziehen", word: "beziehungsweise",
    sentence: "Bitte wenden Sie sich an Herrn Müller ___ seine Vertretung.",
    answer: "bzw.",
    full: "Bitte wenden Sie sich an Herrn Müller bzw. seine Vertretung.",
    hint: "bzw. = 或者（or rather）",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  legen
  // ══════════════════════════════════════════════

  // festlegen (id:59)
  {
    id: 151, wordId: 59, root: "legen", word: "festlegen",
    sentence: "Wir müssen den Abgabetermin klar ___.",
    answer: "festlegen",
    full: "Wir müssen den Abgabetermin klar festlegen.",
    hint: "festlegen = 確定",
    type: "existing"
  },
  {
    id: 152, wordId: 59, root: "legen", word: "festlegen",
    sentence: "Ich möchte mich noch nicht ___.",
    answer: "festlegen",
    full: "Ich möchte mich noch nicht festlegen.",
    hint: "sich festlegen = 表態、承諾",
    type: "existing"
  },
  {
    id: 153, wordId: 59, root: "legen", word: "festlegen",
    sentence: "Die Regeln wurden gemeinsam im Team ___.",
    answer: "festgelegt",
    full: "Die Regeln wurden gemeinsam im Team festgelegt.",
    hint: "festlegen = 制定規則（最常用用法）",
    type: "new"
  },

  // verlegen (id:60)
  {
    id: 154, wordId: 60, root: "legen", word: "verlegen",
    sentence: "Der Termin muss leider ___ werden.",
    answer: "verlegt",
    full: "Der Termin muss leider verlegt werden.",
    hint: "verlegen = 改期",
    type: "existing"
  },
  {
    id: 155, wordId: 60, root: "legen", word: "verlegen",
    sentence: "Ich habe meine Schlüssel ___.",
    answer: "verlegt",
    full: "Ich habe meine Schlüssel verlegt.",
    hint: "verlegen = 放錯地方找不到",
    type: "existing"
  },
  {
    id: 156, wordId: 60, root: "legen", word: "verlegen",
    sentence: "Die Sitzung wurde auf nächste Woche ___.",
    answer: "verlegt",
    full: "Die Sitzung wurde auf nächste Woche verlegt.",
    hint: "verlegen = 改期（最常用用法）",
    type: "new"
  },

  // vorlegen (id:61)
  {
    id: 157, wordId: 61, root: "legen", word: "vorlegen",
    sentence: "Bitte legen Sie alle erforderlichen Unterlagen ___.",
    answer: "vor",
    full: "Bitte legen Sie alle erforderlichen Unterlagen vor.",
    hint: "vorlegen（可分）= 提交",
    type: "existing"
  },
  {
    id: 158, wordId: 61, root: "legen", word: "vorlegen",
    sentence: "Können Sie bitte Ihren Ausweis ___?",
    answer: "vorlegen",
    full: "Können Sie bitte Ihren Ausweis vorlegen?",
    hint: "vorlegen = 出示（文件）",
    type: "new"
  },

  // belegen (id:62)
  {
    id: 159, wordId: 62, root: "legen", word: "belegen",
    sentence: "Bitte ___ Sie Ihre Angaben mit entsprechenden Nachweisen.",
    answer: "belegen",
    full: "Bitte belegen Sie Ihre Angaben mit entsprechenden Nachweisen.",
    hint: "belegen = 用文件證明",
    type: "existing"
  },
  {
    id: 160, wordId: 62, root: "legen", word: "belegen",
    sentence: "Sie hat einen Kurs in Projektmanagement ___.",
    answer: "belegt",
    full: "Sie hat einen Kurs in Projektmanagement belegt.",
    hint: "belegen = 選修課程",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  treten
  // ══════════════════════════════════════════════

  // betreten (id:63)
  {
    id: 161, wordId: 63, root: "treten", word: "betreten",
    sentence: "Das Labor darf nur mit Schutzausrüstung ___ werden.",
    answer: "betreten",
    full: "Das Labor darf nur mit Schutzausrüstung betreten werden.",
    hint: "betreten = 進入",
    type: "existing"
  },
  {
    id: 162, wordId: 63, root: "treten", word: "betreten",
    sentence: "Mit diesem Projekt ___ wir völliges Neuland.",
    answer: "betreten",
    full: "Mit diesem Projekt betreten wir völliges Neuland.",
    hint: "Neuland betreten = 踏入新領域",
    type: "new"
  },

  // antreten (id:64)
  {
    id: 163, wordId: 64, root: "treten", word: "antreten",
    sentence: "Sie tritt am ersten Mai ihre neue Stelle ___.",
    answer: "an",
    full: "Sie tritt am ersten Mai ihre neue Stelle an.",
    hint: "antreten（可分）= 就職",
    type: "existing"
  },
  {
    id: 164, wordId: 64, root: "treten", word: "antreten",
    sentence: "Alle Kandidaten ___ pünktlich zur Prüfung ___.",
    answer: "traten … an",
    full: "Alle Kandidaten traten pünktlich zur Prüfung an.",
    hint: "zur Prüfung antreten = 應考",
    type: "new"
  },

  // eintreten (id:65)
  {
    id: 165, wordId: 65, root: "treten", word: "eintreten",
    sentence: "Sie ist letztes Jahr in den Betriebsrat ___.",
    answer: "eingetreten",
    full: "Sie ist letztes Jahr in den Betriebsrat eingetreten.",
    hint: "eintreten = 加入",
    type: "existing"
  },
  {
    id: 166, wordId: 65, root: "treten", word: "eintreten",
    sentence: "Im schlimmsten Fall ___ eine Verzögerung ___.",
    answer: "tritt … ein",
    full: "Im schlimmsten Fall tritt eine Verzögerung ein.",
    hint: "eintreten = 發生（某情況）",
    type: "new"
  },

  // auftreten (id:66)
  {
    id: 167, wordId: 66, root: "treten", word: "auftreten",
    sentence: "In der Simulation ___ unerwartete Fehler ___.",
    answer: "traten … auf",
    full: "In der Simulation traten unerwartete Fehler auf.",
    hint: "auftreten = 出現、發生",
    type: "existing"
  },
  {
    id: 168, wordId: 66, root: "treten", word: "auftreten",
    sentence: "Beim Vorstellungsgespräch sollte man selbstbewusst ___.",
    answer: "auftreten",
    full: "Beim Vorstellungsgespräch sollte man selbstbewusst auftreten.",
    hint: "auftreten = 表現自己（最常用用法）",
    type: "new"
  },

  // vertreten (id:67)
  {
    id: 169, wordId: 67, root: "treten", word: "vertreten",
    sentence: "Sie ___ ihre Kollegin während des Urlaubs.",
    answer: "vertritt",
    full: "Sie vertritt ihre Kollegin während des Urlaubs.",
    hint: "vertreten = 代理某人",
    type: "existing"
  },
  {
    id: 170, wordId: 67, root: "treten", word: "vertreten",
    sentence: "Ich ___ die Ansicht, dass Qualität wichtiger als Geschwindigkeit ist.",
    answer: "vertrete",
    full: "Ich vertrete die Ansicht, dass Qualität wichtiger als Geschwindigkeit ist.",
    hint: "eine Meinung vertreten = 持有某立場（最常用搭配）",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  kündigen
  // ══════════════════════════════════════════════

  // kündigen (id:70)
  {
    id: 171, wordId: 70, root: "kündigen", word: "kündigen",
    sentence: "Sie hat ___ und sucht jetzt eine neue Stelle.",
    answer: "gekündigt",
    full: "Sie hat gekündigt und sucht jetzt eine neue Stelle.",
    hint: "kündigen（不及物）= 辭職",
    type: "existing"
  },
  {
    id: 172, wordId: 70, root: "kündigen", word: "kündigen",
    sentence: "Dem Mitarbeiter wurde fristlos ___.",
    answer: "gekündigt",
    full: "Dem Mitarbeiter wurde fristlos gekündigt.",
    hint: "jemandem kündigen = 解僱某人",
    type: "existing"
  },
  {
    id: 173, wordId: 70, root: "kündigen", word: "kündigen",
    sentence: "Er möchte seinen Mietvertrag zum Ende des Monats ___.",
    answer: "kündigen",
    full: "Er möchte seinen Mietvertrag zum Ende des Monats kündigen.",
    hint: "kündigen = 終止（合約/退租）",
    type: "new"
  },

  // die Kündigung (id:71)
  {
    id: 174, wordId: 71, root: "kündigen", word: "die Kündigung",
    sentence: "Er hat die ___ schriftlich eingereicht.",
    answer: "Kündigung",
    full: "Er hat die Kündigung schriftlich eingereicht.",
    hint: "die Kündigung = 辭呈",
    type: "existing"
  },
  {
    id: 175, wordId: 71, root: "kündigen", word: "die Kündigung",
    sentence: "Die ___ muss die gesetzliche ___ einhalten.",
    answer: "Kündigung … Kündigungsfrist",
    full: "Die Kündigung muss die gesetzliche Kündigungsfrist einhalten.",
    hint: "die Kündigungsfrist = 預告期",
    type: "new"
  },

  // ankündigen (id:72)
  {
    id: 176, wordId: 72, root: "kündigen", word: "ankündigen",
    sentence: "Die Geschäftsführung ___ Änderungen in der Unternehmensstruktur ___.",
    answer: "kündigte … an",
    full: "Die Geschäftsführung kündigte Änderungen in der Unternehmensstruktur an.",
    hint: "ankündigen（可分）= 宣布",
    type: "existing"
  },
  {
    id: 177, wordId: 72, root: "kündigen", word: "ankündigen",
    sentence: "Wie ___, beginnt das neue Semester am ersten Oktober.",
    answer: "angekündigt",
    full: "Wie angekündigt, beginnt das neue Semester am ersten Oktober.",
    hint: "wie angekündigt = 如事先宣布的那樣",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  richten
  // ══════════════════════════════════════════════

  // ausrichten (id:73)
  {
    id: 178, wordId: 73, root: "richten", word: "ausrichten",
    sentence: "Unser Angebot ist auf internationale Kunden ___.",
    answer: "ausgerichtet",
    full: "Unser Angebot ist auf internationale Kunden ausgerichtet.",
    hint: "ausgerichtet auf = 針對……",
    type: "existing"
  },
  {
    id: 179, wordId: 73, root: "richten", word: "ausrichten",
    sentence: "Können Sie ihm ___, dass die Besprechung verschoben wird?",
    answer: "ausrichten",
    full: "Können Sie ihm ausrichten, dass die Besprechung verschoben wird?",
    hint: "ausrichten = 轉告（訊息）",
    type: "new"
  },

  // einrichten (id:74)
  {
    id: 180, wordId: 74, root: "richten", word: "einrichten",
    sentence: "Sie haben ihre neue Wohnung modern ___.",
    answer: "eingerichtet",
    full: "Sie haben ihre neue Wohnung modern eingerichtet.",
    hint: "einrichten = 佈置",
    type: "existing"
  },
  {
    id: 181, wordId: 74, root: "richten", word: "einrichten",
    sentence: "Ich möchte ein neues Konto bei Ihrer Bank ___.",
    answer: "einrichten",
    full: "Ich möchte ein neues Konto bei Ihrer Bank einrichten.",
    hint: "einrichten = 開設（帳戶）",
    type: "new"
  },

  // berichten (id:75)
  {
    id: 182, wordId: 75, root: "richten", word: "berichten",
    sentence: "Sie ___ regelmäßig über den Fortschritt des Projekts.",
    answer: "berichtet",
    full: "Sie berichtet regelmäßig über den Fortschritt des Projekts.",
    hint: "berichten über = 彙報",
    type: "existing"
  },
  {
    id: 183, wordId: 75, root: "richten", word: "berichten",
    sentence: "Bitte ___ Sie mir, wie das Gespräch verlaufen ist.",
    answer: "berichten",
    full: "Bitte berichten Sie mir, wie das Gespräch verlaufen ist.",
    hint: "berichten = 告訴、彙報",
    type: "new"
  },

  // errichten (id:76)
  {
    id: 184, wordId: 76, root: "richten", word: "errichten",
    sentence: "In der Innenstadt wurde ein neues Forschungszentrum ___.",
    answer: "errichtet",
    full: "In der Innenstadt wurde ein neues Forschungszentrum errichtet.",
    hint: "errichten = 建立、設立",
    type: "existing"
  },
  {
    id: 185, wordId: 76, root: "richten", word: "errichten",
    sentence: "Die Firma plant, in München eine neue Niederlassung zu ___.",
    answer: "errichten",
    full: "Die Firma plant, in München eine neue Niederlassung zu errichten.",
    hint: "errichten = 設立（機構）",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  drücken
  // ══════════════════════════════════════════════

  // ausdrücken (id:77)
  {
    id: 186, wordId: 77, root: "drücken", word: "ausdrücken",
    sentence: "Er drückte seine Zufriedenheit mit den Ergebnissen ___.",
    answer: "aus",
    full: "Er drückte seine Zufriedenheit mit den Ergebnissen aus.",
    hint: "ausdrücken（可分）= 表達",
    type: "existing"
  },
  {
    id: 187, wordId: 77, root: "drücken", word: "ausdrücken",
    sentence: "Ich möchte meinen Dank zum ___ bringen.",
    answer: "Ausdruck",
    full: "Ich möchte meinen Dank zum Ausdruck bringen.",
    hint: "zum Ausdruck bringen = 表達出來（正式）",
    type: "new"
  },

  // der Eindruck (id:78)
  {
    id: 188, wordId: 78, root: "drücken", word: "der Eindruck",
    sentence: "Beim Vorstellungsgespräch sollte man einen professionellen ___ machen.",
    answer: "Eindruck",
    full: "Beim Vorstellungsgespräch sollte man einen professionellen Eindruck machen.",
    hint: "einen Eindruck machen = 留下印象",
    type: "existing"
  },
  {
    id: 189, wordId: 78, root: "drücken", word: "der Eindruck",
    sentence: "Ich habe den ___, dass das Projekt gut vorangeht.",
    answer: "Eindruck",
    full: "Ich habe den Eindruck, dass das Projekt gut vorangeht.",
    hint: "den Eindruck haben = 有某種感覺",
    type: "new"
  },

  // unterdrücken (id:79)
  {
    id: 190, wordId: 79, root: "drücken", word: "unterdrücken",
    sentence: "Er versuchte, seine Enttäuschung zu ___.",
    answer: "unterdrücken",
    full: "Er versuchte, seine Enttäuschung zu unterdrücken.",
    hint: "unterdrücken = 壓抑",
    type: "existing"
  },
  {
    id: 191, wordId: 79, root: "drücken", word: "unterdrücken",
    sentence: "Wichtige Informationen sollten nicht ___ werden.",
    answer: "unterdrückt",
    full: "Wichtige Informationen sollten nicht unterdrückt werden.",
    hint: "unterdrücken = 壓制資訊",
    type: "new"
  },

  // bedrücken (id:80)
  {
    id: 192, wordId: 80, root: "drücken", word: "bedrücken",
    sentence: "Die Unsicherheit über die Zukunft ___ ihn sehr.",
    answer: "bedrückt",
    full: "Die Unsicherheit über die Zukunft bedrückt ihn sehr.",
    hint: "bedrücken = 使心情沉重",
    type: "existing"
  },
  {
    id: 193, wordId: 80, root: "drücken", word: "bedrücken",
    sentence: "Es herrschte eine ___ Stille im Raum.",
    answer: "bedrückende",
    full: "Es herrschte eine bedrückende Stille im Raum.",
    hint: "bedrückend = 令人壓抑的",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  wirten
  // ══════════════════════════════════════════════

  // bewirten (id:81)
  {
    id: 194, wordId: 81, root: "wirten", word: "bewirten",
    sentence: "Die Firma ___ ihre Geschäftspartner beim Jahresabschluss.",
    answer: "bewirtete",
    full: "Die Firma bewirtete ihre Geschäftspartner beim Jahresabschluss.",
    hint: "bewirten = 款待",
    type: "existing"
  },
  {
    id: 195, wordId: 81, root: "wirten", word: "bewirten",
    sentence: "___ können steuerlich abgesetzt werden.",
    answer: "Bewirtungskosten",
    full: "Bewirtungskosten können steuerlich abgesetzt werden.",
    hint: "Bewirtungskosten = 餐飲費用（稅務用語）",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  verzichten
  // ══════════════════════════════════════════════

  // verzichten (id:82)
  {
    id: 196, wordId: 82, root: "verzichten", word: "verzichten",
    sentence: "Aus Rücksicht auf ihre Kollegen ___ sie auf die Gehaltserhöhung.",
    answer: "verzichtete",
    full: "Aus Rücksicht auf ihre Kollegen verzichtete sie auf die Gehaltserhöhung.",
    hint: "verzichten auf + Akk. = 放棄",
    type: "existing"
  },
  {
    id: 197, wordId: 82, root: "verzichten", word: "verzichten",
    sentence: "Pünktlichkeit ist in diesem Berufsfeld ___.",
    answer: "unverzichtbar",
    full: "Pünktlichkeit ist in diesem Berufsfeld unverzichtbar.",
    hint: "unverzichtbar = 不可或缺的",
    type: "existing"
  },
  {
    id: 198, wordId: 82, root: "verzichten", word: "verzichten",
    sentence: "Bei der Diät ___ sie auf Zucker und Alkohol.",
    answer: "verzichtet",
    full: "Bei der Diät verzichtet sie auf Zucker und Alkohol.",
    hint: "verzichten auf = 主動不要某事物",
    type: "new"
  },

  // ══════════════════════════════════════════════
  //  erkunden
  // ══════════════════════════════════════════════

  // erkundigen (id:83)
  {
    id: 199, wordId: 83, root: "erkunden", word: "erkundigen",
    sentence: "Ich ___ mich nach dem Stand meiner Bewerbung.",
    answer: "erkundige",
    full: "Ich erkundige mich nach dem Stand meiner Bewerbung.",
    hint: "sich erkundigen nach = 詢問",
    type: "existing"
  },
  {
    id: 200, wordId: 83, root: "erkunden", word: "erkundigen",
    sentence: "Bitte ___ Sie sich beim zuständigen Amt nach den genauen Anforderungen.",
    answer: "erkundigen",
    full: "Bitte erkundigen Sie sich beim zuständigen Amt nach den genauen Anforderungen.",
    hint: "sich erkundigen = 打聽（固定搭配 nach + Dat.）",
    type: "existing"
  },
  {
    id: 201, wordId: 83, root: "erkunden", word: "erkundigen",
    sentence: "Ich möchte mich telefonisch nach den Öffnungszeiten ___.",
    answer: "erkundigen",
    full: "Ich möchte mich telefonisch nach den Öffnungszeiten erkundigen.",
    hint: "sich erkundigen = 電話詢問（最常用用法）",
    type: "new"
  },
// ══════════════════════════════════════════════
  //  halten
  // ══════════════════════════════════════════════

  { id: 202, wordId: 85, root: "halten", word: "einhalten",
    sentence: "Alle Mitarbeiter müssen die Sicherheitsvorschriften ___.",
    answer: "einhalten", full: "Alle Mitarbeiter müssen die Sicherheitsvorschriften einhalten.",
    zh: "所有員工必須遵守安全規定。", type: "existing" },
  { id: 203, wordId: 85, root: "halten", word: "einhalten",
    sentence: "Bitte ___ Sie den vereinbarten Termin ___.",
    answer: "halten … ein", full: "Bitte halten Sie den vereinbarten Termin ein.",
    zh: "請遵守約定的時間。", type: "existing" },
  { id: 204, wordId: 85, root: "halten", word: "einhalten",
    sentence: "Die Lieferfrist muss unbedingt ___ werden.",
    answer: "eingehalten", full: "Die Lieferfrist muss unbedingt eingehalten werden.",
    zh: "交貨期限必須嚴格遵守。", type: "new" },

  { id: 205, wordId: 86, root: "halten", word: "festhalten",
    sentence: "Die Ergebnisse wurden im Bericht schriftlich ___.",
    answer: "festgehalten", full: "Die Ergebnisse wurden im Bericht schriftlich festgehalten.",
    zh: "結果被書面記錄在報告中。", type: "existing" },
  { id: 206, wordId: 86, root: "halten", word: "festhalten",
    sentence: "Sie hält an ihrem Plan ___, obwohl es Schwierigkeiten gibt.",
    answer: "fest", full: "Sie hält an ihrem Plan fest, obwohl es Schwierigkeiten gibt.",
    zh: "儘管有困難，她仍堅持自己的計畫。", type: "existing" },
  { id: 207, wordId: 86, root: "halten", word: "festhalten",
    sentence: "Bitte ___ Sie das Ergebnis im Protokoll ___.",
    answer: "halten … fest", full: "Bitte halten Sie das Ergebnis im Protokoll fest.",
    zh: "請在會議記錄中記下這個結果。", type: "new" },

  { id: 208, wordId: 87, root: "halten", word: "anhalten",
    sentence: "Das schlechte Wetter ___ bereits seit einer Woche ___.",
    answer: "hält … an", full: "Das schlechte Wetter hält bereits seit einer Woche an.",
    zh: "壞天氣已經持續一週了。", type: "existing" },
  { id: 209, wordId: 87, root: "halten", word: "anhalten",
    sentence: "Die Unsicherheit im Team hält weiter ___.",
    answer: "an", full: "Die Unsicherheit im Team hält weiter an.",
    zh: "團隊中的不確定性持續存在。", type: "new" },

  { id: 210, wordId: 88, root: "halten", word: "verhalten",
    sentence: "Im Vorstellungsgespräch sollte man sich professionell ___.",
    answer: "verhalten", full: "Im Vorstellungsgespräch sollte man sich professionell verhalten.",
    zh: "面試時應該表現得專業。", type: "existing" },
  { id: 211, wordId: 88, root: "halten", word: "verhalten",
    sentence: "Das ___ des Mitarbeiters war vorbildlich.",
    answer: "Verhalten", full: "Das Verhalten des Mitarbeiters war vorbildlich.",
    zh: "那位員工的行為堪稱典範。", type: "new" },

  // ══════════════════════════════════════════════
  //  nehmen 補充
  // ══════════════════════════════════════════════

  { id: 212, wordId: 89, root: "nehmen", word: "unternehmen",
    sentence: "Wir müssen etwas ___, um das Problem zu lösen.",
    answer: "unternehmen", full: "Wir müssen etwas unternehmen, um das Problem zu lösen.",
    zh: "我們必須採取行動來解決問題。", type: "existing" },
  { id: 213, wordId: 89, root: "nehmen", word: "unternehmen",
    sentence: "Das ___ beschäftigt über 500 Mitarbeiter.",
    answer: "Unternehmen", full: "Das Unternehmen beschäftigt über 500 Mitarbeiter.",
    zh: "這家企業僱用了超過500名員工。", type: "existing" },

  { id: 214, wordId: 90, root: "nehmen", word: "genehmigen",
    sentence: "Der Antrag wurde von der Behörde ___.",
    answer: "genehmigt", full: "Der Antrag wurde von der Behörde genehmigt.",
    zh: "申請已獲機關批准。", type: "existing" },
  { id: 215, wordId: 90, root: "nehmen", word: "genehmigen",
    sentence: "Ohne ___ darf das Gebäude nicht betreten werden.",
    answer: "Genehmigung", full: "Ohne Genehmigung darf das Gebäude nicht betreten werden.",
    zh: "沒有許可不得進入該建築。", type: "existing" },
  { id: 216, wordId: 90, root: "nehmen", word: "genehmigen",
    sentence: "Bitte holen Sie die ___ beim Vorgesetzten ein, bevor Sie beginnen.",
    answer: "Genehmigung", full: "Bitte holen Sie die Genehmigung beim Vorgesetzten ein, bevor Sie beginnen.",
    zh: "請在開始之前先向上司取得許可。", type: "new" },

  // ══════════════════════════════════════════════
  //  stellen 補充
  // ══════════════════════════════════════════════

  { id: 217, wordId: 91, root: "stellen", word: "aufstellen",
    sentence: "Das Team hat klare Regeln für die Zusammenarbeit ___.",
    answer: "aufgestellt", full: "Das Team hat klare Regeln für die Zusammenarbeit aufgestellt.",
    zh: "團隊為合作制定了明確的規則。", type: "existing" },
  { id: 218, wordId: 91, root: "stellen", word: "aufstellen",
    sentence: "Das Unternehmen ist gut ___ für die Zukunft.",
    answer: "aufgestellt", full: "Das Unternehmen ist gut aufgestellt für die Zukunft.",
    zh: "公司為未來做好了充分準備。", type: "existing" },
  { id: 219, wordId: 91, root: "stellen", word: "aufstellen",
    sentence: "Wir müssen für das Projekt zunächst einen Plan ___.",
    answer: "aufstellen", full: "Wir müssen für das Projekt zunächst einen Plan aufstellen.",
    zh: "我們必須先為這個項目制定一個計畫。", type: "new" },

  // ══════════════════════════════════════════════
  //  legen 補充
  // ══════════════════════════════════════════════

  { id: 220, wordId: 92, root: "legen", word: "ablegen",
    sentence: "Sie hat die Abschlussprüfung erfolgreich ___.",
    answer: "abgelegt", full: "Sie hat die Abschlussprüfung erfolgreich abgelegt.",
    zh: "她成功地通過了畢業考試。", type: "existing" },
  { id: 221, wordId: 92, root: "legen", word: "ablegen",
    sentence: "Bitte legen Sie die Unterlagen nach Datum ___.",
    answer: "ab", full: "Bitte legen Sie die Unterlagen nach Datum ab.",
    zh: "請按日期歸檔文件。", type: "existing" },
  { id: 222, wordId: 92, root: "legen", word: "ablegen",
    sentence: "Er möchte nächsten Monat seine Sprachprüfung ___.",
    answer: "ablegen", full: "Er möchte nächsten Monat seine Sprachprüfung ablegen.",
    zh: "他想下個月參加語言考試。", type: "new" },

  { id: 223, wordId: 93, root: "legen", word: "hinterlegen",
    sentence: "Bitte ___ Sie Ihre Kontaktdaten im System ___.",
    answer: "hinterlegen", full: "Bitte hinterlegen Sie Ihre Kontaktdaten im System.",
    zh: "請在系統中存入您的聯繫資料。", type: "existing" },
  { id: 224, wordId: 93, root: "legen", word: "hinterlegen",
    sentence: "Der Schlüssel wurde beim Hausmeister ___.",
    answer: "hinterlegt", full: "Der Schlüssel wurde beim Hausmeister hinterlegt.",
    zh: "鑰匙寄存在看門人那裡。", type: "new" },

  // ══════════════════════════════════════════════
  //  sprechen 補充
  // ══════════════════════════════════════════════

  { id: 225, wordId: 94, root: "sprechen", word: "ansprechen",
    sentence: "Ich möchte ein wichtiges Problem ___.",
    answer: "ansprechen", full: "Ich möchte ein wichtiges Problem ansprechen.",
    zh: "我想提出一個重要的問題。", type: "existing" },
  { id: 226, wordId: 94, root: "sprechen", word: "ansprechen",
    sentence: "Er ___ den Kollegen direkt auf den Fehler ___.",
    answer: "sprach … an", full: "Er sprach den Kollegen direkt auf den Fehler an.",
    zh: "他直接就那個錯誤詢問了同事。", type: "new" },

  // ══════════════════════════════════════════════
  //  greifen
  // ══════════════════════════════════════════════

  { id: 227, wordId: 95, root: "greifen", word: "ergreifen",
    sentence: "Das Unternehmen muss sofort Maßnahmen ___.",
    answer: "ergreifen", full: "Das Unternehmen muss sofort Maßnahmen ergreifen.",
    zh: "公司必須立即採取措施。", type: "existing" },
  { id: 228, wordId: 95, root: "greifen", word: "ergreifen",
    sentence: "Sie hat den Beruf der Physikerin ___.",
    answer: "ergriffen", full: "Sie hat den Beruf der Physikerin ergriffen.",
    zh: "她選擇從事物理學家的職業。", type: "existing" },
  { id: 229, wordId: 95, root: "greifen", word: "ergreifen",
    sentence: "Er ___ die Initiative und schlug eine neue Lösung vor.",
    answer: "ergriff", full: "Er ergriff die Initiative und schlug eine neue Lösung vor.",
    zh: "他主動採取行動並提出了新解決方案。", type: "new" },

  { id: 230, wordId: 96, root: "greifen", word: "zugreifen",
    sentence: "Nur autorisierte Benutzer dürfen auf diese Daten ___.",
    answer: "zugreifen", full: "Nur autorisierte Benutzer dürfen auf diese Daten zugreifen.",
    zh: "只有授權用戶才可以存取這些資料。", type: "existing" },
  { id: 231, wordId: 96, root: "greifen", word: "zugreifen",
    sentence: "Auf die Datei kann ich von zu Hause aus ___.",
    answer: "zugreifen", full: "Auf die Datei kann ich von zu Hause aus zugreifen.",
    zh: "我可以從家裡存取這個檔案。", type: "new" },

  { id: 232, wordId: 97, root: "greifen", word: "eingreifen",
    sentence: "Bei diesem Fehler muss die Teamleitung ___.",
    answer: "eingreifen", full: "Bei diesem Fehler muss die Teamleitung eingreifen.",
    zh: "發生這個錯誤時，團隊領導必須介入。", type: "existing" },
  { id: 233, wordId: 98, root: "greifen", word: "begreifen",
    sentence: "Ich ___ nicht, warum der Fehler immer wieder auftritt.",
    answer: "begreife", full: "Ich begreife nicht, warum der Fehler immer wieder auftritt.",
    zh: "我不理解為什麼這個錯誤一再出現。", type: "existing" },
  { id: 234, wordId: 98, root: "greifen", word: "begreifen",
    sentence: "Diese Zusammenhänge sind schwer zu ___.",
    answer: "begreifen", full: "Diese Zusammenhänge sind schwer zu begreifen.",
    zh: "這些關聯難以理解。", type: "new" },

  // ══════════════════════════════════════════════
  //  trauen
  // ══════════════════════════════════════════════

  { id: 235, wordId: 99, root: "trauen", word: "vertrauen",
    sentence: "Im Team ist es wichtig, sich gegenseitig zu ___.",
    answer: "vertrauen", full: "Im Team ist es wichtig, sich gegenseitig zu vertrauen.",
    zh: "在團隊中，相互信任非常重要。", type: "existing" },
  { id: 236, wordId: 99, root: "trauen", word: "vertrauen",
    sentence: "Das ___ zwischen den Kollegen muss aufgebaut werden.",
    answer: "Vertrauen", full: "Das Vertrauen zwischen den Kollegen muss aufgebaut werden.",
    zh: "同事之間的信任必須建立起來。", type: "new" },

  { id: 237, wordId: 100, root: "trauen", word: "zutrauen",
    sentence: "Ich ___ mir zu, diese Aufgabe selbstständig zu erledigen.",
    answer: "traue", full: "Ich traue mir zu, diese Aufgabe selbstständig zu erledigen.",
    zh: "我認為我有能力獨立完成這項任務。", type: "existing" },
  { id: 238, wordId: 100, root: "trauen", word: "zutrauen",
    sentence: "Die Chefin ___ ihm die Projektleitung ___.",
    answer: "traut … zu", full: "Die Chefin traut ihm die Projektleitung zu.",
    zh: "女主管認為他能勝任項目領導職務。", type: "new" },

  { id: 239, wordId: 101, root: "trauen", word: "vertraut",
    sentence: "Sie ist mit den Sicherheitsvorschriften gut ___.",
    answer: "vertraut", full: "Sie ist mit den Sicherheitsvorschriften gut vertraut.",
    zh: "她對安全規定非常熟悉。", type: "existing" },
  { id: 240, wordId: 101, root: "trauen", word: "vertraut",
    sentence: "Neue Mitarbeiter müssen sich zunächst mit dem System ___ machen.",
    answer: "vertraut", full: "Neue Mitarbeiter müssen sich zunächst mit dem System vertraut machen.",
    zh: "新員工必須首先熟悉系統。", type: "new" },

  { id: 241, wordId: 102, root: "trauen", word: "das Selbstvertrauen",
    sentence: "Beim Vorstellungsgespräch ist ___ sehr wichtig.",
    answer: "Selbstvertrauen", full: "Beim Vorstellungsgespräch ist Selbstvertrauen sehr wichtig.",
    zh: "面試時自信非常重要。", type: "existing" },

  { id: 242, wordId: 103, root: "trauen", word: "vertraulich",
    sentence: "Diese Informationen sind streng ___ und dürfen nicht weitergegeben werden.",
    answer: "vertraulich", full: "Diese Informationen sind streng vertraulich und dürfen nicht weitergegeben werden.",
    zh: "這些資訊嚴格保密，不得外傳。", type: "existing" },
  { id: 243, wordId: 103, root: "trauen", word: "vertraulich",
    sentence: "Bitte behandeln Sie diesen Bericht als ___.",
    answer: "vertraulich", full: "Bitte behandeln Sie diesen Bericht als vertraulich.",
    zh: "請將這份報告視為機密。", type: "new" },

  // ══════════════════════════════════════════════
  //  tragen
  // ══════════════════════════════════════════════

  { id: 244, wordId: 104, root: "tragen", word: "eintragen",
    sentence: "Bitte ___ Sie Ihre persönlichen Angaben in das Formular ___.",
    answer: "tragen … ein", full: "Bitte tragen Sie Ihre persönlichen Angaben in das Formular ein.",
    zh: "請將您的個人資料填入表格中。", type: "existing" },
  { id: 245, wordId: 104, root: "tragen", word: "eintragen",
    sentence: "Der Termin wurde in den Kalender ___.",
    answer: "eingetragen", full: "Der Termin wurde in den Kalender eingetragen.",
    zh: "約定時間已記入行事曆。", type: "new" },

  { id: 246, wordId: 105, root: "tragen", word: "übertragen",
    sentence: "Die Aufgabe wurde dem neuen Mitarbeiter ___.",
    answer: "übertragen", full: "Die Aufgabe wurde dem neuen Mitarbeiter übertragen.",
    zh: "這項任務被授權給了新員工。", type: "existing" },
  { id: 247, wordId: 105, root: "tragen", word: "übertragen",
    sentence: "Bitte ___ Sie die Daten auf das neue Gerät ___.",
    answer: "übertragen", full: "Bitte übertragen Sie die Daten auf das neue Gerät.",
    zh: "請將資料傳輸到新設備上。", type: "existing" },
  { id: 248, wordId: 105, root: "tragen", word: "übertragen",
    sentence: "Der Bericht muss ins Englische ___ werden.",
    answer: "übertragen", full: "Der Bericht muss ins Englische übertragen werden.",
    zh: "報告必須翻譯成英文。", type: "new" },

  { id: 249, wordId: 106, root: "tragen", word: "beitragen",
    sentence: "Jeder kann zum Erfolg des Teams ___.",
    answer: "beitragen", full: "Jeder kann zum Erfolg des Teams beitragen.",
    zh: "每個人都可以為團隊的成功做出貢獻。", type: "existing" },
  { id: 250, wordId: 106, root: "tragen", word: "beitragen",
    sentence: "Was können Sie zu diesem Projekt ___?",
    answer: "beitragen", full: "Was können Sie zu diesem Projekt beitragen?",
    zh: "您能為這個項目做出什麼貢獻？", type: "new" },

  { id: 251, wordId: 107, root: "tragen", word: "vortragen",
    sentence: "Sie ___ ihr Anliegen direkt dem Vorgesetzten ___.",
    answer: "trug … vor", full: "Sie trug ihr Anliegen direkt dem Vorgesetzten vor.",
    zh: "她直接向上司提出了她的訴求。", type: "existing" },
  { id: 252, wordId: 107, root: "tragen", word: "vortragen",
    sentence: "Die Ergebnisse werden im nächsten Meeting ___.",
    answer: "vorgetragen", full: "Die Ergebnisse werden im nächsten Meeting vorgetragen.",
    zh: "結果將在下次會議中呈報。", type: "new" },

  { id: 253, wordId: 108, root: "tragen", word: "beauftragen",
    sentence: "Wir haben eine externe Firma mit der Wartung ___.",
    answer: "beauftragt", full: "Wir haben eine externe Firma mit der Wartung beauftragt.",
    zh: "我們委託了一家外部公司進行維護。", type: "existing" },
  { id: 254, wordId: 108, root: "tragen", word: "beauftragen",
    sentence: "Der Projektleiter wurde mit der Koordination ___.",
    answer: "beauftragt", full: "Der Projektleiter wurde mit der Koordination beauftragt.",
    zh: "項目負責人被委託負責協調工作。", type: "new" },

  // ══════════════════════════════════════════════
  //  leuchten
  // ══════════════════════════════════════════════

  { id: 255, wordId: 109, root: "leuchten", word: "aufleuchten",
    sentence: "Auf dem Bildschirm ___ ein Warnsignal ___.",
    answer: "leuchtete … auf", full: "Auf dem Bildschirm leuchtete ein Warnsignal auf.",
    zh: "螢幕上突然亮起了警告信號。", type: "existing" },
  { id: 256, wordId: 110, root: "leuchten", word: "einleuchten",
    sentence: "Die Erklärung ist sehr ___ und leicht zu verstehen.",
    answer: "einleuchtend", full: "Die Erklärung ist sehr einleuchtend und leicht zu verstehen.",
    zh: "這個解釋非常合理，容易理解。", type: "existing" },
  { id: 257, wordId: 110, root: "leuchten", word: "einleuchten",
    sentence: "Das ___ mir sofort – ich verstehe das Problem jetzt.",
    answer: "leuchtet … ein", full: "Das leuchtet mir sofort ein – ich verstehe das Problem jetzt.",
    zh: "我立刻覺得這說得通——我現在理解這個問題了。", type: "new" },

  // ══════════════════════════════════════════════
  //  fassen
  // ══════════════════════════════════════════════

  { id: 258, wordId: 111, root: "fassen", word: "erfassen",
    sentence: "Die Arbeitszeiten werden elektronisch ___.",
    answer: "erfasst", full: "Die Arbeitszeiten werden elektronisch erfasst.",
    zh: "工作時間以電子方式記錄。", type: "existing" },
  { id: 259, wordId: 111, root: "fassen", word: "erfassen",
    sentence: "Ich habe die Situation sofort ___.",
    answer: "erfasst", full: "Ich habe die Situation sofort erfasst.",
    zh: "我立刻掌握了情況。", type: "existing" },
  { id: 260, wordId: 111, root: "fassen", word: "erfassen",
    sentence: "Alle Daten müssen vollständig ___ werden.",
    answer: "erfasst", full: "Alle Daten müssen vollständig erfasst werden.",
    zh: "所有資料必須完整記錄。", type: "new" },

  { id: 261, wordId: 112, root: "fassen", word: "zusammenfassen",
    sentence: "Können Sie die wichtigsten Punkte kurz ___?",
    answer: "zusammenfassen", full: "Können Sie die wichtigsten Punkte kurz zusammenfassen?",
    zh: "您能簡短概括一下要點嗎？", type: "existing" },
  { id: 262, wordId: 112, root: "fassen", word: "zusammenfassen",
    sentence: "Die Ergebnisse werden stichpunktartig ___.",
    answer: "zusammengefasst", full: "Die Ergebnisse werden stichpunktartig zusammengefasst.",
    zh: "結果以要點形式概括。", type: "new" },

  { id: 263, wordId: 113, root: "fassen", word: "befassen",
    sentence: "In meiner Forschung ___ ich mich mit Materialsimulation.",
    answer: "befasse", full: "In meiner Forschung befasse ich mich mit Materialsimulation.",
    zh: "在我的研究中，我研究材料模擬。", type: "existing" },
  { id: 264, wordId: 113, root: "fassen", word: "befassen",
    sentence: "Das Team ___ sich derzeit mit diesem Problem ___.",
    answer: "befasst … sich", full: "Das Team befasst sich derzeit mit diesem Problem.",
    zh: "團隊目前正在處理這個問題。", type: "new" },

  { id: 265, wordId: 114, root: "fassen", word: "umfassen",
    sentence: "Die Ausbildung ___ theoretische und praktische Teile.",
    answer: "umfasst", full: "Die Ausbildung umfasst theoretische und praktische Teile.",
    zh: "培訓包含理論和實踐部分。", type: "existing" },
  { id: 266, wordId: 114, root: "fassen", word: "umfassen",
    sentence: "Der Kurs ___ insgesamt 120 Unterrichtsstunden.",
    answer: "umfasst", full: "Der Kurs umfasst insgesamt 120 Unterrichtsstunden.",
    zh: "這門課程共包含120課時。", type: "new" },

  // ══════════════════════════════════════════════
  //  gehen
  // ══════════════════════════════════════════════

  { id: 267, wordId: 115, root: "gehen", word: "vorgehen",
    sentence: "Wir müssen methodisch ___, um das Problem zu lösen.",
    answer: "vorgehen", full: "Wir müssen methodisch vorgehen, um das Problem zu lösen.",
    zh: "我們必須有條理地進行，以解決問題。", type: "existing" },
  { id: 268, wordId: 115, root: "gehen", word: "vorgehen",
    sentence: "Das ___ des Teams war sehr professionell.",
    answer: "Vorgehen", full: "Das Vorgehen des Teams war sehr professionell.",
    zh: "團隊的做法非常專業。", type: "new" },

  { id: 269, wordId: 116, root: "gehen", word: "vorübergehen",
    sentence: "Die Produktion wurde ___ eingestellt.",
    answer: "vorübergehend", full: "Die Produktion wurde vorübergehend eingestellt.",
    zh: "生產被暫時停止了。", type: "existing" },
  { id: 270, wordId: 116, root: "gehen", word: "vorübergehen",
    sentence: "Das ist nur eine ___ Schwierigkeit.",
    answer: "vorübergehende", full: "Das ist nur eine vorübergehende Schwierigkeit.",
    zh: "這只是一個暫時的困難。", type: "new" },

  { id: 271, wordId: 117, root: "gehen", word: "eingehen",
    sentence: "Ich möchte näher auf diesen Punkt ___.",
    answer: "eingehen", full: "Ich möchte näher auf diesen Punkt eingehen.",
    zh: "我想詳細討論這一點。", type: "existing" },
  { id: 272, wordId: 117, root: "gehen", word: "eingehen",
    sentence: "Bitte ___ Sie auf alle Fragen der Kunden ___.",
    answer: "gehen … ein", full: "Bitte gehen Sie auf alle Fragen der Kunden ein.",
    zh: "請回應客戶的所有問題。", type: "new" },

  // ══════════════════════════════════════════════
  //  geben
  // ══════════════════════════════════════════════

  { id: 273, wordId: 118, root: "geben", word: "aufgeben",
    sentence: "Es ist wichtig, niemals ___.",
    answer: "aufzugeben", full: "Es ist wichtig, niemals aufzugeben.",
    zh: "永不放棄是很重要的。", type: "existing" },
  { id: 274, wordId: 118, root: "geben", word: "aufgeben",
    sentence: "Sie hat ihren Job ___, um eine neue Stelle anzutreten.",
    answer: "aufgegeben", full: "Sie hat ihren Job aufgegeben, um eine neue Stelle anzutreten.",
    zh: "她放棄了工作，去接任新職位。", type: "new" },

  { id: 275, wordId: 119, root: "geben", word: "angeben",
    sentence: "Bitte ___ Sie alle erforderlichen Angaben ___.",
    answer: "geben … an", full: "Bitte geben Sie alle erforderlichen Angaben an.",
    zh: "請填寫所有必要的資料。", type: "existing" },
  { id: 276, wordId: 119, root: "geben", word: "angeben",
    sentence: "Der Preis wird auf der Rechnung ___.",
    answer: "angegeben", full: "Der Preis wird auf der Rechnung angegeben.",
    zh: "價格標示在發票上。", type: "new" },

  { id: 277, wordId: 120, root: "geben", word: "ausgeben",
    sentence: "Das Unternehmen hat viel Geld für Forschung ___.",
    answer: "ausgegeben", full: "Das Unternehmen hat viel Geld für Forschung ausgegeben.",
    zh: "公司在研究上花費了大量資金。", type: "existing" },
  { id: 278, wordId: 120, root: "geben", word: "ausgeben",
    sentence: "Die Schutzausrüstung wird am Eingang ___.",
    answer: "ausgegeben", full: "Die Schutzausrüstung wird am Eingang ausgegeben.",
    zh: "防護裝備在入口處發放。", type: "new" },

  // ══════════════════════════════════════════════
  //  Maß
  // ══════════════════════════════════════════════

  { id: 279, wordId: 121, root: "Maß", word: "das Maß",
    sentence: "In hohem ___ hängt das Ergebnis von der Qualität der Daten ab.",
    answer: "Maße", full: "In hohem Maße hängt das Ergebnis von der Qualität der Daten ab.",
    zh: "結果在很大程度上取決於資料的品質。", type: "existing" },

  { id: 280, wordId: 122, root: "Maß", word: "die Maßnahme",
    sentence: "Das Unternehmen ergreift geeignete ___ zur Qualitätssicherung.",
    answer: "Maßnahmen", full: "Das Unternehmen ergreift geeignete Maßnahmen zur Qualitätssicherung.",
    zh: "公司採取適當措施確保品質。", type: "existing" },
  { id: 281, wordId: 122, root: "Maß", word: "die Maßnahme",
    sentence: "Die beschlossenen ___ werden sofort umgesetzt.",
    answer: "Maßnahmen", full: "Die beschlossenen Maßnahmen werden sofort umgesetzt.",
    zh: "已決定的措施將立即實施。", type: "existing" },
  { id: 282, wordId: 122, root: "Maß", word: "die Maßnahme",
    sentence: "Welche ___ sollen wir ergreifen, um den Fehler zu beheben?",
    answer: "Maßnahmen", full: "Welche Maßnahmen sollen wir ergreifen, um den Fehler zu beheben?",
    zh: "我們應採取哪些措施來修正錯誤？", type: "new" },

  { id: 283, wordId: 123, root: "Maß", word: "gemäß",
    sentence: "___ den Vorschriften muss jeder Mitarbeiter eine Einweisung erhalten.",
    answer: "Gemäß", full: "Gemäß den Vorschriften muss jeder Mitarbeiter eine Einweisung erhalten.",
    zh: "根據規定，每位員工必須接受指導說明。", type: "existing" },
  { id: 284, wordId: 123, root: "Maß", word: "gemäß",
    sentence: "Die Zahlung erfolgt ___ dem vereinbarten Zahlungsplan.",
    answer: "gemäß", full: "Die Zahlung erfolgt gemäß dem vereinbarten Zahlungsplan.",
    zh: "付款按照商定的付款計畫進行。", type: "new" },

  { id: 285, wordId: 124, root: "Maß", word: "maßgeblich",
    sentence: "Sie hat ___ zum Erfolg des Projekts beigetragen.",
    answer: "maßgeblich", full: "Sie hat maßgeblich zum Erfolg des Projekts beigetragen.",
    zh: "她對項目的成功做出了決定性的貢獻。", type: "existing" },
  { id: 286, wordId: 124, root: "Maß", word: "maßgeblich",
    sentence: "Die Qualität der Daten ist ___ für das Simulationsergebnis.",
    answer: "maßgeblich", full: "Die Qualität der Daten ist maßgeblich für das Simulationsergebnis.",
    zh: "資料品質對模擬結果有決定性影響。", type: "new" },

  // ══════════════════════════════════════════════
  //  folgen（erfolgen / erfolgreich）
  // ══════════════════════════════════════════════

  { id: 287, wordId: 125, root: "folgen", word: "erfolgen",
    sentence: "Die Zahlung ___ innerhalb von 30 Tagen nach Rechnungsstellung.",
    answer: "erfolgt", full: "Die Zahlung erfolgt innerhalb von 30 Tagen nach Rechnungsstellung.",
    zh: "付款將在開具發票後30天內完成。", type: "existing" },
  { id: 288, wordId: 125, root: "folgen", word: "erfolgen",
    sentence: "Die Benachrichtigung ___ schriftlich.",
    answer: "erfolgt", full: "Die Benachrichtigung erfolgt schriftlich.",
    zh: "通知將以書面方式進行。", type: "new" },

  { id: 289, wordId: 126, root: "folgen", word: "erfolgreich",
    sentence: "Die Simulation wurde ___ durchgeführt.",
    answer: "erfolgreich", full: "Die Simulation wurde erfolgreich durchgeführt.",
    zh: "模擬被成功執行了。", type: "existing" },
  { id: 290, wordId: 126, root: "folgen", word: "erfolgreich",
    sentence: "Sie hat die Ausbildung ___ abgeschlossen.",
    answer: "erfolgreich", full: "Sie hat die Ausbildung erfolgreich abgeschlossen.",
    zh: "她成功地完成了培訓。", type: "new" },

  // ══════════════════════════════════════════════
  //  rufen
  // ══════════════════════════════════════════════

  { id: 291, wordId: 127, root: "rufen", word: "aufrufen",
    sentence: "___ Sie bitte das Menü ___ und wählen Sie die entsprechende Option.",
    answer: "Rufen … auf", full: "Rufen Sie bitte das Menü auf und wählen Sie die entsprechende Option.",
    zh: "請開啟選單並選擇相應的選項。", type: "existing" },
  { id: 292, wordId: 127, root: "rufen", word: "aufrufen",
    sentence: "Die Datei kann jederzeit ___ werden.",
    answer: "aufgerufen", full: "Die Datei kann jederzeit aufgerufen werden.",
    zh: "該檔案隨時可以開啟。", type: "new" },

  { id: 293, wordId: 128, root: "rufen", word: "anrufen",
    sentence: "Bitte ___ Sie mich morgen ___.",
    answer: "rufen … an", full: "Bitte rufen Sie mich morgen an.",
    zh: "請明天打電話給我。", type: "existing" },

  // ══════════════════════════════════════════════
  //  weisen 補充（unterweisen）
  // ══════════════════════════════════════════════

  { id: 294, wordId: 129, root: "weisen", word: "unterweisen",
    sentence: "Neue Mitarbeiter werden in die Sicherheitsvorschriften ___.",
    answer: "unterwiesen", full: "Neue Mitarbeiter werden in die Sicherheitsvorschriften unterwiesen.",
    zh: "新員工會接受安全規定的指導說明。", type: "existing" },
  { id: 295, wordId: 129, root: "weisen", word: "unterweisen",
    sentence: "Die ___ muss jährlich wiederholt werden.",
    answer: "Unterweisung", full: "Die Unterweisung muss jährlich wiederholt werden.",
    zh: "指導說明必須每年重複進行。", type: "new" },

  // ══════════════════════════════════════════════
  //  erläutern
  // ══════════════════════════════════════════════

  { id: 296, wordId: 130, root: "erläutern", word: "erläutern",
    sentence: "Könnten Sie diesen Punkt bitte näher ___?",
    answer: "erläutern", full: "Könnten Sie diesen Punkt bitte näher erläutern?",
    zh: "您能進一步說明這一點嗎？", type: "existing" },
  { id: 297, wordId: 130, root: "erläutern", word: "erläutern",
    sentence: "Im Folgenden ___ ich die wichtigsten Schritte.",
    answer: "erläutere", full: "Im Folgenden erläutere ich die wichtigsten Schritte.",
    zh: "以下我將說明最重要的步驟。", type: "new" },

];
