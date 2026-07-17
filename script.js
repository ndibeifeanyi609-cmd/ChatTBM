const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message === "") return;

  chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;
  userInput.value = "";

  const typingId = "typing-" + Date.now();
  chatBox.innerHTML += `<p id="${typingId}"><b>AI:</b> Thinking...</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    document.getElementById(typingId).remove();

    let reply = "I'm ChatTBM. How can I assist with content, daily problems, or business ideas today?";

    const lower = message.toLowerCase();
    if (lower.includes("prompt") || lower.includes("photo") || lower.includes("image")) {
      reply = "Photorealistic prompt: Tall man in white gown on Abuja rooftop at night, holographic HUD, dramatic rescue scene, cinematic lighting, ultra realistic, 8k.";
    } else if (lower.includes("caption") || lower.includes("post")) {
      reply = "Viral caption: 'When the unexpected happens in Abuja... 😂 Who can relate? #ChatTBM #ViralNaija'";
    } else if (lower.includes("video") || lower.includes("reel")) {
      reply = "Video idea: Short reel of Boogeyman style action in market, text overlay 'Naija Hero Mode Activated', trending sound, call to action.";
    } else {
      reply = "For daily problems: Let's break it down. What specifically do you need help with?";
    }

    chatBox.innerHTML += `<p><b>AI:</b> ${reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);
});
