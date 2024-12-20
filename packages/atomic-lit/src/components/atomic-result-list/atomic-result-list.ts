import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../utils/tailwind.element.js";

@customElement("atomic-result-list")
export class AtomicResultList extends TailwindElement {
  override render() {
    return html`<div>Atomic-result-lit</div>`;
  }
}
