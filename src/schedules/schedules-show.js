import { scheduleDelete } from "../services/schedule-delete";
import { scheduleFetchByDay } from "../services/schedule-fetch-by-day";

const periodMorning = document.querySelector(".morning.schedules");
const periodAfternoon = document.querySelector(".afternoon.schedules");
const periodNight = document.querySelector(".night.schedules");

export function schedulesShow({ dailySchedules }) {
    try{
        periodMorning.innerText = "";
        periodAfternoon.innerHTML = "";
        periodNight.innerHTML = "";

        
        dailySchedules.forEach((schedule) => {
    
            const divTimeSchedule = document.createElement("div");
            divTimeSchedule.classList.add("time-schedule");
            divTimeSchedule.setAttribute("data-id", schedule.id);

            const elementHour = document.createElement("h3");
            elementHour.textContent = schedule.time;
            
            const elementPet = document.createElement("h3");
            elementPet.textContent = schedule.petName;

            const elementPetOwner = document.createElement("p");
            elementPetOwner.textContent = schedule.petOwnerName;

            const elementDescription = document.createElement("p");
            elementDescription.textContent = schedule.description;

            const elementBtnDel = document.createElement("button");
            elementBtnDel.textContent = "Deletar";
            elementBtnDel.setAttribute("type", "button");
            elementBtnDel.classList.add("btn-delete");

            divTimeSchedule.append(
                elementHour, 
                elementPet, 
                elementPetOwner, 
                elementDescription, 
                elementBtnDel,
            );

            const hour = Number(schedule.time.split(":")[0]);

            if(hour <= 12){
                periodMorning.appendChild(divTimeSchedule);
            } else if (hour > 12 && hour <= 18){
                periodAfternoon.appendChild(divTimeSchedule);
            } else {
                periodNight.appendChild(divTimeSchedule);
            }
            
            elementBtnDel.addEventListener("click", async () => {
                const confirmDelete = confirm("Tem certeza que deseja excluir este agendamento?");
                
                if (!confirmDelete) return;
                
                try {
                    await scheduleDelete(schedule.id);
                    
                    const dailySchedules = await scheduleFetchByDay({ date: schedule.date });
                    schedulesShow({ dailySchedules });
                    
                } catch (error) {
                    alert("Erro ao deletar agendamento.");
                    console.error(error);
                }
                
                
            })
        });
        
    } catch (error) {
        alert("Não foi possível exibir os agendamentos");
        console.log(error);
    }
}


//export function schedulesDay({ date }){
// }