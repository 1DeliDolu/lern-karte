# 🧑‍💻 Algorithmen formulieren & Programme entwickeln (AP2-02)

Ziel dieses Leitfadens: Du bekommst eine **didaktisch klare, vollständige** Zusammenfassung zu (1) der **Abbildung von Kontrollstrukturen** mit **Aktivitätsdiagrammen** **oder** **Pseudocode**, (2) den **UML-Diagrammen** (*Use Case*, *Klassen*, *Aktivität*), und (3) dem **Entwurf von Bildschirmausgabemasken** mit Fokus **Softwareergonomie & Barrierefreiheit** – **ausschließlich** aus den bereitgestellten PDFs, mit **Beispielcode** und **konkreten Beispielen**. *(LF5, LF8, LF11a, Prüfungskatalog)*.

---

## 🧭 Einordnung & Prüfungsbezug (AP2)

Im **Prüfungskatalog AP2** ist unter *„Planen mit geeigneten Modellen“* u. a. die **UML** (Anwendungsfall-, Aktivitäts-, Klassen-, Sequenz-, Zustandsdiagramm) gefordert; außerdem sollen **Algorithmen in Programm- oder Pseudocode** mit **sichtbaren Kontrollstrukturen** dargestellt werden. *(AP2: 02 Planen mit Modellen; 05 Algorithmen in (Pseudo)Code)*. 

Die **UML-Grundformen** (Legenden) für **Anwendungsfall-, Aktivitäts- und Klassendiagramme** sind im **Anhang des Prüfungskatalogs** abgebildet. *(AP2-Anhang: UML-Legende)*. 

---

## 🧩 Kontrollstrukturen mit Aktivitätsdiagramm **oder** Pseudocode abbilden

**Aktivitätsdiagramm – Zweck & Notation.** Es beschreibt den **Ablauf von Aktionen** (Kontrollfluss), inkl. **Start/Ende**, **Aktionen**, **Entscheidung/Zusammenführung**, **Aufspaltung/Synchronisation** und **Partitionen** (z. B. „Kunde“ vs. „Programm“). *(LF11a)*. 

**Beispiel (aus dem Yachthafen-Projekt): „Liegeplatz mieten“.** Der Prozess zeigt u. a. **Verfügbarkeit prüfen**, **Daten eingeben/speichern**, **Bestätigung anzeigen** und **E-Mail versenden**; Kunden- und Programmaktionen laufen in **zwei Partitionen**. *(LF11a)*. 

### ✍️ Pseudocode (aus dem Aktivitätsdiagramm „Liegeplatz mieten“ abgeleitet)

> Didaktisches Ziel: **Kontrollstrukturen sichtbar** (If/Else, Parallelität logisch angedeutet). *(LF11a; AP2-Vorgabe zu Pseudocode)*.

```
PROZESS Liegeplatz_mieten
  // Partition: Kunde
  Anzeige(Liegeplatzliste)
  WENN Kunde_abbricht DANN
      ENDE_PROZESS
  SONST
      liegeplatz ← Auswahl_durch_Kunde()

  // Partition: Programm
  verfügbar ← Prüfe_Verfügbarkeit(liegeplatz)

  WENN NICHT verfügbar DANN
      Anzeige("Nicht verfügbar")
      ENDE_PROZESS
  SONST
      Anzeige(Eingabefenster_Vermietungsdaten)
      WENN Kunde_abbricht DANN ENDE_PROZESS

      daten ← Eingabe_durch_Kunde()
      Speichere(daten)

      // Parallele Aktionen (Synchronisation am Ende)
      PARALLEL
        Anzeige("Vermietung bestätigt")
        Sende_Email_an_Mieter(daten)
      ENDE_PARALLEL

      ENDE_PROZESS
```

> **Hinweis zur Prüfung:** Pseudocode **muss nicht kompilierbar** sein; wichtig sind **sichtbare Kontrollstrukturen** durch **Einrückung** etc. *(AP2-Katalog)*. 

---

## 🛠️ UML – die drei geforderten Diagrammtypen

### 1) **Anwendungsfalldiagramm (Use Case)**

Zeigt **Akteure**, **Anwendungsfälle**, **Systemgrenze** und **Beziehungen** (**include**, **extend**, **Generalisierung**). *(LF11a; LF8)*.

* **include** = **unbedingte Einbindung** eines Anwendungsfalls in einen anderen. *(LF11a)*. 
* **extend** = **bedingte Erweiterung** unter Bedingungen. *(LF11a)*. 
* **Beispiel**: *Zimmerreservierung* mit *Verfügbarkeit prüfen* (**include**) und *Kreditkarte prüfen* (**extend** abhängig von Zahlungsmethode). *(LF8, Lösungsskizze)*. 

### 2) **Klassendiagramm**

Beschreibt **Klassen** mit **Attributen/Methoden** (+/−/# Sichtbarkeiten), **Assoziation**, **Aggregation/Komposition**, **Vererbung**, **Multiplizität**. *(LF11a; LF8)*.

* **Beispiel**: *Yacht–Mieter–Liegeplatz* (Aggregation: *Liegeplatz* aggregiert *Yacht* und *Mieter*; Methoden der Klasse *Liegeplatz* wurden **aus Use Cases abgeleitet**). *(LF11a)*. 

### 3) **Aktivitätsdiagramm**

Ablauforientierte Sicht mit **Kontrollknoten** und **Partitionen**; **parallel** mögliche Pfade per **Aufspaltung/Synchronisation**. *(LF11a; AP2-Anhang)*.

> **UML-Übersichten** (weitere Diagrammtypen) sind in **LF8** gebündelt dargestellt (z. B. Sequenz-, Zustandsdiagramm) – nützlich fürs Gesamtverständnis. *(LF8)*.

---

## 🧪 Beispielcode (aus den Unterlagen)

### A) **Algorithmus**: Lauflängenkodierung (*Run-Length Encoding*) – **Python & Java** *(LF11a)*

*(Hinweis: Abbildung aus dem Buch – inhaltlich vollständig; Schreibweise stammt aus dem PDF.)* 

```python
# Lauflängenkodierung in Python (LF11a)
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
print(run_length_encoding(text))
```

```java
// Lauflängenkodierung in Java (LF11a)
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
      while (j < text.length()-1) {
        if (text.charAt(j) == text.charAt(j+1)) {
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

*(LF11a)*. 

### B) **GUI-Beispiele in Java (Swing)** – Fenster & einfache Maske *(LF8)*

**Basisfenster (`JFrame`)** – Minimalbeispiel aus dem Skript. *(LF8)*. 

```java
import javax.swing.JFrame;

public class Program {
  public static void main(String[] args) {
    try {
      JFrame mainFrame = new JFrame();          // Fenster erstellen
      mainFrame.setTitle("Das erste Java-Fenster ...");
      mainFrame.setSize(800, 400);              // Größe
      mainFrame.setLocation(400, 200);          // Position
      mainFrame.setVisible(true);               // anzeigen
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
```

**Eingabemaske „Addition zweier Zahlen“** – *mit Buttons, Textfeldern, Events*. *(LF8)*.

```java
import java.awt.EventQueue;
import javax.swing.*;
import java.awt.event.*;

public class MainWindow {
  private JFrame frmMain;
  private JTextField txtValue1, txtValue2, txtResult;

  public static void main(String[] args) {
    EventQueue.invokeLater(() -> {
      try {
        MainWindow window = new MainWindow();
        window.frmMain.setVisible(true);
      } catch (Exception e) { e.printStackTrace(); }
    });
  }
  public MainWindow() { initialize(); }

  private void initialize() {
    frmMain = new JFrame();
    frmMain.setTitle("Addition zweier Zahlen");
    frmMain.setBounds(100, 100, 409, 246);
    frmMain.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frmMain.getContentPane().setLayout(null);

    JLabel lbl1 = new JLabel("1. Zahl"); lbl1.setBounds(40, 30, 80, 20);
    JLabel lbl2 = new JLabel("2. Zahl"); lbl2.setBounds(40, 60, 80, 20);
    JLabel lblR = new JLabel("Ergebnis"); lblR.setBounds(40, 90, 80, 20);

    txtValue1 = new JTextField("0"); txtValue1.setBounds(130,30,200,20);
    txtValue2 = new JTextField("0"); txtValue2.setBounds(130,60,200,20);
    txtResult = new JTextField("0"); txtResult.setBounds(130,90,200,20);

    JButton btnCalc = new JButton("Berechnen");
    btnCalc.setBounds(91,149,103,23);
    btnCalc.addActionListener(e -> {
      double a = Double.parseDouble(txtValue1.getText());
      double b = Double.parseDouble(txtValue2.getText());
      txtResult.setText(String.valueOf(a + b));
    });

    JButton btnClose = new JButton("Beenden");
    btnClose.setBounds(228,149,103,23);
    btnClose.addActionListener(e -> System.exit(0));

    frmMain.getContentPane().add(lbl1); frmMain.getContentPane().add(lbl2); frmMain.getContentPane().add(lblR);
    frmMain.getContentPane().add(txtValue1); frmMain.getContentPane().add(txtValue2); frmMain.getContentPane().add(txtResult);
    frmMain.getContentPane().add(btnCalc); frmMain.getContentPane().add(btnClose);
  }
}
```

> **Barrierefreiheit in Swing/JFC:** Die **Accessibility-API** unterstützt u. a. Screenreader, Lupe, Spracherkennung – relevant für ergonomische GUIs. *(LF8)*. 

---

## 🖥️ Entwurf von Bildschirmausgabemasken (Softwareergonomie & Barrierefreiheit)

**Softwareergonomie** = Anpassung der Software (**Benutzerschnittstelle**) an Bedürfnisse/Eigenschaften der Nutzer; umfasst Interaktionen von **alphanumerischer UI** bis **VR** und stützt sich auf **Psychologie, Arbeitswissenschaft, Design**. *(LF8)*. 

**UX-Design – Kernbausteine**: **Visuelles Design (UI)**, **Informationsarchitektur**, **Interaktionsdesign**, **Usability**, **Zugänglichkeit**. *(LF8)*. 

**Corporate Design (CD)**: einheitliches visuelles Erscheinungsbild (Farben, Typografie, Logos) für Wiedererkennung & Kundenbindung – wichtig für konsistente Oberflächen. *(LF8)*. 

**Barrierefreiheit – Praxispunkte**: Tab-Navigierbarkeit, **Skalierbarkeit** von Inhalten, **Plattformunabhängigkeit** (z. B. Braille-Displays), **Alternativtexte**/Tooltips für Grafiken/Buttons; moderne Betriebssysteme bieten Funktionen (Bildschirmtastatur, hoher Kontrast, Screenreader, Lupe, Spracheingabe). *(LF8)*. 

**Vom Entwurf zur Oberfläche**: **Sketch → Wireframe → Mockup → Prototyp**. Mockups zeigen „Look & Feel“ (Farben, Typografie, Bilder), Prototypen erlauben **Interaktion** (z. B. Navigation testen). *(LF8)*. 

---

## 📚 UML-Beispiele aus den Unterlagen (kurz)

* **Use Case**: *Zimmer reservieren* (Kunde, Bank; **include/extend** korrekt eingesetzt). *(LF8)*. 
* **Use Case**: *Yachthafen – Liegeplatzverwaltung* (Mieten/Kündigen, An-/Abmelden, Sperren/Freigeben, **Verfügbarkeit prüfen**). *(LF11a)*. 
* **Klasse**: *Yacht, Mieter, Liegeplatz* mit Attributen/Methoden, **Aggregation** und Methoden **aus Use Cases abgeleitet**. *(LF11a)*. 
* **Aktivität**: *Liegeplatz mieten* – **Entscheidung**, **Parallelität** (Bestätigung **und** E-Mail). *(LF11a)*. 

---

## 🗂️ Begriffe kompakt

| Begriff                    | Definition                                                                                                                              | Quelle              |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| **Anwendungsfalldiagramm** | Zeigt Akteure, Anwendungsfälle, Systemgrenze und Beziehungen (**include**, **extend**, **Generalisierung**).                            | (LF11a, LF8)        |
| **Klassendiagramm**        | Modelliert Klassen (Attribute/Methoden, Sichtbarkeiten) & Beziehungen (Assoziation, Aggregation/Komposition, Vererbung, Multiplizität). | (LF11a, LF8)        |
| **Aktivitätsdiagramm**     | Beschreibt Abläufe mit Start/Ende, Aktionen, **Entscheidungen**, **Parallelität** (Aufspaltung/Synchronisation).                        | (LF11a, AP2-Anhang) |
| **Softwareergonomie**      | Anpassung der UI an Nutzerbedürfnisse; Disziplinen: Psychologie, Arbeitswissenschaft, Design.                                           | (LF8)               |
| **Barrierefreiheit**       | Tab-Fokus, Skalierung, Alternativtexte, Plattform-/Hilfsmittel-Support; OS-Funktionen (Screenreader etc.).                              | (LF8)               |
| **Pseudocode (AP2)**       | Algorithmusdarstellung in allgemein verständlicher Form; **Kontrollstrukturen sichtbar**; nicht zwingend kompilierbar.                  | (AP2)               |

---

## ⚙️ Vorgehensweise in der Praxis (kompakt)

1. **Anforderungen & Entwurf**: Erst **Use Cases** & **Daten/Algorithmen** (Detailentwurf) festlegen; **UML** (v. a. Klassendiagramm) zur Modellierung nutzen. *(LF5)*. 
2. **Abläufe modellieren**: **Aktivitätsdiagramme** für Kontrollfluss (inkl. paralleler Aktionen). *(LF11a)*. 
3. **Algorithmus formulieren**: **Pseudocode** mit klaren If/Else/Schleifen (AP2-konform). *(AP2)*. 
4. **GUI entwerfen**: **Sketch → Wireframe → Mockup → Prototyp**; **CD/UX** beachten. *(LF8)*.
5. **Barrierefrei umsetzen**: Tab-Reihenfolge, Skalierung, Alt-Texte, OS-Hilfen; bei Java: **Swing-Accessibility** berücksichtigen. *(LF8)*.

---

### ✅ Das hast du jetzt:

* Eine **klare Abbildung** von Kontrollstrukturen via **Aktivitätsdiagramm** und **Pseudocode** (mit Praxisbeispiel). *(LF11a, AP2)*.
* Die **UML-Mindestmenge** (*Use Case*, *Klasse*, *Aktivität*) samt **Notation & Beispielen**. *(LF11a, LF8, AP2-Anhang)*.
* **GUI-Entwurf** mit **Ergonomie & Barrierefreiheit** plus **Java-Beispielcode**. *(LF8)*.

Wenn du magst, erstelle ich dir im nächsten Schritt **aus deinen eigenen Use Cases** ein **passendes Aktivitätsdiagramm plus Pseudocode** – und eine **kleine barrierearme Swing-Maske** als Prototyp.




---

## [➡️ Nächstes](./1-Abbildung-der-Kontrollstrukturen-mittels-Aktivitaetsdiagramm-oder-Pseudocode-als-didaktisches-Hilfsmittel.md)