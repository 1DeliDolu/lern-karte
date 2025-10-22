# 🗂️ Versionsmanagement des Quellcodes <span style="background:#e0f0ff;">LF7, LF5</span>

**Versionsverwaltung** ist ein Entwicklungswerkzeug zur **Speicherung und Verwaltung** der Dateien und Dokumente, die bei der Softwareentwicklung entstehen. Damit werden Änderungen nachvollziehbar protokolliert und ältere Stände bei Bedarf wiederhergestellt. (LF5) 

Ein verbreitetes Werkzeug ist **Git**: ein 2005 von **Linus Torvalds** entwickeltes, unter **GNU-GPLv2** veröffentlichtes **Versionsverwaltungssystem**. Charakteristisch ist ein **zentrales Repository** (Projektarchiv) und für jede beteiligte Person eine **lokale Arbeitskopie**. Änderungen können lokal erstellt, mit anderen ausgetauscht und in das zentrale Repository aufgenommen werden. (LF7) 

Git ist außerdem ein zentraler Baustein im **DevOps-Prozess**: In der Phase **Code** sorgen Versionskontrollsysteme für **Momentaufnahmen aller Dateien**, sodass **ältere Versionen jederzeit wiederherstellbar** sind. (LF7) 

---

## ⚙️ Prozessschritte im Quellcode-Versionsmanagement (Git)

1. **Repository anlegen / klonen**
   `git init` legt lokal ein Git-Repository an. `git clone` erzeugt eine **Arbeitskopie** eines bestehenden Repositorys (z. B. `git clone https://…/git-repository`). (LF7) 
2. **Status prüfen**
   `git status` zeigt den aktuellen Zustand (geänderte/noch nicht erfasste Dateien). (LF7) 
3. **Dateien vormerken und bestätigen**
   `git add` meldet neue/geänderte Dateien für den nächsten **Commit** an; `git commit` bestätigt sie und nimmt sie in den **HEAD** auf (Zeiger auf den letzten wirksamen Commit im aktuellen **Branch**). (LF7) 
4. **Commits korrigieren/zurücknehmen**
   `git commit --amend` ersetzt den letzten Commit; `git reset --soft HEAD-1` macht den letzten Commit rückgängig (Dateien bleiben vorgemerkt); `git reset --hard HEAD-1` verwirft die Arbeitsdaten vollständig. (LF7) 
5. **Historie einsehen**
   `git log` listet Commits inkl. **SHA-1**, **Autor**, **Datum**, **Commit-Nachricht**. (LF7) 
6. **Arbeiten mit Remote / Hauptzweig**
   `git push origin master` überträgt Commits vom lokalen in den **Hauptzweig („master“)**; `git pull` holt Änderungen aus dem Hauptverzeichnis ins lokale Repository. (LF7) 
7. **Markierungen setzen**
   `git tag` zeigt **Tags** (markierte Punkte in der Historie). (LF7) 
8. **Branching & Merging**
   `git branch <name>` erstellt einen **Branch** (Projektzweig), `git checkout <name>` wechselt dorthin; zum **Zusammenführen**: in den Zielzweig wechseln (z. B. `git checkout master`), dann `git merge <branch>`; nicht mehr benötigte Zweige: `git branch -d <name>`. (LF7) 

> **Hinweis zur Projektdokumentation:** In der **Systemdokumentation** werden u. a. **Programmversionen** und die **Versionsverwaltung** festgehalten – das gehört ausdrücklich zum Pflichtumfang der Entwicklungsdokumente. (LF5) 

---

## 🧪 Ziele & Nutzen

* **Änderungsnachvollzug & Wiederherstellbarkeit:** Protokollierung vieler paralleler Änderungen; **jederzeitige Wiederherstellung** älterer Stände. (LF7)  
* **Teamarbeit & Releases:** Branches und Tags unterstützen geordnetes Arbeiten bis zur **Freigabe (Release)** und **Bereitstellung (Deploy)** im DevOps-Zyklus. (LF7) 

---

## 🧩 Beispiel: Minimaler Git-Workflow (CLI)

Die folgenden Befehle illustrieren die in den Lernfeldern beschriebenen Schritte (Kommentierung inline). (LF7) 

```bash
# 1) Neues Repo anlegen oder bestehendes klonen
git init
# oder
git clone https://test.website/git-repository

# 2) Status prüfen
git status

# 3) Datei vormerken und committen
git add Git-Test.txt
git commit -m "Initialer Stand"

# 4) Commit nachbessern bzw. zurücknehmen
git commit --amend -m "Nachbesserung am letzten Commit"
git reset --soft HEAD-1      # letzten Commit zurücknehmen (Änderungen bleiben vorgemerkt)
git reset --hard HEAD-1      # Arbeitsdaten vollständig verwerfen

# 5) Historie ansehen
git log

# 6) Branch erstellen, wechseln, zusammenführen, löschen
git branch feature_x
git checkout feature_x
# ... Arbeit ...
git checkout master
git merge feature_x
git branch -d feature_x

# 7) Änderungen austauschen
git push origin master
git pull
# 8) Tags anzeigen
git tag
```

(Alle Befehle und Bedeutungen wie in den Übersichten zu „Die wesentlichen Git-Befehle“.) (LF7) 

---

## 📚 Begriffe kompakt

| Begriff                   | Definition (aus den Lernfeldern)                                                                        | Quelle |
| ------------------------- | ------------------------------------------------------------------------------------------------------- | ------ |
| **Repository**            | Digitales **Verzeichnis/Archiv** eines Projekts; zentrales Repository + lokale Arbeitskopie pro Nutzer. | LF7    |
| **Commit**                | Bestätigt per `git add` vorgemerkte Änderungen; Aufnahme in den **HEAD**.                               | LF7    |
| **HEAD**                  | Index/Zeiger auf den **letzten wirksam gewordenen Commit** im aktuellen **Branch**.                     | LF7    |
| **Branch (Projektzweig)** | Paralleler Entwicklungszweig; Erstellen/Wechseln mit `git branch` / `git checkout`.                     | LF7    |
| **Merge**                 | **Zusammenführen** von Zweigen (z. B. `git checkout master` → `git merge <branch>`).                    | LF7    |
| **Tag**                   | **Markierung** ausgewählter Punkte in der Historie (Anzeige mit `git tag`).                             | LF7    |
| **master**                | Bezeichnung des **Hauptverzeichnisses/-zweigs** im Beispiel; `git push origin master`.                  | LF7    |

---

## 🧭 Methoden & Werkzeuge im Umfeld

* **IDE-Unterstützung:** Moderne **IDEs** bündeln u. a. **Projekt- und Versionsverwaltung** unter einer Oberfläche und erleichtern so die Entwicklerarbeit. (LF5) 
* **Projekt- & Prozessbezug:** In **DevOps** unterstützt Versionskontrolle die Phasen von **Plan** bis **Monitor**; insbesondere den **Code**-Schritt mit verlässlicher Versionssicherung. (LF7) 

---

## 🎯 Praktische Hinweise aus den Lernfeldern

* **Dokumentation nicht vergessen:** **Programmversionen & Versionsverwaltung** gehören in die **Systemdokumentation** des Projekts. (LF5) 
* **Team-Transparenz:** Die in LF7 gezeigten **Git-Workflows** (von der ersten Entwicklung über das erste Release bis zur Weiterentwicklung) visualisieren die Zusammenarbeit mehrerer Entwickler mit dem Produkt. (LF7) 

---

## ✅ Mini-Check (aus den Lernfeldern abgeleitet)

* Wozu dient `git commit --amend`? → **Ersetzt** den letzten Commit durch einen verbesserten. (LF7) 
* Was zeigt `git log`? → **SHA-1, Autor, Datum, Commit-Meldung** in umgekehrt chronologischer Reihenfolge. (LF7) 
* In welcher Doku werden **Programmversionen** geführt? → **Systemdokumentation**. (LF5) 

---

Wenn du möchtest, stelle ich dir daraus eine **Schritt-für-Schritt-Übung** (z. B. *Repository anlegen → Feature-Branch → Merge → Tag & Release*) zusammen – exakt mit den **LF-Befehlen** und **Screenshots** aus deinem Setup.

---

## [➡️ Nächstes](../3-Datenbanken-modellieren-und-erstellen/)