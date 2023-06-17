import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength, IsOptional, IsNumber, IsUrl } from "class-validator";

export class CreateCampaignDto {
    user_id: number;

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
    image: string;
}
