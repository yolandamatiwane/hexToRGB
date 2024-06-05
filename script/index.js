let inp = document.querySelector('#hex')
let out_1 = document.querySelector('#r')
let out_2 = document.querySelector('#g')
let out_3 = document.querySelector('#b')
let btn = document.querySelector('button')

function hexToRgb(hex){
    let r = parseInt(hex.substring(0,2),16);
    let g = parseInt(hex.substring(2,4),16);
    let b = parseInt(hex.substring(4,6),16)
    return {r,g,b};
}

btn.addEventListener('click',()=>{
    let hexColor = inp.value
    out_1 = hexToRgb(hexColor)

})