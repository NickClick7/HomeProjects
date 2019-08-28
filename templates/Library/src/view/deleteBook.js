library.view.deleteBook = {
	setupUserInterface: function() {
		var deleteButton = document.forms["Book"].commit;
		var selectEl = document.forms["Book"].selectBook;
		var key = "";
		var keys = [];
		var book = null;
		var optionEl = null;
		Book.loadAll();
		keys = Object.keys(Book.instances);
		for( var i=0; i<keys.length; i++) {
			key = keys[i];
			book = Book.instances[key];
			optionEl = document.createElement("option");
			optionEl.text = book.title;
			optionEl.value = book.isbn;
			selectEl.add(optionEl, null);
		}
		deleteButton.addEventListener("click", library.view.deleteBook.handleDeleteButtonClickEvent);
		window.addEventListener("beforeunload", function() {
			Book.saveAll();
		});
	},
	handleDeleteButtonClickEvent: function() {
		var selectEl = document.forms["Book"].selectBook;
		var isbn = selectEl.value;
		if(isbn) {
			Book.destroy(isbn);
			selectEl.remove(selectEl.selectedIndex);
		}
	}
}