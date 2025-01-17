const navElements = document.querySelectorAll('header .container nav ul li a');

navElements.forEach((item, )=>{
    item.addEventListener('click', ()=>{
        navElements.forEach((item)=>{
            item.classList.remove('active');
        })
        item.classList.add('active');
    })
});

const inputTarefa = document.getElementById('input-tarefa');
const btnAddTarefa = document.getElementById('btn-add-tarefa');
const areaEntrada = document.querySelector('.listar-tarefas .container .content')
const listaDeTarefas = document.querySelectorAll('.listar-tarefas .container .content ul li');
const tarefas = [];
console.log(listaDeTarefas)
btnAddTarefa.addEventListener('click', () =>{
    const forMessage = document.createElement('span');
    if(!inputTarefa.value){
        inputTarefa.style.borderColor = 'red';
        forMessage.innerText = 'Digite alguma Tarefa no Campo de Texto!';
        forMessage.style.color = 'red';
        areaEntrada.appendChild(forMessage);
        setTimeout(()=>{
            inputTarefa.style.borderColor = 'black';
            forMessage.style.display = 'none';
        },3000);
    }else{   
        if (tarefas.length <= 4){
            tarefas.push(inputTarefa.value);
            localStorage.setItem('tarefa', JSON.stringify(tarefas));
        }else{
            forMessage.innerText = 'Excedeste o limite de tarefas!';
            forMessage.style.color = 'red';
            areaEntrada.appendChild(forMessage);
        }
    }
    const getTarefas = JSON.parse(localStorage.getItem('tarefa'));
    getTarefas.forEach((tarefa, index, tarefas)=>{
        listaDeTarefas[index].innerText = tarefa;
    });
});        



        