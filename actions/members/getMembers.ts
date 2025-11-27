import { Member } from "@/interfaces/Member";
import { API } from "../../helpers/API";

export default async function fetchMembers(): Promise<Member[] | void> {
    try {
        const response = await fetch(`${API}/Members`, {
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
        console.log("Members API Response:", data);
        return data;  
        
    } catch (error) {
        console.error("Members fetch failed", error);
        throw error;
    }
}