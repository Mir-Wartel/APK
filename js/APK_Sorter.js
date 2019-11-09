class App extends Domer {
  name = "";
  price = 0;
  volume = 0;
  bev_type = '';
  wine_sub_type = "";
  spirit_sub_type = "";
  beverage_id = 0
  year = "Year";
  spirit_year = "Year";
  is_wine = "hidden";
  is_spirit = "hidden";
  is_aged_spirit = "hidden";
  alko = 0.0;
 

  drink_list = [];




  show_wine() {

    if (this.bev_type == "Wine") {
      this.is_wine = "visible"
      this.is_spirit = "hidden"
     
    }
    else if (this.bev_type == "Spirit")  {
      this.is_spirit = "visible"
      this.is_wine = "hidden"

      
      

     
    }

    else{
      this.is_spirit = "hidden"
      this.is_wine = "hidden"
      
    }
    

  };

  show_aged_spirit(){
    if (this.bev_type == "Spirit"){
      if(this.spirit_sub_type != "Vodka" && this.spirit_sub_type !="Monshine"  && this.spirit_sub_type !="Gin" && this.spirit_sub_type !=""){
      this.is_aged_spirit = "visible"}
      else{
        this.is_aged_spirit = "hidden";
      }
    }
    else{
      this.is_aged_spirit = "hidden";
    }
  }




  add_drink() {

    if (this.bev_type == "Wine"){
      this.add_wine();

    }
    else if (this.bev_type == "Beer") {
      this.add_beer();

    }
    
  }

  add_beer() {

    this.drink_list.push(new Beer(this.name, this.bev_type, this.sub_type, this.price, this.volume, this.alko, this.apk));

  


  }

  add_wine(){

   

    this.drink_list.push(new Wine(this.name, this.bev_type, this.sub_type, this.price, this.volume, this.alko, this.year, this.apk));


  }




  render(html) {


    return html`
      <section>
        
          <table style="width:50%">      
           <tr>
           
            <th><input bind="name" type="text"  placeholder="Name" ></th>
            <th>
              <div id="list1" class="dropdown-check-list" tabindex="100" >
               <input type="radio" change="show_wine" name="student_rad" id="sel" hidden>
                 <select id="stud_sel" bind="bev_type" change=${this.show_wine()}>
                   <option value="" disabled selected hidden>Please select Type of beverage</option>
                   <option value="Beer">Beer</option>
                   <option value="Cider">Cider</option>
                   <option value="Spirit">Spirit</option>
                   <option value="Wine">Wine</option>
                 </select>
                 <div id="list_wine" class="dropdown-check-list" tabindex="100" >
                     <input type="radio" name="student_rad" id="rad_wine" hidden  >
                       <select id="sel_wine" bind="sub_type" ${this.is_wine}>
                       <option value="" disabled selected hidden>Please select the type of wine</option>
                       <option value="Red">Red</option>
                       <option value="White">White</option>
                       <option value="Rosé">Rosé</option>
                       <option value="Sparkling">Sparkling</option>
                        </select>

                        <select id="sel_spirit" bind="spirit_sub_type" ${this.is_spirit} change=${this.show_aged_spirit()}>
                        <option value="" disabled selected hidden>Please select the type of spirit</option>
                        <option value="Whiskey">Whiskey</option>
                        <option value="Rum">Rum</option>
                        <option value="Vodka">Vodka</option>
                        <option value="Gin">Gin</option>
                        <option value="Moonshine">Moonshine</option>
                        <option value="Brandy ">Brandy</option>
                        <option value="Tequila ">Tequila</option>
                         </select>
                       <input type="number" bind="year" placeholder="Year"  min="1900" max= "2020" ${this.is_wine}>
                       <input type="number" bind="spirit_year" placeholder="Year"  min="1900" max= "2020" ${this.is_aged_spirit}>
                   </div>
             </div>
           </th>
            <th>
              <input type="number" bind="price" placeholder="Price in SEK"  min="1">
            </th>
            <th><input type="number" bind="volume" placeholder="Volume in ml"  min="1"></th>
            <th><input type="number" bind="alko" placeholder="Alkohol cointent in %" step="0.1" min="0.0" max="100"></th>
            
           </tr>
          </table>
         <div>
           <button click="add_drink">Add drink</button> 
         </div>

        
        


          <table style="width:50%">      
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Sub Type</th>
              <th>Price</th>
              <th>Volyume</th>
              <th>Alcohol content %</th>
              <th>Year (1900-2020)</th>
              <th>APK</th>
            </tr>
          
               ${this.drink_list}
         
          </table>

   
        
      </section>
    `
  }
}

// in App is the only time we create an instance
// of the App globally, and this is to
// start the app and render it and its components
// to the DOM
new App();