const button = document.querySelector('#openModal');
const modal = document.querySelector("#modal");
const table = document.querySelector('#table');
const close = document.querySelector('#closeModal')
const form = document.querySelector('#postForm');
const input = document.querySelector('input');
const bbt = document.querySelector('#bbt');
const textarea = document.querySelector('textarea');
const modall = document.querySelector('#closeModall');
const editform = document.querySelector('#editModal');
const btt = document.querySelector('#btt');
const edt = document.querySelector('#editTitle');
const edb = document.querySelector('#editBody');

let count = 1;
let currentRow = null
button.addEventListener('click', () => {
    modal.style.display = 'flex';
})

modall.addEventListener('click', () => {
    editform.style.display = 'none';
})
close.addEventListener('click', () => {
    modal.style.display = 'none';
})

editform.addEventListener('submit', (e) => {
    e.preventDefault();
})



bbt.addEventListener('click', (e) => {
    e.preventDefault();
    const id = document.createElement('td');
    const title = document.createElement('td');
    const body = document.createElement('td');
    const tr = document.createElement('tr');
    const edit = document.createElement('button');
    const delet = document.createElement('button');
    id.textContent = count++;
    title.textContent = input.value;
    body.textContent = textarea.value;
    edit.textContent = 'edit';
    edit.classList.add('edit-btn');
    edit.addEventListener('click', (e) => {
        editform.style.display = 'flex';

    })
        edit.addEventListener('click', (e) => {
            edt.value = title.textContent 
            edb.value = body.textContent 
            e.preventDefault();
            editform.style.display = 'flex'; 
            currentRow = tr
        })
    delet.textContent = 'delete';
    delet.classList.add('delete-btn');
    delet.addEventListener('click', () => {
        tr.remove();
    })
    tr.appendChild(id);
    tr.appendChild(title);
    tr.appendChild(body);
    table.appendChild(tr);
    tr.appendChild(edit);
    tr.appendChild(delet);
    form.reset();
    modal.style.display = 'none';

})
btt.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentRow) {
        const cells = currentRow.getElementsByTagName("td");
        cells[1].textContent = edt.value; 
        cells[2].textContent = edb.value; 
        editform.style.display = "none";
    }
});

//! propogetion
//! nodelist
//! errylist