# 🧭 UML – **Use Case (Anwendungsfalldiagramm)**, **Klassendiagramm**, **Aktivitätsdiagramm** <span style="background:#e0f0ff;">LF5, LF8, LF11a</span>

Die **Unified Modeling Language (UML)** ist eine moderne grafische **Modellierungssprache** mit mehreren **Diagrammtypen** zur Beschreibung verschiedener Aspekte von Softwaresystemen (Struktur & Verhalten). *(LF5)* 
Zu den in der Ausbildung besonders betonten Diagrammen zählen **Anwendungsfalldiagramm**, **Klassendiagramm** und **Aktivitätsdiagramm**. *(LF8)* 

---

## 🎭 **Anwendungsfalldiagramme (Use Case Diagram)**

**Zweck & Sichtweise:** Ein **Anwendungsfalldiagramm** fasst **Anwendungsfälle (Use Cases)** zusammen und stellt u. a. die **Beziehungen zwischen Akteuren** und Anwendungsfällen sowie das **äußerlich erkennbare Systemverhalten aus Anwendersicht** dar (**Was**, nicht **Wie**). *(LF8)* 
Es ist – neben dem Klassendiagramm – eines der **wichtigsten UML-Diagramme**. *(LF8)* 

**Notationselemente & Aufbau:**

* **Systemgrenze** (Rechteck) umfasst alle **Anwendungsfälle** des Systems. *(LF8)* 
* **Akteur (Actor)** als externer Benutzer oder **externes System** (ggf. als Rechteck). *(LF8)* 
* **Anwendungsfall** (Ellipse) beschreibt eine bereitgestellte **Funktion**. *(LF8)* 
* **Assoziation** (Strich) zwischen **Akteur** und **Anwendungsfall**. *(LF8)* 
* **«include»**: unbedingte **Einbindung** eines Anwendungsfalls in einen anderen. *(LF8)* 
* **«extend»** (mit **condition**): **Erweiterung** unter Bedingung. *(LF8)* 
* **Generalisierung/Spezialisierung** bei **Akteuren** und **Anwendungsfällen** möglich. *(LF11a)* 

**Durchgehendes Beispiel (Zimmerreservierung):**
Akteure: **Kunde**, **Bank** (externes System). Anwendungsfälle: **Zimmer reservieren**, **Verfügbarkeit prüfen**, **Zahlungsmethode eingeben**, **Kreditkarte prüfen**; **«include»**/«extend»-Beziehungen gemäß Aufgabenstellung. *(LF8)* 
Didaktischer Fokus: Eignet sich als **Diskussionsgrundlage** mit dem Auftraggeber zur Szenario-Klärung. *(LF8)* 

**Weiteres Beispiel (Yachthafen-App):**
Use Cases u. a. **Liegeplatz mieten/kündigen**, **Verfügbarkeit überprüfen** (**«includes»**), **Liegeplatz sperren/freigeben**, **Belegung ansehen**; Beziehungen und Bedingungen sind im Diagramm beschrieben. *(LF11a)* 

---

## 🧩 **Klassendiagramme (Class Diagram)**

**Zweck:** Das **Klassendiagramm** ist der **wichtigste Diagrammtyp** der UML zur Beschreibung von **Klassen** und **Beziehungen** (Bauplan der Objekte). *(LF8)* 
Im **Softwareentwurf** wird es zur **Modellierung objektorientierter Programme** eingesetzt. *(LF5)* 

**Notation (Auszug):**

* **Klasse** als **Rechteck** mit **Klassenname**, **Eigenschaften (Attribute mit Datentyp)** und **Methoden** (mit Parametern & Rückgabetypen; **Sichtbarkeiten** `+`/`-`/`#`). *(LF8)* 
* **Assoziation** (gerichtet optional), **Aggregation** (leere **Raute** an „Ganzes“), **Komposition** (ausgefüllte **Raute** an „Ganzes“), **Multiplizität** (z. B. `0..*`), **Vererbung** (Dreieckspfeil). *(LF8)* 

**Beispiel „Maschinen-Wartung“ (aus LF8):**
Methoden wurden **direkt aus dem Anwendungsfalldiagramm abgeleitet**; **Komposition** zwischen Hauptprogramm und **Maschine**; mögliche **Spezialisierungen** (Unterklassen) und Anpassung der **Sichtbarkeiten**. *(LF8)* 

**Weitere Beispielaufgabe (Bahnunternehmen):**
**Teil-Ganzes-Beziehung** (Zug aus Triebwagen + Waggons), **Spezialisierungen** (Diesel-Lok/E-Lok; Waggonarten). *(LF8)* 

**Beispiel „Operationsliste“ (Signaturen aus dem Klassendiagramm):** *(LF8)* 

```
// Auszug aus den Arbeitsmethoden (abgeleitet aus Use Cases)
ermittleProduktionsdaten(): void
einschaltenMaschine(m: Maschine): void
ausschaltenMaschine(m: Maschine): void
```

---

## 🔁 **Aktivitätsdiagramme (Activity Diagram)**

**Zweck:** Beschreibt das **Verhalten** (Ablauf von **Aktionen**) einer **Klasse** oder **Komponente**; die Darstellung ist **sehr flexibel**. *(LF8)* 
**Elemente & Lesart (didaktisch):** **Aktionsknoten**, **Kontrollkanten**, **Entscheidung/Verzweigung** (mit Bedingungen), **Zusammenführung**, **Fork/Join** für **Parallelität**; ggf. **Partitionen (Swimlanes)** für Rollen/Systemteile. *(LF11a)* 

**Beispiel „Liegeplatzvermietung“ (mit Partitionen):**
**Kunde** vs. **Programm** als **Partitionen**; nach Auswahl des Liegeplatzes **Verfügbarkeit prüfen**; bei Erfolg **Daten erfassen & speichern**; **parallel**: **Erfolgsmeldung anzeigen** **und** **E-Mail versenden**; **Synchronisation** vor Abschluss der Aktivität. *(LF11a)* 

---

## 🔗 **Zusammenspiel: Vom Use Case zum Klassen- und Aktivitätsdiagramm**

* **Use Cases strukturieren die Funktionalität** des Systems und geben **Akteure** & **Anwendungsfälle** vor. *(LF8)* 
* **Klassendiagramm** leitet **Methoden** und **Beziehungen** häufig **aus den Use Cases** ab (Operationen entsprechen den im Use Case geforderten Funktionen). *(LF8)* 
* **Aktivitätsdiagramm** präzisiert das **Verhalten**/den **Ablauf** der im Use Case beschriebenen Vorgänge (inkl. **Entscheidungen** und **Parallelität**). *(LF8, LF11a)*  

---

## 📚 Begriffstabelle

| Begriff                             | Definition                                                                                                                            | Quelle         |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **UML**                             | Grafische **Modellierungssprache** mit mehreren Diagrammtypen für Struktur und Verhalten.                                             | (LF5)          |
| **Anwendungsfalldiagramm**          | Stellt **Akteure**, **Anwendungsfälle**, **Systemgrenze** und deren **Beziehungen** dar (anwenderzentrierte Sicht).                   | (LF8)          |
| **Klassendiagramm**                 | Wichtigster Diagrammtyp zur Darstellung von **Klassen** und **Beziehungen** (z. B. Assoziation, Aggregation, Komposition, Vererbung). | (LF8)          |
| **Aktivitätsdiagramm**              | **Verhaltensdiagramm** für **Abläufe**/Aktionen; unterstützt **Entscheidungen** und **Parallelität** (Fork/Join).                     | (LF8, LF11a)   |
| **«include»**                       | Unbedingte **Einbindung** eines Anwendungsfalls in einen anderen.                                                                     | (LF8)          |
| **«extend»**                        | **Optionale Erweiterung** eines Anwendungsfalls unter **Bedingung**.                                                                  | (LF8)          |
| **Generalisierung/Spezialisierung** | Verallgemeinerungs-/Spezialisierungsbeziehung bei **Akteuren** und **Anwendungsfällen**.                                              | (LF11a)        |
| **Komposition**                     | **Starke Teil-Ganzes-Beziehung** (ausgefüllte **Raute** am „Ganzes“).                                                                 | (LF8)          |

---

## ⚙️ Prozessschritte (didaktischer Einsatz in Projekten)

1. **Use-Cases erheben & abgrenzen** (Akteure, Systemgrenze, Beziehungen «include»/«extend», Generalisierung). *(LF8)* 
2. **Domäne in Klassen modellieren** (Attribute/Methoden, Beziehungen, Sichtbarkeiten, Multiplizitäten; Methoden aus Use Cases ableiten). *(LF8)*  
3. **Abläufe als Aktivitätsdiagramme konkretisieren** (Verzweigungen, Partitionen, Fork/Join). *(LF11a)* 
4. **Szenarien mit weiteren Verhaltensdiagrammen vertiefen** (z. B. **Sequenzdiagramme** für Nachrichtenfluss; **Zustandsdiagramme** für Reaktionen/Zustandswechsel). *(LF8, LF11a)*  

---

## 🧪 Kompakte Praxisbeispiele (aus den PDFs)

**Use-Case „Zimmerreservierung“ – Kernaussagen:**
Akteure **Kunde/Bank**, Use Cases **reservieren/prüfen/zahlen**, Beziehungen (inkl. **«include»/«extend»**), als **Diskussionsgrundlage** modelliert. *(LF8)* 

**Use-Case „Yachthafen-App“ – Kernaussagen:**
**Mieten/kündigen**, **Verfügbarkeit prüfen** (**«includes»**), **sperren/freigeben**, **Belegung ansehen**; mit Bedingungen und Beziehungen. *(LF11a)* 

**Aktivitätsdiagramm „Liegeplatzvermietung“ – Ablaufbausteine:**
**Prüfen Verfügbarkeit** → **Daten erfassen & speichern** → **parallel** **Erfolgsmeldung** **und** **E-Mail** → **Synchronisation** → **Ende** (mit **Partitionen** Kunde/Programm). *(LF11a)* 

**Klassendiagramm „Maschinen-Wartung“ – Auszug Methoden (Signaturen):** *(LF8)* 

```
ermittleProduktionsdaten(): void
einschaltenMaschine(m: Maschine): void
ausschaltenMaschine(m: Maschine): void
```

---

### 🎯 Fazit

* **Use-Cases** definieren **Funktionen & Akteure**; **Klassendiagramme** modellieren **Strukturen & Beziehungen**; **Aktivitätsdiagramme** zeigen **Ablauflogik** inkl. **Entscheidungen**/**Parallelität**. *(LF8, LF11a)*   
* Die **Methoden** der Klassen lassen sich **aus den Use-Cases ableiten**, wodurch ein **kohärenter Übergang** von der **Anforderung** zur **Struktur** und weiter zum **Verhalten** entsteht. *(LF8)* 

Möchtest du für deinen konkreten Anwendungsfall (z. B. Webshop, Reservierung, Login) ein **Use-Case-Set**, ein **Klassendiagramm** und ein **Aktivitätsdiagramm** im Stil der PDFs ausgearbeitet haben?

---

## [➡️ Nächstes](./3-Entwurf-der-Bildschirmausgabemasken-Softwareergonomie-Barrierefreiheit.md)