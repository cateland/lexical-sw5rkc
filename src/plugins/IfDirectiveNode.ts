import { ElementNode, LexicalNode } from 'lexical';

export class IfDirective extends ElementNode {
  static getType(): string {
    return 'fm-directive-if';
  }

  static clone(node: IfDirective) {
    return new IfDirective(node.key);
  }

  createDOM(): HTMLElement {
    const dom = document.createElement('div');
    return dom;
  }

  updateDOM(_prevNode: IfDirective, _dom: HTMLElement): boolean {
    return false;
  }
}

export function $createIfDirectiveNode(): IfDirective {
  return new IfDirective();
}

export function $isIfDirectiveNode(
  node: LexicalNode | null | undefined
): node is IfDirective {
  return node instanceof IfDirective;
}
