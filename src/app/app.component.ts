import { Component } from '@angular/core';
import {MdCard} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
}


//** Begin *
let str = '';
let a = [ 72, 105, 114, 101, 32, 
          65, 110, 100, 114, 101,
          97, 115, 33
        ];

for(let i in a){
 str += String.fromCharCode(a[i]);
}

console.log(str)
//** End *
