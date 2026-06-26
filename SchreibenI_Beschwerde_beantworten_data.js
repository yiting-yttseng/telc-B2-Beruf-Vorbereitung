// ══════════════════════════════════════════════════════════
// SchreibenI_Beschwerde_beantworten_data.js
// ══════════════════════════════════════════════════════════

const PRUEFUNGSTIPPS = [
  "✏️ <b>第一句寫主題句</b>：開頭就點明是回應哪個投訴主題",
  "🎯 <b>解決方案要和原因搭配</b>：原因是缺人→補招人員；原因是系統故障→修復系統",
  "🚫 <b>老闆沒問的不要寫</b>：只回答 Teamleitung 指定的幾點",
  "💡 <b>具體且有創意</b>：避免罐頭回信（通用答案得不到分數）",
  "📝 <b>大約寫15行</b>（考試卷）",
  "🔠 <b>準備常用 B2 文法與單字</b>：nicht nur … sondern auch, dadurch dass, indem, Aufgrund + Gen.",
  "🔄 <b>句首變化</b>：避免每句都以 Wir 開頭，善用 Bezugnehmend / Aufgrund / Um … zu / Weiter versichern wir …",
];

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
  left_zh:"我就……（Akkusativ）寫信給您。（Bezug nehmend 舊式；bezugnehmend 現代）",
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
  left_de:"bezugnehmend auf Ihre [Beschwerde / Reklamation / Mail] vom … bedanken wir uns für Ihre Mitteilung.",
  left_zh:"就您……日的[投訴/客訴/來信]，感謝您告知我們。（句首小寫，bezugnehmend 作分詞片語開頭）",
  ex:[
    {de:"bezugnehmend auf Ihre Beschwerde vom heutigen Tag bedanken wir uns für Ihre Mitteilung.",
     zh:"就您今日的投訴，感謝您告知我們。"},
    {de:"bezüglich des schlechten Services und des unhöflichen Personals haben wir Ihre Beschwerde erhalten und möchten uns für die entstandenen Unannehmlichkeiten entschuldigen.",
     zh:"我們已收到您關於服務不佳及員工態度不禮貌的投訴，並為由此造成的不便道歉。"},
    {de:"bezugnehmend auf Ihre Beschwerde vom 22. April möchten wir uns zunächst bei Ihnen entschuldigen.",
     zh:"就您4月22日的投訴，我們首先要向您道歉。"},
  ]
},
{id:"r1-3", sec:"1. 感謝來信 / 引言 — Bezugnahme & Einleitung",
  left_de:"Vielen Dank für Ihre E-Mail und die Mitteilung über [die aufgetretenen Probleme / die genannten Mängel].",
  left_zh:"非常感謝您的來信，以及告知我們[所發生的問題/上述瑕疵]。",
  ex:[]
},
{id:"r1-4", sec:"1. 感謝來信 / 引言 — Bezugnahme & Einleitung",
  left_de:"Wir bedanken uns für die offene Darstellung in Ihrem Schreiben.",
  left_zh:"感謝您在來信中坦誠地說明情況。（offene Darstellung = 坦誠的描述，較高級）",
  ex:[
    {de:"Wir bedanken uns für die offene Darstellung in Ihrem Schreiben und möchten uns für die entstandenen Unannehmlichkeiten entschuldigen.",
     zh:"感謝您在來信中坦誠地說明情況，我們為由此造成的不便道歉。"},
  ]
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
    {de:"Wir entschuldigen uns für die Unannehmlichkeiten, die Ihnen durch unseren Fehler entstanden sind.",
     zh:"我們為因我方失誤而給您帶來的不便道歉。"},
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
  left_de:"Wir bedauern sehr / zutiefst, dass es zu Problemen mit … gekommen ist.",
  left_zh:"我們對……發生問題深感遺憾。（zutiefst = 深深地，比 sehr 更強烈）",
  ex:[
    {de:"Wir bedauern sehr, dass es zu Problemen mit Ihrer Lieferung gekommen ist.",
     zh:"我們對您的交貨發生問題深感遺憾。"},
    {de:"Wir bedauern zutiefst, dass es zu einer solchen Situation gekommen ist.",
     zh:"我們對發生這樣的情況深感遺憾。"},
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
{id:"r2-5", sec:"2. 道歉 — Entschuldigung",
  left_de:"Wir können gut verstehen / nachvollziehen, dass Sie [enttäuscht / verwundert / verärgert] sind.",
  left_zh:"我們完全理解您感到[失望/困惑/生氣]。（nachvollziehen = 感同身受，比 verstehen 更正式）",
  ex:[
    {de:"Wir können Ihren Ärger gut verstehen.",
     zh:"我們完全理解您的憤怒。"},
    {de:"Wir können gut nachvollziehen, dass Sie verärgert sind.",
     zh:"我們完全能夠感同身受地理解您的不滿。"},
  ]
},

{id:"r2-6", sec:"2. 道歉 — Entschuldigung",
  left_de:"Das hätte nicht passieren sollen, und wir übernehmen die volle Verantwortung dafür.",
  left_zh:"這本不應該發生，我們為此承擔全部責任。（語氣較強，適合嚴重疏失）",
  ex:[]
},
{id:"r3-1", sec:"3. 解釋原因 — Erklärung der Ursache",
  left_de:"Grund für [die Beanstandung / die Mängel / die Lieferverzögerung / die Probleme] war(en) …",
  left_zh:"[客訴/瑕疵/交貨延遲/問題]的原因是……（Beanstandung 比 Beschwerde 更正式）",
  ex:[
    {de:"Grund für die Beanstandung waren zahlreiche Krankheitsfälle unserer Mitarbeiter.",
     zh:"客訴的原因是我們員工大量請病假。"},
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
{id:"r3-4", sec:"3. 解釋原因 — Erklärung der Ursache",
  left_de:"Aufgrund [der / des] … [+ Gen.]",
  left_zh:"由於……（Aufgrund + Genitiv，B2重點介係詞）",
  ex:[
    {de:"Aufgrund eines technischen Defekts in unserer Produktionsanlage kam es zu Verzögerungen.",
     zh:"由於我們生產設備的技術故障，導致了延誤。"},
    {de:"Aufgrund der hohen Krankheitsrate unserer Mitarbeiter konnten wir Ihre Bestellung nicht rechtzeitig bearbeiten.",
     zh:"由於員工高病假率，我們未能及時處理您的訂單。"},
  ]
},
{id:"r3-5", sec:"3. 解釋原因 — Erklärung der Ursache",
  left_de:"Ich habe mich natürlich sofort nach den Gründen für … erkundigt und dabei Folgendes herausgefunden: …",
  left_zh:"我當然立即調查了……的原因，並發現了以下情況：……（erkundigen = 打聽；herausfinden = 查明）",
  ex:[
    {de:"Ich habe mich natürlich sofort nach den Gründen für die Verzögerung erkundigt und dabei Folgendes herausgefunden: Mehrere unserer Mitarbeiter waren krankheitsbedingt ausgefallen.",
     zh:"我當然立即調查了延遲的原因，並發現了以下情況：我們有幾位員工因病缺勤。"},
  ]
},
{id:"r3-6", sec:"3. 解釋原因 — Erklärung der Ursache",
  left_de:"Zu den Problemen in … kam es dadurch, dass …",
  left_zh:"……方面的問題是由於……而發生的。（dadurch, dass = B2重點結構，表示原因）",
  ex:[
    {de:"Zu den Problemen in der Lieferung kam es dadurch, dass unser System vorübergehend ausgefallen war.",
     zh:"交貨方面的問題是由於我們的系統暫時當機而發生的。"},
    {de:"Zu den Verzögerungen kam es dadurch, dass mehrere Bauteile nicht rechtzeitig geliefert wurden.",
     zh:"延遲是由於幾個零件未能及時交貨而發生的。"},
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
  left_de:"Um das Problem zu beheben, …",
  left_zh:"為了解決這個問題，……（後接具體措施）",
  ex:[
    {de:"Um das Problem zu beheben, haben wir unsere Qualitätskontrolle verschärft.",
     zh:"為了解決這個問題，我們已加強了品質管控。"},
    {de:"Um das Problem zu beheben, werden wir Ihnen sofort die fehlenden Artikel nachliefern.",
     zh:"為了解決這個問題，我們將立即為您補送缺少的商品。"},
  ]
},
{id:"r4-4", sec:"4. 改善措施 — Interne Maßnahmen",
  left_de:"Wir haben inzwischen [die Herstellerfirma gewechselt / ein neues System eingeführt / eine neue Software installiert / unser Bestellsystem verändert].",
  left_zh:"我們已[更換製造商/導入新系統/安裝新軟體/更新訂購系統]。",
  ex:[
    {de:"Wir haben inzwischen die Herstellerfirma gewechselt, um in Zukunft eine einwandfreie Qualität zu gewährleisten.",
     zh:"我們已更換了製造商，以確保今後品質無虞。"},
    {de:"Wir haben ein neues System eingeführt, um solche Fehler in Zukunft zu vermeiden.",
     zh:"我們已導入新系統，以避免今後發生此類失誤。"},
  ]
},
{id:"r4-5", sec:"4. 改善措施 — Interne Maßnahmen",
  left_de:"Wir können Ihnen versichern / zusichern, dass …",
  left_zh:"我們可以向您保證……（versichern = 保證事實為真；zusichern = 承諾未來行動，更精確）",
  ex:[
    {de:"Wir können Ihnen versichern, dass [solche Fehler / derartige Fehler] in Zukunft nicht mehr [passieren / auftreten / vorkommen] werden.",
     zh:"我們可以向您保證，此類/這樣的失誤將來不會再[發生/出現/發生]。（passieren/auftreten/vorkommen 三者均可，意思相近）"},
    {de:"Wir können Ihnen zusichern, dass wir in Zukunft bei Verzögerungen sofort Kontakt aufnehmen werden.",
     zh:"我們承諾，今後遇到延誤會立即聯繫您。"},
    {de:"Wir möchten Ihnen versichern, dass wir diese Probleme zukünftig so lösen werden, dass wir unseren neuen Mitarbeitern nicht nur Weiterbildungen anbieten, sondern auch genügend Personal einstellen.",
     zh:"我們向您保證，今後不僅為新員工提供培訓，也會招募足夠人力來解決此類問題。"},
  ]
},

{id:"r4-7", sec:"4. 改善措施 — Interne Maßnahmen",
  left_de:"Wir haben den Fehler sofort identifiziert und werden ihn umgehend beheben.",
  left_zh:"我們已立即查明失誤，並將盡快予以修正。（identifizieren = 查明/確認；umgehend = 立即）",
  ex:[]
},
{id:"r4-8", sec:"4. 改善措施 — Interne Maßnahmen",
  left_de:"Wir werden den entsprechenden Betrag auf Ihr Konto zurückerstatten.",
  left_zh:"我們將把相應金額退回您的帳戶。（zurückerstatten = 退款/退還）",
  ex:[
    {de:"Wir werden den entsprechenden Betrag von € 18,50 umgehend auf Ihr Konto zurückerstatten.",
     zh:"我們將立即把18.50歐元退回您的帳戶。"},
  ]
},
{id:"r5-1", sec:"5. 解決方案與補償 — Lösung und Entschädigung",
  left_de:"Als [Entschädigung / Entgegenkommen / Ausgleich / Wiedergutmachung] für die Unannehmlichkeiten bieten wir Ihnen [bei einer Folgebestellung 10% Rabatt / einen Ersatz / eine Gutschrift / einen Preisnachlass] an.",
  left_zh:"作為補償，我們為您提供……（Entschädigung賠償 / Entgegenkommen讓步 / Ausgleich彌補 / Wiedergutmachung彌補過失）",
  ex:[
    {de:"Als Entschädigung bieten wir Ihnen einen Rabatt für Ihre nächste Bestellung an.",
     zh:"作為賠償，我們為您下次訂購提供折扣。"},
    {de:"Als Entgegenkommen für die Unannehmlichkeiten bieten wir Ihnen bei einer Folgebestellung 10% Rabatt auf alle unsere Produkte an.",
     zh:"作為對不便的補償，我們為您下次訂購提供九折優惠。"},
    {de:"Als Ausgleich für die Unannehmlichkeiten bieten wir Ihnen eine kostenlose Lieferung bei Ihrer nächsten Bestellung an.",
     zh:"作為彌補，我們為您下次訂購提供免費配送。"},
    {de:"Als Wiedergutmachung bieten wir Ihnen einen Preisnachlass von 15% auf Ihre nächste Bestellung an.",
     zh:"作為彌補，我們為您下次訂購提供85折優惠。"},
  ]
},
{id:"r5-2", sec:"5. 解決方案與補償 — Lösung und Entschädigung",
  left_de:"Selbstverständlich können Sie den Artikel kostenlos zurücksenden.",
  left_zh:"當然，您可以免費退回商品。",
  ex:[]
},
{id:"r5-3", sec:"5. 解決方案與補償 — Lösung und Entschädigung",
  left_de:"Wir werden Ihnen sofort einen Kollegen / eine Kollegin schicken, der/die [die Mängel / die Fehler] beheben wird.",
  left_zh:"我們將立即派一位同事前往處理這些[瑕疵/失誤]。",
  ex:[
    {de:"Wir werden Ihnen sofort einen erfahrenen Kollegen schicken, der die Mängel an den Fenstern beheben wird.",
     zh:"我們將立即派一位有經驗的同事前往處理窗戶瑕疵。"},
  ]
},
{id:"r5-4", sec:"5. 解決方案與補償 — Lösung und Entschädigung",
  left_de:"Die fehlerhafte Lieferung / Das falsche Produkt werden wir schnellstmöglich bei Ihnen abholen und durch die richtige Ware ersetzen.",
  left_zh:"我們將盡快取回有問題的貨品，並以正確商品替換。",
  ex:[
    {de:"Die fehlerhafte Lieferung werden wir schnellstmöglich bei Ihnen abholen.",
     zh:"我們將盡快前往取回有問題的貨品。"},
    {de:"Wir werden die falschen Waschbecken schnellstmöglich abholen und Ihnen sofort die richtigen Modelle liefern.",
     zh:"我們將盡快取回送錯的洗臉盆，並立即補送正確型號。"},
  ]
},
{id:"r5-5", sec:"5. 解決方案與補償 — Lösung und Entschädigung",
  left_de:"Natürlich möchten wir Sie gerne als [Kunden / Kundin] behalten, deshalb …",
  left_zh:"當然，我們希望繼續保留您作為客戶，因此……",
  ex:[
    {de:"Natürlich möchten wir Sie gerne als Kundin behalten, deshalb bieten wir Ihnen als Wiedergutmachung einen Preisnachlass von 10% an.",
     zh:"當然，我們希望繼續保留您作為客戶，因此提供您一成折扣作為補償。"},
  ]
},
{id:"r5-6", sec:"5. 解決方案與補償 — Lösung und Entschädigung",
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
    {de:"Im Zweifelsfall stehen wir Ihnen gerne zur Verfügung.",
     zh:"如有任何疑問，我們隨時樂意為您服務。"},
    {de:"Haben Sie noch Fragen? Dann können Sie mich gerne unter … anrufen.",
     zh:"還有問題嗎？歡迎致電……聯繫我。"},
    {de:"Bei weiteren Fragen helfen wir Ihnen gern weiter.",
     zh:"如有其他問題，我們很樂意為您提供協助。"},
  ]
},
{id:"r6-2", sec:"6. 結尾 — Abschluss",
  left_de:"Wir danken Ihnen für Ihr Verständnis in dieser Angelegenheit.",
  left_zh:"感謝您對此事的理解。（in dieser Angelegenheit 使句子更正式完整）",
  ex:[
    {de:"Wir danken Ihnen für Ihr Verständnis und hoffen auf eine weiterhin gute Zusammenarbeit.",
     zh:"感謝您的理解，希望雙方繼續保持良好合作。"},
  ]
},
{id:"r6-3", sec:"6. 結尾 — Abschluss",
  left_de:"Wir hoffen, Sie sind mit dieser Lösung einverstanden, und verbleiben mit freundlichen Grüßen.",
  left_zh:"希望您接受這個解決方案，此致敬禮。（正式書信結語）",
  ex:[
    {de:"Wir hoffen, dass Sie uns in Zukunft eine weitere Chance geben werden, Ihnen eine positive Erfahrung zu bieten.",
     zh:"希望您今後能再給我們一次機會，為您提供美好的體驗。"},
  ]
},
{id:"r6-4", sec:"6. 結尾 — Abschluss",
  left_de:"Mit freundlichen Grüßen / i.A. [im Auftrag] / i.V. [in Vertretung]",
  left_zh:"此致敬禮 / i.A. = 受委託代簽 / i.V. = 代理（更高授權）",
  ex:[
    {de:"Mit freundlichen Grüßen\ni.A. Vorname Familienname",
     zh:"此致敬禮 / （受委託）姓名"},
    {de:"Mit freundlichen Grüßen\ni.V. Vorname Familienname",
     zh:"此致敬禮 / （代理授權）姓名"},
  ]
},

{id:"r6-5", sec:"6. 結尾 — Abschluss",
  left_de:"Wir versichern Ihnen eine pünktliche und sorgfältige Ausführung Ihrer Bestellung und stehen Ihnen für Rückfragen jederzeit zur Verfügung.",
  left_zh:"我們向您保證準時且謹慎地執行您的訂單，如有任何疑問，我們隨時為您服務。（pünktlich = 準時；sorgfältig = 謹慎/細心；Ausführung = 執行）",
  ex:[]
},
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
// 💡 MÖGLICHE GRÜNDE
// ══════════════════════════════════════════════════════════

const GRUENDE = [
{
  kategorie:"👥 人員問題 — Personalprobleme",
  zh:"員工相關的原因",
  items:[
    {de:"Krankheitsfälle", zh:"員工請病假"},
    {de:"die Grippewelle", zh:"流感潮"},
    {de:"der Unfall", zh:"意外事故"},
    {de:"ein Virus / [Körperteil] verletzt", zh:"病毒感染／身體部位受傷"},
    {de:"der Chefkoch / der Teamleiter / der Mitarbeiter war krank", zh:"主廚/組長/員工生病"},
    {de:"zu wenig Mitarbeiter", zh:"人手不足"},
    {de:"häufiger Personalwechsel", zh:"人員頻繁更替"},
  ]
},
{
  kategorie:"🚚 延遲原因 — Verzögerungsgründe",
  zh:"交貨/服務延遲的原因",
  items:[
    {de:"der Stau", zh:"塞車"},
    {de:"Bauarbeiten / die Baustelle", zh:"施工/工地"},
    {de:"der Streik", zh:"罷工"},
    {de:"die Demonstration", zh:"示威遊行"},
    {de:"ein Unfall auf dem Weg zu Ihnen", zh:"前往您處途中發生意外"},
    {de:"Lieferschwierigkeiten mit dem Hersteller / Anbieter", zh:"與製造商/供應商的交貨困難"},
    {de:"Engpässe in der Produktion / zu wenig Mitarbeiter", zh:"生產瓶頸/人手不足"},
    {de:"größere Lieferengpässe bei unseren Zulieferern aus dem Ausland", zh:"國外供應商出現較大的交貨短缺"},
  ]
},
{
  kategorie:"💻 技術問題 — Technische Probleme",
  zh:"系統或技術相關的原因",
  items:[
    {de:"ein technisches Problem / ein technischer Defekt", zh:"技術問題/技術故障"},
    {de:"der Systemausfall des Netzwerks", zh:"網路系統當機"},
    {de:"Aufgrund eines technischen Problems wurde eine falsche Adresse angezeigt.", zh:"由於技術問題，顯示了錯誤的地址。"},
    {de:"ein Virus hat sich in unser System eingeschlichen", zh:"病毒入侵了我們的系統"},
    {de:"unser System wurde mit einem Virus (Trojaner, Spam, Malware, …) infiziert", zh:"我們的系統被病毒（木馬、垃圾郵件、惡意軟體……）感染"},
    {de:"Wir haben ein neues System eingeführt / eine neue Software installiert / unser Bestellsystem verändert/modernisiert.", zh:"我們已導入新系統/安裝新軟體/更新/現代化訂購系統。（改善措施）"},
  ]
},
{
  kategorie:"❌ 人為失誤 — Menschliche Fehler",
  zh:"員工操作失誤相關的原因",
  items:[
    {de:"Der Mitarbeiter hat die Auftragsnummer / Bestellung / Information verwechselt.", zh:"員工搞混了訂單編號/訂單/資訊。"},
    {de:"ein Versehen in unserem Lager, bei dem die Modelle vertauscht wurden", zh:"我們倉庫的疏失，型號被調換了"},
    {de:"ein Fehler in unserer Rechnungsabteilung, bei dem der Skontoabzug nicht korrekt verbucht wurde", zh:"帳務部門失誤，現金折扣未被正確入帳"},
    {de:"Offenbar haben wir bei Ihrer Bestellung einen Fehler gemacht.", zh:"顯然我們在處理您的訂單時犯了錯誤。（offenbar = 顯然）"},
  ]
},
];


// ══════════════════════════════════════════════════════════
// URSACHEN_BEHANDLUNG（各情況原因與處理）
// 每個 entry: { id, title, zh, pairs: [{de, zh}] }
// ══════════════════════════════════════════════════════════

const URSACHEN_BEHANDLUNG = [

{id:"ub-mangelanzeige-1", title:"Mängelanzeige", zh:"瑕疵通報", num:1,
  subtitle:"範例一：製造商存在缺陷",
  pairs:[
    {de:"Zu den Mängeln an [Produkt] kam es dadurch, dass beim Herstellungsprozess ein Qualitätsfehler aufgetreten ist, der erst nach der Lieferung festgestellt wurde.",
     zh:"[產品]出現瑕疵，是因為製造過程中發生了品質問題，該問題直到交貨後才被發現。"},
    {de:"Um das Problem zu beheben, werden wir umgehend einen Techniker schicken, um das mangelhafte Produkt zu ersetzen, und sicherstellen, dass die Arbeiten fachgerecht ausgeführt werden.",
     zh:"為了解決這個問題，我們將立即派遣技術人員前往更換有瑕疵的產品，並確保相關工程按照專業標準執行。"},
  ]
},
{id:"ub-mangelanzeige-2", title:"Mängelanzeige", zh:"瑕疵通報", num:1,
  subtitle:"範例二：新製造商對產品不夠熟悉",
  pairs:[
    {de:"Zu den Mängeln an [Produkt] kam es dadurch, dass wir kürzlich auf einen neuen Hersteller umgestiegen sind, der mit unseren spezifischen Produktanforderungen noch nicht vollständig vertraut war.",
     zh:"[產品]出現瑕疵，是因為我們近期更換了新的製造商，該製造商對我們具體的產品要求尚未完全熟悉。"},
    {de:"Um das Problem zu beheben, haben wir den Hersteller bereits kontaktiert und arbeiten eng mit ihm zusammen, um die Qualitätsstandards künftig sicherzustellen.",
     zh:"為了解決這個問題，我們已與製造商聯繫，並正密切合作，以確保今後的品質標準得到保障。"},
  ]
},
{id:"ub-mangelanzeige-3", title:"Mängelanzeige", zh:"瑕疵通報", num:1,
  subtitle:"範例三：製造機台更換導致缺陷",
  pairs:[
    {de:"Zu den Mängeln an [Produkt] kam es dadurch, dass wir kürzlich unsere Produktionsanlage erneuert haben und dabei technische Anpassungen erforderlich waren, die zu unvorhergesehenen Qualitätsschwankungen geführt haben.",
     zh:"[產品]出現瑕疵，是因為我們近期更新了生產設備，在此過程中需要進行技術調整，導致了無法預見的品質波動。"},
    {de:"Um das Problem zu beheben, haben wir bereits Kontakt mit dem Maschinenhersteller aufgenommen, um die Ursache der Mängel zu klären und die Anlage entsprechend zu optimieren.",
     zh:"為了解決這個問題，我們已與機器製造商取得聯繫，以查明瑕疵原因並對設備進行相應的優化。"},
  ]
},

{id:"ub-service-1", title:"schlechter Service", zh:"服務品質不佳", num:2,
  subtitle:"範例：負責員工請育嬰假，代理人員不熟悉業務",
  pairs:[
    {de:"Zu den Problemen mit unserem Service kam es dadurch, dass unsere zuständige Mitarbeiterin sich derzeit in Elternzeit befindet und ihre Vertretung die spezifischen Anforderungen dieses Aufgabenbereichs zunächst nicht vollständig erfasst hatte.",
     zh:"我們的服務出現問題，是因為負責此業務的員工目前正在請育嬰假，而其代理人員起初尚未完全掌握此職責範疇的具體要求。"},
    {de:"Um das Problem zu beheben, haben wir eine interne Besprechung durchgeführt, indem erfahrene Mitarbeitende der Vertretung die Abläufe detailliert erläutert haben.",
     zh:"為了解決這個問題，我們召開了一次內部會議，讓有經驗的員工向代理人員詳細說明了工作流程。"},
    {de:"Durch regelmäßige Schulungen stellen wir sicher, dass solche Fehler nicht mehr vorkommen.",
     zh:"透過定期培訓，我們確保此類失誤不再發生。"},
  ]
},


{id:"ub-service-2", title:"schlechter Service", zh:"服務品質不佳", num:2,
  subtitle:"範例二：團隊內部重組導致職責不清",
  pairs:[
    {de:"Zu den Problemen mit unserem Service kam es dadurch, dass unser Team vorübergehend umstrukturiert wurde und die Zuständigkeiten dadurch zeitweise unklar waren.",
     zh:"我們的服務出現問題，是因為團隊進行了短暫重組，導致職責在一段時間內不夠明確。"},
    {de:"Um das Problem zu beheben, haben wir eine interne Besprechung durchgeführt, indem erfahrene Mitarbeiterinnen und Mitarbeiter die Aufgabenanforderungen detailliert erklärt haben.",
     zh:"為了解決這個問題，我們召開了一次內部會議，讓有經驗的員工詳細說明了各項工作要求。"},
    {de:"Durch regelmäßige Schulungen stellen wir sicher, dass solche Fehler nicht mehr vorkommen.",
     zh:"透過定期培訓，我們確保此類失誤不再發生。"},
  ]
},
{id:"ub-fehlende-rechnung-1", title:"fehlende Rechnung", zh:"發票遺失", num:3,
  subtitle:"範例：系統技術錯誤導致發票未自動產生",
  pairs:[
    {de:"【方案A: dadurch, dass + aufgrund】Zu den Problemen mit der Rechnung kam es dadurch, dass aufgrund eines technischen Fehlers in unserem System die Rechnung nicht automatisch generiert und versendet wurde.",
     zh:"發票出現問題，是因為我們系統中的技術故障，導致發票未能自動生成並寄送。（dadurch dass 內再嵌 aufgrund，句子較複雜）"},
    {de:"【方案B: aufgrund 句首】Aufgrund eines technischen Fehlers in unserem System wurde die Rechnung leider nicht automatisch generiert und versendet.",
     zh:"由於我們系統的技術故障，發票未能自動生成並寄送。（句首 aufgrund + Genitiv，簡潔清楚）"},
    {de:"【方案C: 兩句拆解】In unserem System ist leider ein technischer Fehler aufgetreten. Dadurch wurde die Rechnung nicht automatisch generiert und Ihnen zugesandt.",
     zh:"我們的系統不幸發生了技術故障。因此發票未能自動生成並寄送給您。（拆成兩句，最易讀）"},
    {de:"Um das Problem zu beheben, haben wir die Rechnung erneut erstellt und senden Ihnen diese mit dieser E-Mail als Anhang zu.",
     zh:"為了解決這個問題，我們已重新開立發票，並隨此封電子郵件以附件形式寄送給您。"},
  ]
},

{id:"ub-fehlerhafte-rechnung-1a", title:"fehlerhafte Rechnung", zh:"發票錯誤", num:4,
  subtitle:"範例一：系統安全更新後員工輸入失誤",
  pairs:[
    {de:"Zu den Problemen mit der Rechnung kam es dadurch, dass wir kürzlich ein internes Systemupdate zum Schutz vor Cyberangriffen durchgeführt haben.",
     zh:"發票出現問題，是因為我們近期為防範網路攻擊進行了內部系統安全更新。"},
    {de:"Da einige Mitarbeiterinnen und Mitarbeiter mit dem neuen System noch nicht vollständig vertraut sind, kam es leider zu einem Eingabefehler.",
     zh:"由於部分員工對新系統尚未完全熟悉，不幸發生了輸入失誤。"},
    {de:"Um das Problem zu beheben, werden wir eine gezielte Schulung für alle betroffenen Mitarbeitenden durchführen.",
     zh:"為了解決這個問題，我們將為所有相關員工進行專項培訓。"},
    {de:"Wir haben bereits eine korrigierte Rechnung erstellt, die Sie im Anhang finden.",
     zh:"我們已開立一份更正後的發票，您可在附件中找到。"},
    {de:"Wir bitten Sie, die ursprüngliche Rechnung zu ignorieren.",
     zh:"敬請忽略原始發票。"},
  ]
},
{id:"ub-fehlerhafte-rechnung-1b", title:"fehlerhafte Rechnung", zh:"發票錯誤", num:4,
  subtitle:"範例二：價目更新後舊資料未同步導致錯誤",
  pairs:[
    {de:"Zu den Problemen mit der Rechnung kam es dadurch, dass wir kürzlich unsere Preisliste aktualisiert haben und dabei ein Fehler bei der Übertragung der neuen Preise in unser Rechnungssystem aufgetreten ist.",
     zh:"發票出現問題，是因為我們近期更新了價目表，在將新價格匯入發票系統時發生了錯誤。"},
    {de:"Dadurch wurden bei einigen Bestellungen noch die alten Preise berechnet.",
     zh:"因此部分訂單仍按舊價格計算。"},
    {de:"Um das Problem zu beheben, haben wir den Fehler im System bereits korrigiert und senden Ihnen eine berichtigte Rechnung als Anhang zu.",
     zh:"為了解決這個問題，我們已修正系統中的錯誤，並隨信附上一份更正後的發票。"},
    {de:"Wir bitten Sie, die ursprüngliche Rechnung zu ignorieren.",
     zh:"敬請忽略原始發票。"},
  ]
},

{id:"ub-fehlende-lieferung-1", title:"fehlende Lieferung", zh:"貨物未送達", num:5,
  subtitle:"範例：物流服務商罷工導致延誤",
  pairs:[
    {de:"【方案A: dadurch, dass + aufgrund】Zu den Problemen bei der Lieferung kam es dadurch, dass es aufgrund eines Streiks beim Logistikdienstleister zu unvorhergesehenen Verzögerungen gekommen ist.",
     zh:"交貨出現問題，是因為物流服務商發生罷工，導致了無法預見的延誤。（dadurch dass 內再嵌 aufgrund）"},
    {de:"【方案B: aufgrund 句首】Aufgrund eines Streiks beim Logistikdienstleister kam es leider zu unvorhergesehenen Verzögerungen bei Ihrer Lieferung.",
     zh:"由於物流服務商發生罷工，您的貨品不幸出現了無法預見的延誤。（句首 aufgrund，簡潔）"},
    {de:"【方案C: 兩句拆解】Beim Logistikdienstleister ist leider ein Streik ausgebrochen. Dadurch kam es zu unvorhergesehenen Verzögerungen bei Ihrer Lieferung.",
     zh:"物流服務商不幸爆發了罷工。因此您的貨品出現了無法預見的延誤。（拆成兩句，最易讀）"},
    {de:"Um das Problem zu beheben, haben wir bereits einen alternativen Versanddienstleister beauftragt.",
     zh:"為了解決這個問題，我們已委託另一家快遞服務商。"},
    {de:"Sie können mit dem Eingang Ihrer Bestellung innerhalb von [X] Werktagen rechnen.",
     zh:"您的訂單預計將在[X]個工作天內送達。"},
  ]
},

{id:"ub-fehlerhafte-lieferung-1", title:"fehlerhafte Lieferung", zh:"送錯貨", num:6,
  subtitle:"範例：系統更新後員工操作失誤導致送錯貨",
  pairs:[
    {de:"Zu den Problemen bei der Lieferung kam es dadurch, dass wir kürzlich ein internes Systemupdate durchgeführt haben. Einige Mitarbeitende waren mit dem neuen System noch nicht vollständig vertraut, sodass leider ein Dateneingabefehler aufgetreten ist.",
     zh:"交貨出現問題，是因為我們近期進行了內部系統更新。部分員工對新系統尚未完全熟悉，因此不幸發生了資料輸入錯誤。（拆成兩句，避免過長的從句鏈）"},
    {de:"Um das Problem zu beheben, werden wir die korrekte Ware umgehend versenden und einen Kurier beauftragen, die fehlerhafte Lieferung bei Ihnen abzuholen.",
     zh:"為了解決這個問題，我們將立即寄送正確的貨品，並委託快遞人員前往取回送錯的貨品。"},
  ]
},

{id:"ub-lieferverzoegerung-1", title:"Lieferverzögerung", zh:"交貨延誤", num:7,
  subtitle:"範例：供應商生產瓶頸導致延誤",
  pairs:[
    {de:"Zu den Problemen mit der Lieferzeit kam es dadurch, dass unser Lieferant aufgrund von Produktionsengpässen die Ware nicht rechtzeitig bereitstellen konnte.",
     zh:"交貨出現延誤，是因為我們的供應商由於生產瓶頸而無法及時備貨。"},
    {de:"Um das Problem zu beheben, haben wir einen alternativen Lieferanten kontaktiert und erwarten den Wareneingang bis spätestens [Datum].",
     zh:"為了解決這個問題，我們已聯繫了另一家供應商，預計最晚於[日期]收到貨物。"},
    {de:"Wir werden Sie über den genauen Liefertermin informieren, sobald dieser feststeht.",
     zh:"一旦確定確切的交貨日期，我們將立即通知您。"},
  ]
},

{id:"ub-unvollstaendige-lieferung-1", title:"Lieferung war unvollständig", zh:"交貨不完整", num:8,
  subtitle:"範例：包裝過程中部分商品漏裝",
  pairs:[
    {de:"Zu den Problemen bei der Lieferung kam es dadurch, dass beim Verpackungsprozess ein interner Fehler aufgetreten ist und ein Teil der bestellten Waren versehentlich nicht eingepackt wurde.",
     zh:"交貨出現問題，是因為包裝過程中發生了內部失誤，導致部分訂購的商品被不慎遺漏未裝箱。"},
    {de:"Um das Problem zu beheben, werden wir die fehlenden Artikel umgehend nachliefern.",
     zh:"為了解決這個問題，我們將立即補送缺少的商品。"},
    {de:"Sie können mit dem Eingang der restlichen Waren innerhalb von zwei Werktagen rechnen.",
     zh:"您應可在兩個工作天內收到其餘貨物。"},
  ]
},

{id:"ub-handwerker-1", title:"Der Handwerker kommt nicht", zh:"技工未到場", num:9,
  subtitle:"範例：負責員工途中發生事故",
  pairs:[
    {de:"Zu den Problemen bei dem vereinbarten Termin kam es dadurch, dass unser zuständiger Mitarbeiter auf dem Weg zu Ihnen in einen Verkehrsunfall verwickelt wurde und den Termin daher leider nicht wahrnehmen konnte.",
     zh:"預約時間出現問題，是因為我們的負責員工在前往您處的途中發生了交通事故，因此遺憾地無法赴約。"},
    {de:"Um das Problem zu beheben, sind wir bereits dabei, eine geeignete Vertretung zu organisieren.",
     zh:"為了解決這個問題，我們正在安排合適的替代人員。"},
    {de:"Sobald ein Ersatz gefunden wurde, wird sich dieser umgehend mit Ihnen in Verbindung setzen, um einen neuen Termin zu vereinbaren.",
     zh:"一旦找到替代人員，他/她將立即與您聯繫以安排新的預約時間。"},
    {de:"Wären Sie in der kommenden Woche verfügbar?",
     zh:"請問您下週方便嗎？"},
  ]
},

{id:"ub-catering-1", title:"Essen auf Konferenz kalt", zh:"會議餐點變涼", num:10,
  subtitle:"範例一：塞車導致送餐延誤，餐點已冷",
  pairs:[
    {de:"Zu den Problemen mit dem Catering bei der Konferenz kam es dadurch, dass unser Lieferfahrzeug auf dem Weg zu Ihnen in einen unvorhergesehenen Stau geriet und die Speisen dadurch erst deutlich verspätet ankamen.",
     zh:"會議餐飲出現問題，是因為我們的送餐車輛在前往您處途中遭遇了意外塞車，導致餐點送達時已大幅延誤。"},
    {de:"Um das Problem zu beheben, werden wir künftig für solche Veranstaltungen mehr Zeit für die Anlieferung einplanen und bei Verzögerungen sofort Kontakt aufnehmen.",
     zh:"為了解決這個問題，今後我們將為此類活動預留更充裕的送餐時間，並在出現延誤時立即聯繫您。"},
  ]
},
{id:"ub-catering-2", title:"Essen auf Konferenz kalt", zh:"會議餐點變涼", num:10,
  subtitle:"範例二：保溫設備故障導致餐點變涼",
  pairs:[
    {de:"Zu den Problemen mit dem Catering bei der Konferenz kam es dadurch, dass an unserem Warmhaltegerät ein technischer Defekt aufgetreten ist, der dazu geführt hat, dass die Speisen nicht auf der gewünschten Temperatur gehalten werden konnten.",
     zh:"會議餐飲出現問題，是因為我們的保溫設備發生了技術故障，導致餐點無法保持在所需的溫度。"},
    {de:"Um das Problem zu beheben, haben wir das defekte Gerät sofort ersetzt und unsere gesamten Warmhaltegeräte einer gründlichen technischen Überprüfung unterzogen.",
     zh:"為了解決這個問題，我們已立即更換了故障設備，並對所有保溫設備進行了全面的技術檢查。"},
  ]
},

{id:"ub-gebaeudemanagement-1", title:"Gebäudemanagement arbeitet nicht gut", zh:"物業管理品質下降", num:11,
  subtitle:"範例：人員更替導致職責不清",
  pairs:[
    {de:"Zu den Problemen im Gebäudemanagement kam es dadurch, dass ein Personalwechsel in der zuständigen Abteilung zu Unklarheiten in den Zuständigkeiten geführt hat.",
     zh:"物業管理出現問題，是因為負責部門的人員更替導致職責分工不明。"},
    {de:"Um das Problem zu beheben, haben wir eine interne Besprechung durchgeführt und die Aufgabenverteilung neu geregelt.",
     zh:"為了解決這個問題，我們召開了內部會議，重新規劃了任務分配。"},
    {de:"Durch regelmäßige Schulungen stellen wir sicher, dass solche Fehler nicht mehr vorkommen.",
     zh:"透過定期培訓，我們確保此類失誤不再發生。"},
  ]
},

]; // end URSACHEN_BEHANDLUNG

// ══════════════════════════════════════════════════════════
// URSACHEN_AUFGRUND（同樣 11 題，改寫為 aufgrund 句型）
// ══════════════════════════════════════════════════════════

const URSACHEN_AUFGRUND = [

{num:1, title:"Mängelanzeige", zh:"瑕疵通報",
  items:[
    {label:"範例一：製造商缺陷",
     de:"Aufgrund eines Qualitätsfehlers im Herstellungsprozess wurden die Mängel an [Produkt] erst nach der Lieferung festgestellt.",
     zh:"由於製造過程中的品質問題，[產品]的瑕疵直到交貨後才被發現。"},
    {label:"範例二：新製造商不熟悉",
     de:"Aufgrund mangelnder Erfahrung des neuen Herstellers mit unseren spezifischen Produktanforderungen kam es zu den genannten Mängeln.",
     zh:"由於新製造商對我們具體產品要求的經驗不足，導致了上述瑕疵。"},
    {label:"範例三：機台更換",
     de:"Aufgrund technischer Anpassungen nach der Erneuerung unserer Produktionsanlage kam es zu unvorhergesehenen Qualitätsschwankungen.",
     zh:"由於更新生產設備後的技術調整，出現了無法預見的品質波動。"},
  ]
},

{num:2, title:"schlechter Service", zh:"服務品質不佳",
  items:[
    {label:"範例一：育嬰假代理",
     de:"Aufgrund der Elternzeit unserer zuständigen Mitarbeiterin und der damit verbundenen Einarbeitungszeit der Vertretung kam es zu den Problemen mit unserem Service.",
     zh:"由於負責員工請育嬰假，以及代理人員的交接適應期，導致了服務問題。"},
    {label:"範例二：團隊重組",
     de:"Aufgrund einer vorübergehenden Umstrukturierung unseres Teams waren die Zuständigkeiten zeitweise unklar, was zu den genannten Problemen geführt hat.",
     zh:"由於團隊的短暫重組，職責一時不夠明確，導致了上述問題。"},
  ]
},

{num:3, title:"fehlende Rechnung", zh:"發票遺失",
  items:[
    {label:"範例：系統技術錯誤",
     de:"Aufgrund eines technischen Fehlers in unserem System wurde die Rechnung leider nicht automatisch generiert und versendet.",
     zh:"由於我們系統的技術故障，發票未能自動生成並寄送。"},
  ]
},

{num:4, title:"fehlerhafte Rechnung", zh:"發票錯誤",
  items:[
    {label:"範例一：系統安全更新",
     de:"Aufgrund eines internen Systemupdates und der damit verbundenen Eingewöhnungsphase der Mitarbeitenden kam es leider zu einem Eingabefehler.",
     zh:"由於內部系統更新以及員工的適應期，不幸發生了輸入失誤。"},
    {label:"範例二：價目更新",
     de:"Aufgrund eines Fehlers bei der Übertragung der aktualisierten Preisliste in unser Rechnungssystem wurden bei einigen Bestellungen noch die alten Preise berechnet.",
     zh:"由於更新後的價目表在匯入發票系統時發生錯誤，部分訂單仍按舊價格計算。"},
  ]
},

{num:5, title:"fehlende Lieferung", zh:"貨物未送達",
  items:[
    {label:"範例：物流罷工",
     de:"Aufgrund eines Streiks beim Logistikdienstleister kam es leider zu unvorhergesehenen Verzögerungen bei Ihrer Lieferung.",
     zh:"由於物流服務商發生罷工，您的貨品不幸出現了無法預見的延誤。"},
  ]
},

{num:6, title:"fehlerhafte Lieferung", zh:"送錯貨",
  items:[
    {label:"範例：系統更新後輸入失誤",
     de:"Aufgrund eines internen Systemupdates und eines damit verbundenen Dateneingabefehlers wurde leider die falsche Ware für Ihre Bestellung versandt.",
     zh:"由於內部系統更新及相關的資料輸入失誤，不幸為您的訂單發送了錯誤的貨品。"},
  ]
},

{num:7, title:"Lieferverzögerung", zh:"交貨延誤",
  items:[
    {label:"範例：供應商生產瓶頸",
     de:"Aufgrund von Produktionsengpässen bei unserem Lieferanten konnte die Ware leider nicht rechtzeitig bereitgestellt werden.",
     zh:"由於我們供應商的生產瓶頸，貨品不幸無法及時備妥。"},
  ]
},

{num:8, title:"Lieferung war unvollständig", zh:"交貨不完整",
  items:[
    {label:"範例：包裝漏裝",
     de:"Aufgrund eines internen Fehlers im Verpackungsprozess wurde ein Teil der bestellten Waren versehentlich nicht eingepackt.",
     zh:"由於包裝過程中的內部失誤，部分訂購商品被不慎遺漏未裝箱。"},
  ]
},

{num:9, title:"Der Handwerker kommt nicht", zh:"技工未到場",
  items:[
    {label:"範例：途中事故",
     de:"Aufgrund eines Verkehrsunfalls auf dem Weg zu Ihnen konnte unser zuständiger Mitarbeiter den vereinbarten Termin leider nicht wahrnehmen.",
     zh:"由於前往您處途中發生交通事故，我們的負責員工不幸無法赴約。"},
  ]
},

{num:10, title:"Essen auf Konferenz kalt", zh:"會議餐點變涼",
  items:[
    {label:"範例一：塞車",
     de:"Aufgrund eines unvorhergesehenen Staus auf dem Lieferweg kamen die Speisen deutlich verspätet an.",
     zh:"由於送餐途中遭遇意外塞車，餐點大幅延誤送達。"},
    {label:"範例二：保溫設備故障",
     de:"Aufgrund eines technischen Defekts an unserem Warmhaltegerät konnten die Speisen nicht auf der gewünschten Temperatur gehalten werden.",
     zh:"由於保溫設備的技術故障，餐點無法保持在所需溫度。"},
  ]
},

{num:11, title:"Gebäudemanagement arbeitet nicht gut", zh:"物業管理品質下降",
  items:[
    {label:"範例：人員更替",
     de:"Aufgrund eines Personalwechsels in der zuständigen Abteilung kam es zu Unklarheiten in den Zuständigkeiten.",
     zh:"由於負責部門的人員更替，導致職責分工不明。"},
  ]
},

]; // end URSACHEN_AUFGRUND


// ══════════════════════════════════════════════════════════
// SITUATIONS（考題資料）
// ══════════════════════════════════════════════════════════

const SITUATIONS = [

// ── Mängelanzeige ──────────────────────────────────────
{id:"mangelanzeige", title:"beschädigt Produkt / Mängelanzeige", zh:"瑕疵通知",
  examples:[
  {
    source:"Prüfungstraining S. 38",
    summary:{
      boss:["1. Weshalb es zu diesen Mängeln kommen konnte","2. Dass Sie die Angelegenheit sofort in Ordnung bringen werden","3. Was Sie machen werden, damit solche Fehler in Zukunft nicht mehr passieren"],
      complaint:["1. Vier Kunststofffenster schließen nach Einbau nicht richtig","2. Bereits früher gab es Probleme mit Einbauarbeiten (Schiebetüren)"],
      gruende:["Technischer Fehler bei der Einstellung der Fensterrahmen"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Anja Klein (Teamleiterin)", an:"[dich]", betreff:"Beschwerde Fenstereinbau"},
       body:`Guten Morgen,\ngerade habe ich die unten stehende Reklamation bekommen. Ich bitte Sie, diese zu bearbeiten. Mit der Firma Hoger haben wir schon seit vielen Jahren gute Geschäftsverbindungen, bitte bearbeiten Sie ihre Beschwerde umgehend. Teilen Sie dem Kunden bitte mit, weshalb es zu diesen Mängeln kommen konnte, dass wir die Angelegenheit sofort in Ordnung bringen werden und was wir unternehmen werden, dass solche Fehler in Zukunft nicht mehr passieren werden.\n\nDanke\nAnja Klein\nTeamleiterin`},
      {role:"kunde",
       meta:{von:"Thomas Hoger, Hoger KG", an:"Anja Klein", betreff:"Beschwerde Fenstereinbau"},
       body:`Sehr geehrte Frau Klein,\nwir haben bei Ihnen neue Fenster bestellt, die auch am 1. Juni fristgemäß geliefert wurden. Es handelt sich um die vier Kunststofffenster 1450 × 1150 mm. Ein Mitarbeiter hat die Fenster dann eingesetzt, aber von Anfang an schließen einige Fenster nicht richtig, sodass es stark zieht. Bitte bringen Sie das in Ordnung.\n\nWir möchten Sie daran erinnern, dass es in der Vergangenheit bereits einmal Probleme mit Einbauarbeiten gab: Im September des letzten Jahres gab es Mängel an drei Schiebetüren.\n\nMit freundlichen Grüßen\nThomas Hoger\nHoger KG`}
    ],
    mc:[
      {q:"19. Thomas Hoger …", opts:["möchte gelieferte Fenster umtauschen.","reklamiert einen nicht vorhandenen Service.","fordert funktionsfähige Fenster."], correct:2},
      {q:"20. Die genannten Mängel …", opts:["sind nicht zum ersten Mal aufgetreten.","sollen rasch beseitigt werden.","sind auf Verzögerungen beim Service zurückzuführen."], correct:0},
    ],
    sample:`Sehr geehrter Herr Hoger,\n\nbezugnehmend auf Ihre Beschwerde vom heutigen Tag entschuldigen wir uns für die nicht richtig ausgeführten Einbauarbeiten. Grund für die Mängel war ein technischer Fehler bei der Einstellung der Fensterrahmen während des Einbaus.\n\nWir werden Ihnen sofort einen Kollegen schicken, der die Mängel beheben wird. Weiter versichern wir Ihnen, dass wir unsere Qualitätskontrolle verbessert haben, sodass solche Fehler in Zukunft nicht mehr passieren werden.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 避免所有句子都以「Wir」開頭。善用 bezugnehmend auf / Grund für … war … / Weiter versichern wir … 來變化句首。"
  },
  {
    source:"Klett Mit Erfolg zum DTB B2 S. 66–67",
    summary:{
      boss:["1. Gründe für den entstandenen Defekt nennen","2. Wie das Problem gelöst werden kann"],
      complaint:["1. Spülbecken aus Keramik hat einen Defekt (Kratzer)","2. Kunstvermutung: beim Einbau der Schränke ist etwas Schweres hineingefallen"],
      gruende:["Mitarbeiter hat beim Einbau der Schränke etwas Schweres ins Spülbecken fallen lassen"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Lisa Gärtner, Küchenstudio Gärtner", an:"[dich]", betreff:"FW Reklamation Kücheneinbau"},
       body:`Guten Morgen,\ngestern habe ich unten stehende E-Mail bekommen. Bitte klären Sie mit den Kollegen, die bei dem Kunden waren, was genau passiert ist. Antworten Sie dann dem Kunden höflich und nennen Sie ruhig die Gründe für den entstandenen Defekt. Schreiben Sie ihm bitte auch, wie wir das Problem lösen können.\n\nDanke schon mal und beste Grüße\nLisa Gärtner`},
      {role:"kunde",
       meta:{von:"Ludwig Raueisen", an:"Lisa Gärtner", betreff:"Reklamation Kücheneinbau"},
       body:`Sehr geehrte Frau Gärtner,\n\nam 28. und 29. Juni haben Sie in unserem Gästehaus eine neue Küche eingebaut. Dazu gehörte ein großes Spülbecken aus Keramik und mehrere Einbauschränke darüber.\n\nMit der zügigen Durchführung der Arbeiten waren wir sehr zufrieden. Auch die von Ihnen empfohlene Farbe der Schränke gefällt uns sehr. Nun mussten wir aber feststellen, dass das Spülbecken an einer Stelle einen Defekt hat. Wir nehmen an, dass einem Ihrer Mitarbeiter beim Einbauen der Schränke etwas Schweres in das Spülbecken gefallen ist, sodass dort ein Kratzer entstanden ist.\n\nWir verlangen deshalb, dass das Spülbecken entweder repariert oder ausgetauscht wird. Bitte teilen Sie mir bis 4. Juli mit, wie Sie vorgehen wollen.\n\nMit freundlichen Grüßen\nLudwig Raueisen`}
    ],
    mc:[
      {q:"19. Herr Raueisen …", opts:["beschwert sich über ein beschädigtes Produkt.","besteht auf dem Austausch der Einbauschränke.","war mit der Dauer der Arbeiten unzufrieden."], correct:0},
      {q:"20. Das Küchenstudio soll …", opts:["die Küche anders planen.","eine Lösung vorschlagen.","einen Mitarbeiter vorbeischicken."], correct:1},
    ],
    sample:`Sehr geehrter Herr Raueisen,\n\nbezugnehmend auf Ihre Reklamation vom 29. Juni entschuldigen wir uns für den entstandenen Defekt am Spülbecken. Ich habe mich sofort nach den Gründen erkundigt und dabei Folgendes herausgefunden: Beim Einbau der Schränke ist einem unserer Mitarbeiter leider ein Werkzeug in das Spülbecken gefallen, wodurch der Kratzer entstanden ist.\n\nWir werden das Spülbecken so schnell wie möglich reparieren oder bei Bedarf austauschen. Wir werden Ihnen bis zum 4. Juli mitteilen, wie wir genau vorgehen werden.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 注意：老師說「可以直接承認原因」。這裡用 Ich habe mich sofort nach den Gründen erkundigt 展示主動性，然後說明具體原因。"
  }

  ,{
    source:"v.Trautheim/Pilzner: DTB B2 Lesen und Schreiben Test 7, S. 28",
    summary:{
      boss:["1. Gründe für den Defekt nennen (nach Klärung mit dem Kollegen)","2. Wie wir das Problem lösen werden"],
      complaint:["1. Spiegel hat einen Sprung","2. Toilettenkasten ist defekt","3. Vermutung: Mitarbeiter hat das Malheur verursacht","4. Antwort innerhalb von drei Tagen erwartet (wegen Planung)"],
      gruende:["Vermutlich ist dem Mitarbeiter beim Einbau ein Missgeschick passiert"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Lilo Pulver (Teamleiterin)", an:"[dich]", betreff:"FW: Gäste-WC-/ Toiletteneinbau"},
       body:`Hallo,

heute habe ich die untenstehende E-Mail von Frau Mc Kinney erhalten. Bitte antworten Sie ihr höflich, da sie eine geschätzte Kundin von uns ist. Nachdem Sie mit dem Kollegen geklärt haben, der bei ihr war, was genau passiert ist, informieren Sie sie bitte dahin gehend und nennen Sie entsprechende Gründe für den Defekt.

Schreiben Sie ihr auch, wie wir das Problem lösen werden.

Danke und liebe Grüße
Lilo Pulver
Teamleiterin`},
      {role:"kunde",
       meta:{von:"Birgit Mc Kinney", an:"Lilo Pulver", betreff:"Gäste-WC-/ Toiletteneinbau"},
       body:`Sehr geehrte Frau Pulver,

am 17. und 18. Mai haben Sie bei uns die Gästetoilette erneuert. Dazu gehörte der Einbau der Toilette, des Toilettenkastens sowie die Installation des Waschbeckens und Anbringung des Spiegels.

Die Arbeiten wurden zügig durchgeführt und wir sind sehr damit zufrieden. Leider mussten wir feststellen, dass der Spiegel einen Sprung hat und der Toilettenkasten defekt ist. Wir können uns das nicht erklären, jedoch vermuten wir, dass Ihrem Mitarbeiter dieses Malheur passiert ist.

Wir müssen daher von Ihnen verlangen, dass der Spiegel ausgetauscht und der Toilettenkasten repariert wird. Da wir entsprechend planen wollen, bitten wir um eine Antwort innerhalb der nächsten drei Tage.

Mit freundlichen Grüßen
Birgit Mc Kinney`}
    ],
    mc:[],
    sample:`Sehr geehrte Frau Mc Kinney,

bezugnehmend auf Ihre Beschwerde vom heutigen Tag entschuldigen wir uns für den entstandenen Defekt am Spiegel und am Toilettenkasten. Es freut uns, dass Sie mit der zügigen Durchführung der Arbeiten zufrieden waren, und wir bedauern sehr, dass es dennoch zu diesen Mängeln gekommen ist.

Ich habe mich mit dem Kollegen, der bei Ihnen vor Ort war, abgestimmt und dabei Folgendes herausgefunden: Beim Transport der Materialien ist ihm versehentlich ein Werkzeug gegen den Spiegel gefallen, wodurch der Sprung entstanden ist; der Toilettenkasten wurde dabei ebenfalls beschädigt.

Um das Problem zu beheben, werden wir Ihnen innerhalb der nächsten drei Tage einen Techniker schicken, der den Spiegel austauscht und den Toilettenkasten reparieren wird.

Wir bitten Sie, die Unannehmlichkeiten zu entschuldigen, und stehen Ihnen bei Rückfragen jederzeit zur Verfügung.

Mit freundlichen Grüßen
[Name]`,
    note:"💡 注意：客戶要求三天內回覆是因為「entsprechend planen」，回信務必明確回應這個時間點。"
  }
  ,{
    source:"v.Trautheim/Pilzner: DTB B2 Lesen und Schreiben Test 3, S. 14",
    summary:{
      boss:["1. Wie es zu diesen Mängeln kommen konnte","2. Versichern, dass die Angelegenheit sofort in Ordnung gebracht wird","3. Was wir unternehmen, damit diese Fehler in Zukunft nicht mehr passieren"],
      complaint:["1. 250 neue Bürolampen verursachen Stromausfall in beiden Gebäuden","2. Bereits frühere Probleme beim Montieren der Lampen in anderen Gebäuden","3. Mängel sollen bis Freitag behoben sein, sonst Beauftragung einer anderen Firma"],
      gruende:["Technischer Defekt bei der Montage / Inkompatibilität der neuen Lampen mit dem Stromnetz"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Agata Schmalschmidt (Teamleiterin)", an:"[dich]", betreff:"FW: Fehlerhafte Lampenlieferung"},
       body:`Guten Morgen,\n\ngestern Abend habe ich die untenstehende E-Mail bekommen. Ich möchte Sie bitten, diese umgehend zu bearbeiten. Seit vielen Jahren haben wir mit der Firma Morgenstern sehr gute Geschäftsbeziehungen. Bitte vergessen Sie auf keinen Fall, Frau Wilson mitzuteilen, wie es zu diesen Mängeln kommen konnte, und versichern Sie, dass wir die Angelegenheit sofort in Ordnung bringen werden. Erklären Sie auch, was wir unternehmen, damit diese Fehler in Zukunft nicht mehr passieren.\n\nVielen Dank.\nAgata Schmalschmidt\nTeamleiterin`},
      {role:"kunde",
       meta:{von:"Annegret Wilson, Firma Morgenstern", an:"Agata Schmalschmidt", betreff:"Fehlerhafte Lampenlieferung"},
       body:`Sehr geehrte Frau Schmalschmidt,\n\nwir haben bei Ihnen neue Bürolampen aus Italien für unsere Gebäude 1 und 2 bestellt, die auch fristgemäß am 15. Mai geliefert wurden. Es handelt sich dabei um 250 Lampen der Marke Montatori. Drei Ihrer Mitarbeiter haben die Lampen montiert, aber schon nach kurzer Zeit mussten wir feststellen, dass die neuen Lampen einen Stromausfall in beiden Gebäuden verursachten.\n\nDürfen wir Sie daran erinnern, dass es schon in der Vergangenheit Probleme beim Montieren der Lampen in Gebäude 4 und 5 gab? Erst nach mehrfacher Reklamation haben Sie uns Ihr Team zur Überprüfung geschickt, um diese Mängel zu beheben.\n\nWir bitten Sie, die aktuellen Mängel bis Freitag aus der Welt zu schaffen. Sollte dies nicht der Fall sein, sehen wir uns gezwungen, eine andere Firma mit der Reparatur zu beauftragen und diese Ihnen dann in Rechnung zu stellen.\n\nWir hoffen jedoch, dass es dazu nicht kommt.\n\nMit freundlichen Grüßen\nAnnegret Wilson`}
    ],
    mc:[],
    sample:`Sehr geehrte Frau Wilson,\n\nbezugnehmend auf Ihre Beschwerde über die fehlerhafte Lampenlieferung entschuldigen wir uns für die entstandenen Mängel. Wir bedauern sehr, dass es in beiden Gebäuden zu einem Stromausfall kam.\n\nZu den Mängeln an den Lampen kam es dadurch, dass wir kürzlich auf einen neuen Hersteller umgestiegen sind, der mit den elektrischen Anforderungen Ihres Gebäudes noch nicht vollständig vertraut war.\n\nUm das Problem zu beheben, werden wir Ihnen bis spätestens Freitag unsere Techniker schicken, um die Lampen zu überprüfen und gegebenenfalls auszutauschen. Wir können Ihnen versichern, dass solche Fehler in Zukunft nicht mehr auftreten werden, indem wir wieder mit unserem früheren Hersteller zusammenarbeiten.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 注意此題涉及兩個歷史前科（Gebäude 4 und 5），回信時可以承認過去確實也發生過問題，展現誠實態度，但避免過度道歉影響專業形象。"
  }
  ,{
    source:"Lesen und Schreiben — Reklamation der verlegten Fliesen",
    summary:{
      boss:["1. Den Sachverhalt geprüft: Fliesengröße teilweise unser Fehler (wird ausgetauscht)","2. Fliesenmodell entspricht der vereinbarten Vorgabe (kein Handlungsbedarf)","3. Keine weiteren kostenfreien Änderungen, da Herr Müller bereits mehrfach Änderungswünsche geäußert hat","4. Weiteres Modell oder zusätzliche Arbeiten: Kosten von 500 Euro","5. Herrn Müller informieren und um Bestätigung bitten, ob er einverstanden ist"],
      complaint:["1. Verlegte Fliesen entsprechen nicht dem bestellten Modell","2. Fliesen in einigen Räumen haben unterschiedliche Größen (v.a. Eingangsbereich, Besprechungsraum)","3. Gesamtbild dadurch ungleichmäßig, entspricht nicht den Vorstellungen"],
      gruende:["Teilweise interner Fehler bei der Fliesengröße; beim Modell wurde jedoch nach den vereinbarten Vorgaben gearbeitet"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Andreas Schneider, a.schneider@bau-design.de", an:"[dich]", betreff:"Antwort an Herrn Müller"},
       body:`Herr Müller hat sich bereits mehrfach mit Änderungs- und Korrekturwünschen an uns gewandt. Nach Prüfung des Falls haben wir festgestellt, dass die unterschiedlichen Fliesengrößen teilweise auf einen Fehler unsererseits zurückzuführen sind. Die betroffenen Fliesen werden wir daher austauschen.\n\nBezüglich des Fliesenmodells sehen wir jedoch keinen Handlungsbedarf, da die Arbeiten entsprechend der vereinbarten Vorgaben ausgeführt wurden.\n\nDa Herr Müller bereits mehrfach Änderungswünsche geäußert hat, werden wir keine weiteren kostenfreien Änderungen vornehmen. Sollte er ein anderes Fliesenmodell wünschen oder zusätzliche Arbeiten beauftragen wollen, fallen hierfür Kosten in Höhe von 500 Euro an.\n\nBitte informieren Sie Herrn Müller über unsere Entscheidung und bitten Sie ihn um eine Bestätigung, ob er mit diesem Vorgehen einverstanden ist.`},
      {role:"kunde",
       meta:{von:"Thomas Müller, t.mueller@restaurant-mueller.de", an:"info@bau-design.de", betreff:"Reklamation der verlegten Fliesen"},
       body:`Sehr geehrte Damen und Herren,\n\nvor zwei Wochen haben Ihre Mitarbeiter die Fliesen in meinen Geschäftsräumen verlegt. Leider musste ich nach Abschluss der Arbeiten feststellen, dass die gelieferten und verlegten Fliesen nicht dem Modell entsprechen, das ich bei Ihnen bestellt habe.\n\nAußerdem habe ich bemerkt, dass die Fliesen in einigen Räumen unterschiedliche Größen haben. Besonders im Eingangsbereich und im Besprechungsraum wirkt das Gesamtbild dadurch ungleichmäßig und entspricht nicht meinen Vorstellungen.\n\nDa ich großen Wert auf ein einheitliches Erscheinungsbild meiner Geschäftsräume lege, bin ich mit dem Ergebnis nicht zufrieden. Ich bitte Sie daher, den Sachverhalt zu prüfen und mir mitzuteilen, wie Sie die festgestellten Mängel beheben möchten.\n\nIch freue mich auf Ihre zeitnahe Rückmeldung.\n\nMit freundlichen Grüßen\nThomas Müller`}
    ],
    mc:[],
    sample:`Sehr geehrter Herr Müller,\n\nbezugnehmend auf Ihre Reklamation vom 15. September bedanken wir uns für Ihre Mitteilung und haben den Sachverhalt umgehend geprüft.\n\nBezüglich der unterschiedlichen Fliesengrößen müssen wir Ihnen leider mitteilen, dass es sich teilweise um einen Fehler unsererseits handelt. Die betroffenen Fliesen werden wir daher kostenfrei austauschen.\n\nBezüglich des Fliesenmodells können wir jedoch keinen Handlungsbedarf erkennen, da die Arbeiten entsprechend der mit Ihnen vereinbarten Vorgaben ausgeführt wurden. Da Sie bereits mehrfach Änderungswünsche geäußert haben, können wir Ihnen leider keine weiteren kostenfreien Änderungen anbieten. Sollten Sie ein anderes Fliesenmodell wünschen oder zusätzliche Arbeiten beauftragen wollen, fallen hierfür Kosten in Höhe von 500 Euro an.\n\nWir bitten Sie um eine kurze Bestätigung, ob Sie mit diesem Vorgehen einverstanden sind.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 此題的特殊之處：客戶提出兩個訴求，但公司只在「尺寸」上承認錯誤並道歉，在「型號」上則堅持立場，不承擔責任。這種「部分接受、部分反駁」的回信策略在考試中也可能出現，不一定每次都要全盤道歉妥協。"
  }
  ]
},

// ── schlechter Service ─────────────────────────────────
{id:"service", title:"schlechter Service", zh:"服務不佳",
  examples:[
  {
    source:"Aspekte Beruf B2 (Unterricht) — Hotel Südtirol",
    summary:{
      boss:["1. Den Grund für die aktuellen Probleme nennen","2. Wie wir diese Probleme zukünftig lösen werden"],
      complaint:["1. Personal nicht mehr freundlich und höflich","2. Service im Restaurant wesentlich schlechter","3. Lange Wartezeiten","4. Servicepersonal häufig gewechselt, unhöflich und gestresst"],
      gruende:["Krankheitsfälle", "Kurzfristiger Personalwechsel im Servicebereich"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Peter Birmer, Leitung Serviceteam", an:"[dich]", betreff:"FW: Mängel im Service"},
       body:`Hallo,\nunten stehende E-Mail erreichte mich heute Morgen. Bitte kümmern Sie sich darum und antworten Sie der Kundin höflich. Herr und Frau Loibl sind seit vielen Jahren Stammgäste und ich möchte sie auf keinen Fall verlieren. Sie können Frau Loibl ruhig den Grund für die aktuellen Probleme nennen. Ganz wichtig: Bitte schreiben Sie ihr auch, wie wir diese Probleme zukünftig lösen werden.\n\nPeter Birmer`},
      {role:"kunde",
       meta:{von:"Annemarie Loibl", an:"Peter Birmer", betreff:"Mängel im Service"},
       body:`Sehr geehrter Herr Birmer,\n\nseit 15 Jahren machen mein Mann und ich jeden Sommer Urlaub im schönen Südtirol. Allerdings mussten wir bei unserem letzten Aufenthalt im August feststellen, dass das Personal leider nicht mehr so freundlich und höflich war wie bisher. Auch der Service im Restaurant war wesentlich schlechter. Wir mussten oft lange Wartezeiten in Kauf nehmen und das Servicepersonal, das leider auch häufig gewechselt hat, war unhöflich und gestresst.\n\nMit freundlichen Grüßen\nAnnemarie Loibl`}
    ],
    mc:[
      {q:"1. Frau Loibl beschwert sich über …", opts:["die Qualität des Essens im Restaurant.","das unhöfliche und gestresste Personal.","die zu hohen Preise im Hotel."], correct:1},
      {q:"2. Frau Loibl …", opts:["möchte eine Entschädigung für ihren Aufenthalt.","droht, das Hotel nicht mehr zu besuchen.","hofft auf eine Verbesserung des Services."], correct:2},
    ],
    sample:`Sehr geehrte Frau Loibl,\n\nbezüglich des schlechten Services und des unhöflichen Personals haben wir Ihre Beschwerde erhalten und möchten uns für die entstandenen Unannehmlichkeiten entschuldigen. Wir können Ihren Ärger gut verstehen.\n\nDer Grund für Ihre Beanstandung waren zahlreiche Krankheitsfälle unserer Mitarbeiter. Darüber hinaus kam es aufgrund eines kurzfristigen Personalwechsels zu Engpässen im Servicebereich.\n\nWir möchten Ihnen versichern, dass wir diese Probleme zukünftig so lösen werden, dass wir unseren Mitarbeitern regelmäßige Weiterbildungen anbieten und zugleich genügend Personal einstellen, um im Krankheitsfall schnelle und kompetente Vertretung zu finden.\n\nWir hoffen, dass Sie uns in Zukunft eine weitere Chance geben werden, Ihnen eine positive Erfahrung zu bieten.\n\nMit freundlichen Grüßen\ni.A. [Name]`,
    note:"💡 老師示範信。第一段引言+道歉+同理心合一；第二段兩個原因用 Darüber hinaus 連接；第三段用 nicht nur … sondern auch 展示具體改善。"
  },
  {
    source:"telc online1 S. 16 — Reinigungsservice",
    summary:{
      boss:["1. Grund für die aktuellen Probleme nennen","2. Wie diese Probleme zukünftig gelöst werden"],
      complaint:["1. Konferenzräume in den letzten drei Wochen oft nicht ordentlich","2. Reinigung der Büros und Küchen in letzter Zeit nicht zufriedenstellend"],
      gruende:["Krankheitsfälle / Personalwechsel"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Marisa Leon (Teamleiterin)", an:"[dich]", betreff:"FW Beschwerde Verschlechterung des Services"},
       body:`Hallo,\nunten stehende E-Mail erreichte mich gestern. Bitte kümmern Sie sich darum und antworten Sie dem Kunden höflich. Herr Stemmler ist seit Jahren Kunde bei uns und ich möchte ihn ungern verlieren. Sie können ihm ruhig den Grund für unsere aktuellen Probleme nennen. Ganz wichtig: Bitte schreiben Sie Herrn Stemmler auch, wie wir diese Probleme zukünftig lösen werden.\n\nMarisa Leon\nTeamleiterin`},
      {role:"kunde",
       meta:{von:"Frank Stemmler", an:"Marisa Leon", betreff:"Beschwerde Verschlechterung des Services"},
       body:`Sehr geehrte Frau Leon,\n\nleider bin ich mit Ihrem Service gar nicht mehr zufrieden. Sie führen bei uns die tägliche Reinigung aller Büroräume aus. Dazu gehört auch, in den Küchen aufzuräumen und die Konferenzräume für den nächsten Tag vorzubereiten. Bisher waren wir mit Ihrem Personal sehr zufrieden.\n\nIn den letzten drei Wochen kam es immer wieder vor, dass vor allem die Konferenzräume nicht ordentlich waren. Das führt zu Problemen, wenn dort am nächsten Tag bereits am Vormittag eine Besprechung stattfindet. Wir können uns nicht auf die Qualität Ihrer Arbeit verlassen und müssen selbst aufräumen. Auch die Reinigung der Büros und Küchen war in letzter Zeit oft nicht zufriedenstellend.\n\nBitte sorgen Sie wieder für einen einwandfreien Service in gewohnter Qualität.\n\nMit freundlichen Grüßen\nFrank Stemmler`}
    ],
    mc:[],
    sample:`Sehr geehrter Herr Stemmler,\n\nbezugnehmend auf Ihre Beschwerde über die Verschlechterung unseres Reinigungsservices möchten wir uns zunächst für die entstandenen Unannehmlichkeiten entschuldigen. Wir können Ihren Ärger gut verstehen.\n\nGrund für die Beanstandung waren leider mehrere Krankheitsfälle bei unserem Reinigungspersonal in den letzten Wochen. Zu den Problemen in den Konferenzräumen kam es dadurch, dass wir nicht rechtzeitig für ausreichend Vertretung sorgen konnten.\n\nWir haben inzwischen zusätzliche Mitarbeiter eingestellt und eine strengere Qualitätskontrolle eingeführt. Wir können Ihnen versichern, dass solche Probleme in Zukunft nicht mehr vorkommen werden.\n\nVielen Dank für Ihr Verständnis und wir hoffen auf eine weiterhin gute Zusammenarbeit.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 注意動詞搭配：ausführen（執行/承包），vorkommen（發生），sich verlassen auf（依賴）。"
  },
  {
    source:"telc online2 S. 16 — Leihwagen",
    summary:{
      boss:["1. Für die Unannehmlichkeiten entschuldigen","2. Preisnachlass von 25% zusagen","3. Erwarten, dass er das Auto mit vollem Tank zurückgibt","4. Mit Mitarbeitern am Frankfurter Flughafen sprechen und herausfinden, wie es zu diesen Fehlern kam"],
      complaint:["1. Auto innen völlig verschmutzt","2. Auto nicht vollgetankt","3. Letztes Mal war ein Bremslicht defekt"],
      gruende:["Interner Kommunikationsfehler / Mitarbeiter hat Fahrzeug nicht ordnungsgemäß vorbereitet"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Friederike Eckstein", an:"[dich]", betreff:"FW Beschwerde Leihwagen"},
       body:`Hallo,\ngerade habe ich die untenstehende E-Mail von Herrn Mattuschek erhalten. Ich verstehe seinen Ärger. Und gleich zwei Fehler hintereinander!\nBitte antworten Sie Herrn Mattuschek, entschuldigen Sie sich für die Unannehmlichkeiten und sagen Sie ihm für dieses Mal einen Preisnachlass in Höhe von 25% zu.\nNatürlich erwarten wir nicht, dass er das Auto mit vollem Tank zurückgibt!\nSprechen Sie bitte auch mit unseren Mitarbeitern am Frankfurter Flughafen und kriegen Sie raus, wie es zu diesen Fehlern gekommen ist.\nDie Firma Schmidt ist ein wichtiger Kunde.\n\nFriederike Eckstein`},
      {role:"kunde",
       meta:{von:"Klaus Mattuschek", an:"Friederike Eckstein", betreff:"Beschwerde Leihwagen"},
       body:`Sehr geehrte Frau Eckstein,\n\nwie immer habe ich für eine Geschäftsreise einen Leihwagen von Ihrer Firma gebucht. Als ich den Wagen heute Morgen am Flughafen Frankfurt in Empfang genommen habe, musste ich leider feststellen, dass das Auto innen völlig verschmutzt und außerdem nicht vollgetankt war.\n\nDa ich in Eile war, musste ich das Fahrzeug in diesem Zustand übernehmen. Das letzte Mal war ein Bremslicht defekt. Ich überlege mir nun, ob ich in Zukunft meine Leihwagen bei einer anderen Firma mieten werde.\n\nJedenfalls werde ich das Auto nicht vollgetankt zurückgeben und erwarte als Entschädigung einen Preisnachlass von Ihnen.\n\nMit freundlichen Grüßen\nKlaus Mattuschek`}
    ],
    mc:[],
    sample:`Sehr geehrter Herr Mattuschek,\n\nbezugnehmend auf Ihre Beschwerde über den Zustand des Leihwagens am Flughafen Frankfurt möchten wir uns herzlich für die entstandenen Unannehmlichkeiten entschuldigen. Zwei solche Fehler hintereinander sind selbstverständlich nicht akzeptabel.\n\nIch habe mich sofort nach den Gründen erkundigt und werde das Gespräch mit unseren Mitarbeitern am Frankfurter Flughafen führen, um herauszufinden, wie es dazu kommen konnte.\n\nAls Entschädigung für die Unannehmlichkeiten bieten wir Ihnen einen Preisnachlass von 25% auf diese Buchung an. Selbstverständlich erwarten wir nicht, dass Sie das Auto mit vollem Tank zurückgeben.\n\nWir hoffen, dass Sie uns in Zukunft noch eine Chance geben werden.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 注意：老闆的指示包含了解決方案的細節（25% Rabatt，kein voller Tank）。必須按照老闆說的寫，不能自己創意發揮補償內容。"
  },
  {
    source:"Klett Mit Erfolg zum DTB B2 S. 24–25 — Fitnesscenter",
    summary:{
      boss:["1. Warum es bei uns diese Probleme gab","2. Etwas anbieten, damit sie nicht mehr so verärgert ist"],
      complaint:["1. Duschen und Toiletten in letzten drei Besuchen nicht geputzt","2. Seifenspender leer, keine Papierhandtücher","3. Problem besteht laut anderen Mitgliedern nur nach 15 Uhr"],
      gruende:["Reinigungspersonal reinigt offenbar nur einmal täglich, nachmittags zu spät"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Helena Nadal (Teamleiterin)", an:"[dich]", betreff:"FW Beschwerde: Schmutzige Duschen in Ihrem Fitnesscenter seit dem 1.04."},
       body:`Hallo,\ndie unten stehende Mail habe ich gerade bekommen. Bitte kümmern Sie sich darum und antworten Sie der Kundin höflich. Ich möchte nicht, dass sie schlecht über uns und das Studio spricht. Und natürlich möchten wir sie auch nicht als Kundin verlieren.\nSchreiben Sie der Kundin ruhig, warum es bei uns diese Probleme gab. Sie können ihr auch etwas anbieten, damit sie nicht mehr so verärgert ist.\n\nHelena Nadal\nTeamleiterin`},
      {role:"kunde",
       meta:{von:"Zara Hafiz", an:"Helena Nadal", betreff:"Beschwerde: Schmutzige Duschen in Ihrem Fitnesscenter seit dem 1.04."},
       body:`Sehr geehrte Frau Nadal,\n\nmeine Kolleginnen und ich besuchen seit mehreren Monaten Ihr Fitnesscenter. Wir nehmen zwei Mal in der Woche um 7:30 Uhr am Kurs Rückenfit teil.\n\nBisher waren wir mit allem sehr zufrieden, aber bei unseren letzten drei Besuchen lagen viele Haare in der Dusche und die Toiletten waren nicht geputzt. Das ist eklig! An den Waschbecken waren außerdem wiederholt die Seifenspender leer und es gab keine Papierhandtücher.\n\nWir haben mit anderen Mitgliedern gesprochen, die uns versicherten, dass nach 15 Uhr wieder alles in Ordnung ist – das ist für uns aber zu spät!\n\nIn einem hochpreisigen Studio wie Ihrem erwarten wir, dass alles stimmt. Wir werden unsere Beiträge für diesen Monat zurückbuchen, wenn Sie diese Probleme nicht schnell beheben!\n\nMit freundlichen Grüßen\nZara Hafiz`}
    ],
    mc:[
      {q:"19. Frau Hafiz und ihre Kolleginnen …", opts:["beschweren sich über mangelnde Hygiene.","bezahlen zu hohe Beträge.","sind mit dem Kurs unzufrieden."], correct:0},
      {q:"20. Das Problem …", opts:["besteht seit mehreren Monaten.","ist auch anderen Mitgliedern bekannt.","tritt vor allem nachmittags auf."], correct:1},
    ],
    sample:`Sehr geehrte Frau Hafiz,\n\nbezugnehmend auf Ihre Beschwerde über den Hygienezustand in unserem Fitnesscenter möchten wir uns herzlich für die entstandenen Unannehmlichkeiten entschuldigen. Wir können Ihren Ärger gut nachvollziehen.\n\nGrund für die Probleme war, dass unser Reinigungspersonal die Umkleide- und Sanitärbereiche bisher nur einmal täglich am Nachmittag gereinigt hat. Da Sie morgens trainieren, wurden diese Bereiche zu diesem Zeitpunkt noch nicht gereinigt.\n\nWir haben unseren Reinigungsplan sofort angepasst und sorgen ab sofort für eine Reinigung auch am frühen Morgen. Als Entgegenkommen für die Unannehmlichkeiten bieten wir Ihnen den Monatsbeitrag für diesen Monat kostenlos an.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 注意：MC答案是 a, b（非 a, c）。問題「tritt vor allem nachmittags auf」是錯的，因為其他會員說下午15點後就好了，表示問題在早上/白天，不是下午。"
  },
  {
    source:"Klett Mit Erfolg zum DTB B2 S. 88–89 — Tagungshaus",
    summary:{
      boss:["1. Warum es bei uns diese Probleme gab","2. Wie wir so etwas in Zukunft vermeiden wollen"],
      complaint:["1. Fortbildung kurzfristig in anderen Raum verlegt ohne Rückfrage","2. Kein Beamer im neuen Raum (obwohl abgesprochen), fehlende Stifte für Whiteboard","3. Zum Mittagessen: nur Kekse statt bestellter Suppe und Salate"],
      gruende:["Kommunikationsfehler intern", "Raumbelegung nicht korrekt koordiniert", "Küchenmitarbeiter hat Bestellung nicht korrekt bearbeitet"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Bernd Hauser (Teamleiter)", an:"[dich]", betreff:"FW Unsere Schulungen in Ihrem Tagungshaus"},
       body:`Hallo,\ndie unten stehende Mail habe ich gerade bekommen. Bitte kümmern Sie sich darum und antworten Sie der Kundin höflich. Die Firma ist seit vielen Jahren unser Kunde und das soll auch so bleiben.\nSie können der Kundin ruhig schreiben, warum es bei uns diese Probleme gab. Ganz wichtig: Bitte schreiben Sie der Kundin auch, wie wir so etwas in Zukunft vermeiden wollen.\n\nBernd Hauser\nTeamleiter`},
      {role:"kunde",
       meta:{von:"Anke Steffens", an:"Bernd Hauser", betreff:"Unsere Schulungen in Ihrem Tagungshaus"},
       body:`Sehr geehrter Herr Hauser,\n\nwie Sie wissen, führen wir unsere Mitarbeiterschulungen und Fortbildungen in Ihrem Tagungshaus durch. Bislang waren wir mit dem Service vor Ort immer sehr zufrieden.\n\nLeider haben einige Mitarbeitende berichtet, dass es in letzter Zeit nicht reibungslos lief. Eine Fortbildung vor zwei Wochen wurde kurzfristig und ohne Rückfrage in einen anderen Raum verlegt, dort hatte die Trainerin dann keinen Beamer, obwohl das so abgesprochen war, und für das Whiteboard fehlten die Stifte. Für eine Mitarbeiterschulung am letzten Samstag hatten wir eine Suppe und Salate als Mittagsimbiss bestellt, aber nur einige Kekse bekommen. Das war natürlich alles nicht gut!\n\nBitte sorgen Sie wieder für die gewohnte Qualität, sonst werden wir uns nach anderen Schulungsräumen umsehen müssen.\n\nMit freundlichen Grüßen\nAnke Steffens`}
    ],
    mc:[
      {q:"19. Frau Steffens …", opts:["beschwert sich über die Raumgröße.","ist mit der Trainerin unzufrieden.","nennt organisatorische Mängel."], correct:2},
      {q:"20. Das Problem …", opts:["beschränkt sich auf Wochenenden.","gibt es an unterschiedlichen Wochentagen.","trat erstmals letzte Woche auf."], correct:1},
    ],
    sample:`Sehr geehrte Frau Steffens,\n\nbezugnehmend auf Ihre Beschwerde über die Probleme bei Ihren letzten Schulungen möchten wir uns herzlich entschuldigen. Wir bedauern sehr, dass es zu diesen Unannehmlichkeiten gekommen ist.\n\nZu den Problemen kam es dadurch, dass bei der kurzfristigen Raumverlegung die technische Ausstattung nicht rechtzeitig überprüft wurde, und dass die Bestellung für das Mittagessen intern nicht korrekt weitergegeben wurde.\n\nWir haben unsere internen Kommunikationsprozesse sofort überarbeitet, um sicherzustellen, dass Raumänderungen immer rechtzeitig mit allen Beteiligten abgestimmt werden und Bestellungen korrekt bearbeitet werden. So können wir Ihnen versichern, dass solche Fehler in Zukunft nicht mehr passieren werden.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 MC答案是 c, b。注意：問題涉及不同日期的不同活動，所以是「an unterschiedlichen Wochentagen」。"
  },
  {
    source:"telc Prüfungstraining S. 42–44 — Telefonanlage / IT",
    summary:{
      boss:["1. Wie es zu den Problemen gekommen ist","2. Welche Lösung angeboten werden kann"],
      complaint:["1. Telefonanlage funktioniert nicht richtig (falsche Weiterleitung)","2. IT-Zugänge wurden nicht eingerichtet (Mitarbeiter erschien nicht zum Termin)"],
      gruende:["Krankheitsfälle bei Mitarbeitern", "Keine Vertretung organisiert"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Claudia Galeano (Teamleiterin)", an:"Guillaume Durand", betreff:"FW: Beschwerde über Ihren Service"},
       body:`Hallo,\nich leite Ihnen die Mail von unserem Kunden weiter. Bitte kümmern Sie sich darum und antworten Sie ihm höflich. Das ist unser erster Auftrag von Herrn Mateusz und wir möchten ihn von unserem guten Service überzeugen. Sie können ihm ruhig schreiben, wie es zu den Problemen gekommen ist. Bitte schreiben Sie ihm auch, welche Lösung wir anbieten können.\n\nVielen Dank.\nClaudia Galeano`},
      {role:"kunde",
       meta:{von:"Pawel Mateusz", an:"Claudia Galeano", betreff:"Beschwerde über Ihren Service"},
       body:`Sehr geehrte Frau Galeano,\n\nwir haben Sie letzte Woche beauftragt, unsere neue Telefonanlage zu installieren und IT-Zugänge einzurichten. Wir sind mit Ihren Leistungen leider gar nicht zufrieden, da es in beiden Bereichen Schwierigkeiten gibt.\n\nErstens funktioniert die Telefonanlage nicht richtig: Die Marketingabteilung bekommt seit gestern gar keine Anrufe mehr und die telefonischen Produktanfragen landen jetzt in der Buchhaltung.\n\nZweitens sollte für die neuen Kollegen ein Zugang zu unserem internen Netzwerk eingerichtet werden. Ihr Mitarbeiter ist jedoch gestern zu dem vereinbarten Termin nicht erschienen.\n\nAufgrund der technischen Probleme können unsere Mitarbeiter nicht effizient arbeiten. Bitte melden Sie sich umgehend.\n\nMit freundlichen Grüßen\nPawel Mateusz`}
    ],
    mc:[],
    studentSamples:[
      {label:"Schreibleistung 1 (Natascha W.)",
       text:`Sehr geehrter Herr Mateusz,\n\nvielen Dank für Ihre E-Mail von gestern. Es tut uns sehr leid, dass Sie mit unseren Leistungen nicht zufrieden sind. Wegen den Krankenmeldungen von unseren Mitarbeitenden, haben wir leider unsere Azubis Ihnen für die Installation von Telefonanlage geschickt. Leider bis jetzt haben wir immer noch nicht gesunde Mitarbeitende in der Firma, deswegen können wir den Termin von gestern nicht erschienen.\nWir bedauern sehr, dass wir Ihnen nicht rechtzeitig informieren konnten.\nUm dieses Problem zu beheben, können wir eine andere Firma sofort kontaktieren, mit der wir schon früher zusammengearbeitet. Bitte teilen Sie uns mit, ob das Ihnen passt. Wir hoffen, Sie weiterhin in unseren Kundenkreis zahlen zu dürfen.\n\nMit freundlichen Grüßen\nNatascha W.`,
       note:"⚠️ 學生作文（參考用）。注意錯誤：Wegen + Dativ（不是Genitiv）；nicht rechtzeitig informieren → nicht rechtzeitig informiert haben。"},
      {label:"Schreibleistung 2 (Antonio P.)",
       text:`Sehr geerter Herr Mateuz,\n\nwir haben ihre Beschwerde E-Mail bekommen. Bitte entschuldigen sie unserer Fehler. Der Grund, dass bei ihnen die Telefonanlage nicht funktioniert, und dass gestern bei ihnen niemand erscheint hat ist, dass zwei unserer Mitarbeitern krank geworden sind, und wir haben viele vereinbarten Termine, auf denen wir erscheinen müssen. Wir sind momentan in eine weniger Zahl, deshalb kam gestern niemand bei ihnen. Wir werden uns darauf kümmern, das solche Fehlern nicht in Zunkunft wieder passieren.\n\nMit Freundlichen Grüßen\nAntonio P.`,
       note:"⚠️ 學生作文（參考用）。注意錯誤：Schreibung（Anrede 大寫）、sich um etwas kümmern（不是 sich darauf）、dass + Verb2（Fehler 後缺解決方案）。"},
    ],
    sample:`Sehr geehrter Herr Mateusz,\n\nbezugnehmend auf Ihre Beschwerde vom heutigen Tag möchten wir uns für die entstandenen Unannehmlichkeiten entschuldigen. Wir können Ihren Ärger gut verstehen.\n\nIch habe mich sofort nach den Gründen erkundigt und dabei Folgendes herausgefunden: Mehrere unserer Mitarbeiter sind kurzfristig erkrankt, sodass wir leider keine erfahrene Fachkraft für die Installation schicken konnten und der Termin für die IT-Zugänge nicht eingehalten werden konnte.\n\nUm das Problem zu beheben, werden wir Ihnen noch heute einen qualifizierten Techniker schicken, der die Telefonanlage korrekt einrichtet. Den Termin für die IT-Zugänge werden wir so schnell wie möglich nachholen. Wir werden Ihnen bis morgen früh einen neuen Termin bestätigen.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 此題涉及兩個問題（電話+IT），回信時需要分別處理兩個解決方案。學生示範信提供了兩種常見錯誤，值得參考。"
  }

  ,{
    source:"v.Trautheim/Pilzner: DTB B2 Lesen und Schreiben Test 8, S. 31",
    summary:{
      boss:["1. Wie es zu diesen Problemen kam","2. Vorschläge, wie wir die Probleme in Zukunft vermeiden wollen","3. 50% Rabatt auf die nächste Veranstaltung geben"],
      complaint:["1. Veranstaltung musste sich wegen technischer Probleme um eine Stunde verschieben","2. Nach einer Stunde funktionierte weder Lautsprecher noch Beamer","3. Licht fiel beim geselligen Zusammensein aus, Kunden mussten den Raum frühzeitig verlassen"],
      gruende:["Technische Störung der Veranstaltungsausstattung (Lautsprecher, Beamer, Beleuchtung)"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Antonia Hilt (Teamleiterin)", an:"[dich]", betreff:"FW: Mängel Konferenzraum"},
       body:`Hallo,

gestern ist die u.a. E-Mail bei mir eingegangen. Es ist sehr ärgerlich, dass einer unserer besten Kunden mit unserem Service nicht zufrieden ist, da unser Service anscheinend nicht richtig funktioniert hat.

Wir müssen daher alles tun, dass wir unseren Stammkunden nicht verlieren. Bitte antworten Sie Frau Vladiskaya höflich und erklären Sie ihr, wie es zu diesen Problemen kam. Machen Sie eventuell Vorschläge, wie wir die Probleme in Zukunft vermeiden wollen. Geben Sie 50 % Rabatt auf die nächste Veranstaltung.

Vielen Dank und liebe Grüße
Antonia Hilt`},
      {role:"kunde",
       meta:{von:"T. Vladiskaya, Geschäftsführerin LAGA GmbH", an:"Antonia Hilt", betreff:"Mängel Konferenzraum"},
       body:`Sehr geehrte Frau Hilt,

wie Ihnen sicherlich bekannt ist, veranstalten wir jedes Jahr auf der Buchmesse in Ihren Messehallen auf Ebene 2, Konferenzraum 17, eine große Tagung für unsere besten Kunden. Bisher waren wir mit dem Service sowie der technischen Ausstattung und dem Catering sehr zufrieden.

Doch leider gab es bei unserer letzten Veranstaltung erhebliche Probleme. Gleich am Anfang wurde uns mitgeteilt, dass die gesamte Veranstaltung sich um eine Stunde verschieben würde, da es technische Probleme mit der Ausrüstung gäbe.

Nach einer Stunde sollte alles behoben sein, jedoch funktionierte weder der Lautsprecher noch der Beamer. Es war eine einzige Katastrophe. Als dann noch das Licht beim geselligen Zusammensein ausfiel, mussten unsere Kunden frühzeitig den Konferenzraum verlassen.

Ich gehe davon aus, dass sich dieser Vorfall nie wieder wiederholt, und wir den von Ihnen gewohnten Service erhalten. Ansonsten sehen wir uns gezwungen, bei Ihrer Konkurrenz einen Konferenzraum für September 20xx zu mieten.

Mit freundlichen Grüßen
Tina Vladiskaya
Geschäftsführerin LAGA GmbH`}
    ],
    mc:[],
    sample:`Sehr geehrte Frau Vladiskaya,

bezugnehmend auf Ihre Beschwerde über die Probleme bei Ihrer letzten Veranstaltung möchten wir uns aufrichtig entschuldigen. Wir bedauern sehr, dass die technische Ausstattung versagt hat und Ihre Gäste den Raum frühzeitig verlassen mussten.

Zu den Problemen kam es dadurch, dass an unserer Veranstaltungstechnik ein technischer Defekt aufgetreten ist, der weder Lautsprecher noch Beamer korrekt funktionieren ließ; die anschließende Beleuchtungsstörung war eine Folge desselben technischen Problems.

Um das Problem zu beheben, lassen wir die gesamte technische Ausstattung der Konferenzräume umfassend überprüfen und werden vor künftigen Veranstaltungen einen zusätzlichen technischen Testlauf durchführen. Als Wiedergutmachung bieten wir Ihnen einen Rabatt von 50% auf Ihre nächste Veranstaltung an.

Wir hoffen, Sie auch in Zukunft als geschätzte Kundin begrüßen zu dürfen.

Mit freundlichen Grüßen
[Name]`,
    note:"💡 老闆明確指定補償為 50%，不可自行更改數字。注意此例同時涉及三個技術故障（Lautsprecher, Beamer, Licht），可以用一句話歸納成同一個原因（同一套設備系統故障）。"
  }
  ,{
    source:"Obsidian 學習筆記 2026-05-28",
    summary:{
      boss:["1. Warum wir diese Probleme hatten erklären","2. Eine kleine Wiedergutmachung anbieten","3. Vermeiden, dass Kundin negative Kommentare abgibt oder kündigt"],
      complaint:["1. Umkleidekabinen nicht sauber, fremde Kleidungsstücke vorhanden","2. Chipstüten-Reste und Flaschen in den Kabinen","3. Erwartung: saubere Kabinen beim nächsten Besuch am Freitag, sonst Kündigung aller Teilnehmerinnen"],
      gruende:["Vorübergehende Umstrukturierung, Vertretung war mit den Reinigungsaufgaben noch nicht vollständig vertraut"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Aida Neumann (Teamleiterin)", an:"[dich]", betreff:"FW: Schmutzige Umzugskabinen in Ihrer Ballettschule"},
       body:`Hallo,\n\ndie untenstehende Mail habe ich gerade bekommen. Bitte kümmern Sie sich sofort darum und antworten Sie der Kundin umgehend und höflich. Wir möchten Sie als Kundin nicht verlieren. Ferner ist es uns sehr wichtig, dass sie über unsere Ballettschule keine negativen Kommentare abgeben wird. Bitte geben Sie an, warum wir diese Probleme hatten. Eine kleine Wiedergutmachung wäre hier auch angebracht.\n\nVielen Dank und freundliche Grüße\nAida Neumann, Teamleiterin`},
      {role:"kunde",
       meta:{von:"Nicole Bier", an:"Aida Neumann", betreff:"Schmutzige Umzugskabinen in der Ballettschule"},
       body:`Sehr geehrte Frau Neumann,\n\nleider muss ich mich in dieser Form an Sie wenden. Meine Freundinnen und ich haben unsere Töchter in Ihrer Ballettschule seit 2 Jahren. Sie nehmen an den Ballettkursen Bambini 6-7 dreimal die Woche teil, am Montag, Mittwoch und Freitag ab 17:30 Uhr.\n\nBisher waren wir mit allem sehr zufrieden, jedoch mussten wir beim letzten Mal feststellen, dass die Umkleidekabinen nicht sauber gemacht wurden und noch andere Kleidungsstücke von Teilnehmern vorhanden waren. Außerdem lagen überall die Reste von Chipstüten und in zwei Kabinen sogar Flaschen herum.\n\nAls wir die Trainerin darauf hinwiesen, wurde uns versichert, dass sie sich darum kümmern wird. Nichtsdestotrotz möchte ich Sie darauf aufmerksam machen, dass in einer stadtbekannten Ballettschule wie der Ihren so etwas nicht vorkommen darf. Wir erwarten, dass Sie unverzüglich diese Probleme lösen, damit wir bei unserem nächsten Besuch am Freitag saubere Kabinen vorfinden werden, sonst werden wir alle sofort kündigen.\n\nMit freundlichen Grüßen\nNicole Bier`}
    ],
    mc:[],
    sample:`Sehr geehrte Frau Bier,\n\nbezugnehmend auf Ihre Beschwerde über die schmutzigen Umkleidekabinen bedanken wir uns für Ihre Mitteilung. Wir entschuldigen uns für die Unannehmlichkeiten, die dadurch entstanden sind.\n\nZu dem Problem mit den Umkleidekabinen kam es dadurch, dass wir kürzlich eine vorübergehende Umstrukturierung vorgenommen haben. Da die Mitarbeitenden mit den neuen Aufgaben noch nicht vollständig vertraut waren, wurden die Umkleidekabinen versehentlich nicht gereinigt.\n\nAls Wiedergutmachung bieten wir Ihnen einen Preisnachlass von 10% auf den nächsten Kurs an. Wir können Ihnen versichern, dass die Umkleidekabinen bis zu Ihrem nächsten Besuch am Freitag gründlich gereinigt sein werden.\n\nWir hoffen, dass Sie uns eine weitere Chance geben, Ihnen einen einwandfreien Service zu bieten.\n\nMit freundlichen Grüßen\ni.A. [Name]`,
    note:"💡 客戶有明確的下次到訪日期（週五），回信務必針對這個具體時間點承諾改善，而非只說「在未來」。"
  }
  ,{
    source:"Mängel Aufenthalt vom 12.10.–15.10.20XX — Konferenzhotel",
    summary:{
      boss:["1. Erklären, warum es Probleme gab","2. Beschreiben, wie wir die Probleme lösen werden"],
      complaint:["1. Geschäftspartner mussten über eine Stunde auf Zimmer warten","2. Beamer in der Konferenztechnik defekt, Reparatur dauerte über eine halbe Stunde","3. Mikrofon funktionierte ebenfalls nicht, weitere halbe Stunde Zeitverlust","4. Erwartung: keine Wiederholung solcher Vorfälle, sonst Wechsel zu anderem Konferenzhotel"],
      gruende:["Technische Defekte an der Konferenzausstattung (Beamer, Mikrofon) und verzögerte Zimmerübergabe"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Herbert Kuhn, Hotelmanager", an:"[dich]", betreff:"FW: Mängel Aufenthalt vom 12.10.–15.10.20XX"},
       body:`Hallo,\n\ngestern ist die unten stehende E-Mail eingegangen. Es ist wirklich ärgerlich, dass unser Service diesmal nicht richtig funktioniert hat. Frau Spieß ist eine wichtige Kundin. Wir sollten daher alles tun, um diese Stammkundin nicht zu verlieren. Bitte antworten Sie Frau Spieß höflich und erklären Sie ihr, warum es Probleme gab. Beschreiben Sie bitte auch, wie wir die Probleme lösen werden.\n\nVielen Dank und viele Grüße\nHerbert Kuhn\nHotelmanager`},
      {role:"kunde",
       meta:{von:"Helga Spieß, Geschäftsführerin CONCEPT IDEA GMBH", an:"Herbert Kuhn", betreff:"Mängel Aufenthalt vom 12.10.–15.10.20XX"},
       body:`Sehr geehrter Herr Kuhn,\n\nwie Sie wissen, veranstalten wir jährlich mehrere Tagungen in Ihrem Konferenzhotel. Bisher waren wir mit dem Service und der technischen Ausstattung der Konferenzräume sehr zufrieden.\n\nDoch bei unserer Veranstaltung im Oktober gab es erhebliche Probleme. Bei der Ankunft mussten unsere Geschäftspartner über eine Stunde warten, bis sie ihre Zimmer beziehen konnten. Als wir verspätet mit unserem Meeting beginnen wollten, funktionierte die Konferenztechnik nicht. Der Beamer war defekt. Es dauerte mehr als eine halbe Stunde, bis ein Techniker kam und das Gerät austauschte. Als unser Geschäftspartner dann mit seiner Präsentation beginnen wollte, funktionierte das Mikrofon nicht. Bis dieses Problem gelöst war, war die nächste halbe Stunde vorbei.\n\nIch gehe davon aus, dass sich vergleichbare Vorfälle nicht wiederholen und wir zukünftig den gewohnten Service erwarten dürfen. Andernfalls werden wir unsere Veranstaltungen in einem anderen Konferenzhotel durchführen.\n\nMit freundlichen Grüßen\nHelga Spieß\nGeschäftsführerin CONCEPT IDEA GMBH`}
    ],
    mc:[],
    sample:`Sehr geehrte Frau Spieß,\n\nbezugnehmend auf Ihre Beschwerde über die Mängel bei Ihrem Aufenthalt vom 12.10. bis 15.10. entschuldigen wir uns aufrichtig für die entstandenen Unannehmlichkeiten. Wir können Ihren Ärger über die verlorene Zeit sehr gut verstehen.\n\nZu der verspäteten Zimmerübergabe kam es dadurch, dass die vorherige Veranstaltung sich verzögert hatte und die Zimmer dadurch später als vorgesehen vorbereitet werden konnten. Der Defekt am Beamer und am Mikrofon war auf einen technischen Fehler in unserer Konferenzausstattung zurückzuführen, der zufällig bei beiden Geräten gleichzeitig auftrat.\n\nUm das Problem zu beheben, werden wir unsere gesamte Konferenztechnik vor jeder Veranstaltung künftig einem Funktionstest unterziehen und zusätzliches Ersatzgerät bereithalten. Außerdem werden wir unsere Zimmerübergaben bei Tagungen besser mit dem vorherigen Veranstaltungsablauf koordinieren.\n\nWir können Ihnen versichern, dass sich solche Vorfälle nicht wiederholen werden, und hoffen, Sie auch in Zukunft als geschätzte Kundin begrüßen zu dürfen.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 此題有三個獨立問題（房間延遲、投影機故障、麥克風故障），建議分別說明原因，但可以歸納成兩類（場地協調延誤 + 設備技術故障），避免條列式重複。"
  }

  ]
},

{id:"fehlende-rechnung", title:"fehlende Rechnung", zh:"帳單遺漏", examples:[]},

{id:"fehlerhafte-rechnung", title:"fehlerhafte Rechnung", zh:"帳單有誤",
  examples:[{
    source:"Prüfungstraining S. 138",
    summary:{
      boss:["1. Wieso es immer wieder zu Problemen in der Rechnungsabteilung kommt","2. Die Angelegenheit sofort in Ordnung bringen","3. Dass Ähnliches in Zukunft nicht mehr passieren wird"],
      complaint:["1. Skontoabzug von 2% (€18,50) wurde nicht berücksichtigt","2. Bereits zum wiederholten Mal Mahnung erhalten","3. Nach telefonischem Kontakt am 20. März immer noch nicht geklärt"],
      gruende:["Interner Fehler in der Rechnungsabteilung, Skontoabzug nicht korrekt verbucht"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Ilona Hurteck (Teamleiterin)", an:"[dich]", betreff:"WG: Rechnung Druckerzubehör"},
       body:`Guten Morgen,\ngerade habe ich die untenstehende E-Mail bekommen. Die Firma Hellmann ist einer unserer besten Kunden – wieso es immer wieder zu Problemen in unserer Rechnungsabteilung kommt – sofort in Ordnung bringen werden und dass Ähnliches in Zukunft nicht mehr passieren wird.\n\nIlona Hurteck`},
      {role:"kunde",
       meta:{von:"Saskia de Groot, Hellmann Events GmbH", an:"Ilona Hurteck, PrinterStar", betreff:"Rechnung Druckerzubehör"},
       body:`Sehr geehrte Damen und Herren,\n\nam 4. März haben wir bei Ihnen drei Trommeln und sechs Austauschpatronen bestellt. Die Rechnung haben wir sofort am 5. März überwiesen und uns dann entsprechend Ihrer Zahlungsbedingungen fristgemäß vom Rechnungsbetrag 2% Skonto abgezogen, sodass wir € 906,50 überwiesen haben.\n\nJetzt haben Sie uns bereits zum wiederholten Mal eine Mahnung über den Skontoabzug von € 18,50 zugeschickt. Nachdem wir am 10. April erneut eine Mahnung erhalten haben, möchte ich Sie noch einmal auffordern, unser Konto auszugleichen.\n\nMit freundlichen Grüßen\nSaskia de Groot`}
    ],
    mc:[
      {q:"19. Frau de Groot …", opts:["möchte eine längere Zahlungsfrist.","beschwert sich über einen nicht berücksichtigten Preisnachlass.","reklamiert zu hohe Preise."], correct:1},
      {q:"20. PrinterStar …", opts:["soll schnellstmöglich Geld zurücküberweisen.","soll mit der Kundin telefonisch Kontakt aufnehmen.","soll seine Forderung stornieren."], correct:2},
    ],
    sample:`Sehr geehrte Frau de Groot,\n\nbezugnehmend auf Ihre E-Mail entschuldigen wir uns für die wiederholten Mahnungen. Grund dafür war ein interner Fehler in unserer Rechnungsabteilung, bei dem der Skontoabzug nicht korrekt verbucht wurde.\n\nWir haben die Angelegenheit sofort korrigiert und Ihr Konto ausgeglichen. Weiter versichern wir Ihnen, dass wir unsere internen Prozesse überarbeitet haben, damit Ähnliches in Zukunft nicht mehr passiert.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 此情境的原因是「帳務部門內部失誤」，用 bei dem … nicht korrekt verbucht wurde 描述具體失誤內容。"
  }

  ,{
    source:"Obsidian 學習筆記 2026-06-17",
    summary:{
      boss:["1. Warum es zu diesem Problem in der Rechnungsabteilung kam","2. Wie der Sachverhalt umgehend geklärt und in Ordnung gebracht wird","3. Versichern, dass so etwas nicht mehr passieren wird"],
      complaint:["1. Zweite ungerechtfertigte Mahnung für nie bestellte Ware erhalten","2. Alle Rechnungen wurden bereits umgehend beglichen, keine offenen Posten","3. Drohung: Anwalt einschalten und Lieferanten wechseln"],
      gruende:["Technisches Problem bei der Kontoverbindung / verzögerte Gutschrift der Bank"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Ali Alzahout (Teamleiter)", an:"[dich]", betreff:"WG: Mahnung Rechnungsnummer 2022-457689"},
       body:`Hallo,

gestern habe ich die unten aufgeführte E-Mail erhalten, die ich Ihnen zur umgehenden Bearbeitung weiterleite. Da die Firma Yilmaz eine unserer besten Kunden ist, ist es äußerst wichtig, dass wir die Beschwerde umgehend bearbeiten und höflichst beantworten.

Lassen Sie den Kunden wissen, warum es zu diesen Problemen in unserer Rechnungsabteilung kam und wie wir den Sachverhalt umgehend klären werden und in Ordnung bringen. Versichern Sie dem Kunden, dass so etwas nicht mehr passieren wird.

Danke
Ali Alzahout, Teamleiter`},
      {role:"kunde",
       meta:{von:"Armin Wattenscheid, Firma Yilmaz", an:"Ali Alzahout", betreff:"Mahnung Rechnungsnummer 2022-457689"},
       body:`Sehr geehrter Herr Alzahout,

heute Morgen haben wir die zweite Mahnung aus Ihrem Hause für Ware erhalten, die wir nie bestellt haben. Es handelt sich hierbei um die Rechnungsnummer 2022-457689. Es muss sich hierbei um ein Missverständnis Ihrerseits handeln.

Alle unsere Rechnungen, die wir von Ihnen erhalten haben, wurden von uns umgehend beglichen und es sind keine offenen Posten vorhanden. Dies ist nun schon das zweite Mal, dass wir eine ungerechtfertigte Mahnung von Ihnen erhalten.

Wir fordern Sie daher umgehend auf, diese Angelegenheit mit Ihrer Buchhaltung zu klären. Ansonsten müssen wir den Sachverhalt unserem Anwalt übergeben und uns einen anderen Zulieferer suchen, auf den man sich verlassen kann.

Wir bitten um sofortige Rückmeldung.

Mit freundlichen Grüßen
Armin Wattenscheid`}
    ],
    mc:[],
    sample:`Sehr geehrter Herr Wattenscheid,

bezugnehmend auf Ihre Beschwerde über die fehlerhafte Mahnung bedanken wir uns für Ihre Mitteilung. Wir entschuldigen uns für die Unannehmlichkeiten, die durch die zweite falsche Mahnung entstanden sind.

Zu dem Problem kam es dadurch, dass bei unserer Kontoverbindung ein technisches Problem aufgetreten ist: Wir erhalten die Zahlungsbestätigung später als üblich von der Bank, sodass das Mahnsystem die Mahnung bereits automatisch verschickt hat, bevor die Bank uns den Betrag bestätigt hatte.

Um das Problem zu beheben, haben wir mit der Bank Kontakt aufgenommen und besprochen, wie wir künftig sicherstellen können, dass Zahlungen rechtzeitig erfasst werden. Gleichzeitig haben wir unsere Buchhaltung gebeten, die betroffene Mahnung sofort zurückzuziehen.

Wir können Ihnen versichern, dass solche Fehler in Zukunft nicht mehr auftreten werden. Wir danken Ihnen für Ihr Verständnis und hoffen, Ihnen weiterhin einen einwandfreien Service anbieten zu können.

Mit freundlichen Grüßen
[Name]`,
    note:"💡 注意：Anrede 應與信末署名性別一致（Armin = 男性，故應用 Herr Wattenscheid）。這題的關鍵詞彙：der Sachverhalt（案情/事實情況）、keine offenen Posten（沒有未結清款項）、ungerechtfertigt（不合理的）。"
  }
  ]
},

{id:"fehlende-lieferung", title:"fehlende Lieferung", zh:"貨品遺漏/不足",
  examples:[{
    source:"Aspekte Beruf B2 S. 115",
    summary:{
      boss:["1. Warum es zu den Problemen kommt","2. Welche Lösung angeboten werden kann"],
      complaint:["1. 50 Bögen Etiketten zu wenig geliefert","2. Briefpapier hat nicht die bestellte Qualität","3. Bereits mehrfach fehlerhafte Lieferungen (zu viel Druckerpapier, falsche Briefumschläge)"],
      gruende:["Fehler bei der Kommissionierung im Lager"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Klaus Wegener (Teamleiter)", an:"[dich]", betreff:"FW: Beschwerde Probleme mit Lieferungen"},
       body:`Hallo,\ndie angehängte Mail bekam ich gestern. Bitte kümmern Sie sich darum und antworten Sie der Kundin höflich. Frau DeLuca ist schon sehr lange unsere Kundin. Erklären Sie ihr, warum es zu den Problemen kommt und welche Lösung wir anbieten können.\n\nKlaus Wegener`},
      {role:"kunde",
       meta:{von:"Carina DeLuca", an:"Klaus Wegener", betreff:"FW: Beschwerde Probleme mit Lieferungen"},
       body:`Sehr geehrter Herr Wegener,

leider muss ich Ihnen mitteilen, dass es bei der letzten Lieferung wieder zu Fehlern gekommen ist. Wir sind schon lange bei Ihnen Kunde und waren immer sehr zufrieden, aber seit ein paar Monaten müssen wir immer wieder bei Ihnen nachhaken. Einmal haben Sie viel zu viel Druckerpapier geschickt, bei der folgenden Lieferung entsprachen die Briefumschläge nicht der Bestellung.

Sie haben immer sehr schnell reagiert und ich weiß, dass natürlich mal ein Fehler passieren kann, aber auch bei Ihrer letzten Lieferung vom 17.03. war wieder etwas nicht in Ordnung: Uns sind 50 Bögen mit Etiketten zu wenig geliefert worden und das Briefpapier hat nicht die bestellte Qualität.

Ich erwarte, dass Sie das umgehend in Ordnung bringen. Sollte es auch künftig zu Problemen mit unserer Bestellung kommen, müssen wir leider eine andere Druckerei beauftragen.

Mit freundlichen Grüßen
Carina DeLuca`}
    ],
    mc:[
      {q:"1. Frau DeLuca …", opts:["beschwert sich über die Qualität des Druckerpapiers.","hat die falschen Umschläge bekommen.","hat weniger Etiketten erhalten als bestellt."], correct:1},
      {q:"2. Die Druckerei von Herrn Wegener …", opts:["hat in letzter Zeit nicht auf Beschwerden reagiert.","hat Ware für den Postversand im Angebot.","nimmt zukünftig keine Aufträge mehr an."], correct:1},
    ],
    sample:`Sehr geehrte Frau DeLuca,\n\nbezugnehmend auf Ihre E-Mail entschuldigen wir uns für die wiederholt fehlerhaften Lieferungen. Grund dafür waren leider Fehler bei der Kommissionierung in unserem Lager.\n\nWir werden Ihnen die fehlenden 50 Bögen Etiketten sowie das Briefpapier in der bestellten Qualität schnellstmöglich nachliefern. Weiter können wir Ihnen versichern, dass wir unsere Lagerprozesse überprüft haben, damit solche Fehler in Zukunft nicht mehr passieren.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡「fehlende Lieferung」是數量不足/品質不符（需要補送）；「fehlerhafte Lieferung」是送錯貨品（需取回替換）。注意區分。"
  }]
},

{id:"fehlerhafte-lieferung", title:"fehlerhafte Lieferung", zh:"送錯貨品",
  examples:[{
    source:"Aspekte Beruf B2 S. 133 / Klett Prüfungstraining",
    summary:{
      boss:["1. Wie es zu den Problemen kommen konnte","2. Welche Lösung angeboten werden kann","3. Eine Wiedergutmachung anbieten, um sie nicht als Kundin zu verlieren"],
      complaint:["1. Falsche Waschbecken-Modelle geliefert (andere als bestellt)","2. Bereits zwei Vormerkungen auf die richtigen Modelle vorhanden","3. Kunden müssen vertröstet werden — wirft kein gutes Licht auf Frau Wenger"],
      gruende:["Versehen im Lager, Modelle vertauscht"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Tim Holzmann (Teamleiter)", an:"[dich]", betreff:"FW: Beschwerde: Mangelhafte Ware"},
       body:`Hallo,
könnten Sie sich bitte um die angehängte Mail kümmern? Frau Wenger von Bade-Traum hat das erste Mal unsere Badezimmer-Produkte bestellt und sich gleich mit diesem Problem gemeldet. Das ist natürlich nicht gut.
Bitte schreiben Sie an Frau Wenger und erklären Sie ihr höflich, wie es zu den Problemen kommen konnte. Eine Wiedergutmachung können wir natürlich auch anbieten, um sie nicht als Kundin zu verlieren.

Danke und beste Grüße
Tim Holzmann
Teamleiter`},
      {role:"kunde",
       meta:{von:"Jutta Wenger, Bade-Traum", an:"Tim Holzmann", betreff:"Beschwerde: Mangelhafte Ware"},
       body:`Sehr geehrter Herr Holzmann,

vor zwei Tagen kam Ihre Lieferung an: je zwei Waschbecken in drei Farben. Leider musste ich feststellen, dass es sich bei den Waschbecken um andere Modelle als bestellt handelt. Ich erwarte die Ware, die ich geordert habe. Da meine Kundinnen und Kunden sehr anspruchsvoll sind, sind die gelieferten Produkte leider nicht akzeptabel. Es gab sogar schon zwei Vormerkungen auf die Modelle, die ich erwartet hatte. Diese Kunden muss ich nun vertrösten, was kein gutes Licht auf mich wirft.

Holen Sie die falschen Waschbecken schnellstmöglich ab und liefern Sie mir die richtigen. Bei Ihren Preisen setze ich einen besseren Service voraus. Ob ich weiter bei Ihnen bestellen werde, hängt auch von einem entsprechenden Angebot Ihrerseits ab.

Mit freundlichen Grüßen
Jutta Wenger`}
    ],
    mc:[
      {q:"1. Frau Wenger beschwert sich, weil …", opts:["die Waschbecken keine gute Qualität haben.","ihre Kunden nicht zufrieden waren.","sie die falsche Ware bekommen hat."], correct:2},
      {q:"2. Frau Wenger …", opts:["erwartet Ersatz für die Waschbecken.","will nicht mehr bei der Firma bestellen.","will weniger für die Lieferung bezahlen."], correct:0},
    ],
    sample:`Betreff: Ihre Reklamation vom 10/05/2026 – Waschbecken

Sehr geehrte Frau Wenger,

bezugnehmend auf Ihre Beschwerde über die fehlerhafte Lieferung bedanken wir uns für Ihre Mitteilung. Als neue Kundin ist uns Ihre Zufriedenheit besonders wichtig, und es tut uns sehr leid, dass Ihr erster Eindruck von uns nicht positiv war. Wir entschuldigen uns für die Unannehmlichkeiten, die dadurch entstanden sind, dass Sie nicht die bestellten Modelle erhalten haben.

Zu den Problemen bei der Lieferung kam es dadurch, dass wir kürzlich ein internes Systemupdate zum Schutz vor Cyberangriffen durchgeführt haben. Da einige Mitarbeiterinnen und Mitarbeiter mit dem neuen System noch nicht vollständig vertraut sind, kam es leider zu einem Eingabefehler.

Um das Problem zu beheben, werden wir die korrekte Ware umgehend versenden und die fehlerhafte Lieferung bei Ihnen abholen. Als Entgegenkommen für die Unannehmlichkeiten bieten wir Ihnen bei einer Folgebestellung einen Rabatt von 10% auf alle unsere Produkte an. Wir können Ihnen versichern, dass solche Fehler in Zukunft nicht mehr auftreten werden, indem wir gezielte Schulungen für alle betroffenen Mitarbeitenden durchführen.

Bei Rückfragen stehen wir Ihnen selbstverständlich zur Verfügung. Wir danken Ihnen für Ihr Verständnis und hoffen auf eine weiterhin gute Zusammenarbeit.

Mit freundlichen Grüßen i.A. YiTing`,
    note:"💡 示範回信（YiTing 撰寫）。注意第一段同時涵蓋引言＋道歉＋說明問題；原因使用「dadurch, dass」句型；解決方案包含取回＋補送＋折扣＋培訓保證四個要素。"
  }

  ,{
    source:"Obsidian 學習筆記 2026-06-15",
    summary:{
      boss:["1. Mit den Zustellern klären, was genau passiert ist","2. Gründe nennen, die zu diesen Problemen führten","3. Erklären, wie wir das Problem in Zukunft lösen werden"],
      complaint:["1. Falsche Fliesen geliefert: Rosa Beta statt der bestellten Rosa Tupin (350 m²)","2. Fliesenleger bereits für Montag bestellt, Termin nicht verschiebbar","3. Korrekte Fliesen werden spätestens bis Montag 08:00 Uhr benötigt"],
      gruende:["Neue Spedition war mit den Lagerabläufen noch nicht vollständig vertraut, Fliesen wurden mit denen anderer Kunden verwechselt"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Lothar Grund (Teamleiter)", an:"[dich]", betreff:"FW: Falsche Lieferung"},
       body:`Hallo,

soeben habe ich die untenstehende E-Mail erhalten. Bitte klären Sie mit den Zustellern, die bei unserem Kunden waren, was genau passiert ist, und schreiben Sie an unseren Kunden höflich eine E-Mail. Nennen Sie ruhig die Gründe, die zu diesen Problemen führten. Vergessen Sie nicht zu erklären, wie wir das Problem in Zukunft lösen werden, damit so etwas nicht mehr passiert.

Danke schon mal und beste Grüße
Lothar Grund, Teamleiter`},
      {role:"kunde",
       meta:{von:"Alessandra Riccetti", an:"Lothar Grund", betreff:"Falsche Lieferung"},
       body:`Sehr geehrter Herr Grund,

gestern haben wir von Ihnen die neuen Granitfliesen erhalten, die bei uns im Eingangsbereich gelegt werden sollten. Wir haben 350 m² von der Fliese Rosa Tupin bestellt.

Leider mussten wir heute Morgen feststellen, dass wir nicht die Fliese Rosa Tupin, sondern Rosa Beta erhalten haben. Sie können sich sicherlich vorstellen, wie bestürzt wir waren, eine falsche Lieferung vorzufinden.

Ein weiteres Problem ist, dass wir die Fliesenleger für Montag bestellt haben und dies nicht rückgängig machen können. Wir wissen, dass die Fliesen aus Spanien kommen und möchten Sie daher bitten, umgehend eine Lösung zu finden. Wir benötigen die Fliesen Rosa Tupin spätestens bis Montagmorgen um 08:00 Uhr.

Bitte haben Sie dafür Verständnis, dass wir auf den o.a. Liefertermin bestehen müssen, da wir ansonsten mit unserer Planung nicht hinkommen.

Mit freundlichen Grüßen
Alessandra Riccetti`}
    ],
    mc:[],
    sample:`Sehr geehrte Frau Riccetti,

bezugnehmend auf Ihre Beschwerde über die fehlerhafte Lieferung bedanken wir uns für Ihre Mitteilung. Wir entschuldigen uns für die Unannehmlichkeiten, die durch die Lieferung der falschen Fliese Rosa Beta anstelle der bestellten Rosa Tupin entstanden sind.

Zu dem Problem kam es dadurch, dass unsere neue Spedition mit unseren Lagerabläufen noch nicht vollständig vertraut war. Dies hatte zur Folge, dass die bestellten Fliesen mit denen anderer Kunden verwechselt wurden.

Um das Problem zu beheben, haben wir mit der Spedition unverzüglich Kontakt aufgenommen. Die Spedition hat uns versichert, dass sie spätestens am Montag um 08:00 Uhr Ihre Fliesen Rosa Tupin zusenden und gleichzeitig das versehentlich zugeschickte Produkt zurücknehmen wird. Ihr Termin mit dem Fliesenleger am Montag wird daher wie geplant stattfinden können.

Wir werden mit der Spedition weiter klären, wie sie die Waren korrekt entnehmen und überprüfen kann, sodass solche Fehler in Zukunft vermieden werden.

Mit freundlichen Grüßen
[Name]`,
    note:"💡 此題截止時間非常具體（週一早上8點），務必在解決方案中明確回應，並說明補送和取回兩個動作。"
  }
  ,{
    source:"Obsidian 學習筆記 2026-05-20",
    summary:{
      boss:["1. Sich entschuldigen","2. Die umgehende Zusendung der richtigen Produkte zusagen","3. Versichern, dass man sich sofort um die Bestellung kümmert","4. Überlegen, was man der Kundin als Entschuldigung anbieten kann"],
      complaint:["1. Falsches Produkt erhalten: Haarspülung statt Shampoo Haaraktiv","2. 15 Packungen Haarfarbe Nr. 21 und 23 von Goldlocke fehlten komplett","3. Drohung: anderer Großhändler, falls Ware nicht morgen eintrifft"],
      gruende:["Mitarbeitende waren mit dem neuen System noch nicht vertraut und haben Aufträge verschiedener Kunden verwechselt"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Frieda Blume", an:"[dich]", betreff:"FW: Falsche Lieferung"},
       body:`Hallo,

ich leite dir eine E-Mail vom Frisörsalon Schnell weiter. Frau Schnell ist zurecht verärgert, weil ihre Lieferung wieder nicht in Ordnung war. Bitte beantworte das Schreiben. Entschuldige dich und sag Frau Schnell die umgehende Zusendung der richtigen Produkte zu. Versichere ihr, dass du dich sofort um die Bestellung kümmerst. Überlege dir bitte, was wir der Kundin als Entschuldigung anbieten können, und teile ihr das mit.

Vielen Dank und Gruß
Frieda`},
      {role:"kunde",
       meta:{von:"Margarete Schnell, Frisörsalon Schnell", an:"Frieda Blume", betreff:"Falsche Lieferung"},
       body:`Sehr geehrte Frau Blume,

leider ist bei unserer Bestellung vergangene Woche wieder etwas schiefgegangen. Zwar kam die Lieferung diesmal pünktlich bei uns an, aber sie war falsch bzw. unvollständig. Statt des bestellten Shampoos „Haaraktiv“ haben wir eine Haarspülung bekommen. Außerdem hatten wir jeweils 15 Packungen der Haarfarben Nr. 21 und 23 von „Goldlocke“ bestellt. Diese waren leider gar nicht in der Lieferung enthalten.

Ich bitte Sie, uns die richtigen Produkte umgehend zukommen zu lassen. Sollte die bestellte Ware nicht morgen bei uns eintreffen, werden wir uns einen anderen Großhändler suchen. Das würden wir sehr bedauern, da wir bis vor Kurzem immer mit der Lieferung und der Qualität Ihrer Produkte zufrieden waren.

Bitte bestätigen Sie den Eingang dieses Schreibens und den Liefertermin schriftlich.

Mit freundlichen Grüßen
Margarete Schnell`}
    ],
    mc:[],
    sample:`Sehr geehrte Frau Schnell,

bezugnehmend auf Ihre Beschwerde über die fehlerhafte Lieferung bedanken wir uns für Ihre Mitteilung und bestätigen hiermit den Eingang Ihres Schreibens. Wir entschuldigen uns für die Unannehmlichkeiten.

Zu der fehlerhaften Lieferung kam es dadurch, dass wir kürzlich ein Systemupdate durchgeführt haben. Da die Mitarbeitenden mit dem neuen System noch nicht vertraut sind, haben sie die Aufträge von Ihnen und anderen Kunden verwechselt.

Um das Problem zu beheben, werden wir die richtigen Produkte umgehend versenden. Wir können Ihnen versichern, dass Sie das Shampoo „Haaraktiv“ sowie die Haarfarben Nr. 21 und 23 von „Goldlocke“ spätestens morgen erhalten werden; die falsch gelieferte Haarspülung können Sie direkt an unseren Lieferanten zurückgeben.

Als Entschädigung bieten wir Ihnen einen Preisnachlass von 15% auf Ihre nächste Bestellung an.

Wir danken Ihnen für Ihr Verständnis.

Mit freundlichen Grüßen
[Name]`,
    note:"💡 客戶要求書面確認收件及交貨日期（den Liefertermin schriftlich bestätigen），這個細節容易被忽略，記得在回信開頭就確認。"
  }
  ]
},

{id:"lieferverzoegerung", title:"Lieferverzögerung", zh:"交貨延遲",
  examples:[{
    source:"Prüfungstraining S. 160",
    summary:{
      boss:["1. Wie es zu den Problemen gekommen ist","2. Wie die genannten Probleme in Zukunft gelöst werden"],
      complaint:["1. Verbindlicher Liefertermin 10. April nicht eingehalten","2. Zweiter Termin 10. Mai ebenfalls überschritten (um 14 Tage)","3. Kein proaktiver Kontakt seitens der Firma bei Problemen"],
      gruende:["Lieferengpässe bei ausländischen Zulieferern"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Verena Glück (Teamleiterin)", an:"[dich]", betreff:"Lieferung Lastenfahrräder Cora XC5"},
       body:`Guten Morgen,\nder Kurierdienst express ist ein neuer Kunde, den wir nicht verlieren dürfen. Bitte bearbeiten Sie die Beschwerde sofort und teilen Sie dem Kunden per E-Mail mit, wie es zu den Problemen gekommen ist und wie wir die genannten Probleme in Zukunft lösen werden.\n\nVerena Glück`},
      {role:"kunde",
       meta:{von:"Mischa Kohlmann, Kurierdienst express", an:"Verena Glück, Fahrradmanufaktur Hanau", betreff:"Lieferung Lastenfahrräder Cora XC5"},
       body:`Sehr geehrte Frau Glück,\n\nam 10. Februar haben wir bei Ihnen fünf Lastenfahrräder Cora XC5 bestellt. In Ihrer Auftragsbestätigung hatten Sie uns als verbindlichen Liefertermin den 10. April angegeben.\n\nDa die Räder am 17. April bei uns immer noch nicht eingetroffen waren, haben wir bei Ihnen per E-Mail nachgefragt. Nachdem Sie nicht geantwortet hatten, versuchten wir, Sie telefonisch zu erreichen. Nach mehreren Versuchen bekamen wir die Information, dass mehrere Bauteile für die Räder aus dem Ausland kämen und es hier größere Lieferengpässe gäbe. Sie hätten aber auch einen Zulieferer im Inland und könnten verbindlich bis zum 10. Mai liefern.\n\nInzwischen ist auch dieser Termin um 14 Tage überschritten, ohne dass Sie sich deswegen mit uns in Verbindung gesetzt haben, und wir haben die Ware immer noch nicht bekommen.\n\nWir bestehen auf umgehender Lieferung und bitten um sofortige Antwort, wie Sie das Problem lösen werden. Sonst müssen wir vom Kauf zurücktreten und uns nach einem neuen Lieferanten umsehen.\n\nMit freundlichen Grüßen\nMischa Kohlmann\nKurierdienst express`}
    ],
    mc:[
      {q:"19. Mischa Kohlmann …", opts:["weist auf eine fehlerhafte Auftragsbestätigung hin.","reklamiert fehlende Bauteile.","beschwert sich über eine Lieferverzögerung."], correct:2},
      {q:"20. In Zukunft …", opts:["wird der Kurierdienst die Geschäftsbeziehungen beenden.","wird der Kurierdienst nur noch Artikel im Inland bestellen.","erwartet der Kurierdienst eine bessere Kommunikation."], correct:2},
    ],
    sample:`Sehr geehrter Herr Kohlmann,\n\nbezugnehmend auf Ihre E-Mail entschuldigen wir uns für die Lieferverzögerung und die schlechte Kommunikation. Grund dafür waren größere Lieferengpässe bei unseren Zulieferern aus dem Ausland.\n\nWir können Ihnen mitteilen, dass die fünf Lastenfahrräder Cora XC5 innerhalb der nächsten Woche geliefert werden. Weiter versichern wir Ihnen, dass wir in Zukunft bei Verzögerungen sofort Kontakt aufnehmen werden.\n\nWir danken Ihnen für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 此情境除了道歉延遲，還需承認「溝通不足」，因為客戶特別提到了這點。"
  }

  ,{
    source:"Obsidian 學習筆記 2026-05-13",
    summary:{
      boss:["1. Warum es bei dem Hochzeitsbuffet Probleme gab","2. Was wir als Ausgleich für die Unannehmlichkeiten vorschlagen"],
      complaint:["1. Buffet kam erst um 13:35 Uhr statt 12:00 Uhr","2. Hochzeitstorte erst um 15 Uhr serviert, alle bereits satt","3. Hohe Anzahlung bereits geleistet, Entgegenkommen beim offenen Betrag erwartet"],
      gruende:["Lieferant musste wegen einer Baustelle einen langen Umweg fahren und kannte die neue Route nicht"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Petra Speichert (Teamleiterin)", an:"[dich]", betreff:"FW: Beschwerde: Hochzeitsbuffet am 20.08."},
       body:`Hallo,

die unten stehende Mail habe ich gerade bekommen. Bitte kümmern Sie sich darum und antworten Sie der Kundin höflich. Ich möchte nicht, dass Frau McEvoy uns eine schlechte Bewertung im Internet gibt. Sie können der Kundin ruhig schreiben, warum es bei dem Hochzeitsbuffet Probleme gab. Ganz wichtig: Bitte schreiben Sie der Kundin auch, was wir ihr als Ausgleich für die Unannehmlichkeiten vorschlagen.

Vielen Dank und mit Grüßen
Petra Speichert, Teamleiterin`},
      {role:"kunde",
       meta:{von:"Donna McEvoy", an:"Petra Speichert", betreff:"Beschwerde: Hochzeitsbuffet am 20.08."},
       body:`Sehr geehrte Frau Speichert,

wir hatten für unsere Hochzeit am 20.08. bei Ihnen das Hochzeitsbuffet Premium (Mittagessen, 25 Personen) bestellt. Das Buffet sollte bis 12 Uhr geliefert und bis 12:30 Uhr aufgebaut sein. Ebenfalls sollten Sie für verschiedene Getränke zum Abschluss des Essens (Kaffee, Espresso etc.) sorgen.

Leider ist alles schiefgegangen: Das Buffet war um 12:35 Uhr noch nicht da und wir konnten erst um halb zwei mit dem Essen beginnen. Als die Hochzeitstorte um 15 Uhr serviert wurde, waren alle noch satt. Sie haben einen Tag, den wir lange im Voraus und mit Liebe geplant hatten, fast verdorben. Wir haben bereits eine hohe Anzahlung geleistet und erwarten jetzt, dass Sie uns mit dem noch offenen Betrag entgegenkommen. Nur eine Entschuldigung reicht nicht aus!

Mit freundlichen Grüßen
Donna McEvoy`}
    ],
    mc:[],
    sample:`Sehr geehrte Frau McEvoy,

bezugnehmend auf Ihre Beschwerde über die Lieferverzögerung des Hochzeitsbuffets bedanken wir uns für Ihre Mitteilung. Wir entschuldigen uns aufrichtig für die Unannehmlichkeiten, die durch die verspätete Lieferung an einem so wichtigen Tag entstanden sind.

Zu dem unpünktlichen Service kam es dadurch, dass unser Lieferant aufgrund einer Baustelle einen langen Umweg fahren musste und mit der neuen Route nicht vertraut war.

Als Ausgleich für die Unannehmlichkeiten bieten wir Ihnen einen Preisnachlass von 15% auf das Hochzeitsbuffet Premium an, das Sie am 20.08. bestellt haben. Wir werden außerdem unsere Fahrer künftig besser über aktuelle Baustellen und Streckenänderungen informieren, damit so etwas nicht mehr vorkommt.

Wir danken Ihnen für Ihr Verständnis.

Mit freundlichen Grüßen
[Name]`,
    note:"💡 注意：題幹用詞是 Ausgleich，回信中也應對應使用同一詞，而非自行換成 Entschädigung，更貼合題目用語。"
  }
  ,{
    source:"telc Prüfungstraining DTB B2, S. 44",
    summary:{
      boss:["1. Erklären, wie es zu der Situation gekommen ist","2. Erklären, wie wir den vereinbarten Termin trotzdem halten können"],
      complaint:["1. Renovierungsarbeiten anfangs zügig, seit Wochen kaum Fortschritte","2. Arbeiter kommen gar nicht oder nur stundenweise","3. Termin (Firmenjubiläum am 6. September) gefährdet: Parkett, Türen/Fenster, Beleuchtung noch nicht fertig","4. Zusage: alle Arbeiten 10 Tage vor dem Termin abgeschlossen"],
      gruende:["Arbeiter werden gleichzeitig auf einer anderen Baustelle gebraucht"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Michael Kögel", an:"Darius Liutikas", betreff:"FW: Renovierungsarbeiten"},
       body:`Hallo,\n\nich habe eben diese Mail von einer Kundin bekommen. Bitte erklären Sie ihr, wie es zu der Situation gekommen ist und wie wir den vereinbarten Termin trotzdem halten können. Antworten Sie bitte sehr höflich. Wir möchten den guten Ruf unserer Firma nicht gefährden.\n\nViele Grüße\nM. Kögel`},
      {role:"kunde",
       meta:{von:"Zofia Mauch", an:"Michael Kögel", betreff:"Renovierungsarbeiten"},
       body:`Sehr geehrter Herr Kögel,\n\nIhre Firma ist für qualitativ hochwertige und termingerechte Leistungen bekannt. Aus diesem Grund haben wir uns auch entschieden, Sie mit der Renovierung unserer Geschäftsräume zu beauftragen. Die Arbeiten sind anfangs gut angelaufen und zügig vorangekommen, aber seit einigen Wochen sehen wir kaum noch Fortschritte. Die Arbeiter kommen entweder gar nicht oder nur stundenweise. Auf unsere Nachfrage hin erklärten sie uns, dass sie auf einer anderen Baustelle gebraucht würden.\n\nUnser 30-jähriges Firmenjubiläum soll am 6. September in den renovierten Räumlichkeiten gefeiert werden. Sie hatten uns zugesichert, dass alle Arbeiten zehn Tage vor diesem Termin abgeschlossen wären. Inzwischen frage ich mich allerdings, ob Sie diese Vereinbarung einhalten können: Das Parkett wurde noch nicht verlegt, die Türen und Fenster sind noch nicht eingebaut und die Beleuchtung wurde nicht einmal geliefert.\n\nBitte teilen Sie mir umgehend mit, wie es mit der Renovierung nun weitergeht.\n\nFreundliche Grüße\nZofia Mauch`}
    ],
    mc:[],
    sample:`Sehr geehrte Frau Mauch,\n\nbezugnehmend auf Ihre Beschwerde über den Stillstand der Renovierungsarbeiten möchten wir uns aufrichtig entschuldigen. Wir können Ihre Sorge um das bevorstehende Firmenjubiläum sehr gut verstehen.\n\nZu der Verzögerung kam es dadurch, dass mehrere unserer Handwerker kurzfristig auf einer anderen, bereits vertraglich zugesicherten Baustelle eingesetzt werden mussten. Dies hätte intern besser koordiniert werden müssen.\n\nUm das Problem zu beheben, werden wir Ihnen ab morgen wieder das vollständige Team zur Verfügung stellen und zusätzlich am Wochenende arbeiten lassen, um den verlorenen Zeitraum aufzuholen. Wir können Ihnen versichern, dass das Parkett, die Türen und Fenster sowie die Beleuchtung spätestens zehn Tage vor dem 6. September fertiggestellt sind, wie ursprünglich vereinbart.\n\nWir danken Ihnen für Ihr Verständnis und Ihre Geduld.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 此題重點在於「明確承諾能否趕上原定期限」，回信務必針對三項未完成工作（Parkett、Türen/Fenster、Beleuchtung）逐一回應，而不能只籠統說「會儘快完成」。"
  }
  ]
},

]; // end SITUATIONS

// ══════════════════════════════════════════════════════════
// WORTFELD: Fehler / Mangel / Defekt / Beschädigung
// ══════════════════════════════════════════════════════════

const WORTFELD = {
  intro: "這四個字都可以翻成「問題/瑕疵/缺陷」，但語意範圍與來源不同。排列順序依照「範圍由廣到窄」：Fehler（最廣義）→ Mangel（廣義，較正式）→ Defekt（指功能損壞）→ Beschädigung（最具體，僅指外力造成的損壞）。",
  columns: [
    {
      key: "fehler",
      noun: "der Fehler",
      adj: "fehlerhaft",
      en: "error / mistake",
      zh: "錯誤、失誤",
      scope: "範圍最廣、最一般化的「錯誤」。可以是人為操作失誤，也可以是系統/流程上的錯誤。來源可以是人，也可以是機器或系統。",
      adjCollocations: [
        "die fehlerhafte Lieferung（錯誤的交貨）",
        "die fehlerhafte Rechnung（錯誤的發票）",
        "ein fehlerhaftes Produkt（有缺陷的產品）",
      ],
      nounCollocations: [
        "einen Fehler machen / begehen（犯錯）",
        "einen Fehler feststellen / beheben / korrigieren（發現/修復/更正錯誤）",
        "es kam zu einem Fehler（發生了一個錯誤）",
      ]
    },
    {
      key: "mangel",
      noun: "der Mangel（複數 die Mängel）",
      adj: "mangelhaft",
      en: "deficiency / flaw",
      zh: "瑕疵、不足",
      scope: "強調「品質不符合標準或期望」，是較正式、較廣義的瑕疵概念，常見於法律/投訴用語（如 Mängelanzeige）。來源可以是設計、製造，或服務品質的不足。與 Fehler 在某些情境下可互換，但 Mangel 語氣更正式。",
      adjCollocations: [
        "die mangelhafte Qualität（不足的品質）",
        "der mangelhafte Service（不足的服務）",
        "mangelhafte Ware（有瑕疵的商品）",
      ],
      nounCollocations: [
        "einen Mangel feststellen / melden / beheben（發現/通報/修復瑕疵）",
        "Mängel aufweisen（顯示瑕疵）",
        "eine Mängelanzeige（瑕疵通報）",
      ]
    },
    {
      key: "defekt",
      noun: "der Defekt",
      adj: "defekt",
      en: "defect / malfunction",
      zh: "故障、缺陷",
      scope: "強調技術性、機械性的故障——東西本身功能失效，無法正常運作，通常是內部零件或系統的問題。來源：產品本身的技術缺陷，導致無法使用。",
      adjCollocations: [
        "das defekte Gerät（故障的設備）",
        "die defekte Maschine（故障的機器）",
        "ein defektes Bauteil（故障的零件）",
      ],
      nounCollocations: [
        "einen Defekt aufweisen / feststellen / beheben（出現/發現/修復故障）",
        "Ein Defekt liegt vor.（存在故障）",
        "an etw. einen Defekt haben（某物有故障）",
      ]
    },
    {
      key: "beschaedigung",
      noun: "die Beschädigung",
      adj: "beschädigt",
      en: "damage",
      zh: "損壞",
      scope: "唯一強調「外力造成」的字，暗示有一個損壞的動作或過程發生過（例如碰撞、刮傷、運送中受損）。來源：外部撞擊、運輸、操作不當等外力因素，而非產品本身原有的缺陷。",
      adjCollocations: [
        "das beschädigte Produkt（受損的產品）",
        "die beschädigte Verpackung（受損的包裝）",
        "ein beschädigtes Bauteil（受損的零件）",
      ],
      nounCollocations: [
        "eine Beschädigung feststellen / melden（發現/通報損壞）",
        "etwas wurde beschädigt（某物被損壞了，被動式）",
        "die Beschädigung der Ware（貨物的損壞）",
      ]
    },
  ],
  comparisonBoxes: [
    {
      title: "⚖️ 比較：Fehler vs. fehlend",
      content: [
        {de:"Fehler（錯誤）強調「做錯了什麼」——東西存在，但是不對的。", zh:""},
        {de:"fehlend（缺少的）強調「該有的東西不存在」——東西根本沒有，或數量不足。", zh:""},
        {de:"例：eine fehlerhafte Lieferung", zh:"送錯貨——東西寄到了，但是錯的。"},
        {de:"例：eine fehlende Lieferung", zh:"缺少的貨——東西根本沒寄到，或數量不足。"},
      ]
    },
    {
      title: "📖 三點關鍵差異說明",
      content: [
        {de:"① 這個字主要在講「商品或服務」上有哪些問題", zh:"Fehler、Mangel、Defekt、Beschädigung 都可以描述商品或服務本身出現的狀況，但側重點不同：Fehler 與 Mangel 較廣泛、可涵蓋服務品質；Defekt 偏向「功能性失效」；Beschädigung 則僅描述外觀或結構上的損傷。"},
        {de:"② 問題的「來源」是什麼", zh:"Fehler 的來源可以是人或系統；Mangel 的來源可以是設計、製造或服務缺失；Defekt 的來源是產品本身內部的技術問題；Beschädigung 的來源必定是外力（運輸、碰撞、操作不當）。"},
        {de:"③ 正式程度與使用情境", zh:"Mangel 較正式，常見於法律投訴語境（Mängelanzeige）；Fehler 最日常、最泛用；Defekt 偏技術／機械語境；Beschädigung 偏物流／運輸語境。"},
      ]
    }
  ],
  relatedWords: "其他類似但不需要獨立成欄的字：die Störung（故障/干擾，常用於技術系統，如 eine technische Störung）；der Schaden（損害，範圍更廣，可指財產損失或人身傷害，常用於保險/法律語境，如 Schadenersatz 賠償金）；die Panne（故障，口語化，常用於車輛或機械臨時故障，如 eine Autopanne）。"
};
