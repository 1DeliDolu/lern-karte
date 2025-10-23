# 🔐 Sicherheitskonzepte und -risiken <span style="background:#e0f0ff;">LF3, LF9</span>

**Sicherheitskonzepte** im Netz stützen sich auf die **Schutzziele der Informationssicherheit** – **Vertraulichkeit**, **Integrität/Authentizität** und **Verfügbarkeit** – und werden im Rahmen der **Schutzbedarfs- und Risikoanalyse** festgelegt. *(LF9)* 
Als Referenzrahmen nennt der Lehrtext ausdrücklich den **BSI-IT-Grundschutz** inkl. Bausteinen zu **Netzarchitektur/-design**, **Netzmanagement**, **Funknetzen (WLAN)**, **Netzkomponenten (Router, Switches, Firewall, VPN)** sowie flankierende Bausteine wie **Sicherheitsmanagement**, **Identitäts-/Berechtigungsmanagement**, **Kryptokonzept**, **Datensicherungskonzept**, **Patch-/Änderungsmanagement**, **Protokollierung** u. a. *(LF9)* 

---

## 🧭 Grundstruktur eines Sicherheitskonzepts

* **Sicherheitsleitlinie → Sicherheitskonzept → Strukturanalyse → Schutzbedarfsfeststellung** (Netzplan, IT-Systeme, räumliche Gegebenheiten) – Vorgehen nach BSI wie am Beispiel **RECPLAST** dargestellt. *(LF9)* 
* **Im Lasten-/Pflichtenheft gesondert behandeln:** „**Sicherheit und Datenschutz**“ (z. B. Backups, TOM aus Kundensicht, Verschlüsselung, VPN, Website-Schutz, Firewall). *(LF9)* 

---

## 🛡️ Technisch-organisatorische Maßnahmen (TOM)

Der Lehrtext listet TOM mit Beispielen: **IDS/IPS**, **USV**, **Redundanz/RAID**, **Backups**, **Zutritts-/Zugang-/Zugriffskontrolle**, **Verschlüsselung von Datenträgern**, **Löschung**, **User-/Rollenmanagement**, **Firewall/Webfilter**, **Port-Security**, **Log-Management**, **Compliance-Reports** sowie organisatorische Strukturen zu **Zugang/Zutritt/Zugriff**. *(LF9)* 
**3-2-1-Regel für Backups:** *3 Kopien*, *2 unterschiedliche Medien*, *1 Kopie extern lagern*. *(LF9)* 
**Redundanz** (funktionell, räumlich, organisatorisch-diversitär) erhöht Verfügbarkeit und reduziert Risiken. *(LF9, LF3)*

---

## 🧱 Netzarchitektur & Härtung

* **Netzsegmentierung** nach **Vertrauenszonen/Sicherheitsrichtlinien** (P-A-P-Struktur); Systeme mit **unterschiedlichem Schutzbedarf** in getrennte Segmente; **Überbrückungen** dürfen nicht möglich sein. *(LF9)* 
* **Patches/Updates** zeitnah einspielen; **HTTPS/TLS-Zertifikate** (auch Let’s Encrypt) für Web-Dienste. *(LF9)* 
* **Proxy/Reverse-Proxy** als Sicherheits- und Entlastungskomponente (TLS-Auslagerung, Verteilung eingehender Anfragen). *(LF9)* 
* **Firewall-Planung:** Typ (Paket-/Inhaltsfilter, IDS/IPS), **Performance**, **Virtualisierung**, **Hersteller/Vorgaben**. *(LF9)* 
* **Switch-Planung:** Core/Distribution/Access, **STP/RSTP** zur Vermeidung von Loops/Broadcast-Stürmen. *(LF9)* 

---

## 📶 WLAN-/Funk-Sicherheit

* **WLAN-Access-Points sind sicherheitskritisch**; Themen: **Gastnetze**, **Cloud-Management**, **Mesh vs. Einzel-AP**. *(LF9)* 
* **Verschlüsselung:** **WPA3** (Perfect Forward Secrecy), **WPA2/WPA/WEP** als (veraltet/unsicher) gekennzeichnet; **WLAN-Schlüssel ≥ 20 Zeichen**; **WPS** optional; **Mesh**-Funktion beschrieben. *(LF9)* 

---

## 🌐 Sichere Kommunikation (VPN & Kryptographie)

* **VPN** (Perimeter-Sicherheit, Tunneling auf unteren OSI-Schichten) inkl. **Client-/Router-VPN**; **IPsec** (Layer 3) für Vertraulichkeit/Integrität/Authentifizierung; **Diffie-Hellman** für sicheren Schlüsseltausch. *(LF9)*
* In **SoHo-Routern** existieren **VPN-Tunnel-Endpunkte** zur **sicheren LAN-Anbindung mobiler Stationen**. *(LF3)* 

---

## ⚠️ Risiken, Bedrohungen & Behandlung

* **Gefährdungen (Beispiele)**: *Ausfall Strom/Netze*, *Abfluss von Informationen (Spionage)*, *unbefugtes Eindringen*, *Missbrauch von Berechtigungen*, *fehlerhafte/unerlaubte Administration* – mit **Eintrittshäufigkeit** und **Auswirkungen** zur **Risikobewertung**. *(LF9)* 
* **DDoS-Schutz** bei Web-Anwendungen als Anforderung; **DNSSEC** optional verfügbar. *(LF9)* 
* **„Faktor Mensch“** als großes Problemfeld der Datensicherheit (menschliche Fehler/Schwächen). *(LF3)* 
* **Monitoring/Protokollierung** (Ping, Traceroute, Wireshark, SNMP), **Schutzbedarfskategorien** (normal/hoch/sehr hoch), **Zusammenarbeit** mit **Sicherheitsbeauftragten/ITSM**. *(LF9)* 

---

## 🧪 Beispiele (aus dem Lehrtext)

### Beispiel A – WLAN-Absicherung (Ausschnitt) *(LF9)* 

* **SSID**, **WPA3** (PFS), **WPA2/WPA/WEP** (veraltet/unsicher), **Passwort ≥ 20 Zeichen**, **WPS**, **Mesh**.

### Beispiel B – VPN-Client/Router & IPsec *(LF9)* 

* **Client-/Router-VPN**, **Leistungsengpässe** (Flaschenhals) beachten; **IPsec** (Layer 3), **Diffie-Hellman** für Schlüsseltausch.

### Beispiel C – Segmentierung nach Schutzbedarf *(LF9)* 

* **Zonenmodell**, **kein Überbrücken von Segmenten**, **höchster Schutzbedarf bestimmt Segmentanforderungen**.

---

## 💻 Beispielcode – Verschlüsselung (symmetrisch, Fernet/AES) <span style="background:#e0f0ff;">LF11a</span>

**Python (Fernet / AES-128-CBC, Bibliothek `cryptography`)** *(LF11a)* 

```python
from cryptography.fernet import Fernet
#-----------------------------------------------
# Schlüsselerzeugen
#-----------------------------------------------
key = Fernet.generate_key()
cipher = Fernet(key)
plain_text = 'Eine wirklich sehr geheime Nachricht!'
print("origninaltext: " + plain_text)
#-----------------------------------------------
# Verschlüsseln
#-----------------------------------------------
plain_data = plain_text.encode()
encrypted_data = cipher.encrypt(plain_data)
encrypted_text = encrypted_data.decode('UTF-8')
print("Verschlüsselter Text: " + encrypted_text)
#-----------------------------------------------
# Entschlüsseln
#-----------------------------------------------
encrypted_data = encrypted_text.encode()
decrypted_data = cipher.decrypt(encrypted_data)
decrypted_text = decrypted_data.decode('UTF-8')
print("Entschlüsselter Text: " + decrypted_text)
```

**Java (AES)** *(LF11a)* 

```java
import java.util.Base64;
import javax.crypto.*;

public class Program {
  public static void main(String[] args) {
    try {
      // Schlüsselerzeugen
      KeyGenerator keygen = KeyGenerator.getInstance("AES");
      keygen.init(128);
      SecretKey key = keygen.generateKey();
      Cipher cipher = Cipher.getInstance("AES");
      String plainText = "Eine wirklich sehr geheime Nachricht!";
      System.out.println("Originaltext: " + plainText);

      // Verschlüsseln
      cipher.init(Cipher.ENCRYPT_MODE, key);
      byte[] encryptedData = cipher.doFinal(plainText.getBytes());
      String encryptedText = Base64.getEncoder().encodeToString(encryptedData);
      System.out.println("Verschlüsselter Text: " + encryptedText);

      // Entschlüsseln
      cipher.init(Cipher.DECRYPT_MODE, key);
      encryptedData = (Base64.getDecoder().decode(encryptedText));
      byte[] decryptedData = cipher.doFinal(encryptedData);
      String decryptedText = new String(decryptedData);
      System.out.println("Entschlüsselter Text: " + decryptedText);
    } catch (Exception e) { e.printStackTrace(); }
  }
}
```

> **Hinweis:** Der Lehrtext mahnt, **keine eigenen Algorithmen zu erfinden/implementieren**, sondern **bewährte Bibliotheken** zu nutzen. *(LF11a)* 

---

## ⚙️ Prozessschritte zur sicheren Netzbereitstellung

1. **Sicherheitsleitlinie & Sicherheitskonzept** definieren. *(LF9)* 
2. **Strukturanalyse & Schutzbedarfsfeststellung** (inkl. Netzplan). *(LF9)* 
3. **Lastenheft**: Sicherheits-/Datenschutzanforderungen benennen (Backups, TOM, Kryptografie, VPN, Firewall). *(LF9)* 
4. **Pflichtenheft**: Maßnahmen fachlich präzisieren (Netz-/Verkabelung/Komponenten/Protokolle/Dienste). *(LF9)* 
5. **Umsetzung & Betrieb**: **Patch-/Änderungsmanagement**, **Monitoring/Logs**, **Rollen/RBAC**, **Backups nach 3-2-1**, **Redundanz**. *(LF9)*

---

## 📚 Begriffstabelle

| **Begriff**              | **Definition**                                                                                                                                                           | **Quelle** |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **Schutzziele (CIA)**    | **Vertraulichkeit**, **Integrität/Authentizität**, **Verfügbarkeit** als Grundwerte.                                                                                     | *(LF9)*    |
| **BSI-Bausteine (Netz)** | NET.1 **Netze**, NET.2 **Funknetze**, NET.3 **Netzkomponenten**, NET.4 **TK**; weitere: ISMS, IDM, Kryptokonzept, Datensicherung, Patchen, Protokollierung u. a.         | *(LF9)*    |
| **TOM**                  | IDS/IPS, USV, **Redundanz/RAID**, **Backups**, Zutritts-/Zugang-/Zugriffskontrolle, Rollen, Firewall/Webfilter, **Port-Security**, **Log-Mgmt**, **Compliance-Reports**. | *(LF9)*    |
| **3-2-1-Backup**         | *3 Kopien*, *2 Medien*, *1 extern*.                                                                                                                                      | *(LF9)*    |
| **Redundanz**            | Funktionell, räumlich, organisatorisch-diversitär; erhöht Verfügbarkeit.                                                                                                 | *(LF9)*    |
| **Segmentierung**        | Zonen/Segmente nach Schutzbedarf; **keine Überbrückung** zulassen.                                                                                                       | *(LF9)*    |
| **VPN/IPsec**            | VPN mit Tunneling; **IPsec** auf Layer 3; **Diffie-Hellman** für Schlüsseltausch.                                                                                        | *(LF9)*    |
| **WPA3**                 | WLAN-Standard mit **Perfect Forward Secrecy**; ältere Verfahren veraltet/unsicher.                                                                                       | *(LF9)*    |
| **Firewall-Planung**     | Art/Leistung/Virtualisierung/Herstellervorgaben festlegen.                                                                                                               | *(LF9)*    |
| **Proxy/Reverse-Proxy**  | Sicherheitsschicht und TLS-Auslagerung zwischen Internet und internem Netz.                                                                                              | *(LF9)*    |
| **Faktor Mensch**        | Menschliche Fehler/Schwächen als großes Sicherheitsproblem.                                                                                                              | *(LF3)*    |
| **Monitoring/Logs**      | Ping, Traceroute, Wireshark, **SNMP**; Protokollierung & ITSM-Abstimmung.                                                                                                | *(LF9)*    |

---

## 🎯 Kurzfazit (aus den PDFs, ohne freie Ergänzung)

Sicherheitskonzepte im Netz folgen dem BSI-Vorgehen (Leitlinie → Konzept → Analyse/Schutzbedarf), bündeln **TOM**, **Segmentierung**, **Kryptografie/VPN**, **Firewall/Proxy**, **Patch/Monitoring**, **Backups/Redundanz** und adressieren **menschliche** sowie **technische** Risiken – jeweils konkret im **Lasten-/Pflichtenheft** festzuschreiben. *(LF9, LF3)*


