# Braleïra
##  Dokumentation
 Webtechnologien Wintersemester 2021/2022 
Dozent: Prof. Eiglsperger


[Link Braleïra](https://braleira.herokuapp.com)

### Umsetzung der Arbeitsaufträge - Unser Vorgehen
Zu Anfang des Semesters haben wir viel Brainstorming betrieben und auf Papier skizziert, wie unsere Seite umgesetzt werden soll und wie unsere Funktionalitäten gestaltet und eingebunden werden sollten.
Mit dem Fortschreiten der Vorlesung und den dazukommenden technischen Neuerungen und Funktionalitäten haben wir angefangen ein GoogleDocs Dokument als ToDo Liste zu pflegen. Dieses haben wir dann nach dem Kanban Modell bearbeitet und fertige Punkte der Liste unter den Reiter Done geschoben.
Das Dokument hat uns zusätzlich immer ermöglicht zu sehen was für Programmiersprachen und Anwendungsarten als Anforderung der Seite gestellt waren.
 
In täglichen Webex-Meetings haben wir Ansätze besprochen, gemeinsam weitere Lösungen programmiert und Aufgabenteilung betrieben. 
Bei Problemen haben wir die zur Verfügung gestellten Demos aus Git herangezogen und recherchiert.


### Zusammenfassung, Beschreibung der Funktionalität
+ BH-Größenquiz, dass die passenden Größen verschiedener Marken heraussucht 
	zu finden unter: `views/pages/size/quiz.ejs` und `views/pages/size/empfehlungen.ejs`
+ Anleitung für richtiges Vermessen + Auswerten an Hand der Größentabelle
	zu finden unter: `views/pages/size/quiz.ejs` und `views/pages/size/empfehlungen.ejs`
+ Angabe von Passformproblemen und Präferenzen
	zu finden unter: `views/pages/size/quiz.ejs` und `views/pages/size/empfehlungen.ejs`
+ BH Einträge in Datenbank anzeigen, suchen und pflegen (CRUD)
	zu finden unter den Seiten bei: `views/pages/bra/`
+ Zusätzliche Funktionen wie Login, Impressum und Kontaktseite 
 
 
### Highlights und WOW-Faktor der Seite
 
Es gibt sehr viele Seiten, die Frauen generell suggerieren, sie hätten die falsche BH-Größe und der BH muss anders sitzen. Die meisten Webseiten, Marken oder professionelle Beratungen im Laden, beginnen mit einer Messung und dem Kommentar “die Größe, die sie tragen, ist die falsche”. 
In unseren Augen gibt es jedoch keine “perfekte” BH-Größe, also ein richtig und ein falsch, sondern jede Frau entscheidet am besten selbst, was sie mag und was sie nicht mag, was ihr wichtig ist und welcher BH ihrer Meinung nach gut passt.
 
Mit unserem Quiz, dem Highlight der Webseite, ändern wir also den Ansatz, wie solche Beratungen ablaufen.
Einerseits schaffen wir das, indem wir der Kundin die Möglichkeit geben, anzugeben, was ihr bei der Passform des BHs wichtig ist, was die Kriterien sind, nachdem sie beurteilt, ob ein BH gut passt und welche Wünsche sie bezüglich der Passform eines BHs hat. 
Andererseits sammeln wir Passformdaten zu bereits gekauften und getragenen BHs der Kundin. Dabei stellen wir Fragen wie, welche Größe in welchem Modell bereits gut passen und was vielleicht trotzdem noch stört und verbessert werden kann. 
 
Aus diesen persönlichen Angaben und gesammelten Erfahrungsberichten können wir die in den Augen der Kundin perfekte BH-Größe empfehlen, was wir in unserer Empfehlungsseite am Ende des Quizzes andeuten. 
 
 
### Technische Implementierung
##### Quiz mit VUE zur Single Page Application
 
##### Javascript + jQuery
wurden von uns zum einen für das setzen der Verbindungen zum Backend verwendet und zum anderen um Funktionen aus dem Frontend durchführen zu können. Des weiteren haben wir außerdem beispielsweise die Kontaktseite dynamisch mit den beiden “Helfern” erzeugt.
Allgemein haben wir die Verwendung von vue jedoch jQuery vorgezogen, da wir dieses Framework besser und einfacher fanden. 
 
##### Style mit Bootstrap und CSS
Unsere Webseite haben wir größtenteils mit Bootstrap designt, was vieles vereinfacht hat und Content direkt dynamischer reagieren lies.
Natürlich haben wir auch eigene CSS-Klassen erstellt, welche im style.css zu finden sind.
Alles haben wir jedoch nicht als Klasse erzeugt, da wir das Sheet nicht mit nur einmal gebrauchten Klassen “zumüllen” wollten.
Das responsive Anpassen des Seitenlayouts auf unterschiedliche Bildschirmgrößen wie z.B. ein Handy haben wir nach dem Desktop First Ansatz integriert und dann mit Media Queries an verschiedene Bildschirme angepasst. 


##### Tafelaufschriebe -> zwei Arten Verbindungen zum Backend zu machen

| | Client |   | Server |
| -----       |    -----   |          ----- | ----- |
| P1      | HTML   | Link  HTML| Routen, Action/Controller, View  |
| P2   | Javascript |  AJAX / Post; JSON     | DB     |

P1 haben wir beim Quiz verwendet, P2 bei der Übersicht der BH-Einträge, sowie beim Ändern und Löschen der Einträge und bei der Suche eines spezifischen Eintrags.


##### Datenbank - Aufbau, Fremdschlüsselbeziehungen
##### Data Validation
+ ###### Frontend
+ ###### Backend

##### Benutzergruppen und Rechte
##### Cookies
Cookies haben wir ebenfalls auf der Seite implementiert. Beim ersten Laden der Seite poppen diese auf. Sie können direkt akzeptiert oder durch Klicken auf “Cookies einstellen” noch individuell angepasst werden.
Sind sie einmal akzeptiert, muss der User kein weiteres Mal akzeptieren, da sie an den Browser gekoppelt sind.
Umgesetzt haben wir dies mit zwei Modalen, die auf “show” oder “hide” gesetzt werden, je nachdem welche Funktion aufgerufen wird bzw. welcher Button gedrückt wird.
Zu finden ist die Programmierung unter `view/layouts/layout.ejs`.

##### Geschäftsprozess mit Session über mehrere Seitenaufrufe
#### Funktionalität
##### Geschäftsprozesse auflisten:
+ ###### Benutzer füllt Quiz aus
+ ###### Admin lässt sich liste angeben (CRUD)
+ ###### Admin löscht BH-Eintrag (CRUD)
+ ###### Admin bearbeitet BH-Eintrag (CRUD) 
+ ###### Admin erstellt BH-Eintrag (CRUD)
##### Inhaltliche Anforderungen
+ ###### Impressum ->Link
+ ###### Kontaktseite -> Link
+ ###### Optimieren Sie die Begrüßungsseite nach SEO Kriterien 
Der Analyse mit Google Lighthouse entsprechend haben wir noch weitere Meta-Tags in die Layout-Datei `view/layouts/layout.ejs` unserer Website geschrieben. Mit Hilfe dieser Tags machen wir es dem Nutzer so leichter, uns durch eine Suche der folgenden Schlüsselwörter zu finden:
+ bra,
+ BHs,
+ BH,
+ BH-Größe,
+ bhgröße,
+ passender Bh,
+ bh-Quiz,
+ braleira, 
+ bhgröße ausmessen, 
+ richtige größe bh
Man sollte nicht mehr als 10 Keywords verwenden, weswegen wir uns auf die oben gelisteten beschränkt haben. 
Außerdem haben wir eine Beschreibung unserer Website hinzugefügt: “Finde einen perfekt passenden BH mit Hilfe unseres Größenquizzes.”
+ ###### Verlinken Sie Ihre Webseite mit Social Media Accounts
+ ###### Analysiere die Webanwendung mit Google Lighthouse 




