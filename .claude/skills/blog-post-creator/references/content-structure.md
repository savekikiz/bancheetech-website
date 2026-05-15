# Content Structure Reference

This file explains the prose rhythm, heading hierarchy, and CTA block to use when writing posts.

## Paragraph rhythm

A blog post that reads well online has visual breathing room. The eye gets tired in a wall of text. Aim for:

- **2–5 sentences per paragraph.** If a paragraph hits 6+ sentences, split it.
- **Blank line between paragraphs.** Markdown requires it, and it visibly separates ideas.
- **Vary sentence length.** Mix short punchy sentences ("AI ทำได้") with longer explanatory ones. This is what makes prose feel alive rather than mechanical.

Avoid these patterns:
- Bullet lists where prose would work — bullets are for parallel items, not for hiding bad sentences.
- Consecutive paragraphs that all start with the same word (e.g. all starting with "การ...").
- Sentences over ~30 words. Thai readers especially benefit from shorter sentences.

## Heading hierarchy

The site applies these styles automatically through Tailwind Typography + custom prose colors:

| Level | Used for | Visual on site |
|-------|---------|----------------|
| `#` H1 | Article title (only once, at the very top after frontmatter) | Largest, blue-800, bold |
| `##` H2 | Major sections (3–6 per post) | Large, blue-800, bold, with top margin |
| `###` H3 | Sub-points inside an H2 section | Medium, blue-800, bold |
| `####` H4+ | **Avoid.** Indicates the section needs reorganizing. | Cramped |

You do NOT need to write `<h2 style="font-size:...">` or any HTML for headings. Markdown `##` is enough — the styling is global.

## Section template

A standard H2 section looks like this:

```markdown
## หัวข้อใหญ่ของ section

ย่อหน้าแรกของ section นี้ อธิบายภาพรวมว่า section นี้พูดเรื่องอะไร ทำไมผู้อ่านควรสนใจ ยาว 2–4 ประโยค

ย่อหน้าที่สองลงรายละเอียด อาจมี **คำสำคัญ** เน้นด้วยตัวหนา 1–2 คำต่อย่อหน้า ไม่เกินนี้

<!-- [ใส่รูป: ภาพประกอบ section นี้] -->
![คำอธิบายรูป](/blog-images/{slug}/section-name.png)

ย่อหน้าที่สามอาจสรุป section หรือเชื่อมไป section ถัดไป
```

## Lists, tables, quotes — when to use which

- **Bulleted list (`-`)** — for 3+ parallel items that don't have a natural order
- **Numbered list (`1.`)** — for steps, rankings, or items the reader should follow in sequence
- **Table** — for comparisons (เปรียบเทียบ Pro vs Max), feature matrices, or before/after
- **Blockquote (`>`)** — for a key insight, a customer quote, or a "💡 Tips" callout. One per post is plenty.

A medium-length post (~800 words) should have at least one list and one table to vary texture.

## TL;DR / summary block

Near the end, before the CTA, give the reader a quick recap. Two common formats:

**Format A — Step table:**

```markdown
## สรุป

| ขั้นตอน | สิ่งที่ต้องทำ |
|--------|------------|
| 1 | ... |
| 2 | ... |
```

**Format B — 3-bullet TL;DR:**

```markdown
## สรุป 3 ข้อ

- **ข้อ 1** — สั้น กระชับ
- **ข้อ 2** — สั้น กระชับ
- **ข้อ 3** — สั้น กระชับ
```

Pick A for how-to / tutorial posts, B for opinion / explainer posts.

## CTA block (always at the bottom)

End every post with this exact structure. Customize only the opening line.

```markdown
---

### 📞 [คำเชิญที่เกี่ยวกับหัวข้อบทความ]?

BancheeTech ให้บริการ consult เรื่องการนำ AI มาใช้ Transform ระบบบัญชีของ SME และสำนักงานบัญชี

👉 [ติดต่อเราทาง Facebook](https://www.facebook.com/LupinxTaxandAccounting)
👉 อีเมล: webancheetech@gmail.com
👉 โทร: (+66) 83 907 6303
```

Examples of the opening line tailored to the topic:
- Tutorial: "ต้องการคำปรึกษาเรื่องการใช้ AI กับงานบัญชี?"
- Tool review: "อยากนำเครื่องมือนี้มาใช้กับธุรกิจของคุณ?"
- Industry trend: "พร้อมปรับตัวสู่ยุค AI Accounting แล้วหรือยัง?"

The horizontal rule (`---`) before the CTA visually separates it from the body. Keep it.
