let person = {
    name: 'Oliver',
    age: 19,
    favSong: ['Real slim shady', 'Man down'],
    sayHi(){
        return `Hello my name is ${this.name}`
    }
  }

console.log(person.sayHi())

person.name = "Leon Edwards"
console.log(person["name"])

person.name = "Conor Mc Gregor"
console.log(person.name)

let alarm = 'no alarm'
let day = 'monday'

let clock = {
    weekdayAlarm:'alarm needed',
    weekendAlarm:'no alarm needed'
}

if(day === 'saturday'||day === 'sunday'){
    alarm = clock.weekendAlarm
}else{
    alarm = clock.weekendAlarm
}
console.log(alarm)

let pet = {
    name: 'Pixie',
    typeofpet: 'Dog',
    age: '6',
    colour: 'Grey',
    eat(){
        return `${this.name} is drinking`
    },
    drink(){
        return `${this.name} is drinking`
    }
}
console.log(pet.eat())
console.log(pet.drink())