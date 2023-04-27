import App from './Content.svelte'

console.info('chrome-ext template-svelte-ts content script')

const div = document.createElement('div')
div.style.setProperty('z-index', '100000')
div.style.setProperty('position', 'fixed')
document.body.insertAdjacentElement('afterbegin', div)
const shadowRoot = div.attachShadow({ mode: 'open' })
const app = new App({
  target: shadowRoot,
})

export default {}
