// src/services/supabase.service.ts
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabaseUrl: string = 'https://xwgwgtwyvopniipwlehu.supabase.co';
  private supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3Z3dndHd5dm9wbmlpcHdsZWh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4ODgwNDIsImV4cCI6MjA0NTQ2NDA0Mn0.V-2frF55fdiP62n-i8WumfIJbUCaFukKTCX1N1FIIvM';
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  // Método para obtener datos de una tabla
  async getDatos() {
    const { data, error } = await this.supabase
      .from('tu_tabla') // Reemplaza 'tu_tabla' con el nombre real de tu tabla
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
