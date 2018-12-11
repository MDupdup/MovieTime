import { Injectable } from "@angular/core";

@Injectable()
export class Movie {

    private id;
    private title;
    private overview;
    private posterPath;
    private originalLanguage;
    private releaseDate;
    private genre;
    private runtime;
    private voteAvg;


    public constructor(id: number, title: string, overview: string, posterPath: string, releaseDate: string, voteAvg: number, originalLanguage?: string, genre?: string, runtime?: number) {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.posterPath = posterPath;
        this.releaseDate = releaseDate;
        this.voteAvg = voteAvg;
        if(originalLanguage) this.originalLanguage = originalLanguage;
        if(genre) this.genre = genre;
        if(runtime) this.runtime = runtime;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getOverview(): string {
        return this.overview;
    }

    public getPosterPath(): string {
        return this.posterPath;
    }
    
    public getReleaseDate(): string {
        return this.releaseDate;
    }

    public getReleaseYear(): string {
        return this.releaseDate.split("-")[0];
    }

    public getVoteAvg(): number {
        return this.voteAvg;
    }

    public getOriginalLanguage(): string {
        return this.originalLanguage;
    }

    public getGenre(): string {
        return this.genre;
    }

    public getRuntime(): number {
        return this.runtime;
    }
}