
// Crie a variável canvas
var canvas = new fabric.Canvas('myCanvas');
//Defina as posições iniciais das imagens da bola e do buraco.
ball_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-b.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			top:hole_x

		});
		canvas.add(hole.obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("bola.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:hole_y,
			top:hole_x

		});
		canvas.add(ball.obj);
	});
	new_image();
	}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x))
	/* Verifique as coordenadas da bola e do buraco para concluir o jogo.
	Identifique as coordenadas, caso forem iguais, remova  a imagem da bola,
	exiba "Você acertou o buraco!!"
	e troque a cor da borda do canvas para vermelho (red). */
	if ((ball_x==hole_x)&&(ball_y == hole_y)){
		canvas.remove(ball_obj)
		document.getElementById("hd3").innerHTML = "Você acertou o buraco!!!";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	 else{
		if(keyPressed == '39')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '38')
		{
			right();
			console.log("direita");
		}
	}
}
function right(){
	if(ball_x <= 700)
	{
		ball_x = ball_x + 10;
		console.log("Quando a seta para a direita for pressionada, x= " + car2X + "|  y = " + car2Y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
	
}
function left(){
	if(ball_x >= 0)
	{
		ball_x = ball_x - 10;
		console.log("Quando a seta para a esquerda for pressionada, x= " + car2X + "|  y = " + car2Y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
	

}
function up(){
	if(ball_y >= 0)
	{
		ball_y = ball_y - 10;
		console.log("Quando a seta para cima for pressionada, x= " + car2X + "|  y = " + car2Y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
	
}
function down(){
	if(car2X <= 500)
	{
		car2Y = car2Y + 10
		console.log("Quando a seta para baixo for pressionada, x= " + car2X + "|  y = " + car2Y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
	
}


	

	