
import { createComponent } from "@lit/react";
import React from "react";

import { AtomicResultList as AtomicResultListNative } from "@coveo/atomic-lit";

export const AtomicResultList = createComponent({
  tagName: "atomicresultlist",
  elementClass: AtomicResultListNative,
  react: React,
});


import { AtomicSearchInterface as AtomicSearchInterfaceNative } from "@coveo/atomic-lit";

export const AtomicSearchInterface = createComponent({
  tagName: "atomicsearchinterface",
  elementClass: AtomicSearchInterfaceNative,
  react: React,
});
