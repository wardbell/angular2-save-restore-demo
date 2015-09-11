export class RestoreService<T> {
  item: T;
  cachedItem: T;

  setItem (item: T) {
    this.item = item;
    this.cachedItem = this.clone(item);
  }

  getItem () :T {
    return this.item;
  }

  restoreItem () :T {
    this.item = this.cachedItem;
    return this.getItem();
  }

  clone (item: T) :T {
    // super poor clone implementation
    return JSON.parse(JSON.stringify(item));
  }
}
