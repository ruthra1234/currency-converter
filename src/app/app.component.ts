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
    fromAmount: string = '';
    toAmount: string = '';
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
               // alert("hi1");
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
        
     //    alert("hi3");
        if (this.toCurrency === this.fromCurrency) {
          if (reverse) {
            this.fromAmount = this.toAmount;
            }
            else{
             this.toAmount=this.fromAmount;
            }
          
        }
        
       else{
        if (!this.error) {
            if (reverse) {
          // alert(this.fromAmount+" "+this.toAmount+reverse);
              this.fromAmount = String(Math.round( Number(this.toAmount) / this.fromRates[this.toCurrency] * 100) / 100);
                // this.fromAmount= this.fromAmount;
             if(this.toAmount==null){
                 this.toAmount='';
                  this.fromAmount='';
               }
              
               
            } else {
        // alert(this.fromAmount+"- "+this.toAmount+reverse);
          if(this.fromAmount!=''){
           this.toAmount =String(Math.round(Number(this.fromAmount) * this.fromRates[this.toCurrency] * 100) / 100);
                 // this.toAmount = this.toAmount;
            
             }
             else{
                 this.fromAmount='';
                  this.toAmount='';
             
             }
                 
            }
        }
        }
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

       

        if (!this.fromCurrency) {
            this.error = 'Please set currency';
            return;
        }
       
    }
    
    
}
