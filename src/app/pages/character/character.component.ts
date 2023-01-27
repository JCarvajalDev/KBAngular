import { Component, Input, OnInit } from '@angular/core';
import { ICharacter, Result } from 'src/app/interfaces/ICharacter';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() textoBusqueda: string="";

  public character!:ICharacter ;
  public next : string | null="";
  public prev : string | null="";

  carga:boolean=true;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {

    this.dataService.getCharacter().subscribe(data=>{
      this.character = data;
      this.next = data.info.next;
      this.prev = data.info.prev;     
      this.carga= false  ; 
    })

  }


  buscarPersonaje(event:any){
  
      this.dataService.getCharacterFilter(event.target.value.trim()).subscribe(data=>{
        this.character = data;
        this.next = data.info.next;
        this.prev = data.info.prev;  
        this.carga= false  ; 
      })

  }



  Nnext(pagina:string){
  
      this.dataService.getCharacterPage(pagina).subscribe(data=>{
        this.character = data;
        this.next = data.info.next;
        this.prev = data.info.prev;     
        this.carga= false  ; 
      })

  }

  Nprev(pagina:string){
  
    this.dataService.getCharacterPage(pagina).subscribe(data=>{
      this.character = data;
      this.next = data.info.next;
      this.prev = data.info.prev;   
      this.carga= false  ;   
    })

}

}
