document.querySelector(".buttonclick").addEventListener("click", 
function(e){
  e.preventDefault();
  let form = document.getElementById('signup');
  let fname = form.elements['fname'].value
  let lname = form.elements['lname'].value
  let email = form.elements['email'].value;
  let country = form.elements['country'].value;

  let price1 = document.getElementById('price-1').innerText;
  let price2 = document.getElementById('price-2').innerText;

  let price3 = document.getElementById('price-3').innerText;
  let price4 = document.getElementById('price-4').innerText;

  let price5 = document.getElementById('price-5').innerText;
  let price6 = document.getElementById('price-6').innerText;

  let price7 = document.getElementById('price-7').innerText;
  let price8 = document.getElementById('price-8').innerText;

  let frstName = document.getElementById('frst-name')
  let lstName = document.getElementById('lst-name')
  let usrEmail = document.getElementById('usr-email')
  let usrCountry = document.getElementById('usr-country')
  let usrProduct1 = document.getElementById('usr-product1')
  let usrProduct2 = document.getElementById('usr-product2')

  frstName.innerText = fname,
  lstName.innerText = lname,
  usrEmail.innerText = email,
  usrCountry.innerText = country;

  if(function product1() {
    document.getElementById("product1").click;
  }){
    usrProduct1.innerText = price1
    usrProduct2.innerText = price2
  }
  else if(
    function product2() {
      document.getElementById("product2").click;
    }
  ){
    usrProduct1.innerText = price3
    usrProduct2.innerText = price4
  }
  else if(
    function product3() {
      document.getElementById("product3").click();
    }
  ){
    usrProduct1.innerText = price5
    usrProduct2.innerText = price6
  }
  else if(
    function product4() {
      document.getElementById("product4").click();
    }
  ){
    console.log('hellos');
    usrProduct1.innerText = price7
    usrProduct2.innerText = price8;
  }
    

})
