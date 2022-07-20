function displayUsers(usersArray){
    // travel the usersArray
    for (let i = 0; i < usersArray.length; i++) {
        
        $("#table-content").append(`
            <tr>
                <th scope="row">${i+1}</th>
                <td>${usersArray[i].firstName}</td>
                <td>${usersArray[i].lastName}</td>
                <td>${usersArray[i].email}</td>
                <td>${usersArray[i].password}</td>
            </tr>
        `);
        
    }
    // get the user
    // create the html row element
    // append the row to the html table
}


function init(){

    console.log("Listing users...");
    let users = readUsers();

    displayUsers(users);
    
    $("#userTable").hide();
    $("#hideTable").hide();

    // hook events
    $("#showTable").click(function(){
        
        $("#hideTable").show();
        $("#showTable").hide();

    });

    $("#showTable").click(function(){
        $("#userTable").slideDown(1000);

        console.log("Sliding down...");
    });


    $("#hideTable").click(function(){
        
        
        $("#hideTable").hide();
        $("#showTable").show();
        

    });

    $("#hideTable").click(function(){
        $("#userTable").slideUp(1000);
        console.log("Sliding up...");
    });

}

window.onload = init;