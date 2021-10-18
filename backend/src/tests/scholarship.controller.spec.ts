import { expect } from 'chai';
import { signup } from './fixtures/index'
import request from 'supertest'
import { env } from '../config/environment'

const {BASE_URL} = env.getEnv()

const api = request(BASE_URL)

const testObj = {
    scholarshipId: '',
    donorId: '',
    token: '',
    studentId: '',
    studentToken: '',
}

describe('Scholarship controller', () => {
    it('donor creates a new scholarship', async () => {
        const { user, token } = await signup()
        const response = await api.post('/scholarships').set({'Content-Type': 'application/json', Authorization:`Bearer ${token}`}).send({
            name: 'Diane scholarship fund',
            amount: "100",
            description: 'this scholarship is to create some stuff',
            donor: String(user.id)
        })
        expect(response.statusCode).to.be.equal(201)
        expect(response.body.data.amount).to.be.equal("100")
        testObj.scholarshipId = response.body.data.id
        testObj.donorId = user.id
        testObj.token = token
    })

    it('donor can award scholarship to student', async () => {
        const {user, token} = await signup({type: 'student',})
        const response = await api.patch('/scholarships/award').set('Authorization', `Bearer ${testObj.token}`).send({
            studentId: String(user.id),
            scholarshipId: testObj.scholarshipId.toString(),
        })
        expect(response.statusCode).to.be.equal(200)
        testObj.studentId = user.id
        testObj.studentToken = token
    })

    it('gets all scholarships', async () => {
        const response = await api.get('/scholarships/').set('Authorization', `Bearer ${testObj.token}`)
        expect(response.statusCode).to.be.equal(200)
        expect(response.body.data.length).to.be.greaterThan(1)
    })

    it('gets a scholarship by id', async () => {
        const response = await api.get(`/scholarships/${testObj.scholarshipId}`).set('Authorization', `Bearer ${testObj.token}`)
        expect(response.statusCode).to.be.equal(200)
        expect(response.body.data.id).to.be.equal(testObj.scholarshipId)
    })

    it('sets a scholarship as active', async () => {
        const response = await api.patch(`/scholarships/${testObj.scholarshipId}`).set('Authorization', `Bearer ${testObj.token}`).send({
            isActive: false,
            scholarshipId: testObj.scholarshipId.toString()
        })
        expect(response.statusCode).to.be.equal(200)
        expect(response.body.data.isActive).to.be.false
    })

    it('students apply to scholarships', async () => {
        const response = await api.post(`/scholarships/apply`).set('Authorization', `Bearer ${testObj.studentToken}`).send({
            studentId: testObj.studentId.toString() ,
            scholarshipId: testObj.scholarshipId.toString(),
        })
        expect(response.statusCode).to.be.equal(201)
        expect(response.body.data.student.id).to.be.equal(testObj.studentId)
    })

    it('gets a students applied scholarship', async () => {
        const response = await api.get(`/scholarships/applications/${testObj.studentId}`).set('Authorization', `Bearer ${testObj.studentToken}`)
        expect(response.statusCode).to.be.equal(200)
        expect(response.body.data.length).to.be.equal(1)
        expect(response.body.data[0].scholarship.id).to.be.a('number')
    })
})
