import { Routes } from '@angular/router';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { CotacaoComponent } from './pages/cotacao/cotacao.component';

export const routes: Routes = [
  { path: 'orcamento', component: OrcamentoComponent, title: 'Orçamento' },
  { path: 'cotacao', component: CotacaoComponent, title: 'Cotações' },
  { path: '', redirectTo: 'orcamento', pathMatch: 'full' },
];
