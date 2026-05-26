# DNS Migration: GoDaddy → Netlify (Website Only)

This guide walks through migrating the **website** from GoDaddy hosting to Netlify hosting while keeping **DNS management and email at GoDaddy**. The client uses email on this domain, so MX records must be preserved.

**Time estimate:** 30–45 minutes (most of it is waiting for DNS propagation)
**Downtime estimate:** None for email. Site may flicker between old and new for ~30 min during propagation.

---

## Before the call

### On the developer side
- [ ] Open Netlify dashboard → the client's site
- [ ] Note the Netlify subdomain (e.g., `dmechanical-abc123.netlify.app`)
- [ ] Confirm site is ready (all pages work, forms submit, email notifications configured)
- [ ] Have this runbook open

### What the client needs ready
- [ ] GoDaddy login credentials
- [ ] Access to his work email (to verify email still works after the change)
- [ ] 30-45 minutes uninterrupted

---

## Phase 1: Document current DNS records (safety net)

**Why:** If something breaks, screenshots from this step let us restore the old records in 2 minutes.

1. Client logs into **GoDaddy → My Products**
2. Find the domain → click **DNS** (or **Manage DNS**)
3. **📸 Screenshot every single DNS record visible.** Multiple screenshots if needed.
4. Pay attention to which records exist. Common ones:

| Record type | What it does | Action during migration |
|---|---|---|
| **A** (name: `@`) | Points the bare domain to a server IP | ⚠️ **CHANGE** to Netlify |
| **CNAME** (name: `www`) | Points `www.domain.com` to another address | ⚠️ **CHANGE** to Netlify |
| **MX** | Routes email to mail servers | ✅ **DO NOT TOUCH** |
| **TXT** starting with `v=spf1...` | Email sender authentication (SPF) | ✅ **DO NOT TOUCH** |
| **TXT** named `_dmarc` | Email authentication (DMARC) | ✅ **DO NOT TOUCH** |
| **TXT** named `*._domainkey` | Email authentication (DKIM) | ✅ **DO NOT TOUCH** |
| **CNAME** like `mail`, `autodiscover`, `email`, `imap`, etc. | Email service config | ✅ **DO NOT TOUCH** |
| **TXT** with `google-site-verification` or similar | Third-party service verification | ✅ **DO NOT TOUCH** |
| **NS** | Nameservers | ✅ **DO NOT TOUCH** |

**Rule of thumb:** If a record name is `@` or `www` and the type is A or CNAME, we change it. Everything else stays.

---

## Phase 2: Add the domain in Netlify

1. **Netlify dashboard → the site → Domain management**
2. Click **Add a domain** (under "Custom domains")
3. Type the domain WITHOUT `www`: e.g., `definitivemechanical.com`
4. Click **Verify**
5. When asked "Yes, add domain" → confirm
6. Status will show as **"Awaiting external DNS"** — that's normal

After adding, Netlify will tell you it expects:
- The **A record** for the apex → `75.2.60.5`
- The **CNAME** for `www` → `[your-site].netlify.app`

---

## Phase 3: Update records at GoDaddy

Back in GoDaddy DNS management. Change one record at a time and save between each.

### Step 3.1 — Change the A record (apex domain)

1. Find the existing **A record** where **Name** is `@` (or blank)
2. Note down what the current "Value" / "Points to" is (it's GoDaddy's hosting IP — your rollback target)
3. Click **Edit** (pencil icon)
4. Change **Value / Points to:** `75.2.60.5`
5. Change **TTL:** to **600 seconds** (1/2 Hour or "Custom: 600")
6. Click **Save**

> **If multiple A records exist on `@`:** Some GoDaddy hosting setups have 2-3 A records on the apex. Delete the extras so only ONE A record points to `75.2.60.5`.

### Step 3.2 — Change the www CNAME

1. Find the existing **CNAME record** where **Name** is `www`
2. Note the current value (likely `parkingpage.godaddy.com` or similar)
3. Click **Edit**
4. Change **Value / Points to:** `[your-site].netlify.app`
   - ⚠️ Replace with the actual Netlify subdomain from Phase 2
   - Example: `dmechanical-abc123.netlify.app`
5. Change **TTL:** to **600 seconds**
6. Click **Save**

> **If no www CNAME exists:** Click **Add Record** → Type: `CNAME`, Name: `www`, Value: `[your-site].netlify.app`, TTL: 600.

### Step 3.3 — Disable any GoDaddy forwarding/redirects

1. Look for a **Forwarding** section in GoDaddy (might be in DNS or in Domain settings)
2. If domain forwarding or subdomain forwarding is ON → turn it **OFF**
3. This prevents GoDaddy from intercepting traffic before DNS resolves to Netlify

### Step 3.4 — Verify MX records still exist

After all changes are saved, **scroll through DNS records one more time** and confirm MX records (and email-related TXT records) are still there, unchanged. If accidentally touched, restore them from the Phase 1 screenshots immediately.

---

## Phase 4: Wait for DNS propagation (10–60 min, sometimes longer)

1. Open [dnschecker.org](https://dnschecker.org) in a new tab
2. Type the domain → select **A** record type → click **Search**
3. Watch for green checkmarks worldwide showing **`75.2.60.5`**
4. Repeat for `www.[domain]` with **CNAME** → should resolve to `[site].netlify.app`

| Time elapsed | What to expect |
|---|---|
| 0–5 min | Most checkers still show old IP |
| 5–30 min | Mixed results: some updated, some not |
| 30–60 min | Most globally updated |
| 1–4 hours | Pretty much everyone updated |
| 24-48 hours | Worst-case for stragglers, very rare |

**Tip:** Use **incognito mode** when testing in your browser. Normal browsers cache DNS aggressively and may show the old site even after DNS has propagated.

---

## Phase 5: Verify in Netlify + enable SSL

1. **Netlify dashboard → Domain management**
2. Both `definitivemechanical.com` and `www.definitivemechanical.com` should eventually show **green checkmarks** / "Netlify DNS - Active"
3. Scroll to **HTTPS** section
4. Netlify automatically provisions a free **Let's Encrypt SSL certificate** once DNS resolves — takes another 5–30 min
5. Once the certificate shows as **"Your site has HTTPS enabled"**, toggle **Force HTTPS** to ON

---

## Phase 6: Test everything

Use **incognito mode**:

1. ✅ `https://definitivemechanical.com` loads new site with green padlock (HTTPS working)
2. ✅ `https://www.definitivemechanical.com` loads new site
3. ✅ `http://definitivemechanical.com` (no s) → auto-redirects to HTTPS
4. ✅ Submit a test entry on the homepage form
5. ✅ Within 1 minute, the submission email arrives in client's inbox
6. ✅ Client sends himself a test email from his phone → confirms email still works
7. ✅ Client receives an email from his test sender → confirms inbound email still works

---

## 🚨 Emergency rollback

If anything breaks, you can revert DNS in ~10 minutes. With TTL set to 600, the world will pick up your rollback in 10-15 minutes.

### Site is broken / shows wrong content
1. GoDaddy DNS → A record on `@` → change `75.2.60.5` back to the original IP from Phase 1 screenshots
2. CNAME `www` → change back to the original value
3. Save. Wait 10-15 min. Old site is back.

### Email stopped working
1. GoDaddy DNS → check that MX records are still there
2. If missing → re-create them from Phase 1 screenshots immediately
3. Most email providers retry undelivered mail for 24-72 hours, so no email is lost during a short outage

---

## After the call (next 24-48 hours)

- Client may see "old site" cached on his own browser/phone for a few hours. Tell him: clear browser cache, try incognito, or wait it out.
- DNS propagates to small ISPs slowly. Some visitors may see the old site for a day. This is normal and resolves on its own.
- Once everything is stable (1-2 days), you can **bump TTL back up to 3600** at GoDaddy if you want longer caching.

---

## Quick reference card (have this on a second screen during the call)

```
┌─────────────────────────────────────────────────┐
│ APEX A RECORD                                   │
│   Name:  @                                      │
│   Type:  A                                      │
│   Value: 75.2.60.5         ← Netlify            │
│   TTL:   600                                    │
├─────────────────────────────────────────────────┤
│ WWW CNAME                                       │
│   Name:  www                                    │
│   Type:  CNAME                                  │
│   Value: [sitename].netlify.app                 │
│   TTL:   600                                    │
├─────────────────────────────────────────────────┤
│ DO NOT TOUCH:                                   │
│   • MX records (email)                          │
│   • TXT records (SPF/DKIM/DMARC)                │
│   • Any service verification TXT records        │
│   • Mail/Autodiscover/IMAP CNAMEs               │
│   • NS records (nameservers)                    │
└─────────────────────────────────────────────────┘
```
