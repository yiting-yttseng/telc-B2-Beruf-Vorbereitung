// data_PreparationTraining_Hoeren.js
// 來源: telc Prüfungstraining DTB B2 — 前半部練習題型 "Fit für die Prüfung" (書本頁碼 48-78, Hören 部分)
// 標籤: telc Preparation Training
// 格式: { mt, teil, a, w, p, en, zh, k, kz, ex, ez }

const PREPARATIONTRAINING_HOEREN_DATA = [

  // ── S.46 — Hören Teil 1 (Gespräche mit Kollegen und Vorgesetzten) ─
  { mt:"PT", teil:"H1",
    a:"die", w:"Arbeitsanweisung", p:"-en",
    en:"work instruction", zh:"工作指示",
    k:"erste Arbeitsanweisungen erhalten; eine Arbeitsanweisung befolgen",
    kz:"獲得最初的工作指示；遵循工作指示",
    ex:"Erste Arbeitsanweisungen.",
    ez:"最初的工作指示。" },

  { mt:"PT", teil:"H1",
    a:"die", w:"Räumlichkeit", p:"-en",
    en:"premises / rooms", zh:"場地、空間設施",
    k:"die Räumlichkeiten zeigen; in den Räumlichkeiten der Firma",
    kz:"展示場地空間；在公司的場地裡",
    ex:"Kommen Sie, ich zeige Ihnen zuerst die Räumlichkeiten hier im Hauptgebäude.",
    ez:"來，我先帶您看看主大樓裡的場地空間。" },

  { mt:"PT", teil:"H1",
    a:"", w:"weitgehend", p:"",
    en:"largely / to a great extent", zh:"大致上、廣泛地",
    k:"sich weitgehend selbst organisieren; weitgehend unabhängig sein",
    kz:"大致上自行組織安排；大致上獨立自主",
    ex:"Das Team organisiert sich weitgehend selbst.",
    ez:"團隊大致上是自行組織運作的。" },

  // ── S.48 — Hören Teil 1 (Mit Lieferanten/Dienstleistern sprechen) ─
  { mt:"PT", teil:"H1",
    a:"", w:"verlegen (den Teppichboden)", p:"",
    en:"to lay / install (carpet flooring)", zh:"鋪設（地毯）",
    k:"den Teppichboden verlegen; ein Kabel verlegen",
    kz:"鋪設地毯；佈線",
    ex:"Sind Sie in der Lage, den Teppichboden in den Büroräumen bis zum Ende der Woche zu verlegen?",
    ez:"您能在這週結束前把辦公室裡的地毯鋪好嗎？" },

  { mt:"PT", teil:"H1",
    a:"der", w:"Stückpreis", p:"-e",
    en:"unit price", zh:"單價",
    k:"der Stückpreis liegt bei...; gegen einen Stückpreis liefern",
    kz:"單價為……；以某單價交貨",
    ex:"Gegen einen Stückpreis liefern wir auch innerhalb von 24 Stunden.",
    ez:"以單價計費的話，我們也能在24小時內送達。" },

  { mt:"PT", teil:"H1",
    a:"der", w:"Aufpreis", p:"-e",
    en:"surcharge / extra cost", zh:"加價、附加費",
    k:"gegen einen Aufpreis liefern; ein Aufpreis berechnen",
    kz:"加價提供；收取附加費",
    ex:"Gegen einen Aufpreis liefern wir auch innerhalb von 24 Stunden.",
    ez:"只要加價，我們也能在24小時內送達。" },

  { mt:"PT", teil:"H1",
    a:"", w:"voraussichtlich", p:"",
    en:"expectedly / probably", zh:"預計地",
    k:"die Lieferung erfolgt voraussichtlich; voraussichtlich fertig sein",
    kz:"預計交貨日期；預計完成",
    ex:"Die Lieferung erfolgt voraussichtlich am Donnerstag, den 15. Juni.",
    ez:"預計將於6月15日（星期四）交貨。" },

  { mt:"PT", teil:"H1",
    a:"", w:"abstimmen (sich)", p:"",
    en:"to vote / agree on (together)", zh:"商議決定、投票表決",
    k:"sich vor dem Termin abstimmen; etwas miteinander abstimmen",
    kz:"在約定前先商議決定；彼此商議某事",
    ex:"Ich weiß nicht, ob wir uns vor dem Termin mit dem Kunden noch einmal abstimmen könnten.",
    ez:"我不知道我們是否能在跟客戶約定前再商議一次。" },

  { mt:"PT", teil:"H1",
    a:"die", w:"Konkurrenz", p:"",
    en:"competition", zh:"競爭、競爭對手",
    k:"die Konkurrenz beobachten; was die Konkurrenz anbietet",
    kz:"觀察競爭對手；競爭對手提供的東西",
    ex:"Es kommt darauf an, was die Konkurrenz anbietet.",
    ez:"這取決於競爭對手提供了什麼。" },

  // ── S.50 — Hören Teil 1 ──────────────────────────────────────────
  { mt:"PT", teil:"H1",
    a:"", w:"gestalten (eine Internetseite)", p:"",
    en:"to design (a website)", zh:"設計（網頁）",
    k:"die Internetseite gestalten; etwas neu gestalten",
    kz:"設計網頁；重新設計某物",
    ex:"Herr Pütz gestaltet die Internetseite.",
    ez:"Pütz 先生負責設計網頁。" },

  // ── S.51 — Hören Teil 1 ──────────────────────────────────────────
  { mt:"PT", teil:"H1",
    a:"die", w:"Arbeitsanweisung", p:"-en",
    en:"work instruction", zh:"工作指示",
    k:"eine Arbeitsanweisung gehört zu jeder Aufgabe; eine Arbeitsanweisung befolgen",
    kz:"每項任務都有一個工作指示；遵循工作指示",
    ex:"Zu jeder Prüfungsaufgabe gehört eine Arbeitsanweisung, die immer gleich ist.",
    ez:"每項考題都有一個固定不變的工作指示。" },

  { mt:"PT", teil:"H1",
    a:"die", w:"Einarbeitung", p:"",
    en:"induction / training period", zh:"職前訓練、新人培訓期",
    k:"der Ablauf der Einarbeitung; während der Einarbeitung",
    kz:"職前訓練的流程；在職前訓練期間",
    ex:"Die Teamleiterin gibt einen Überblick über den Ablauf der Einarbeitung.",
    ez:"團隊負責人概述了職前訓練的流程。" },

  { mt:"PT", teil:"H1",
    a:"", w:"sich zusammensetzen (mit)", p:"",
    en:"to sit down together (with)", zh:"一起坐下討論、會面",
    k:"sich mit jemandem zusammensetzen; sich zusammensetzen, um etwas zu klären",
    kz:"與某人一起坐下討論；坐下來討論以澄清某事",
    ex:"Soll Herr Tamura sich mit Frau Frey zusammensetzen.",
    ez:"Tamura 先生應該與 Frey 女士一起坐下來討論。" },

  // ── S.54 — Hören Teil 2 ────────────────────────────────────────
  { mt:"PT", teil:"H2",
    a:"", w:"rechtfertigen (sich)", p:"",
    en:"to justify (oneself)", zh:"為自己辯護、自我辯解",
    k:"sich rechtfertigen müssen; etwas rechtfertigen",
    kz:"必須為自己辯護；為某事辯護",
    ex:"Etwas Unangenehmes akzeptieren; sich rechtfertigen.",
    ez:"接受不愉快的事情；為自己辯護。" },

  // ── S.55 — Hören Teil 2 ────────────────────────────────────────
  { mt:"PT", teil:"H2",
    a:"der/die", w:"Angestellte", p:"-n",
    en:"employee", zh:"員工",
    k:"sich positiv auf die Gesundheit der Angestellten auswirken",
    kz:"對員工的健康產生正面影響",
    ex:"Ich denke, dass sich das auch positiv auf die Gesundheit der Angestellten auswirkt.",
    ez:"我認為這也對員工的健康有正面影響。" },

  { mt:"PT", teil:"H2",
    a:"die", w:"Ablenkung", p:"",
    en:"distraction", zh:"干擾、分心",
    k:"eine viel zu große Ablenkung darstellen; eine Ablenkung sein",
    kz:"造成過大的干擾；是一種干擾",
    ex:"Ein Hund stellt eine viel zu große Ablenkung dar.",
    ez:"狗會造成過大的干擾。" },

  { mt:"PT", teil:"H2",
    a:"", w:"grundsätzlich", p:"",
    en:"fundamentally / basically", zh:"基本上、原則上",
    k:"grundsätzlich kein Problem damit haben; grundsätzlich gilt...",
    kz:"基本上沒有任何問題；原則上適用……",
    ex:"Ich mag Tiere und habe grundsätzlich überhaupt kein Problem damit.",
    ez:"我喜歡動物，基本上對此完全沒有問題。" },

  { mt:"PT", teil:"H2",
    a:"", w:"erzogen (gut erzogen sein)", p:"",
    en:"well-behaved / well brought-up", zh:"教養良好的",
    k:"gut erzogen sein; ein erzogener Hund",
    kz:"教養良好；受過訓練的狗",
    ex:"Er muss gut erzogen sein und darf nicht ständig bellen.",
    ez:"牠必須教養良好，而且不能一直亂叫。" },

  { mt:"PT", teil:"H2",
    a:"", w:"bellen", p:"",
    en:"to bark", zh:"吠叫",
    k:"ständig bellen; ein Hund bellt",
    kz:"一直吠叫；狗在叫",
    ex:"Er darf nicht ständig bellen.",
    ez:"牠不能一直亂叫。" },

  { mt:"PT", teil:"H2",
    a:"das", w:"Vorfeld (im Vorfeld)", p:"",
    en:"in advance", zh:"事前",
    k:"im Vorfeld abklären; etwas im Vorfeld klären",
    kz:"事前先澄清；事先把某事問清楚",
    ex:"Das muss man im Vorfeld unbedingt abklären.",
    ez:"這件事一定要事先弄清楚。" },

  { mt:"PT", teil:"H2",
    a:"", w:"abklären", p:"",
    en:"to clarify / check beforehand", zh:"事先澄清、確認",
    k:"im Vorfeld abklären; eine Allergie abklären",
    kz:"事前先澄清；確認是否過敏",
    ex:"Das muss man im Vorfeld unbedingt abklären.",
    ez:"這件事一定要事先確認清楚。" },

  { mt:"PT", teil:"H2",
    a:"", w:"einholen (Erlaubnis)", p:"",
    en:"to obtain (permission)", zh:"取得（許可）",
    k:"die Erlaubnis des Chefs einholen; eine Genehmigung einholen",
    kz:"取得老闆的許可；取得核准",
    ex:"Und die Erlaubnis des Chefs sollte man natürlich auch einholen.",
    ez:"當然也應該要先取得老闆的許可。" },

  // ── S.57 — Hören Teil 2 ────────────────────────────────────────
  { mt:"PT", teil:"H2",
    a:"", w:"entstehen", p:"",
    en:"to arise / develop", zh:"產生、形成",
    k:"gesundheitliche Probleme entstehen; ein Problem entsteht",
    kz:"產生健康問題；問題產生",
    ex:"Durch die Arbeit im Homeoffice können gesundheitliche Probleme entstehen.",
    ez:"居家辦公可能會導致健康問題的產生。" },

  { mt:"PT", teil:"H2",
    a:"", w:"pendeln", p:"",
    en:"to commute", zh:"通勤",
    k:"jeden Tag zur Arbeit pendeln; lange pendeln müssen",
    kz:"每天通勤上班；必須長時間通勤",
    ex:"Wer nicht jeden Tag zur Arbeit pendeln muss, spart viel Geld.",
    ez:"不需要每天通勤上班的人能省下很多錢。" },

  { mt:"PT", teil:"H2",
    a:"", w:"abgelenkt (werden)", p:"",
    en:"to be distracted", zh:"被分心、受到干擾",
    k:"von Kollegen abgelenkt werden; sich leicht abgelenkt fühlen",
    kz:"被同事打擾分心；容易感到分心",
    ex:"Zu Hause arbeitet man konzentrierter, weil man nicht von Kollegen abgelenkt wird.",
    ez:"在家工作會更專注，因為不會被同事打擾分心。" },

  // ── S.66 — Hören Teil 4（使用者手動指定，無螢光筆標記）──────────
  { mt:"PT", teil:"H4",
    a:"", w:"abnehmen (das Telefon)", p:"",
    en:"to pick up / answer (the phone)", zh:"接（電話）",
    k:"das Telefon abnehmen; den Hörer abnehmen",
    kz:"接電話；拿起話筒",
    ex:"Er nimmt aber nicht ab.",
    ez:"但他沒有接電話。" },

  { mt:"PT", teil:"H4",
    a:"die", w:"Arbeitsanweisung", p:"-en",
    en:"work instruction", zh:"工作指示",
    k:"eine Arbeitsanweisung geben; eine Arbeitsanweisung befolgen",
    kz:"給予工作指示；遵循工作指示",
    ex:"Die Sprecherin gibt eine Arbeitsanweisung.",
    ez:"說話者給了一個工作指示。" },

  { mt:"PT", teil:"H4",
    a:"", w:"ankündigen", p:"",
    en:"to announce", zh:"宣布、預告",
    k:"eine Ankündigung machen; etwas ankündigen",
    kz:"發出宣布；宣布某事",
    ex:"In dieser Nachricht geht es um eine Ankündigung.",
    ez:"這則訊息是在做一個宣布。" },

  { mt:"PT", teil:"H4",
    a:"", w:"einen Termin absprechen", p:"",
    en:"to arrange / coordinate an appointment", zh:"商議、約定一個時間",
    k:"einen Termin absprechen; sich über einen Termin absprechen",
    kz:"約定一個時間；就時間進行商議",
    ex:"In dieser Nachricht geht es um eine Terminabsprache.",
    ez:"這則訊息是在進行時間的約定。" },

  // ── S.61 — Hören Teil 3 ────────────────────────────────────────
  { mt:"PT", teil:"H3",
    a:"", w:"übergehen (zu etwas)", p:"",
    en:"to move on (to something)", zh:"轉到、進入（下一部分）",
    k:"zu einem anderen Punkt übergehen; als Nächstes übergehen",
    kz:"轉到另一個重點；接下來轉到……",
    ex:"Als Nächstes möchte ich zu ... übergehen.",
    ez:"接下來我想轉到……這個部分。" },

  // ── S.63 — Hören Teil 3 ────────────────────────────────────────
  { mt:"PT", teil:"H3",
    a:"", w:"beauftragt (der beauftragte Innenarchitekt)", p:"",
    en:"commissioned / appointed (interior designer)", zh:"受委託的（室內設計師）",
    k:"der beauftragte Innenarchitekt; jemanden beauftragen",
    kz:"受委託的室內設計師；委託某人",
    ex:"Die Präsentation hält der beauftragte Innenarchitekt.",
    ez:"報告由受委託的室內設計師進行。" },

  // ── S.67 — Hören Teil 4 (verwirren) ─────────────────────────────
  { mt:"PT", teil:"H4",
    a:"", w:"verwirren", p:"",
    en:"to confuse", zh:"使困惑、搞混",
    k:"sich nicht verwirren lassen; jemanden verwirren",
    kz:"不要被搞混；讓某人感到困惑",
    ex:"Lassen Sie sich nicht verwirren. Es ist immer nur eine Option richtig.",
    ez:"別讓自己被搞混了，永遠只有一個選項是正確的。" },

  // ── S.70 — Hören und Schreiben (Kundenkontakte) ─────────────────
  { mt:"PT", teil:"HS",
    a:"", w:"durchstellen", p:"",
    en:"to transfer / put through (a call)", zh:"轉接（電話）",
    k:"einen Anruf durchstellen; sich durchstellen lassen",
    kz:"轉接電話；請人轉接電話",
    ex:"Sie können sich gern durchstellen lassen.",
    ez:"您可以請人幫您轉接電話。" },

  { mt:"PT", teil:"HS",
    a:"", w:"verfallen (ein Angebot verfällt)", p:"",
    en:"to expire / lapse (an offer)", zh:"失效、到期（優惠）",
    k:"der Mengenrabatt verfällt; ein Angebot verfällt",
    kz:"批量折扣失效；優惠到期失效",
    ex:"Sie müssten mir diese Woche noch das Angebot bestätigen, sonst verfällt der Mengenrabatt.",
    ez:"您必須在這週內確認這份報價，否則批量折扣將會失效。" },

  { mt:"PT", teil:"HS",
    a:"die", w:"Bestellung", p:"-en",
    en:"order", zh:"訂單",
    k:"eine Bestellung aufgeben; eine Bestellung entgegennehmen",
    kz:"下訂單；接受訂單",
    ex:"Eine Bestellung aufgeben oder entgegennehmen.",
    ez:"下訂單或接受訂單。" },

  // ── S.78 — (跨入 Sprachbausteine，但屬於同一批次範圍) ─────────────
  { mt:"PT", teil:"SB1",
    a:"", w:"aufgreifen", p:"",
    en:"to take up / pick up (a topic)", zh:"重新提起、重新討論（話題）",
    k:"ein Thema wieder aufgreifen; eine Idee aufgreifen",
    kz:"重新提起某個話題；採納一個想法",
    ex:"Ich wollte dieses Thema mal wieder aufgreifen.",
    ez:"我想重新提起這個話題討論一下。" },

];

// 此檔案使用獨立分類標籤 mt:"PT" (telc Preparation Training)
if (typeof window !== 'undefined') {
  window.MODELLTEST_ALL = window.MODELLTEST_ALL || [];
  window.MODELLTEST_ALL.push(...PREPARATIONTRAINING_HOEREN_DATA);
}
