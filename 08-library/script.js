const addBookButton = document.querySelector(".addBook > button");
const bookDialog = document.querySelector("#favDialog");

if (addBookButton && bookDialog) {
	addBookButton.addEventListener("click", () => {
		bookDialog.showModal();
	});
}
