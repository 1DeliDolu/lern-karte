# 🔏 Zugriffskontrolle: Verschlüsselung & Löschung von Datenträgern, User-/Rollenkonzept <span style="background:#e0f0ff;">LF4, LF8, LF9</span>

Die **Zugriffskontrolle** stellt sicher, dass ausschließlich **Berechtigte** auf Daten zugreifen dürfen; dazu zählen u. a. **Berechtigungskonzepte**, **Verschlüsselung**, **Datenträgerverwaltung/Entsorgung**, **gesicherte Schnittstellen (USB/Netz)** und die **Protokollierung von Zugriffen**. *(LF4)* 
Im Netzwerk-/TOM-Kontext werden ergänzend **„User-Management/Rollenkonzept“, „Verschlüsselung von Datenträgern“, „Löschung von Datenträgern“** als konkrete Maßnahmen der Zugriffskontrolle benannt. *(LF9)* 

---

## 🧭 Prozessschritte (kompakt) für Zugriffskontrolle

1. **Schutzbedarf & Vorgaben klären** (Schutzziele, DSGVO/BDSG; Auswahl der Maßnahmen nach Wirksamkeit/Angemessenheit). *(LF4)*
2. **Berechtigungs- & Rollenkonzept festlegen** (restriktive Rechtevergabe, Rollentrennung). *(LF9)* 
3. **Technische Durchsetzung** (Verschlüsselung, Schnittstellen absichern, Logging). *(LF4)* 
4. **Lebenszyklus Datenträger** (Nutzung, Transport, **sicheres Löschen/Entsorgung**). *(LF4)* 
5. **Wirksamkeit prüfen** (Audit/Evaluierung/Schwachstellenidentifikation). *(LF4)* 

---

## 3.1 🔐 Verschlüsselung von Datenträgern

**Ziel & Vorgaben**

* DSGVO/BDSG und TOM verweisen ausdrücklich auf **Pseudonymisierung/Verschlüsselung** als geeignete Maßnahme. *(LF4)* 
* In TOM-Checklisten ist **„Verschlüsselung“** sowie **„Verschlüsselung von Datenträgern“/Signaturen** für die Zugriffskontrolle aufgeführt. *(LF4)* 

**Beispiele & Umsetzungen (Auszug aus den Materialien)**

* **Zertifizierte mobile Datenträger** verwenden; die Zertifizierung soll **sichere Datenerhaltung und vorhandene Verschlüsselung** einschließen. *(LF4)* 
* **Open-Source-Tool (VeraCrypt)**: Verschlüsseln einzelner Bereiche oder ganzer Festplatten. *(LF4)* 
* **Domain-/Managed-Domain-Verschlüsselung**: transparente, schlüsselbasierte Absicherung der Kommunikation zwischen Maschinen. *(LF4)* 

**Prüfpunkte zur Wirksamkeit/Effizienz**

* Nachweis, dass **alle mobilen Datenträger verschlüsselt** sind (Richtlinie + technische Belege). *(LF4)* 
* **Schnittstellen gesichert** (USB/Netz) und **Zugriffe protokolliert**. *(LF4)* 
* Auswahl der Verfahren gemäß **Stand der Technik/BSI-Empfehlungen**. *(LF4)* 

---

## 3.2 🧹 Löschung von Datenträgern (sichere Datenlöschung)

**Vorgaben & Risiken**

* Ein **„einfaches Löschen“ ist nicht ausreichend**, da **Restinformationen** rekonstruierbar bleiben können. *(LF4)* 

**Sichere Löschverfahren (aus den Materialien)**

* Für normalen Schutzbedarf genügt **physikalische Löschung durch Überschreiben mit Muster(n)**; **nur Löschbefehl vermeiden**. *(LF4)* 

**Prozesspunkte im Datenträger-Lebenszyklus**

* **Verlustmeldung** unverzüglich, Manipulationsprüfung bei Wiederauffinden. *(LF4)*
* **Mitnahme/Versand** klar regeln; Verpackung/Transportart am **Schutzbedarf** ausrichten, **Nachweisverfahren** führen. *(LF4)*

**Prüfpunkte zur Wirksamkeit/Effizienz**

* Nachweis **standardisierter Löschprozesse** vor Weitergabe/Wiederverwendung/Aussonderung. *(LF4)* 
* Belege über **durchgeführte Überschreib-Löschungen** (Protokoll). *(LF4)* 

---

## 3.3 👥 User-/Rollenkonzept (Berechtigungen/Rollentrennung)

**Kernanforderungen**

* **Berechtigungskonzepte** und **Protokollierung von Zugriffen** sind zentrale Bausteine der Zugriffskontrolle. *(LF4)* 
* BSI-Bausteine fordern u. a. **Benutzerauthentisierung**, **restriktive Rechtevergabe**, **Rollentrennung** sowie ein **Rechte- und Rollenkonzept**. *(LF9)* 

**Risiko-Hinweis aus den Materialien**

* **Fehlerhafte/ungenügende Rechtevergabe** ist eine typische Gefährdungslage. *(LF4)* 

**Prüfpunkte zur Wirksamkeit/Effizienz**

* Existenz und Anwendung eines **Rechte-/Rollenkonzepts** (rollenbasierte, **restriktive** Vergabe). *(LF9)* 
* **Log-Auswertung** zu Berechtigungs-/Rollenänderungen und Zugriffen. *(LF4)* 

---

## 💻 Beispielcode: Rechteverwaltung in Datenbanken (GRANT/REVOKE) <span style="background:#e0f0ff;">LF8</span>

Die Materialien zeigen die **Datenbank-Rechtevergabe** als praktischen Mechanismus zur Umsetzung des **User-/Rollenkonzepts** (Benutzer anlegen/löschen, Rechte erteilen/entziehen). *(LF8)* 

```sql
-- Benutzer anlegen (Beispiel)
CREATE USER Schulz IDENTIFIED BY '123xyz456';
-- Benutzer löschen
DROP USER Schulz;

-- Rechte erteilen (rollen-/objektbezogen)
GRANT INSERT, UPDATE ON Ortsverwaltung.Ort TO Schulz;

-- Rechte entziehen
REVOKE INSERT, UPDATE ON Ortsverwaltung.Ort FROM Schulz;
```

*(LF8)* 

> **Hinweis zur Governance:** Die **Bezeichnungen/Zuständigkeiten von Rollen** (z. B. ISB, Datenschutzbeauftragter, IT-Leitung, Audit-Team) sind im Material aufgeführt und dienen der organisatorischen Verankerung des Berechtigungskonzepts. *(LF4)* 

---

## ✅ Checklisten (praxisnah aus den Inhalten abgeleitet)

**A. Verschlüsselung (Datenträger)**

* Richtlinie: **nur zertifizierte, verschlüsselbare Datenträger**? *(LF4)* 
* Umsetzung: **VeraCrypt/Full-Disk/Domain-Verschlüsselung** belegt? *(LF4)* 
* Technik: **Schnittstellen (USB/Netz) abgesichert**, **Zugriffe protokolliert**? *(LF4)* 

**B. Sicheres Löschen**

* Verfahren: **Überschreiben mit Muster(n)** statt einfachem Löschen? *(LF4)* 
* Prozesse: **Verlustmeldung**, **Mitnahme/Versand-Regeln**, **Nachweise** vorhanden? *(LF4)*

**C. User-/Rollenkonzept**

* **Rechte-/Rollenkonzept** dokumentiert (restriktiv, Trennung der Funktionen)? *(LF9)* 
* **DB-Rechtevergabe** (GRANT/REVOKE) und **Entzug** nachvollziehbar? *(LF8)* 
* **Zugriffsprotokolle** (Änderungen/Anmeldungen) werden ausgewertet? *(LF4)* 

---

## 📚 Begriffstabelle

| Begriff                              | Definition                                                                                                                                                                                            | Quelle |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **Zugriffskontrolle**                | Maßnahmen, die den Zugriff ausschließlich auf **Berechtigte** beschränken (u. a. **Berechtigungskonzepte**, **Verschlüsselung**, **Entsorgung**, **gesicherte Schnittstellen**, **Protokollierung**). | (LF4)  |
| **Verschlüsselung von Datenträgern** | Einsatz zertifizierter, verschlüsselbarer Datenträger; optional **Full-Disk/Container** und **Domain-Verschlüsselung**.                                                                               | (LF4)  |
| **Sicheres Löschen**                 | **Überschreiben** als physikalische Löschung; **einfaches Löschen** unzureichend (Restinformationen).                                                                                                 | (LF4)  |
| **User-/Rollenkonzept**              | **Restriktive Rechtevergabe**, **Rollentrennung**, formale **Benutzerauthentisierung**; als BSI-Anforderung ausgewiesen.                                                                              | (LF9)  |
| **DB-Rechtevergabe**                 | **CREATE USER / GRANT / REVOKE** zur technischen Umsetzung von Rollen/Rechten.                                                                                                                        | (LF8)  |

---

## 🧩 Praxisbeispiele (direkt aus den Materialien)

* **Sicherer Datenträger-Austausch**: Kennzeichnung, sichere Aufbewahrung/Verpackung, **Verschlüsselung**, Virenprüfung; klare **Mitnahme-/Versandregeln**. *(LF4)* 
* **Gefährdungen mobiler Datenträger**: Diebstahl/Verlust, Schadprogramme, Restdaten-Abfluss — daraus folgt die Pflicht zu **Verschlüsselung** und **sicherem Löschen**. *(LF4)* 

---

> **Fazit:** Für die Zugriffskontrolle sind in den Unterlagen eindeutig die drei Schwerpunkte **Verschlüsselung**, **sicheres Löschen** und **User-/Rollenkonzept** genannt. Die **Wirksamkeit** wird durch **Richtlinien + technische Umsetzung + Protokollierung** und **Audits** nachgewiesen. *(LF4, LF8, LF9)*
