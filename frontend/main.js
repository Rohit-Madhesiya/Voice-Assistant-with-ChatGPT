document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.text');
    const messageElement = document.querySelector('.siri-message');

    function animateText() {
        textElement.classList.remove('hidden');
        textElement.classList.add('animate__animated', 'animate__bounceIn');
        console.log("Animate Text...")
        textElement.addEventListener('animationend', function() {
            textElement.classList.remove('animate__bounceIn');
            textElement.classList.add('animate__bounceOut');
            setInterval(20000);
            textElement.addEventListener('animationend', function() {
                textElement.classList.remove('animate__bounceOut');
                textElement.classList.add('hidden');
            }, { once: true });
        }, { once: true });
    }

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
    animateText();
    setInterval(animateText, 6000);
    animateMessage();
    setInterval(animateMessage, 20000);
});


$(document).ready(function() {

    // Siri configuration
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: "1",
        speed: "0.30",
        autostart: true
    });

    // Siri message animation
    // $('#siri-message').textillate({
    //     loop: true,
    //     sync: true,
    //     in: {
    //         effect: "fadeInUp",
    //         sync: true,
    //     },
    //     out: {
    //         effect: "fadeOutUp",
    //         sync: true,
    //     },

    // });

    // mic button click event
    $("#MicBtn").click(function() {
        eel.playAssistantSound();
        $("#Oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);
        eel.allCommands()()
    });

    function doc_keyUp(e) {
        // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
        if (e.key === 'j' && e.metaKey) {
            eel.playAssistantSound()
            $("#Oval").attr("hidden", true);
            $("#SiriWave").attr("hidden", false);
            eel.allCommands()()
        }
    }
    document.addEventListener('keyup', doc_keyUp, false);


    // to play assisatnt 
    function PlayAssistant(message) {

        if (message != "") {
            $("#Oval").attr("hidden", true);
            $("#SiriWave").attr("hidden", false);
            eel.allCommands(message);
            $("#chatbox").val("");
            $("#MicBtn").attr('hidden', false);
            $("#SendBtn").attr('hidden', true);

        }

    }

    // toogle fucntion to hide and display mic and send button 
    function ShowHideButton(message) {
        if (message.length == 0) {
            $("#MicBtn").attr('hidden', false);
            $("#SendBtn").attr('hidden', true);
        } else {
            $("#MicBtn").attr('hidden', true);
            $("#SendBtn").attr('hidden', false);
        }
    }

    // key up event handler on text box
    $("#chatbox").keyup(function() {

        let message = $("#chatbox").val();
        ShowHideButton(message)

    });

    // send button event handler
    $("#SendBtn").click(function() {

        let message = $("#chatbox").val()
        PlayAssistant(message)

    });


    // enter press event handler on chat box
    $("#chatbox").keypress(function(e) {
        key = e.which;
        if (key == 13) {
            let message = $("#chatbox").val()
            PlayAssistant(message)
        }
    });




});