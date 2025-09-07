function showSidebar() {
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display = 'none'
}

let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial() {
    testimonials.forEach((t, i) => {
        t.classList.remove("active", "exit");
        if (i === index) {
            t.classList.add("active");
        } else if (i === (index - 1 + testimonials.length) % testimonials.length) {
            t.classList.add("exit");
        }
    });

    index = (index + 1) % testimonials.length;
}

setInterval(showTestimonial, 6500); // change every 4 seconds

let more = document.querySelectorAll(".more");
let inde = 0;

function showMore() {
    more.forEach((t, i) => {
        t.classList.remove("active", "exit");
        if (i === inde) {
            t.classList.add("active");
        } else if (i === (inde - 1 + more.length) % more.length) {
            t.classList.add("exit");
        }
    });

    inde = (inde + 1) % more.length;
}

setInterval(showMore, 4000);



const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});



// Observe all elements with data-fade and add staggered delays
(function () {
    const nodes = Array.from(document.querySelectorAll('[data-fade]'));
    // assign a small stagger delay based on DOM order
    nodes.forEach((el, i) => {
        // 120ms per item stagger
        el.style.setProperty('--delay', `${i * 120}ms`);
    });

    const options = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                obs.unobserve(entry.target);
            }
        });
    }, options);

    nodes.forEach(n => observer.observe(n));
})();
