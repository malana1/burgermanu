let navelements = ["home", "about","gallery", "contact"];
let navtext='<ul class= "flex">';
let navlinks =["index.html", "about.html", "gallery.html", "contact.html",];
let navl= navelements.length;
for(i=0; i<navl; i++){
  //  console.log(navelements[i]);
  navtext+='<li><a href="'+navlinks[i]+'">'+ navelements[i]+"</a></li>";
   console.log(navtext);
   console.log(navlinks[i]);

}
navtext +="</ul>";
console.log(navtext);

document.getElementById("nav"). innerHTML = navtext;
