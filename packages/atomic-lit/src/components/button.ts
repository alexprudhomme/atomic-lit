import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An example button component
 *
 * @tag my-button
 *
 * @slot - The main content for the button
 *
 */
@customElement("my-button")
export class MyButton extends LitElement {
  /** Changes the display of the button */
  @property()
  variation?: "default";

  /** Controls the disabled property of the button */
  @property({ type: Boolean })
  disabled = false;

  override render() {
    return html`
      <button part="control" ?disabled=${this.disabled}>
        This is my button
        <slot></slot>
      </button>
    `;
  }
}
