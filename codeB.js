// Speed Detector

function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritThreshold = 12;
    let points = 0;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        points = Math.floor((speed - speedLimit) / 5);
        if (points > demeritThreshold) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

// Prompt the user for speed input
const speed = prompt("Enter car speed: ");
checkSpeed(parseInt(speed));
