let name="Andrew Mead "

//length 
console.log(name.length)

//convert to upper case
console.log(name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

//Includes method
let password='abcdsdsfsfpassword'
console.log(password.includes('password'))

//Trim
console.log(name.trim())

let isValidPassword =function(testString){
    if(testString.length>0&&testString.includes('password')){
    return true
    }
    else{
        return false
    }
}
console.log('Next')
console.log(isValidPassword('asddfd'))
console.log(isValidPassword('dsdpassword'))
console.log(isValidPassword('sdsd '))