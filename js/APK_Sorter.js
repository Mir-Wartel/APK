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
  is_cider = "hidden";
  alko = 0.0;
  sort_by_val = "apk";
  id=0;
  


  drink_list = [];




  show_wine() {

    if (this.bev_type == "Wine") {
      this.is_wine = "visible"
      this.is_spirit = "hidden"
      this.is_cider = "hidden"
      this.is_Beer = "hidden"

    }
    else if (this.bev_type == "Spirit") {
      this.is_spirit = "visible"
      this.is_wine = "hidden"
      this.is_cider = "hidden"
      this.is_Beer = "hidden"





    }

    else if (this.bev_type == "Cider") {
      this.is_cider = "visible"
      this.is_wine = "hidden"
      this.is_spirit = "hidden"
      this.is_Beer = "hidden"


    }

    else if (this.bev_type == "Beer") {
      this.is_Beer = "visible"
      this.is_wine = "hidden"
      this.is_cider = "hidden"
      this.is_spirit = "hidden"

    }

    else {
      this.is_spirit = "hidden"
      this.is_wine = "hidden"
      this.is_cider = "hidden"
      this.is_Beer = "hidden"

    }


  };

  show_aged_spirit() {
    if (this.bev_type == "Spirit") {
      if (this.spirit_sub_type != "Vodka" && this.spirit_sub_type != "Monshine" && this.spirit_sub_type != "Gin" && this.spirit_sub_type != "") {
        this.is_aged_spirit = "visible"
      }
      else {
        this.is_aged_spirit = "hidden";
      }
    }
    else {
      this.is_aged_spirit = "hidden";
    }
  }




  add_drink() {

    if (this.bev_type == "Wine") {
      this.add_wine();

    }
    else if (this.bev_type == "Beer" || "Cider") {
      this.add_beer();

    }

    

    this.sort_by();

    this.id++;





  }

  sort_by() {

    let sort_by_val = this.sort_by_val



    this.drink_list.sort(function (a, b) {

      if(sort_by_val == "price_<") {

        return a.price - b.price;
      }

      else if (sort_by_val == "price"){

        return b.price - a.price;
      

      }

      else if (sort_by_val == "apk"){

        return b.apk - a.apk;
      

      }

      else if (sort_by_val == "vol"){

        return b.vol - a.vol;
      

      }

      else if (sort_by_val == "name"){

        return a.name - b.name;
      

      }




    })

  }



  add_beer() {

    this.drink_list.push(new Beer(this.name, this.bev_type, this.sub_type, this.price, this.volume, this.alko, this.apk, this.id));




  }

  add_wine() {



    this.drink_list.push(new Wine(this.name, this.bev_type, this.sub_type, this.price, this.volume, this.alko, this.year, this.apk, this.id));


  }

  delete_row() {
    this.drink_list.splice (this.drink_list.indexOf(this.id), 1);

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


                         <select id="sel_cider" bind="cider_sub_type" ${this.is_cider}>
                         <option value="" disabled selected hidden>Please select the type of cider</option>
                         <option value="Dry">Dry</option>
                         <option value="Sweet">Sweet</option>
              
                          </select>

                          <select id="sel_Beer" bind="Beer_sub_type" ${this.is_Beer}>
                          <option value="" disabled selected hidden>Please select the type of Beer</option>
                          <option value="Lager">Lager</option>
                          <option value="Ale">Ale</option>
                          <option value="Ipa">Ipa</option>
                          <option value="Stout">Stout</option>
                          <option value="Pilsner">Pilsner</option>
               
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
            <th><button click="add_drink">Add drink</button> </th>
            <th>
            <p>Sort by:</p>
            <div>
            <select id="sel_sort_by" bind="sort_by_val" change=${this.sort_by()}>
            <option value="apk">APK</option>
            <option value="name">Name</option>
            <option value="price_<">Price low-high</option>
            <option value="price">Price high-low</option>
            <option value="vol">Volume</option>
            

 
            </select>
            </div></th>
           </tr>
          </table>


        
        


          <table style="width:50%">      
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Sub Type</th>
              <th>Price</th>
              <th>Volyume</th>
              <th>Alcohol content %</th>
              <th>Year</th>
              <th>APK</th>
            </tr>
            
            <tr id=drink_list>
          
               ${this.drink_list}
            </tr>
            
            
         
          </table>

   
        
      </section>  
    `
  }
}



new App();