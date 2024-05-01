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

// Template color picker
document.querySelector('.color-items')?.addEventListener('click', function(event) {
  if (event.target.closest('.color-item')) {
    document.querySelectorAll('.color-item').forEach(item => {
      item.classList.remove('active');
    });
    event.target.closest('.color-item').classList.add('active');
  }
});

function openModal() {
  // Tampilkan backdrop modal
  document.getElementById('modalBackdrop').style.display = 'block';
}

// Fungsi untuk menutup modal
function closeModal() {
  // Sembunyikan backdrop modal
  document.getElementById('modalBackdrop').style.display = 'none';
}

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

// Settings
document.querySelectorAll('.setting-button').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.setting-item');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.setting-item').forEach(accItem => {
      accItem.classList.remove('open');
      // accItem.classList.add('open');
    });

    if (!isOpen) {
      item.classList.add('open');
    }
  });
});