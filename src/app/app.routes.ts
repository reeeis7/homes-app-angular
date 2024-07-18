import { Routes } from '@angular/router';
import { ImovelDetalhesComponent } from './imovel-detalhes/imovel-detalhes.component';
import { HomeComponent } from './home/home.component';
import { ImovelAluguelComponent } from './imovel-aluguel/imovel-aluguel.component';

export const routes: Routes = [

    {
        path: "detalhes/:id",
        component:ImovelDetalhesComponent
    },
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "detalhes/:id/aluguel",
        component: ImovelAluguelComponent
    }

];
