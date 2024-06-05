let inp = document.querySelector('#hex')
let out_1 = document.querySelector('#r')
let out_2 = document.querySelector('#g')
let out_3 = document.querySelector('#b')
let btn = document.querySelector('button')

let string = ''

function toRgb(r){
    m = r
    switch (true) {
        case m<10:
            return m
            break;
    
        case m == 'A':
            return 10
            break;
    
        case m == 'B':
            return 11
            break;
    
        case m == 'C':
            return 12
            break;
    
        case m == 'D':
            return 13
            break;
    
        case m == 'E':
            return 14
            break;
        case m == 'F':
            return 15
            break;
    
        default:
            break;
    }
}

btn.addEventListener('click',()=>{
    string = inp.value
    let [redW,redR] = string.substring(1,3).split('')
    let [greenW,greenR] = string.substring(3,5).split('')
    let [blueW,blueR] = string.substring(5,7).split('')
    function result_r(){
        let red = eval(`(${toRgb(redW)}*${16})+${toRgb(redR)}`)
        return red;
    }
    function result_g(){
        let green = eval(`(${toRgb(greenW)}*${16}) + ${toRgb(greenR)}`)
        return green;
    }
    function result_b(){
        let blue = eval(`${toRgb(blueW)} *${16}+${toRgb(blueR)}`)
        return blue;
    }
    out_1.innerText = result_r()
    out_2.innerText = result_g()
    out_3.innerText = result_b()

})
