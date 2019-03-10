import {Injectable} from '@angular/core';

@Injectable()
export class Category {
    private _id;
    private _name;

    public constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    set id(id: number) {
        this._id = id;
    }

    get id(): number {
        return this._id;
    }

    set name(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
}
