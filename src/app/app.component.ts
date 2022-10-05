import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: KeyValue<string, string>[] = [];

  ngOnInit(): void {
    this.items = [
      {
        key: 'HTML TO PDF',
        value: '/html-to-pdf'
      },
      {
        key: 'HTTP Caching',
        value: '/http-caching'
      }
    ]
  }

}
