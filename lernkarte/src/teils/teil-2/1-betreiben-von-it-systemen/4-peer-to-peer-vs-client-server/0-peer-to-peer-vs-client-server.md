# 🔄 Peer-to-Peer vs. Client-Server: Vergleich, Dateifreigaben (SMB/CIFS) & Datenabruf (HTTP, ODBC)

In einem **Peer-to-Peer-Netz** können Rechner gleichzeitig **Client** (nutzt Dienste) und **Server** (bietet Dienste an) sein. **Client-Server-Netze** setzen demgegenüber auf **dedizierte zentrale Server**, die von allen Clients genutzt werden. **In professionellen Netzen** werden **immer Client-Server-Netze** eingesetzt; **Peer-to-Peer** wird ergänzend für **Freigaben lokaler Ressourcen** (z. B. Dateien, Drucker) genutzt. *(LF3)* 

Seit **Ende der 1990er-Jahre** werden **webbasierte Anwendungen** (Mehrschicht-Architekturen) entwickelt, die den **Browserzugriff** erlauben und auch **Administration per Browser** ermöglichen. *(LF9)* 

## 📁 Dateifreigaben: SMB/CIFS (Beispiel: Windows-Freigaben)

Ein **File-Server** stellt **Dateidienste** bereit, z. B. via **FTP** oder **SMB**. *(LF3)* 
**SMB/CIFS** wird für **Windows-Freigaben** („Samba“) genutzt, **Port 445/TCP**, u. a. **zum Mounten/Verbinden von Windows-Laufwerken im Netzwerk**. *(LF9)* 
Bei der **Netzwerkkonzeption** gehören **Speichernetzwerk-Protokolle** wie **SMB/CIFS** neben **NFS, iSCSI, Fibre Channel, FCoE, HTTP, NVMe-oF** zu den zu berücksichtigenden Spezifikationen. *(LF9)* 

## 🌐 Datenabruf über HTTP (Client-Server, REST)

**HTTP/HTTPS** werden über die **Ports 80/443** für **statische und dynamische Webseiten** bereitgestellt. *(LF9)* 
**REST-Architekturen** entsprechen einer **Client-Server-Architektur**: **Clients** senden **HTTP-Requests** (z. B. **GET, POST, PUT, DELETE**), **Server** liefern **JSON-Daten** und **Statuscodes** zurück. *(LF11a)* 

**Wichtige HTTP-Methoden & Statuscodes (Auszug)** *(LF11a)* 

* **GET**: Lesen/Abrufen von Daten. *(LF11a)* 
* **POST/PUT**: Erstellen/Aktualisieren von Ressourcen; **PUT** ist idempotent, **POST** nicht. *(LF11a)* 
* **DELETE**: Löschen einer Ressource. *(LF11a)* 
* **200** (OK), **201** (Created), **404** (Not Found), **500** (Server Error) u. a. *(LF11a)* 

## 🧩 Datenabruf über ODBC (Open Database Connectivity)

**ODBC** ist eine **standardisierte Datenbank-API** für den Zugriff auf **DBMS**. Die **Anwendung** nutzt **ODBC-Funktionen**; ein **ODBC-Treiber** vermittelt zwischen Anwendung und DBMS, wodurch **Datenbank-Unabhängigkeit** erreicht wird. *(LF11a)* 

## ⚖️ Vergleich & Einsatzbewertung

* **Architekturentscheidung**: In **professionellen Umgebungen** ist **Client-Server** der Standard; **Peer-to-Peer** wird **zusätzlich** für **lokale Freigaben** (z. B. Drucker/Dateien) genutzt. *(LF3)* 
* **Dateifreigaben**: Für **strukturierte Dateidienste** auf **Servern** eignet sich **SMB/CIFS** (Port **445/TCP**). *(LF9, LF3)*
* **Web/REST-Zugriff**: Für **verteilte Anwendungen** mit **Browser-Zugriff** (inkl. Administration) sind **HTTP/HTTPS** und **REST** typisch. *(LF9, LF11a)*
* **Datenbankzugriff**: Für **anwendungsseitigen** **DB-Zugriff** über **einheitliche Schnittstelle** bietet **ODBC** **Treiber-abstrahierten** Zugriff. *(LF11a)* 
* **Pflichtenheft-Kontext**: Bei der **Netzwerkbereitstellung** sind u. a. **Einsatz Peer-2-Peer vs. Client-Server**, **Netzwerk-/Speicher-Protokolle** (inkl. **SMB/CIFS**, **HTTP**) explizit zu planen. *(LF9)* 

## 🧪 Beispielcode & praktische Illustrationen

### 🐍 HTTP-GET mit Python-`requests` (REST-Client) *(LF11a)* 

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

**Hinweis:** Das Beispiel demonstriert den **Datenabruf per HTTP-GET** aus einer REST-API und die **JSON-Ausgabe** in der Konsole. *(LF11a)* 

### 🔌 Ports für typische Dienste (Auszug) *(LF9)* 

* **80/443** → **HTTP/HTTPS** (Webseiten)
* **445/TCP** → **CIFS/SMB** (Windows-Freigaben/Samba, Laufwerksverbindungen)

Diese Ports adressieren die zuständigen Anwendungen auf dem Server; so können **parallele Server-Dienste** (z. B. Web, Mail) und **gleichzeitige Client-Anwendungen** betrieben werden. *(LF9)* 

## 📚 Begriffe kompakt

| Begriff                | Definition                                                                                                  | Quelle         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- | -------------- |
| **Peer-to-Peer-Netz**  | Rechner können **gleichzeitig Client und Server** sein; **lokale Freigaben** (z. B. Drucker, Dateien).      | *(LF3)*        |
| **Client-Server-Netz** | **Zentrale Server** stellen Dienste bereit; **Standard** in professionellen Netzen.                         | *(LF3)*        |
| **SMB/CIFS**           | **Dateifreigaben**/Windows-Shares; **Port 445/TCP**; für **Mount/Verbindung** von Netzlaufwerken.           | *(LF9)*        |
| **HTTP/HTTPS**         | **Web-Transport** für **statische/dynamische Inhalte** (Ports **80/443**); Basis für **REST**.              | *(LF9, LF11a)* |
| **ODBC**               | **Standard-API** für **DB-Zugriff**; **ODBC-Treiber** vermittelt zwischen App und DBMS (**DB-unabhängig**). | *(LF11a)*      |

## 🧭 Einsatzempfehlungen (aus den Unterlagen ableitbar)

1. **Unternehmensumgebungen:** **Client-Server** für zentrale Dienste (Web, Datei, DB); **Peer-to-Peer** nur **ergänzend** für einfache lokale Freigaben. *(LF3)* 
2. **Dateifreigaben/Netzlaufwerke:** **SMB/CIFS** über **Port 445/TCP** auf **File-/NAS-Servern**. *(LF3, LF9)*
3. **Web/REST-Szenarien:** **HTTP/HTTPS** (Ports 80/443) und **REST-API** (GET/POST/PUT/DELETE, Statuscodes). *(LF11a, LF9)*
4. **Datenbanken aus Anwendungen:** **ODBC** wählen, wenn **DB-Unabhängigkeit** und **Treiber-Vermittlung** gefordert sind. *(LF11a)* 

> **Zusammenfassung:**
> **Client-Server** ist der **Regelfall** in Unternehmen; **P2P** bleibt **ergänzend**. **SMB/CIFS** adressiert **Dateifreigaben**, **HTTP/HTTPS/REST** den **Web-Datenabruf**, **ODBC** den **DB-Zugriff** über eine **einheitliche API**. *(LF3, LF9, LF11a)*

