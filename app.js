function myFunction() {
    document.querySelector(".over").classList.remove("hide");
    document.querySelector(".inter").classList.add("hide");
    document.querySelector(".surface").classList.add("hide");
    
    document.querySelector(".mainEarth").classList.remove("hide");
    document.querySelector(".inpix").classList.add("hide");
    document.querySelector(".geopix").classList.add("hide");
    
    }



function myFunction2() {
    document.querySelector(".over").classList.add("hide");
    document.querySelector(".inter").classList.remove("hide");
    document.querySelector(".surface").classList.add("hide");
   
    document.querySelector(".mainEarth").classList.add("hide");
    document.querySelector(".inpix").classList.remove("hide");
    document.querySelector(".geopix").classList.add("hide");
   
    }

    function myFunction3() {
        document.querySelector(".over").classList.add("hide");
        document.querySelector(".inter").classList.add("hide");
        document.querySelector(".surface").classList.remove("hide");
        
        document.querySelector(".mainEarth").classList.remove("hide");
        document.querySelector(".inpix").classList.add("hide");
        document.querySelector(".geopix").classList.remove("hide");
        console.log("Hello World")
        }