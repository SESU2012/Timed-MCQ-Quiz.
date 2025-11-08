       const questions = [
            {
                question: "What is the largest planet in our solar system?",
                image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=400&fit=crop",
                options: ["Earth", "Jupiter", "Saturn", "Neptune"],
                correct: 1
            },
            {
                question: "Which element has the chemical symbol 'Au'?",
                image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&h=400&fit=crop",
                options: ["Silver", "Gold", "Aluminum", "Copper"],
                correct: 1
            },
            {
                question: "What is the capital city of Japan?",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop",
                options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                correct: 2
            },
            {
                question: "Who painted the Mona Lisa?",
                image: "data:image/jpeg;base64,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",
                options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
                correct: 1
            },
            {
                question: "What is the smallest unit of life?",
                image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=400&fit=crop",
                options: ["Atom", "Molecule", "Cell", "Organ"],
                correct: 2
            },
            {
                question: "In which year did World War II end?",
                image: "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800&h=400&fit=crop",
                options: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "What is the speed of light?",
                image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=400&fit=crop",
                options: ["299,792 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
                correct: 0
            },
            {
                question: "Which ocean is the largest?",
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correct: 3
            },
            {
                question: "What is the hardest natural substance on Earth?",
                image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=400&fit=crop",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correct: 2
            },
            {
                question: "How many continents are there?",
                image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=400&fit=crop",
                options: ["5", "6", "7", "8"],
                correct: 2
            }
        ];

        let currentQuestionIndex = 0;
        let userAnswers = new Array(10).fill(null);
        let timeRemaining = 600; // 10 minutes in seconds
        let timerInterval;
        let quizStartTime;
        let warningShown = false;

        // Load saved state
        function loadState() {
            const saved = localStorage.getItem('quizState');
            if (saved) {
                const state = JSON.parse(saved);
                userAnswers = state.answers || new Array(10).fill(null);
                timeRemaining = state.timeRemaining || 600;
                currentQuestionIndex = state.currentQuestion || 0;
                quizStartTime = state.startTime || Date.now();
                return true;
            }
            return false;
        }

        // Save state
        function saveState() {
            const state = {
                answers: userAnswers,
                timeRemaining: timeRemaining,
                currentQuestion: currentQuestionIndex,
                startTime: quizStartTime
            };
            localStorage.setItem('quizState', JSON.stringify(state));
        }

        function startQuiz() {
            document.getElementById('startScreen').classList.add('hidden');
            document.getElementById('quizScreen').classList.remove('hidden');
            
            const hasState = loadState();
            if (!hasState) {
                quizStartTime = Date.now();
            }
            
            createQuestionNav();
            displayQuestion();
            startTimer();
            saveState();
        }

        function createQuestionNav() {
            const nav = document.getElementById('questionNav');
            nav.innerHTML = '';
            for (let i = 0; i < 10; i++) {
                const btn = document.createElement('button');
                btn.className = 'nav-btn';
                btn.textContent = i + 1;
                btn.onclick = () => goToQuestion(i);
                if (userAnswers[i] !== null) {
                    btn.classList.add('answered');
                }
                nav.appendChild(btn);
            }
            updateNavHighlight();
        }

        function updateNavHighlight() {
            const navBtns = document.querySelectorAll('.nav-btn');
            navBtns.forEach((btn, index) => {
                btn.classList.remove('active');
                if (index === currentQuestionIndex) {
                    btn.classList.add('active');
                }
                if (userAnswers[index] !== null) {
                    btn.classList.add('answered');
                }
            });
        }

        function displayQuestion() {
            const q = questions[currentQuestionIndex];
            document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
            document.getElementById('questionImage').src = q.image;
            document.getElementById('questionText').textContent = q.question;
            
            const container = document.getElementById('optionsContainer');
            container.innerHTML = '';
            
            q.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                if (userAnswers[currentQuestionIndex] === index) {
                    optionDiv.classList.add('selected');
                }
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'option';
                radio.id = `option${index}`;
                radio.value = index;
                radio.checked = userAnswers[currentQuestionIndex] === index;
                
                const label = document.createElement('label');
                label.htmlFor = `option${index}`;
                label.textContent = option;
                
                optionDiv.appendChild(radio);
                optionDiv.appendChild(label);
                
                optionDiv.onclick = () => selectOption(index);
                
                container.appendChild(optionDiv);
            });
            
            updateNavButtons();
            updateNavHighlight();
        }

        function selectOption(index) {
            userAnswers[currentQuestionIndex] = index;
            
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            document.querySelectorAll('.option')[index].classList.add('selected');
            document.querySelectorAll('input[name="option"]')[index].checked = true;
            
            updateNavHighlight();
            saveState();
        }

        function updateNavButtons() {
            document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
            const nextBtn = document.getElementById('nextBtn');
            nextBtn.textContent = currentQuestionIndex === 9 ? 'Finish' : 'Next →';
        }

        function goToQuestion(index) {
            currentQuestionIndex = index;
            displayQuestion();
            saveState();
        }

        function nextQuestion() {
            if (currentQuestionIndex < 9) {
                currentQuestionIndex++;
                displayQuestion();
                saveState();
            } else {
                submitQuiz();
            }
        }

        function prevQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayQuestion();
                saveState();
            }
        }

        function startTimer() {
            const timerDisplay = document.getElementById('timeLeft');
            const timerEl = document.getElementById('timer');
            
            timerInterval = setInterval(() => {
                timeRemaining--;
                
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                
                if (timeRemaining <= 60 && !warningShown) {
                    timerEl.classList.add('warning');
                    alert('⚠️ Warning: Only 1 minute remaining!');
                    warningShown = true;
                }
                
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    alert('⏰ Time\'s up! Quiz will be submitted automatically.');
                    submitQuiz();
                }
                
                saveState();
            }, 1000);
        }

        function submitQuiz() {
            clearInterval(timerInterval);
            
            const totalTime = 600 - timeRemaining;
            let score = 0;
            let correct = 0;
            let incorrect = 0;
            let skipped = 0;
            
            userAnswers.forEach((answer, index) => {
                if (answer === null) {
                    skipped++;
                } else if (answer === questions[index].correct) {
                    score += 4;
                    correct++;
                } else {
                    score -= 1;
                    incorrect++;
                }
            });
            
            const accuracy = correct > 0 ? ((correct / (correct + incorrect)) * 100).toFixed(1) : 0;
            
            document.getElementById('quizScreen').classList.add('hidden');
            document.getElementById('resultsScreen').classList.remove('hidden');
            
            document.getElementById('finalScore').textContent = score;
            document.getElementById('accuracy').textContent = accuracy + '%';
            document.getElementById('timeTaken').textContent = `${Math.floor(totalTime / 60)}:${(totalTime % 60).toString().padStart(2, '0')}`;
            document.getElementById('correctCount').textContent = correct;
            document.getElementById('incorrectCount').textContent = incorrect;
            
            let message = '';
            if (score >= 30) message = 'Outstanding! 🌟';
            else if (score >= 20) message = 'Great job! 👏';
            else if (score >= 10) message = 'Good effort! 👍';
            else message = 'Keep practicing! 💪';
            document.getElementById('scoreMessage').textContent = message;
            
            displayReview();
            localStorage.removeItem('quizState');
        }

        function displayReview() {
            const container = document.getElementById('reviewContainer');
            container.innerHTML = '';
            
            questions.forEach((q, index) => {
                const reviewDiv = document.createElement('div');
                reviewDiv.className = 'review-question';
                
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === q.correct;
                const isSkipped = userAnswer === null;
                
                let statusClass = isSkipped ? 'skipped' : (isCorrect ? 'correct' : 'incorrect');
                let statusText = isSkipped ? 'Skipped' : (isCorrect ? '✓ Correct' : '✗ Incorrect');
                
                reviewDiv.innerHTML = `
                    <div class="review-header">
                        <strong>Question ${index + 1}</strong>
                        <span class="review-status ${statusClass}">${statusText}</span>
                    </div>
                    <div style="margin-bottom: 15px; color: #333; font-weight: 500;">${q.question}</div>
                    <div style="color: #666;">
                        ${!isSkipped ? `<div style="margin-bottom: 8px;"><strong>Your answer:</strong> ${q.options[userAnswer]}</div>` : ''}
                        <div><strong>Correct answer:</strong> ${q.options[q.correct]}</div>
                    </div>
                `;
                
                container.appendChild(reviewDiv);
            });
        }

        function restartQuiz() {
            currentQuestionIndex = 0;
            userAnswers = new Array(10).fill(null);
            timeRemaining = 600;
            warningShown = false;
            
            document.getElementById('resultsScreen').classList.add('hidden');
            document.getElementById('startScreen').classList.remove('hidden');
            
            localStorage.removeItem('quizState');
        }

        // Check for saved state on page load
        window.onload = function() {
            const saved = localStorage.getItem('quizState');
            if (saved) {
                const resume = confirm('You have an incomplete quiz. Would you like to resume?');
                if (resume) {
                    startQuiz();
                } else {
                    localStorage.removeItem('quizState');
                }
            }
        };