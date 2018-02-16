import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div class="wrap">
    <div class="floatleft"><app-bulb-converter>Loading Application...</app-bulb-converter></div>
     
    <div class="floatright"><app-bulb-converter>Loading Application...</app-bulb-converter></div>
    
</div>
  
    
 
  `
})
export class ConverterComponent {
}


