import { buildTask } from "./buil-task.js";

export function setTasksLocalStorage(tasks) {
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function deleteTaskLocalStorage(name) {
	let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
	tasks = tasks.filter((task) => {
		if (task && task.name === undefined) {
			// console.log("Removing task with undefined titleTask");
			return false;
		}
		if (task && task.name) {
			return task.name.trim() !== name.trim();
		}
		return true;
	});
	console.log("Tasks after deletion:", tasks);
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function addTaskLocalStorage(task) {
	const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
	tasks.push(task);
	setTasksLocalStorage(tasks);
}

export function loadingTaskToLocalStorage() {
	const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
	tasks.forEach((task) => {
		buildTask(task.name, task.date, task.status);
	});
}

export function deleteTasksLocalStorage() {
	JSON.stringify(localStorage.clear());
}
