// =====================================
// ChatTBM v2.0
// Script Part 1
// =====================================

// Elements
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const loading = document.getElementById("loading");

// Press Enter to send
input.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        sendMessage();

    }

});

// Send Message

function sendMessage(){

    let message = input.value.trim();

    if(message === ""){

        alert("Please enter a message.");

        return;

    }

    addUserMessage(message);

    input.value = "";

    loading.style.display = "block";

    setTimeout(function(){

        loading.style.display = "none";

        let reply = getReply(message);

        addBotMessage(reply);

        saveChat();

    },1000);

}

// User Message

function addUserMessage(text){

    chatBox.innerHTML += `
    <p class="user">
        ${text}
    </p>
    `;

    scrollBottom();

}

// Bot Message

function addBotMessage(text){

    chatBox.innerHTML += `

    <div class="bot-message">

        <p class="bot">

            ${text}

        </p>

        <button class="copy-btn"
        onclick="copyResponse(this)">
            📋 Copy
        </button>

    </div>

    `;

    scrollBottom();

}

// Quick Buttons

function quickMessage(text){

    input.value = text;

    sendMessage();

}

// Auto Scroll

function scrollBottom(){

    chatBox.scrollTop = chatBox.scrollHeight;

}

// AI Reply Engine

function getReply(message){

    message = message.toLowerCase();

    if(message.includes("caption")){

        return "✍️ Caption idea: Your next viral post starts with one creative idea. Keep creating. 🚀";

    }

    if(message.includes("video")){

        return "🎬 Video Script: Hook → Story → Value → Call To Action.";

    }

    if(message.includes("script")){

        return "📝 Script Formula: Hook → Problem → Solution → CTA.";

    }

    if(message.includes("facebook")){

        return "📘 Facebook Tip: Tell a story, give value and finish with a question.";

    }

    if(message.includes("instagram")){

        return "📸 Instagram Caption: Dream big. Stay consistent. Success follows action.";

    }

    if(message.includes("advert")){

        return "📢 Advert Formula: Attention → Interest → Desire → Action.";

    }

    if(message.includes("calendar")){

        return "📅 Monday: Tips\nTuesday: Behind the Scenes\nWednesday: Story\nThursday: Tutorial\nFriday: Entertainment\nSaturday: Q&A\nSunday: Motivation";

    }

    if(message.includes("hashtag")){

        return "#️⃣ #ChatTBM #ContentCreator #AI #ViralContent #SocialMedia";

    }

    if(message.includes("hello") || message.includes("hi")){

        return "👋 Hello! Welcome to ChatTBM.";

    }

    return "🤖 I can help you create captions, scripts, adverts, hashtags and viral content ideas.";

}

// Copy Response

function copyResponse(button){

    const text = button.previousElementSibling.innerText;

    navigator.clipboard.writeText(text);

    button.innerHTML = "✅ Copied";

    setTimeout(function(){

        button.innerHTML="📋 Copy";

    },1500);

}

// =====================================
// ChatTBM v2.0
// Script Part 2
// Login • Signup • Settings
// =====================================

// ---------- LOGIN ----------

function openLogin(){

    document.getElementById("loginModal").style.display = "flex";

}

function closeLogin(){

    document.getElementById("loginModal").style.display = "none";

}

function loginUser(){

    const email =
    document.getElementById("loginEmail").value.trim();

    const password =
    document.getElementById("loginPassword").value.trim();

    if(email==="" || password===""){

        alert("Please enter your email and password.");

        return;

    }

    localStorage.setItem("chatTBM_last_email",email);

    alert("✅ Login Successful!\n\nWelcome back to ChatTBM.");

    closeLogin();

}

// ---------- SIGN UP ----------

function openSignup(){

    document.getElementById("signupModal").style.display="flex";

}

function closeSignup(){

    document.getElementById("signupModal").style.display="none";

}

function signupUser(){

    const name =
    document.getElementById("signupName").value.trim();

    const email =
    document.getElementById("signupEmail").value.trim();

    const password =
    document.getElementById("signupPassword").value.trim();

    if(name==="" || email==="" || password===""){

        alert("Please complete all fields.");

        return;

    }

    localStorage.setItem("chatTBM_username",name);

    localStorage.setItem("chatTBM_last_email",email);

    alert("🎉 Account created successfully!\n\nWelcome " + name + "!");

    closeSignup();

}

// ---------- SETTINGS ----------

function openSettings(){

    document.getElementById("settingsModal").style.display="flex";

}

function closeSettings(){

    document.getElementById("settingsModal").style.display="none";

}

// Save Username

function saveUsername(){

    const username =
    document.getElementById("username").value.trim();

    if(username===""){

        alert("Enter a username.");

        return;

    }

    localStorage.setItem("chatTBM_username",username);

    alert("✅ Username saved.");

}

// Theme Toggle

function toggleTheme(){

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){

        localStorage.setItem("chatTBM_theme","light");

    }else{

        localStorage.setItem("chatTBM_theme","dark");

    }

}

// Load Theme

window.onload=function(){

    const theme =
    localStorage.getItem("chatTBM_theme");

    if(theme==="light"){

        document.body.classList.add("light-theme");

    }

};

// Clear Saved Data

function clearAllData(){

    if(confirm("Delete all saved ChatTBM data?")){

        localStorage.clear();

        location.reload();

    }

}

// =====================================
// ChatTBM v2.0
// Script Part 3
// Sidebar • Chat History • New Chat
// =====================================

// Toggle Sidebar

function toggleSidebar(){

    document.getElementById("sidebar").classList.toggle("active");

}

// New Chat

function newChat(){

    if(confirm("Start a new chat?")){

        chatBox.innerHTML=`

        <p class="bot">

        👋 Welcome to ChatTBM!

        I can help you create captions, video scripts,
        Facebook posts, hashtags, adverts and viral content ideas.

        </p>

        `;

        saveChat();

    }

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

    localStorage.setItem(

        "chatTBM_chat",

        chatBox.innerHTML

    );

    let history = JSON.parse(

        localStorage.getItem("chatTBM_history")

    ) || [];

    history.unshift({

        title:"Chat " + new Date().toLocaleString(),

        content:chatBox.innerHTML

    });

    if(history.length>20){

        history.pop();

    }

    localStorage.setItem(

        "chatTBM_history",

        JSON.stringify(history)

    );

    loadHistory();

}

// Load Previous Chat

function loadChat(){

    const saved =

    localStorage.getItem("chatTBM_chat");

    if(saved){

        chatBox.innerHTML = saved;

    }

}

// Load Sidebar History

function loadHistory(){

    const historyList =

    document.getElementById("history-list");

    if(!historyList) return;

    historyList.innerHTML="";

    const history = JSON.parse(

        localStorage.getItem("chatTBM_history")

    ) || [];

    history.forEach(function(chat,index){

        const item =

        document.createElement("div");

        item.className="history-item";

        item.innerHTML=chat.title;

        item.onclick=function(){

            chatBox.innerHTML=chat.content;

            localStorage.setItem(

                "chatTBM_chat",

                chat.content

            );

        };

        historyList.appendChild(item);

    });

}

// Better Error Handling

window.addEventListener("error",function(){

    alert("⚠️ Something went wrong. Please refresh ChatTBM.");

});

// Load Everything

window.addEventListener("load",function(){

    loadChat();

    loadHistory();

});
