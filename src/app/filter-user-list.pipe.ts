import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserList'
})
export class FilterUserListPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  }

}
