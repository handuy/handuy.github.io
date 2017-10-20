function changeFontSize() {
    var listOfPara = document.getElementsByClassName("para");
    for(var i=0; i<listOfPara.length; i++) {
        listOfPara[i].style.fontSize = "20px";
    }
}

function increaseFontSize() {
    var para1 = document.getElementById("para1").style.fontSize;
    para1 = parseInt(para1) + 1;
    if (para1 > 30) {
        para1 = 30;
        document.getElementById("para1").style.fontSize = "" + para1 + "px";
    } else {
        document.getElementById("para1").style.fontSize = "" + para1 + "px";
    }
}

function decreaseFontSize() {
    var para1 = document.getElementById("para1").style.fontSize;
    para1 = parseInt(para1) - 1;
    if (para1 < 10) {
        para1 = 10;
        document.getElementById("para1").style.fontSize = "" + para1 + "px";
    } else {
        document.getElementById("para1").style.fontSize = "" + para1 + "px";
    }
} 

function changeColor() {
    var listOfPara = document.getElementsByClassName("para");
    listOfPara[0].style.color = "blue";
    listOfPara[1].style.color = "yellow";
    listOfPara[2].style.color = "red";
}

function changeBgColor() {
    document.body.style.backgroundColor = "cyan";
}

function copyContent() {
    var para2 = document.getElementById("para2").innerHTML;
    document.getElementById("para1").innerHTML = para2;
}