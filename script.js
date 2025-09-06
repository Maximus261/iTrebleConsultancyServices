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

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach(img => {
      img.setAttribute("loading", "lazy");
    });
  });

