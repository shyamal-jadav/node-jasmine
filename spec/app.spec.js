var request = require("request");
const { response } = require("express");

describe("Server", ()=>{
    var server;
    beforeAll(()=>{
        server = require("../app");
    })
    afterAll(()=>{
        server.close();
    })

    describe('GET /', () => {
        var data = {};
        beforeAll((done)=>{
            request.get("http://localhost:3000/", (error, response, body)=>{
                data.status = response.statusCode;
                data.body = body;
                done();
            })
        })

        it("Status 200", ()=>{
            expect(data.status).toBe(200);
        })

        it("Body", ()=>{
            expect(data.body).toBe("I am shyamal");
        })

    })

    describe('GET /test', () => {
        var data = {};
        beforeAll((done)=>{
            request.get("http://localhost:3000/test", (error, response, body)=>{
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            })
        })

        it("Status 500", ()=>{
            expect(data.status).toBe(500);
        })

        it("Body", ()=>{
            expect(data.body.message).toBe("This is error message");
        })

    })
        
})

// var Add = require("../app");

// describe("Add functionality", ()=>{
//     it("Calculate x + y = z", ()=>{
//         expect(Add(10, 5)).toEqual(15);
//     })
//     it("Calculate x + y = z", ()=>{
//         expect(Add(10, 5)).not.toEqual(15);
//     })
// })