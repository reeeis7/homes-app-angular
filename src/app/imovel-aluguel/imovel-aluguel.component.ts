import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imovel-aluguel',
  standalone: true,
  imports: [],
  templateUrl: './imovel-aluguel.component.html',
  styleUrl: './imovel-aluguel.component.css'
})
export class ImovelAluguelComponent {
  imovel: Imovel | undefined

  constructor(
    private imvService: ImovelService,
    private route: ActivatedRoute,
    private rt: Router
  ){
    const id=this.route.snapshot.params["id"]
    this.imovel = this.imvService.buscaImovelPeloId(id)
  }
}
