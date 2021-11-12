const { Observable } = rxjs;

window.onload = function() {
    document.getElementById('btn').onclick = function() {
        let number = document.getElementById('num').value;
        Observable.create(observer => {
            fetch('https://randomuser.me/api/?results=' + number)
                .then(response => response.json())
                .then(val => {
                    observer.next(val.results);
                    observer.complete();
                })
                .catch(err => observer.error(err));
        }).subscribe(val => {
            const employee = document.getElementById('emp');
            employee.innerHTML = '';
           val.forEach(empl => {
                let temp = ` 
                        <lable>
                        ${empl.name.first} ${empl.name.last}
                        </lable>
                        <h3>Location</h3>
                        <p>
                        ${empl.location.street.number} ${empl.location.street.name}
                        </p>
                        <p>
                        ${empl.location.city}, ${empl.location.state} 
                        ${empl.location.country} ${empl.location.postcode}
                        </p>
                    <hr>   
                `;
                const p = document.createElement('p');
                p.innerHTML = temp;
                employee.appendChild(p);
            });
        });
    }
}