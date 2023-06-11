import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateActionDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty()
    name: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @MinLength(10)
    @ApiProperty({ required: false })
    description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    bonus: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    damage_type: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    damage_dice: string;
}

