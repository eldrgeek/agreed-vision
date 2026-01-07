# Analytics & Visitor Tracking Setup

This guide will help you set up privacy-friendly visitor tracking for your site.

## 🎯 Recommended: GoatCounter (FREE)

**Why GoatCounter?**
- ✅ **Free forever** for open source projects
- ✅ **Privacy-friendly** - no cookies, no tracking, GDPR compliant
- ✅ **Open source** - you can verify the code
- ✅ **Simple** - just add one script tag
- ✅ **Public stats** - can embed stats on your site
- ✅ **Perfect fit** - aligns with your site's philosophy

### Step 1: Sign Up

1. Go to [goatcounter.com](https://www.goatcounter.com/)
2. Click "Sign up"
3. Choose a code (e.g., `ai-wtf`)
4. Your stats will be at: `https://ai-wtf.goatcounter.com`

### Step 2: Add Tracking Code

Add this script to your site's `<head>`:

**Option A: Update index.html**
```html
<!-- /index.html -->
<head>
  <!-- ... other tags ... -->
  <script data-goatcounter="https://YOUR-CODE.goatcounter.com/count"
          async src="//gc.zgo.at/count.js"></script>
</head>
```

**Option B: Create a component (React way)**

```tsx
// src/components/Analytics.tsx
export function Analytics() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://gc.zgo.at/count.js';
    script.async = true;
    script.setAttribute('data-goatcounter', 'https://YOUR-CODE.goatcounter.com/count');
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return null;
}

// Then add to App.tsx:
import { Analytics } from './components/Analytics';

function App() {
  return (
    <>
      <Analytics />
      {/* rest of app */}
    </>
  );
}
```

### Step 3: Enable Public Stats

1. Go to Settings in your GoatCounter dashboard
2. Check "Allow adding a public dashboard on a custom domain"
3. Save

### Step 4: Embed Stats on Your Site

Update `/src/pages/Stats.tsx`:

```tsx
// Uncomment and update this iframe:
<iframe 
  src="https://YOUR-CODE.goatcounter.com/stats"
  style={{ width: '100%', height: '600px', border: 'none' }}
/>
```

### Step 5: Get Real-Time Stats (Optional)

To show real-time stats in the stat cards, you can use GoatCounter's API:

```tsx
// Fetch stats from GoatCounter API
const response = await fetch('https://YOUR-CODE.goatcounter.com/api/v0/stats', {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN'
  }
});
```

## 🔄 Alternative Options

### Option 2: Plausible Analytics

**Pros:**
- Beautiful UI
- Privacy-focused
- Easy to use
- Can self-host

**Cons:**
- $9/month after trial
- Not free for hobby projects

**Setup:**
1. Sign up at [plausible.io](https://plausible.io)
2. Add their script tag
3. Get instant stats

### Option 3: Umami

**Pros:**
- Free (self-hosted)
- Open source
- Beautiful interface
- Full control

**Cons:**
- Requires hosting (Vercel/Railway/Heroku)
- More setup required

**Setup:**
1. Deploy to Vercel/Railway (one-click)
2. Add tracking script
3. View stats in your dashboard

### Option 4: Simple Analytics

**Pros:**
- Very privacy-friendly
- Beautiful charts
- Trustworthy team

**Cons:**
- $19/month
- Overkill for small sites

### Option 5: Netlify Analytics

**Pros:**
- Already integrated with Netlify
- Server-side tracking (no JavaScript needed)
- Very accurate

**Cons:**
- $9/month
- Basic features only

**Setup:**
1. Go to Netlify Dashboard → Analytics
2. Click "Enable Analytics"
3. Stats appear in dashboard

## 📊 What Gets Tracked

With GoatCounter, you'll see:

- **Page views** - which pages are popular
- **Unique visitors** - approximate visitor count
- **Referrers** - where visitors come from
- **Browser stats** - what people use
- **Country data** - general geographic info
- **Screen sizes** - helps with responsive design
- **Time of day** - when people visit

What is **NOT** tracked:
- ❌ Personal information
- ❌ Individual users across sessions
- ❌ IP addresses (stored temporarily, then hashed)
- ❌ Precise location
- ❌ Cross-site tracking
- ❌ Cookies or fingerprinting

## 🎨 Customize Stats Page

The stats page is at `/src/pages/Stats.tsx`. You can:

1. **Update the stat cards** with real data from GoatCounter API
2. **Change colors** to match your theme
3. **Add more metrics** (bounce rate, avg. time on page, etc.)
4. **Embed charts** directly from GoatCounter
5. **Add insights** about popular content

## 🔐 Privacy Philosophy

Your stats page includes this statement:

> We count visits, not people. Whether you're human, AI (being used by a human), 
> or something else—you're welcome, and your privacy is respected.

This aligns perfectly with your site's inclusive philosophy!

## ✅ Testing

After setup:

1. Visit your site in incognito mode
2. Navigate to a few pages
3. Check GoatCounter dashboard (updates in ~10 seconds)
4. Verify stats appear on `/stats` page
5. Check that tracking works on all routes

## 🚀 Next Steps

1. Choose an analytics service (GoatCounter recommended)
2. Sign up and get tracking code
3. Add script to your site
4. Deploy to Netlify
5. Verify tracking works
6. Enable public dashboard
7. Update Stats.tsx with embed code
8. Share `/stats` link with visitors!

## 💡 Pro Tips

- **Be transparent** - your stats page already explains what you track
- **Make it public** - transparency builds trust
- **Use insights** - see what content resonates
- **Respect privacy** - never add invasive tracking
- **Check regularly** - understand your audience
- **Iterate** - create more of what people love

## 📝 Current Implementation

Your site already has:
- ✅ `/stats` route set up
- ✅ Stats page with layout
- ✅ Placeholder for GoatCounter embed
- ✅ Privacy philosophy statement
- ✅ Footer link to stats
- ✅ Beautiful stat cards
- ✅ Ready for real data

Just add the tracking code and you're done! 🎉

