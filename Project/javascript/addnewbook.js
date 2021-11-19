/**
 * addnewbooks.js
 */
 "use strict";

import { addBook } from "./main.js";
(function(){
async function addNewBook(){
    const newBookForm = document.getElementById("newBookForm");
    console.log(newBookForm);
    const bookTitle = document.getElementById("inputBook");
    const bookIsbn = document.getElementById("inputISBN");
    const bookOverdueFee = document.getElementById("inputFee");
    const bookPublisher = document.getElementById("inputPublisher");
    const bookDatePublished = document.getElementById("inputDate");
    newBookForm.addEventListener("submit", async function(event){
        event.preventDefault();
        const title = bookTitle.value;
        const isbn = bookIsbn.value;
        const overdueFee = bookOverdueFee.value;
        const publisher = bookPublisher.value;
        const datePublished = bookDatePublished.value;
        const newBookObj = {
            "isbn": isbn,
            "title": title,
            "overdueFee": overdueFee,
            "publisher": publisher,
            "datePublished": datePublished,
        };
        const newBookAdded =await addBook(newBookObj);
        bookTitle.value = "";
        bookIsbn.value = "";
        bookOverdueFee.value = "";
        bookPublisher.value = "0.00";
        bookDatePublished.value = "";
        title.focus();
    })
}
    addNewBook();
})();