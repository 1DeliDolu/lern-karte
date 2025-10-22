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
  }
];

// Backwards-compatible named export used by pages
export const fragenFIAE = fragen;
