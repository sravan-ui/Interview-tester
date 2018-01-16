import { Component, OnInit } from '@angular/core';
import { AppDataService } from './shared/services/app-data.service';
import { Subscription } from 'rxjs/Subscription';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app works!';
  list: any;
  dataSubscription: Subscription;
  arrayOfKeys: any;
  searchTerm: string = "";
  result: any;

  constructor(private appDataService: AppDataService) {

  }

  ngOnInit() {
    this.dataSubscription = this.appDataService.getItemData()
      .subscribe((response: any) => {
        this.list = response;
        console.log(this.list);

      });
  }
  onNameCliked(item) {
    console.log(item);
  }
  onDescCliked(item) {
    console.log(item);
  }
  search(event: any) {
    this.searchTerm = event.value;
    this.result = this.find(this.list, "name", this.searchTerm);
    console.log(this.result);
  }

  find(json, key, value) {
    var result = [];
    json.forEach(element => {
      console.log(element);
      for (var property in element) {
          if (property == key && json[property] == value) {
            result.push(json);
          }
      }
    });
    return result;
  }

}
