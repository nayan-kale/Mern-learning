//for(let i = 0; i < 4; i++) {
 //let str = "";
 //for(let j = 1; j < 5; j++) {
   // str += "* ";
// }
 //console.log(str);
//} 

for(let i = 4; i >= 1; i--) 
  {
  let str ="";
 for(let j = i;j>= 1; j--){
   str+= "* "
 }
 console.log(str);
}

let n=5;
for(let i =1; i<=n;i++)
  {
    let str=" ";
    let space=" ";

    for(let j=0;j<(n-i);j++)
      {
      space+= '  ';
    }

    for(let k=0; k<i; k++)
      {
        str= str+'* ';
      }

      console.log(space + str);

}