const { LinkedList_ADT } = require("./LinkedList_ADT")

describe("LinkedList_ADT", () => {

    test("Initializing LinkedList_ADT with primitive value", () => {
        const list = new LinkedList_ADT("seraphim")
        expect(list.getValues()).toEqual(["seraphim"])
    })

    test("Initializing LinkedList_ADT with array of primitive values", () => {
        const list = new LinkedList_ADT(["seraphim", "snake"])
        expect(list.getValues()).toEqual(["seraphim", "snake"])
    })

    test("Initializing LinkedList_ADT with empty array", () => {
        try {
            const list = new LinkedList_ADT([])
        } catch (err) {
            expect(err.message).toBe("Cannot initialize list with empty array.")
        }
    })

    test("Initializing LinkedList_ADT with no params", () => {
        try {
            const list = new LinkedList_ADT()
        } catch (err) {
            expect(err.message).toBe("Cannot initialize list with null or undefined.")
        }
    })

    test("Pushing node to LinkedList_ADT", () => {
        const list = new LinkedList_ADT(["seraphim"])
        list.push("franky")
        expect(list.getValues()).toEqual(["seraphim", "franky"])
    })

    test("Popping node from LinkedList_ADT", () => {
        const list = new LinkedList_ADT(["seraphim", "franky"])
        expect(list.pop()).toBe("franky")
    })

    test("Popping node from LinkedList_ADT when list is empty", () => {
        try {
            const list = new LinkedList_ADT(["seraphim"])
            list.pop()
            list.pop()
        } catch (err) {
            expect(err.message).toBe(`Cannot pop: Please initialize the LinkedList first.`)
        }
    })

    test("Reversing nodes in LinkedList_ADT", () => {
        const list = new LinkedList_ADT(["seraphim", "franky", "corazon"])
        expect(list.reverse()).toEqual(["corazon", "franky", "seraphim"])
    })

})

