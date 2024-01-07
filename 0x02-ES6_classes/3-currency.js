export class Currency {
    constructor(code, name) {
       if (typeof code !== 'string' ||
           typeof name !== 'string') {
         throw new Error('Invalid argument type');
       }
   
       this._code = code;
       this._name = name;
    }
   
    get code() {
       return this._code;
    }
   
    set code(value) {
       if (typeof value !== 'string') {
         throw new Error('Invalid argument type');
       }
       this._code = value;
    }
   
    get name() {
       return this._name;
    }
   
    set name(value) {
       if (typeof value !== 'string') {
         throw new Error('Invalid argument type');
       }
       this._name = value;
    }
   
    displayFullCurrency() {
       return `${this._name} (${this._code})`;
    }
   }