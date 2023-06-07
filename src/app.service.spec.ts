import { AppService } from "./app.service";

describe('AppService', () => {
  const appService = new AppService();

  it('should be defined', () => {
    expect(AppService).toBeDefined();
  });

  it('should return cent vingt-cinq', () => {
    expect(appService.convertNumberToLetters(125, 'fr'))
      .toBe('cent vingt-cinq');
  });
});
