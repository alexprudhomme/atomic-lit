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

//TODO: redo so it regenerates the whole file, also I can know what exports are components are they all extend LitElement.

(async () => {
  try {
    // Dynamically import @coveo/atomic-lit to get its exports
    const atomicLitModule = await import(atomicLitPath);
    const exports = Object.keys(atomicLitModule);

    // Filter for component-like exports (adjust based on naming conventions)
    const componentExports = exports.filter((name) => /^[A-Z]/.test(name));

    console.log(componentExports);
    // Read the existing file content
    let fileContent = "";
    if (fs.existsSync(componentTsPath)) {
      fileContent = fs.readFileSync(componentTsPath, "utf-8");
    }

    // Generate the new exports
    const newExports = componentExports
      .map((componentName) => {
        // Check if the component is already in the file
        if (fileContent.includes(`export const ${componentName} =`)) {
          return null; // Skip if it already exists
        }
        return generateComponentExport(componentName);
      })
      .filter(Boolean) // Remove nulls
      .join("\n");

    // Append the new exports to the file
    const updatedContent = fileContent + newExports;

    // Write back to the file
    fs.writeFileSync(componentTsPath, updatedContent, "utf-8");
    console.log("component.ts file updated successfully.");
  } catch (error) {
    console.error("Error generating component exports:", error);
  }
})();
