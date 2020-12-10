const addButton = document.querySelector('.add-btn');

const input = document.querySelector('input');

addButton.addEventListener('click', function(e) {
    if (!input.value) {
        return false;
    }
    const text = input.value;
    const li = document.createElement('li');
    const doneButton = document.createElement('button');
    const ul = document.querySelector('ul');
    doneButton.innerText = "完了！";
    li.innerText = text;
    li.appendChild(doneButton);
    ul.appendChild(li);

    doneButton.addEventListener('click', () => {
        console.log(li);
        li.classList.add('done');
    })


    input.value = "";
});