import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'm6gk3f',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"http://localhost:3000/",
    excludeSpecPattern: [
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ]
  },
});
