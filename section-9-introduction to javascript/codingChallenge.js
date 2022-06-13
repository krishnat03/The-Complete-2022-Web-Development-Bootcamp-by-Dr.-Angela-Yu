function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
    
    var ageInMonths = age*12;
    var ageInWeeks = age*52;
    var ageInDays = age*365;
    var monthsRemaining = (90*12) - ageInMonths;
    var weeksRemaining =  (90*52) - ageInWeeks;
    var daysRemaining = (90*365) - ageInDays;
    console.log("You have " + daysRemaining + " days, " + weeksRemaining + " weeks, and " + monthsRemaining + " months left.");

    /*************Don't change the code below**********/
}

lifeInWeeks(56);

    
    