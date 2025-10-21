import type { Karte } from "@/types/question";

export const fragen: Karte[] = [
  {
    id: 1,
    frageDE:
      "Was ist der Unterschied zwischen den Begriffen Datenschutz und Datensicherheit?",
    antwortDE:
      "Beim Datenschutz geht es um den Schutz personenbezogener Daten von natürlichen Personen. Datenschutz zielt darauf ab, die Privatsphäre der Menschen zu schützen und Missbrauch von persönlichen Daten zu verhindern. Gesetze und Vorschriften, wie die Europäische Datenschutz-Grundverordnung (DSGVO), definieren, was im Datenschutz gilt und wie Unternehmen und Organisationen personenbezogene Daten behandeln müssen.\nDer Bereich der Datensicherheit umfasst den Schutz von Daten gegen Verlust, Manipulation, Beschädigung oder unautorisierten Zugriff, unabhängig davon, ob diese Daten einen Personenbezug aufweisen oder nicht.",
    frageTR:
      "Datenschutz (veri koruma) ve Datensicherheit (veri güvenliği) kavramları arasındaki fark nedir?",
    antwortTR:
      "Datenschutz (veri koruma), gerçek kişilere ait kişisel verilerin korunmasıyla ilgilidir. Veri korumanın amacı, bireylerin mahremiyetini korumak ve kişisel verilerin kötüye kullanılmasını önlemektir. Avrupa Genel Veri Koruma Tüzüğü (DSGVO - Datenschutz-Grundverordnung) gibi yasalar ve düzenlemeler, veri korumasının kapsamını tanımlar ve işletmelerin ile kuruluşların kişisel verileri nasıl işlemesi gerektiğini belirler.\nDatensicherheit (veri güvenliği) alanı ise, verilerin kişisel olup olmamasına bakılmaksızın, bu verileri kaybolmaya, manipülasyona, hasara veya yetkisiz erişime karşı korumayı kapsar.",
  },
  {
    id: 2,
    frageDE: "Welche Betroffenenrechte gibt es laut DSGVO?",
    antwortDE:
      "Die DSGVO nennt die folgenden Betroffenenrechte:\n- Recht auf Information\n- Recht auf Auskunft\n- Recht auf Berichtigung\n- Recht auf Löschung\n- Recht auf Einschränkung der Verarbeitung\n- Recht auf Datenübertragbarkeit\n- Recht auf Widerspruch",
    frageTR:
      "DSGVO’ya (Genel Veri Koruma Tüzüğü’ne) göre ilgili kişilerin hangi hakları vardır?",
    antwortTR:
      "DSGVO aşağıdaki ilgili kişi haklarını belirtir:\n- Bilgilendirilme hakkı (Recht auf Information)\n- Erişim hakkı (Recht auf Auskunft)\n- Düzeltme hakkı (Recht auf Berichtigung)\n- Silme hakkı (Recht auf Löschung)\n- İşlemenin kısıtlanması hakkı (Recht auf Einschränkung der Verarbeitung)\n- Veri taşınabilirliği hakkı (Recht auf Datenübertragbarkeit)\n- İtiraz hakkı (Recht auf Widerspruch)",
  },
  {
    id: 3,
    frageDE:
      "Das Datenschutzrecht basiert auf dem Verbotsprinzip mit Erlaubnisvorbehalt. Erklären Sie dieses Grundprinzip.",
    antwortDE:
      "Jegliche Erhebung, Verarbeitung und Nutzung von personenbezogenen Daten ist grundsätzlich verboten, außer die Einwilligung des Betroffenen liegt vor oder eine gesetzliche Regelung ist in Kraft.",
    frageTR:
      "Veri koruma hukuku, ‘yasak ilkesi ve izin istisnası’ (Verbotsprinzip mit Erlaubnisvorbehalt) üzerine kuruludur. Bu temel ilkeyi açıklayınız.",
    antwortTR:
      "Kişisel verilerin toplanması, işlenmesi ve kullanılması prensip olarak yasaktır; yalnızca ilgili kişinin açık rızası varsa veya yasal bir düzenleme mevcutsa bu işleme yapılabilir.",
  },
  {
    id: 4,
    frageDE:
      "Erläutern Sie den Zusammenhang zwischen dem Prinzip der Zweckbindung, dem Prinzip der Datenminimierung und Speicherbegrenzung im Datenschutz.",
    antwortDE:
      "Das Grundprinzip der Zweckbindung besagt, dass personenbezogene Daten nur für den Zweck verwendet werden dürfen, für den sie erhoben worden sind. Eine Verarbeitung von personenbezogenen Daten zu anderen Zwecken ist unzulässig. Hierbei dürfen nur die Daten erfasst werden, welche auch wirklich für den genannten Zweck benötigt werden. Das Ziel des Prinzips der Datenminimierung und Speicherbegrenzung ist es, möglichst wenig personenbezogene Daten zu verarbeiten. Wenn die personenbezogenen Daten für den Zweck, für den sie erhoben wurden, nicht mehr notwendig sind, müssen diese gelöscht werden.",
    frageTR:
      "Veri korumada amaçla sınırlılık ilkesi (Prinzip der Zweckbindung), veri minimizasyonu (Datenminimierung) ve saklama süresi sınırı (Speicherbegrenzung) arasındaki ilişkiyi açıklayınız.",
    antwortTR:
      "Amaçla sınırlılık ilkesi, kişisel verilerin yalnızca toplandıkları amaç doğrultusunda kullanılabileceğini belirtir. Kişisel verilerin başka amaçlar için işlenmesi yasaktır. Bu kapsamda yalnızca belirtilen amacın gerçekleştirilmesi için gerçekten gerekli olan veriler toplanmalıdır.\nVeri minimizasyonu ve saklama süresi sınırı ilkelerinin amacı, mümkün olduğunca az kişisel verinin işlenmesidir. Kişisel veriler, toplandıkları amacın yerine getirilmesi için artık gerekli olmadığında silinmelidir.",
  },
  {
    id: 5,
    frageDE:
      "Erklären Sie den Grundsatz der Transparenz und den Grundsatz der Richtigkeit im Datenschutz.",
    antwortDE:
      "Die Prinzipien der Transparenz und Richtigkeit spielen eine wichtige Rolle bei der Einhaltung der Datenschutzgesetze und der Verarbeitung personenbezogener Daten.\nTransparenz bezieht sich darauf, dass Organisationen jederzeit offen und klar darüber informieren müssen, welche personenbezogene Daten durch wen und zu welchen Zwecken verarbeitet werden und wurden.\nDas Prinzip der Richtigkeit bedeutet, dass personenbezogene Daten korrekt sein sollten. Organisationen sind dafür verantwortlich sicherzustellen, dass die von ihnen verarbeiteten Daten richtig sind. Personen haben das Recht, ungenaue oder veraltete Daten korrigieren zu lassen.",
    frageTR:
      "Veri korumada şeffaflık ilkesi (Transparenz) ve doğruluk ilkesi (Richtigkeit) nedir, açıklayınız.",
    antwortTR:
      "Şeffaflık ve doğruluk ilkeleri, veri koruma yasalarına uyum ve kişisel verilerin işlenmesi açısından önemli bir rol oynar.\nŞeffaflık ilkesi, kurumların her zaman hangi kişisel verilerin kim tarafından ve hangi amaçlarla işlendiği konusunda açık ve net bilgi vermesini gerektirir.\nDoğruluk ilkesi, kişisel verilerin doğru olmasını öngörür. Kurumlar, işledikleri verilerin doğruluğunu sağlamakla yükümlüdür. İlgili kişiler, yanlış veya güncelliğini yitirmiş verilerin düzeltilmesini talep etme hakkına sahiptir.",
  },
  {
    id: 6,
    frageDE:
      "Welche besonderen Kategorien personenbezogener Daten werden gemäß der Datenschutz-Grundverordnung (DSGVO) definiert?",
    antwortDE:
      "Die DSGVO unterscheidet zwischen „personenbezogenen Daten“ und „besonderen Kategorien personenbezogener Daten“. Zu den besonderen Kategorien personenbezogener Daten gehören Daten, die folgende Informationen enthalten:\n- Rassische oder ethnische Herkunft\n- Politische Meinungen\n- Religiöse oder philosophische Überzeugungen\n- Gewerkschaftszugehörigkeit\n- Genetische Daten\n- Biometrische Daten\n- Gesundheitsdaten\n- Daten zur sexuellen Orientierung\nDiese besonderen Kategorien personenbezogener Daten sind besonders schützenswert, da ihre Verarbeitung ein höheres Risiko für die Grundrechte und Freiheiten der betroffenen Personen darstellen könnte.",
    frageTR:
      "DSGVO’ya göre hangi özel nitelikli kişisel veri kategorileri tanımlanmıştır?",
    antwortTR:
      "DSGVO, ‘kişisel veriler’ (personenbezogene Daten) ile ‘özel nitelikli kişisel veriler’ (besondere Kategorien personenbezogener Daten) arasında ayrım yapar. Özel nitelikli kişisel veriler aşağıdaki bilgileri içeren verilerdir:\n- Irksal veya etnik köken\n- Siyasi görüşler\n- Dini veya felsefi inançlar\n- Sendika üyeliği\n- Genetik veriler\n- Biyometrik veriler\n- Sağlık verileri\n- Cinsel yönelimle ilgili veriler\nBu tür özel nitelikli kişisel veriler, temel haklar ve özgürlükler açısından daha yüksek risk oluşturabileceğinden, özellikle korunması gereken verilerdir.",
  },
  {
    id: 7,
    frageDE: "Wer muss bei einer Datenschutzverletzung informiert werden?",
    antwortDE:
      "Bei einer Datenschutzverletzung müssen zwei Hauptparteien informiert werden:\n1. Die Datenschutzbehörde: Innerhalb von 72 Stunden nach Feststellung der Verletzung.\n2. Betroffene Einzelpersonen: Wenn die Verletzung ein hohes Risiko für ihre Rechte und Freiheiten darstellt.",
    frageTR: "Bir veri ihlali durumunda kimlerin bilgilendirilmesi gerekir?",
    antwortTR:
      "Bir veri ihlali durumunda iki ana taraf bilgilendirilmelidir:\n1. Veri koruma otoritesi (Datenschutzbehörde): İhlalin tespit edilmesinden itibaren 72 saat içinde bilgilendirilmelidir.\n2. İlgili kişiler (Betroffene Einzelpersonen): İhlal, onların hak ve özgürlükleri için yüksek bir risk oluşturuyorsa, bilgilendirilmelidir.",
  },
  {
    id: 8,
    frageDE:
      "Was sind die Hauptaufgaben und Verantwortlichkeiten von Datenschutzbeauftragten?",
    antwortDE:
      "Datenschutzbeauftragte beraten das Unternehmen hinsichtlich der Einhaltung von Datenschutzgesetzen und -richtlinien. Sie überwachen die Einhaltung dieser Regeln innerhalb des Unternehmens. Sie sind die Schnittstelle zu Datenschutzaufsichtsbehörden und bearbeiten Anfragen und Beschwerden von Betroffenen in Bezug auf ihre Datenschutzrechte. Zudem beraten sie bei Datenschutzfolgenabschätzungen.",
    frageTR:
      "Veri koruma görevlilerinin (Datenschutzbeauftragte) başlıca görev ve sorumlulukları nelerdir?",
    antwortTR:
      "Veri koruma görevlileri, işletmeye veri koruma yasalarına ve politikalarına uyum konusunda danışmanlık yapar. Şirket içinde bu kuralların uygulanmasını ve denetlenmesini sağlarlar. Veri koruma denetim makamlarıyla (Datenschutzaufsichtsbehörden) iletişim kurar, ilgili kişilerin veri koruma haklarına ilişkin taleplerini ve şikayetlerini değerlendirirler. Ayrıca, veri koruma etki değerlendirmelerinde (Datenschutzfolgenabschätzungen) danışmanlık yaparlar.",
  },
  {
    id: 9,
    frageDE:
      "Die Ziele der Datensicherheit sind Vertraulichkeit, Integrität, Verfügbarkeit und Authentizität. Erläutern Sie diese 4 Begriffe.",
    antwortDE:
      "Vertraulichkeit: Daten und Systeme dürfen nur berechtigten Personen zugänglich sein.\nIntegrität: Daten müssen immer korrekt sein und dürfen nicht unbemerkt verändert werden können.\nVerfügbarkeit: Daten und IT-Systeme müssen zur Verfügung stehen, um von autorisierten Personen genutzt werden zu können.\nAuthentizität: Die Echtheit und Vertrauenswürdigkeit von Daten müssen gewährleistet sein.",
    frageTR:
      "Veri güvenliğinin (Datensicherheit) hedefleri gizlilik (Vertraulichkeit), bütünlük (Integrität), erişilebilirlik (Verfügbarkeit) ve kimlik doğruluğu (Authentizität)’dur. Bu dört kavramı açıklayınız.",
    antwortTR:
      "Gizlilik (Vertraulichkeit): Veriler ve sistemler yalnızca yetkili kişilerin erişimine açık olmalıdır.\nBütünlük (Integrität): Veriler her zaman doğru olmalı ve izinsiz olarak değiştirilememelidir.\nErişilebilirlik (Verfügbarkeit): Veriler ve BT sistemleri, yetkili kişiler tarafından kullanılabilir durumda olmalıdır.\nKimlik doğruluğu (Authentizität): Verilerin doğruluğu ve güvenilirliği garanti altına alınmalıdır.",
  },
  {
    id: 10,
    frageDE: "Nennen Sie drei Aufgaben von IT-Sicherheitsbeauftragten.",
    antwortDE:
      "Zu den Aufgaben von IT-Sicherheitsbeauftragten gehören:\n- Erstellung von Richtlinien zur Informationssicherheit\n- Praktische Umsetzung von Maßnahmen der IT-Sicherheit\n- Organisation von Schulungen und Trainings\n- Bearbeitung von IT-Sicherheitsvorfällen\n- Dokumentation und Überwachung der Sicherheitsmaßnahmen\n- Ansprechpartner im Bereich IT-Sicherheit für Mitarbeitende und Unternehmensleitung",
    frageTR:
      "BT güvenlik görevlilerinin (IT-Sicherheitsbeauftragte) üç görevini belirtiniz.",
    antwortTR:
      "BT güvenlik görevlilerinin görevleri şunlardır:\n- Bilgi güvenliği (Informationssicherheit) ile ilgili politikaların oluşturulması\n- BT güvenliği (IT-Sicherheit) önlemlerinin pratikte uygulanması\n- Eğitimlerin ve seminerlerin (Schulungen und Trainings) organize edilmesi\n- BT güvenliği olaylarının incelenmesi ve yönetilmesi\n- Güvenlik önlemlerinin belgelenmesi ve izlenmesi\n- Çalışanlar ve şirket yönetimi için BT güvenliği alanında danışmanlık sağlanması",
  },
  {
    id: 11,
    frageDE:
      "Welche gesetzlichen Bestimmungen regeln in der Bundesrepublik Deutschland den Umgang mit personenbezogenen Daten?",
    antwortDE:
      "Die Datenschutz-Grundverordnung (DSGVO) ist eine europaweit gültige Verordnung, welche die Belange des Datenschutzes für alle Mitgliedsstaaten der Europäischen Union regelt.\nDas Bundesdatenschutzgesetz (BDSG-neu) ergänzt die Vorgaben der DSGVO, bzw. konkretisiert die dortigen Regelungen. Beide Vorschriften sind gemeinsam gültig und müssen umgesetzt werden. Hierbei ist zu beachten, dass die DSGVO Anwendungsvorrang vor dem BDSG hat.",
    frageTR:
      "Almanya Federal Cumhuriyeti’nde kişisel verilerin işlenmesini hangi yasal düzenlemeler belirler?",
    antwortTR:
      "Genel Veri Koruma Tüzüğü (DSGVO - Datenschutz-Grundverordnung), Avrupa Birliği üyesi tüm ülkeler için veri koruma konularını düzenleyen, Avrupa genelinde geçerli bir yönetmeliktir.\nFederal Veri Koruma Yasası (BDSG-neu - Bundesdatenschutzgesetz) ise DSGVO’nun hükümlerini tamamlar veya oradaki düzenlemeleri somutlaştırır. Her iki düzenleme birlikte geçerlidir ve uygulanmak zorundadır. Burada dikkat edilmesi gereken husus, DSGVO’nun BDSG’ye göre öncelikli uygulanma hakkına (Anwendungsvorrang) sahip olduğudur.",
  },
  {
    id: 12,
    frageDE:
      "Womit beschäftigen sich die Standards ISO 27001 und BSI IT-Grundschutz?",
    antwortDE:
      "Die ISO 27001 und der BSI IT-Grundschutz sind Standards im Bereich der Informationssicherheit. Sie geben u. a. Empfehlungen und Regeln für den Aufbau und die Weiterentwicklung eines Informationssicherheitsmanagementsystems (ISMS).\nHierbei ist die ISO 27001 ein weit verbreiteter internationaler Standard, welcher weltweit für Unternehmen jeglicher Größe anwendbar ist.\nDer BSI IT-Grundschutz ist ein nationaler deutscher Standard. Er ist sehr gut geeignet für die Anwendung in Behörden und Unternehmen aus kritischen Bereichen (KRITIS).",
    frageTR:
      "ISO 27001 ve BSI IT-Grundschutz standartları hangi konularla ilgilenir?",
    antwortTR:
      "ISO 27001 ve BSI IT-Grundschutz, bilgi güvenliği (Informationssicherheit) alanındaki standartlardır. Her ikisi de bir bilgi güvenliği yönetim sistemi (ISMS - Informationssicherheitsmanagementsystem) kurma ve geliştirme konusunda tavsiyeler ve kurallar sunar.\nISO 27001, dünya çapında yaygın olarak kullanılan uluslararası bir standarttır ve her büyüklükteki işletme için uygulanabilir.\nBSI IT-Grundschutz ise Almanya’ya özgü ulusal bir standarttır. Özellikle kamu kurumları ve kritik sektörlerdeki (KRITIS) şirketler için oldukça uygundur.",
  },
  {
    id: 13,
    frageDE:
      "Wie werden Schutzbedarfskategorien wie „normal“, „hoch“ und „sehr hoch“ verwendet, um den Sicherheitsbedarf von Informationen, Systemen oder Infrastrukturen einzuschätzen?",
    antwortDE:
      "Die Schutzbedarfskategorien wie „normal“, „hoch“ und „sehr hoch“ helfen dabei, den Sicherheitsbedarf von Informationen oder Systemen zu bestimmen.\n- „Normal“: Begrenzte und überschaubare Schadensauswirkung bei einem Sicherheitsvorfall\n- „Hoch“: Ein Sicherheitsvorfall würde zu erheblichen Schäden führen oder könnte die Existenz der Organisation bedrohen\n- „Sehr hoch“: Ein Sicherheitsvorfall würde zu katastrophalen Schäden führen oder existentiell bedrohlich sein\nDiese Kategorisierung ermöglicht es, angemessene Sicherheitsmaßnahmen zu implementieren, basierend auf dem Schutzbedarf.",
    frageTR:
      "Bilgi, sistem veya altyapıların güvenlik gereksinimini değerlendirmek için ‘normal’, ‘hoch’ (yüksek) ve ‘sehr hoch’ (çok yüksek) gibi koruma düzeyleri nasıl kullanılır?",
    antwortTR:
      "‘Normal’, ‘hoch’ (yüksek) ve ‘sehr hoch’ (çok yüksek) gibi koruma düzeyleri, bilgi veya sistemlerin güvenlik gereksinimini belirlemeye yardımcı olur.\n- ‘Normal’: Bir güvenlik olayında sınırlı ve yönetilebilir düzeyde zarar oluşabilir.\n- ‘Hoch’: Bir güvenlik olayı ciddi zararlara yol açabilir veya kuruluşun varlığını tehdit edebilir.\n- ‘Sehr hoch’: Bir güvenlik olayı felaket boyutunda zarar verebilir veya kuruluş için varoluşsal bir tehdit oluşturabilir.\nBu sınıflandırma, koruma gereksinimine göre uygun güvenlik önlemlerinin uygulanmasını sağlar.",
  },
  {
    id: 14,
    frageDE:
      "Nennen Sie im Zusammenhang mit dem Thema Datenschutz jeweils drei Beispiele für geeignete technische und organisatorische Maßnahmen (TOM).",
    antwortDE:
      "TOMs sind technische und organisatorische Maßnahmen, welche die Sicherheit der Verarbeitung von personenbezogenen Daten gewährleisten sollen.\n- Verfahren zur Durchsetzung von Komplexitätsanforderungen von Passwörtern\n- Anonymisierung und Pseudonymisierung von personenbezogenen Daten\n- Verschlüsselung von Datenträgern und Datenübertragungen\n- Datensicherung\n- Bauliche Absicherung von kritischen Bereichen\n- Zugangs- und Zutrittskontrolle\n- Alarmanlagen\n- Richtlinien für die Nutzung der IT, des Internets oder mobiler Geräte\n- Verfahren zur datenschutzkonformen Entsorgung von Datenträgern\n- Verpflichtungserklärung auf das Datengeheimnis u.a.",
    frageTR:
      "Veri koruma (Datenschutz) kapsamında uygun teknik ve organizasyonel önlemlere (TOM - Technische und organisatorische Maßnahmen) üçer örnek veriniz.",
    antwortTR:
      "TOM (teknik ve organizasyonel önlemler), kişisel verilerin işlenmesinin güvenliğini sağlamak için alınan önlemlerdir. Örnekler:\n- Parola karmaşıklığı gereksinimlerini uygulamaya yönelik prosedürler\n- Kişisel verilerin anonimleştirilmesi ve takma adla (pseudonymisiert) işlenmesi\n- Veri taşıyıcılarının ve veri iletimlerinin şifrelenmesi\n- Veri yedekleme (Datensicherung)\n- Kritik alanların fiziksel güvenliğinin sağlanması\n- Giriş (Zugang) ve erişim (Zutritt) kontrolleri\n- Alarm sistemleri\n- BT, internet veya mobil cihazların kullanımına ilişkin politikalar\n- Veri taşıyıcılarının veri koruma yasalarına uygun şekilde imha edilmesi\n- Veri gizliliği taahhütnamesi (Verpflichtungserklärung auf das Datengeheimnis)",
  },
  {
    id: 15,
    frageDE:
      "Erklären Sie was in der DSGVO unter dem Ausdruck „Stand der Technik“ zu verstehen ist.",
    antwortDE:
      "Gemäß Artikel 32 der DSGVO müssen Datenverantwortliche und Datenverarbeitende unter Berücksichtigung des Stands der Technik geeignete technische und organisatorische Maßnahmen treffen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.\nDies bedeutet, dass Unternehmen und Organisationen, die personenbezogene Daten verarbeiten, dafür sorgen müssen, dass sie die neuesten und effektivsten Sicherheitsmaßnahmen und -technologien einsetzen, um ein angemessenes Schutzniveau für personenbezogene Daten zu gewährleisten. Der „Stand der Technik“ ist hierbei nicht statisch, sondern entwickelt sich mit dem Fortschritt der Technologie weiter.",
    frageTR:
      "DSGVO’da ‘teknolojinin güncel durumu’ (Stand der Technik) ifadesiyle ne kastedilmektedir?",
    antwortTR:
      "DSGVO’nun 32. maddesine göre, veri sorumluları ve veri işleyenler, teknolojinin güncel durumu (Stand der Technik) dikkate alınarak riske uygun bir koruma seviyesi sağlamak için gerekli teknik ve organizasyonel önlemleri almak zorundadır.\nBu, kişisel verileri işleyen kurum ve kuruluşların, kişisel veriler için uygun bir koruma düzeyi sağlamak amacıyla en yeni ve en etkili güvenlik önlemlerini ve teknolojilerini uygulamaları gerektiği anlamına gelir. ‘Teknolojinin güncel durumu’ sabit bir kavram değildir; teknoloji geliştikçe sürekli olarak yenilenir ve gelişir.",
  },
  {
    id: 16,
    frageDE:
      "Beschreiben Sie den grundsätzlichen Unterschied zwischen der Anonymisierung und der Pseudonymisierung von personenbezogenen Daten.",
    antwortDE:
      "Anonymisierung ist ein Prozess, bei dem alle identifizierenden Merkmale aus den Daten entfernt werden, sodass eine Person nicht mehr identifizierbar ist. Dies ist ein irreversibler Prozess. Sobald Daten anonymisiert sind, können sie nicht mehr zu einer bestimmten Person zurückverfolgt werden.\nPseudonymisierung ist ein Prozess, bei dem personenbezogene Daten so verändert werden, dass sie ohne zusätzliche Informationen nicht mehr einer spezifischen Person zugeordnet werden können. Identifizierende Merkmale werden durch ein Pseudonym ersetzt. Dieser Prozess ist reversibel. Mit der richtigen Information kann eine Person identifiziert werden.",
    frageTR:
      "Kişisel verilerin anonimleştirilmesi (Anonymisierung) ile takma adla işlenmesi (Pseudonymisierung) arasındaki temel farkı açıklayınız.",
    antwortTR:
      "Anonimleştirme (Anonymisierung), verilerdeki tüm tanımlayıcı bilgilerin kaldırıldığı ve böylece bireyin artık tanınamayacağı bir süreçtir. Bu geri döndürülemez (irreversibel) bir işlemdir. Bir veri anonimleştirildikten sonra, belirli bir kişiye yeniden bağlanması mümkün değildir.\nTakma adla işleme (Pseudonymisierung) ise kişisel verilerin, ek bilgiler olmadan belirli bir kişiye atfedilemeyecek şekilde değiştirilmesi sürecidir. Tanımlayıcı unsurlar bir takma ad (Pseudonym) ile değiştirilir. Bu işlem tersine çevrilebilir; doğru ek bilgilerle kişinin kimliği yeniden belirlenebilir.",
  },
  {
    id: 17,
    frageDE: "Was versteht man unter dem Begriff Compliance?",
    antwortDE:
      "Compliance bezieht sich auf die Einhaltung von gesetzlichen Bestimmungen, branchenspezifischen Standards, internen Richtlinien und ethischen Prinzipien durch Unternehmen. Es umfasst die Umsetzung und Überwachung von Regeln und Vorschriften, um Risiken zu minimieren, Haftungsansprüche zu vermeiden und das Vertrauen von Kunden, Investoren und der Öffentlichkeit zu erhalten. Die Nichteinhaltung von Compliance kann zu rechtlichen Konsequenzen, finanziellen Verlusten und Reputationsschäden führen.",
    frageTR: "Uyumluluk (Compliance) kavramı ne anlama gelir?",
    antwortTR:
      "Compliance (uyumluluk), işletmelerin yasal düzenlemelere, sektörel standartlara, iç yönergelere ve etik ilkelere uygun hareket etmesini ifade eder. Bu kavram, riskleri en aza indirmek, hukuki sorumlulukları önlemek ve müşterilerin, yatırımcıların ve kamuoyunun güvenini korumak amacıyla kuralların uygulanmasını ve denetlenmesini kapsar. Uyumluluk kurallarına uymamak, hukuki sonuçlara, mali kayıplara ve itibar zedelenmesine yol açabilir.",
  },
  {
    id: 18,
    frageDE:
      "Erklären Sie den Unterschied zwischen „Privacy by Design“ und „Privacy by Default“.",
    antwortDE:
      "Privacy by Design: Das Thema Datenschutz soll bereits im gesamten Entwicklungsprozess von Software, Hardware oder auch IT-Systemen berücksichtigt werden. Datenschutz wird hierdurch zu einem festen Bestandteil eines fertigen IT-Produktes. Man spricht hier auch von Datenschutz durch Technikgestaltung.\nPrivacy by Default: Der Schutz von personenbezogenen Daten wird durch datenschutzfreundliche Voreinstellungen unterstützt. Der Grundgedanke hierbei ist, dass die Grundeinstellungen von Anwendungen bereits datenschutzfreundlich eingestellt sind. Hierdurch sollen vor allem Nutzerinnen und Nutzer geschützt werden, die weniger technikversiert sind.",
    frageTR:
      "‘Privacy by Design’ (tasarım aşamasında gizlilik) ve ‘Privacy by Default’ (varsayılan gizlilik) arasındaki farkı açıklayınız.",
    antwortTR:
      "Privacy by Design (tasarımda gizlilik): Veri koruma konusu, yazılım, donanım veya BT sistemlerinin geliştirme sürecinin en başından itibaren dikkate alınmalıdır. Bu sayede veri koruma, ürünün tamamlayıcı bir parçası haline gelir. Buna ‘teknik tasarımla veri koruma’ (Datenschutz durch Technikgestaltung) da denir.\nPrivacy by Default (varsayılan gizlilik): Kişisel verilerin korunması, gizlilik dostu varsayılan ayarlar aracılığıyla sağlanır. Buradaki temel fikir, bir uygulamanın varsayılan ayarlarının gizlilik esasına uygun biçimde yapılandırılmış olmasıdır. Bu yaklaşım özellikle teknik bilgisi az olan kullanıcıları korumayı amaçlar.",
  },
  {
    id: 19,
    frageDE:
      "Nennen Sie drei Komplexitätsanforderungen für Passwörter und erklären Sie, warum diese für eine höhere Passwortsicherheit sorgen.",
    antwortDE:
      "Typische Anforderungen an sichere Passwörter sind:\n- Verwendung von Kleinbuchstaben\n- Verwendung von Großbuchstaben\n- Verwendung von Zahlen\n- Verwendung von Sonderzeichen\n- ausreichende Passwortlänge\nDie Verwendung eines möglichst großen Zeichenvorrates erhöht die Anzahl der möglichen Variationen eines Passwortes. Die Nutzung von Sonderzeichen und Zahlen verhindert zusätzlich die Verwendung von „Dudenworten“ als Passwort. Ein möglichst langes Passwort erhöht nochmals den Aufwand für die Ermittlung eines Passwortes durch systematisches Probieren.",
    frageTR:
      "Parolalar için üç karmaşıklık gereksinimi belirtiniz ve bunların neden parola güvenliğini artırdığını açıklayınız.",
    antwortTR:
      "Güvenli parolalar için tipik gereksinimler şunlardır:\n- Küçük harflerin kullanılması\n- Büyük harflerin kullanılması\n- Sayıların kullanılması\n- Özel karakterlerin kullanılması\n- Yeterli uzunlukta parola seçilmesi\nKullanılabilecek karakter çeşitliliğinin fazla olması, bir parolanın olası kombinasyonlarını artırır. Özel karakterler ve sayılar kullanmak, sözlükteki kelimelerin (örneğin ‘Dudenwort’) parola olarak kullanılmasını zorlaştırır. Parolanın uzunluğu arttıkça, onu sistematik denemelerle (brute-force) çözmek çok daha zahmetli hale gelir.",
  },
  {
    id: 20,
    frageDE:
      "Nennen Sie Vorteile und Nachteile der Nutzung von Single Sign-On (SSO).",
    antwortDE:
      "Single Sign-On (SSO) ist ein Authentifizierungsdienst, der es erlaubt, mit einem Satz von Anmeldeinformationen auf mehrere Anwendungen zuzugreifen.\nVorteile:\n- einmalige Anmeldung, um auf mehrere Anwendungen zuzugreifen\n- reduziert das Risiko vergessener Passwörter\n- es besteht die Möglichkeit, schnell und zentralisiert auf Sicherheitsvorfälle zu reagieren\nNachteile:\n- ein Ausfall oder eine Kompromittierung des SSO-Dienstes kann den Zugriff auf alle Anwendungen beeinträchtigen\n- technisch komplex zu implementieren und zu verwalten\n- Anbieterabhängigkeit: Risiken im Zusammenhang mit der Verwendung eines externen SSO-Dienstleisters",
    frageTR:
      "Tek Oturum Açma (SSO - Single Sign-On) kullanımının avantajları ve dezavantajları nelerdir?",
    antwortTR:
      "Single Sign-On (SSO), bir dizi kimlik doğrulama bilgisiyle birden fazla uygulamaya erişim sağlayan bir kimlik doğrulama hizmetidir.\nAvantajlar:\n- Bir kez giriş yaparak birden fazla uygulamaya erişim sağlanabilir.\n- Unutulan parola riskini azaltır.\n- Güvenlik olaylarına hızlı ve merkezi biçimde müdahale etmeye olanak tanır.\nDezavantajlar:\n- SSO hizmetinin çökmesi veya ele geçirilmesi durumunda tüm uygulamalara erişim etkilenebilir.\n- Teknik olarak karmaşık bir şekilde uygulanır ve yönetimi zordur.\n- Harici bir SSO sağlayıcısına bağımlılık, ek güvenlik riskleri doğurabilir.",
  },
  {
    id: 21,
    frageDE:
      "Was ist OAuth2 und wofür wird es in der Authentifizierung und Autorisierung verwendet?",
    antwortDE:
      "OAuth 2.0 ist ein offenes Protokoll zur sicheren Delegierung von Zugriffsrechten im Internet. Es ermöglicht Benutzern, Drittanbieter-Apps Zugriff auf ihre Daten zu gewähren, ohne dabei ihre Anmeldeinformationen preiszugeben.\nHierbei gibt es mehrere Rollen:\n- Der Ressourcenbesitzer besitzt die Daten und kann anderen den Zugriff auf diese Daten gewähren.\n- Der Client ist die Anwendung, die den Zugriff auf die Ressource des Benutzers anfordert.\n- Der Autorisierungsserver überprüft die Identität des Benutzers und erteilt Zugriffstoken.\n- Der Ressourcenserver hält die Benutzerdaten und gewährt den Zugriff auf sie, wenn er ein gültiges Token erhält.",
    frageTR:
      "OAuth2 nedir ve kimlik doğrulama ile yetkilendirme sürecinde ne için kullanılır?",
    antwortTR:
      "OAuth 2.0, internette erişim haklarının güvenli bir şekilde devredilmesini sağlayan açık bir protokoldür. Kullanıcıların üçüncü taraf uygulamalara verilerine erişim izni vermesine olanak tanır, ancak kullanıcı kimlik bilgilerini (örneğin parola) paylaşmalarını gerektirmez.\nBu süreçte birden fazla rol vardır:\n- Kaynak sahibi (Ressourcenbesitzer): Verilerin sahibidir ve başkalarına erişim izni verebilir.\n- İstemci (Client): Kullanıcının verilerine erişim talep eden uygulamadır.\n- Yetkilendirme sunucusu (Autorisierungsserver): Kullanıcının kimliğini doğrular ve erişim belirteci (Token) verir.\n- Kaynak sunucusu (Ressourcenserver): Kullanıcı verilerini barındırır ve geçerli bir belirteç sunulduğunda erişim sağlar.",
  },
  {
    id: 22,
    frageDE: "Beschreiben Sie den Autorisierungs-Prozess von OAuth2.",
    antwortDE:
      "Die folgenden Schritte werden im Autorisierungs-Prozess von OAuth 2.0 durchlaufen:\n- Eine Anwendung (der „Client“) fordert den Zugriff auf Benutzerdaten an, die auf einem anderen Server (dem „Ressourcenserver“) gespeichert sind.\n- Der Benutzer (der „Ressourcenbesitzer“) stimmt zu, dem Client den Zugriff zu gewähren.\n- Der Client erhält ein Zugriffstoken vom „Autorisierungsserver“.\n- Der Client verwendet das Zugriffstoken, um auf die Benutzerdaten auf dem Ressourcenserver zuzugreifen.",
    frageTR: "OAuth2 yetkilendirme süreci nasıl işler?",
    antwortTR:
      "OAuth 2.0 yetkilendirme sürecinde aşağıdaki adımlar gerçekleşir:\n- Bir uygulama (Client), başka bir sunucuda (Ressourcenserver) depolanan kullanıcı verilerine erişim talep eder.\n- Kullanıcı (Ressourcenbesitzer), bu erişim isteğini onaylar.\n- Uygulama (Client), yetkilendirme sunucusundan (Autorisierungsserver) bir erişim belirteci (Access Token) alır.\n- Client bu erişim belirtecini kullanarak kaynak sunucuda bulunan kullanıcı verilerine erişir.",
  },
  {
    id: 23,
    frageDE:
      "Beschreiben Sie den Unterschied zwischen Zugangskontrolle und Zugriffskontrolle.",
    antwortDE:
      "Das Konzept der Zugangskontrolle (Access Control) bezieht sich auf die Möglichkeit, den physischen oder virtuellen Zugang zu einer Ressource zu kontrollieren. Die Zugangskontrolle bestimmt, wer oder was Zugang zu einer Ressource hat.\nDie Zugriffskontrolle (Authorization Control) regelt, was ein Benutzer oder System nach dem Zugang machen darf. Nachdem jemand Zugang zu einer Ressource erlangt hat, kann die Zugriffskontrolle festlegen, welche Operationen er auf dieser Ressource ausführen darf. Sie regelt die Befugnisse oder Berechtigungen, die einem Benutzer oder System gewährt werden, nachdem der Zugang gewährt wurde.",
    frageTR:
      "Erişim kontrolü (Zugangskontrolle) ile yetki kontrolü (Zugriffskontrolle) arasındaki fark nedir?",
    antwortTR:
      "Zugangskontrolle (erişim kontrolü), bir kaynağa fiziksel veya sanal erişimin kontrol edilmesi anlamına gelir. Bu kontrol, kimlerin veya hangi sistemlerin bir kaynağa erişebileceğini belirler.\nZugriffskontrolle (yetki kontrolü) ise, bir kullanıcı veya sistem erişim sağladıktan sonra o kaynak üzerinde neler yapabileceğini düzenler. Yani hangi işlemleri gerçekleştirebileceğini belirler. Böylece erişim sonrasında verilen izinler ve yetkiler yönetilmiş olur.",
  },
  {
    id: 24,
    frageDE:
      "Was ist in Bezug auf die Systemsicherheit unter dem Begriff der „Betriebssystem-Härtung“ zu verstehen?",
    antwortDE:
      "Betriebssystemhärtung bezieht sich auf eine Reihe von Maßnahmen, die darauf abzielen, die Sicherheit eines Betriebssystems zu erhöhen, indem dessen Anfälligkeiten reduziert und potenzielle Angriffspunkte minimiert werden.\nBeispiele für wirksame Maßnahmen sind:\n- nur die absolut notwendigen Softwarekomponenten und -dienste installieren\n- Patch-Management\n- Einschränkung von Systemzugriffsrechten\n- Aktivieren der verfügbaren Sicherheitsfunktionen\n- Nutzung von Firewall und Antivirensoftware\n- Verwendung von Verschlüsselung",
    frageTR:
      "Sistem güvenliği açısından ‘işletim sistemi sertleştirmesi’ (Betriebssystem-Härtung) ne anlama gelir?",
    antwortTR:
      "Betriebssystem-Härtung, bir işletim sisteminin güvenliğini artırmak için alınan önlemleri ifade eder. Bu önlemler, sistemdeki güvenlik açıklarını azaltmayı ve olası saldırı noktalarını en aza indirmeyi amaçlar.\nEtkili önlemlerden bazıları şunlardır:\n- Sadece gerçekten gerekli yazılım bileşenlerinin ve hizmetlerin kurulması\n- Yama yönetimi (Patch-Management)\n- Sistem erişim izinlerinin sınırlandırılması\n- Mevcut güvenlik özelliklerinin etkinleştirilmesi\n- Güvenlik duvarı (Firewall) ve antivirüs yazılımlarının kullanımı\n- Verilerin şifrelenmesi (Verschlüsselung)",
  },
  {
    id: 25,
    frageDE:
      "Die IT-Infrastruktur eines Unternehmens ist verschiedenen Gefahren ausgesetzt. Erläutern Sie die folgenden Angriffs- methoden:\n- Trojaner\n- Ransomware\n- Phishing\n- Distributed Denial of Service (DDoS)",
    antwortDE:
      "Trojaner: Ein Programm, das als nützliche Anwendung getarnt ist, im Hintergrund aber ohne das Wissen des Anwenders eine andere Funktion erfüllt.\nRansomware: Die Nutzung von Daten und Systemen wird z. B. durch Verschlüsselung verhindert, um Lösegeld vom Geschädigten zu erpressen.\nPhishing: Abfrage von Anmeldeinformationen per E-Mail oder über gefälschte Websites, um sich später den unerlaubten Zugriff auf die Systeme zu ermöglichen.\nDistributed Denial of Service (DDoS): Überlastung eines Computersystems durch Massenabfragen, die von einer großen Anzahl anderer Computersysteme verursacht wird.",
    frageTR:
      "Bir işletmenin BT altyapısı çeşitli tehditlere maruzdur. Aşağıdaki saldırı yöntemlerini açıklayınız:\n- Trojaner (Trojan)\n- Ransomware (Fidye yazılımı)\n- Phishing (Kimlik avı)\n- Distributed Denial of Service (DDoS - Dağıtılmış Hizmet Engelleme)",
    antwortTR:
      "Trojaner: Yararlı bir uygulama gibi gizlenen, ancak arka planda kullanıcının bilgisi olmadan farklı zararlı işlevler gerçekleştiren bir programdır.\nRansomware: Verilere veya sistemlere erişimi (ör. şifreleme ile) engelleyerek mağduru fidye ödemeye zorlayan bir saldırı türüdür.\nPhishing: E-posta veya sahte web siteleri aracılığıyla kimlik bilgilerini toplama yolu ile daha sonra izinsiz erişim sağlama amaçlı dolandırıcılık yöntemidir.\nDistributed Denial of Service (DDoS): Çok sayıda bilgisayardan eş zamanlı yoğun istek gönderilerek bir sistemi aşırı yükleyip erişilemez hâle getirme saldırısıdır.",
  },
  {
    id: 26,
    frageDE:
      "Unter welchen Voraussetzungen ist es einem Spamfilter oder dem Administrator eines Unternehmens erlaubt, E-Mails auf unerwünschte Inhalte zu überprüfen?",
    antwortDE:
      "Der Inhalt von E-Mails fällt unter das Briefgeheimnis und Datenschutzbestimmungen, was bedeutet, dass sie nicht ohne weiteres eingesehen oder überwacht werden dürfen. Die Mitarbeitenden müssen über die mögliche Überwachung ihrer E-Mails informiert werden.\nDie Überwachung von E-Mails kann nur dann erfolgen, wenn die E-Mail-Dienste ausschließlich beruflich genutzt werden. Wenn die Mitarbeitenden ihre geschäftlichen E-Mail-Konten auch für private Zwecke nutzen dürfen, ist eine Kontrolle der Inhalte in der Regel nicht zulässig.",
    frageTR:
      "Hangi koşullar altında bir Spamfilterin veya işletme yöneticisinin e-postaları istenmeyen içerik açısından incelemesine izin verilir?",
    antwortTR:
      "E-posta içerikleri mektup sırrı ve veri koruma kurallarına (Datenschutzbestimmungen) tabidir; bu nedenle bunlar izinsiz olarak görüntülenemez veya izlenemez. Çalışanlara e-postalarının izlenebileceği konusunda bilgi verilmelidir.\nE-postaların izlenmesi yalnızca e-posta hizmetleri tamamen iş amaçlı kullanıldığında mümkündür. Çalışanlar iş e-posta hesaplarını özel amaçlarla da kullanabiliyorsa, içerik kontrolü genellikle yasaktır.",
  },
  {
    id: 27,
    frageDE:
      "Was ist im Bereich der IT-Sicherheit unter einem Honeypot zu verstehen?",
    antwortDE:
      "Im Bereich der IT-Sicherheit ist ein Honeypot ein speziell präpariertes System, welches gezielt Angreifer und Schadprogramme anlocken soll. Es simuliert z. B. einen Rechner, Netzwerkdienst oder Anwendungsprogramm, um Angriffsmethoden zu studieren, von anderen Systemen abzulenken oder um Angreifern eine Falle zu stellen.",
    frageTR: "BT güvenliği alanında Honeypot (tuzak sistem) nedir?",
    antwortTR:
      "Honeypot, saldırganları ve zararlı yazılımları çekmek için kasıtlı olarak hazırlanan bir sistemdir. Bir bilgisayar, ağ servisi veya uygulama gibi davranarak saldırı yöntemlerini incelemek, diğer sistemlerden dikkat dağıtmak veya saldırganları tuzağa düşürmek amacıyla kullanılır.",
  },
  {
    id: 28,
    frageDE:
      "Beschreiben Sie die Aufgabe einer Sandbox in Bezug auf die IT-Sicherheit.",
    antwortDE:
      "Eine Sandbox ist eine abgesicherte Umgebung in der Software oder Code ausgeführt werden kann, ohne dass das umliegende System oder Netzwerk beeinflusst wird. Diese Umgebung isoliert die Ausführung der Software, um sicherzustellen, dass möglicher schädlicher oder nicht verifizierter Code nicht auf das zugrundeliegende System oder Netzwerk zugreifen kann.",
    frageTR:
      "BT güvenliği açısından bir Sandbox (izole çalışma ortamı) görevini açıklayınız.",
    antwortTR:
      "Sandbox, yazılım veya kodun çevre sistem veya ağı etkilemeden çalıştırılabildiği izole edilmiş bir ortamdır. Bu ortam, potansiyel olarak zararlı ya da doğrulanmamış kodun ana sisteme veya ağa erişmesini engellemek için çalıştırmayı izole eder.",
  },
  {
    id: 29,
    frageDE:
      "Erklären Sie den Unterschied zwischen der differenziellen und der inkrementellen Datensicherung. Gehen Sie hierbei auch auf den Aufwand bei der Wiederherstellung von Datenein.",
    antwortDE:
      "Differenzielle Datensicherung:\n- startet mit einer Vollsicherung\n- im Anschluss werden nur noch Daten gesichert, welche seit der letzten Vollsicherung verändert oder neu erstellt wurden\n- zur Wiederherstellung werden die letzte Vollsicherung und das letzte differenzielle Backup benötigt\n\nInkrementelle Datensicherung:\n- startet mit einer Vollsicherung\n- im Anschluss werden nur noch Daten gesichert, welche seit dem letzten Sicherungsdurchlauf (Vollsicherung oder inkrementell) verändert oder neu erstellt wurden\n- zur Wiederherstellung werden die letzte Vollsicherung und alle inkrementellen Sicherungen in der richtigen Reihenfolge benötigt",
    frageTR:
      "Diferansiyel (differenzielle) ve artımlı (inkrementelle) yedekleme arasındaki farkı açıklayınız. Kurtarma (Wiederherstellung) maliyeti açısından da farklara değininiz.",
    antwortTR:
      "Differansiyel yedekleme (differenzielle Datensicherung):\n- İlk olarak tam yedek (Vollsicherung) yapılır.\n- Daha sonra yalnızca son tam yedekten bu yana değişmiş veya yeni oluşturulmuş veriler yedeklenir.\n- Geri yükleme (Wiederherstellung) için son tam yedek ve en son diferansiyel yedek yeterlidir.\n\nArtımlı yedekleme (inkrementelle Datensicherung):\n- İlk olarak tam yedek yapılır.\n- Takiben, her yedeklemede yalnızca son yedekleme işleminden (tam veya artımlı) beri değişen/veri eklenen kısımlar yedeklenir.\n- Geri yükleme için son tam yedek ve o tam yedekten sonra alınmış tüm artımlı yedeklerin doğru sırayla uygulanması gerekir.\n\nGenel olarak, artımlı yedekleme disk alanı ve günlük yedek süreleri açısından daha verimli olabilir, ama kurtarma sürecinde daha fazla yedek dosyasının bir araya getirilmesi gerektiği için kurtarma süresi ve karmaşıklığı artar. Diferansiyel yedekleme, kurtarma için daha az dosya gerektirdiğinden genelde daha hızlı geri yükleme sağlar, ancak diferansiyel yedekler artarak daha fazla depolama kaplayabilir.",
  },
  {
    id: 30,
    frageDE:
      "Beschreiben Sie die Datensicherungsstrategie „Generationenprinzip“ (Großvater-Vater-Sohn-Prinzip).",
    antwortDE:
      "Beim Generationenprinzip handelt es sich um eine Datensicherungsstrategie, bei welcher mehrere Sicherungen in verschiedenen zeitlichen Abstufungen vorliegen. Hierdurch kann z. B. ein kompletter Datenverlust durch die Beschädigung einer einzelnen Sicherung verhindert werden. Ein Konzept zum Überschreiben und Wiederverwenden der zur Sicherung genutzten Datenträger kann eingesetzt werden.\nEine mögliche Umsetzung wäre die Durchführung von täglichen, wöchentlichen und monatlichen Sicherungen. Hierbei wäre die tägliche Sicherung der „Sohn“, die wöchentliche Sicherung der „Vater“ und die monatliche Sicherung der „Großvater“.",
    frageTR:
      "‘Generationenprinzip’ (Büyükbaba-Baba-Oğul ilkesi) olarak adlandırılan yedekleme stratejisini açıklayınız.",
    antwortTR:
      "Generationenprinzip, farklı zaman aralıklarında birden fazla yedeğin tutulduğu bir yedekleme stratejisidir. Bu yöntem, tek bir yedek dosyasının bozulması durumunda bile verilerin tamamen kaybolmasını önler. Ayrıca, yedekleme ortamlarının üzerine yazma ve yeniden kullanma prensibi de bu yöntemle uygulanabilir.\nUygulamada örnek olarak, günlük, haftalık ve aylık yedekler alınır: Günlük yedekler ‘Oğul’ (Sohn), haftalık yedekler ‘Baba’ (Vater) ve aylık yedekler ‘Büyükbaba’ (Großvater) olarak adlandırılır.",
  },
  {
    id: 31,
    frageDE: "Was besagt die 3-2-1-Regel in Bezug auf die Datensicherung?",
    antwortDE:
      "Die 3-2-1-Regel stellt sicher, dass die Daten sicher aufbewahrt werden. Sie besagt Folgendes:\n- Es sollten mindestens drei Kopien der Daten aufbewahrt werden. Das schließt die ursprüngliche Datei und zwei Backup-Kopien ein.\n- Es sollten mindestens zwei verschiedene Speichermedien für die Backups verwendet werden.\n- Mindestens eine dieser Kopien sollte an einem anderen Ort aufbewahrt werden, um sich gegen lokale Katastrophen wie Feuer, Überschwemmungen oder Einbrüche zu schützen. Diese „Offsite“-Kopie kann entweder in einem physisch entfernten Ort oder in einem Cloud-Speicherdienst aufbewahrt werden.",
    frageTR: "Yedekleme ile ilgili 3-2-1 kuralı neyi ifade eder?",
    antwortTR:
      "3-2-1 kuralı, verilerin güvenli bir şekilde saklanmasını sağlamak için kullanılan bir prensiptir. Buna göre:\n- Verilerin en az üç kopyası bulundurulmalıdır (orijinal veri + iki yedek).\n- Yedekler en az iki farklı depolama ortamında tutulmalıdır.\n- Bu kopyalardan en az biri, yangın, sel veya hırsızlık gibi yerel felaketlere karşı korunmak için başka bir fiziksel konumda saklanmalıdır. Bu ‘offsite’ kopya uzak bir fiziksel lokasyonda ya da bir bulut depolama hizmetinde tutulabilir.",
  },
  {
    id: 32,
    frageDE:
      "Worin liegt der Unterschied zwischen Datensicherung und Archivierung?",
    antwortDE:
      "Datensicherung ist der Prozess, regelmäßige Kopien von Daten zu erstellen, um diese im Falle eines Datenverlustes wiederherstellen zu können. Backups werden in der Regel regelmäßig erstellt und auf einem sicheren Medium oder an einem sicheren Ort aufbewahrt.\nArchivierung ist der Prozess der langfristigen Aufbewahrung von Daten, die nicht mehr aktiv verwendet werden, aber aus rechtlichen oder geschäftlichen Gründen aufbewahrt werden müssen. Archivierte Daten werden oft auf ein kosteneffizientes Medium verschoben und an einem sicheren Ort aufbewahrt. Archive dienen dazu, ältere Daten zugänglich zu machen, wenn sie benötigt werden.",
    frageTR:
      "Veri yedekleme (Datensicherung) ile arşivleme (Archivierung) arasındaki fark nedir?",
    antwortTR:
      "Datensicherung (veri yedekleme), veri kaybı durumunda geri yüklenebilmesi için verilerin düzenli olarak kopyalanması işlemidir. Yedeklemeler genellikle düzenli aralıklarla yapılır ve güvenli bir ortamda saklanır.\nArchivierung (arşivleme) ise artık aktif olarak kullanılmayan, ancak yasal veya ticari nedenlerle uzun süre saklanması gereken verilerin korunması sürecidir. Arşivlenen veriler genellikle daha ekonomik bir depolama ortamına taşınır ve gerektiğinde erişilebilecek şekilde güvenli biçimde muhafaza edilir.",
  },
  {
    id: 33,
    frageDE:
      "Was bedeutet Disaster Recovery in der Informationstechnologie und warum ist es für Unternehmen wichtig?",
    antwortDE:
      "Disaster Recovery (DR) bezieht sich auf Strategien und Maßnahmen, die Unternehmen zur Wiederherstellung und zum Schutz ihrer IT-Infrastruktur und -Daten im Falle eines „Desasters“ einsetzen. Ein Desaster kann eine Vielzahl von Ereignissen umfassen, wie zum Beispiel Naturkatastrophen, Cyberangriffe oder Hardwareausfälle.\nDie Disaster-Recovery-Strategie eines Unternehmens umfasst in der Regel einen Disaster-Recovery-Plan (DRP), der detaillierte Anweisungen und Verfahren für die Wiederherstellung von Systemen und Daten enthält. Dazu gehören auch Vorkehrungen für redundante Systeme und Backups von Daten an sicheren Orten.",
    frageTR:
      "Bilgi teknolojilerinde ‘Disaster Recovery’ (felaket kurtarma) ne anlama gelir ve neden işletmeler için önemlidir?",
    antwortTR:
      "Disaster Recovery (DR), işletmelerin bir felaket (örneğin doğal afet, siber saldırı veya donanım arızası) durumunda BT altyapısını ve verilerini geri yüklemek ve korumak için uyguladığı strateji ve önlemleri ifade eder.\nBir işletmenin felaket kurtarma stratejisi genellikle bir ‘Disaster Recovery Plan’ (DRP) içerir. Bu plan, sistemlerin ve verilerin nasıl geri yükleneceğini belirten ayrıntılı talimatlar ve prosedürleri kapsar. Ayrıca yedek sistemlerin ve güvenli ortamlarda tutulan veri yedeklerinin kullanımını da içerir.",
  },
  {
    id: 34,
    frageDE:
      "Erläutern Sie die Bedeutung von „Recovery Time Objective“ (RTO) und „Recovery Point Objective“ (RPO).",
    antwortDE:
      "Recovery Time Objective (RTO) und Recovery Point Objective (RPO) sind zwei Schlüsselkonzepte im Bereich der Disaster-Recovery-Planung.\nRecovery Time Objective (RTO) ist die maximale tolerierbare Zeit, die ein System nach einem Ausfall oder einer Störung ausfallen darf, bevor es zu erheblichen Schäden kommt. Es ist die Zeit, die benötigt wird, um die Funktionsfähigkeit wiederherzustellen.\nDie Recovery Point Objective (RPO) bezieht sich auf die maximale Menge an Daten, die ein Unternehmen sich leisten kann zu verlieren, bevor es zu erheblichen Schäden kommt. Dies wird oft in Zeiteinheiten gemessen.",
    frageTR:
      "‘Recovery Time Objective’ (RTO) ve ‘Recovery Point Objective’ (RPO) kavramlarının anlamını açıklayınız.",
    antwortTR:
      "RTO (Recovery Time Objective) ve RPO (Recovery Point Objective), felaket kurtarma (Disaster Recovery) planlamasında kullanılan iki temel kavramdır.\nRTO, bir sistemin kesinti veya arıza sonrasında en fazla ne kadar süre devre dışı kalabileceğini ifade eder. Bu süre aşıldığında işletme ciddi zarar görebilir. RTO, sistemin yeniden işler hale getirilmesi için gereken maksimum süredir.\nRPO ise bir işletmenin veri kaybı açısından tolere edebileceği en yüksek veri miktarını ifade eder. Genellikle zaman cinsinden ölçülür (örneğin ‘son 4 saatteki veriler kaybolabilir’ gibi).",
  },
  {
    id: 35,
    frageDE:
      "Worin liegt der Unterschied zwischen den Messgrößen „Mean Time Between Failures“ (MTBF) und „Mean Time to Failure“ (MTTF)?",
    antwortDE:
      "MTBF steht für „Mean Time Between Failures“. Es ist die durchschnittliche Zeit zwischen reparierbaren Ausfällen. Eine hohe MTBF weist auf eine höhere Zuverlässigkeit und Langlebigkeit des Systems hin.\nMTTF steht für „Mean Time to Failure“. Es handelt sich dabei um die durchschnittliche Zeitspanne, die erwartungsgemäß vergeht, bevor ein Gerät oder System ausfällt. Im Gegensatz zu MTBF, das für Geräte verwendet wird, die repariert und wieder in Betrieb genommen werden können, wird MTTF normalerweise für Geräte verwendet, die nach einem Ausfall nicht repariert, sondern ersetzt werden müssen.",
    frageTR:
      "‘Mean Time Between Failures’ (MTBF) ile ‘Mean Time to Failure’ (MTTF) ölçümleri arasındaki fark nedir?",
    antwortTR:
      "MTBF (Mean Time Between Failures – Arızalar Arası Ortalama Süre), onarılabilir arızalar arasındaki ortalama zamanı ifade eder. Yüksek bir MTBF değeri, sistemin güvenilirliğinin ve dayanıklılığının yüksek olduğunu gösterir.\nMTTF (Mean Time to Failure – Arızaya Kadar Ortalama Süre) ise bir sistemin veya cihazın arıza yapmadan önce ortalama ne kadar süre çalışacağını belirtir. MTBF’den farklı olarak MTTF, arızalandıktan sonra onarılmayıp değiştirilmesi gereken cihazlar için kullanılır.",
  },
  {
    id: 36,
    frageDE:
      "Treffen Sie für die RAID-Systeme RAID 0, RAID 1, RAID 5, RAID 6 und RAID 10 jeweils eine Aussage zu:\n- Mindestanzahl Festplatten\n- Ausfallsicherheit\n- Berechnung der Nutzkapazität (Nettokapazität)",
    antwortDE:
      "RAID 0:\n- mindestens 2 Festplatten\n- keine Ausfallsicherheit\n- Nutzkapazität = Anzahl Festplatten * Kapazität\n\nRAID 1:\n- mindestens 2 Festplatten\n- eine Festplatte darf ausfallen\n- Nutzkapazität = (Anzahl Festplatten / 2) * Kapazität\n\nRAID 5:\n- mindestens 3 Festplatten\n- eine Festplatte darf ausfallen\n- Nutzkapazität = (Anzahl Festplatten - 1) * Kapazität\n\nRAID 6:\n- mindestens 4 Festplatten\n- zwei Festplatten dürfen ausfallen\n- Nutzkapazität = (Anzahl Festplatten - 2) * Kapazität\n\nRAID 10:\n- mindestens 4 Festplatten\n- eine Festplatte pro Subraid darf ausfallen\n- Nutzkapazität = (Anzahl Festplatten / 2) * Kapazität",
    frageTR:
      "RAID sistemleri RAID 0, RAID 1, RAID 5, RAID 6 ve RAID 10 için aşağıdaki bilgileri belirtiniz:\n- Minimum disk sayısı\n- Arıza toleransı\n- Kullanılabilir kapasite (net kapasite) hesaplaması",
    antwortTR:
      "RAID 0:\n- En az 2 disk gereklidir\n- Arıza toleransı yoktur\n- Net kapasite = Disk sayısı × Kapasite\n\nRAID 1:\n- En az 2 disk gereklidir\n- Bir disk arızalanabilir\n- Net kapasite = (Disk sayısı / 2) × Kapasite\n\nRAID 5:\n- En az 3 disk gereklidir\n- Bir disk arızalanabilir\n- Net kapasite = (Disk sayısı - 1) × Kapasite\n\nRAID 6:\n- En az 4 disk gereklidir\n- İki disk arızalanabilir\n- Net kapasite = (Disk sayısı - 2) × Kapasite\n\nRAID 10:\n- En az 4 disk gereklidir\n- Her alt RAID grubunda bir disk arızalanabilir\n- Net kapasite = (Disk sayısı / 2) × Kapasite",
  },
  {
    id: 37,
    frageDE:
      "Erklären Sie anhand eines Beispiels, warum ein RAID keine Datensicherung ersetzt.",
    antwortDE:
      "Ein RAID schützt in den folgenden Fällen nicht vor einem Datenverlust:\n- Virenbefall eines Systems\n- versehentlich gelöschte oder veränderte Daten\n- physikalische Beschädigung durch Feuer, Wasser oder Vandalismus",
    frageTR:
      "Bir örnekle açıklayınız: Neden RAID bir veri yedekleme yöntemi yerine geçmez?",
    antwortTR:
      "RAID sistemi veri kaybına karşı bazı durumlarda koruma sağlamaz:\n- Sistem virüs bulaşması durumunda veriler yine kaybolabilir.\n- Verilerin yanlışlıkla silinmesi veya değiştirilmesi durumunda RAID kurtarma yapamaz.\n- Yangın, su baskını veya vandalizm gibi fiziksel hasarlarda tüm RAID sistemi zarar görebilir. Bu nedenle RAID veri yedeklemesinin yerini alamaz.",
  },
  {
    id: 38,
    frageDE:
      "In einem RAID-5-Verbund wurde eine zusätzliche Hot-Spare-Festplatte verbaut. Erklären Sie die Funktion einer Hot-Spare-Festplatte.",
    antwortDE:
      "Eine Hot-Spare-Festplatte ist eine zusätzliche Festplatte, die in einem RAID-Verbund installiert wird, um als Ersatz für eine ausgefallene Festplatte zu dienen. Wenn eine Festplatte in dem RAID-Verbund ausfällt, übernimmt die Hot-Spare-Festplatte automatisch die Rolle der ausgefallenen Festplatte, ohne dass manuelle Eingriffe erforderlich sind. Die Hot-Spare-Festplatte wird sofort in das RAID-System integriert und beginnt mit der Wiederherstellung der Daten, um den ursprünglichen Redundanzgrad des Verbunds wiederherzustellen.",
    frageTR:
      "Bir RAID-5 grubuna eklenmiş bir Hot-Spare diskin işlevini açıklayınız.",
    antwortTR:
      "Hot-Spare disk, RAID yapısında arızalanan bir diskin yerine otomatik olarak devreye girmek üzere önceden tanımlanmış yedek bir disktir. Bir disk arızalandığında, Hot-Spare disk otomatik olarak devreye girer ve herhangi bir manuel müdahaleye gerek kalmadan veri yeniden oluşturma süreci başlar. Bu işlem, sistemin önceki yedeklilik seviyesini yeniden sağlar.",
  },
  {
    id: 39,
    frageDE:
      "Was ist der Unterschied zwischen symmetrischen und asymmetrischen Verschlüsselungsverfahren?",
    antwortDE:
      "Symmetrische Verschlüsselung:\n- arbeitet nur mit einem einzigen Schlüssel\n- der Schlüssel muss dem Sender und Empfänger bekannt sein\n- Vorteil: funktioniert schnell und effizient\n- Nachteil: die Übergabe und Verwaltung des Schlüssels sind schwierig\n\nAsymmetrische Verschlüsselung:\n- arbeitet mit Schlüsselpaaren bestehend aus einem privaten (Private Key) und einem öffentlichen Schlüssel (Public Key)\n- Nachrichten werden mit dem Public Key verschlüsselt\n- der Private Key dient zum Entschlüsseln von Nachrichten\n- Vorteil: löst das Problem der Schlüsselübergabe\n- Nachteil: sind erheblich langsamer als die symmetrischen Verfahren",
    frageTR:
      "Simetrik ve asimetrik şifreleme yöntemleri arasındaki fark nedir?",
    antwortTR:
      "Simetrik şifreleme:\n- Tek bir anahtar kullanır.\n- Anahtar hem gönderici hem de alıcı tarafından bilinmelidir.\n- Avantajı: Hızlı ve verimlidir.\n- Dezavantajı: Anahtarın paylaşımı ve yönetimi zordur.\n\nAsimetrik şifreleme:\n- Bir özel anahtar (Private Key) ve bir açık anahtar (Public Key) olmak üzere iki anahtar kullanır.\n- Mesajlar açık anahtar ile şifrelenir, özel anahtar ile çözülür.\n- Avantajı: Anahtar paylaşımı sorununu ortadan kaldırır.\n- Dezavantajı: Simetrik yöntemlere göre çok daha yavaştır.",
  },
  {
    id: 40,
    frageDE:
      "Wie ist die Funktionsweise von hybriden Verschlüsselungsverfahren?",
    antwortDE:
      "Hybride Verschlüsselungsverfahren vereinen die Vorteile von symmetrischen und asymmetrischen Verschlüsselungsverfahren. Die eigentliche Nachricht wird zunächst mit einem symmetrischen Verfahren verschlüsselt. Der hierbei verwendete Schlüssel wird mit einem asymmetrischen Verfahren verschlüsselt und an den Empfänger übertragen. Hierdurch ist dieses Verfahren schneller als die asymmetrischen Verfahren.",
    frageTR: "Hibrit (karma) şifreleme yöntemleri nasıl çalışır?",
    antwortTR:
      "Hibrit şifreleme yöntemleri, simetrik ve asimetrik şifreleme yöntemlerinin avantajlarını birleştirir. Asıl mesaj önce simetrik bir algoritma ile şifrelenir. Bu işlemde kullanılan simetrik anahtar ise asimetrik bir yöntemle şifrelenerek alıcıya gönderilir. Böylece hem veri aktarımı hızlı olur hem de anahtar güvenliği sağlanır.",
  },
  {
    id: 41,
    frageDE: "Welche Schutzmechanismen beinhaltet das TLS-Protokoll?",
    antwortDE:
      "Transport Layer Security (TLS) ist ein Protokoll, das dazu dient, eine sichere Kommunikation über ein Netzwerk zu ermöglichen. TLS funktioniert, indem es eine verschlüsselte Verbindung zwischen zwei Parteien herstellt, über die Daten sicher übertragen werden können.\nAufgaben von TLS sind:\n- Verschlüsselung: TLS verwendet das hybride Verschlüsselungsverfahren, um Verbindungen zu sichern.\n- Authentifizierung: TLS verwendet digitale Zertifikate, um die Identität der kommunizierenden Parteien zu überprüfen.\n- Integrität: TLS beinhaltet Mechanismen zur Überprüfung der Integrität von Nachrichten.",
    frageTR: "TLS protokolü hangi koruma mekanizmalarını içerir?",
    antwortTR:
      "Transport Layer Security (TLS), bir ağ üzerinden güvenli iletişimi sağlamak için kullanılan bir protokoldür. TLS, iki taraf arasında verilerin güvenli bir şekilde iletilebileceği şifrelenmiş bir bağlantı kurarak çalışır.\nTLS’in görevleri şunlardır:\n- Şifreleme (Verschlüsselung): TLS, bağlantıları güvence altına almak için hibrit şifreleme yöntemini kullanır.\n- Kimlik doğrulama (Authentifizierung): TLS, iletişim kuran tarafların kimliğini doğrulamak için dijital sertifikalar kullanır.\n- Bütünlük (Integrität): TLS, mesajların bütünlüğünü doğrulamak için mekanizmalar içerir.",
  },
  {
    id: 42,
    frageDE:
      "Digitale Signaturen stützen sich auf Hashverfahren und basieren auf der asymmetrischen Kryptografie. Erklären Sie diesen Zusammenhang.",
    antwortDE:
      "Bei digitalen Signaturen wird die asymmetrische Kryptografie umgekehrt angewandt. Die Signatur wird vom Sender einer Nachricht mit Hilfe seines privaten Schlüssels erzeugt. Vom Empfänger kann die Korrektheit einer Signatur über den öffentlichen Schlüssel des Senders überprüft werden.\nUm die Effizienz des Signaturverfahrens zu steigern, wird die digitale Signatur nur auf dem Hashwert einer Nachricht erzeugt.",
    frageTR:
      "Dijital imzalar, karma (Hash) yöntemlerine dayanır ve asimetrik kriptografi temelinde çalışır. Bu ilişkiyi açıklayın.",
    antwortTR:
      "Dijital imzalarda asimetrik kriptografi tersine uygulanır. İmza, bir mesajın göndereni tarafından kendi özel anahtarı (privater Schlüssel) kullanılarak oluşturulur. Alıcı, imzanın doğruluğunu gönderenin açık anahtarı (öffentlicher Schlüssel) aracılığıyla kontrol edebilir.\nİmza işleminin verimliliğini artırmak için dijital imza yalnızca mesajın karma değeri (Hashwert) üzerinden oluşturulur.",
  },
  {
    id: 43,
    frageDE:
      "Nennen Sie drei Eigenschaften, die ein sicheres Hash-Verfahren aufweisen sollte.",
    antwortDE:
      "Bei einem sicheren Hash-Verfahren ...\nsollte sich der Hashwert bereits bei kleinsten Änderungen im Eingabetext stark ändern\ndarf es zu verschiedenen Eingabetexten nicht den gleichen Hashwert geben\ndarf eine Rückrechnung auf den Quelltext nicht möglich sein\nsollte die Länge des Hashwertes immer konstant sein, unabhängig von der Länge des Eingabetextes.",
    frageTR:
      "Güvenli bir karma (hash) yönteminin sahip olması gereken üç özelliği belirtiniz.",
    antwortTR:
      "Güvenli bir karma yönteminde ...\n- Girdi metninde en küçük bir değişiklik bile karma değerini (Hashwert) önemli ölçüde değiştirmelidir.\n- Farklı girdi metinleri aynı karma değerini üretmemelidir.\n- Orijinal metne geri dönüş (ters hesaplama) mümkün olmamalıdır.\n- Karma değerinin uzunluğu, girdi metninin uzunluğundan bağımsız olarak her zaman sabit olmalıdır.",
  },
  {
    id: 44,
    frageDE:
      "Was ist „Salting“ in der Kryptographie und wie verbessert es die Sicherheit von gespeicherten Passwörtern?",
    antwortDE:
      "Salting ist eine Technik, die häufig bei der Speicherung von Passwörtern verwendet wird. Ein „Salt“ ist eine zufällige Zeichenfolge, die zu einem Passwort hinzugefügt wird, bevor das Passwort gehasht wird. Dies hat den Zweck, den Hash-Wert des Passworts zu verändern, sodass selbst wenn zwei Accounts das gleiche Passwort haben, ihre gehashten Passwörter (die in der Datenbank gespeichert werden) unterschiedlich sind.\nSalting erhöht die Sicherheit, da es den Nutzen von vorgefertigten Hash-Listen für Angreifer erheblich reduziert und es schwieriger macht, Passwörter durch Brute-Force-Angriffe zu entschlüsseln.",
    frageTR:
      "Kriptografide 'Salting' nedir ve saklanan parolaların güvenliğini nasıl artırır?",
    antwortTR:
      "Salting, genellikle parolaların saklanmasında kullanılan bir tekniktir. 'Salt', bir parolaya, parola karma işlemine (hashing) tabi tutulmadan önce eklenen rastgele bir karakter dizisidir. Bu, parola karma değerini değiştirmeyi sağlar; böylece iki hesap aynı parolayı kullansa bile veritabanında saklanan karma parolalar birbirinden farklı olur.\nSalting, saldırganların önceden oluşturulmuş karma listelerini (hash listelerini) kullanmasını zorlaştırarak ve kaba kuvvet (Brute-Force) saldırılarıyla parolaların çözülmesini güçleştirerek güvenliği artırır.",
  },
  {
    id: 45,
    frageDE:
      "Was ist die Rolle einer Certificate Authority (CA) im Kontext der Netzwerksicherheit?",
    antwortDE:
      "Eine Certificate Authority (CA), oder Zertifizierungsstelle, ist eine vertrauenswürdige Organisation, die digitale Zertifikate ausstellt und verwaltet. Diese Zertifikate sind entscheidend für die Sicherheit im Internet, da sie die Identität von Personen, Computern und Organisationen bestätigen. Wenn eine CA ein Zertifikat ausstellt, bestätigt sie die Identität des Inhabers und signiert das Zertifikat mit ihrem privaten Schlüssel. Dies ermöglicht es jedem, der das Zertifikat erhält, die Authentizität durch Überprüfung der CA-Signatur zu bestätigen.",
    frageTR:
      "Ağ güvenliği bağlamında bir Sertifika Otoritesi'nin (CA - Certificate Authority) rolü nedir?",
    antwortTR:
      "Bir Sertifika Otoritesi (CA - Certificate Authority) veya sertifikasyon kurumu, dijital sertifikalar veren ve yöneten güvenilir bir kuruluştur. Bu sertifikalar, internet güvenliği açısından kritik öneme sahiptir, çünkü kişilerin, bilgisayarların ve kuruluşların kimliğini doğrularlar. Bir CA bir sertifika verdiğinde, sahibinin kimliğini doğrular ve sertifikayı kendi özel anahtarı (privater Schlüssel) ile imzalar. Bu, sertifikayı alan herkesin CA’nın imzasını kontrol ederek sertifikanın doğruluğunu ve güvenilirliğini teyit etmesini sağlar.",
  },
  {
    id: 46,
    frageDE: "Was ist eine Public Key Infrastructure (PKI)?",
    antwortDE:
      "Eine Public Key Infrastructure (PKI) ist ein Set von Rollen, Richtlinien und Verfahren, die benötigt werden, um digitale Zertifikate sicher auszustellen und zu verwalten. Sie dient der sicheren Identitätsprüfung in digitalen Netzwerken und nutzt dafür asymmetrische Kryptographie, bestehend aus einem öffentlichen und privaten Schlüsselpaar. Die Zertifikate werden von einer Zertifizierungsstelle (CA) ausgestellt, die als vertrauenswürdige dritte Partei fungiert.\nPKIs stellen die folgenden Funktionen bereit:\n- Zertifikatserstellung\n- Zertifikatsverteilung\n- Zertifikatsprüfung\n- Zertifikatswiderruf",
    frageTR: "Public Key Infrastructure (PKI - Açık Anahtar Altyapısı) nedir?",
    antwortTR:
      "Public Key Infrastructure (PKI - Açık Anahtar Altyapısı), dijital sertifikaların güvenli bir şekilde oluşturulması ve yönetilmesi için gerekli olan roller, politikalar ve prosedürlerden oluşan bir sistemdir. PKI, dijital ağlarda kimlik doğrulamasını güvenli bir şekilde gerçekleştirmeyi sağlar ve bu işlemde asimetrik kriptografi (asymmetric cryptography) kullanılır. Bu sistem, bir açık anahtar (public key) ve bir özel anahtar (private key) çiftine dayanır. Sertifikalar, güvenilir üçüncü taraf olarak hareket eden bir Sertifika Otoritesi (CA - Certificate Authority) tarafından verilir.\nPKI aşağıdaki işlevleri sağlar:\n- Sertifika oluşturma\n- Sertifika dağıtımı\n- Sertifika doğrulama\n- Sertifika iptali",
  },
  {
    id: 47,
    frageDE:
      "Welche Bestandteile beinhaltet ein digitales Zertifikat nach X.509?",
    antwortDE:
      "Typische Inhalte eines Zertifikates sind:\n- Version\n- Name des Zertifikatsinhabers\n- Signaturverfahren\n- Aussteller des Zertifikats (CA)\n- Seriennummer, die von der CA zur Identifizierung des Zertifikats vergeben wird\n- Gültigkeitsdauer\n- Signaturalgorithmus\n- Öffentlicher Schlüssel des Zertifikatsinhabers",
    frageTR: "Bir X.509 dijital sertifikası hangi bileşenleri içerir?",
    antwortTR:
      "Bir sertifikanın tipik içeriği şunlardır:\n- Versiyon\n- Sertifika sahibinin adı\n- İmza yöntemi (Signaturverfahren)\n- Sertifikayı veren kurum (CA - Certificate Authority)\n- Sertifikayı tanımlamak için CA tarafından verilen seri numarası\n- Geçerlilik süresi\n- İmza algoritması (Signaturalgorithmus)\n- Sertifika sahibinin açık anahtarı (öffentlicher Schlüssel)",
  },
  {
    id: 48,
    frageDE:
      "Erklären Sie die Bedeutung der folgenden Algorithmen: DES, 3DES, AES-128, AES-256, SHA256, MD5",
    antwortDE:
      "DES (Data Encryption Standard): Symmetrisches Verschlüsselungsverfahren. DES gilt als nicht mehr sicher.\n3DES: Durch die dreifache Anwendung des DES wird die Schlüssellänge und Sicherheit vergrößert.\nAES-128 / AES-256 (Advanced Encryption Standard): Symmetrisches Verschlüsselungsverfahren mit einer Schlüssellänge von 128 Bit bzw. 256 Bit.\nSHA256 (Secure Hash Algorithm): Hash-Verfahren mit 256 Bit Länge.\nMD5 (Message-Digest Algorithm): Hash-Verfahren mit 128 Bit Länge, gilt als nicht mehr sicher.",
    frageTR:
      "Aşağıdaki algoritmaların anlamını açıklayınız: DES, 3DES, AES-128, AES-256, SHA256, MD5",
    antwortTR:
      "DES (Data Encryption Standard - Veri Şifreleme Standardı): Simetrik bir şifreleme yöntemidir. DES artık güvenli kabul edilmemektedir.\n3DES: DES’in üç kez uygulanmasıyla anahtar uzunluğu ve güvenliği artırılmıştır.\nAES-128 / AES-256 (Advanced Encryption Standard - Gelişmiş Şifreleme Standardı): 128 bit veya 256 bit anahtar uzunluğuna sahip simetrik şifreleme yöntemidir.\nSHA256 (Secure Hash Algorithm): 256 bit uzunluğunda bir karma (hash) algoritmasıdır.\nMD5 (Message-Digest Algorithm): 128 bit uzunluğunda bir karma algoritmasıdır, ancak artık güvenli kabul edilmemektedir.",
  },
  {
    id: 49,
    frageDE:
      "Beschreiben Sie Lastenheft und Pflichtenheft hinsichtlich Verfasser, Verwendung und Inhalt.",
    antwortDE:
      "Lastenheft:\nVerfasser: Auftraggeber\nVerwendung: Grundlage beim Einholen von Angeboten\nInhalt: Beinhaltet alle Anforderungen des Auftraggebers hinsichtlich des Liefer- und Leistungsumfanges.\n\nPflichtenheft:\nVerfasser: Auftragnehmer\nVerwendung: Basis für die vertraglich festgehaltenen Leistungen\nInhalt: Beschreibt die Umsetzung aller Anforderungen aus dem Lastenheft.",
    frageTR:
      "Yükümlülük belgesi (Lastenheft) ve teknik şartname (Pflichtenheft) kavramlarını yazar, kullanım amacı ve içerik açısından açıklayınız.",
    antwortTR:
      "Lastenheft (Yükümlülük Belgesi):\nYazan: Müşteri (Auftraggeber)\nKullanımı: Tekliflerin toplanması için temel belgedir.\nİçerik: Müşterinin teslimat ve hizmet kapsamına ilişkin tüm gereksinimlerini içerir.\n\nPflichtenheft (Teknik Şartname):\nYazan: Yüklenici (Auftragnehmer)\nKullanımı: Sözleşmede belirtilen hizmetlerin temelini oluşturur.\nİçerik: Lastenheft’te belirtilen tüm gereksinimlerin nasıl uygulanacağını açıklar.",
  },
  {
    id: 50,
    frageDE: "Was sind die Stakeholder eines Projektes?",
    antwortDE:
      "Projekt-Stakeholder sind Personen oder Personengruppen, welche aktiv am Projekt beteiligt oder von der Durchführung bzw. dem Ergebnis eines Projektes betroffen sind.\nTypische Stakeholder eines Projektes sind zum Beispiel:\n- Kundinnen und Kunden\n- Auftraggebende\n- Lieferanten\n- Mitarbeitende im Projekt\n- Projektleitung",
    frageTR: "Bir projenin paydaşları (Stakeholder) kimlerdir?",
    antwortTR:
      "Proje paydaşları (Stakeholder), bir projeye doğrudan katılan veya projenin yürütülmesinden ya da sonucundan etkilenen kişi veya gruplardır.\nBir projenin tipik paydaşları şunlardır:\n- Müşteriler (Kundinnen und Kunden)\n- İşverenler (Auftraggebende)\n- Tedarikçiler (Lieferanten)\n- Proje çalışanları (Mitarbeitende im Projekt)\n- Proje yönetimi (Projektleitung)",
  },
  {
    id: 51,
    frageDE:
      "Erklären Sie die vier Phasen der Teambildung Forming, Storming, Norming und Performing.",
    antwortDE:
      "Forming:\n- Einstiegs- und Findungsphase\n- Ein neues Team beginnt die Zusammenarbeit.\nStorming:\n- Es kommt zu Konflikten im Team und zu Störungen in der Zusammenarbeit.\nNorming:\n- Die Teammitglieder entwickeln Strategien und Taktiken zur Zusammenarbeit.\nPerforming:\n- Das Team hat gelernt, als Team zusammen zu arbeiten und sich gemeinsam auf die Erreichung der Ziele zu fokussieren.",
    frageTR:
      "Takım oluşumunun dört aşamasını açıklayın: Forming, Storming, Norming ve Performing.",
    antwortTR:
      "Forming (Oluşum):\n- Başlangıç ve tanışma aşamasıdır.\n- Yeni bir ekip birlikte çalışmaya başlar.\nStorming (Çatışma):\n- Ekip içinde çatışmalar ve iş birliğinde aksaklıklar meydana gelir.\nNorming (Normlaşma):\n- Ekip üyeleri iş birliği için stratejiler ve yöntemler geliştirir.\nPerforming (Performans):\n- Ekip birlikte çalışmayı öğrenmiştir ve ortak hedeflere ulaşmaya odaklanır.",
  },
  {
    id: 52,
    frageDE:
      "Was ist der Unterschied zwischen einem Projektstrukturplan und einem Netzplan?",
    antwortDE:
      "Ein Projektstrukturplan zeigt ausschließlich die Arbeitspakete eines Projektes an. Diese werden hierarchisch in Form eines Baumdiagramms dargestellt. Er ist ohne Chronologie und lässt keine Abhängigkeiten erkennen.\nEin Netzplan zeigt die Abhängigkeiten zwischen den einzelnen Vorgängen. In ihm können vorhandene Zeitpuffer und die Projektdauer ermittelt werden.",
    frageTR: "Bir proje yapısı planı ile ağ planı arasındaki fark nedir?",
    antwortTR:
      "Bir proje yapısı planı yalnızca bir projenin iş paketlerini gösterir. Bu paketler hiyerarşik olarak bir ağaç diyagramı biçiminde sunulur. Kronolojik değildir ve bağımlılıkları göstermez.\nBir ağ planı (Netzplan) ise, tek tek işlemler arasındaki bağımlılıkları gösterir. Bu planda mevcut zaman tamponları ve projenin toplam süresi belirlenebilir.",
  },
  {
    id: 53,
    frageDE:
      "Was ist bei einem Netzplan der Unterschied zwischen dem Gesamtpuffer und dem freien Puffer?",
    antwortDE:
      "Der Gesamtpuffer bezeichnet die Zeitspanne, um die ein Vorgang gegenüber seinem frühesten Anfangszeitpunkt verschoben werden kann, ohne dass das Projektende verschoben werden muss.\nDer freie Puffer ist die Zeitspanne, um die ein Vorgang gegenüber seinem frühesten Anfangszeitpunkt verschoben werden kann, ohne dass der früheste Anfangszeitpunkt eines Nachfolgers verschoben werden muss.",
    frageTR:
      "Bir ağ planında toplam tampon (Gesamtpuffer) ile serbest tampon (freier Puffer) arasındaki fark nedir?",
    antwortTR:
      "Toplam tampon, bir işlemin en erken başlangıç zamanına göre ne kadar ertelenebileceğini ve buna rağmen projenin bitiş tarihinin değişmeyeceğini gösterir.\nSerbest tampon ise, bir işlemin en erken başlangıç zamanına göre ne kadar ertelenebileceğini, ancak bu ertelemenin bir sonraki işlemin en erken başlangıç zamanını etkilemeyeceğini ifade eder.",
  },
  {
    id: 54,
    frageDE: "Welches Merkmal charakterisiert den kritischen Pfad?",
    antwortDE:
      "Alle Vorgänge, welche auf dem kritischen Pfad liegen, haben einen Puffer von 0 Tagen. Die Verschiebung eines Vorganges, welcher sich auf dem kritischen Pfad befindet, führt automatisch zu einer Verschiebung des Projektendes.",
    frageTR: "Kritik yolun (kritischer Pfad) özelliği nedir?",
    antwortTR:
      "Kritik yol üzerindeki tüm işlemlerin tampon süresi 0 gündür. Kritik yol üzerindeki herhangi bir işlemin ertelenmesi, projenin bitiş tarihinin otomatik olarak ertelenmesine yol açar.",
  },
  {
    id: 55,
    frageDE:
      "Nennen Sie zwei Merkmale, welche ein Gantt-Diagramm von einem Netzplan unterscheiden.",
    antwortDE:
      "Das Gantt-Diagramm nutzt eine tabellarische Darstellung der Vorgänge.\nIm Gantt-Diagramm werden konkrete Termine angegeben. In einem Netzplan hingegen wird nur die Zeitdauer eines Vorgangs aufgezeigt.\nDie unterschiedliche Dauer von Vorgängen wird im Gantt-Diagramm durch die Balkenlänge visualisiert.\nPufferzeiten können im Gantt-Diagramm nicht direkt abgelesen werden.",
    frageTR:
      "Bir Gantt diyagramını bir ağ planından ayıran iki özelliği belirtiniz.",
    antwortTR:
      "Gantt diyagramı işlemleri tablo biçiminde gösterir.\nGantt diyagramında somut tarihler belirtilir; buna karşılık bir ağ planında yalnızca işlemlerin süreleri gösterilir.\nİşlemlerin farklı süreleri Gantt diyagramında çubuk uzunluklarıyla görselleştirilir.\nTampon süreleri (Pufferzeiten) Gantt diyagramında doğrudan okunamaz.",
  },
  {
    id: 56,
    frageDE:
      "Erläutern Sie was unter klassischen und agilen Vorgehensmodellen zu verstehen ist.",
    antwortDE:
      "Klassische Vorgehensmodelle sind sequenzielle und plangetriebene Modelle, die darauf abzielen, ein Projekt von der Konzeption bis zur Lieferung in einer klaren Abfolge von Phasen durchzuführen. Diese Modelle basieren auf einer umfassenden Planung, die im Vorfeld erstellt wird, und erfordern häufig eine umfangreiche Dokumentation.\nAgile Vorgehensmodelle hingegen sind iterativ und inkrementell, was bedeutet, dass sie sich auf die Zusammenarbeit und Flexibilität konzentrieren. Agile Modelle zielen darauf ab, schnell auf Änderungen und Anforderungen zu reagieren und arbeiten in kurzen Zeitrahmen, sogenannten Sprints.",
    frageTR:
      "Klasik ve çevik (agil) proje yönetim modelleriyle ne kastedilmektedir?",
    antwortTR:
      "Klasik proje yönetim modelleri, bir projenin fikir aşamasından teslimata kadar olan sürecini, birbirini izleyen aşamalarda gerçekleştirmeyi amaçlayan sıralı ve plan odaklı modellerdir. Bu modeller önceden yapılan kapsamlı planlamaya dayanır ve genellikle ayrıntılı dokümantasyon gerektirir.\nÇevik (agil) proje yönetim modelleri ise yinelemeli (iteratif) ve artımlı (inkrementell) bir yaklaşıma sahiptir. İş birliği ve esnekliğe odaklanırlar. Çevik modeller, değişikliklere ve gereksinimlere hızlı tepki verebilmeyi hedefler ve genellikle kısa zaman dilimlerinde (Sprint adı verilen periyotlarda) çalışırlar.",
  },
  {
    id: 57,
    frageDE:
      "Nennen Sie jeweils ein Beispiel für ein klassisches und ein agiles Vorgehensmodell.",
    antwortDE:
      "Klassische Vorgehensmodelle:\n- Wasserfallmodell\n- V-Modell\n- Spiralmodell\nAgile Vorgehensmodelle:\n- Scrum\n- Extreme Programming",
    frageTR:
      "Bir klasik ve bir çevik (agil) proje yönetim modeline örnek veriniz.",
    antwortTR:
      "Klasik proje yönetim modelleri:\n- Su şelalesi modeli (Wasserfallmodell)\n- V-modeli\n- Spiral modeli\nÇevik (agil) proje yönetim modelleri:\n- Scrum\n- Extreme Programming (Aşırı Programlama)",
  },
  {
    id: 58,
    frageDE: "Welchem Ansatz folgen die iterativen Vorgehensmodelle?",
    antwortDE:
      "Ein iteratives Vorgehensmodell ist ein Ansatz, bei dem der Entwicklungsprozess in wiederholenden Iterationen stattfindet. Anstatt alle Anforderungen und Aufgaben auf einmal zu definieren und abzuschließen, werden sie in kleinere, wiederholbare Phasen aufgeteilt. Jede Iteration umfasst eine Planungs-, Implementierungs- und Bewertungsphase. Das Feedback aus jeder Iteration wird genutzt, um das Produkt kontinuierlich zu verbessern und neue Anforderungen zu berücksichtigen. Dies ermöglicht Flexibilität, schnellere Reaktionen auf Änderungen und die Möglichkeit, auf frühzeitiges Feedback von Personen, die das Produkt nutzen, einzugehen.",
    frageTR:
      "Yinelemeli (iteratif) proje yönetim modelleri hangi yaklaşıma dayanır?",
    antwortTR:
      "Yinelemeli (iteratif) proje yönetim modeli, geliştirme sürecinin tekrarlayan aşamalarda (iterasyonlarda) yürütüldüğü bir yaklaşımdır. Tüm gereksinimleri ve görevleri tek seferde tanımlayıp tamamlamak yerine, bunlar daha küçük ve tekrarlanabilir aşamalara bölünür. Her iterasyon bir planlama, uygulama ve değerlendirme aşamasını içerir. Her iterasyondan elde edilen geri bildirim, ürünü sürekli iyileştirmek ve yeni gereksinimleri dikkate almak için kullanılır. Bu yaklaşım esneklik sağlar, değişikliklere daha hızlı yanıt verilmesine ve kullanıcı geri bildirimlerinin erken aşamalarda değerlendirilmesine olanak tanır.",
  },
  {
    id: 59,
    frageDE: "Was ist das Wasserfallmodell in der Softwareentwicklung?",
    antwortDE:
      "Das Wasserfallmodell ist ein lineares Vorgehensmodell in der Softwareentwicklung, das den Entwicklungsprozess in aufeinanderfolgende Phasen unterteilt. Diese Phasen sind: Anforderungsanalyse, Systemdesign, Implementierung, Integration und Testen, Bereitstellung und Wartung. Jede Phase muss vollständig abgeschlossen sein, bevor zur nächsten übergegangen wird, ähnlich einem Wasserfall, der von oben nach unten fließt. Es eignet sich besonders für Projekte mit klaren und stabilen Anforderungen.",
    frageTR:
      "Yazılım geliştirmede su şelalesi modeli (Wasserfallmodell) nedir?",
    antwortTR:
      "Su şelalesi modeli (Wasserfallmodell), yazılım geliştirmede kullanılan doğrusal (lineer) bir yaklaşımdır ve geliştirme sürecini birbirini izleyen aşamalara ayırır. Bu aşamalar şunlardır: Gereksinim analizi, sistem tasarımı, uygulama (kodlama), entegrasyon ve test, dağıtım (yayınlama) ve bakım. Her aşama tamamlanmadan bir sonrakine geçilmez; tıpkı yukarıdan aşağıya akan bir şelale gibi. Bu model, gereksinimlerin net ve sabit olduğu projeler için uygundur.",
  },
  {
    id: 60,
    frageDE: "Wie unterscheidet sich das Spiralmodell vom Wasserfallmodell?",
    antwortDE:
      "Das Wasserfallmodell ist ein lineares Vorgehensmodell, das den Entwicklungsprozess in feste, sequentielle Phasen unterteilt. Änderungen sind schwierig, sobald eine Phase abgeschlossen ist.\nDas Spiralmodell ist ein iteratives Modell, das den Entwicklungsprozess als sich wiederholende Spirale darstellt, die sich mit jeder Iteration erweitert. Es beinhaltet Risikomanagement und erlaubt Flexibilität und Anpassungen während des gesamten Projekts. Es eignet sich gut für komplexe Projekte und wenn die Anforderungen unsicher oder veränderlich sind.",
    frageTR:
      "Spiral modeli, su şelalesi modelinden (Wasserfallmodell) nasıl farklıdır?",
    antwortTR:
      "Su şelalesi modeli (Wasserfallmodell) doğrusal bir yaklaşımdır ve geliştirme sürecini belirli, sıralı aşamalara ayırır. Bir aşama tamamlandıktan sonra değişiklik yapmak zordur.\nSpiral modeli ise yinelemeli (iteratif) bir modeldir ve geliştirme sürecini her yinelemede genişleyen bir spiral şeklinde temsil eder. Risk yönetimini içerir ve proje boyunca esneklik ve uyarlama imkânı sağlar. Karmaşık projeler veya gereksinimlerin belirsiz ya da değişken olduğu durumlar için uygundur.",
  },
  {
    id: 61,
    frageDE:
      "Was sind die Hauptmerkmale des V-Modells in der Softwareentwicklung und wie unterscheidet es sich von anderen Vorgehensmodellen?",
    antwortDE:
      "Das V-Modell ist ein sequenzielles Vorgehensmodell in der Softwareentwicklung, bei dem jede Entwicklungsphase (linke Seite des „V“) einer Testphase (rechte Seite des „V“) zugeordnet ist. Es betont die Qualitätssicherung, indem für jede Entwicklungsphase gleichzeitig ein Testplan erstellt wird. Es ist weniger flexibel als iterative Modelle, aber ideal für Projekte mit klar definierten Anforderungen und hohem Qualitätsanspruch.",
    frageTR:
      "Yazılım geliştirmede V-modelinin temel özellikleri nelerdir ve diğer proje modellerinden nasıl farklıdır?",
    antwortTR:
      "V-modeli, yazılım geliştirmede kullanılan sıralı (sekansiyel) bir yaklaşımdır. Her geliştirme aşaması (V’nin sol tarafı), ona karşılık gelen bir test aşamasıyla (V’nin sağ tarafı) eşleştirilmiştir. Model, her geliştirme aşaması için eşzamanlı bir test planı hazırlanmasını öngörerek kalite güvencesini ön plana çıkarır. Yinelemeli (iteratif) modellere göre daha az esnektir, ancak gereksinimleri net tanımlanmış ve yüksek kalite beklentisi olan projeler için idealdir.",
  },
  {
    id: 62,
    frageDE: "Beschreiben Sie die Grundelemente von Scrum.",
    antwortDE:
      "Scrum ist ein agiles Framework für Projektmanagement. Es basiert auf kurzen Arbeitszyklen, genannt „Sprints“, die normalerweise 2-4 Wochen dauern. Ein Scrum-Team besteht aus einem Product Owner, der die Arbeit priorisiert, einem Scrum-Master, der den Prozess überwacht, und dem Entwicklungsteam, das die Arbeit ausführt. Nach jedem Sprint wird das Erreichte überprüft und das weitere Vorgehen geplant.",
    frageTR: "Scrum’un temel unsurlarını açıklayınız.",
    antwortTR:
      "Scrum, proje yönetimi için kullanılan çevik (agil) bir çerçevedir (framework). Kısa çalışma döngülerine, yani genellikle 2 ila 4 hafta süren “Sprint”lere dayanır. Bir Scrum ekibi şu rollerden oluşur: İşin önceliklendirilmesinden sorumlu Product Owner (Ürün Sahibi), süreci takip eden Scrum Master (Scrum Uzmanı) ve işi gerçekleştiren geliştirme ekibi. Her sprint sonunda elde edilen sonuçlar gözden geçirilir ve sonraki adımlar planlanır.",
  },
  {
    id: 63,
    frageDE: "Was ist ein MVP (Minimum Viable Product)?",
    antwortDE:
      "Ein MVP (Minimum Viable Product) ist ein grundlegendes, funktionsfähiges Produkt oder eine Dienstleistung, das/die mit minimalen Funktionen und Merkmalen entwickelt wird, um frühzeitig Feedback von Benutzern und Kunden zu erhalten. Es wird oft in agilen Entwicklungsmethoden eingesetzt und ermöglicht es Unternehmen, schnell eine erste Version ihres Produkts auf den Markt zu bringen, um die Reaktionen und Bedürfnisse der Nutzer zu verstehen und das Produkt iterativ weiterzuentwickeln.",
    frageTR: "MVP (Minimum Viable Product - Asgari Uygulanabilir Ürün) nedir?",
    antwortTR:
      "MVP (Minimum Viable Product - Asgari Uygulanabilir Ürün), temel işlevlere sahip, çalışır durumda olan bir ürün veya hizmetin erken aşamada geliştirilmiş hâlidir. Amacı, kullanıcılar ve müşterilerden erken geri bildirim almaktır. Genellikle çevik (agil) geliştirme yöntemlerinde kullanılır ve şirketlerin ürünlerinin ilk sürümünü hızla piyasaya sürerek kullanıcı tepkilerini ve ihtiyaçlarını anlamalarına, ardından ürünü yinelemeli olarak (iteratif biçimde) geliştirmelerine olanak tanır.",
  },
  {
    id: 64,
    frageDE:
      "Was versteht man im Bereich der Softwareentwicklung unter einer User Story?",
    antwortDE:
      "Eine User Story ist eine Technik in der agilen Softwareentwicklung, um Anforderungen an eine Software in einer benutzerzentrierten und verständlichen Weise zu erfassen. Sie beschreibt eine bestimmte Funktionalität oder ein Feature aus der Sicht des Endbenutzers. Eine typische User Story folgt einem einfachen Format: „Als [Benutzerrolle] möchte ich [Funktion], damit ich [Ziel] erreichen kann.“ User Stories fokussieren sich auf den Wert, den eine Funktion für den Benutzer bietet, anstatt sich auf technische Details zu konzentrieren. Sie dienen dazu, Anforderungen klar zu kommunizieren.",
    frageTR:
      "Yazılım geliştirme alanında bir ‘User Story’ (Kullanıcı Hikayesi) ne anlama gelir?",
    antwortTR:
      "User Story (Kullanıcı Hikayesi), çevik (agil) yazılım geliştirmede gereksinimleri kullanıcı odaklı ve anlaşılır bir şekilde tanımlamak için kullanılan bir tekniktir. Bir User Story, bir işlevi veya özelliği son kullanıcının bakış açısından tanımlar. Tipik bir User Story şu formatı izler: “Bir [kullanıcı rolü] olarak, [işlevi] yapmak istiyorum, böylece [hedefime] ulaşabilirim.” Kullanıcı hikayeleri, teknik ayrıntılardan ziyade, bir özelliğin kullanıcıya sağladığı değere odaklanır ve gereksinimlerin açık bir şekilde iletilmesine hizmet eder.",
  },
  {
    id: 65,
    frageDE:
      "Beschreiben Sie den Unterschied zwischen statischen und dynamischen Testverfahren und nennen Sie jeweils zwei Beispiele.",
    antwortDE:
      "Statische Testverfahren:\nDie Programmkomponenten werden nicht ausgeführt. Die Überprüfung und Fehlersuche erfolgt anhand des Quellcodes oder anderer Dokumente.\n- Schreibtischtest\n- Review von Anforderungen, Architektur, Design und Quellcode\nDynamische Testverfahren:\nDas Testen der Programmkomponenten erfolgt durch die Ausführung in einer Testumgebung.\n- Black-Box-Test\n- White-Box-Test\n- Extremwertetest",
    frageTR:
      "Statik ve dinamik test yöntemleri arasındaki farkı açıklayınız ve her biri için iki örnek veriniz.",
    antwortTR:
      "Statik test yöntemleri:\nProgram bileşenleri çalıştırılmaz. Hatalar ve doğrulama işlemleri kaynak kod veya diğer dokümanlar üzerinden yapılır.\n- Masa başı testi (Schreibtischtest)\n- Gereksinim, mimari, tasarım ve kaynak kod incelemesi (Review)\nDinamik test yöntemleri:\nProgram bileşenleri bir test ortamında çalıştırılarak test edilir.\n- Kara kutu testi (Black-Box-Test)\n- Beyaz kutu testi (White-Box-Test)\n- Aşırı değer testi (Extremwertetest)",
  },
  {
    id: 66,
    frageDE: "Was ist unter einem Extremwertetest zu verstehen?",
    antwortDE:
      "Fehler treten häufig bei extremen Eingabewerten auf. Daher liegt beim Extremwertetest der Fokus auf dem Testen der Werte, welche Nahe an den Extremwerten liegen.\nZiel dieses Tests ist es, das Systemverhalten an oder jenseits seiner Spezifikationsgrenzen zu beobachten und zu verstehen, ob das System unter diesen Bedingungen korrekt funktioniert oder wie und wann es versagt. Es hilft, Fehler, Schwachstellen oder Begrenzungen der Software aufzudecken, die nur unter extremen Bedingungen sichtbar werden.",
    frageTR: "Bir aşırı değer testi (Extremwertetest) altında ne anlaşılır?",
    antwortTR:
      "Hatalar genellikle aşırı giriş değerlerinde ortaya çıkar. Bu nedenle aşırı değer testinde odak, aşırı değerlere yakın olan değerlerin test edilmesidir.\nBu testin amacı, sistemin davranışını spesifikasyon sınırlarında veya ötesinde gözlemlemek ve sistemin bu koşullar altında doğru çalışıp çalışmadığını ya da nasıl ve ne zaman başarısız olduğunu anlamaktır. Bu test, yalnızca aşırı koşullar altında ortaya çıkan hataları, zayıf noktaları veya yazılım sınırlamalarını ortaya çıkarmaya yardımcı olur.",
  },
  {
    id: 67,
    frageDE:
      "Wie können Äquivalenzklassen genutzt werden, um eine effiziente und repräsentative Auswahl von Testfällen für ein System oder eine Funktion zu definieren?",
    antwortDE:
      "Äquivalenzklassen dienen der repräsentativen Auswahl von Testfällen. Dabei werden Eingabedaten in Gruppen aufgeteilt, die ähnliche Verhaltensweisen oder Eigenschaften aufweisen.\nDurch die Auswahl eines Testfalls aus jeder Äquivalenzklasse wird eine breite Abdeckung der verschiedenen Szenarien erreicht, ohne alle möglichen Kombinationen von Eingabewerten zu testen.\nDie Idee ist, dass, wenn ein Testfall aus einer Äquivalenzklasse erfolgreich besteht oder scheitert, die anderen Testfälle derselben Klasse wahrscheinlich ein ähnliches Ergebnis liefern.",
    frageTR:
      "Eşdeğerlik sınıfları (Äquivalenzklassen) bir sistem veya işlev için verimli ve temsil edici bir test vakası seçimi tanımlamak için nasıl kullanılabilir?",
    antwortTR:
      "Eşdeğerlik sınıfları, temsil edici test vakalarının seçilmesine hizmet eder. Bu yaklaşımda, giriş verileri benzer davranışlar veya özellikler gösteren gruplara ayrılır.\nHer bir eşdeğerlik sınıfından bir test vakasının seçilmesiyle, tüm olası giriş kombinasyonlarını test etmeye gerek kalmadan farklı senaryoların geniş bir kapsama alanı elde edilir.\nTemel fikir şudur: Bir eşdeğerlik sınıfındaki bir test vakası başarılı olursa veya başarısız olursa, aynı sınıftaki diğer test vakalarının da benzer sonuçlar vermesi muhtemeldir.",
  },
  {
    id: 68,
    frageDE: "Erklären Sie die Testverfahren Black-Box- und White-Box-Test.",
    antwortDE:
      "Beim Black-Box-Test kennen die Testpersonen die interne Funktionsweise der Software nicht. Stattdessen konzentrieren sie sich auf die Eingaben und Ausgaben der Software, um zu prüfen, ob sie wie erwartet funktioniert. Der Black-Box-Test wird durchgeführt, um die Funktionalität und Benutzerfreundlichkeit einer Software zu überprüfen.\nDer White-Box-Test ist ein Testverfahren, bei dem Testende Kenntnisse über die interne Funktionsweise der Software haben und die Struktur und das Design der Software untersuchen. Der White-Box-Test wird durchgeführt, um sicherzustellen, dass der Code einer Software den Anforderungen entspricht und effizient funktioniert.",
    frageTR: "Black-Box testi ve White-Box testi yöntemlerini açıklayınız.",
    antwortTR:
      "Black-Box testinde test yapan kişiler yazılımın iç işleyişini bilmezler. Bunun yerine, yazılımın beklenen şekilde çalışıp çalışmadığını kontrol etmek için giriş ve çıkışlara odaklanırlar. Black-Box testi, bir yazılımın işlevselliğini ve kullanıcı dostuluğunu doğrulamak için uygulanır.\nWhite-Box testi, test eden kişilerin yazılımın iç işleyişi hakkında bilgi sahibi olduğu ve yazılımın yapısını ve tasarımını incelediği bir test yöntemidir. White-Box testi, yazılımın kodunun gereksinimlere uygun ve verimli bir şekilde çalıştığından emin olmak amacıyla gerçekleştirilir.",
  },
  {
    id: 69,
    frageDE: "Was versteht man unter einem Code Review?",
    antwortDE:
      "Ein Code Review ist eine systematische Untersuchung von Programmcode und wird den statischen Testverfahren zugeordnet. Hierbei kann der Code unter anderem auf folgende Aspekte geprüft werden:\n- Funktionalität\n- Lesbarkeit und Verständlichkeit\n- Wartbarkeit\n- Best Practices und Standards\nNachteile:\n- Code Reviews erfordern Zeit und Ressourcen\n- Code Reviews können subjektiv sein, da die Meinungen der Reviewer variieren können\n- der Programmcode wird nicht ausgeführt",
    frageTR: "Kod incelemesi (Code Review) altında ne anlaşılır?",
    antwortTR:
      "Kod incelemesi, program kodunun sistematik olarak incelenmesidir ve statik test yöntemlerine dâhil edilir. Kod, aşağıdaki açılardan incelenebilir:\n- İşlevsellik\n- Okunabilirlik ve anlaşılabilirlik\n- Bakım kolaylığı\n- En iyi uygulamalar ve standartlara uygunluk\nDezavantajlar:\n- Kod incelemeleri zaman ve kaynak gerektirir\n- Kod incelemeleri öznel olabilir, çünkü değerlendiricilerin görüşleri farklılık gösterebilir\n- Program kodu çalıştırılmaz",
  },
  {
    id: 70,
    frageDE: "Erklären Sie das Prinzip der Anweisungsüberdeckung.",
    antwortDE:
      "Das Prinzip der Anweisungsüberdeckung ist ein grundlegender Aspekt des Softwaretests. Es handelt sich dabei um eine Methode der Code-Überdeckungsanalyse, die darauf abzielt, jede Anweisung oder Zeile Code mindestens einmal während des Testprozesses auszuführen.\nHierdurch kann ein Tester oder Entwickler bestätigen, dass jeder Codeabschnitt ausgeführt und getestet wurde. Das Hauptziel ist es, sicherzustellen, dass jede Anweisung funktioniert wie erwartet und die korrekten Ergebnisse liefert. Dies beinhaltet auch das Aufdecken von „totem Code“, das sind Codeabschnitte, die nie ausgeführt werden und potenziell entfernt werden könnten.",
    frageTR: "Komut kapsama (Anweisungsüberdeckung) ilkesini açıklayınız.",
    antwortTR:
      "Komut kapsama ilkesi, yazılım testinin temel bir yönüdür. Bu, kod kapsama analizinin bir yöntemidir ve test süreci boyunca her komutun veya kod satırının en az bir kez çalıştırılmasını amaçlar.\nBu şekilde bir testçi veya geliştirici, kodun her bölümünün çalıştırılıp test edildiğini doğrulayabilir. Ana hedef, her komutun beklendiği gibi çalıştığını ve doğru sonuçlar verdiğini sağlamaktır. Bu aynı zamanda 'ölü kod'u (hiç çalıştırılmayan ve potansiyel olarak kaldırılabilecek kod bölümlerini) ortaya çıkarmayı da içerir.",
  },
  {
    id: 71,
    frageDE:
      "Beschreiben Sie den Unterschied zwischen Zweigüberdeckung und Pfadüberdeckung.",
    antwortDE:
      "Zweigüberdeckung:\nalle Entscheidungszweige im Code müssen durch Tests abgedeckt sein\nein Entscheidungszweig tritt auf, wenn ein Programm an einem Punkt zwischen zwei möglichen Wegen wählen muss\nZiel ist es, dass jeder mögliche Pfad durch die Bedingungsanweisungen im Code mindestens einmal getestet wird\nPfadüberdeckung:\njeder mögliche Pfad im Programm muss mindestens einmal durchlaufen werden\nein Pfad ist eine Sequenz von Anweisungen im Code, die von einem Startpunkt zu einem Endpunkt führen\nPfadüberdeckung berücksichtigt die vollständige Ausführung aller Anweisungen und die möglichen Verzweigungen",
    frageTR:
      "Dallanma kapsamı (Zweigüberdeckung) ile yol kapsamı (Pfadüberdeckung) arasındaki farkı açıklayınız.",
    antwortTR:
      "Dallanma kapsamı:\nKoddaki tüm karar dalları testlerle kapsanmalıdır.\nBir karar dalı, programın iki olası yol arasında seçim yapması gereken bir noktada ortaya çıkar.\nAmaç, koddaki koşul ifadeleri aracılığıyla her olası yolun en az bir kez test edilmesini sağlamaktır.\nYol kapsamı:\nProgramdaki her olası yolun en az bir kez yürütülmesi gerekir.\nBir yol, kodda bir başlangıç noktasından bir bitiş noktasına kadar olan komut dizisidir.\nYol kapsamı, tüm komutların ve olası dallanmaların eksiksiz olarak çalıştırılmasını dikkate alır.",
  },
  {
    id: 72,
    frageDE:
      "Was sind Unit-Tests und warum sind sie wichtig in der Softwareentwicklung?",
    antwortDE:
      "Ein Unit-Test ist eine Methode in der Softwareentwicklung, bei der einzelne Komponenten des Codes (wie Funktionen oder Methoden) isoliert getestet werden. Der Zweck dieser Tests ist zu überprüfen, ob jede Komponente korrekt funktioniert. Sie helfen, Fehler frühzeitig zu erkennen und sicherzustellen, dass Änderungen im Code nicht zu unerwarteten Problemen führen.\nUnit-Tests sind ein wichtiger Teil des Testprozesses, aber sie werden oft mit anderen Testmethoden kombiniert, um das Gesamtverhalten der Software zu überprüfen.",
    frageTR:
      "Birim testleri (Unit-Tests) nedir ve yazılım geliştirmede neden önemlidir?",
    antwortTR:
      "Birim testi, yazılım geliştirmede kodun tekil bileşenlerinin (örneğin fonksiyonlar veya metotlar) izole edilerek test edildiği bir yöntemdir. Bu testlerin amacı, her bir bileşenin doğru şekilde çalışıp çalışmadığını doğrulamaktır. Hataların erken tespit edilmesine yardımcı olur ve kodda yapılan değişikliklerin beklenmedik sorunlara yol açmamasını sağlar.\nBirim testleri test sürecinin önemli bir parçasıdır, ancak genellikle yazılımın genel davranışını doğrulamak için diğer test yöntemleriyle birlikte kullanılır.",
  },
  {
    id: 73,
    frageDE:
      "Welche Eigenschaften sollten Unit-Tests erfüllen, um das FIRST-Prinzip zu befolgen?",
    antwortDE:
      "Das FIRST-Prinzip besagt, dass Unit-Tests folgende Eigenschaften aufweisen sollten:\nFast: Sie sollten schnell laufen, um den Entwicklungsprozess nicht zu verlangsamen.\nIndependent: Tests sollten unabhängig voneinander sein und in beliebiger Reihenfolge dasselbe Ergebnis liefern.\nRepeatable: Sie sollten unter gleichen Bedingungen stets dasselbe Ergebnis liefern.\nSelf-Validating: Tests sollten selbst bestimmen können, ob sie erfolgreich waren oder nicht.\nTimely: Unit-Tests sollten bereits vor der Entwicklung des Produktivcodes definiert werden.",
    frageTR:
      "Birim testlerinin FIRST ilkesine uyması için hangi özellikleri taşıması gerekir?",
    antwortTR:
      "FIRST ilkesi, birim testlerinin aşağıdaki özelliklere sahip olması gerektiğini belirtir:\nFast (Hızlı): Geliştirme sürecini yavaşlatmamak için testler hızlı çalışmalıdır.\nIndependent (Bağımsız): Testler birbirinden bağımsız olmalı ve hangi sırayla çalıştırılırsa çalıştırılsın aynı sonucu vermelidir.\nRepeatable (Tekrarlanabilir): Aynı koşullar altında her zaman aynı sonucu vermelidir.\nSelf-Validating (Kendini doğrulayan): Testler, başarılı olup olmadıklarını kendileri belirleyebilmelidir.\nTimely (Zamanında): Birim testleri, üretim kodu geliştirilmeye başlanmadan önce tanımlanmalıdır.",
  },
  {
    id: 74,
    frageDE: "Was ist das Ziel eines Regressionstests?",
    antwortDE:
      "Ein Regressionstest dient dazu, die Stabilität und Zuverlässigkeit der Anwendung nach Durchführung einer Aktualisierung zu prüfen.\nEr wird durchgeführt, um sicherzustellen, dass neue Änderungen oder Updates an einer Software keine unerwünschten Auswirkungen auf bereits vorhandene Funktionen haben.",
    frageTR: "Bir regresyon testinin amacı nedir?",
    antwortTR:
      "Bir regresyon testi, bir güncelleme sonrasında uygulamanın kararlılığını ve güvenilirliğini kontrol etmek için yapılır.\nBu test, yazılımdaki yeni değişikliklerin veya güncellemelerin mevcut işlevler üzerinde istenmeyen etkiler yaratmadığından emin olmak için uygulanır.",
  },
  {
    id: 75,
    frageDE:
      "Beim Programmtest stellen Sie fest, dass ein Programm nicht wie gewünscht funktioniert. Geben Sie die möglichen Vorgehensweisen an, die Fehlersuche mit Hilfe der Möglichkeiten eines Debuggers vorzunehmen.",
    antwortDE:
      "Zur Fehlersuche mit einem Debugger könnten Sie folgende Schritte befolgen:\n- Breakpoints setzen: Anhalten des Programms an gesetzten Punkten zur Überprüfung des aktuellen Zustands\n- Schritt-für-Schritt Ausführung: die genaue Kontrolle des Ablaufes zeigt, wann das Programm vom erwarteten Verhalten abweicht\n- Variablen beobachten: Überwachung der Werte von Variablen während der Programmausführung\n- Stack Inspektion: Überprüfen der Reihenfolge der aufgerufenen Funktionen und ihrer Parameter\n- Exception Handling: Identifikation der genauen Punkte im Code, an denen ein Fehler aufgetreten ist\n- Logging: Protokollierung von Programmaktivitäten",
    frageTR:
      "Bir program testi sırasında, programın beklenildiği gibi çalışmadığını fark ettiniz. Bir hata ayıklayıcı (Debugger) kullanarak hatayı bulmak için izlenebilecek olası adımları belirtiniz.",
    antwortTR:
      "Bir hata ayıklayıcı kullanarak hata tespiti için aşağıdaki adımlar izlenebilir:\n- Kesme noktaları (Breakpoints) belirleme: Programı belirli noktalarda durdurarak mevcut durumu kontrol etme.\n- Adım adım yürütme (Step-by-step execution): Programın akışını tam olarak kontrol ederek, beklenen davranıştan ne zaman sapıldığını belirleme.\n- Değişkenleri izleme (Watch variables): Program çalışırken değişkenlerin değerlerini gözlemleme.\n- Yığın incelemesi (Stack inspection): Çağrılan fonksiyonların ve parametrelerinin sırasını kontrol etme.\n- İstisna yönetimi (Exception handling): Hatanın kodun tam olarak hangi noktasında meydana geldiğini belirleme.\n- Günlük tutma (Logging): Program etkinliklerini kaydederek hata nedenlerini analiz etme.",
  },
  {
    id: 76,
    frageDE:
      "Warum ist Performance-Testing in der Softwareentwicklung wichtig?",
    antwortDE:
      "Performance-Testing ist wichtig, um sicherzustellen, dass eine Anwendung unter verschiedenen Lastbedingungen effizient und zuverlässig funktioniert. Durch Performance-Testing können folgende Fragen beantwortet werden:\nWie reagiert die Anwendung unter normaler oder erwarteter Last?\nWie skaliert die Anwendung mit steigender Last?\nWie reagiert die Anwendung unter Spitzenlastbedingungen?\nWie verhält sich die Anwendung über einen längeren Zeitraum?\nGibt es Engpässe oder Flaschenhälse in der Anwendung?",
    frageTR:
      "Performans testi (Performance-Testing) yazılım geliştirmede neden önemlidir?",
    antwortTR:
      "Performans testi, bir uygulamanın farklı yük koşulları altında verimli ve güvenilir bir şekilde çalıştığından emin olmak için önemlidir. Performans testleri aşağıdaki sorulara yanıt vermeye yardımcı olur:\nUygulama normal veya beklenen yük altında nasıl tepki verir?\nUygulama artan yükle birlikte nasıl ölçeklenir?\nUygulama en yüksek yük koşullarında nasıl davranır?\nUygulama uzun bir zaman diliminde nasıl çalışır?\nUygulamada darboğazlar veya performans kısıtlamaları var mı?",
  },
  {
    id: 77,
    frageDE:
      "Nennen Sie sechs Kriterien zur Bewertung der Qualität von Software.",
    antwortDE:
      "Kriterien für Softwarequalität:\nBenutzbarkeit\nÜbertragbarkeit\nÄnderbarkeit\nEffizienz\nZuverlässigkeit\nFunktionalität\nSicherheit",
    frageTR: "Yazılım kalitesini değerlendirmek için altı kriter belirtiniz.",
    antwortTR:
      "Yazılım kalitesini değerlendirme kriterleri:\nKullanılabilirlik (Benutzbarkeit)\nTaşınabilirlik (Übertragbarkeit)\nDeğiştirilebilirlik (Änderbarkeit)\nVerimlilik (Effizienz)\nGüvenilirlik (Zuverlässigkeit)\nİşlevsellik (Funktionalität)\nGüvenlik (Sicherheit)",
  },
  {
    id: 78,
    frageDE:
      "Was ist der Unterschied zwischen funktionalen und nichtfunktionalen Anforderungen in der Systementwicklung?",
    antwortDE:
      "Funktionale und nichtfunktionale Anforderungen sind zwei Kategorien von Spezifikationen, die dazu beitragen, die Erwartungen an ein System, eine Anwendung oder ein Produkt zu definieren.\nFunktionale Anforderungen beschreiben, was ein System tun soll. Sie beziehen sich auf bestimmte Funktionen oder Aufgaben, die das System ausführen kann.\nNichtfunktionale Anforderungen beziehen sich auf Aspekte wie Leistung, Zuverlässigkeit, Sicherheit und andere Qualitätsmerkmale. Sie beschreiben, wie gut das System seine Aufgaben ausführen soll oder unter welchen Bedingungen es funktionieren soll.",
    frageTR:
      "Sistem geliştirmede işlevsel (funktionale) ve işlevsel olmayan (nichtfunktionale) gereksinimler arasındaki fark nedir?",
    antwortTR:
      "İşlevsel ve işlevsel olmayan gereksinimler, bir sistem, uygulama veya ürünle ilgili beklentileri tanımlamaya yardımcı olan iki tür belirtimdir.\nİşlevsel gereksinimler, bir sistemin ne yapması gerektiğini tanımlar. Sistemin gerçekleştirebileceği belirli işlevler veya görevlerle ilgilidir.\nİşlevsel olmayan gereksinimler ise performans, güvenilirlik, güvenlik ve diğer kalite özellikleri gibi konularla ilgilidir. Sistemin görevlerini ne kadar iyi yerine getirmesi gerektiğini veya hangi koşullar altında çalışması gerektiğini açıklar.",
  },
  {
    id: 79,
    frageDE:
      "Was ist der Zweck eines Mock-ups und wie kann es im Designprozess eingesetzt werden?",
    antwortDE:
      "Ein Mock-up hat den Zweck, ein visuelles Modell eines Produkts, einer Webseite oder einer Anwendung zu erstellen. Es wird im Designprozess eingesetzt, um das endgültige Design, die Funktionalität und das Erscheinungsbild zu veranschaulichen.\nMock-ups dienen dazu, Ideen zu präsentieren, Feedback zu sammeln und Designentscheidungen zu treffen, bevor die eigentliche Entwicklung beginnt. Sie ermöglichen es, das Konzept zu visualisieren, Benutzererfahrungen zu testen und potenzielle Probleme oder Verbesserungen frühzeitig zu erkennen.",
    frageTR:
      "Bir Mock-up’ın amacı nedir ve tasarım sürecinde nasıl kullanılabilir?",
    antwortTR:
      "Mock-up, bir ürünün, web sitesinin veya uygulamanın görsel bir modelini oluşturmayı amaçlar. Tasarım sürecinde, nihai tasarımı, işlevselliği ve görünümü görselleştirmek için kullanılır.\nMock-up’lar fikirleri sunmak, geri bildirim toplamak ve geliştirme süreci başlamadan önce tasarım kararları almak için kullanılır. Ayrıca konsepti görselleştirmeyi, kullanıcı deneyimini test etmeyi ve olası sorunları veya iyileştirmeleri erken aşamada tespit etmeyi sağlar.",
  },
  {
    id: 80,
    frageDE:
      "Was ist das Staging-Testing in Bezug auf Softwareentwicklung und -bereitstellung?",
    antwortDE:
      "Beim Staging-Testing werden Anwendungen in einer Staging-Umgebung getestet, bevor sie in der Produktionsumgebung bereitgestellt werden. Die Staging-Umgebung ist eine separate Umgebung, die der Produktionsumgebung ähnelt und oft als Zwischenschritt zwischen Entwicklung und Produktion fungiert.\nZweck des Staging-Testings ist es, sicherzustellen, dass die Software ordnungsgemäß funktioniert, bevor sie für die tatsächlichen Benutzer in der Produktionsumgebung verfügbar gemacht wird. Dieser Test ermöglicht es, potenzielle Probleme oder Fehler zu identifizieren und zu beheben, bevor die Software in den Live-Betrieb geht.",
    frageTR:
      "Yazılım geliştirme ve dağıtım bağlamında geçiş testi (Staging-Testing) nedir?",
    antwortTR:
      "Geçiş testi, bir uygulamanın üretim ortamına dağıtılmadan önce geçiş (staging) ortamında test edilmesidir. Geçiş ortamı, üretim ortamına benzeyen ayrı bir ortamdır ve genellikle geliştirme ile üretim aşamaları arasında bir ara adım olarak kullanılır.\nGeçiş testinin amacı, yazılımın üretim ortamındaki gerçek kullanıcılar için kullanılabilir hale gelmeden önce düzgün çalıştığından emin olmaktır. Bu test, yazılım canlı ortama geçmeden önce potansiyel sorunları veya hataları belirleyip düzeltmeye olanak tanır.",
  },
  {
    id: 81,
    frageDE:
      "Wie unterscheiden sich Komponententests, Funktionstests und Integrationstests im Softwareentwicklungsprozess voneinander?",
    antwortDE:
      "Komponententests überprüfen einzelne Softwarekomponenten, wie Funktionen, Klassen oder Module, isoliert voneinander. Sie sollen sicherzustellen, dass jede Komponente ordnungsgemäß funktioniert und die erwarteten Ergebnisse liefert.\nFunktionstests testen die Software auf die funktionalen Anforderungen. Sie überprüfen, ob das System als Ganzes die gewünschten Funktionen und Verhaltensweisen korrekt umsetzt.\nIntegrationstests prüfen die Interaktion zwischen verschiedenen Komponenten und stellen sicher, dass sie zusammenarbeiten und korrekt integriert sind. Sie testen die Schnittstellen und Kommunikation zwischen den Komponenten.",
    frageTR:
      "Yazılım geliştirme sürecinde bileşen testleri, fonksiyon testleri ve entegrasyon testleri birbirinden nasıl farklıdır?",
    antwortTR:
      "Bileşen testleri (Komponententests), yazılım bileşenlerini — fonksiyonlar, sınıflar veya modüller gibi — birbirinden bağımsız olarak test eder. Amaç, her bir bileşenin düzgün çalıştığını ve beklenen sonuçları verdiğini doğrulamaktır.\nFonksiyon testleri (Funktionstests), yazılımın fonksiyonel gereksinimlerini test eder. Sistemin bir bütün olarak istenen işlevleri ve davranışları doğru şekilde uygulayıp uygulamadığını kontrol eder.\nEntegrasyon testleri (Integrationstests), farklı bileşenler arasındaki etkileşimi test eder ve bu bileşenlerin birlikte doğru şekilde çalıştığından emin olur. Bu testler, bileşenler arasındaki arabirimleri ve iletişimi denetler.",
  },
  {
    id: 82,
    frageDE: "Erläutern Sie die Methode des Blue-Green Deployments.",
    antwortDE:
      "Die Idee des Blue-Green Deployments besteht darin, zwei separate und identische Umgebungen („Blue“ und „Green“) bereitzustellen.\nDie aktuelle Produktionsversion (Blue) ist live.\nEine neue Version der Anwendung (Green) wird in der separaten Umgebung bereitgestellt und getestet.\nSobald die Tests erfolgreich abgeschlossen sind, kann der Datenverkehr von Blue auf Green umgeleitet werden.\nDer Datenverkehr wird schrittweise umgeleitet, um sicherzustellen, dass das System in der Green-Umgebung ordnungsgemäß funktioniert.\nFalls Probleme in der Green-Umgebung auftreten, kann der Datenverkehr schnell auf die Blue-Umgebung zurückgeleitet werden.",
    frageTR: "Blue-Green Deployment (Mavi-Yeşil Dağıtım) yöntemini açıklayın.",
    antwortTR:
      "Blue-Green Deployment yöntemi, iki ayrı ve aynı yapıda ortamın ('Blue' ve 'Green') sağlanmasına dayanır.\nMevcut üretim versiyonu (Blue) canlı olarak çalışır.\nUygulamanın yeni versiyonu (Green), ayrı bir ortamda dağıtılır ve test edilir.\nTestler başarıyla tamamlandıktan sonra, ağ trafiği Blue ortamından Green ortamına yönlendirilebilir.\nTrafik kademeli olarak yönlendirilir, böylece Green ortamında sistemin düzgün çalıştığından emin olunur.\nGreen ortamında bir sorun meydana gelirse, trafik hızla Blue ortamına geri yönlendirilebilir.",
  },
  {
    id: 83,
    frageDE: "Wofür steht die Abkürzung KVP im Qualitätsmanagement?",
    antwortDE:
      "KVP (kontinuierlicher Verbesserungsprozess) ist ein Ansatz zur permanenten Verbesserung in Organisationen. Das Ziel ist eine kontinuierliche Verbesserung in Prozessen, Produkten und Dienstleistungen, um die Effizienz und die Qualität im Unternehmen langfristig zu stärken. Der kontinuierliche Verbesserungsprozess wird niemals beendet.",
    frageTR: "Kalite yönetiminde KVP kısaltması ne anlama gelir?",
    antwortTR:
      "KVP (kontinuierlicher Verbesserungsprozess – sürekli iyileştirme süreci), organizasyonlarda kalıcı bir gelişim yaklaşımıdır. Amacı, süreçlerde, ürünlerde ve hizmetlerde sürekli iyileştirme sağlayarak işletmenin verimliliğini ve kalitesini uzun vadede artırmaktır. Sürekli iyileştirme süreci asla sona ermez.",
  },
  {
    id: 84,
    frageDE:
      "Erklären Sie den Unterschied zwischen den Begriffen Qualitätssicherung und Qualitätskontrolle.",
    antwortDE:
      "Qualitätssicherung ist ein proaktiver Prozess, der darauf abzielt, Fehler während der Produktion oder Bereitstellung von Dienstleistungen zu verhindern. Es handelt sich um systematische Maßnahmen, die dazu dienen, die Qualität eines Endprodukts von Beginn an zu gewährleisten.\nQualitätskontrolle ist ein reaktiver Prozess, bei dem Produkte oder Dienstleistungen nach ihrer Herstellung oder Bereitstellung auf Fehler geprüft werden. Es umfasst Maßnahmen wie Tests und Inspektionen, um sicherzustellen, dass das Endprodukt den Qualitätsstandards entspricht.",
    frageTR:
      "Kalite güvencesi (Qualitätssicherung) ile kalite kontrolü (Qualitätskontrolle) kavramları arasındaki farkı açıklayın.",
    antwortTR:
      "Kalite güvencesi (Qualitätssicherung), üretim veya hizmet sunumu sırasında hataları önlemeyi amaçlayan proaktif bir süreçtir. Bu süreç, nihai ürünün kalitesinin en başından itibaren sağlanması için sistematik önlemler içerir.\nKalite kontrolü (Qualitätskontrolle) ise, ürünlerin veya hizmetlerin üretim veya sunumdan sonra hatalara karşı incelendiği reaktif bir süreçtir. Testler ve denetimler gibi önlemleri kapsar ve nihai ürünün kalite standartlarına uygun olup olmadığını kontrol eder.",
  },
  {
    id: 85,
    frageDE: "Nennen und erklären Sie die vier Phasen des PDCA-Zyklus.",
    antwortDE:
      "Plan:\n- Festlegung von Zielen und Planung der Aktivitäten zur Zielerreichung\n- Entwicklung eines Plans mit klaren Maßnahmen\nDo:\n- Implementierung der definierten Maßnahmen und Aktivitäten\n- Erfassung von Daten und Informationen während der Umsetzung\nCheck:\n- Überprüfung und Bewertung der Ergebnisse, die während der Umsetzung gesammelt wurden\n- Vergleich der tatsächlichen Ergebnisse mit den definierten Zielen\n- Analyse von Abweichungen und Ursachen von Problemen\nAct:\n- Basierend auf den Ergebnissen der Überprüfung werden geeignete Maßnahmen endgültig umgesetzt\n- Aktualisierung des Plans für den nächsten Zyklus, basierend auf den gewonnenen Erkenntnissen",
    frageTR: "PDCA döngüsünün dört aşamasını adlandırın ve açıklayın.",
    antwortTR:
      "Plan (Planla):\n- Hedefleri belirleme ve bu hedeflere ulaşmak için faaliyetleri planlama\n- Net adımları içeren bir plan geliştirme\nDo (Uygula):\n- Belirlenen önlemlerin ve faaliyetlerin uygulanması\n- Uygulama sürecinde veri ve bilgilerin toplanması\nCheck (Kontrol et):\n- Uygulama sırasında toplanan sonuçların gözden geçirilmesi ve değerlendirilmesi\n- Gerçek sonuçların belirlenen hedeflerle karşılaştırılması\n- Sapmaların ve sorunların nedenlerinin analizi\nAct (Uygula/Düzelt):\n- İnceleme sonuçlarına dayanarak uygun önlemler kalıcı olarak uygulanır\n- Edinilen bilgiler doğrultusunda bir sonraki döngü için plan güncellenir.",
  },
  {
    id: 86,
    frageDE:
      "Was bedeutet es, wenn eine Software als barrierefrei bezeichnet wird?",
    antwortDE:
      "Barrierefreie Software bedeutet, dass die Software so gestaltet ist, dass sie von allen Menschen, einschließlich Menschen mit Behinderungen, genutzt werden kann.\nDies beinhaltet Funktionen wie Bildschirmleseprogramme für Blinde, Untertitel und Transkriptionen für Gehörlose, und die Fähigkeit, die Software mit einer Tastatur oder Spracherkennung anstelle einer Maus zu bedienen.",
    frageTR:
      "Bir yazılımın erişilebilir (barrierefrei) olarak tanımlanması ne anlama gelir?",
    antwortTR:
      "Erişilebilir yazılım (barrierefreie Software), tüm insanların — engelli bireyler dahil — kullanabileceği şekilde tasarlanmış yazılımdır.\nBu, görme engelliler için ekran okuma programları, işitme engelliler için altyazı ve transkripsiyonlar gibi özellikleri ve yazılımın fare yerine klavye veya sesle kontrol edilebilme yeteneğini içerir.",
  },
  {
    id: 87,
    frageDE:
      "Was versteht man unter Softwareergonomie und welche Prinzipien und Maßnahmen können angewendet werden, um die Benutzerfreundlichkeit von Softwareanwendungen zu verbessern?",
    antwortDE:
      "Softwareergonomie bezieht sich auf die Gestaltung von Software, die auf die menschlichen Fähigkeiten abgestimmt ist, um Benutzerfreundlichkeit und Effizienz zu maximieren. Dazu gehören Prinzipien wie:\n- Nutzerzentrierung: Gestaltung mit Blick auf die Bedürfnisse und Fähigkeiten der Endnutzer\n- Einfachheit und Konsistenz: intuitive und konsistente Benutzeroberflächen\n- Rückmeldung: klare und zeitnahe Rückmeldung an die Benutzer über ihre Interaktionen\n- Anpassbarkeit: Flexibilität zur Anpassung an individuelle Bedürfnisse\n- Fehlervermeidung und -behandlung: Design, das die Fehleranfälligkeit minimiert und bei der Fehlerbehebung unterstützt",
    frageTR:
      "Yazılım ergonomisi (Softwareergonomie) nedir ve yazılım uygulamalarının kullanıcı dostuluğunu artırmak için hangi ilkeler ve önlemler uygulanabilir?",
    antwortTR:
      "Yazılım ergonomisi (Softwareergonomie), yazılımın kullanıcı dostu ve verimli olmasını sağlamak için insan yeteneklerine uygun şekilde tasarlanmasıdır. Şu ilkeleri içerir:\n- Kullanıcı odaklılık (Nutzerzentrierung): Son kullanıcıların ihtiyaçlarına ve yeteneklerine göre tasarım\n- Basitlik ve tutarlılık (Einfachheit und Konsistenz): Sezgisel ve tutarlı kullanıcı arayüzleri\n- Geri bildirim (Rückmeldung): Kullanıcılara yaptıkları işlemler hakkında açık ve zamanında bilgi verilmesi\n- Uyarlanabilirlik (Anpassbarkeit): Kullanıcıların yazılımı kendi ihtiyaçlarına göre ayarlayabilmesi\n- Hata önleme ve yönetimi (Fehlervermeidung und -behandlung): Hataları en aza indiren ve çözümünde yardımcı olan tasarım",
  },
  {
    id: 88,
    frageDE:
      "Nennen Sie in Bezug auf Softwareergonomie die Grundsätze der Dialoggestaltung.",
    antwortDE:
      "Die Grundsätze der Dialoggestaltung sind Richtlinien zur Verbesserung der Benutzer-Software-Interaktion:\nAufgabenangemessenheit: Software unterstützt Nutzer effektiv und stört nicht\nSelbstbeschreibungsfähigkeit: jede Aktion sollte ohne zusätzliche Erklärung verständlich sein\nSteuerbarkeit: Nutzer können Interaktionen steuern und beeinflussen\nErwartungskonformität: Software entspricht gängigen Standards und Erwartungen\nFehlertoleranz: Software verzeiht Fehler und unterstützt bei deren Behebung\nIndividualisierbarkeit: Nutzer können Software an ihre Bedürfnisse anpassen\nLernförderlichkeit: Software unterstützt den Lernprozess des Nutzers",
    frageTR:
      "Yazılım ergonomisi bağlamında diyalog tasarımının (Dialoggestaltung) temel ilkelerini belirtin.",
    antwortTR:
      "Diyalog tasarımının (Dialoggestaltung) temel ilkeleri, kullanıcı-yazılım etkileşimini geliştirmeye yönelik kılavuzlardır:\nGöreve uygunluk (Aufgabenangemessenheit): Yazılım, kullanıcıyı etkin şekilde destekler ve engellemez.\nKendini açıklayıcılık (Selbstbeschreibungsfähigkeit): Her işlem, ek bir açıklamaya gerek kalmadan anlaşılır olmalıdır.\nKontrol edilebilirlik (Steuerbarkeit): Kullanıcılar etkileşimleri kontrol edebilmelidir.\nBeklentiye uygunluk (Erwartungskonformität): Yazılım, yaygın standartlara ve kullanıcı beklentilerine uygun olmalıdır.\nHata toleransı (Fehlertoleranz): Yazılım, hataları affeder ve düzeltmede yardımcı olur.\nKişiselleştirilebilirlik (Individualisierbarkeit): Kullanıcılar yazılımı kendi ihtiyaçlarına göre uyarlayabilir.\nÖğrenmeyi destekleme (Lernförderlichkeit): Yazılım, kullanıcının öğrenme sürecini destekler.",
  },
  {
    id: 89,
    frageDE:
      "Was sind relationale Datenbanken? Nennen Sie zwei Beispiele für nicht-relationale Datenbanktypen.",
    antwortDE:
      "Relationale Datenbanken sind Datenbanken, die auf dem relationalen Datenbankmodell basieren. Sie speichern Daten in Tabellen, die aus Zeilen und Spalten bestehen. Die Beziehungen zwischen den Tabellen werden durch Primärschlüssel-Fremdschlüssel-Beziehungen hergestellt.\nBeispiele für nicht-relationale Datenbanktypen sind:\n- Dokumentenorientierte Datenbanken\n- Schlüssel-Wert-Datenbanken\n- Spaltenorientierte Datenbanken\n- Graphdatenbanken\n- Zeitreihendatenbanken\n- Objektorientierte Datenbanken",
    frageTR:
      "İlişkisel veritabanları (relationale Datenbanken) nedir? İlişkisel olmayan (nicht-relationale) iki veritabanı türü örneği verin.",
    antwortTR:
      "İlişkisel veritabanları (relationale Datenbanken), verileri satır ve sütunlardan oluşan tablolarda depolayan ve tablolar arasındaki ilişkileri birincil anahtar (Primärschlüssel) – yabancı anahtar (Fremdschlüssel) ilişkileriyle tanımlayan veritabanlarıdır.\nİlişkisel olmayan (nicht-relationale) veritabanı türlerine örnekler:\n- Belge tabanlı veritabanları (dokumentenorientierte Datenbanken)\n- Anahtar-değer veritabanları (Schlüssel-Wert-Datenbanken)\n- Sütun tabanlı veritabanları (spaltenorientierte Datenbanken)\n- Grafik veritabanları (Graphdatenbanken)\n- Zaman serisi veritabanları (Zeitreihendatenbanken)\n- Nesne yönelimli veritabanları (objektorientierte Datenbanken)",
  },
  {
    id: 90,
    frageDE:
      "Welche Unterschiede bestehen zwischen strukturierten, semi-strukturierten und unstrukturierten Daten?",
    antwortDE:
      "Strukturierte Daten haben eine klar definierte und erwartete Struktur. Sie können leicht in relationalen Datenbanken gespeichert und abgefragt werden.\nSemistrukturierte Daten fallen irgendwo zwischen strukturierte und unstrukturierte Daten. Sie haben eine gewisse Struktur, die aber nicht so streng definiert ist. Semistrukturierte Daten können Metadaten oder Tags enthalten, die den Daten Kontext und Bedeutung verleihen, wie z. B. XML und JSON-Dateien.\nUnstrukturierte Daten haben keine spezifische Struktur. Sie kommen in vielen verschiedenen Formaten vor. Beispiele für unstrukturierte Daten sind Bilder, Audio- und Videodateien und Webseiten.",
    frageTR:
      "Yapılandırılmış, yarı yapılandırılmış ve yapılandırılmamış veriler arasındaki farklar nelerdir?",
    antwortTR:
      "Yapılandırılmış veriler (strukturierte Daten) açıkça tanımlanmış bir yapıya sahiptir ve kolayca ilişkisel veritabanlarında saklanabilir ve sorgulanabilir.\nYarı yapılandırılmış veriler (semi-strukturierte Daten), yapılandırılmış ve yapılandırılmamış veriler arasında yer alır. Belirli bir düzene sahiptirler ancak bu yapı katı değildir. Genellikle verilere bağlam kazandıran meta veriler veya etiketler içerirler — örneğin XML veya JSON dosyaları.\nYapılandırılmamış veriler (unstrukturierte Daten) belirli bir yapıya sahip değildir. Görseller, ses, video dosyaları ve web sayfaları gibi birçok farklı formatta bulunabilirler.",
  },
  {
    id: 91,
    frageDE: "Was ist ein Data Warehouse?",
    antwortDE:
      "Ein Data Warehouse ist ein zentralisiertes Repository, das Daten aus mehreren Quellen sammelt, integriert und speichert, um komplexe Analysen und datengetriebene Entscheidungsfindung zu ermöglichen.\nEs handelt sich dabei um eine Art Datenbanksystem, das speziell für analytische Abfragen und Berichterstattung konzipiert ist, im Gegensatz zu traditionellen Datenbanksystemen, die für den täglichen Betrieb und die Transaktionsverarbeitung ausgelegt sind. Im Data Warehouse werden Daten oft über lange Zeiträume gespeichert, was die Durchführung historischer Analysen ermöglicht. Zudem sind die Daten typischerweise strukturiert und organisiert.",
    frageTR: "Bir Veri Ambarı (Data Warehouse) nedir?",
    antwortTR:
      "Veri Ambarı (Data Warehouse), birden fazla kaynaktan verileri toplayan, birleştiren ve depolayan merkezi bir yapıdır. Bu yapı, karmaşık analizlerin yapılmasını ve verilere dayalı karar verme süreçlerini kolaylaştırır.\nVeri ambarı, günlük işlemler için tasarlanan geleneksel veritabanlarının aksine, analitik sorgular ve raporlama için özel olarak tasarlanmış bir veritabanı sistemidir. Veriler genellikle uzun süreli olarak saklanır, bu da geçmişe dönük analizlerin yapılmasını sağlar. Ayrıca veriler genellikle yapılandırılmış ve düzenli bir biçimdedir.",
  },
  {
    id: 92,
    frageDE:
      "Was ist ein Data Lake und wie unterscheidet er sich von einem Data Warehouse?",
    antwortDE:
      "Ein Data Lake ist ein zentralisiertes Repository, das die Speicherung großer Mengen roher Daten in ihrem ursprünglichen Format ermöglicht.\nIm Gegensatz zu einem Data Warehouse, das strukturierte Daten speichert und ein vordefiniertes Schema für gespeicherte Daten benötigt, kann ein Data Lake sowohl strukturierte als auch unstrukturierte Daten (wie E-Mails, Video-, Log- und Social-Media-Daten) speichern.",
    frageTR:
      "Bir Veri Gölü (Data Lake) nedir ve bir Veri Ambarı’ndan (Data Warehouse) nasıl farklıdır?",
    antwortTR:
      "Veri Gölü (Data Lake), büyük miktarda ham veriyi orijinal formatında depolamayı sağlayan merkezi bir veri havuzudur.\nBir Veri Ambarı’ndan (Data Warehouse) farkı, sadece yapılandırılmış verileri değil, yapılandırılmamış verileri de (örneğin e-postalar, videolar, log kayıtları, sosyal medya verileri gibi) depolayabilmesidir. Ayrıca, Veri Gölü verileri önceden tanımlanmış bir şemaya ihtiyaç duymadan saklar.",
  },
  {
    id: 93,
    frageDE:
      "Welche Datentypen werden in SQL verwendet und welchen Zweck erfüllen sie?",
    antwortDE:
      "Zu den gängigen SQL-Datentypen gehören:\nINTEGER (für Ganzzahlen)\nFLOAT oder DECIMAL (für Gleitkommazahlen)\nVARCHAR oder CHAR (für Zeichenketten)\nDATE, TIME oder TIMESTAMP (für Datum und Uhrzeit)\nBOOLEAN (für boolesche Werte)\nBINARY (Binär-String)\nJeder Datentyp hat spezifische Eigenschaften, wie die Größe des Wertebereichs oder die maximale Anzahl von Zeichen, die er speichern kann. Durch die Auswahl des richtigen Datentyps kann die Datenintegrität gewährleistet und die Speichereffizienz optimiert werden.",
    frageTR:
      "SQL’de hangi veri türleri kullanılır ve bunlar hangi amaçlara hizmet eder?",
    antwortTR:
      "SQL’de yaygın olarak kullanılan veri türleri şunlardır:\nINTEGER (tam sayılar için)\nFLOAT veya DECIMAL (ondalıklı sayılar için)\nVARCHAR veya CHAR (metin dizeleri için)\nDATE, TIME veya TIMESTAMP (tarih ve saat için)\nBOOLEAN (mantıksal – doğru/yanlış değerler için)\nBINARY (ikili veriler için)\nHer veri türü, değer aralığı veya karakter uzunluğu gibi kendine özgü özelliklere sahiptir. Doğru veri türünün seçilmesi, veri bütünlüğünün korunmasını ve depolama verimliliğinin artırılmasını sağlar.",
  },
  {
    id: 94,
    frageDE:
      "Erklären Sie in Bezug auf Datenbanken die Begriffe Primärschlüssel und Fremdschlüssel.",
    antwortDE:
      "In Bezug auf Datenbanken haben Primärschlüssel und Fremdschlüssel besondere Bedeutungen:\nEin Primärschlüssel ist ein Feld oder eine Kombination von Feldern in einer Tabelle, das bzw. die jede Zeile eindeutig identifiziert. Jeder Primärschlüssel ist eindeutig innerhalb der Tabelle und es darf keine Duplikate oder Nullwerte geben.\nEin Fremdschlüssel ist ein Feld oder eine Kombination von Feldern in einer Tabelle, das auf den Primärschlüssel einer anderen Tabelle verweist. Der Zweck eines Fremdschlüssels besteht darin, die Integrität der Daten zu gewährleisten und Beziehungen zwischen Tabellen herzustellen.",
    frageTR:
      "Veritabanlarıyla ilgili olarak birincil anahtar (Primärschlüssel) ve yabancı anahtar (Fremdschlüssel) kavramlarını açıklayın.",
    antwortTR:
      "Veritabanlarında birincil anahtar (Primärschlüssel) ve yabancı anahtarın (Fremdschlüssel) özel anlamları vardır:\nBirincil anahtar, bir tablodaki her satırı benzersiz şekilde tanımlayan bir alan veya alan kombinasyonudur. Aynı tabloda birincil anahtar değerleri tekrarlanamaz ve boş (NULL) olamaz.\nYabancı anahtar, bir tablodaki alanın başka bir tablodaki birincil anahtara referans verdiği alandır. Yabancı anahtarın amacı, verilerin bütünlüğünü sağlamak ve tablolar arasındaki ilişkileri tanımlamaktır.",
  },
  {
    id: 95,
    frageDE: "Was ist referenzielle Integrität in Bezug auf Datenbanken?",
    antwortDE:
      "Referenzielle Integrität bezieht sich auf die Konsistenz von Beziehungen zwischen Tabellen. Die referenzielle Integrität soll sicherstellen, dass in einer Beziehung zwischen zwei Tabellen der Wert des Fremdschlüssels in der referenzierten Tabelle immer auf einen gültigen Wert verweist.\nWenn eine Änderung oder Löschung in einer Tabelle vorgenommen wird, überprüft die referenzielle Integrität, ob dies Auswirkungen auf andere Tabellen hat und ob die Konsistenz der Beziehungen erhalten bleibt.",
    frageTR:
      "Veritabanlarında referans bütünlüğü (referenzielle Integrität) ne anlama gelir?",
    antwortTR:
      "Referans bütünlüğü (referenzielle Integrität), tablolar arasındaki ilişkilerin tutarlılığıyla ilgilidir. Referans bütünlüğü, bir tablodaki yabancı anahtar değerlerinin (Fremdschlüssel) her zaman referans verilen tablodaki geçerli bir değere karşılık gelmesini sağlar.\nBir tabloda değişiklik veya silme işlemi yapıldığında, referans bütünlüğü diğer tabloların bu durumdan etkilenip etkilenmediğini kontrol eder ve ilişkilerin tutarlılığının korunmasını garanti eder.",
  },
  {
    id: 96,
    frageDE:
      "Was sind Datenbankanomalien und welche Arten von Anomalien können auftreten?",
    antwortDE:
      "Datenbankanomalien sind Probleme, die in einer Datenbank auftreten und zu Inkonsistenzen oder unerwünschten Effekten führen können. Es gibt drei Arten von Datenbankanomalien:\n- Einfügeanomalie\n- Aktualisierungsanomalie\n- Löschanomalie\nDiese Anomalien können vermieden werden, indem man Normalisierungstechniken anwendet, wie beispielsweise das Aufteilen von Tabellen (Vermeiden von Redundanz) und die klare Definition von Beziehungen zwischen Tabellen.",
    frageTR:
      "Veritabanı anomalileri (Datenbankanomalien) nedir ve hangi tür anomaliler ortaya çıkabilir?",
    antwortTR:
      "Veritabanı anomalileri (Datenbankanomalien), veritabanında ortaya çıkan ve tutarsızlıklara veya istenmeyen sonuçlara yol açan sorunlardır. Üç tür anomali vardır:\n- Ekleme anomalisi (Einfügeanomalie)\n- Güncelleme anomalisi (Aktualisierungsanomalie)\n- Silme anomalisi (Löschanomalie)\nBu anomaliler, tabloların uygun şekilde bölünmesi (veri fazlalığının – Redundanz – önlenmesi) ve tablolar arasındaki ilişkilerin açık biçimde tanımlanması gibi normalleştirme (Normalisierung) teknikleriyle önlenebilir.",
  },
  {
    id: 97,
    frageDE:
      "Beschreiben Sie die erste, zweite und dritte Normalform in relationalen Datenbanken.",
    antwortDE:
      "Eine Relation ist in der ersten Normalform, wenn jeder Attributwert atomar ist. Attribute mit Attributwerten, welche nicht atomar sind, müssen in mehrere Attribute aufgeteilt werden.\nDie zweite Normalform zielt darauf ab, Abhängigkeiten zwischen Nicht-Schlüsselattributen zu beseitigen. Datenfelder, die von einem Schlüsselkandidaten (Primärschlüssel) nicht vollständig funktional abhängig sind, müssen in weiteren Tabellen untergebracht werden.\nDie dritte Normalform beseitigt transitive Abhängigkeiten zwischen Nicht-Schlüsselattributen. Die transitiv abhängigen Datenfelder müssen in weitere Tabellen ausgelagert werden.",
    frageTR:
      "İlişkisel veritabanlarında birinci, ikinci ve üçüncü normal formu açıklayın.",
    antwortTR:
      "Bir tablo (ilişki), birinci normal formda (1NF) olarak kabul edilir, eğer her sütundaki değer atomikse. Atomik olmayan (birden fazla değer içeren) sütunlar ayrı sütunlara bölünmelidir.\nİkinci normal form (2NF), birincil anahtar dışındaki alanlar arasındaki bağımlılıkları ortadan kaldırmayı amaçlar. Birincil anahtara tam olarak bağlı olmayan alanlar ayrı tablolara taşınmalıdır.\nÜçüncü normal form (3NF) ise, birincil anahtara doğrudan bağlı olmayan (transitif bağımlı) alanları ortadan kaldırır. Bu tür alanlar da bağımsız tablolara aktarılmalıdır.",
  },
  {
    id: 98,
    frageDE:
      "Welche Schritte sind notwendig, um Datenstrukturen in einem ER-Diagramm zu modellieren?",
    antwortDE:
      "Ein Entity-Relationship-Diagramm (ER-Diagramm) wird zur Modellierung von Datenbanken wie folgt verwendet:\n1. Identifizieren der Entitäten: Das sind die Hauptobjekte oder Konzepte in der Datenbank.\n2. Bestimmen der Attribute: Das sind die Eigenschaften oder Merkmale der Entitäten.\n3. Identifizieren der Beziehungen: Das sind die Verbindungen und Interaktionen zwischen Entitäten.\n4. Bestimmen der Kardinalität: Das definiert, wie viele Instanzen einer Entität mit einer Instanz einer anderen Entität in Beziehung stehen können.",
    frageTR:
      "Bir ER diyagramında (Entity-Relationship-Diagramm) veri yapılarının modellenmesi için hangi adımlar gereklidir?",
    antwortTR:
      "Bir Varlık-İlişki Diyagramı (Entity-Relationship-Diagramm – ER-Diagramm) oluşturmak için aşağıdaki adımlar izlenir:\n1. Varlıkları belirleme (Entitäten): Veritabanındaki ana nesneler veya kavramlardır.\n2. Öznitelikleri belirleme (Attribute): Varlıkların özelliklerini veya niteliklerini tanımlar.\n3. İlişkileri belirleme (Beziehungen): Varlıklar arasındaki bağlantıları ve etkileşimleri gösterir.\n4. Kardinaliteyi belirleme (Kardinalität): Bir varlığın kaç örneğinin başka bir varlıkla ilişkili olabileceğini tanımlar.",
  },
  {
    id: 99,
    frageDE:
      "Welche speziellen Anforderungen in Bezug auf die Beziehungen zwischen den einzelnen Entitätstypen sind bei der Ableitung von Datentabellen aus einem ER-Diagramm zu beachten?",
    antwortDE:
      "Bei der Ableitung von Tabellen aus einem ER-Diagramm müssen Sie die Art der Beziehungen berücksichtigen:\n- 1:1: Eine Fremdschlüsselbeziehung in einer der beiden Tabellen erstellen.\n- 1:n: Der Primärschlüssel der „1“-Tabelle wird als Fremdschlüssel in der „n“-Tabelle verwendet.\n- n:m: Diese Art von Beziehungen müssen über eine zusätzliche Tabelle mit Fremdschlüsseln zu beiden beteiligten Tabellen aufgelöst werden.",
    frageTR:
      "Bir ER diyagramından (Entity-Relationship-Diagramm) veri tabloları türetilirken varlık türleri (Entitätstypen) arasındaki ilişkilerle ilgili hangi özel gereklilikler dikkate alınmalıdır?",
    antwortTR:
      "ER diyagramından tablolar oluştururken ilişki türleri dikkate alınmalıdır:\n- 1:1 ilişkisi: İki tablodan birinde yabancı anahtar (Fremdschlüssel) oluşturulur.\n- 1:n ilişkisi: '1' tarafındaki tablonun birincil anahtarı (Primärschlüssel), 'n' tarafındaki tabloya yabancı anahtar olarak eklenir.\n- n:m ilişkisi: Bu tür ilişkiler, her iki tabloya da ait yabancı anahtarları içeren ek bir ilişki tablosu aracılığıyla çözülür.",
  },
  {
    id: 100,
    frageDE:
      "Was ist eine Stored Procedure und welche Vorteile bietet sie in der Datenbankentwicklung?",
    antwortDE:
      "Eine Stored Procedure ist eine vorbereitete SQL-Anweisung, die auf der Datenbank gespeichert ist. Sie kann parametrisiert werden und mehrere SQL-Anweisungen enthalten, die komplexe Operationen ausführen.\nVorteile von Stored Procedures:\n- Leistung: Sie sind effizienter bei wiederholten und komplexen Anfragen, da sie einmal kompiliert und direkt auf dem Server ausgeführt werden.\n- Wiederverwendbarkeit: Sie können in verschiedenen Anwendungen wiederverwendet werden.\n- Sicherheit: Sie begrenzen den direkten Zugriff auf die Datenbank.\n- Transaktionskontrolle: Sie erlauben es, mehrere Operationen als eine einzige Transaktion zu behandeln.",
    frageTR:
      "Stored Procedure (saklı yordam) nedir ve veritabanı geliştirmede hangi avantajları sağlar?",
    antwortTR:
      "Stored Procedure (saklı yordam), veritabanında saklanan önceden hazırlanmış SQL ifadeleridir. Parametre alabilir ve birden fazla SQL işlemini içerebilir, bu sayede karmaşık görevler gerçekleştirebilir.\nStored Procedure’lerin avantajları:\n- Performans: Tek seferlik derleme ile sunucu üzerinde doğrudan çalıştığı için tekrarlanan ve karmaşık sorgularda daha verimlidir.\n- Yeniden kullanılabilirlik: Farklı uygulamalarda tekrar kullanılabilir.\n- Güvenlik: Veritabanına doğrudan erişimi sınırlar.\n- İşlem kontrolü (Transaktionskontrolle): Birden fazla işlemin tek bir işlem olarak yürütülmesini sağlar.",
  },
  {
    id: 101,
    frageDE:
      "Wie funktionieren Trigger in Datenbankumgebungen und wie können sie zur automatischen Ausführung von Aktionen verwendet werden?",
    antwortDE:
      "Ein Trigger in einer Datenbank ist eine Art von Stored Procedure, die automatisch in Reaktion auf bestimmte Ereignisse in einer spezifischen Tabelle oder Ansicht in der Datenbank ausgeführt wird. Die Ereignisse können das Einfügen, Aktualisieren oder Löschen von Daten sein.\nEin Trigger wird immer mit einer Tabelle verknüpft und aktiviert sich, wenn eine angegebene Datenmanipulationsoperation (DML) ausgeführt wird.",
    frageTR:
      "Veritabanı ortamlarında Trigger (tetikleyici) nasıl çalışır ve eylemlerin otomatik olarak yürütülmesi için nasıl kullanılabilir?",
    antwortTR:
      "Bir Trigger (tetikleyici), belirli bir tabloya veya görünüme bağlı olan ve belirli olaylara yanıt olarak otomatik çalışan bir Stored Procedure (saklı yordam) türüdür. Bu olaylar, veri ekleme (INSERT), güncelleme (UPDATE) veya silme (DELETE) olabilir.\nTrigger her zaman bir tabloyla ilişkilendirilir ve belirtilen bir veri işleme (DML) işlemi yürütüldüğünde otomatik olarak tetiklenir.",
  },
  {
    id: 102,
    frageDE:
      "Warum ist die Indizierung von Spalten in einer Datenbank wichtig und wie kann sie die Leistung von Abfragen verbessern?",
    antwortDE:
      "Ein Index bietet einen schnellen Zugriff auf die Daten. Er enthält eine sortierte Liste von Werten einer bestimmten Spalte und Verweise auf die Speicherorte der zugehörigen Daten. Wenn eine Abfrage eine indizierte Spalte verwendet, kann das Datenbanksystem den Index verwenden, um schnell zu den benötigten Daten zu navigieren, anstatt alle Zeilen durchsuchen zu müssen.\nDies kann die Leistung von Abfragen erheblich verbessern. Allerdings hat die Erstellung von Indizes auch einen gewissen Overhead, sowohl in Bezug auf den Speicherplatz als auch auf die Verarbeitungszeit bei Schreibvorgängen, da der Index immer aktualisiert werden muss.",
    frageTR:
      "Bir veritabanında sütunların indekslenmesi (Indizierung—indeksleme) neden önemlidir ve sorguların performansını nasıl artırabilir?",
    antwortTR:
      "Indeks (index), verilere hızlı erişim sağlar. Belirli bir sütunun sıralı değer listesini ve ilgili verilerin depolandığı konumlara işaretçileri içerir. Bir sorgu indeksli bir sütunu kullandığında, veritabanı sistemi tüm satırları taramak yerine indeksi kullanarak gerekli verilere hızla gidebilir.\nBu durum sorgu performansını önemli ölçüde iyileştirebilir. Ancak indeks oluşturmanın depolama alanı ve yazma işlemlerinde işlem yükü (overhead) gibi maliyetleri vardır; çünkü indeks, her yazma/güncelleme işleminde güncellenmek zorundadır.",
  },
  {
    id: 103,
    frageDE:
      "Was versteht man unter dem Begriff „Transaktion“ im Kontext von SQL-Statements?",
    antwortDE:
      "Eine Transaktion in SQL bezeichnet eine Gruppe von miteinander verbundenen Anweisungen, die als eine einzelne Arbeitseinheit behandelt werden. Sie folgen dem ACID-Prinzip:\nAtomarität: Alles oder nichts. Alle Operationen in der Transaktion werden erfolgreich ausgeführt oder gar keine.\nKonsistenz: Die Transaktion bringt die Datenbank von einem konsistenten Zustand in einen anderen.\nIsolation: Jede Transaktion wird so behandelt, als ob sie isoliert von anderen läuft.\nDauerhaftigkeit: Nachdem eine Transaktion abgeschlossen ist, sind ihre Auswirkungen dauerhaft.",
    frageTR:
      "SQL deyimleri bağlamında “Transaktion (işlem)” kavramından ne anlaşılır?",
    antwortTR:
      "SQL’de Transaktion (işlem), birlikte tek bir iş birimi olarak ele alınan, birbiriyle ilişkili deyimler (SQL komutları) grubudur. ACID ilkesine uyar:\nAtomarität (Atomiklik): Ya hep ya hiç. İşlemdeki tüm adımlar ya başarılı olur ya da hiçbiri uygulanmaz.\nKonsistenz (Tutarlılık): İşlem, veritabanını bir tutarlı durumdan başka bir tutarlı duruma taşır.\nIsolation (Yalıtım): Her işlem, diğer işlemlerden yalıtılmış (izole) biçimde çalışır.\nDauerhaftigkeit (Kalıcılık): İşlem tamamlandıktan sonra etkileri kalıcıdır.",
  },
  {
    id: 104,
    frageDE:
      "Erklären Sie die Funktion und Verwendung der folgenden SQL-Befehle im Zusammenhang mit Transaktionen: BEGIN TRANSACTION, COMMIT, ROLLBACK",
    antwortDE:
      "Diese Befehle in SQL werden verwendet, um Transaktionen zu kontrollieren:\nBEGIN TRANSACTION: Dieser Befehl signalisiert den Beginn einer Transaktion.\nCOMMIT: Schließt die Transaktion ab und speichert alle Änderungen dauerhaft in der Datenbank. Nach einem COMMIT kann die Transaktion nicht mehr rückgängig gemacht werden.\nROLLBACK: Macht alle Änderungen, die in der aktuellen Transaktion gemacht wurden, rückgängig, wenn ein Fehler auftritt oder wenn die Transaktion aus irgendeinem Grund nicht abgeschlossen werden kann.",
    frageTR:
      "Aşağıdaki SQL komutlarının, transaksiyonlar (Transaktionen—işlemler) bağlamındaki işlev ve kullanımını açıklayın: BEGIN TRANSACTION, COMMIT, ROLLBACK",
    antwortTR:
      "Bu SQL komutları işlemleri (Transaktionen) yönetmek için kullanılır:\nBEGIN TRANSACTION: Bir işlemin başladığını bildirir.\nCOMMIT: İşlemi tamamlar ve tüm değişiklikleri veritabanına kalıcı olarak yazar. COMMIT’ten sonra geri alma yapılamaz.\nROLLBACK: Hata oluştuğunda veya işlem herhangi bir nedenle tamamlanamadığında, mevcut işlemde yapılan tüm değişiklikleri geri alır.",
  },
  {
    id: 105,
    frageDE:
      "Was sind SQL Joins? Erklären Sie kurz „INNER JOIN“, „LEFT JOIN“, „RIGHT JOIN“ und „FULL JOIN“.",
    antwortDE:
      "SQL Joins werden verwendet, um Daten aus zwei oder mehr Tabellen basierend auf einer verwandten Spalte (Verbundbedingung) zu kombinieren. Ein Join wird typischerweise in einer SELECT-Anweisung verwendet und kann mehrere Bedingungen in der ON-Klausel haben.\nINNER JOIN: Gibt Zeilen zurück, bei denen es eine Übereinstimmung in beiden Tabellen gibt.\nLEFT JOIN: Gibt alle Zeilen der linken Tabelle und die übereinstimmenden Zeilen der rechten Tabelle zurück.\nRIGHT JOIN: Gibt alle Zeilen der rechten Tabelle und die übereinstimmenden Zeilen der linken Tabelle zurück.\nFULL JOIN: Gibt Zeilen zurück, wenn es eine Übereinstimmung in einer der Tabellen gibt.",
    frageTR:
      "SQL Join’lar (birleştirmeler) nedir? „INNER JOIN“, „LEFT JOIN“, „RIGHT JOIN“ ve „FULL JOIN“ kavramlarını kısaca açıklayın.",
    antwortTR:
      "SQL Join’lar, ilişkilendirilmiş bir sütuna (bağ/koşul) dayanarak iki veya daha fazla tablodan verileri birleştirmek için kullanılır; genellikle SELECT ifadesinde ON koşulu ile tanımlanır.\nINNER JOIN: Her iki tabloda da eşleşme olan satırları döndürür.\nLEFT JOIN: Sol tablonun tüm satırlarını ve sağ tabloda eşleşen satırları döndürür.\nRIGHT JOIN: Sağ tablonun tüm satırlarını ve sol tabloda eşleşen satırları döndürür.\nFULL JOIN: Tablolardan en az birinde eşleşme varsa satırları döndürür.",
  },
  {
    id: 106,
    frageDE:
      "Was ist der Unterschied zwischen „Primary Key“, „Foreign Key“ und „Unique Key“ in einer Datenbank?",
    antwortDE:
      "Primary Key: Ein Primary Key (Primärschlüssel) identifiziert eindeutig jeden Datensatz in einer Tabelle. Es darf keine NULL-Werte enthalten und jeder Wert muss eindeutig sein.\nForeign Key: Ein Foreign Key (Fremdschlüssel) stellt eine Beziehung zwischen zwei Tabellen her. Er verweist auf den Primary Key einer anderen Tabelle und gewährleistet referenzielle Integrität.\nUnique Key: Ein Unique Key sorgt dafür, dass die Werte in einer Spalte eindeutig sind, ähnlich wie beim Primary Key. Im Gegensatz zum Primary Key darf jedoch eine Tabelle mehrere Unique Keys haben und NULL-Werte enthalten.",
    frageTR:
      "Bir veritabanında „Primary Key (Birincil Anahtar)“, „Foreign Key (Yabancı Anahtar)“ ve „Unique Key (Benzersiz Anahtar)“ arasındaki fark nedir?",
    antwortTR:
      "Primary Key (Birincil Anahtar): Her bir tablo kaydını benzersiz olarak tanımlar. NULL değer içeremez ve her değer benzersiz olmalıdır.\nForeign Key (Yabancı Anahtar): İki tablo arasında ilişki kurar. Başka bir tablodaki Primary Key’e referans verir ve referans bütünlüğünü sağlar.\nUnique Key (Benzersiz Anahtar): Bir sütundaki değerlerin benzersiz olmasını sağlar, Primary Key’e benzer şekilde. Ancak bir tabloda birden fazla Unique Key olabilir ve NULL değer içerebilir.",
  },
  {
    id: 107,
    frageDE:
      "Wie kann man in SQL Daten gruppieren und aggregieren? Nennen Sie wichtige Funktionen und Befehle.",
    antwortDE:
      "In SQL werden Daten mit dem Befehl GROUP BY gruppiert. Dieser wird in Kombination mit Aggregatfunktionen verwendet, um zusammenfassende Informationen zu erzeugen.\nWichtige Aggregatfunktionen sind:\nCOUNT() – zählt Datensätze,\nSUM() – summiert Werte,\nAVG() – berechnet den Durchschnitt,\nMIN() – gibt den kleinsten Wert zurück,\nMAX() – gibt den größten Wert zurück.\nHAVING wird verwendet, um Ergebnisse nach der Gruppierung zu filtern (ähnlich wie WHERE, aber nach der Aggregation).",
    frageTR:
      "SQL’de veriler nasıl gruplanır ve özetlenir (aggregate edilir)? Önemli fonksiyonları ve komutları belirtin.",
    antwortTR:
      "SQL’de veriler GROUP BY komutu ile gruplanır. Bu komut, özet bilgiler oluşturmak için toplama (aggregate) fonksiyonlarıyla birlikte kullanılır.\nÖnemli toplama (aggregate) fonksiyonları şunlardır:\nCOUNT() – kayıtları sayar,\nSUM() – değerleri toplar,\nAVG() – ortalamayı hesaplar,\nMIN() – en küçük değeri döndürür,\nMAX() – en büyük değeri döndürür.\nHAVING ifadesi, gruplama sonrasında sonuçları filtrelemek için kullanılır (WHERE ifadesine benzer, ancak toplama işleminden sonra uygulanır).",
  },
  {
    id: 108,
    frageDE:
      "Was ist Normalisierung in einer Datenbank und welche Vorteile bringt sie?",
    antwortDE:
      "Normalisierung ist der Prozess der Organisation von Daten in einer Datenbank, um Redundanz zu minimieren und Datenintegrität zu verbessern. Dabei werden Tabellen so gestaltet, dass jedes Datenelement nur einmal gespeichert wird.\nVorteile:\n– Vermeidung redundanter Daten,\n– Verbesserung der Konsistenz und Integrität,\n– Vereinfachung von Updates und Wartung,\n– geringere Gefahr von Anomalien bei Einfügen, Löschen und Aktualisieren.\nDie Normalisierung erfolgt in sogenannten Normalformen (1NF, 2NF, 3NF, …).",
    frageTR:
      "Veritabanında Normalisierung (normalizasyon) nedir ve hangi avantajları sağlar?",
    antwortTR:
      "Normalisierung (normalizasyon), veritabanındaki verilerin gereksiz tekrarları (redundanz) azaltmak ve veri bütünlüğünü (integrität) artırmak amacıyla düzenlenmesidir. Bu işlemde tablolar, her verinin yalnızca bir kez saklanacağı şekilde tasarlanır.\nAvantajları:\n– Yinelenen verilerin önlenmesi,\n– Tutarlılık ve bütünlüğün artırılması,\n– Güncelleme ve bakım işlemlerinin kolaylaştırılması,\n– Ekleme, silme ve güncelleme anormalliklerinin azaltılması.\nNormalizasyon, Normalformen (Normal Formlar — 1NF, 2NF, 3NF vb.) adı verilen aşamalarla gerçekleştirilir.",
  },
  {
    id: 109,
    frageDE:
      "Was ist ein Entity-Relationship-Modell (ER-Modell) und wozu dient es in der Datenbankentwicklung?",
    antwortDE:
      "Ein Entity-Relationship-Modell (ER-Modell) ist ein konzeptionelles Datenmodell, das Entitäten (Datenobjekte) und deren Beziehungen zueinander beschreibt. Es wird in der Phase des Datenbankdesigns verwendet, um die logische Struktur einer Datenbank zu planen.\nZweck:\n– Visualisierung der Datenstruktur,\n– Verständnis der Beziehungen zwischen Entitäten,\n– Grundlage für die Erstellung des physischen Datenbankmodells.",
    frageTR:
      "Entity-Relationship-Modell (ER-Modeli) nedir ve veritabanı geliştirmede (Datenbankentwicklung) ne işe yarar?",
    antwortTR:
      "Entity-Relationship-Modell (ER-Modeli), varlıkları (Entitäten—veri nesneleri) ve bunlar arasındaki ilişkileri tanımlayan kavramsal bir veri modelidir. Veritabanı tasarımı aşamasında, veritabanının mantıksal yapısını planlamak için kullanılır.\nAmacı:\n– Veri yapısının görselleştirilmesi,\n– Varlıklar arasındaki ilişkilerin anlaşılması,\n– Fiziksel veritabanı modelinin oluşturulması için temel sağlanması.",
  },
  {
    id: 110,
    frageDE:
      "Was versteht man unter referenzieller Integrität in einer relationalen Datenbank?",
    antwortDE:
      "Referenzielle Integrität stellt sicher, dass Beziehungen zwischen Tabellen konsistent bleiben. Wenn eine Tabelle (Kindtabelle) auf eine andere Tabelle (Elterntabelle) verweist, darf ein Fremdschlüsselwert nur auf existierende Primärschlüsselwerte zeigen.\nWenn z. B. ein Datensatz in der Elterntabelle gelöscht wird, kann die referenzielle Integrität vorschreiben, dass:\n– der entsprechende Datensatz in der Kindtabelle ebenfalls gelöscht wird (ON DELETE CASCADE),\n– der Fremdschlüsselwert auf NULL gesetzt wird (ON DELETE SET NULL),\n– oder die Löschung verhindert wird (RESTRICT).",
    frageTR:
      "İlişkisel bir veritabanında referenzielle Integrität (referans bütünlüğü) ne anlama gelir?",
    antwortTR:
      "Referenzielle Integrität (referans bütünlüğü), tablolar arasındaki ilişkilerin tutarlılığını sağlar. Bir tablo (çocuk tablo), başka bir tabloya (ebeveyn tablo) referans verdiğinde, yabancı anahtar (Foreign Key) yalnızca mevcut bir birincil anahtar (Primary Key) değerine işaret edebilir.\nÖrneğin, ebeveyn tablodaki bir kayıt silindiğinde, referans bütünlüğü şu kuralları uygulayabilir:\n– İlgili kayıt çocuk tablodan da silinir (ON DELETE CASCADE),\n– Yabancı anahtar değeri NULL yapılır (ON DELETE SET NULL),\n– Silme işlemi engellenir (RESTRICT).",
  },
  {
    id: 111,
    frageDE: "Was ist JSON und wo wird es verwendet?",
    antwortDE:
      "JSON (JavaScript Object Notation) ist ein Datenformat, das zur Speicherung und Übertragung strukturierter Daten verwendet wird. JSON speichert Daten in Form von Attribut-Wert-Paaren. Ein JSON-Dokument besteht aus geschweiften Klammern und enthält eine oder mehrere Eigenschaften. Jede Eigenschaft besteht aus einem Namen und einem Wert, die durch einen Doppelpunkt getrennt sind.\n{\n„name“: „Andreas Müller“,\n„age“: 30,\n„city“: „Hamburg“\n}\nJSON wird häufig in Webanwendungen und APIs (Application Programming Interfaces) eingesetzt.",
    frageTR: "JSON nedir ve nerede kullanılır?",
    antwortTR:
      'JSON (JavaScript Object Notation), yapılandırılmış verilerin depolanması ve aktarılması için kullanılan bir veri formatıdır. JSON verileri, öznitelik-değer çiftleri biçiminde saklar. Bir JSON belgesi süslü parantezler içinde yer alır ve bir veya daha fazla özellik içerir. Her özellik bir ad ve iki nokta üst üste ile ayrılmış bir değerden oluşur.\n{\n"name": "Andreas Müller",\n"age": 30,\n"city": "Hamburg"\n}\nJSON genellikle web uygulamalarında ve API’lerde (Application Programming Interfaces – Uygulama Programlama Arayüzleri) kullanılır.',
  },
  {
    id: 112,
    frageDE:
      "Was sind die Unterschiede zwischen den Datenformaten CSV und XML?",
    antwortDE:
      "CSV (Comma-Separated Values) und XML (eXtensible Markup Language) sind verschiedene Datenformate, die zur Speicherung und Übertragung von strukturierten Daten verwendet werden.\nCSV ist ein textbasiertes Format, bei dem Daten in Tabellenform organisiert sind. Jede Zeile repräsentiert einen Datensatz und die einzelnen Werte innerhalb einer Zeile sind durch Trennzeichen voneinander getrennt. CSV enthält normalerweise keine Strukturinformationen oder Hierarchie.\nXML ist eine Markup-Sprache, die eine hierarchische Struktur verwendet. Daten werden in Tags eingebettet und können ineinander verschachtelt werden, um komplexe Hierarchien darzustellen.",
    frageTR: "CSV ve XML veri formatları arasındaki farklar nelerdir?",
    antwortTR:
      "CSV (Comma-Separated Values – Virgülle Ayrılmış Değerler) ve XML (eXtensible Markup Language – Genişletilebilir Biçimlendirme Dili), yapılandırılmış verilerin depolanması ve aktarılması için kullanılan farklı veri formatlarıdır.\nCSV, verilerin tablo biçiminde düzenlendiği metin tabanlı bir formattır. Her satır bir veri kaydını temsil eder ve satır içindeki değerler ayırıcılarla (örneğin virgül) birbirinden ayrılır. CSV genellikle yapı veya hiyerarşi bilgisi içermez.\nXML, hiyerarşik bir yapı kullanan bir biçimlendirme dilidir. Veriler etiketler (tags) içine yerleştirilir ve karmaşık hiyerarşileri temsil etmek için iç içe geçebilir.",
  },
  {
    id: 113,
    frageDE:
      "Wozu dient die DTD (Dokumenttyp-Definition) bei der Verwendung von XML-Dateien?",
    antwortDE:
      "Die Dokumenttyp-Definition (DTD) ist eine Möglichkeit, die Struktur und den Inhalt von XML-Dokumenten zu definieren. Sie dient dazu, Regeln und Beschränkungen für die Elemente, Attribute und deren Beziehungen in einem XML-Dokument festzulegen.\nDie DTD stellt eine formale Beschreibung bereit, die es ermöglicht, die Gültigkeit und Konformität eines XML-Dokuments zu überprüfen.",
    frageTR: "XML dosyalarında DTD (Belge Türü Tanımı) ne işe yarar?",
    antwortTR:
      "Doküman Tipi Tanımı (DTD – Document Type Definition), XML belgelerinin yapısını ve içeriğini tanımlamanın bir yoludur. DTD, bir XML belgesindeki öğeler, öznitelikler ve bunların ilişkileri için kuralları ve kısıtlamaları belirlemek amacıyla kullanılır.\nDTD, bir XML belgesinin geçerliliğini ve tanımlanan yapıya uygunluğunu doğrulamaya yarayan resmi bir tanım sağlar.",
  },
  {
    id: 114,
    frageDE:
      "Was sind die Unterschiede zwischen einer „well-formed“ und einer „valid“ XML-Datei?",
    antwortDE:
      "Eine „well-formed“ XML-Datei erfüllt die syntaktischen Regeln des XML-Formats. Sie folgt den XML-Konventionen wie dem korrekten Verschachteln von Elementen, der Verwendung von Tags und Attributen gemäß den XML-Spezifikationen. Eine „well-formed“ XML-Datei kann von einem XML-Parser gelesen werden, ohne dass Syntaxfehler auftreten.\nEine „valid“ XML-Datei erfüllt nicht nur die syntaktischen Anforderungen, sondern entspricht auch den Regeln und Einschränkungen einer definierten Dokumenttyp-Definition (DTD) oder eines XML-Schemas. Eine „valid“ XML-Datei wird auf Konformität mit den in der DTD oder im XML-Schema festgelegten Regeln überprüft.",
    frageTR:
      "“Well-formed” ve “valid” XML dosyaları arasındaki farklar nelerdir?",
    antwortTR:
      "“Well-formed” (iyi biçimlendirilmiş) bir XML dosyası, XML formatının sözdizimsel kurallarını karşılayan dosyadır. Bu tür dosyalar, öğelerin doğru şekilde iç içe yerleştirilmesi, etiketlerin ve özniteliklerin XML kurallarına uygun kullanımı gibi XML standartlarına uyar. “Well-formed” bir XML dosyası, XML ayrıştırıcısı (parser) tarafından sözdizim hatası olmadan okunabilir.\n“Valid” (geçerli) bir XML dosyası ise yalnızca sözdizim kurallarına uymakla kalmaz, aynı zamanda tanımlanmış bir DTD (Document Type Definition) veya XML şemasında belirtilen kurallar ve kısıtlamalarla da uyumlu olmalıdır. “Valid” XML dosyaları, tanımlı DTD veya şemadaki kurallara uygunluk açısından doğrulanır.",
  },
  {
    id: 115,
    frageDE:
      "Beschreiben Sie die Eigenschaften von Struktogrammen in Bezug auf Allgemeingültigkeit, Deklaration von Variablen und Exklusivität.",
    antwortDE:
      "Allgemeingültigkeit: Struktogramme sollen keine spezifischen Syntaxelemente einer bestimmten Programmiersprache beinhalten. Ihr Design sollte allgemeingültig und universell sein, sodass die dargestellten Logiken leicht verstanden und in jede Programmiersprache übersetzt werden können.\nDeklaration von Variablen: Die Deklarationen von Variablen und Konstanten werden im ersten Anweisungsblock vorgenommen.\nExklusivität: Jede Anweisung in einem Struktogramm wird durch einen eigenen Strukturblock repräsentiert. Selbst bei Anweisungen, die ähnlich oder identisch sind, ist es nicht erlaubt, sie in einem einzigen Strukturblock zu kombinieren.",
    frageTR:
      "Strüktogramların genelliği, değişkenlerin bildirimi ve özgünlük açısından özelliklerini açıklayın.",
    antwortTR:
      "Genellik (Allgemeingültigkeit): Strüktogramlar belirli bir programlama diline ait özel sözdizimi öğelerini içermemelidir. Tasarımı genel ve evrensel olmalı, böylece gösterilen mantık kolayca anlaşılabilir ve herhangi bir programlama diline dönüştürülebilir olmalıdır.\nDeğişken Bildirimi (Deklaration von Variablen): Değişkenlerin ve sabitlerin bildirimleri ilk komut bloğunda yapılır.\nÖzgünlük (Exklusivität): Bir strüktogramdaki her komut, kendi yapı bloğu ile temsil edilir. Benzer veya aynı komutlar olsa bile, bunların tek bir yapı bloğunda birleştirilmesine izin verilmez.",
  },
  {
    id: 116,
    frageDE:
      "Der UML-Standard unterscheidet zwischen Strukturdiagrammen und Verhaltensdiagrammen. Nennen Sie jeweils zwei Beispiele aus diesen beiden Kategorien.",
    antwortDE:
      "Strukturdiagramme:\n- Klassendiagramm\n- Objektdiagramm\n- Paketdiagramm\n- Komponentendiagramm\n- Profildiagramm\n- Verteilungsdiagramm\n- Kompositionsstrukturdiagramm\n\nVerhaltensdiagramme:\n- Anwendungsfalldiagramm\n- Zustandsdiagramm\n- Aktivitätsdiagramm\n- Sequenzdiagramm\n- Kommunikationsdiagramm\n- Zeitdiagramm\n- Interaktionsübersichtsdiagramm",
    frageTR:
      "UML standardı yapı (Struktur) ve davranış (Verhalten) diyagramları arasında ayrım yapar. Her iki kategoriye de iki örnek veriniz.",
    antwortTR:
      "Yapı Diyagramları (Strukturdiagramme):\n- Sınıf Diyagramı (Klassendiagramm)\n- Nesne Diyagramı (Objektdiagramm)\n- Paket Diyagramı (Paketdiagramm)\n- Bileşen Diyagramı (Komponentendiagramm)\n- Profil Diyagramı (Profildiagramm)\n- Dağıtım Diyagramı (Verteilungsdiagramm)\n- Kompozisyon Yapı Diyagramı (Kompositionsstrukturdiagramm)\n\nDavranış Diyagramları (Verhaltensdiagramme):\n- Kullanım Durumu Diyagramı (Anwendungsfalldiagramm)\n- Durum Diyagramı (Zustandsdiagramm)\n- Aktivite Diyagramı (Aktivitätsdiagramm)\n- Sekans Diyagramı (Sequenzdiagramm)\n- İletişim Diyagramı (Kommunikationsdiagramm)\n- Zaman Diyagramı (Zeitdiagramm)\n- Etkileşim Genel Görünüm Diyagramı (Interaktionsübersichtsdiagramm)",
  },
  {
    id: 117,
    frageDE:
      "Ein UML-Anwendungsfalldiagramm visualisiert einen Ablauf in einem System, ist aber keine Ablaufbeschreibung. Erklären Sie diesen Zusammenhang.",
    antwortDE:
      "Ein Anwendungsfalldiagramm ist keine Ablaufbeschreibung sondern ein Verhaltensdiagramm, das die Funktionalität eines Systems aus der Sicht der Benutzerinnen und Benutzer darstellt. Es zeigt die verschiedenen Akteure, die mit dem System interagieren, und die Anwendungsfälle, also die spezifischen Funktionen oder Aufgaben, die das System ausführen kann. Es stellt die Beziehungen zwischen diesen Akteuren und Anwendungsfällen dar, zeigt aber nicht die genauen Abläufe oder den zeitlichen Verlauf dieser Interaktionen.\nDas Anwendungsfalldiagramm dient zur Identifizierung und Darstellung der funktionalen Anforderungen an ein System.",
    frageTR:
      "Bir UML kullanım durumu diyagramı (Anwendungsfalldiagramm) bir sistemdeki süreci görselleştirir ancak bir süreç açıklaması değildir. Bu ilişkiyi açıklayınız.",
    antwortTR:
      "Bir kullanım durumu diyagramı (Anwendungsfalldiagramm) bir süreç açıklaması değil, sistemin işlevselliğini kullanıcıların bakış açısından gösteren bir davranış diyagramıdır (Verhaltensdiagramm). Bu diyagram, sistemle etkileşime giren aktörleri (kullanıcılar veya harici sistemler) ve sistemin gerçekleştirebileceği belirli işlevleri veya görevleri (kullanım durumlarını) gösterir. Aktörler ile kullanım durumları arasındaki ilişkileri belirtir ancak bu etkileşimlerin tam akışını veya zaman sırasını göstermez.\nKullanım durumu diyagramı, bir sistemin fonksiyonel gereksinimlerini belirlemek ve göstermek için kullanılır.",
  },
  {
    id: 118,
    frageDE:
      "Was stellt ein Sequenzdiagramm in UML dar und in welchen Szenarien wird es typischerweise verwendet?",
    antwortDE:
      "Ein Sequenzdiagramm in der Unified Modeling Language (UML) zeigt die Interaktionen zwischen Objekten in der Reihenfolge, in der sie auftreten. Ein Sequenzdiagramm besteht aus einer Reihe von vertikalen „Lebenslinien“, die Objekte oder Klassen repräsentieren, und horizontalen „Nachrichten“, die zwischen den Lebenslinien hin und her gehen. Die Nachrichten sind zeitlich von oben nach unten geordnet, sodass man sehen kann, in welcher Reihenfolge die Interaktionen stattfinden.\nSequenzdiagramme helfen dabei, die dynamischen Interaktionen in einem System darzustellen und zu analysieren.",
    frageTR:
      "Bir UML sekans diyagramı (Sequenzdiagramm) neyi gösterir ve hangi durumlarda kullanılır?",
    antwortTR:
      'UML (Unified Modeling Language – Birleşik Modelleme Dili) sekans diyagramı (Sequenzdiagramm), nesneler arasındaki etkileşimleri, bunların gerçekleşme sırasına göre gösterir. Sekans diyagramı, nesneleri veya sınıfları temsil eden dikey "yaşam çizgilerinden" (Lebenslinien) ve bu çizgiler arasında zaman sırasına göre (üstten alta) gönderilen yatay "mesajlardan" oluşur.\nSekans diyagramları, bir sistemdeki dinamik etkileşimleri göstermek ve analiz etmek için kullanılır.',
  },
  {
    id: 119,
    frageDE:
      "Wofür wird das UML-Aktivitätsdiagramm bei der Modellierung genutzt?",
    antwortDE:
      "Ein UML-Aktivitätsdiagramm ist ein Verhaltensdiagramm, das die Reihenfolge und Bedingungen für die Ausführung verschiedener Aktivitäten in einem System darstellt. Es wird in der Modellierung verwendet, um Arbeitsabläufe zu visualisieren, das Verhalten von Systemteilen zu modellieren, Anforderungen zu analysieren und zu designen sowie um parallele Abläufe darzustellen. Es besteht aus Elementen wie Start- und Endknoten, Aktionsknoten, Entscheidungsknoten und Synchronisationsstangen.",
    frageTR:
      "UML aktivite diyagramı (Aktivitätsdiagramm) modellemede ne için kullanılır?",
    antwortTR:
      "UML aktivite diyagramı (Aktivitätsdiagramm) bir davranış diyagramıdır (Verhaltensdiagramm) ve bir sistemdeki farklı aktivitelerin yürütülme sırasını ve koşullarını gösterir. Modellemede iş akışlarını görselleştirmek, sistem bileşenlerinin davranışını modellemek, gereksinimleri analiz etmek ve paralel süreçleri göstermek için kullanılır. Diyagram; başlangıç ve bitiş düğümleri, eylem düğümleri, karar düğümleri ve senkronizasyon çubukları gibi öğelerden oluşur.",
  },
  {
    id: 120,
    frageDE:
      "Erklären Sie die Verwendung des UML-Zustandsdiagramms zur Modellierung von Verhalten in einem System.",
    antwortDE:
      "In einem UML-Zustandsdiagramm wird der Lebenszyklus eines Objekts durch die Darstellung seiner verschiedenen Zustände und Übergänge dargestellt. Es ist besonders nützlich bei der Modellierung von Objekten, die komplexes Verhalten aufweisen und viele verschiedene Zustände haben können.\nUML-Zustandsdiagramme geben den aktuellen Zustand eines Objekts, die Aktionen, die beim Eintritt, während des Verweilens und beim Verlassen des Zustands durchgeführt werden, sowie die Bedingungen für den Übergang zu anderen Zuständen wieder. Hierdurch ermöglichen sie die Darstellung und das Verständnis komplexer verhaltensbasierter Systeme.",
    frageTR:
      "Bir UML durum diyagramı (Zustandsdiagramm), bir sistemdeki davranışın modellenmesinde nasıl kullanılır?",
    antwortTR:
      "Bir UML durum diyagramı (Zustandsdiagramm), bir nesnenin yaşam döngüsünü (Lebenszyklus) farklı durumları ve bu durumlar arasındaki geçişleri göstererek modeller. Özellikle karmaşık davranışlara ve birden fazla duruma sahip nesnelerin modellenmesinde kullanışlıdır.\nUML durum diyagramları, bir nesnenin mevcut durumunu, bir duruma girildiğinde, o durumda kalındığında ve durumdan çıkıldığında gerçekleştirilen eylemleri, ayrıca diğer durumlara geçiş koşullarını gösterir. Bu sayede karmaşık, davranışa dayalı sistemlerin temsil edilmesi ve anlaşılması sağlanır.",
  },
  {
    id: 121,
    frageDE: "Welche Informationen kann man aus dem Klassendiagramm ableiten?",
    antwortDE:
      "Das Klassendiagramm zeigt Klassen, ihre Attribute und Methoden sowie Beziehungen zwischen den Klassen.\nAus einem Klassendiagramm kann man folgende Informationen ableiten:\n- Klassen und Objekte: Welche Klassen gibt es und welche Objekte repräsentieren sie?\n- Attribute und Operationen: Welche Eigenschaften und Verhaltensweisen haben die Klassen?\n- Beziehungen: Wie sind die Klassen miteinander verknüpft (z.B. durch Assoziationen oder Vererbungen)?\n- Sichtbarkeit: Welche Attribute und Operationen sind öffentlich, privat oder geschützt?\n- Kardinalität: Wie viele Instanzen einer Klasse können mit einer anderen in Beziehung stehen?",
    frageTR:
      "Bir sınıf diyagramından (Klassendiagramm) hangi bilgiler elde edilebilir?",
    antwortTR:
      "Sınıf diyagramı (Klassendiagramm), sınıfları, bunların özniteliklerini (Attributes), metotlarını (Methoden) ve sınıflar arasındaki ilişkileri gösterir.\nBir sınıf diyagramından şu bilgiler çıkarılabilir:\n- Sınıflar ve nesneler: Hangi sınıfların mevcut olduğu ve bu sınıfların hangi nesneleri temsil ettiği.\n- Öznitelikler ve işlemler: Sınıfların hangi özelliklere ve davranışlara sahip olduğu.\n- İlişkiler: Sınıfların birbirleriyle nasıl bağlantılı olduğu (örneğin ilişki – Assoziation veya kalıtım – Vererbung yoluyla).\n- Görünürlük (Sichtbarkeit): Hangi özniteliklerin ve metotların genel (public), özel (private) veya korumalı (protected) olduğu.\n- Kardinalite (Kardinalität): Bir sınıfın diğer bir sınıfla kaç örnek üzerinden ilişkilendirilebileceği.",
  },
  {
    id: 122,
    frageDE:
      "In UML-Klassendiagrammen wird zwischen den Beziehungstypen Aggregation und Komposition unterschieden. Erläutern Sie den Unterschied zwischen diesen beiden Beziehungstypen.",
    antwortDE:
      "Bei der Aggregation handelt es sich um eine lose Beziehung zwischen zwei Klassen, bei der eine Klasse (das Ganze) eine Sammlung oder eine Gruppe von Objekten einer anderen Klasse (die Teile) enthält. Die Beziehung zwischen dem Ganzen und den Teilen ist in der Regel optional, das heißt, das Ganze kann ohne die Teile existieren.\nBei der Komposition handelt es sich um eine starke Beziehung zwischen zwei Klassen, bei der eine Klasse (das Ganze) aus einer anderen Klasse (dem Teil) besteht. Die Teile können nur als Teil des Ganzen existieren und haben keine eigenständige Existenz. Wenn das Ganze zerstört wird, werden auch die Teile zerstört.",
    frageTR:
      "UML sınıf diyagramlarında (Klassendiagramm) yer alan ilişki türlerinden Aggregation (toplama) ve Komposition (bileşim) arasındaki fark nedir?",
    antwortTR:
      "Aggregation (toplama), iki sınıf arasında gevşek bir ilişki türüdür. Bu ilişkide bir sınıf (bütün) diğer sınıfın nesnelerinin (parçaların) bir grubunu veya koleksiyonunu içerir. Bu tür ilişkide parçalar bütünden bağımsız olarak var olabilir; yani bütün (örneğin bir sınıf) olmadan da parçalar varlığını sürdürebilir.\nKomposition (bileşim) ise iki sınıf arasında güçlü bir ilişkidir. Bu ilişkide bir sınıf (bütün), diğer sınıfın (parça) bir bileşenidir. Parçalar yalnızca bütünün bir parçası olarak var olabilir ve bağımsız şekilde varlık gösteremez. Bütün yok edildiğinde, ona bağlı parçalar da yok olur.",
  },
  {
    id: 123,
    frageDE:
      "Erklären Sie das Prinzip der Vererbung in der objektorientierten Programmierung.",
    antwortDE:
      "In der objektorientierten Programmierung ist Vererbung ein Schlüsselprinzip, das es ermöglicht, neue Klassen aus bereits existierenden Klassen zu erzeugen. Die neu erstellte Klasse wird als „Unterklasse“ oder „abgeleitete Klasse“ bezeichnet, während die existierende Klasse, von der sie erbt, als „Oberklasse“ oder „Basisklasse“ bezeichnet wird.\nDie Vererbung ist nützlich für die Wiederverwendung von Code und die Reduzierung von Redundanz. Sie ermöglicht es, dass Eigenschaften (Attribute) und Verhaltensweisen (Methoden), die in der Oberklasse definiert sind, an die Unterklasse weitergegeben werden.",
    frageTR:
      "Nesne yönelimli programlamada (objektorientierte Programmierung) kalıtım (Vererbung) ilkesi nedir?",
    antwortTR:
      "Nesne yönelimli programlamada (OOP – objektorientierte Programmierung) kalıtım (Vererbung) ilkesi, mevcut sınıflardan yeni sınıflar türetmeyi sağlayan temel bir kavramdır. Yeni oluşturulan sınıfa alt sınıf (Unterklasse veya abgeleitete Klasse), miras alınan sınıfa ise üst sınıf (Oberklasse veya Basisklasse) denir.\nKalıtım, kodun yeniden kullanılmasını (Code-Wiederverwendung) ve tekrarlılığı azaltmayı (Redundanz) sağlar. Üst sınıfta tanımlanan özellikler (Attributes) ve davranışlar (Methoden), alt sınıfa aktarılabilir.",
  },
  {
    id: 124,
    frageDE:
      "In welchem Zusammenhang steht das Konzept der Datenkapselung in der objektorientierten Programmierung mit den Prinzipien der Datenintegrität und der Code-Wartbarkeit?",
    antwortDE:
      "Datenkapselung ist ein zentraler Grundsatz der objektorientierten Programmierung. Sie verbirgt die Daten (Variablen) und die Methoden einer Klasse und schützt Daten vor dem direkten Zugriff von außen. Nur die öffentlichen Methoden der Klasse können auf die internen Daten zugreifen.\nDies schafft ein hohes Maß an Datenintegrität, da die Daten nur auf sichere und kontrollierte Weise manipuliert werden können. Darüber hinaus verbessert es die Wartbarkeit und Verständlichkeit des Codes, da Änderungen an der internen Implementierung der Klasse nicht die Teile des Programms beeinflussen, die die Klasse verwenden.",
    frageTR:
      "Nesne yönelimli programlamada (objektorientierte Programmierung) veri gizleme (Datenkapselung) kavramı, veri bütünlüğü (Datenintegrität) ve kod bakım kolaylığı (Code-Wartbarkeit) ilkeleriyle nasıl ilişkilidir?",
    antwortTR:
      "Veri gizleme (Datenkapselung), nesne yönelimli programlamanın temel ilkelerinden biridir. Bu ilke, bir sınıfın değişkenlerini (verilerini) ve metotlarını dış erişime karşı gizler ve verilerin doğrudan değiştirilmesini engeller. Yalnızca sınıfın genel (public) metotları iç veriler üzerinde işlem yapabilir.\nBu yaklaşım, verilerin yalnızca güvenli ve kontrol edilen yollarla değiştirilmesini sağladığından yüksek düzeyde veri bütünlüğü (Datenintegrität) sağlar. Ayrıca, bir sınıfın iç yapısında yapılan değişikliklerin programın diğer bölümlerini etkilememesi sayesinde kodun bakımını (Wartbarkeit) ve anlaşılabilirliğini artırır.",
  },
  {
    id: 125,
    frageDE:
      "Was ist der Unterschied zwischen Prozeduren und Funktionen in der Programmierung?",
    antwortDE:
      "Eine Funktion ist ein Codeblock, der eine spezifische Aufgabe ausführt und in der Regel einen Wert zurückgibt.\nEine Prozedur ist auch ein Codeblock, der eine spezifische Aufgabe ausführt. Der Hauptunterschied besteht darin, dass eine Prozedur normalerweise keinen Wert zurückgibt. Eine Prozedur führt eine Aufgabe aus und kehrt dann zur aufrufenden Stelle im Code zurück.",
    frageTR:
      "Programlamada prosedür (Prozedur) ile fonksiyon (Funktion) arasındaki fark nedir?",
    antwortTR:
      "Bir fonksiyon (Funktion), belirli bir görevi yerine getiren ve genellikle bir değer döndüren bir kod bloğudur.\nBir prosedür (Prozedur) de belirli bir görevi yerine getiren bir kod bloğudur, ancak temel fark şudur: prosedür genellikle bir değer döndürmez. Prosedür yalnızca işlemi gerçekleştirir ve ardından kodun çağrıldığı yere geri döner.",
  },{
id:126,
frageDE: "Wie unterscheiden sich prozedurale und objektorientierte Programmierung voneinander?",
antwortDE: "Die prozedurale Programmierung ist auf den Gedanken aufgebaut, dass ein Programm eine Reihe von Aufgaben (Prozeduren) ausführt, die auf Daten operieren. Ein prozedurales Programm besteht i. d. R. aus einer Reihe von Prozeduren, die aufgerufen werden, um eine bestimmte Aufgabe zu erfüllen. Die Daten sind getrennt von den Prozeduren, und die Prozeduren bearbeiten diese Daten.\n\nIn der objektorientierten Programmierung (DOOP) werden Daten und Funktionen zu Objekten zusammengefasst. Ein Objekt kann Attribute (Daten) und Methoden (Funktionen) enthalten. OOP fokussiert auf die drei Hauptprinzipien Vererbung, Kapselung und Polymorphie.",
frageTR: "Prozedurale Programmierung (prosedürel/yordamcı programlama) ile objektorientierte Programmierung (nesne yönelimli programlama) birbirinden nasıl ayrılır?",
antwortTR: "Prozedurale Programmierung (prosedürel programlama), bir programın veriler üzerinde çalışan bir dizi görevden (Prozeduren/prosedürler) oluştuğu düşüncesine dayanır. Prozedürel bir program genellikle (i. d. R.) belirli bir görevi yerine getirmek için çağrılan bir dizi Prozedur (prosedür) içerir. Veriler, Prozeduren'den (prosedürlerden) ayrıdır ve Prozeduren (prosedürler) bu verileri işler.\n\nObjektorientierte Programmierung (DOOP, nesne yönelimli programlama), verileri ve fonksiyonları Objekte (nesneler) içinde bir araya getirir. Bir Objekt (nesne) Attribute (özellikler/veriler) ve Methoden (metotlar/fonksiyonlar) içerebilir. OOP, üç temel prensibe odaklanır: Vererbung (kalıtım), Kapselung (enkapsülasyon) ve Polymorphie (çok biçimlilik/polimorfizm)."
},
{
id:127,
frageDE: "Was ist eine Klasse in der objektorientierten Programmierung?",
antwortDE: "Eine Klasse in der objektorientierten Programmierung ist ein Bauplan für die Erstellung von Objekten. Sie definiert Eigenschaften (Variablen, die den Zustand repräsentieren) und Methoden (Funktionen, die das Verhalten repräsentieren) eines Objekts.\n\nEine Klasse ermöglicht die Erstellung mehrerer Objekte mit ähnlichen Merkmalen und Verhaltensweisen. Sie bildet die Grundlage für Vererbung und Polymorphie.",
frageTR: "Objektorientierte Programmierung (nesne yönelimli programlama) içinde bir Klasse (sınıf) nedir?",
antwortTR: "Objektorientierte Programmierung (nesne yönelimli programlama) içindeki bir Klasse (sınıf), Objekte (nesneler) oluşturmak için bir Bauplan (taslak/şablon)dır. Bir Objekt'in (nesnenin) Attribute'larını (özellikler; durumu temsil eden değişkenler) ve Methoden'ını (metotlar; davranışı temsil eden fonksiyonlar) tanımlar.\n\nBir Klasse (sınıf), benzer özellik ve davranışlara sahip birden fazla Objektin (nesnenin) oluşturulmasını sağlar. Ayrıca Vererbung (kalıtım) ve Polymorphie'nin (çok biçimlilik/polimorfizm) temelini oluşturur."
},
{
id:128,
frageDE: "Was ist eine generische Klasse?",
antwortDE: "Eine generische Klasse ist ein Konzept in der objektorientierten Programmierung, das es erlaubt, eine Klasse zu definieren, die auf Typen arbeiten kann, die beim Erstellen einer Instanz der Klasse spezifiziert werden.\n\nDer Hauptvorteil von generischen Klassen besteht darin, dass sie Code-Wiederverwendung und Typsicherheit ermöglichen. Sie können eine einzige generische Klasse definieren, die auf mehrere Datentypen angewendet werden kann, anstatt separate Klassen für jeden Datentyp erstellen zu müssen.",
frageTR: "Generische Klasse (jenerik/jenerik sınıf) nedir?",
antwortTR: "Generische Klasse (jenerik sınıf), objektorientierte Programmierung (nesne yönelimli programlama) içinde bir kavramdır; bir Klasse'nin (sınıfın) bir Instanz (örnek) oluşturulurken belirtilecek tiplere göre çalışacak şekilde tanımlanmasına olanak tanır.\n\nGenerische Klassen'in (jenerik sınıfların) başlıca avantajı, Code-Wiederverwendung (kodun yeniden kullanımı) ve Typsicherheit (tip güvenliği) sağlamasıdır. Her bir veri tipi için ayrı sınıflar oluşturmak yerine, tek bir generische Klasse (jenerik sınıf) tanımlayıp bunu birden fazla veri tipine uygulayabilirsiniz."
},
{
id:129,
frageDE: "Wie werden abstrakte Klassen in der Anwendungsentwicklung verwendet und welche Vorteile bieten sie?",
antwortDE: "Abstrakte Klassen sind Klassen, die nicht instanziiert werden können und in der Regel eine oder mehrere abstrakte Methoden enthalten. Diese Methoden werden in den abgeleiteten Klassen implementiert. Abstrakte Klassen können jedoch auch konkrete Methoden (Methoden mit einer Implementierung) enthalten.\n\nDie Hauptanwendungen und Vorteile abstrakter Klassen sind:\n- Bereitstellung einer gemeinsamen Schnittstelle\n- Code-Wiederverwendung\n- Erzwingung bestimmter Methoden\n- Polymorphismus kann realisiert werden",
frageTR: "Abstrakte Klassen (soyut sınıflar) Anwendungsentwicklung içinde nasıl kullanılır ve hangi avantajları sağlar?",
antwortTR: "Abstrakte Klassen (soyut sınıflar), instanziiert edilemeyen (örneklenemeyen) Klassen'dir (sınıflardır) ve genellikle bir veya daha fazla abstrakte Methoden (soyut yöntem) içerir. Bu Methoden (yöntemler), abgeleitete Klassen'de (türetilmiş sınıflarda) uygulanır. Abstrakte Klassen ayrıca konkrete Methoden (somut; uygulaması olan yöntemler) de içerebilir.\n\nAbstrakte Klassen'in (soyut sınıfların) başlıca kullanım alanları ve avantajları:\n- Gemeinsame Schnittstelle (ortak arayüz) sağlama\n- Code-Wiederverwendung (kodun yeniden kullanımı)\n- Belirli Methoden'in (yöntemlerin) zorunlu kılınması\n- Polymorphismus (çok biçimlilik/polimorfizm) gerçekleştirilebilir"
},
{
id:130,
frageDE: "Was ist ein Objekt in der objektorientierten Programmierung?",
antwortDE: "Ein Objekt in der objektorientierten Programmierung ist eine konkrete Instanz einer Klasse. Es besitzt die Attribute und Methoden, die in seiner Klasse definiert sind. Jedes Objekt hat seinen eigenen Satz von Werten für die Attribute. Diese Attribute repräsentieren den Zustand des Objekts, während die Methoden das Verhalten definieren, das auf diesem Zustand operiert.\n\nEin Objekt ist also eine Verkapselung von Daten (Zustand) und den dazu gehörenden Operationen (Verhalten).",
frageTR: "Objektorientierte Programmierung (nesne yönelimli programlama) içinde bir Objekt (nesne) nedir?",
antwortTR: "Objekt (nesne), objektorientierte Programmierung (nesne yönelimli programlama) içinde bir Klasse'nin (sınıfın) somut bir Instanz'ıdır (örneğidir). Sınıfında tanımlanan Attribute'lara (özelliklere) ve Methoden'a (metotlara) sahiptir. Her Objekt (nesne), Attribute'ları (özellikleri) için kendine özgü değerlere sahiptir. Bu Attribute'lar (özellikler) Objekt'in (nesnenin) Zustand'ını (durumunu) temsil ederken, Methoden (metotlar) bu durum üzerinde işleyen Verhalten'ı (davranışı) tanımlar.\n\nDolayısıyla bir Objekt (nesne), Daten'in (verinin/durumun) ve ona ait Operationen'in (işlemlerin/davranışların) bir Verkapselung'udur (kapsüllenmesidir)."
},{
id:131,
frageDE: "Was ist der Unterschied zwischen einer abstrakten Klasse und einem Interface?",
antwortDE: "Eine abstrakte Klasse kann sowohl abstrakte als auch konkrete Methoden enthalten, während ein Interface nur Methodensignaturen (keine Implementierungen) definiert.\n\nWeitere Unterschiede:\n- Eine Klasse kann nur eine abstrakte Klasse erben, aber mehrere Interfaces implementieren.\n- Abstrakte Klassen können Zustände (Attribute) haben, Interfaces nicht.\n- Interfaces dienen der Definition von Verträgen, abstrakte Klassen eher der Wiederverwendung von gemeinsamem Code.",
frageTR: "Abstrakte Klasse (soyut sınıf) ile Interface (arayüz) arasındaki fark nedir?",
antwortTR: "Abstrakte Klasse (soyut sınıf), hem abstrakte Methoden (soyut yöntemler) hem de konkrete Methoden (uygulaması olan yöntemler) içerebilirken; bir Interface (arayüz) yalnızca Methodensignaturen'ı (yöntem imzalarını) tanımlar, yani herhangi bir Implementierung (uygulama) içermez.\n\nDiğer farklar:\n- Bir Klasse (sınıf), yalnızca bir abstrakte Klasse'den (soyut sınıftan) miras alabilir, ancak birden fazla Interface (arayüz) implementieren (uygulayabilir).\n- Abstrakte Klassen (soyut sınıflar) Zustände (durumlar/özellikler) içerebilir, Interfaces (arayüzler) içeremez.\n- Interfaces (arayüzler) genellikle bir Vertrag'ı (sözleşme, kurallar bütünü) tanımlamak için kullanılır; abstrakte Klassen (soyut sınıflar) ise ortak kodun yeniden kullanımı için tercih edilir."
},
{
id:132,
frageDE: "Was versteht man unter Polymorphie in der objektorientierten Programmierung?",
antwortDE: "Polymorphie bezeichnet die Fähigkeit, dass eine Methode je nach Objekt, das sie aufruft, unterschiedliche Implementierungen ausführen kann. Das bedeutet, dass derselbe Methodenaufruf bei verschiedenen Objekten unterschiedliches Verhalten zeigen kann.\n\nBeispiel: Eine Methode `zeichne()` kann in einer Klasse `Kreis` anders implementiert sein als in einer Klasse `Rechteck`, aber beide werden über dieselbe Schnittstelle aufgerufen.",
frageTR: "Objektorientierte Programmierung (nesne yönelimli programlama) içinde Polymorphie (çok biçimlilik/polimorfizm) ne anlama gelir?",
antwortTR: "Polymorphie (çok biçimlilik), bir Method'un (yöntemin) onu çağıran Objekt'e (nesneye) bağlı olarak farklı Implementierungen'lar (uygulamalar) gerçekleştirebilme yeteneğidir. Bu, aynı Methodenaufruf'un (metot çağrısının) farklı Objekte'lerde (nesnelerde) farklı davranışlar sergileyebilmesi anlamına gelir.\n\nÖrnek: `zeichne()` adlı bir Methode (yöntem), `Kreis` (daire) sınıfında farklı, `Rechteck` (dikdörtgen) sınıfında farklı şekilde uygulanabilir, ancak her ikisi de aynı Schnittstelle (arayüz) üzerinden çağrılır."
},
{
id:133,
frageDE: "Was versteht man unter Kapselung (Encapsulation)?",
antwortDE: "Kapselung (Encapsulation) bedeutet, dass die internen Daten und die Implementierungsdetails eines Objekts vor dem Zugriff von außen geschützt werden. Der Zugriff erfolgt über definierte Schnittstellen (Getter- und Setter-Methoden).\n\nZiel ist es, Datenintegrität zu gewährleisten und unbeabsichtigte Änderungen zu verhindern. Außerdem erleichtert Kapselung die Wartung und Weiterentwicklung des Codes.",
frageTR: "Kapselung (Encapsulation / enkapsülasyon) ne anlama gelir?",
antwortTR: "Kapselung (Encapsulation / enkapsülasyon), bir Objekt'in (nesnenin) iç verilerinin ve Implementierungsdetails'larının (uygulama ayrıntılarının) dışarıdan erişime karşı korunması anlamına gelir. Bu verilere erişim, tanımlanmış Schnittstellen (arayüzler) aracılığıyla, yani Getter- ve Setter-Methoden (erişimci ve değiştirici yöntemler) üzerinden sağlanır.\n\nAmacı, Datenintegrität'yi (veri bütünlüğünü) sağlamak ve istenmeyen değişiklikleri önlemektir. Ayrıca Kapselung (enkapsülasyon), kodun bakımını ve geliştirilmesini kolaylaştırır."
},
{
id:134,
frageDE: "Was ist Vererbung in der objektorientierten Programmierung?",
antwortDE: "Vererbung (Inheritance) ist ein Prinzip der objektorientierten Programmierung, bei dem eine Klasse (Unterklasse oder abgeleitete Klasse) die Eigenschaften und Methoden einer anderen Klasse (Oberklasse oder Basisklasse) übernimmt.\n\nVorteile:\n- Code-Wiederverwendung\n- Erweiterbarkeit\n- Hierarchische Strukturierung von Klassen\n\nBeispiel: Eine Klasse `Auto` kann von einer Klasse `Fahrzeug` erben und zusätzlich eigene Eigenschaften wie `Anzahl der Türen` hinzufügen.",
frageTR: "Objektorientierte Programmierung (nesne yönelimli programlama) içinde Vererbung (Inheritance / kalıtım) nedir?",
antwortTR: "Vererbung (Inheritance / kalıtım), objektorientierte Programmierung (nesne yönelimli programlama) prensiplerinden biridir ve bir Klasse'nin (Unterklasse veya abgeleitete Klasse; alt sınıf veya türetilmiş sınıf), başka bir Klasse'nin (Oberklasse veya Basisklasse; üst sınıf veya temel sınıf) Eigenschaften'lerini (özelliklerini) ve Methoden'larını (yöntemlerini) devralması anlamına gelir.\n\nAvantajları:\n- Code-Wiederverwendung (kodun yeniden kullanımı)\n- Erweiterbarkeit (genişletilebilirlik)\n- Klassen'in (sınıfların) hiyerarşik yapılandırılması\n\nÖrnek: `Auto` (araba) adlı bir Klasse, `Fahrzeug` (araç) adlı bir Klasse'den kalıtım alabilir ve ayrıca `Anzahl der Türen` (kapı sayısı) gibi kendi özelliklerini ekleyebilir."
},
{
id:135,
frageDE: "Was ist der Unterschied zwischen Überladung (Overloading) und Überschreibung (Overriding)?",
antwortDE: "Überladung (Overloading) bedeutet, dass mehrere Methoden denselben Namen, aber unterschiedliche Parameterlisten haben. Sie werden innerhalb derselben Klasse definiert.\n\nÜberschreibung (Overriding) bedeutet, dass eine Methode in einer Unterklasse eine Methode aus der Oberklasse mit derselben Signatur ersetzt, um ihr Verhalten anzupassen oder zu erweitern.\n\nKurz gesagt:\n- Overloading → innerhalb derselben Klasse, unterschiedliche Parameter\n- Overriding → in Unterklasse, gleiche Signatur, anderes Verhalten",
frageTR: "Überladung (Overloading / aşırı yükleme) ile Überschreibung (Overriding / geçersiz kılma) arasındaki fark nedir?",
antwortTR: "Überladung (Overloading / aşırı yükleme), aynı ada sahip birden fazla Methode'nin (yöntemin) farklı Parameterlisten (parametre listeleri) ile tanımlanması anlamına gelir. Bu Methoden (yöntemler) aynı Klasse (sınıf) içinde tanımlanır.\n\nÜberschreibung (Overriding / geçersiz kılma) ise, bir Unterklasse'nin (alt sınıfın), Oberklasse'deki (üst sınıftaki) aynı Signatur'a (imzaya) sahip bir Methode'yi (yöntemi) değiştirerek veya genişleterek yeniden tanımlaması anlamına gelir.\n\nKısaca:\n- Overloading → aynı Klasse içinde, farklı parametreler\n- Overriding → Unterklasse içinde, aynı Signatur, farklı Verhalten (davranış)"
}


];
