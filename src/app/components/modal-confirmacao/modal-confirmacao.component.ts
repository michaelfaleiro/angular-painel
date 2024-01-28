import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirmacao',
  standalone: true,
  imports: [],
  templateUrl: './modal-confirmacao.component.html',
  styleUrl: './modal-confirmacao.component.css',
})
export class ModalConfirmacaoComponent {
  @Output() modalConfirm = new EventEmitter<void>();
  @Output() closeModalConfirm = new EventEmitter<void>();

  modalConfirmacao() {
    this.modalConfirm.emit();
    this.closeModalConfirm.emit();
  }

  fecharModal(): void {
    this.closeModalConfirm.emit();
  }
}
