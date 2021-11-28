const images = ['images/meatballs.jpg','images/cuy.jpeg','images/spagguetti.jpg','images/ramen.png','images/mariscos.jpeg','images/oven_roasted_meatballs.jpg','images/paris_omelette.jpeg','images/pollo_brasa.jpg','images/tacacho_cecina.jpeg','images/escabeche.jpeg','images/arroz_chaufa.jpeg','images/juane.jpeg'];





  
  //aids in looping through the array
 
  const addImage = () => {
   
    //adds image to the image element
    for (let i = 0 ; i < images.length; i ++){
         //creates a div element
    let imageOut = document.createElement("div");
    //sets the id of the div
    imageOut.setAttribute("id","row");
    imageOut.setAttribute("class","row");
    let imageIn = document.createElement("div");
    imageIn.setAttribute("id","column");
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
    console.log(btnTitle);
  }
