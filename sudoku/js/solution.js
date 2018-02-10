


function rowCheck(row) {
    return row.reduce((a, b) => a + b, 0) === 45;
}
function colCheck(colidx, ary) {
    var sum = 0;
    ary.forEach(a => sum += a[colidx]);
    return sum === 45;
}
function solveAt(x, y) {

}
function findInValid(ary) {
    var inAry = [];
    for (var i = 0; i < ary.length; i++) {
        for (var j = 0; j < ary[i].length; j++) {
            if (ary[i][j] === 0) {
                var ob = {x: i, y: j};
                inAry.push(ob);
                //   console.log(i + ", " + j + " : " + rowCheck(ary[i]) + " : " + colCheck(j, ary));
            }
        }
    }
    return inAry;
}
function solve(a) {
    var b;
    var j = 0, i = 0;
    for (i = 0; i < a.length; i++) {
        b = a[i];
        var ops = "";
        if (rowCheck(b)) {
            ops += (i + " OK ");
        } else {
            ops += (i + " FAILD ");
        }
        if (colCheck(i, a)) {
            ops += (" OK ");
        } else {
            ops += (" FAILD ");
        }
        console.log(ops);
    }
    return a;
}
function getSubAryByIndex(x, y, ary) {
    if (x < 3 && y < 3) {
        return getAryBypart(1, ary);
    }
    if (x < 3 && y < 6) {
        return getAryBypart(4, ary);
    }
    if (x < 3 && y < 9) {
        return getAryBypart(7, ary);
    }

    if (x < 6 && y < 3) {
        return getAryBypart(2, ary);
    }
    if (x < 6 && y < 6) {
        return getAryBypart(5, ary);
    }
    if (x < 6 && y < 9) {
        return getAryBypart(8, ary);
    }

    if (x < 9 && y < 3) {
        return getAryBypart(3, ary);
    }
    if (x < 9 && y < 6) {
        return getAryBypart(6, ary);
    }
    if (x < 9 && y < 9) {
        return getAryBypart(9, ary);
    }

}

function getAryBypart(no, ary) {
    var outAry = [];
    var i = 0, j = 0;
    switch (no) {
        case 1:
            i = 0;
            j = 0;
            break;
        case 2:
            i = 0;
            j = 3;
            break;
        case 3:
            i = 0;
            j = 6;
            break;
        case 4:
            i = 1;
            j = 0;
            break;
        case 5:
            i = 1;
            j = 3;
            break;
        case 6:
            i = 1;
            j = 6;
            break;
        case 7:
            i = 2;
            j = 0;
            break;
        case 8:
            i = 2;
            j = 3;
            break;
        case 9:
            i = 2;
            j = 6;
            break;
    }
    for (var i1 = i; i1 < i + 3; i1++) {
        for (var j1 = j; j1 < j + 3; j1++) {
            outAry.push(ary[i1][j1]);
        }
    }
    return outAry;
}
function foundInSubArray(no, ary) {
    for (var i = 0; i < ary.length; i++) {
        for (var j = 0; j < ary[i].length; j++) {
            if (ary[i][j] === no) {
                return true;
            }
        }
    }
    return false;
}

function foundInRow(no, row) {
    return row.indexOf(no) > -1;
}
function foundInCol(colidx, ary) {
    var sum = 0;
    ary.forEach(a => sum += a[colidx]);
    return sum === 45;
}
//main();