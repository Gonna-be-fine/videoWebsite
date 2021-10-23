import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, prop } from "@typegoose/typegoose";

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
}