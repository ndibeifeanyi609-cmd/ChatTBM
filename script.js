const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message === "") return;

  chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;
  userInput.value = "";

  const typingId = "typing-" + Date.now();
  chatBox.innerHTML += `<p id="${typingId}"><b>AI:</b> Generating advanced prompt...</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    document.getElementById(typingId).remove();

    let reply = "I'm ChatTBM. How can I help with content, daily problems, photo/video prompts, or business ideas?";

    const lower = message.toLowerCase();

    if (lower.includes("photo") || lower.includes("image") || lower.includes("prompt")) {
      reply = `Advanced photorealistic prompt (copy and use in Grok Imagine or Midjourney):<br><br>
      "Photorealistic, ultra-detailed, cinematic image of a tall, confident Black man in flowing white gown standing on Abuja rooftop at night, dramatic blue lighting, holographic HUD on arm, intense rescue scene with crying child, realistic textures, sharp details, volumetric fog, 8k, masterpiece, best quality"`;
    } 
    else if (lower.includes("video") || lower.includes("reel")) {
      reply = `Video idea for reel: Short cinematic video of Boogeyman action in Abuja market, dramatic slow motion, text overlay, trending sound, high engagement potential.`;
    } 
    else if (lower.includes("caption")) {
      reply = `Viral caption: "The protector arrives when you least expect it... 💪😂 Who needs this energy in their life? #ChatTBM #BoogeymanNaija"`;
    } 
    else {
      reply = `General help: Let's solve your request step by step. Tell me more details.`;
    }

    chatBox.innerHTML += `<p><b>You:</b> Uploaded photo for analysis</p>`;
    chatBox.innerHTML += `<p><b>AI:</b> Analyzing photo... Describe what you want (prompt, caption, edit idea)? I can help generate advanced prompts based on it.</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
