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

// create the register function
function Register(){
    let userName = $("#txtName").val();
    let userLName = $("#txtLastName").val();
    let userEmail = $("#txtEmail").val();
    let userPass = $("#txtPassword").val();

    let newUser = new User(userName,userLName,userEmail,userPass);


    console.log(newUser);
}


function init(){

}

window.onload=init;