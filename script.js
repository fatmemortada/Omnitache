document.getElementById('year').textContent = new Date().getFullYear();

function sendMeetingRequest(event) {
  event.preventDefault();

  const recipient = 'info@omnitache.com'; // Replace with the real email later.
  const name = document.getElementById('name').value.trim();
  const company = document.getElementById('company').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = `Meeting Request - ${company || name}`;
  const body = `Hello Omnitache,\n\nI would like to request a consultation.\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nProject / Request:\n${message}\n\nThank you.`;

  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
