
//Variable ⟱
var nose_x = 0;
var nose_y = 0;
var r_rist = 0;
var l_rist = 0;
var gap = 0;
 
function setup(){
    //Creating Canvas ⟱
    canvas = createCanvas(620,620);
    canvas.position(1000,200);
    //Creating Video ⟱
    video = createCapture(VIDEO);
    video.position(150,110);
    video.size(800,800);
    //Load Modal ⟱
    posenet = ml5.poseNet(video, modal_loaded);
    posenet.on("pose", got_result);

}
function draw(){

//Make Square ⟱   
background("rgb(211, 139, 211)");
stroke("black");
fill("blue");


 text("U LIKE DIS", nose_x, nose_y);
 textSize(gap);



}
function modal_loaded(){

    //Show Result In Console ⟱
    console.log("modal loaded");

}
function got_result(results){

    
    if(results.length > 0){

        console.log(results);
       //Make Square Follow Nose ⟱
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        //Make Square Adjust Size To Wrist ⟱
        r_rist = results[0].pose.rightWrist.x;
        l_rist = results[0].pose.leftWrist.x;
        
        gap = Math.floor((l_rist - r_rist)/8);
    
        //Display Square Size ⟱
        document.getElementById("size_square").innerHTML = gap + "px";


    }

}