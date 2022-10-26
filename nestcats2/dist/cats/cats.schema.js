"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatSchema = exports.Cat = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const options = {
    timestamps: true,
};
let Cat = class Cat extends mongoose_2.Document {
};
__decorate([
    swagger_1.ApiProperty({
        example: 'amamov@kakao.com',
        description: 'email',
        required: true,
    }),
    mongoose_1.Prop({
        required: true,
        unique: true,
    }),
    class_validator_1.IsEmail(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Cat.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'amamov',
        description: 'name',
        required: true,
    }),
    mongoose_1.Prop({
        required: true,
    }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Cat.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: '23810',
        description: 'password',
        required: true,
    }),
    mongoose_1.Prop({
        required: true,
    }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Cat.prototype, "password", void 0);
__decorate([
    mongoose_1.Prop({
        default: 'https://github.com/amamov/NestJS-solid-restapi-boilerplate/raw/main/docs/images/1.jpeg',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Cat.prototype, "imgUrl", void 0);
Cat = __decorate([
    mongoose_1.Schema()
], Cat);
exports.Cat = Cat;
const _CatSchema = mongoose_1.SchemaFactory.createForClass(Cat);
_CatSchema.virtual('readOnlyData').get(function () {
    return {
        id: this.id,
        email: this.email,
        name: this.name,
        imgUrl: this.imgUrl,
        comments: this.comments,
    };
});
_CatSchema.virtual('comments', {
    ref: 'comments',
    localField: '_id',
    foreignField: 'info',
});
_CatSchema.set('toObject', { virtuals: true });
_CatSchema.set('toJSON', { virtuals: true });
exports.CatSchema = _CatSchema;
//# sourceMappingURL=cats.schema.js.map