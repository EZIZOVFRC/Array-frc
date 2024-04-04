let array=[34,67,11,9,45]
let minimum=array[0]
let maximum=array[0]
for (let i = 0; i < array.length; i++) {
    if(array[i]<minimum){
        minimum=array[i]
    }
    if(array[i]>maximum){
        maximum=array[i]
    }
}
let orta = (minimum+maximum)/2
alert(orta)