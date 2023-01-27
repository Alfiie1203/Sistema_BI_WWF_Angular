import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost =[];
    for (let post of value) {
      if(post.palabra.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}
