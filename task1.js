//1. Write​ ​ a ​​ pattern​ ​ that​ ​can identify an​ ​ e-mail​ ​ address.
var email = 'anystr@inganystring.anystring';
var re = /\S+@\S+\.\S+/;
console.log(re.test(email));

// 2. Write​ ​ a ​​ JavaScript​ ​ function​ ​ to​ ​ hide​ ​ email​ ​ addresses​ ​ to​ ​ protect​ ​ from​ ​ unauthorized​ ​ user. The number of star will be equal to the number of characters hidden, and make this program dynamic.

// Input : abcdef@mail.com
// Output :  ab***f@mail.com​ 
var email = 'abcdef@mail.com';
var re = /\S+@\S+\.\S+/;
console.log(re.test(email));

var temp = email.split("@");
var array = [];
var str1 = temp[0];
var str2 = temp[1];
if(re.test(email)) {
  
  for(var i=0;i<str1.length;i++) {
    if((i>2)) {
      array.pop();
      array.push("*",str1[i]);
    }
    else {
    array.push(str1[i]);
  }
  }
  
}
array.push("@");
array.push(str2);
console.log(array.join(""));


// 3. Write​ ​ a ​​ JavaScript​ ​ function​ ​ to​ ​ remove​ ​ HTML/XML​ ​ tags​ ​ from​ ​ string.

// Input : '<p><strong><em>Javascript​ ​ Exercises</em></strong></p>'
// Output : Javascript​ Exercises
var html = "<p><strong><em>Javascript Exercises</em></strong></p>";
var temp = html.replace( /(<([^>]+)>)/ig, '');

console.log(temp);


// 4. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ that​ ​ creates​ ​ a ​ ​ table,​ ​ by accepting​ ​ row and ​ column​ ​ numbers​ ​ from​ ​ the user,​ ​ and​ ​input​s ​ row-column​ ​ number​ ​ as​ ​ content​ ​ (e.g.​ ​ Row-0​ ​ Column-0)​ ​ of​ ​ a ​ ​ cell.
///4.html