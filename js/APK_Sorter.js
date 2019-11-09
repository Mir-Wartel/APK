class App extends Domer {
  name = "";
  price = 0;
  volume = 0;
  bev_type = '';
  beverage_id = 0
  wine_sub ="";
  year = "Year";
  is_wine = "hidden";
  alko = 0.0;
 

  drink_list = [];




  show_wine() {

    if (this.bev_type == "Wine") {
      this.is_wine = "visible"
     
    }
    

  };


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

    console.log(this.drink_list)


  }

  add_wine(){

    calc_apk

    this.drink_list.push(new Wine(this.name, this.bev_type, this.sub_type, this.price, this.volume, this.alko, this.year));


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
                   <option value="">Please select Type of beverage</option>
                   <option value="Beer">Beer</option>
                   <option value="Cider">Cider</option>
                   <option value="Spirit">Spirit</option>
                   <option value="Wine">Wine</option>
                 </select>
                 <div id="list_wine" class="dropdown-check-list" tabindex="100" >
                     <input type="radio" name="student_rad" id="rad_wine" hidden >
                       <select id="sel_wine" bind="sub_type" ${this.is_wine}>
                       <option value="">Please select the type of wine</option>
                       <option value="Red">Red</option>
                       <option value="White">White</option>
                       <option value="Rosé">Rosé</option>
                       <option value="Sparkling">Sparkling</option>
                        </select>
                       <input type="number" bind="year" placeholder="Year"  min="1900" max= "2020" ${this.is_wine}>
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

        
        

          The DOM gets updated everytime these variables value changes


          After creating new Person() objects in the class
          we can simply render these components the same way
          we add variables to strings with template literals    
          <table style="width:50%">      
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Sub Type</th>
              <th>Price</th>
              <th>Volyume</th>
              <th>Alcohol content %</th>
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