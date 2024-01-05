export class Pricing {
    constructor(amount, currency) {
       if (typeof amount !== 'number' || !(currency instanceof Currency)) {
         throw new Error('Invalid argument type');
       }
   
       this._amount = amount;
       this._currency = currency;
    }
   
    get amount() {
       return this._amount;
    }
   
    set amount(value) {
       if (typeof value !== 'number') {
         throw new Error('Invalid argument type');
       }
       this._amount = value;
    }
   
    get currency() {
       return this._currency;
    }
   
    set currency(value) {
       if (!(value instanceof Currency)) {
         throw new Error('Invalid argument type');
       }
       this._currency = value;
    }
   
    displayFullPrice() {
       return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }
   
    static convertPrice(amount, conversionRate) {
       if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
         throw new Error('Invalid argument type');
       }
   
       return amount * conversionRate;
    }
   }