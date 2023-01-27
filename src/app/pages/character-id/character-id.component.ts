import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacterByID } from 'src/app/interfaces/ICharacterById';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character-id',
  templateUrl: './character-id.component.html',
  styleUrls: ['./character-id.component.scss']
})
export class CharacterIdComponent implements OnInit {

  public character!:ICharacterByID ;

  constructor(private dataService:DataService, private activatedRoute: ActivatedRoute) {

    
   }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params =>{

      let idParam = Number(params.get('id'));


      this.dataService.getCharacterById(idParam).subscribe(data=>{
  
        this.character = data;       

      //  console.log(this.photo);
      })


    });


  }

}
