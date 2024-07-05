<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Atharv: The AI Assistant for Farming</title>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ url_for('static', filename='styles.css') }}">
	<link rel="icon" type="image/png" href="{{ url_for('static', filename='public/logo.png') }}">
    <meta name="description" content="Atharv: AI-powered farming assistant providing weather insights, crop disease detection, and agricultural advice.">
    <meta name="keywords" content="farming, agriculture, AI, weather, crop disease, farming assistant">

</head>
<body>
    <div class="content">
        <h1>Hello there <span class="typing-animation" id="hello-there"></span>,</h1>
        <h2>Welcome to Atharv, Your farming assistant</h2>

        <p>Atharv is a sophisticated AI chatbot designed to empower farmers with actionable insights and comprehensive agricultural support. Utilizing advanced machine learning algorithms, Atharv delivers real-time weather updates, disease prediction, and personalized farming recommendations. This smart assistant analyzes vast amounts of data to provide farmers with forecasts, detect potential crop diseases early, and offer tailored solutions to enhance crop yield and farm efficiency. Atharv is more than just a tool; it's a farming partner that helps in making informed decisions, ensuring sustainability and maximizing productivity. Join the revolution in agriculture with Atharv, where technology meets tradition to foster a prosperous future for farming.</p>

        <h2>Features of Atharv</h2>
<ul>
    <li><strong>Weather Insights:</strong> Atharv's weather insights provide comprehensive and real-time weather information, helping farmers plan their agricultural activities with precision. By analyzing weather patterns and forecasts, Atharv enables farmers to make informed decisions about planting, irrigation, and harvesting times, minimizing risks and improving crop yield. This feature ensures that farmers are always one step ahead of the weather, safeguarding their crops and enhancing farm productivity.</li>

    <li><strong>Text-Based Chatbot:</strong> With Atharv's text-based chatbot, farmers have a reliable source of information at their fingertips. They can ask any agriculture-related questions and receive detailed insights and advice. Whether it's queries about crop rotation, fertilization techniques, or pest management, Atharv provides expert guidance based on the latest agricultural research and practices. This feature empowers farmers with knowledge, helping them optimize their operations and achieve better outcomes.</li>

    <li><strong>Image-Based Chatbot:</strong> Atharv’s image-based chatbot revolutionizes the way farmers tackle crop diseases and soil health issues. By uploading images of affected crops, farmers receive in-depth analysis and solutions for the identified problems. This advanced diagnostic tool not only detects diseases but also offers insights into soil conditions, suggesting corrective measures and preventive strategies. This feature is instrumental in maintaining crop health and ensuring high yields, making it an essential tool for modern agriculture.</li>
</ul>

<h2>How to Use Atharv</h2>
<ol>
    <li><strong>Enter Your Pin Code and Language:</strong> Start by entering your local pin code and selecting your preferred language. This information helps Atharv to provide localized data and content in your language, enhancing the user experience and accuracy of the information provided.</li>

    <li><strong>Click "Start":</strong> Once your details are entered, click the "Start" button. You'll be directed to the results page where Atharv begins to assist you with its features.</li>

    <li><strong>Weather Page:</strong> The first page you encounter is the Weather Page. Here, you receive live weather updates and forecasts, crucial for planning your farming activities. This real-time information helps in making timely decisions to protect and optimize your crop production.</li>

    <li><strong>Access Text-Based Chatbot:</strong> Click the chat button to activate the text-based chatbot. In this section, you can type any agriculture-related query into the textbox and click 'Analyze Text'. Within seconds, the chatbot will respond with detailed answers, helping you solve specific farming issues.</li>

    <li><strong>Use Image-Based Chatbot:</strong> By selecting the camera icon, you enter the image-based chatbot interface. Here, attach an image of your crop that shows any signs of disease or distress, then click 'Analyze Image'. The chatbot quickly analyzes the image and provides detailed insights about the disease, along with recommendations for treatment and soil health improvement.</li>
</ol>

<h2>Technologies Used in Atharv</h2>
<p>Atharv incorporates a variety of cutting-edge technologies to provide accurate, timely, and actionable agricultural insights:</p>
<ul>
    <li><strong>Google Generative AI:</strong> At the core of Atharv's capabilities is Google's Generative AI technology, which powers both the text and image-based chatbots. This technology utilizes advanced machine learning models to generate responsive, context-aware interactions, enabling detailed agricultural advice and analysis.</li>

    <li><strong>Weather API Integration:</strong> Atharv uses real-time weather APIs to fetch and deliver current and forecasted weather conditions. This allows the system to provide farmers with timely updates that are critical for making informed decisions regarding crop management and farming practices.</li>

    <li><strong>Google Translate:</strong> To ensure accessibility across diverse linguistic backgrounds, Atharv integrates Google Translate. This service provides instant translation of the chatbot’s responses into several regional languages, making the tool useful for farmers across different regions.</li>

    <li><strong>Flask:</strong> Flask, a lightweight WSGI web application framework, is used to create and run the web interface of Atharv. It supports the setup of a user-friendly, scalable, and secure platform, facilitating seamless interactions between the users and the AI system.</li>

    <li><strong>Pillow (PIL):</strong> For handling image data within the image-based chatbot feature, Atharv utilizes Pillow, a powerful Python Imaging Library that supports opening, manipulating, and saving many different image file formats.</li>

    <li><strong>Environment Variables and Security:</strong> Atharv uses environment variables to manage API keys and other sensitive information securely, ensuring that user data and access credentials are protected.</li>
</ul>
<h2>User Interface</h2>
<p>Explore the user interface of Atharv through this detailed walkthrough video. Gain insights into how the platform functions and how you can maximize its features for your farming needs.</p>
<div class="video-container">
    <iframe width="1000" height="450" src="https://www.youtube.com/embed/jJL5GvtCNUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<h2>About the Developer</h2>
<div class="image-scroll-container">
    <div class="image-scroll">
		<img src="{{ url_for('static', filename='public/image1_display.jpeg') }}" alt="Image description 1">
      <img src="{{ url_for('static', filename='public/image2_display.jpeg') }}" alt="Image description 2">
		<img src="{{ url_for('static', filename='public/image3_display.jpeg') }}" alt="Image description 3">
		<img src="{{ url_for('static', filename='public/image4_display.jpeg') }}" alt="Image description 4">
		<img src="{{ url_for('static', filename='public/image5_display.jpeg') }}" alt="Image description 5">
		<!-- Repeating the images for smooth looping -->
		<img src="{{ url_for('static', filename='public/image1_display.jpeg') }}" alt="Image description 1">
      <img src="{{ url_for('static', filename='public/image2_display.jpeg') }}" alt="Image description 2">
		<img src="{{ url_for('static', filename='public/image3_display.jpeg') }}" alt="Image description 3">
		<img src="{{ url_for('static', filename='public/image4_display.jpeg') }}" alt="Image description 4">
		<img src="{{ url_for('static', filename='public/image5_display.jpeg') }}" alt="Image description 5">
		<!-- Repeating the images for smooth looping -->
		<img src="{{ url_for('static', filename='public/image1_display.jpeg') }}" alt="Image description 1">
      <img src="{{ url_for('static', filename='public/image2_display.jpeg') }}" alt="Image description 2">
		<img src="{{ url_for('static', filename='public/image3_display.jpeg') }}" alt="Image description 3">
		<img src="{{ url_for('static', filename='public/image4_display.jpeg') }}" alt="Image description 4">
		<img src="{{ url_for('static', filename='public/image5_display.jpeg') }}" alt="Image description 5">

    </div>
</div>
<p>Hi, I'm Sherwin Vishesh Jathanna, a computer science undergraduate at Arizona State University, and I've been passionate about programming since the second grade. My journey with coding began early, and it has always been driven by a desire to apply technology to solve real-world problems. My latest initiative, the Atharv project, reflects my commitment to using innovative solutions to support the agricultural sector in India.</p>

<p>I developed Atharv as a summer project to directly address the challenges faced by Indian farmers, such as unreliable weather forecasts and inaccurate disease diagnostics. The project uses advanced artificial intelligence to deliver precise, real-time insights essential for effective farm management. By incorporating sophisticated weather prediction models and disease detection capabilities, Atharv empowers farmers to make informed decisions that improve crop yield and ensure sustainable farming practices.</p>

<p>Recognizing the importance of firsthand experience, I have conducted extensive field surveys in Karnataka to gather authentic data and understand the farmers' needs. This grassroots approach has not only provided invaluable insights for enhancing Atharv but also opened avenues for potential collaborations with governmental bodies. Recently, I had the opportunity to discuss how Atharv could be integrated with local agricultural programs with the district commissioner of Bengaluru Urban, aiming to expand its impact to benefit a broader farming community.</p>

<p>Driven by a vision to transform Indian agriculture, I continue to refine Atharv, ensuring it adapts to the evolving challenges faced by farmers. My mission is to empower the agricultural community with advanced technology, enhancing their productivity and promoting sustainable practices. My journey with Atharv is more than just technological advancement; it's about making a meaningful difference in the lives of farmers and contributing positively to the economy.</p>


<h2>Future Updates</h2>
<p>At Atharv, we are committed to continuous improvement and are always looking for ways to enhance our services. One key area we are focusing on is the translation functionality within our text-based and image-based chatbots. We have identified issues with translation accuracy that can impact the user experience, especially for non-English speakers.</p>
<p>We are actively working to resolve these issues and will be implementing updates soon to improve the accuracy and reliability of translations across all supported languages. These enhancements will ensure that Atharv remains a versatile and user-friendly tool for farmers from diverse linguistic backgrounds, helping them to receive the most accurate and helpful information possible.</p>

<h2>License</h2>
<p>Atharv is open source and available under the Apache-2.0 license. This licensing ensures that Atharv can be freely used, modified, and distributed by anyone interested in advancing the technology or customizing it to meet specific needs.</p>
<p>By making Atharv open source, we aim to foster collaboration, innovation, and community-driven development in the agricultural technology space. We welcome contributions from developers, researchers, and enthusiasts who share our vision of empowering farmers with cutting-edge tools and insights.</p>

<h2>Contribution</h2>
<p>Thank you to everyone who visits and uses Atharv. Your interest and feedback are invaluable to us and keep our team motivated to continue enhancing this platform. Each interaction helps us to refine and improve Atharv to better serve the agricultural community.</p>
<p>Special thanks to the farmers for their enduring contributions to the economy and society. Your dedication to feeding nations and stewarding the land inspires every update and feature we develop. Atharv is proud to support your efforts with advanced technology tailored to meet your farming needs.</p>
<p>If you are interested in contributing to Atharv, whether through code, feedback, or ideas, please reach out to us. We welcome collaboration and look forward to working together to create a more sustainable and prosperous future for agriculture.</p>

<h2>Conclusion</h2>
        <p>With Atharv, farmers can make informed decisions that enhance productivity while promoting sustainable farming practices. Our goal is to empower farmers with the tools and knowledge they need to thrive in an ever-changing agricultural landscape.</p>




        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>


    </div>
    <!-- In the form section of index.html -->
<div class="form-container">
    <form method="post" id="start-form">
        <div class="form-group">
            <h3 class="form-text">Select Language <span class="typing-animation" id="select-language"></span>:</h3>
            <select id="language" name="language" required>
                {% for code, name in languages.items() %}
                <option value="{{ code }}">{{ name }}</option>
                {% endfor %}
            </select>
        </div>
        <div class="form-group">
            <h3 class="form-text">Enter Pin Code <span class="typing-animation" id="enter-pin-code"></span>:</h3>
            <input type="text" id="location" name="location" required>
        </div>
        <div class="button-container">
            <button type="submit" id="start-button">Start</button>
            <img id="loading-spinner-start" src="{{ url_for('static', filename='loading.gif') }}" alt="Loading..." style="display:none;">
        </div>
    </form>
</div>


        <script src="{{ url_for('static', filename='script.js') }}"></script>

</body>
</html>
