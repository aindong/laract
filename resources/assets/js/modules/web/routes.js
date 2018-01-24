import Loadable from 'react-loadable'
import LoadingComponent from '../../common/loader'

export default [
    {
        path: '/',
        exact: true,
        component: Loadable({
            loader: () => import('./pages/home'),
            loading: LoadingComponent,
        }),
    },
    {
        path: '/about',
        exact: true,
        component: Loadable({
            loader: () => import('./pages/about'),
            loading: LoadingComponent,
        }),
    },
    {
        path: '/blog',
        exact: true,
        component: Loadable({
            loader: () => import('./pages/about'),
            loading: LoadingComponent,
        }),
    },
    {
        path: '/contact-us',
        exact: true,
        component: Loadable({
            loader: () => import('./pages/contactus'),
            loading: LoadingComponent,
        }),
    }
]