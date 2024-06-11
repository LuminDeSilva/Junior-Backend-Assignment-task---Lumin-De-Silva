import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
      ) {}
    
      findAll(): Promise<Post[]> {
        return this.postsRepository.find({ relations: ['user'] });
      }
    
      findOne(id: number): Promise<Post> {
        return this.postsRepository.findOneBy({ id });
      }
    
      async remove(id: number): Promise<void> {
        await this.postsRepository.delete(id);
      }
    
      create(post: Post): Promise<Post> {
        return this.postsRepository.save(post);
      }
    
      update(id: number, post: Partial<Post>): Promise<Post> {
        return this.postsRepository.save({ ...post, id });
      }
}
