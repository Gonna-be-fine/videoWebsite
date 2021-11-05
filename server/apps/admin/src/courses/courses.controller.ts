import { Course } from '@libs/db/models/course.model copy';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: Course
})

@Controller('courses')
@ApiTags('课程')
export class CoursesController {
  constructor(
    @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>
  ){}

  @Get('option')
  option(){
    return {
      title: "课程管理",
      column: [
        { prop: "title", label: "课程名称", sortable: true, span: 24, search: true, regex: true, row: true},
        { prop: "cover", label: "课程封面图", width: 120, type: 'upload', listType: 'picture-img',
        action: '/upload', row: true },
      ],
    }
  }
}
