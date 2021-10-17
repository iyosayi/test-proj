import {Router} from 'express'
import ScholarshipController from '../controllers/ScholarshipController'
import {isDonor, isAnyone} from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import {createAwardSchema, createScholarshipSchema, contributeSchema, setActiveSchema} from '@modules/donors/infra/http/validations/scholar.validations'

const router = Router()
const scholarshipController = new ScholarshipController()

router.route('/').get(isAnyone, scholarshipController.all).post([isDonor, createScholarshipSchema], scholarshipController.create)
router.patch('/award', [isDonor, createAwardSchema], scholarshipController.award)
router.patch('/contribute', [isDonor, contributeSchema], scholarshipController.contribute)
router.get('/:id', [isAnyone], scholarshipController.get)
router.patch('/:id', [isDonor, setActiveSchema],scholarshipController.setActive)

export default router