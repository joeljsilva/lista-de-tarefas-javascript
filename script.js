const btn = document.querySelector('.button');
const text = document.querySelector('#text');
const lista = document.querySelector('.lista')

// Função para adicionar a tarefa
function task(){
  if (text.value !== ''){
    // Criando a tarefa
  const li = document.createElement('li');
  li.textContent = text.value;
  li.classList.add('tarefa', 'list-group-item');
  lista.appendChild(li);

  // Opções deletar / concluida
  const $span = document.createElement('span');
  $span.classList.add('span');
  li.appendChild($span);

  // Concluir tarefa
  const concluir = document.createElement('button');
  concluir.innerHTML = '<i class="fa-solid fa-check"></i>'
  concluir.classList.add('checked');
  $span.appendChild(concluir);

  concluir.addEventListener('click', () => {
    const pai = concluir.parentNode;
    const bgLI = pai.parentNode;
    bgLI.classList.toggle('concluido');
    concluir.classList.toggle('concluido')
    deletar.classList.toggle('concluido')
  })

  // Apagar a tarefa
  const deletar = document.createElement('button');
  deletar.innerHTML = '<i class="fa-solid fa-trash"></i>'
  deletar.classList.add('delet');
  $span.appendChild(deletar);
  
  deletar.addEventListener('click', () => {
    const pai = deletar.parentNode;
    const tarefaLI = pai.parentNode;
    tarefaLI.remove();
  })
  

  //
  text.value = '';
  text.focus();
  } else {
    alert('Preencha o campo')
  }
  
}

btn.addEventListener('click', task);

// Dark mode

const $h1 = document.querySelector('h1');
const addBtn = document.querySelector('#button-addon2')
const $footer = document.querySelector('footer');
const $body = document.querySelector('body');
const $btn_darkmode = document.querySelector('#btn-darkmode')

function darkMode(){
  $h1.classList.toggle('dark-mode3');
  addBtn.classList.toggle('dark-mode2');
  $footer.classList.toggle('dark-mode2');
  $body.classList.toggle('dark-mode1');
  $btn_darkmode.classList.toggle('dark-mode2')
}

$btn_darkmode.addEventListener('click', darkMode)