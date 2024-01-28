import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IOrcamento } from '../../interfaces/IOrcamento';
import { OrcamentoService } from '../../services/orcamentos/orcamento.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalConfirmacaoComponent } from '../../components/modal-confirmacao/modal-confirmacao.component';
import { NovoOrcamentoComponent } from '../../components/novo-orcamento/novo-orcamento.component';

@Component({
  selector: 'app-orcamento',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    ModalConfirmacaoComponent,
    NovoOrcamentoComponent,
  ],
  templateUrl: './orcamento.component.html',
  styleUrl: './orcamento.component.css',
})
export class OrcamentoComponent implements OnInit {
  orcamentos$ = new Observable<IOrcamento[]>();
  showModalNovoProduto: boolean = false;
  showModalConfirm: boolean = false;
  messageError: string = '';

  constructor(
    private orcamentoService: OrcamentoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllOrcamentos();
  }

  removeOrcamento(id: string): void {
    this.orcamentoService
      .removeOrcamento(id)
      .subscribe({ next: () => this.getAllOrcamentos() });
  }

  getAllOrcamentos() {
    this.orcamentos$ = this.orcamentoService.getAllOrcamentos();
    this.orcamentos$.subscribe({ next: () => this.cdr.detectChanges() });
  }

  showModal() {
    this.showModalNovoProduto = !this.showModalNovoProduto;
  }

  showModalConfirmacao(): void {
    this.showModalConfirm = !this.showModalConfirm;
  }
}
