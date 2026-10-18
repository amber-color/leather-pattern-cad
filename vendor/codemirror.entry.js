// CodeMirror 6, bundled for Parametric Pattern Plotter (loaded only when the code panel opens)
export {EditorView,keymap,Decoration,ViewPlugin,lineNumbers,highlightActiveLineGutter,highlightSpecialChars,drawSelection,dropCursor,rectangularSelection,crosshairCursor,highlightActiveLine} from '@codemirror/view';
export {EditorState,StateEffect,StateField,Compartment,Prec} from '@codemirror/state';
export {json,jsonParseLinter} from '@codemirror/lang-json';
export {autocompletion,completeFromList,startCompletion,closeBrackets,closeBracketsKeymap,completionKeymap} from '@codemirror/autocomplete';
export {linter,lintGutter,forEachDiagnostic,lintKeymap} from '@codemirror/lint';
export {HighlightStyle,syntaxHighlighting,syntaxTree,foldAll,unfoldAll,foldGutter,codeFolding,foldKeymap,foldEffect,unfoldEffect,foldedRanges,foldable,indentOnInput,bracketMatching,defaultHighlightStyle} from '@codemirror/language';
export {tags} from '@lezer/highlight';
export {indentWithTab,history,defaultKeymap,historyKeymap} from '@codemirror/commands';
export {searchKeymap,highlightSelectionMatches} from '@codemirror/search';
