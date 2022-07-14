const KEY = "users";
function saveUser(userObj){

    let oldData = readUsers(); // getting localstorage data
    oldData.push(userObj); // add the new user

    //send the user to the local storage
    let user = JSON.stringify(oldData);
    localStorage.setItem(KEY, user);
}

function readUsers(){
    let data = localStorage.getItem(KEY);
    console.log(data);

    if(!data){
        return []; //creating the array
    }else{
        let list = JSON.parse(data); // parse the string to obj
        return list;
    }
}