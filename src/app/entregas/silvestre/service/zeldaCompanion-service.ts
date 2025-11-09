import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ZeldaCompanion } from '../model/zeldaCompanionInterface';

@Injectable({ providedIn: 'root' })
export class ZeldaCompanionService {
  private companions: ZeldaCompanion[] = [
    { id: 'c1', name: 'Navi', region: 'Great Plateau', description: 'Familiar and guiding spirit' },
    { id: 'c2', name: 'Mipha', region: 'Zora Domain', description: 'Graceful and caring' },
    { id: 'c3', name: 'Daruk', region: 'Goron City', description: 'Strong protector' },
    { id: 'c4', name: 'Revali', region: 'Rito Village', description: 'Skilled archer and flyer' },
    { id: 'c5', name: 'Urbosa', region: 'Gerudo Desert', description: 'Fierce warrior and leader' },
    { id: 'c6', name: 'Fi', region: 'Temple of Time', description: 'Spirit of the Master Sword' },
    { id: 'c7', name: 'Ezlo', region: 'Minish Village', description: 'Wise and witty hat companion' },
    { id: 'c8', name: 'Midna', region: 'Twilight Realm', description: 'Mysterious and powerful ally' },
    { id: 'c9', name: 'Tatl', region: 'Clock Town', description: 'Spunky fairy companion' },
    { id: 'c10', name: 'Ciela', region: 'Skyloft', description: 'Loyal Loftwing bird' },
  ];

  constructor() {}

  getAllCompanions(): Observable<ZeldaCompanion[]> {
    return of(this.companions);
  }
}
