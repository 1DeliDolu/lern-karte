# 🌐 Datenabruf mit HTTP & ODBC

**HTTP** ermöglicht den Zugriff auf **Webservices** (REST) über **öffentliche Web-URLs** in einer **Client-Server-Architektur**; Clients senden **HTTP-Requests** (z. B. **GET, POST, PUT, DELETE**), Server antworten mit **JSON-Daten** und **Statuscodes** *(LF11a)* .
**ODBC (Open Database Connectivity)** ist eine **standardisierte Datenbank-API**, die per **ODBC-Treiber** zwischen Anwendung und **DBMS** vermittelt und so **DBMS-Unabhängigkeit** herstellt *(LF11a)* .

---

## 🧭 Einordnung & Zielsetzung

* **HTTP/REST** dient dem **Abruf** und **Austausch** von Anwendungsdaten über das Web; typische Dienste laufen u. a. über **Port 80/443** (Beispiel: Firewall lässt **80/tcp** und **443/tcp** zu) *(LF9, LF11a)* .
* **ODBC** bündelt den **Zugriff auf Datenbanken** über eine einheitliche Schnittstelle statt vieler **herstellerspezifischer** DB-APIs *(LF11a)* .

---

## 🔗 HTTP/REST – Konzepte & Methoden

* **Architektur:** REST entspricht **Client-Server**; Clients senden **HTTP-Requests**, Server liefern **JSON** + **Statuscode** zurück *(LF11a)* .
* **Wichtige Methoden:** **GET** (Lesen), **POST** (Erstellen/Aktualisieren), **PUT** (Erstellen/Aktualisieren, **idempotent**), **DELETE** (Löschen) *(LF11a)* .
* **Statuscodes (Auszug):**
  **2xx** Erfolg (z. B. **200 OK**, **201 Created**), **3xx** Umleitung, **4xx** Clientfehler (z. B. **400**, **404**), **5xx** Serverfehler (z. B. **500**, **501**) *(LF11a)* .

---

## 🧪 Beispielcode: HTTP-GET mit Python (`requests`)

> Abruf freier **Wetterdaten (OpenWeatherMap)** per **GET**; Rückgabe und Ausgabe als **JSON** *(LF11a)* 

```python
import requests
import json

# {Hier den eigenen Schlüssel einfügen}
API_key = "API_KEY"

base_url = "https://api.openweathermap.org/data/2.5/weather?"
cityname = input("Geben Sie einen Ort ein: ")
url = base_url + "appid=" + API_key + "&q=" + cityname

# Abfragen der Daten
weather_data = requests.get(url).json()

print("Aktuelle Wetterdaten von " + cityname + ":\n")
print(json.dumps(weather_data, indent=4))
```

**Erläuterung:** Die URL wird aus **API-Schlüssel** und **Ort** zusammengesetzt, dann per **GET** abgefragt; die Antwort wird als **JSON** formatiert ausgegeben *(LF11a)* .

---

## 🧰 ODBC – Datenabruf über eine allgemeine DB-Schnittstelle

* **Problem & Lösung:** Datenbanken stellen **eigene Schnittstellen** bereit; aufgrund **unterschiedlicher** DB-APIs müsste jede DB **individuell** implementiert werden – das wird durch **allgemeine Schnittstellen wie ODBC** vermieden *(LF11a)* .
* **Prinzip:** Anwendung ruft **ODBC-Funktionen** auf → **ODBC-Treiber** übersetzt → **DBMS** verarbeitet Abfrage *(LF11a)* .
* **Verwandte Schnittstellen (Überblick):** **JDBC** (Java; inkl. **JDBC-zu-ODBC-Bridge**), **ADO.NET** (.NET-Datenzugriffskomponenten) *(LF11a)* .

---

## 🧩 Praxisbezug & Infrastruktur

* **HTTP-Dienste in Netzen:** In Firewall-Konfigurationen werden **Ports 80/443** (HTTP/HTTPS) freigeschaltet; Beispielauszug zeigt erlaubte **80/tcp**/**443/tcp** *(LF9)* .
* **Web-Admin-Oberflächen:** Viele Infrastruktur-/Anwendungs-Komponenten bieten **browserbasierte** Oberflächen (z. B. Webhosting-/Server-Management) – Zugriff via **HTTP(S)** *(LF9)* .

---

## 📚 Begriffe kompakt

| Begriff              | Definition                                                                                                           | Quelle     |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------- |
| **REST-Architektur** | Zugriff auf **Webservices** über **HTTP-Requests**; **JSON** + **Statuscode** als Antwort; **Client-Server**-Prinzip | *(LF11a)*  |
| **HTTP-Methoden**    | **GET** (Lesen), **POST/PUT** (Erstellen/Aktualisieren; **PUT idempotent**), **DELETE** (Löschen)                    | *(LF11a)*  |
| **HTTP-Statuscodes** | Kategorien **1xx–5xx**; z. B. **200**, **201**, **404**, **500**, **501**                                            | *(LF11a)*  |
| **ODBC**             | **Standardisierte DB-API**; **ODBC-Treiber** vermittelt zwischen App und **DBMS** (DBMS-unabhängig)                  | *(LF11a)*  |
| **JDBC / ADO.NET**   | **JDBC** (Java-DB-API, Bridge zu ODBC möglich); **ADO.NET** (.NET-Datenzugriffskomponenten)                          | *(LF11a)*  |
| **HTTP-Ports**       | **80/tcp** (HTTP), **443/tcp** (HTTPS) – Beispiel: in Firewall-Regeln erlaubt                                        | *(LF9)*    |

---

## ✅ Merksätze (aus den Unterlagen)

1. **HTTP/REST** = **Client-Server**, **GET/POST/PUT/DELETE**, **JSON** + **Statuscodes** *(LF11a)* .
2. **ODBC** kapselt den **DB-Zugriff** über **Treiber** und macht Anwendungen **DBMS-unabhängig** *(LF11a)* .
3. **HTTP/HTTPS** laufen im Netz typischerweise über **Port 80/443** (siehe Firewall-Regelbeispiel) *(LF9)* .

---

## 🧱 Beispiel: Statuscodes & Methoden kurz nachschlagen

* **GET**: Lesen/Abrufen *(LF11a)* 
* **POST/PUT**: Erstellen/Aktualisieren; **PUT** ist **idempotent** *(LF11a)* 
* **DELETE**: Löschen *(LF11a)* 
* **200/201/404/500/501**: Beispiele für **Erfolg**, **Client-/Serverfehler** *(LF11a)* 

---

