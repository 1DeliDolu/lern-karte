# 🗄️ **Datenbanken** <span style="background:#e0f0ff;">LF9/LF8</span>

**Datenbanken** dienen als persistente **Datenhaltung** für viele **Webanwendungen**; in den Unterlagen wird explizit genannt: „Viele Webanwendungen benötigen eine **Datenbank**, z. B. **MySQL**, und einen Webserver, z. B. apache2.“ *(LF9)* 
Im **Webhosting/Control-Panel**-Umfeld ist **DB-Webzugriff per Browser** vorgesehen; die **Anzahl Datenbanken** begrenzt die **zahl der installierbaren Webanwendungen**. *(LF9)* 
Für den Betrieb stehen Provider-**Images/Stacks** (u. a. **LAMP** = Linux, Apache, **MySQL**, PHP) bereit; **Back-up-Speicher** dient „täglichen Sicherungen (Konfigurationsdateien, **Datenbankexporte**, etc.)“. *(LF9)* 

---

## 🛡️ Verfügbarkeit – Schwerpunkte für Datenbanken

**Speicher- & Systemauswahl (NAS/SAN/DAS):**

* **NAS** (Dateiserver im LAN): einfache Anbindung, dafür **LAN-Belastung**; **SAN**: **hohe Transferraten** für alle Server (hochpreisig); **DAS**: **kostengünstig**, aber **exklusiv** an einem Host. *(LF9)* 
* **NAS-Auswahlkriterien**: **RAID-Level** (Hot-Swap von Laufwerken per **Hardware-RAID**), **OpenZFS** (Filesystem mit **Snapshots**, **Clones**, **Remote Replication**, **RAID-Z**), **Link-Aggregation** zur **Durchsatzerhöhung**, **redundantes Netzteil**, ggf. **VM-Unterstützung** per Weboberfläche. *(LF9)* 

**Redundanz & Datensicherheit:**

* **RAID** erhöht ab Level 1 die **Verfügbarkeit** der Daten (zusammengeschaltete Platten → eine logische Platte). *(LF3)* 
* **RAID-Kombinationen** (z. B. **RAID 10**, **RAID 51**) und **Hardware-/Software-RAID** werden erläutert (Leistung vs. Kosten). *(LF3)* 
* **Back-up-Speicher** beim Provider explizit zur **Ablage von Datenbankexporten** vorgesehen. *(LF9)* 

**Stromversorgung & Schutz:**

* **USV** nach **DIN EN 62040-3** (Klassen **VFI/VI/VFD**) schützt Server/Netze; **Betriebszeit** (z. B. 20 Minuten je Server) und **Gesamtlast** sind auszulegen. *(LF9)* 

**Betrieb im Hosting/Panel:**

* **Cron-Jobs**: „Jede Webanwendung benötigt einen Cron-Job“ – Anzahl **mindestens** gleich **Anzahl Datenbanken** (automatisierte DB-Aufgaben, z. B. Wartung/Jobs). *(LF9)* 
* **NVMe/SSD/HDD-Speicher** je nach Paket; **DB-Webzugriff** über den **Browser**. *(LF9)* 

---

## 🧭 Datenbank-Bereitstellung im Kontext von Webdiensten

* **Stacks/Images**: u. a. **LAMP**, **cPanel/WHM**, **Plesk** – erleichtern **DB-gestützte Webapps**. *(LF9)* 
* **Control-Panels**: **DB-Anzahl**, **DB-Webzugriff**, **Domains/Subdomains**, **SSL**, **Cron-Jobs**, **DDoS-Schutz**, **DNSSEC** – alles **panelseitig** konfigurierbar. *(LF9)* 

---

## ☁️ Cloud-Datenbanken (Überblick aus LF8)

* **DBaaS-Portfolios** (Beispiele): Relationale **MySQL/PostgreSQL/SQL Server/Oracle** und **NoSQL** (z. B. **DynamoDB**, **Cosmos DB**, **Bigtable**) – inkl. **Migrationstools** (z. B. **AWS DMS**). *(LF8)* 
* **Verwaltete** und **autonome Cloud-Datenbanken**: Automatisierung (Optimierung, **Backups**, **Updates**), **SLA** u. a. bzgl. **Ausfallsicherheit**; automatische **Fehlererkennung** und **Skalierung**. *(LF8)* 
* **ACID vs. BASE**: **Relationale DBs** (ACID) sind weiterhin unverzichtbar, **BASE/NoSQL** erhöht **Verfügbarkeit** bei Aufgabe absoluter Konsistenz – **Eignung** abhängig vom **Anwendungsfall**. *(LF8)* 

---

## 🧪 **Beispielcode** (MySQL, aus LF8)

### Tabelle anlegen *(LF8)* 

```java
public class Program {
  public static void main(String[] args) {
    MySQLConnection mySqlConnection = null;
    try {
      mySqlConnection = new MySQLConnection();
      mySqlConnection.create();

      String sqlStatement =
        "CREATE TABLE Kontinent" +
        "(KontinentID INTEGER not NULL, " +
        "Bezeichnung VARCHAR(100), " +
        "PRIMARY KEY (KontinentID))";

      mySqlConnection.updateDB(sqlStatement);
      System.out.println("SQL-Anweisung erfolgreich ausgeführt");
    } catch (Exception e) {
      e.printStackTrace();
    } finally {
      if (mySqlConnection != null) { mySqlConnection.close(); }
    }
  }
}
```

### ResultSet auswerten *(LF8)* 

```java
ResultSet rs = sqlStatement.executeQuery(
  "SELECT O.Name, O.Einwohner, L.Name " +
  "FROM Ort O INNER JOIN Land L ON O.LandID = L.LandID");

while (rs.next()) {
  String ortsName = rs.getString("Name");
  int einwohner  = rs.getInt("Einwohner");
  String land    = rs.getString("Name");
  System.out.format("%s, %d, %s%n", ortsName, einwohner, land);
}
```

---

## 📚 Begriffstabelle

| **Begriff**               | **Definition**                                                                    | **Quelle** |
| ------------------------- | --------------------------------------------------------------------------------- | ---------- |
| **Datenbank für Webapps** | „Viele Webanwendungen benötigen eine **Datenbank** (z. B. **MySQL**).“            | LF9        |
| **DB-Webzugriff**         | Zugriff auf Datenbanken **per Browser** im Control-Panel.                         | LF9        |
| **Back-up-Speicher**      | FTP-Speicher für **tägliche Sicherungen** inkl. **Datenbankexporte**.             | LF9        |
| **NAS/SAN/DAS**           | Vergleich: **LAN-Belastung** vs. **hohe Transferraten** vs. **exklusiv am Host**. | LF9        |
| **RAID**                  | Erhöht (ab **Level 1**) die **Verfügbarkeit** der Daten.                          | LF3        |
| **OpenZFS**               | Filesystem mit **Snapshots**, **Clones**, **Remote Replication**, **RAID-Z**.     | LF9        |
| **Link-Aggregation**      | Parallelnutzung mehrerer NIC-Ports zur **Durchsatzerhöhung**.                     | LF9        |
| **USV (VFI/VI/VFD)**      | Stromschutzklassen für **Server/Netze**; **Betriebszeit** bemessen.               | LF9        |
| **DBaaS/Autonom**         | Cloud-Datenbanken mit **Automatisierung**, **SLA**, **Skalierung**.               | LF8        |
| **ACID/BASE**             | **ACID** (Konsistenz) vs. **BASE** (höhere **Verfügbarkeit**, weiche Konsistenz). | LF8        |

---

## ⚙️ Prozessschritte (Verfügbarkeitsfokus)

1. **Stack wählen & bereitstellen**: z. B. **LAMP**/**cPanel/Plesk** (DB inklusive). *(LF9)* 
2. **Storage planen**: **NAS/SAN/DAS** vergleichen; **RAID**, **OpenZFS-Snapshots/Replication**, **Link-Aggregation**, **Redundanz** (Netzteile). *(LF9/LF3)*   
3. **Backups einrichten**: **Back-up-Speicher** nutzen; **regelmäßige DB-Exporte**. *(LF9)* 
4. **Betrieb absichern**: **USV** dimensionieren; **Cron-Jobs** pro Anwendung/DB. *(LF9)*  
5. **Administration**: **DB-Webzugriff** (Browser), **NVMe/SSD** je nach Panel-Paket. *(LF9)* 

---

## ✅ Kurzfazit

Für **Datenbanken** nennt LF9/LF3/LF8 klare Bausteine zur **Verfügbarkeit**: **stabile Speicher-Infrastruktur** (**NAS/SAN/DAS**, **RAID**, **OpenZFS**), **regelmäßige Backups/DB-Exporte**, **USV-Schutz**, **automatisierte Jobs** (*Cron*), sowie **Panel-Features** (DB-Anzahl, Browser-Zugriff). Für Cloud-Szenarien liefern **DBaaS/autonome DBs** Automatisierung und **SLA**-gestützte Ausfallsicherheit – **ACID/BASE** ist je nach **Use-Case** abzuwägen. *(LF9, LF3, LF8)*       


