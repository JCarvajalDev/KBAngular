import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from '../interfaces/ICharacter';
import { Observable } from 'rxjs';
import { ICharacterByID } from '../interfaces/ICharacterById';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private   http: HttpClient) { }



  public getCharacter():Observable<ICharacter>{

    return this.http.get<ICharacter>('https://rickandmortyapi.com/api/character')
  
  }
  
  public getCharacterById(id:number):Observable<ICharacterByID>{
  
    return this.http.get<ICharacterByID>(`https://rickandmortyapi.com/api/character/${id}`)
  
  }


  public getCharacterFilter(texto:string):Observable<ICharacter>{

    return this.http.get<ICharacter>(`https://rickandmortyapi.com/api/character/?name=${texto}`)
    
  }


  public getCharacterPage(texto: string):Observable<ICharacter>{

    return this.http.get<ICharacter>(texto)
  
  }
  



}
