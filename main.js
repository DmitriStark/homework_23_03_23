// For these tasks, you'd need to take a user input using the 'prompt()' method. Keep in mind that this returns a string, so if you require a number, make sure to convert it first.
// Example:
// var input = Number(prompt("Type a number"))
// עברית:כדי לפתור תרגולים אלו תצטרכו לקחת קלט (input) מהמשתמש באמצעות שימוש ב - prompt. לא לשכוח ש - prompt מחזיר string ולכן אם התרגיל דורש עבודה עם מספרים יש להמיר את ה- string ל - number.
// לדוגמה:
// var input = Number(prompt("Type a number"))
// כתוב תוכנית JavaScript שמנחה את המשתמש להזין מספר ובודקת אם המספר חיובי, שלילי או אפס.
// כתוב תוכנית JavaScript שמנחה את המשתמש להזין שני מספרים ובודקת אם הם שווים או לא.
// כתוב תוכנית JavaScript כדי לבדוק אם string נתון ריקה או לא.
// כתוב תוכנית JavaScript שמנחה את המשתמש להזין טמפרטורה בצלזיוס וממירה אותה לפרנהייט. הנוסחה להמרת צלזיוס לפרנהייט היא F = (C * 1.8) + 32.
// כתוב תוכנית JavaScript שמנחה את המשתמש להזין שלושה מספרים ומוצאת את הגדול שבהם.
// כתוב תוכנית JavaScript שמנחה את המשתמש להזין תו ובודקת אם מדובר בתנועה (vowel) או לא.
// כתוב תוכנית JavaScript שמנחה את המשתמש להזין שנה ובודקת אם זו שנה מעוברת או לא.
// כתוב תוכנית JavaScript שמנחה את המשתמש להזין מספר בין 1 ל-7 ומציגה את היום המתאים בשבוע.
// כתוב תוכנית JavaScript שמנחה את המשתמש להזין שני מספרים ובודקת אם המספר הראשון מתחלק במספר השני.
// כתוב תוכנית JavaScript שלוקחת מספר כקלט ובודקת אם הוא ריבוע מושלם או לא. ריבוע מושלם הוא מספר שלם חיובי השווה לריבוע של מספר שלם אחר


// //          targil 1 :


// var userinput = prompt("enter a number")
// userinput = parseInt(userinput)
// console.log(userinput)

// isNaN(userinput)

// if(isNaN||userinput === 0) {
//     console.log("please enter valid number")
// }
// else{
//     console.log("number is fine")
// }
// console.log(userinput)



// // targil 2
// Write a JavaScript program that prompts the user to enter two numbers and checks whether they are equal or not.




// var n1,n2

// n1 = prompt("enter number 1")
// n2 = prompt("enter number 2")

// if(n1 == n2){
//     console.log("number are equal")

// }
// else{
//     console.log("number are not equal")

// }




// targil 3
// Write a JavaScript program to check whether a given string is empty or not.


// var meshpat = prompt("enter a meshpat")

// if (meshpat === "") {
//     console.log("its empty")

// }
// else {

//     console.log("all fine" + " " + meshpat)
// }


// //targil 4
// Write a JavaScript program that prompts the user to enter a temperature in Celsius and converts it to Fahrenheit. The formula to convert Celsius to Fahrenheit is F = (C * 1.8) + 32.


// var c = prompt("enter celsius gradus")
// var f = (c * 1.8) + 32
// console.log("farenheit transform" + " " + f)

//targil 5
// Write a JavaScript program that prompts the user to enter three numbers and finds the largest of them.


// var nums =[]
// nums[0]=prompt("enter first number")
// nums[1]=prompt("enter first number")
// nums[2]=prompt("enter first number")
// parseInt(nums)
// console.log(Math.max(...nums))

//targil 6
// Write a JavaScript program that prompts the user to enter a character and checks whether it is a vowel or not.


// var meshpat =prompt("type meshpat")
// console.log(meshpat)

//targil 7
// Write a JavaScript program that prompts the user to enter a year and checks whether it is a leap year or not.


// var year = ["2023","2022"]


//targil 8
// Write a JavaScript program that prompts the user to enter a number between 1 and 7 and displays the corresponding day of the week.


// var week = ["reshon","sheni","shlishi","ravii","hamishi","shishi","shabat"]
// var day = prompt("enter day number")

// console.log(week[day-1])

// targil 9
// Write a JavaScript program that prompts the user to enter two numbers and checks whether the first number is divisible by the second number.


// var n1 = prompt("enter first number")
// var n2 = prompt("enter second number")
// var sum = n1 / n2
// if (sum %= 0) {
//     console.log("ein sheriit ")

// }
// else {

//     console.log("esh sheriit ")

// }

// //targil 10 
// Write a JavaScript program that takes a number as input and checks whether it is a perfect square or not. A perfect square is a positive integer that is equal to the square of another integer.

// var n1 = prompt("enter first number")
// var n2 = prompt("enter second number")
// var sum = n1 / n2
// if (sum === 0) {
//     console.log("methalek ")

// }
// else {

//     console.log("lo methalek ")

// }


//targil 11

// var number = prompt("enter number")


// if((Math.sqrt(number))){

//     console.log(Math.sqrt(number))
// }
// else{

//     console.log("not perfect")



// }



// other ver
function issquare(n) {
    if (n < 0) {
        return false
    }
    if (Number.isInteger(Math.sqrt(n))) {
        return true

    }
    else {
        return false
    }
}
issquare(9)

// var by = prompt("enter number")

// by ? 2 : false
// console.log(by)




