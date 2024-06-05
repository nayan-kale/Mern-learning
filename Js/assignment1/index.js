//var e_commerce ={
    //products:["earphone","headphone","earpods"],
    //quantity:[4,3,2],
    //price:[700,800,1000],
    //total_price: function(){
        //var totalprice = 0;
        //for(var i = 0; i < this.products.length;i++){
        //    totalprice += this.quantity[i] * this.price[i];
      //  }
    //    return totalprice;
  //  }
//}
//console.log("Total price for all products: $" + e_commerce.total_price());



 
//const rectangle ={
  //  length: 10,
  //  width: 5,
  //  area: function() {
  //      return this.length * this.width;
  //  },
  //  perimeter: function() {
      //  return 2 * (this.length + this.width);
    //}
  //  };

//console.log(rectangle.area());
//console.log(rectangle.perimeter());



var amazon =[
{name:"speaker",price :5400,rating : 4},
{name:"headphones",price:3000,rating:3},
{name:"playstation",price:20000,rating:5}
];

for(let product of amazon){
  console.log("name:",product.name,"rating:",product.rating)
} 
let total = 0
for (let product of amazon){
  total += product.rating
}

console.log("average rating of products is:", total/amazon.length)


var minprice
var minpriceproduct

for(let product of amazon){
  if(minprice == undefined || minprice > product.price){
    minprice = product.price
    minpriceproduct = product.name

  }
}


console.log ("product with minimum price is :", minpriceproduct)
