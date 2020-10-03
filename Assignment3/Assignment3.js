  
function submitInfo() {
    var userName = $("#userName").val();
    var userRoll = $("#userRoll").val();
    var userMobile = $("#userMobile").val();
    var userAddress = $("#userAddress").val();
    var userEmail = $("#userEmail").val();

    $("#Output").empty();
    
    displayInformation(userName,userRoll,userMobile,userAddress,userEmail);
}
function displayInformation(userName,userRoll,userMobile,userAddress,userEmail){
    $("#Output").append('<li>Name: ' + userName + '</li>');
    $("#Output").append('<li>Roll Number: ' + userRoll + '</li>');
    $("#Output").append('<li>Mobile number: ' + userMobile + '</li>');
    $("#Output").append('<li>Address: ' + userAddress + '</li>');
    $("#Output").append('<li>Email id: ' + userEmail + '</li>');
}

