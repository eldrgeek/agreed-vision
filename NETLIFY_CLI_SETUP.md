# Setting Up ai-wtf.org via Netlify CLI

## What You Can Do With CLI

✅ Add custom domain to Netlify  
✅ Check DNS configuration  
✅ Deploy the site  
✅ Check SSL certificate status  
❌ Configure DNS at Porkbun (still needs to be done manually)

## Your Current Status

```
Site: ai-wtf
Current URL: https://ai-wtf.netlify.app
Admin URL: https://app.netlify.com/projects/ai-wtf
```

## Step-by-Step CLI Commands

### 1. Add Your Custom Domain

```bash
cd /Users/MikeWolf/Projects/agreed-vision
netlify domains:add ai-wtf.org
```

This will:
- Add ai-wtf.org to your Netlify site
- Show you the DNS records you need to configure
- Set it as your primary domain

### 2. Add www Subdomain (Optional but Recommended)

```bash
netlify domains:add www.ai-wtf.org
```

### 3. Check What DNS Records You Need

```bash
netlify dns
```

This shows you what DNS records Netlify expects. You'll see something like:
```
Domain: ai-wtf.org
DNS configured: No
Required records:
  A     @     75.2.60.5
  CNAME www   ai-wtf.netlify.app
```

### 4. After Configuring DNS at Porkbun

Once you've added the DNS records at Porkbun, check if they've propagated:

```bash
# Check DNS status
netlify domains:verify ai-wtf.org

# List all domains on this site
netlify domains:list
```

### 5. Enable SSL (Usually Automatic)

SSL provisioning happens automatically once DNS is configured, but you can check status:

```bash
netlify domains:list
```

Look for "SSL Certificate: Provisioned" or "Pending"

## What You Still Need to Do at Porkbun

The CLI **cannot** configure DNS at Porkbun. You still need to:

1. Log into https://porkbun.com
2. Go to your domain's DNS settings
3. Add the records that `netlify dns` shows you:
   ```
   Type: A
   Host: @
   Answer: 75.2.60.5 (or the IP Netlify shows)
   
   Type: CNAME
   Host: www
   Answer: ai-wtf.netlify.app
   ```

## Complete Workflow Using CLI

```bash
# Navigate to your project
cd /Users/MikeWolf/Projects/agreed-vision

# Add your domain
netlify domains:add ai-wtf.org

# Add www subdomain
netlify domains:add www.ai-wtf.org

# Check what DNS records you need
netlify dns

# [NOW GO TO PORKBUN AND ADD THOSE DNS RECORDS]

# Wait 5-30 minutes for DNS propagation
# Check if DNS has propagated (external tool)
# dig ai-wtf.org

# Verify with Netlify
netlify domains:verify ai-wtf.org

# Check SSL status
netlify domains:list

# If everything looks good, do a fresh deploy (optional)
netlify deploy --prod
```

## Useful Netlify CLI Commands

### Check site status
```bash
netlify status
```

### Open site in browser
```bash
netlify open:site
```

### Open Netlify admin dashboard
```bash
netlify open:admin
```

### Check current deployment
```bash
netlify deploy --build --prod
```

### View recent deploys
```bash
netlify deploys:list
```

### Check build logs
```bash
netlify logs
```

## Alternative: Use Netlify DNS (Advanced)

If you want Netlify to host your DNS (instead of Porkbun), you can use:

```bash
netlify dns:create-zone ai-wtf.org
```

This will:
1. Create a DNS zone on Netlify
2. Give you nameservers to set at Porkbun
3. Let you manage all DNS via Netlify CLI

Then at Porkbun, you'd only need to change nameservers (not individual records).

**Nameserver approach:**
- Pros: Manage everything via CLI, faster updates, tighter integration
- Cons: Have to change nameservers at Porkbun (which can take 24-48 hours)

**A record approach (recommended for now):**
- Pros: Faster (5 min - 2 hours), keeps DNS at Porkbun
- Cons: Have to configure records manually at Porkbun

## Quick Reference

| Task | CLI Command |
|------|-------------|
| Add domain | `netlify domains:add ai-wtf.org` |
| List domains | `netlify domains:list` |
| Check DNS needs | `netlify dns` |
| Verify DNS | `netlify domains:verify ai-wtf.org` |
| Remove domain | `netlify domains:remove ai-wtf.org` |
| Deploy | `netlify deploy --prod` |
| Check status | `netlify status` |

## Summary

**Via CLI (5 minutes):**
```bash
netlify domains:add ai-wtf.org
netlify domains:add www.ai-wtf.org
netlify dns  # Note what DNS records you need
```

**At Porkbun (5 minutes):**
- Add the A and CNAME records shown by `netlify dns`

**Wait & Verify (5-120 minutes):**
```bash
netlify domains:verify ai-wtf.org
```

**Done!** 🎉

Your site will be live at https://ai-wtf.org

