---
title: "ตัวอย่างบทความ: การใส่รูปภาพและลิงก์ใน Blog"
date: "2025-04-13"
excerpt: "บทความตัวอย่างสำหรับการเขียน Blog ที่มีรูปภาพ ลิงก์ไปหน้าอื่น และการจัดรูปแบบต่างๆ ใช้เป็นแนวทางในการเขียนบทความใหม่"
tags: ["ตัวอย่าง", "เคล็ดลับ"]
---

# ตัวอย่างบทความ: การใส่รูปภาพและลิงก์

บทความนี้เป็นตัวอย่างการเขียน Markdown ที่มีรูปภาพและลิงก์ สามารถใช้เป็น template สำหรับเขียนบทความใหม่ได้เลย

---

## การใส่รูปภาพ

### แบบที่ 1: Markdown ปกติ (ใช้ขนาด default)

รูปจะได้ขนาด default คือ ความสูงสูงสุด 480px จัดกึ่งกลาง มีมุมโค้งและเงา:

```
![คำอธิบายรูป](/path/to/image.png)
```

ตัวอย่าง:

![BancheeTech Logo](/bancheetech-logo.png)

---

### แบบที่ 2: HTML img tag (ปรับขนาดต่อรูปได้!)

ใช้ `<img>` tag เพื่อ **กำหนดขนาดเฉพาะแต่ละรูป** ได้อิสระ:

#### รูปเล็ก (width 200px)

```html
<img src="/bancheetech-logo.png" alt="Logo เล็ก" width="200" />
```

<img src="/bancheetech-logo.png" alt="Logo เล็ก" width="200" style="border-radius: 12px;" />

#### รูปกลาง (width 400px)

```html
<img src="URL" alt="คำอธิบาย" width="400" />
```

<img src="https://placehold.co/800x400/1E40AF/white?text=400px+Width" alt="รูปกลาง" width="400" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />

#### รูปเต็มความกว้าง (width 100%)

```html
<img src="URL" alt="คำอธิบาย" width="100%" />
```

<img src="https://placehold.co/800x300/F97316/white?text=Full+Width+Image" alt="รูปเต็ม" width="100%" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />

#### กำหนดทั้ง width และ height

```html
<img src="URL" alt="คำอธิบาย" width="300" height="200" />
```

<img src="https://placehold.co/300x200/1E40AF/white?text=300x200" alt="กำหนดขนาด" width="300" height="200" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />

#### จัดตำแหน่งรูป (กึ่งกลาง)

```html
<div style="text-align: center;">
  <img src="URL" alt="คำอธิบาย" width="300" />
  <p><em>คำอธิบายใต้รูป</em></p>
</div>
```

<div style="text-align: center;">
  <img src="https://placehold.co/300x200/F97316/white?text=Centered" alt="จัดกลาง" width="300" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
  <p><em>รูปนี้จัดกึ่งกลาง พร้อมคำอธิบาย</em></p>
</div>

---

### แบบที่ 3: รูปจาก Google Drive

```html
<!-- Markdown ปกติ -->
![คำอธิบาย](/api/gdrive-image?id=FILE_ID)

<!-- HTML ปรับขนาดได้ -->
<img src="/api/gdrive-image?id=FILE_ID" alt="คำอธิบาย" width="400" />
```

**วิธีหา FILE_ID**: จาก link `https://drive.google.com/file/d/{FILE_ID}/view` เอาส่วน FILE_ID มาใส่

ตัวอย่าง (ขนาด 400px):

<img src="/api/gdrive-image?id=1yh34eKQzlz1acrnqYwkIsuhxc5GOdkTC" alt="รูปจาก Google Drive" width="400" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />

---

## สรุปวิธีใส่รูปภาพ

| วิธี | ปรับขนาดได้? | ตัวอย่าง |
|------|-------------|---------|
| `![alt](url)` | ❌ ใช้ขนาด default | Markdown ปกติ ง่ายสุด |
| `<img src="url" width="300" />` | ✅ ปรับได้ทุกรูป | กำหนด width/height เอง |
| `<div style="text-align:center">` | ✅ ปรับได้ + จัดตำแหน่ง | ครบสุด |

---

## การใส่ลิงก์

### ลิงก์ไปเว็บภายนอก

- อ่านเพิ่มเติมเกี่ยวกับ [Next.js Framework](https://nextjs.org/) ที่เราใช้พัฒนาเว็บไซต์
- ติดตามเราบน [Facebook Page](https://www.facebook.com/LupinxTaxandAccounting)
- ศึกษาเรื่อง AI เพิ่มเติมได้ที่ [Google AI](https://ai.google/)

### ลิงก์ไปหน้าอื่นภายในเว็บไซต์

- กลับไป [หน้าหลัก](/)
- ดู [บริการของเรา](/about)
- [ติดต่อเรา](/contact) เพื่อรับคำปรึกษา

### ลิงก์แบบใส่ในข้อความ

BancheeTech ให้บริการ [วางระบบบัญชีดิจิทัล](/about) สำหรับ SMEs โดยใช้เทคโนโลยี [AI](https://ai.google/) เข้ามาช่วยเพิ่มประสิทธิภาพ สนใจสามารถ [ติดต่อทีมงาน](/contact) ได้ตลอดเวลา

---

## ตัวอย่างการจัดรูปแบบอื่นๆ

### ข้อความเน้น

- **ตัวหนา** ใช้ `**ข้อความ**`
- *ตัวเอียง* ใช้ `*ข้อความ*`
- ~~ขีดฆ่า~~ ใช้ `~~ข้อความ~~`

### รายการ

1. วิเคราะห์กระบวนการปัจจุบัน
2. ออกแบบระบบใหม่
3. พัฒนาและทดสอบ
4. อบรมและเริ่มใช้งาน

### ตาราง

| หัวข้อ | รายละเอียด |
|--------|-----------|
| บริการ | วางระบบบัญชี AI |
| กลุ่มเป้าหมาย | SMEs และสำนักงานบัญชี |
| เทคโนโลยี | AI, Cloud, Automation |

### Code block

```
// ตัวอย่าง code
const invoice = {
  company: "BancheeTech",
  service: "AI Accounting",
  amount: 50000
};
```

### Quote

> "การ Transform ระบบบัญชีไม่ใช่แค่เปลี่ยนซอฟต์แวร์ แต่คือการเปลี่ยนวิธีคิดทั้งองค์กร"
> — BancheeTech

---

*สนใจเขียน blog? ดูตัวอย่างไฟล์นี้ได้ที่ `content/blog/sample-with-images.md`*
