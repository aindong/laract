import DevStore from './store.dev'
import ProdStore from './store.prod'

let store = null
if (process.env.NODE_ENV !== 'production') {
    store = DevStore()
} else {
    store = ProdStore()
}

export default store