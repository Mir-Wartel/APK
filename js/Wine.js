class Wine extends Drink{

    type = "";
    year = "";
    subtype = "";
    apk= this.calc_apk(this.alko, this.vol, this.price);

    constructor(name, type, subtype, price, vol, alko, year) {
        super(name, price, vol, alko);

        this.type = type;
        this.year = year;
        this.subtype = subtype;

      } 

      render(html) {

        return html`
    
          <section>

            <tr>

             <td>${this.name}</td>
             <td>${this.type}</td>
             <td>${this.subtype}</td>
             <td>${this.price}</td>    
             <td>${this.vol}</td>
             <td>${this.alko}</td>
             <td>${this.year}</td>
             <td>${this.apk}</td>
             <td><button type='button' id=${this.id} class='btn' click=delete_row>Remove</button></td>
           </tr>
      
           

    

    
    
          </section>
    
        `
    
      }
}