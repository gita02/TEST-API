const supertest = require('supertest')
const {
    expect
} = require('chai')
const page = require('../page/user_page')
const global = require('../common/global')

const scenario = {
    "positive": {
        "createUsers": "System will create user properly",
        "createUserUniqName": "User with name joko will create",
        "getAllUser": "System will show all users",
        "getDetailUser": "System will show detail user",
        "updateUser": "System will update user by payload send",
        "deleteUser": "System will delete user by id"
    },
    "negative": {
        "invalidAuth": "Send request with invalid auth",
        "emptyAuth": "Send request with empty auth",
        "genderUnknown": "Send request with gender unknown",
        "getAllUser": "Send request with name param invalid"
    }
}

const payload = {
    "id": "1",
    "firstName": "Gita",
    "lastName": "Cahya",
    "age": 22,
    "occupation": "FreshGraduate",
    "nationality": "Indonesia",
    "hobbies": [
        "Searching"
    ],
    "gender": "FEMALE",
    "createdDate": global.now,
    "updatedDate": "2021-09-12T04:40:30.447Z"
}

let name = payload.firstName
let id = ''
let payloadUpdate = {
    "id": "",
    "firstName": "",
    "lastName": "",
    "age": 0,
    "occupation": "",
    "nationality": "",
    "hobbies": [
        ""
    ],
    "gender": "",
    "createdDate": "",
    "updatedDate": ""
}

describe('Create user', () => {
    it(`${scenario.positive.createUsers}`, async () => {
        // console.log(payload)
        const response = await page.createUser(payload)
        expect(response.status).to.equal(200)
        id = response.body.id
        payloadUpdate = {
            "id": id,
            "firstName": payload.firstName,
            "lastName": payload.lastName,
            "age": payload.age,
            "occupation": payload.occupation,
            "nationality": payload.nationality,
            "hobbies": payload.hobbies,
            "gender": payload.gender,
            "createdDate": payload.createdDate,
            "updatedDate": payload.updatedDate
        }
    })
    it(`${scenario.negative.genderUnknown}`, async () => {
        // const body = payload
        payload.gender = 'Unknown'
        // console.log(payload)
        const response = await page.createUser(payload)
        expect(response.status).to.equal(400)
    })

})

describe('Get all users', () => {
    it(`${scenario.positive.getAllUser}`, async () => {
        // console.log(payload)
        const response = await page.getAllUser(name)
        // console.log(response.body.data[0].id)

        expect(response.status).to.equal(200)
    })
})

describe('Get detail user', () => {
    it(`${scenario.positive.getDetailUser}`, async () => {
        // console.log(payload)
        const response = await page.getDetailUser(id)
        console.log(id)
        expect(response.status).to.equal(200)
    })
})

describe('Update user', () => {
    it(`${scenario.positive.updateUser}`, async () => {
        // console.log(payload)
        payloadUpdate.firstName = payload.firstName + ' Diubah'
        const response = await page.updateUser(payloadUpdate)
        // console.log(payloadUpdate)
        expect(response.status).to.equal(200)
    })
})


describe('Delete user', () => {
    it(`${scenario.positive.deleteUser}`, async () => {
        console.log(id)
        const response = await page.deleteUser(id)
        // console.log(payloadUpdate)
        expect(response.status).to.equal(200)
    })
})