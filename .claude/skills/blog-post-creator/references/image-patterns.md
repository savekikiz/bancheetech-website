# Image Patterns Reference

The blog system uses `remark-html` with `sanitize: false`, so raw HTML `<img>` tags inside Markdown work as expected. CSS in `src/app/globals.css` (`.blog-content` rules) handles default sizing and lets explicit `width`/`style` attributes override.

This gives you three ergonomic patterns. Pick by purpose, not by feel.

## Pattern 1 — Markdown default

Use for editorial photos, screenshots, and any image where you just want it to look good with no fussing.

```markdown
![alt text describing what the image shows](/blog-images/{slug}/descriptive-name.png)
```

What you get automatically:
- Max height capped at 480px (so even tall images stay reasonable)
- Width auto, centered horizontally
- Rounded corners (`border-radius: 12px`)
- Subtle drop shadow

**Use this pattern by default** unless you have a specific reason to customize.

## Pattern 2 — HTML img with explicit width

Use when you need a smaller image (UI button screenshot, inline diagram, logo callout) or a specific size that the default cap doesn't give you.

```html
<img src="/blog-images/{slug}/button.png" alt="ปุ่ม Upgrade plan" width="300" style="border-radius: 12px;" />
```

Common widths:
- `200` — tiny UI element, badge, icon callout
- `300` — small screenshot, sidebar-sized
- `400`–`500` — medium screenshot
- `100%` — full-width hero / banner

When you specify `width` or `style`, the default 480px height cap does NOT apply — the explicit attribute wins. That's by design.

## Pattern 3 — Centered with caption

Use when the image needs a caption or sits as a "figure" within prose.

```html
<div style="text-align: center;">
  <img src="/blog-images/{slug}/diagram.png" alt="คำอธิบาย" width="500" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
  <p><em>รูปที่ 1: คำอธิบายใต้รูป</em></p>
</div>
```

The skill's globals.css adds `margin: auto` to images inside `div[style*="text-align"]`, so they truly center horizontally (not just the caption).

## External / Google Drive images

For Google Drive, use the existing proxy route (`/api/gdrive-image?id=FILE_ID`) — direct Drive URLs are blocked by ORB. Get FILE_ID from the share link `https://drive.google.com/file/d/{FILE_ID}/view`.

```markdown
![From Drive](/api/gdrive-image?id=1abc...xyz)
```

Or sized:
```html
<img src="/api/gdrive-image?id=1abc...xyz" alt="From Drive" width="400" />
```

For other external hosts, normal `https://...` URLs work. Prefer local `/blog-images/...` paths when possible — they don't depend on third-party hosting.

## Placement guidelines

Where to put images matters as much as which pattern to use.

- **One image near the top** — within the first 2 paragraphs. Sets the visual tone of the post.
- **One image per major H2 section** — breaks up the prose. For long sections, two images is fine.
- **Don't cluster images.** Two images back-to-back with no prose between them looks broken.
- **Don't end with an image.** End with prose (the CTA block). Last image should sit at least one paragraph before the end.
- **Caption when the image isn't self-explanatory.** Use Pattern 3 (centered with caption) for diagrams, charts, and screenshots that need labeling.

## Placeholder comment convention

When the user doesn't have actual images yet, always leave a one-line HTML comment above the placeholder so future-you (or the user) can find it fast:

```markdown
<!-- [ใส่รูป: หน้าจอ login ของ claude.ai หลังคลิก Continue with Google] -->
![หน้า login Claude](/blog-images/how-to-subscribe-claude-pro/login-screen.png)
```

The comment is invisible in the rendered post but appears clearly in the source. Make the description specific — "screenshot" alone isn't useful; "screenshot of the Settings dropdown showing the Upgrade plan menu item" is.
