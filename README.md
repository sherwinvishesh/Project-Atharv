
# Atharv (Lite): AI-Powered Farming Assistant using Gemini-1.5


> **Warning** : This is uploaded to GitHub without many of its planned features and **is not the same as the Project-Atharv that was available till August**. Current functionalities are limited and may lack certain capabilities. Use with caution.

## Overview

Atharv is a AI chatbot designed to empower farmers with actionable insights and comprehensive agricultural support. Utilizing advanced machine learning algorithms, Atharv delivers real-time weather updates, disease prediction, and personalized farming recommendations in the local language. This smart assistant analyzes vast amounts of data to provide farmers with forecasts, detect potential crop diseases early, and offer tailored solutions to enhance crop yield and farm efficiency. Atharv is more than just a tool; it's a farming partner that helps in making informed decisions, ensuring sustainability and maximizing productivity. Join the revolution in agriculture with Atharv, where technology meets tradition to foster a prosperous future for farming.

## Features

- **Weather Insights**:  Atharv's weather insights provide comprehensive and real-time weather information, helping farmers plan their agricultural activities with precision. By analyzing weather patterns and forecasts, Atharv enables farmers to make informed decisions about planting, irrigation, and harvesting times, minimizing risks and improving crop yield. This feature ensures that farmers are always one step ahead of the weather, safeguarding their crops and enhancing farm productivity.
  
- **Image-Based Chatbot**: Atharv’s image-based chatbot revolutionizes the way farmers tackle crop diseases and soil health issues. By uploading images of affected crops, farmers receive in-depth analysis and solutions for the identified problems. This advanced diagnostic tool not only detects diseases but also offers insights into soil conditions, suggesting corrective measures and preventive strategies. This feature is instrumental in maintaining crop health and ensuring high yields, making it an essential tool for modern agriculture.
  
- **Text-Based Chatbot**: With Atharv's text-based chatbot, farmers have a reliable source of information at their fingertips. They can ask any agriculture-related questions and receive detailed insights and advice. Whether it's queries about crop rotation, fertilization techniques, or pest management, Atharv provides expert guidance based on the latest agricultural research and practices. This feature empowers farmers with knowledge, helping them optimize their operations and achieve better outcomes.
  

## Technologies Used for Atharv Lite

- Flask
- Google Generative AI
- Weather API
- Google Translate
- Pillow (PIL)

## Installation

To run Project Atharv Lite on your local machine, you need Python 3.6+ installed. Follow these steps:

1. Clone this repository to your local machine.
    ```bash
    git clone https://github.com/sherwinvishesh/Project-Atharv-Lite
    ```
2. Navigate to the project directory.
    ```bash
    cd Project-Atharv-Lite/code
    ```
3. Install the required Python packages.
    ```bash
    pip3 install -r requirements.txt

    ```
    `If you are getting any errors while installing the above`
    Then you have to create a virtual environment and run this program, here are the steps:
    Create a Virtual Environment:
    ```bash
    python3 -m venv path/to/venv
    ```
    Activate the Virtual Environment:
    mac or linux 
    ```bash
    source path/to/venv/bin/activate
    ```
    For Windows:
    ```bash
    path\to\venv\Scripts\activate
    ```

    Also if you are facing type issues in index and results file then do 
    ```bash
    sh run.txt
    ```

4. Set Up Environment Variables
   Create a `.env` file in the root directory and add your API keys and other sensitive data:
   ```plaintext
   WEATHER_API_KEY='your_weather_api_key_here'
   GEMINI_API_KEY='your_gemini_api_key_here'
  
   ```


## Usage

1. Run the Flask application:
   ```
   python app.py
   ```
2. Open a web browser and navigate to `http://localhost:5000`.
3. Select your language and enter your pin code.
4. Use the weather insights, text-based chatbot, or image-based chatbot as needed.

## Demo



https://github.com/user-attachments/assets/81d86b2e-13ef-4114-a715-c8cfbf257125



## Future Updates

- Improving translation accuracy for non-English languages.
- Enhancing the image analysis capabilities.
- Expanding the knowledge base for more diverse agricultural advice.

## Contributing

Contributions to enhance this project are welcomed. Please feel free to fork the repository, make changes, and submit pull requests.

## Support 
If you encounter any issues or have any questions, please submit an issue on the GitHub issue tracker or feel free to contact me.

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.



## Acknowledgements

- Thanks to everyone who visits and uses this page. Your interest and feedback are what keep us motivated.
- Special thanks to all the contributors who help maintain and improve this project. Your dedication and hard work are greatly appreciated.

## Connect with Me

Feel free to reach out and connect with me on [LinkedIn](https://www.linkedin.com/in/sherwinvishesh) or [Instagram](https://www.instagram.com/sherwinvishesh/).


---

Made with ❤️ by Sherwin
