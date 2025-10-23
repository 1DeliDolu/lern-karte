# 📁 Dateifreigaben mit SMB/CIFS (Windows-Freigaben)

**Dateifreigaben** werden in der Regel zentral über einen **File-Server** bereitgestellt; dieser stellt **Dateidienste** im Netzwerk zur Verfügung (z. B. **FTP**, **SMB**) *(LF3)* .
Für **Windows-Freigaben** wird das Protokoll **SMB/CIFS** genutzt. Es arbeitet über **Port 445/TCP** und dient explizit zum **Mounten/Verbinden von Windows-Laufwerken** im Netzwerk *(LF9)* .
Bei der **Konzeption der Netzwerkbereitstellung** ist die Auswahl der **Speichernetzwerkprotokolle** – u. a. **SMB/CIFS** (neben iSCSI, Fibre Channel, FCoE, NFS, HTTP, NVMe-oF) – ausdrücklich zu berücksichtigen *(LF9)* .
In **professionellen Netzen** werden üblicherweise **Client-Server-Netze** mit **zentralen Servern** genutzt; **Peer-to-Peer-Freigaben** können ergänzend für **lokale Ressourcen** (z. B. Drucker, Dateien) eingerichtet werden *(LF3)* .

---

## ⚙️ Grundlagen: SMB/CIFS im Überblick

* **SMB/CIFS**: „**Microsofts Windows-Freigaben** (Samba) zum Mounten/Verbinden von Windows-Laufwerken im Netzwerk“, **Port 445/TCP** *(LF9)* .
* **File-Server**: Stellt **Dateidienste** bereit (z. B. **FTP**, **SMB**) *(LF3)* .
* **NAS (Network Attached Storage)**: Netzwerkspeicher, der **Speicherplatz** im Netz zur Verfügung stellt *(LF3)* .
* **Ports & Dienste**: **Ports** adressieren die zuständigen **Anwendungen**; dadurch können **mehrere Client-Apps** parallel senden und **mehrere Server-Dienste** parallel empfangen *(LF9)* .

---

## 🧭 Einsatz & Einordnung im Netzwerk

* **Standard in Unternehmen**: **Client-Server-Architektur** mit zentralen Servern; **lokale P2P-Freigaben** sind zusätzlich möglich *(LF3)* .
* **Pflichtenheft/Planung**: **SMB/CIFS** ist Teil der **Speichernetzwerkprotokolle** und sollte in der **Stichwortsammlung zur Netzwerkbereitstellung** berücksichtigt werden *(LF9)* .
* **Clients integrieren**: Zu prüfen sind u. a. **Dateidienste** am Standort, **IP-Konfiguration** sowie die benötigte **Datenübertragungsrate** für arbeitsplatzspezifische Anwendungen *(LF3)* .

---

## 🔌 Praxisnahe Hinweise (aus den Unterlagen)

* **Windows-Laufwerke verbinden**: Die Unterlagen benennen **SMB/CIFS** (Samba) explizit „zum **Mounten/Verbinden**“ von Netzlaufwerken über **445/TCP** *(LF9)* .
* **Dateidienste zentralisieren**: **File-Server** oder **NAS** stellen **Freigaben** im Netz bereit *(LF3)* .
* **Port-Prinzip verstehen**: Das **Port-Konzept** erlaubt **gleichzeitige Verbindungen** mehrerer Dienste/Anwendungen auf Clients und Servern *(LF9)* .

---

## 🧪 „Beispielhaftes“ Port-Verzeichnis (Auszug, Kontext für SMB/CIFS)

* **445/TCP → Windows-Freigaben (CIFS/SMB, Samba)** – **Mounten/Verbinden** von Windows-Laufwerken *(LF9)* .
* (Kontext) **80/443 → HTTP/HTTPS**; **22 → SSH**; **53 → DNS** – zeigen, wie Ports **Diensten** zugeordnet sind *(LF9)* .

---

## 📚 Begriffe kompakt

| Begriff                        | Definition                                                                                                                      | Quelle   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **SMB/CIFS**                   | **Windows-Freigaben** (Samba) über **Port 445/TCP** zum **Mounten/Verbinden** von Windows-Laufwerken im Netzwerk.               | *(LF9)*  |
| **File-Server**                | Stellt **Dateidienste** bereit (z. B. **FTP**, **SMB**).                                                                        | *(LF3)*  |
| **NAS**                        | **Netzwerkspeicher**, stellt **Speicherplatz** im Netzwerk zur Verfügung.                                                       | *(LF3)*  |
| **Speichernetzwerkprotokolle** | Für die Planung zu berücksichtigen, inkl. **SMB/CIFS**, **NFS**, **iSCSI**, **Fibre Channel**, **FCoE**, **HTTP**, **NVMe-oF**. | *(LF9)*  |
| **Port**                       | **Adressiert Anwendungen/Dienste**; ermöglicht **gleichzeitige** Clients/Server-Dienste.                                        | *(LF9)*  |

---

## 🧩 Einordnung in die Netzwerkplanung (Checkpunkte aus den Unterlagen)

1. **Architektur wählen** (Client-Server mit zentralen Freigaben; P2P ggf. ergänzend) *(LF3)* 
2. **Protokolle festlegen** (**SMB/CIFS** als Speichernetzwerkprotokoll) *(LF9)* 
3. **Ports/Dienste prüfen** (**445/TCP** für SMB/CIFS) *(LF9)* 
4. **Client-Integration vorbereiten** (Anforderungen, **Datenrate**, **IP-Konfiguration**) *(LF3)* 

> **Kurzfazit:** **SMB/CIFS** ist das in den Unterlagen genannte **Protokoll für Windows-Dateifreigaben** über **Port 445/TCP**, das explizit zum **Verbinden/Mounten** von **Netzlaufwerken** dient – und sollte bei der **Netzwerkbereitstellung** als **Speichernetzwerkprotokoll** berücksichtigt werden *(LF9, LF3)* .
---