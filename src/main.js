
import * as components from './index'
import 'w3-css/w3.css'

const WiseLibrary = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default WiseLibrary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WiseLibrary)
}