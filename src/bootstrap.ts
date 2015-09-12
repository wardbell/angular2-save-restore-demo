import {bootstrap} from 'angular2/angular2';
import {HeroesService} from './heroes-service';
import {HeroesComponent} from './heroes-component';

bootstrap(HeroesComponent, [HeroesService]);