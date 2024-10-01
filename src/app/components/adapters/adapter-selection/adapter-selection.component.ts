import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { InputAdapterComponent } from '../input-adapter/input-adapter.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adapter-selection',
  standalone: true,
  imports: [InputAdapterComponent],
  templateUrl: './adapter-selection.component.html',
  styleUrl: './adapter-selection.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AdapterSelectionComponent {
  @Input() adapterType: string = '';
  @Input() contentConfig: any = {};
  @Input() parentGroup: FormGroup = new FormGroup({});

  ngOnInit(): void {
    console.log(this.adapterType);
    console.log(this.contentConfig);
    console.log(this.parentGroup);
  }
}
