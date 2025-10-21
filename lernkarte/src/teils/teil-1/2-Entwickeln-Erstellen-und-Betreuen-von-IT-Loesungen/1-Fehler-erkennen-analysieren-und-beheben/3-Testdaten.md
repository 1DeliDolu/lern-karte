# 🧪 Testdaten (Auswahl, Generierung, Beispiele) <span style="background:#e0f0ff;">LF5, LF8, LF11a, AP2</span>

**Testdaten** sind die im Test verwendeten Eingabe-, Zwischen- oder Ausgabewerte, die zu **konkreten Testfällen** gehören. Ihre **Bestimmung** ist Bestandteil des **Testentwurfs**; ihre **Bereitstellung** gehört zur **Testvorbereitung** (z. B. „Bestimmen der Testdaten“ bzw. „Vorbereiten und Bereitstellen der Testdaten“). *(LF5)*
Im **Prüfungskatalog (AP2)** ist das Thema ausdrücklich benannt: **„Testdaten generieren und auswählen“** (im Kontext „Softwaretests erstellen, durchführen und die Ergebnisse analysieren“). *(AP2)* 

---

## ⚙️ Einordnung im Testprozess

* **Testentwurf**: **Testfälle** aus Zielen ableiten, **Testdaten bestimmen**, Abläufe festlegen. *(LF5)* 
* **Testvorbereitung**: **Auswahl** der Testfälle, **Testumgebung aufbauen**, **Testdaten bereitstellen**. *(LF5)* 

---

## 🧭 Quellen der Testdaten: Black-Box vs. White-Box

* **Black-Box-Test**: Testfälle (und damit Testdaten) werden aus der **Anforderungsspezifikation** abgeleitet; reale vs. erwartete Ergebnisse werden verglichen. *(LF5, LF11a)*
* **White-Box-Test**: Testdaten werden aus der **Programmlogik** bestimmt, z. B. zur **Anweisungs-** und **Zweigüberdeckung**. *(LF11a)* 

---

## 🎯 Verfahren zur **Testdatenermittlung** (Black-Box)

### Äquivalenzklassenbildung

Ziel: hohe Abdeckung mit wenigen Tests, indem **gültige** und **ungültige** **Äquivalenzklassen** gebildet und **repräsentative Werte** je Klasse gewählt werden. *(LF8)* 

**Beispiel (Temperaturprüfung):**
Methode `bool isTemperatureOk(double temp)` soll **True** liefern, wenn `temp ≤ 30`, sonst **False**.
Äquivalenzklassen: `temp ≤ 30` (gültig), `temp > 30` (gültig); Beispiele: `-1, 3.89, 28` bzw. `32, 65.4, 101.33`. *(LF8)* 

### Grenzwertanalyse (Extremwertetest)

Erweiterung der Äquivalenzklassenbildung: **Testdaten an den Grenzen** der Klassen, da Fehler oft dort auftreten (z. B. `<` statt `<=`). *(LF8)* 

---

## 🧩 Verfahren zur **Testdatenermittlung** (White-Box)

### Anweisungsüberdeckung

Ziel: **jede Anweisung** mindestens einmal ausführen; geeignete **Testdaten** können genügen, um **100 %** zu erreichen (z. B. `a=10, b=20`). *(LF11a)* 

### Zweigüberdeckung

Ziel: **jeden Zweig/Kante** mindestens einmal betreten; es werden **mehrere** **Testdatensätze** benötigt (z. B. zusätzlich ein Fall, der die Verzweigung **nicht** betritt, `a=15, b=5`). *(LF11a)* 

---

## 📚 Durchgehendes Black-/White-Box-Beispiel (Yachtdaten)

**Anforderung (Black-Box-Ausgangspunkt):**
Eingaben: **Länge**, **Breite**, **Tiefgang** (jeweils mit zwei Nachkommastellen). Regeln: **0 < Länge < 20**, **0 < Breite < 5**, **0 < Tiefgang < 3**. *(LF11a)* 

**White-Box-Beispiel (Pseudocode & Überdeckungen):**

* **Anweisungsüberdeckung – Testdaten (Beispiel):** `Länge 10.00`, `Breite 2.50`, `Tiefgang 1.20`. *(LF11a)* 
* **Zweigüberdeckung – Testdaten (Beispiele):**
  `L:10.00,B:2.50,T:1.20` • `L:40.00,B:2.50,T:1.20` • `L:10.00,B:7.00,T:1.20` • `L:10.00,B:2.50,T:3.60`. *(LF11a)* 

---

## 💻 Beispielcode (vollständig & nutzbar)

### Java – JUnit-Unittest (Testdaten via Äquivalenzklassen/Überdeckung) <span style="background:#e0f0ff;">LF11a</span>

Die Testdaten werden z. B. über **Anweisungsüberdeckung** oder **Äquivalenzklassenbildung** ermittelt (hier: `3` und `1`, Erwartung `4`). *(LF11a)*

```java
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class BeispielJUnitTest {

    @Test
    void testCalculateSum() {
        int testValue1 = 3;
        int testValue2 = 1;
        int expectedResult = 4;

        int result = calculateSum(testValue1, testValue2);
        assertEquals(expectedResult, result, "Summe falsch");
    }
}

public static int calculateSum(int x, int y) {  // zu testende Methode
    return x + y;
}
```

### Python – `unittest` (Grenzwert „0“) <span style="background:#e0f0ff;">LF11a</span>

Vier Testfälle, u. a. **Grenzwert** `0` als Testdatenpunkt; Ausführung als **Unittest** in PyCharm. *(LF11a)* 

```python
import unittest

class Example_Unittest(unittest.TestCase):
    def test_calculate_cube_volume(self):
        self.assertEqual(calculate_cube_volume(2), 8)
        self.assertEqual(calculate_cube_volume(1), 1)
        self.assertEqual(calculate_cube_volume(0), 0)      # Grenzwert
        self.assertEqual(calculate_cube_volume(1.5), 3.375)

def calculate_cube_volume(x):  # zu testende Methode
    return (x * x * x)
```

---

## 🧪 Weitere Hinweise aus den LFs

* **Black-Box-Tests** können – solange sich die **Spezifikation** nicht ändert – **wiederverwendet** werden; Frage nach **geeigneten Testdaten** wird u. a. mit **Äquivalenzklassen** und **Grenzwerten** gelöst. *(LF8)* 
* **White-Box-Tests**: Auswahl von Testdaten nach **Kontrollfluss-Zielen** (Anweisung/Zweig usw.). *(LF5)* 
* **F.I.R.S.T.-Kriterien** für gute Unittests (u. a. **Repeatable, Self-Validating**): relevante Rahmenbedingungen für **automatisierte Tests** mit definierten **Testdaten**. *(LF11a)* 

---

## 📖 Begriffe & Definitionen

| Begriff                      | Definition                                                                                                         | Quelle       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------ |
| **Testdaten**                | Konkrete Werte für Testfälle; werden im **Testentwurf** festgelegt und in der **Testvorbereitung** bereitgestellt. | (LF5)        |
| **Äquivalenzklassenbildung** | Ein-/Ausgabebereiche in **Klassen** aufteilen; **repräsentative Testdaten** je Klasse wählen.                      | (LF8)        |
| **Grenzwertanalyse**         | Auswahl von **Werten an Klassengrenzen**, da Fehler häufig dort auftreten.                                         | (LF8)        |
| **Anweisungsüberdeckung**    | Testdaten so wählen, dass **jede Anweisung** mindestens einmal ausgeführt wird.                                    | (LF11a)      |
| **Zweigüberdeckung**         | Testdaten so wählen, dass **jeder Zweig** mindestens einmal betreten wird.                                         | (LF11a)      |
| **Black-Box-Test**           | Testfälle aus **Spezifikation** ableiten; **Testdaten** aus Anforderungen bestimmen.                               | (LF5, LF11a) |
| **White-Box-Test**           | **Programmlogik** bestimmt die **Testdaten** (Überdeckungsziele).                                                  | (LF11a)      |
| **AP2-Anforderung**          | „**Testdaten generieren und auswählen**“ als explizites Prüfungsmerkmal.                                           | (AP2)        |

---

## 🔧 Praxisleitfaden direkt aus den LFs (kompakt)

1. **Testentwurf**: Testziele ⇒ **Testfälle** ⇒ **Testdaten bestimmen** (inkl. Äquivalenzklassen/Grenzwerte). *(LF5, LF8)*
2. **Testvorbereitung**: **Testdaten bereitstellen** (Umgebung/Daten). *(LF5)* 
3. **Durchführung & Auswertung**: reale vs. erwartete Ergebnisse vergleichen; ggf. nachsteuern. *(LF5)* 



---

## [➡️ Nächstes](./4-Komponententests-und-Integrationstests.md)