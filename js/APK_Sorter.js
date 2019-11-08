class App extends Domer {
  name = '';
  johan = new Drink('Johan', 2, 2, 2);
  add_beer = new Beer(this.name, 666, 13, 2, 12);
  drink_list = [];

  // if we dont want to run any code at 
  // object creation, then we don't need
  // to have a constructor

  // render is a magical method, that works 
  // somewhat like toString() in an object


  add_drink(e){

    this.name = this.name
    


    this.drink_list.push(new Beer(this.name,"lager",12,200,12));


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
        <input bind="name" type="text">

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
              <th>Price</th>
            </tr>
          
               ${this.drink_list}
         
          </table>

   
        <button click="add_drink">add beer</button>
      </section>
    `
  }
}

// in App is the only time we create an instance
// of the App globally, and this is to
// start the app and render it and its components
// to the DOM
new App();