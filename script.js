// =====================================
// ChatTBM v2.1
// Script Part 1
// Core Chat System Upgrade
// =====================================


// Elements

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const loading = document.getElementById("loading");


// Enter key to send message

if(input){

    input.addEventListener("keypress", function(event){

        if(event.key === "Enter"){

            sendMessage();

        }

    });

}


// Send Message

function sendMessage(){

    let message = input.value.trim();


    if(message === ""){

        alert("Please enter a message.");

        return;

    }


    addUserMessage(message);


    input.value = "";


    if(loading){

        loading.style.display = "block";

    }


    setTimeout(function(){


        if(loading){

            loading.style.display = "none";

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



// Add AI Message

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



// Quick Buttons

function quickMessage(text){

    input.value = text;

    sendMessage();

}



// Auto Scroll

function scrollBottom(){

    chatBox.scrollTop = chatBox.scrollHeight;

}



// Protect User Input

function escapeText(text){

    return text
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;");

}



// ChatTBM AI Reply System

function getReply(message){

    message = message.toLowerCase();



    if(message.includes("caption")){

        return "✍️ Caption idea:\nYour next viral post starts with one creative idea. Keep creating 🚀";

    }



    if(message.includes("video")){

        return "🎬 Video idea:\nHook → Story → Value → Call To Action.";

    }



    if(message.includes("script")){

        return "📝 Script formula:\nHook → Problem → Solution → CTA.";

    }



    if(message.includes("facebook")){

        return "📘 Facebook Tip:\nTell a story, give value, and end with a question.";

    }



    if(message.includes("instagram")){

        return "📸 Instagram Tip:\nUse strong hooks, short captions, and consistent posting.";

    }



    if(message.includes("advert")){

        return "📢 Advert Formula:\nAttention → Interest → Desire → Action.";

    }



    if(message.includes("hashtag")){

        return "#️⃣ #ChatTBM #AI #ContentCreator #ViralContent";

    }



    if(message.includes("hello") || message.includes("hi")){

        return "👋 Hello! Welcome back to ChatTBM.";

    }



    return "🤖 I can help you create captions, scripts, adverts, hashtags and viral content ideas.";

}

// =====================================
// ChatTBM v2.1
// Script Part 2
// Login • Signup • Settings Upgrade
// =====================================



// ---------- LOGIN ----------


function openLogin(){

    document.getElementById("loginModal").style.display="flex";

}



function closeLogin(){

    document.getElementById("loginModal").style.display="none";

}



function loginUser(){


    const email =
    document.getElementById("loginEmail").value.trim();


    const password =
    document.getElementById("loginPassword").value.trim();



    if(email === "" || password === ""){


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



    alert(
        "✅ Login Successful!\n\nWelcome back to ChatTBM."
    );



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





    if(name === "" || email === "" || password === ""){


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




    alert(
        "🎉 Account created successfully!\n\nWelcome " 
        + name + "!"
    );



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




    if(username === ""){


        alert("Enter a username.");

        return;

    }




    localStorage.setItem(
        "chatTBM_username",
        username
    );



    alert("✅ Username saved.");



}





// Theme Toggle



function toggleTheme(){



    document.body.classList.toggle("light-theme");



    if(document.body.classList.contains("light-theme")){


        localStorage.setItem(
            "chatTBM_theme",
            "light"
        );


    }else{


        localStorage.setItem(
            "chatTBM_theme",
            "dark"
        );


    }


}





// Load Theme



function loadTheme(){



    const theme =
    localStorage.getItem("chatTBM_theme");



    if(theme === "light"){

        document.body.classList.add("light-theme");

    }


}





// Clear Data



function clearAllData(){



    if(confirm("Delete all saved ChatTBM data?")){


        localStorage.clear();


        location.reload();


    }


}





// Show Saved User



function loadUser(){



    const username =
    localStorage.getItem("chatTBM_username");



    if(username){


        console.log(
            "Welcome " + username
        );


    }


}





// Load Settings When Page Opens


window.addEventListener("load",function(){


    loadTheme();


    loadUser();


});

// =====================================
// ChatTBM v2.1
// Script Part 3
// Sidebar • Chat History • New Chat Upgrade
// =====================================



// ---------- SIDEBAR ----------


function toggleSidebar(){


    const sidebar =
    document.getElementById("sidebar");



    if(sidebar){

        sidebar.classList.toggle("active");

    }


}





// ---------- NEW CHAT ----------



function newChat(){



    if(confirm("Start a new chat?")){


        chatBox.innerHTML = `


        <div class="bot-message">


            <div class="bot-info">


                <span class="bot-name">
                🤖 ChatTBM
                </span>


            </div>



            <p class="bot">

            👋 Welcome back to ChatTBM!

            I can help you create captions,
            video scripts, Facebook posts,
            hashtags, adverts and viral ideas.

            </p>



        </div>


        `;



        saveChat();


    }


}






// ---------- CLEAR CHAT ----------



function clearChat(){



    if(confirm("Clear this conversation?")){


        chatBox.innerHTML="";


        localStorage.removeItem(
            "chatTBM_chat"
        );



        loadHistory();



    }


}






// ---------- SAVE CHAT ----------



function saveChat(){



    localStorage.setItem(

        "chatTBM_chat",

        chatBox.innerHTML

    );




    let history = JSON.parse(

        localStorage.getItem(
            "chatTBM_history"
        )

    ) || [];





    history.unshift({


        title:
        "Chat " + new Date().toLocaleString(),



        content:
        chatBox.innerHTML



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






// ---------- LOAD CURRENT CHAT ----------



function loadChat(){



    const saved =

    localStorage.getItem(
        "chatTBM_chat"
    );



    if(saved){


        chatBox.innerHTML = saved;


    }


}






// ---------- LOAD CHAT HISTORY ----------



function loadHistory(){



    const historyList =

    document.getElementById(
        "history-list"
    );



    if(!historyList) return;





    historyList.innerHTML="";





    const history = JSON.parse(

        localStorage.getItem(
            "chatTBM_history"
        )

    ) || [];






    history.forEach(function(chat,index){



        const item =
        document.createElement("div");



        item.className =
        "history-item";



        item.innerHTML =
        "💬 " + chat.title;





        item.onclick=function(){



            chatBox.innerHTML =
            chat.content;



            localStorage.setItem(

                "chatTBM_chat",

                chat.content

            );



            scrollBottom();



        };





        historyList.appendChild(item);



    });



}







// ---------- ERROR HANDLING ----------



window.addEventListener(
"error",
function(){


    console.log(
        "ChatTBM detected an error."
    );


});







// ---------- LOAD EVERYTHING ----------



window.addEventListener(
"load",
function(){


    loadChat();


    loadHistory();


});

// =====================================
// ChatTBM v2.1
// Script Part 4
// Profile • Logout • API Ready
// =====================================



// ---------- USER PROFILE ----------


function showProfile(){


    const username =
    localStorage.getItem("chatTBM_username")
    || "Guest";



    alert(
        "👤 ChatTBM Profile\n\nUsername: "
        + username
    );


}






// ---------- LOGOUT ----------



function logoutUser(){



    if(confirm("Logout from ChatTBM?")){


        localStorage.removeItem(
            "chatTBM_logged_in"
        );


        localStorage.removeItem(
            "chatTBM_last_email"
        );



        alert(
            "✅ You have logged out."
        );



    }


}






// ---------- API READY FUNCTION ----------
// Add your Grok/xAI API later here
// Do NOT paste your private key in public files



async function askAI(message){



    console.log(
        "AI Request:",
        message
    );



    // Future API connection area


    return "ChatTBM AI is preparing your answer...";


}






// ---------- UPDATE WELCOME MESSAGE ----------



function updateWelcome(){



    const username =

    localStorage.getItem(
        "chatTBM_username"
    );



    const welcome =

    document.getElementById(
        "welcome-user"
    );



    if(welcome && username){


        welcome.innerHTML =
        "Welcome back, " + username + " 👋";


    }


}







// ---------- SAVE LAST ACTIVE TIME ----------



function saveActivity(){



    localStorage.setItem(

        "chatTBM_last_active",

        new Date().toLocaleString()

    );


}






// ---------- STARTUP ----------



window.addEventListener(
"load",
function(){


    updateWelcome();


    saveActivity();


});

// =====================================
// ChatTBM v2.1
// Script Part 5
// Extra Features Upgrade
// =====================================



// ---------- TYPING STATUS ----------


function showTyping(){


    if(loading){

        loading.style.display="block";

    }


}



function hideTyping(){


    if(loading){

        loading.style.display="none";

    }


}







// ---------- DOWNLOAD CHAT ----------



function downloadChat(){


    const chat = chatBox.innerText;



    const file = new Blob(

        [chat],

        {
            type:"text/plain"
        }

    );



    const link =
    document.createElement("a");



    link.href =
    URL.createObjectURL(file);



    link.download =
    "ChatTBM-Conversation.txt";



    link.click();



}







// ---------- SHARE CHAT ----------



function shareChat(){



    const text =
    chatBox.innerText;



    if(navigator.share){


        navigator.share({

            title:"ChatTBM Conversation",

            text:text

        });


    }else{


        navigator.clipboard.writeText(text);


        alert(
            "Chat copied. You can share it now."
        );


    }


}







// ---------- VOICE INPUT READY ----------



function startVoice(){



    alert(
        "🎤 Voice input will be available after AI voice features are connected."
    );


}







// ---------- APP VERSION ----------



function showVersion(){


    alert(
        "ChatTBM v2.1\nYour AI Content Assistant"
    );


}

// =====================================
// ChatTBM v2.1
// Script Part 6
// Final Support Functions
// =====================================



// ---------- AUTO SAVE WHILE TYPING ----------


if(input){

    input.addEventListener("input",function(){

        localStorage.setItem(
            "chatTBM_draft",
            input.value
        );

    });

}






// ---------- RESTORE DRAFT MESSAGE ----------



function loadDraft(){


    const draft =

    localStorage.getItem(
        "chatTBM_draft"
    );



    if(draft && input){


        input.value = draft;


    }


}






// ---------- REMOVE DRAFT AFTER SEND ----------



function clearDraft(){


    localStorage.removeItem(
        "chatTBM_draft"
    );


}







// ---------- CHAT COUNT ----------



function updateChatCount(){


    const messages =

    chatBox.querySelectorAll(
        ".user,.bot-message"
    );



    const count =

    document.getElementById(
        "chat-count"
    );



    if(count){


        count.innerHTML =
        messages.length;


    }


}







// ---------- SAFE REFRESH ----------



function refreshChat(){


    saveChat();


    location.reload();


}







// ---------- APP START CHECK ----------



window.addEventListener(
"load",
function(){


    loadDraft();


    updateChatCount();


});



// =====================================
// End of ChatTBM v2.1 Script
// =====================================

// =====================================
// ChatTBM v2.1
// Script Part 7
// Final UX Improvements
// =====================================



// ---------- KEYBOARD SHORTCUTS ----------


document.addEventListener(
"keydown",
function(event){


    // Ctrl + Enter sends message

    if(event.ctrlKey && event.key==="Enter"){


        sendMessage();


    }



    // Escape clears input


    if(event.key==="Escape" && input){


        input.value="";


    }



});







// ---------- CURRENT TIME ----------



function getCurrentTime(){


    return new Date().toLocaleTimeString([],{

        hour:"2-digit",

        minute:"2-digit"

    });


}







// ---------- WELCOME MESSAGE ----------



function welcomeUser(){



    const name =

    localStorage.getItem(
        "chatTBM_username"
    )
    || "Creator";



    const welcome =

    document.getElementById(
        "welcome-message"
    );



    if(welcome){


        welcome.innerHTML =

        "👋 Welcome " + name +
        "! ChatTBM is ready to help you create content.";

    }


}







// ---------- CLEAR INPUT ----------



function clearInput(){


    if(input){


        input.value="";


    }


}







// ---------- ONLINE STATUS ----------



function updateOnlineStatus(){



    const status =

    document.getElementById(
        "status"
    );



    if(status){


        status.innerHTML =
        "🟢 ChatTBM Online";


    }


}







// ---------- START APP ----------



window.addEventListener(
"load",
function(){


    welcomeUser();


    updateOnlineStatus();


});



// =====================================
// End Script Part 7
// =====================================
