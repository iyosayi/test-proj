import {Router} from 'express'
import ScholarshipController from '../controllers/ScholarshipController'
import {isDonor, isAnyone, isStudent} from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import {createAwardSchema, createScholarshipSchema, contributeSchema, setActiveSchema} from '@modules/scholarships/infra/http/validations/scholar.validations'

const router = Router()
const scholarshipController = new ScholarshipController()

router.route('/').get(isAnyone, scholarshipController.all).post([isDonor, createScholarshipSchema], scholarshipController.create)
router.patch('/award', [isDonor, createAwardSchema], scholarshipController.award)
router.patch('/contribute', [isDonor, contributeSchema], scholarshipController.contribute)
router.post('/apply', [isStudent, createAwardSchema], scholarshipController.apply)
router.get('/applications/:id', isStudent, scholarshipController.applications)
router.route('/:id').get( [isAnyone], scholarshipController.get).patch([isDonor, setActiveSchema],scholarshipController.setActive)

export default router