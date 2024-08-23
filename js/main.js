import { Gerente } from "./gerente.js";
import { Desenvolvedor } from "./desenvolvedor.js";

const nameInput = document.getElementById("nome");
const ageInput = document.getElementById("idade");
const jobOption = document.getElementById("cargo")
const activityLabel = document.getElementById("atividadeLabel");
const activityInput = document.getElementById("atividade");
const managerList = document.getElementById("manager-list");
const developerList = document.getElementById("developer-list");

const managers = [];
const developers = [];


window.handleOptionChange = function(value){
    if (value === "gerente"){
        activityLabel.innerHTML = "Departamento:"
        activityInput.placeholder = "Informe o departamento"
    } else {
        activityLabel.innerHTML = "Linguagem:"
        activityInput.placeholder = "Informe a Linguagem de programação"
    }
}

window.onFormSubmit = function(event){
    event.preventDefault();
    try{
        addNewEmployee()
        
    } catch(error){
        exibirErro(error.message);
    }
}

function addNewEmployee(){
    let name = nameInput.value;
    let age = ageInput.value;
    let job = jobOption.value;
    let activity = activityInput.value;

    if(name === "" || age === "" || activity === ""){
        throw new Error("Preencha todos os campos");
    }

    if (job === "gerente"){
        managers.push(new Gerente(name,age,job,activity));
        listAllEmployees(managerList, managers);
    } else {
        developers.push(new Desenvolvedor(name,age,job,activity));
        listAllEmployees(developerList, developers);
    }
    clearFields();
}


function listAllEmployees(list, array){
    list.innerHTML = "";
    list.innerHTML = array.map((employee, index) =>{
        return `
            <li>
                <p>${employee.nome}</p>
                <div>
                    <button onclick="callMethod(${index}, 'seApresentar', '${list.id}')">Se Apresentar</button>
                    <button onclick="callMethod(${index}, 'trabalhar', '${list.id}')">Trabalhar</button>
                    ${list.id === "manager-list"
                        ? `<button onclick="callMethod(${index}, 'gerenciar', '${list.id}')">Gerenciar</button>`
                        : `<button onclick="callMethod(${index}, 'programar', '${list.id}')">Programar</button>`
                    }
                </div>
                <hr>
            </li>
        `
    }).join('');
}

window.callMethod = function(index,method,listId){
    let array = listId === 'manager-list' ? managers : developers;
    if (array[index] && typeof array[index][method] === 'function') {
        array[index][method]();
    }
}

function clearFields(){
    nameInput.value = "";
    ageInput.value = "";
    activityInput.value = "";
}

function exibirErro(erro){
    alert(`Ocorreu um erro: ${erro}`)
}
