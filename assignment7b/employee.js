async function employeeFetch() {
    let employees = await fetch('https://randomuser.me/api/?result=5');
    let json = await employees.json();
    console.log(json.results[0])
    return json.results[0];
    
}

async function employeesfetch() {
    let emplo = [];
    for (let i = 0; i <5; i++) {
        emplo[i] = await employeeFetch();
    }
    return emplo;
}

async function employView() {
    let emps = document.getElementById('emp');
    emps.innerHTML = '';
    let empsArr = await employeesfetch();
    empsArr.forEach(emp => {
        let temp = `     
            
                <img src="${emp.picture.large}" />
           
           
                <h3>${emp.name.first} ${emp.name.last}</h3>
                <p>phone: ${emp.phone}</p>
                <p>${emp.email}</p>
              
        `;
        const div = document.createElement('div');
        div.classList = 'row border-top';
        div.innerHTML = temp;
        emps.appendChild(div);
    });
}

document.getElementById('btn').onclick = function() {
     employView();
}
window.onload = function() {
     employView();


}