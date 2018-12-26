import { Component } from '@angular/core';

/**
 * Generated class for the SeparatorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'separator',
  templateUrl: 'separator.html'
})
export class SeparatorComponent {

  text: string;

  constructor() {
    console.log('Hello SeparatorComponent Component');
    this.text = 'Hello World';
  }

}
