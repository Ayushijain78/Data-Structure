function maximum(s) {
    let str=s.replaceAll(/[^0-9]/g," ");
    let t=str.split(" ")
    let numbers = t.filter(num => num !== "").map(Number);
    let max=0;
    for(let n of numbers){
      if(n>max){
        max=n
      }
    }
    return max
}
let s = "geeks  for geeks"
console.log(maximum("100klh564abc365bg"))