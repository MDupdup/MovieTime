import { Injectable } from '@angular/core';
import { Globalization } from '@ionic-native/globalization/ngx';
import { File } from '@ionic-native/file';
import { translations } from '../../../assets/translations';

/*
  Generated class for the TranslateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TranslateProvider {
    userLanguage;
    trad;

    constructor(private globalization: Globalization, private file: File) {
        // Get user device language
        this.globalization.getPreferredLanguage()
            .then(res => {
                this.userLanguage = res.value;
            })
            .catch(e => {
                this.userLanguage = "fr-FR"; // Default language
            });
        this.trad = translations;
    }

    public __(str: String) {
        let res = this.trad.find((x)=> {
            return x.key == str
        });
        return res && res.trad[this.userLanguage] ? res.trad[this.userLanguage] : str
    }
}
