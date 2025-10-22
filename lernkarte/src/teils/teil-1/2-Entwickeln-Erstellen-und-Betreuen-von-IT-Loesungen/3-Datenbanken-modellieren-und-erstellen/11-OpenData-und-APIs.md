# 🗂️ Open Data & API-Schnittstellen <span style="background:#e0f0ff;">LF8, LF11a, LF10c, LF7</span>

**Open Data** sind Daten, die (weitgehend) **uneingeschränkt nutzbar** sind; Einschränkungen können z. B. die **Nennung des Urhebers** oder eine **Share-alike-Klausel** betreffen. Das Konzept lehnt sich an **Open Access** und **Open Source** an und soll breite Nutzung, Verarbeitung und Innovation ermöglichen. *(LF8)* 
Zu **Closed Data** bestehen Unterschiede u. a. bei **Zugänglichkeit**, **Maschinenlesbarkeit** und **Kosten** (Vergleichstabelle). *(LF8)* 
Die Materialien listen **Open-Data-Quellen** (z. B. Portale von Ländern/Behörden, EU-Portale, Wissenschaftsorganisationen) explizit als Beispiele. *(LF8)* 

**API-Schnittstellen** (Application Programming Interfaces) sind **offene Schnittstellen** für den programmatischen Zugriff auf Dienste – sie sind u. a. für **IoT-Plattformen** unerlässlich. *(LF7)*
Für **Web-Datenzugriff** werden neben Datei-/Netzwerkprotokollen (FTP/HTTP etc.) vor allem **Web-APIs** wie **SOAP** und **REST** genannt. *(LF8)* 

---

## 🌐 Open Data im Überblick (Pro/Kontra, Formate)

**Argumente pro/contra Open Data**: von **Innovation & öffentlicher Zugang** bis zu **Datenschutz, Qualität, Wettbewerbsfragen**. *(LF8)* 

**Gängige Austauschformate**: **CSV** (separierte Textwerte, sehr verbreitet), bei komplexeren Strukturen oft **XML/JSON**. *(LF8)* 

---

## 🔌 API-Schnittstellen: SOAP vs. REST, JSON, HTTP

**SOAP** (W3C-Standard) überträgt **XML-Nachrichten** und bringt umfangreiche Standards (u. a. Transaktions-Eigenschaften) mit; **WSDL** beschreibt SOAP-Schnittstellen. *(LF8)* 
**REST** ist eine **moderne, ressourcenschonende** Alternative, nutzt **HTTP-Methoden** (**GET/POST/PUT/DELETE**) und liefert typischerweise **JSON**; weit verbreitet in Cloud-Umgebungen. *(LF8, LF11a)*

**HTTP-Methoden & Statuscodes (Auszug)**:
GET (lesen), POST/PUT (erstellen/aktualisieren), DELETE (löschen). Wichtige **Statuscodes**: *200 OK*, *201 Created*, *400 Bad Request*, *404 Not Found*, *500 Server Error* (Kategorien 1xx–5xx). *(LF11a)*

**REST-Architektur**: Client sendet **HTTP-Request**, Server antwortet mit **JSON + Statuscode**; Beispielnennung: **Google-Maps-REST-API**. *(LF11a)* 

---

## 🧪 Praxisbeispiele (aus den Unterlagen)

### 1) Open-Data-CSV einlesen & auswerten (DWD-Wetterdaten) <span style="background:#e0f0ff;">LF10c</span>

```python
# 1. Schritt: CSV laden
import pandas
df = pandas.read_csv("wetterdaten_4271.csv", sep=";", decimal=".", index_col="MESS_DATUM")

# 2. Schritt: Auswahl & Bereinigung
df = df.loc["2021010100":"2021123123"]
df.drop(columns=["STATIONS_ID", "eor"], inplace=True)

# 3. Schritt: Kenngrößen
print("Minimum", df["TT_TU"].min())
print("Maximum", df["TT_TU"].max())
print("Mittelwert", df["TT_TU"].mean())
print("Median", df["TT_TU"].median())
print("Varianz", df["TT_TU"].var())
print("Standardabweichung", df["TT_TU"].std())

# 4. Schritt: Entropie
import scipy.stats as sci
df_p = df["TT_TU"].value_counts() / df["TT_TU"].count()
e = sci.entropy(df_p, base=2)
print("Entropie", e)
```

*Beispielablauf & Auswertung der DWD-Daten (CSV-Open-Data) inklusive Entropie-Berechnung.* *(LF10c)*

### 2) REST-API abfragen (OpenWeatherMap, JSON) <span style="background:#e0f0ff;">LF11a</span>

```python
import requests
import json

API_key = "API_KEY"                     # eigenen Schlüssel einsetzen
base_url = "https://api.openweathermap.org/data/2.5/weather?"
cityname = input("Geben Sie einen Ort ein: ")
url = base_url + "appid=" + API_key + "&q=" + cityname

weather_data = requests.get(url).json() # GET-Anforderung
json_object = json.dumps(weather_data, indent=4)
print("Aktuelle Wetterdaten von " + cityname + ":")
print(json_object)
```

*Beispiel: REST-GET, Antwort als JSON; **API-Schlüssel** erforderlich, anschließend Weiterverarbeitung möglich.* *(LF11a)*

> **Hinweis:** Die Materialien betonen **JSON** als Antwortformat und führen **Requests-Funktionen** (`get`, `post`, `put`, `delete`) explizit auf. *(LF11a)* 

---

## 🧭 Prozessschritte (aus den Unterlagen abgeleitet)

1. **Datenquelle wählen**: intern, extern oder **Open Data** (Portale, Behörden, Forschung). *(LF10c, LF8)*
2. **Format verstehen**: **CSV/JSON/XML** und Struktur prüfen; ggf. **Vereinheitlichung/Bereinigung** vornehmen. *(LF8, LF10c)*
3. **Zugriffsmethode festlegen**: Datei-/Netzwerkprotokolle (**FTP/HTTP** …) oder **Web-API** (**SOAP/REST**). *(LF8)* 
4. **Authentifizierung beachten**: z. B. **API-Schlüssel** bei öffentlichen REST-APIs. *(LF11a)* 
5. **Fehlerbehandlung** über **HTTP-Statuscodes** und Logging. *(LF11a)* 
6. **Weiterverarbeitung/Analyse**: Kennzahlen, Visualisierung, ML-Vorverarbeitung. *(LF10c)* 

---

## 🧱 Zusatz: Schnittstellen-Dokumentation & JSON in Sprachen

* **API-Dokumentation**: Werkzeuge wie **Sphinx**/**Doxygen** werden als Dokumentationslösungen genannt. *(LF11a)* 
* **JSON in Programmiersprachen**: Hinweis auf **Java-Paket `javax.json`** (separate Einbindung erforderlich) und zugehörige Doku. *(LF11a)* 

---

## 📚 Begriffstabelle

| **Begriff**           | **Definition**                                                                       | **Quelle** |
| --------------------- | ------------------------------------------------------------------------------------ | ---------- |
| **Open Data**         | Daten mit (weitgehend) freier Nutzung; ggf. Auflagen wie Urhebernennung/Share-alike. | LF8        |
| **Closed Data**       | Daten mit Einschränkungen bzgl. Zugang, Maschinenlesbarkeit, Kosten.                 | LF8        |
| **CSV**               | Einfaches Textformat mit Separatoren; weit verbreitet für Austausch.                 | LF8        |
| **API**               | Offene Anwendungsprogrammierschnittstelle für Entwicklerzugriff.                     | LF7        |
| **SOAP**              | XML-basierter Webservice-Standard (W3C), oft mit WSDL beschrieben.                   | LF8        |
| **REST**              | Ressourcenorientierte Web-API mit HTTP-Methoden (GET/POST/PUT/DELETE).               | LF8, LF11a |
| **HTTP-Statuscode**   | Rückmeldung der Anfrage (z. B. 200, 201, 400, 404, 500).                             | LF11a      |
| **JSON**              | Typisches Austauschformat von REST-APIs; Rückgabe im Beispiel.                       | LF11a      |
| **API-Schlüssel**     | Zugangstoken für API-Nutzung (Beispiel OpenWeatherMap).                              | LF11a      |
| **Open-Data-Quellen** | Auflistung von Behörden-/EU-/Wissenschaftsportalen.                                  | LF8        |

---

## 🎯 Ziele

* **Open-Data-Ressourcen** identifizieren und **maschinenlesbar** nutzen. *(LF8)* 
* **Web-APIs (REST/SOAP)** korrekt ansprechen, **HTTP-Methoden/Status** verstehen. *(LF8, LF11a)*
* **Praxisumsetzung**: CSV-Daten (z. B. DWD) analysieren; **REST-JSON** (z. B. Wetterdaten) konsumieren. *(LF10c, LF11a)*



---

<div style="display:flex;justify-content:center">
  <h2>  <a href="./10-Aggregatfunktionen.md" style="text-decoration:none;color:#007acc;">⬅️ Zurück  </a>|<a href="../../3-Durchfuehren-und-Dokumentieren-von-Qualitaetssichernden-Massnahmen/" style="text-decoration:none;color:#007acc;"> Weiter ➡️</a></h2>
</div>