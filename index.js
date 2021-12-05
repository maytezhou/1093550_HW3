const images = ['images/meatballs.jpg','images/cuy.jpeg','images/spagguetti.jpg','images/ramen.png','images/mariscos.jpeg','images/oven_roasted_meatballs.jpg','images/paris_omelette.jpeg','images/pollo_brasa.jpg','images/tacacho_cecina.jpeg','images/escabeche.jpeg','images/arroz_chaufa.jpeg','images/juane.jpeg'];
const dishes = [ 'Meatballs','Cuy chactado', 'Spaguetti', 'Ramen', 'Mariscos', 'Oven Roasted Meatballs', 'Paris Omelette', 'Pollo A la Brasa', 'Tacacho con Cecina', 'Escabeche', 'Arroz Chaufa', 'Juane'];
const prices = [ 150,200,250,225,220,230,280,300,214,158,149,315 ];



  
  //aids in looping through the array
 
  const addImage = () => {
   
    //adds image to the image element
    for (let i = 0 ; i < images.length; i ++){
         //creates a div element
    let imageOut = document.createElement("div");
    //sets the id of the div
    imageOut.setAttribute("id",`row${i}`);
    imageOut.setAttribute("class","row");
    let imageIn = document.createElement("div");
    imageIn.setAttribute("id",`column${i}`);
    imageIn.setAttribute("class","column");
    
    //cereates an image element
    let img = document.createElement("img");
        img.setAttribute("style","width:100%");          
        img.setAttribute("class","cover");   


        
        img.src=images[i];
        img.setAttribute("id",`btnImg${i}`);
        imageIn.appendChild(img);
        imageOut.appendChild(imageIn);
        document.querySelector("#images-container").appendChild(imageOut);
    }
  
};
  addImage();


  for ( let i = 0 ; i < images.length; i ++){
    let btnTitle = document.getElementById(`btnImg${i}`);  
    document.getElementById(`column${i}`).innerHTML += `
    <div class="center_p" class="no_marginDiv">
    <p class="blocktext">${dishes[i]}</p>
    </div>
    <div class="center_p">
    <p class="blocktext"> $${prices[i]}</p>
    </div>
   `;

  }



  let q_rand_btn = document.getElementById("q_rand_btn");
  q_rand_btn.addEventListener("click",()=>{
    let divPrice=document.getElementById("divPrice");
    let randomIndex=  Math.floor(Math.random() * 12);
    divPrice.innerHTML=`<p>${dishes[randomIndex]} $ ${prices[randomIndex]}`;
  });
  
