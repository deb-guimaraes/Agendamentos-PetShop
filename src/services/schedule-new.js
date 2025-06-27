import { apiConfig } from "./api-config.js"

export async function scheduleNew({ 
            id,
            petName,
            petOwnerName,
            petOwnerTel,
            description,
            date,
            time, 
        }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                id,
                petName,
                petOwnerName,
                petOwnerTel,
                description,
                date,
                time, 
            }),
        })

        alert("Agendamento realizado com sucesso!");
    } catch (error) {
        alert("Não foi possível agendar. Tente novamente");
    }
}