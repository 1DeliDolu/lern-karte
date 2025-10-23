# 🔀 Switch (LF3, LF9)

Ein **Switch** ist ein zentrales **Netzwerkgerät**, das innerhalb eines lokalen Netzwerks (LAN) Datenpakete gezielt an die richtigen Endgeräte weiterleitet. Er arbeitet auf **Schicht 2 (Sicherungsschicht)** des **OSI-Modells** und nutzt die **MAC-Adressen**, um die Datenpakete zielgerichtet zuzustellen *(LF3, LF9)*.

---

## ⚙️ **Funktion eines Switches** <span style="background:#e0f0ff;">(LF3)</span>

Ein Switch empfängt Datenpakete von angeschlossenen Geräten (Clients, Drucker, Server) und leitet diese nur an den **Zielport** weiter, an dem sich das Empfängergerät befindet.
Dies reduziert den Datenverkehr und erhöht die Effizienz des Netzwerks.

### **Arbeitsweise**

1. **MAC-Adresstabelle**:
   Der Switch speichert die MAC-Adressen der angeschlossenen Geräte mit dem jeweiligen Port.
   Beispiel: MAC `00:1A:2B:3C:4D:5E` → Port 3 *(LF3)*

2. **Frame-Weiterleitung (Forwarding)**:
   Beim Empfang eines Frames prüft der Switch die Zieladresse:

   * Wenn bekannt → Weiterleitung an den Zielport
   * Wenn unbekannt → Broadcast an alle Ports

3. **Lernphase (Learning)**:
   Bei jedem empfangenen Frame speichert der Switch automatisch die Quell-MAC-Adresse und den zugehörigen Port.

4. **Aging**:
   MAC-Adressen werden nach einer gewissen Zeit aus der Tabelle gelöscht, wenn keine Aktivität erkannt wird.

---

## 🧩 **Switch im Netzwerkaufbau** <span style="background:#e0f0ff;">(LF3)</span>

In der Netzwerkinfrastruktur befinden sich **Switches in den Etagen- oder Gebäudeverteilern**, um Clients und Server miteinander zu verbinden.
Alle Netzwerkgeräte (z. B. PCs, Drucker, Access Points, IP-Telefone) sind über **Patchkabel** mit Switchports verbunden *(LF3)*.

> „In den Stockwerks- und Gebäudeverteilern befinden sich Switches, die die Daten zielgerichtet weiterleiten.“ *(LF3)*

### **Beispielhafte Geräteverbindung**

```
Client → Patchkabel → Switch → Router → Internet
```

---

## 📶 **Typen von Switches** <span style="background:#e0f0ff;">(LF9)</span>

| Typ                  | Beschreibung                                                                                        | Einsatz                    | Quelle |
| -------------------- | --------------------------------------------------------------------------------------------------- | -------------------------- | ------ |
| **Unmanaged Switch** | Einfache Plug-and-Play-Geräte ohne Konfiguration.                                                   | Kleine Netzwerke, Heimnetz | (LF9)  |
| **Managed Switch**   | Ermöglichen Konfiguration, Monitoring, VLANs, QoS.                                                  | Unternehmen, Rechenzentren | (LF9)  |
| **Layer-3-Switch**   | Kombiniert Switch- und Routerfunktionen (Routing zwischen VLANs).                                   | Große Netzwerke, Backbone  | (LF9)  |
| **PoE-Switch**       | Versorgt angeschlossene Geräte (z. B. Access Points, IP-Telefone, Kameras) über Ethernet mit Strom. | Firmeninstallationen       | (LF9)  |

---

## 🧠 **Erweiterte Funktionen moderner Switches** <span style="background:#e0f0ff;">(LF9)</span>

| Funktion                         | Erklärung                                                         | Beispiel                      |
| -------------------------------- | ----------------------------------------------------------------- | ----------------------------- |
| **VLAN (Virtual LAN)**           | Logische Trennung von Netzwerken über denselben physischen Switch | Verwaltung/Vetrieb trennen    |
| **QoS (Quality of Service)**     | Priorisierung von Netzwerkverkehr (z. B. VoIP)                    | Telefonie bevorzugen          |
| **STP (Spanning Tree Protocol)** | Verhindert Schleifen in redundanten Netzwerken                    | Mehrere Switches im Verbund   |
| **Port Security**                | Beschränkt, welche MAC-Adressen an Ports kommunizieren dürfen     | Schutz vor unbefugten Geräten |
| **Link Aggregation (LACP)**      | Bündelt mehrere Ports zu einer schnelleren Verbindung             | Serveranbindung               |
| **SNMP-Monitoring**              | Netzwerküberwachung und Statusmeldungen                           | IT-Managementsysteme          |

---

## 💡 **Beispielkonfiguration (CLI – Managed Switch)** <span style="background:#e0f0ff;">(LF9)</span>

```bash
# VLAN erstellen
switch# configure terminal
switch(config)# vlan 10
switch(config-vlan)# name Verwaltung

# Port VLAN zuweisen
switch(config)# interface fastethernet 0/1
switch(config-if)# switchport mode access
switch(config-if)# switchport access vlan 10

# Port Security aktivieren
switch(config-if)# switchport port-security
switch(config-if)# switchport port-security maximum 2
switch(config-if)# switchport port-security violation restrict
```

---

## 🧮 **Switch und Datenübertragung (Ethernet)** <span style="background:#e0f0ff;">(LF3)</span>

Switches arbeiten mit **Ethernet-Frames** (OSI-Schicht 2).
Die maximale Nutzdatengröße beträgt **1.500 Byte (MTU)**.
Erweiterungen wie **VLAN-Tags (4 Byte)** werden bei **tagged Frames** hinzugefügt *(LF3)*.

---

## 🔋 **Switches und Stromversorgung (PoE)** <span style="background:#e0f0ff;">(LF9)</span>

* **PoE (Power over Ethernet)**: Stromversorgung über das Netzwerkkabel
* **PoE+ (IEEE 802.3at)**: bis 30 W pro Port
* **PoE++ (IEEE 802.3bt)**: bis 60 – 100 W pro Port
  → ideal für WLAN-Access-Points, IP-Kameras, Telefone

---

## 🧾 **Zusammenfassung**

| Begriff               | Definition                                                                                                                      | Quelle |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **Switch**            | Netzwerkgerät zur Verbindung von Clients in einem LAN; arbeitet auf Schicht 2 und leitet Frames anhand von MAC-Adressen weiter. | LF3    |
| **Managed Switch**    | Konfigurierbarer Switch mit VLAN, QoS, STP und Sicherheitsfunktionen.                                                           | LF9    |
| **Layer-3-Switch**    | Führt Routing zwischen VLANs durch (Schicht 3).                                                                                 | LF9    |
| **PoE-Switch**        | Versorgt Geräte über Ethernet mit Strom.                                                                                        | LF9    |
| **MAC-Adresstabelle** | Tabelle im Switch, die MAC-Adressen den Ports zuordnet.                                                                         | LF3    |

---

## 🧩 **Praxisbeispiel: Netzwerkverkabelung mit Switches (LF3)**

```
Etagenverteiler (EV)
 └── Switch
      ├── PC-Arbeitsplatz (LAN)
      ├── Netzwerkdrucker
      ├── Access Point (PoE)
      ├── IP-Telefon
      └── Verbindung zum Router (Uplink)
```

> Die Switches verbinden alle Geräte über strukturierte Verkabelung.
> „In den Stockwerksverteilern befinden sich Switches, die die Daten zielgerichtet weiterleiten.“ *(LF3)*

---


