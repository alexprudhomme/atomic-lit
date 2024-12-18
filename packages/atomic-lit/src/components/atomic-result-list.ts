import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("atomic-result-list")
export class AtomicResultList extends LitElement {
  override render() {
    return html`<slot>Atomic-search-interface</slot>`;
  }
}
