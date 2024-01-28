import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, finalize } from 'rxjs';
import { IOrcamento } from '../../interfaces/IOrcamento';
import { environment } from '../../../environments/environment.development';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class OrcamentoService {
  private apiUrl = `${environment.api}/orcamentos`;

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  getAllOrcamentos(): Observable<IOrcamento[]> {
    this.loadingService.show();
    return this.http.get<{ data: IOrcamento[] }>(`${this.apiUrl}`).pipe(
      map((response) => response.data),
      finalize(() => {
        this.loadingService.hide();
      })
    );
  }

  getOrcamento(id: string): Observable<IOrcamento> {
    this.loadingService.show();
    return this.http.get<{ data: IOrcamento }>(`${this.apiUrl}/${id}`).pipe(
      map((response) => response.data),
      finalize(() => {
        this.loadingService.hide();
      })
    );
  }

  postOrcamento(orcamento: IOrcamento): Observable<IOrcamento> {
    return this.http.post<IOrcamento>(this.apiUrl, orcamento);
  }

  removeOrcamento(id: string): Observable<IOrcamento> {
    return this.http.delete<IOrcamento>(`${this.apiUrl}/${id}`);
  }
}
