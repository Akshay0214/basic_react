function generator(length, isNum, isChar){
    let pass = ""
    let combination = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNum) combination += "0123456789"
    if(isChar) combination += "@#$%^&*()-+=_~!/"

    
    for(let i =0; i < length; i++){
        let charInd = Math.floor( Math.random() * combination.length)
        pass += combination.charAt(charInd)
    }

    
    return pass
}


export default generator;