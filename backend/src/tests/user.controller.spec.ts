import { expect } from 'chai';
import { makeFakeUser } from './fixtures/index'
import request from 'supertest'
import { env } from '../config/environment'

const {BASE_URL} = env.getEnv()

const api = request(BASE_URL)


const testAuth = {
    id: '',
    token: '',
    email: '',
}
describe('User controller', () => {
    it('creates a new user', async () => {
        const response = await api.post('/users').set('Content-Type', 'application/json').send(makeFakeUser({password: 'somePassword'}))
        expect(response.statusCode).to.be.equal(201)
        expect(response.body.data.user.name).to.be.a('string')
        expect(response.body.data.user.password).not.to.exist
        expect(response.body.data.token).to.be.a("string");
        testAuth.id = response.body.data.user.id
        testAuth.token = response.body.data.token
        testAuth.email = response.body.data.user.email
    })

    it('gets all users', async () => {
        const response = await api.get('/users').set('Authorization', `Bearer ${testAuth.token}`)
        expect(response.statusCode).to.be.equal(200)
        expect(response.body.data.length).to.be.greaterThan(1)
    })

    it('gets a user by id', async () => {
        const response = await api.get(`/users/${testAuth.id}`).set('Authorization', `Bearer ${testAuth.token}`)
        expect(response.statusCode).to.be.equal(200)
        expect(response.body.data.email).to.be.equal(testAuth.email)
    })

    it('logs in a user', async () => {
        const response = await api.post(`/users/auth`).set('Content-Type', `application/json`).send({
            email: testAuth.email,
            password: 'somePassword'
        })
        expect(response.statusCode).to.be.equal(200)
        expect(response.body.data.user.email).to.be.equal(testAuth.email)
        expect(response.body.data.user.name).to.be.a('string')
        expect(response.body.data.user.password).not.to.exist
        expect(response.body.data.token).to.be.a("string");
    })

    it('updates a user profile', async () => {
        const response = await api.patch(`/users/${testAuth.id}`).set({ 'Content-Type': `application/json`, Authorization: `Bearer ${testAuth.token}` }).send({
            profile: 'to be a loving person'
        })
        expect(response.statusCode).to.be.equal(200)
        expect(response.body.data.email).to.be.equal(testAuth.email)
        expect(response.body.data.name).to.be.a('string')
        expect(response.body.data.password).not.to.exist
        expect(response.body.data.profile).to.be.a('string')
        expect(response.body.data.profile).to.be.equal('to be a loving person')
    })
})