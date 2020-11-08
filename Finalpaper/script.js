function hideParagraph(){
    $("h1").hide(); 
    $("#hidePara").hide(); 
    $("#showPara").show(); 
}

function showParagraph(){
    $("h1").show();
    $("#hidePara").show(); 
    $("#showPara").hide();
}


$(document).ready(function(){
    var myJson = {"name": "john doe", "age": 21, "city":"Montreal"};
    $("p").html(myJson.name + ", " + myJson.age + ", " + myJson.city);
});

