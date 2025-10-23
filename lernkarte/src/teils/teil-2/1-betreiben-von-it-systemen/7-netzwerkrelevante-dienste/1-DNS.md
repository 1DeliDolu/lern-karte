# 🧭 **DNS – Domain Name System** <span style="background:#e0f0ff;">LF9/LF3</span>

Das **Domain Name System (DNS)** zählt zu den **wichtigsten Diensten des Internets** und ermöglicht es, mit **Rechnernamen/URLs** zu arbeiten, die von einem **Nameserver (DNS-Server)** in **IP-Adressen** aufgelöst werden; DNS ist in **RFC 1034/1035** spezifiziert. *(LF9)* 
Fordert ein Client z. B. `www.westermann.de` an, sendet das Betriebssystem eine **DNS-Anfrage** (oft an den **Router** als nächstgelegenen DNS-Server); dieser liefert die **IP-Adresse** (im Beispiel **217.13.73.44**) zurück, worauf der Client den **HTTP-Request** erstellt. *(LF9)* 
**Port:** DNS ist über **Port 53** erreichbar. *(LF9)* 

---

## 🔎 **Grundprinzip & Ablauf der Namensauflösung**

1. **Eingabe eines Namens/URL** → Betriebssystem stellt **DNS-Query** an den konfigurierten **DNS-Server** (häufig Router). *(LF9)* 
2. **Antwort mit IP-Adresse** → Client nutzt diese Adresse für den **HTTP/HTTPS-Aufruf**. *(LF9)* 
3. In **SoHo-Routern** ist die **DNS-Funktion** oft **integriert**. *(LF9)* 

---

## 🔐 **DNS absichern**

Klassisches DNS läuft **im Klartext (unverschlüsselt)**. Zum Schutz sollen **DNS over TLS (DoT)**, **DNS over HTTPS (DoH)** oder **DNS over QUIC (DoQ)** eingesetzt werden. *(LF9)* 
**DNSSEC** wird als „**abhörsichere DNS-Variante**“ bei immer mehr Providern angeboten; die **Verfügbarkeit hängt von der Top-Level-Domain** ab. *(LF9)* 

---

## 🔁 **DynDNS (Dynamic DNS Updates)**

Bei regelmäßig wechselnden öffentlichen **IPv4-Adressen** (z. B. alle **24 Stunden**) aktualisiert ein interner Server seine **aktuelle IP** beim **DynDNS-Dienst**, damit Anfragen stets auf die **aktuelle Adresse** zeigen; **Dynamic DNS Updates** sind in **RFC 2136/3007** beschrieben. *(LF9)* 

---

## 🧩 **DNS-Rollen im Netzwerk (Router & lokale Server)**

Ein **lokaler DNS-Server** ist **üblicherweise der Router selbst** (Beispiel: `192.168.178.1`). *(LF9)* 
Bei **SoHo-Routern** lässt sich die **Adresse des DNS-Servers konfigurieren**, z. B. um einen **DNS-Filter** im Netzwerk zu integrieren. *(LF9)* 

---

## 🚦 **DNS-Filter (Pi-hole/AdGuard etc.)**

**DNS-Filter** agieren als **DNS-Server** im Netz, **blockieren Werbung/Tracker** über **Blacklists** und leiten DNS-Anfragen **verschlüsselt** weiter (**DoT/DoH/DNSCrypt/DoQ**). *(LF9)* 
Bekannte **Open-Source-DNS-Filter** sind **eBlocker**, **Pi-hole** und **AdGuard**; der Filter **muss dauerhaft laufen** (z. B. VM/separater Rechner). *(LF9)*

---

## 🧾 **Wichtige DNS-Resource-Records (Auswahl)**

Bei **Domains/Subdomains** stehen die **Records** **A**, **AAAA**, **MX**, **CNAME**, **TXT**, **SRV**, **NS** zur Konfiguration zur Verfügung. *(LF9)* 

---

## 🧪 **Beispielkommandos & Prüfideen**

```bash
# Namensauflösung testen (Beispiel aus dem Material)
nslookup www.westermann.de
```

*(LF9)* 

```bash
# Schneller Gesamttest: Erreichbarkeit + (indirekt) DNS
ping google.de
```

*(Erfolgreiches Ping deutet u. a. auf funktionierende **Namensauflösung** hin.) *(LF3)* 

```powershell
# Lokale Netzkonfiguration inkl. DNS-Server anzeigen (Windows)
ipconfig /all
```

*(Enthält u. a. Einträge „DNS-Server“ und Lease-Informationen.) *(LF3)* 

> **Hinweis aus dem Kompetenzcheck:**
> „Mit **nslookup** kann man die **Namensauflösung auf einem bestimmten DNS-Server** testen; **dig** ist bei Windows ein ähnlicher Befehl; **nslookup** ist auf den meisten Netzwerkrechnern zu finden.“ *(LF3)* 

---

## 🧭 **Praxisorientierte Merkpunkte**

* **DNS wandelt Namen ↔ IP-Adressen**; spezifiziert in **RFC 1034/1035**. *(LF9)* 
* **Ablauf im Alltag:** Client fragt **Router-DNS**, erhält **IP**, startet **HTTP-Request**. *(LF9)* 
* **Sicherheit:** DNS-Anfragen **verschlüsseln** (DoT/DoH/DoQ); **DNSSEC** je nach **TLD** verfügbar. *(LF9)*
* **DynDNS:** Für wechselnde Anschlüsse **IP regelmäßig aktualisieren** (**RFC 2136/3007**). *(LF9)* 
* **Port:** **53** für DNS-Dienste. *(LF9)* 
* **SoHo-Router:** Häufig **DNS-Server integriert**; **DNS-Adresse konfigurierbar** (z. B. für **DNS-Filter**). *(LF9)*

---

## 📚 **Begriffstabelle**

| Begriff                | Definition                                                                                            | Quelle   |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | -------- |
| **DNS**                | Namensauflösung von **Rechnernamen/URLs** zu **IP-Adressen**; Kern-Internetdienst; **RFC 1034/1035**. | *(LF9)*  |
| **DNS-Ablauf**         | Client → **DNS-Server (oft Router)** → **IP-Antwort** → **HTTP-Request**.                             | *(LF9)*  |
| **Port 53**            | Standard-Port, über den **DNS** erreichbar ist.                                                       | *(LF9)*  |
| **DNS absichern**      | **DoT/DoH/DoQ** zum Schutz vor Mitlesen/Manipulation.                                                 | *(LF9)*  |
| **DNSSEC**             | **Abhörsichere** Variante; **Verfügbarkeit TLD-abhängig**.                                            | *(LF9)*  |
| **DynDNS**             | **Periodische IP-Aktualisierung** beim DynDNS-Server; **RFC 2136/3007**.                              | *(LF9)*  |
| **DNS-Filter**         | **Werbe/Tracker-Blockade**, **Blacklists**, **verschlüsselte Weiterleitung** (DoT/DoH/DNSCrypt/DoQ).  | *(LF9)*  |
| **Records (A/AAAA/…)** | **A, AAAA, MX, CNAME, TXT, SRV, NS** konfigurierbar.                                                  | *(LF9)*  |
| **Router als DNS**     | **Lokaler DNS-Server üblicherweise der Router**; **DNS-Adresse konfigurierbar**.                      | *(LF9)*  |
| **Test/Diagnose**      | **nslookup**, **ping** (Gesamttest inkl. DNS), **ipconfig /all** (DNS-Server sichtbar).               | *(LF3)*  |

---

## 🧰 **Mini-Übungsblock (Kompetenzcheck-Bezug)**

1. **Vorteile verschlüsselter DNS-Anfragen** (z. B. DoT) beschreiben. *(LF9)* 
2. **Unterschiede DNS vs. DHCP** kurz erläutern. *(LF9)* 
3. **Namensauflösung prüfen:** `nslookup www.westermann.de` ausführen und Ergebnis interpretieren. *(LF9)* 

---

