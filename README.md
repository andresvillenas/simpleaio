# Azure Static Web Apps dummy site for Ezoic ads.txt

This workspace includes one minimal static site with dynamic ads.txt switching:

- `sites/simplea.io`

## Features

- **Dynamic ads.txt switching**: Toggle between two modes via a button on the homepage
  - **Redirect mode**: 301 redirect to Ezoic Ads.txt Manager  
  - **Direct mode**: Serves Google AdSense ads.txt content directly
- **Homepage admin panel**: Shows current mode and allows one-click toggling
- **Azure Functions API**: Serverless backend handles the switching logic

## How the toggle works

The mode is stored in-memory while the Azure Function is active (warm). This means:
- ✅ Quick toggling via button - takes effect immediately
- ✅ No redeployment needed for temporary switches
- ⚠️ Mode resets to default on function cold start (after ~20 min of inactivity)

**For permanent mode changes:**
1. Edit `sites/simplea.io/api/shared-state.js` and change the default value
2. Commit and push to trigger automatic redeployment
3. Or set environment variable `ADS_MODE` in Azure Portal (set to `redirect` or `direct`)

## Deploy steps

1. Create an Azure Static Web App.
2. Connect to GitHub repository `andresvillenas/simpleaio`, branch `main`
3. Build configuration:
	- App location: `./sites/simplea.io`
	- API location: `./sites/simplea.io/api`
	- Output location: `.`
4. Add GitHub secret `AZURE_STATIC_WEB_APPS_API_TOKEN` with deployment token from Azure
5. Add custom domain `simplea.io` (and optionally `www.simplea.io`)
6. Wait for domain validation/SSL provisioning
7. Test:
	- Homepage: `https://simplea.io/`
	- ads.txt: `https://simplea.io/ads.txt`

## Testing

1. Visit `https://simplea.io/` to see the admin panel
2. Check current mode
3. Click "Toggle Mode" to switch
4. Test `/ads.txt` to verify:
	- **Redirect mode**: Returns 301 to Ezoic
	- **Direct mode**: Returns `google.com, pub-5816033971207455, DIRECT, f08c47fec0942fa0`
