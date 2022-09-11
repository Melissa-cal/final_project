

function change_bg_color1(){
    document.getElementById("hover_effect2").style.backgroundColor = "#a3a8ad";
}

function change_bg_color2(){
    document.getElementById("hover_effect3").style.backgroundColor = "#a3a8ad";
}
function change_bg_color3(){
    document.getElementById("hover_effect4").style.backgroundColor = "#a3a8ad";
}

function increase_font(){
    document.getElementById("hover_effect1").style.fontSize = "1.2em";
}


const url = "https://api.adviceslip.com/advice"
let advice_section = document.getElementById("advice_text");

async function advice(){
    const response = await fetch(url);
    const response_json = await response.json();
    advice_section.innerHTML = response_json.slip.advice
}
advice()
