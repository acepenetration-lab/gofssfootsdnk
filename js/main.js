// Canvas Background Matrix Effect
const canvas = document.getElementById('matrix-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = '0110100101';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(8, 8, 10, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#e60000';
        ctx.font = `${fontSize}px 'Fira Code', monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 45);
}

// Verification Logic Function
function checkVerification() {
    const input = document.getElementById('verifyInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('verifyResult');

    if (!input) {
        resultDiv.className = 'verify-result error';
        resultDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Please enter a valid username, bot, or domain.';
        resultDiv.classList.remove('hidden');
        return;
    }

    // Official Verification List (Includes AI Bot)
    const officialList = [
        '@dom_of_hack',
        'dom_of_hack',
        '@dom_gpt0_bot',
        'dom_gpt0_bot',
        'domofhackofficial.vercel.app',
        'https://domofhackofficial.vercel.app',
        'https://t.me/dom_of_hack',
        'https://t.me/dom_gpt0_bot'
    ];

    if (officialList.includes(input)) {
        resultDiv.className = 'verify-result success';
        resultDiv.innerHTML = '<i class="fa-solid fa-circle-check"></i> <strong>VERIFIED OFFICIAL ASSET:</strong> This is a 100% verified official entity of DOM OF HACK.';
    } else {
        resultDiv.className = 'verify-result error';
        resultDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> <strong>WARNING / UNVERIFIED:</strong> This handle is NOT in our official database. Beware of impersonators!';
    }

    resultDiv.classList.remove('hidden');
}

// Bottom Bar Active Link Switcher on Scroll
const sections = document.querySelectorAll('section, body');
const navItems = document.querySelectorAll('.bottom-nav .nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});
