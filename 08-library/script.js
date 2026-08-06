class Book {
	constructor(title, author, pages, status) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.status = status;
	}
}

const library = [];

const statusOrder = ["wishlist", "reading", "finished"];

const addBookButton = document.querySelector(".addBook > button");
const bookDialog = document.querySelector("#favDialog");
const bookForm = bookDialog?.querySelector("form");

const sections = {
	finished: document.querySelector(".finished"),
	reading: document.querySelector(".reading"),
	wishlist: document.querySelector(".wishlist"),
};

function createBookCard(book, index) {
	const card = document.createElement("div");

	const title = document.createElement("h2");
	title.textContent = book.title;

	const author = document.createElement("p");
	author.className = "bookAuthor";
	author.textContent = book.author;

	const pages = document.createElement("p");
	pages.className = "bookPages";
	const pagesLabel = document.createElement("span");
	pagesLabel.className = "pagesLabel";
	pagesLabel.textContent = "Pages:";
	pages.append(pagesLabel, ` ${book.pages}`);

	const buttons = document.createElement("div");
	buttons.className = "buttonsBook";

	const toggleButton = document.createElement("button");
	toggleButton.type = "button";
	toggleButton.textContent = "Toggle Read";
	toggleButton.addEventListener("click", () => {
		const nextIndex = (statusOrder.indexOf(book.status) + 1) % statusOrder.length;
		book.status = statusOrder[nextIndex];
		renderLibrary();
	});

	const deleteButton = document.createElement("button");
	deleteButton.type = "button";
	deleteButton.className = "deleteButton";
	deleteButton.setAttribute("aria-label", "Delete book");

	const deleteDefault = document.createElement("img");
	deleteDefault.src = "./images/delete/delete.svg";
	deleteDefault.alt = "delete icon";
	deleteDefault.className = "deleteDefault";

	const deleteHover = document.createElement("img");
	deleteHover.src = "./images/delete/delete-hover.svg";
	deleteHover.alt = "delete hover icon";
	deleteHover.className = "deleteHover";

	deleteButton.append(deleteDefault, deleteHover);
	deleteButton.addEventListener("click", () => {
		library.splice(index, 1);
		renderLibrary();
	});

	buttons.append(toggleButton, deleteButton);
	card.append(title, author, pages, buttons);
	return card;
}

function renderLibrary() {
	Object.values(sections).forEach((section) => {
		section.querySelectorAll(":scope > div").forEach((card) => card.remove());
	});

	library.forEach((book, index) => {
		sections[book.status].appendChild(createBookCard(book, index));
	});
}

if (addBookButton && bookDialog) {
	addBookButton.addEventListener("click", () => {
		bookDialog.showModal();
	});
}

if (bookForm) {
	bookForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const formData = new FormData(bookForm);
		const newBook = new Book(
			formData.get("bookTitle")?.toString().trim() || "Untitled",
			formData.get("bookAuthor")?.toString().trim() || "Unknown",
			Number(formData.get("bookPages")) || 0,
			formData.get("bookStatus")?.toString() || "wishlist",
		);

		library.push(newBook);
		renderLibrary();
		bookDialog?.close();
		bookForm.reset();
	});
}

renderLibrary();
