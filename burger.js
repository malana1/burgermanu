let raiseheader = ()=> {

    let headerheight= document.getElementById
    ("header").style.height;
    console.log(headerheight);
    if(headerheight==""  ||headerheight=="100px"){
        document.getElementById("header").style
        .height="270px";
        document.getElementById("xazi2").style
        .display="none";
        document.getElementById("xazi1").
        style.transform="rotate(45deg)";
        document.getElementById("xazi3").style
        .transform="rotate(-45deg)";
        
    }
    else{
        document.getElementById("header").
        style.height="100px";
        document.getElementById("xazi2").style
        .display="block";
        document.getElementById("xazi1").style
        .transform="rotate(0deg)";
        document.getElementById("xazi3").style
        .transform="rotate(0deg)";
    }

  // document.getElementById("header").style.height="270px";
}