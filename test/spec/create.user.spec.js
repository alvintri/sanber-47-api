const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("./get.token.spec");
const config = require('../../data/config.json')

async function createUser(payload,token){
    const response = await request(config.baseUrl)
    .post('/users')
    .send(payload)
    .set("Authorization", `Bearer ${token}`)
    return response
}

describe('Create User', () => {
    it('Succcess create a new user', async () => {
        //Get Token
        const token = await getToken()
        //Create User
        const payload = {
            "name": "kasir-serbaguna",
            "email": "user@example.com",
            "password": "jiasda2321@"
         }
         
        const response = await createUser(payload,token)
        //Assert
        expect((await response).status).to.equal(201);
        expect((await response).body.data.name).to.equal(payload.name); //DATA DRIVEN TESTING
    })
})