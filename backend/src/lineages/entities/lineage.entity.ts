import { Lineage } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class LineageEntity implements Lineage {
    constructor (partial: Partial<LineageEntity>) {
        Object.assign(this, partial);
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    setting_id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    is_playable: boolean;

    @ApiProperty()
    description: string;
}
