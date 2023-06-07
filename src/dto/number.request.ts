import { IsNumber, IsNumberString, Length, MaxLength } from "class-validator";
import { IsLangCode } from "../validators/IsLangCode";

export class NumberRequest {
  @IsNumberString()
  num: number;

  @MaxLength(2)
  @IsLangCode('fr', { message: 'Invalid lang code' })
  lang: string;
}