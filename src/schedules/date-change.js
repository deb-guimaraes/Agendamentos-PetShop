import { scheduleFetchByDay } from "../services/schedule-fetch-by-day.js"
import { schedulesShow } from "./schedules-show.js";

const selectedDate = document.querySelector("input.schedule-date");

//recarregar agendamentos ao mudar a data
selectedDate.onchange = async () => {
    const selected = selectedDate.value;

    const dailySchedules = await scheduleFetchByDay({ date: selected });
    
    //exibe os agendamentos
    schedulesShow({ dailySchedules })
}