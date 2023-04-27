import App from './DevTools.svelte'

chrome.devtools.panels.create('Sample Panel', 'logo.png', 'panel.html', (panel) => {
  // code invoked on panel creation
  console.log('panel created')
})

console.info('chrome-ext template-svelte-ts devtools script')

const app = new App({
  target: document.getElementById('app'),
})

export default app
