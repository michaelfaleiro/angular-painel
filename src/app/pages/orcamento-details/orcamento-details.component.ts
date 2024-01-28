import { Component } from '@angular/core';
import { OrcamentoService } from '../../services/orcamentos/orcamento.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IOrcamento } from '../../interfaces/IOrcamento';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orcamento-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './orcamento-details.component.html',
  styleUrl: './orcamento-details.component.css',
})
export class OrcamentoDetailsComponent {
  orcamento$ = new Observable<IOrcamento>();

  constructor(
    private orcamentoService: OrcamentoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOrcamento();
  }

  getOrcamento() {
    const id = this.route.snapshot.paramMap.get('id');
    this.orcamento$ = this.orcamentoService.getOrcamento(id!);
  }
}
