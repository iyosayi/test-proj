import {Request, Response, NextFunction} from 'express'
import AwardScholarShipService from '@modules/donors/services/AwardScholarshipService'
import ContributeToScholarShipService from '@modules/donors/services/ContributeToScholarshipService'
import CreateScholarShipService from '@modules/donors/services/CreateScholarShipService'
import GetScholoarshipListService from '@modules/donors/services/GetScholarshipList'
import GetScholoarshipByIdService from '@modules/donors/services/GetScholarshipByIdService'
import SetScholarShipActiveService from '@modules/donors/services/SetActiveScholarshipService'
import { handleError, handleSuccess, } from '@utils/utils'
import { container } from 'tsyringe'
import {StatusCodes} from 'http-status-codes'


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
            return handleError(response, error.statusCode, error.message)
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
            console.log("🚀 ~ file: ScholarshipController.ts ~ line 72 ~ ScholarshipController ~ setActive ~ error", error)
            return handleError(response, error.statusCode, error.message)
        }
    }
}