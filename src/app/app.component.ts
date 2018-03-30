import { Component, OnInit } from '@angular/core';
import { item } from 'app/services/api';
import { ApiService } from 'app/services/api/api.service';

@Component({
  selector: 'mdb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {

  items:item[] = [];
  loading:boolean = true;

  constructor(
    private api:ApiService
  ) {

  }

  updateItems(input:string = ""): void {
    this.clearItems();
    if (input != "") this.query(input);
  }

  query(input:string = "") {
    this.setLoading();
    this.api.queryAutoCompleteByProductName(input).subscribe((items:item[])=>{
      this.setItems(items);
    });
  }

  setItems(items:item[]): void {
    this.items = items;
    this.clearLoading();
  }

  clearItems(): void {
    this.items = [];
    this.clearLoading();
  }

  setLoading(): void {
    this.loading = true;
  }

  clearLoading(): void {
    this.loading = false;
  }

  ngOnInit(): void {
    this.updateItems("");
  }
  
}
