let num = [2,9,3,15,22,14,444,34,67,54,15,45]

num.sort(function(a,b){
    if (a < b){
        return -1
    }
    if (a > b){
        return 1
    }
    return 0
})
console.log(num)    