import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TransferComponent} from './components/transfer/transfer.component';

const routes: Routes = [
  {path: '', component: TransferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
