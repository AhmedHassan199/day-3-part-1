let a = prompt(" enter first number")
let b = prompt(`enter an operation (sum,multi,subtract,division,moduls)`)
let c = prompt(" enter second number")
if(b==="sum"){
    alert(`${+a +  +c}`)

}
else if(b==="multi"){
    alert(`${+a * +c}`)
}
else if(b==="subtract"){
     alert(`${+a -  +c}`)

}
else if(b==="division"){
    alert(`${+a /  +c}`)

}
else{
     alert(`${+a %  +c}`)

}
