/* ==========================
   ChatTBM AI
   script.js - PART 1
========================== */

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const typingIndicator = document.getElementById("typing-indicator");

/* ==========================
   SEND MESSAGE
========================== */

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") return;

    addMessage(message, "user");

    userInput.value = "";

    showTyping();

    setTimeout(() => {

        hideTyping();

        const reply = generateReply(message);

        addMessage(reply, "bot");

    }, 1000);

}

/* ==========================
   ADD MESSAGE
========================== */

function addMessage(text, sender) {

    const message = document.createElement("div");

    message.className = "message " + sender;

    message.innerHTML = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;

}

/* ==========================
   QUICK BUTTONS
========================== */

function quickMessage(text){

    userInput.value = text;

    sendMessage();

}

/* ==========================
   TYPING
========================== */

function showTyping(){

    if(typingIndicator){

        typingIndicator.classList.remove("hidden");

    }

}

function hideTyping(){

    if(typingIndicator){

        typingIndicator.classList.add("hidden");

    }

}

/* ==========================
   ChatTBM AI
   script.js - PART 2
========================== */

function generateReply(message){

    const text = message.toLowerCase();

    if(text.includes("caption")){

        return "✨ Caption Idea:<br><br>Your next viral post starts with one creative idea. Keep creating and stay consistent! 🚀";

    }

    if(text.includes("script")){

        return "🎬 Video Script:<br><br><strong>Hook → Problem → Solution → Call to Action.</strong><br><br>Start with something that grabs attention immediately.";

    }

    if(text.includes("hashtag")){

        return "#AI #ChatTBM #ContentCreator #ViralContent #Instagram #Facebook #Reels";

    }

    if(text.includes("facebook")){

        return "📘 Facebook Post:<br><br>People don't buy products—they buy solutions. Here's how ChatTBM can help you create better content in minutes.";

    }

    if(text.includes("instagram")){

        return "📷 Instagram Caption:<br><br>Create. Inspire. Grow. 🚀 Your next viral post starts today with ChatTBM.";

    }

    if(text.includes("viral")){

        return "🔥 Viral Idea:<br><br>Film a 'Before vs After' transformation and hook viewers in the first 3 seconds.";

    }

    return "🤖 I'm still learning. Soon I'll answer using your AI API. For now, ask me about captions, scripts, hashtags, Facebook posts, Instagram captions, or viral ideas.";

}

/* ==========================
   ENTER TO SEND
========================== */

userInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        event.preventDefault();

        sendMessage();

    }

});

/* ==========================
   NEW CHAT
========================== */

function newChat(){

    chatBox.innerHTML = `

<div class="message bot">

👋 Hello, I'm <strong>ChatTBM</strong>.

<br><br>

How can I help you today?

</div>

`;

}

/* ==========================
   ChatTBM AI
   script.js - PART 3
========================== */

/* Open Signup */

function openSignup(){

    document.getElementById("signup-page").classList.remove("hidden");
    document.getElementById("login-page").classList.add("hidden");

}

/* Open Login */

function openLogin(){

    document.getElementById("login-page").classList.remove("hidden");
    document.getElementById("signup-page").classList.add("hidden");

}

/* Switch Pages */

function showSignup(){

    openSignup();

}

function showLogin(){

    openLogin();

}

/* Create Account */

function createAccount(){

    alert("🎉 Account creation is coming soon!");

}

/* Login */

function loginUser(){

    alert("✅ Login feature is coming soon!");

}

/* Start App */

window.onload = function(){

    if(chatBox){

        chatBox.scrollTop = chatBox.scrollHeight;
