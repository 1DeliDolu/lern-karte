# 🧰 **Proxy – Stellvertreterdienst im Netzwerk** <span style="background:#e0f0ff;">LF3/LF9</span>

Ein **Proxy** ist ein **„Stellvertreter“**, der **stellvertretend für Arbeitsplatzrechner** auf das **Internet** zugreift. 
Typisch ist ein **Zwischenspeicher (Cache)**: Bei erneutem Abruf liefert der Proxy Inhalte **direkt aus dem Cache**, was die **Antwortzeit verkürzt** und den **Internetdatenverkehr minimiert**. 
In **kleinen Netzen** ist die Proxy-Funktion **oft im Internetrouter integriert**; in **größeren, professionellen Netzen** werden **separate Proxys** mit **aufwendigen Filterlisten** eingesetzt. 
Im Pflichtenheft gehört **„Proxy“** zu den **netzwerkrelevanten Diensten** (neben z. B. DNS/DHCP). 

---

## 🧭 **Proxy-Varianten & Einsatzkontexte**

### 🔁 Forward/Cache-Proxy (klassischer Proxy)

* **Stellvertreter** für Clients mit **Cache** zur **Entlastung der Internetanbindung**. 
* In **SoHo-Routern** vorhanden; **Kindersicherung** mit **Proxy-Sperrlisten** (z. B. Websites sperren, zeitliche Freigaben). 

### 🔄 **Reverse-Proxy**

Ein **Reverse-Proxy** nimmt **Anfragen aus dem Internet** entgegen und **verteilt** sie an **mehrere interne Server**; nach außen wirkt es wie **ein** Server. 
**Beispiel aus dem Material:** `www.meine-domain.de/anwendung1` und `/anwendung2` werden **intern von unterschiedlichen Servern** bedient; der **Reverse-Proxy** leitet die **eingehenden Nachrichten** entsprechend weiter. 

### 🛡️ Proxy-Funktionen in Firewalls

Firewalls können als **VPN-/HTTP-Proxy** agieren und so **auch vertraulichen Datenverkehr scannen und filtern**. 

---

## ⚙️ **Ablauf (vereinfacht, aus dem Material abgeleitet)**

1. **Client→Proxy:** Der Client fordert eine Ressource an (**HTTP/HTTPS** via Proxy). → **Proxy** prüft, ob ein **Cache-Treffer** vorliegt. 
2. **Cache-Treffer:** Inhalt wird **sofort** aus dem **Zwischenspeicher** geliefert (**schnell, weniger Traffic**). 
3. **Kein Treffer:** Proxy **holt** die Ressource **aus dem Internet**, **speichert** sie im **Cache** und **liefert** sie an den Client aus. 
4. **Policy/Filter:** In SoHo-Routern können **Sperrlisten** konfiguriert werden (z. B. **Kindersicherung**). 
5. **Reverse-Proxy-Fall:** **Externe Anfragen** kommen **zuerst** beim **Reverse-Proxy** an, der sie an den **passenden internen Server** verteilt. 

---

## 🧪 **Praxisbeispiele aus den PDFs**

* **SoHo-Router:** **Proxy-Sperrliste** verwalten (Kindersicherung), **zeitliche Freigaben/Sperren** fürs Internet. 
* **Rechenzentrum/DMZ-Kontext:** **Reverse-Proxy** bündelt **öffentliche Zugriffe** und verteilt auf **interne Dienste/Server** – **ein Server nach außen sichtbar**, **mehrere Systeme intern**. 
* **Sicherheitsgateway:** **VPN-/HTTP-Proxy** in der **Firewall** zum **Scannen/Filtern** auch **verschlüsselter Verbindungen**. 

---

## 📚 **Begriffstabelle**

| Begriff                        | Definition                                                                                                                    | Quelle |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------ |
| **Proxy (allg.)**              | **Stellvertreter** für Clients; greift **stellvertretend** aufs Internet zu, oft mit **Cache** zur **Verkehrsreduktion**.     |        |
| **Cache**                      | **Zwischenspeicher** des Proxys; liefert Inhalte bei **erneutem Abruf direkt** aus und **minimiert** den **Internettraffic**. |        |
| **Reverse-Proxy**              | Nimmt **Internet-Anfragen** an und **verteilt** sie an **interne Server**; nach außen **wirkt** es wie **ein** Server.        |        |
| **Proxy-Sperrliste**           | **Kindersicherung** im **SoHo-Router**: **Websites sperren**, Internet **zeitlich** freigeben/sperren.                        |        |
| **VPN-/HTTP-Proxy (Firewall)** | **Scannen/Filtern** auch **vertraulicher/verschlüsselter** Verbindungen durch **Proxy-Funktionen** in Firewalls.              |        |
| **Netzwerkrelevanter Dienst**  | **Proxy** ist explizit als **netzwerkrelevanter Dienst** gelistet (neben **DNS**, **DHCP** …).                                |        |

---

## 🎯 **Merksätze**

* **Proxy = Stellvertreter + Cache** → **schnellere Auslieferung** + **weniger Internetverkehr**. 
* **Reverse-Proxy** = **ein Eingang** nach außen, **mehrere Ziele** nach innen. 
* **Firewall mit Proxy-Funktion** kann **(auch verschlüsselten) Verkehr** **prüfen**. 

---
