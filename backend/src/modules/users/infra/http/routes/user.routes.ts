import {Router} from 'express'
import UsersController from "../controllers/UserController";
import { isAnyone } from '../middlewares/ensureAuthenticated';
import {createUserSchema, loginSchema} from '../validations/user.validation'

const router = Router()
const userController = new UsersController();

router.route('/').get(isAnyone, userController.all).post(createUserSchema, userController.create)

router.route('/me').get(isAnyone, userController.me).patch(isAnyone, userController.updateProfile)

router.post('/auth', loginSchema, userController.login)


export default router; 