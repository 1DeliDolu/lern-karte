
## 🔄 Switching in Netzwerken

**Switching** ist der Prozess, bei dem Datenframes **innerhalb eines lokalen Netzwerks (LAN)** weitergeleitet werden. Diese Aufgabe wird von Netzwerkgeräten namens **Switches** übernommen. Switching findet auf **Schicht 2 (Sicherungsschicht / Data Link Layer)** des OSI-Modells statt.

---

### Funktionsweise

* **Verbindung:** Ein Switch verbindet mehrere Netzwerksegmente oder Endgeräte (wie PCs, Drucker) miteinander. Er ist das wichtigste aktive Bauteil eines zeitgemäßen Rechnernetzes.
* **MAC-Adressen-basiert:** Switches treffen ihre Weiterleitungsentscheidungen basierend auf den **MAC-Adressen** (Hardware-Adressen) der Netzwerkgeräte.
* **Lernprozess:** Ein Switch „lernt“, welche Geräte (genauer: welche MAC-Adressen) an welchem seiner Anschlüsse (Ports) angeschlossen sind. Wenn ein Frame an einem Port ankommt, liest der Switch die Absender-MAC-Adresse aus und trägt sie zusammen mit dem Eingangsport in seine Weiterleitungstabelle ein.
* **Weiterleitungstabelle (Forwarding Table):** Diese Tabelle, auch Switching Table oder Bridge Table genannt, speichert die Zuordnung von MAC-Adressen zu Switch-Ports.
* **Gezielte Weiterleitung:** Wenn ein Frame ankommt, liest der Switch die **Ziel-MAC-Adresse** im Header aus und vergleicht sie mit seiner Weiterleitungstabelle.
    * Findet er einen Eintrag für die Ziel-MAC-Adresse, leitet er den Frame **nur an den Port** weiter, an dem das Zielgerät angeschlossen ist.
    * Ist die Ziel-MAC-Adresse unbekannt oder eine Broadcast-Adresse (`ff-ff-ff-ff-ff-ff`), wird der Frame an alle anderen Ports weitergeleitet (Flooding).
* **Vorteil gegenüber Hubs:** Im Gegensatz zu Hubs (Layer 1), die eingehende Signale einfach an alle Ports weiterleiten, filtern Switches den Netzwerkverkehr und reduzieren unnötige Datenübertragungen und Kollisionen. Jeder Port eines Switches bildet eine eigene Kollisionsdomäne.
* **Multiport Bridge:** Ein Switch kann als eine Brücke mit mehreren Ports (Multiport Bridge) betrachtet werden.

---

### Switch-Interna und Typen

* **Pufferspeicher:** Jeder Switchport verfügt über Eingangs- (In-FIFO) und Ausgangspuffer (Out-FIFO), um ankommende und abgehende Frames zwischenzuspeichern.
* **Switching Fabric:** Dies ist die interne Hochgeschwindigkeitsverbindung im Switch, die Daten von einem Eingangsport zum entsprechenden Ausgangsport weiterleitet.
* **Switching-Methoden:**
    * **Store-and-Forward:** Der Switch empfängt den **gesamten** Frame, prüft ihn auf Fehler (mittels Prüfsumme) und leitet ihn erst dann weiter, wenn er fehlerfrei ist. Dies reduziert die Weiterleitung fehlerhafter Frames, hat aber eine höhere Latenzzeit.
    * **Cut-Through (z.B. Fast Forward):** Der Switch beginnt mit der Weiterleitung des Frames, **sobald die Ziel-MAC-Adresse gelesen wurde**, ohne den Rest des Frames oder die Fehlerprüfung abzuwarten. Dies hat eine sehr geringe Latenzzeit, leitet aber auch fehlerhafte Frames weiter.
    * **Fragment-Free:** Ein Kompromiss, bei dem der Switch die ersten 64 Bytes eines Frames empfängt (da die meisten Kollisionsfehler innerhalb dieser auftreten) und ihn dann weiterleitet.
* **Managebare Switches:** Bieten Konfigurationsmöglichkeiten über eine Web-Oberfläche oder Kommandozeile. Funktionen können sein: VLAN-Konfiguration, Port-Geschwindigkeitseinstellung, Spanning Tree Protocol (STP/RSTP), Port Mirroring zur Netzwerkanalyse.

---

