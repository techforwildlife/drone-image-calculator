// Convert from degrees to radians.
Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
}

// Convert from radians to degrees.
Math.degrees = function(radians) {
	return radians * 180 / Math.PI;
}

function calcDiagonalLength(droneHeight, aovRadians) {
    if (!droneHeight || !aovRadians)
        return null;
    return 2 * droneHeight * Math.tan(aovRadians/2);
}