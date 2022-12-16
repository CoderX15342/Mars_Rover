var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var nasa_mars_images_array = ["mars1.jpg", "mars2.jpg", "mars3.jpg", "mars4.jpg"];
var random_number = Math.floor(Math.random() * 4);
var random_image = nasa_mars_images_array[random_number];
var rover_width = 100;
var rover_height = 90;
var roverX = 10;
var roverY = 10;
var background_img="mars.jpg";
var rover_img="rover.png";
 
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = random_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, roverX, roverY, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38'){
        up();
        console.log("UP");
    }
    if (keyPressed == '40'){
        down();
        console.log("DOWN");
    }
    if (keyPressed == '37'){
        left();
        console.log("LEFT");
    }
    if (keyPressed == '39'){
        right();
        console.log("RIGHT");
    }
}

function up(){
   if (roverY >= 0){
    roverY = roverY - 10;
    console.log("When up arrow is pressed, X = " + roverX + " Y = " + roverY);
    uploadBackground();
    uploadRover();
   }
   }
function down(){
    if (roverY <= 500){
     roverY = roverY + 10;
     console.log("When up arrow is pressed, X = " + roverX + " Y = " + roverY);
     uploadBackground();
     uploadRover();
    }
}
function left(){
    if (roverX >= 0){
     roverX = roverX - 10;
     console.log("When up arrow is pressed, X = " + roverX + " Y = " + roverY);
     uploadBackground();
     uploadRover();
    }
}
function right(){
    if (roverX <= 600){
     roverX = roverX + 10;
     console.log("When up arrow is pressed, X = " + roverX + " Y = " + roverY);
     uploadBackground();
     uploadRover();
    }
}

