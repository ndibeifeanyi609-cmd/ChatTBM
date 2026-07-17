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

    let reply = "I'm ChatTBM. How can I help with content, daily problems, photo/video prompts, or business ideas?";

    const lower = message.toLowerCase();

    if (lower.includes("photo") || lower.includes("image") || lower.includes("prompt")) {
      reply = `Photorealistic prompt for Grok Imagine or Midjourney:<br>
      "Photorealistic image of a confident Black man in white flowing gown standing on Abuja rooftop at night, holographic HUD on arm, dramatic blue lighting, cinematic, rescuing crying child from armed men, intense action scene, Nigerian city background, ultra realistic, 8k."`;
    } 
    else if (lower.includes("video") || lower.includes("reel") || lower.includes("short")) {
      reply = `Video/Reel idea:<br>
      "30-second cinematic reel: Boogeyman in white gown walking through Abuja market at night, dramatic lighting, text overlay 'The Shadow That Protects', trending Afrobeats sound, end with CTA: 'Need protection? DM me'. Perfect for viral reach."`;
    } 
    else if (lower.includes("caption") || lower.includes("post")) {
      reply = `Viral Facebook caption:<br>
      "When the unexpected happens in Abuja... the Boogeyman shows up 😂💪 Who else dey fear this one? #BoogeymanAbuja #ViralNaija #ChatTBM"`;
    } 
    else {
      reply = `For daily/business problems: Let's solve it step by step. What exactly do you need help with?`;
    }

    chatBox.innerHTML += `<p><b>AI:</b> ${reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 900);
});
