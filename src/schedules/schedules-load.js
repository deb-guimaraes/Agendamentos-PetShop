import { scheduleFetchByDay } from "../services/schedule-fetch-by-day";
import { schedulesShow } from "./schedules-show"

const selectedDate = document.querySelector("input.schedule-date");

export async function schedulesLoad () {
    const selected = selectedDate.value;

    const dailySchedules = await scheduleFetchByDay({ date: selected });
    
    //exibe os agendamentos
    schedulesShow({ dailySchedules })

}