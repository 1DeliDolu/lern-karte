# 🧩 Funktionale Anforderungen <span style="background:#e0f0ff;">LF2, LF8, LF9</span>

**Funktionale Anforderungen** beschreiben **was** ein System tun soll (bereitgestellte **Anwendungsfälle/Funktionen**), **nicht wie** es intern umgesetzt wird. Sie werden aus Sicht der **Akteure/Nutzer** formuliert und in **Lasten-/Pflichtenheften** strukturiert dokumentiert. *(LF8, LF2, LF9)*

---

## 🧠 Definition & Einordnung

* **„Was, nicht wie“**: Ein **Anwendungsfalldiagramm** fasst die **Funktionen** zusammen, die das System **anbietet**, und zeigt das **äußerlich erkennbare Verhalten** aus Anwendersicht – **ohne** Realisierungsdetails. *(LF8)* 
* **Dokumentenverankerung**: In **Lastenheften** sind **Funktionale Anforderungen** ein eigener Abschnitt; im **Pflichtenheft** werden sie weiter in **Muss-/Kann-/Abgrenzungskriterien** konkretisiert. *(LF2, LF9)*
* **Abgrenzung** zu **nicht funktionalen Anforderungen** (z. B. **Qualität**, **Administration/Orchestrierung**, **Compliance/Nachhaltigkeit**) und oft separat herausgestellten **Sicherheits-/Datenschutzanforderungen**. *(LF9)*

---

## 🧩 Strukturierung in der Praxis (Lasten-/Pflichtenheft)

* **Lastenheft (Auszug Gliederung):** *Ausgangssituation*, *Zielsetzung*, *Produkteinsatz/Schnittstellen*, **Funktionale Anforderungen**, **Nicht funktionale Anforderungen**, *Lieferumfang*, *Phasen/Meilensteine*, *Offene Punkte*, *Abnahmekriterien/Qualität*, *Zuständigkeiten*. *(LF2)* 
* **Pflichtenheft (Auszug Gliederung):** *Zielbestimmung* mit **Muss-/Wunsch-/Abgrenzungskriterien**, *Produkteinsatz*, *Produktbedingungen (SW/HW/Orgware/Schnittstellen)*, **Produktfunktionen**, *Produktleistungen*, *Benutzerschnittstellen*, *Qualität*, *Globale Testfälle*. *(LF2)* 
* **Spezifikation im Netzwerk-Kontext (Lastenheft-Vorlage):**
  **2 Funktionale Anforderungen:** **2.1 Muss-Kriterien**, **2.2 Kann-Kriterien**, **2.3 Abgrenzungskriterien**. *(LF9)* 

---

## 🎯 Ableitung aus Use Cases (UML)

* **Akteure ↔ Anwendungsfälle**: Aus den Beziehungen entstehen **Schnittstellen** (z. B. Benutzeroberflächen) und die **funktionalen Leistungsmerkmale**, die später zu implementieren sind. *(LF8)* 
* **Beispiel-Use-Case „Zimmerreservierung“**: Anwendungsfälle **„Zimmer reservieren“**, **„Verfügbarkeit prüfen“**, **„Zahlungsmethode eingeben“**, **„Kreditkarte prüfen“**; Interaktion mit externer **Bank** als Akteur/System. *(LF8)*
* **Beispiel-Use-Case „Webshop“**: **Angebote ansehen**, **einloggen**, **bestellen** (*Bestellung* **extends** *Einloggen* – Bestellung nur nach Login). *(LF8)* 

---

## 🛠️ Konkrete Beispiele funktionaler Anforderungen

### 1) **Kleinstunternehmen – LTE-WAN-Router** (Lastenheft-Beispiel)

* **Funktionale Anforderungen (Muss/Kann):** *mind.* **10 Mbit/s Download**, **5 Mbit/s Upload**; **Provider** für Standort ermitteln; **Router** muss **DHCP-** und **DNS-Server** mitbringen. *(LF9)* 
* **Sicherheit (separat ausgewiesen):** **Firewall**: **ausgehend erlauben**, **eingehend verhindern**. *(LF9)* 

### 2) **Netzwerkbereitstellung – Planungshinweis**

* Kapitel **„Funktionale Anforderungen planen“**: Aus den funktionalen Anforderungen des Kunden wird der **Lösungsvorschlag** erarbeitet; zu berücksichtigen sind u. a. **WAN/LAN**, **WLAN**, **VLAN**, **VPN**, ggf. **PoE**. *(LF9)* 

### 3) **Abnahmebezug** (Abnahmeprotokoll-Ausschnitt)

* **Abnahmekriterien** werden explizit nach **Funktionalen Anforderungen** (z. B. „**vier grafische Darstellungen** vorhanden“), **Nichtfunktionalen** und **Technischen** Kriterien geprüft und protokolliert. *(LF8)*

---

## ✅ Musterformulierungen (kopierbar)

* **Muss-Kriterium (Funktion):** „Das System **stellt** [Funktion] **bereit**: *[Beschreibung/Umfang, Trigger, Ergebnis]*.“ *(LF9 – Gliederung)* 
* **Kann-Kriterium (Option/Ausbaustufe):** „Optional **unterstützt** das System [Funktion] in Ausbaustufe [X].“ *(LF9)* 
* **Abgrenzung:** „[Fall/Funktion] **tritt nicht ein** bzw. **ist ausgeschlossen**.“ *(LF9)* 
* **Use-Case-gekoppelt:** „Aktor **[Rolle]** kann **[Anwendungsfall]** ausführen; **Voraussetzung**: [z. B. Login].“ *(LF8)* 

---

## 🧪 Mini-Fallstudien (aus den Unterlagen)

1. **Grafiksoftware (Lastenheft-Auszug)** – **Funktionale Anforderungen:** *Ausschneiden/Skalieren/Drehen* in **Ebenen**, **Farbfunktionen**, **Kontexthilfe**, **Speichern** in **gängige Formate**. *(LF2)* 
2. **Netzwerkkunde KMU** – **Funktional:** **LTE-Gastnetz** via **Router**, **Firewall/Proxy**, **Dienste** wie **E-Mail**, **Shop**, **Videokonferenzen** gemäß Anforderungen. *(LF9)*

---

## 🔍 Abnahmekriterien & Testbezug

* **Abnahmeprotokoll** sollte die **geprüften Eigenschaften** und deren Bezug zu den **Abnahmekriterien** (inkl. **funktionaler** Kriterien) dokumentieren; Ergebnis „erfüllt/nicht erfüllt“, offene Punkte/Termine/Verantwortliche. *(LF8)* 
* **Technische/Nichtfunktionale Anforderungen** werden **separat** geprüft (z. B. **Plattformen**, **Usability/Ergonomie** gemäß **ISO 9241-110**). *(LF8)*

---

## 📚 Begriffstabelle

| Begriff                              | Definition                                                                                                  | Quelle |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------ |
| **Funktionale Anforderungen**        | Beschreiben **was** das System für Nutzer/Akteure leisten soll (Use Cases), nicht die technische Umsetzung. | LF8    |
| **Nicht funktionale Anforderungen**  | Qualitäts-, Betriebs- und Rahmenanforderungen (z. B. Qualität, Administration, Compliance).                 | LF9    |
| **Muss-/Kann-/Abgrenzungskriterien** | Strukturierung der funktionalen Anforderungen im Pflichten-/Lastenheft.                                     | LF9    |
| **Use Case (Anwendungsfall)**        | Vom System bereitgestellte Aktion(en) für Akteure; Grundlage zur Ableitung funktionaler Anforderungen.      | LF8    |
| **Abnahmekriterium**                 | Prüfkriterium zur Feststellung, ob eine (funktionale) Anforderung erfüllt ist.                              | LF8    |

---

## 🗂️ Mini-Vorlage (Lastenheft-Block „Funktionale Anforderungen“)

* **2 Funktionale Anforderungen** *(LF9)* 

  * **2.1 Muss-Kriterien**: …
  * **2.2 Kann-Kriterien**: …
  * **2.3 Abgrenzungskriterien**: …

---

## 🔁 Verbindung zu weiteren Disziplinen

* **UX/Ergonomie** beeinflusst **nicht funktionale** Anforderungen (Usability), **nicht** die Funktionsliste. *(LF8)* 
* **Sicherheits-/Datenschutzanforderungen** werden häufig **gesondert** neben den funktionalen Anforderungen geführt (Bezug **BSI-Schutzbedarf/Risikoanalyse**). *(LF9)* 

---

