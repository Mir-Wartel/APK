class Wine extends Drink{

    type = "";
    year = "";
    subtype = "";
    constructor(name, type, subtype, price, vol, alko, year) {
        super(name, price, vol, alko);

        this.type = type;
        this.yeare = year;
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
           </tr>
      
           

    

    
    
          </section>
    
        `
    
      }
}