const getcolor = () => {
    //color are in hex code
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#"+randomNumber.toString(16);
    // console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    //automatcially this number gets copied to uour clipboard
    navigator.clipboard.writeText(randomCode);
}

//event call
document.getElementById("btn").addEventListener("click", getcolor)

//initial call
getcolor();