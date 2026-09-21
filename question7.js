
// a.
class SlotUnavailableError extends Error {
    constructor(statusCode, slotId, nextAvailableAt){
        super()
        this.statusCode = statusCode
        this.slotId = slotId
        this.nextAvailableAt = nextAvailableAt
    }
}

class ValidationError extends Error {
    constructor(field){
        super()
        this.field = field
    }
}

//b. the reason is the function is not async function.

//c. the behavorial differece is the getElementsByClassName is live it's work with live data if we add new things it will count, but the querySelectorAll works on node and static.