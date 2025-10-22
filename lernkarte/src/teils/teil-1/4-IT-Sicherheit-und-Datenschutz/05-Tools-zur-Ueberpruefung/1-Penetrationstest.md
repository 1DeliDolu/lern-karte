# 🔐 Penetrations-Test (Überprüfung von IT-Sicherheitsmaßnahmen) <span style="background:#e0f0ff;">LF4, LF9</span>

Ein ausdrücklicher Begriff **„Penetrationstest“** kommt in den bereitgestellten Lernfeld-PDFs nicht vor. Die Dokumente beschreiben jedoch die **Überprüfung der Wirksamkeit von Sicherheitsmaßnahmen**, **Schwachstellenidentifikation** und **IT-Sicherheitstests** im Entwicklungs- und Betriebsprozess – genau der Prüfkontext, in dem Penetrationstests eingesetzt werden. (LF4, LF9)

Im **IT-Grundschutz-Modell** ist die Schicht **DER** explizit für **Überprüfung**, **Detektion** und **Reaktion** vorgesehen; hier werden u. a. Vorfallsbehandlung und Forensik verortet – der organisatorische Rahmen für sicherheitsrelevante Prüftätigkeiten. (LF4) 
Die DSGVO verlangt ferner ein **„Verfahren zur regelmäßigen Überprüfung, Bewertung und Evaluierung der Wirksamkeit“** der TOM – rechtlicher Anker für wiederkehrende Sicherheitstests. (LF4) 
Für Betreiber kritischer Infrastrukturen schreibt das **BSIG** eine **regelmäßige Sicherheitsüberprüfung (mind. alle zwei Jahre)** vor – ein typischer Auslöser für vertiefte technische Prüfungen. (LF4) 
Im Bereitstellungskontext wird **Shift-Left** gefordert: **Sicherheitstests früh und kontinuierlich** in den Entwicklungs-/Bereitstellungsprozess integrieren. (LF9) 

---

## 🎯 Zweck & Einordnung (im Sinne der PDFs)

* **Zweck der Prüfungen:** **Wirksamkeit** umgesetzter Sicherheitsmaßnahmen belegen, **Schwachstellen** identifizieren und nachweisbar **bewerten** – mit kontinuierlicher Wiederholung. (LF4)
* **Prozessrahmen:** **DER-Schicht** (Überprüfung/Detektion/Reaktion) im IT-Grundschutz, **Art. 32 DSGVO** (regelmäßige Evaluierung) und ggf. **BSIG** (Pflichten für KRITIS). (LF4)
* **Zeitpunkt:** **Shift-Left** – Sicherheitsprüfungen **früh** und **wiederholt** in den Entwicklungs-/Bereitstellungszyklus integrieren. (LF9) 

---

## ⚙️ Praktische Prüfschritte (Beispiele aus dem Material)

> Die PDFs zeigen konkrete **Werkzeuge für Funktions-/Sicherheitsprüfungen** im Netzwerk- und Serverumfeld. Diese lassen sich (je nach Zielsetzung) als vorbereitende oder begleitende Prüfhandlungen im Umfeld eines Penetrationstests einsetzen.

### 1) Offene Dienste/Verbindungen sichten (Host-/Netzebene)

**`netstat`** zur Analyse **aktiver TCP-Verbindungen** bzw. lauschender Dienste:

```bash
netstat -an | grep tcp
```

Zeigt z. B. LISTEN-Ports und bestehende Verbindungen – Grundlage, um unnötige Angriffsflächen zu erkennen. (LF9) 

**`nmcli`** (NetworkManager CLI) für **Adapter-/IP-/Routing-Sicht**:

```bash
nmcli device
nmcli
nmcli connection
```

Ermöglicht eine schnelle Ist-Aufnahme der Netz-Anbindung eines Systems. (LF9) 

### 2) Basis-Härtung prüfen und erzwingen (Server)

**UFW Firewall** gemäß Beispiel **nur notwendige Ports zulassen** und Status prüfen:

```bash
sudo su
apt install ufw
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp
ufw default deny incoming
ufw enable
systemctl restart ufw
ufw status
```

Die PDFs nennen diese Schritte als Maßnahme beim **Server-Härten**; die Wirksamkeitsprüfung erfolgt anschließend über Verbindungs-/Port-Checks. (LF9) 

---

## 🧪 Vorgehenslogik für Sicherheitstests (aus den PDFs abgeleitet)

1. **Überprüfung planen und durchführen** – in DER-Schicht verankert, mit Fokus auf **Detektion/Überprüfung/Reaction**. (LF4) 
2. **Schwachstellen identifizieren** – als Teil der **Wirksamkeitsprüfung** der TOM. (LF4) 
3. **Bewerten & dokumentieren** – DSGVO fordert **regelmäßige Überprüfung/Bewertung/Evaluierung**. (LF4) 
4. **Früh & kontinuierlich testen** – **Shift-Left**: Sicherheitstests in **Anforderungen → Design → Coding/Orchestrierung → Bereitstellung** zyklisch einbetten. (LF9) 

> Hinweis: Ein detailliertes „Pentest-Phasenmodell“ (Reconnaissance, Exploitation etc.) wird in den PDFs **nicht** beschrieben; die oben genannten Punkte bilden die **im Material geforderten** Prüf- und Bewertungsprinzipien ab. (LF4, LF9)

---

## 📋 Dokumentation & Nachweis

* **Audit/Prüfung/Evaluierung/Zertifizierung** werden als Mittel zur **Wirksamkeitskontrolle** genannt – Ergebnisse sind nachvollziehbar zu dokumentieren. (LF4) 
* **Rechtlicher Rahmen:** **Art. 32 DSGVO** (regelmäßige Evaluierung) und **BSIG § 8a** (periodische Überprüfung für KRITIS). (LF4)

---

## 🧠 Begriffsklärungen (aus den PDFs)

| Begriff                          | Definition (aus dem Material)                                                                                                   | Quelle |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **DER-Schicht**                  | Bausteine zur **Überprüfung** der Sicherheitsmaßnahmen, **Detektion** von Vorfällen und **Reaktion** (inkl. Forensik-Vorsorge). | LF4    |
| **Wirksamkeitsprüfung der TOM**  | **Regelmäßige Überprüfung, Bewertung, Evaluierung** der Maßnahmen nach **Art. 32 DSGVO**.                                       | LF4    |
| **Schwachstellenidentifikation** | Bestandteil der **Wirksamkeitsüberprüfung** (TOM) und Grundlage für Maßnahmenanpassung.                                         | LF4    |
| **Shift-Left-Sicherheitstests**  | **Frühe & wiederholte** Einbindung von **Sicherheitstests** im Entwicklungs-/Bereitstellungsprozess.                            | LF9    |
| **BSIG-Überprüfungspflicht**     | KRITIS-Betreiber müssen **mind. alle zwei Jahre** ihre IT-Sicherheit überprüfen lassen.                                         | LF4    |

---

## 🧩 Mini-Beispiele (aus den PDFs, direkt anwendbar)

```bash
# Aktive TCP-Listener/Verbindungen prüfen (LF9)
netstat -an | grep tcp
```

(LF9) 

```bash
# Netzwerkadap­ter/Verbindungen sichten (LF9)
nmcli device
nmcli
nmcli connection
```

(LF9) 

```bash
# Server-Basis-Härtung mit UFW; nur Web+SSH zulassen (LF9)
apt install ufw
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp
ufw default deny incoming
ufw enable
ufw status
```

(LF9) 

---

### Fazit

Auch wenn der Begriff **„Penetrationstest“** im Material nicht explizit fällt, fordern die PDFs **genau die dafür relevanten Prüfprinzipien**: **regelhafte Wirksamkeitsprüfungen**, **Schwachstellenidentifikation**, **frühe/zyklische Sicherheitstests** sowie **dokumentierte Audits** – im IT-Grundschutz (DER), in der DSGVO (Art. 32) und, wo zutreffend, im BSIG. (LF4, LF9)
