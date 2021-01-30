let aovDegrees = $("#aovDegrees");
let aovRadians = $('#aovRadians');
let aspectRatio = $('#aspectRatio');
let droneHeight = $('#droneHeight');
let diagonalLength = $('#diagonalLength');

resetDiagonalLength = (droneHeight, aovRadians) => {
    diagonalLength.val(calcDiagonalLength(droneHeight, aovRadians));
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

droneHeight.change((event) => {
    resetDiagonalLength(event.target.value, aovRadians.val());
})
