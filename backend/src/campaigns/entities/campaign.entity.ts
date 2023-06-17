import { Campaign } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CampaignEntity implements Campaign {
    constructor (partial: Partial<CampaignEntity>) {
        Object.assign(this, partial);
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    user_id: number;

    @ApiProperty()
    setting_id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;
}
