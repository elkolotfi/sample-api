import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";
const ISO6391 = require('iso-639-1');

export function IsLangCode(property: string, validationOptions?: ValidationOptions) {


  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isLangCode',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: {
        validate(value: any, args: ValidationArguments) {
          return value?.length === 2 && ISO6391.validate(value);
        },
      },
    });
  };
}