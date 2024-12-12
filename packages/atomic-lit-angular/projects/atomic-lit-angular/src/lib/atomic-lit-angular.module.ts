import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import '@coveo/atomic-lit';

// import every component from component.ts

import { MyButton, MyCard } from './components';

// Put them in DECLARATION array
const DECLARATIONS = [MyButton, MyCard];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule],
})
export class AtomicLitAngularModule {
  static forRoot(): ModuleWithProviders<AtomicLitAngularModule> {
    return {
      ngModule: AtomicLitAngularModule,
      providers: [],
    };
  }
}
