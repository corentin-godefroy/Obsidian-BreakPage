import { Editor, Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
	onload() {
		this.addCommand({
			id: "insert-break-page",
			name: "Insert break page",
			hotkeys: [],
			editorCallback: (editor: Editor) => {
				const currentPosition = editor.getCursor();
				editor.replaceRange(
					'<div class="page-break" style="page-break-before: always;"></div>\n',
					currentPosition
				);
				editor.setCursor(editor.getCursor().line + 1, 0);
			},
		})
	}
}
