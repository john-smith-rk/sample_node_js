
const button = document.getElementById('signin');
button.addEventListener('click', function(e) {

  sendLogin();
  
});

const sendLogin = async () => {
    const user = document.getElementById('user').value;
    const pwd = document.getElementById('pwd').value;

    document.getElementById('error').innerText = '';

   if(!user & !pwd){
    document.getElementById('error').innerText = 'Please enter Username and Password.';
    alert(`Please enter Username and Password.`);
   }else if(!user){
    document.getElementById('error').innerText = 'Please enter Username.';
    alert(`Please enter Usenrname.`);
   }else if(!pwd){
    document.getElementById('error').innerText = 'Please enter Password.';
    alert(`Please enter Password.`);
   }else{
    try{
      const response =  await fetch(
        'http://localhost:3600/auth',
         {
          method:'POST',
          headers:{ 'Content-Type': 'application/json'},
          credentials:'include',
          body:JSON.stringify({user, pwd})
         }
       );

       const data = await response.json();

       const success = data['status'];
       const message = data['message'];

       if(success){
        alert(`Success :  ${message}`);
        window.location = '/success.html';
       }else{
        alert(`Warnning : ${message}`);
       }
       

    }catch(err){
      alert(`Error : ${err.message}- ${err} == ${err.stack}`);
    }
  }
    


}
