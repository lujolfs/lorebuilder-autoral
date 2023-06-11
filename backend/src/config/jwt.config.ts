import { JwtModuleOptions } from "@nestjs/jwt";

export const jwtConfig: JwtModuleOptions = {
    secret: '',
    signOptions: {expiresIn: '1d'},
}