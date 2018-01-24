import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

export default function(initialState = {}) {
    // Middleware and Enhancers
    const enhancers = [
        applyMiddleware(sagaMiddleware)
    ]

    window.devToolsExtension && enhancers.push(window.devToolsExtension())

    const store = createStore(rootReducer, initialState, compose(...enhancers))

    // hot reloading reducers
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers').default // eslint-disable-line global-require
            store.replaceReducer(nextReducer)
        })
    }

    sagaMiddleware.run(sagas)

    return store
}