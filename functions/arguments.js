let add= function(a,b){
    return a+b
}

let result = add(10,11)
console.log(result)

let getScoreText =function(name='',score=0){
    return 'Name: '+name+'- Score: '+score
}

let scoreText=getScoreText(undefined,11)
console.log(scoreText)

let name1='Jen'
console.log(`Hey, my name is ${name1} !`)

let getTip= function(total,tipPercent=.2){
    let tip=total*tipPercent
    return `A ${tipPercent*100}% tip on $${total} would be ${tip}`
}