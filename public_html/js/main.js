/************************************************************************
 *                          SUDOKU SOLVER                               *
 *  A 9X9 array will be supplied to the variable a                      *
 *  Need to find the values of 0                                        *
 *  Your task is to impliment a function solve to return solved array   *
 ***********************************************************************/

var pzlary = [];



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


function solve(a) {
//_____________________________________________
//Logic here
//_____________________________________________
    return a;
}

function  setdata() {
    var a = "1 5 0 0 3 0 0 6 2\n" +
            "0 0 2 1 0 8 3 9 0\n" +
            "9 3 0 6 7 0 0 1 0\n" +
            "0 2 7 4 0 1 0 0 6\n" +
            "8 4 1 0 0 9 2 0 0\n" +
            "0 0 0 0 2 5 8 4 1\n" +
            "2 0 9 5 1 0 0 0 3\n" +
            "0 0 5 8 0 3 6 0 9\n" +
            "4 8 0 0 9 0 1 7 0";
    pzlary.push(a);

    var a = "1 5 0 0 3 0 0 6 2\n" +
            "0 0 2 1 0 8 3 9 0\n" +
            "9 3 0 6 7 0 0 1 0\n" +
            "0 2 7 4 0 1 0 0 6\n" +
            "8 4 1 0 0 9 2 0 0\n" +
            "0 0 0 0 2 5 8 4 1\n" +
            "2 0 9 5 1 0 0 0 3\n" +
            "0 0 5 8 0 3 6 0 9\n" +
            "4 8 0 0 9 0 1 7 0";
    pzlary.push(a);

    var a = "3 1 6 5 7 8 4 9 2\n" +
            "5 0 9 1 3 0 7 6 8\n" +
            "4 8 7 6 2 9 5 3 1\n" +
            "2 6 3 4 1 5 9 8 7\n" +
            "9 7 4 0 6 3 0 2 5\n" +
            "8 0 1 7 9 2 6 4 3\n" +
            "1 3 0 9 4 7 2 5 6\n" +
            "6 9 2 3 5 1 8 7 4\n" +
            "7 4 5 2 8 6 3 1 0";
    pzlary.push(a);


    document.getElementById('data').value = pzlary.pop();
}

function main() {
    var a = document.getElementById("data");
    var ary = get2dFromString(a.value);
    tableBuilder(ary);
}

function tableBuilder(ary) {
    var div = document.getElementById("tableSpace");
    var table = '<table style="width:30" id="table">';
    for (var i = 0; i < ary.length; i++) {
        table += "<tr>";
        for (var j = 0; j < ary[i].length; j++) {
            if (ary[i][j]) {
                table += '<td width = "20">' + ary[i][j] + '</td>';
            } else {
                table += '<td width = "20" contenteditable="true"></td>';
            }
        }
        table += "</tr>";
    }
    table += "</table>";
    div.innerHTML = (table);
}

function getTableData() {
    var innerHTML = "";
    var ary = [];
    var myTab = document.getElementById('table');
    for (i = 0; i < myTab.rows.length; i++) {
        var objCells = myTab.rows.item(i).cells;
        var row = [];
        for (var j = 0; j < objCells.length; j++) {
            row.push((objCells.item(j).innerHTML ? parseInt(objCells.item(j).innerHTML) : 0));
            innerHTML = (innerHTML ? innerHTML + ' ' : '') + (objCells.item(j).innerHTML ? objCells.item(j).innerHTML : 0);
        }
        ary.push(row);
        innerHTML = innerHTML + '\n';
    }
    console.log(innerHTML);
    return ary;
}

function checkValid() {
    var valid = true;
    var ary = getTableData();
    for (var i = 0; i < ary.length; i++) {
        for (var j = 0; j < ary[i].length; j++) {
            if (ary[i][j] && checkValidCell(i, j, ary)) {
                setValidCellByIndex(i, j, true);
            } else {
                setValidCellByIndex(i, j, false);
                valid = false;
            }
        }
    }
    setTimeout("setAllValid()", 5000);
    if (valid) {
        alert("Congratulations get ready for the next round...! ");
        document.getElementById('data').value = pzlary.pop();
        var a = document.getElementById("data");
        var ary = get2dFromString(a.value);
        tableBuilder(ary);
    }
}

function checkValidCell(x, y, ary) {
    var ele = ary[x][y];
    var row = ary[x];
    var col = [];
    var subary = getSubAryByIndex(x, y, ary);
    ary.forEach(row => col.push(row[y]));
    var isvalidrow = row.indexOf(ele) === row.lastIndexOf(ele);
    var isvalidcol = col.indexOf(ele) === col.lastIndexOf(ele);
    var isvalidsubAry = col.indexOf(ele) === col.lastIndexOf(ele);
    return isvalidrow && isvalidcol && isvalidsubAry;
}

function setAllValid() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            setValidCellByIndex(i, j, true);
        }
    }
}

function getCellByIndex(x, y) {
    var myTab = document.getElementById('table');
    return myTab.rows.item(x).cells.item(y);
}

function setValidCellByIndex(x, y, valid) {
    var myTab = document.getElementById('table');
    myTab.rows.item(x).cells.item(y).setAttribute("valid", valid);
}
