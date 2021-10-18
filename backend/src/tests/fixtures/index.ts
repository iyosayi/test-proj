import faker from 'faker';
import axios from 'axios';
import { env } from '../../config/environment'

const {BASE_URL} = env.getEnv()

var num: number
export const makeFakeUser = (overrides?: any) => {
    const user = {
        name: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        type: 'donor'
    }
    return {...user, ...overrides}
}

export const makeFakeScholarship = (overrides?: any) => {
    const sch = {
        name: faker.name.findName(),
        description: faker.random.words(),
        amount: faker.datatype.number(),
        isActive: false,
        status: 'in-progress'
    }
    return {...sch, ...overrides}
}

export const signup = async (overrides?: any) => {
    const fakeUser = makeFakeUser(overrides)
    const response = await axios({
        method: 'POST',
        url: `${BASE_URL}/users`,
        data: fakeUser,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // @ts-ignore
    const { user, token } = response.data?.data
    return { user, token}
}

