import { Component } from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from "@angular/router";


@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-navi',
  styleUrl: './navi.scss',
  templateUrl: './navi.html'
})


export class Navi {}
