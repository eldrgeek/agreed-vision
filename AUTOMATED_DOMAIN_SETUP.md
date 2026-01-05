# Fully Automated Domain Setup with Netlify CLI + Porkbun API

## Overview

You can automate the **entire** domain setup process using:
- **Netlify CLI** - for Netlify configuration
- **Porkbun API** - for DNS record configuration

No manual clicking required! 🎉

## Prerequisites

### 1. Get Your Porkbun API Keys

1. Go to https://porkbun.com/account/api
2. Create API credentials for `ai-wtf.org`
3. Save your:
   - API Key
   - Secret API Key

### 2. Enable API Access for Your Domain

At Porkbun, you need to enable API access for each domain:
1. Go to your domain list
2. Find `ai-wtf.org`
3. Enable "API Access" (might be under domain settings)

## Complete Automated Setup

### Step 1: Add Domain to Netlify (CLI)

```bash
cd /Users/MikeWolf/Projects/agreed-vision

# Add your domain
netlify domains:add ai-wtf.org

# Add www subdomain
netlify domains:add www.ai-wtf.org

# Check what IP address Netlify wants
netlify dns
```

This will show you the IP address (usually `75.2.60.5`) and CNAME records you need.

### Step 2: Configure DNS at Porkbun (API)

#### Option A: Using curl

```bash
# Set your API credentials
PORKBUN_API_KEY="your_api_key_here"
PORKBUN_SECRET="your_secret_api_key_here"
DOMAIN="ai-wtf.org"
NETLIFY_IP="75.2.60.5"  # Use the IP from netlify dns command
NETLIFY_CNAME="ai-wtf.netlify.app"

# Create A record for apex domain (@)
curl -X POST "https://api.porkbun.com/api/json/v3/dns/create/${DOMAIN}" \
  -H "Content-Type: application/json" \
  -d "{
    \"secretapikey\": \"${PORKBUN_SECRET}\",
    \"apikey\": \"${PORKBUN_API_KEY}\",
    \"name\": \"\",
    \"type\": \"A\",
    \"content\": \"${NETLIFY_IP}\",
    \"ttl\": \"600\"
  }"

# Create CNAME record for www subdomain
curl -X POST "https://api.porkbun.com/api/json/v3/dns/create/${DOMAIN}" \
  -H "Content-Type: application/json" \
  -d "{
    \"secretapikey\": \"${PORKBUN_SECRET}\",
    \"apikey\": \"${PORKBUN_API_KEY}\",
    \"name\": \"www\",
    \"type\": \"CNAME\",
    \"content\": \"${NETLIFY_CNAME}\",
    \"ttl\": \"600\"
  }"
```

#### Option B: Using Node.js Script

Create a file `setup-dns.js`:

```javascript
#!/usr/bin/env node
const https = require('https');

const config = {
  apiKey: process.env.PORKBUN_API_KEY || 'your_api_key',
  secretApiKey: process.env.PORKBUN_SECRET || 'your_secret',
  domain: 'ai-wtf.org',
  netlifyIP: '75.2.60.5',  // From netlify dns command
  netlifyCNAME: 'ai-wtf.netlify.app'
};

function createDNSRecord(name, type, content) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      secretapikey: config.secretApiKey,
      apikey: config.apiKey,
      name: name,
      type: type,
      content: content,
      ttl: '600'
    });

    const options = {
      hostname: 'api.porkbun.com',
      path: `/api/json/v3/dns/create/${config.domain}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(body);
          if (response.status === 'SUCCESS') {
            console.log(`✅ Created ${type} record for ${name || '@'}: ${content}`);
            resolve(response);
          } else {
            console.error(`❌ Failed to create ${type} record:`, response.message);
            reject(new Error(response.message));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function setupDNS() {
  console.log('🚀 Setting up DNS records for', config.domain);
  
  try {
    // Create A record for apex domain
    await createDNSRecord('', 'A', config.netlifyIP);
    
    // Create CNAME for www
    await createDNSRecord('www', 'CNAME', config.netlifyCNAME);
    
    console.log('\n✨ DNS setup complete!');
    console.log('🕐 Wait 5-30 minutes for DNS propagation');
    console.log('🔍 Check status: dig ai-wtf.org');
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

setupDNS();
```

Then run it:

```bash
# Set environment variables (more secure)
export PORKBUN_API_KEY="your_api_key"
export PORKBUN_SECRET="your_secret_key"

# Run the script
node setup-dns.js
```

### Step 3: Verify DNS Propagation

```bash
# Check if DNS records are created at Porkbun
curl -X POST "https://api.porkbun.com/api/json/v3/dns/retrieve/ai-wtf.org" \
  -H "Content-Type: application/json" \
  -d "{
    \"secretapikey\": \"${PORKBUN_SECRET}\",
    \"apikey\": \"${PORKBUN_API_KEY}\"
  }"

# Check DNS propagation (wait 5-30 minutes)
dig ai-wtf.org

# Verify with Netlify
netlify domains:verify ai-wtf.org
```

### Step 4: Check SSL Status

```bash
# List domains and check SSL status
netlify domains:list
```

SSL will provision automatically once DNS propagates (usually 1-5 minutes after DNS is live).

## Complete Automation Script

Here's a complete bash script that does everything:

```bash
#!/bin/bash
# complete-domain-setup.sh

set -e

# Configuration
PORKBUN_API_KEY="${PORKBUN_API_KEY}"
PORKBUN_SECRET="${PORKBUN_SECRET}"
DOMAIN="ai-wtf.org"
WWW_DOMAIN="www.ai-wtf.org"

echo "🚀 Starting automated domain setup for ${DOMAIN}"
echo ""

# Step 1: Add domain to Netlify
echo "📡 Step 1: Adding domain to Netlify..."
netlify domains:add ${DOMAIN}
netlify domains:add ${WWW_DOMAIN}

# Step 2: Get Netlify's required DNS settings
echo "🔍 Step 2: Getting Netlify DNS requirements..."
echo "Note: Netlify typically uses IP 75.2.60.5"
NETLIFY_IP="75.2.60.5"
NETLIFY_CNAME="ai-wtf.netlify.app"

# Step 3: Configure DNS at Porkbun
echo "🌐 Step 3: Configuring DNS at Porkbun..."

# Create A record
echo "  Creating A record for apex domain..."
curl -s -X POST "https://api.porkbun.com/api/json/v3/dns/create/${DOMAIN}" \
  -H "Content-Type: application/json" \
  -d "{
    \"secretapikey\": \"${PORKBUN_SECRET}\",
    \"apikey\": \"${PORKBUN_API_KEY}\",
    \"name\": \"\",
    \"type\": \"A\",
    \"content\": \"${NETLIFY_IP}\",
    \"ttl\": \"600\"
  }" | jq .

# Create CNAME record
echo "  Creating CNAME record for www..."
curl -s -X POST "https://api.porkbun.com/api/json/v3/dns/create/${DOMAIN}" \
  -H "Content-Type: application/json" \
  -d "{
    \"secretapikey\": \"${PORKBUN_SECRET}\",
    \"apikey\": \"${PORKBUN_API_KEY}\",
    \"name\": \"www\",
    \"type\": \"CNAME\",
    \"content\": \"${NETLIFY_CNAME}\",
    \"ttl\": \"600\"
  }" | jq .

echo ""
echo "✅ DNS records created!"
echo ""
echo "⏳ Waiting for DNS propagation (this can take 5-30 minutes)..."
echo ""
echo "🔍 You can check status with:"
echo "   dig ai-wtf.org"
echo "   netlify domains:verify ai-wtf.org"
echo ""
echo "🎉 Once DNS propagates, your site will be live at https://ai-wtf.org"
```

Save this as `complete-domain-setup.sh`, make it executable, and run:

```bash
chmod +x complete-domain-setup.sh

# Set your API keys
export PORKBUN_API_KEY="your_api_key"
export PORKBUN_SECRET="your_secret_key"

# Run the automation
./complete-domain-setup.sh
```

## Useful Porkbun API Commands

### List all DNS records
```bash
curl -X POST "https://api.porkbun.com/api/json/v3/dns/retrieve/ai-wtf.org" \
  -H "Content-Type: application/json" \
  -d "{
    \"secretapikey\": \"${PORKBUN_SECRET}\",
    \"apikey\": \"${PORKBUN_API_KEY}\"
  }"
```

### Delete a DNS record
```bash
curl -X POST "https://api.porkbun.com/api/json/v3/dns/delete/ai-wtf.org/RECORD_ID" \
  -H "Content-Type: application/json" \
  -d "{
    \"secretapikey\": \"${PORKBUN_SECRET}\",
    \"apikey\": \"${PORKBUN_API_KEY}\"
  }"
```

### Test API authentication
```bash
curl -X POST "https://api.porkbun.com/api/json/v3/ping" \
  -H "Content-Type: application/json" \
  -d "{
    \"secretapikey\": \"${PORKBUN_SECRET}\",
    \"apikey\": \"${PORKBUN_API_KEY}\"
  }"
```

## Security Best Practices

1. **Never commit API keys to git**
   - Use environment variables
   - Add to `.gitignore`: `*.env`, `*credentials*`

2. **Use environment variables**
   ```bash
   export PORKBUN_API_KEY="your_key"
   export PORKBUN_SECRET="your_secret"
   ```

3. **Or use a .env file** (and add to .gitignore)
   ```bash
   # .env
   PORKBUN_API_KEY=your_key
   PORKBUN_SECRET=your_secret
   ```

## Advantages of API Automation

✅ **Fast** - Complete setup in under 2 minutes (plus DNS propagation)  
✅ **Reproducible** - Same process every time  
✅ **Scriptable** - Can be part of deployment automation  
✅ **No manual errors** - No typos in DNS records  
✅ **Version controlled** - Scripts can be committed to repo  
✅ **Auditable** - Know exactly what was configured and when  

## Timeline

| Step | Time |
|------|------|
| Get Porkbun API keys | 2 minutes |
| Run automation script | 1 minute |
| DNS propagation | 5-30 minutes |
| SSL provisioning | 1-5 minutes after DNS |
| **Total** | **~10-40 minutes** |

## Next Steps

After DNS propagates and SSL provisions:

1. ✅ Test: https://ai-wtf.org
2. ✅ Test: https://www.ai-wtf.org (should redirect)
3. ✅ Check SSL certificate is valid
4. ✅ Enable "Force HTTPS" in Netlify (if not automatic)

## References

- [Porkbun API Documentation](https://porkbun.com/api/json/v3/documentation)
- [Netlify CLI Documentation](https://docs.netlify.com/cli/get-started/)
- [DNS Checker Tool](https://dnschecker.org)

---

**Want me to create and run the automation script for you?** Just provide your Porkbun API credentials and I can execute the entire setup!

