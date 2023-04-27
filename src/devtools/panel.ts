import App from './Panel.svelte'

console.info('chrome-ext template-svelte-ts devtools/panel script')

const app = new App({
  target: document.getElementById('app'),
})

export default app
