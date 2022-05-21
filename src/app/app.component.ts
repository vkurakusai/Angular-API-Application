import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ApiComponent } from './api/api.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-API-Based-Application';
  public TIME_SERIES_INTRADAY: any;
  public element = false;
  @ViewChild('api', { read: ViewContainerRef})
  container: ViewContainerRef;

  constructor(
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {  }
  public ngOnInit(): void {
    this.addApiOne();
  }

  addApiOne(): void {
    this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
    .subscribe((data) => {
      this.TIME_SERIES_INTRADAY = data;
    },
    error =>
    console.log('API error fetching ' + error.message));
  }

  // This will take some time to load data in gui
  addApiTwo(): void {
    // create the component factory
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ApiComponent);
    // add the component to the view
    const componentRef = this.container.createComponent(dynamicComponentFactory);
 }

 showData(): boolean {
   return this.element = true;
 }

 hideData(): boolean {
   return this.element = false;
 }


}
