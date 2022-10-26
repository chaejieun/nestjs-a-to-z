/// <reference types="multer" />
import { CatsService } from '../services/cats.service';
import { CatRequestDto } from '../dto/cats.request.dto';
import { Cat } from '../cats.schema';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { AuthService } from 'src/auth/auth.service';
export declare class CatsController {
    private readonly catsService;
    private readonly authService;
    constructor(catsService: CatsService, authService: AuthService);
    getCurrentCat(cat: any): any;
    signUp(body: CatRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../../comments/comments.schema").Comments[];
    }>;
    logIn(data: LoginRequestDto): Promise<{
        token: string;
    }>;
    logOut(): string;
    uploadCatImg(files: Array<Express.Multer.File>, cat: Cat): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../../comments/comments.schema").Comments[];
    }>;
    getAllCat(): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../../comments/comments.schema").Comments[];
    }[]>;
}
