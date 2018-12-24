import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { Movie } from '../../models/Movie';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage implements OnInit {

    movies: Movie[] = [];

    localSearch;
    nresults;
    searching;

    constructor(public navCtrl: NavController, public mProvider: MoviesProvider, public qrScanner: QRScanner) {
    }

    public ngOnInit() {
        this.getMoviesInTheaters();
        this.searching = true;
    }

    public onSearch(searchValue: string) {
        this.searching = true;
        // if field is same as before, exit the function (optimization purpose)
        if (this.localSearch === searchValue) return;
        // If field is empty, display movies in theaters
        if (searchValue === '') this.getMoviesInTheaters();

        this.movies = [];

        this.mProvider.searchForMovie(searchValue).subscribe(response => {
            this.nresults = response['total_results'];
            this.movies = response['results'].map(movie =>
                new Movie(movie.id, movie.title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
            );
            this.searching = false;
        });
        console.log(this.movies)
        this.localSearch = searchValue;
    }

    private getMoviesInTheaters() {
        this.searching = true;
        this.movies = [];

        this.mProvider.listMoviesInTheaters().subscribe(response => {
            this.movies = response['results'].map(movie =>
                new Movie(movie.id, movie.title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
            );
            this.searching = false;
            console.table(this.movies.map(movie => movie.getTitle()));
        });
    }

    private openQrScanner() {
        console.log('WAOU')
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted
                    // start scanning
                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        console.log('Scanned something', text);
                        
                        //TODO => @MALO to be tested , cause i'm still unable to install the app on my phone...
                        this.mProvider.setMovieId(parseInt(text))
                        this.navCtrl.push("DetailPage")

                        this.qrScanner.hide(); // hide camera preview
                        scanSub.unsubscribe(); // stop scanning
                    });

                } else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                } else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
            .catch((e: any) => console.log('Error is', e));
    }

}
