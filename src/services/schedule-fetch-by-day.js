import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }){
    try{ 
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        const data = await response.json()

        const dailySchedules = data.filter((schedule) => {
            return dayjs(date).isSame(dayjs(schedule.date), "day")
        })

        return dailySchedules

    } catch (error) {
        alert("Não foi possível buscar os agendamentos do dia selecionado");
        console.log(error);
    }
}