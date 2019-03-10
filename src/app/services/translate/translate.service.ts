import {Injectable} from '@angular/core';
import {Globalization} from '@ionic-native/globalization/ngx';
import {translations} from '../../../assets/translations';

@Injectable({
    providedIn: 'root'
})
export class TranslateService {

    userLanguage;
    trad;

    constructor(private globalization: Globalization) {
        // Get user device language
        this.globalization.getPreferredLanguage()
            .then(res => {
                this.userLanguage = res.value;
            })
            .catch(e => {
                this.userLanguage = 'fr-FR'; // Default language
            });
        this.trad = translations;
    }

    public __(str: String) {
        const res = this.trad.find((x) => {
            return x.key === str;
        });
        return res && res.trad[this.userLanguage] ? res.trad[this.userLanguage] : str;
    }
}
