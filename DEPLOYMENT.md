# GitHub Pages Deployment Guide

## Setup Instructions

1. **Push your code to GitHub**:

   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment configuration"
   git push origin master
   ```

2. **Enable GitHub Pages in your repository**:

   - Go to your repository: https://github.com/Manusha-Sathsara/healthsync
   - Click on **Settings** tab
   - Scroll down to **Pages** section in the left sidebar
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically run when you push to the master branch

3. **Access your deployed site**:
   - Your site will be available at: `https://manusha-sathsara.github.io/healthsync/`
   - The first deployment may take a few minutes

## What was configured:

### Next.js Configuration (`next.config.ts`):

- `output: 'export'` - Enables static export
- `trailingSlash: true` - Adds trailing slashes to URLs
- `basePath: '/healthsync'` - Sets the base path for GitHub Pages
- `assetPrefix: '/healthsync/'` - Prefixes assets with the base path
- `images: { unoptimized: true }` - Disables image optimization for static export

### GitHub Actions Workflow (`.github/workflows/deploy.yml`):

- Builds the Next.js app
- Exports static files to the `out` directory
- Deploys to GitHub Pages

### Files Added/Modified:

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/.nojekyll` - Bypasses Jekyll processing
- `next.config.ts` - Updated for static export
- `package.json` - Added export script

## Troubleshooting:

1. **If deployment fails**:

   - Check the Actions tab in your GitHub repository for error logs
   - Ensure your main branch is named `master`

2. **If images don't load**:

   - Make sure all images are in the `public` folder
   - Image paths should start with `/` (e.g., `/healthsync.png`)

3. **If styling looks broken**:
   - Clear your browser cache
   - Check if CSS files are loading correctly in the browser dev tools

## Development vs Production:

- **Development**: Run `npm run dev` - works with regular paths
- **Production**: The deployed version uses the `/healthsync` base path automatically

Your site should now be ready for deployment to GitHub Pages!
