import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

export default function(initialState = {}) {
    // Middleware and Enhancers
    // const enhancers = [
    //     applyMiddleware()
    // ]

    const store = createStore(rootReducer, initialState, compose(...enhancers))

    // hot reloading reducers
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers').default // eslint-disable-line global-require
            store.replaceReducer(nextReducer)
        })
    }

    return store
}