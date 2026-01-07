# Feedback System

This site now has a comprehensive feedback system that allows users to submit questions, feedback, and ideas.

## Features

### 1. **Ask Us / Feedback Page** (`/ask-us`)
- Full-page form with fields for:
  - Name (optional)
  - Email (optional)  
  - Type (Question/Feedback/Idea/Other)
  - Message (required)
- Accessible from navigation and direct links

### 2. **Floating Feedback Button**
- Always visible in bottom-right corner on all pages
- Expands on hover to show "Ask Us / Feedback"
- Click to navigate to the Ask Us page
- Beautiful gradient animation (human/AI colors)
- Has tooltip for first-time users

### 3. **Homepage CTA**
- Prominent feedback section at end of homepage
- Explains the collaborative nature of the site
- Large, animated button to encourage engagement

## How It Works

### Netlify Forms
The system uses **Netlify Forms** (free tier), which means:
- No backend code needed
- Form submissions go to your Netlify dashboard
- Email notifications sent to site admin
- Spam protection with honeypot field

### Setup Steps

1. **Deploy to Netlify** (if not already done)
   ```bash
   npm run build
   # Deploy the dist folder to Netlify
   ```

2. **Enable Form Notifications** (in Netlify Dashboard)
   - Go to Site Settings > Forms
   - Set up email notifications
   - Configure spam filtering if needed

3. **Access Submissions**
   - Netlify Dashboard > Forms
   - See all submissions with timestamps
   - Export to CSV if needed
   - Set up Slack/email notifications

### Form Structure

The form includes:
- **name**: User's name (optional)
- **email**: For replies (optional)
- **type**: Category (Question/Feedback/Idea/Other)
- **question**: The main message (required)
- **bot-field**: Hidden honeypot for spam protection

### Security Features

- Honeypot field to catch bots
- Netlify's built-in spam detection
- CORS handled by Netlify
- No exposed API keys

## Alternative Options (if needed)

If you want to use a different service:

1. **Email Services:**
   - [EmailJS](https://www.emailjs.com/) - Client-side email sending
   - [Formspree](https://formspree.io/) - Form backend service

2. **Form Services:**
   - [Tally](https://tally.so/) - Beautiful forms, free tier
   - [Google Forms](https://forms.google.com/) - Free, familiar

3. **Custom Backend:**
   - Add API endpoint to send emails
   - Use Supabase, Firebase, etc.

## Customization

### Change Colors
Edit `FeedbackButton.tsx` and `IndexScroll.tsx` to adjust gradient colors.

### Change Form Fields
Edit `AskUs.tsx` to add/remove fields. Remember to update:
1. The form inputs
2. The hidden form in `public/forms.html`

### Position Feedback Button
Edit `FeedbackButton.tsx`:
```tsx
// Change position
className="fixed bottom-6 right-6 z-50"
```

## Testing

### Local Testing
Form submissions won't work locally. You'll see the toast notification but submissions won't be saved.

### Production Testing
1. Deploy to Netlify
2. Submit a test form
3. Check Netlify Dashboard > Forms
4. Verify email notification (if configured)

## User Experience

Users can:
- ✅ Submit anonymous feedback (name/email optional)
- ✅ Access feedback from any page (floating button)
- ✅ Choose feedback type (Question/Feedback/Idea/Other)
- ✅ Get immediate confirmation toast
- ✅ See welcoming, philosophical messaging

The system welcomes "human, AI, or something else entirely" - staying true to the site's inclusive philosophy.

