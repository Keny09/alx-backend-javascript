class HolbertonClass {
    private _size: number;
    private _location: string;

    constructor(size: number, location: string) {
        this._size = size;
        this._location = location;
    }

    get size(): number {
        return this._size;
    }

    get location(): string {
        return this._location;
    }

    valueOf(): number {
        return this._size;
    }

    toString(): string {
        return this._location;
    }
}

const holbertonClass = new HolbertonClass(100, 'Los Angeles');
console.log(holbertonClass.toString()); // Los Angeles
console.log(Number(holbertonClass)); // 100