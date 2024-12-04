$(document).ready(function() {
    $('#text-form').submit(function(event) {
        event.preventDefault();
        var userInput = $('input[name="text_query"]').val();
        appendUserMessage(userInput);
        $('#text-form button').hide(); // Hide the button
        $('#loading-spinner-text').show(); // Show the loading spinner

        $.ajax({
            url: '/analyze_text',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                appendBotMessage(response); // Update with chatbot response
            },
            error: function(xhr) {
                appendBotMessage("Failed to retrieve the response: " + xhr.responseText);
            },
            complete: function() {
                $('#loading-spinner-text').hide(); // Hide the loading spinner
                $('#text-form button').show(); // Show the button again
            }
        });
        $('input[name="text_query"]').val(''); // Clear the input field
    });

    $('#image-form').submit(function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        $('#image-form button').hide(); // Hide the button
        $('#loading-spinner-image').show(); // Show the loading spinner

        $.ajax({
            url: '/analyze_image',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                $('#image-response').html('<div class="response-box">' + response + '</div>'); // Update image response
            },
            error: function(xhr) {
                $('#image-response').html('<div class="response-box">Failed to retrieve the response: ' + xhr.responseText + '</div>');
            },
            complete: function() {
                $('#loading-spinner-image').hide(); // Hide the loading spinner
                $('#image-form button').show(); // Show the button again
            }
        });
    });

    $('#weather-menu').click(function() {
        $('.tab').removeClass('active');
        $('.weather-section').show();
        $('#text-tab').hide();
        $('#image-tab').hide();
    });

    $('#text-menu').click(function() {
        $('.tab').removeClass('active');
        $('#text-tab').addClass('active').show();
        $('.weather-section').hide();
        $('#image-tab').hide();
    });

    $('#image-menu').click(function() {
        $('.tab').removeClass('active');
        $('#image-tab').addClass('active').show();
        $('.weather-section').hide();
        $('#text-tab').hide();
    });

    $('.menu-item').click(function() {
        $('.menu-item').removeClass('active'); // Remove active class from all menu items
        $(this).addClass('active'); // Add active class to the clicked menu item
        // Existing functionality to show/hide tabs
        if ($(this).is('#weather-menu')) {
            $('.tab').removeClass('active');
            $('.weather-section').show();
            $('#text-tab').hide();
            $('#image-tab').hide();
        } else if ($(this).is('#text-menu')) {
            $('.tab').removeClass('active');
            $('#text-tab').addClass('active').show();
            $('.weather-section').hide();
            $('#image-tab').hide();
        } else if ($(this).is('#image-menu')) {
            $('.tab').removeClass('active');
            $('#image-tab').addClass('active').show();
            $('.weather-section').hide();
            $('#text-tab').hide();
        }
    });

    // Initialize with the weather tab visible
    $('#weather-menu').click();
});

function appendUserMessage(message) {
    var userMessage = `<div class="chat-message user-message"><div class="message">${message}</div></div>`;
    $('#chat-box').append(userMessage);
    scrollChatToBottom();
}

function appendBotMessage(message) {
    var botMessage = `<div class="chat-message bot-message"><div class="message">${message}</div></div>`;
    $('#chat-box').append(botMessage);
    scrollChatToBottom();
}

function scrollChatToBottom() {
    var chatBox = $('#chat-box');
    chatBox.scrollTop(chatBox[0].scrollHeight);
}



