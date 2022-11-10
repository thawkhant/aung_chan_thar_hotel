// Start Header 

// Start Nav Bar

function dropbtn(e){
	 
	// document.getElementById("mydropdown").classList.toggle('show');

 // console.log(e.target);

 // console.log(e.target.nextElementSibling);

 e.target.nextElementSibling.classList.toggle('show')
}



function dropfilter(){
 // console.log("hie");

 var getsearch,filter,getdropdiv,getlinks;

 getsearch = document.getElementById("search");
 filter = getsearch.value.toUpperCase();
 // getdropdiv = document.getElementById("mydropdown");
 // getlinks = document.getElementsByTagName("a");
 // console.log(filter);

 getlinks = document.querySelectorAll('.mydropdowns a');  // drop down ye aunt ka a lot pyaw dar

 for(x=0; x<getlinks.length;x++){
 	// linkvalue = getlinks[x].textContent;   // sar ta lone chin si yu dar
 	linkvalue = getlinks[x].textContent || getlinks[x].innerText;
 	// console.log(linkvalue);

 	if(linkvalue.toUpperCase().indexOf(filter) > -1){                    // indexOf ka yite htal dal har
        getlinks[x].style.display = "";    // bar ma ma loke dar naw
 	}else{
       getlinks[x].style.display = "none";
 	}
 }
}

// End Nav Bar

 // Start Auto Background
  
  function* genfun(){
  	var index = 8;

  	while(true){
      yield index++;

      if(index > 13){
         index = 8;
      }
  	}
  }
var getgen = genfun();
// console.log(getgen.next().value) 
// console.log(getgen.next().value)
// console.log(getgen.next().value)
// console.log(getgen.next().value)
// console.log(getgen.next().value)


  
   var getheader = document.querySelector("header");     // take care your route
   getheader.style.backgroundImage =`url('./assets/img/img/banner/banner${getgen.next().value}.jpg')` ;  // js ka chake ke file ka html mar twar chake dr 
   
   function autoload(){
    // console.log(getgen.next().value)
      getheader.style.backgroundImage =`url('./assets/img/img/banner/banner${getgen.next().value}.jpg')` ;  // js ka chake ke file ka html mar twar chake dr 
   
   }

   setInterval(autoload,3500);

// End Auto Background

// End Header


// Start Room Section

$(".roompopup").magnificPopup({
  type: 'image'
  // other options
});


// End Room Section


// Start Testimonials Section

const getcompanyname = document.querySelector(".companyname");
const getrole = document.querySelector(".role");
const gettestimonial = document.querySelector(".testimonial");

const testimonialdatas = [
   {
     name : "Rich Star Restaurant",
     position : "Our Outltes",
     text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
   },
    {
     name : "48 Sky Bar Cafe",
     position : "Our Partner",
     text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
   },
    {
     name : "52 Beach Hotel",
     position : "Our Branch",
     text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
   },
    {
     name : "Cool Land Swimming Pool",
     position : "Our Client",
     text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
   },
    {
     name : "Chaung Thar SPA",
     position : "Our Bussiness",
     text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
   },
];

let idx = 0;

// console.log(testimonialdatas[idx].name);
// console.log(testimonialdatas[idx].position);
// console.log(testimonialdatas[idx].text);

function updatetestimonial(){
 
 // getcompanyname.textContent = testimonialdatas[idx].name;
 // getrole.textContent = testimonialdatas[idx].position;
 // gettestimonial.textContent = testimonialdatas[idx].text;


  const {name,position,text}  = testimonialdatas[idx];    // apow mar pay de name net a sin a tine yu ya dal

 getcompanyname.textContent = name;
 getrole.textContent = position;
 gettestimonial.textContent = text;

 // console.log(name);
 // console.log(position);
 // console.log(text);



 idx++;

 if(idx > testimonialdatas.length -1){
     idx = 0;
 }

}
updatetestimonial();
setInterval(updatetestimonial,10000);


// End Testimonials Section