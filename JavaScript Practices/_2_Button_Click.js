// Change Text With Button
function changetext(){
    document.getElementById("mytext").innerHTML = "Asalam O Aliakum";
    document.getElementById("mytext").style.background = "black";
    document.getElementById("mytext").style.color = "white"; 
    document.getElementById("mytext").style.width = "160px";
    document.getElementById("mytext").style.fontSize = "20px"; 
}

// Toggle 
function gaib(){
    let text = document.getElementById("gaib");
    text.style.display = (text.style.display === "none") ? "block" : "none";

    let btn = document.getElementById("btn");

    if(btn.value == "Gaib"){
        btn.value = "Show";
    }
    else if(btn.value == "Show"){
        btn.value = "Gaib";
    }
}

// Chnage Image on click
let count = 1;
function changeImg(){
    if(count < 5){
        ++count;
        document.getElementById("img").src = "Images/" + count + ".jpg";
    }
    else{
        count = 0;
    }
}

// Chnage Background Color
let c = 0;
function changeBackColor(){
    let arr = ["red", "blue", "orange", "black"];
    
    // Generate a random index to select a color
    let randomIndex = Math.floor(Math.random() * arr.length);

    // Apply the selected color to the background and text
    document.getElementById("color").style.backgroundColor = arr[randomIndex];
    document.getElementById("btnBackColor").style.backgroundColor = arr[randomIndex];
    // Adjust text color for contrast

}