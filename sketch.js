const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bgImg;
var time;
var minutes;


var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);
    if(bgImg!= null){
        background(bgImg)
        text("Time ="+ minutes, 20,20)
    }

    


}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Chicago")
    var responseJSON = await response.json()

    var datetime= responseJSON.datetime;
    time = datetime.slice(11,13);
    minutes = datetime.slice(11,16);
    console.log(time);
     if(time>=0 && time<02){
        bg = "sunset11.png";
    } 
    else if(time>=02 && time<04){
        bg = "sunset12.png";
    }
    else if(time>=04 && time<06){
        bg = "sunrise1.png";
    }

    else if(time>=06&&hour<08){
        bg = "sunrise2.png";
    }
    else if(time>=8&&time<10){
        bg="sunrise3.png"
    }
    else if(time>=10&&time<12){
        bg="sunrise4.png"
    }
    else if(time>=12&&time<14){
        bg="sunrise5.png"
    }
    else if(time>=14&&time<16){
        bg="sunrise6.png"
    }
    else if(time>=16&&time<18){
        bg="sunset7.png"
    }
    else if(time>=18&&time<20){
        bg="sunset8.png"
    }
    else if(time>=20&&time<22){
        bg="sunset9.png"
    }
    else if(time>=22&&time<24){
        bg="sunset10.png"
    }
    
    
    bgImg = loadImage(bg)

}
