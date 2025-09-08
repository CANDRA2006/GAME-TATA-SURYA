let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalQuestions = 0;
let gameStarted = false;

// Pertanyaan
const bgMusic = new Howl({
  src: ['Backsound Music.mp3'],
  loop: true,
  volume: 1.0
});

bgMusic.play();

const questions = [
    {
        question: "Planet manakah yang merupakan planet terpanas di tata surya?",
        clues: [
            "Sering disebut sebagai 'planet kembar Bumi'",
            "Memiliki atmosfer yang sangat tebal",
            "Suhu permukaannya mencapai 462°C",
            "Atmosfernya 96% terdiri dari karbon dioksida",
            "Planet kedua terdekat dari Matahari"
        ],
        options: ["Merkurius", "Venus", "Mars", "Jupiter"],
        correct: 1,
        info: "Venus adalah planet terpanas karena efek rumah kaca yang ekstrem dari atmosfernya yang tebal.",
    },
    {
        question: "Planet manakah yang memiliki cincin paling spektakuler?",
        clues: [
            "Densitasnya lebih ringan dari air",
            "Memiliki lebih dari 80 satelit",
            "Cincinnya terdiri dari es dan batu",
            "Salah satu satelitnya bernama Titan",
            "Planet keenam dari Matahari"
        ],
        options: ["Jupiter", "Saturnus", "Uranus", "Neptunus"],
        correct: 1,
        info: "Saturnus memiliki sistem cincin yang paling menakjubkan dan mudah terlihat dari Bumi.",
    },
    {
        question: "Planet manakah yang disebut 'Planet Merah'?",
        clues: [
            "Warnanya disebabkan oleh oksida besi",
            "Memiliki gunung tertinggi di tata surya: Olympus Mons",
            "Memiliki dua satelit kecil",
            "Kutubnya tertutup es karbon dioksida",
            "Planet keempat dari Matahari"
        ],
        options: ["Venus", "Mars", "Jupiter", "Merkurius"],
        correct: 1,
        info: "Mars dijuluki Planet Merah karena permukaannya yang kaya akan oksida besi (karat).",
    },
    {
        question: "Planet manakah yang terbesar di tata surya?",
        clues: [
            "Memiliki lebih dari 70 satelit",
            "Memiliki badai besar bernama Great Red Spot",
            "Terdiri dari hidrogen dan helium",
            "Massa lebih besar dari semua planet lain digabung",
            "Planet kelima dari Matahari"
        ],
        options: ["Saturnus", "Jupiter", "Neptunus", "Uranus"],
        correct: 1,
        info: "Jupiter adalah raksasa gas terbesar dengan massa 2.5 kali lebih besar dari semua planet lain digabung.",
    },
    {
        question: "Planet manakah yang berputar dengan sumbu miring hampir 90 derajat?",
        clues: [
            "Tampak biru-hijau karena metana",
            "Memiliki cincin yang berputar vertikal",
            "Raksasa es dengan 27+ satelit",
            "Ditemukan pada tahun 1781",
            "Planet ketujuh dari Matahari"
        ],
        options: ["Neptunus", "Saturnus", "Uranus", "Mars"],
        correct: 2,
        info: "Uranus unik karena berputar miring 98°, seolah-olah berguling dalam orbitnya.",
    },
    {
        question: "Planet manakah yang memiliki angin tercepat di tata surya?",
        clues: [
            "Anginnya bisa mencapai 2.100 km/jam",
            "Warna biru karena metana di atmosfer",
            "Planet terjauh dari Matahari",
            "Memiliki satelit besar bernama Triton",
            "Periode orbitnya 165 tahun Bumi"
        ],
        options: ["Uranus", "Neptunus", "Saturnus", "Jupiter"],
        correct: 1,
        info: "Neptunus memiliki angin tercepat yang pernah tercatat di tata surya, mencapai 2.100 km/jam.",
    },
    {
        question: "Planet manakah yang terdekat dengan Matahari?",
        clues: [
            "Planet terkecil di tata surya",
            "Tidak memiliki atmosfer yang signifikan",
            "Perbedaan suhu siang-malam sangat ekstrem",
            "Periode orbitnya hanya 88 hari Bumi",
            "Suhu siang 427°C, malam -173°C"
        ],
        options: ["Venus", "Merkurius", "Mars", "Bumi"],
        correct: 1,
        info: "Merkurius adalah planet terdekat dengan Matahari dan mengalami variasi suhu yang ekstrem.",
    },
    {
        question: "Planet apakah yang ditinggali oleh manusia?",
        clues: [
            "71% permukaannya tertutup air",
            "Atmosfer 78% nitrogen, 21% oksigen",
            "Memiliki satu satelit alami",
            "Jarak ideal dari Matahari untuk air cair",
            "Planet ketiga dari Matahari"
        ],
        options: ["Mars", "Venus", "Bumi", "Jupiter"],
        correct: 2,
        info: "Bumi adalah satu-satunya planet yang diketahui memiliki kehidupan karena kondisinya yang ideal.",
    },
    {
        question: "Sebuah objek misterius di alam semesta ini memiliki daya tarik gravitasi yang begitu kuat hingga cahaya pun tak bisa lepas darinya. Ia tidak bisa dilihat secara langsung, namun kehadirannya dapat diketahui dari pengaruhnya terhadap benda-benda di sekitarnya.",
        clues: [
            "Menarik semua benda di sekitarnya, bahkan cahaya",
            "Gravitasinya sangat kuat dan ekstrem",
            "Bisa melengkungkan ruang dan waktu",
            "Terbentuk dari bintang yang runtuh",
            "Terletak jutaan tahun cahaya dari Bumi"
        ],
        options: ["Komet", "Asteroid", "Matahari", "Lubang Hitam"],
        correct: 3,
        info: "Lubang hitam adalah objek yang sangat kuat gravitasinya bisa menarik apapun bahkan cahaya sekalipun. ",
    },
    {
        question: "Apa nama satelit alami planet Bumi?",
        clues: [
            "Batuan bulat besar yang mengitari bumi",
            "Periode orbitnya 27,3 hari",
            "Ditemukan oleh Galileo Galilei",
            "Berperan penting dalam fenomena pasang surut air laut",
            "Satelit alami satu-satunya Bumi"
        ],
        options: ["Bulan", "Asteroid", "Komet", "Matahari"],
        correct: 0,
        info: "Bulan adalah satu-satunya satelit alami yang mengorbit planet Bumi." 
    },
    {
        question: "Objek langit ini memiliki inti berbatu dan es, serta membentuk ekor terang saat mendekati Matahari. Apakah nama objek tersebut?",
        clues: [
            "Bentuknya seperti bola, tetapi tidak bulat",
            "Dijuluki bintang berekor",
            "Bisa berubah bentuk dan ukuran",
            "Orbitnya lonjong atau elips",
            "Bisa muncul secara berkala"
        ],
        options: ["Komet", "Asteroid", "Matahari", "Bulan"],
        correct: 0,
        info: "Komet adalah objek langit yang memiliki inti berbatu dan es , serta membentuk ekor terang saat mendekati Matahari."
    },
    {
        question: "Aku mengelilingi Matahari, tapi aku bukan planet. Kadang aku besar, kadang aku kecil, dan aku sering berada di Sabuk yang terkenal. Siapakah aku?",
        clues: [
            "Bentuknya tidak bulat",
            "Bisa berubah ukuran",
            "Jumlahnya sangat banyak",
            "Tidak punya atmosfer",
            "Tidak memancarkan cahaya sendiri"
        ],
        options: ["Asteroid", "Komet", "Lubang hitam", "Bulan"],
        correct: 0,
        info: "Asteroid adalah objek langit yang mengorbit Matahari, tetapi bukan planet. Asteroid terletak di sabuk asteroid yang terletak di antara orbit Mars dan Jupiter."
    },
    {
        question: "Aku jauh banget di luar angkasa. Aku bersinar terang seperti bintang, padahal bukan bintang. Aku tinggal dekat lubang hitam, tapi nggak pernah sedih. Siapakah aku?",
        clues: [
            "Berada miliaran tahun cahaya dari Bumi",
            "Bukan bintang, tapi bersinar terang",
            "Memancarkan sinar-X, gelombang radio, cahaya tampak, dan bentuk energi lainnya",
            "Salah satu objek paling terang di alam semesta, bahkan bisa lebih terang dari seluruh galaksi tempat mereka berada",
            "Banyak ditemukan di galaksi yang sangat jauh dan tua"
        ],
        options: ["Komet", "Asteroid", "Quasar", "Lubang Hitam"],
        correct: 2,
        info: "Quasar adalah objek langit yang bersinar terang seperti bintang , tetapi bukan bintang. Quasar berada di luar angkasa, jauh banget dari Bumi."
    },
    {
        question: "Aku adalah objek alam semesta yang sering disebut sebagai “Milky Way” dalam bahasa Inggris, namun aku tidak terbuat dari susu. Siapakah aku?",
        clues: [
            "Berbentuk spiral",
            "Tata Surya Terletak di Salah Satu Lengannya",
            "Memiliki Diameter Sekitar 100.000 Tahun Cahaya",
            "Mengandung milliaran bintang",
            "Rumah bagi suatu planet yang ada kehidupan cerdas"
        ],
        options: ["Quasar", "Galaksi Bima Sakti", "Bumi", "Mars"],
        correct: 1,
        info: "Galaksi Bima Sakti adalah objek alam semesta yang berbentuk spiral dan memiliki diameter sekitar 100.000 tahun cahaya. Galaksi Bima Sakti mengandung milliaran bintang dan merupakan rumah bagi planet Bumi."
    },
    {
        question: "Aku mengorbit di wilayah Kuiper Belt, jauh dari matahari dan bumi, dulu aku dianggap planet, kini statusku berbeda. Siapakah aku?",
        clues: [
            "Aku tinggal di daerah yang penuh dengan benda kecil beku di pinggir tata surya",
            "Aku memiliki orbit yang tidak teratur dan tidak berbentuk elips",
            "Permukaannya sebagian besar terdiri dari es nitrogen, metana, dan karbon monoksida.",
            "Satu misi dari Bumi pernah singgah, namanya New Horizons",
            "Memiliki bulan terbesar bernama Charon"
        ],
        options: ["Uranus", "Neptunus", "Pluto", "Merkurius"],
        correct: 2,
        info: "Pluto adalah objek langit yang mengorbit di wilayah Kuiper Belt , jauh dari matahari dan bumi. Pluto memiliki orbit yang tidak teratur dan tidak berbentuk elips."
    }
];


function startGame() {
    gameStarted = true;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    totalQuestions = 0;

    // Acak urutan pertanyaan
    questions.sort(() => Math.random() - 0.5);
    
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endGame();
        return;
    }

    const question = questions[currentQuestionIndex];
    totalQuestions++;
    
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    
    // Tampilkan clues
    const cluesList = document.getElementById('cluesList');
    cluesList.innerHTML = '';
    question.clues.forEach(clue => {
        const li = document.createElement('li');
        li.textContent = clue;
        cluesList.appendChild(li);
    });

    // Acak urutan opsi
    const shuffledOptions = [...question.options];
    const correctAnswer = shuffledOptions[question.correct];
    shuffledOptions.sort(() => Math.random() - 0.5);
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);

    // Tampilkan opsi
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => checkAnswer(index, newCorrectIndex);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex, correctIndex) {
    const question = questions[currentQuestionIndex];
    const resultModal = document.getElementById('resultModal');
    const resultContent = document.getElementById('resultContent');
    const resultText = document.getElementById('resultText');
    const planetImage = document.getElementById('planetImage');
    const planetInfo = document.getElementById('planetInfo');

    if (selectedIndex === correctIndex) {
        // Jawaban benar
        correctAnswers++;
        document.getElementById('correctScore').textContent = correctAnswers;
        
        resultContent.className = 'result-content result-correct';
        resultText.textContent = 'HEBAT KAMU BENAR!!!';
        resultText.style.color = '#4caf50';
        
        planetImage.innerHTML = `
         <img src="SolarSystem/${question.options[question.correct].toLowerCase()}.jpg" 
         alt="${question.options[question.correct]}" 
         style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
`               ;

        planetInfo.innerHTML = `
            <h3>${question.options[question.correct]}</h3>
            <p>${question.info}</p>
        `;
    } else {
        // Jawaban salah
        resultContent.className = 'result-content result-incorrect';
        resultText.textContent = 'MAAF KAMU BELUM TEPAT, COBA LAGI!!!';
        resultText.style.color = '#f44336';
        
        planetImage.innerHTML = `
         <img src="SolarSystem/${question.options[question.correct].toLowerCase()}.jpg" 
         alt="${question.options[question.correct]}"
         style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">   
        `;
        
        planetInfo.innerHTML = `
            <h3>Jawaban yang benar: ${question.options[question.correct]}</h3>
            <p>${question.info}</p>
        `;
    }

    resultModal.style.display = 'flex';
}

function nextQuestion() {
    document.getElementById('resultModal').style.display = 'none';
    currentQuestionIndex++;
    showQuestion();
}

function endGame() {

    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('gameOverScreen').style.display = 'block';
    document.getElementById('finalScore').textContent = `${correctAnswers}/${totalQuestions}`;
}

function restartGame() {
    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('gameOverScreen').style.display = 'none';
    document.getElementById('correctScore').textContent = '0';
    document.getElementById('totalQuestions').textContent = '0';
    document.getElementById('currentQuestion').textContent = '1';
    gameStarted = false;
    
    document.getElementById('questionText').textContent = 'Selamat datang kembali!';
    document.getElementById('cluesList').innerHTML = '<li>Klik tombol "Mulai Game" untuk memulai lagi!</li>';
    document.getElementById('optionsContainer').innerHTML = `
        <button class="option-btn" onclick="startGame()" style="grid-column: 1 / -1; background: linear-gradient(135deg, #4caf50, #388e3c);">
            🚀 Mulai Game Lagi
        </button>
    `;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createStars();
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('resultModal').style.display === 'flex') {
        nextQuestion();
    }
});
