# Journal | Migrating Atomic from Stencil to Lit

Journal of every problem I ran into while migrating Atomic from Stencil to Lit

## Property 'render' is protected and only accessible within class 'LitElement' and its subclasses

We redefine the Stencil render function to render an error in interface-common.tsx

## No @lit/store

We will have to create our own solution. Source code is here https://github.com/ionic-team/stencil-store. It is really small, we could just implement that ourselves.

## No componentWillLoad

What is the alternative to this in lit ? Maybe in the constructor ?
