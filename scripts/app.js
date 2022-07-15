// create the User contructor'

// function User(fname, lname, email, password){
//     this.firstName=fname;
//     this.lastName=lname;
//     this.email=email;
//     this.password=password;
// }



class User{
    constructor(fname, lname, email, password){
        this.firstName=fname;
        this.lastName=lname;
        this.email=email;
        this.password=password;
    }
}

function isValid(user){
    // return true if the user is valid
    // return false if the user is not valid
    let valid = true;


    if(user.firstName.length == 0){
        valid = false;
        document.getElementById("messageError").innerHTML += `<p> Please, enter your first name. </p>`;
        $("#messageError").addClass("message-error");
        $("#txtName").addClass("input-error");
        console.error("Please, enter your first name");
    }

    if(user.lastName.length == 0){
        valid = false;
        document.getElementById("messageError").innerHTML += `<p> Please, enter your last name. </p>`;
        $("#messageError").addClass("message-error");
        $("#txtLastName").addClass("input-error");
        console.error("Please, enter your last name");
    }

    if(user.email.length == 0){
        valid = false;
        document.getElementById("messageError").innerHTML += `<p> Please, enter your email. </p>`;
        $("#messageError").addClass("message-error");
        $("#txtEmail").addClass("input-error");
        console.error("Please, enter a your email");
    }

    if(user.password.length == 0){
        valid = false;
        document.getElementById("messageError").innerHTML += `<p> Please, enter your password. </p>`;
        $("#messageError").addClass("message-error");
        $("#txtPassword").addClass("input-error");
        console.error("Please, enter a password");
    }

    return valid;
}

// create the register function
function Register(){
    let userName = $("#txtName").val();
    let userLName = $("#txtLastName").val();
    let userEmail = $("#txtEmail").val();
    let userPass = $("#txtPassword").val();

    let newUser = new User(userName,userLName,userEmail,userPass);

    if(isValid(newUser)){
        saveUser(newUser); // the function in on the storeManager

    }

    Clear();
    //console.log(newUser);

}

function Clear(){
    $("#txtName").val("");
    $("#txtLastName").val("");
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtPasswordC").val("");
}


function init(){

}

window.onload=init;

//localStorage.getItem(key);
//localStorage.setItem(user, Eduardo);

