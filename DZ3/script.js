let userName = prompt(`Enter your name`)
if (userName) userName = userName.trim()
while(!userName || userName === ``){
    userName = prompt(`Enter your name`)
    if (userName) userName = userName.trim()
}
let userSurname = prompt(`Enter your surname`)
if (userSurname) userSurname = userSurname.trim()
while(!userSurname){
    userSurname = prompt(`Enter your surname`)
    if (userSurname) userSurname = userSurname.trim()
}
let userEmail = prompt(`Enter your email`)
if (userEmail) userEmail = userEmail.replaceAll(` `, ``).toLowerCase()
while (!userEmail || !userEmail.includes(`@`) || userEmail.startsWith(`@`) || userEmail.endsWith(`@`)){
    userEmail = prompt(`Enter your email`)
    if (userEmail) userEmail = userEmail.replaceAll(` `, ``).toLowerCase()
}
let userAge = prompt(`Enter your year of birth`)
if (userAge) userAge = userAge.replaceAll(` `,``)
while (!isNaN){
    userAge = prompt(`Enter your year of birth`)
    if (userAge) userAge = userAge.replaceAll(` `,``)
}
    userAge = new Date().getFullYear()-userAge;
document.write(`<ul>
    <li>Full name: ${userName} ${userSurname}</li>
    <li>Email: ${userEmail}</li>
    <li>Age: ${userAge}</li>
</ul>`)
