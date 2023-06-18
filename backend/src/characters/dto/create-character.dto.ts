import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength, IsOptional, IsNumber, IsUrl } from "class-validator";

export class CreateCharacterDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    campaign_id: number;

    @IsString()
    @MinLength(2)
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    lineage_id: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    hp: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    strength: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    dexterity: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    constitution: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    intelligence: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    wisdom: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    charisma: number;

    @IsString()
    @IsOptional()
    @ApiProperty()
    speed: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    biography: string;

    @IsUrl()
    @IsOptional()
    @ApiProperty()
    photo: string;

}
