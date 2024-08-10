export function complteTask(button, status) {
	button.addEventListener("click", () => {
		console.log(status.textContent);
		if (status.textContent === "Pending") {
			status.textContent = "Completed";
		} else {
			status.textContent = "Pending";
		}
	});
}
