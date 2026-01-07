# Quick Analytics Setup (5 Minutes)

## The Fast Way to Get Visitor Stats

### Step 1: Sign Up for GoatCounter (2 minutes)
1. Go to https://www.goatcounter.com/
2. Click "Sign up"
3. Choose a code: `ai-wtf` (or whatever you prefer)
4. Confirm email

### Step 2: Enable Tracking (1 minute)
Edit `src/components/Analytics.tsx`:

```tsx
const ANALYTICS_CONFIG = {
  enabled: true,  // Change from false to true
  goatcounterCode: 'ai-wtf',  // Add your code
  allowLocal: false,
  allowBot: false,
};
```

### Step 3: Deploy (1 minute)
```bash
npm run build
# Deploy to Netlify
```

### Step 4: Verify It Works (1 minute)
1. Visit your live site
2. Navigate to a few pages
3. Check https://ai-wtf.goatcounter.com (your code)
4. See your visits appear!

### Step 5: Enable Public Stats (Optional)
1. GoatCounter Settings → Enable public dashboard
2. Edit `src/pages/Stats.tsx` line ~47:
```tsx
<iframe 
  src="https://ai-wtf.goatcounter.com/stats"
  style={{ width: '100%', height: '600px', border: 'none' }}
/>
```

## What You Get

✅ **Stats Page** at `/stats` with:
- Total visits
- Page views  
- Popular pages
- Countries
- Time on site

✅ **Privacy-Friendly**:
- No cookies
- No personal tracking
- GDPR compliant
- Transparent to users

✅ **Free Forever**:
- Unlimited pageviews
- Public dashboard
- API access
- Open source

## That's It! 🎉

Your site now tracks visitors while respecting privacy.

Visit `/stats` to see your beautiful stats page!

---

## Alternative: Use Netlify Analytics

Don't want to set up GoatCounter? Use Netlify's built-in analytics:

1. Netlify Dashboard → Site → Analytics
2. Click "Enable Analytics" ($9/month)
3. That's it! Stats appear in Netlify dashboard

No code changes needed, but stats won't appear on your `/stats` page.

---

## Troubleshooting

**Stats not appearing?**
- Wait 30 seconds after visiting
- Check browser console for errors
- Make sure you deployed the changes
- Verify GoatCounter code is correct

**Want to test locally?**
```tsx
const ANALYTICS_CONFIG = {
  enabled: true,
  goatcounterCode: 'ai-wtf',
  allowLocal: true,  // Enable local testing
  allowBot: false,
};
```

**Questions?**
See full guide in `ANALYTICS_SETUP.md`

