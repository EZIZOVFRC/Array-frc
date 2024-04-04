let array=[0,4,7,4,455,2,48]
let minimum=array[0]
let maximum=array[0]
let minIndex =0
let maxIndex =0
for (let i = 0; i < array.length; i++) {
    if(array[i]<minimum){
        minimum=array[i]
        minIndex=i
    }
    if(array[i]>maximum){
        maximum=array[i]
        maxIndex=i
    }
}
let a=array[minIndex]
array[minIndex]=array[maxIndex]
array[maxIndex]=a
alert(array)