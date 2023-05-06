let pin = 1933.30
let bal = 5000
let pinCount = 3

cardInsert =(pinum, cash)=>{
    if ( pin != pinum, pinCount--) {
        console.log(`pin incorrect please try again ${pinCount} tries left`)
    }
    if (pin === pinum) {
        console.log(`how much would you like to withdraw ?`)
    }
    if (cash ===bal||cash <= bal) {
        console.log(`Please wait counting cash`)
    }else {
        console.log("insufficent funds")


    }
}
cardInsert(1933.30)
