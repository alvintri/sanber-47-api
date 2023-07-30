const request = require("supertest");
const { expect } = require("chai");


describe('Login Feature', () => {
    it('Success Login', async () => {
        const response = await request("https://kasir-api.belajarqa.com") //BASEURL
        .post("/authentications") //ENDPOINT
        .send({ //PAYLOAD
            "email": "kelontong.murah@gmail.com",
            "password": "SUKAJAYA10",
        })
        //console.log((await response).status);
        //console.log((await response).body);

        //ASSERTION
        expect((await response).status).to.equal(201);
        expect((await response).body.data.user.name).to.equal("Kelontong Murah");
    })
    it('Failed Login', async () => {
        const response = await request("https://kasir-api.belajarqa.com") //BASEURL
        .post("/authentications") //ENDPOINT
        .send({ //PAYLOAD
            "email": "kelontong.murah@gmail.com",
            "password": "SUKAJAYA10123",
        })
        //console.log((await response).status);
        //console.log((await response).body);

        //ASSERTION
        expect((await response).status).to.equal(401);
    })
})

describe('Get User', ()=>{
    const queryPage = 2
    it('Success Get User Detail', async () => {
        const response = await request('https://reqres.in')
        .del(`/api/users`+`?page=${queryPage}`)
        
        console.log((await response).status);
        console.log((await response).body);
    })

})