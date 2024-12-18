import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const componentTsPath = path.resolve(__filename, "../../src/index.ts");
const atomicLitPath = "@coveo/atomic-lit";

const generateComponentExport = (componentName: string) => `
import { ${componentName} as ${componentName}Native } from "${atomicLitPath}";

export const ${componentName} = createComponent({
  tagName: "${componentName.toLowerCase()}",
  elementClass: ${componentName}Native,
  react: React,
});
`;

// Regenerate the entire file content
(async () => {
  try {
    // Dynamically import @coveo/atomic-lit to get its exports
    const atomicLitModule = await import(atomicLitPath);
    const exports = Object.keys(atomicLitModule);

    // Filter for component-like exports (adjust based on naming conventions)
    const componentExports = exports.filter((name) => /^[A-Z]/.test(name));

    console.log(componentExports);

    // Start with an empty file content to regenerate it completely
    let fileContent = "";

    // Add the two import statements at the top
    fileContent += `
import { createComponent } from "@lit/react";
import React from "react";
`;

    // Generate the new exports
    const newExports = componentExports
      .map((componentName) => generateComponentExport(componentName))
      .join("\n");

    // Set the new content for the file (overwriting it completely)
    fileContent += newExports;

    // Write back to the file
    fs.writeFileSync(componentTsPath, fileContent, "utf-8");
    console.log("component.ts file regenerated successfully.");
  } catch (error) {
    console.error("Error generating component exports:", error);
  }
})();
