const VALUE_EMPTY = 1;
const VALUE_X = 2;
const VALUE_O = 3;


const size = 65;

function Cell(x, y){
    this.x = x;
    this.y = y;
    this.value = VALUE_EMPTY;
    this.getHtml = function(){
        var top = x * size;
        var left = y * size;
        var cellHtml = '<button id="cell-'+x+'-'+y+'" onclick="play('+x+','+y+')" class="cell" style="position: absolute; width: '+
        size+'px; height:'+
        size+'px; left:'+
        left+'px; top:'+
        top+'px; line-height: '+
        size+'px;"></button>';
        return cellHtml;
    };
    
    this.draw = function(){
        var cellDiv = document.getElementById("cell-" + x + "-" + y);
        switch(this.value){
            case VALUE_X:
                cellDiv.innerHTML = "X";
                break;
            case VALUE_O:
                cellDiv.innerHTML = "O";
                break;
        }
    }
}

function GameBoard(rows, cols, elementId) {
    this. rows = rows;
    this. cols = cols;
    this.elementId = elementId;
    this.turn = VALUE_O;
    this.cells = [];
    this.isOver = false;

    this.draw = function () {
        var gameBoardDiv = document.getElementById(this.elementId);
        gameBoardDiv.innerHTML = "";
        for(var i = 0; i < this.rows; i++){
            var row = [];
            this.cells.push(row);
            for(var j = 0; j < cols; j++){
                var cell = new Cell(i, j);
                row.push(cell);
                gameBoardDiv.innerHTML += cell.getHtml();
            }
        }
    };

    this.play = function(x, y){
        if(this.isOver){
            return;
        }
        var cell = this.cells[x][y];
        if(cell.value === VALUE_EMPTY){
            cell.value = this.turn;
            cell.draw();
            this.check(x, y);
            var node = document.getElementById('turn');
            var play1 = document.getElementById("name1").value;
            var play2 = document.getElementById("name2").value;
            if(this.turn === VALUE_O){
                this.turn = VALUE_X;
                let node = document.getElementById('turn');
                node.innerHTML = "Lượt đi của " + play1;
            } else {
                this.turn = VALUE_O;
                node.innerHTML = "Lượt đi của " + play2;
            }
        } else {
            alert("Ô này đã được chọn, vui lòng chọn ô khác");
        }
    }

    this.check = function(x, y){
        var cell = this.cells[x][y];
        //
        var count = 1;
        var i = 1;
        while((y + i < this.cols) && this.cells[x][y + i].value === cell.value){
            count++;
            i++
        }
        var i = 1;
        while((y - i >= 0) && this.cells[x][y - i].value === cell.value){
            count++;
            i++;
        }
        this.endGame(count);
        
        //
        var count = 1;
        var i = 1;
        while((x + i < this.rows) && this.cells[x + i][y].value === cell.value){
            count++;
            i++;
        }
        var i = 1;
        while((x - i >= 0) && this.cells[x - i][y].value === cell.value){
            count++;
            i++;
        }
        this.endGame(count);

        //
        var count = 1;
        var i = 1;
        var j = 1;
        while((y + i < this.cols) && (x + i < this.rows) && this.cells[x + i][y + j].value === cell.value){
            count++;
            i++;
            j++;
        }
        var i = 1;
        var j = 1;
        while((x - i >= 0) && (y - j >= 0) && this.cells[x - i][y - j].value === cell.value){
            count++;
            i++;
            j++;
        }
        this.endGame(count);

        //
        var count = 1;
        var i = 1;
        var j = 1;
        while((y + j < this.cols) && (x - i >= 0) && this.cells[x - i][y + j].value === cell.value){
            count++;
            i++;
            j++;
        }
        var i = 1;
        var j = 1;
        while((y - j >= 0) && (x + i < this.rows) && this.cells[x + i][y - j].value === cell.value){
            count++;
            i++;
            j++;
        }
        this.endGame(count);
    };

    this.endGame= function(count){
        var play1 = document.getElementById("name1").value;
        var play2 = document.getElementById("name2").value;
        var win =  " đã giành chiến thắng!";
        
        if(count >= 5 && this.turn == VALUE_O){
            this.isOver = true;
            alert(play1 + win);
        }else if(count >= 5 && this.turn == VALUE_X){
            this.isOver = true;
            alert(play2 + win);
        }
    };
}

function play(x, y){
    gameBoard.play(x, y);
}

function start(){
    var row = document.getElementById("row").value;
    var col = document.getElementById("column").value;

    if((row >= 5 && row <= 10) && (col >= 5 && col <= 10)){
        gameBoard = new GameBoard(row, col, "main");
        gameBoard.draw();
    } else {
        alert("Nhập sai giá trị số hàng và số cột (Nhập từ 5-10)")
    }
    
}
var gameBoard;
// start();



















