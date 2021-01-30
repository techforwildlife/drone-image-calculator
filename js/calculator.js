let aovDegrees = $("#aovDegrees");
let aovRadians = $('#aovRadians');
let aspectRatio = $('#aspectRatio');
let droneHeight = $('#droneHeight');
let diagonalLength = $('#diagonalLength');
let sideA = $('#sideA');
let sideB = $('#sideB');

resetDiagonalLength = (droneHeight, aovRadians) => {
    let length = calcDiagonalLength(droneHeight, aovRadians);
    diagonalLength.val(length);
    resetSideA(length, aspectRatio.val());
}

resetSideA = (diagonalLength, aspectRatio) => {
    let sideAValue = calcSideA(diagonalLength, aspectRatio);
    sideA.val(sideAValue);
    resetSideB(sideAValue, aspectRatio);
};

resetSideB = (sideA, aspectRatio) => {
    sideB.val(calcSideB(sideA, aspectRatio));
}


aovDegrees.change((event) => {
    let radians = Math.radians(event.target.value);
    aovRadians.val(radians);
    resetDiagonalLength(droneHeight.val(), radians);
});

aovRadians.change((event) => {
    let degrees = Math.degrees(event.target.value);
    aovDegrees.val(degrees);
    resetDiagonalLength(droneHeight.val(), event.target.value);
})

aspectRatio.change((event) => {
    resetSideA(diagonalLength.val(), event.target.value);
});

droneHeight.change((event) => {
    resetDiagonalLength(event.target.value, aovRadians.val());
})
