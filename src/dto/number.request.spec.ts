import { IsNumber, IsNumberString, Length, MaxLength, validate } from "class-validator";
import { IsLangCode } from "../validators/IsLangCode";
import { NumberRequest } from "./number.request";
import { plainToInstance } from "class-transformer";

describe('NumberRequest', () => {
  it('should be defined', () => {
    expect(NumberRequest).toBeDefined();
  });

  it('valide number format', async () => {
    const object = { num: '125', lang: 'fr' };
    const verify = plainToInstance(NumberRequest, object);

    const errors = await validate(verify);

    expect(errors.length).toBe(0);
  });

  it('invalid number format', async () => {
    const object = { num: '125a', lang: 'fr' };
    const verify = plainToInstance(NumberRequest, object);

    const errors = await validate(verify);

    expect(errors.length).toBe(1);
  });

  it('invalid lang format', async () => {
    const object = { num: '125', lang: 'far' };
    const verify = plainToInstance(NumberRequest, object);

    const errors = await validate(verify);

    expect(errors.length).toBe(1);
    expect(errors[0].constraints).toHaveProperty('maxLength');
  });
});