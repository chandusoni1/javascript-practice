// function productoftwonumber(start,end){
//     let a =0
//     let product=0
//     for(a=start;a<end;a++){
// product = start*end
// return product
//     }
// }
// let ans = productoftwonumber(5,6)
//     console.log("product of 5 and 6 =",ans)

function checkdivisibleof4(start, end) {
  for (a = start; a <= end; a++) {
    if (a % 4 == 0) {
      sum = sum + a
      console.log(a)
    }
  }
}
let sum = 0
let ans = checkdivisibleof4(0, 20)
console.log("sum", sum)

