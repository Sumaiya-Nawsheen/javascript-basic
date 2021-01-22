//


function kilometerToMeter(km) {
    if (km < 0) {
        var convertToMeter = 'Please enter positive number, Length cannot be negative';
    }
    else {
        var convertToMeter = km * 1000;
    }
    return convertToMeter;
}

var meter = kilometerToMeter(53);
console.log(meter);

//------------------------------------------------------------
function budgetCalculator(watch, mobile, laptop) {
    // if the input is negative value
    if (watch < 0 || mobile < 0 || laptop < 0) {
        var totalBudget = "Please put a valid positive amount";
    }
    // if the input is integer value
    else if (Number.isInteger(watch) && Number.isInteger(mobile) && Number.isInteger(laptop)) {
        var watchBudget = watch * 50;
        var mobileBudget = mobile * 100;
        var laptopBudget = laptop * 500;
        var totalBudget = watchBudget + mobileBudget + laptopBudget;
    }
    // if the input is floating value
    else {
        var watchBudget = Math.floor(watch) * 50;
        var mobileBudget = Math.floor(mobile) * 100;
        var laptopBudget = Math.floor(laptop) * 500;
        var totalBudget = watchBudget + mobileBudget + laptopBudget;
    }
    return totalBudget;
}

var total = budgetCalculator(25, 76, 12);
console.log(total);

//---------------------------------------------------------------
function hotelCost(stayNight) {
    // for stayNight being integer value and greater than 0
    if (Number.isInteger(stayNight) && stayNight > 0) {
        if (stayNight <= 10) {
            var costOfStaying = stayNight * 100;
        }
        else if (stayNight > 10 && stayNight <= 20) {
            var costOfStaying = 10 * 100 + (stayNight - 10) * 80;
        }
        else {
            var costOfStaying = 10 * 100 + 10 * 80 + (stayNight - 20) * 50;
        }
    }
    // for stayNight being floating  and negative value
    else {
        var costOfStaying = "You have to visit first and stay a whole night."
    }
    return costOfStaying;
}

var total = hotelCost(60.5);
console.log(total);
//---------------------------------------------------------------

function megaFriend(friendsName) {
    var max = 0;
    var largest;
    // for handling empty array
    if (friendsName.length == 0) {
        largest = "Please push some friends name";
    }
    // for finding largest string from the array
    else {
        if (friendsName.every(i => (typeof i === "string") == true)) {
            for (var i = 0; i < friendsName.length; i++) {
                var nameSize = friendsName[i].length;
                if (nameSize > max) {
                    max = nameSize;
                    largest = friendsName[i];
                }
            }
        }
        // handling others type of input except string
        else {
            largest = "Please push some friends name nothing else";
        }
    }
    return largest;
}


var big = megaFriend(["sumaiyaNawsh", "sakib", "hossain", "habuuluuuuuuu", 'hello']);
console.log('Name:' + big);