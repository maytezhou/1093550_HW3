const images = ['images/meatballs.jpg','images/cuy.jpeg','images/spagguetti.jpg','images/ramen.png','images/mariscos.jpeg','images/oven_roasted_meatballs.jpg','images/paris_omelette.jpeg','images/pollo_brasa.jpg','images/tacacho_cecina.jpeg','images/escabeche.jpeg','images/arroz_chaufa.jpeg','images/juane.jpeg'];
const dishes = [ 'Meatballs','Cuy chactado', 'Spaguetti', 'Ramen', 'Mariscos', 'Oven Roasted Meatballs', 'Paris Omelette', 'Pollo A la Brasa', 'Tacacho con Cecina', 'Escabeche', 'Arroz Chaufa', 'Juane'];
const prices = [ 150,200,250,225,220,230,280,300,214,158,149,315 ];



  
  // creating a funtion that prints dynamically the food images,  names and prices
 
  const printFoodImg = () => {
   
    
    for (let i = 0 ; i < images.length; i ++){

    //creates a  row element
    const imageOut = document.createElement("div");
    imageOut.setAttribute("id",`row${i}`);
    imageOut.setAttribute("class","row");

    //creates a column
    const imageIn = document.createElement("div");
    imageIn.setAttribute("id",`column${i}`);
    imageIn.setAttribute("class","column");
    
    //creates an image element
    const img = document.createElement("img");
    img.setAttribute("style","width:100%");          
    img.setAttribute("class","cover");   
        
        img.src=images[i];
        img.setAttribute("id",`img${i}`);
    
    // appendings:
    imageIn.appendChild(img); //appends the img to the column
    imageOut.appendChild(imageIn); // appends the column to the row
    document.querySelector("#images-container").appendChild(imageOut); //appends each row to the container of images


    //for each columns print food name and prices
    const column=  document.getElementById(`column${i}`)
    column.innerHTML += `
        <div class="center_p">
        <p class="blocktext">${dishes[i]}</p>
        </div>
        <div class="center_p">
        <p class="blocktext"> $${prices[i]}</p>
        </div>
       `;
    }

  
};


// creating a function that gets random food and price when pressing a button element
const getRandomFoodAndPrice = () => {

  const q_rand_btn = document.getElementById("q_rand_btn");
  q_rand_btn.addEventListener("click",()=>{
    const divPrice=document.getElementById("divPrice");
    let randomIndex=  Math.floor(Math.random() * 12);
    divPrice.innerHTML=`<p>${dishes[randomIndex]} $ ${prices[randomIndex]}`;
  });  

}


//Calling functions : 
printFoodImg();  //Printing the  food images , their names and  prices
getRandomFoodAndPrice(); // Getting random food and price when pressing a button element

 
