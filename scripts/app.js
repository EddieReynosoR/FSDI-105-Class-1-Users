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

    let Pass = $("#txtPassword").val();
    let PassC = $("#txtPasswordC").val();

    if(Pass != PassC){
        valid = false;
        alert("The passwords must be the same.");
        $("#txtPasswordC").addClass("input-error");
    }
    

    let validName = readUsers();
    
    for (let i = 0; i < validName.length; i++) {
        if($("#txtName").val() == validName[i].firstName);{
            alert("That name already exists.");
            valid = false;
        }
        
    }

    return valid;
}

function validPass(){
    console.log("Validating password...");

    let Pass = $("#txtPassword").val();
    let password = $("#txtPassword");


    if(Pass.length < 6){
        password.css("background-color", "#ff8e8e");
        //password.addClass();
    }
    else{
        password.css("background-color", "#7aff59");

    }

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
        Clear();

    }

    //console.log(newUser);

}

function Clear(){
    $("#txtName").val("");
    $("#txtLastName").val("");
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtPasswordC").val("");

    $("#txtUser").val("");
    $("#txtPass").val("");
}


function init(){
    $("#userForm").hide();
    $("#hideForm").hide();

    // hook events
    $("#newUser").click(function(){
        
        $("#hideForm").show();
        $("#newUser").hide();

    });

    $("#newUser").click(function(){
        $("#userForm").slideDown(2000);

        console.log("Sliding down...");
    });


    $("#hideForm").click(function(){
        
        
        $("#hideForm").hide();
        $("#newUser").show();
        

    });

    $("#hideForm").click(function(){
        $("#userForm").slideUp(2000);
        console.log("Sliding up...");
    })

    // $("#hideForm").click(function(){
    //     $("userForm").slideUp();
    // });

    $("#txtPassword").keyup(validPass);
    



}

window.onload=init;

//localStorage.getItem(key);
//localStorage.setItem(user, Eduardo);

