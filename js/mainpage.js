
try{

// const signInBUtton = document.getElementById('signIn');
// signInBUtton.addEventListener('click', function(e) {
//      window.location = '/login';
   
// });

// const signUpBUtton = document.getElementById('signUp');
// signUpBUtton.addEventListener('click', function(e) {
//     window.location = '/register';
// });

$(document).ready(function(){

   

    $('#centerdiv').slideDown(1000);

    // Sign Up click
    $('#signUp').on('click', function(e) {
        window.location.href = '/register';
    });

      // Sign In click
      $('#signIn').on('click', function(e) {
        window.location.href = '/login';
    });

 });


}catch(ee){
    alert(ee);
}


