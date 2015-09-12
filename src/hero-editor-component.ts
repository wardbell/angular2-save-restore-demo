import {Component, CORE_DIRECTIVES, EventEmitter, FORM_DIRECTIVES, View} from 'angular2/angular2';
import {SandboxEditorService} from './sandbox-editor-service';
import {Hero} from './hero';

@Component({
  selector: 'hero-editor',
  events: ['canceled', 'saved'],
  properties: ['hero'],
  bindings: [SandboxEditorService]
})
@View({
  template: `
    <div class="editor">
      <div>
        <span>Name: </span>
        <input [(ng-model)]="hero.name"/>
      </div>
      <div>
        <button (click)="onSaved()">save</button>
        <button (click)="onCanceled()">cancel</button>
      </div>
    </div>`,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HeroEditor {
  canceled = new EventEmitter();
  saved = new EventEmitter();

  constructor(private editorService: SandboxEditorService<Hero>) {}

  set hero(hero: Hero) {
    this.editorService.setItem(hero);
  }

  get hero() {
    return this.editorService.getItem();
  }

  onSaved() {
    this.editorService.saveItem();
    this.saved.next(this.hero);
  }

  onCanceled() {
    this.editorService.restoreItem();
    this.canceled.next(null);
  }
}
