// data_PreparationTraining_Schreiben.js
// 來源: telc Prüfungstraining DTB B2 — PDF頁碼79-92 (書本頁碼77-90)
// 標籤: telc Preparation Training
// 注意：真正的「13 Schreiben」章節（書本84-90頁）完全沒有黃色螢光筆標記。
// 本檔案收錄的單字皆來自前段 Sprachbausteine Teil 1/2（書本77-83頁）。
// 重複字依使用者指示保留（不去重），代表該單字曾多次被標記，尚未掌握。
// 格式: { mt, teil, a, w, p, en, zh, k, kz, ex, ez }

const PREPARATIONTRAINING_SCHREIBEN_DATA = [

  // ── S.77 — Sprachbausteine Teil 1（重複） ────────────────────────
  { mt:"PT", teil:"SB1",
    a:"", w:"absolviert", p:"",
    en:"completed (past participle of absolvieren)", zh:"已完成的（absolvieren的過去分詞）",
    k:"erfolgreich absolviert; eine Ausbildung absolviert haben",
    kz:"成功完成；已完成一項培訓",
    ex:"Sie haben eine Ausbildung im Bereich Informatik oder Elektrotechnik erfolgreich absolviert.",
    ez:"您已成功完成資訊科技或電機工程領域的培訓。" },

  // ── S.78 — Sprachbausteine Teil 1（重複） ────────────────────────
  { mt:"PT", teil:"SB1",
    a:"", w:"entnehmen", p:"",
    en:"to gather / infer (from a document)", zh:"從（文件）中得知、看出",
    k:"den Bewerbungsunterlagen entnehmen; einem Text etwas entnehmen",
    kz:"從求職資料中得知；從文章中得知某事",
    ex:"Meinen Bewerbungsunterlagen können Sie entnehmen, dass ich Ihr Unternehmen gut ergänze.",
    ez:"您可以從我的求職資料中看出，我很適合貴公司。" },

  { mt:"PT", teil:"SB1",
    a:"", w:"aufgreifen", p:"",
    en:"to take up / pick up (a topic)", zh:"重新提起、重新討論（話題）",
    k:"ein Thema wieder aufgreifen; eine Idee aufgreifen",
    kz:"重新提起某個話題；採納一個想法",
    ex:"Ich wollte dieses Thema mal wieder aufgreifen.",
    ez:"我想重新提起這個話題討論一下。" },

  // ── S.80 — Sprachbausteine Teil 2 (Anfragen und Angebote) ────────
  { mt:"PT", teil:"SB2",
    a:"", w:"erteilt", p:"",
    en:"given / placed (an order)", zh:"已給予的、已下達的（訂單）",
    k:"der Auftrag, den wir erteilt haben; einen Auftrag erteilen",
    kz:"我們已下達的訂單；下訂單",
    ex:"Der Auftrag, den wir erteilt haben, muss leider storniert werden.",
    ez:"我們已下達的訂單，很遺憾必須取消。" },

  { mt:"PT", teil:"SB2",
    a:"", w:"storniert", p:"",
    en:"cancelled", zh:"已取消的",
    k:"muss storniert werden; eine Bestellung stornieren",
    kz:"必須被取消；取消訂單",
    ex:"Der Auftrag, den wir erteilt haben, muss leider storniert werden.",
    ez:"我們已下達的訂單，很遺憾必須取消。" },

  // ── S.82 — Sprachbausteine Teil 2 (Anfrage Smartphonehüllen) ────
  { mt:"PT", teil:"SB2",
    a:"", w:"auf Interesse stoßen", p:"",
    en:"to meet with interest", zh:"引起興趣、受到關注",
    k:"auf großes Interesse stoßen; bei jemandem auf Interesse stoßen",
    kz:"引起很大的興趣；引起某人的興趣",
    ex:"Ihre Kollektion hat auf Interesse gestoßen.",
    ez:"您的系列商品引起了關注。" },

  { mt:"PT", teil:"SB2",
    a:"", w:"erwecken (Interesse)", p:"",
    en:"to arouse / awaken (interest)", zh:"喚起、激起（興趣）",
    k:"Interesse erwecken; jemandes Aufmerksamkeit erwecken",
    kz:"喚起興趣；引起某人的注意",
    ex:"Ihre Kollektion an Smartphonehüllen hat unser Interesse erweckt.",
    ez:"您的手機殼系列商品喚起了我們的興趣。" },

  { mt:"PT", teil:"SB2",
    a:"die", w:"Zusendung", p:"-en",
    en:"sending / dispatch", zh:"寄送、發送",
    k:"eine Zusendung von Probeexemplaren; um Zusendung bitten",
    kz:"寄送樣品；請求寄送",
    ex:"Eine Zusendung von Probeexemplaren wäre uns sehr willkommen.",
    ez:"我們非常歡迎您寄送樣品給我們。" },

];

// 此檔案使用獨立分類標籤 mt:"PT" (telc Preparation Training)
if (typeof window !== 'undefined') {
  window.MODELLTEST_ALL = window.MODELLTEST_ALL || [];
  window.MODELLTEST_ALL.push(...PREPARATIONTRAINING_SCHREIBEN_DATA);
}
