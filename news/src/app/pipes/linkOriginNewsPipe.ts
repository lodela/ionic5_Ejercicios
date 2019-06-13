import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'linkOriginNews'
})
export class LinkOriginNewsPipe implements PipeTransform {

  constructor(private dom : DomSanitizer){}

  transform(value: any, args?: any): any {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
