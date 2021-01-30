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

function calcSideA(diagonalLength, aspectRatio) {
    if (!diagonalLength || !aspectRatio)
        return null;
    return diagonalLength / Math.sqrt( 1 + Math.pow(aspectRatio, 2));
}

function calcSideB(sideA, aspectRatio) {
    if (!sideA || !aspectRatio)
        return null;
    return sideA * aspectRatio;
}