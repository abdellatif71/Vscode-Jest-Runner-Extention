import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
  console.log('My Jest Runner Extension is now active!');

  // Registriere den Befehl "extension.runJestTest"
  let disposable = vscode.commands.registerCommand('extension.runJestTest', () => {
    // Hole den aktuell geöffneten Editor
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('Kein aktiver Editor gefunden.');
      return;
    }

    // Hole den Dateipfad der aktuellen Datei
    const filePath = editor.document.uri.fsPath;

    // Erstelle den Jest-Befehl, z.B.:
    // (Anpassung je nach Bedarf, hier als Beispiel: npm run test -- <filename>)
    const jestCommand = `npm run test -- ${filePath}`;

    // Zeige eine Info-Nachricht
    vscode.window.showInformationMessage(`Führe Jest-Test aus: ${jestCommand}`);

    // Führe den Befehl in der integrierten Konsole aus
    exec(jestCommand, (error, stdout, stderr) => {
      if (error) {
        vscode.window.showErrorMessage(`Fehler beim Ausführen des Tests: ${error.message}`);
        return;
      }

      // Zeige das Ergebnis im Output-Fenster an
      const outputChannel = vscode.window.createOutputChannel('Jest Runner');
      outputChannel.clear();
      outputChannel.appendLine(stdout);
      if (stderr) {
        outputChannel.appendLine(stderr);
      }
      outputChannel.show();
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
