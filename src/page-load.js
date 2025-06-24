import dayjs from "dayjs"
import { schedulesShow } from "./schedules/schedules-show.js"
import { scheduleFetchByDay } from "./services/schedule-fetch-by-day.js";

document.addEventListener("DOMContentLoaded", async () => {

    //carrega a data atual e define como mínima
    const selectedDate = document.querySelector("input.schedule-date");

    const dateToday = dayjs(new Date()).format("YYYY-MM-DD");
    
    selectedDate.value = dateToday;
    selectedDate.min = dateToday;

    //busca os agendamentos na API
    const dailySchedules = await scheduleFetchByDay({ date: dateToday });

    //exibe os agendamentos
    schedulesShow({ dailySchedules })

})



