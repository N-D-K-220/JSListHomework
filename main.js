let inputEl = document.getElementById('taskinput');
let taskscontainerEl = document.getElementById('tasksContainer');

inputEl.value = ''
let tasks = [];

if(localStorage.getItem('tasks')){
    tasks = JSON.parse(localStorage.getItem('task'));
}

function addTask(){
    if(inputEl.value===''){
        return alert("Please fill the Task.")
    }
        let task= {
            action : inputEl.value,
            status : false
        };

        tasks.push(task);
        updateDom(tasks);
        localStorage.setItem('tasks',JSON.stringify(tasks));

        inputEl.value=''

     //   console.log("add task function succeed");
      //  Updatedom(tasks);
}

function updateDom(data){
    taskscontainerEl.innerHTML = "";
    data.forEach((v,i) => {
        let element = document.createElement('div');
        element.classList.add('col-11','mt-3');
        element.innerHTML = `
        <div class = "card">
        <div class="d-flex p-3">
        <div class="mr-auto">${v.action}</div>
        <div class="pr-3">
        <button type="button" class="btn-primary updateStatus data-status="${v.status}" 
        onclick="updateStatus(this)" data-index='${i}'/><i class= "fa fa-check"></i>
        </button></div>

        <div>
        <button type="button" 
        class="btn btn-danger deletTask" onclick="deleteTask(${i})"  data-status="${v.status}" 
        data-index='${i}'/><i class= "fa fa-trash"></i>
        </button>
    </div>
    </div>
    </div>

        `;
        taskscontainerEl.appendChild(element);
    });
}

function deleteTask(index){
 // alert("fine");
    tasks.splice(index, 1);
    updateDom(tasks);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function updateStatus(e){
    let index= e.dataset.index;
    let status = e.dataset.status;
    console.log({index,status});

    if(status==='true'){
        e.dataset.status='false';
        task[index].status = false;
    }
    else{
        e.dataset.status='true';
        task[index].status = true;
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));
    updateDom(tasks);
}


//<div><button class="btn"><i class="fa fa-trash"></i></button></div>
        //</div>




/*inputEl.addEventListener("input", ()=>
    {

        let task= 
        {
            action : inputEl.value,
            status : false
        };

        console.log(task);
        //console.log(inputEl.value);
    })*/