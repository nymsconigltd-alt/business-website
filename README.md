# Nymsco Nig Ltd — Corporate Website

Official corporate website for **Nymsco Nig Ltd**, built with Next.js (App Router, TypeScript, Tailwind CSS) and structured for **Flutterwave** merchant verification and **Coolify** deployment.

## Before Submitting to Flutterwave

Update the placeholder company details in `src/config/company.ts` with your exact CAC registration and operational details:
- **RC Number** (`rcNumber`)
- **Registered Office Address** (`address`)
- **Official Email & Support Email** (`email`, `supportEmail`)
- **Phone Number** (`phone`)
- **Products / Services & Pricing** (`services` and `pricingPackages`)

All required compliance policies are included and linked in the footer:
- `/policies/privacy-policy` (NDPR / Nigeria Data Protection Act compliant)
- `/policies/terms-and-conditions`
- `/policies/refund-policy`
- `/policies/delivery-policy`

## Local Development

```bash
npm install
npm run dev
```

## Deploying to Coolify

1. Push this repository to GitHub, GitLab, or Gitea.
2. In **Coolify**, create a new **Application** pointing to your repository and branch.
3. Set **Build Pack** to `Dockerfile` (uses the included multi-stage `Dockerfile` with Next.js `standalone` output).
4. Set **Port** to `3000`.
5. Set **Health Check Path** to `/api/health` (returns HTTP `200` `{ "status": "ok" }`).
6. Configure your custom domain with HTTPS enabled (required by Flutterwave).
7. Deploy.
