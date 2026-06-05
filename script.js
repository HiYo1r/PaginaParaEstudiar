const words = [
    { spanish:"Asignación", english:"Allocation" },
    { spanish:"Aneurisma", english:"Aneurysm" },
    { spanish:"Medicamento Anti-Rechazo/Medicamentos Inmunosupresores", english:"Anti-Rejection Medicine/immunosuppressive drugs" },
    { spanish:"Examen De Apnea", english:"Apnea test" },
    { spanish:"Respirar Artificialmente", english:"Artificial breathing" },
    { spanish:"Autopsia", english:"Autopsy" },
    { spanish:"Vejiga", english:"Bladder" },
    { spanish:"Parpadeo, Parpadear", english:"Blink" },
    { spanish:"Vasos Sanguíneos", english:"Blood Vessels" },
    { spanish:"Médula Ósea", english:"Bone marrow" },
    { spanish:"Hueso/Huesos", english:"Bone/Bones" },
    { spanish:"Cerebro", english:"Brain" },
    { spanish:"Actividad Del Cerebro", english:"Brain activity" },
    { spanish:"Muerte Cerebral", english:"Brain Death" },
    { spanish:"Pruebas, Exámenes De Muerte Cerebral", english:"Brain Death testing" },
    { spanish:"Hernia Cerebral", english:"Brain herniation" },
    { spanish:"Lesión Cerebral", english:"Brain injury" },
    { spanish:"Tumor Cerebral", english:"Brain tumor" },
    { spanish:"Tronco Encefálico", english:"Brainstem" },
    { spanish:"Respiración", english:"Breathing" },
    { spanish:"Herida De Bala", english:"Bullet wound" },
    { spanish:"Candidato", english:"Candidate" },
    { spanish:"Edema Cerebral", english:"Cerebral edema" },
    { spanish:"Estudio/Prueba De Flujo Cerebral", english:"Cerebral Flow Study (CBF)" },
    { spanish:"Muerte Del Sistema Circulatorio", english:"Circulatory Death" },
    { spanish:"Tiempo De Isquemia Fría", english:"Cold Ischemia Time" },
    { spanish:"Estado De Coma", english:"Coma" },
    { spanish:"Córnea", english:"Cornea" },
    { spanish:"Reflejo De Tos", english:"Cough reflex" },
    { spanish:"Cremada/Cremado", english:"Cremated" },
    { spanish:"Cremación", english:"Cremation" },
    { spanish:"Tomografía Computarizada Del Cerebro", english:"CT brain scan" },
    { spanish:"Donante Fallecido", english:"Deceased Donor" },
    { spanish:"Diálisis", english:"Dialysis" },
    { spanish:"Donación", english:"Donation" },
    { spanish:"Donación Por Muerte Cerebral", english:"Donation after Brain Death (DBD)" },
    { spanish:"Donación Por Muerte Del Sistema Circulatorio, Por Muerte Cardiaca", english:"Donation after Circulatory/Cardiac Death (DCD)" },
    { spanish:"Programa De Apoyo Después De La Donación", english:"Donation Aftercare Program" },
    { spanish:"Donante", english:"Donor" },
    { spanish:"Registro De Donantes", english:"Donor Registry" },
    { spanish:"Embalsamar/Embalsamamiento", english:"Embalm/Embalming" },
    { spanish:"Embolia", english:"Embolism" },
    { spanish:"Enfermedad De Órgano En Etapa Terminal", english:"End-Stage Organ Disease" },
    { spanish:"Enfermedad Renal En Etapa Terminal (ERT)", english:"End-Stage Renal Disease (ESRD)" },
    { spanish:"Ley De Autorización En Primera Persona", english:"First Person Consent Legislation" },
    { spanish:"Trastorno Genético", english:"Genetic Disorder" },
    { spanish:"Regalo De La Vida O Regalo De Vida", english:"Gift of life" },
    { spanish:"Injerto", english:"Graft" },
    { spanish:"Traumatismo De La Cabeza", english:"Head trauma" },
    { spanish:"Corazón", english:"Heart" },
    { spanish:"Ataque Cardíaco", english:"Heart attack" },
    { spanish:"Válvulas Cardiacas", english:"Heart Valves" },
    { spanish:"Hemorragia", english:"Hemorrhage" },
    { spanish:"Consentimiento Informado", english:"Informed Consent" },
    { spanish:"Intestinos", english:"Intestines" },
    { spanish:"Riñón/ Riñones", english:"Kidney/Kidneys" },
    { spanish:"Ligamentos", english:"Ligaments" },
    { spanish:"Hígado", english:"Liver" },
    { spanish:"Donante En Vida", english:"Living Donor" },
    { spanish:"Pulmón/Pulmones", english:"Lung/Lungs" },
    { spanish:"Compatibilidad", english:"Match" },
    { spanish:"Verificación De Compatibilidad", english:"Match Run" },
    { spanish:"Soporte Mecánico/Apoyo Mecánico", english:"Mechanical support" },
    { spanish:"Médico Forense/Examinador Médico", english:"Medical Coroner/Medical Examiner" },
    { spanish:"Investigación Médica", english:"Medical research/research" },
    { spanish:"(Imágenes De) Resonancia Magnética Del Cerebro", english:"MRI brain scan" },
    { spanish:"Evaluación Neurológica", english:"Neurological evaluation" },
    { spanish:"Ataúd Abierto", english:"Open Casket" },
    { spanish:"Donación De Órganos", english:"Organ donation" },
    { spanish:"Preservación De Órganos", english:"Organ Preservation" },
    { spanish:"Red De Procuración Y Trasplante De Órganos", english:"Organ Procurement and Transplantation Network (OPTN)" },
    { spanish:"Organizaciones De Procuración De Órganos", english:"Organ Procurement Organizations (OPO)" },
    { spanish:"Órgano/ Órganos", english:"Organ/Organs" },
    { spanish:"Sobredosis", english:"Overdose" },
    { spanish:"Oxígeno", english:"Oxygen" },
    { spanish:"Suministro De Oxígeno Al Cerebro", english:"Oxygen supply to the brain" },
    { spanish:"Páncreas", english:"Pancreas" },
    { spanish:"Patología", english:"Pathology" },
    { spanish:"Procuración", english:"Procurement" },
    { spanish:"Pronóstico", english:"Prognosis" },
    { spanish:"Próstata", english:"Prostate" },
    { spanish:"Prótesis", english:"Prosthetics" },
    { spanish:"Beneficiario, Receptor", english:"Recipient" },
    { spanish:"Recuperación", english:"Recovery" },
    { spanish:"Movimiento Reflejo", english:"Reflex movement" },
    { spanish:"Reflejo/Reflejos", english:"Reflex/reflexes" },
    { spanish:"Regístrate/Regístrese O Inscríbete/Inscríbase", english:"Register/Sign Up" },
    { spanish:"Donante Registrado", english:"Registered Donor" },
    { spanish:"Rechazo", english:"Rejection" },
    { spanish:"Solicitante", english:"Requester" },
    { spanish:"Solicitud Obligatoria", english:"Required request" },
    { spanish:"Piel", english:"Skin" },
    { spanish:"Injerto De Piel", english:"Skin graft" },
    { spanish:"Cráneo", english:"Skull" },
    { spanish:"Estado", english:"Status" },
    { spanish:"Accidente Cerebrovascular", english:"Stroke" },
    { spanish:"Tendón", english:"Tendon" },
    { spanish:"Estado Terminal", english:"Terminal state" },
    { spanish:"Tejido", english:"Tissue" },
    { spanish:"Trasplante", english:"Transplant" },
    { spanish:"Beneficiario De Trasplante O Receptor De Trasplante", english:"Transplant Recipient" },
    { spanish:"Trauma/ Traumático", english:"Trauma/traumatic" },
    { spanish:"Útero", english:"Uterus" },
    { spanish:"Válvula/ Válvulas", english:"Valve/valves" },
    { spanish:"Vena/Venas", english:"Vein/veins" },
    { spanish:"Respirador Artificial", english:"Ventilator" },
    { spanish:"Lista De Espera", english:"Waiting List" }
];

const exampleSentences = {

    "Brain":
        "The brain controls the entire body.",

    "Heart":
        "The heart pumps blood through the body.",

    "Kidney/Kidneys":
        "The kidneys help clean the blood.",

    "Liver":
        "The liver processes nutrients from food.",

    "Donation":
        "Donation can help save lives.",

    "Transplant":
        "The patient received a transplant last year.",

    "Oxygen":
        "Oxygen is essential for life.",

    "Bladder":
        "The bladder stores urine.",

    "Brain injury":
        "The patient suffered a brain injury.",

    "Blood Vessels":
        "Blood vessels carry blood throughout the body."
};

let current = 0;
let correct = 0;
let wrong = 0;
let streak = 0;
let lastCorrectWord = "";
let answeredCorrectly = false;
let currentSentence = "";

const spanishWord = document.getElementById("spanishWord");
const answer = document.getElementById("answer");
const message = document.getElementById("message");
const card = document.querySelector(".card");
const playBtn = document.getElementById("playBtn");
const sentenceBtn =
    document.getElementById("sentenceBtn");
const nextBtn = document.getElementById("nextBtn");



function normalize(text){
    return text
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
}

function shuffleWords(){
    words.sort(() => Math.random() - 0.5);
}

function loadWord(){
    answeredCorrectly = false;

    spanishWord.textContent = words[current].spanish;

    answer.value = "";
    message.textContent = "";

    playBtn.style.display = "none";
    sentenceBtn.style.display = "none";
    nextBtn.style.display = "none";

    answer.focus();

    updateProgress();
}

function updateProgress(){
    let progress = ((current + 1) / words.length) * 100;

    document.getElementById("progress").style.width = progress + "%";
    document.getElementById("progressText").textContent = `${current + 1} / ${words.length}`;
    document.getElementById("percent").textContent = Math.round(progress) + "%";
}

function playPronunciation(){

    if(lastCorrectWord === "") return;

    const speech =
        new SpeechSynthesisUtterance(lastCorrectWord);

    speech.lang = "en-US";
    speech.rate = 0.85;
    speech.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}

function checkAnswer(){
    if(answeredCorrectly){
    message.textContent = "🐱 Ya respondiste esta palabra, pasa a la siguiente";
    message.style.color = "#db2777";
    return;
}

    const userAnswer = normalize(answer.value);

    const correctAnswer =
        normalize(words[current].english);

    if(userAnswer === ""){

        message.textContent =
            "🐱 Escribe una respuesta primero";

        message.style.color = "#f59e0b";

        return;
    }

    if(userAnswer === correctAnswer){
    answeredCorrectly = true;

    correct++;
    streak++;

    lastCorrectWord = words[current].english;

    playBtn.style.display = "block";
    sentenceBtn.style.display = "block";
    nextBtn.style.display = "block";

    message.textContent =
        "💖 ¡Correcto! Puedes escuchar la pronunciación o ver una oración";

    message.style.color = "#16a34a";

    card.classList.add("correct");
    }else{

        wrong++;
        streak = 0;

        message.textContent =
            "😿 Incorrecto, vuelve a intentar";

        message.style.color = "#db2777";

        answer.value = "";

        answer.focus();
    }

    document.getElementById("correct").textContent =
        correct;

    document.getElementById("wrong").textContent =
        wrong;

    document.getElementById("streak").textContent =
        streak;
}

function nextWord(){

    card.classList.remove("correct");

    message.textContent = "";

    current++;

    if(current >= words.length){

        current = 0;

        shuffleWords();

        message.textContent =
            "🎉 Terminaste la ronda";
    }

    loadWord();
}

answer.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        checkAnswer();
    }
});

shuffleWords();
loadWord();

const emojiBackground = document.getElementById("emojiBackground");

const emojis = [
    "💗", "💕", "💖", "💞", "💘",
    "🌸", "✨", "🐱", "🐾", "🎀",
    "💝", "🌷", "⭐", "🩷"
];

function createEmoji(){
    const emoji = document.createElement("span");

    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.fontSize = Math.random() * 22 + 16 + "px";
    emoji.style.animationDuration = Math.random() * 8 + 6 + "s";
    emoji.style.opacity = Math.random() * 0.5 + 0.35;

    emojiBackground.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 14000);
}

const isMobile = window.innerWidth <= 480;

setInterval(createEmoji, isMobile ? 600 : 180);

for(let i = 0; i < (isMobile ? 20 : 80); i++){
    setTimeout(createEmoji, i * 80);
}
function getFemaleVoice(){

    const voices = speechSynthesis.getVoices();

    return voices.find(v =>
        v.name.includes("Female") ||
        v.name.includes("Samantha") ||
        v.name.includes("Google US English") ||
        v.name.includes("Microsoft Zira") ||
        v.name.includes("Jenny")
    );
}

function speakExample(){

    const word = words[current].english;

    const templates = [
        `The doctor explained the meaning of ${word}.`,
        `The patient was diagnosed with ${word}.`,
        `The medical team discussed ${word}.`,
        `The nurse recorded information about ${word}.`,
        `The hospital report mentioned ${word}.`
    ];

    const example =
        templates[Math.floor(Math.random() * templates.length)];

    const speech =
        new SpeechSynthesisUtterance(example);

    speech.lang = "en-US";
    speech.rate = 0.45;
    speech.pitch = 1;
    speech.volume = 1;

    const voice = getFemaleVoice();

    if(voice){
        speech.voice = voice;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}
