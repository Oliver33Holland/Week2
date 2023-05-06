let coffeeIsGrinding = true

let pressGrindBeans = () => {
    if (coffeeIsGrinding == true) {
        console.log("stopping the grind")
        coffeIsGrinding = false
    } else {
        console.log("grinding about to begin")
        coffeeIsGrinding = true
    }
}

//  pressGrindBeans()

let cashWithdrawal = (amount,accnum) => {
    console.log(`withdrawing ${amount} from account ${accnum}`)
}
// cashWithdrawal(30, 88778877)

const multiplyByNineFifths = (celsius) => {
    return celsius * 9/5
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};
// console.log(getFahrenheit(15))

let minus = (Fahrenheit) => {
    return Fahrenheit - 32
}

let getCelsius = (Fahrenheit) => {
    return minus(Fahrenheit) * 5/9
}
console.log(getCelsius(59))