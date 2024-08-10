import { buildTask } from "./modules/buil-task.js";
import {
	addTaskLocalStorage,
	loadingTaskToLocalStorage,
} from "./modules/localstorage-task.js";

const $nameInputTask = document.getElementById("name_input_task");
const $dataInputTask = document.getElementById("date_input_task");

const $containerTasks = document.querySelector(".container_task");
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

$form.addEventListener("submit", addTask);

loadingTaskToLocalStorage();

export { $containerTasks };
