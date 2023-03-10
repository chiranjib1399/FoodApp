import {model, Schema} from 'mongoose';

export interface Food{
    id: string;
    name: string;
    price: number;
    tags: string[];
    favorite: boolean;
    stars: number;
    imageUrl: string;
    origins: string[];
    cookTime: string;
}
export const foodSchema = new Schema<Food>(
    {
    name:{type:String, require: true},
    price:{type:Number, require: true},
    tags:{type:[String], require: true},
    favorite:{type: Boolean, require: true},
    stars:{type:Number, require: true},
    imageUrl:{type:String, require: true},
    origins:{type:[String], require: true},
    cookTime:{type:String, require: true}
    },
    {
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
)

export const foodModel = model<Food>('food', foodSchema);