import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormVisibilityService } from './form-visibility.service';

export interface ModalConfig {
  title: string;
  modalConfig: any;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryAction?: () => void;
  secondaryAction?: () => void;
  showCloseButton: boolean;
  size?: 'sm' | 'md' | 'lg';
  closeOnAction?: () => void;
}

const MODAL_DEFAULT_CONFIG: ModalConfig = {
  title: '',
  modalConfig: {},
  primaryButtonText: '',
  secondaryButtonText: '',
  primaryAction: () => {},
  secondaryAction: () => {},
  showCloseButton: true,
  size: 'sm',
};

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  private configSubject = new BehaviorSubject<ModalConfig | null>(null);

  constructor(public formVisibilityService: FormVisibilityService) {}

  isOpen$: Observable<boolean> = this.isOpenSubject.asObservable();
  config$: Observable<ModalConfig | null> = this.configSubject.asObservable();

  openModal(config: ModalConfig): void {
    config = { ...MODAL_DEFAULT_CONFIG, ...config };

    this.configSubject.next(config);
    this.isOpenSubject.next(true);
  }

  closeModal(): void {
    this.isOpenSubject.next(false);
  }
}
