import { Action } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class ActionEntity implements Action {
    @ApiProperty()
    id: number;

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
