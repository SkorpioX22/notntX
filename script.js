const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.2,
  }
);

reveals.forEach(block => observer.observe(block));


const copyEmailButton = document.getElementById('copy-email-btn');
const copyEmailStatus = document.getElementById('copy-email-status');

if (copyEmailButton) {
  copyEmailButton.addEventListener('click', async () => {
    const email = copyEmailButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
      if (copyEmailStatus) {
        copyEmailStatus.textContent = 'Copied!';
      }
    } catch {
      if (copyEmailStatus) {
        copyEmailStatus.textContent = `Copy failed. Email: ${email}`;
      }
    }
  });
}
