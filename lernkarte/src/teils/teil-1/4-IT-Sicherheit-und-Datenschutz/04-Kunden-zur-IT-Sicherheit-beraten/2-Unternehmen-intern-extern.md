# 🏢 Unternehmen zur IT-Sicherheit beraten – **intern & extern** <span style="background:#e0f0ff;">LF4, LF9, LF11a</span>

Die Beratung von **Unternehmen** orientiert sich am **BSI-IT-Grundschutz**: Von der **Sicherheitsleitlinie** über **Strukturanalyse** und **Schutzbedarfsfeststellung** bis zur **Umsetzung** und **kontinuierlichen Verbesserung** eines ISMS. Ziel ist eine **nachvollziehbare, objektive Bewertung** aller Zielobjekte (Informationen, Anwendungen/Prozesse, IT-Systeme, Kommunikationsverbindungen, Räume) und die **Ableitung passender Maßnahmen**. *(LF4)* 

---

## 🧭 Intern beraten: Organisation, Prozesse & Bewertung

**Sicherheitsleitlinie (Richtschnur der Leitung):** benennt **Stellenwert**, **Prinzipien**, **Ziele**, **Rahmenbedingungen**, **Verantwortlichkeiten**, **Vorgehen/Kommunikation**, **Terminplan**, **Dokumentation**; bildet den Startpunkt für Sicherheitskonzept, Strukturanalyse und Schutzbedarfsfeststellung. *(LF4)* 

**Strukturanalyse (Erstaufnahme):** Erfasst **Geschäftsprozesse, Anwendungen, Informationen, Netzplan, IT-Systeme/Netze, Räume**; bildet Abhängigkeiten ab (z. B. **welche Anwendung läuft auf welchen Systemen?**). *(LF4)*

**Schutzbedarfsfeststellung (C-I-A je Zielobjekt):**

* **Kategorien:** *normal/hoch/sehr hoch* (bis **existenzbedrohlich/katastrophal**). *(LF4)* 
* **Vorgehen:** **Schadensszenarien**, **Prüfreihenfolge** (z. B. erst Anwendungen/Prozesse, dann IT-Systeme, Räume, Verbindungen), **Abhängigkeiten** dokumentieren, **Ergebnisse begründen**. *(LF4)* 
* **Ableitungsregeln:** **Maximumprinzip**, **Kumulationseffekt** (z. B. Virtualisierungsserver), **Verteilungseffekt** (Lastausgleich kann Verfügbarkeit senken). *(LF4)*

**Ausschnitte aus Beispielunternehmen (RECPLAST, BSI):**

* **Internetanschluss:** **C/I/A = hoch/hoch/hoch** (Abfangen/Manipulation möglich; Außenkommunikation kritisch). *(LF4)* 
* **Office-Anwendungen:** **C/I/A = normal/normal/normal** (Fehler erkennbar, Ersatzgeräte vorhanden). *(LF4)* 
* **Clients (z. B. Finanzbuchhaltung/GF):** Höherer Bedarf durch **Maximumprinzip** verknüpfter Anwendungen; **Ausfall** für einige Tage tolerierbar (Ersatz). *(LF4)* 

**Gefährdungen & interne Maßnahmen (Beispiele):**

* **Clients** sind anfällig (E-Mail/Wechseldatenträger als Einfallstore, Datenverlust, unberechtigte Nutzung, Abhören via Mikro/Kamera) → Schutzbedarf **C-I-A** je Arbeitsplatz bestimmen und Maßnahmen festlegen. *(LF4)* 
* **Mobile Datenträger:** Schutzbedarf hängt von **Datenart** und **Systemeinbindung** ab; Ziel ist die **Auswahl geeigneter Sicherheitsmaßnahmen** (z. B. Einsatz/Verbot, Verschlüsselung, sichere Handhabung). *(LF4)* 

---

## 🌐 Extern beraten: Beschaffung, Netzwerkbereitstellung & Partner

**Pflichtenheft/Netzkonzept – Stichwortsammlung (Auswahl):** **Virtualisierung/Bare-Metal/Cloud**, **Topologien & Medien**, **VLAN/WLAN/VPN/IPsec**, **Protokolle (IPv4/IPv6, TLS, DNS/IMAP/SMTP/HTTPS/SFTP/SSH)**, **Storage-Protokolle**, **QoS/Redundanz/Monitoring**, **Schutzziele & Schutzbedarf**, **Ergebnisse der Schutzbedarfs-/Risikoanalyse**, **Abstimmung mit Sicherheitsbeauftragten/ITSM**, **BSI-Grundschutzbausteine zur Vernetzung**. *(LF9)* 

**DevOps & „Shift-Left“ in Projekten:** **Automatisierte Bereitstellung**, **frühes Einbinden von Sicherheitstests**, **Sicherheits-/Compliance-Tools** für **risi­ko­geprüfte** Releases; kontinuierliche Mehrwerte in **Funktion** und **Sicherheit**. *(LF9)*

**Netzwerkkomponenten – Auswahlkriterien (Access Points):** **Wi-Fi-Standard (Wi-Fi 5/6)**, **tatsächlicher Datendurchsatz**, **Dual-Band 2,4/5 GHz**, **MU-MIMO**, **OFDMA**, **Multi-Gigabit-Ethernet**, **PoE-Leistung**, **Ports/Outdoor/Temperatur**, **Antennen/Gehäuse**, **Cloud-Management/Automatisierung**. *(LF9)*

**DNS absichern:** **DNS läuft unverschlüsselt**; **DNS-over-TLS/HTTPS/QUIC** schützt Anfragen. *(LF9)* 

**Standortkopplung/VPN – Adressierung:** Router/Weboberfläche (Beispiel FRITZ!Box) zeigt **LAN-Adressbereich**; **Standorte benötigen unterschiedliche Netze**, wenn sie per **VPN** verbunden werden. *(LF9)* 

---

## ⚙️ Prozessschritte (intern → extern)

1. **Leitlinie/ISMS aufsetzen** (Ziele, Zuständigkeiten, Regeln). *(LF4)* 
2. **Strukturanalyse** (Prozesse/Anwendungen/Infos, Netz, IT-Systeme, Räume). *(LF4)* 
3. **Schutzbedarfsfeststellung (C-I-A)** inkl. **Ableitungsregeln** & Begründungen. *(LF4)*
4. **Maßnahmen ableiten** (z. B. Client-Härtung, Umgang mit Wechseldatenträgern). *(LF4)*
5. **Pflichtenheft & Beschaffung**: Anforderungen, Schutzziele/-bedarf, Bausteine, Tests/Monitoring festlegen. *(LF9)* 
6. **Bereitstellen & Betreiben** mit **DevOps/Shift-Left**, **Patch/Compliance/Monitoring**. *(LF9)* 

---

## 🧪 Praxisbeispiele

**A) Auszug Schutzbedarf – Kommunikationsverbindung**
**Internetanschluss:** **C/I/A = hoch/hoch/hoch** – Gefahr des Abfangens/Manipulation; kritische Außenverbindung. *(LF4)* 

**B) Auszug Schutzbedarf – Anwendungen/Clients**
**Office-Anwendungen:** **C/I/A = normal/normal/normal** (Fehler erkennbar, Ersatzgeräte). *(LF4)* 

**C) Router/Standortkopplung**
**VPN-Standorte**: **unterschiedliche LAN-Netze** vorsehen; lokale Server **statische IP**. *(LF9)* 

**D) DNS-Sicherheit**
**DoT/DoH/DoQ** einsetzen, um **DNS-Anfragen** zu schützen. *(LF9)* 

---

## 💻 Beispielcode (Passwort-Hashing für Anwendungen)

> **Einsatzgebiet:** sichere **Speicherung** von Passwörtern (Hash statt Klartext). *(LF11a)* 

**Python – SHA-256:** *(LF11a)* 

```python
import hashlib

password = "MeinSicheresPasswort!"
hash_hex = hashlib.sha256(password.encode("utf-8")).hexdigest()
print("SHA-256:", hash_hex)
```

**Java – SHA-256:** *(LF11a)* 

```java
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

public class Program {
  public static void main(String[] args) throws Exception {
    String password = "MeinSicheresPasswort!";
    MessageDigest md = MessageDigest.getInstance("SHA-256");
    byte[] digest = md.digest(password.getBytes(StandardCharsets.UTF_8));
    String hash = String.format("%064x", new BigInteger(1, digest));
    System.out.println("SHA-256: " + hash);
  }
}
```

---

## 📚 Begriffstabelle

| Begriff                     | Definition                                                                          | Quelle |
| --------------------------- | ----------------------------------------------------------------------------------- | ------ |
| **Sicherheitsleitlinie**    | Grundsatzdokument der Leitung mit Prinzipien, Zielen, Zuständigkeiten, Regeln       | LF4    |
| **Strukturanalyse**         | Erstaufnahme von Prozessen, Anwendungen, Infos, Netz, IT-Systemen, Räumen           | LF4    |
| **Schutzbedarf (C-I-A)**    | Einstufung *normal/hoch/sehr hoch* je Zielobjekt und Schutzziel                     | LF4    |
| **Ableitungsregeln**        | **Maximumprinzip**, **Kumulation**, **Verteilung** zur Herleitung des Schutzbedarfs | LF4    |
| **DevOps / Shift-Left**     | Frühzeitige Sicherheitstests & Compliance-Tools, automatisierte Bereitstellungen    | LF9    |
| **DNS over TLS/HTTPS/QUIC** | Verschlüsselte DNS-Anfragen zur Erhöhung der Vertraulichkeit                        | LF9    |
| **AP-Auswahlkriterien**     | Wi-Fi-Standard, Durchsatz, Dual-Band, MU-MIMO, OFDMA, PoE, Management               | LF9    |

---

## ✅ Kompakte Checkliste (intern & extern)

* **Leitlinie & ISMS** vorhanden, bekannt, unterschrieben; **Sensibilisierung** erfolgt. *(LF4)* 
* **Strukturanalyse** vollständig; **Abhängigkeiten** abgebildet (App ↔ System ↔ Raum/Verbindung). *(LF4)* 
* **Schutzbedarf** je **C-I-A** begründet; **Maximum/Kumulation/Verteilung** angewendet. *(LF4)* 
* **Clients/Datenträger** geregelt (Härtung, Umgang, ggf. Unterbindung, Backup/Verlust). *(LF4)*
* **Pflichtenheft** mit **Schutzzielen/-bedarf**, **VLAN/VPN/TLS**, **Monitoring/Protokolle** definiert. *(LF9)* 
* **DNS abgesichert** (DoT/DoH/DoQ), **Standorte** mit **unterschiedlichen Netzen** für VPN. *(LF9)*
* **DevOps/Shift-Left** für sichere, schnelle Bereitstellung etabliert. *(LF9)* 

---

