import {Router} from 'express';
import { sample_foods, sample_tag } from '../data';
import asyncHandler from 'express-async-handler';
import { FoodSchema } from '../models/food.model';

const router = Router();

router.get("/seed", asyncHandler( async (req,res)=>{
    
}))

router.get("/",(req,res)=>{
    res.send(sample_foods)
})

router.get("/search/:searchTerm",(req,res)=>{
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods);
})

router.get("/tags",(req,res)=>{
    res.send(sample_tag);
})

router.get("/tag/:tagName",(req,res)=>{
    const tagName =req.params.tagName;
    const foods = sample_foods.filter(tag => tag.tags.includes(tagName))
    res.send(foods);
})

router.get("/:FoodId",(req,res)=>{
    const foodId = req.params.FoodId;
    const food = sample_foods.find(food => food.id == foodId);
    res.send(food);
})

export default router;