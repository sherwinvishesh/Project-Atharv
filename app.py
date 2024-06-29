# Praise the Lord 
from flask import Flask, request, render_template, jsonify, redirect, url_for, session
import requests
import pathlib
from googletrans import Translator
import google.generativeai as genai
from werkzeug.utils import secure_filename
from PIL import Image
from dotenv import load_dotenv
import os
from markdown2 import markdown

load_dotenv()  # Load environment variables

app = Flask(__name__, static_folder='static')

api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)
uploads_dir = os.path.join(app.root_path, 'uploads')
os.makedirs(uploads_dir, exist_ok=True)
# Available Indian languages
LANGUAGES = {
    'en': 'English',
    'hi': 'Hindi',
    'kn': 'Kannada',
    'bn': 'Bengali',
    'te': 'Telugu',
    'mr': 'Marathi',
    'ta': 'Tamil',
    'gu': 'Gujarati',
    'ml': 'Malayalam',
    'pa': 'Punjabi',
    'or': 'Odia'
}

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

generation_config = {
    "temperature": 0.1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-pro",
    generation_config=generation_config,
    system_instruction="You are a farming chatbot, you answer everything that is asked in relation to farming and more and answer the questions in depth and answer them in Markdown Format ",
)

chat_session = model.start_chat()


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        location = request.form['location']
        language = request.form['language']
        return redirect(url_for('weather', location=location, language=language))
    if request.method == 'POST':
        language = request.form['language']
        return redirect(url_for('analyze_text', language=language))
    if request.method == 'POST':
        language = request.form['language']
        return redirect(url_for('analyze_image', language=language))
    return render_template('index.html', languages=LANGUAGES)

@app.route('/weather')
def weather():
    location = request.args.get('location')
    language = request.args.get('language')
    api_key = os.getenv('WEATHER_API_KEY')
    response = requests.get(f"https://api.openweathermap.org/data/2.5/weather?q={location}&appid={api_key}&units=metric")
    data = response.json()

    if data['cod'] == 200:
        translator = Translator()
        weather_description = translator.translate(data['weather'][0]['description'], dest=language).text
        max_temp = data['main']['temp_max']
        min_temp = data['main']['temp_min']
        humidity = data['main']['humidity']
        
        # Translate static text
        temperature_label = translator.translate("Temperature", dest=language).text
        max_temp_label = translator.translate("Max Temperature", dest=language).text
        min_temp_label = translator.translate("Min Temperature", dest=language).text
        humidity_label = translator.translate("Humidity", dest=language).text
        
        weather_desc_label = translator.translate("Weather Description", dest=language).text

        return render_template('result.html', weather=weather_description, temp=data['main']['temp'], location=location, 
                               language=LANGUAGES[language], max_temp=max_temp, min_temp=min_temp, humidity=humidity,
                               temperature_label=temperature_label, max_temp_label=max_temp_label, min_temp_label=min_temp_label,
                               humidity_label=humidity_label, weather_desc_label=weather_desc_label)
    else:
        return f"Error getting weather data: {data['message']}"


@app.route('/analyze_text', methods=['POST'])
def analyze_text():
    user_input = request.form.get('text_query', 'No input provided')  # Default message if nothing is provided
    try:
        response = chat_session.send_message(user_input)
        html_response = markdown(response.text)  # Convert markdown to HTML
        return html_response  # Send HTML response directly
    except Exception as e:
        print(e)  # Log the error for debugging
        return "Error processing your request: " + str(e), 500

@app.route('/analyze_image', methods=['POST'])
def analyze_image():
    if 'image_file' not in request.files:
        return jsonify("No file part"), 400
    image_file = request.files['image_file']
    if image_file.filename == '':
        return jsonify("No selected file"), 400
    if image_file and allowed_file(image_file.filename):
        filename = secure_filename(image_file.filename)
        image_path = os.path.join(uploads_dir, filename)  # Use the uploads directory path
        try:
            image_file.save(image_path)
            with Image.open(image_path) as img:
                response = genai.GenerativeModel('gemini-pro-vision').generate_content(
                    ["Describe this agricultural issue in detail and provide solutions.", img],
                    safety_settings={})
                html_response = markdown(response.text)  # Convert markdown to HTML
                return html_response  # Send HTML response directly
        except Exception as e:
            print(f"Failed to save or analyze the image: {e}")
            return jsonify(f"Error processing the image: {e}"), 500
    return jsonify("File type not allowed"), 400

if __name__ == '__main__':
    app.run(debug=True)
