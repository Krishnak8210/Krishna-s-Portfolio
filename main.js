document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#element', {
        strings: ['Web Developer.', 'Graphic Designer.', 'UI/UX Designer.'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const colorElement = document.getElementById('col');
    const colors = ['#e2ff70', '#c70988', '#ff7f50'];
    let colorIndex = 0;
    setInterval(() => {
        colorElement.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);
});





