# 🧭 Richtschnur für Entwickler <span style="background:#e0f0ff;">LF11a, LF4, LF9</span>

Eine **Richtschnur für Entwickler** sind klare, nachlesbare Prinzipien, Muster und Artefakte, die die Softwareentwicklung **verständlich, wartbar, sicher und überprüfbar** machen. Dazu gehören vor allem **Clean-Code-Prinzipien**, **Modularisierung**, **Entwurfsmuster**, **Schnittstellendokumentation** sowie die **Ausrichtung an IT-Sicherheitszielen und -Standards (BSI/IT-Grundschutz)**. (LF11a, LF4) 

* **Clean Code & Refactoring** verbessern Lesbarkeit, Verständlichkeit, Wartbarkeit und Erweiterbarkeit; KISS, DRY, Komposition statt Vererbung und SOLID (SRP, OCP, LSP, ISP, DIP) werden ausdrücklich genannt. (LF11a) 
* **Modularisierung** schafft funktional geschlossene **Module** mit klaren **Schnittstellen**; Vorteile sind u. a. Wiederverwendung, Austauschbarkeit und parallele Entwicklung. (LF11a) 
* **Entwurfsmuster** (Factory, Singleton, Adapter, Bridge, Facade, Observer, Command, Iterator) liefern bewährte Lösungen; **Anti-Pattern** wie „Gottobjekt“ oder „Copy & Paste“ werden als schädlich erläutert. (LF11a) 
* **Schnittstellendokumentation** (inkl. nicht-funktionaler Eigenschaften wie **Informationssicherheit**, **Zuverlässigkeit**, **Effizienz**) sowie Werkzeuge wie **Javadoc**, **Sphinx**, **Doxygen** werden gefordert. (LF11a) 
* **Sicherheits-Richtschnur**: BSI-**Schutzziele** **Vertraulichkeit, Integrität, Verfügbarkeit (CIA)**, DSGVO **Art. 32**-Maßnahmen und **IT-Grundschutz**-Vorgehen (Anforderungen/Modellierung/Risikoanalyse, PDCA) geben objektive, auditierbare Leitplanken. (LF4) 

---

## 🧩 Kernprinzipien als Richtschnur

* **Clean-Code-Prinzipien (Auswahl):**
  **KISS**, **DRY**, **Favour Composition over Inheritance**, **SRP**, **OCP**, **LSP**, **ISP**, **DIP**, **Information Hiding**, **Law of Demeter**, **Tell, Don’t Ask**, **YAGNI** – jeweils mit Ziel: weniger Redundanz, geringe Kopplung, klare Verantwortlichkeiten, Erweiterbarkeit ohne Modifikation. (LF11a) 
* **Modularisierung & Schnittstellen:** **Funktional geschlossene** Module mit **eindeutig spezifizierten** Schnittstellen; dadurch Austauschbarkeit und parallele Teamarbeit. (LF11a) 
* **Entwurfsmuster zielgerichtet einsetzen, Anti-Pattern vermeiden:** Muster nur bei realem Problem verwenden; Übernutzung (z. B. Singleton) kann Skalierbarkeit schmälern. (LF11a) 
* **Dokumentation:** Inhalte der Schnittstellendoku inkl. **Parameter, Rückgaben, Fehlerfälle** sowie **nicht-funktionale** Aspekte (**Sicherheit, Zuverlässigkeit, Effizienz**). (LF11a) 

---

## 🔐 Sicherheits-Richtschnur (IT-Grundschutz)

* **Schutzziele & DSGVO Art. 32:** Pseudonymisierung/Verschlüsselung, Belastbarkeit, Wiederherstellbarkeit, regelmäßige Wirksamkeitsprüfung. (LF4) 
* **BSI-Vorgehen:** **Schutzbedarfsfeststellung → Modellierung der Zielobjekte → Anforderungen (Basis/Standard/Erhöht) → Risikoanalyse → Maßnahmen**, kontinuierlich im **PDCA-Zyklus** fortschreiben. (LF4) 
* **Gefährdungslagen** (Auszug, NET.*): Ausfall/Störung, Offenlegung, Manipulation, Unbefugter Zugriff, Schadprogramme, DoS etc.; diese referenzieren direkt die CIA-Schutzziele. (LF9) 

---

## 🛠️ Beispielcode (aus der Richtschnur-Perspektive: sauber & nachvollziehbar)

### LaufLängenkodierung – Python (Lesbarkeit, einfache Struktur – KISS/DRY) (LF11a) 

```python
# Lauflängenkodierung in Python
def run_length_encoding(text):
    encoded_text = ""
    i = 0
    while i < len(text):
        count = 1
        c = text[i]
        j = i
        while j < len(text) - 1:
            if text[j] == text[j + 1]:
                count = count + 1
                j = j + 1
            else:
                break
        encoded_text = encoded_text + str(count) + c
        i = j + 1
    return encoded_text

text = "aaaaabbbcccccccdefff"
encoded_text = run_length_encoding(text)
print(encoded_text)
```

### LaufLängenkodierung – Java (klare Verantwortungen, geringe Kopplung) (LF11a) 

```java
// Lauflängenkodierung in Java
public class Program {
    public static void main(String[] args) {
        String text = "aaaaabbbcccccccdefff";
        String encodedText = runLengthEncoding(text);
        System.out.print(encodedText);
    }

    static String runLengthEncoding(String text) {
        String encodedText = "";
        int i = 0;
        while (i < text.length()) {
            int count = 1;
            char c = text.charAt(i);
            int j = i;
            while (j < text.length() - 1) {
                if (text.charAt(j) == text.charAt(j + 1)) {
                    count = count + 1;
                    j = j + 1;
                } else { break; }
            }
            encodedText = encodedText + Integer.toString(count) + c;
            i = j + 1;
        }
        return encodedText;
    }
}
```

### Kapselung/Information Hiding – Getter/Setter (Java) (LF8) 

```java
private String bezeichnung;

public String getBezeichnung() {
    return this.bezeichnung;
}

public void setBezeichnung(String bezeichnung) {
    this.bezeichnung = bezeichnung;
}
```

---

## 🧪 Muster & Dokumentation (kompakt)

* **Observer-Pattern**: Vorteile (Flexibilität, neue Beobachter schnell), Nachteile (Aktualisierungskaskaden, Abmeldelogik nötig). (LF11a) 
* **Schnittstellendoku**: Übersicht, Signaturen, **nicht-funktionale Eigenschaften** (z. B. „werden Daten verschlüsselt? Authentifizierung?“), Tools **Javadoc/Sphinx/Doxygen**. (LF11a) 

---

## 📋 Begriffsklärungen

| Begriff                          | Definition                                                                                        | Quelle |
| -------------------------------- | ------------------------------------------------------------------------------------------------- | ------ |
| **Modul**                        | Funktional geschlossene Einheit mit eindeutig spezifizierter Schnittstelle.                       | LF11a  |
| **Clean Code**                   | Prinzipien zur Strukturierung von Software (z. B. KISS, DRY, SOLID, IHP, LoD, TDA, YAGNI).        | LF11a  |
| **Entwurfsmuster**               | Anpassbare Lösung für wiederkehrende Entwurfsprobleme (Erzeugungs-, Struktur-, Verhaltensmuster). | LF11a  |
| **Anti-Pattern**                 | Ungünstige/Schädliche Lösungsansätze (z. B. Gottobjekt, Copy & Paste).                            | LF11a  |
| **Schutzziele (CIA)**            | **Vertraulichkeit, Integrität, Verfügbarkeit** als Grundwerte der Informationssicherheit.         | LF4    |
| **IT-Grundschutz-Anforderungen** | Basis/Standard/Erhöht; objektive Maßstäbe zur Sicherung von Zielobjekten.                         | LF4    |

---

## ⚙️ Prozessschritte (Entwicklung & Sicherheit)

1. **Modular planen** (UML, Datenstrukturen, Algorithmen festlegen). (LF11a) 
2. **Clean Code umsetzen** & **Muster gezielt einsetzen**, Anti-Pattern vermeiden. (LF11a) 
3. **Schnittstellen vollständig dokumentieren** (inkl. Sicherheit/Zuverlässigkeit/Effizienz). (LF11a) 
4. **Testfälle formulieren und Komponenten testen**. (LF11a) 
5. **Sicherheitsleitlinie → Strukturanalyse → Schutzbedarfsfeststellung → Anforderungen/Risiken → Maßnahmen**, zyklisch per **PDCA** verbessern. (LF4) 

---

**Kurzfazit:** Eine **Richtschnur für Entwickler** vereint **sauberen Code**, **klare Module & Schnittstellen**, **bewährte Muster** und **verbindliche Sicherheitsziele** aus dem **IT-Grundschutz** – so wird Entwicklung **nachvollziehbar, wartbar und sicher**. (LF11a, LF4, LF9) 
