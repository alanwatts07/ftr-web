# Setting Up Cloudflare Tunnel for ftrai.uk

Since you already have `cloudflared` installed, follow these steps to expose your local FTR Headquarters to the world.

## 1. Login to Cloudflare
If you haven't already, authenticate `cloudflared`:
```bash
cloudflared tunnel login
```
This will open a browser window. Select `ftrai.uk`.

## 2. Create the Tunnel
Create a new tunnel named `ftrHq`:
```bash
cloudflared tunnel create ftrHq
```
*Take note of the Tunnel ID (UUID) output by this command.* 73cd7ecd-c568-40be-abbe-a440251c4536

## 3. Configure the Tunnel
I created a specific configuration file for this tunnel to avoid conflicting with your existing setups:
`/home/morpheus/.cloudflared/ftr_hq.yml`

It contains:
```yaml
tunnel: 73cd7ecd-c568-40be-abbe-a440251c4536
credentials-file: /home/morpheus/.cloudflared/73cd7ecd-c568-40be-abbe-a440251c4536.json

ingress:
  - hostname: ftrai.uk
    service: http://127.0.0.1:5173
  - service: http_status:404
```

> **Note**: `http://localhost:5173` is the default Vite port. If you build for production and serve with a different server (like `serve -s dist`), change the port accordingly (usually 3000 or 5000).

## 4. Route DNS
Route the traffic from `ftrai.uk` to your tunnel:
```bash
cloudflared tunnel route dns ftrHq ftrai.uk
```

## 5. Run the Tunnel
Start the tunnel using the custom configuration we created (note the flag placement):
```bash
cloudflared tunnel --config /home/morpheus/.cloudflared/ftr_hq.yml run ftrHq
```

## Production Deployment (Recommended)
Running `npm run dev` is fine for testing, but for a stable "Headquarters", build the static site and serve it.

1.  **Build**:
    ```bash
    npm run build
    ```
2.  **Preview/Serve**:
    ```bash
    npm run preview
    ```
    (This usually runs on port 4173. Update your `config.yml` if needed).

---
*End Transmission.*
