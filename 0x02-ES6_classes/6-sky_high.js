class SkyHighBuilding extends Building {
    private _floors: number;

    constructor(sqft: number, floors: number) {
        super(sqft);
        this._floors = floors;
    }

    get floors(): number {
        return this._floors;
    }

    evacuationWarningMessage(): string {
        return `Evacuate slowly the ${this.floors} floors.`;
    }
}

const skyHighBuilding = new SkyHighBuilding(10000, 80);
console.log(skyHighBuilding.evacuationWarningMessage()); // Evacuate slowly the 80 floors.