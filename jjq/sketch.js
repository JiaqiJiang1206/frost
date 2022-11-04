
let poseNet;
let pose;

let noseX;
let noseY;

let rightHandX;
let rightHandY;

let leftHandX;
let leftHandY;

// let textures = [];

function preload() {
  // spritesheet = loadImage('flakes32.png');
}

function setup() {
  ellipseMode(RADIUS);
  imageMode(CORNER);
  createCanvas(windowWidth, windowHeight);

  //准备camera
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();
  // for (let x = 0; x < spritesheet.width; x += 32) {//切割雪花图像
  //   for (let y = 0; y < spritesheet.height; y += 32) {
  //     let img = spritesheet.get(x, y, 32, 32);
  //     image(img, x, y);
  //     textures.push(img);
  //   }
  // }

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  rectMode(CORNERS);// rect() 的前两个参数解读成形状其中一个角落的位置，而第三和第四个参数则被解读成对面角落的位置
}

function gotPoses(poses){
  if(poses.length > 0){
    pose = poses[0].pose;
  }
}

function modelLoaded(){
  console.log('poseNet ready');
}


function draw() {


  // translate(video.width, 0);//视频左右翻转
  // scale(-1, 1);
  background(0, 0, 0);
  image(video, 0, 0, width, width * video.height / video.width);
  // translate(video.width, 0);//视频左右翻转
  // scale(-1, 1);



  if(pose){
    noseX = pose.nose.x;
    noseY = pose.nose.y;
    rightHandX = pose.rightWrist.x;
    rightHandY = pose.rightWrist.y-200;
    leftHandX = pose.leftWrist.x;
    leftHandY = pose.leftWrist.y-200;
    // fill('red');
    // ellipse(rightHandX, rightHandY, 100);
    // fill('white');
  }



}

