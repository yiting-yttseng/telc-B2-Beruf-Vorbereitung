// ══════════════════════════════════════════════════════════
// SchreibenI_Beschwerde_beantworten_data.js
// 每個 entry: { id, sec, left_de, left_zh, ex: [{de, zh}] }
// ══════════════════════════════════════════════════════════

const REDEMITTEL = [

// ── 1. 感謝來信 / 引言 ──────────────────────────────────
{id:"r1-1a", sec:"1. 感謝來信 / 引言 — Bezugnahme & Einleitung",
  left_de:"Ich schreibe Ihnen in Bezug auf … [+ Akk.]",
  left_zh:"我就……（Akkusativ）寫信給您。",
  ex:[
    {de:"Ich schreibe Ihnen in Bezug auf Ihre Beschwerde über die fehlerhafte Lieferung vom 22. April.",
     zh:"我就您4月22日關於送錯貨品的投訴寫信給您。"},
  ]
},
{id:"r1-1b", sec:"1. 感謝來信 / 引言 — Bezugnahme & Einleitung",
  left_de:"Ich schreibe Ihnen Bezug nehmend auf … [+ Akk.]",
  left_zh:"我就……（Akkusativ）寫信給您。（Bezug nehmend 舊式寫法；bezugnehmend 現代寫法）",
  ex:[
    {de:"Ich schreibe Ihnen Bezug nehmend auf Ihre Reklamation vom 10. März bezüglich der Fenstereinbauarbeiten.",
     zh:"我就您3月10日關於窗戶安裝工程的投訴寫信給您。"},
  ]
},
{id:"r1-1c", sec:"1. 感謝來信 / 引言 — Bezugnahme & Einleitung",
  left_de:"Ich schreibe Ihnen bezüglich … [+ Gen.]",
  left_zh:"我就……（Genitiv）寫信給您。",
  ex:[
    {de:"Ich schreibe Ihnen bezüglich Ihrer Beschwerde über die verspätete Lieferung der Lastenfahrräder.",
     zh:"我就您關於貨運腳踏車延遲交貨的投訴寫信給您。"},
  ]
},
{id:"r1-2", sec:"1. 感謝來信 / 引言 — Bezugnahme & Einleitung",
  left_de:"bezugnehmend auf Ihre Beschwerde / Reklamation / Mail vom … bedanken wir uns für Ihre Mitteilung.",
  left_zh:"就您……日的投訴/來信，感謝您告知我們。（句首小寫，因為 bezugnehmend 作為分詞片語開頭）",
  ex:[
    {de:"bezugnehmend auf Ihre Beschwerde vom heutigen Tag bedanken wir uns für Ihre Mitteilung.",
     zh:"就您今日的投訴，感謝您告知我們。"},
    {de:"bezugnehmend auf Ihre Beschwerde vom 22. April möchten wir uns zunächst bei Ihnen entschuldigen.",
     zh:"就您4月22日的投訴，我們首先要向您道歉。"},
  ]
},
{id:"r1-3", sec:"1. 感謝來信 / 引言 — Bezugnahme & Einleitung",
  left_de:"Vielen Dank für Ihre E-Mail und die Mitteilung über die aufgetretenen Probleme / die genannten Mängel.",
  left_zh:"非常感謝您的來信，以及告知我們所發生的問題/上述瑕疵。",
  ex:[]
},

// ── 2. 道歉 ─────────────────────────────────────────────
{id:"r2-1", sec:"2. 道歉 — Entschuldigung",
  left_de:"Wir entschuldigen uns für …",
  left_zh:"我們為……道歉。（後接名詞短語）",
  ex:[
    {de:"Wir entschuldigen uns für den mangelhaften Service.",
     zh:"我們為服務不周道歉。"},
    {de:"Wir entschuldigen uns für die nicht richtig ausgeführten Einbauarbeiten.",
     zh:"我們為安裝工程未正確執行道歉。"},
    {de:"Wir entschuldigen uns für die verzögerte Lieferung.",
     zh:"我們為延遲交貨道歉。"},
    {de:"Wir entschuldigen uns für die fehlerhaften Produkte.",
     zh:"我們為有問題的產品道歉。"},
    {de:"Wir entschuldigen uns für die Unannehmlichkeiten.",
     zh:"我們為給您帶來的不便道歉。"},
  ]
},
{id:"r2-2", sec:"2. 道歉 — Entschuldigung",
  left_de:"Es tut uns leid, dass …",
  left_zh:"很抱歉……（後接 dass 子句）",
  ex:[
    {de:"Es tut uns leid, dass Sie Unannehmlichkeiten hatten.",
     zh:"很抱歉給您帶來了不便。"},
    {de:"Es tut uns leid, dass das Produkt nicht Ihren Erwartungen entspricht.",
     zh:"很抱歉產品未符合您的期望。"},
  ]
},
{id:"r2-3", sec:"2. 道歉 — Entschuldigung",
  left_de:"Wir bedauern sehr, dass es zu Problemen mit … gekommen ist.",
  left_zh:"我們對……發生問題深感遺憾。",
  ex:[
    {de:"Wir bedauern sehr, dass es zu Problemen mit Ihrer Lieferung gekommen ist.",
     zh:"我們對您的交貨發生問題深感遺憾。"},
  ]
},
{id:"r2-4", sec:"2. 道歉 — Entschuldigung",
  left_de:"Zu unserem Bedauern müssen wir bestätigen, dass … ein Fehler unterlaufen ist.",
  left_zh:"很遺憾，我們必須確認確實發生了失誤。",
  ex:[
    {de:"Zu unserem Bedauern müssen wir bestätigen, dass bei der Lieferung ein Fehler unterlaufen ist.",
     zh:"很遺憾，我們必須確認這次交貨確實發生了失誤。"},
  ]
},

// ── 3. 解釋原因 ──────────────────────────────────────────
{id:"r3-1", sec:"3. 解釋原因 — Erklärung der Ursache",
  left_de:"Grund für … war(en) …",
  left_zh:"……的原因是……（Grund 後接名詞，war/waren 視單複數）",
  ex:[
    {de:"Grund für die Mängel waren Fehler der Herstellerfirma.",
     zh:"瑕疵的原因是製造商的失誤。"},
    {de:"Grund für die Lieferverzögerung waren viele Krankheitsfälle beim Servicepersonal.",
     zh:"交貨延遲的原因是服務人員大量請病假。"},
    {de:"Grund für die Probleme war ein technischer Defekt in der Produktionsanlage.",
     zh:"問題的原因是生產設備出現技術故障。"},
  ]
},
{id:"r3-2", sec:"3. 解釋原因 — Erklärung der Ursache",
  left_de:"Der Grund dafür war ein Fehler in unserer [Rechnungsabteilung / Logistik / Produktion], bei dem …",
  left_zh:"原因是我們的[帳務部門/物流/生產]出現失誤，導致……",
  ex:[
    {de:"Der Grund dafür war ein interner Fehler in unserer Rechnungsabteilung, bei dem der Skontoabzug nicht korrekt verbucht wurde.",
     zh:"原因是我們帳務部門的內部失誤，現金折扣未被正確入帳。"},
    {de:"Der Grund dafür war ein Fehler in unserer Logistik, bei dem die falsche Ware für Ihre Bestellung kommissioniert wurde.",
     zh:"原因是我們物流部門的失誤，導致錯誤的商品被揀貨。"},
    {de:"Der Grund dafür war ein Fehler in unserer Produktion, bei dem die Qualitätskontrolle nicht ordnungsgemäß durchgeführt wurde.",
     zh:"原因是我們生產部門的失誤，品質管控未按規程執行。"},
  ]
},
{id:"r3-3", sec:"3. 解釋原因 — Erklärung der Ursache",
  left_de:"Dies war leider ein Versehen unsererseits.",
  left_zh:"這不幸是我方的疏失。",
  ex:[
    {de:"Dies war leider ein Versehen in unserem Lager, bei dem die Modelle vertauscht wurden.",
     zh:"這不幸是我們倉庫的疏失，型號被調換了。"},
  ]
},

// ── 4. 改善措施 ──────────────────────────────────────────
{id:"r4-1", sec:"4. 改善措施 — Interne Maßnahmen",
  left_de:"Wir werden den Vorgang intern prüfen / weiterleiten.",
  left_zh:"我們將在內部核查/轉交此事。（Vorgang = 流程/案件；也可用 die Angelegenheit）",
  ex:[
    {de:"Wir werden den Vorgang überprüfen.",
     zh:"我們將核查這件事。"},
    {de:"Wir werden den Vorgang weiterleiten.",
     zh:"我們將轉交此案件。"},
    {de:"Wir werden das Feedback intern weiterleiten.",
     zh:"我們將在內部轉達您的反饋。"},
  ]
},
{id:"r4-2", sec:"4. 改善措施 — Interne Maßnahmen",
  left_de:"Um solche Fehler zu vermeiden, haben wir unsere internen Prozesse überarbeitet.",
  left_zh:"為避免此類失誤，我們已重新審查了內部流程。",
  ex:[]
},
{id:"r4-3", sec:"4. 改善措施 — Interne Maßnahmen",
  left_de:"Wir können Ihnen versichern, dass …",
  left_zh:"我們可以向您保證……（後接 dass 子句）",
  ex:[
    {de:"Wir können Ihnen versichern, dass solche Fehler in Zukunft nicht mehr passieren werden.",
     zh:"我們可以向您保證，此類失誤將來不會再發生。"},
    {de:"Wir können Ihnen versichern, dass wir in Zukunft bei Verzögerungen sofort Kontakt aufnehmen werden, damit Sie stets informiert sind.",
     zh:"我們向您保證，今後遇到延誤會立即聯繫您，讓您隨時掌握情況。"},
  ]
},
{id:"r4-4", sec:"4. 改善措施 — Interne Maßnahmen",
  left_de:"Wir haben inzwischen die Herstellerfirma gewechselt, um in Zukunft eine einwandfreie Qualität zu gewährleisten.",
  left_zh:"我們已更換了製造商，以確保今後品質無虞。",
  ex:[]
},
{id:"r4-5", sec:"4. 改善措施 — Interne Maßnahmen",
  left_de:"Wir werden Ihnen sofort einen Kollegen / eine Kollegin schicken, der/die die Mängel beheben wird.",
  left_zh:"我們將立即派一位同事前往處理這些瑕疵。",
  ex:[
    {de:"Wir werden Ihnen sofort einen erfahrenen Kollegen schicken, der die Mängel an den Fenstern beheben wird.",
     zh:"我們將立即派一位有經驗的同事前往處理窗戶瑕疵。"},
  ]
},
{id:"r4-6", sec:"4. 改善措施 — Interne Maßnahmen",
  left_de:"Wir werden die Angelegenheit sofort in Ordnung bringen.",
  left_zh:"我們將立即處理此事。",
  ex:[
    {de:"Wir haben die Angelegenheit sofort korrigiert und Ihr Konto ausgeglichen.",
     zh:"我們已立即更正此事並結清您的帳款。"},
  ]
},
{id:"r4-7", sec:"4. 改善措施 — Interne Maßnahmen",
  left_de:"… indem wir … / Durch … stellen wir sicher, dass …",
  left_zh:"透過……（indem 接子句說明手段；durch 接名詞）",
  ex:[
    {de:"Wir stellen die Qualität sicher, indem wir jeden Artikel vor dem Versand sorgfältig prüfen.",
     zh:"我們確保品質，方法是在發貨前仔細檢查每件商品。"},
    {de:"Durch regelmäßige Schulungen stellen wir sicher, dass solche Fehler nicht mehr vorkommen.",
     zh:"透過定期培訓，我們確保此類失誤不再發生。"},
  ]
},

// ── 5. 解決方案與補償 ────────────────────────────────────
{id:"r5-1", sec:"5. 解決方案與補償 — Lösung und Entschädigung",
  left_de:"Als [Entschädigung / Entgegenkommen / Ausgleich für die Unannehmlichkeiten] bieten wir Ihnen [einen Rabatt / einen Ersatz / eine Gutschrift] an.",
  left_zh:"作為[補償/對不便的回應/彌補]，我們為您提供[折扣/替換/貸記]。（三個名詞意思相近，可替換）",
  ex:[
    {de:"Als Entschädigung bieten wir Ihnen einen Rabatt für Ihre nächste Bestellung an.",
     zh:"作為補償，我們為您下次訂購提供折扣。"},
    {de:"Als Entgegenkommen für die Unannehmlichkeiten bieten wir Ihnen bei Ihrer nächsten Bestellung 10% Rabatt an.",
     zh:"作為對不便的補償，我們為您下次訂購提供九折優惠。"},
    {de:"Als Ausgleich für die Unannehmlichkeiten bieten wir Ihnen eine kostenlose Lieferung bei Ihrer nächsten Bestellung an.",
     zh:"作為彌補，我們為您下次訂購提供免費配送。"},
  ]
},
{id:"r5-2", sec:"5. 解決方案與補償 — Lösung und Entschädigung",
  left_de:"Selbstverständlich können Sie den Artikel kostenlos zurücksenden.",
  left_zh:"當然，您可以免費退回商品。",
  ex:[]
},
{id:"r5-4", sec:"5. 解決方案與補償 — Lösung und Entschädigung",
  left_de:"Die fehlerhafte Lieferung / Das falsche Produkt werden wir schnellstmöglich abholen und durch die richtige Ware ersetzen.",
  left_zh:"我們將盡快取回有問題的貨品，並以正確商品替換。",
  ex:[
    {de:"Wir werden die falschen Waschbecken schnellstmöglich abholen und Ihnen sofort die richtigen Modelle liefern.",
     zh:"我們將盡快取回送錯的洗臉盆，並立即補送正確型號。"},
  ]
},
{id:"r5-5", sec:"5. 解決方案與補償 — Lösung und Entschädigung",
  left_de:"Wir hoffen, Sie sind mit dieser Lösung einverstanden.",
  left_zh:"希望您對這個解決方案感到滿意。",
  ex:[]
},

// ── 6. 結尾 ─────────────────────────────────────────────
{id:"r6-1", sec:"6. 結尾 — Abschluss",
  left_de:"Bei (Rück)fragen … / Haben Sie noch Fragen?",
  left_zh:"如有（進一步）問題……",
  ex:[
    {de:"Bei Rückfragen stehen wir Ihnen selbstverständlich zur Verfügung.",
     zh:"如有疑問，我們當然隨時為您服務。"},
    {de:"Haben Sie noch Fragen? Dann können Sie mich gerne unter … anrufen.",
     zh:"還有問題嗎？歡迎致電……聯繫我。"},
    {de:"Bei weiteren Fragen helfen wir Ihnen gern weiter.",
     zh:"如有其他問題，我們很樂意為您提供協助。"},
  ]
},
{id:"r6-2", sec:"6. 結尾 — Abschluss",
  left_de:"Wir danken Ihnen für Ihr Verständnis und hoffen auf eine weiterhin gute Zusammenarbeit.",
  left_zh:"感謝您的理解，希望雙方繼續保持良好合作。",
  ex:[]
},
{id:"r6-3", sec:"6. 結尾 — Abschluss",
  left_de:"Wir hoffen, Sie sind mit dieser Lösung einverstanden, und verbleiben mit freundlichen Grüßen.",
  left_zh:"希望您接受這個解決方案，此致敬禮。（正式書信結語）",
  ex:[]
},

,

// ── 📝 General 範例信 ──────────────────────────────────────
{id:"general-example", sec:"📝 General 範例信 — Musterbrief",
  left_de:"► 一封通用示範回信（可套用任何情況）",
  left_zh:"以下為完整示範，點各行可朗讀",
  ex:[
    {de:"Ich schreibe Ihnen in Bezug auf Ihre Beschwerde über die fehlerhafte Lieferung / die Fenstereinbauarbeiten.",
     zh:"【引言】我就您關於送錯貨品/窗戶安裝工程的投訴寫信給您。"},
    {de:"Wir danken Ihnen für die Mitteilung über die aufgetretenen Probleme / die genannten Mängel.",
     zh:"【感謝】感謝您告知我們所發生的問題/上述瑕疵。"},
    {de:"Wir entschuldigen uns für die Unannehmlichkeiten.",
     zh:"【道歉】我們為給您帶來的不便道歉。"},
    {de:"Grund für die Probleme war ein technischer Defekt in der Produktionsanlage.",
     zh:"【原因①】問題的原因是生產設備出現技術故障。"},
    {de:"Der Grund dafür war ein Fehler in unserer Produktion, bei dem die Qualitätskontrolle nicht ordnungsgemäß durchgeführt wurde.",
     zh:"【原因②】原因是我們生產部門的失誤，品質管控未按規程執行。"},
    {de:"Um solche Fehler zu vermeiden, haben wir unsere internen Prozesse überarbeitet.",
     zh:"【改善①】為避免此類失誤，我們已重新審查了內部流程。"},
    {de:"Durch regelmäßige Schulungen stellen wir sicher, dass solche Fehler nicht mehr vorkommen.",
     zh:"【改善②】透過定期培訓，我們確保此類失誤不再發生。"},
    {de:"Als Entgegenkommen für die Unannehmlichkeiten bieten wir Ihnen bei Ihrer nächsten Bestellung 10% Rabatt an.",
     zh:"【補償】作為對不便的補償，我們為您下次訂購提供九折優惠。"},
    {de:"Bei Rückfragen stehen wir Ihnen selbstverständlich zur Verfügung.",
     zh:"【結尾①】如有疑問，我們當然隨時為您服務。"},
    {de:"Wir hoffen, Sie sind mit dieser Lösung einverstanden, und verbleiben mit freundlichen Grüßen.",
     zh:"【結尾②】希望您接受這個解決方案，此致敬禮。"},
  ]
},

]; // end REDEMITTEL


// ══════════════════════════════════════════════════════════
// 以下是各情況頁面的範例題目資料
// 每個 SITUATION entry: { id, title, zh, emails, task, mc, sample }
// ══════════════════════════════════════════════════════════

const SITUATIONS = [

{id:"mangelanzeige", title:"Mängelanzeige", zh:"瑕疵通知",
  examples:[
  {
    source:"Prüfungstraining S. 38",
    emails:[
      {role:"teamleitung",
       meta:{von:"Anja Klein (Teamleiterin)", an:"[dich]", betreff:"Beschwerde Fenstereinbau"},
       body:`Guten Morgen,\ngerade habe ich die unten stehende Reklamation bekommen. Ich bitte Sie, diese zu bearbeiten. Mit der Firma Hoger haben wir schon seit vielen Jahren gute Geschäftsverbindungen, bitte bearbeiten Sie ihre Beschwerde umgehend. Teilen Sie dem Kunden bitte mit, weshalb es zu diesen Mängeln kommen konnte, dass wir die Angelegenheit sofort in Ordnung bringen werden und was wir unternehmen werden, dass solche Fehler in Zukunft nicht mehr passieren werden.\n\nDanke\nAnja Klein\nTeamleiterin`},
      {role:"kunde",
       meta:{von:"Thomas Hoger, Hoger KG", an:"Anja Klein", betreff:"Beschwerde Fenstereinbau"},
       body:`Sehr geehrte Frau Klein,\nwir haben bei Ihnen neue Fenster bestellt, die auch am 1. Juni fristgemäß geliefert wurden. Es handelt sich um die vier Kunststofffenster 1450 × 1150 mm. Ein Mitarbeiter hat die Fenster dann eingesetzt, aber von Anfang an schließen einige Fenster nicht richtig, sodass es stark zieht. Bitte bringen Sie das in Ordnung.\n\nWir möchten Sie daran erinnern, dass es in der Vergangenheit bereits einmal Probleme mit Einbauarbeiten gab: Im September des letzten Jahres gab es Mängel an drei Schiebetüren, die dann von Ihnen allerdings erst nach mehrfacher Reklamation behoben wurden und zum Teil ausgetauscht werden mussten.\n\nWir bitten Sie, die aktuellen Mängel schnellstmöglich zu beheben, und hoffen, dass wir in Zukunft mit einem einwandfreien Service rechnen können.\n\nMit freundlichen Grüßen\nThomas Hoger\nHoger KG`}
    ],
    task:["Weshalb es zu diesen Mängeln kommen konnte","Dass Sie die Angelegenheit sofort in Ordnung bringen werden","Was Sie machen werden, damit solche Fehler in Zukunft nicht mehr passieren"],
    mc:[
      {q:"19. Thomas Hoger …", opts:["möchte gelieferte Fenster umtauschen.","reklamiert einen nicht vorhandenen Service.","fordert funktionsfähige Fenster."], correct:2},
      {q:"20. Die genannten Mängel …", opts:["sind nicht zum ersten Mal aufgetreten.","sollen rasch beseitigt werden.","sind auf Verzögerungen beim Service zurückzuführen."], correct:0},
    ],
    sample:`Sehr geehrter Herr Hoger,\n\nbezugnehmend auf Ihre Beschwerde vom heutigen Tag entschuldigen wir uns für die nicht richtig ausgeführten Einbauarbeiten. Grund für die Mängel waren Fehler eines neuen Mitarbeiters, der die Fenster eingebaut hat.\n\nWir werden Ihnen sofort einen erfahrenen Kollegen schicken, der die Mängel beheben wird. Weiter versichern wir Ihnen, dass wir unsere Qualitätskontrolle verbessert haben, sodass solche Fehler in Zukunft nicht mehr passieren werden.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 避免所有句子都以「Wir」開頭。善用 Bezugnehmend auf / Grund für … war … / Weiter versichern wir … 來變化句首。"
  },
  {
    source:"Aspekte Beruf B2 S. 133",
    emails:[
      {role:"teamleitung",
       meta:{von:"Tim Holzmann (Teamleiter)", an:"[dich]", betreff:"FW: Beschwerde: Mangelhafte Ware"},
       body:`Hallo,\nkönnten Sie sich bitte um die angehängte Mail kümmern? Frau Wenger von Bade-Traum hat das erste Mal unsere Badezimmer-Produkte bestellt und sich gleich mit diesem Problem gemeldet. Das ist natürlich nicht gut. Bitte schreiben Sie an Frau Wenger und erklären Sie ihr höflich, wie es zu den Problemen kommen konnte. Eine Wiedergutmachung können wir natürlich auch anbieten, um sie nicht als Kundin zu verlieren.\n\nDanke und beste Grüße\nTim Holzmann\nTeamleiter`},
      {role:"kunde",
       meta:{von:"Jutta Wenger, Bade-Traum", an:"Tim Holzmann", betreff:"Beschwerde: Mangelhafte Ware"},
       body:`Sehr geehrter Herr Holzmann,\n\nvor zwei Tagen kam Ihre Lieferung an: je zwei Waschbecken in drei Farben. Leider musste ich feststellen, dass es sich bei den Waschbecken um andere Modelle als bestellt handelt. Ich erwarte die Ware, die ich geordert habe. Da meine Kundinnen und Kunden sehr anspruchsvoll sind, sind die gelieferten Produkte leider nicht akzeptabel. Es gab sogar schon zwei Vormerkungen auf die Modelle, die ich erwartet hatte. Diese Modelle muss ich nun vorweisen können, sonst wirft das kein gutes Licht auf mich.\n\nHolen Sie die falschen Waschbecken schnellstmöglich ab und liefern Sie mir die richtigen. Bei Ihren Preisen setze ich einen besseren Service voraus. Ob ich weiter bei Ihnen bestellen werde, hängt auch von einem entsprechenden Angebot Ihrerseits ab.\n\nMit freundlichen Grüßen\nJutta Wenger`}
    ],
    task:["Wie es zu den Problemen kommen konnte","Welche Lösung angeboten werden kann","Eine Wiedergutmachung anbieten, um sie nicht als Kundin zu verlieren"],
    mc:[
      {q:"1. Frau Wenger beschwert sich, weil …", opts:["die Waschbecken keine gute Qualität haben.","ihre Kunden nicht zufrieden waren.","sie die falsche Ware bekommen hat."], correct:2},
      {q:"2. Frau Wenger …", opts:["erwartet Ersatz für die Waschbecken.","will nicht mehr bei der Firma bestellen.","will weniger für die Lieferung bezahlen."], correct:0},
    ],
    sample:`Sehr geehrte Frau Wenger,\n\nbezugnehmend auf Ihre Beschwerde entschuldigen wir uns für die falsch gelieferten Waschbecken. Dies war leider ein Versehen in unserem Lager, bei dem die Modelle vertauscht wurden.\n\nWir werden die falschen Waschbecken schnellstmöglich abholen und Ihnen sofort die richtigen Modelle liefern. Als Entgegenkommen für die Unannehmlichkeiten bieten wir Ihnen bei Ihrer nächsten Bestellung 10% Rabatt an.\n\nVielen Dank für Ihr Verständnis und wir hoffen auf eine weiterhin gute Zusammenarbeit.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 此情境下解決方案有兩個動作（取回+補送），可用 und 連接成一句，避免重複以 Wir 開頭。"
  }
  ]
},

{id:"service", title:"schlechter Service", zh:"服務不佳", examples:[]},
{id:"fehlende-rechnung", title:"fehlende Rechnung", zh:"帳單遺漏", examples:[]},

{id:"fehlerhafte-rechnung", title:"fehlerhafte Rechnung", zh:"帳單有誤",
  examples:[{
    source:"Prüfungstraining S. 138",
    emails:[
      {role:"teamleitung",
       meta:{von:"Ilona Hurteck (Teamleiterin)", an:"[dich]", betreff:"WG: Rechnung Druckerzubehör"},
       body:`Guten Morgen,\ngerade habe ich die untenstehende E-Mail bekommen, die ich Ihnen zur Bearbeitung weiterleite. Die Firma Hellmann ist einer unserer besten Kunden und es ist wichtig, dass wir ihre Beschwerde umgehend bearbeiten – also, wieso es immer wieder zu Problemen in unserer Rechnungsabteilung kommt – sofort in Ordnung bringen werden und dass Ähnliches in Zukunft nicht mehr passieren wird.\n\nIlona Hurteck\nTeamleiterin`},
      {role:"kunde",
       meta:{von:"Saskia de Groot, Hellmann Events GmbH", an:"Ilona Hurteck, PrinterStar", betreff:"Rechnung Druckerzubehör"},
       body:`Sehr geehrte Damen und Herren,\n\nam 4. März haben wir bei Ihnen drei Trommeln und sechs Austauschpatronen für unsere Laserdrucker (Bestellnummer XP 455662) bestellt. Die Rechnung haben wir sofort am 5. März überwiesen und uns dann entsprechend Ihrer Zahlungsbedingungen fristgemäß vom Rechnungsbetrag 2% Skonto abgezogen, sodass wir € 906,50 überwiesen haben.\n\nJetzt haben Sie uns bereits zum wiederholten Mal eine Mahnung über den von uns geltend gemachten Skontoabzug von € 18,50 zugeschickt. Nach Ihrer ersten Mahnung haben wir uns am 20. März mit Ihnen telefonisch in Verbindung gesetzt. Ein Mitarbeiter in Ihrer Rechnungsabteilung versicherte mir, dass die Angelegenheit sofort geklärt würde. Nachdem wir am 10. April erneut eine Mahnung erhalten haben, möchte ich Sie noch einmal auffordern, unser Konto auszugleichen.\n\nWir hoffen sehr, dass sich die Angelegenheit hiermit erledigt hat.\n\nMit freundlichen Grüßen\nSaskia de Groot\nHellmann Events GmbH`}
    ],
    task:["Wieso es immer wieder zu Problemen in der Rechnungsabteilung kommt","Die Angelegenheit sofort in Ordnung bringen","Dass Ähnliches in Zukunft nicht mehr passieren wird"],
    mc:[
      {q:"19. Frau de Groot …", opts:["möchte eine längere Zahlungsfrist.","beschwert sich über einen nicht berücksichtigten Preisnachlass.","reklamiert zu hohe Preise."], correct:1},
      {q:"20. PrinterStar …", opts:["soll schnellstmöglich Geld zurücküberweisen.","soll mit der Kundin telefonisch Kontakt aufnehmen.","soll seine Forderung stornieren."], correct:2},
    ],
    sample:`Sehr geehrte Frau de Groot,\n\nbezugnehmend auf Ihre E-Mail entschuldigen wir uns für die wiederholten Mahnungen. Grund dafür war ein interner Fehler in unserer Rechnungsabteilung, bei dem der Skontoabzug nicht korrekt verbucht wurde.\n\nWir haben die Angelegenheit sofort korrigiert und Ihr Konto ausgeglichen. Weiter versichern wir Ihnen, dass wir unsere internen Prozesse überarbeitet haben, damit Ähnliches in Zukunft nicht mehr passiert.\n\nVielen Dank für Ihr Verständnis und wir entschuldigen uns noch einmal für die Unannehmlichkeiten.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 此情境的原因是「帳務部門內部失誤」，用 bei dem … nicht korrekt verbucht wurde 描述具體失誤內容。"
  }]
},

{id:"fehlende-lieferung", title:"fehlende Lieferung", zh:"貨品遺漏/不足",
  examples:[{
    source:"Aspekte Beruf B2 S. 115",
    emails:[
      {role:"teamleitung",
       meta:{von:"Klaus Wegener (Teamleiter)", an:"[dich]", betreff:"FW: Beschwerde Probleme mit Lieferungen"},
       body:`Hallo,\ndie angehängte Mail bekam ich gestern. Bitte kümmern Sie sich darum und antworten Sie der Kundin höflich. Frau DeLuca ist schon sehr lange unsere Kundin und ich möchte Sie auf keinen Fall verlieren. Erklären Sie ihr, warum es zu den Problemen kommt und welche Lösung wir anbieten können.\n\nVielen Dank und beste Grüße\nKlaus Wegener\nTeamleiter`},
      {role:"kunde",
       meta:{von:"Carina DeLuca", an:"Klaus Wegener", betreff:"FW: Beschwerde Probleme mit Lieferungen"},
       body:`Sehr geehrter Herr Wegener,\n\nleider muss ich Ihnen mitteilen, dass es bei der letzten Lieferung wieder zu Fehlern gekommen ist. Wir sind schon lange bei Ihnen Kunde und waren immer sehr zufrieden, aber seit ein paar Monaten müssen wir immer wieder bei Ihnen nachhaken. Einmal haben Sie viel zu viel Druckerpapier geschickt, bei der folgenden Lieferung entsprachen die Briefumschläge nicht der Bestellung.\n\nSie haben immer sehr schnell reagiert und ich weiß, dass natürlich mal ein Fehler passieren kann, aber auch bei Ihrer letzten Lieferung vom 17.03. war wieder etwas nicht in Ordnung: Uns sind 50 Bögen mit Etiketten zu wenig geliefert worden und das Briefpapier hat nicht die bestellte Qualität.\n\nIch erwarte, dass Sie das umgehend in Ordnung bringen. Sollte es auch künftig zu Problemen mit unserer Bestellung kommen, müssen wir leider eine andere Druckerei beauftragen.\n\nMit freundlichen Grüßen\nCarina DeLuca`}
    ],
    task:["Warum es zu den Problemen kommt","Welche Lösung angeboten werden kann"],
    mc:[
      {q:"1. Frau DeLuca …", opts:["beschwert sich über die Qualität des Druckerpapiers.","hat die falschen Umschläge bekommen.","hat weniger Etiketten bestellt, als geliefert wurden."], correct:1},
      {q:"2. Die Druckerei von Herrn Wegener …", opts:["hat in letzter Zeit nicht auf Beschwerden reagiert.","hat Ware für den Postversand im Angebot.","nimmt zukünftig keine Aufträge mehr an."], correct:1},
    ],
    sample:`Sehr geehrte Frau DeLuca,\n\nbezugnehmend auf Ihre E-Mail entschuldigen wir uns für die wiederholt fehlerhaften Lieferungen. Grund dafür waren leider Fehler bei der Kommissionierung in unserem Lager.\n\nWir werden Ihnen die fehlenden 50 Bögen Etiketten sowie das Briefpapier in der bestellten Qualität schnellstmöglich nachliefern. Weiter können wir Ihnen versichern, dass wir unsere Lagerprozesse überprüft haben, damit solche Fehler in Zukunft nicht mehr passieren.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡「fehlende Lieferung」是數量不足/品質不符，需要補送，與「fehlerhafte Lieferung」（送錯貨品，需要取回替換）要區分。"
  }]
},

{id:"fehlerhafte-lieferung", title:"fehlerhafte Lieferung", zh:"送錯貨品", examples:[]},

{id:"lieferverzoegerung", title:"Lieferverzögerung", zh:"交貨延遲",
  examples:[{
    source:"Prüfungstraining S. 160",
    emails:[
      {role:"teamleitung",
       meta:{von:"Verena Glück (Teamleiterin)", an:"[dich]", betreff:"Lieferung Lastenfahrräder Cora XC5"},
       body:`Guten Morgen,\ngerade habe ich die untenstehende E-Mail bekommen, die ich Ihnen zur Bearbeitung weiterleite. Der Kurierdienst express ist ein neuer Kunde, den wir nicht verlieren dürfen. Bitte bearbeiten Sie die Beschwerde sofort und teilen Sie dem Kunden per E-Mail mit, wie es zu den Problemen gekommen ist und wie wir die genannten Probleme in Zukunft lösen werden.\n\nVerena Glück\nTeamleiterin`},
      {role:"kunde",
       meta:{von:"Mischa Kohlmann, Kurierdienst express", an:"Verena Glück, Fahrradmanufaktur Hanau", betreff:"Lieferung Lastenfahrräder Cora XC5"},
       body:`Sehr geehrte Frau Glück,\n\nam 10. Februar haben wir bei Ihnen fünf Lastenfahrräder Cora XC5 bestellt. In Ihrer Auftragsbestätigung hatten Sie uns als verbindlichen Liefertermin den 10. April angegeben.\n\nDa die Räder am 17. April bei uns immer noch nicht eingetroffen waren, haben wir bei Ihnen per E-Mail nachgefragt. Nach mehreren Versuchen bekamen wir die Information, dass mehrere Bauteile für die Räder aus dem Ausland kämen und es hier größere Lieferengpässe gäbe. Sie hätten aber auch einen Zulieferer im Inland und könnten verbindlich bis zum 10. Mai liefern. Inzwischen ist auch dieser Termin um 14 Tage überschritten, ohne dass Sie sich deswegen mit uns in Verbindung gesetzt haben, und wir haben die Ware immer noch nicht bekommen. Wieso melden Sie sich nie bei Problemen?\n\nWir bestehen auf umgehender Lieferung und bitten um sofortige Antwort, wie Sie das Problem lösen werden. Sonst müssen wir vom Kauf zurücktreten und uns nach einem neuen Lieferanten umsehen.\n\nMit freundlichen Grüßen\nMischa Kohlmann\nKurierdienst express`}
    ],
    task:["Wie es zu den Problemen gekommen ist","Wie die genannten Probleme in Zukunft gelöst werden"],
    mc:[
      {q:"19. Mischa Kohlmann …", opts:["weist auf eine fehlerhafte Auftragsbestätigung hin.","reklamiert fehlende Bauteile.","beschwert sich über eine Lieferverzögerung."], correct:2},
      {q:"20. In Zukunft …", opts:["wird der Kurierdienst die Geschäftsbeziehungen beenden.","wird der Kurierdienst nur noch Artikel im Inland bestellen.","erwartet der Kurierdienst eine bessere Kommunikation."], correct:2},
    ],
    sample:`Sehr geehrter Herr Kohlmann,\n\nbezugnehmend auf Ihre E-Mail entschuldigen wir uns für die Lieferverzögerung und die schlechte Kommunikation. Grund dafür waren größere Lieferengpässe bei unseren Zulieferern aus dem Ausland, die wir leider nicht rechtzeitig vorhergesehen haben.\n\nWir können Ihnen mitteilen, dass die fünf Lastenfahrräder Cora XC5 innerhalb der nächsten Woche geliefert werden. Weiter versichern wir Ihnen, dass wir in Zukunft bei Verzögerungen sofort Kontakt aufnehmen werden, damit Sie stets informiert sind.\n\nWir danken Ihnen für Ihr Verständnis und hoffen auf eine weiterhin gute Zusammenarbeit.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 此情境除了道歉延遲，還需承認「溝通不足」的問題，因為客戶在信中特別提到了這點。"
  }]
},

]; // end SITUATIONS
