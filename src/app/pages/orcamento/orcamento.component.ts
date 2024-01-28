import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IOrcamento } from '../../interfaces/IOrcamento';
import { OrcamentoService } from '../../services/orcamento.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-orcamento',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './orcamento.component.html',
  styleUrl: './orcamento.component.css',
})
export class OrcamentoComponent implements OnInit {
  orcamentos$ = new Observable<IOrcamento[]>();
  showModalNovoProduto: boolean = false;
  showModalConfirm: boolean = false;
  messageError: string = '';

  constructor(private orcamentoService: OrcamentoService) {}

  ngOnInit(): void {
    this.getAllOrcamentos();
  }

  getAllOrcamentos() {
    this.orcamentoService.getAllOrcamentos().subscribe({
      next: (orcamentos) => {
        this.orcamentos$ = of(orcamentos);
        console.log(orcamentos);
      },
      error: (err) => {
        this.messageError = 'Aconteceu um erro , tente novamente';
      },
    });
  }
}
