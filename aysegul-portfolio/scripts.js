// ========================================
// AYŞEGÜL KAYA - PORTFOLIO
// Modern JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // ========================================
    // Dark/Light Theme Toggle
    // ========================================
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme on load
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
    
    function updateThemeIcon(theme) {
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (theme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }
    
    // ========================================
    // Language Toggle
    // ========================================
    const langToggle = document.getElementById('langToggle');
    const savedLang = localStorage.getItem('lang') || 'tr';
    
    const translations = {
        tr: {
            nav_about: "Hakkımda",
            nav_education: "Eğitim",
            nav_experience: "Deneyim",
            nav_projects: "Projeler",
            nav_publications: "Yayınlar",
            nav_contact: "İletişim",
            hero_greeting: "Merhaba, ben",
            hero_title: "Backend Developer & Bilgisayar Mühendisliği Öğrencisi",
            hero_desc: "Python, Flask, React ve makine öğrenmesi teknolojileriyle çözümler geliştiriyorum.",
            hero_btn_projects: "Projelerimi Gör",
            hero_btn_contact: "İletişime Geç",
            scroll_down: "Aşağı Kaydır",
            section_about: "Hakkımda",
            about_text_1: "Selçuk Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Backend geliştirme, veri analizi ve makine öğrenmesi alanlarında projeler geliştiriyorum.",
            about_text_2: "Huawei Student Developers topluluğunda Başkan Yardımcısı olarak görev aldım. NASA Space Apps Challenge ve TEKNOFEST gibi prestijli yarışmalarda yer aldım.",
            location: "Antalya / Konya, Türkiye",
            language_level: "İngilizce B1+",
            technical_skills: "Teknik Yetenekler",
            section_education: "Eğitim",
            edu_uni_date: "2022 – 2026 (beklenen)",
            edu_uni_name: "Selçuk Üniversitesi",
            location_konya: "Konya, Türkiye",
            edu_uni_dept: "Bilgisayar Mühendisliği",
            edu_uni_project: "<strong>Bitirme Projesi:</strong> Sentinel-2 verileriyle dinamik tarla takip sistemi (Python, ML)",
            edu_hs_name: "Hacı Malike Mehmet Bileydi Anadolu Lisesi",
            location_antalya: "Antalya, Türkiye",
            section_experience: "Deneyim",
            exp_huawei_role: "Başkan Yardımcısı",
            exp_huawei_desc: "Etkinlik organizasyonu, geliştirici topluluğu yönetimi ve teknik ekip koordinasyonu.",
            exp_intern: "Staj",
            exp_intern_role: "Stajyer",
            exp_akdere_desc: "Delta ISPSoft ile PLC programlama, Ladder diyagram tasarımı ve DOPSoft ile HMI arayüz geliştirme. Endüstriyel otomasyon mantığı ve donanım-yazılım entegrasyonu.",
            section_projects: "Projeler",
            proj_status_ongoing: "Devam Ediyor",
            proj_1_title: "Tarımsal Dinamik İzleme Sistemi",
            proj_1_role: "Bitirme Projesi",
            proj_1_desc: "Uydu görüntüleriyle tarla sahiplerine izleme & durum değerlendirme sunan sistem. Web/mobil arayüz planlanıyor.",
            proj_2_desc: "MERRA-2 veri seti üzerinde eksik veri tamamlama, outlier temizleme ve veri standardizasyonu. LLM tabanlı öneri sistemi ekleniyor.",
            proj_3_title: "Kampüs 2. El Uygulaması",
            proj_3_desc: "Kampüs içi ikinci el alışveriş platformu. Backend API tasarımı, kullanıcı yönetimi ve ürün listeleme servisleri.",
            proj_4_title: "Akıllı Çamaşırhane Sistemi",
            proj_4_role: "Full Stack - Girişimcilik Projesi",
            proj_4_desc: "Mobil rezervasyon, su tüketimi optimizasyonu ve otonom yönetim konsepti.",
            proj_5_title: "TEKNOFEST 2024 - Uçan Araba Simülasyonu",
            proj_5_role: "Takım Üyesi",
            proj_5_desc: "Acil durumlar için pil optimizasyon algoritmaları, rota değişikliği ve en kısa yol hesaplama. GNSS ve radar verileri için gürültü filtreleme.",
            proj_6_title: "Kişiye Özel Diyet Planı",
            proj_6_desc: "Form inputlarına göre kişisel öneri üreten web uygulaması.",
            section_publications: "Yayınlar",
            pub_date: "28 Kasım 2025",
            pub_abstract: "MERRA-2 veri seti üzerinde yeni indeksler oluşturuldu. Random Forest + Ensemble yöntemleriyle tahmin modelleri geliştirildi. Sonuçlar SUTIS'te bildiri olarak sunuldu.",
            pub_btn_read: "Makaleyi Oku",
            pub_btn_conf: "Konferans Sayfası",
            section_contact: "İletişim",
            contact_subtitle: "Benimle iletişime geçmekten çekinmeyin!",
            contact_phone: "Telefon",
            footer_rights: "&copy; 2025 Ayşegül Kaya. Tüm hakları saklıdır."
        },
        en: {
            nav_about: "About",
            nav_education: "Education",
            nav_experience: "Experience",
            nav_projects: "Projects",
            nav_publications: "Publications",
            nav_contact: "Contact",
            hero_greeting: "Hello, I am",
            hero_title: "Backend Developer & Computer Engineering Student",
            hero_desc: "I develop solutions using Python, Flask, React, and machine learning technologies.",
            hero_btn_projects: "View Projects",
            hero_btn_contact: "Contact Me",
            scroll_down: "Scroll Down",
            section_about: "About Me",
            about_text_1: "I am a 4th-year Computer Engineering student at Selçuk University. I develop projects in backend development, data analysis, and machine learning.",
            about_text_2: "I served as Vice President in the Huawei Student Developers community. I participated in prestigious competitions such as NASA Space Apps Challenge and TEKNOFEST.",
            location: "Antalya / Konya, Turkey",
            language_level: "English B1+",
            technical_skills: "Technical Skills",
            section_education: "Education",
            edu_uni_date: "2022 – 2026 (expected)",
            edu_uni_name: "Selçuk University",
            location_konya: "Konya, Turkey",
            edu_uni_dept: "Computer Engineering",
            edu_uni_project: "<strong>Graduation Project:</strong> Dynamic field monitoring system with Sentinel-2 data (Python, ML)",
            edu_hs_name: "Hacı Malike Mehmet Bileydi Anatolian High School",
            location_antalya: "Antalya, Turkey",
            section_experience: "Experience",
            exp_huawei_role: "Vice President",
            exp_huawei_desc: "Event organization, developer community management, and technical team coordination.",
            exp_intern: "Internship",
            exp_intern_role: "Intern",
            exp_akdere_desc: "PLC programming with Delta ISPSoft, Ladder diagram design, and HMI interface development with DOPSoft. Industrial automation logic and hardware-software integration.",
            section_projects: "Projects",
            proj_status_ongoing: "Ongoing",
            proj_1_title: "Agricultural Dynamic Monitoring System",
            proj_1_role: "Graduation Project",
            proj_1_desc: "System offering monitoring & status assessment to field owners using satellite imagery. Web/mobile interface planned.",
            proj_2_desc: "Missing data completion, outlier cleaning, and data standardization on MERRA-2 dataset. LLM-based recommendation system being added.",
            proj_3_title: "Campus Second-Hand App",
            proj_3_desc: "On-campus second-hand shopping platform. Backend API design, user management, and product listing services.",
            proj_4_title: "Smart Laundry System",
            proj_4_role: "Full Stack - Entrepreneurship Project",
            proj_4_desc: "Mobile reservation, water consumption optimization, and autonomous management concept.",
            proj_5_title: "TEKNOFEST 2024 - Flying Car Simulation",
            proj_5_role: "Team Member",
            proj_5_desc: "Battery optimization algorithms for emergencies, route change, and shortest path calculation. Noise filtering for GNSS and radar data.",
            proj_6_title: "Personalized Diet Plan",
            proj_6_desc: "Web application generating personal recommendations based on form inputs.",
            section_publications: "Publications",
            pub_date: "November 28, 2025",
            pub_abstract: "New indices were created on the MERRA-2 dataset. Prediction models were developed using Random Forest + Ensemble methods. Results were presented as a paper at SUTIS.",
            pub_btn_read: "Read Article",
            pub_btn_conf: "Conference Page",
            section_contact: "Contact",
            contact_subtitle: "Feel free to contact me!",
            contact_phone: "Phone",
            footer_rights: "&copy; 2025 Ayşegül Kaya. All rights reserved."
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        
        if (langToggle) {
            langToggle.textContent = lang === 'tr' ? 'EN' : 'TR';
        }
        
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    }

    // Initialize language
    updateLanguage(savedLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem('lang') || 'tr';
            const newLang = currentLang === 'tr' ? 'en' : 'tr';
            updateLanguage(newLang);
        });
    }

    // ========================================
    // Animated Skill Bars
    // ========================================
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 200);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const skillsSection = document.querySelector('.skills-bars');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
    
    // ========================================
    // Smooth Scroll for Navigation Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // Intersection Observer for Animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    document.querySelectorAll('.section, .project-card, .experience-card, .timeline-item, .contact-card, .publication-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // ========================================
    // Active Navigation Link Highlight
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // ========================================
    // Skill Tags Hover Effect
    // ========================================
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ========================================
    // Project Cards Tilt Effect (subtle)
    // ========================================
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // ========================================
    // Typing Effect for Hero (optional enhancement)
    // ========================================
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // ========================================
    // Parallax Effect for Hero Background
    // ========================================
    const heroBg = document.querySelector('.hero-bg');
    
    window.addEventListener('scroll', function() {
        if (heroBg) {
            const scrolled = window.scrollY;
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Mouse move parallax effect
    document.addEventListener('mousemove', function(e) {
        if (heroBg && window.scrollY < window.innerHeight) {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            heroBg.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px)`;
        }
    });
    
    // ========================================
    // Console Easter Egg
    // ========================================
    console.log('%c🚀 Ayşegül Kaya Portfolio', 'font-size: 24px; font-weight: bold; color: #8B0A1A;');
    console.log('%cBackend Developer | Computer Engineering Student', 'font-size: 14px; color: #666;');
    console.log('%c📧 aysegulky007@gmail.com', 'font-size: 12px; color: #888;');
    
});
