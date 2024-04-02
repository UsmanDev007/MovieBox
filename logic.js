const login=document.getElementById('login');
const email= document.querySelector('#validationCustom01');
const password= document.querySelector('#validationCustom02');
login.addEventListener('click',(e)=>{
     e.preventDefault();
     if(email.value!=='usman308@gmail.com'){
          alert('Wrong  email');
     }
     else if(password.value!=='movie@123'){
          alert('Wrong  Password');
     }
     else{
          window.location.href='landing.html';
     }
})
