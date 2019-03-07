import { Injectable } from "@angular/core";

@Injectable()
export class Category {

    private id;
    private name;


    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }
}