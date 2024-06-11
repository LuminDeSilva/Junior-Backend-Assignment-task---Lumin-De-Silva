import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as post} from './post.entity';
import { JwtAuthGuard } from '../auth/auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    findAll(): Promise<post[]> {
        return this.postsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<post> {
        return this.postsService.findOne(+id);
    }

    @Post()
    create(@Body() post: post, @Request() req): Promise<post> {
        post.user = req.user.userId;
        return this.postsService.create(post);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.postsService.remove(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() post: Partial<post>): Promise<post> {
        return this.postsService.update(+id, post);
    }
}
