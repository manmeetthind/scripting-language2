$(document).ready(function(){
    var myJson = {"name": "Supreet", "age": 21, "city":"Montreal"};
    $("p").html(myJson.name + ", " + myJson.age + ", " + myJson.city);
});