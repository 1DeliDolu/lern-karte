# 🌐 HTTP/HTTPS <span style="background:#e0f0ff;">LF9, LF11a, LF3</span>

**HTTP** ist das Anwendungsprotokoll, mit dem Clients (z. B. Browser) Anfragen an Webserver senden; darauf folgen Antworten mit Daten (z. B. JSON) und **HTTP-Statuscodes** zur Ergebnisanzeige *(LF11a)*. 
**HTTPS** ist HTTP mit **SSL/TLS-Verschlüsselung**: Die Webseitendaten werden verschlüsselt übertragen; erkennbar am **https** bzw. **Schloss-Symbol** in der Adresszeile *(LF9)*. 

Beim Aufruf einer Webseite erstellt der Client eine **HTTP-Anfrage** mit **Sender-IP**, **Empfänger-IP** und **Port** (z. B. 443) und versendet sie zum Zielserver *(LF9)*. 
Zuvor löst **DNS** den Namen (z. B. `www.westermann.de`) in eine IP-Adresse auf; anschließend baut der PC den **http-Request** zur ermittelten IP auf *(LF9)*. 

**Typische Ports:** **80 = HTTP** *(LF3)*, **443 = (H)TTPS** – in der Beispiel-Firewall sind 80 und 443 freigeschaltet *(LF9, LF3)*.  

---

## 🧭 Grundlagen & Unterschiede

* **HTTP (ohne TLS):** Client sendet **HTTP-Anforderung** an Webserver, Server liefert Daten (z. B. JSON); das Verhalten wird über **HTTP-Methoden** (GET/POST/PUT/DELETE) und **Statuscodes** gesteuert *(LF11a)*. 
* **HTTPS (HTTP über SSL/TLS):** Unternehmen richten **SSL/TLS-Zertifikate** über Zertifizierungsstellen ein (z. B. Let’s Encrypt); dadurch erfolgt **verschlüsselte Übertragung**, sichtbar am **https/Schloss** *(LF9)*. 
* **Port-Bezug:** In der Praxis sind **80 (HTTP)** und **443 (HTTPS)** für Webdienste relevant; das wird u. a. an freigegebenen Firewall-Regeln (80/443) demonstriert *(LF9, LF3)*.  
* **Netzpfad:** Namensauflösung per **DNS**, dann Erstellung des **HTTP-Requests** an die Ziel-IP *(LF9)*. 
* **Architektur-Ergänzung:** Ein **Reverse-Proxy** kann TLS an der Kommunikationsschnittstelle terminieren (**Zertifikats-Auslagerung**) und den Webserver entlasten *(LF9)*. 

---

## 🧪 HTTP-Methoden & Statuscodes (Auszug)

**Methoden (Wirkung):** **GET** (Lesen), **POST** (Erstellen/Aktualisieren), **PUT** (Erstellen/Aktualisieren; idempotent), **DELETE** (Löschen). Der Unterschied **POST vs. PUT**: Mehrmaliges PUT führt zum gleichen Ergebnis, wiederholtes POST kann Ressourcen mehrfach erzeugen *(LF11a)*. 

**Statuscodes (Beispiele):**
**1xx** (informativ; z. B. 101 **Protokollwechsel**), **2xx** (Erfolg; z. B. 200 **OK**, 201 **Erstellt**), **3xx** (Umleitung; z. B. 305 **Proxy erforderlich**), **4xx** (Clientfehler; z. B. 400 **Ungültige Anfrage**, 404 **Nicht gefunden**), **5xx** (Serverfehler; z. B. 500 **Interner Fehler**, 501 **Methode nicht unterstützt**) *(LF11a)*. 

---

## 🛡️ HTTPS einrichten & absichern (Praxisleitfaden)

1. **Zertifikat beschaffen & einrichten:** SSL/TLS-Zertifikate über den Web-Provider oder z. B. **Let’s Encrypt** beziehen und auf der Domain konfigurieren; Ergebnis: **https/Schloss** sichtbar *(LF9)*. 
2. **Reverse-Proxy nutzen (optional):** **TLS-Terminierung** und **Zertifikats-Auslagerung** am Proxy zur Entlastung des Webservers *(LF9)*. 
3. **Firewall/Proxy prüfen:** Webzugriffe gezielt erlauben, z. B. **80/443**; Firewalls können als **VPN-/HTTP-Proxy** vertraulichen Verkehr prüfen/filtern *(LF9)*. 
4. **DNS-Sicherheit ergänzen:** **DNS über TLS/HTTPS/QUIC** einsetzen, um Namensanfragen zu schützen *(LF9)*. 

---

## 💻 Beispielcode: HTTP-GET (REST-API)

**Python-Beispiel (GET-Anfrage mit `requests`)** – Abruf und Ausgabe von JSON-Antwort inkl. Status per REST-API *(LF11a)*: 

```python
import requests
import json

# --- Hier den eigenen Schlüssel einsetzen ---
API_key = "API_KEY"
base_url = "https://api.openweathermap.org/data/2.5/weather?"
cityname = input("Geben Sie einen Ort ein: ")
url = base_url + "appid=" + API_key + "&q=" + cityname

# Abfragen der Daten
weather_data = requests.get(url).json()

json_object = json.dumps(weather_data, indent=4)
print("Aktuelle Wetterdaten von " + cityname + ":")
print(json_object)
```

---

## 🔧 Beispiel: Firewall-Freigaben für Webdienste

Die **Uncomplicated Firewall (ufw)** zeigt freigegebene **TCP-Dienste** inkl. **80/443** (IPv4/IPv6) – typisch für HTTP/HTTPS-Bereitstellung *(LF9)*: 

```
Status: active
To        Action  From
22/tcp    ALLOW   Anywhere
5665/tcp  ALLOW   Anywhere
80/tcp    ALLOW   Anywhere
443/tcp   ALLOW   Anywhere
22/tcp (v6)   ALLOW Anywhere (v6)
5665/tcp (v6)  ALLOW Anywhere (v6)
80/tcp (v6)    ALLOW Anywhere (v6)
443/tcp (v6)   ALLOW Anywhere (v6)
```

---

## 📚 Begriffstabelle

| Begriff           | Definition                                                                                                  | Quelle |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ------ |
| **HTTP**          | Client sendet HTTP-Anforderung an Webserver; Daten & Statuscodes werden zurückgegeben                       | LF11a  |
| **HTTPS**         | HTTP mit **SSL/TLS**; Daten der Webseite werden **verschlüsselt** übertragen (https/Schloss)                | LF9    |
| **Port 80**       | **HTTP** (Web-Server, Browser)                                                                              | LF3    |
| **Port 443**      | Webzugriff; Beispiel-Firewall zeigt Freigabe (typisch für HTTPS)                                            | LF9    |
| **DNS**           | Namensauflösung; nach IP-Ermittlung erstellt der PC den **http-Request**                                    | LF9    |
| **Reverse-Proxy** | Verteilt Anfragen; **verschlüsselt** an der Schnittstelle; **Zertifikate ausgelagert**, Webserver entlastet | LF9    |
| **HTTP-Methoden** | GET/POST/PUT/DELETE mit definierten Wirkungen; PUT idempotent                                               | LF11a  |
| **Statuscodes**   | 1xx–5xx mit Beispielen (z. B. 200, 404, 500)                                                                | LF11a  |

---

## 🛠️ Prozessschritte (Überblick)

1. **Zertifikate einrichten & prüfen** (z. B. Let’s Encrypt) → verschlüsselte Übertragung aktiv *(LF9)*. 
2. **Reverse-Proxy platzieren** (TLS-Terminierung/Zertifikats-Auslagerung) *(LF9)*. 
3. **Firewall/Proxy-Regeln** für **80/443** konfigurieren, ggf. HTTP-Proxy nutzen *(LF9)*. 
4. **DNS-Sicherheit** (DoT/DoH/QUIC) ergänzen *(LF9)*. 

> **Hinweis:** Alle Aussagen, Beispiele und Codes stammen ausschließlich aus den bereitgestellten Lernfeld-Materialien *(LF9, LF11a, LF3)*.
