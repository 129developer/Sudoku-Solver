/************************************************************************
 *                          SUDOKU SOLVER                               *
 *  A 9X9 array will be supplied to the variable a                      *
 *  Need to find the values of 0                                        *
 *  Your task is to impliment a function solve to return solved array   *
 ***********************************************************************/
function print2dAry(ary) {
    ary.forEach(a => {
        var st = "";
        a.forEach(x => {
            st += ((x > 0 ? x : "_") + " ");
        });
        console.log(st + "\n");
    });
}

function get2dFromString(str) {
    var ary = [];
    var rows = str.split("\n");
    rows.forEach(x => {
        var ele = x.split(" ").map(x => parseInt(x));
        ary.push(ele);
    });
    return ary;
}

//var a = "3 1 6 5 7 8 4 9 2\n" +
//        "5 0 9 1 3 0 7 6 8\n" +
//        "4 8 7 6 2 9 5 3 1\n" +
//        "2 6 3 4 1 5 9 8 7\n" +
//        "9 7 4 0 6 3 0 2 5\n" +
//        "8 0 1 7 9 2 6 4 3\n" +
//        "1 3 0 9 4 7 2 5 6\n" +
//        "6 9 2 3 5 1 8 7 4\n" +
//        "7 4 5 2 8 6 3 1 0";

var a = "1 5 0 0 3 0 0 6 2\n" +
        "0 0 2 1 0 8 3 9 0\n" +
        "9 3 0 6 7 0 0 1 0\n" +
        "0 2 7 4 0 1 0 0 6\n" +
        "8 4 1 0 0 9 2 0 0\n" +
        "0 0 0 0 2 5 8 4 1\n" +
        "2 0 9 5 1 0 0 0 3\n" +
        "0 0 5 8 0 3 6 0 9\n" +
        "4 8 0 0 9 0 1 7 0"


function solve(a) {
//_____________________________________________
//Logic here
//_____________________________________________
    return a;
}

function main() {
    var ary = get2dFromString(a);
    var aftrAry = null;
    console.log("BEFORE");
    print2dAry(ary);
    var b4Time = performance.now();
    aftrAry = solve(ary);
    var aft6Time = performance.now();
    console.log("AFTER ");
    print2dAry(aftrAry);
    console.log("Time Took : " + aft6Time - b4Time + " ms");
}

//
//function rowCheck(row) {
//    return row.reduce((a, b) => a + b, 0) === 45;
//}
//function colCheck(colidx, ary) {
//    var sum = 0;
//    ary.forEach(a => sum += a[colidx]);
//    return sum === 45;
//}
//function solveAt(x, y) {
//
//}
//function findInValid(ary) {
//    var inAry = [];
//    for (var i = 0; i < ary.length; i++) {
//        for (var j = 0; j < ary[i].length; j++) {
//            if (ary[i][j] === 0) {
//                var ob = {x: i, y: j};
//                inAry.push(ob);
//                //   console.log(i + ", " + j + " : " + rowCheck(ary[i]) + " : " + colCheck(j, ary));
//            }
//        }
//    }
//    return inAry;
//}
//function solve(a) {
//    var b;
//    var j = 0, i = 0;
//    for (i = 0; i < a.length; i++) {
//        b = a[i];
//        var ops = "";
//        if (rowCheck(b)) {
//            ops += (i + " OK ");
//        } else {
//            ops += (i + " FAILD ");
//        }
//        if (colCheck(i, a)) {
//            ops += (" OK ");
//        } else {
//            ops += (" FAILD ");
//        }
//        console.log(ops);
//    }
//    return a;
//}
//function getAryBypart(no, ary) {
//    var outAry = [];
//    var i = 0, j = 0;
//    switch (no) {
//        case 1:
//            i = 0;
//            j = 0;
//            break;
//        case 2:
//            i = 0;
//            j = 3;
//            break;
//        case 3:
//            i = 0;
//            j = 6;
//            break;
//        case 4:
//            i = 1;
//            j = 0;
//            break;
//        case 5:
//            i = 1;
//            j = 3;
//            break;
//        case 6:
//            i = 1;
//            j = 6;
//            break;
//        case 7:
//            i = 2;
//            j = 0;
//            break;
//        case 8:
//            i = 2;
//            j = 3;
//            break;
//        case 9:
//            i = 2;
//            j = 6;
//            break;
//    }
//    for (var i1 = i; i1 < i + 3; i1++) {
//        var row = [];
//        for (var j1 = j; j1 < j + 3; j1++) {
//            row.push(ary[i1][j1]);
//        }
//        outAry.push(row);
//    }
//    return outAry;
//}
//function foundInSubArray(no, ary) {
//    for (var i = 0; i < ary.length; i++) {
//        for (var j = 0; j < ary[i].length; j++) {
//            if (ary[i][j] === no) {
//                return true;
//            }
//        }
//    }
//    return false;
//}
//function foundInRow(no, row) {
//    return row.indexOf(no) > -1;
//}
//function foundInCol(no, colidx, ary) {
//    var flag = false;
//    ary.forEach(function (a) {
//        if (no === a[colidx]) {
//            flag = true;
//        }
//    });
//    return flag;
//}
//main();
