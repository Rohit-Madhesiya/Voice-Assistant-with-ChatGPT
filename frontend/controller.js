document.addEventListener("DOMContentLoaded", function() {
    const messageElement = document.querySelector('.siri-message');

    function animateMessage() {
        messageElement.classList.remove('hidden');
        messageElement.classList.add('animate__animated', 'animate__fadeInUp');
        console.log("Animate Message...")
        messageElement.addEventListener('animationend', function() {
            messageElement.classList.remove('animate__fadeInUp');
            messageElement.classList.add('animate__fadeOutUp');
            setInterval(8000);
            messageElement.addEventListener('animationend', function() {
                messageElement.classList.remove('animate__fadeOutUp');
                messageElement.classList.add('hidden');
            }, { once: true });
        }, { once: true });
    }
    animateMessage();
    setInterval(animateMessage, 6000);
});


$(document).ready(function() {


    // Display Speak Message
    eel.expose(DisplayMessage);

    function DisplayMessage(message) {

        $('.siri-message').text(message);
        // $('.siri-message').textillate('start');
    }

    // Display hood
    eel.expose(ShowHood);

    function ShowHood() {
        $("#Oval").attr("hidden", false);
        $("#SiriWave").attr("hidden", true);
    }

    eel.expose(senderText)

    function senderText(message) {
        var chatBox = document.getElementById("chat-canvas-body");
        if (message.trim() !== "") {
            chatBox.innerHTML += `<div class="row justify-content-end mb-4">
          <div class = "width-size">
          <div class="sender_message">${message}</div>
      </div>`;

            // Scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

    eel.expose(receiverText)

    function receiverText(message) {

        var chatBox = document.getElementById("chat-canvas-body");
        if (message.trim() !== "") {
            chatBox.innerHTML += `<div class="row justify-content-start mb-4">
          <div class = "width-size">
          <div class="receiver_message">${message}</div>
          </div>
      </div>`;

            // Scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;
        }

    }


});