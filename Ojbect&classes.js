let obj = {
    a : 1,
    b : "Khushi"
}

console.log(obj)

let animal = {
    eats : true
};

let rabbit = {
    jumps: true
};
// sets rabbit.[[prototype]]  = animal
rabbit._proto_ = animal;  


class Animal{
    constructor (){
        console.log("O")
    }

}
