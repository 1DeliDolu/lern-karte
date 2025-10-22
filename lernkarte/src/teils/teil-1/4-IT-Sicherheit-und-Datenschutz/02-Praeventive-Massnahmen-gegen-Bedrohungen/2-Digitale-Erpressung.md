# 🧨 Digitale Erpressung (Ransomware) – präventiv planen & umsetzen <span style="background:#e0f0ff;">LF4, LF9</span>

**Ransomware** gehört zur **Malware** und wird in den **Angriffsarten** ausdrücklich genannt („Schadsoftware wie Trojaner, Backdoors, Ransomware“). Typische **Angriffswege** reichen von **E-Mail/Web** über **Netzwerk** bis hin zu **Wechseldatenträgern** und **Social Engineering**. (LF4) 
Aktuelle Lagebilder betonen die hohe Relevanz: Ein erheblicher Anteil gemeldeter Angriffe sind **Malware-Infektionen**; **E-Mail-Anhänge/Links** fungieren in einem Großteil der Fälle als **Angriffsvektor** – technische Maßnahmen plus **Sensibilisierung** waren entscheidend. (LF4) 

---

## 🧭 Rahmen: Sicherheitskonzept nach IT-Grundschutz

Ein Sicherheitskonzept definiert **technisch-organisatorische Maßnahmen (TOM)**, u. a. **Identitäts-/Berechtigungsmanagement**, **Kryptografie**, **Datensicherung**, **Schadsoftware-Erkennung/-Abwehr** sowie die Absicherung von **Netzschnittstellen/Segmenten**. (LF4) 
Für Netzwerke konkretisiert LF9 relevante **BSI-Bausteine**: **Patch-/Änderungsmanagement (OPS.1.1.3)**, **Schutz vor Schadprogrammen (OPS.1.1.4)**, **Protokollierung (OPS.1.1.5)**, **Datensicherungskonzept (CON.3)**, **Wiederherstellbarkeit**, **Benutzer-/Zugriffs-/Übertragungs-/Transportkontrolle** u. a. (LF9) 

---

## 🔒 Präventive Maßnahmen – technisch

**Perimeter & Netzwerkdesign**

* **Firewalls** sind Grundschutz; **Next-Generation-Firewalls (NGFW)** können **Malware identifizieren und blockieren**, bevor sie ins Netzwerk gelangt. (LF4) 
* Bei der **Firewall-Planung**: Typ (Paket-/Inhaltsfilter, **IDS/IPS**), Performance, Virtualisierung, Hersteller. (LF9) 
* **Netzarchitektur/-design, Netzmanagement, Router/Switches, VPN, WLAN** sind als **BSI-Bausteine** zu berücksichtigen (NET.*). (LF9) 

**Endpunkte & Server härten**

* **Server-Bereitstellung** umfasst die Schritte **Betriebssystem installieren → Serveranwendung installieren → konfigurieren → **härten****. (LF9) 
* **Schutz vor Schadprogrammen** und **Patch-/Änderungsmanagement** sind als Bausteine explizit gefordert. (LF9) 

**E-Mail-/Web-Gefahren mindern**

* Aufgrund des hohen **E-Mail-Risikos** sind Filter und technische Schutzmaßnahmen zentral; flankierend **Sensibilisierung**. (LF4) 

---

## 💾 Datensicherung & Wiederherstellung (Kern gegen Ransomware)

**3-2-1-Regel** ausdrücklich vorgegeben:
**Drei** Kopien, **zwei** verschiedene Medien, **eine** Kopie **extern**. (LF9) 
Ergänzend ist **Redundanz** zu planen (funktional, räumlich, organisatorisch diversitär). (LF9) 

**Speicher-/Snapshot-Technik**

* **NAS/SAN/DAS** einordnen; bei NAS sind u. a. **RAID**, **OpenZFS-Snapshots**, **Copy-on-Write-Klone**, **Remote-Replikation** relevante Funktionen. (LF9)  

**BSI-TOM – Wiederherstellbarkeit**

* **Wiederherstellbarkeit, Verfügbarkeitskontrolle, Datenintegrität** sind Bestandteil des Sicherheitskonzepts bzw. der TOM-Liste. (LF9) 

---

## 🧑‍💼 Präventive Maßnahmen – organisatorisch

**Sensibilisierung & Schulung (ORP.3)**

* **Social Engineering/Identitätsdiebstahl** ist ein relevanter Treiber für **Malware-Infektionen**; **Schulung/Sensibilisierung** helfen, Schwachstellen zu schließen. (LF4) 
  **Regelwerke & Rollen**
* **Benutzer-/Zugriffs-/Trennungskontrolle**, **Protokollierung** und **Rollen-/Rechtekonzepte** sind als Bausteine und TOM genannt. (LF9) 

---

## ⚙️ Praxisnahe Umsetzungen & Vorlagen

**Firewall-Anforderung im Lastenheft (Perimeter-Schutz)**

* Beispielvorgabe: „**Ausgehende Verbindungen erlauben, eingehende verhindern**“ (LTE-Router mit Firewall) – **Lastenheft Kleinstunternehmen**. (LF9) 

**Server-Härtung im Bereitstellungsprozess**

* Der **Härtungsschritt** ist fester Bestandteil bei der **Serverinstallation**. (LF9) 

**Backup-Technik mit Snapshots/Replikation**

* **OpenZFS-Snapshots**, **Clones**, **Remote Replication** stehen als Funktionen bereit – geeignet, um **Ransomware-verschlüsselte Stände durch Rücksicherung** zu ersetzen. (LF9) 

---

## ✅ Kurz-Checkliste Ransomware-Prävention (aus LF4/LF9 abgeleitet)

1. **Perimeter & Netzwerk**: **NGFW** einsetzen; **IDS/IPS** berücksichtigen; Firewall passend dimensionieren und konfigurieren. (LF4, LF9)  
2. **Systeme härten & pflegen**: **Patch-/Änderungsmanagement**, **Schutz vor Schadprogrammen**, **Protokollierung** aktiv. (LF9) 
3. **Backups**: **3-2-1-Regel** strikt; **Snapshots/Replikation** vorsehen; **Redundanz** planen. (LF9)  
4. **E-Mail-Risiken**: Technische Filter + **Sensibilisierung** gegen schädliche Anhänge/Links. (LF4) 

---

## 📚 Beispiele / Illustrationen

* **TOM-Liste (Auszug)**: **Benutzer-/Zugriffskontrollen, Übertragungs-/Transportkontrolle, Wiederherstellbarkeit, Verfügbarkeitskontrolle, Datenintegrität** – als Bausteine im **IT-Grundschutz** verankert. (LF9) 
* **Netzwerk-Sicherheitskomponenten**: **Router/Switches/Firewall/VPN/WLAN** als planungsrelevante Elemente; **Firewall-Typen** (Paket-/Inhaltsfilter, IDS/IPS) beachten. (LF9)  

---

## 🧾 Begriffstabelle

| **Begriff**                    | **Definition / Kernaussage**                                                   | **Quelle** |
| ------------------------------ | ------------------------------------------------------------------------------ | ---------- |
| **Ransomware**                 | Explizit als **Malware-Art** aufgeführt („Schadsoftware wie … Ransomware“).    | LF4        |
| **NGFW**                       | Firewalls, die **Malware identifizieren und blockieren**, bevor sie eindringt. | LF4        |
| **3-2-1-Backup**               | Drei Kopien, zwei Medien, eine Kopie extern – feste Sicherungsregel.           | LF9        |
| **Snapshots/Replikation**      | **OpenZFS** unterstützt **Snapshots**, **Clones**, **Remote Replication**.     | LF9        |
| **Patch-/Änderungsmanagement** | BSI-Baustein **OPS.1.1.3** – regelmäßige Updates/Änderungen gesteuert.         | LF9        |
| **Schutz vor Schadprogrammen** | BSI-Baustein **OPS.1.1.4** – technische Maßnahmen gegen Malware.               | LF9        |
| **Protokollierung**            | BSI-Baustein **OPS.1.1.5** – Ereignisse/Logdaten für Detektion & Nachweis.     | LF9        |
| **Sensibilisierung (ORP.3)**   | Schulung gegen **Social Engineering**/Fehlverhalten.                           | LF4        |

---

## 🛠️ Schrittfolge zur Umsetzung (kompakt)

1. **Konzept** mit TOM & BSI-Bausteinen festlegen (**CON.3**, **OPS.1.1.3/1.1.4/1.1.5**, **NET.***). (LF9) 
2. **Perimeter umsetzen**: **NGFW** + definierte Policies (vgl. Lastenheft-Beispiel). (LF4, LF9)  
3. **Server härten** im Installationsprozess. (LF9) 
4. **Backups nach 3-2-1** + **Snapshots/Replikation** technisch einrichten. (LF9)  
5. **E-Mail-/Web-Filter** aktivieren; **Sensibilisierung** kontinuierlich. (LF4) 

---

> **Hinweis zu Beispielcode:** In den bereitgestellten Lernfeld-Unterlagen zu **LF4/LF9** sind für dieses Thema **konzeptionelle Vorgaben, Bausteine, Checklisten und technische Funktionsbeschreibungen** enthalten (z. B. **3-2-1-Regel**, **NGFW/IDS-IPS**, **Server-Härtung**, **Snapshots/Replikation**), jedoch **kein ausführbarer Beispielcode** zur Ransomware-Abwehr. Daher sind oben **praxisnahe Illustrationen/Beispiele aus den PDFs** vollständig und wörtlich nach Quelle integriert. (LF4, LF9)    

---
