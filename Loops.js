console.log("hello,world")

let a = 1;

for (let i = 0; i < 100; i++) {
    console.log(a + i);
}


let obj = {
    name: "khushi",
    role: "programmer"
}
for (const key in obj) {
    console.log(key)
}

for (const c of "khushi") {
    console.log(c)
}

let i = 0;
while(i<6){
    console.log(i)
    i++;
}

let i = 0;

do {
    console.log(i)
    i++;
} while (i<10);

// For...of loop
const numArray = [1 , 2, 3 , 4, 5]
for(const num of numArray){
    console.log('Iterartion' + num)
}

// iterable and iteration with for loop
const obj = {
    [Symbol.iterator] : function(){
        let step = 0
        const iterator = {
            next : function (){
                step++
                if(step === 1){
                    return {value : 'Hello' , done : 'false'}
                }else if(step ===2){
                    return{value : 'World' ,  done : 'false'}
                }
                return {value : undefined , done : true}
            },
        }
        return iterator
    },
}
 for(const word of obj){
            console.log(word)
 }

