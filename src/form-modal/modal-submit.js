import dayjs from "dayjs";
import { scheduleNew } from "../services/schedule-new";
import { scheduleFetchByDay } from "../services/schedule-fetch-by-day";
import { schedulesLoad } from "../schedules/schedules-load";

const btnModalSubmit = document.querySelector("#add-schedule");
const modal = document.querySelector("#modal");

btnModalSubmit.addEventListener("click", async (e) => {
    e.preventDefault();
    
    const petName = document.querySelector("#pet-name").value.trim();
    const petOwnerName = document.querySelector("#pet-owner").value.trim();
    const petOwnerTel = document.querySelector("#telephone").value.trim();
    const description = document.querySelector("#description").value.trim();
    let date = document.querySelector("input#date").value.trim();
    let time = document.querySelector("#time").value;
        
    try {
        if(!petName || !petOwnerName || !petOwnerTel || !date  || !time) {
            alert("Informe os dados necessários")
            return;
        }

        //verifica se a hora do agendamento já está ocupada
        const dailySchedules = await scheduleFetchByDay({ date: date });

        const scheduleExists = dailySchedules.some(schedule => schedule.time === time);
        
        if ( scheduleExists ) {
            alert("este horário já está ocupado!");
            return;
        }

        //gera um ID
        const id = new Date().getTime();

        date = dayjs(new Date()).format("YYYY-MM-DD");
        
        //fecha o modal
        modal.classList.add("hidden");

        //faz o agendamento
        await scheduleNew({
            id,
            petName,
            petOwnerName,
            petOwnerTel,
            description,
            date,
            time,
        })

        //recarrega os agendamentos
        await schedulesLoad();

        //limpa os inputs
        document.querySelector("#pet-name").value = "";
        document.querySelector("#pet-owner").value = "";
        document.querySelector("#telephone").value = "";
        document.querySelector("#description").value = "";
        document.querySelector("input#date").value = "";
        document.querySelector("#time").value = "";

    } catch (error){
        alert("não foi possível realizar o agendamento.");

        console.log(error);
    } 
     
    });