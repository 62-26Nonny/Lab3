
const images = document.querySelectorAll('img')
const board = ['','','','','','','','',''];
var current_play = 'X';

function checkEnd(){
    if((current_play==board[0]&&board[0]==board[1]&&board[1]==board[2])||
    (current_play==board[3]&&board[3]==board[4]&&board[4]==board[5])||
    (current_play==board[6]&&board[6]==board[7]&&board[7]==board[8])||
    (current_play==board[0]&&board[0]==board[3]&&board[3]==board[6])||
    (current_play==board[1]&&board[1]==board[4]&&board[4]==board[7])||
    (current_play==board[2]&&board[2]==board[5]&&board[5]==board[8])||
    (current_play==board[0]&&board[0]==board[4]&&board[4]==board[8])||
    (current_play==board[2]&&board[2]==board[4]&&board[4]==board[6])){
        return true;
    }
    else{
        return false;
    }
}

function checkPlay(){
    if(board.includes('')){
        return true;
    }
    else{
        return false;
    }
}

function random_play(){
    while(true){
        let x = Math.floor(Math.random() * 9);
        if(images[x].className=='white'){
            images[x].setAttribute('class', 'O');
            board[x] = 'O';
            current_play = 'O';
            images[x].src = 'https://imgprd19.hobbylobby.com/6/f0/3c/6f03cacf1a6d78abcaa8e3655485f2f7c52978fe/350Wx350H-192948-0320-px.jpg';
            break;
        }
    }
    if(checkEnd()){
        document.getElementById('result').innerHTML = current_play + ' is Winner!!';
    }
}

images.forEach(function(image){
    image.addEventListener('click', function() {
        if(image.className!='white'){
            console.log('test');
        }
        else if(image.className=='white'){
            image.setAttribute('class', 'X');
            board[image.id] = 'X';
            current_play = 'X';
            image.src = 'https://image.freepik.com/free-icon/x-symbol_318-1407.jpg';
            if(checkPlay()){
                if(checkEnd()){
                    document.getElementById('result').innerHTML = current_play + ' is Winner!!';
                }
                else{
                    random_play();
                }
            }
            else{
                document.getElementById('result').innerHTML = 'Draw!!';
            }
        }
    });
});






