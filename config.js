// ตั้งค่าการเชื่อมต่อ Supabase
// หาค่าได้ที่ Supabase Dashboard > Project Settings > API Keys (หรือปุ่ม Connect ด้านบน)
// คีย์นี้เป็นคีย์สาธารณะ ใส่ในหน้าเว็บได้ ข้อมูลถูกป้องกันด้วยสิทธิ์ใน schema.sql
// ห้ามใส่ secret key หรือ service_role key ในไฟล์นี้เด็ดขาด

window.SUPABASE_URL = "https://ใส่รหัสโปรเจกต์.supabase.co";
window.SUPABASE_ANON_KEY = "ใส่ Publishable key (sb_publishable_...) หรือ anon key";
