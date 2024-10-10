import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'jsonHighlight',
  standalone: true,
})
export class JsonHighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any): SafeHtml {
    if (value === undefined) return this.sanitizer.bypassSecurityTrustHtml('');
    const json = JSON.stringify(value, null, 2);
    const result = json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (match) => {
        let cls = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'null';
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }
}
