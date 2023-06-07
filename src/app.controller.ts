import { BadRequestException, Controller, Get, Param } from "@nestjs/common";
import { AppService } from "./app.service";
import { NumberRequest } from "./dto/number.request";
import { NumberResponse } from "./dto/number.response";

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("convert/:lang/:num")
  getLetters(@Param() params: NumberRequest): NumberResponse {
  const letters = this.appService.convertNumberToLetters(params.num, params.lang);
    return {
      letters,
      num: params.num,
      lang: params.lang
    } as NumberResponse;
  }
}
