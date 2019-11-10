class Beer extends Drink{

    type = "";
    sub_type = "";
    apk= this.calc_apk(this.alko, this.vol, this.price);
    id=0;
   
    
    
    constructor(name, type, sub_type, price, vol, alko, apk, id) {
        super(name, price, vol, alko, apk,);

        this.type = type;
        this.sub_type = sub_type;
        this.id = id;

     
        
        

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
             <td></td>
             <td>${this.apk}</td>
             <td><button type='button' id=${this.id} class='btn' click=delete_row>Remove</button></td>
           </tr>
      
           

    

    
    
          </section>
    
        `
    
      }
}