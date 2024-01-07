class Airport {
    private _name: string;
    private _code: string;

    constructor(name: string, code: string) {
        this._name = name;
        this._code = code;
    }

    get name(): string {
        return this._name;
    }

    get code(): string {
        return this._code;
    }

    toString(): string {
        return this.code;
    }
}

const airport = new Airport('Los Angeles International Airport', 'LAX');
console.log(airport.toString()); // LAX