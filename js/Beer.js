class Beer extends Drink{

    type = "";
    
    constructor(name, type, price, vol, alko) {
        super(name, price, vol, alko, );

        this.type = type;

      } 

      render(html) {

        return html`
    
          <section>

            <tr>

             <td>${this.name}</td>
             <td>${this.price}</td>
             <td>${this.vol}</td>    
             <td>${this.alko}</td>
             <td>${this.type}</td>
           </tr>
      
           

    

    
    
          </section>
    
        `
    
      }
}