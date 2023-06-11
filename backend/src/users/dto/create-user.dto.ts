import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, isNotEmpty, IsString, isString, MinLength, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    github_email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty()
    password: string;
}
