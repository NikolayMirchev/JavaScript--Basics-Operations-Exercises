function solve(steps,stepL,kmH) {
    let totalDistance = steps * stepL;
    let plusMinutes = Math.floor(totalDistance / 500);
    let totalTime = totalDistance / (kmH / 60);

    return `${h}:${minutes}:${seconds}`
}
console.log(solve(4000, 0.60, 5));