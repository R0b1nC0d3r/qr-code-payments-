const qrContainer = document.getElementById("qr-container");
const qrCodeCanvas = document.getElementById("qr-code");

function generateQRCode() {
  const amount = document.getElementById("amount").value;
  const message = document.getElementById("message").value;
  const category = document.getElementById("category").value;
  const currency = document.getElementById("currency").value;

  if (!amount || !message || !category) {
    speak("Please fill out all fields");
    return;
  }

  const upiUrl = `upi://pay?pa=louis@superyes&pn=robin&am=${amount}&tn=${encodeURIComponent(message)}&cu=${currency}`;

  QRCode.toCanvas(qrCodeCanvas, upiUrl, { width: 200 }, (error) => {
    if (error) console.error(error);
    qrContainer.style.display = "block";
    setSocialLinks(upiUrl);
    speak("QR code generated successfully");
  });
}

function updateCurrencySymbol() {
  const currency = document.getElementById("currency").value;
  const currencySymbol = {
    INR: "₹",
    USD: "$",
    EUR: "€",
  }[currency];
  document.getElementById("currency-symbol").textContent = currencySymbol;
  speak(`Currency changed to ${currency}`);
}

function setSocialLinks(upiUrl) {
  const whatsappShare = document.getElementById("whatsapp-share");
  const telegramShare = document.getElementById("telegram-share");

  const message = `Pay easily via UPI using this link: ${encodeURIComponent(upiUrl)}`;

  whatsappShare.href = `https://wa.me/?text=${message}`;
  telegramShare.href = `https://t.me/share/url?url=${upiUrl}&text=Pay+easily+via+UPI!`;
}

function toggleTheme() {
  document.body.classList.toggle("light");
  speak("Theme toggled");
}

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
}

function openWidget() {
  speak("Quick access widget opened");
  alert("Quick access widget functionality!");
}
