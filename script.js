// ===============================
// ChatTBM - Enhanced Script
// Part 1
// ===============================

// Elements
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");

// Send with Enter key
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Main Send Function
function sendMessage() {

    let message = input.value.trim();

    if (message === "") {
        return;
    }

    // User Message
    chatBox.innerHTML += `
        <p class="user">
            ${message}
        </p>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    input.value = "";

    // Typing indicator
    const typing = document.createElement("p");
    typing.className = "bot typing";
    typing.id = "typing";
    typing.innerHTML = "🤖 ChatTBM is typing...";
    chatBox.appendChild(typing);

    chatBox.scrollTop = chatBox.scrollHeight;

    // AI Reply Delay
    setTimeout(() => {

        typing.remove();

        let reply =
        "I can help you create captions, scripts, hashtags, adverts and viral content ideas 🚀";

        const lowerMessage = message.toLowerCase();

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
            "#️⃣ Hashtag ideas: #ContentCreator #ViralIdeas #AICreator #SocialMediaTips #ChatTBM";

        }

        else if (lowerMessage.includes("facebook")) {

            reply =
            "📘 Facebook tip: Start with a powerful first line, tell a short story, provide value, then end with a question to increase engagement.";

        }

        else if (lowerMessage.includes("instagram")) {

            reply =
            "📸 Instagram caption: 'Creating, learning, and growing every day. The journey has just begun. 🚀'";

        }

        else if (lowerMessage.includes("advert")) {

            reply =
            "📢 Advert formula: Grab attention → Explain the benefit → Build trust → End with a strong call to action.";

        }

        else if (lowerMessage.includes("calendar")) {

            reply =
            "📅 Weekly Content Plan:\n\nMonday - Tips\nTuesday - Behind the Scenes\nWednesday - Story\nThursday - Tutorial\nFriday - Entertainment\nSaturday - Q&A\nSunday - Motivation";

        }

        else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {

            reply =
            "👋 Hello! Welcome to ChatTBM. I'm ready to help you create amazing content.";

        }

        else if (lowerMessage.includes("help")) {

            reply =
            "🤖 I can help with captions, video scripts, Facebook posts, Instagram captions, hashtags, adverts, and content calendars.";

        }

        else if (lowerMessage.includes("who are you")) {

            reply =
            "🤖 I'm ChatTBM, your AI Content Assistant built to help creators grow faster with better content.";

        }

        else if (lowerMessage.includes("thank")) {

            reply =
            "😊 You're welcome! I'm always here whenever you need help.";

        }

        // Show AI reply
        chatBox.innerHTML += `
            <p class="bot">
                ${reply}
            </p>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 1000);

}

// Quick Button Function
function quickMessage(text) {

    input.value = text;

    sendMessage();

}

// ===============================
// ChatTBM Login & Signup System
// Part 3
// ===============================

// Login
function openLogin() {

    let email = prompt("📧 Enter your email:");

    if (email === null) return;

    let password = prompt("🔒 Enter your password:");

    if (password === null) return;

    email = email.trim();
    password = password.trim();

    if (email === "" || password === "") {

        alert("❌ Please enter both your email and password.");
        return;

    }

    localStorage.setItem("chatTBM_last_email", email);

    alert("✅ Login successful!\n\nWelcome back to ChatTBM!");

}



// Sign Up
function openSignup() {

    let name = prompt("👤 Create your username:");

    if (name === null) return;

    let email = prompt("📧 Enter your email:");

    if (email === null) return;

    let password = prompt("🔒 Create a password:");

    if (password === null) return;

    name = name.trim();
    email = email.trim();
    password = password.trim();

    if (name === "" || email === "" || password === "") {

        alert("❌ Please complete all fields.");
        return;

    }

    // Save basic information locally
    localStorage.setItem("chatTBM_username", name);
    localStorage.setItem("chatTBM_last_email", email);

    alert(
        "🎉 Account created successfully!\n\n" +
        "Welcome to ChatTBM, " + name + " 🚀"
    );

}



// ===============================
// Future API Ready
// ===============================

// This function is reserved for connecting
// Grok, OpenAI, or another AI API later.

async function askAI(message) {

    // Future API integration goes here.

    return "API connection coming soon.";

}
