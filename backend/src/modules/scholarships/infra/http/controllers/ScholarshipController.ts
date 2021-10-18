import {Request, Response, NextFunction} from 'express'
import AwardScholarShipService from '@modules/scholarships/services/AwardScholarshipService'
import ContributeToScholarShipService from '@modules/scholarships/services/ContributeToScholarshipService'
import CreateScholarShipService from '@modules/scholarships/services/CreateScholarShipService'
import GetScholoarshipListService from '@modules/scholarships/services/GetScholarshipList'
import GetScholoarshipByIdService from '@modules/scholarships/services/GetScholarshipByIdService'
import SetScholarShipActiveService from '@modules/scholarships/services/SetActiveScholarshipService'
import ApplyToScholarshipService from '@modules/scholarships/services/ApplyToScholarshipService'
import { handleError, handleSuccess, } from '@utils/utils'
import { container } from 'tsyringe'
import {StatusCodes} from 'http-status-codes'
import User from '@modules/users/infra/typeorm/entities/User'
import GetApplicationListService from '@modules/scholarships/services/GetApplicationListService'


export default class ScholarshipController {
    public async create(request: Request, response: Response, next: NextFunction) {
        try {
            const createService = container.resolve(CreateScholarShipService)
            const { description, amount, donor, name } = request.body
            const newScholarShip = await createService.execute({description, name, amount, donor})
            return handleSuccess(response, StatusCodes.CREATED, newScholarShip, 'Scholarship created successfully')
        } catch (error: any) {
            return handleError(response, error.statusCode, error.message)
        }
    }

    public async award(request: Request, response: Response, next: NextFunction) {
        try {
            const awardService = container.resolve(AwardScholarShipService)
            const { studentId, scholarshipId} = request.body
            const award = await awardService.execute({studentId, scholarshipId})
            return handleSuccess(response, StatusCodes.OK, award, 'Scholarship awarded successfully')
        } catch (error: any) {
            return handleError(response, StatusCodes.INTERNAL_SERVER_ERROR, error.message)
        }
    }

    public async contribute(request: Request, response: Response, next: NextFunction) {
        try {
            const contributeService = container.resolve(ContributeToScholarShipService)
            const { scholarshipId, amount, donorId} = request.body
            const scholarship = await contributeService.execute({amount, donorId, scholarshipId})
            return handleSuccess(response, StatusCodes.OK, scholarship, 'Successfully contributed to scholarship')
        } catch (error: any) {
            return handleError(response, error.statusCode, error.message)
        }
    }
    public async all(request: Request, response: Response, next: NextFunction) {
        try {
            const allService = container.resolve(GetScholoarshipListService)
            const allScholarShip = await allService.execute()
            return handleSuccess(response, StatusCodes.OK, allScholarShip,'Scholarships retrieved successfully')
        } catch (error: any) {
            return handleError(response, error.statusCode, error.message)
        }
    }
    public async get(request: Request, response: Response, next: NextFunction) {
        try {
            const {id} = request.params
            const allService = container.resolve(GetScholoarshipByIdService)
            const scholarship = await allService.execute(id)
            return handleSuccess(response, StatusCodes.OK, scholarship,'Scholarship retrieved successfully')
        } catch (error: any) {
            return handleError(response, error.statusCode, error.message)
        }
    }
    public async setActive(request: Request, response: Response, next: NextFunction) {
        try {
            const {isActive, scholarshipId} = request.body
            const allService = container.resolve(SetScholarShipActiveService)
            const scholarship = await allService.execute({isActive, scholarshipId})
            return handleSuccess(response, StatusCodes.OK, scholarship,'Scholarship updated successfully')
        } catch (error: any) {
            return handleError(response, error.statusCode, error.message)
        }
    }

    public async apply(request: Request, response: Response, next: NextFunction) {
        try {
            const {studentId, scholarshipId} = request.body
            const appliedScholarship = container.resolve(ApplyToScholarshipService)
            const scholarship = await appliedScholarship.execute({studentId, scholarshipId})
            return handleSuccess(response, StatusCodes.CREATED, scholarship,'Successfully applied to scholarship')
        } catch (error: any) {
            return handleError(response, error.statusCode, error.message)
        }
    }

    public async applications(request: Request, response: Response, next: NextFunction) {
        try {
            const { id } = request.params
            const scholarshipList = container.resolve(GetApplicationListService)
            // @ts-ignore
            const scholarship = await scholarshipList.execute(id)
            return handleSuccess(response, StatusCodes.OK, scholarship,'Scholarship list retrieved successfully')
        } catch (error: any) {
            return handleError(response, error.statusCode, error.message)
        }
    }
}