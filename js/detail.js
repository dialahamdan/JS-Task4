async function getData(){
    console.log(window.location.search)
    const urlParams = new URLSearchParams(window.location.search);
    let id =  urlParams.get('id');
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
   
    const data = await response.data
    const product = data.products 

    console.log (data)
    

    const result = 
`
        <ul>
        <li>${data.title}</li>
        </ul>`;
  
    document.querySelector(".details").innerHTML=result;
    
  }
  getData();























/*async function getDetails(){
    
   const urlParams = new URLSearchParams(window.location.search);
    const id =  urlParams.get('ID');
   
    const response = await fetch (`https://dummyjson.com/products/search?q=${id}`)
    const data =  response.data
    const images = data.products
    const {description,price }=data.products

    document.querySelector(".description").textContent=description;
    document.querySelector(".price").innerHTML=price;
    
   

    const result = images.map(function(ele){

        return`
        <ul>
        <li><img src=${ele}/></li>
        </ul>`
    }).join("");
  
    document.querySelector("img").src=result;
}
getDetails();*/