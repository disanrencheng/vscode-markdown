'use strict';

import { languages, ExtensionContext, IndentAction } from 'vscode';
import * as formatting from './formatting';
import * as toc from './toc';
import * as preview from './preview';
import * as print from './print';
import * as completion from './completion';
import * as listEditing from './listEditing'

export function activate(context: ExtensionContext) {
    // Shortcuts
    formatting.activate(context);
    // Toc
    toc.activate(context);
    // Auto show preview to side
    preview.activate(context);
    // Print to PDF
    // print.activate(context);
    // Completion items
    completion.activate(context);

    listEditing.activate(context);

    languages.setLanguageConfiguration('markdown', {
        comments: { blockComment: ["<!-- ", " -->"] }
    });
}

export function deactivate() { }
