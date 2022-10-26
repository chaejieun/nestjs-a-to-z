import { Comments } from '../comments/comments.schema';
import { Document } from 'mongoose';
export declare class Cat extends Document {
    email: string;
    name: string;
    password: string;
    imgUrl: string;
    readonly readOnlyData: {
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: Comments[];
    };
    readonly comments: Comments[];
}
export declare const CatSchema: import("mongoose").Schema<Cat, import("mongoose").Model<Cat, any, any>, undefined, {}>;
