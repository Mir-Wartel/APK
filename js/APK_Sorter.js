class App extends Domer {
  name = '';
  price = 0;
  volume = 0;
  bev_type = '';
  beverage_id = 0
  johan = new Drink('Johan', 2, 2, 2);

  drink_list = [];

  // if we dont want to run any code at 
  // object creation, then we don't need
  // to have a constructor

  // render is a magical method, that works 
  // somewhat like toString() in an object

  set bev_is_type(x) {

    this.bev_type = x;

  }

  sel_bev_t(e) {
    //document.getElementById("sel").click();
    this.bev_type = this.value;
    console.log(this.bev_type)
    console.log(this.value)

  }


  bev_t_select() { // when selecting
    //document.getElementById("sel").click(); // click the rad to select it

  }


  add_drink(e) {

    this.bev_type = this.bev_type

    this.name = this.name



    this.drink_list.push(new Beer(this.name, 22, this.bev_type, this.price, this.volume));

    console.log(this.drink_list)

    console.log(this.bev_type)



  }




  render(html) {

    // we tag our templates with html
    // all components must have a single 
    // element surrounding all other elements
    return html`
      <section>
        <h1>${this.name}</h1>

          We connect our input elements to an 
          instance-variable with the attribute 'bind'
        
          <table style="width:50%">      
           <tr>
            <th><input bind="name" type="text"  placeholder="Name"></th>
            <th>
              <div id="list1" class="dropdown-check-list" tabindex="100">
               <input type="radio" name="student_rad" id="sel">
                 <select id="stud_sel" bind="bev_type">
                   <option value="">Please select Type of beverage</option>
                   <option value="Beer">Beer</option>
                   <option value="Cider">Cider</option>
                   <option value="Spirit">Spirit</option>
                   <option value="Wine">Wine</option>
                 </select>
             </div>
           </th>
            <th>
              <input type="number" bind="price" placeholder="Price in SEK"  min="1">
            </th>
            <th><input type="number" bind="volume" placeholder="Volume in ml"  min="1"></th>
            
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
              <th>Price</th>
              <th>Volyume</th>
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