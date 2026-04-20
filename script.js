let input = document.getElementById("user-input");

// Send on Enter key
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    let message = input.value.trim();
    if (message === "") return;

    addMessage(message, "user");
    input.value = "";

    showTyping();

    setTimeout(() => {
        removeTyping();
        let reply = getBotReply(message);
        addMessage(reply, "bot");
    }, 1000);
}

function addMessage(text, sender) {
    let chatBox = document.getElementById("chat-box");

    let msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Typing animation
function showTyping() {
    let chatBox = document.getElementById("chat-box");

    let typingDiv = document.createElement("div");
    typingDiv.classList.add("message", "bot");
    typingDiv.id = "typing";

    typingDiv.innerHTML = `
        <div class="typing">
            <span></span><span></span><span></span>
        </div>
    `;

    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
    let typing = document.getElementById("typing");
    if (typing) typing.remove();
}

// Simple AI replies
function getBotReply(text) {
    text = text.toLowerCase();

    if (text.includes("hello") || text.includes("hi") || text.includes("hey"))
        return "Hey there! 👋";
    
    if (text.includes("fuck"))
        return "Fuck you son of bitch 🤬";

    if (text.includes("how are you"))
        return "I'm just code, but I'm doing great 😄";
    
    if (text.includes("my name is"))
        return "Pleasure meeting to you 👍";

    if (text.includes("name"))
        return "I'm your AI assistant 🤖";

    if (text.includes("bye"))
        return "Goodbye! 👋";

    return "Hmm... interesting 🤔";
}
