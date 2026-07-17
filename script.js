const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message === "") return;

  chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;
  userInput.value = "";

  // Mock AI reply for now
  setTimeout(() => {
    let reply = "Great prompt! Here's a viral one for Boogeyman: Photorealistic image of a tall man in white flowing gown standing on Abuja rooftop at night, holographic HUD on arm, dramatic blue lighting, cinematic, rescuing crying child from armed men, intense action scene, Nigerian city background, ultra realistic, 8k.";

    if (message.toLowerCase().includes("caption")) {
      reply = "Caption: 'When the Boogeyman comes to town... even the shadows run! 😂 Who else dey fear this one? #BoogeymanAbuja #Viral'";
    }

    chatBox.innerHTML += `<p><b>AI:</b> ${reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);
});
