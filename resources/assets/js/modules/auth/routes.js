import Loadable from 'react-loadable'
import LoadingComponent from '../../common/loader'

export default [
    {
        path: '/login',
        exact: true,
        component: Loadable({
            loader: () => import('./pages/login'),
            loading: LoadingComponent,
        }),
    },
    {
        path: '/register',
        exact: true,
        component: Loadable({
            loader: () => import('./pages/register'),
            loading: LoadingComponent,
        }),
    },
]