let rand = num()
let checker = () => {
    if(rand === 5){
        console.log(`lucky number`, rand)
    }else if (rand % 2 === 0){
        console.log(`even`,rand)
    }else{
        console.log(`odd`, rand)
    }
}
checker()
