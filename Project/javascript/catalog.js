/**
 * 
 * catalog.js
 */
 "use strict";

import {fetchBookCatalog} from "./main.js";

(function(){ 
    async function displayBookCatalog() {
    const table = document.getElementById('tabel');
    const rowsArray =await fetchBookCatalog();
    
    rowsArray.forEach((rows,i)=> {
        const tr = document.createElement('tr');
        let temp =
        `<td>${++i}</td>
        <td>${rows.isbn}</td>
        <td>${rows.title}</td>
        <td>$ ${rows.overdueFee}</td>
        <td>${rows.publisher}</td>
        <td>${rows.datePublished}</td>` 

        tr.innerHTML = temp;
        table.appendChild(tr);
    });
    
}

displayBookCatalog();
})();
