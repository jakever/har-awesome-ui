import Button from './button'
import Input from './input'
import ElementCom from './element-com'

export {
  Button,
  Input,
  ElementCom
}

export default {
  install(Vue) {
    Vue.use(Button)
    Vue.use(Input)
    Vue.use(ElementCom)
  }
}