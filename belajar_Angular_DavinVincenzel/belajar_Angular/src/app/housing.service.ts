import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
   url = "http://localhost:3000/housing";
   readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  constructor() { }

  async getallHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined>{
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }


  submitApplication(firstName: string, lastName: string, email: string) {
    const apiUrl = "http://localhost:3000/insert/register";
    const body = {
      firstname: firstName,
      lastname: lastName,
      email: email
    };
    return fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(response => {
      if(!response.ok) {
        throw new Error('Gagal mengirimkan data');
      }
      return response.json();
    })
    .then(data => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Pendaftaran Berhasil',
        text: 'Data anda telah berhasil disimpan',
        showConfirmButton: false,
        timer: 2000
      });
      return data;
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message
      });
      throw error;
    });
}

}