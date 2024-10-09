import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TEXT_BUILDER_CONFIG } from '../../../constants/text-builder.constant';
import { InputBuilderComponent } from '../input-build/input-builder/input-builder.component';

@Component({
  selector: 'app-text-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputBuilderComponent],
  templateUrl: './text-builder.component.html',
})
export class TextBuilderComponent {
  @Output() addField = new EventEmitter<any>();
  textBuildForm: FormGroup = new FormGroup({});
  config: any = TEXT_BUILDER_CONFIG;

  public emitField(field: any) {
    this.addField.emit({ config: this.configureField(field) });
  }

  private configureField(field: any) {
    const fontStyle = {
      isBold: field.fontStyleBold,
      isItalic: field.fontStyleItalic,
      isUnderline: field.fontStyleUnderline,
    };

    switch (field.textType) {
      case 'line':
        return {
          type: field.textType,
        };
      case 'ul':
      case 'ol':
        return {
          listTitle: field.listTitle,
          listItems: field.listItems.split(','),
          type: field.textType,
          ...fontStyle,
        };
      default:
        return {
          content: field.content,
          type: field.textType,
          ...fontStyle,
        };
    }
  }
}
