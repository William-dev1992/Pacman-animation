let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let pacA = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 70,
    fim: 1.72 * Math.PI,
    xa: 250,
    xb: 315,
    xc: 314,
}

function aberto(){


    ctx.beginPath();

    ctx.rect(0,0,500,500);
    ctx.fillStyle = "yellow";

    ctx.fill();

    ctx.beginPath();

    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.arc(pacA.x, pacA.y, pacA.raio, pacA.inicio, pacA.fim);
    ctx.stroke();

    ctx.beginPath();

    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.moveTo(pacA.xa, 250);
    ctx.lineTo(pacA.xb, 328);

    ctx.stroke();

    ctx.beginPath();

    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.moveTo(pacA.xa, 250);
    ctx.lineTo(pacA.xc, 172);

    ctx.stroke();

    ctx.beginPath();

    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.rect(pacA.xa, 180, 10, 10);

    ctx.stroke();
    ctx.fill();
};

let pacB = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 2 * Math.PI,
    xa:250,
    xb:350
}

function fechado(){
    ctx.beginPath();

    ctx.rect(0,0,500,500);
    ctx.fillStyle = "yellow";

    ctx.fill();



    ctx.beginPath();

    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.arc(pacB.x, pacB.y, pacB.raio, pacB.inicio, pacB.fim);

    ctx.stroke();

    ctx.beginPath();

    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.moveTo(pacB.xa, 250)
    ctx.lineTo(pacB.xb , 250);

    ctx.stroke();

    ctx.beginPath();

    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.rect(pacB.xa, 180, 10, 10);

    ctx.stroke();
    ctx.fill();

};

aberto();

setInterval(function(){
    if(pacA.fim < 2 * Math.PI){
        fechado();
        pacB.x += 10;
        pacB.xa += 10;
        pacB.xb += 10;
    }

    fechado(pacB);

}, 500);

setInterval(function(){
    if(pacB.fim >= 2 * Math.PI){
        aberto();
        pacA.x += 10;
        pacA.xa += 10;
        pacA.xb += 10;
        pacA.xc += 10;
    }

    aberto(pacA);

}, 700);