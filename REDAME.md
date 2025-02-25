My Jest Runner Extension

Beschreibung

Diese VSCode-Extension erlaubt es, spezifische Jest-Tests direkt aus dem Editor auszuführen oder zu debuggen. Sie bietet eine einfache und intuitive Möglichkeit, Tests zu starten, ähnlich wie "vscode-jest-runner".

Funktionen

Testausführung & Debugging: Starte und debugge Tests direkt aus dem Kontextmenü oder mit CodeLens.

Unterstützung für Monorepos & Workspaces: Funktioniert mit Yarn, npm und anderen Paketmanagern.

Individuelle Konfiguration: Anpassbare Jest-Befehle und Debug-Optionen.

Installation

Klone dieses Repository:

git clone https://github.com/dein-user/my-jest-runner.git

Installiere die Abhängigkeiten:

npm install

Starte die Extension im Entwicklungsmodus:

Öffne das Projekt in VSCode.

Gehe zu "Run" > "Start Debugging" (oder drücke F5).

Eine neue VSCode-Instanz mit der geladenen Extension wird gestartet.

Verwendung

Test ausführen

CodeLens: Über jedem Test erscheint eine Schaltfläche „Run Test“.

Kontextmenü: Rechtsklick auf eine Testfunktion → "Run Jest Test".

Befehlspalette (Strg+Shift+P): Run Jest Test eingeben.

Debugging

CodeLens: Klicke auf „Debug Test“.

Befehlspalette (Strg+Shift+P): Debug Jest Test eingeben.

Konfiguration

Falls du spezielle Anpassungen benötigst, kannst du diese in settings.json vornehmen:

{
  "jestrunner.jestCommand": "npm run test --",
  "jestrunner.debugOptions": {
    "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
    "runtimeArgs": [
      "test",
      "${fileBasename}",
      "--runInBand",
      "--no-cache",
      "--watchAll=false",
      "--color"
    ]
  }
}

Entwicklung & Beitrag

Falls du zur Entwicklung beitragen möchtest:

Erstelle einen Fork dieses Repos.

Erstelle eine neue Branch für deine Änderungen.

Sende einen Pull Request!

Lizenz

MIT License