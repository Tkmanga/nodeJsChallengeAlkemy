const Math = {}; 

function add(x1,x2) {
    return x1 + x2; 
}

function substract(x1,x2) {
    return x1-x2; 
}

function multi(x1,x2) {
    return x1*x2; 
}

function div(x1,x2) {
    if(x2 == 0 ){
        console.log('no se puede div por cero')
    }else{
        return x1/x2; 
    }

}

Math.add = add; 
Math.substract = substract; 
Math.multi = multi; 
Math.div = div; 

function hola(nombre){
    console.log(`hoola ${nombre}`)
}

module.exports = Math; 
