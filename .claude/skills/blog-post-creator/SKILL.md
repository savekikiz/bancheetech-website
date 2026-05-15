---
name: blog-post-creator
description: Creates well-structured Markdown blog posts for the BancheeTech website (content/blog/*.md) with proper frontmatter, paragraph-based body, bold hierarchical headings, images interspersed between paragraphs, and a BancheeTech contact CTA. Use this skill whenever the user asks to write, draft, generate, create, or add a blog post / article / บทความ / blog / เนื้อหา for the website — including phrases like "เขียน blog เรื่อง...", "สร้างบทความ...", "อยากได้ blog เกี่ยวกับ...", "draft a post about...", or any request that results in a new file under content/blog/. Trigger even when the user does not say the word "skill" — if they're producing content for the website blog, this skill applies.
---

# Blog Post Creator (BancheeTech)

This skill produces a single Markdown file at `content/blog/{slug}.md` that renders correctly through the existing blog system (`src/lib/blog.ts` + `src/app/blog/[slug]/page.tsx`).

The website is a Next.js App Router project. Posts are parsed with `gray-matter` for frontmatter and `remark` + `remark-html` (with `sanitize: false`) for body. Raw HTML inside Markdown is supported and rendered — that's why per-image sizing via `<img width="...">` works.

## When to use this skill

Use it for any request that creates a new blog article on the BancheeTech site. Common phrasings:

- "เขียน blog เรื่อง [หัวข้อ]"
- "สร้างบทความ Markdown เกี่ยวกับ ..."
- "อยากได้ content blog เรื่อง ..."
- "ช่วย draft post เกี่ยวกับ ..."
- "เพิ่ม blog ใหม่"

Skip the skill only if the user just wants to edit an existing post in place, or asks about blog system architecture rather than content.

## Workflow

Follow these steps in order. Don't ask all questions upfront — gather missing info naturally as you go.

### 1. Gather the brief

Confirm or fill in the following. If the user gave a brief paragraph, parse what you can and only ask about gaps:

- **Topic / working title** — what is the article about?
- **Target audience** — accountants, SMEs, accounting firms, general?
- **Key angles or talking points** — 3–7 bullets the article must cover
- **Approximate length** — short (~400 words), medium (~800 words), long (~1500 words). Default to medium.
- **Slug** — kebab-case English filename (e.g. `ai-bank-reconciliation`). Generate one from the title if the user didn't supply it.
- **Tags** — 4–7 hashtags. Mix Thai and English. Include at least one broad tag (`AI`, `บัญชี`, `SME`) and one specific tag.
- **Images** — does the user have images ready, or should you leave placeholder paths under `/blog-images/{slug}/`?

If the user said "ใส่ข้อมูลแล้วให้ออกมาเลย" or similar, infer reasonable defaults and proceed — don't stall.

### 2. Plan the structure

Before writing, sketch the section outline mentally. A good BancheeTech blog post has this rhythm:

1. **H1 title** (matches the frontmatter `title`, appears once at the top)
2. **Intro** — 1–2 short paragraphs that hook the reader and state what they'll get
3. **3–6 H2 sections** — each section has 1–3 paragraphs, optionally followed by an image, list, or table
4. **Wrap-up** — a summary table or 3-bullet TL;DR
5. **CTA block** — invite reader to contact BancheeTech (Facebook / email / phone)

H3 is fine inside H2 sections for sub-points. Avoid H4+ — it makes the page feel dense.

### 3. Write the body using the formatting rules below

See `references/content-structure.md` for paragraph rhythm and heading sizing details.
See `references/image-patterns.md` for the three image patterns (Markdown default, HTML with width, centered with caption) and when to use each.
See `references/brand-info.md` for BancheeTech contact details and standard CTA block.

The most important formatting rules at a glance:

- **Paragraphs, not walls of text.** Each paragraph is 2–5 sentences. Blank line between paragraphs.
- **Images break up long sections.** After every 2–3 paragraphs of dense text, or at the end of each major H2 section, insert a relevant image. Don't pile images at the top or bottom only.
- **Headings carry the visual hierarchy.** Use `#` (only once, as the H1 title), `##` for major sections, `###` for sub-sections. The site already styles these large and bold via Tailwind Typography + `prose-headings:text-primary-800` — you don't need extra HTML for sizing.
- **Bold sparingly.** Bold the 2–3 most important phrases per section. If everything is bold, nothing is.
- **Lists, tables, quotes** add variety. Use at least one of each across a medium-length post.

### 4. Pick image placements and paths

Even if the user has no images yet, insert image placeholders at the right structural points so they can drop in PNGs later without re-editing the prose.

Default placeholder convention:
```
/blog-images/{slug}/{descriptive-name}.png
```

For each placeholder, leave a short HTML comment one line above so it's easy to find later:
```markdown
<!-- [ใส่รูป: คำอธิบายว่ารูปนี้ควรเป็นอะไร] -->
![alt text](/blog-images/{slug}/hero.png)
```

Pick the image pattern based on purpose:
- **Default Markdown `![](...)`** for editorial / illustrative images. The blog CSS auto-caps height at 480px and adds border-radius + shadow.
- **`<img width="200|300|400">`** for small inline diagrams, screenshots of a UI button, or logos.
- **`<div style="text-align:center">…</div>`** when the image needs a caption (`<p><em>...</em></p>` below).
- **Full-width `<img width="100%">`** for hero / banner images only — don't overuse.

### 5. Compose the frontmatter

The blog system requires exactly these keys. Other keys are ignored.

```yaml
---
title: "ข้อความหัวเรื่องที่จะแสดงบน tab และหน้า list"
date: "YYYY-MM-DD"
excerpt: "1–2 ประโยคสรุปบทความ จะโชว์บนการ์ดในหน้า /blog และใน meta description"
tags: ["Tag1", "Tag2", "Tag3"]
---
```

Rules:
- `date` — use today's date in `YYYY-MM-DD` format unless the user specified otherwise. Posts are sorted descending by date.
- `excerpt` — 80–160 characters. Should make a reader want to click.
- `tags` — array, 4–7 items. These power the hashtag search in `BlogList.tsx`. Don't put `#` in the strings; the UI adds it.
- `title` — keep under ~70 characters so it doesn't wrap awkwardly on cards.

### 6. Save the file

Write to `content/blog/{slug}.md` (relative to the project root, which is the website directory). Verify the slug doesn't collide with an existing file — if it does, append `-2` or pick a more specific slug.

### 7. Tell the user what you produced

After writing, give the user:
- The full file path
- The slug they can use to preview at `/blog/{slug}` on the running dev server
- A list of image placeholders that need real images (with the suggested `/public/blog-images/{slug}/` paths)
- Any assumptions you made when filling in gaps from their brief

Keep this summary short — under 10 lines of prose plus a small bulleted list.

## What good output looks like

A reader scrolling through the rendered post should:
- See a clear H1 title at the top
- Read a 1–2 paragraph hook
- Move through H2 sections with images breaking up the prose every 200–400 words
- Hit a summary table or TL;DR before the end
- See a contact CTA at the bottom

A bad output would be: a wall of text with all images at the top, headings that look like body text, or a generic CTA copy-pasted from another site. Avoid those.

## Reference files

Read the relevant reference file when you need detail:

- `references/content-structure.md` — paragraph rhythm, heading hierarchy, CTA block template
- `references/image-patterns.md` — the three image patterns with copy-paste snippets
- `references/brand-info.md` — BancheeTech contact info, brand voice, target audience
- `assets/template.md` — a fillable starter template for a typical post
