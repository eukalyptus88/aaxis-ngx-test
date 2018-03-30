import { NgModule } from "@angular/core";
import { ApiService } from "app/services/api/api.service";

export interface item {
  itemId: string,
  name: string,
  nameComplete: string,
  imageUrl: string
};

export interface itemGroup {
  items: item[],
  thumb?: string,
  thumbUrl?: string,
  name?: string,
  href?: string,
  criteria?: string
}

export interface apiResult {
  itemsReturned: itemGroup[]
}

@NgModule({
    declarations: [],
    providers: [
      ApiService
    ],
    exports: []
})

export class ApiModule {};