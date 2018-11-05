// Create function 'showImages' which
// adds the loaded HTML content to <ul> element


//response.text().then(function (text) {
//   // do something with the text response
// });

const showImages = (html) =>{
  document.querySelector('ul').innerHTML = html;
};

fetch('images.html').then((response) =>{  //with brackets: (response)=>
  return response.text();
}).then((html) =>{
  showImages(html);
});



//XMLHttpRequest
// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       document.getElementById("demo").innerHTML = this.responseText;
//     }
//   };
//   xhttp.open("GET", "images.html", true);
//   xhttp.send();
// }


// //document.getElementById("btnGetFile").addEventListener("click", function(){
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       document.getElementsByTagName('ul')[0].innerHTML = this.responseText;
//       //document.getElementById("images").innerHTML = this.responseText;
//       //document.getElementById('file').innerHTML = this.responseText;
//      }
//   };
//   xhttp.open("GET", "images.html", true);
//   xhttp.send();
//});


//document.getElementById("myBtn").addEventListener("click", myFunction);
//
// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
// }


//document.getElementsByTagName('ul').innerHTML = this.responseText;
//document.getElementsByClassName('primary-color').innerHTML = this.responseText;

//var func = x => x * x;
// // concise body syntax, implied "return"
//
// var func = (x, y) => { return x + y; };
// // with block body, explicit "return" needed