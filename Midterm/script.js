function submitInfo() {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var bloodGroup = $("#bloodGroup").val();
    var mobileId = $("#mobileNumber").val();
    var studentId = $("#studentId").val();
    //var car = $("#yes").val();
    var age = $("#age").val();
    var gender = $("#gender").val();
    var martialStatus = $("#status").val();
   

    $("#Output").empty();
    
    displayInformation(firstName,lastName,bloodGroup,mobileId,studentId,age,gender,martialStatus);
}
function displayInformation(firstName,lastName,bloodGroup,mobileNumber,studentId,age,gender,status){
    $("#Output").append('<li>First Name: ' + firstName + '</li>');
    $("#Output").append('<li>Last Name: ' + lastName + '</li>');
    $("#Output").append('<li>Blood Group: ' + bloodGroup + '</li>');
    $("#Output").append('<li>Mobile Number: ' + mobileNumber + '</li>');
    $("#Output").append('<li>Student Id: ' + studentId + '</li>');
    //$("#Output").append('<li>Car: ' + yes + '</li>');
    $("#Output").append('<li>Age: ' + age + '</li>');       
    $("#Output").append('<li>Gender: ' + gender + '</li>');
    $("#Output").append('<li>Status: ' + status + '</li>');
}