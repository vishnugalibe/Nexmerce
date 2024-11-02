let forminputs=document.querySelectorAll(".formInput");
let imgUrl=forminputs[0].addEventListener("change",(event)=>{
    let file1=event.target.files;
    if (file1.length > 0) {
        const file = file1[0];
        const fileURL = URL.createObjectURL(file);
        console.log(fileURL);
        const urlDisplay = document.getElementById('urlDisplay');
        urlDisplay.textContent= "blob: " + fileURL;
        console.log(urlDisplay);
    }
})