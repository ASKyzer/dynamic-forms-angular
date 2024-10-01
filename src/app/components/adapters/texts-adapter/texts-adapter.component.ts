import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface TextsAdapterConfig {
  content?: string;
  listTitle?: string;
  listItems?: string[];
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  type: 'h1' | 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'blockquote' | 'line';
}

@Component({
  selector: 'app-texts-adapter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './texts-adapter.component.html',
})
export class TextsAdapterComponent {
  @Input() contentConfig!: TextsAdapterConfig;
  @Input() parentGroup: any;

  getFontStyle() {
    return {
      'font-bold': this.contentConfig.isBold,
      italic: this.contentConfig.isItalic,
      underline: this.contentConfig.isUnderline,
    };
  }
}
