# Definitive Mechanical — Website Setup Guide

This guide walks you through deploying your website on Netlify and setting up form email notifications. No coding required.

---

## Part 1: Deploying Your Website

### Step 1: Create a Netlify Account

1. Go to [netlify.com](https://www.netlify.com)
2. Click **Sign up**
3. Choose **Sign up with GitHub** (easiest — you'll already have access to the website code)
4. The **free plan** is perfectly fine — it includes everything you need including 100 form submissions per month.

### Step 2: Deploy the Website

1. After logging in, click **Add new site** → **Import an existing project**
2. Choose **GitHub** and authorize Netlify to access your repositories
3. Find and select the repository: **`Definitive-Mechanical/definitive-mechanical`**
4. **Do not change any settings.** The build configuration is already set up in the code.
5. Click **Deploy**

Netlify will build and publish your site in about 1–2 minutes. You'll get a temporary URL like `https://random-name-12345.netlify.app` — you can change this in Step 4.

### Step 3: Set Up Form Email Notifications ⚠️ Don't skip this

This is what makes form submissions actually email you.

1. From your Netlify dashboard, open your site
2. In the left sidebar, click **Forms**
3. You should see two forms automatically detected:
   - `home-hero-quote` (the form on the homepage)
   - `contact-form` (the form on the Contact page)
4. Click **Form notifications** (top right of the Forms page)
5. Click **Add notification** → **Email notification**
6. Fill out:
   - **Event to listen for:** New form submission
   - **Form:** `home-hero-quote`
   - **Email to notify:** Your business email address (where you want customer inquiries to land)
7. Save
8. **Repeat steps 5–7** for the second form (`contact-form`)

Now any time a visitor fills out either form on the site, you'll get an email within seconds.

### Step 4: Customize the Site URL (Optional)

By default Netlify assigns a random URL. To change it:

1. Site dashboard → **Site configuration** → **General** → **Site details**
2. Click **Change site name** and pick something like `definitive-mechanical`
3. Your URL becomes `https://definitive-mechanical.netlify.app`

### Step 5: Connect Your Custom Domain (Optional)

To use `www.definitivemechanical.com` (or whatever domain you own):

1. Site dashboard → **Domain management** → **Add a domain**
2. Enter your domain name
3. Follow Netlify's instructions to update your domain's DNS records (this is done at your domain registrar — wherever you bought the domain, like GoDaddy or Namecheap)
4. Wait 5–30 minutes for DNS to propagate
5. Netlify automatically issues a free SSL certificate — your site will be served over HTTPS

---

## Part 2: Managing Form Submissions

### Viewing submissions in Netlify

All form submissions are stored in your Netlify dashboard, even if you miss the email:

1. Site dashboard → **Forms**
2. Click on either form name to see all submissions
3. Each submission shows the date, name, phone, email, service requested, city, and message

### Spam protection

Spam protection is automatic:
- Akismet spam filter (built into Netlify) catches most spam
- A hidden "honeypot" field on your forms catches bots
- Spam submissions are filtered out automatically — you won't get emailed about them

### Submission limits (free plan)

- **100 form submissions per month** combined across both forms
- If you ever exceed this, Netlify pauses form notifications until next month — but **all submissions are still saved** in the dashboard, so you won't miss anything
- If you start getting more than 100/month consistently, you can upgrade to **Forms Level 1** for $19/month which gives you 1,000 submissions/month

---

## Part 3: How the Site Updates Work

Your website is connected to GitHub. Any changes pushed to the `main` branch automatically trigger a new deploy within ~1 minute. You don't need to do anything — it's fully automatic.

If you (or whoever maintains the site) need to:
- **Change text or images** → Edit the code in GitHub, push to `main`, site updates automatically
- **Add a new page** → Same as above
- **Pause deploys** → Site dashboard → **Site configuration** → **Build & deploy** → **Stop builds**

### Rolling back to a previous version

If a new deploy ever breaks something:

1. Site dashboard → **Deploys**
2. Find the previous working deploy (green checkmark)
3. Click it → **Publish deploy**

Your site reverts instantly. The broken version stays in history but is no longer live.

---

## Part 4: Troubleshooting

### "I'm not getting email notifications"

1. Check spam/junk folder
2. Verify the notification is set up: **Forms → Form notifications**
3. Verify the email address is correct (check for typos)
4. Submit a test from the live site and check **Forms → [form name]** to confirm Netlify is receiving submissions

### "Form submits but I see an error message"

1. Look at the browser console for specific errors (right-click → Inspect → Console)
2. Check **Site dashboard → Deploys → [latest deploy] → Logs** for build errors

### "I want to test the form without sending a real email"

Submit on the live site, then go to **Forms → [form name]** to see it in the dashboard — emails arrive separately. You can also delete test submissions from the dashboard.

### "How do I add another team member?"

Account dashboard → **Team settings** → **Members** → **Invite to team**

---

## Quick Reference

| What I want to do | Where to go |
|---|---|
| See new form submissions | Site dashboard → **Forms** |
| Change who gets emails | Site dashboard → **Forms** → **Form notifications** |
| Change my site URL | Site dashboard → **Site configuration** → **Site details** |
| Connect my domain | Site dashboard → **Domain management** |
| See deploy history | Site dashboard → **Deploys** |
| Roll back a bad update | Site dashboard → **Deploys** → click old version → **Publish** |
| Pause auto-deploys | Site dashboard → **Site configuration** → **Build & deploy** |

---

## Need Help?

- **Netlify Support:** [support.netlify.com](https://support.netlify.com) — free chat support, fast responses
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)

For website content changes, contact the developer who built the site.
