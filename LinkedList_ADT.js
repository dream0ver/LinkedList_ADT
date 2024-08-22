class LinkedList_ADT {

    #head = null

    #getNewNode(value, next) {
        // Returns a new list node
        return {
            value: value,
            next: next || null
        }
    }

    #throwRangeError(type) {
        return new RangeError(`Cannot ${type}: Please initialize the LinkedList first.`)
    }

    #initialize(value) {
        if (value == undefined || value == null) {
            throw new SyntaxError("Cannot initialize list with null or undefined.")
        }
        else if (Array.isArray(value)) {
            if (!value.length) throw new SyntaxError("Cannot initialize list with empty array.")
            this.#head = this.#getNewNode(value?.[0])
            for (let i = 1; i < value.length; i++)  this.push(value[i])
        }
        else {
            this.#head = this.#getNewNode(value)
        }
    }

    constructor(value) {
        /*
          The LinkedList can be initialized in two ways: by passing a single value, which creates a list with one node,
          or by passing an array, which generates a list with nodes corresponding to each element in the array, 
          resulting in a list with the same length as the array.
        */
        this.#initialize(value)
    }

    clear() {
        // Clears the list.
        this.#head = null
    }

    enqueue(value) {
        // Inserts new node in the beginning of the list
        if (!this.#head) return this.#initialize(value)
        let newNode = this.#getNewNode(value, this.#head)
        this.#head = newNode
    }

    push(value) {
        // Inserts new node in the of the list
        if (!this.#head) return this.#initialize(value)
        let cur = this.#head
        while (cur.next != null) cur = cur.next
        cur.next = this.#getNewNode(value)
    }

    pop() {
        // Removes a node from the end and returns its value
        if (!this.#head) throw this.#throwRangeError("pop")
        let cur = this.#head
        let temp
        if (!cur.next) {
            temp = cur.value
            this.#head = null
            return temp
        }
        while (cur.next.next != null) cur = cur.next
        temp = cur?.next?.value || undefined
        cur.next = null
        return temp || undefined
    }

    dequeue() {
        // Removes a node from the beginning of the list
        if (!this.#head) throw this.#throwRangeError("dequeue")
        this.#head = this.#head.next
    }

    getValues() {
        // Returns an array containing values of list.
        const arr = []
        if (!this.#head) return arr
        let cur = this.#head
        while (cur) {
            arr.push(cur.value)
            cur = cur.next
        }
        return arr
    }

    reverse() {
        if (!this.#head) return []

        let temp = null, cur = this.#head, cur_ahead = this.#head.next

        cur.next = temp

        while (cur_ahead) {
            temp = cur_ahead.next
            cur_ahead.next = cur
            cur = cur_ahead
            cur_ahead = temp
        }

        this.#head = cur

        return this.getValues()
    }

}

module.exports = {
    LinkedList_ADT
}












