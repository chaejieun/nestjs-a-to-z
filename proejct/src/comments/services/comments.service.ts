import { Injectable } from '@nestjs/common';
import { CommentsCreateDto } from '../dtos/comments.create.dto';

@Injectable()
export class CommentsService {
  async getAllCommnets() {
    return 'hello world1';
  }
  async createComment(id: string, comments: CommentsCreateDto) {
    console.log(comments);
    return 'hello world';
  }

  async plusLike(id: string) {
    console.log(id);

    return 'hello world';
  }
}
