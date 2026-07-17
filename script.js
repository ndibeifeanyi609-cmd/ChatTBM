const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

const XAI_API_KEY = "xai-6ULliMBSY5hguQ5rqcQo1gGn6heaMC7XKNpvKp8gWvFWMdoXJRkESw5uJJsaWHkN82IroF0drTLQBY5N";

sendBtn.addEventListener("click", async () => {
  const message = userInput.value.trim();
  if (message === "") return;

  chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;
  userInput.value = "";

  const typingId = "typing-" + Date.now();
  chatBox.innerHTML += `<p id="${typingId}"><b>AI:</b> Thinking for content ideas...</p>`;
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
            content: "You are ChatTBM, a fun Nigerian AI content creator. Help with photorealistic photo prompts, viral captions, hashtags, Boogeyman stories, market memes. Be creative." 
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
    document.getElementById(typingId).innerHTML = "<b>AI:</b> Error connecting. Check internet or key.";
  }

  chatBox.scrollTop = chatBox.scrollHeight;
});
