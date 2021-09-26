const supertest = require('supertest')
const {
    expect
} = require('chai')
require('dotenv').config()

const api = supertest(process.env.BASE_URL)
const path = '/v1/users'
const queryParam = '?name='

const createUser = (payload) => api.post(path)
    .send(payload)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')

const getAllUser = (payload) => api.get(path + queryParam + payload)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')

const getDetailUser = (id) => api.get(path + '/' + id)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')

const updateUser = (payloadUpdate) => api.put(path)
    .send(payloadUpdate)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
const deleteUser = (idDelete) => api.delete(path + '/' + idDelete)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')

module.exports = {
    createUser,
    getAllUser,
    getDetailUser,
    updateUser,
    deleteUser
}