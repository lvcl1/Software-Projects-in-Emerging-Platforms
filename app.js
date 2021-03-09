var constraints = { video: { facingMode: "user" }, audio: false };
var track = null;

const cameraView = document.getElementById("CameraView"),
    cameraSensor = document.getElementById("CameraSensor"),
    cameraTrigger = document.getElementById("CameraTrigger"),
    input = document.getElementById("input")

function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    var canvas=cameraSensor.getContext("2d");
    canvas.drawImage(cameraView, 0, 0);
    canvas.fillStyle="White";
    canvas.font="18px Arial";
    canvas.fillText(input.value,(cameraSensor.width/2)-100,cameraSensor.height-20)
};

window.addEventListener("load", cameraStart, false);