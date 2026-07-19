function sendMessage() {

    let chatBox = document.getElementById("chat-box");
    let input = document.getElementById("user-input");

    let message = input.value.trim();

    if (message === "") {
        return;
    }


    // Show user message
    chatBox.innerHTML += `
    <div class="message user">
        ${message}
    </div>
    `;


    // Temporary ChatTBM AI response
    let reply = getReply(message);


    // Show bot response
    setTimeout(() => {

        chatBox.innerHTML += `
        <div class="message bot">
            ${reply}
        </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 700);



    input.value = "";

}




function getReply(message){

    message = message.toLowerCase();



    if(message.includes("caption")){

        return "✨ Caption idea: 'Your next viral moment starts with one creative idea. Keep creating and keep growing 🚀'";

    }


    else if(message.includes("script")){

        return "🎬 Video Script:<br><br>Hook: Stop scrolling!<br>Problem: Tell the story.<br>Solution: Give value.<br>Ending: Ask viewers to follow for more.";

    }


    else if(message.includes("hashtag")){

        return "#️⃣ Hashtags: #ContentCreator #ViralVideo #AIContent #ChatTBM #CreativeIdeas";

    }


    else if(message.includes("facebook")){

        return "📘 Facebook tip: Start with a strong hook, tell a short story, and encourage people to comment.";

    }


    else if(message.includes("viral")){

        return "🔥 Viral idea: Create a short video with a surprising first 3 seconds, emotional story, and strong ending.";

    }


    else {

        return "🤖 I am ChatTBM. I can help you create captions, scripts, hashtags, adverts and viral content ideas.";

    }

}





function quickMessage(text){

    document.getElementById("user-input").value = text;

    sendMessage();

}
functionfunction openSignup(){

document.getElementById("signup-page").classList.remove("hidden");
document.querySelector(".welcome").style.display="none";

}


function openLogin(){

document.getElementById("login-page").classList.remove("hidden");
document.querySelector(".welcome").style.display="none";

}


function showLogin(){

document.getElementById("signup-page").classList.add("hidden");
document.getElementById("login-page").classList.remove("hidden");

}


function showSignup(){

document.getElementById("login-page").classList.add("hidden");
document.getElementById("signup-page").classList.remove("hidden");

}


function createAccount(){

alert("ChatTBM account created successfully 🚀");

}


function loginUser(){

alert("Welcome back to ChatTBM 👋");

}
