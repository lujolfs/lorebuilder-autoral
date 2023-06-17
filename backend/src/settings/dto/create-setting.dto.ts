import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength, IsOptional } from "class-validator";

export class CreateSettingDto {
    user_id: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    ruleset: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @ApiProperty()
    image: string;


}
