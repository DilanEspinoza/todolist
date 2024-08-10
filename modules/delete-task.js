import { deleteTaskLocalStorage } from "./localstorage-task.js";

export function deleteTask(button, containerTask, name) {
	button.addEventListener("click", () => {
		containerTask.remove();
		deleteTaskLocalStorage(name);
	});
}
