const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

const GROQ_API_KEY = "your-groq-api-key-here"; // ← Change this

sendBtn.addEventListener("click", async () => {
  const message = userInput.value.trim();
  if (message === "") return;

  chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;
  userInput.value = "";

  const typingId = "typing-" + Date.now();
  chatBox.innerHTML += `<p id="${typingId}"><b>AI:</b> Thinking for content ideas...</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { 
            role: "system", 
            content: "You are ChatTBM, a fun, creative Nigerian AI for social media content. Specialize in photorealistic photo prompts (Boogeyman, action, market scenes), viral Facebook captions with emojis and hashtags, viral hooks, content ideas. Use Pidgin when natural. Be creative and viral-focused." 
          },
          { role: "user", content: message }
        ],
        temperature: 0.85,
        max_tokens: 900
      })
    });

    const data = await response.json();
    const aiReply = data.choices[0].message.content;

    document.getElementById(typingId).remove();
    chatBox.innerHTML += `<p><b>AI:</b> ${aiReply}</p>`;
  } catch (error) {
    document.getElementById(typingId).innerHTML = "<b>AI:</b> Error - check API key or internet.";
  }

  chatBox.scrollTop = chatBox.scrollHeight;
});
