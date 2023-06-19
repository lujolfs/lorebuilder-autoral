import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength, IsOptional, IsNumber, IsUrl, IsBoolean } from "class-validator";

export class CreateLineageDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    setting_id: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty()
    name: string;

    @IsString()
    @IsUrl()
    @IsOptional()
    @ApiProperty()
    image:  string;

    @IsBoolean()
    @IsOptional()
    @ApiProperty()
    is_playable: boolean;

    @IsOptional()
    @IsString()
    @MinLength(3)
    @ApiProperty()
    description: string;
}
