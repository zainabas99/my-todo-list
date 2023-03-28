function saveInput() {
    const addToList = document.getElementById('textInput');
    let input = addToList.value;   
    const stutus = document.getElementById('stutus');
    let stu = stutus.value;
    const time = document.getElementById('time');
    let tm = time.value;
    return [input, stu, tm];
}
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    let list = document.querySelector('ul');

    const stutus = document.getElementById('stutus');
    const time = document.getElementById('time');


    button.addEventListener('click', ()=>{
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listStutus = document.createElement('span');
        const listTime = document.createElement('span');
        const timeNow = new Date();
        const hour = document.createElement('span');
        const listBtn = document.createElement('button');
        const listBtnEdit = document.createElement('button');
        const listBtnComp = document.createElement('button');


    
        listItem.appendChild(listText);
        listText.textContent = myItem;

        listItem.appendChild(listStutus);
        listStutus.textContent = stutus.value;

        listItem.appendChild(listTime);
        listTime.textContent = time.value;
        
        listItem.appendChild(hour);
        let hourNow = timeNow.getHours();
        let minNow = timeNow.getMinutes();
        hour.textContent = hourNow +":"+minNow;

        listItem.appendChild(listBtn);
        listBtn.textContent = 'delete';
        
        listItem.appendChild(listBtnEdit);
        listBtnEdit.textContent = 'Edit';

    
        

        listItem.appendChild(listBtnComp);
        listBtnComp.textContent = 'Complite';

        listItem.style.backgroundColor = 'yellow';
        list.appendChild(listItem);
        

        listBtn.addEventListener('click', ()=> {
            list.removeChild(listItem);

        });

        listBtnEdit.addEventListener('click', ()=>{
            const inp = document.createElement('input');
            inp.textContent = "Sds";
            listItem.appendChild(listText);
            listText.textContent = inp.value;
        });

        listBtnComp.addEventListener('click', ()=>{
            listItem.style.backgroundColor = 'green';
        });
        listBtnEdit.addEventListener('click',()=>{
            listItem.style.background ='#008CBA';
        });

        input.focus();
    });

    

console.log("");