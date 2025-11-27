import { API } from "../../helpers/API";
import { Project } from "@/interfaces/Project";

export default async function pickProject(id: number): Promise<Project | void> {
  try {
    const response = await fetch(`${API}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ id }) // Оборачиваем id в объект для корректной передачи
    })
    
    if(response.ok){
      const responseData: Project = await response.json();
      console.log(responseData);
      return responseData;
    } else {
      console.error('Failed to fetch project:', response.status, response.statusText);
    }
  } catch(error) {
    console.error('Error fetching project:', error);
  }
}