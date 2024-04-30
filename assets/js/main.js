// FAQ Accordion
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.accordion-item');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.accordion-item').forEach(accItem => {
      accItem.classList.remove('open');
    });

    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

//  Initialize Swiper
let swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

// document.querySelector(".modal-trigger").addEventListener("click", () => {
//   const modal = document.querySelector(".modal")
//   modal.classList.add("open")
// })

// Tab
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add('hidden');
  }
  tablinks = document.getElementsByTagName("button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('bg-primary/80');
  }
  document.getElementById(tabName).classList.remove('hidden');
  evt.currentTarget.classList.add('bg-primary/80');
}