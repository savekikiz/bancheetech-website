"use client";

import { useEffect } from "react";

// =====================================================
// ⚠️ สำคัญ: ใส่ Page ID ของ Facebook Page ที่นี่
// วิธีหาค่า Page ID:
//   1. เปิด Facebook Page → Settings → Page transparency
//   2. หรือไปที่ https://www.facebook.com/LupinxTaxandAccounting
//      → About → Page ID
// =====================================================
const FACEBOOK_PAGE_ID = "103261901756030";

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (config: Record<string, unknown>) => void;
      XFBML: { parse: () => void };
    };
  }
}

export default function MessengerButton() {
  useEffect(() => {
    // Init Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v21.0",
      });
    };

    // Load SDK script if not already loaded
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Facebook SDK root */}
      <div id="fb-root" />

      {/* Messenger Chat Plugin */}
      <div
        className="fb-customerchat"
        // @ts-expect-error — Facebook SDK custom attributes
        attribution="biz_inbox"
        page_id={FACEBOOK_PAGE_ID}
        theme_color="#1E40AF"
        logged_in_greeting="สวัสดีครับ! ยินดีให้คำปรึกษาเรื่องระบบบัญชี มีอะไรให้ช่วยไหมครับ?"
        logged_out_greeting="สวัสดีครับ! ยินดีให้คำปรึกษาเรื่องระบบบัญชี มีอะไรให้ช่วยไหมครับ?"
        greeting_dialog_display="fade"
        greeting_dialog_delay="5"
      />
    </>
  );
}
