import { Setting } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class SettingEntity implements Setting {
    constructor (partial: Partial<SettingEntity>) {
        Object.assign(this, partial);
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    user_id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    ruleset: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;
}
