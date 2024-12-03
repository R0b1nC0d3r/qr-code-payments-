# UPI Payment Portal

This repository contains the source code for a simple UPI Payment Portal, where users can easily generate UPI QR codes for making payments. The portal also allows users to share the payment QR code on social media platforms such as WhatsApp and Telegram. You can view the live version of this project at:

[UPI Payment Portal](https://r0b1nc0d3r.github.io/qr-code-payments-/)

## Features

- **Generate UPI Payment QR Code**: Users can input the payment amount, message, category, and currency to generate a UPI QR code.
- **Social Media Sharing**: Share the generated QR code link directly on WhatsApp and Telegram.
- **Responsive Design**: The portal is fully responsive and works on various devices, including mobile phones and desktops.
- **Theme Toggle**: Switch between light and dark themes for a personalized user experience.
- **Voice Feedback**: Voice feedback is provided to guide the user through the process.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the page, with support for light and dark themes.
- **JavaScript**: For handling QR code generation, social media sharing, and theme toggling.
- **QRCode.js**: A library to generate the QR code dynamically.
- **Speech Synthesis API**: To provide voice feedback for enhanced accessibility.

## Setup and Installation

To run this project locally, follow these steps:

### 1. Clone the Repository
Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/r0b1nc0d3r/qr-code-payments-.git
```

### 2. Open `index.html`
Navigate to the cloned folder and open the `index.html` file in your preferred browser.

### 3. Local Server (Optional)
For a smoother experience, you may want to set up a local server. You can use `live-server` or any other static server.

To install `live-server` globally, run:

```bash
npm install -g live-server
```

Then, run the following command in the project directory:

```bash
live-server
```

This will launch a local server and open the project in your browser.

## Usage

1. **Enter Payment Details**:
   - Amount: Enter the amount to be paid.
   - Message: Enter a message to accompany the payment (e.g., "Thanks!").
   - Category: Select the category of the payment (e.g., Personal, Business, Utilities).
   - Currency: Choose the currency (INR, USD, EUR).

2. **Generate QR Code**:
   - Click the "Generate QR Code" button to generate the UPI QR code based on the entered information.

3. **Share on Social Media**:
   - After the QR code is generated, you can share it on WhatsApp or Telegram by clicking the respective buttons.

4. **Toggle Theme**:
   - Click on the "🌙 Switch Theme" button to toggle between light and dark themes.

5. **Voice Feedback**:
   - The page provides voice feedback for actions like entering data, toggling the theme, and generating the QR code.

## Customization

- **Currency and Payment Information**: You can update the UPI ID (`pa=louis@superyes`) and the name (`pn=robin`) in the URL format to match your own UPI details.
- **Design Tweaks**: You can modify the colors and layout in the `style.css` file to better match your branding or preferences.
- **Expand Currency Options**: Add more currencies to the dropdown in the HTML file as needed.

## Contributing

Feel free to fork this repository and make changes. If you find a bug or have an idea for a feature, you can open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

**Enjoy using the UPI Payment Portal!** 💸
