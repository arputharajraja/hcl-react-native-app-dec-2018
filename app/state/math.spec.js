// app/state/math.spec.js

// BDD - Behaviour Driven Development

describe ("Math Test Suite", () => {
    it("should add 2+3 equals 5 Test Case", () => {
        //assertion
        expect(2 + 3).toBe(5)
    })

    it("should add 2-3 equals -1 Test Case ", () => {
        //assertion
        expect(2 - 3).toBe(-1)
        expect(2 - 3).not.toBe(10)
    })
});