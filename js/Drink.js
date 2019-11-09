class Drink extends Domer{
  name = '';
  price = 0;
  vol = 0;
  alko = 0;


  constructor(name, price, vol, alko, apk) {
    super();
    this.name = name;
    this.price = price;
    this.vol = vol;
    this.alko = alko;
    this.apk = apk;
    
  }

  calc_apk(h,v,p) {
     
    return  h * v / p / 100;
  }

  






}


