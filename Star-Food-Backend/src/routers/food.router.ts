import {Router} from 'express';
import { sample_foods, sample_tag } from '../data';
import asyncHandler from 'express-async-handler';
import { foodModel, foodSchema } from '../models/food.model';

const router = Router();

router.get("/seed", asyncHandler( 
    async (req,res)=>{
    const foodsCount = await foodModel.countDocuments()
    if(foodsCount > 0){
        res.send('seed is done')
        return;
    }
    await foodModel.create(sample_foods);
    res.send('seed is Done!');
}))

router.get("/", asyncHandler(
    async (req,res)=>{
        const allFood = await foodModel.find()
        res.send(allFood);
    }
))

router.get("/search/:searchTerm",asyncHandler(
    async (req,res)=>{
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const food = await foodModel.find({name: {$regex:searchRegex}})
        res.send(food);
    }
))
// router.get("/tags",(req,res)=>{
//     res.send(sample_tag)
// })
router.get("/tags", asyncHandler(
    async (req,res)=>{
        const tags = await foodModel.aggregate([
            {
                $unwind: '$tags'
            },
            {
                $group:{
                    _id: '$tags',
                    count: {$sum: 1}
                }
            },
            {
                $project:{
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }
            }
        ]).sort({count: -1});

        const all ={
            name:'All',
            count: await foodModel.countDocuments()
        }
        tags.unshift(all);
        res.send(tags)
    }
))

router.get("/tag/:tagName", asyncHandler(
    async (req,res)=>{
        const foods = await foodModel.find({tags: req.params.tagName});
        res.send(foods);
    }
))

router.get("/:FoodId",asyncHandler(
    async (req,res)=>{
    const food = await foodModel.findById(req.params.FoodId);
    res.send(food);
    })

)
export default router;