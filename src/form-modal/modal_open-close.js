//modal
const modal = document.querySelector("#modal");
const btnCancel = document.querySelector("#close-modal");
const btnAddSchedule = document.querySelector("#add-schedule");

const btnNewSchedule = document.querySelector("#btn-newSchedule button");


btnNewSchedule.addEventListener("click", (e) => {
    e.preventDefault();

    modal.classList.remove("hidden");
});

btnCancel.addEventListener("click", () => {
    modal.classList.add("hidden");
});