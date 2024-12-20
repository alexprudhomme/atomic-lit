import { CSSResult, LitElement, css, unsafeCSS } from "lit";
import styles from "./tailwind.global.css?inline";

export class TailwindElement extends LitElement {
  static styles: CSSResult[] = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}
