import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: './app.sender.view.html'
})
export class SenderElementComponent implements OnInit {
  dataSource: Array<any>;
  headers: Array<string>;
  constructor() {
    this.dataSource = new Array<any>();
    this.dataSource.push({ id: 101, name: 'Mahesh', age: 44 });
    this.dataSource.push({ id: 102, name: 'Tejas', age: 16 });
    this.dataSource.push({ id: 103, name: 'Prashant', age: 35 });
    this.dataSource.push({ id: 104, name: 'Vikram', age: 36 });
    this.dataSource.push({ id: 105, name: 'Ashwin', age: 43});
    this.headers = new Array<string>();
  }
  selectedRow(value: any): void {
    const receiverElement = document.querySelector('receiver-element');
    if (receiverElement !== null) {
      receiverElement['inputValue'] = JSON.stringify(value);
    }
  }
  ngOnInit(): void {
      for (const p of Object.keys(this.dataSource[0])) {
         this.headers.push(p);
       }
   }
}
