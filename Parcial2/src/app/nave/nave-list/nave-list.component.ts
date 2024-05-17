import { Component, OnInit } from '@angular/core';
import { Nave } from '../Nave';
import { NaveService } from '../nave.service';

@Component({
  selector: 'app-nave-list',
  templateUrl: './nave-list.component.html',
  styleUrls: ['./nave-list.component.css']
})
export class NaveListComponent implements OnInit {
  naves: Array<Nave> = [];
  navesRebelion: number = 0;
  navesImperio: number = 0;
  navesNeutrales: number = 0;
  selected: Boolean = false;
  selectedNave!: Nave;

  constructor(private naveService: NaveService) { }
  
  getNaves() {
    this.naveService.getNaves().subscribe(naves => {
      this.naves = naves;
    });
  }
  ngOnInit() {
    this.getNaves();
    this.calcularNaves();
  }

  calcularNaves(): void {
    let rebelion = 0;
    let imperio = 0;
    let neutrales = 0;
    this.naves.forEach(nave => {
      if(nave.bando == "Rebelión")
        rebelion += 1;
      else if (nave.bando == "Imperio")
        imperio += 1;
      else
        neutrales +=1;
    });
    this.navesRebelion = rebelion;
    this.navesImperio = imperio;
    this.navesNeutrales = neutrales;
  }

  onSelect(nave: Nave) {
    this.selected = true;
    this.selectedNave =nave;
  }
}
