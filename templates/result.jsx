<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Atharv Chatbot</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='styles-result.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="{{ url_for('static', filename='public/logo.png') }}">
    <meta name="description" content="Atharv: AI-powered farming assistant providing weather insights, crop disease detection, and agricultural advice.">
    <meta name="keywords" content="farming, agriculture, AI, weather, crop disease, farming assistant">

</head>
<body>
    <div class="container">
        <div class="weather-section">
            <h2><i class="fas fa-cloud-sun"></i> Weather in {{ location }}</h2>
            <p>{{ temperature_label }}: {{ temp }}°C</p>
            <p>{{ max_temp_label }}: {{ max_temp }}°C</p>
            <p>{{ min_temp_label }}: {{ min_temp }}°C</p>
            <p>{{ humidity_label }}: {{ humidity }}%</p>
            <p>{{ weather_desc_label }}: {{ weather }}</p>
        </div>

        <div class="analysis-section">
            <div class="tab" id="text-tab">
                <h2><i class="fas fa-comment-alt"></i> Text Query</h2>
                <div class="chat-box" id="chat-box">
                    <!-- Chat messages will be appended here -->
                </div>
                <form id="text-form">
                    <input type="text" name="text_query" placeholder="Enter your query">
                    <input type="hidden" name="language" value="{{ language }}">
                    <button type="submit">Analyze Text</button>
                    <img id="loading-spinner-text" src="{{ url_for('static', filename='loading.gif') }}" alt="Loading..." style="display:none;">
                </form>
            </div>

            <div class="tab" id="image-tab">
                <h2><i class="fas fa-camera"></i> Image Query</h2>
                <form id="image-form" enctype="multipart/form-data">
                    <input type="file" name="image_file" accept="image/*">
                    <input type="hidden" name="language" value="{{ language }}">
                    <button type="submit">Analyze Image</button>
                    <img id="loading-spinner-image" src="{{ url_for('static', filename='loading.gif') }}" alt="Loading..." style="display:none;">
                </form>
                <div id="image-response" class="response-box"></div> <!-- Added class for styling -->
            </div>
        </div>
    </div>

    <div class="bottom-menu">
        <div class="menu-item" id="weather-menu">
            <i class="fas fa-cloud-sun"></i>
        </div>
        <div class="menu-item" id="text-menu">
            <i class="fas fa-comment-alt"></i>
        </div>
        <div class="menu-item" id="image-menu">
            <i class="fas fa-camera"></i>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="{{ url_for('static', filename='script-result.js') }}"></script>
</body>
</html>
