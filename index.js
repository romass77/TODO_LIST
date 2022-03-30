


const myContainer = document.querySelector('.container');

const removeChekedBtn = document.querySelector('#deleteChekedRowsBtn');
const result = document.querySelector('.result');
const myInput = document.querySelector('.form-control');
const inputBtn = document.querySelector('#inputList');
const myProgressLabes = document.querySelector('.progress-lable');
const myProgressBar = document.querySelector('progress');


const myToDoUl = document.createElement('ul');
myContainer.appendChild(myToDoUl);

let totalNumberOfTodos = 0;
let completedTodos = 0;

let percentOfCompetedTasks = 0;
// add event
inputBtn.addEventListener('click', inputRow);



function inputRow(value) {
  // console.log(input.value)
  // inputResult.innerHTML += input.value
  // inputResult.innerHTML += `<li>${input.value}</li>`


  if (myInput.value === '') return;
  createNewElement(myInput.value);

  myInput.value = '';

}


function createNewElement(value) {

  // pasitikrinimui
  console.log(value);
  const myLi = document.createElement('li');

  // const checkBoxImput = document.createElement('input')
  //checkBoxImput.setAttribute('type','checkbox');



  const checkBoxInput = document.createElement('input');
  checkBoxInput.setAttribute('type', 'checkbox');
  checkBoxInput.addEventListener('click', (event) => {
    //event yra objektas su metodais kuris ateina is evento siuo atveju 'click'
    //event.target leidia pasirinkti HTML elementa at kuriuo iviko 'click'
    // event.target.parentElement leidzia pasirinkti tevini HTML elementa musu event.target elemrntui

    event.target.parentElement.classList.toggle('text');
    completedTodos = document.querySelectorAll('.text').length;
    myProgressLabes.innerHTML = `${completedTodos} of ${totalNumberOfTodos}`;
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    percentOfCompetedTasks = Math.floor(completedTodos === 0 ? 0 : (completedTodos / totalNumberOfTodos) * 100 );
    myProgressBar.value = percentOfCompetedTasks;

  });



  const deleteIcon = document.createElement('i');
  const deleteClassList = ['bi', 'bi-trash-fill'];
  deleteIcon.classList.add(...deleteClassList);

  deleteIcon.addEventListener('click', (event) => {        /*console.log('delete')*/
    result.removeChild(myLi);
    completedTodos = document.querySelectorAll('.text').length
    totalNumberOfTodos = document.querySelectorAll('li').length;
    myProgressLabes.innerHTML = `${completedTodos} of ${totalNumberOfTodos}`
  
    percentOfCompetedTasks = Math.floor(completedTodos === 0 ? 0 : (completedTodos / totalNumberOfTodos) * 100 );
    myProgressBar.value = percentOfCompetedTasks;



  });



  const editIcon = document.createElement('i');
  const editClassList = ['bi', 'bi-pencil-fill'];
  editIcon.classList.add(...editClassList);
  editIcon.addEventListener('click', () =>  {   /*console.log(event)*/

  console.log("Edit Task...");
  console.log("Change 'edit' to 'save'");
   
  


});


  checkBoxInput.className = 'chechBoxInput';
  myLi.className = 'li';
  myLi.textContent = value;


  result.appendChild(myLi);
  myLi.appendChild(checkBoxInput);
  myLi.appendChild(deleteIcon);
  myLi.appendChild(editIcon);





  totalNumberOfTodos = document.querySelectorAll('li').length;
  myProgressLabes.innerHTML = `${completedTodos} of ${totalNumberOfTodos}`;
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////


 



  //Math.floor()

  //console.log(document.querySelectorAll('li').length)
  //console.log(document.querySelectorAll('.result').length)


}



removeChekedBtn.addEventListener('click', function () {
  let allCompleredTasks = document.querySelectorAll('.text')
  allCompleredTasks.forEach(item => item.remove());
  totalNumberOfTodos = document.querySelectorAll('li').length
  completedTodos = 0;
  myProgressLabes.innerHTML = `${completedTodos} of ${totalNumberOfTodos}`;
  myProgressBar.value = 0;
  console.log(allCompleredTasks)
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

