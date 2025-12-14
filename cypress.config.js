import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,  // Add this line
    videoCompression: 32,  // Optional: compress video
  },
})