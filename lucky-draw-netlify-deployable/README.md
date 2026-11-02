# Lucky Draw Live - Netlify deployment

A generic, anonymous, multi-device Lucky Draw. It stores only anonymous browser tokens, assigned numbers, draw state, and winning numbers. No names, email addresses, sign-in, or company branding.

## Deploy through Netlify and GitHub (recommended)
1. Create a new GitHub repository.
2. Upload everything inside this folder to the repository root.
3. In Netlify, choose **Add new project > Import an existing project** and select the repository.
4. Netlify reads `netlify.toml`. No build command is needed. Publish directory is `public`; Functions directory is `netlify/functions`.
5. In **Project configuration > Environment variables**, add `HOST_PIN` with a private numeric PIN, for example `7319`.
6. Trigger a new deploy after saving the variable.
7. Open the deployed URL with `?mode=host`, enter the PIN, and project that screen.
8. The QR code points participants to the same site with `?mode=join`.

## Important
- Do not use the fallback PIN 2468 for a real event. Configure `HOST_PIN` in Netlify.
- Test with at least two phones before the event.
- Use **Reset draw** before admitting participants.
- Entries are anonymous but stored in the site's Netlify Blobs until reset.
- Participant numbers range from 001 to 999.

## Local UI preview
Opening `public/index.html` directly will show the interface, but live join and draw actions require the Netlify Functions environment.
