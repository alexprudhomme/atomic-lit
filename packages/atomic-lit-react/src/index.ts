import { MyButton as MyButtonNative } from "@coveo/atomic-lit";
import { createComponent } from "@lit/react";
import React from "react";

export const MyButton = createComponent({
  tagName: "my-button",
  elementClass: MyButtonNative,
  react: React,
});
