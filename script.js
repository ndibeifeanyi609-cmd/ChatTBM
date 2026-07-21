// =====================================
// ChatTBM v2.1 FINAL
// SCRIPT.JS PART 1
// Core Chat System
// =====================================


// Elements

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const loading = document.getElementById("loading");




// Enter Key Send Message

if(input){

input.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        sendMessage();

    }

});

}




// Send Message

function sendMessage(){


if(!input || !chatBox){

return;

}



let message = input.value.trim();



if(message === ""){


alert("Please enter a message.");

return;


}



addUserMessage(message);


input.value = "";



if(loading){

loading.style.display="flex";

}




setTimeout(function(){



if(loading){

loading.style.display="none";

}



let reply = getReply(message);


addBotMessage(reply);


saveChat();


},1000);



}







// Add User Message

function addUserMessage(text){



chatBox.innerHTML += `

<div class="user">

${escapeText(text)}

</div>

`;



scrollBottom();



}







// Add Bot Message

function addBotMessage(text){



let time = new Date().toLocaleTimeString([],{

hour:"2-digit",

minute:"2-digit"

});





chatBox.innerHTML += `

<div class="bot-message">


<div class="bot-info">


<span class="bot-name">

🤖 ChatTBM

</span>



<span class="bot-time">

${time}

</span>



</div>



<p class="bot">

${escapeText(text)}

</p>



<button class="copy-btn" onclick="copyResponse(this)">

📋 Copy

</button>



</div>

`;



scrollBottom();



}







// Quick Buttons

function quickMessage(text){


if(input){

input.value=text;

sendMessage();

}


}







// Auto Scroll

function scrollBottom(){


if(chatBox){

chatBox.scrollTop = chatBox.scrollHeight;

}


}







// Protect Text

function escapeText(text){


return text

.replace(/&/g,"&amp;")

.replace(/</g,"&lt;")

.replace(/>/g,"&gt;");


}







// AI Reply System

function getReply(message){



message = message.toLowerCase();





if(message.includes("caption")){


return "✍️ Caption idea: Your next viral post starts with one creative idea. Keep creating 🚀";


}



if(message.includes("video")){


return "🎬 Video idea: Hook → Story → Value → Call To Action.";


}



if(message.includes("script")){


return "📝 Script formula: Hook → Problem → Solution → CTA.";


}



if(message.includes("facebook")){


return "📘 Facebook Tip: Tell a story, give value and finish with a question.";


}



if(message.includes("instagram")){


return "📸 Instagram Tip: Use strong hooks and consistent posting.";


}



if(message.includes("advert")){


return "📢 Advert Formula: Attention → Interest → Desire → Action.";


}



if(message.includes("hashtag")){


return "#️⃣ #ChatTBM #AI #ContentCreator #ViralContent";


}



if(message.includes("calendar")){


return "📅 Monday: Tips\nTuesday: Behind The Scenes\nWednesday: Story\nThursday: Tutorial\nFriday: Entertainment";


}



if(message.includes("hello") || message.includes("hi")){


return "👋 Hello! Welcome to ChatTBM.";


}



return "🤖 I can help you create captions, scripts, adverts, hashtags and viral content ideas.";



}







// Copy AI Response

function copyResponse(button){



let text = button.previousElementSibling.innerText;



navigator.clipboard.writeText(text);



button.innerHTML="✅ Copied";



setTimeout(function(){


button.innerHTML="📋 Copy";


},1500);



}

// =====================================
// ChatTBM v2.1 FINAL
// SCRIPT.JS PART 2
// Login • Signup • Settings • Theme
// =====================================



// ---------- LOGIN ----------


function openLogin(){


let modal = document.getElementById("loginModal");


if(modal){

modal.style.display="flex";

}


}





function closeLogin(){


let modal = document.getElementById("loginModal");


if(modal){

modal.style.display="none";

}


}





function loginUser(){



let email = document.getElementById("loginEmail").value.trim();


let password = document.getElementById("loginPassword").value.trim();





if(email==="" || password===""){


alert("Please enter your email and password.");


return;


}




localStorage.setItem(

"chatTBM_last_email",

email

);



localStorage.setItem(

"chatTBM_logged_in",

"true"

);




updateAccount();



alert("✅ Login Successful!");



closeLogin();



}







// ---------- SIGN UP ----------



function openSignup(){


let modal=document.getElementById("signupModal");


if(modal){

modal.style.display="flex";

}


}







function closeSignup(){


let modal=document.getElementById("signupModal");


if(modal){

modal.style.display="none";

}


}







function signupUser(){



let name = document.getElementById("signupName").value.trim();


let email = document.getElementById("signupEmail").value.trim();


let password = document.getElementById("signupPassword").value.trim();





if(name==="" || email==="" || password===""){


alert("Please complete all fields.");


return;


}




localStorage.setItem(

"chatTBM_username",

name

);



localStorage.setItem(

"chatTBM_last_email",

email

);



localStorage.setItem(

"chatTBM_logged_in",

"true"

);





updateAccount();



alert("🎉 Account created successfully!");



closeSignup();



}








// ---------- SETTINGS ----------



function openSettings(){


let modal=document.getElementById("settingsModal");


if(modal){

modal.style.display="flex";

}


}






function closeSettings(){


let modal=document.getElementById("settingsModal");


if(modal){

modal.style.display="none";

}


}







// Save Username



function saveUsername(){



let username=document.getElementById("username").value.trim();




if(username===""){


alert("Enter a username.");


return;


}




localStorage.setItem(

"chatTBM_username",

username

);



updateAccount();



alert("✅ Username saved.");



}








// Theme Toggle



function toggleTheme(){



document.body.classList.toggle("light-theme");



let theme = document.body.classList.contains("light-theme")

?"light"

:"dark";



localStorage.setItem(

"chatTBM_theme",

theme

);



}








// Load Theme + Account



function loadSettings(){



let theme = localStorage.getItem("chatTBM_theme");



if(theme==="light"){


document.body.classList.add("light-theme");


}



updateAccount();



}








// Update Account Display



function updateAccount(){



let account=document.getElementById("account-status");



if(!account){

return;

}



let name = localStorage.getItem("chatTBM_username");



let logged = localStorage.getItem("chatTBM_logged_in");





if(logged==="true" && name){


account.innerHTML="👤 "+name;


}else{


account.innerHTML="👤 Guest";


}



}







// Clear All Data



function clearAllData(){



if(confirm("Delete all ChatTBM data?")){


localStorage.clear();


location.reload();


}



}

// =====================================
// ChatTBM v2.1 FINAL
// SCRIPT.JS PART 3
// Sidebar • Chat History • New Chat
// =====================================



// Toggle Sidebar


function toggleSidebar(){



let sidebar=document.getElementById("sidebar");



if(sidebar){


sidebar.classList.toggle("active");


}



}








// New Chat



function newChat(){



if(!chatBox){

return;

}




chatBox.innerHTML=`

<div class="bot-message">


<div class="bot-info">


<span class="bot-name">

🤖 ChatTBM

</span>


<span class="bot-time">

Now

</span>


</div>



<p class="bot">

👋 Welcome to a new ChatTBM chat!

I can help you create captions,
scripts, adverts, hashtags and viral content ideas.

</p>



</div>

`;



saveChat();


}








// Clear Chat



function clearChat(){



if(confirm("Clear this conversation?")){


chatBox.innerHTML="";


localStorage.removeItem("chatTBM_chat");



loadHistory();



}



}








// Save Current Chat



function saveChat(){



if(!chatBox){

return;

}





localStorage.setItem(

"chatTBM_chat",

chatBox.innerHTML

);




saveHistory();



}








// Load Chat



function loadChat(){



let saved = localStorage.getItem("chatTBM_chat");



if(saved && chatBox){



chatBox.innerHTML=saved;



}



}








// Save Chat History



function saveHistory(){



let history = JSON.parse(

localStorage.getItem("chatTBM_history")

) || [];





history.unshift({


title:"Chat " + new Date().toLocaleString(),


content:chatBox.innerHTML


});





if(history.length > 20){


history.pop();


}





localStorage.setItem(

"chatTBM_history",

JSON.stringify(history)

);



loadHistory();



}








// Load Sidebar History



function loadHistory(){



let list=document.getElementById("history-list");



if(!list){

return;

}





list.innerHTML="";





let history=JSON.parse(

localStorage.getItem("chatTBM_history")

) || [];





history.forEach(function(chat){



let item=document.createElement("div");



item.className="history-item";



item.innerHTML=chat.title;





item.onclick=function(){



chatBox.innerHTML=chat.content;



localStorage.setItem(

"chatTBM_chat",

chat.content

);



toggleSidebar();



};





list.appendChild(item);



});



}








// Load Everything When Page Opens



window.addEventListener("load",function(){



loadChat();


loadHistory();


loadSettings();


});

// =====================================
// ChatTBM v2.1 FINAL
// SCRIPT.JS PART 4
// Profile • API Ready • User Actions
// =====================================



// Logout User


function logoutUser(){



localStorage.removeItem(

"chatTBM_logged_in"

);



updateAccount();



alert("🚪 Logged out successfully.");



}








// Show Profile



function showProfile(){



let name = 

localStorage.getItem("chatTBM_username")

|| "Guest";



let email =

localStorage.getItem("chatTBM_last_email")

|| "No email";




alert(

"👤 ChatTBM Profile\n\n" +

"Name: " + name +

"\nEmail: " + email

);



}








// AI API Connection Ready



async function askAI(message){



// Future API connection area


return "🤖 ChatTBM AI is ready for API connection.";



}








// Error Handler



window.addEventListener("error",function(){



console.log(

"ChatTBM detected an error."

);



});








// Update Profile Name Automatically



function updateProfile(){



let username=

localStorage.getItem(

"chatTBM_username"

);



let profile=document.querySelector(".profile-card p");



if(profile && username){



profile.innerHTML="👤 "+username;



}



}








// Check Login Status



function checkLogin(){



let logged = localStorage.getItem(

"chatTBM_logged_in"

);



if(logged==="true"){



updateAccount();



}


}








window.addEventListener("load",function(){



checkLogin();


updateProfile();



});

// =====================================
// ChatTBM v2.1 FINAL
// SCRIPT.JS PART 5
// Backup • Download • Share • Voice • Version
// =====================================



// Download Chat


function downloadChat(){



if(!chatBox){

return;

}



let text = chatBox.innerText;



let file = new Blob(

[text],

{

type:"text/plain"

}

);




let link=document.createElement("a");



link.href=URL.createObjectURL(file);



link.download="ChatTBM-Chat.txt";



link.click();



}








// Share Chat



function shareChat(){



let text = chatBox.innerText;



if(navigator.share){



navigator.share({

title:"ChatTBM",

text:text

});



}else{



navigator.clipboard.writeText(text);



alert("📋 Chat copied to clipboard.");



}



}








// Backup Chat



function backupChat(){



let backup = {



chat:

localStorage.getItem("chatTBM_chat"),



history:

localStorage.getItem("chatTBM_history"),



username:

localStorage.getItem("chatTBM_username")



};




localStorage.setItem(

"chatTBM_backup",

JSON.stringify(backup)

);



alert("💾 ChatTBM backup saved.");



}








// Restore Backup



function restoreBackup(){



let backup = JSON.parse(

localStorage.getItem("chatTBM_backup")

);





if(!backup){



alert("No backup found.");

return;



}




if(backup.chat){



localStorage.setItem(

"chatTBM_chat",

backup.chat

);



}




if(backup.history){



localStorage.setItem(

"chatTBM_history",

backup.history

);



}




if(backup.username){



localStorage.setItem(

"chatTBM_username",

backup.username

);



}




alert("♻️ Backup restored.");



location.reload();



}








// Voice Feature Placeholder



function startVoice(){



alert(

"🎤 Voice feature will be connected after AI voice setup."

);



}








// App Version



function showVersion(){



alert(

"🚀 ChatTBM v2.1\n\nYour AI Content Assistant for Captions, Scripts & Viral Ideas."

);



}








// Final Startup Check



window.addEventListener("load",function(){



updateAccount();


loadChat();


loadHistory();



});
