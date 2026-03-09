// ============================================
// UPGRADED SCRIPT FOR VANSHIKA'S CERTIFICATE
// ============================================

// Variables
var teksSekarang = 1;
var fungsiBerfungsi = false;
var isPlaying = false;
var teksLoveBawaan = "";
const body = document.querySelector("body");
const audio = new Audio('' + linkmp3.src);

// ============================================
// DEVICE DETECTION
// ============================================
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

if (isMobile) {
    document.body.classList.add('is-mobile');
    console.log('📱 Mobile device detected');
} else {
    document.body.classList.add('is-desktop');
    console.log('💻 Desktop device detected');
}

// ============================================
// ADDITIONAL ANIMATIONS ON LOAD
// ============================================
function addEntranceAnimations() {
    // Add staggered animations to particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        particle.style.animationDelay = `${index * 0.2}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;
    });
    
    // Add animation to countdown numbers
    const countdownNumbers = document.querySelectorAll('.countdown-number');
    countdownNumbers.forEach((num, index) => {
        num.style.animationDelay = `${index * 0.1}s`;
    });
}

// Run on load
addEntranceAnimations();

// ============================================
// CUSTOM CURSOR
// ============================================
const cursor = document.getElementById('cursor');
if (!isMobile) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('button, a, .lovein').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// ============================================
// CURRENT DATE DISPLAY
// ============================================
const dateElement = document.getElementById('currentDate');
const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateElement.textContent = now.toLocaleDateString('en-US', options);

// ============================================
// COUNTDOWN TIMER (Time since meeting - Set your date here)
// ============================================
const meetingDate = new Date('2023-01-01T00:00:00'); // CHANGE THIS DATE to when you met

function updateCountdown() {
    const now = new Date();
    const diff = now - meetingDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);

// ============================================
// MUSIC PLAYER CONTROLS
// ============================================
const playPauseBtn = document.getElementById('playPauseBtn');
const restartBtn = document.getElementById('restartBtn');
const volumeSlider = document.getElementById('volumeSlider');
const volumeIcon = document.getElementById('volumeIcon');

audio.volume = 0.5;
audio.loop = true;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '▶️';
        playPauseBtn.classList.remove('playing');
    } else {
        audio.play();
        playPauseBtn.textContent = '⏸️';
        playPauseBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

restartBtn.addEventListener('click', () => {
    audio.currentTime = 0;
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        playPauseBtn.textContent = '⏸️';
        playPauseBtn.classList.add('playing');
    }
});

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
    if (e.target.value == 0) {
        volumeIcon.textContent = '🔇';
    } else if (e.target.value < 0.5) {
        volumeIcon.textContent = '🔉';
    } else {
        volumeIcon.textContent = '🔊';
    }
});

// ============================================
// THEME TOGGLE
// ============================================
const themeToggle = document.getElementById('themeToggle');
let isDarkMode = true;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.style.background = 'var(--dark-bg)';
        themeToggle.textContent = '🌙';
    } else {
        document.body.style.background = 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)';
        themeToggle.textContent = '☀️';
    }
});

// ============================================
// FULLSCREEN MODE
// ============================================
const fullscreenBtn = document.getElementById('fullscreenBtn');

fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreenBtn.textContent = '⛶';
    } else {
        document.exitFullscreen();
        fullscreenBtn.textContent = '⛶';
    }
});

// ============================================
// SHARE FUNCTIONALITY
// ============================================
const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', async () => {
    const shareData = {
        title: 'Special Certificate for Vanshika',
        text: 'Check out this amazing certificate! 💕',
        url: window.location.href
    };
    
    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (err) {
            console.log('Share cancelled');
        }
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard! 📋');
    }
});

// ============================================
// GALLERY MODAL
// ============================================
const galleryBtn = document.getElementById('galleryBtn');
const galleryModal = document.getElementById('galleryModal');
const galleryClose = document.getElementById('galleryClose');

galleryBtn.addEventListener('click', () => {
    galleryModal.classList.add('active');
});

galleryClose.addEventListener('click', () => {
    galleryModal.classList.remove('active');
});

galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        galleryModal.classList.remove('active');
    }
});

// ============================================
// SAVE CERTIFICATE - With Background Image and UI Elements
// ============================================
const saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', () => {
    const certificate = document.querySelector('.sertifikat');
    
    // Create a canvas to capture the certificate
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size - taller to accommodate all elements
    canvas.width = 800;
    canvas.height = 900;
    
    // Load and draw background image
    const bgImage = new Image();
    bgImage.crossOrigin = 'anonymous';
    bgImage.onload = function() {
        // Draw background image (scaled to full canvas)
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
        
        // Add overlay for better text readability
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // ============ TOP UI ELEMENTS SECTION ============
        
        // Draw Save Certificate Button box at top
        const btnY = 30;
        const btnWidth = 200;
        const btnHeight = 45;
        const btnX = (canvas.width - btnWidth) / 2;
        
        // Button background
        ctx.fillStyle = 'rgba(255, 107, 157, 0.3)';
        ctx.beginPath();
        ctx.roundRect(btnX, btnY, btnWidth, btnHeight, 22);
        ctx.fill();
        
        // Button border
        ctx.strokeStyle = 'rgba(255, 107, 157, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Button text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 18px Poppins, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('💾 Save Certificate', canvas.width/2, btnY + 28);
        
        // Draw Gallery Button box below Save Certificate
        const galleryY = btnY + btnHeight + 15;
        const galleryWidth = 180;
        const galleryHeight = 40;
        const galleryX = (canvas.width - galleryWidth) / 2;
        
        // Gallery button background
        ctx.fillStyle = 'rgba(108, 92, 231, 0.3)';
        ctx.beginPath();
        ctx.roundRect(galleryX, galleryY, galleryWidth, galleryHeight, 20);
        ctx.fill();
        
        // Gallery button border
        ctx.strokeStyle = 'rgba(108, 92, 231, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Gallery button text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px Poppins, sans-serif';
        ctx.fillText('🖼️ Gallery', canvas.width/2, galleryY + 26);
        
        // Draw Time Since We Met box
        const timeY = galleryY + galleryHeight + 20;
        const timeBoxWidth = 320;
        const timeBoxHeight = 90;
        const timeBoxX = (canvas.width - timeBoxWidth) / 2;
        
        // Time box background
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.backdropFilter = 'blur(10px)';
        ctx.beginPath();
        ctx.roundRect(timeBoxX, timeY, timeBoxWidth, timeBoxHeight, 15);
        ctx.fill();
        
        // Time box border
        ctx.strokeStyle = 'rgba(255, 217, 61, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        // Time box title
        ctx.fillStyle = '#ffd93d';
        ctx.font = '14px Poppins, sans-serif';
        ctx.fillText('Time Since We Met 💕', canvas.width/2, timeY + 25);
        
        // Get actual countdown values
        const days = document.getElementById('days').textContent;
        const hours = document.getElementById('hours').textContent;
        const minutes = document.getElementById('minutes').textContent;
        const seconds = document.getElementById('seconds').textContent;
        
        // Draw countdown numbers
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 28px Poppins, sans-serif';
        const timeSpacing = 90;
        const timeStartX = canvas.width/2 - (timeSpacing * 1.5);
        
        ctx.fillText(days, timeStartX, timeY + 70);
        ctx.fillText(hours, timeStartX + timeSpacing, timeY + 70);
        ctx.fillText(minutes, timeStartX + timeSpacing * 2, timeY + 70);
        ctx.fillText(seconds, timeStartX + timeSpacing * 3, timeY + 70);
        
        // Draw labels below numbers
        ctx.font = '10px Poppins, sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('Days', timeStartX, timeY + 90);
        ctx.fillText('Hours', timeStartX + timeSpacing, timeY + 90);
        ctx.fillText('Mins', timeStartX + timeSpacing * 2, timeY + 90);
        ctx.fillText('Secs', timeStartX + timeSpacing * 3, timeY + 90);
        
        // ============ CERTIFICATE SECTION ============
        const certY = timeY + timeBoxHeight + 30;
        
        // Draw certificate text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 48px Sacramento, cursive';
        ctx.textAlign = 'center';
        ctx.fillText('Certificate', canvas.width/2, certY + 70);
        
        ctx.font = '24px Poppins, sans-serif';
        ctx.fillStyle = '#ffd93d';
        ctx.fillText('of Being Awesome', canvas.width/2, certY + 120);
        
        ctx.font = 'bold 36px Great Vibes, cursive';
        ctx.fillStyle = '#ff6b9d';
        ctx.fillText('Vanshika', canvas.width/2, certY + 250);
        
        ctx.font = '18px Poppins, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('For being the most amazing person', canvas.width/2, certY + 370);
        ctx.fillText('and making life beautiful!', canvas.width/2, certY + 400);
        
        ctx.font = 'italic 16px Poppins, sans-serif';
        ctx.fillStyle = '#ffa8c5';
        ctx.fillText('With love ❤️', canvas.width/2, certY + 490);
        
        // Add decorative border around certificate
        ctx.strokeStyle = 'rgba(255, 107, 157, 0.6)';
        ctx.lineWidth = 3;
        ctx.strokeRect(40, certY + 20, canvas.width - 80, 520);
        
        // Add inner border
        ctx.strokeStyle = 'rgba(255, 217, 61, 0.4)';
        ctx.lineWidth = 1;
        ctx.strokeRect(50, certY + 30, canvas.width - 100, 500);
        
        // Download
        const link = document.createElement('a');
        link.download = 'Certificate_for_Vanshika.png';
        link.href = canvas.toDataURL();
        link.click();
        
        alert('Certificate saved! 💾');
    };
    bgImage.onerror = function() {
        // Fallback if image fails to load - use gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(1, '#16213e');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // ============ TOP UI ELEMENTS SECTION (Fallback) ============
        
        // Draw Save Certificate Button box at top
        const btnY = 30;
        const btnWidth = 200;
        const btnHeight = 45;
        const btnX = (canvas.width - btnWidth) / 2;
        
        ctx.fillStyle = 'rgba(255, 107, 157, 0.3)';
        ctx.beginPath();
        ctx.roundRect(btnX, btnY, btnWidth, btnHeight, 22);
        ctx.fill();
        
        ctx.strokeStyle = 'rgba(255, 107, 157, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 18px Poppins, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('💾 Save Certificate', canvas.width/2, btnY + 28);
        
        // Draw Gallery Button box
        const galleryY = btnY + btnHeight + 15;
        const galleryWidth = 180;
        const galleryHeight = 40;
        const galleryX = (canvas.width - galleryWidth) / 2;
        
        ctx.fillStyle = 'rgba(108, 92, 231, 0.3)';
        ctx.beginPath();
        ctx.roundRect(galleryX, galleryY, galleryWidth, galleryHeight, 20);
        ctx.fill();
        
        ctx.strokeStyle = 'rgba(108, 92, 231, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px Poppins, sans-serif';
        ctx.fillText('🖼️ Gallery', canvas.width/2, galleryY + 26);
        
        // Draw Time Since We Met box
        const timeY = galleryY + galleryHeight + 20;
        const timeBoxWidth = 350;
        const timeBoxHeight = 100;
        const timeBoxX = (canvas.width - timeBoxWidth) / 2;
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.beginPath();
        ctx.roundRect(timeBoxX, timeY, timeBoxWidth, timeBoxHeight, 15);
        ctx.fill();
        
        ctx.strokeStyle = 'rgba(255, 217, 61, 0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.fillStyle = '#ffd93d';
        ctx.font = '14px Poppins, sans-serif';
        ctx.fillText('Time Since We Met 💕', canvas.width/2, timeY + 25);
        
        // Get actual countdown values
        const days = document.getElementById('days').textContent;
        const hours = document.getElementById('hours').textContent;
        const minutes = document.getElementById('minutes').textContent;
        const seconds = document.getElementById('seconds').textContent;
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 28px Poppins, sans-serif';
        const timeSpacing = 90;
        const timeStartX = canvas.width/2 - (timeSpacing * 1.5);
        
        ctx.fillText(days, timeStartX, timeY + 70);
        ctx.fillText(hours, timeStartX + timeSpacing, timeY + 70);
        ctx.fillText(minutes, timeStartX + timeSpacing * 2, timeY + 70);
        ctx.fillText(seconds, timeStartX + timeSpacing * 3, timeY + 70);
        
        ctx.font = '10px Poppins, sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('Days', timeStartX, timeY + 90);
        ctx.fillText('Hours', timeStartX + timeSpacing, timeY + 90);
        ctx.fillText('Mins', timeStartX + timeSpacing * 2, timeY + 90);
        ctx.fillText('Secs', timeStartX + timeSpacing * 3, timeY + 90);
        
        // Certificate text (fallback)
        const certY = timeY + timeBoxHeight + 30;
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 48px Sacramento, cursive';
        ctx.textAlign = 'center';
        ctx.fillText('Certificate', canvas.width/2, certY + 70);
        
        ctx.font = '24px Poppins, sans-serif';
        ctx.fillStyle = '#ffd93d';
        ctx.fillText('of Being Awesome', canvas.width/2, certY + 120);
        
        ctx.font = 'bold 36px Great Vibes, cursive';
        ctx.fillStyle = '#ff6b9d';
        ctx.fillText('Vanshika', canvas.width/2, certY + 250);
        
        ctx.font = '18px Poppins, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('For being the most amazing person', canvas.width/2, certY + 370);
        ctx.fillText('and making life beautiful!', canvas.width/2, certY + 400);
        
        ctx.font = 'italic 16px Poppins, sans-serif';
        ctx.fillStyle = '#ffa8c5';
        ctx.fillText('With love ❤️', canvas.width/2, certY + 490);
        
        // Download
        const link = document.createElement('a');
        link.download = 'Certificate_for_Vanshika.png';
        link.href = canvas.toDataURL();
        link.click();
        
        alert('Certificate saved! 💾');
    };
    bgImage.src = 'assets/wp9.jpg';
});

// ============================================
// SCROLLING TEXT ANIMATION FOR 3RD SLIDE
// ============================================
// ============================================
// SLIDE 2 CANVAS ANIMATION (Floating Hearts)
// ============================================
var slide2CanvasAnimId = null;

function initSlide2Canvas() {
    const canvas = document.getElementById('slide2Canvas');
    if (!canvas) return;
    canvas.width = canvas.offsetWidth || window.innerWidth;
    canvas.height = canvas.offsetHeight || window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    const hearts = [];
    const heartCount = 35;
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💝', '🌸', '✨'];
    
    for (let i = 0; i < heartCount; i++) {
        hearts.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height + canvas.height,
            size: Math.random() * 20 + 12,
            speed: Math.random() * 1.2 + 0.4,
            opacity: Math.random() * 0.7 + 0.3,
            drift: (Math.random() - 0.5) * 0.8,
            symbol: heartSymbols[Math.floor(Math.random() * heartSymbols.length)],
            delay: Math.random() * 200
        });
    }
    
    function drawHeart(ctx, x, y, size, opacity) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.font = size + 'px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('♥', x, y);
        ctx.restore();
    }
    
    const colors = ['#ff6b9d', '#ff8fab', '#ffd93d', '#a29bfe', '#fd79a8', '#e17055'];
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        hearts.forEach((h, i) => {
            if (h.delay > 0) { h.delay--; return; }
            ctx.save();
            ctx.globalAlpha = h.opacity;
            ctx.fillStyle = colors[i % colors.length];
            ctx.font = h.size + 'px serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('♥', h.x, h.y);
            ctx.restore();
            
            h.y -= h.speed;
            h.x += h.drift;
            h.opacity -= 0.002;
            
            if (h.y < -30 || h.opacity <= 0) {
                h.x = Math.random() * canvas.width;
                h.y = canvas.height + 20;
                h.opacity = Math.random() * 0.7 + 0.3;
                h.speed = Math.random() * 1.2 + 0.4;
                h.drift = (Math.random() - 0.5) * 0.8;
                h.size = Math.random() * 20 + 12;
            }
        });
        
        slide2CanvasAnimId = requestAnimationFrame(animate);
    }
    
    if (slide2CanvasAnimId) cancelAnimationFrame(slide2CanvasAnimId);
    animate();
}

function stopSlide2Canvas() {
    if (slide2CanvasAnimId) {
        cancelAnimationFrame(slide2CanvasAnimId);
        slide2CanvasAnimId = null;
    }
}

function initScrollingText() {
    const scrollingText = document.getElementById('scrollingText');
    if (!scrollingText) return;
    
    // The CSS animation will handle the scrolling
    // But we can add some JS enhancements for mobile
    
    if (isMobile) {
        // Make it scroll faster on mobile for better UX
        const textElement = scrollingText.querySelector('.scrolling-text');
        if (textElement) {
            textElement.style.animationDuration = '6s';
        }
    }
}

// Initialize scrolling text when slide changes
function handleSlideChange() {
    if (teksSekarang === 3) {
        // Re-trigger animation when entering slide 3
        const scrollingText = document.getElementById('scrollingText');
        if (scrollingText) {
            scrollingText.style.opacity = '1';
            scrollingText.style.transform = 'translateY(0)';
        }
    }
}

// ============================================
// SWIPER INITIALIZATION
// ============================================
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true,
    },
    // Smooth buttery flow settings
    speed: 800,
    grabCursor: true,
    loop: false,
    // Easing for smooth transitions
    effect: 'slide',
    // Prevent accidental early swipes
    longSwipes: true,
    longSwipesRatio: 0.3,
    longSwipesMs: 100,
    // Touch sensitivity adjustment for mobile
    touchRatio: isMobile ? 1.2 : 1,
    threshold: isMobile ? 15 : 5,
    // Follow momentum for smooth feel
    followFinger: true,
    allowTouchMove: true,
    // Prevent jumping
    watchSlidesProgress: true,
    // Visibility
    watchOverflow: true,
    on: {
        slideChange: function () {
            teksSekarang = this.activeIndex + 1;
            updateSlideIndicator();
            
            teksScale = document.querySelector('#teks' + teksSekarang);
            stikerScale = document.querySelector('#stiker' + teksSekarang);

            setTimeout(function(){
                if (teksScale) teksScale.classList.add("scale1");
                if (stikerScale) stikerScale.classList.add("scale1");
                
                if(teksSekarang == 4){
                    setTimeout(katanimasi, 500);              
                }
                
                // Trigger canvas animation on slide 2
                if(teksSekarang == 2){
                    setTimeout(initSlide2Canvas, 200);
                } else {
                    stopSlide2Canvas();
                }
                
                // Trigger love percentage animation on last slide
                if(teksSekarang == 5){
                    animateLovePercentage();
                }
                
                // Trigger cuteness calculator animation on slide 6
                if(teksSekarang == 6){
                    animateCutenessDisplay();
                }
                
                // Handle scrolling text on slide 3
                handleSlideChange();
                
            }, 50);
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: false,
    speed: 600,
    // Touch sensitivity adjustment for mobile
    touchRatio: isMobile ? 1.5 : 1,
    threshold: isMobile ? 10 : 5,
});

// ============================================
// SLIDE INDICATORS
// ============================================
function updateSlideIndicator() {
    const dots = document.querySelectorAll('.slide-dot');
    dots.forEach((dot, index) => {
        if (index === teksSekarang - 1) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

document.querySelectorAll('.slide-dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        swiper.slideTo(index);
    });
});

// ============================================
// LOVE PERCENTAGE ANIMATION
// ============================================
function animateLovePercentage() {
    const percentageEl = document.getElementById('lovePercentage');
    let percentage = 0;
    
    const interval = setInterval(() => {
        percentage += Math.random() * 15;
        if (percentage >= 100) {
            percentage = 100;
            clearInterval(interval);
        }
        percentageEl.textContent = Math.floor(percentage) + '%';
    }, 100);
}

// ============================================
// CUTENESS DISPLAY ANIMATION
// ============================================
function animateCutenessDisplay() {
    const cutenessDisplay = document.querySelector('.cuteness-display');
    if (cutenessDisplay) {
        cutenessDisplay.style.animation = 'none';
        cutenessDisplay.offsetHeight; // Trigger reflow
        cutenessDisplay.style.animation = 'pulse 2s ease-in-out infinite';
    }
}

// ============================================
// TEXT ANIMATIONS
// ============================================
initeks = teks4.innerHTML;
teks4.innerHTML = "";

function katanimasi(){
    teks4.innerHTML = "";
    new TypeIt("#teks4", {
        strings: ["" + initeks],
        startDelay: 10,
        speed: 25,
        cursor: true,
        afterComplete: function(){
            teks4.innerHTML = initeks;
            
            setTimeout(function(){
                if(teksScale) {
                    teksScale.classList.remove("scale1");
                    teksScale.classList.add("scale0");
                }
                if(stikerScale) {
                    stikerScale.classList.remove("scale1");
                    stikerScale.classList.add("scale0");
                }
                
                setTimeout(function(){
                    stikerAkhir1.src = stikerAkhir2.src;
                }, 400);
                
                setTimeout(function(){
                    setTimeout(katanimasi3, 100);
                    if(teksScale) {
                        teksScale.classList.remove("scale0");
                        teksScale.classList.add("scale1");
                    }
                    if(stikerScale) {
                        stikerScale.classList.remove("scale0");
                        stikerScale.classList.add("scale1");
                    }
                }, 550);
                
            }, 2000);
        },
    }).go();
}

function katanimasi3() {
    teks4.innerHTML = "";
    
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    const shuffledEmojis = shuffle([...emojiAcak]);
    
    const stringsArray = Array.from({ length: 10 }, (_, i) => {
        return `I Love You ${i + 1}% ${shuffledEmojis[i]}`;
    });
    
    new TypeIt("#teks4", {
        strings: stringsArray,
        startDelay: 50,
        speed: 15,
        cursor: false,
        nextStringDelay: 0,
        afterComplete: function() {
            teksLoveBawaan = teksLove.innerHTML;
            const randomEmot = emojiAcak[Math.floor(Math.random() * emojiAcak.length)];
            teksLove.innerHTML += ' 1% ' + randomEmot;
            teks4.innerHTML += `<br><br>` + teksTambahan.innerHTML;
            teksTambahan.innerHTML = "";
            setTimeout(animateteksnim, 100);
            
            setTimeout(function() { clearInterval(scrollInterval); }, 500);
        },
    }).go();
}

function animateteksnim() {
    let percent = 10;
    
    setTimeout(function() {
        const intervalId = setInterval(() => {
            if (percent < 9999) {
                percent += Math.floor(Math.random() * (100 - 10 + 1)) + 10;
                const randomEmoji = emojiAkhir[Math.floor(Math.random() * emojiAkhir.length)];
                
                teksLove.innerHTML = `<b>${teksLoveBawaan} ${percent}% ${randomEmoji}</b>`;
            } else {
                clearInterval(intervalId);
                percent = 9999;
                const randomEmoji = emojiAkhir[Math.floor(Math.random() * emojiAkhir.length)];
                teksLove.innerHTML = `<b>${teksLoveBawaan} <span style='color:yellow'>${percent}%</span> ${randomEmoji}</b>`;
                teksLove.style = "font-size:20px;transition:all .8s ease";
                
                setInterval(falling, 200);
                if(stiker4) {
                    stiker4.classList.remove("scale1");
                    stiker4.classList.add("scale0");
                }
                setTimeout(function(){
                    stikerAkhir1.src = stikerAkhir3.src; 
                    if(stiker4) {
                        stiker4.classList.remove("scale0");
                        stiker4.classList.add("scale1");
                    }
                }, 400);
            }
        }, 20);
    }, 10);
}

// ============================================
// HEART FALLING ANIMATION
// ============================================
function falling() {
    const heart = document.createElement("div");
    heart.innerHTML = "<svg class='line spin' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(3.000000, 3.000000)'><path d='M9,0 C6.96384545,0 6.77134103,3.54652262 5.55911318,4.79957421 C4.34688533,6.05262581 0.578198764,4.61991709 0.0545867365,6.84402682 C-0.467925266,9.06927362 2.92235261,9.82428837 3.34036221,11.7334296 C3.76057187,13.6425708 1.68922429,16.3249199 3.45916494,17.6598406 C5.2291056,18.9936242 7.13434937,15.9747022 9,15.9747022 C10.8656351,15.9747022 12.7708788,18.9936242 14.5408195,17.6598406 C16.3107602,16.3249199 14.2405126,13.6425708 14.6596222,11.7334296 C15.0787319,9.82428837 18.4679097,9.06927362 17.9453977,6.84402682 C17.4228857,4.61991709 13.6530991,6.05262581 12.4419713,4.79957421 C11.2297434,3.54652262 11.036139,0 9,0 Z'></path></g></svg>";
    heart.className = "heart-icon";
    heart.style.left = (Math.random() * 95) + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);
}

// Set interval for falling hearts
setInterval(function(){
    const heartArr = document.querySelectorAll(".heart-icon");
    if(heartArr.length > 100 && heartArr[0]) {
        heartArr[0].remove();
    }
}, 100);

// ============================================
// AUTO SCROLL
// ============================================
const scrollContainer = document.getElementById("scroll-container");

function autoScroll() {
    if(scrollContainer) {
        scrollContainer.scrollTop += 1;
    }
}

const scrollInterval = setInterval(autoScroll, 50); 

// ============================================
// LOVE BUTTON CLICK HANDLER
// ============================================
var sudahKlik = true;

// ============================================
// TIME TOGETHER COUNTDOWN (synced with main)
// ============================================
function updateTimeTogether() {
    const now = new Date();
    const diff = now - meetingDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('ttDays').textContent = String(days).padStart(2, '0');
    document.getElementById('ttHours').textContent = String(hours).padStart(2, '0');
    document.getElementById('ttMinutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('ttSeconds').textContent = String(seconds).padStart(2, '0');
}

var ttInterval = null;

function showTimeTogether() {
    const ttOverlay = document.getElementById('timeTogether');
    ttOverlay.classList.add('active');
    updateTimeTogether();
    ttInterval = setInterval(updateTimeTogether, 1000);
}

function hideTimeTogether() {
    const ttOverlay = document.getElementById('timeTogether');
    ttOverlay.classList.add('hiding');
    setTimeout(function() {
        ttOverlay.classList.remove('active', 'hiding');
        if (ttInterval) clearInterval(ttInterval);
    }, 600);
}

document.getElementById("ttContinueBtn").addEventListener("click", function() {
    hideTimeTogether();
    // Show main content after closing time-together overlay
    stiker1.classList.add("scale1");
    teks1.classList.add("scale1");
    if(wallpaper) {
        wallpaper.style = "transform:scale(1)";
    }
    setTimeout(function(){
        fungsiBerfungsi = true;
    }, 600);
    setTimeout(initScrollingText, 1000);
});

document.getElementById("loveIn").onclick = function() {
    if (sudahKlik) {
        // Play music
        audio.play().then(() => {
            isPlaying = true;
            playPauseBtn.textContent = '⏸️';
            playPauseBtn.classList.add('playing');
        }).catch(e => {
            console.log('Audio autoplay blocked');
        });
        
        // Hide heart overlay
        const overlay = document.querySelector(".overlay");
        overlay.classList.add('hidden');
        
        // Show time-together screen first
        setTimeout(showTimeTogether, 400);
    }
}

// ============================================
// KEYBOARD AND CLICK NAVIGATION
// ============================================
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'ArrowRight') {
        swiper.slideNext();
    } else if (event.code === 'ArrowLeft') {
        swiper.slidePrev();
    }
});

document.addEventListener('click', function(e) {
    // Don't trigger slide change when clicking buttons or modal
    if (e.target.closest('.nav-btn') || 
        e.target.closest('.music-player') || 
        e.target.closest('.gallery-modal') ||
        e.target.closest('.save-btn') ||
        e.target.closest('.gallery-btn') ||
        e.target.closest('.slide-dot')) {
        return;
    }
    
    if (fungsiBerfungsi === true) {
        // swiper.slideNext(); // Optional: enable click to slide
    }
});

// ============================================
// INITIAL LOADING
// ============================================
setTimeout(function(){
    const overlay = document.querySelector(".loading-message");
    overlay.style.display = "none";
    const tomlv = document.querySelector(".blocklove");
    tomlv.style.display = "flex";
}, 6500);

// ============================================
// PRELOAD IMAGES FOR SMOOTHER EXPERIENCE
// ============================================
const imagesToPreload = [
    'peach22.gif',
    'peachspeech.gif',
    'peachheart.gif',
    'peach6.gif',
    'peach1.gif',
    'certificate.png',
    'wp9.jpg'
];

imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
});

// ============================================
// HANDLE VISIBILITY CHANGE (Pause music when tab hidden)
// ============================================
document.addEventListener('visibilitychange', function() {
    if (document.hidden && isPlaying) {
        audio.pause();
    } else if (!document.hidden && isPlaying) {
        audio.play();
    }
});

// ============================================
// NETWORK STATUS HANDLER
// ============================================
window.addEventListener('online', () => {
    console.log('Back online!');
});

window.addEventListener('offline', () => {
    console.log('Lost internet connection');
});

// ============================================
// HANDLE RESIZE
// ============================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Update mobile class based on new window size
        const newIsMobile = window.innerWidth < 768;
        if (newIsMobile !== isMobile) {
            location.reload(); // Simple reload to recalculate
        }
    }, 250);
});

// ============================================
// ADDITIONAL MOBILE OPTIMIZATIONS
// ============================================
if (isMobile) {
    // Disable pinch zoom on the swiper
    document.querySelector('.swiper').addEventListener('touchmove', function(e) {
        if (e.scale !== 1) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Add haptic feedback on button taps if available
    if (navigator.vibrate) {
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                navigator.vibrate(10);
            });
        });
    }
}

// ============================================
// CUTENESS CALCULATOR
// ============================================
const cutenessBtn = document.getElementById('calcCuteness');
const cutenessScoreEl = document.getElementById('cutenessScore');
const cutenessMessageEl = document.getElementById('cutenessMessage');

const cutenessMessages = [
    "You are absolutely adorable! 🐰",
    "Cuteness overload! 🥰",
    "The cutest person ever! 💕",
    "Adorable in every way! 🌸",
    "Pure cuteness! 🦋",
    "Too cute for words! ✨",
    "Super cute! 💖",
    "Adorbs! 🌺"
];

if (cutenessBtn) {
    cutenessBtn.addEventListener('click', function() {
        // Calculate cuteness with smooth animation
        let score = 0;
        const targetScore = Math.floor(Math.random() * 20) + 80; // 80-100%
        
        const interval = setInterval(function() {
            score += Math.random() * 10;
            if (score >= targetScore) {
                score = targetScore;
                clearInterval(interval);
                
                // Show final message
                const randomMsg = cutenessMessages[Math.floor(Math.random() * cutenessMessages.length)];
                cutenessMessageEl.textContent = randomMsg;
                
                // Add celebration effect
                createConfetti();
            }
            cutenessScoreEl.textContent = Math.floor(score) + '%';
        }, 50);
    });
}

// ============================================
// COMPLIMENTS PAGE FUNCTIONALITY
// ============================================
const moreComplimentsBtn = document.getElementById('moreComplimentsBtn');
let currentComplimentIndex = 8;

if (moreComplimentsBtn) {
    moreComplimentsBtn.addEventListener('click', function() {
        const container = document.getElementById('complimentsContainer');
        
        // Add 4 more compliments
        for (let i = 0; i < 4; i++) {
            if (currentComplimentIndex >= allCompliments.length) {
                currentComplimentIndex = 0; // Loop back
            }
            
            const card = document.createElement('div');
            card.className = 'compliment-card';
            card.innerHTML = '<span class="compliment-emoji">' + complimentEmojis[currentComplimentIndex] + '</span><p>' + allCompliments[currentComplimentIndex] + '</p>';
            
            // Random delay for animation
            card.style.animationDelay = (container.children.length * 0.1) + 's';
            
            container.appendChild(card);
            currentComplimentIndex++;
        }
        
        // Scroll to bottom of container
        container.scrollTop = container.scrollHeight;
        
        // Vibrate on mobile
        if (navigator.vibrate) {
            navigator.vibrate(20);
        }
    });
}

// ============================================
// CONFETTI EFFECT
// ============================================
function createConfetti() {
    const colors = ['#ff6b9d', '#ffd93d', '#6c5ce7', '#00cec9', '#fd79a8'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = 'position: fixed; width: 10px; height: 10px; background: ' + colors[Math.floor(Math.random() * colors.length)] + '; top: 50%; left: 50%; z-index: 9999; pointer-events: none; animation: confettiFall ' + (1 + Math.random()) + 's ease-out forwards;';
        
        // Random direction
        const x = (Math.random() - 0.5) * window.innerWidth;
        const y = (Math.random() - 0.5) * window.innerHeight;
        confetti.style.setProperty('--x', x + 'px');
        confetti.style.setProperty('--y', y + 'px');
        
        document.body.appendChild(confetti);
        
        setTimeout(function() {
            confetti.remove();
        }, 2000);
    }
}

// Add confetti animation dynamically
const confettiStyle = document.createElement('style');
confettiStyle.textContent = '@keyframes confettiFall { 0% { transform: translate(0, 0) rotate(0deg); opacity: 1; } 100% { transform: translate(var(--x), var(--y)) rotate(720deg); opacity: 0; } }';
document.head.appendChild(confettiStyle);

console.log('✨ Vanshika Certificate - Loaded Successfully! 💕');
console.log('📱 Device:', isMobile ? 'Mobile' : 'Desktop');
console.log('🌸 Added: Cuteness Calculator, Compliments, Beautiful Moments, Rose Ending!');
