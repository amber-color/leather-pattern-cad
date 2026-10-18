// CodeMirror 6, bundled for Parametric Pattern Plotter (loaded only when the code panel opens)
export {EditorView,keymap,Decoration,ViewPlugin} from '@codemirror/view';
export {EditorState,StateEffect,StateField,Compartment,Prec} from '@codemirror/state';
export {basicSetup} from 'codemirror';
export {json,jsonParseLinter} from '@codemirror/lang-json';
export {autocompletion,completeFromList,startCompletion} from '@codemirror/autocomplete';
export {linter,lintGutter,forEachDiagnostic} from '@codemirror/lint';
export {HighlightStyle,syntaxHighlighting,syntaxTree,foldAll,unfoldAll} from '@codemirror/language';
export {tags} from '@lezer/highlight';
export {indentWithTab} from '@codemirror/commands';
