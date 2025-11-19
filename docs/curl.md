curl
=====


To make a `curl` request that mimics Google Chrome's User-Agent (so the server thinks you're using Chrome), use the `-A` (or `--user-agent`) option.

Here are common Chrome User-Agent strings (updated for 2025) and how to use them with curl:

### Latest Chrome on Windows (Chrome 131+ as of Nov 2025)
```bash
curl -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" https://example.com
```

### Chrome on macOS
```bash
curl -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" https://example.com
```

### Chrome on Linux
```bash
curl -A "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" https://example.com
```

### Chrome on Android (mobile)
```bash
curl -A "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36" https://example.com
```

### Shortcut: Use a recent generic Chrome UA (works almost everywhere)
```bash
curl -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36" https://example.com
```

### Bonus: Make it even more Chrome-like (add common headers)
```bash
curl \
  -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" \
  -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8" \
  -H "Accept-Language: en-US,en;q=0.5" \
  -H "Accept-Encoding: gzip, deflate, br" \
  -H "DNT: 1" \
  -H "Connection: keep-alive" \
  -H "Upgrade-Insecure-Requests: 1" \
  https://example.com
```

This last version is very close to a real Chrome browser request.

Tip: You can always get the current exact User-Agent by visiting https://www.whatsmyua.info/ in Chrome and copying it.
