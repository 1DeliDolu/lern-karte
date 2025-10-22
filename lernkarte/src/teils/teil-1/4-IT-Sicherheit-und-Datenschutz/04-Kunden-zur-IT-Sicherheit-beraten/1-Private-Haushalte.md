# 🏠 Kunden zur IT-Sicherheit beraten – **Private Haushalte (nur)** <span style="background:#e0f0ff;">LF4, LF9, LF11a</span>

Ziel der Beratung ist es, **Privathaushalte** verständlich zu sicherem Verhalten, **robuster Geräte- und Netzkonfiguration** sowie **Schutzmaßnahmen** (Passwörter, MFA, E-Mail/Phishing-Schutz, Backup, Heimnetz) anzuleiten; als zentrale Anlaufstelle für Bürger wird u. a. **„BSI für Bürger“** genannt. *(LF4)* 

---

## 🔑 Zugang & Identitäten

* **Sichere Passwörter** wählen: zufällige Kombination aus **mind. 8 Zeichen** (Buchstaben, Ziffern, Sonderzeichen) oder **Merksatz-Methode** (Anfangsbuchstaben eines Satzes + Ziffern/Sonderzeichen). *(LF4)* 
* **Passwortgebrauch**: Passwörter **geheim** halten, **pro Dienst unterschiedlich**, **unbeobachtet** eingeben. *(LF4)* 
* **MFA/ZFA** aktivieren (zwei oder mehr Faktoren – Wissen, Besitz, biometrisch) → **erhöht die Anmeldesicherheit** und erschwert **Identitätsdiebstahl**. *(LF4)* 
* **Whitelisting** (Positivlisten) kann in E-Mail-Programmen/Apps den Kommunikationskanal **auf vertrauenswürdige Quellen** begrenzen. *(LF4)* 

---

## 📧 E-Mail, Phishing & Social Engineering

* **E-Mail** ist ein **Hauptangriffsvektor**: In **90 %** der Fälle starten Angriffe über **schädliche Anhänge/Links**; **Sensibilisierung** der Nutzenden ist ein Erfolgsfaktor. *(LF4)* 
* **Social Engineering** adressieren (z. B. Ausspähen, Missbrauch von Berechtigungen, Identitätsdiebstahl) → **Aufklärung/Sensibilisierung** ausdrücklich empfohlen. *(LF4)*

---

## 🖥️ Endgeräte absichern (PC, Laptop, Smartphone/Tablet)

* **Endpoint-Schutz** einsetzen (z. B. **Antiviren/Endpoint-Security-Suite**) und **Benutzerauthentifizierung** stärken; **VPN** schützt den **Transportweg**, **nicht** automatisch das **Endgerät**. *(LF9)* 
* **Aktualisierungen/Patches** regelmäßig einspielen (Bestandteil der Basis-Sicherheitsmaßnahmen in den Bausteinen). *(LF9)* 

---

## 📶 Heimnetz & Router/WLAN

* **WLAN-Standards** verstehen (Wi-Fi 4/5/6 → steigende Durchsatzraten, abwärtskompatibel). *(LF9)* 
* **Heimrouter** über die **Weboberfläche** administrieren (z. B. **FRITZ!Box**), Internetzugang einrichten; bei Bedarf **DNS over TLS** aktivieren (**verschlüsselte Namensauflösung**). *(LF9)*
* **Firewall-Prinzip** verstehen: Paket-/Inhaltsfilter anhand von **Regeln** (Whitelist/Blacklist); auch **Einfach-Firewalls** (z. B. UFW-Konfiguration) zeigen das Prinzip der **Regelprüfung**. *(LF9)* 
* **Access-Points**: Bei Auswahl auf **Wi-Fi-Standard**, **Dual-Band (2,4/5 GHz)**, **MU-MIMO/OFDMA** u. a. Kriterien achten. *(LF9)* 

---

## 💾 Backup & Datenhaltung

* **Datensicherung** ist zentral (IT-Grundschutz-Baustein **CON.3 Datensicherungskonzept**); auch Web-Umgebungen/Control-Panels sollten **Backups** unterstützen. *(LF9)*

---

## 🔌 Mobile Datenträger & Verlustfälle

* **Sicherer Umgang** mit **Wechseldatenträgern**: **Schutz vor Schadsoftware**, **Verlust melden**, **Mitnahme/Versand regeln**, **sicher löschen**, **möglichst zertifizierte Datenträger** verwenden. *(LF4)*

---

## 🧭 Schritt-für-Schritt-Beratung (Privathaushalt)

1. **Passwörter/MFA** prüfen und verbessern (starke Passwörter, MFA aktivieren). *(LF4)*
2. **E-Mail-Sicherheit**: Phishing-Merkmale kennen, Anhänge/Links kritisch prüfen, Whitelists nutzen. *(LF4)*
3. **Endgeräte härten**: Virenschutz/Endpoint-Suite aktivieren, Updates einspielen; VPN nur als **Transport-Schutz** verstehen. *(LF9)* 
4. **Heimnetz prüfen**: Router-Login, WLAN-Standard/SSID/Optionen prüfen; **DNS-over-TLS** bei Bedarf aktivieren. *(LF9)* 
5. **Backup umsetzen**: Regelmäßige Sicherungen lokal/extern; Funktionen des Systems/Providers nutzen. *(LF9)* 
6. **USB/Wechseldatenträger**: Nur notwendige Medien nutzen, sicher löschen/verschlüsseln, Verlustregeln beachten. *(LF4)* 
7. **Informationsquellen**: **BSI für Bürger** regelmäßig nutzen (Hinweise, Checks, Schulungsmaterial). *(LF4)* 

---

## 💡 Beispiele & Mini-Anleitungen

### 1) **FRITZ!Box** – grundlegende Schritte (Auszug)

* **Zugriff**: Weboberfläche über die **Router-IP** (z. B. `http://192.168.178.1`) öffnen, Internetzugang konfigurieren. *(LF9)* 
* **Optionen**: **DNS over TLS** (verschlüsselte Namensauflösung) und **IPv6** bei Bedarf aktivieren. *(LF9)* 

### 2) **Firewall-Prinzip** nachvollziehen

* Beispiel **UFW**: **Eingehend: ablehnen**, **ausgehend: erlauben** und **explizite Freigaben** (Ports 22/80/443 etc.) → zeigt, dass **Regeln** den Verkehr steuern. *(LF9)* 

### 3) **Passwort-Hashing** – Demo-Code (Verständnishilfe)

> **Hinweis:** Hashing schützt **gespeicherte** Kennwörter (z. B. in Anwendungen), nicht die Eingabe am Gerät; für Haushalte ist dies **Hintergrundwissen**. *(LF11a)* 

**Python (SHA-256):** *(LF11a)* 

```python
import hashlib
password = "Mein Passwort"
encoded_password = password.encode()
hash_value = hashlib.sha256(encoded_password)
print("Passwort: " + password)
print("Hashwert: " + hash_value.hexdigest())
```

**Java (SHA-256):** *(LF11a)* 

```java
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

public class Program {
  public static void main(String[] args) {
    try {
      String password = "Mein Passwort";
      MessageDigest digest = MessageDigest.getInstance("SHA-256");
      byte[] encodedPassword = digest.digest(password.getBytes(StandardCharsets.UTF_8));
      BigInteger no = new BigInteger(1, encodedPassword);
      String hashValue = no.toString(16);
      while (hashValue.length() < 32) { hashValue = "0" + hashValue; }
      System.out.println("Passwort: " + password);
      System.out.println("Hashwert: " + hashValue);
    } catch (Exception e) { e.printStackTrace(); }
  }
}
```

---

## 🧪 Praxisbeispiele (Kurz)

* **Phishing-Mail** mit **Link/Anhang** → nicht öffnen, Absender/URL prüfen; **Schulung/Sensibilisierung** entscheidend. *(LF4)* 
* **Öffentliches WLAN** nutzen → **VPN** schützt den **Datenverkehr**, ersetzt aber **kein** Virenschutz/Update-Management. *(LF9)* 
* **USB-Stick gefunden** → **nicht** verwenden; Wechseldatenträger sind **Schadsoftware-Risiko**, nur **vertrauenswürdige** und **zertifizierte** Medien einsetzen. *(LF4)*

---

## 📚 Begriffstabelle

| Begriff               | Definition                                                                                   | Quelle |
| --------------------- | -------------------------------------------------------------------------------------------- | ------ |
| **MFA/ZFA**           | Anmeldung mit **mind. zwei Faktoren** (Wissen/Besitz/Biometrie) zur Erhöhung der Sicherheit. | LF4    |
| **Whitelisting**      | **Positivliste** vertrauenswürdiger Quellen/Apps für Kommunikation & Anwendungen.            | LF4    |
| **Endpoint-Security** | Schutzmaßnahmen auf Endgeräten (AV-Suite, Authentifizierung, ggf. VPN).                      | LF9    |
| **DNS over TLS**      | **Verschlüsselte Namensauflösung** im Router aktivierbar.                                    | LF9    |
| **Datensicherung**    | Organisierte **Backups** (Konzept **CON.3**) und Backup-Funktionen beim Provider/Panel.      | LF9    |

---

## ⚙️ Kompakte **Checkliste** für Privathaushalte

1. **Starke, unterschiedliche Passwörter** + **MFA** aktiv. *(LF4)*
2. **Phishing erkennen** (Anhänge/Links kritisch), ggf. **Whitelists/Filter** nutzen. *(LF4)*
3. **Virenschutz/Endpoint-Suite** aktiv, **Updates** zeitnah. *(LF9)* 
4. **Router/WLAN** prüfen; **Weboberfläche** nutzen; **DNS-over-TLS** optional. *(LF9)*
5. **Regelmäßige Backups** (lokal/extern/Cloud-Panel). *(LF9)* 
6. **USB-Medien** sparsam, **zertifizierte** Datenträger, **sicher löschen**, **Verlust** beachten. *(LF4)* 
7. **Infos auffrischen**: **BSI für Bürger**. *(LF4)* 

---


