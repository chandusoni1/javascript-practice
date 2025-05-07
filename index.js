function sumOfEven(start,end){
    let sum =0 
    for(i=start;i<=end;i++){   
        if(i%2==0){
            sum=sum+i
        }
    }  
   return sum
}

let ans = sumOfEven(20,78)
console.log(ans)