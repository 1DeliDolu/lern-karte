# 🤝 **Groupware** <span style="background:#e0f0ff;">LF9</span>

**Groupware** in den Unterlagen bezeichnet **webbasierte Kollaborationsplattformen**, z. B. **Nextcloud** und **CryptPad**, für Datei- und Informationsaustausch, Kalender, Kanban, Office-Dokumente sowie **Videokonferenzen**/Chat (z. B. **Nextcloud Talk**). *(LF9)*  

**Nextcloud** wird als zentrale **Groupware-Lösung** genannt: „webbasierte Plattform zum Austausch von Dateien inklusive Adressbuch, **Kalender**, **Kanban Boards**, **Office**, **Umfragen**, **Videokonferenzen**“. *(LF9)* 
Die **Administration erfolgt im Browser**; über das Menü „Einstellungen/Apps“ lassen sich Funktionen wie **Circles**, **Calendar**, **Deck (Kanban)**, **Draw.io**, **MindMap**, **OnlyOffice**, **Polis**, **Talk (Messaging/Videokonferenzen)**, **Tasks**, **Whiteboard** installieren; **Benutzer** können angelegt werden. *(LF9)* 
Für **Smartphones** existieren Apps (z. B. via **F-Droid**) zur Synchronisation von **Dateien, Adressen, Terminen** und zum **Upload** von Fotos/Download von Dokumenten. *(LF9)* 

---

## 🧱 Bereitstellung & Betrieb (Nextcloud als Beispiel) <span style="background:#e0f0ff;">LF9</span>

**Installationsvarianten**:

1. **snap**: `sudo snap install nextcloud`
2. **docker**: `docker pull nextcloud`
3. **VM (QEMU/KVM)**: Installationsskript `nextcloud_install_production.sh` in der VM ausführen
   Alle drei Varianten laufen in einer **„Sandbox“-Umgebung** und erlauben **weitere Webanwendungen parallel**. *(LF9)* 

**Nach der Installation** wird der Server **im Browser konfiguriert** (Profil, Sprache, Apps, Benutzer). Vor dem Anlegen weiterer Nutzer **soll ein E-Mail-Server für ausgehende E-Mails konfiguriert** werden. *(LF9)* 

**Server-Grundhärtung** (Beispiel aus den Unterlagen): **unattended-upgrades** aktivieren, damit **Sicherheitsupdates automatisch** installiert werden. *(LF9)* 

**Images prüfen**: Beim OS-Setup wird die heruntergeladene **Ubuntu-ISO** per **SHA256** verifiziert (Beispiellisting der **SHA256SUMS** und Prüfaufruf). *(LF9)* 

---

## 🛡️ Verfügbarkeit & Lifecycle (HA, Virtualisierung, Managed Services) <span style="background:#e0f0ff;">LF9</span>

**Hochverfügbarkeit**: In Virtualisierungsumgebungen können **Knoten hoch verfügbar** konfiguriert werden; **andere Knoten starten VMs automatisch nach** (Failover). *(LF9)* 

**Managed Services & cPanel/Plesk**:

* **Server-Management**: E-Mail-Accounts, **Update/Upgrade**, **Back-up**, **Rollback**, **Snapshots** über **cPanel/Plesk**. *(LF9)* 
* **Anwendungs-Management**: z. B. **Nextcloud** administrieren; **Staging/Klonen/Sichern** per Mausklick (cPanel-Beispiel für `https://cloud.jiku-bbs.de`). *(LF9)*  

**Betriebsmodelle/Provider-Images**: Provider stellen u. a. **LAMP**, **cPanel/WHM**, **Plesk**, **Proxmox**, **Webmin**, **Windows Server** als Images bereit; **Back-up-Speicher** ist **nicht inklusive** (separat planen). *(LF9)* 

**DMZ-Prinzip** (Einordnung): Anwendungen, die **auch von Partnern/Kunden/Lieferanten genutzt** werden, liegen in einer **DMZ** zwischen Firewalls; das **Intranet** ist zusätzlich abgeschirmt. *(LF9)* 

---

## 🧪 Praxisbeispiele & Szenarien <span style="background:#e0f0ff;">LF9</span>

**„Mein Schulnetz“**: Proxmox-Infrastruktur mit **OPNsense** und **Nextcloud** inkl. **Chat, Telefonie, Videokonferenzen**, **Collabora-Online-Office**, **Kalender**, **Kontakte**, getrennte **VLANs** für Schüler/Lehrkräfte/Server. *(LF9)* 

**Anwendungsfall-Übersicht**: **Zusammenarbeit** (CryptPad, Nextcloud), **Videokonferenz** (Jitsi, Nextcloud Talk, BigBlueButton). *(LF9)* 

---

## 💻 Beispiel-Befehle & Snippets (aus LF9)

### Installation (Varianten) *(LF9)* 

```bash
# snap
sudo snap install nextcloud

# docker
docker pull nextcloud

# VM (QEMU/KVM): Installationsskript in der VM ausführen
sudo bash nextcloud_install_production.sh
```

### Server-Härtung: automatische Sicherheitsupdates *(LF9)* 

```bash
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

### ISO-Integrität prüfen (Beispiel aus den Unterlagen) *(LF9)* 

```bash
# SHA256SUMS enthält die Referenz-Prüfsumme
cat SHA256SUMS

# Prüfe heruntergeladene ISO
echo "<hash> *ubuntu-20.04.2-live-server-amd64.iso" | shasum -a 256 -check
# Ausgabe: ubuntu-20.04.2-live-server-amd64.iso: OK
```

---

## ✅ Prozessschritte für eine **Groupware-Einführung** <span style="background:#e0f0ff;">LF9</span>

1. **Basis-OS bereitstellen & prüfen** (ISO-Download, **SHA256**-Check). *(LF9)* 
2. **Sicherheitsupdates automatisieren** (**unattended-upgrades**). *(LF9)* 
3. **Nextcloud installieren** (snap/docker/VM-Skript, Sandbox-Betrieb). *(LF9)* 
4. **Erstkonfiguration im Browser** (Profil, **Apps installieren**, **Benutzer anlegen**, **SMTP** für ausgehende Mails). *(LF9)* 
5. **Betrieb organisieren** (**Staging/Klon/Backup** via **cPanel/Plesk**; Snapshots/Rollback planen). *(LF9)*  
6. **Verfügbarkeit erhöhen** (**HA-Cluster/VM-Failover**; ggf. **DMZ** bei externem Zugriff). *(LF9)*  

---

## 📚 Begriffstabelle

| **Begriff**                | **Definition (aus den Unterlagen)**                                                                                           | **Quelle** |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Groupware**              | Kollaborationssysteme für Zusammenarbeit (z. B. **Nextcloud**, **CryptPad**).                                                 | *(LF9)*    |
| **Nextcloud**              | Webbasierte Plattform: **Dateien**, **Adressbuch**, **Kalender**, **Kanban**, **Office**, **Umfragen**, **Videokonferenzen**. | *(LF9)*    |
| **Nextcloud Talk**         | **Messaging/Videokonferenzen** als App in Nextcloud.                                                                          | *(LF9)*    |
| **Staging/Klon/Sicherung** | cPanel-Funktionen zum **Testen** und **Rollback** von Nextcloud-Instanzen.                                                    | *(LF9)*    |
| **Managed Services**       | Mitwirkungs-Stufen: **Server-Management** (Updates/Backups/Snapshots) und **Anwendungs-Management** (z. B. Nextcloud).        | *(LF9)*    |
| **HA-Virtualisierung**     | **Knoten starten VMs automatisch nach** (Failover).                                                                           | *(LF9)*    |
| **DMZ**                    | Zone für **extern genutzte Anwendungen** zwischen Firewalls; Intranet zusätzlich geschützt.                                   | *(LF9)*    |
| **Provider-Images**        | Vordefinierte Images (z. B. **LAMP**, **cPanel/WHM**, **Plesk**, **Proxmox**); **Back-up** i. d. R. **separat**.              | *(LF9)*    |

---

## 🧭 Kurzfazit

In **LF9** wird **Groupware** exemplarisch mit **Nextcloud** umgesetzt: **Browser-Administration**, **App-Erweiterbarkeit** (u. a. **Talk/Calendar/Deck/Office**), **Mobile-Anbindung**, **Staging/Klon/Sicherung** via **cPanel**, sowie **HA-Betrieb** in virtualisierten Umgebungen. Für den stabilen Lifecycle werden **ISO-Prüfung**, **automatische Sicherheitsupdates** und – je nach Exponierung – **DMZ-Betrieb** empfohlen. *(LF9)*      

