// 01
// var firstname = prompt("Enter First Name")
// var laststname = prompt("Enter last Name")

// var fullname = firstname+laststname

// alert("WELCOME"+fullname)

// 02
// var userfavmobile = prompt("ENTER YOUR FAVORITE MOBILE MODEL")

// var lenghtofmobilemodel = userfavmobile.length
// document.write("Your favorite mobile is:"+userfavmobile)
// document.write("<br>")
// document.write("lenght of string is:"+lenghtofmobilemodel)

// 03
// var nationality = "Pakistani";
// var index = nationality.indexOf("n")

// document.write("STRING:"+nationality)
// document.write("<br>")
// document.write("index of 'n'="+index)

// 04
// var Text = "HELLO WORLD";
// var index = Text.lastIndexOf("L")

// document.write("STRING:"+Text)
// document.write("<br>")
// document.write("index of 'L'="+index)

// 05
// var nationality = "Pakistani";
// var index = nationality.charAt("3")
// document.write("STRING:"+nationality)
// document.write("<br>")
// document.write("Character at index no 3 is:"+index)

// 06
// var firstname = prompt("Enter First Name")
// var laststname = prompt("Enter last Name")

// var fullname = firstname.concat(laststname);
// document.write(fullname)

// 07
// var hyderabad = "Hyderabad";
// var replace = hyderabad.replace("Hydera","Islama")
// document.write(replace)

// 08
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var result = message.replace(/and/g,"&")
// document.write(result)

// 09
// var parse = parseInt("472")
// document.write("Value:472")
// document.write("<br>")
// document.write("datatype=string")
// document.write("<br>")
// document.write("Value:"+parse)
// document.write("<br>")
// document.write("datatype=number")

// 10
// var userinput = prompt("Enter your favorite food")
// var uppercase = userinput.toUpperCase();
// document.write("user input:"+userinput)
// document.write("<br>")
// document.write("UPPERCASE:"+uppercase)

// 11
// function sentenceCase (str) {
//       if ((str===null) || (str===''))
//            return false;
//       else
//        str = str.toString();
    
//      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//     }
//     var userinput = prompt();
//     document.write(sentenceCase(userinput));

// 12
// var number = 35.36
// var string = number.toString().replace(".", "");
// document.write(string)

// 13
// var userName=prompt("Enter User name: ");
// checkValidName(userName);
// function checkValidName(un)
//  {
//      var message;
//      var split=[];
//      var arr=[];
//      for(var i=0;i<un.length;i++)
//      {
//          split[i]=un.split("&nbsp;");
//          arr[i]=un.charCodeAt(i);
//          if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//          {
//                  message="Correct User Name";
//          }
//         while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//         {
//             alert("please enter a valid userName");                                                                                                                   
//             userName=prompt("Enter your Input: ");
//             split[i]=un.split("&nbsp;");
//             arr[i]=un.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 message="correct in";
//                 break;
//             }
//         }

//     }
//     alert(message);
// }

// 14
// var useritem = prompt();
// var availableitem = ["cake", "apple pie", "cookie", "chips", "patties"]
// useritem = useritem.toUpperCase();
// switch (useritem) {
//       case"CAKE":
//       alert("Item is available")
//       break;
//       case"APPLE PIE":
//       alert("Item is available")
//       break;
//       case"COOKIE":
//       alert("Item is available")
//       break;
//       case"CHIPS":
//       alert("Item is available")
//       break;
//       case"PATTIES":
//       alert("Item is available")
//       break;
//       default:
//             alert("Item not found")
// }

// 15
// var userpassword = prompt("Enter Your Password");
// validpassword(userpassword);
// function validpassword(){  
//       var password =(userpassword)  

//       var passw= (a-z,A-Z,0-9);
//       if(userpassword!=passw) 
//       { 
//       alert('Password does not start with number')
//       }        
//       if (userpassword==null || userpassword==""){  
//         alert("Password can't be blank");  
//         return false;  
//       }else if(userpassword.length<6){  
//         alert("Password must be at least 6 characters long.");  
//         return false;  
//         }  
//       } 

// 16
// var university = "University of Karachi";
// university.split('');
// document.write(university[0])
// document.write("<br>")
// document.write(university[1])
// document.write("<br>")
// document.write(university[2])
// document.write("<br>")
// document.write(university[3])
// document.write("<br>")
// document.write(university[4])
// document.write("<br>")
// document.write(university[5])
// document.write("<br>")
// document.write(university[6])
// document.write("<br>")
// document.write(university[7])
// document.write("<br>")
// document.write(university[8])
// document.write("<br>")
// document.write(university[9])
// document.write("<br>")
// document.write(university[10])
// document.write("<br>")
// document.write(university[11])
// document.write("<br>")
// document.write(university[12])
// document.write("<br>")
// document.write(university[13])
// document.write("<br>")
// document.write(university[14])
// document.write("<br>")
// document.write(university[15])
// document.write("<br>")
// document.write(university[16])
// document.write("<br>")
// document.write(university[17])
// document.write("<br>")
// document.write(university[18])
// document.write("<br>")
// document.write(university[19])
// document.write("<br>")
// document.write(university[20])
// document.write("<br>")

// 17
// var userinput = "Pakistan";
// userinput.length;
// lastcharacter = userinput.charAt(userinput.length-1)
// document.write("User input;"+userinput)
// document.write("<br>")
// document.write("Last character of userinput is :"+lastcharacter)

// 18
// var text ="The quick brown fox jumps over the lazy dog."
// function countWords(text){
//    text = text.replace(/(^\s*)|(\s*$)/gi,"");
//    text= text.replace(/[ ]{2,}/gi," ");
//    text= text.replace(/\n /,"\n");
//    return text.split(' ').length;
// }
// document.write(countWords("the"));
// document.write("Text:The quick brown fox jumps over the lazy dog.")
// document.write("<br>")
// document.write("There are"+wordCount+"of word 'the'")