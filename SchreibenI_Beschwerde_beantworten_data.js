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

// ── 3. 解釋原因 ──────────────────────────────────────────
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
    {de:"Wir können Ihnen versichern, dass solche Fehler in Zukunft nicht mehr passieren werden.",
     zh:"我們可以向您保證，此類失誤將來不會再發生。"},
    {de:"Wir können Ihnen zusichern, dass wir in Zukunft bei Verzögerungen sofort Kontakt aufnehmen werden.",
     zh:"我們承諾，今後遇到延誤會立即聯繫您。"},
    {de:"Wir möchten Ihnen versichern, dass wir diese Probleme zukünftig so lösen werden, dass wir unseren neuen Mitarbeitern nicht nur Weiterbildungen anbieten, sondern auch genügend Personal einstellen.",
     zh:"我們向您保證，今後不僅為新員工提供培訓，也會招募足夠人力來解決此類問題。"},
  ]
},

// ── 5. 解決方案與補償 ────────────────────────────────────
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

// ── 📝 General 範例信 ──────────────────────────────────
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
    {de:"neue Azubis ohne ausreichende Erfahrung", zh:"新學徒經驗不足"},
    {de:"häufiger Personalwechsel", zh:"人員頻繁更替"},
    {de:"Darüber hinaus haben wir vor Kurzem drei Azubis eingestellt, die noch nicht über ausreichende Erfahrung verfügen.", zh:"此外，我們最近剛招募了三名學徒，他們的經驗尚不足夠。"},
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
// SITUATIONS（考題資料）
// ══════════════════════════════════════════════════════════

const SITUATIONS = [

// ── Mängelanzeige ──────────────────────────────────────
{id:"mangelanzeige", title:"Mängelanzeige", zh:"瑕疵通知",
  examples:[
  {
    source:"Prüfungstraining S. 38",
    summary:{
      boss:["1. Weshalb es zu diesen Mängeln kommen konnte","2. Dass Sie die Angelegenheit sofort in Ordnung bringen werden","3. Was Sie machen werden, damit solche Fehler in Zukunft nicht mehr passieren"],
      complaint:["1. Vier Kunststofffenster schließen nach Einbau nicht richtig","2. Bereits früher gab es Probleme mit Einbauarbeiten (Schiebetüren)"],
      gruende:["Fehler eines unerfahrenen Mitarbeiters beim Einbau"]
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
    sample:`Sehr geehrter Herr Hoger,\n\nbezugnehmend auf Ihre Beschwerde vom heutigen Tag entschuldigen wir uns für die nicht richtig ausgeführten Einbauarbeiten. Grund für die Mängel waren Fehler eines neuen Mitarbeiters, der die Fenster eingebaut hat.\n\nWir werden Ihnen sofort einen erfahrenen Kollegen schicken, der die Mängel beheben wird. Weiter versichern wir Ihnen, dass wir unsere Qualitätskontrolle verbessert haben, sodass solche Fehler in Zukunft nicht mehr passieren werden.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 避免所有句子都以「Wir」開頭。善用 bezugnehmend auf / Grund für … war … / Weiter versichern wir … 來變化句首。"
  },
  {
    source:"Aspekte Beruf B2 S. 133",
    summary:{
      boss:["1. Wie es zu den Problemen kommen konnte","2. Welche Lösung angeboten werden kann","3. Eine Wiedergutmachung anbieten"],
      complaint:["1. Falsche Waschbecken-Modelle geliefert (andere als bestellt)","2. Bereits zwei Vormerkungen auf die richtigen Modelle vorhanden"],
      gruende:["Versehen im Lager, Modelle vertauscht"]
    },
    emails:[
      {role:"teamleitung",
       meta:{von:"Tim Holzmann (Teamleiter)", an:"[dich]", betreff:"FW: Beschwerde: Mangelhafte Ware"},
       body:`Hallo,\nkönnten Sie sich bitte um die angehängte Mail kümmern? Frau Wenger von Bade-Traum hat das erste Mal unsere Badezimmer-Produkte bestellt und sich gleich mit diesem Problem gemeldet. Bitte schreiben Sie an Frau Wenger und erklären Sie ihr höflich, wie es zu den Problemen kommen konnte. Eine Wiedergutmachung können wir natürlich auch anbieten.\n\nDanke\nTim Holzmann`},
      {role:"kunde",
       meta:{von:"Jutta Wenger, Bade-Traum", an:"Tim Holzmann", betreff:"Beschwerde: Mangelhafte Ware"},
       body:`Sehr geehrter Herr Holzmann,\n\nvor zwei Tagen kam Ihre Lieferung an: je zwei Waschbecken in drei Farben. Leider musste ich feststellen, dass es sich bei den Waschbecken um andere Modelle als bestellt handelt. Da meine Kundinnen und Kunden sehr anspruchsvoll sind, sind die gelieferten Produkte leider nicht akzeptabel.\n\nHolen Sie die falschen Waschbecken schnellstmöglich ab und liefern Sie mir die richtigen.\n\nMit freundlichen Grüßen\nJutta Wenger`}
    ],
    mc:[
      {q:"1. Frau Wenger beschwert sich, weil …", opts:["die Waschbecken keine gute Qualität haben.","ihre Kunden nicht zufrieden waren.","sie die falsche Ware bekommen hat."], correct:2},
      {q:"2. Frau Wenger …", opts:["erwartet Ersatz für die Waschbecken.","will nicht mehr bei der Firma bestellen.","will weniger für die Lieferung bezahlen."], correct:0},
    ],
    sample:`Sehr geehrte Frau Wenger,\n\nbezugnehmend auf Ihre Beschwerde entschuldigen wir uns für die falsch gelieferten Waschbecken. Dies war leider ein Versehen in unserem Lager, bei dem die Modelle vertauscht wurden.\n\nWir werden die falschen Waschbecken schnellstmöglich abholen und Ihnen sofort die richtigen Modelle liefern. Als Entgegenkommen für die Unannehmlichkeiten bieten wir Ihnen bei Ihrer nächsten Bestellung 10% Rabatt an.\n\nVielen Dank für Ihr Verständnis und wir hoffen auf eine weiterhin gute Zusammenarbeit.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 解決方案有兩個動作（取回+補送），用 und 連接成一句，避免重複以 Wir 開頭。"
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
      gruende:["Krankheitsfälle", "Neue Azubis ohne ausreichende Erfahrung"]
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
    sample:`Sehr geehrte Frau Loibl,\n\nbezüglich des schlechten Services und des unhöflichen Personals haben wir Ihre Beschwerde erhalten und möchten uns für die entstandenen Unannehmlichkeiten entschuldigen. Wir können Ihren Ärger gut verstehen.\n\nDer Grund für Ihre Beanstandung waren zahlreiche Krankheitsfälle unserer Mitarbeiter. Darüber hinaus haben wir vor Kurzem drei Azubis eingestellt, die noch nicht über ausreichende Erfahrung verfügen.\n\nWir möchten Ihnen versichern, dass wir diese Probleme zukünftig so lösen werden, dass wir unseren neuen Mitarbeitern nicht nur Weiterbildungen anbieten, sondern auch genügend Personal einstellen, um im Krankheitsfall schnelle und kompetente Vertretung zu finden.\n\nWir hoffen, dass Sie uns in Zukunft eine weitere Chance geben werden, Ihnen eine positive Erfahrung zu bieten.\n\nMit freundlichen Grüßen\ni.A. [Name]`,
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
  }]
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
       body:`Sehr geehrter Herr Wegener,\n\nbei Ihrer letzten Lieferung vom 17.03. war wieder etwas nicht in Ordnung: Uns sind 50 Bögen mit Etiketten zu wenig geliefert worden und das Briefpapier hat nicht die bestellte Qualität.\n\nIch erwarte, dass Sie das umgehend in Ordnung bringen.\n\nMit freundlichen Grüßen\nCarina DeLuca`}
    ],
    mc:[
      {q:"1. Frau DeLuca …", opts:["beschwert sich über die Qualität des Druckerpapiers.","hat die falschen Umschläge bekommen.","hat weniger Etiketten erhalten als bestellt."], correct:1},
      {q:"2. Die Druckerei von Herrn Wegener …", opts:["hat in letzter Zeit nicht auf Beschwerden reagiert.","hat Ware für den Postversand im Angebot.","nimmt zukünftig keine Aufträge mehr an."], correct:1},
    ],
    sample:`Sehr geehrte Frau DeLuca,\n\nbezugnehmend auf Ihre E-Mail entschuldigen wir uns für die wiederholt fehlerhaften Lieferungen. Grund dafür waren leider Fehler bei der Kommissionierung in unserem Lager.\n\nWir werden Ihnen die fehlenden 50 Bögen Etiketten sowie das Briefpapier in der bestellten Qualität schnellstmöglich nachliefern. Weiter können wir Ihnen versichern, dass wir unsere Lagerprozesse überprüft haben, damit solche Fehler in Zukunft nicht mehr passieren.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡「fehlende Lieferung」是數量不足/品質不符（需要補送）；「fehlerhafte Lieferung」是送錯貨品（需取回替換）。注意區分。"
  }]
},

{id:"fehlerhafte-lieferung", title:"fehlerhafte Lieferung", zh:"送錯貨品", examples:[]},

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
       body:`Sehr geehrte Frau Glück,\n\nam 10. Februar haben wir bei Ihnen fünf Lastenfahrräder Cora XC5 bestellt. In Ihrer Auftragsbestätigung hatten Sie uns als verbindlichen Liefertermin den 10. April angegeben.\n\nInzwischen ist auch der zweite Termin um 14 Tage überschritten, ohne dass Sie sich mit uns in Verbindung gesetzt haben. Wieso melden Sie sich nie bei Problemen?\n\nWir bestehen auf umgehender Lieferung. Sonst müssen wir vom Kauf zurücktreten.\n\nMit freundlichen Grüßen\nMischa Kohlmann`}
    ],
    mc:[
      {q:"19. Mischa Kohlmann …", opts:["weist auf eine fehlerhafte Auftragsbestätigung hin.","reklamiert fehlende Bauteile.","beschwert sich über eine Lieferverzögerung."], correct:2},
      {q:"20. In Zukunft …", opts:["wird der Kurierdienst die Geschäftsbeziehungen beenden.","wird der Kurierdienst nur noch Artikel im Inland bestellen.","erwartet der Kurierdienst eine bessere Kommunikation."], correct:2},
    ],
    sample:`Sehr geehrter Herr Kohlmann,\n\nbezugnehmend auf Ihre E-Mail entschuldigen wir uns für die Lieferverzögerung und die schlechte Kommunikation. Grund dafür waren größere Lieferengpässe bei unseren Zulieferern aus dem Ausland.\n\nWir können Ihnen mitteilen, dass die fünf Lastenfahrräder Cora XC5 innerhalb der nächsten Woche geliefert werden. Weiter versichern wir Ihnen, dass wir in Zukunft bei Verzögerungen sofort Kontakt aufnehmen werden.\n\nWir danken Ihnen für Ihr Verständnis.\n\nMit freundlichen Grüßen\n[Name]`,
    note:"💡 此情境除了道歉延遲，還需承認「溝通不足」，因為客戶特別提到了這點。"
  }]
},

]; // end SITUATIONS
