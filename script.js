// =====================================
// ChatTBM v2.1
// SCRIPT.JS PART 1
// Core Chat System
// =====================================

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const loading = document.getElementById("loading");


if(input){

input.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        sendMessage();

    }

});

}



function sendMessage(){

    let message = input.value.trim();


    if(message === ""){

        alert("Please enter a message.");

        return;

    }


    addUserMessage(message);

    input.value = "";


    if(loading){

        loading.style.display="block";

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





function addUserMessage(text){


chatBox.innerHTML += `

<div class="user">

${escapeText(text)}

</div>

`;


scrollBottom();


}





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

${text}

</p>


<button class="copy-btn" onclick="copyResponse(this)">

📋 Copy

</button>


</div>

`;

scrollBottom();


}





function quickMessage(text){

input.value=text;

sendMessage();

}





function scrollBottom(){

chatBox.scrollTop = chatBox.scrollHeight;

}




function escapeText(text){

return text
.replace(/</g,"&lt;")
.replace(/>/g,"&gt;");

}





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



if(message.includes("hello") || message.includes("hi")){

return "👋 Hello! Welcome to ChatTBM.";

}



return "🤖 I can help you create captions, scripts, adverts, hashtags and viral content ideas.";

}





function copyResponse(button){


const text = button.previousElementSibling.innerText;


navigator.clipboard.writeText(text);


button.innerHTML="✅ Copied";


setTimeout(function(){

button.innerHTML="📋 Copy";

},1500);


}







// =====================================
// ChatTBM v2.1
// SCRIPT.JS PART 2
// Login Signup Settings
// =====================================


function openLogin(){

document.getElementById("loginModal").style.display="flex";

}


function closeLogin(){

document.getElementById("loginModal").style.display="none";

}



function loginUser(){


let email =
document.getElementById("loginEmail").value.trim();


let password =
document.getElementById("loginPassword").value.trim();



if(email==="" || password===""){

alert("Please enter your email and password.");

return;

}



localStorage.setItem("chatTBM_last_email",email);

localStorage.setItem("chatTBM_logged_in","true");


alert("✅ Login Successful!");

closeLogin();


}




function openSignup(){

document.getElementById("signupModal").style.display="flex";

}



function closeSignup(){

document.getElementById("signupModal").style.display="none";

}




function signupUser(){


let name =
document.getElementById("signupName").value.trim();


let email =
document.getElementById("signupEmail").value.trim();


let password =
document.getElementById("signupPassword").value.trim();



if(name==="" || email==="" || password===""){

alert("Please complete all fields.");

return;

}



localStorage.setItem("chatTBM_username",name);

localStorage.setItem("chatTBM_last_email",email);

localStorage.setItem("chatTBM_logged_in","true");


alert("🎉 Account created successfully!");

closeSignup();


}




function openSettings(){

document.getElementById("settingsModal").style.display="flex";

}



function closeSettings(){

document.getElementById("settingsModal").style.display="none";

}



function toggleTheme(){

document.body.classList.toggle("light-theme");


localStorage.setItem(

"chatTBM_theme",

document.body.classList.contains("light-theme") ? "light":"dark"

);


}





// =====================================
// SCRIPT.JS PART 3
// Chat History Sidebar
// =====================================


function toggleSidebar(){

document.getElementById("sidebar").classList.toggle("active");

}



function newChat(){


chatBox.innerHTML=`

<div class="bot-message">

<p class="bot">

👋 Welcome back to ChatTBM!

I can help you create content ideas.

</p>

</div>

`;


saveChat();


}



function clearChat(){


if(confirm("Clear chat?")){


chatBox.innerHTML="";

localStorage.removeItem("chatTBM_chat");


}


}




function saveChat(){


localStorage.setItem(

"chatTBM_chat",

chatBox.innerHTML

);


}



function loadChat(){


let saved = localStorage.getItem("chatTBM_chat");


if(saved){

chatBox.innerHTML=saved;

}


}



window.addEventListener("load",function(){

loadChat();

});







// =====================================
// SCRIPT.JS PART 4
// Profile API Ready
// =====================================


function logoutUser(){


localStorage.removeItem("chatTBM_logged_in");

alert("Logged out.");

}



async function askAI(message){


return "ChatTBM AI is ready for API connection.";

}





function showProfile(){


let name =

localStorage.getItem("chatTBM_username")
||"Guest";


alert("👤 Profile: "+name);


}







// =====================================
// SCRIPT.JS PART 5
// Extra Features
// =====================================


function downloadChat(){


let text = chatBox.innerText;


let file = new Blob(

[text],

{type:"text/plain"}

);



let link=document.createElement("a");


link.href=URL.createObjectURL(file);


link.download="ChatTBM-Chat.txt";


link.click();


}





function shareChat(){


let text=chatBox.innerText;


if(navigator.share){


navigator.share({

title:"ChatTBM",

text:text

});


}else{


navigator.clipboard.writeText(text);

alert("Chat copied.");

}


}





function startVoice(){


alert("🎤 Voice feature coming after AI voice connection.");

}
