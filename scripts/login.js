function Login(){
    let User = $("#txtUser").val();
    let Pass = $("#txtPass").val();

    let UsersList = readUsers();


    let flag = true;

    if(User == "" || Pass == ""){
        $("#messageUser").html(`<p class="input-error"> You must add your user and password. </p>`);
        setTimeout(function(){
            $("#messageUser").addClass("hide");
        },3000);
        
    }else{
        for (let i = 0; i < UsersList.length; i++) {
            if(User == UsersList[i].firstName && Pass == UsersList[i].password){
                alert("Welcome " + User + "!");
                window.location="users.html";

            }else{

                flag=false;
            }


            if(!flag){
                $("#messageUser").html(`<p class="input-error"> The user is incorrect or it doesn't exists. </p>`);
                setTimeout(function(){
                    $("#messageUser").addClass("hide");
                }, 3000);
                
            }
            
        }
    }

}

function init(){
    $("#loginBtn").click(Login);
}

window.onload = init;