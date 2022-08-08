let userName = prompt(`Enter your name`)
if (userName) userName = userName.trim()
while(!userName || userName === ``){
    userName = prompt(`Enter your name`)
    if (userName) userName = userName.trim()
}
let userSurname = prompt(`Enter your surname`)
if (userSurname) userSurname = userSurname.trim()
while(!userSurname || userSurname === ``){
    userSurname = prompt(`Enter your surname`)
    if (userSurname) userSurname = userSurname.trim()
}
let userEmail = prompt(`Enter your email`)
if (userEmail) userEmail = userEmail.replaceAll(` `, ``).toLowerCase()
while (!userEmail || !userEmail.includes(`@`) || userEmail.startsWith(`@`) || userEmail.endsWith(`@`)){
    userEmail = prompt(`Enter your email`)
    if (userEmail) userEmail = userEmail.replaceAll(` `, ``).toLowerCase()
}
let userAge = prompt(`Enter your age`)
if (userAge) userAge = userAge.replaceAll(` `,``)
while (!userAge){
    userAge = prompt(`Enter your age`)
    if (userAge) userAge = userAge.replaceAll(` `,``)
}
    userAge = 2022-userAge;
document.write(`<ul>
    <li>Full name: ${userName} ${userSurname}</li>
    <li>Email: ${userEmail}</li>
    <li>Age: ${userAge}</li>
</ul>`)
