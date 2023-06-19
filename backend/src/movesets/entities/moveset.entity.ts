import { Moveset } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class MovesetEntity implements Moveset {
    constructor (partial: Partial<MovesetEntity>) {
        Object.assign(this, partial);
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    character_id: number;

    @ApiProperty()
    action_id: number;
}
