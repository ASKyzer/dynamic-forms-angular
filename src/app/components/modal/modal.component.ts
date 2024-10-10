import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormVisibilityService } from '../../services/form-visibility.service';
import { ModalConfig, ModalService } from '../../services/modal.service';
import { AdapterSelectionComponent } from '../adapters/adapter-selection/adapter-selection.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AdapterSelectionComponent],
  templateUrl: './modal.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  config: ModalConfig | null = null;
  form: FormGroup;
  inputBuildForm: FormGroup = new FormGroup({});

  private subscription: Subscription = new Subscription();

  constructor(
    private modalService: ModalService,
    private fb: FormBuilder,
    public formVisibilityService: FormVisibilityService
  ) {
    this.form = this.fb.group({});
  }

  getModalSize() {
    switch (this.config?.size) {
      case 'md':
        return 'w-[48rem]';
      case 'lg':
        return 'w-[72rem]';
      default:
        return 'w-[32rem]';
    }
  }

  ngOnInit() {
    this.subscription.add(
      this.modalService.isOpen$.subscribe((isOpen) => (this.isOpen = isOpen))
    );
    this.subscription.add(
      this.modalService.config$.subscribe((config) => (this.config = config))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClose() {
    if (this.config?.closeOnAction) {
      this.config.closeOnAction();
    }
    this.modalService.closeModal();
  }

  onPrimaryAction() {
    if (this.config?.primaryAction) {
      this.config.primaryAction();
    }
    this.modalService.closeModal();
  }

  onSecondaryAction() {
    if (this.config?.secondaryAction) {
      this.config.secondaryAction();
    }
    this.modalService.closeModal();
  }
}
