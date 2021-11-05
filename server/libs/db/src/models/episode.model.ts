import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Course } from "./course.model copy";

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})

export class Episode {
  @ApiProperty({description: '课时名称'})
  @prop()
  name: string

  @ApiProperty({description: '文件地址'})
  @prop()
  file: string

  @ApiProperty({description: '对应课程'})
  @prop({ref: 'Course'})
  course: Ref<Course>


}