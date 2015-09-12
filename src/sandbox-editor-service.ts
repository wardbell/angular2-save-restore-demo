export class SandboxEditorService<T> {
  private _originalItem: T;
  currentItem: T;

  setItem(item: T) {
    this._originalItem = item;
    this.restoreItem();
  }

  getItem(): T {
    return this.currentItem;
  }

  restoreItem() {
    this.currentItem = this.clone(this._originalItem);
  }

  saveItem() {
    this._originalItem = this.currentItem;
    this.restoreItem();
  }


  clone(item: T): T {
    // super poor clone implementation
    return JSON.parse(JSON.stringify(item));
  }
}
