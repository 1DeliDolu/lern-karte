
## 🛣️ Routing in Netzwerken

**Routing** beschreibt in der Netzwerktechnik das Verfahren zum **Weiterleiten von Nachrichtenpaketen**. Es ist die Aufgabe von Routern, einen Weg für Datenpakete durch das Netz zu wählen und diese zwischen **unterschiedlichen Netzwerken** weiterzuleiten. Routing findet auf **Schicht 3 (Vermittlungsschicht/Internetschicht)** des OSI-/TCP/IP-Modells statt.

---

### Funktionsweise

* **Zieladressenprüfung:** Wenn ein Datenpaket bei einem Router ankommt, prüft dieser die **Ziel-IP-Adresse** im Header des Pakets.
* **Routing-Tabelle:** Der Router vergleicht die Ziel-IP-Adresse (insbesondere den Netzwerkanteil) mit den Einträgen in seiner internen **Routing-Tabelle** (auch Weiterleitungstabelle genannt). Diese Tabelle enthält Informationen darüber, über welchen Ausgangs-Port des Routers bestimmte Zielnetze oder Adressbereiche erreichbar sind.
* **Weiterleitung:**
    * Findet der Router einen passenden Eintrag für das Zielnetzwerk in seiner Tabelle, leitet er das Paket an den entsprechenden **Ausgangs-Port** weiter.
    * Ist das spezifische Zielnetz nicht in der Tabelle bekannt, wird das Paket an ein **Default Gateway** (oft der nächste Router in Richtung Internet) weitergeschickt, sofern eines konfiguriert ist.
    * Befindet sich die Zieladresse im selben Netzwerk, aus dem das Paket kam (oder in einem anderen direkt am Router angeschlossenen Netz), wird es dorthin weitergeleitet.
* **TTL (Time To Live):** Um zu verhindern, dass Pakete endlos im Netz umherirren, enthält der IP-Header ein TTL-Feld. Jeder Router, der ein Paket weiterleitet, **verringert diesen Wert um eins**. Erreicht der TTL-Wert null, wird das Paket verworfen, und eine Fehlermeldung wird an den Absender geschickt.

---

### Statisches vs. Dynamisches Routing

* **Statisches Routing:** Bei kleinen Netzwerken werden die Routen oft manuell vom Administrator in die Routing-Tabelle eingetragen.
* **Dynamisches Routing:** Bei großen Netzwerken, wie dem Internet, werden Routing-Tabellen **dynamisch** durch Routing-Protokolle erstellt und aktualisiert. Die Router tauschen Informationen über erreichbare Netze aus, und jedes Nachrichtenpaket kann einen anderen Weg durch das Netz nehmen.

---

### Router-Ports und Netze

Router identifizieren ihre Ports, die daran angeschlossenen Netze (oder Subnetze) und die zugehörigen Broadcast-Domänen. Jeder Port des Routers ist Teil eines anderen Netzwerks und hat eine eigene IP-Adresse innerhalb dieses Netzwerks, die oft als Gateway-Adresse für die Geräte in diesem Netz dient.

***

Diese Erklärung basiert auf den Informationen aus den Dokumenten LF3.pdf (Seiten 319, 331) und LF9.pdf (Seiten 324, 331, 399).
