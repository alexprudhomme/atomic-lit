/* eslint-disable */
/* tslint:disable */
import { fromEvent } from "rxjs";

const proxyInputs = (Cmp: any, inputs: string[]) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val: any) {
        this.z.runOutsideAngular(() => (this.el[item] = val));
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true,
    });
  });
};

const proxyMethods = (Cmp: any, methods: string[]) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function () {
      const args = arguments;
      return this.z.runOutsideAngular(() =>
        this.el[methodName].apply(this.el, args)
      );
    };
  });
};

// const defineCustomElement = (tagName: string, customElement: any) => {
//   if (
//     customElement !== undefined &&
//     typeof customElements !== "undefined" &&
//     !customElements.get(tagName)
//   ) {
//     customElements.define(tagName, customElement);
//   }
// };

//For each component
export function ProxyCmp(opts: {
  defineCustomElementFn?: () => void;
  inputs?: any;
  methods?: any;
}) {
  const decorator = function (cls: any) {
    const { defineCustomElementFn, inputs, methods } = opts;

    if (defineCustomElementFn !== undefined) {
      defineCustomElementFn();
    }

    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}

// For events
export const proxyOutputs = (instance: any, el: any, events: string[]) => {
  events.forEach(
    (eventName) => (instance[eventName] = fromEvent(el, eventName))
  );
};
