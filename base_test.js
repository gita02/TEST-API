const supertest = require('supertest');
const {expect} = require('chai');
const { equal } = require('assert');




const api = supertest('http://localhost:1234');
const path = '/v1/users';

function createUser(){
    return api.post(path)
    .send(payload)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
}

const payload = {
    
        "id": "1",
        "firstName": "Gita",
        "lastName": "Cahya",
        "age": "20",
        "occupation": "Karyawan",
        "nationality": "Indonesia",
        "hobbies": [
          "learn newthing"
        ],
        "gender": "FEMALE",
        "createdDate": "2021-09-19T03:41:17.135Z",
        "updatedDate": "2021-09-19T03:41:17.135Z"
      
}

describe('Create user', () => {
    it('As a system, I want to create new user', async () => {
        const response = await createUser()
        // console.log(response.body)
        expect(response.status).to.equal(200)
    })
})