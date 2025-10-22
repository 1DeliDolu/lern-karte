# 💾 Datenverlust <span style="background:#e0f0ff;">LF9, LF4</span> 

**Datenverlust** ist eine vom BSI benannte Gefährdung (**G 0.45**) und führt – je nach Kontext – zum Verlust von **Verfügbarkeit**, **Vertraulichkeit** und/oder **Integrität** von Informationen. Im Netz- und Systembetrieb wird „Datenverlust“ explizit als Risiko in den Gefährdungsbeurteilungen (z. B. Router/Switches, WLAN, Server) geführt und dort mit Eintrittshäufigkeit, Auswirkungsgrad und Risikoeinschätzung betrachtet. (LF9 turn3file6)

Auf **Client-Systemen** entsteht Datenverlust u. a. durch **lokale Datenhaltung**, **Hardwaredefekte** und **fehlerhafte Nutzung**; hinzu kommen **Schadprogramme** und **unberechtigte Benutzung**. Auch bei Software wird **„Datenverlust durch fehlerhafte Nutzung“** explizit als Gefährdung genannt. (LF4 turn3file7turn3file9)

---

## 🧩 Ursachen & Auswirkungen (präzise)

* **Typische Ursachen:** lokale/unge­sicherte Speicherung, defekte Datenträger/Hardware, Fehlbedienung, Schadprogramme, unzureichende Konfiguration/Rechte, Verlust/Beschädigung mobiler Datenträger. (LF4 turn3file7turn3file9turn3file5)
* **Auswirkungen:** Beeinträchtigung der **Grundwerte** (C = Vertraulichkeit, I = Integrität, A = Verfügbarkeit) bis hin zum Geschäftsunterbrechungs-Risiko; die BSI-Bewertungen koppeln Eintrittshäufigkeit, Auswirkung und Risiko zur Entscheidungsvorlage. (LF9 )

---

## 🛡️ Gegenmaßnahmen zur Vermeidung/Minimierung von Datenverlust

**1) Datensicherung & Redundanz**

* **3-2-1-Regel:** *3 Kopien* kritischer Daten, *2 verschiedene Medien*, *1 Kopie extern/offsite*. (LF9 )
* **Redundanzarten:** funktionelle Redundanz (mehrfach parallel), **räumliche** Trennung, **organisatorisch-diversitäre** Redundanz; **redundante Datensicherung** explizit vorgesehen. (LF9 )
* **Backup-Konzept & Notfallpläne:** Bestandteil der **Verfügbarkeitskontrolle** neben USV, Patch-Management, Virenschutz/Firewall. (LF4 )

**2) Technisch-organisatorische Maßnahmen (TOM)**

* Sicherheitskonzept nach BSI: **„ausreichende Datensicherungsverfahren“** sind gefordert; ergänzt um Kryptographie, Identitäts-/Berechtigungsmanagement, Malware-Abwehr. (LF4 turn4file9)
* **Software-/Client-Schutz:** Integrität sicherstellen, sichere Installation/Konfiguration, restriktive Rechte, Patches/Updates, Protokollierung. (LF4 turn4file12)

**3) Mobile Datenträger & Clients**

* Regeln für Zulässigkeit/Einsatz, **Sicherungskopie** der übertragenen Daten, Meldewege bei Verlust, Mitarbeitersensibilisierung. (LF4 )
* **Gefährdung Clients:** u. a. Datenverlust durch lokale Speicherung/Hardwaredefekte → zentrale Speicherung/Backups bevorzugen. (LF4 )

**4) Virtualisierung & Betrieb**

* In der **Virtualisierungs-/Cluster-Umgebung** stehen Funktionen wie **Backups**, **Replikation** und **Snapshots** bereit; Verwaltung/Überwachung über Weboberfläche unterstützt die Sicherungsprozesse. (LF9 )

---

## ⚙️ Prozessschritte zur Risikobeurteilung „Datenverlust“

1. **Sicherheitsleitlinie → Sicherheitskonzept → Strukturanalyse** (Informationsverbund, Netzplan, Systeme, Räume). (LF4, LF9 turn3file13)
2. **Schutzbedarfsfeststellung** (CIA je Zielobjekt, Begründung, ggf. Maximumprinzip/Kumulation). (LF4 turn3file3)
3. **Gefährdungsbeurteilung** mit **G 0.45 Datenverlust** und weiteren relevanten Gefährdungen. (LF9 )
4. **Risikobehandlung & Maßnahmenplanung** (Backup-Regel, Redundanz, TOM, Notfallpläne). (LF9, LF4 turn4file0turn4file17)

---

## 🧪 Beispiele & Praxis

* **Client-Beispiel:** Personalabteilung/Entwicklungsbereich – Schutzbedarf für Vertraulichkeit/Integrität oft **hoch/sehr hoch**; zentrale Verwaltung mindert Verfügbarkeitsrisiken bei Arbeitsplatzverlust. (LF4 turn3file7)
* **Software-Beispiel:** „**Datenverlust durch fehlerhafte Nutzung**“ als Gefährdung → Maßnahmen wie sichere Konfiguration, Verantwortlichkeiten, Signaturen/Checksummen. (LF4 turn3file17)
* **Virtualisierung-Praxis:** Webkonsole mit **Backup/Replikation/Snapshots** zur Sicherung/Recovery. (LF9 )

---

## 🧰 Beispielcode: Integritätsprüfung per Hash (für Sicherungs-/Wiederherstellungstests)

> Die Unterlagen zeigen die **Hash-Berechnung (SHA-256)** in Python/Java. Diese Technik eignet sich u. a. dazu, die **Integrität** von gesicherten/rekonstruierten Dateien zu prüfen (Soll-Ist-Vergleich von Hashwerten). (LF11a )

### Python (LF11a) 

```python
import hashlib

password = "Mein Passwort"
encoded_password = password.encode()
hash_value = hashlib.sha256(encoded_password)

print("Passwort:", password)
print("Hashwert:", hash_value.hexdigest())
```

### Java (LF11a) 

```java
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

public class Program {
  public static void main(String[] args) {
    try {
      String password = "Mein Passwort";
      MessageDigest digest = MessageDigest.getInstance("SHA-256");
      byte[] encodedPassword = digest.digest(password.getBytes(StandardCharsets.UTF_8));
      BigInteger no = new BigInteger(1, encodedPassword);
      String hashValue = no.toString(16);
      while (hashValue.length() < 32) { hashValue = "0" + hashValue; }
      System.out.println("Passwort: " + password);
      System.out.println("Hashwert: " + hashValue);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
```

---

## 📚 Begriffstabelle

| Begriff                          | Definition                                                                 | Quelle                   |
| -------------------------------- | -------------------------------------------------------------------------- | ------------------------ |
| **Datenverlust (G 0.45)**        | Gefährdung in BSI-Beurteilungen; kann C/I/A betreffen.                     | LF9 turn3file6         |
| **3-2-1-Backup**                 | 3 Kopien, 2 Medien, 1 Offsite-Kopie.                                       | LF9                      |
| **Redundanz**                    | Funktionell, räumlich, organisatorisch-diversitär; redundante Sicherungen. | LF9                      |
| **Verfügbarkeitskontrolle**      | Backup-Konzept, Notfallpläne, USV, Patch-Mgmt, Malware-Schutz.             | LF4                      |
| **Wechseldatenträger-Maßnahmen** | Sicherungskopie, Verlustmeldung, Schulung, Malware-Schutz.                 | LF4                      |
| **Integritätsprüfung**           | Hash/Signatur zur Sicherstellung der Unverfälschtheit.                     | LF4, LF11a turn4file13 |
| **Virtualisierungs-Sicherung**   | Backups, Replikation, Snapshots per Weboberfläche.                         | LF9                      |

---

## 🧭 Kompakter Handlungsleitfaden (didaktisch)

1. **Schutzbedarf bestimmen** (CIA je Objekt, Begründung). (LF4 )
2. **Risiken bewerten** (inkl. G 0.45 Datenverlust) und Maßnahmen priorisieren. (LF9 )
3. **Backup-/Redundanz-Konzept** nach **3-2-1** etablieren, Notfall-/Wiederanlauf planen. (LF9, LF4 turn4file17)
4. **Technische/organisatorische Umsetzung**: sichere Konfiguration, Rechte, Protokollierung, Schulung. (LF4 )
5. **Regelmäßig prüfen**: Proberestore/Integrität (Hash-Vergleich), Monitoring, Dokumentation. (LF4, LF11a turn4file13)

---

