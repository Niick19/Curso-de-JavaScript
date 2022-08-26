function firstUpperCase(input){
    if (hasLength(input)){
    return (input[0].toUpperCase() + (input.slice(1).toLowerCase()))
    } else {
        return ('Insira um input com 2 ou mais caracteres!')
    }
}

function hasLength(input){
    if(input.length <= 1){
        return false
    } else {
        return true
    }
}

function isANumber(input){
    if (isNaN(input)){
        return false
    } else{
        return true
    }
}

function isOnList(object, value){
    if (object.indexOf(firstUpperCase(value)) != -1){
        return true
    } else{
        return false
    }
}

export { firstUpperCase, hasLength, isANumber, isOnList }