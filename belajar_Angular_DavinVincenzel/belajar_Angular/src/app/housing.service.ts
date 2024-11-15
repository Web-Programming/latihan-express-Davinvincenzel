import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Citra Grand City',
      city: 'Palembang',
      state: 'ID',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7oBnDn3tm6raVhg9gfkDza_Ryu64xVvJvA&s',
      availableUnits: 12,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'Citra Land',
      city: 'Palembang',
      state: 'ID',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTta7Pk3A7e0JkMLOgt16mr34t9_QMa2J99UQ&s',
      availableUnits: 12,
      wifi: true,
      laundry: true

    }
  ]

  constructor() { }

  getallHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined{
    return this.housingLocationList.find(
      housingLocation => housingLocation.id == id);
  }
}
