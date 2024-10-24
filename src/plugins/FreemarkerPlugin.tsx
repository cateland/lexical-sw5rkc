import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';
import { $createIfDirectiveNode, IfDirective } from './IfDirectiveNode';
import {
  $getSelection,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  LexicalCommand,
} from 'lexical';
import { $wrapNodes } from '@lexical/selection';

export const WRAP_WITH_FM_IF: LexicalCommand<undefined> = createCommand();

export type IfDirectiveMatch = Readonly<{
  position: number;
  shortcode: string;
  unifiedID: string;
}>;

export function FreemarkerPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([IfDirective])) {
      throw new Error(
        'TwitterPlugin: TweetNode not registered on editor (initialConfig.nodes)'
      );
    }

    return editor.registerCommand<undefined>(
      WRAP_WITH_FM_IF,
      () => {
        console.dir('handle WRAP_WITH_FM_IF');
        const selection = $getSelection();
        if (selection) {
          $wrapNodes(selection, $createIfDirectiveNode());
        }
        return true;
      },
      COMMAND_PRIORITY_EDITOR
    );
  }, [editor]);
  return null;
}
