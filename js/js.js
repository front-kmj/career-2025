"use strict";

$(function(){
    var listBox = $(".list-box"),
        listBoxLength = $(".list-box").length,
        pLine = $(".p-line li .num"),
        pLineLength = $(".p-line").length;

    for(var j=0;j<listBoxLength;j++){
        listBox.eq(j).find(pLine).each(function(i){
            i = i+1;
            $(this).text(i + ".");
            if(i == pLineLength+1){return false;}
        });
    };
});

