var constraints = { video: { facingMode: "user" }, audio: false };
var track = null;

const cameraView = document.getElementById("CameraView"),
    cameraSensor = document.getElementById("CameraSensor"),
    cameraTrigger = document.getElementById("CameraTrigger")

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
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
};

window.addEventListener("load", cameraStart, false);