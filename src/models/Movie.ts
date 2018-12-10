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


    public constructor(id: number, title: string, overview: string, posterPath: string, originalLanguage?: string, releaseDate?: string, genre?: string, runtime?: number, voteAvg?: number) {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.posterPath = posterPath;
        if(originalLanguage) this.originalLanguage = originalLanguage;
        if(releaseDate) this.releaseDate = releaseDate;
        if(genre) this.genre = genre;
        if(runtime) this.runtime = runtime;
        if(voteAvg) this.voteAvg = voteAvg;
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

    public getOriginalLanguage(): string {
        return this.originalLanguage;
    }

    public getReleaseDate(): string {
        return this.releaseDate;
    }

    public getGenre(): string {
        return this.genre;
    }

    public getRuntime(): number {
        return this.runtime;
    }

    public getVoteAvg(): number {
        return this.voteAvg;
    }
}