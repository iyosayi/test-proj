import { Router } from 'express';
import userRoutes from '@modules/users/infra/http/routes/user.routes'
import scholarshipRoutes from '@modules/scholarships/infra/http/routes/scholarship.routes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/scholarships', scholarshipRoutes)

export default routes