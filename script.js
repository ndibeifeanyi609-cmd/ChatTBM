const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

const XAI_API_KEY = "xai-5z7YeIKaNBJxZfFIyv1M5mBXOtyXmG0NbCZXqywnzgsLI2tkVOdK0s6VT2obwVt1S7EHdN9RDQPKt5AA

sendBtn.addEventListener("click", async () => {
  const message = userInput.value.trim();
  if (message === "") return;

  chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;
  userInput.value = "";

  const typingId = "typing-" + Date.now();
  chatBox.innerHTML += `<p id="${typingId}"><b>AI:</b> Thinking...</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${XAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "grok-beta",
        messages: [
          { 
            role: "system", 
            content: "You are ChatTBM, a helpful AI assistant for content creation, photo prompts, video ideas, captions, and solving daily/business problems. Be creative, practical, and professional." 
          },
          { role: "user", content: message }
        ],
        temperature: 0.8,
        max_tokens: 800
      })
    });

    const data = await response.json();
    const aiReply = data.choices[0].message.content;

    document.getElementById(typingId).remove();
    chatBox.innerHTML += `<p><b>AI:</b> ${aiReply}</p>`;
  } catch (error) {
    document.getElementById(typingId).innerHTML = "<b>AI:</b> Error connecting. Check key or try again.";
  }

  chatBox.scrollTop = chatBox.scrollHeight;
});
