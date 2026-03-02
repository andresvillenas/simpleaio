# Azure Static Web Apps dummy site for Ezoic ads.txt

This workspace includes one minimal static site:

- `sites/simplea.io`

It returns a `301` redirect from `/ads.txt` to the Ezoic Ads.txt Manager URL for `simplea.io`.

## Deploy steps

1. Create an Azure Static Web App.
2. Point the app artifact location to `sites/simplea.io`.
3. Add custom domain `simplea.io` (and optionally `www.simplea.io`).
4. Wait for domain validation/SSL provisioning.
5. Test `https://simplea.io/ads.txt`.

You should see a `301` redirect to `https://srv.adstxtmanager.com/19390/simplea.io`.
