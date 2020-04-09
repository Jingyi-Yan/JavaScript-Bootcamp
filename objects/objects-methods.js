let restaurant = {
    name:'Salt & Smoke',
    guestCapacity: 75,
    guestCount:0,
    checkAvailability: function(partySize){
        let seatsLeft=this.guestCapacity-this.guestCount
        return partySize<=seatsLeft
    },
    seatParty: function(partySize){
        this.guestCount=this.guestCount+partySize
    },
    removeParty: function(partySize){
        this.guestCount=this.guestCount-partySize
    }
    //this can access the property in the scope
}
//seatParty 

//removeParty

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(12))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(3))