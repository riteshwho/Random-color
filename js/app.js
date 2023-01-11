const getColor = () => {
    //Hex Code
    const randomNumber = Math.floor(Math.random()* 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    console.log(randomCode);
    document.getElementById('color-code').innerText = randomCode;

    //for instant copy to clipboard
    navigator.clipboard.writeText(randomCode);
    
}

//Event call
document.getElementById('btn').addEventListener('click', getColor)



//init call
getColor();