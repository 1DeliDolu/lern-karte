# 🧪 Testdatengeneratoren <span style="background:#e0f0ff;">LF8 · LF5 · LF11a</span>

Ein **Testdatengenerator** ist ein Unterstützungswerkzeug, mit dem die für einen Test benötigten Daten **generiert**, **bereitgestellt**, **verändert** oder aus einer **Wissensdatenbank selektiert** werden können. Durch die schnelle Erzeugung großer Datenvolumen sind solche Generatoren besonders wichtig für **Big-Data-Anwendungen**. (LF8) 

---

## 🧩 Kategorien & Prinzipien

**Kategorien von Testdatengeneratoren** (mehrfach-Zuordnung je Tool möglich):

* **Datenbankbasierte Testdatengeneratoren:** verarbeiten **Datenbankschemata** und generieren daraus Testdatenbestände. (LF8) 
* **Codebasierte Testdatengeneratoren:** analysieren den **Quellcode** des Testobjekts (**White-Box-Test**). (LF8) 
* **Schnittstellenbasierte Testdatengeneratoren:** leiten aus **Schnittstellendefinitionen** (Parameterbereiche) Testdaten ab – z. B. mit **Äquivalenzklassen** und **Grenzwertanalyse** (**Black-Box-Test**). (LF8) 
* **Spezifikationsbasierte Testdatengeneratoren:** leiten Testdaten und **Sollwerte** aus einer **Spezifikation** ab. (LF8) 

**Methoden zur Testdatenfindung (Black-Box)** – vom Lehrwerk hervorgehoben:

* **Äquivalenzklassenbildung:** wenige Tests mit hoher Abdeckung; gültige/ungültige Klassen, Werte pro Klasse auswählen. (LF8) 
* **Grenzwertanalyse:** Werte an Klassen- bzw. Bereichsgrenzen prüfen (konzeptionell im Kontext genannt). (LF8) 

---

## ⚙️ Einbettung in den Testprozess

Im **Testentwurf** werden **Testfälle** konkretisiert und **Testdaten bestimmt**; in der **Testvorbereitung** werden **Testdaten bereitgestellt** und die **Testumgebung** aufgebaut; die **Durchführung**, **Auswertung** und **Dokumentation** (z. B. **Testprotokoll**) folgen darauf. (LF5) 

Ein **Testprotokoll** hält die Ergebnisse je **Testfall** fest (OK/Fehler, Bemerkungen). Beispielauszug (Datumsprüfung): (LF5) 

| Nr. | **Testdaten** | **Erwartete Ausgabe** | **Ergebnis** | **Bemerkungen**      |
| --: | ------------- | --------------------- | ------------ | -------------------- |
|   1 | 10.03.2020    | 10.03.2020            | Ok           | –                    |
|   2 | 29.02.1900    | Datum inkorrekt       | Fehler       | Datum wird angezeigt |
|   3 | 29.02.2000    | 29.02.2000            | Ok           | –                    |
|   4 | abc           | fehlerhafte Eingabe   | Ok           | –                    |
|   5 | 0.13.1000     | Datum inkorrekt       | Ok           | –                    |

---

## 🛠️ Tools (Auswahl mit Eigenschaften)

Am Markt gibt es viele Tools – von einfachen Online-Generatoren (z. B. **CSV**) bis zu spezialisierten **Big-Data-Generatoren**. Wichtige Auswahlkriterien laut Lehrwerk: **unterstützte Datenbanken/Formate**, **Generierungsmethoden**, **Betriebssysteme**, **Kosten/Verfügbarkeit**. (LF8) 

| **Tool**                             | **Kurzprofil**                                                               | **Datenbanken/Formate**                                       | **Hinweis**                     |
| ------------------------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------- |
| **DATPROF**                          | intuitiv, einfach zu bedienen                                                | Oracle, MS SQL Server, PostgreSQL, MySQL, MariaDB             | privat kostenlos nutzbar (LF8)  |
| **GenerateData.com**                 | anpassbare Datentypen, Länder-Plug-in                                        | MySQL                                                         | kostenlos (LF8)                 |
| **IRI RowGen**                       | ID/E-Mail-Generatoren, Klassen/Regelbibliotheken, Transformation & Reporting | relationale DB (JDBC), **viele NoSQL-DBs**                    | teils kostenlos nutzbar (LF8)   |
| **Mockaroo**                         | realistische Daten, >100 Datentypen                                          | **SQL, CSV, JSON, Excel**                                     | kostenlos nutzbar (LF8)         |
| **Datanamic Data Generator MultiDB** | erweiterte Generierungs- und Validierungsoptionen                            | Oracle, MS SQL Server, MySQL, PostgreSQL, MS Access, SQLite   | kostenpflichtig (LF8)           |
| **GS Data Generator**                | unterstützt Systemintegration                                                | MS SQL Server, Oracle, DB2, MS Access, FoxPro; **Excel, CSV** | kostenlos nutzbar (LF8)         |

---

## 📦 Beispiele: erzeugte Testdaten (Formate)

**XML-Beispiel** (Auszug aus dem Lehrwerk – Länder-Datensätze): (LF8) 

```xml
<record>
  <id>1</id>
  <country>Sweden</country>
  <country_code>SE</country_code>
  <currency>Krona</currency>
  <currency_code>SEK</currency_code>
  <time_zone>Europe/Stockholm</time_zone>
</record>
<record>
  <id>2</id>
  <country>Greece</country>
  <country_code>GR</country_code>
  <currency>Euro</currency>
  <currency_code>EUR</currency_code>
  <time_zone>Europe/Athens</time_zone>
</record>
```

**CSV-Beispiel (Header + Zeilen, Auszug):** (LF8) 

```csv
id,country,country code,currency,currency code,time zone
1,Sweden,SE,Krona,SEK,Europe/Stockholm
2,Greece,GR,Euro,EUR,Europe/Athens
```

> Hinweis: Das Lehrwerk zeigt ausdrücklich, dass Generatoren **CSV**, **JSON**, **SQL**, **Excel** und (kontextuell) **XML** erzeugen können; **NoSQL-Ziele** werden ebenfalls genannt (z. B. bei RowGen). (LF8) 

---

## 🧪 Nutzung der Testdaten in Tests (aus den LFs)

* **Unittests (Java, JUnit 5):** Das Lehrwerk erklärt Annotations wie `@Test`, `@BeforeEach`, `@AfterAll` und Assertions wie `assertEquals`, `assertTrue` und schildert eine Beispielaufgabe (Summe zweier Zahlen; Testdaten z. B. 3 und 1, erwartetes Ergebnis 4). (LF11a) 

  ```java
  import static org.junit.jupiter.api.Assertions.assertEquals;
  import org.junit.jupiter.api.Test;

  class BeispielJUnitTest {
      @Test
      void testCalculateSum() {
          // (Beispiel laut Lehrwerk: Testdaten 3 und 1, erwartetes Ergebnis 4)
      }
  }
  ```

  *(Die vollständige Beispielbeschreibung – inkl. Auswahl der Testdaten per Anweisungsüberdeckung/Äquivalenzklassen – ist im Text enthalten.)* (LF11a) 

* **Unittests (Python, `unittest`):** Das Lehrwerk zeigt das **Standardmodul** `unittest` mit Ergebnistypen **OK/Failure/Error** und Assertions (u. a. `assertEqual`, `assertAlmostEqual`), inklusive **Beispielaufgabe** (Volumen eines Würfels; u. a. Grenzwert **0** als Testfall). (LF11a) 

> Praxisbrücke: In beiden Fällen werden die **Testdaten** vorab bestimmt (z. B. **Äquivalenzklassen/Grenzwerte**) und in den **Unit-Tests** verwendet – die **Generatoren** liefern dabei reproduzierbare Datenbestände in passenden Formaten. (LF8, LF11a) 

---

## 📚 Begriffe kompakt

| **Begriff**                           | **Definition**                                                                                            | **Quelle** |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------- |
| **Testdatengenerator**                | Werkzeug zum Generieren/Bereitstellen/Verändern/Selektieren von Testdaten; wichtig für große Datenmengen. | LF8        |
| **Datenbankbasierter Generator**      | Leitet Testdaten aus **Datenbankschemata** ab.                                                            | LF8        |
| **Codebasierter Generator**           | Leitet Testdaten aus **Codeanalyse** ab (**White-Box**).                                                  | LF8        |
| **Schnittstellenbasierter Generator** | Nutzt **Schnittstellenparameter**; **Äquivalenzklassen/Grenzwerte** (**Black-Box**).                      | LF8        |
| **Spezifikationsbasierter Generator** | Leitet Daten + **Sollwerte** aus **Spezifikationen** ab.                                                  | LF8        |
| **Äquivalenzklassenbildung**          | Reduktion von Tests durch Klassenbildung über Wertebereiche.                                              | LF8        |
| **Testprotokoll**                     | Dokumentiert Ergebnisse der Testfälle (OK/Fehler/Bemerkungen).                                            | LF5        |

---

## ✅ Zusammenfassung (didaktisch)

* **Was?** Generatoren liefern **schnell** und **skalierbar** geeignete Testdaten. (LF8) 
* **Wie?** Auswahl nach **Zielsystem/Format/Methodik**; Black-Box-Methoden wie **Äquivalenzklassen/Grenzwerte** ergänzen die Generierung. (LF8) 
* **Wo im Prozess?** **Bestimmen** & **Bereitstellen** der Testdaten im **Testentwurf/Testvorbereitung**, **Dokumentation** im **Testprotokoll**. (LF5) 

Wenn du möchtest, formatiere ich dir im nächsten Schritt ein kleines **Mockaroo-Profil** (aus den im Lehrwerk gezeigten Feldern) als CSV/XML-Schema für deinen konkreten Use-Case – sag mir einfach, welche Felder du brauchst.
