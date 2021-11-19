export async function addBook(book){
    let respons = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
        method: "post",
        body: JSON.stringify(book),
        headers:{
            "Content-Type": "application/json"
        }
    });
    let newAddedBook = await respons.json()
    return newAddedBook;
}


export async function fetchBookCatalog() {
    let responseBody = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list");
    let books = await responseBody.json();
    return books;
}
