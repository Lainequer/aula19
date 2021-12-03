var rosquinha;
var fundo;
var inimigo1, inimigo2;

function preload(){
    inimigo1 = loadAnimation("maça.png");
    inimigo2 = loadAnimation("brocolis.png");
    fundo1 = loadAnimation("fundoo.png");
    rosquinha = loadAnimation("rosquinha2.png","rosquinha3.png");
    morte = loadAnimation("Hurt_rosquinha.png");
}

function setup(){
    createCanvas(600,400);

   fundo = createSprite(300,200);
   fundo.addAnimation("espaço",fundo1);

   rosca = createSprite(150,330,10,10);
   rosca.addAnimation("rosquinha",rosquinha);
   rosca.addAnimation("rosquinha morta",morte);
   rosca.scale = 0.2
   soloInvisivel = createSprite(300,370,600,10)
   soloInvisivel.visible = false;   
}

function draw(){
    background("white");
    if (keyDown("space")&& rosca.y>=150) {
    rosca.velocityY = -5;
}
 rosca.velocityY = rosca.velocityY + 0.5; 
 rosca.collide(soloInvisivel);
    inimigos();
    drawSprites();
}
function inimigos(){
    if (frameCount%100===0){
        inimigo_1 = createSprite(550,330,10,10);
        inimigo_1.velocityX = -6;
        inimigo_1.scale = 0.2;
        aleatorio = Math.round(random(1,2))
        switch(aleatorio){
            case 1:inimigo_1.addAnimation("maça",inimigo1);
                break;
            case 2:inimigo_1.addAnimation("brocolis ",inimigo2);
                break;
        }
     inimigo_1.lifetime = 100;
    }
}