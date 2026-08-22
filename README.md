# BancheeTech Website

เว็บไซต์ BancheeTech — บริการวางและ Transform ระบบบัญชีด้วย AI สำหรับ SMEs และสำนักงานบัญชี

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript

## เริ่มต้น

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npx eslint src/ # lint
```

## โครงสร้าง

```
src/app/            หน้าเว็บ (App Router) + globals.css (design token ทั้งหมด)
src/components/ui/  primitive ที่ใช้ซ้ำ — Button, Card, Section, Container, PageHeader, Tag, Input
src/components/     Navbar, Footer, BlogCard, BlogList
src/lib/            blog.ts (โหลด markdown), nav.ts (เมนูกลาง), cn.ts
content/blog/       บทความ Markdown + frontmatter (title, date, excerpt, tags)
design/             ไฟล์อ้างอิงระบบดีไซน์
```

## Design system

Token ทั้งหมดอยู่ใน `@theme` ของ `src/app/globals.css` ไฟล์เดียว ไม่มี `tailwind.config` (Tailwind v4 เป็น CSS-first)

**กฎที่ต้องรักษาไว้**

- **พื้นหลังเป็นขาวล้วน `#FFFFFF`** ความอบอุ่นมาจากการ์ด ไม่ใช่จากพื้น
- **ยกระดับด้วยเส้น ไม่ใช่เงา** ใช้ `border-hairline` (`#E5E7EB`) — ในระบบมีสีเส้นเดียว ไม่ใช้ `shadow-*` กับการ์ด
- **น้ำเงิน = โครงสร้าง / ส้ม = จุดเน้น** ส้มใช้กับ CTA, คำเน้น, ไอคอน เท่านั้น ห้ามเอาไปทาพื้น section
- **`rounded-full` สงวนไว้ให้ปุ่ม CTA** เท่านั้น — tag/badge ใช้ `rounded-sm`
- **สองฟอนต์ ไม่สลับหน้าที่** — `font-display` (Anuphan) สำหรับหัวข้อ, `font-sans` (IBM Plex Sans Thai) สำหรับเนื้อความ

**contrast ที่ต้องระวัง** — `accent-500`/`accent-600` ใช้เป็นตัวอักษรบนพื้นขาวไม่ผ่าน WCAG AA
ถ้าต้องการส้มเป็นตัวอักษรให้ใช้ `accent-700` (5.2:1) และปุ่มพื้นส้มใช้ตัวอักษรสี `ink-950` (6.7:1) ไม่ใช่สีขาว (2.8:1)

## หมายเหตุ

- ฟอร์มในหน้า `/contact` ยังไม่ได้ต่อ backend (ปิดใช้งานไว้และชี้ผู้ใช้ไป Facebook/อีเมลแทน)
- `/claude-101-workshop` redirect ออกไป Notion — ตั้งค่าใน `next.config.ts`
