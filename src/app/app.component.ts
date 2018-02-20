import { Component } from '@angular/core';
import { CurrencyService } from './app.service';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-currency-converter',
    templateUrl: './app.component.html',
   
    providers: [ CurrencyService ],
})

export class AppComponent implements OnInit {

    title: string = 'Currency converter';
    error: any = null;
    fromAmount: number = 1.0;
    toAmount: number = 0.0;
    fromCurrency: string = null;
    toCurrency: string = null;
    rates: Array<any> = [];
    fromRates: Object = {};
    constructor(private dataService: CurrencyService) {}

    ngOnInit() {
        this.convert(false, true);
    }

    public convert(reverse, initial) {
        this.dataService.getRates(this.fromCurrency).then(response => {

            if (response.rates) {
                if (initial) {
                    const items: Array<any> = this.parseData(response.rates);
                    items.push({id: 'EUR', value: 1});
                    this.rates = items;
                    this.fromCurrency = this.rates[0].id;
                    this.toCurrency = this.rates[1].id;
                    this.convert(false, false);
                }

                this.fromRates = response.rates;

                this.calculate(reverse);

            } else {
                this.error = 'Unable to get data from API';
            }
        }, (error) => {
            this.error = 'There was an error: ' + error.status + ' - ' + error.statusText;
        });
    }

    public calculate(reverse) {
        this.handleErrors();

        if (!this.error) {
            if (reverse) {
                this.fromAmount = Math.round( this.toAmount / this.fromRates[this.toCurrency] * 100) / 100;
            } else {
                this.toAmount = Math.round(this.fromAmount * this.fromRates[this.toCurrency] * 100) / 100;
            }
        }
    }
    
    onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}

    private parseData(data) {
        const arr: Array<any> = [];

        for (const key in data) {
            if (key) {
                const obj = {
                    id: key,
                    value: data[key]
                };
                 if(key=='USD'||key=='CAD'|| key=='EUR'){
                arr.push(obj);
                }
                
            }
        }

        return arr;
    }

    private handleErrors() {
        this.error = null;

        if (!this.fromAmount && !this.toAmount) {
            this.error = 'Please enter the amount';
            return;
        }

        if (!this.fromCurrency) {
            this.error = 'Please set currency';
            return;
        }

        if (this.toCurrency === this.fromCurrency) {
            this.fromAmount = this.toAmount;
            this.error = 'Converting ' + this.toCurrency + ' to ' + this.fromCurrency + ' is not allowed';
            return;
        }
    }
    
    
}
