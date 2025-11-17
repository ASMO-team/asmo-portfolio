export interface Project {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
  time_develop: number;
  created_at: string; // или Date если будете преобразовывать
  update_at: string; // или Date если будете преобразовывать
}