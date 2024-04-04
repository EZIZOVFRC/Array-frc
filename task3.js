let array=[3,4,7,4,79,2,47]
let tek=[]
let maximum=array[0]
for (let i = 0; i < array.length; i++) {
if(array[i]%2==1){
    tek.push(array[i])
}
}
alert(tek)

for (let i = 0; i < tek.length; i++) {
        if(tek[i]>maximum){
        maximum=tek[i]
    }
}
alert(maximum)