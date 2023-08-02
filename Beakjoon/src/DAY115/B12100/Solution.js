var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

var size = Number(input.shift());
var result = 0, map = [];
for (var n = 0; n < size; n++) {
    var cache = input[n].split(' ');
    map[n] = [];
    for (var m = 0; m < size; m++) {
        map[n][m] = Number(cache[m]);
    }
}
game(0);
console.log(result);

function game(count) {
    if (count == 5) {
        for (var n = 0; n < size; n++) {
            for (var m = 0; m < size; m++) {
                if (map[n][m] > result) result = map[n][m];
            }
        }
        return;
    }

    var _map = [];
    for (var n = 0; n < size; n++) {
        _map[n] = map[n].slice();
    }

    leftGo();
    game(count + 1);
    for (var m = 0; m < size; m++) {
        map[m] = _map[m].slice();
    }
 
    rightGo();
    game(count + 1);
    for (var m = 0; m < size; m++) {
        map[m] = _map[m].slice();
    }

    topGo();
    game(count + 1);
    for (var m = 0; m < size; m++) {
        map[m] = _map[m].slice();
    }

    bottomGo();
    game(count + 1);
    for (var m = 0; m < size; m++) {
        map[m] = _map[m].slice();
    }
}

function leftGo(){
    for (var n = 0; n < size; n++) {
        var index = 0, block = 0;
        for (var m = 0; m < size; m++) {
            if (map[m][n] != 0) {
                if (block == map[m][n]) {
                    map[index - 1][n] = block * 2;
                    block = 0;
                    map[m][n] = 0;
                } else {
                    block = map[m][n];
                    map[m][n] = 0;
                    map[index][n] = block;
                    index++;
                }
            }
        }
    }
}

function rightGo() {
    for (var n = 0; n < size; n++) {
        var index = size - 1, block = 0;
        for (var m = size - 1; m >= 0; m--) {
            if (map[m][n] != 0) {
                if (block == map[m][n]) {
                    map[index + 1][n] = block * 2;
                    block = 0;
                    map[m][n] = 0;
                } else {
                    block = map[m][n];
                    map[m][n] = 0;
                    map[index][n] = block;
                    index--;
                }
            }
        }
    }
}

function topGo() {
    for (var n = 0; n < size; n++) {
        var index = 0, block = 0;
        for (var m = 0; m < size; m++) {
            if (map[n][m] != 0) {
                if (block == map[n][m]) {
                    map[n][index - 1] = block * 2;
                    block = 0;
                    map[n][m] = 0;
                } else {
                    block = map[n][m];
                    map[n][m] = 0;
                    map[n][index] = block;
                    index++;
                }
            }
        }
    }
}

function bottomGo () {
    for (var n = 0; n < size; n++) {
        var index = size - 1, block = 0;
        for (var m = size - 1; m >= 0; m--) {
            if (map[n][m] != 0) {
                if (block == map[n][m]) {
                    map[n][index + 1] = block * 2;
                    block = 0;
                    map[n][m] = 0;
                } else {
                    block = map[n][m];
                    map[n][m] = 0;
                    map[n][index] = block;
                    index--;
                }
            }
        }
    }
}
