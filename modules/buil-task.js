import { $containerTasks } from "../main.js";
import { complteTask } from "./complete-task.js";
import { deleteTask } from "./delete-task.js";

export function buildTask(name, date) {
	let task = document.createElement("tr");
	task.classList.add("task");
	task.innerHTML = `
    <td class="name_task">${name}</td>
	<td class="date_task">${date}</td>
	<td class="status_task">Pending</td>
	<td class="container_buttons_actions">
		<button id="btn_completed_task"><i class="fa-solid fa-check"></i></button>
		<button id="btn_delete_task"><i class="fa-solid fa-trash"></i></button>
	</td>`;

	let $btnCompletedTask = task.querySelector("#btn_completed_task");
	let $btnDeleteTask = task.querySelector("#btn_delete_task");

	let status = task.querySelector(".status_task");
	let $name = task.querySelector(".name");

	complteTask($btnCompletedTask, status);
	deleteTask($btnDeleteTask, task, name);

	$containerTasks.appendChild(task);
}
