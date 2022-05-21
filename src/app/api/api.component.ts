import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  public apiTwo: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo')
    .subscribe(data => {
      this.apiTwo = data;
    });
  }

}
