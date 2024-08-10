import { buildTask } from "./modules/buil-task.js";
import {
	addTaskLocalStorage,
	deleteTasksLocalStorage,
	loadingTaskToLocalStorage,
} from "./modules/localstorage-task.js";

const $nameInputTask = document.getElementById("name_input_task");
const $dataInputTask = document.getElementById("date_input_task");
const $btnDeleteAll = document.getElementById("btn_delete_all");

const $containerTasks = document.querySelector(".container_tasks");
const $form = document.querySelector("form");

function addTask(e) {
	e.preventDefault();

	let name = $nameInputTask.value;
	let date = $dataInputTask.value;
	let status = document.querySelector(".status_task");

	let task = {
		name,
		date,
		status,
	};

	if ($nameInputTask.value === "" || $dataInputTask.value === "") return;

	buildTask(name, date);
	addTaskLocalStorage(task);

	$nameInputTask.value = " ";
	$dataInputTask.value = "";
}

$btnDeleteAll.addEventListener("click", () => {
	deleteTasksLocalStorage();
	$containerTasks.textContent = "";
});
$form.addEventListener("submit", addTask);

loadingTaskToLocalStorage();

export { $containerTasks };
