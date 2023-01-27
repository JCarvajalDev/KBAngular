import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';
import { Error404Component } from './pages/error404/error404.component';
import { CharacterIdComponent } from './pages/character-id/character-id.component';

const routes: Routes = [
  { path: 'character', component: CharacterComponent },
  { path: 'character/:id', component: CharacterIdComponent },
  { path: '', redirectTo: 'character', pathMatch: 'full'},
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
