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

app = Flask(__name__)
api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)
uploads_dir = os.path.join(app.root_path, 'uploads')
os.makedirs(uploads_dir, exist_ok=True)
# Available Indian languages
LANGUAGES = {
    'en': 'English',
    'hi': 'Hindi',
    'bn': 'Bengali',
    'te': 'Telugu',
    'mr': 'Marathi',
    'ta': 'Tamil',
    'gu': 'Gujarati',
    'kn': 'Kannada',
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
    system_instruction="You are a farming chatbot, you answer everything that is asked in relation to farming and more and answer the questions in depth and answer them in plain text and in markdown format",
)

chat_session = model.start_chat(
  history=[
    {
      "role": "user",
      "parts": [
        "What are the types of soil",
      ],
    },
    {
      "role": "model",
      "parts": [
        "Soil, the foundation of agriculture, is a complex and fascinating mixture. It's not just \"dirt,\" but a living ecosystem supporting a whole world of organisms!  And just like there are different climates and landscapes, there are different types of soil, each with unique characteristics. Let's dig into the main soil types:\n\n**1. Sandy Soil:**\n\n* **Texture:**  As the name suggests, sandy soil feels gritty due to the larger particle size of sand. These particles don't pack together tightly.\n* **Drainage:**  The large spaces between sand particles allow water to drain very quickly. This is great for plants that don't like \"wet feet\" but can be a challenge for retaining moisture and nutrients.\n* **Best for:**  Root vegetables like carrots and potatoes, as well as crops like watermelon and strawberries, thrive in sandy soil due to the good drainage and aeration it provides.\n\n**2. Clay Soil:**\n\n* **Texture:** Clay soil feels smooth and sticky, especially when wet. This is because clay particles are tiny and pack tightly together.\n* **Drainage:**  The tight packing of clay particles makes it difficult for water to drain, often leading to waterlogged conditions.\n* **Best for:**  While challenging, clay soil can be very fertile if managed properly. It's well-suited for crops like rice (which thrives in water) and plants with deep roots that can access nutrients held tightly within the clay.\n\n**3. Silt Soil:**\n\n* **Texture:** Silt soil falls between sand and clay in terms of particle size. It feels smooth and powdery when dry and slippery when wet.\n* **Drainage:**  Silt soil retains moisture well but also drains better than clay soil.\n* **Best for:**  Silt soil is generally considered very fertile and is excellent for a wide variety of crops, including fruits, vegetables, and grains.\n\n**4. Loamy Soil:**\n\n* **Texture:**  Loamy soil is the holy grail for gardeners and farmers! It's a balanced mixture of sand, silt, and clay, giving it a crumbly texture.\n* **Drainage:**  Loam drains well while still retaining moisture and nutrients effectively.\n* **Best for:**  Loamy soil is ideal for almost any crop due to its perfect balance of drainage, aeration, and nutrient retention.\n\n**5. Peaty Soil:**\n\n* **Texture:**  Peaty soil is dark brown or black and feels spongy due to its high organic matter content.\n* **Drainage:**  Peat can hold a significant amount of water, sometimes even more than its weight!\n* **Best for:**  Peat soil is naturally acidic, making it suitable for acid-loving plants like blueberries and rhododendrons.\n\n**Beyond the Basics:**\n\nIt's important to note that these are just the basic soil types. In reality, most soils are a combination of these types, creating a wide spectrum of soil profiles. Understanding your soil type is crucial for successful gardening and farming, as it dictates water needs, fertilization practices, and crop suitability. \n",
      ],
    },
    {
      "role": "user",
      "parts": [
        "Which soil is good for rice",
      ],
    },
    {
      "role": "model",
      "parts": [
        "Rice thrives in soil conditions that many other crops would find challenging! Here's a breakdown of what makes a soil ideal for growing rice:\n\n**1. Clayey Texture is Key:**\n\n* **Water Retention:** Rice is a semi-aquatic plant, meaning it flourishes in waterlogged conditions. Clay soil, with its tiny, tightly packed particles, excels at holding water, creating the flooded paddy fields essential for rice cultivation.\n* **Nutrient Retention:** Clay also holds onto nutrients tightly, preventing them from leaching away quickly. This is crucial in flooded fields where nutrients can easily dissolve and be lost.\n\n**2. Tolerance for Submergence:**\n\n* **Anaerobic Conditions:**  Flooded rice fields create an oxygen-deprived (anaerobic) environment.  Rice has adapted to survive and even thrive in these conditions, while many weeds and pests cannot.\n* **Special Root System:** Rice plants have developed a unique root system that allows them to access oxygen even when submerged in water.\n\n**3.  Slightly Acidic to Neutral pH:**\n\n* **Optimal Nutrient Availability:** While rice can tolerate a range of pH levels, it grows best in slightly acidic to neutral soil (pH 6.0 to 6.5). This range allows for the best availability of essential nutrients.\n\n**4.  Good Fertility:**\n\n* **Heavy Feeder:** Rice is a heavy feeder, meaning it requires a good supply of nutrients, particularly nitrogen (N), phosphorus (P), and potassium (K), for optimal growth and yield.\n\n**Beyond Clay:**\n\nWhile clay soil is generally considered ideal for rice, it's not the only option. Other soil types can be suitable with proper management:\n\n* **Loamy Soil:**  Loam can be amended with organic matter to improve its water-holding capacity for rice cultivation.\n* **Silty Clay Loam:** This soil type offers a good balance of water retention and drainage, making it suitable for rice.\n\n**In Conclusion:**\n\nThe key takeaway is that rice needs soil that can hold water effectively to create the flooded conditions it loves. Clayey soils are naturally suited for this, but with careful management and amendments, other soil types can also support healthy rice crops. \n",
      ],
    },
    {
      "role": "user",
      "parts": [
        "What are the diseases found in mango trees\n",
      ],
    },
    {
      "role": "model",
      "parts": [
        "Mango trees, like all living things, are susceptible to a variety of diseases. These diseases can impact fruit production, tree health, and even lead to tree death if left unmanaged. Here are some of the most common diseases found in mango trees:\n\n**Fungal Diseases:**\n\n* **Anthracnose (Colletotrichum gloeosporioides):** This is one of the most devastating mango diseases worldwide. It causes dark, sunken lesions on leaves, flowers, fruits, and twigs. Severe infections can lead to fruit rot, leaf drop, and twig dieback.\n* **Powdery Mildew (Oidium mangiferae):** This disease appears as a white, powdery growth on leaves, flowers, and young fruits. It can cause leaf distortion, fruit drop, and reduced fruit quality.\n* **Stem-end Rot (Lasiodiplodia theobromae):** This disease primarily affects the fruit, causing a dark, firm rot that starts at the stem end. It can lead to significant fruit loss during storage and transport.\n* **Verticillium Wilt (Verticillium spp.):** This soilborne fungus infects the roots and vascular system of the tree, blocking water and nutrient transport. Symptoms include wilting, yellowing leaves, branch dieback, and eventually tree death.\n\n**Bacterial Diseases:**\n\n* **Bacterial Black Spot (Xanthomonas campestris pv. mangiferaeindicae):** This disease causes raised, black spots on leaves, fruits, and stems. It can lead to leaf drop, fruit cracking, and reduced fruit quality.\n\n**Viral Diseases:**\n\n* **Mango Malformation Disease (MMD):** This serious viral disease causes abnormal growth of flowers and vegetative shoots, resulting in deformed, unusable fruit. It can significantly reduce fruit yield and tree vigor.\n\n**Other Problems:**\n\n* **Nutrient Deficiencies:** Mango trees require a balanced supply of nutrients for healthy growth. Deficiencies in essential nutrients like nitrogen, phosphorus, potassium, and micronutrients can lead to various symptoms, including leaf discoloration, stunted growth, and poor fruit production.\n* **Pests:**  Mango trees are also susceptible to a range of pests, such as mango hoppers, fruit flies, mealybugs, and scale insects. These pests can damage leaves, flowers, and fruits, and some can also transmit diseases.\n\n**Managing Mango Tree Diseases:**\n\n* **Prevention is Key:**  Healthy trees are more resistant to diseases. Ensure proper orchard sanitation, good air circulation, and avoid overhead irrigation to minimize disease pressure.\n* **Cultural Practices:**  Choose disease-resistant varieties, prune infected branches, remove fallen leaves and fruits, and avoid over-fertilization.\n* **Chemical Control:**  Fungicides and bactericides can be used to control some diseases, but it's essential to follow label instructions carefully and use them judiciously.\n* **Biological Control:**  Some beneficial microorganisms can help suppress disease-causing organisms.\n\nIf you suspect your mango tree is suffering from a disease, it's crucial to get a proper diagnosis from a qualified arborist or plant pathologist. Early detection and appropriate management are essential for protecting your trees and ensuring a bountiful harvest. \n",
      ],
    },
  ]
)

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
    user_input = request.form.get('text_query', 'No input provided')
    language = request.args.get('language', 'en')
    try:
        translator = Translator()
        response = chat_session.send_message(user_input)
        translated_response = translator.translate(response.text, dest=language).text
        return translated_response
    except Exception as e:
        print(e)
        return "Error processing your request: " + str(e), 500

@app.route('/analyze_image', methods=['POST'])
def analyze_image():
    language = request.args.get('language', 'en')
    if 'image_file' not in request.files:
        return "No file part", 400
    image_file = request.files['image_file']
    if image_file.filename == '':
        return "No selected file", 400
    if image_file and allowed_file(image_file.filename):
        translator = Translator()
        filename = secure_filename(image_file.filename)
        image_path = os.path.join(uploads_dir, filename)
        image_file.save(image_path)
        with Image.open(image_path) as img:
            response = genai.GenerativeModel('gemini-pro-vision').generate_content(
                ["Describe this agricultural issue in detail and provide solutions.", img],
                safety_settings={})
            translated_response = translator.translate(response.text, dest=language).text
            return jsonify(translated_response)
    return "File type not allowed", 400

if __name__ == '__main__':
    app.run(debug=True)
