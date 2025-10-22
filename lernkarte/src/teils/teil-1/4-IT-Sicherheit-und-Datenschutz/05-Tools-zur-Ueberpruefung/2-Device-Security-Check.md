# 🛠️ Device Security Check (Geräte-Sicherheitscheck) <span style="background:#e0f0ff;">LF9, LF4</span>

Ein **Device Security Check** prüft Endgeräte (Clients, Laptops, Smartphones, Server) systematisch auf **Absicherung**, **Fehlkonfigurationen**, **Auffälligkeiten** und die **Wirksamkeit** der umgesetzten Maßnahmen. Im **IT-Grundschutz** ist die Überprüfung in der Schicht **DER** (Detektion/Ebene der Reaktion) verankert; die DSGVO (Art. 32) fordert ein **Verfahren zur regelmäßigen Überprüfung, Bewertung und Evaluierung der Wirksamkeit** der Maßnahmen (**TOM**). (LF4) 

---

## 🎯 Ziele & Rahmenbedingungen

* **Schutzziele** nach DSGVO: **Vertraulichkeit, Integrität, Verfügbarkeit** dauerhaft sicherstellen; inkl. Wiederherstellbarkeit und **regelmäßiger Wirksamkeitsprüfung** der TOM. (LF4) 
* **IT-Grundschutz-Bezug**: Bausteine für Netze, Systeme und Organisation (u. a. **ORP.4 Identitäts- und Berechtigungsmanagement**, **OPS.1.1.3 Patch- und Änderungsmanagement**, **OPS.1.1.5 Protokollierung**, **NET.3.2 Firewall**, **NET.3.3 VPN**) bilden die fachliche Grundlage für Checks. (LF9) 
* **Wirksamkeit prüfen** (TOM): **Audit, Prüfung, Evaluierung, Schwachstellenidentifikation, Zertifizierung**. (LF4) 

---

## 🔎 Prüffelder (Checkpunkte am Endgerät)

**1) Identitäten & Anmeldung (IAM)** – **MFA/ZFA** und **Single Sign-on (SSO)** zur schnellen und sicheren Identitätsprüfung; Zugriff über **Access-Management** (IAM). **Zero-Trust** wird als ganzheitliche Strategie genannt, die bei der **Authentifizierung** ansetzt. (LF9) 

**2) Endpoint-Protection** – Installation einer **leistungsstarken Antiviren-/Endpoint-Security-Suite** zur Abwehr von Angriffen. (LF9) 

**3) VPN-Nutzung** – **Verschlüsselter Tunnel** (z. B. **SSL-VPN**, **Site-to-Site**, **Client-to-Server**); **Hinweis:** VPN **schützt nicht** davor, dass **Daten am Endgerät** geschädigt oder ausgespäht werden. (LF9) 

**4) Schulung & Awareness** – **Sensibilisierung** aller Mitarbeitenden gegen **Social Engineering** als Bestandteil der Endgeräte-Sicherheit. (LF9) 

**5) DNS-Schutz** – **DNS-Filter** (z. B. Pi-hole/AdGuard) schalten sich logisch vor den DNS-Server, blockieren über **Blacklists** Tracking/Werbung und leiten Anfragen **verschlüsselt** weiter (**DoT/DoH/DNSCrypt/DoQ**). (LF9) 

**6) Netzwerk-Intrusionserkennung** – **Threat-Detection-Engines** wie **Suricata** werden in Firewalls eingesetzt (z. B. OPNsense®, IPFire, SecurityOnion) und unterstützen die **Erkennung/Abwehr**. (LF9) 

**7) Betrieb & Nachvollziehbarkeit** – **Protokollierung**, **Patch- und Änderungsmanagement** als kontinuierliche Grundlagen der Gerätesicherheit. (LF9, LF4) turn4file2

---

## 🧪 Praktische Prüfungen am Gerät (Beispielbefehle)

> Die folgenden Werkzeuge werden im Material für **Sichtprüfungen/Troubleshooting** genannt. (LF9) 

```bash
# Überblick über Netzwerkadapter (nmcli)
nmcli device

# Alle Verbindungen anzeigen (nmcli)
nmcli connection

# Aktive TCP-Verbindungen listen (netstat) – Ausgabe an grep filtern
netstat -an | grep tcp

# TIME_WAIT-Verbindungen im Sekundentakt zählen (möglicher DDoS-Indikator bei sehr hoher Zahl)
watch -n 1 "netstat -nt | grep TIME_WAIT | wc -l"

# Routing-Tabelle anzeigen
netstat -r

# DNS-Server und Zielauflösung prüfen (nslookup)
nslookup www.westermann.de
```

(LF9) turn4file15

**Interpretation im Material:** „Eine sehr große Anzahl an **TIME_WAIT**-Verbindungen kann ein **Indiz für eine DDoS-Attacke** sein.“ (LF9) 

**Weitere Werkzeuge im Kontext:** **ping**, **tcpdump**, **traceroute**. (LF9) 

---

## 📊 Indikatoren & Nachweise (Dashboard-Sicht)

Das Material zeigt die **Optik eines Control-Centers** (z. B. **Sophos Central**) mit **Kennzahlen** wie „**scanned yesterday**“, „**risky apps seen**“, **Intrusion-Hinweisen** sowie **Warnungen** (z. B. Firewall-Management). Solche Übersichten dienen als **laufender Wirksamkeitsnachweis** der Endgeräte-Sicherheit. (LF9) 

---

## ⚙️ Prozessschritte (PDCA-Bezug)

1. **Plan** – **IT-Grundschutz-Bausteine**/Policies festlegen (z. B. ORP.4/IAM, NET.3.x/Firewall/VPN). (LF9) 
2. **Do** – **MFA/SSO**, **Endpoint-Protection**, **VPN**, **DNS-Filter** implementieren; Mitarbeitende **schulen**. (LF9) 
3. **Check** – **Technische Checks** (nmcli/netstat/nslookup), **Dashboard-Kennzahlen**, **Protokolle** auswerten; **Wirksamkeit der TOM** prüfen. (LF9, LF4) turn4file1turn4file14
4. **Act** – **Patch-/Änderungsmanagement** und Maßnahmen auf Basis der Ergebnisse anpassen (kontinuierlich). (LF9, LF4) turn4file3

---

## 🧩 Praktische Beispiele / Mini-Szenarien

* **DNS-Filter-Betrieb:** Zentrale Blockade von **Tracking/Werbung**, **verschlüsselte Weiterleitung** der DNS-Anfragen (DoT/DoH/DoQ) – Schutz der **Privatsphäre** durch Reduktion auswertbarer Surfprofile. (LF9) 
* **TIME_WAIT-Anomalie:** Massenhaft **TIME_WAIT** in `netstat` → Hinweis auf mögliche **DDoS-Situation**; Monitoring per `watch` empfohlen. (LF9) 
* **Awareness-Verankerung:** Mitarbeitende werden **regelmäßig geschult**; Zugang zu Sicherheitszonen nach erfolgreich absolvierten **Grundschutz-Schulungen**. (LF4) 

---

## | Begriff | Definition | Quelle |

| Begriff                | Definition                                                                                                                | Quelle              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| **Endpoint-Security**  | Absicherung von Endgeräten durch **Endpoint-Protection-Suite**, **sichere Authentifizierung**, **VPN** und **Awareness**. | (LF9)               |
| **MFA/SSO**            | **Mehrfaktor-Authentifizierung** und **Single Sign-on** zur Stärkung der Anmeldung, integriert in **IAM**.                | (LF9)               |
| **DNS-Filter**         | Vorschalt-Filter mit **Blacklists**; **verschlüsselte DNS-Weiterleitung** (DoT/DoH/DNSCrypt/DoQ).                         | (LF9)               |
| **Suricata (IDS/IPS)** | **Threat Detection Engine** in Firewalls (z. B. OPNsense®/IPFire) zur Erkennung/Abwehr.                                   | (LF9)               |
| **TOM-Wirksamkeit**    | **Audit/Prüfung/Evaluierung/Schwachstellenidentifikation/Zertifizierung** als Wirksamkeitsnachweis.                       | (LF4)               |
| **PDCA**               | **Plan-Do-Check-Act** als kontinuierlicher Verbesserungsprozess im ISMS.                                                  | (LF4)               |
| **Netz-Werkzeuge**     | **nmcli**, **netstat**, **nslookup**, **ping**, **tcpdump**, **traceroute** für technische Checks.                        | (LF9) turn4file15 |

---

## 🧷 Kompakte Checkliste (aus den Quellen verdichtet)

* **MFA/SSO aktiv?** Rechte via **IAM**/Rollen geprüft (**Rezertifizierung**). (LF9) 
* **EPP aktiv/aktuell?** Signaturen/Realtime-Schutz vorhanden. (LF9) 
* **VPN korrekt konfiguriert?** Hinweisgrenze: schützt **nicht** vor lokaler Kompromittierung. (LF9) 
* **DNS-Filter eingeschaltet?** Block-Quote/DoT/DoH/DoQ geprüft. (LF9) 
* **Netzwerk sauber?** `nmcli`-Adapter/Verbindungen, `netstat`-Sessions, **TIME_WAIT**-Menge, Routing. (LF9) turn4file15
* **Protokollierung aktiv?** Ereignisse zentral erfasst/ausgewertet. (LF9) 
* **Patch/Changes aktuell?** **OPS.1.1.3** umgesetzt. (LF9) 
* **Wirksamkeit nachweisen** (Art. 32, DER-Schicht): Prüfberichte/Dashboards. (LF4) 

---

### ✅ Beispiel: Kurz-Script (Linux) für einen Schnellcheck (aus Befehlen im Material zusammengestellt)

```bash
#!/usr/bin/env bash
echo "=== Adapterübersicht ==="
nmcli device

echo "=== Verbindungen ==="
nmcli connection

echo "=== Aktive TCP-Verbindungen (Top 10 Ziele) ==="
netstat -nt | awk '{print $5}' | cut -d: -f1 | sort | uniq -c | sort -nr | head

echo "=== TIME_WAIT-Zähler (einmalig) ==="
netstat -nt | grep TIME_WAIT | wc -l

echo "=== Routing-Tabelle ==="
netstat -r

echo "=== DNS-Server & Beispielauflösung ==="
nslookup www.westermann.de
```

(Basiert vollständig auf den im Material gezeigten **nmcli/netstat/nslookup**-Kommandos.) (LF9) turn4file15

---

