import authRoutes from '../modules/auth/routes'
import webRoutes from '../modules/web/routes'

export default [...webRoutes, ...authRoutes]