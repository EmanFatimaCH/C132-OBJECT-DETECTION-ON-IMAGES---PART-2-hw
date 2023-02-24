status = "";
electronics_image = "";

function preload(){
electronics_image = loadImage("electronics.jpg")
}

function setup(){
canvas = createCanvas(640,350);
canvas.position(315,200);
object_detectore = ml5.objectDetectore('cocossd',modelloaded);
document.getElementById("status").innerhtml = "Status: Detecting Objects"
}

function modelloaded(){
console.log("Model Loaded!");
status = true;
object_detectore.Dectect(electronics_image,gotResults);
}

function gotResults(results,error){
if(error){
console.error(error);
}
console.log(results);
}

function draw(){
image(electronics_image,0,0,640,350)
}