class Beer extends Drink{

    type = "";
    sub_type = "";
    apk= this.calc_apk(this.alko, this.vol, this.price);
    
    constructor(name, type, sub_type, price, vol, alko, apk ) {
        super(name, price, vol, alko, apk,);

        this.type = type;
        this.sub_type = sub_type;
        

      } 
      

      render(html) {

        return html`
    
          <section>

            <tr>

             <td>${this.name}</td>
             <td>${this.type}</td>
             <td>${this.sub_type}</td>
             <td>${this.price}</td>    
             <td>${this.vol}</td>
             <td>${this.alko}</td>
             <td>${this.apk}</td>
           </tr>
      
           

    

    
    
          </section>
    
        `
    
      }
}