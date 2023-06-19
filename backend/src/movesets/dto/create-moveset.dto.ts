import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateMovesetDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    character_id: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    action_id: number;
}
