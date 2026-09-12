(() => {
  const html = document.documentElement;
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const I18N = {"en":{"meta.description":"Atharv Patil — M.Sc. Data Science student working across machine learning, computer vision, generative AI, real-time systems and time-series modelling.","head.title":"Atharv Patil — Data Science & AI","meta.ogTitle":"Atharv Patil — Data Science & AI","meta.ogDescription":"Computer Vision, Generative AI, real-time systems and data-driven solutions.","nav.primaryAria":"Primary navigation","nav.brandAria":"Atharv Patil home","nav.mobileAria":"Open navigation","nav.about":"About","nav.experience":"Experience","nav.projects":"Projects","nav.skills":"Skills","nav.education":"Education","nav.contact":"Contact","theme.aria":"Switch theme","theme.label":"Dark","hero.status":"<i></i> Open to Werkstudent &amp; internship opportunities","hero.relocation":"Open to relocation","hero.eyebrow":"M.Sc. Data Science · TU Braunschweig","hero.title":"From complex problems to <span>efficient, robust solutions.</span>","hero.lead":"I build what works, test what matters, and push beyond the obvious.","hero.note":"From constrained fixes to systems with room to scale.","hero.workCta":"See selected work <span aria-hidden=\"true\">↓</span>","hero.cvCta":"View CV ↗","hero.factsAria":"Selected results","hero.fact1":"trigger latency","hero.fact2":"LPIPS benchmark","hero.fact3":"mAP@0.5","hero.fact4":"years of industry work","method.head":"HOW I WORK","method.understand.name":"Understand","method.experiment.name":"Experiment","method.measure.name":"Measure","method.deliver.name":"Deliver","method.understand.text":"Define the problem before reaching for the model.","method.experiment.text":"Compare methods, not assumptions.","method.measure.text":"Validate with metrics that answer the real question.","method.deliver.text":"Make the result reproducible and usable.","orb.data":"DATA","orb.models":"MODELS","orb.systems":"SYSTEMS","orb.impact":"IMPACT","about.kicker":"ABOUT","about.title":"Adaptive by method.","about.p1":"My work spans <strong>industrial AI, biomedical signal processing, computer vision, generative AI, time-series modelling, data engineering and IT systems</strong>.","about.manifesto":"Constraints sharpen the solution. Strong foundations give it room to scale.","about.p2":"The domain changes. The standard does not. I start with the real constraint, build a strong baseline, compare alternatives, and scale the solution further when data, compute and engineering runway allow it.","about.p3":"That lets me work under hard constraints and also push further when the setup is strong: from a noisy respiratory signal to a low-latency trigger, from scarce industrial defect data to synthetic examples, or from a large flight dataset to a memory-efficient prediction pipeline.","profile.subtitle":"M.Sc. Data Science · Germany","profile.university.label":"University","profile.location.label":"Current location","profile.languages.label":"Languages","profile.mobility.label":"Mobility","profile.university.value":"TU Braunschweig","profile.location.value":"Chemnitz ","profile.languages.value":"English C1 · German B1*","profile.mobility.value":"Open to relocation","profile.fine":"* German B1, in progress.","principle.understand.name":"Understand","principle.compare.name":"Compare","principle.measure.name":"Measure","principle.adapt.name":"Adapt","principle.understand.text":"Define the problem before reaching for the model.","principle.compare.text":"Benchmark alternatives and expose trade-offs.","principle.measure.text":"Validate with metrics that answer the real question.","principle.adapt.text":"Learn quickly and change course when evidence says to.","now.label":"NOW","learning.label":"LEARNING","looking.label":"LOOKING FOR","now.text":"Building synthetic-data and computer-vision workflows for industrial inspection.","learning.text":"Deepening MLOps, deployment and scalable ML practice.","looking.text":"Werkstudent and internship opportunities where rigorous problem solving matters.","exp.kicker":"EXPERIENCE","exp.title":"Different domains. Same standard.","exp1.meta":"Jun 2026 — Present<br>Chemnitz, Germany","exp1.companyArea":"Prüftechnik & Automation","exp1.roleArea":"Generative AI & Computer Vision · HiWi","exp1.problem":"Industrial defect data is scarce precisely where a detector needs it most.","exp1.approach":"I build synthetic defect-generation and evaluation workflows: controlled compositing and TPS warping for varied defects, diffusion-based edits where realism matters, LoRA fine-tuning for precise changes, and PatchCore to test whether synthetic fidelity actually translates into detectability.","exp2.meta":"Jan 2024 — Jan 2026<br>Braunschweig, Germany","exp2.companyArea":"Biomedical Engineering","exp2.roleArea":"Biomedical Signal Processing & Data Science · Werkstudent","exp2.problem":"A premature baby's respiratory signal is faint and noisy, while the trigger has milliseconds to decide.","exp2.approach":"I developed a high-frequency respiratory signal-processing pipeline using Savitzky–Golay filtering, adaptive variance-based normalization and slope-based phase detection. A hybrid state-machine controller with fail-safe fallback logic handled apneas and irregular signals; Azure ML/HyperDrive supported parameter exploration, while a PyQtGraph/Qt dashboard enabled real-time validation against offline ground truth.","exp3.meta":"Mar 2024 — Aug 2026<br>Braunschweig, Germany","exp3.companyArea":"Institut für Philosophie","exp3.roleArea":"IT-HiWi & DV-Koordinator","exp3.problem":"The institute depended on infrastructure that had to remain dependable across servers, hardware, software and users.","exp3.approach":"I administered an Ubuntu file server and Samba permissions, managed hardware/software procurement, implemented university security requirements, supported staff, documented systems and processes, and helped rebuild and transfer the institute server to the central GITZ environment.","exp1.result1":"best LPIPS","exp1.result2":"variants / sample","exp1.result3":"parameters updated","exp2.result1":"detection latency","exp2.result2":"precision","exp2.result3":"less mismatch","exp2.voluntaryLabel":"EARLIER ROLE · VOLUNTARY","exp2.voluntaryMeta":"Nov 2023 — Dec 2023","exp2.voluntaryRole":"Biomedical Signal Processing · Voluntary HiWi","exp2.voluntaryText":"Explored real-time respiratory-signal monitoring concepts for neonatal ventilation, including early filtering, peak detection and preparation of respiratory data for later evaluation.","exp3.result1":"downtime reduction","exp3.result2":"desktop/laptop systems","exp3.result3":"server migration","signal.replay":"Replay","signal.svg.breath":"breath","signal.svg.detect":"detect-only","signal.svg.fallback":"std-routine + fallback","signal.legend.detect":"<i class=\"red\"></i>detect-only","signal.legend.fallback":"<i class=\"green\"></i>std-routine + fallback","signal.legend.signal":"<i class=\"teal\"></i>respiratory signal","signal.caption":"Schematic reconstruction for the portfolio; not real patient data.","quote1.kicker":"REFERENCE · EUGEN KOCH","quote1.text":"“Outstanding understanding of his field … exceptional diligence, precision, foresight and independence.”","quote1.footer":"Dr.-Ing. Eugen Koch · Founder & CEO · Ingenieurbüro Dr.-Ing. Eugen Koch","quote2.kicker":"ARBEITSZEUGNIS · TU BRAUNSCHWEIG","quote2.text":"“Stets überaus zuverlässig, vorausschauend und sorgfältig … sehr hohe Effizienz und Umsicht.”","quote2.footer":"Prof. Dr. Hans-Christoph Schmidt am Busch · Managing Director · Institut für Philosophie, TU Braunschweig","projects.kicker":"SELECTED WORK","projects.title":"Projects with a question behind them.","projects.intro":"A compact selection of work that shows how I think across different problem types. Real outputs can be added later where sharing them is appropriate.","projects.filterAria":"Project categories","projects.all":"All","projects.vision":"Computer Vision","projects.ml":"ML / Data","projects.timeseries":"Time Series","projects.clear":"Clear","project1.visual":"YOLOv8 · REAL-TIME INFERENCE","project1.type":"Deep Learning","project1.title":"Real-Time Traffic Object Detection","project1.desc":"Fine-tuned YOLOv8n on Pascal VOC and integrated it into a live webcam pipeline. Alongside mAP@0.5 = 0.836 and mAP@0.5:0.95 = 0.631, the pipeline exposed bounding boxes, confidence scores and FPS to test practical inference behavior.","project1.result":"mAP@0.5 · 20–50 FPS","project2.visual":"FER+ · LABEL QUALITY","project2.type":"Deep Learning","project2.title":"Facial Emotion Recognition","project2.desc":"Compared MLP and CNN models on FER-2013 and quantified the effect of better label quality with FER+. The study covered model size, regularization, learning-rate schedules and Top-1/Top-2/Top-3 evaluation.","project2.result":"MLP improvement from labels","project3.visual":"AIRLINE NETWORK · TIME","project3.type":"Data Engineering + Time Series","project3.title":"Predictive Modeling for Airline Delays","project3.desc":"Built a memory-efficient ETL pipeline for US BTS data, used stratified sampling, engineered weather-based features and surfaced NAS delay predictions in Streamlit. The emphasis was on controlling memory peaks during large-scale processing.","project3.result":"less memory in ETL","project4.visual":"WALK-FORWARD · MT5","project4.type":"Quant / ML","project4.title":"Financial Time-Series Forecasting & MT5 Trading System","project4.desc":"Random Forest–based directional modelling using MT5 historical data, automated tsfresh features, Azure ML tuning/tracking, walk-forward validation and risk-aware execution logic. The goal was to reduce look-ahead bias and test strategy behavior under more realistic conditions.","project4.result":"reduce false positives while validating strategy viability","project5.visual":"REDDIT · SENTIMENT","project5.type":"NLP / Social Data","project5.title":"AI Job Anxiety: Reddit Sentiment Analysis","project5.desc":"Analyzed public Reddit discussions from January to September 2025 about AI-driven job anxiety to study sentiment, emotional tone, job sectors, technologies and temporal trends.","project5.result":"data collection → NLP → visualization","project6.visual":"SYNTHETIC DATA · INDUSTRIAL AI","project6.type":"Fraunhofer research","project6.title":"Synthetic Defect Generation","project6.desc":"Compared three synthesis methods across six metal finishes and generated controlled industrial defect variants. Zone-based compositing, TPS warping and LoRA fine-tuning were coupled with a PatchCore evaluation loop to examine both visual quality and downstream detectability.","project6.result":"LPIPS · best benchmark across six finishes","project1.car":"car","project1.bus":"bus","project1.bike":"bike","project4.details":"What is inside","project4.li1":"Multiple Buy/Sell notebooks for controlled experiments.","project4.li2":"Time-Series Cross-Validation and Walk-Forward Validation to reduce look-ahead bias.","project4.li3":"Technical features including RSI, EMA, MACD and rolling statistics.","project4.li4":"Historical backtesting and adaptive hedging across EUR/USD, USD/CHF and USD/JPY workflows.","project4.li5":"MT5 execution with break-even and early-stopping logic.","project4.repo":"View repository ↗","project5.repo":"View repository ↗","project6.real":"REAL","project6.synthetic":"SYNTHETIC","skills.kicker":"SKILLS","skills.title":"What I reach for.","skills.intro":"Click selected skills to see where they are used. The stack follows the problem, not the other way around.","skills.programming":"Programming & data","skills.ml":"ML & AI","skills.vision":"Computer vision","skills.genai":"Generative AI","skills.cloud":"Cloud & systems","skills.visualization":"Visualization & delivery","education.kicker":"EDUCATION","education.title":"Foundations that support the work.","education.master.status":"Expected","education.bachelor.status":"Completed","education.master.institution":"\n              Technische Universität Braunschweig\n              <span>· Germany</span>\n","education.bachelor.institution":"\n              Vidyalankar Institute of Technology\n              <span>· University of Mumbai</span>\n","education.master.gradeLabel":"German Grade","education.bachelor.gradeLabel":"CGPA","education.bachelor.gradeApprox":"≈ German Grade 1.6","education.certKicker":"CERTIFICATIONS","academic.1":"Ethics & Epistemology","academic.2":"Medical Methodology Course","academic.3":"Fundamentals of Computational Methods & Social Media Data Analysis with R","academic.4":"The Mathematics of Data Science","cert.1":"Introduction to Generative AI · Google","cert.2":"Introduction to LLMs · Google","cert.3":"Managing Big Data with MySQL · Duke University / Coursera","cert.4":"Python for Data Analysis, Data Science & ML · Udemy","cert.5":"Power BI — Data Analytics Essentials · Udemy","contact.kicker":"06 · CONTACT","contact.title":"Let's solve something useful.","contact.text":"Interested in practical ML, computer vision, applied AI or data-driven systems? I'm open to Werkstudent and internship opportunities and open to relocation.","contact.email":"Email me","contact.linkedin":"LinkedIn ↗","contact.github":"GitHub ↗","contact.cv":"CV ↗","footer.logoAria":"Back to top","footer.license":"MIT Licensed Code","footer.copyright":"Copyright & Usage","education.master.date":"Apr 2023 — Sept 2027","education.bachelor.date":"Jun 2018 — May 2022","project1.date":"Oct — Nov 2025","project2.date":"Jan — Mar 2026","project3.date":"Oct — Dec 2025","project4.date":"Apr — Dec 2024","project5.date":"Jan — Sep 2025","project6.date":"2026 —","project4.resultStrong":"Precision-focused","project5.resultStrong":"End-to-end","skill.vision.segmentation":"Segmentation","skill.vision.fft":"FFT / Spectral Analysis","edu.chip1":"ML & Deep Learning","edu.chip2":"Statistical Data Analysis","edu.chip3":"Optimization","edu.chip4":"Numerical Methods","edu.chip5":"Data Analysis","edu.chip6":"Programming","edu.chip7":"Software Engineering","signal.chartAria":"Synthetic comparison of respiratory signal and trigger strategies.","method.compare.name":"Compare","method.adapt.name":"Adapt","method.compare.text":"Benchmark alternatives and expose trade-offs.","method.adapt.text":"Learn quickly and change course when the evidence says to.","project1.fact1":"mAP@0.5:0.95 = 0.631; classes included car, person, bus, bicycle and motorbike.","project1.fact2":"1.6 ms/frame on a Tesla T4; 20–50 FPS on consumer hardware with a CPU fallback.","project1.fact3":"Batch inference and robust error handling for larger datasets.","project2.fact1":"CNN: 68.7% Top-1 with 1.32M parameters; MLP: 51.8% with 7.52M.","project2.fact2":"MixUp, class-weighted loss, BatchNorm, Dropout, label smoothing and weight decay.","project2.fact3":"OneCycleLR or cosine annealing plus Top-1/2/3 evaluation.","project3.fact1":"US BTS flight data with stratified sampling for controlled processing.","project3.fact2":"Weather features for NAS delay prediction.","project3.fact3":"Streamlit output for predictions and key findings.","project5.fact1":"Text processing with regex, datetime and JSON.","project5.fact2":"Sentiment with NLTK, TextBlob and VADER; analysis of sectors, technologies and temporal patterns.","project5.fact3":"Reproducible Quarto/Jupyter workflow with visualizations and wordclouds.","project6.fact1":"20+ variants per sample through zone-based compositing and TPS warping.","project6.fact2":"LoRA fine-tuning of Stable Diffusion with only 0.5% of parameters updated.","project6.fact3":"PatchCore evaluation loop to test whether visual quality improves defect detection.","project1.li1":"30 epochs on Pascal VOC, followed by webcam inference with bounding boxes, confidence scores and FPS display.","project1.li2":"mAP@0.5 = 0.836 and mAP@0.5:0.95 = 0.631; traffic-relevant classes included car, person, bus, bicycle and motorbike.","project1.li3":"1.6 ms/frame on a Tesla T4; 20–50 FPS on consumer hardware with a stable CPU fallback.","project1.li4":"Batch inference and robust error handling for larger datasets.","project2.li1":"FER-2013+ with cleaned labels and comparison of MLP, ResMLP and CNN architectures.","project2.li2":"CNN: 68.7% top-1 accuracy with 1.32M parameters; MLP: 51.8% with 7.52M parameters.","project2.li3":"MixUp, class-weighted loss, BatchNorm, Dropout, label smoothing and weight decay.","project2.li4":"OneCycleLR or cosine annealing plus Top-1/Top-2/Top-3 evaluation.","project3.li1":"US BTS flight-data ETL optimized to control memory peaks and prevent system crashes.","project3.li2":"Stratified sampling to keep large-scale processing manageable.","project3.li3":"Weather-based features for NAS delay prediction.","project3.li4":"Streamlit dashboard for delay predictions and key findings.","project5.li1":"Public Reddit data from January to September 2025 on AI-driven job anxiety and automation.","project5.li2":"Text processing with regex/datetime/JSON plus sentiment analysis using NLTK, TextBlob and VADER.","project5.li3":"Analysis of emotional tone, job sectors, technologies and temporal trends.","project5.li4":"Reproducible Quarto/Jupyter workflow with Python, visualization and wordcloud outputs.","project6.li1":"Benchmark of three synthesis methods across six metal finishes.","project6.li2":"Zone-based compositing to remove blending artifacts and TPS warping for 20+ variants per sample.","project6.li3":"LoRA fine-tuning of Stable Diffusion with only 0.5% of parameters updated.","project6.li4":"PatchCore evaluation loop to measure the relationship between visual fidelity and downstream detectability.","project.details":"What's included?","exp1.date":"Jun 2026 — Present","exp1.location":"Chemnitz, Germany","exp2.date":"Jan 2024 — Jan 2026","exp2.location":"Braunschweig, Germany","exp3.date":"Mar 2024 — Aug 2026","exp3.location":"Braunschweig, Germany"},"de":{"meta.description":"Atharv Patil — M.Sc.-Student der Data Science mit Schwerpunkt auf Machine Learning, Computer Vision, generativer KI, Echtzeitsystemen und Zeitreihenmodellierung.","head.title":"Atharv Patil — Data Science & KI","meta.ogTitle":"Atharv Patil — Data Science & KI","meta.ogDescription":"Computer Vision, generative KI, Echtzeitsysteme und datengetriebene Lösungen.","nav.primaryAria":"Hauptnavigation","nav.brandAria":"Atharv Patil Startseite","nav.mobileAria":"Navigation öffnen","nav.about":"Über mich","nav.experience":"Erfahrung","nav.projects":"Projekte","nav.skills":"Skills","nav.education":"Ausbildung","nav.contact":"Kontakt","theme.aria":"Zu hellem Design wechseln","theme.label":"Dunkel","hero.status":"<i></i> Offen für Werkstudentenstellen & Praktika","hero.relocation":"Offen für einen Standortwechsel","hero.eyebrow":"M.Sc. Data Science · TU Braunschweig","hero.title":"Ich entwickle <span>funktionierende Lösungen</span> für komplexe Probleme.","hero.lead":"Ich baue, was funktioniert, teste, was zählt, und gehe über das Offensichtliche hinaus.","hero.note":"Von gezielten Lösungen unter Einschränkungen bis zu Systemen mit Raum zum Skalieren.","hero.workCta":"Ausgewählte Projekte <span aria-hidden=\"true\">↓</span>","hero.cvCta":"CV ansehen ↗","hero.factsAria":"Ausgewählte Ergebnisse","hero.fact1":"Trigger-Latenz","hero.fact2":"LPIPS-Benchmark","hero.fact3":"mAP@0.5","hero.fact4":"Jahre Industrieerfahrung","method.head":"WIE ICH ARBEITE","method.understand.name":"Verstehen","method.experiment.name":"Experimentieren","method.measure.name":"Messen","method.deliver.name":"Umsetzen","method.understand.text":"Die entscheidende Einschränkung identifizieren.","method.experiment.text":"Methoden vergleichen, nicht Annahmen.","method.measure.text":"Mit ehrlichen Baselines und sinnvollen Metriken messen.","method.deliver.text":"Das Ergebnis reproduzierbar und nutzbar machen.","orb.data":"DATEN","orb.models":"MODELLE","orb.systems":"SYSTEME","orb.impact":"WIRKUNG","about.kicker":"ÜBER MICH","about.title":"Adaptiv durch Methode.","about.p1":"Meine Arbeit umfasst <strong>industrielle KI, biomedizinische Signalverarbeitung, Computer Vision, generative KI, Zeitreihenmodellierung, Data Engineering und IT-Systeme</strong>.","about.manifesto":"Gute Einschränkungen schärfen die Lösung. Starke Grundlagen geben ihr Raum zu skalieren.","about.p2":"Die Domäne ändert sich. Meine Vorgehensweise nicht. Ich beginne mit der realen Einschränkung, baue eine Baseline, teste Alternativen und knüpfe die Metrik an die tatsächliche Entscheidung, die das System treffen soll.","about.p3":"Diese Denkweise ermöglicht mir den Wechsel von einem verrauschten Atemsignal zu einem Trigger mit niedriger Latenz, von knappen industriellen Defektdaten zu synthetischen Beispielen oder von einem großen Flugdatensatz zu einer speichereffizienten Prognosepipeline.","profile.subtitle":"M.Sc. Data Science · Deutschland","profile.university.label":"Universität","profile.location.label":"Aktueller Standort","profile.languages.label":"Sprachen","profile.mobility.label":"Mobilität","profile.university.value":"TU Braunschweig","profile.location.value":"Chemnitz","profile.languages.value":"Englisch C1 · Deutsch B1*","profile.mobility.value":"Offen für einen Standortwechsel","profile.fine":"* Deutsch B1, derzeit in Arbeit.","principle.understand.name":"Verstehen","principle.compare.name":"Vergleichen","principle.measure.name":"Messen","principle.adapt.name":"Anpassen","principle.understand.text":"Das Problem definieren, bevor das Modell gewählt wird.","principle.compare.text":"Alternativen benchmarken und Zielkonflikte sichtbar machen.","principle.measure.text":"Mit Metriken validieren, die die eigentliche Frage beantworten.","principle.adapt.text":"Schnell lernen und den Kurs ändern, wenn die Evidenz es verlangt.","now.label":"JETZT","learning.label":"LERNEN","looking.label":"GESUCHT","now.text":"Entwicklung von Workflows für synthetische Daten und Computer Vision in der industriellen Inspektion.","learning.text":"Vertiefung von MLOps, Deployment und skalierbarer ML-Praxis.","looking.text":"Werkstudenten- und Praktikumsmöglichkeiten, bei denen fundiertes Problemlösen gefragt ist.","exp.kicker":"ERFAHRUNG","exp.title":"Unterschiedliche Domänen. Derselbe Anspruch.","exp1.meta":"Jun 2026 — heute<br>Chemnitz, Deutschland","exp1.companyArea":"Prüftechnik & Automation","exp1.roleArea":"Generative KI & Computer Vision · HiWi","exp1.problem":"Industrielle Defektdaten sind gerade dort knapp, wo ein Detektor sie am dringendsten benötigt.","exp1.approach":"Ich entwickle Workflows zur Erzeugung und Bewertung synthetischer Defekte: kontrolliertes Compositing und TPS-Warping für variierte Defekte, diffusionsbasierte Änderungen, wenn Realismus entscheidend ist, LoRA-Fine-Tuning für präzise Veränderungen und PatchCore, um zu prüfen, ob visuelle Qualität tatsächlich die Erkennbarkeit für die nachgelagerte Detektion verbessert.","exp1.result1":"bester LPIPS","exp1.result2":"Varianten / Beispiel","exp1.result3":"aktualisierte Parameter","exp2.meta":"Jan 2024 — Jan 2026<br>Braunschweig, Deutschland","exp2.companyArea":"Biomedizinische Technik","exp2.roleArea":"Biomedizinische Signalverarbeitung & Data Science · Werkstudent","exp2.problem":"Das Atemsignal eines Frühgeborenen ist schwach und verrauscht, während der Trigger in Millisekunden entscheiden muss.","exp2.approach":"Ich entwickelte eine hochfrequente Atemsignal-Pipeline mit Savitzky-Golay-Filterung, adaptiver varianzbasierter Normalisierung und steigungsgestützter Phasenerkennung. Eine hybride Zustandsmaschine mit ausfallsicherer Fallback-Logik behandelte Apnoen und unregelmäßige Signale; Azure ML/HyperDrive unterstützte die Parametersuche, während ein PyQtGraph/Qt-Dashboard die Echtzeitvalidierung gegen Offline-Ground-Truth ermöglichte.","exp2.result1":"Erkennungslatenz","exp2.result2":"Präzision","exp2.result3":"weniger Abweichung","exp2.voluntaryLabel":"FRÜHERE POSITION · FREIWILLIG","exp2.voluntaryMeta":"Nov. 2023 — Dez. 2023","exp2.voluntaryRole":"Biomedical Signal Processing · Freiwillige HiWi-Tätigkeit","exp2.voluntaryText":"Erkundete Konzepte zur Echtzeitüberwachung von Atemsignalen für die neonatale Beatmung, einschließlich erster Ansätze für Filterung, Peak-Detektion und die Vorbereitung von Atemsignaldaten für spätere Auswertungen.","exp3.meta":"Mär 2024 — Aug 2026<br>Braunschweig, Deutschland","exp3.companyArea":"Institut für Philosophie","exp3.roleArea":"IT-HiWi & DV-Koordinator","exp3.problem":"Das Institut war auf Infrastruktur angewiesen, die über Server, Hardware, Software und Nutzer hinweg zuverlässig funktionieren musste.","exp3.approach":"Ich administrierte einen Ubuntu-Dateiserver und Samba-Berechtigungen, betreute Hardware- und Softwarebeschaffung, setzte universitäre Sicherheitsanforderungen um, unterstützte Mitarbeitende, dokumentierte Systeme und Prozesse und half beim Neuaufbau und der Übertragung des Institutsservers in die zentrale GITZ-Umgebung.","exp3.result1":"weniger Ausfallzeit","exp3.result2":"Desktop-/Laptop-Systeme","exp3.result3":"Servermigration","signal.replay":"Wiederholen","signal.svg.breath":"Atmung","signal.svg.detect":"nur Detektion","signal.svg.fallback":"Standardroutine + Fallback","signal.legend.detect":"<i class=\"red\"></i>nur Detektion","signal.legend.fallback":"<i class=\"green\"></i>Standardroutine + Fallback","signal.legend.signal":"<i class=\"teal\"></i>Atemsignal","signal.caption":"Schematische Rekonstruktion für das Portfolio; keine echten Patientendaten.","quote1.kicker":"REFERENZ · EUGEN KOCH","quote1.text":"„Hervorragendes Verständnis seines Fachgebiets … außergewöhnliche Sorgfalt, Präzision, Weitsicht und Selbstständigkeit.“","quote1.footer":"Dr.-Ing. Eugen Koch · Gründer & CEO · Ingenieurbüro Dr.-Ing. Eugen Koch","quote2.kicker":"ARBEITSZEUGNIS · TU BRAUNSCHWEIG","quote2.text":"„Stets überaus zuverlässig, vorausschauend und sorgfältig … sehr hohe Effizienz und Umsicht.“","quote2.footer":"Prof. Dr. Hans-Christoph Schmidt am Busch · Geschäftsführende Leitung · Institut für Philosophie, TU Braunschweig","projects.kicker":"AUSGEWÄHLTE PROJEKTE","projects.title":"Projekte mit einer Frage dahinter.","projects.intro":"Eine kompakte Auswahl von Arbeiten, die zeigt, wie ich unterschiedliche Problemtypen angehe. Reale Ergebnisse können ergänzt werden, sofern eine Veröffentlichung sinnvoll und zulässig ist.","projects.filterAria":"Projektkategorien","projects.all":"Alle","projects.vision":"Computer Vision","projects.ml":"ML / Daten","projects.timeseries":"Zeitreihen","projects.clear":"Zurücksetzen","project1.visual":"YOLOv8 · ECHTZEIT-INFERENZ","project1.type":"Deep Learning","project1.title":"Echtzeit-Erkennung von Verkehrsobjekten","project1.desc":"YOLOv8n auf Pascal VOC feinjustiert und anschließend in eine Live-Webcam-Pipeline integriert, um zu prüfen, ob die Benchmark-Leistung auch in echten Frames Bestand hat.","project1.result":"mAP@0.5 · 20–50 FPS","project1.car":"Auto","project1.bus":"Bus","project1.bike":"Fahrrad","project2.visual":"FER+ · LABELQUALITÄT","project2.type":"Deep Learning","project2.title":"Erkennung von Gesichtsemotionen","project2.desc":"MLP- und CNN-Modelle auf FER-2013 verglichen und quantifiziert, wie stark sich die Leistung durch bessere Labelqualität mit weichen FER+-Labels verändert.","project2.result":"MLP-Verbesserung durch Labels","project3.visual":"FLUGNETZ · ZEIT","project3.type":"Data Engineering + Zeitreihen","project3.title":"Prognose von Flugverspätungen","project3.desc":"Eine speichereffiziente ETL-Pipeline für US-BTS-Daten entwickelt, stratifiziertes Sampling und wetterbasierte Features verwendet und Verspätungsprognosen in Streamlit bereitgestellt.","project3.result":"weniger Speicher in ETL","project4.visual":"WALK-FORWARD · MT5","project4.type":"Quant / ML","project4.title":"Finanzielle Zeitreihenprognose & MT5-Handelssystem","project4.desc":"Richtungsklassifikation mit Random Forest auf historischen MT5-Daten, automatisierten tsfresh-Features, Azure-ML-Tuning/-Tracking, Zeitreihenvalidierung und risikobewusster Ausführungslogik.","project4.result":"Präzisionsfokus","project4.details":"Was ist enthalten?","project4.li1":"Mehrere Buy-/Sell-Notebooks für kontrollierte Experimente.","project4.li2":"Time-Series Cross-Validation und Walk-Forward Validation zur Reduktion von Look-ahead-Bias.","project4.li3":"Technische Features wie RSI, EMA, MACD und rollende Statistiken.","project4.li4":"Historisches Backtesting und adaptives Hedging für EUR/USD-, USD/CHF- und USD/JPY-Workflows.","project4.li5":"MT5-Ausführung mit Break-even- und Early-Stopping-Logik.","project4.repo":"Repository ansehen ↗","project5.visual":"REDDIT · SENTIMENT","project5.type":"NLP / Social Data","project5.title":"AI Job Anxiety: Reddit-Sentimentanalyse","project5.desc":"Öffentliche Reddit-Diskussionen über KI-bedingte Jobangst analysiert, um Sentiment, emotionale Tonalität, wiederkehrende Branchen, Technologien und zeitliche Trends zu untersuchen.","project5.result":"End-to-end","project5.repo":"Repository ansehen ↗","project6.visual":"SYNTHETISCHE DATEN · INDUSTRIELLE KI","project6.type":"Fraunhofer-Forschung","project6.title":"Synthetische Defektgenerierung","project6.desc":"Kontrollierte industrielle Defektvarianten erzeugt, Methoden zur Synthese verglichen und geprüft, ob visuelle Qualität die nachgelagerte Defekterkennung unterstützt.","project6.result":"LPIPS · bester Benchmark über sechs Oberflächen","project6.real":"REAL","project6.synthetic":"SYNTHETISCH","skills.kicker":"SKILLS","skills.title":"Worauf ich zurückgreife.","skills.intro":"Klicke ausgewählte Skills an, um zu sehen, wo sie eingesetzt werden. Der Stack folgt dem Problem, nicht umgekehrt.","skills.programming":"Programmierung & Daten","skills.ml":"ML & KI","skills.vision":"Computer Vision","skills.genai":"Generative KI","skills.cloud":"Cloud & Systeme","skills.visualization":"Visualisierung & Bereitstellung","education.kicker":"AUSBILDUNG","education.title":"Grundlagen für die praktische Arbeit.","education.master.status":"Voraussichtlich","education.bachelor.status":"Abgeschlossen","education.master.institution":"Technische Universität Braunschweig <span>· Deutschland</span>","education.bachelor.institution":"Vidyalankar Institute of Technology <span>· University of Mumbai</span>","education.master.gradeLabel":"Deutsche Note","education.bachelor.gradeLabel":"CGPA","education.bachelor.gradeApprox":"≈ Deutsche Note 1,6","education.certKicker":"ZERTIFIKATE","academic.1":"Ethik & Epistemologie","academic.2":"Medizinischer Methodikkurs","academic.3":"Grundlagen computationaler Methoden & Social-Media-Datenanalyse mit R","academic.4":"Mathematik der Data Science","cert.1":"Introduction to Generative AI · Google","cert.2":"Introduction to LLMs · Google","cert.3":"Managing Big Data with MySQL · Duke University / Coursera","cert.4":"Python for Data Analysis, Data Science & ML · Udemy","cert.5":"Power BI — Data Analytics Essentials · Udemy","contact.kicker":"06 · KONTAKT","contact.title":"Lass uns etwas Sinnvolles lösen.","contact.text":"Interesse an praxisnaher ML, Computer Vision, angewandter KI oder datengetriebenen Systemen? Ich bin offen für Werkstudentenstellen und Praktika sowie für einen Standortwechsel.","contact.email":"E-Mail senden","contact.linkedin":"LinkedIn ↗","contact.github":"GitHub ↗","contact.cv":"CV ↗","footer.logoAria":"Zum Seitenanfang","footer.license":"MIT-lizenzierter Code","footer.copyright":"Urheberrecht & Nutzung","education.master.date":"Apr 2023 — Sept. 2027","education.bachelor.date":"Juni 2018 — Mai 2022","project1.date":"Okt. — Nov. 2025","project2.date":"Jan. — Mär. 2026","project3.date":"Okt. — Dez. 2025","project4.date":"Apr. — Dez. 2024","project5.date":"Jan. — Sept. 2025","project6.date":"2026 —","project4.resultStrong":"Präzisionsfokus","project5.resultStrong":"End-to-end","skill.vision.segmentation":"Segmentierung","skill.vision.fft":"FFT / Spektralanalyse","edu.chip1":"ML & Deep Learning","edu.chip2":"Statistische Datenanalyse","edu.chip3":"Optimierung","edu.chip4":"Numerische Methoden","edu.chip5":"Datenanalyse","edu.chip6":"Programmierung","edu.chip7":"Software Engineering","signal.chartAria":"Schematischer Vergleich des Atemsignals und der Trigger-Strategien.","project1.fact1":"mAP@0.5:0.95 = 0.631; Klassen u. a. Auto, Person, Bus, Fahrrad und Motorrad.","project1.fact2":"1.6 ms/Frame auf Tesla T4; 20–50 FPS auf Consumer-Hardware mit CPU-Fallback.","project1.fact3":"Batch-Inferenz und robuste Fehlerbehandlung für größere Datensätze.","project2.fact1":"CNN: 68.7% Top-1 mit 1.32M Parametern; MLP: 51.8% mit 7.52M.","project2.fact2":"MixUp, class-weighted loss, BatchNorm, Dropout, label smoothing und weight decay.","project2.fact3":"OneCycleLR oder Cosine Annealing plus Top-1/2/3-Evaluation.","project3.fact1":"US-BTS-Flugdaten mit stratifiziertem Sampling für kontrollierbare Verarbeitung.","project3.fact2":"Wetter-Features für NAS Delay Prediction.","project3.fact3":"Streamlit-Ausgabe für Prognosen und zentrale Ergebnisse.","project5.fact1":"Textverarbeitung mit Regex, Datetime und JSON.","project5.fact2":"Sentiment mit NLTK, TextBlob und VADER; Analyse von Branchen, Technologien und zeitlichen Mustern.","project5.fact3":"Reproduzierbarer Quarto/Jupyter-Workflow mit Visualisierungen und Wordclouds.","project6.fact1":"20+ Varianten pro Sample durch Zone-basiertes Compositing und TPS-Warping.","project6.fact2":"LoRA-Fine-Tuning von Stable Diffusion mit nur 0.5% aktualisierten Parametern.","project6.fact3":"PatchCore-Evaluationsloop zur Prüfung, ob visuelle Qualität die Defekterkennung verbessert.","method.compare.name":"Vergleichen","method.adapt.name":"Anpassen","method.compare.text":"Alternativen benchmarken und Zielkonflikte sichtbar machen.","method.adapt.text":"Schnell lernen und den Kurs ändern, wenn die Evidenz es verlangt.","project1.li1":"30 Epochen auf Pascal VOC, anschließend Webcam-Inferenz mit Bounding Boxes, Konfidenzen und FPS-Anzeige.","project1.li2":"mAP@0.5 = 0,836 und mAP@0.5:0,95 = 0,631; relevante Klassen waren u. a. Auto, Person, Bus, Fahrrad und Motorrad.","project1.li3":"1,6 ms/Frame auf Tesla T4; 20–50 FPS auf Consumer-Hardware mit stabilem CPU-Fallback.","project1.li4":"Batch-Inferenz und robustes Fehlerhandling für größere Datensätze.","project2.li1":"FER-2013+ mit bereinigten Labels sowie Vergleich von MLP, ResMLP und CNN-Architekturen.","project2.li2":"CNN: 68,7 % Top-1-Accuracy bei 1,32 Mio. Parametern; MLP: 51,8 % bei 7,52 Mio. Parametern.","project2.li3":"MixUp, Class-Weighted Loss, BatchNorm, Dropout, Label Smoothing und Weight Decay.","project2.li4":"OneCycleLR bzw. Cosine Annealing sowie Top-1/Top-2/Top-3-Auswertung.","project3.li1":"US-BTS-Flugdaten-ETL zur Begrenzung von Speicherspitzen und Vermeidung von Systemabstürzen optimiert.","project3.li2":"Stratifiziertes Sampling, um große Datenmengen beherrschbar zu verarbeiten.","project3.li3":"Wetterbasierte Features zur Prognose von NAS-Flugverspätungen.","project3.li4":"Streamlit-Dashboard für Verspätungsprognosen und zentrale Erkenntnisse.","project5.li1":"Öffentliche Reddit-Daten aus Januar bis September 2025 zu KI-bedingter Jobangst und Automatisierung.","project5.li2":"Textverarbeitung mit Regex/Datetime/JSON sowie Sentimentanalyse mit NLTK, TextBlob und VADER.","project5.li3":"Analyse von emotionaler Tonalität, Jobsektoren, Technologien und zeitlichen Trends.","project5.li4":"Reproduzierbarer Quarto/Jupyter-Workflow mit Python, Visualisierung und Wordcloud-Ausgaben.","project6.li1":"Benchmark von drei Synthetisierungsmethoden über sechs Metalloberflächen.","project6.li2":"Zonenbasiertes Compositing gegen Blending-Artefakte und TPS-Warping für 20+ Varianten pro Beispiel.","project6.li3":"LoRA-Fine-Tuning von Stable Diffusion mit nur 0,5 % aktualisierten Parametern.","project6.li4":"PatchCore-Evaluationsschleife zur Messung des Zusammenhangs zwischen visueller Qualität und nachgelagerter Erkennbarkeit.","project.details":"Was ist enthalten?","exp1.date":"Jun 2026 — heute","exp1.location":"Chemnitz, Deutschland","exp2.date":"Jan 2024 — Jan 2026","exp2.location":"Braunschweig, Deutschland","exp3.date":"Mär 2024 — Aug 2026","exp3.location":"Braunschweig, Deutschland"}};

  // Language: German is the default. The selected language is persisted locally.
  const languageToggle = document.getElementById('languageToggle');
  const langCurrent = languageToggle?.querySelector('.lang-current');
  const langOther = languageToggle?.querySelector('.lang-other');
  const langDivider = languageToggle?.querySelector('.lang-divider');
  const i18nElements = [...document.querySelectorAll('[data-i18n], [data-i18n-html]')];
  const germanDefaults = new Map(i18nElements.map(el => [el, el.dataset.i18nAttr ? el.getAttribute(el.dataset.i18nAttr) : el.innerHTML]));

  let currentLanguage = localStorage.getItem('atharv-language') || 'de';

  // Skill -> work highlighting elements are initialized before language/theme setup.
  const skillButtons = [...document.querySelectorAll('.skill-tag[data-skill]')];
  const skillBar = document.getElementById('skillFilter');
  const skillText = document.getElementById('skillFilterText');
  const clearSkill = document.getElementById('clearSkill');
  let activeSkill = null;

  function setI18nElement(el, language) {
    const key = el.dataset.i18n || el.dataset.i18nHtml;
    if (!key) return;
    const attr = el.dataset.i18nAttr;
    if (language === 'de') {
      if (attr) el.setAttribute(attr, germanDefaults.get(el) ?? '');
      else el.innerHTML = germanDefaults.get(el) ?? el.innerHTML;
      return;
    }
    const value = I18N.en[key];
    if (value === undefined) return;
    if (attr) el.setAttribute(attr, value);
    else el.innerHTML = value;
  }

  function applyLanguage(language, persist = true) {
    currentLanguage = language === 'en' ? 'en' : 'de';
    html.lang = currentLanguage;
    i18nElements.forEach(el => setI18nElement(el, currentLanguage));

    const current = currentLanguage === 'de' ? 'DE' : 'EN';
    const other = currentLanguage === 'de' ? 'EN' : 'DE';
    if (langCurrent) langCurrent.textContent = current;
    if (langOther) langOther.textContent = other;
    langDivider?.setAttribute('aria-hidden', 'true');
    languageToggle?.setAttribute(
      'aria-label',
      currentLanguage === 'de' ? 'Auf Englisch wechseln' : 'Zu Deutsch wechseln'
    );
    languageToggle?.setAttribute('title', currentLanguage === 'de' ? 'English' : 'Deutsch');

    // Dynamic theme text depends on both language and the active theme.
    applyTheme(html.dataset.theme || 'dark', false);

    // Refresh derived text for the active skill filter.
    if (activeSkill) {
      const button = skillButtons.find(btn => btn.dataset.skill === activeSkill);
      if (button) updateSkillFilterText(button.textContent.trim());
    }

    if (persist) localStorage.setItem('atharv-language', currentLanguage);
  }

  // Theme: dark is the default regardless of the operating-system preference.
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle?.querySelector('.theme-icon');
  const themeLabel = themeToggle?.querySelector('.theme-label');
  function applyTheme(theme, persist = true) {
    const activeTheme = theme === 'light' ? 'light' : 'dark';
    html.dataset.theme = activeTheme;
    const light = activeTheme === 'light';
    if (themeIcon) themeIcon.textContent = light ? '☀' : '☾';
    if (themeLabel) themeLabel.textContent = currentLanguage === 'de' ? (light ? 'Hell' : 'Dunkel') : (light ? 'Light' : 'Dark');
    themeToggle?.setAttribute(
      'aria-label',
      currentLanguage === 'de'
        ? (light ? 'Zu dunklem Design wechseln' : 'Zu hellem Design wechseln')
        : (light ? 'Switch to dark theme' : 'Switch to light theme')
    );
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f4f6f2' : '#070b14');
    if (persist) localStorage.setItem('atharv-theme', activeTheme);
  }

  // Apply persisted choices. Defaults: German + dark.
  const savedTheme = localStorage.getItem('atharv-theme');
  const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
  applyTheme(initialTheme, false);
  applyLanguage(currentLanguage, false);

  themeToggle?.addEventListener('click', () => {
    applyTheme(html.dataset.theme === 'light' ? 'dark' : 'light');
  });

  languageToggle?.addEventListener('click', () => {
    applyLanguage(currentLanguage === 'de' ? 'en' : 'de');
    navLinks?.classList.remove('open');
  });

  // Mobile menu
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.getElementById('navLinks');
  mobileMenu?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    mobileMenu.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-label', open
      ? (currentLanguage === 'de' ? 'Navigation schließen' : 'Close navigation')
      : (currentLanguage === 'de' ? 'Navigation öffnen' : 'Open navigation'));
  });
  navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Reading progress
  const progress = document.getElementById('readingProgress');
  function updateProgress() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    if (progress) progress.style.width = `${max > 0 ? (doc.scrollTop / max) * 100 : 0}%`;
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // Reveal animation
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Scrollspy
  const sections = [...document.querySelectorAll('main section[id]')];
  const navItems = [...document.querySelectorAll('.nav-links a[data-section]')];
  const navMap = new Map(navItems.map(a => [a.dataset.section, a]));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navItems.forEach(a => a.classList.remove('active'));
      navMap.get(entry.target.id)?.classList.add('active');
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => spy.observe(section));

  // Project category filter
  const filters = [...document.querySelectorAll('.filter')];
  const cards = [...document.querySelectorAll('.project-card')];
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const categories = (card.dataset.category || '').split(/\s+/);
      card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
    });
  }));

  function resetSkill() {
    activeSkill = null;
    cards.forEach(card => card.classList.remove('dimmed', 'matched'));
    document.querySelectorAll('.timeline-item[data-tech]').forEach(item => item.classList.remove('dimmed', 'matched'));
    skillButtons.forEach(btn => {
      btn.classList.remove('selected');
      btn.setAttribute('aria-pressed', 'false');
    });
    skillBar?.classList.remove('on');
    if (skillText) skillText.textContent = '';
  }

  function updateSkillFilterText(label) {
    const allWork = [...cards, ...document.querySelectorAll('.timeline-item[data-tech]')];
    let count = 0;
    allWork.forEach(item => {
      if ((item.dataset.tech || '').split(/\s+/).includes(activeSkill)) count += 1;
    });
    if (!skillText) return;
    skillText.textContent = currentLanguage === 'de'
      ? `${label} · in ${count} Bereich${count === 1 ? '' : 'en'} hervorgehoben`
      : `${label} · highlighted in ${count} place${count === 1 ? '' : 's'}`;
  }

  function applySkill(skill, label) {
    if (activeSkill === skill) { resetSkill(); return; }
    activeSkill = skill;
    const allWork = [...cards, ...document.querySelectorAll('.timeline-item[data-tech]')];
    let count = 0;
    allWork.forEach(item => {
      const hit = (item.dataset.tech || '').split(/\s+/).includes(skill);
      item.classList.toggle('dimmed', !hit);
      item.classList.toggle('matched', hit);
      if (hit) count += 1;
    });
    skillButtons.forEach(btn => {
      const selected = btn.dataset.skill === skill;
      btn.classList.toggle('selected', selected);
      btn.setAttribute('aria-pressed', String(selected));
    });
    if (skillText) skillText.textContent = currentLanguage === 'de'
      ? `${label} · in ${count} Bereich${count === 1 ? '' : 'en'} hervorgehoben`
      : `${label} · highlighted in ${count} place${count === 1 ? '' : 's'}`;
    skillBar?.classList.add('on');
    const firstMatch = allWork.find(item => item.classList.contains('matched'));
    if (firstMatch) firstMatch.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
  }

  skillButtons.forEach(btn => {
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', () => applySkill(btn.dataset.skill, btn.textContent.trim()));
  });
  clearSkill?.addEventListener('click', resetSkill);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') resetSkill(); });

  // Ventilator schematic replay: the green fallback line stays meaningful during the prolonged phase.
  const ventReplay = document.getElementById('ventReplay');
  const fallback = document.getElementById('fallbackTrace');
  const detect = document.getElementById('detectTrace');
  let dashTimer = null;
  ventReplay?.addEventListener('click', () => {
    if (dashTimer) cancelAnimationFrame(dashTimer);
    if (!fallback || !detect) return;
    const start = performance.now();
    const duration = reduceMotion ? 1 : 2300;
    const greenLength = fallback.getTotalLength?.() || 1800;
    const redLength = detect.getTotalLength?.() || 1800;
    fallback.style.strokeDasharray = `${greenLength}`;
    detect.style.strokeDasharray = `${redLength}`;
    fallback.style.strokeDashoffset = `${greenLength}`;
    detect.style.strokeDashoffset = `${redLength}`;
    const step = now => {
      const t = Math.min((now - start) / duration, 1);
      fallback.style.strokeDashoffset = `${greenLength * (1 - t)}`;
      detect.style.strokeDashoffset = `${redLength * (1 - t)}`;
      if (t < 1) dashTimer = requestAnimationFrame(step);
      else { fallback.style.strokeDasharray = 'none'; detect.style.strokeDasharray = 'none'; }
    };
    requestAnimationFrame(step);
  });
})();
