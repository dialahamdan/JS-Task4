async function getData(){
  const response = await axios.get('https://dummyjson.com/products');

  const data = await response.data;
  const product = data.products;
 

  const result= product.map(function(ele){
    return`<h2>${ele.title}</h2>
    <img src="${ele.thumbnail}"/>
    <a href="details.html?id=${ele.id}">details</a>
    `
  }).join("");
  document.querySelector(".products-section .row").innerHTML=result;
  console.log(result)
}
getData();