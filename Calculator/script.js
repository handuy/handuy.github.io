$(document).ready(function(){
    var array = [];
    var stringNumber = "";
    
    $(".mathOperator").click(function(){
        if (array.indexOf("=") == -1) {
            array.push($(this).text());
        } else {
            array.splice(1, 1);
            array.push($(this).text());
        }
        stringNumber = array.join("");
        //console.log(stringNumber);
        $("#result > span").text(stringNumber).css({
            "text-align": "right"
        });
    });

    $(".paren").click(function(){
        if (array.indexOf("=") == -1) {
            array.push($(this).text());
        } else {
            array = [];
            array.push($(this).text());
        }
        stringNumber = array.join("");
        $("#result > span").text(stringNumber).css({
            "text-align": "right"
        });
    });

    $(".number").click(function(){
        if (array.indexOf("=") == -1) {
            array.push(parseInt($(this).text()));
        } else {
            array = [];
            array.push(parseInt($(this).text()));
        }
        stringNumber = array.join("");
        $("#result > span").text(stringNumber);
    });

    $(".square").click(function(){
        if (array.indexOf("=") != -1) {
            array = array.slice(0,1);
        }
        //console.log(array);
        array.push($(this).text().slice(1));
        stringNumber = array.join("").replace("²", "**2");
        stringNumber = stringNumber.replace(/ x /gi, "*").replace(/ ÷ /gi, "/");
        //console.log(array);
        //console.log(stringNumber);
        var squareResult = eval(stringNumber);
        $("#result > span").text(squareResult);
        array = [squareResult, "="];
    });

    $(".square-root").click(function(){
        if (array.indexOf("=") != -1) {
            array = array.slice(0,1);
        }
        array.push($(this).text());
        stringNumber = array.join("").replace("√", "**0.5");
        stringNumber = stringNumber.replace(/ x /gi, "*").replace(/ ÷ /gi, "/");
        //console.log(array);
        //console.log(stringNumber);
        var squareRoot = eval(stringNumber);
        $("#result > span").text(squareRoot);
        array = [squareRoot, "="];
    });

    $(".factorial").click(function(){
        if (array.indexOf("=") != -1) {
            array = array.slice(0,1);
        }
        array.push($(this).text());
        stringNumber = array.join("");
        stringNumber = stringNumber.replace(/ x /gi, "*").replace(/ ÷ /gi, "/");
        var newstr = stringNumber.substring( 0, stringNumber.indexOf("!") );
        var facNum = eval(newstr);
        //console.log(typeof facNum, facNum);
        if (!Number.isInteger(facNum) || facNum < 0) {
            $("#result > span").text("Invalid number");
            return;
        }
        if (facNum == 0) {
            $("#result > span").text(1);
            return;
        }
        var list = [];
        while (facNum >= 1) {
            list.push(facNum);
            facNum = facNum - 1;
        }
        //console.log(list);
        var facResult = list.reduce(function(result, num) {
            return result * num;
        }, 1);
        $("#result > span").text(facResult);
        array = [facResult, "="];
    });

    $(".percentage").click(function(){
        if (array.indexOf("=") != -1) {
            array = array.slice(0,1);
        }
        array.push($(this).text());
        stringNumber = array.join("").replace("%", "/100");
        stringNumber = stringNumber.replace(/ x /gi, "*").replace(/ ÷ /gi, "/");
        //console.log(array);
        console.log(stringNumber);
        var percenageResult = eval(stringNumber);
        $("#result > span").text(percenageResult);
        array = [percenageResult, "="];
    })

    $(".equal").click(function(){
        var str = $("#result > span").text();
        var newStr = str.replace(/ x /gi, "*");
        newStr = newStr.replace(/ ÷ /gi, "/");
        var result = eval(newStr);
        array.push("=");
        $("#result > span").text(result).css({
            "text-align": "right"
        });
        array = [result, "="];
        //console.log(array);
    });
    
    $("#delete").click(function(){
        if(array.indexOf("=") == -1){
            array.pop();
        } else {
            array = [];
        }
        stringNumber = array.join("");
        $("#result > span").text(stringNumber).css({
            "text-align": "right"
        });
    });

    $(".dot").click(function(){
        if(array.indexOf("=") == -1){
            array.push(".");
        } else {
            array = [];
            array.push(".");
        }
        stringNumber = array.join("");
        $("#result > span").text(stringNumber).css({
            "text-align": "right"
        });  
    });

    $("#reset").click(function(){
        array = [];
        $("#result > span").text(0);
    })
});