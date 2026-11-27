# Babli Mehndi Studio

A responsive and elegant website for **Babli Mehndi Studio**, a professional female mehndi artist business specializing in bridal, festive, engagement, sangeet, and custom mehndi designs.

**Live website:** https://mehndiartistsite.vercel.app

## About the Website

Babli Mehndi Studio provides visitors with an overview of the artist's work and services. The website presents real mehndi photographs, a photo portfolio, service details, artist information, and a direct WhatsApp booking option.

The site is built in Hindi with a warm, feminine, and traditional visual style using soft pink, gold, and cream tones.

## Features

- Responsive photo-based hero banner
- Mobile-friendly navigation menu
- “Mere Baare Mein” artist introduction section
- Realistic portfolio and banner images
- Mehndi service cards for bridal, festive, and sangeet bookings
- Nine featured images on the homepage portfolio
- Dedicated “View All” portfolio page for remaining photos
- WhatsApp booking integration
- Floating WhatsApp contact button
- Hover and touch effects for gallery images
- Responsive layout for mobile, tablet, and desktop devices

## Website Sections

### 1. Hero Section

The top section introduces **Babli Mehndi Studio** and encourages visitors to explore the portfolio or begin a booking.

### 2. About the Artist

The “Mere Baare Mein” section introduces Babli, describes her approach to creating personalized mehndi designs, and highlights her experience and working style.

### 3. Services

The website presents three main services:

- Dulhan Mehndi — bridal mehndi for hands and feet
- Festive Mehndi — designs for Teej, Karwa Chauth, Eid, Diwali, and other celebrations
- Engagement & Sangeet Mehndi — modern and stylish occasion designs

### 4. Portfolio

The homepage displays nine selected real images from the design collection. A **View All** button opens `portfolio.html`, where the remaining photographs are displayed.

### 5. Booking

Visitors can contact the artist directly through WhatsApp to ask about availability, pricing, location, and booking dates.

## Project Structure

```text
.
├── index.html                 # Main homepage
├── portfolio.html             # Full portfolio page
├── style.css                  # Base website styles
├── style-extra.css            # Gallery and additional visual styles
├── script.js                  # Navigation, gallery, and interactions
├── assets/
│   ├── images/                # Mehndi photographs
│   ├── booking-form.css
│   ├── booking-whatsapp.css
│   ├── whatsapp-button.css
│   └── whatsapp-button.html
└── README.md
```

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Responsive CSS Grid and Flexbox
- WhatsApp business links
- Vercel hosting

## Run Locally

No build tools or package installation are required.

1. Clone the repository:

   ```bash
   git clone https://github.com/atiqulalam257/mehndi_artist_site.git
   ```

2. Open the project folder:

   ```bash
   cd mehndi_artist_site
   ```

3. Open `index.html` in a browser, or start a simple local server:

   ```bash
   python -m http.server 8000
   ```

4. Visit:

   ```text
   http://localhost:8000
   ```

## Image Assets

The real portfolio and hero images are stored in:

```text
assets/images/
```

Add new JPEG or JPG photographs to this folder and update the image list in `script.js` to include them in the homepage or full portfolio.

## Deployment

The website is deployed through Vercel and is publicly available at:

https://mehndiartistsite.vercel.app

## Repository

- **Owner:** atiqulalam257
- **Repository:** [atiqulalam257/mehndi_artist_site](https://github.com/atiqulalam257/mehndi_artist_site)
- **Primary language:** CSS

## License

No license has been added to this repository. All displayed photographs and website content should be used only with the owner's permission.
