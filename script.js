document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SİNEMATİK AMBİYANS ALTIN VARAK PARÇACIKLARI ---
    const buildAmbientEnvironment = () => {
        const container = document.getElementById('ambientParticles');
        if (!container) return;
        
        const particleCount = 35; // Performans ve akıcılık için optimize sayı
        
        for (let i = 0; i < particleCount; i++) {
            const flake = document.createElement('div');
            flake.classList.add('luxury-flake');
            
            const edgeSize = Math.random() * 4 + 2; // Kusursuz mikro kristaller
            flake.style.width = `${edgeSize}px`;
            flake.style.height = `${edgeSize}px`;
            flake.style.left = `${Math.random() * 100}vw`;
            flake.style.animationDuration = `${Math.random() * 8 + 8}s`;
            flake.style.animationDelay = `${Math.random() * 6}s`;
            
            container.appendChild(flake);
        }
    };

    // --- 2. SEYİR ZEVKİ YÜKSEK GÖRÜNÜR ANİMASYON MOTORU (OBSERVER) ---
    const initializeScrollEngine = () => {
        const targetElements = document.querySelectorAll('.scroll-reveal');
        
        const engineOptions = {
            threshold: 0.1, // Element ekran alanına girer girmez tetiklenir
            rootMargin: '0px 0px -50px 0px'
        };
        
        const runAnimation = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    // Stagger etkisi için grid çocuklarına otomatik gecikme paylaştırır
                    if (entry.target.classList.contains('asymmetric-grid')) {
                        const children = entry.target.querySelectorAll('.collection-card');
                        children.forEach((child, index) => {
                            child.style.transitionDelay = `${index * 0.08}s`;
                            child.classList.add('reveal-active');
                        });
                    }
                    observer.unobserve(entry.target); // Sadece bir kere kusursuz çalışır
                }
            });
        }, engineOptions);

        targetElements.forEach(element => runAnimation.observe(element));
    };

    // --- 3. SEAMLESS MARQUEE REPLICATION ENGINE (KESİNTİSİZ AKIŞ) ---
    const optimizeMarqueeLoop = () => {
        const track = document.getElementById('marqueeTrack');
        if (!track) return;
        
        // Mevcut yorum düğümlerini klonlayarak boşluksuz ekosistem yaratır
        const currentNodes = track.innerHTML;
        track.innerHTML = currentNodes + currentNodes + currentNodes; 
    };

    // --- 4. ASİMETRİK FAQ PANELS (AKORDİYON ETKİLEŞİMİ) ---
    const configureAccordionSystem = () => {
        const headers = document.querySelectorAll('.faq-headline');
        
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const currentNode = header.parentElement;
                const isOpened = currentNode.classList.contains('panel-active');
                
                // Diğer açık panelleri asilce kapatır
                document.querySelectorAll('.faq-node').forEach(node => {
                    node.classList.remove('panel-active');
                    node.querySelector('i').className = 'fas fa-plus';
                });
                
                if (!isOpened) {
                    currentNode.classList.add('panel-active');
                    header.querySelector('i').className = 'fas fa-minus';
                }
            });
        });
    };

    // Sistemi Ateşle
    buildAmbientEnvironment();
    optimizeMarqueeLoop();
    initializeScrollEngine();
    configureAccordionSystem();
});