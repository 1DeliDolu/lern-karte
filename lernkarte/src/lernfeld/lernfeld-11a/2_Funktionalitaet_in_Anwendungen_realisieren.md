# 2 Funktionalität in Anwendungen realisieren [Seite: 109]

**Ziel und Kontext**
Das Kapitel bündelt die Schritte, um funktionale Anforderungen in lauffähige, wartbare Software zu überführen: Modular planen, passende **Datenstrukturen** wählen, **Algorithmen** modellieren und implementieren, anschließend **testen** und **dokumentieren**. Leitmotiv sind Modularisierung, UML-gestützte Planung und eine saubere Schnittstellengestaltung. Beispielrahmen ist das Projekt „**Yachthafen Resort**“. 

## 2.1 Modulare Softwarekomponenten planen

**Kernaussagen**

* **Modularisierung** zerlegt komplexe Systeme in klar abgegrenzte **Module** mit definierten **Schnittstellen**; Vorteile: Verständlichkeit, Wiederverwendbarkeit, Austauschbarkeit, parallele Entwicklung. 
* Planung erfolgt modellgetrieben mit **UML** (u. a. Anwendungsfall-, Sequenz-, Zustandsdiagramm). 
* **Entwurfsmuster** strukturieren wiederkehrende Lösungsprobleme: *Erzeugungs-* (z. B. **Factory**, **Singleton**), *Struktur-* (z. B. **Adapter**, **Facade**), *Verhaltensmuster* (z. B. **Observer**). 

**Methoden & Hinweise**

* **Factory Pattern** entkoppelt Objekt­erzeugung von Nutzung; **Adapter Pattern** verbindet inkompatible Schnittstellen (Delegation oder Vererbung).
* **Clean-Code-Prinzipien** (z. B. **KISS**, **SOLID**, sprechende Namen, Vermeidung „Magic Numbers“) erhöhen Lesbarkeit und Wartbarkeit. 

## 2.2 Datenstrukturen von Softwarekomponenten planen und implementieren

**Kernaussagen**

* **Datenstruktur** = Organisation von Daten + Grundoperationen (**Lesen/Schreiben**, **Suchen**, **Einfügen/Löschen**); Effizienz hängt von Speicherbedarf und Laufzeit der Operationen ab. 
* Typenüberblick: **lineare** Strukturen (Array, **Stack**, **Queue**, **Linked List**) vs. **hashbasierte** Strukturen; Wahl nach Anforderung (Datenmenge, Dynamik, Zugriffsmuster). 

**Wesentliche Vertreter & Umsetzung**

* **Array**: schneller Indexzugriff; Größe i. d. R. fix; ein-/mehrdimensional nutzbar; in Java über Typ + `[]`, Zugriff mit Zeilen-/Spaltenindex.
* **Listen (Python)**: flexibel, mehrdimensional (verschachtelt) möglich; typische Operationen wie `append`, `del`. 

**Auswahl nach Szenario**

* Feste Matrix mit effizientem Lesen/Schreiben (Theatersitzplan): **zweidimensionales Array**. 

## 2.3 Funktionalität von Softwarekomponenten planen und implementieren

**Algorithmen modellieren & umsetzen**

* **Algorithmus** = endliche, schrittweise Vorgehensweise; Modelle: **PAP**, **Struktogramm**, **Pseudocode**. 
* Beispiel „Yachthafen“: Belegungs-Algorithmus (Array mit `true/false`) wird in PAP/Struktogramm entworfen und in **Java**/**Python** implementiert.
* **Rekursion vs. Iteration**: Iterationen oft effizienter (Speicher), Rekursion eleganter, aber **Stack-Overflow**-Risiko → klare **Abbruchbedingung** nötig. 

**Typische Funktionalitäten**

* **Sortierverfahren**: einfache Algorithmen verstehen/implementieren; für Produktivcode Standardbibliotheken nutzen. 
* **Kryptographie (Übung)**: **Cäsar-Chiffre** als Lernbeispiel; in der Praxis stets geprüfte Verfahren/Bibliotheken verwenden (keine Eigenkrypto!).
* **Hashing**: Passwörter nicht im Klartext speichern; Hash erzeugen und (ggf. als Hex) ausgeben. 

**Daten­austausch & externe Quellen**

* **JSON-Im/Export** (Python-`json`), Dateiformate als Schnittstellenstandard (CSV, XML, JSON). 
* **REST-APIs**: Client-Server-Prinzip; **HTTP-Methoden** (**GET/POST/PUT/DELETE**), **Statuscodes**; Beispiel **OpenWeatherMap** (Requests in Python).
* **Datenbanken** (Überblick): Standard-APIs (**ODBC/JDBC**), **Transaktionen** (**BEGIN/COMMIT/ROLLBACK**), **Stored Procedures**, **Trigger**.

## 2.4 Funktionalität von Softwarekomponenten testen

**Kernaussagen**

* **Modultests/Unittests** sind die unterste Teststufe; in agilen Prozessen zentrale Basis für iterative Entwicklung und Automatisierung. 
* **Testentwurf** u. a. über **White-Box**-Kriterien (Anweisungs-, Zweigüberdeckung) mit systematischer Testdatenermittlung. 

## 2.5 Softwarekomponenten und Schnittstellen dokumentieren

**Kernaussagen & Inhalte**

* Komponenten- und **Schnittstellendokumentation** ist essenziell (Zweck, Parameter/Wertebereiche, Rückgaben, Verhalten; **nicht-funktionale** Eigenschaften wie **Effizienz**, **Sicherheit**, **Zuverlässigkeit**).
* **Werkzeuge** zur automatischen Generierung: **Javadoc** (Java), **Sphinx** (Python), **Doxygen** (mehrere Sprachen).

---

### Merkkasten

* Baue zuerst **Module** und **Schnittstellen** sauber (UML, Patterns, Clean Code).
* Wähle **Datenstrukturen** nach Anforderung, nicht nach Gewohnheit. 
* Modelliere **Algorithmen** vor der Implementierung; prüfe **Rekursion** auf Abbruch.
* Nutze etablierte **Bibliotheken/Standards** für Sicherheit, Daten­austausch und DB-Zugriff.
* **Teste** automatisiert und **dokumentiere** für Entwickler wie Nutzer.

---

## [Nächstes Thema](./2.1.1_Das_Prinzip_der_Modularisierung_praesentieren_markdown.md)