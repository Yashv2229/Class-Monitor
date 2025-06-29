# Class Monitor

A modern web application for teachers and parents to monitor student progress, communicate, and access academic insights.  
Includes an AI-powered chatbot (OmniDimension) for parent queries and support.

---

## Features

- Teacher and parent dashboards
- Student and parent information management
- AI Chatbot (OmniDimension) for instant support and academic insights
- Secure authentication (Clerk)
- Supabase backend for data storage

---

## Tech Stack

| Layer         | Technology                | Purpose/Role                                 |
|---------------|--------------------------|----------------------------------------------|
| Frontend      | React, TypeScript        | UI, SPA logic, type safety                   |
| Styling       | Tailwind CSS             | Modern, utility-first CSS framework          |
| Backend (DB)  | Supabase (PostgreSQL)    | Database, API, authentication integration    |
| Auth          | Clerk                    | User authentication and management           |
| AI Chatbot    | OmniDimension            | AI-powered chat/call widget for parents      |
| Voice/Transcribe | ElevenLabs, Deepgram  | Voice synthesis and transcription (via OmniDimension) |
| Deployment    | Vercel/Netlify/Static    | (Recommended) for hosting the frontend       |

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/class-monitor.git
cd class-monitor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add your configuration:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the App

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or your configured port).

---

## OmniDimension Chatbot Integration

The OmniDimension chatbot is globally available on every page of the app.

### How it works

- The widget is injected via a script in the `Header` component.
- The widget connects to your configured OmniDimension agent for AI-powered chat and call support.

### Customizing the Agent

1. **Configure your agent using the Python SDK:**

   - Install the SDK:
     ```bash
     pip install omnidimension
     ```
   - Use the following script (replace with your API key):

     ```python
     from omnidimension import Client

     api_key = "YOUR_API_KEY"
     client = Client(api_key)

     response = client.agent.create(
         name="Academic Insight Bot",
         welcome_message="Hello, this is your Academic Insight Bot. How may I assist you with inquiries about your child's academic performance or school activities today?",
         # ... (rest of your agent configuration)
     )

     print(f"Status: {response['status']}")
     print(f"Created Agent: {response['json']}")
     ```

2. **Update the widget script in your app (if you use a new secret key):**

   In `src/components/Header.tsx`:
   ```js
   script.src = "https://backend.omnidim.io/web_widget.js?secret_key=YOUR_SECRET_KEY";
   ```

---

## Project Structure

```
src/
  components/
    Header.tsx
    ...
  pages/
    Chatbot.tsx
    TeacherDashboard.tsx
    TeacherStudents.tsx
    ...
  lib/
    supabaseClient.ts
  App.tsx
  main.tsx
public/
  index.html
```

---

## Customization

- **Widget Position/Size:**  
  You can customize the widget’s appearance with CSS or by modifying the script injection logic in `Header.tsx`.

- **Agent Behavior:**  
  Change the agent’s context, welcome message, or post-call actions in your Python agent configuration.

---

## Deployment

You can deploy this app to any static hosting provider (Vercel, Netlify, etc.) or your own server.

1. Build the app:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist` folder.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)

---

## Contact

For questions or support, please open an issue or contact the maintainer.

---

**Enjoy using Class Monitor!**

---

Let me know if you want to add more details or further customize the README!
