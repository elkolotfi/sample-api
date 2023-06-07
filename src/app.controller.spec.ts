import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NumberRequest } from "./dto/number.request";
import { NumberResponse } from "./dto/number.response";

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return cent vingt-cinq', () => {
      const request = {
        num: 125,
        lang: 'fr',
      } as NumberRequest;

      const response = appController.getLetters(request);
      const expectedResponse = {
        num: 125,
        lang: 'fr',
      } as NumberResponse;

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
