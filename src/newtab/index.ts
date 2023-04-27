import App from './NewTab.svelte'

console.info('chrome-ext template-svelte-ts new tab script')

const app = new App({
  target: document.getElementById('app'),
})

export default app
