const daysMap = {
    "Monday": 1,
    "Tuesdau": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6,
    "Sunday": 7
}

function solve(map, day) {

    return daysMap[day] ? daysMap[day]: "error";
}

console.log(solve(daysMap,"Sunday"))