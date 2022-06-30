// console.log(module);

exports.getDate = function () {

    const today = new Date();

    const options = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    }

    const day = today.toLocaleDateString("en-IN", options);
    return day;
}

exports.getDay = function () {

    const today = new Date();

    const options = {
        weekday: "long",
    }

    const day = today.toLocaleDateString("en-IN", options);
    return day;
}

// console.log(module.exports);