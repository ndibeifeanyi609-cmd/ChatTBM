const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", () => {
    const message = userInput.value;

    if (message.trim() === "") return;

    chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;

    userInput.value = "";
});