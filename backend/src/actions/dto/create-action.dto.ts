import { ApiProperty } from "@nestjs/swagger";

export class CreateActionDto {
    @ApiProperty()
    name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty()
    bonus: string;

    @ApiProperty()
    damage_type: string;

    @ApiProperty()
    damage_dice: string;
}

