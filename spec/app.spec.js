var Add = require("../app");

describe("Add functionality", ()=>{
    it("Calculate x + y = z", ()=>{
        expect(Add(10, 5)).toEqual(15);
    })
    it("Calculate x + y = z", ()=>{
        expect(Add(10, 5)).not.toEqual(15);
    })
})