// console.log(module);

exports.getDate = function () {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    }

    let day = today.toLocaleDateString("en-IN", options);
    return day;
}

exports.getDay = function () {

    let today = new Date();

    let options = {
        weekday: "long",
    }

    let day = today.toLocaleDateString("en-IN", options);
    return day;
}

// console.log(module.exports);