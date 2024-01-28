import { Component, EventEmitter, Output } from '@angular/core';
import { OrcamentoService } from '../../services/orcamentos/orcamento.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-novo-orcamento',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './novo-orcamento.component.html',
  styleUrl: './novo-orcamento.component.css',
})
export class NovoOrcamentoComponent {
  formulario!: FormGroup;

  @Output() closeModal = new EventEmitter<void>();
  @Output() carregarDados = new EventEmitter<void>();

  constructor(
    private orcamentoService: OrcamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      cliente: ['', Validators.compose([Validators.required])],
      carro: ['', Validators.compose([Validators.required])],
      telefone: ['', Validators.compose([Validators.required])],
      chassis: [''],
      placa: ['', Validators.compose([Validators.maxLength(7)])],
    });
  }

  fecharModal(): void {
    this.closeModal.emit();
  }

  atualizarDados(): void {
    this.carregarDados.emit();
  }

  novoOrcamento() {
    if (this.formulario.valid) {
      this.orcamentoService
        .postOrcamento(this.formulario.value)
        .subscribe(() => this.router.navigate(['/orcamentos']));
      this.atualizarDados();
      this.fecharModal();
    }
  }
}
