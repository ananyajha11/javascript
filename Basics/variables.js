var a = 123
let b = 567
c = 8910
const d = 1111

//var is function scoped - meaning, is accessible from anywhere inside a function

function show(){
    var a =1
    for(i = 0; i <= 10; i++){
        var b = i
    }
    console.table([a,b])
}
show()

//Here, a and b both are accessible but with let if declared inside a block (ex: for loop) wouldn't be accesible outside loop 