

//variáveis bolinha posicao origem x e y
let xBolinha = 300;
let yBolinha = 200;

// dimensao da bolinha
let diamentroBolinha = 20;

// raio da bolinha
let raio = diamentroBolinha /2;

//fundo de tela
let preto = 0;

// velocidade da bolinha na direcao x (horizontal)
let velocidadeXBolinha = 7;

// velocidade da bolinha na direcao y (vertical)
let velocidadeYBolinha = 7;

// velocidade da raquete do opononente
let velocidadeYOponente;

//variaveis da raquete
let xRaquete =5;
let yRaquete =150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//biblioteca
let colidiu = false;

//Raquete oponente
let xRaqueteOponente =585;
let yRaqueteOponente =150;

//marcadores de pontos
let meusPontos=0;
let PontosOponente=0;

//Sons do jogo
let raquetada;
let pontos;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(preto);
  
  desenhaBolinha();
  movimentaBolinhaHorizontal();
  movimentaBolinhaVertical();
  tocarBordaHorizontal();
  tocarBordaVertical();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  //mostraRaqueteOponente();
  movimentaRaquete();
  //colisaoRaquete();
  colisao(xRaquete,yRaquete);
  //movimentaRaqueteOponente();
    colisao(xRaqueteOponente,yRaqueteOponente);
incluirPlacar();
  //colisaoOponente();
  marcarPontos();
 
  movimentaRaqueteOponenteMultiPlay();
  bolinhaNaoFicaPresa();
 //vencedor();
 
  
}


function desenhaBolinha(){
  circle(xBolinha,yBolinha,diamentroBolinha);
  
}

function movimentaBolinhaHorizontal(){
  xBolinha += velocidadeXBolinha;
  
}

function movimentaBolinhaVertical(){
    yBolinha += velocidadeYBolinha;

}

function tocarBordaHorizontal(){
   if((xBolinha + raio) > width || (xBolinha - raio < 0)){
    velocidadeXBolinha *= -1;
  }
  
}

function tocarBordaVertical(){
   if(((yBolinha + raio) > height) || ((yBolinha - raio) < 0) ){
         velocidadeYBolinha *= -1;

     }
  
}

function mostraRaquete(x,y){
  rect(x,y,comprimentoRaquete,alturaRaquete);
}

function mostraRaqueteOponente(){
  rect(xRaqueteOponente,yRaqueteOponente,comprimentoRaquete,alturaRaquete);
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
     yRaquete -= 10;
     }
  
   if(keyIsDown(DOWN_ARROW)){
     yRaquete += 10;
     }
   yRaquete = constrain(yRaquete, 10, 310);
}


function colisaoRaquete(){
  if(xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  
    raquetada.play();
     }
  
}


function colisao(x,y){
  colidiu=
  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  
  if(colidiu){
     velocidadeXBolinha *= -1;
    raquetada.play();
     }
}

function colisaoOponente(){
  colidiu=
  collideRectCircle(xRaqueteOponente, yRaqueteOponente, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  
  if(colidiu){
     velocidadeXBolinha *= -1;
    raquetada.play();
     }
  
      

}


function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente- comprimentoRaquete/2 - 88;
  yRaqueteOponente += velocidadeYOponente;
      yRaqueteOponente = constrain(yRaqueteOponente, 10, 310);

  
}

function movimentaRaqueteOponenteMultiPlay(){
  
  //Codigo da tecla W
  if(keyIsDown(87)){
     yRaqueteOponente -= 10;
     }

  //Codigo da tecla S
   if(keyIsDown(83)){
     yRaqueteOponente += 10;
     }
   yRaqueteOponente = constrain(yRaqueteOponente, 10, 310);

  
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  //cor laranja
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,26);
    
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(PontosOponente,470,26);
}


function marcarPontos(){
  if(xBolinha > 590){
    meusPontos +=1;
      pontos.play();

  }else if(xBolinha < 10){
           PontosOponente += 1;
    
      pontos.play();
    

           }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  pontos = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function vencedor(){
  
  
  if(meusPontos >=2){
    window.location.reload(true);
     alert("VOCÊ Venceu!!!");
window.location.reload(true);
    
     }else if(PontosOponente >=2){
       window.location.reload(true);
                   alert("Oponente Venceu!!!");
window.location.reload(true);
              }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    XBolinha = 50
    }
}

