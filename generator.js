function makeIcon(text) {
    var can = document.createElement('canvas');
    can.style.border = "solid 1px";
    can.style.margin = "2px";
    var ctx = can.getContext('2d');
    
    var width = 6;
    var height = 5;
    var steps = 20;
    var scale = Math.floor(100/width);
    
    can.width = width * scale;
    can.height = height * scale;
    var board = new Uint8Array(width * height);
    var rand = sinrand.create(text);
    var numColors = 2;
    var x = Math.floor((width-1)/2), y = Math.floor((height-1)/2);
    var starti = x+y*width;
    for(var stepsLeft = steps; stepsLeft > 0; --stepsLeft) {
        x = Math.max(0, Math.min(width-1, x+rand([-1, 1])));
        y = Math.max(0, Math.min(height-1, y+rand([-1, 1])));
        ++board[x+y*width];
        if(board[x+y*width]>=numColors-1) ++numColors;
        /*if(!rand(100) && stepsLeft > 1) {
            x = rand(width);
            y = rand(height);
        }*/
    }
    var endi = x+y*width;
    var colors = [];
    var colorRand = rand(215, 390);
    for(var i = 0; i <= 1; i += 1/(numColors-1))
        colors.push('hsl('+(i*360+colorRand)%360+','+(Math.pow(i,1.5)*50+50)+'%,'+(Math.pow(i,1.7)*-40+90)+'%)');
    console.log(colors);
    colors[0] = 'black';
    
    for(var i = 0; i < width * height; ++i) {
        if(i === starti) ctx.fillStyle = colors[numColors-1];
        else if(i === endi) ctx.fillStyle = 'black';
        else ctx.fillStyle = colors[board[i]];
        ctx.fillRect((i%width) * scale, Math.floor(i/width) * scale, scale, scale);
    }
    return can;
}