// @ts-ignore
import * as fs from 'fs'
import type { Plugin } from 'vite'

export function removePanel(): Plugin {
  return {
    name: 'remove-devtools-panel',
    enforce: 'post',
    apply: 'build',
    async closeBundle() {
      // Read the manifest.json file
      const manifestPath = `${'./build'}/manifest.json`
      const manifestContent = fs.readFileSync(manifestPath, 'utf-8')
      const manifest = JSON.parse(manifestContent)

      // Remove the devtools_panels entry
      delete manifest.transition_pages

      // Write the updated manifest back to the file
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
    },
  }
}
