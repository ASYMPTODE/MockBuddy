# MockBuddy  
AI-powered interview preparation platform  

---

## 📋 Table of Contents  
1. 🤖 Introduction  
2. ⚙️ Tech Stack  
3. 🔋 Features  
4. 🤸 Quick Start  

---

## 🤖 Introduction  
**MockBuddy** is a job interview preparation platform that simulates realistic interview experiences.  
It is built with **Next.js** for application logic, **Firebase** for authentication and storage, and **TailwindCSS** for styling.  
Using **Vapi Voice Agents** and **Google Gemini**, MockBuddy enables interactive mock interviews, provides instant AI feedback, and generates transcripts to help users improve their skills.  

---

## ⚙️ Tech Stack  
- Next.js  
- Firebase  
- TailwindCSS  
- Vapi AI  
- shadcn/ui  
- Google Gemini  
- Zod  

---

## 🔋 Features  
- **Authentication** – Sign up and log in with Firebase  
- **AI Interviews** – Generate interviews with Vapi voice agents + Gemini  
- **Instant Feedback** – Real-time evaluation and transcripts  
- **Interview Page** – Conduct full interview sessions with AI  
- **Dashboard** – Manage and track past interviews  
- **Responsive Design** – Works across desktop, tablet, and mobile  

---

## 🤸 Quick Start  

### Prerequisites  
- Git  
- Node.js  
- npm  

### Setup  

Clone the repository:  
```bash
git clone https://github.com/your-username/mockbuddy.git
cd mockbuddy
Install dependencies:

bash
Copy code
npm install
Create .env.local and configure:

env
Copy code
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
GOOGLE_GENERATIVE_AI_API_KEY=
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
Run the project:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.
