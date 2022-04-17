import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortName' })
export class ShortNamePipe implements PipeTransform {
  transform([firstname, lastname]: [string | null, string | null]): string {
    return `${(firstname || '').charAt(0).toUpperCase()}. ${(lastname || '').charAt(0).toUpperCase()}.`;
  }
}
