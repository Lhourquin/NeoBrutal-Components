import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NeoDropdownService {
  constructor() {
    console.log(this.openDropdownId());
  }
  openDropdownId: WritableSignal<string | undefined> = signal(undefined);

  setOpenDropdownId(uuid: string | undefined): void {
    this.openDropdownId.set(uuid);
  }
}
