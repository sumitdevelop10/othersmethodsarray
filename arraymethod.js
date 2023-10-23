let num = [510, 543, 527,564,789]
num.sort()
console.log(num)







let compare = (a ,b) =>{
    return a - b
    }
    
    let num = [1,45,30000,2045,750]
    num.sort(compare)
    num.reverse()
    console.log(num)

let compare = (a, b)=>{
    return b - a

}

let num3 = [56,78,34,59,87,90]
num.sort(compare)
console.log(num3)







let num = [1,21,551,3,8,229,45]
num.splice(2 ,4 ,111,112,113,114)
console.log(num)







let num = [1,21,551,3,8,229,45]
//let deletedValues = num.splice(2 ,4 ,111,112,113,114)
//console.log(deletedValues)
let newNum =num.slice(3,5)
console.log(newNum)
