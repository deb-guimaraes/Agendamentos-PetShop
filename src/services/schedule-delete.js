import { apiConfig } from "../services/api-config.js";

export async function scheduleDelete(id) {
    try {
        const response = await fetch(`http://localhost:3333/schedules/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Erro ao deletar agendamento");
        }

        
    } catch (error) {
        console.error("Erro ao deletar agendamento: ", error);
        throw error;
    }

}
