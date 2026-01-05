# Domain Setup Guide: ai-wtf.org → Netlify

## Step 1: Add Custom Domain in Netlify

1. **Go to your Netlify dashboard**
   - Visit https://app.netlify.com
   - Find your "agreed-vision" site

2. **Add your custom domain**
   - Click on your site
   - Go to **Site settings** → **Domain management**
   - Click **Add custom domain**
   - Enter: `ai-wtf.org`
   - Click **Verify** and then **Add domain**

3. **Also add the www subdomain**
   - Click **Add domain alias**
   - Enter: `www.ai-wtf.org`
   - This will redirect www to the apex domain

4. **Note the DNS instructions**
   - Netlify will show you the DNS records you need to configure
   - You'll see something like:
     ```
     A record: 75.2.60.5 (Netlify's load balancer IP)
     OR
     CNAME record pointing to: [your-site].netlify.app
     ```

## Step 2: Configure DNS at Porkbun

1. **Log into Porkbun**
   - Go to https://porkbun.com/account/domainsSpeedy
   - Find `ai-wtf.org` in your domain list
   - Click **DNS** or **Manage**

2. **Delete any existing records** (if present)
   - Remove any existing A, AAAA, or CNAME records for @ and www
   - Keep NS (nameserver) and SOA records

3. **Add Netlify's DNS records**

   **Option A: Using Netlify DNS (Recommended)**
   
   If Netlify gave you an A record:
   ```
   Type: A
   Host: @
   Answer: 75.2.60.5
   TTL: 600 (or default)
   ```

   For www subdomain:
   ```
   Type: CNAME
   Host: www
   Answer: [your-site-name].netlify.app
   TTL: 600 (or default)
   ```

   **Option B: Using Netlify's Load Balancer (Alternative)**
   
   If Netlify prefers CNAME for apex:
   ```
   Type: ALIAS or ANAME (if Porkbun supports it)
   Host: @
   Answer: [your-site-name].netlify.app
   TTL: 600
   ```
   
   Note: Not all DNS providers support ALIAS/ANAME for apex domains. If Porkbun doesn't, use Option A.

4. **Save your DNS changes**

## Step 3: Enable HTTPS in Netlify

1. **Back in Netlify**
   - Go to **Site settings** → **Domain management**
   - Scroll to **HTTPS** section
   - Click **Verify DNS configuration**
   - Once verified, click **Provision certificate**
   - This usually takes a few minutes

2. **Enable HTTPS redirect** (recommended)
   - Turn on **Force HTTPS**
   - This redirects all HTTP traffic to HTTPS

## Step 4: Update Your Canonical URL

Since the canonical URL in your index.html is already set to `https://ai-wtf.org`, you're good! If DNS propagates correctly, search engines will know this is the authoritative URL.

## Expected Timeline

- **DNS propagation**: 5 minutes to 48 hours (usually within 1-2 hours)
- **SSL certificate**: 1-5 minutes after DNS propagates
- **Full availability**: Usually within 1 hour

## Verification Steps

Once DNS propagates, test:

1. **Check DNS propagation**
   - Visit https://dnschecker.org
   - Enter `ai-wtf.org`
   - Should show Netlify's IP (75.2.60.5) or CNAME

2. **Test the site**
   - Visit http://ai-wtf.org (should redirect to HTTPS)
   - Visit https://ai-wtf.org (should load your site)
   - Visit https://www.ai-wtf.org (should redirect to apex)

3. **Check SSL**
   - Click the padlock in your browser
   - Should show "Certificate (Valid)"

## Troubleshooting

### If ai-wtf.org doesn't load after 2 hours:

1. **Verify DNS at Porkbun**
   - Make sure A record points to 75.2.60.5
   - Make sure there are no conflicting records

2. **Check Netlify status**
   - Site settings → Domain management
   - Should show "Netlify DNS" or "External DNS"
   - Should NOT show errors

3. **Clear your browser cache**
   - Or try in incognito/private mode

### If SSL doesn't provision:

1. **Wait for DNS to fully propagate** (up to 24 hours)
2. **Manually trigger**: Click "Renew certificate" in Netlify
3. **Check**: Make sure both @ and www point correctly

### If you see a Netlify default page:

1. **Check**: Make sure your latest code is pushed to GitHub
2. **Check**: Netlify build succeeded (check Deploy log)
3. **Trigger**: Manual deploy in Netlify if needed

## Quick Reference: Netlify's Load Balancer IP

If Netlify asks you to use their load balancer IP, it's typically:
```
75.2.60.5
```

But always use the IP Netlify shows you in their dashboard, as it may vary by region.

## Need Help?

If you run into issues:
1. Check Netlify's status page: https://www.netlifystatus.com
2. Porkbun support: https://porkbun.com/support
3. Netlify support docs: https://docs.netlify.com/domains-https/custom-domains

---

## Summary Checklist

- [ ] Add ai-wtf.org as custom domain in Netlify
- [ ] Add www.ai-wtf.org as domain alias in Netlify
- [ ] Note the DNS instructions Netlify provides
- [ ] Log into Porkbun
- [ ] Add A record: @ → 75.2.60.5 (or Netlify's IP)
- [ ] Add CNAME record: www → [your-site].netlify.app
- [ ] Wait for DNS propagation (check dnschecker.org)
- [ ] Provision SSL certificate in Netlify
- [ ] Enable Force HTTPS
- [ ] Test: https://ai-wtf.org loads correctly
- [ ] Test: https://www.ai-wtf.org redirects to apex
- [ ] Celebrate! 🎉

Your site's metadata is already configured for ai-wtf.org, so once DNS propagates, everything will just work!

