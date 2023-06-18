import { Character } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CharacterEntity implements Character {
    constructor (partial: Partial<CharacterEntity>) {
        Object.assign(this, partial);
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    campaign_id: number;

    @ApiProperty()
    user_id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    lineage_id: number;

    @ApiProperty()
    hp: number;

    @ApiProperty()
    strength: number;

    @ApiProperty()
    dexterity: number;
    
    @ApiProperty()
    constitution: number;

    @ApiProperty()
    intelligence: number;

    @ApiProperty()
    wisdom: number;

    @ApiProperty()
    charisma: number;

    @ApiProperty()
    speed: string;

    @ApiProperty()
    biography: string;

    @ApiProperty()
    photo: string;
}
