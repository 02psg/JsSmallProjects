const randomColor = ()=>{
    const hex="0123456789ABCDEF";
    let color ="#";
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random()*16)];
        
    }
    return color;
}
// console.log(randomColor());
let hawabazi;
const change = ()=>{
    
    const land= ()=>{
        document.body.style.backgroundColor=randomColor();
}
hawabazi =setInterval(land,1000)
}

const stop = ()=>{
    console.log("button clicked stop");
    clearInterval(hawabazi);
}

document.querySelector('.button-36').addEventListener('click',change)
document.querySelector('.button-24').addEventListener('click',stop)


