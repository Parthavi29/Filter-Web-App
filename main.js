nosex=0;
nosey=0;

function preload(){
    lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}

function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
video.size(350,350);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",poses);
}

function draw(){
image(video,0,0,350,350);
fill(255,0,0);
stroke(255,0,0)
circle(nosex,nosey,20);
image(lipstick,nosex,nosey,30,30)
}

function snapshot(){
    save("MyImage.png");
}

function modelLoaded(){
    console.log("Model Has Loaded. Yay!")
}

function poses(results){
if (results.length > 0){
    console.log(results);
    nosex= results[0].pose.nose.x-25;
    nosey= results[0].pose.nose.y+15;
    console.log("Nose x = " + nosex);
    console.log("Nose y = " + nosey);
}
}