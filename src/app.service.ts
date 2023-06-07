import { Injectable } from '@nestjs/common';
import * as writtenNumbers from 'written-number';

@Injectable()
export class AppService {
  convertNumberToLetters(number: number, lang: string): string {
    return writtenNumbers(number, {lang});
  }
}
