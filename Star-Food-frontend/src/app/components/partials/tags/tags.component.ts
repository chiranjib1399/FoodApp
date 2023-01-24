import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Tag } from '../../../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
tags: Tag[]
  constructor(foodservice:FoodService) {
   foodservice.getAllTags().subscribe((serverFood)=>{
    this.tags= serverFood;
   });
   }

  ngOnInit() {
  }

}
