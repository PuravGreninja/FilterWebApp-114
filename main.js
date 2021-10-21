function preload(){
}
function setup(){
canvas=createCanvas(300 , 300);
canvas.center();
Cam = createCapture(VIDEO);
Cam.hide();
poseNet=ml5.poseNet(Cam , modelLoaded);
poseNet.on("pose", results);
}
function modelLoaded(){
console.log("PoseNet is initialised");
}
function results(values){
if (values.length>0){
console.log(values);
console.log("nose X = "+ values[0].pose.nose.x);
console.log("nose Y = "+ values[0].pose.nose.y);
}

}
function draw(){
image(Cam,0 , 0 , 300 , 300);    
}
function Save(){
    save("ClownFilter.png");
}