Webcam.set ( {
width: 350,
height: 300,
img_format: 'png',
png_quality: 90
});

webcam = document.getElementById("webcam_div");

Webcam.attach('#webcam_div');

function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("captured_snapshot_div").innerHTML = '<img id = "snapshot_image" src = "'+data_uri+'"/>';
    });
}

console.log('The ml5 version : ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mKQV-C0IO/model.json',modelLoaded);

function modelLoaded() {
    console.log("The Model is up and ready to go!");
}
