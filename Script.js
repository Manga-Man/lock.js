//Javascript document
//script protected by MIT Lisence
//Made by Manga-man 2021
//Enjoy!


function setpwd(pwd) {
    
    
    var Password = window.prompt("This site is password-protected \n Please insert password:  ");
    
    while(Password != pwd) {
    
   if (Password === pwd) {

       alert("correct");
   } else {
   
       alert("incorrect")
       

    var Password = window.prompt("This site is password-protected \n Please insert password:  ");
    
   }
}

}
