# BeatWave — Premium Beats Marketplace 🎧

[Live Site](https://beat-wave-pink.vercel.app/)

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation & Setup](#installation--setup)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## About

**BeatWave** is an online marketplace for music producers and artists to buy, sell, and license beats. The platform allows users to explore beats by genre, purchase licenses (free, non-exclusive, exclusive), and securely check out using multiple payment methods. The goal is to simplify beat licensing and give producers a modern storefront.  

## Features

- Browse by beat categories (Trap, Drill, R&B, Lo-Fi, Pop, Hip-Hop)  
- Licensing options:
  - **Free for Profit** — for early-stage artists  
  - **Non-Exclusive** — shared usage licenses  
  - **Exclusive** — full ownership rights  
- Shopping cart & secure checkout (supports UPI, credit/debit, netbanking, PayPal, Razorpay, etc.)  
- Producer dashboard: manage your catalog, sales, customers  
- Responsive UI, user authentication (login / signup)  
- Newsletter subscription, support contact, and policy pages (Privacy, Terms, Refund, etc.)  

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React / Next.js |
| Styling / UI | Tailwind CSS |
| Backend / API | Node.js / Express / Next.js API routes |
| Database | MongoDB |
| Payment | Razorpay, PayPal, UPI |
| Hosting / Deployment | Vercel |

## Installation & Setup

1. Clone the repo  
   ```bash
   git clone https://github.com/your-username/beatwave.git
   cd beatwave
   ```

2. Install dependencies  
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables  
   Create a `.env.local` file with:

   ```
   NEXT_PUBLIC_API_URL=...
   DATABASE_URL=...
   RAZORPAY_KEY_ID=...
   RAZORPAY_KEY_SECRET=...
   PAYPAL_CLIENT_ID=...
   ```

4. Run the development server  
   ```bash
   npm run dev
   ```

5. Navigate to `http://localhost:3000`.

6. For production build & deployment  
   ```bash
   npm run build
   npm start
   ```

## Usage

- Browse beats on the homepage  
- Add beats to cart, choose license type  
- Checkout via payment method  
- Sign up as a producer to upload beats and manage sales  
- View policy pages, contact support, subscribe to updates  

## Folder Structure

```
beatwave/
│
├── public/               # Public assets
├── src/                  # Source files
│   ├── components/       # UI components
│   ├── pages/            # Routes
│   ├── styles/           # Styling files
│   ├── lib/              # Utilities
│   ├── contexts/         # Context providers
│   └── ...
├── .env.local            # Environment variables
├── package.json
├── README.md
└── next.config.js
```

## Contributing

1. Fork this repository  
2. Create your branch: `git checkout -b feature/my-feature`  
3. Commit changes: `git commit -m "Add feature"`  
4. Push: `git push origin feature/my-feature`  
5. Open a Pull Request  

## License

This project is licensed under the **MIT License**.

## Contact

- Email: support@beatwave.in  
- Twitter / Instagram (if applicable)  

---

**BeatWave** — where producers and artists connect to create hit tracks.  
