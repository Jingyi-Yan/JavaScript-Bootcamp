// students score,total possible score
// 15/20 -> You got a C (75%)!

let gradeCalc = function(score, totalScore){
    let perc = (score/totalScore)*100
    if(perc>90&&perc<100){
        return `You got a A ${perc}`
    }
    if(perc>80&&perc<90){
        return `You got a B ${perc}`
    }
    if(perc>70&&perc<80){
        return `You got a C ${perc}`
    }
}

let result = gradeCalc(19,20)
console.log(result)