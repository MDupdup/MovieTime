import { Injectable } from "@angular/core";

@Injectable()
export class Movie {

    private _id;
    private _title;
    private _overview;
    private _posterPath;
    private _originalLanguage;
    private _releaseDate;
    private _genre;
    private _runtime;
    private _voteAvg;


    public constructor(id: number, title: string, overview: string, posterPath: string, releaseDate: string, voteAvg: number, originalLanguage?: string, genre?: Array<Object>, runtime?: number) {
        this._id = id;
        this._title = title;
        this._overview = overview;
        this._posterPath = posterPath;
        this._releaseDate = releaseDate;
        this._voteAvg = voteAvg;
        this._originalLanguage = originalLanguage;
        this._genre = genre;
        this._runtime = runtime;
    }

    set id(id:number){
        this._id = id;
    }
    get id():number{
        return this._id;
    }

    set title(title:string){
        this._title = title;
    }
    get title():string{
        return this._title;
    }

    set overview(overview:string){
        this._overview = overview;
    }
    get overview():string{
        return this._overview;
    }

    set posterPath(posterPath:string){
        this._posterPath = posterPath;
    }
    get posterPath():string{
        return "https://image.tmdb.org/t/p/w600_and_h900_bestv2"+this._posterPath;
    }

    set releaseDate(releaseDate:string){
        this._releaseDate = releaseDate;
    }
    get releaseDate():string{
        return new Date(this._releaseDate).toLocaleDateString((window.navigator.language || 'fr-FR'), { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }

    set voteAvg(voteAvg:number){
        this._voteAvg = voteAvg;
    }
    get voteAvg():number{
        return this._voteAvg;
    }    

    set originalLanguage(originalLanguage:number){
        this._originalLanguage = originalLanguage;
    }
    get originalLanguage():number{
        return this._originalLanguage;
    }

    set genre(genre:Array<Object>){
        this._genre = genre;
    }
    get genre():Array<Object>{
        return this._genre;
    }
    
    set runtime(runtime:string){
        this._runtime = runtime;
    }
    get runtime():string{
        return Math.floor(parseInt(this._runtime) / 60)+"H"+parseInt(this._runtime) % 60;
    }

    public getReleaseYear(): string {
        return this.releaseDate.split("-")[0];
    }
}