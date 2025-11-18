import { Project } from "@/interfaces/Project";
import { API } from "../../helpers/API";

export default async function fetchBots(): Promise<Project[] | void> {
    try {
        const response = await fetch(`${API}/Bots`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Bots API Response:", data);
        return data; // Предполагается, что API возвращает массив Project[]
        
    } catch (error) {
        console.error("Bots fetch failed", error);
        throw error;
    }
}