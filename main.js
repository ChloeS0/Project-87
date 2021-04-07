var canvas= new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_height=30;
block_width=30;
block_images_object="";
player_images_object="";
    
function player()
{
    fabric.Image.fromURL("player.png", function(Img){
    player_images_object=Img;
    player_images_object.scaleToWidth(150);
    player_images_object.scaleToHeight(140);
    player_images_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_images_object);
    } );
}   

function new_image(getimage)
{
    fabric.Image.fromURL(getimage, function(Img){
    block_images_object=Img;
    block_images_object.scaleToWidth(block_width);
    block_images_object.scaleToHeight(block_height);
    block_images_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_images_object);
    } );
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="80" && e.shiftKey==true)
    {
    block_height=block_height+10;
    block_width=block_width+10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
    }

    if(keypressed=="77" && e.shiftKey==true)
    {
    block_height=block_height-10;
    block_width=block_width-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
    }

    if(keypressed=="37")
    {
        left();
        console.log("left");
    }
    if(keypressed=="38")
    {
        up();
        console.log("up");
    }
    if(keypressed=="39")
    {
        right();
        console.log("right");
    }
    if(keypressed=="40")
    {
        down();
        console.log("down");
    }
    if(keypressed=="70")
    {
        new_image("spiderman_face.png");
        console.log("f");
    }
    if(keypressed=="66")
    {
        new_image("spiderman_body.png");
        console.log("b");
    }
    if(keypressed=="76")
    {
        new_image("spiderman_legs.png");
        console.log("l");
    }
    if(keypressed=="82")
    {
        new_image("spiderman_right_hand.png");
        console.log("r");
    }
    if(keypressed=="72")
    {
        new_image("spiderman_left_hand.png");
        console.log("h");
    }
}

function up()
{
    if(player_y>=0)
    {
        player_y=player_y-block_height;
        console.log("the height of the block is= " + block_height);
        console.log("the X position of the player= " + player_x + " , the Y position of the player= " + player_y);
        canvas.remove(player_images_object);
        player();

    }
}
function down()
{
    if(player_y<=460)
    {
        player_y=player_y+block_height;
        console.log("the height of the block is= " + block_height);
        console.log("the X position of the player= " + player_x + " , the Y position of the player= " + player_y);
        canvas.remove(player_images_object);
        player();

    }
}

function right()
{
    if(player_x<=850)
    {
        player_x=player_x+block_width;
        console.log("the width of the block is= " + block_width);
        console.log("the X position of the player= " + player_x + " , the Y position of the player= " + player_y);
        canvas.remove(player_images_object);
        player();

    }
}

function left()
{
    if(player_x>=0)
    {
        player_x=player_x-block_width;
        console.log("the width of the block is= " + block_width);
        console.log("the X position of the player= " + player_x + " , the Y position of the player= " + player_y);
        canvas.remove(player_images_object);
        player();

    }
}

