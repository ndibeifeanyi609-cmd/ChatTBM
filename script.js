function sendMessage() {

    let chatBox = document.getElementById("chat-box");

    let input = document.getElementById("user-input");

    let message = input.value.trim();


    if (message === "") {

        return;

    }


    // Show user's message

    chatBox.innerHTML += `
        <p class="user">
            ${message}
        </p>
    `;



    let reply = 
    "I can help you create captions, scripts, hashtags, adverts and viral content ideas 🚀";



    let lowerMessage = message.toLowerCase();



    if (lowerMessage.includes("caption")) {

        reply =
        "✍️ Caption idea: 'Your next viral moment starts with one creative idea. Keep creating and never stop 🚀'";

    }


    else if (lowerMessage.includes("video")) {

        reply =
        "🎬 Video idea: Start with a strong hook, tell a short story, add emotion or humor, then end with a call to action.";

    }


    else if (lowerMessage.includes("script")) {

        reply =
        "📝 Script formula: Hook → Problem → Solution → Action. This keeps your audience watching.";

    }


    else if (lowerMessage.includes("hashtag")) {

        reply =
        "#️⃣ Hashtag ideas: #ContentCreator #ViralIdeas #AICreator #SocialMediaTips";

    }

    else if (lowerMessage.includes("facebook")) {

        reply =
        "📘 Facebook post idea: Start with a powerful first line, tell a short story, add value, and end by asking your audience a question.";

    }


    else if (lowerMessage.includes("instagram")) {

        reply =
        "📸 Instagram caption idea: 'Creating, learning, and growing every day. Follow the journey 🚀'";

    }


    else if (lowerMessage.includes("advert")) {

        reply =
        "📢 Advert idea: Hook your audience, explain the benefit, show the solution, and add a clear call to action.";

    }


    else if (lowerMessage.includes("calendar")) {

        reply =
        "📅 Content calendar idea: Monday - Tips, Tuesday - Behind the scenes, Wednesday - Story, Thursday - Tutorial, Friday - Entertainment.";

    }



    // Show AI reply

    setTimeout(() => {

        chatBox.innerHTML += `
            <p class="bot">
                ${reply}
            </p>
        `;


        chatBox.scrollTop = chatBox.scrollHeight;


    }, 500);



    input.value = "";


}



// Quick button function

function quickMessage(text) {

    document.getElementById("user-input").value = text;

    sendMessage();

}

// ChatTBM Login & Signup System

function openLogin() {

    let email = prompt("Enter your email:");

    let password = prompt("Enter your password:");

    if (email && password) {

        alert("✅ Login successful! Welcome to ChatTBM.");

    } else {

        alert("Please enter email and password.");

    }

}



function openSignup() {

    let name = prompt("Create your username:");

    let email = prompt("Enter your email:");

    let password = prompt("Create a password:");

    if (name && email && password) {

        alert("🎉 Account created successfully! Welcome to ChatTBM, " + name);

    } else {

        alert("Please complete all fields.");

    }

}
