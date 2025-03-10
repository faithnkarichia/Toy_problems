function speedDetector(speed) {
    let speedLimit = 70;

    if (speed <= speedLimit) {
        return "OK";
    } else {
        let points = Math.floor((speed - speedLimit) / 5);

        if (points > 12) {
            return "License suspended!";
        } else {
            return `Points: ${points}`;
        }
    }
}


console.log(speedDetector(190));  
