import { Routes } from '@angular/router';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { CotacaoComponent } from './pages/cotacao/cotacao.component';
import { OrcamentoDetailsComponent } from './pages/orcamento-details/orcamento-details.component';

export const routes: Routes = [
  { path: 'orcamentos', component: OrcamentoComponent, title: 'Orçamento' },
  {
    path: 'orcamentos/:id',
    component: OrcamentoDetailsComponent,
    title: 'Orçamento',
  },
  { path: 'cotacoes', component: CotacaoComponent, title: 'Cotações' },
  { path: '', redirectTo: 'orcamentos', pathMatch: 'full' },
];
