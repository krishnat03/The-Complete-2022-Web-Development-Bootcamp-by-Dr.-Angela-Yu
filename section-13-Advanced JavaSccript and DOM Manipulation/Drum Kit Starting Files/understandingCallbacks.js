function anotherAddEventListener(typeOfEvent, callback){
    //detect Event code
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeyPress: 2
    }
    if(eventThatHappened.eventType === typeOfEvent){
        callback(eventThatHappened);
    }
}


anotherAddEventListener("keypress", function(event){
    console.log(event);
})

document.addEventListener("keypress", function(event){
    console.log(event);
})
    