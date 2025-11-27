import { Project } from "@/interfaces/Project";
import { API } from "../../helpers/API";

export default async function fetchMobileApplications(): Promise<Project[] | void> {
    try {
        const response = await fetch(`${API}/MobileApplications/`, {
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
        console.log("Mobile Applications API Response:", data);
        return data.projects || []; // Предполагается, что API возвращает массив Project[]

    } catch (error) {
        console.error("MobileApplications fetch failed", error);
        throw error;
    }
}