const exercises = [
    // --- Sección: Presente Simple vs. Continuo (Selección Múltiple) ---
    {
        id: "present-tenses",
        type: "multiple-choice",
        title: "Presente Simple vs. Continuo",
        description: "Elige la opción correcta para completar la frase. ¡Presta atención a las palabras clave!",
        questions: [
            {
                question: "Sara es artista. Cada día, ella ______ en su estudio por muchas horas.",
                options: [
                    { text: "está pintando", isCorrect: false, rationale: "El presente continuo se usa para acciones que ocurren en el momento. 'Cada día' indica una rutina o un hábito." },
                    { text: "pinta", isCorrect: true, rationale: "El presente simple se utiliza para expresar hábitos, rutinas o verdades generales, lo cual es indicado por la frase 'Cada día'." },
                    { text: "pintar", isCorrect: false, rationale: "Esta es la forma infinitiva del verbo, no una conjugación que exprese el tiempo verbal." }
                ]
            },
            {
                question: "¡Shhh! El bebé ______ ahora mismo. No queremos despertarlo.",
                options: [
                    { text: "duerme", isCorrect: false, rationale: "Aunque 'duerme' es correcto en presente simple, la expresión 'ahora mismo' exige el uso del presente continuo." },
                    { text: "está durmiendo", isCorrect: true, rationale: "La frase 'ahora mismo' indica una acción que se está llevando a cabo en el instante presente, lo cual se expresa con el presente continuo." },
                    { text: "dormir", isCorrect: false, rationale: "Esta es la forma infinitiva, y necesitamos una forma conjugada del verbo para la oración." }
                ]
            },
            {
                question: "Normalmente, Carlos no ______ café, pero hoy sí ______ una taza porque tiene mucho sueño.",
                options: [
                    { text: "bebe / está bebiendo", isCorrect: true, rationale: "'Normalmente' indica un hábito (presente simple), mientras que 'hoy sí' con una razón específica sugiere una acción temporal en progreso (presente continuo)." },
                    { text: "está bebiendo / bebe", isCorrect: false, rationale: "El orden de los tiempos está invertido; 'normalmente' no se asocia con el presente continuo." },
                    { text: "bebiendo / bebe", isCorrect: false, rationale: "La primera parte requiere una conjugación completa, no solo el gerundio." }
                ]
            },
            {
                question: "Nosotros ______ español en la escuela todos los días, y ahora mismo, ______ sobre los verbos.",
                options: [
                    { text: "estamos aprendiendo / aprendemos", isCorrect: false, rationale: "El presente continuo no es para acciones 'todos los días'; el presente simple es para rutinas." },
                    { text: "aprendemos / estamos aprendiendo", isCorrect: true, rationale: "'Todos los días' indica un hábito (presente simple), y 'ahora mismo' indica una acción en progreso (presente continuo)." },
                    { text: "aprender / estamos aprendiendo", isCorrect: false, rationale: "La primera parte de la frase necesita una conjugación verbal, no el infinitivo." }
                ]
            }
        ]
    },
    // --- Sección: Por vs. Para (Selección Múltiple) ---
    {
        id: "por-para",
        type: "multiple-choice",
        title: "Por vs. Para",
        description: "Elige 'por' o 'para' para completar la frase. ¡Un clásico desafío!",
        questions: [
            {
                question: "Compré este regalo ______ mi madre.",
                options: [
                    { text: "por", isCorrect: false, rationale: "'Por' se usa para causa o razón. 'Para' indica destinatario." },
                    { text: "para", isCorrect: true, rationale: "'Para' se usa para indicar el destinatario de una acción o un objeto." }
                ]
            },
            {
                question: "Estudiamos ______ dos horas.",
                options: [
                    { text: "por", isCorrect: true, rationale: "'Por' se usa para indicar duración de tiempo." },
                    { text: "para", isCorrect: false, rationale: "'Para' no se usa para duración de tiempo." }
                ]
            },
            {
                question: "Necesito el informe ______ el lunes.",
                options: [
                    { text: "por", isCorrect: false, rationale: "'Por' se usa para causa o medio. 'Para' indica fecha límite." },
                    { text: "para", isCorrect: true, rationale: "'Para' se usa para indicar una fecha límite o un plazo." }
                ]
            },
            {
                question: "Gracias ______ tu ayuda.",
                options: [
                    { text: "por", isCorrect: true, rationale: "'Por' se usa para expresar la causa o razón de una gratitud." },
                    { text: "para", isCorrect: false, rationale: "En este contexto, 'para' no es correcto para expresar gratitud." }
                ]
            },
            {
                question: "Voy a Madrid ______ tren.",
                options: [
                    { text: "por", isCorrect: true, rationale: "'Por' se usa para indicar el medio de transporte." },
                    { text: "para", isCorrect: false, rationale: "'Para' indica destino, no el medio de transporte." }
                ]
            }
        ]
    },
    // --- Sección: Ejercicios Interactivos (Completar texto) ---
    {
        id: "fill-in-the-blanks",
        type: "text-input",
        title: "Completa la Frase",
        description: "Escribe la forma correcta del verbo o preposición, usando solo el presente simple o presente continuo para los verbos.",
        questions: [
            {
                question: "Cada mañana, mi padre ______ (leer) el periódico.",
                correctAnswer: "lee",
                rationale: "Es un hábito diario, se usa el presente simple."
            },
            {
                question: "Ahora mismo, nosotros ______ (escuchar) música.",
                correctAnswer: "estamos escuchando",
                rationale: "La acción está ocurriendo en este preciso momento, se usa el presente continuo."
            },
            {
                question: "Estudio español ______ (duración) un año.",
                correctAnswer: "por",
                rationale: "'Por' se usa para indicar duración."
            },
            {
                question: "Este libro es ______ (destinatario) mi hermana.",
                correctAnswer: "para",
                rationale: "'Para' se usa para indicar el destinatario."
            },
            {
                question: "Mira, el perro ______ (correr) muy rápido en el parque.",
                correctAnswer: "está corriendo",
                rationale: "La acción está sucediendo ahora mismo ('Mira'), se usa el presente continuo."
            }
        ]
    },
    // --- NUEVA SECCIÓN: Temas de Conversación ---
    {
        id: "conversation-topics",
        type: "conversation-topic",
        title: "Temas de Conversación",
        description: "Explora estos temas. Aprende el vocabulario clave y luego responde a las preguntas en voz alta o por escrito.",
        topics: [
            {
                name: "Mi Rutina Diaria",
                vocab: ["despertarse", "levantarse", "desayunar", "trabajar", "estudiar", "almorzar", "cenar", "dormir", "cada día", "siempre", "normalmente"],
                questions: [
                    "¿A qué hora te **despiertas** normalmente?",
                    "¿Qué **desayunas** cada mañana?",
                    "¿**Trabajas** o **estudias**? ¿Qué **haces** en tu trabajo/estudios?",
                    "¿Qué **haces** por las noches antes de **dormir**?",
                    "¿Qué **estás haciendo** ahora mismo (mientras respondes estas preguntas)?",
                ]
            },
            {
                name: "Mis Gustos e Intereses",
                vocab: ["gustar", "interesar", "favorito", "leer", "ver", "escuchar", "aprender", "deporte", "pasatiempo", "tiempo libre"],
                questions: [
                    "¿Qué tipo de libros **te gusta** **leer**?",
                    "¿Qué películas o series de televisión **estás viendo** últimamente?",
                    "¿Qué música **escuchas** normalmente? ¿**Estás escuchando** algo ahora?",
                    "¿Qué **deportes practicas** o **te gusta** ver?",
                    "¿Qué **haces** en tu **tiempo libre** los fines de semana?",
                ]
            }
        ]
    },
    // --- Sección: Descripción de Imágenes (Simulado con texto) ---
    {
        id: "image-descriptions",
        type: "image-description",
        title: "Descripción de Imágenes",
        description: "Observa cada imagen (¡imagina que las ves o inserta tus propias imágenes!) y escribe una descripción breve en español, usando el presente simple y presente continuo.",
        questions: [
            {
                image: "imagen1.jpg", // Asegúrate de tener esta imagen en tu carpeta
                prompt: "Imagina una foto de un café muy concurrido. Describe lo que ves que la gente **está haciendo** y cómo **es** el ambiente. ¿Qué **hay** en el café?",
                placeholder: "Ej: En la imagen, muchas personas están hablando y bebiendo café. El ambiente es ruidoso y alegre. Una camarera está sirviendo una mesa y otras personas están leyendo el periódico."
            },
            {
                image: "imagen2.jpg", // Asegúrate de tener esta imagen en tu carpeta
                prompt: "Imagina una foto de una persona en un parque, sentada tranquilamente leyendo un libro. Describe lo que ves que la persona **está haciendo** y qué **hay** en el parque. ¿Cómo **es** el día?",
                placeholder: "Ej: En el parque, una persona está sentada en un banco. Está leyendo un libro y parece relajada. Hay muchos árboles y flores. El sol está brillando y el día es muy bonito."
            }
        ]
    }
];

const quizContainer = document.getElementById('quiz-container');
const conversationContainer = document.getElementById('conversation-container');
const imageDescriptionContainer = document.getElementById('image-description-container');
const submitButton = document.getElementById('submit-quiz');
const resultsContainer = document.getElementById('results');

let globalQuestionIndex = 0; // Para numerar las preguntas de forma global y única

function loadQuiz() {
    quizContainer.innerHTML = ''; // Limpiar contenedores al cargar
    conversationContainer.innerHTML = '';
    imageDescriptionContainer.innerHTML = '';
    globalQuestionIndex = 0; // Resetear índice global al cargar

    exercises.forEach(exercise => {
        if (exercise.type === "multiple-choice" || exercise.type === "text-input") {
            // Ya no creamos los títulos de sección aquí, los HTML tiene sus propios contenedores
            // Y los títulos principales de la sección de gramática ya están en el HTML
            const currentContainer = quizContainer; // Todos los ejercicios de gramática van aquí

            exercise.questions.forEach((q, index) => {
                const questionBlock = document.createElement('div');
                questionBlock.classList.add('question-block');

                const questionText = document.createElement('p');
                questionText.innerHTML = `<strong>${globalQuestionIndex + 1}.</strong> ${q.question}`;
                questionBlock.appendChild(questionText);

                if (exercise.type === "multiple-choice") {
                    const optionsDiv = document.createElement('div');
                    optionsDiv.classList.add('options');
                    q.options.forEach((option, optIndex) => {
                        const label = document.createElement('label');
                        const input = document.createElement('input');
                        input.type = 'radio';
                        input.name = `question-${globalQuestionIndex}`;
                        input.value = optIndex;
                        label.appendChild(input);
                        label.appendChild(document.createTextNode(option.text));
                        optionsDiv.appendChild(label);
                    });
                    questionBlock.appendChild(optionsDiv);
                } else if (exercise.type === "text-input") {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.classList.add('text-input');
                    input.name = `text-question-${globalQuestionIndex}`;
                    input.placeholder = "Escribe tu respuesta aquí...";
                    questionBlock.appendChild(input);
                }
                currentContainer.appendChild(questionBlock);
                globalQuestionIndex++;
            });
        } else if (exercise.type === "conversation-topic") {
            exercise.topics.forEach(topic => {
                const topicBlock = document.createElement('div');
                topicBlock.classList.add('conversation-topic-block');

                const topicTitle = document.createElement('h3');
                topicTitle.textContent = topic.name;
                topicBlock.appendChild(topicTitle);

                const vocabTitle = document.createElement('p');
                vocabTitle.innerHTML = '<strong>Vocabulario clave:</strong>';
                topicBlock.appendChild(vocabTitle);

                const vocabList = document.createElement('ul');
                vocabList.classList.add('vocab-list');
                topic.vocab.forEach(word => {
                    const listItem = document.createElement('li');
                    listItem.textContent = word;
                    vocabList.appendChild(listItem);
                });
                topicBlock.appendChild(vocabList);

                const questionsTitle = document.createElement('p');
                questionsTitle.innerHTML = '<strong>Preguntas para practicar:</strong>';
                topicBlock.appendChild(questionsTitle);

                const questionsList = document.createElement('ol');
                questionsList.classList.add('questions-list');
                topic.questions.forEach(qText => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = qText; // Usamos innerHTML para permitir negritas en la pregunta
                    questionsList.appendChild(listItem);
                });
                topicBlock.appendChild(questionsList);

                conversationContainer.appendChild(topicBlock);
            });
        } else if (exercise.type === "image-description") {
            // Los títulos de la sección ya están en el HTML
            exercise.questions.forEach((q, index) => {
                const imageDescriptionBlock = document.createElement('div');
                imageDescriptionBlock.classList.add('image-description-block');

                const promptText = document.createElement('p');
                promptText.innerHTML = `<strong>${globalQuestionIndex + 1}.</strong> ${q.prompt}`;
                imageDescriptionBlock.appendChild(promptText);

                const img = document.createElement('img');
                img.src = q.image; // Asegúrate de que las imágenes estén en la misma carpeta
                img.alt = `Imagen para descripción ${globalQuestionIndex + 1}`;
                imageDescriptionBlock.appendChild(img);

                const textarea = document.createElement('textarea');
                textarea.name = `image-description-${globalQuestionIndex}`;
                textarea.placeholder = q.placeholder;
                imageDescriptionBlock.appendChild(textarea);

                imageDescriptionContainer.appendChild(imageDescriptionBlock);
                globalQuestionIndex++;
            });
        }
    });
}

function checkAnswers() {
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores
    let correctCount = 0;
    let scoreableQuestionsCount = 0;
    let currentGlobalIndex = 0;

    exercises.forEach(exercise => {
        if (exercise.type === "multiple-choice" || exercise.type === "text-input") {
            exercise.questions.forEach((q, index) => {
                scoreableQuestionsCount++; // Solo contamos las preguntas que se califican automáticamente

                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');

                const questionResultText = document.createElement('p');
                questionResultText.innerHTML = `<strong>${currentGlobalIndex + 1}.</strong> ${q.question}`;
                resultItem.appendChild(questionResultText);

                if (exercise.type === "multiple-choice") {
                    const selectedOption = document.querySelector(`input[name="question-${currentGlobalIndex}"]:checked`);
                    if (selectedOption) {
                        const selectedValue = parseInt(selectedOption.value);
                        const chosenOption = q.options[selectedValue];

                        if (chosenOption.isCorrect) {
                            resultItem.classList.add('correct');
                            questionResultText.innerHTML += `<br>Tu respuesta: **${chosenOption.text}** (¡Correcto!)`;
                            correctCount++;
                        } else {
                            resultItem.classList.add('incorrect');
                            questionResultText.innerHTML += `<br>Tu respuesta: **${chosenOption.text}** (Incorrecto)`;
                            const correctAnswer = q.options.find(opt => opt.isCorrect);
                            questionResultText.innerHTML += `<br>La respuesta correcta era: **${correctAnswer.text}**`;
                            const rationale = document.createElement('p');
                            rationale.classList.add('rationale');
                            rationale.textContent = `Explicación: ${chosenOption.rationale || correctAnswer.rationale}`;
                            resultItem.appendChild(rationale);
                        }
                    } else {
                        resultItem.classList.add('incorrect');
                        questionResultText.innerHTML += `<br>No respondiste esta pregunta.`;
                        const correctAnswer = q.options.find(opt => opt.isCorrect);
                        questionResultText.innerHTML += `<br>La respuesta correcta era: **${correctAnswer.text}**`;
                        const rationale = document.createElement('p');
                        rationale.classList.add('rationale');
                        rationale.textContent = `Explicación: ${correctAnswer.rationale}`;
                        resultItem.appendChild(rationale);
                    }
                } else if (exercise.type === "text-input") {
                    const inputElement = document.querySelector(`input[name="text-question-${currentGlobalIndex}"]`);
                    const userAnswer = inputElement ? inputElement.value.trim().toLowerCase() : '';
                    const correctAnswer = q.correctAnswer.toLowerCase();

                    if (userAnswer === correctAnswer) {
                        resultItem.classList.add('correct');
                        questionResultText.innerHTML += `<br>Tu respuesta: **${inputElement.value}** (¡Correcto!)`;
                        correctCount++;
                    } else {
                        resultItem.classList.add('incorrect');
                        questionResultText.innerHTML += `<br>Tu respuesta: **${inputElement.value || '[Vacío]'}** (Incorrecto)`;
                        questionResultText.innerHTML += `<br>La respuesta correcta era: **${q.correctAnswer}**`;
                        const rationale = document.createElement('p');
                        rationale.classList.add('rationale');
                        rationale.textContent = `Explicación: ${q.rationale}`;
                        resultItem.appendChild(rationale);
                    }
                }
                resultsContainer.appendChild(resultItem);
                currentGlobalIndex++;
            });
        } else if (exercise.type === "image-description") {
            exercise.questions.forEach((q, index) => {
                const textareaElement = document.querySelector(`textarea[name="image-description-${currentGlobalIndex}"]`);
                const userAnswer = textareaElement ? textareaElement.value.trim() : '';

                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.classList.add('image-description-result'); // Clase para diferenciar
                resultItem.classList.add('incorrect'); // Por defecto, hasta que un humano lo evalúe
                resultItem.style.borderColor = '#FFC107'; // Amarillo para indicar revisión manual
                resultItem.style.backgroundColor = '#FFF8E1';


                const questionResultText = document.createElement('p');
                questionResultText.innerHTML = `<strong>${currentGlobalIndex + 1}. Descripción de Imagen (${q.image}):</strong><br>${q.prompt}`;
                resultItem.appendChild(questionResultText);

                const userAnswerDisplay = document.createElement('p');
                userAnswerDisplay.innerHTML = `**Tu descripción:**<br>${userAnswer || '[Ninguna descripción]'}`;
                resultItem.appendChild(userAnswerDisplay);

                const note = document.createElement('p');
                note.classList.add('rationale');
                note.textContent = "Nota: Las descripciones de imagen requieren evaluación manual. ¡Intenta usar el Presente Simple y Presente Continuo!";
                resultItem.appendChild(note);

                resultsContainer.appendChild(resultItem);
                currentGlobalIndex++;
            });
        }
        // Conversation topics don't generate results to check.
    });

    const finalScore = document.createElement('h2');
    finalScore.textContent = `Puntuación Final (Ejercicios de Gramática): ${correctCount} de ${scoreableQuestionsCount}`;
    resultsContainer.prepend(finalScore); // Add score at the top
}

submitButton.addEventListener('click', checkAnswers);

// Load the quiz when the page loads
document.addEventListener('DOMContentLoaded', loadQuiz);