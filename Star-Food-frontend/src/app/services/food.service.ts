import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FOODS_BY_SEARCH_URL, FOOD_BY_ID_URL, FOOD_TAGS_URL, FOOD_TAG_URL, FOOD_URL } from '../shared/constants/url';
import { Food } from '../shared/models/foods';
import { Tag } from '../shared/models/tag';

@Injectable()
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Food[]>{
    return this.http.get<Food[]>(FOOD_URL);
  }

  getAllFoodBySearchTerm(searchTerm: string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOOD_TAGS_URL);
  }
  getAllFoodsByTag(tag:string):Observable<Food[]>{
    return tag ==='All'?
    this.getAll():
    this.http.get<Food[]>(FOOD_TAG_URL + tag);
  }

  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }
}
