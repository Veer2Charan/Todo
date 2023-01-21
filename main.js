status="";
function setup() {
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
}
    
    function start() {
        objectDetector=ml5.objectDetector('cocossd', modelloaded);
        document.getElementById("status").innerHTML="Status: Detecting objects"
    }

    function draw() {
        image(video, 0,0, 480,380)
    }

    function modelloaded() {
        console.log("ModelLoaded!")
        status=true;
    }