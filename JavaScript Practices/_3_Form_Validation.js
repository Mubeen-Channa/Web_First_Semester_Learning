function validateForm(){
    let name = document.getElementById("name").value;
    let pass = document.getElementById("password").value;

    let passLen = pass.length;

    if(name === "" || pass === ""){
        alert("Name or Password is missing!");
        return false;
    }
    if( passLen < 8 ){
        alert("Password Should be Greater than 8 Charaters.");
        return false;
    }
    else{
        alert("Form Has Been Submited.")
        document.getElementById("form").reset();
        return true;
    }
}