# AURA FASHION - WEBSITE BÁN QUẦN ÁO & BLOG PHỐI ĐỒ CHUẨN SEO
> **Đồ án môn học:** SEO & Web Analytics (Thang điểm Rubric 10/10)  
> **Tech Stack:** Next.js 14 (App Router, Static HTML Export 100%), React 18, TypeScript, Tailwind CSS, Lucide Icons, Schema Markup (JSON-LD).

---

## 🌟 TỔNG QUAN HỆ THỐNG & ĐẶC ĐIỂM KỸ THUẬT

1. **Hỗ trợ Static HTML Export (Deploy được trên GitHub Pages, Vercel, Netlify):**
   - Đã cấu hình `output: 'export'` và `trailingSlash: true` trong `next.config.mjs`.
   - Toàn bộ 40 trang tĩnh, robots.txt, sitemap.xml và file `.nojekyll` được xuất thẳng vào thư mục `out/`.
   - Không cần server Node.js chạy ngầm khi deploy lên GitHub Pages.
   - 100% hình ảnh không bị lỗi, phản hồi 200 OK.

2. **Số Lượng Sản Phẩm Phong Phú (16 Sản phẩm chi tiết):**
   - **Áo Thun Nam Nữ (4 SP):** Áo thun compact trơn, áo thun heavyweight 260gsm, áo polo dệt pique tổ ong, áo thun sọc ngang retro.
   - **Áo Sơ Mi Thời Trang (4 SP):** Sơ mi Oxford Hàn Quốc, sơ mi đũi linen cổ Cuban, sơ mi flannel kẻ caro, sơ mi lụa Hàn chống nhăn.
   - **Quần Jean & Denim (4 SP):** Quần jean wide-leg vintage wash, quần jean straight fit, quần baggy rách gối, quần tây suông xếp ly.
   - **Áo Khoác & Outerwear (4 SP):** Áo khoác bomber kaki 2 lớp, áo hoodie nỉ bông boxy, áo khoác denim trucker, áo khoác gió dù 2 mặt.
   - **Trang Cửa Hàng Tổng Hợp (`/san-pham`):** Tích hợp tìm kiếm theo từ khóa, lọc theo danh mục, lọc theo mức giá và sắp xếp.

3. **Cẩm Nang Blog Phối Đồ (10 Bài Viết Dài Chuẩn SEO):**
   - Mục lục tự động (**Table of Contents**) có scrollspy.
   - Thanh tiến trình đọc (**Reading Progress Bar**).
   - Hệ thống **Internal Link** chéo tự nhiên giữa các bài viết và sản phẩm bán kèm.

4. **Hệ Thống Giỏ Hàng & Đặt Hàng Tương Tác:**
   - Chọn Size, Màu sắc và Tăng/giảm số lượng mượt mà.
   - Ngăn kéo Giỏ hàng (**Cart Drawer**) tự động trượt ra.
   - Cửa sổ Đặt hàng nhanh COD (**Checkout Modal**) kèm mã đơn tự động `#AF-XXXXXX`.

---

## 🚀 HƯỚNG DẪN ĐẨY LÊN GITHUB PAGES (2 CÁCH DỄ DÀNG)

### Cách 1: Tự động hoàn toàn bằng GitHub Actions (Khuyên dùng - Chuẩn nhất)

Dự án đã tích hợp sẵn file cấu hình CI/CD tại `.github/workflows/deploy.yml`. Bạn chỉ cần đẩy code lên GitHub:

1. **Khởi tạo Git và đẩy mã nguồn lên GitHub:**
   ```bash
   git add .
   git commit -m "feat: ready for github pages deployment"
   git branch -M main
   git remote add origin https://github.com/<tai-khoan-github-cua-ban>/<ten-repository>.git
   git push -u origin main
   ```
2. **Kích hoạt GitHub Pages:**
   - Trên GitHub, vào repository của bạn > bấm tab **Settings** (Cài đặt) > chọn mục **Pages** ở thanh bên trái.
   - Tại mục **Build and deployment** > phần **Source**, bấm đổi từ `Deploy from a branch` sang **`GitHub Actions`**.
3. **Hoàn tất:**
   - GitHub sẽ tự động chạy file workflow, biên dịch mã nguồn và cấp tên miền công khai dạng:
     `https://<tai-khoan-github-cua-ban>.github.io/<ten-repository>/`
   - Workflow đã được cấu hình tự động nhận diện tên repository để không bao giờ bị lỗi đường dẫn CSS hay ảnh!

---

### Cách 2: Dùng lệnh `npm run deploy` (Deploy thủ công bằng gh-pages)

Nếu bạn muốn deploy trực tiếp từ máy tính lên nhánh `gh-pages`:

1. Chạy lệnh:
   ```bash
   npm run deploy
   ```
   *(Lệnh này sẽ tự động build ra thư mục `out` và đẩy lên nhánh `gh-pages` trên GitHub của bạn).*
2. Vào **Settings** > **Pages** trên GitHub > chọn Source là **Deploy from a branch** > chọn nhánh **`gh-pages`** > thư mục **`/(root)`** > bấm **Save**.

---

## 💻 HƯỚNG DẪN CHẠY DƯỚI MÁY CỤC BỘ (LOCAL)

```bash
# 1. Chạy bản dev (chỉnh sửa trực tiếp)
npm run dev
# Mở: http://localhost:3000

# 2. Hoặc kiểm tra bản build tĩnh (export)
npm run export
```

---

## 📊 HƯỚNG DẪN CẤU HÌNH GA4 & GSC

Mở file `.env.local` ở thư mục gốc và dán mã đo lường của nhóm:
```env
NEXT_PUBLIC_SITE_URL=https://<tai-khoan-github>.github.io/<ten-repo>
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=YOUR_GOOGLE_SEARCH_CONSOLE_CODE
```

---

## 🎯 BẢNG NGHIÊN CỨU 30 TỪ KHÓA THEO SEARCH INTENT (PHỤC VỤ BÁO CÁO)

| STT | Từ khóa mục tiêu | Search Intent | URL Đích Tương Ứng | Loại Trang |
|:---:|---|:---:|---|:---:|
| 1 | áo thun cotton compact | Transactional | `/san-pham/ao-thun-cotton-compact-tron/` | Chi tiết SP |
| 2 | áo thun heavyweight 260gsm | Transactional | `/san-pham/ao-thun-oversize-heavyweight/` | Chi tiết SP |
| 3 | áo sơ mi oxford dài tay | Transactional | `/san-pham/ao-so-mi-oxford-tay-dai/` | Chi tiết SP |
| 4 | áo sơ mi đũi linen cuban | Transactional | `/san-pham/ao-so-mi-linen-tho-dui-tay-ngan/` | Chi tiết SP |
| 5 | quần jean ống rộng wide leg | Transactional | `/san-pham/quan-jean-ong-rong-wide-leg/` | Chi tiết SP |
| 6 | quần jean straight fit | Transactional | `/san-pham/quan-jean-ong-suong-straight-fit/` | Chi tiết SP |
| 7 | áo khoác bomber kaki 2 lớp | Transactional | `/san-pham/ao-khoac-bomber-kaki-2-lop/` | Chi tiết SP |
| 8 | áo hoodie nỉ bông boxy | Transactional | `/san-pham/ao-hoodie-ni-bong-unisex-boxy/` | Chi tiết SP |
| 9 | áo khoác bò denim trucker | Transactional | `/san-pham/ao-khoac-denim-trucker-jacket/` | Chi tiết SP |
| 10 | áo khoác gió dù chống nước | Transactional | `/san-pham/ao-khoac-gio-du-2-mat-chong-nuoc/` | Chi tiết SP |
| 11 | shop áo thun nam nữ cao cấp | Commercial | `/danh-muc/ao-thun/` | Danh mục |
| 12 | mua áo sơ mi form rộng hàn quốc | Commercial | `/danh-muc/ao-so-mi/` | Danh mục |
| 13 | mua quần jean ống rộng tôn dáng | Commercial | `/danh-muc/quan-jean/` | Danh mục |
| 14 | áo khoác bomber nam nữ đẹp | Commercial | `/danh-muc/ao-khoac/` | Danh mục |
| 15 | cửa hàng thời trang minimalist | Commercial | `/san-pham/` | Cửa hàng |
| 16 | cách phối đồ với áo thun trắng | Informational | `/blog/cach-phoi-do-voi-ao-thun-trang-nam-nu/` | Bài viết Blog |
| 17 | phối áo thun trắng nam nữ | Informational | `/blog/cach-phoi-do-voi-ao-thun-trang-nam-nu/` | Bài viết Blog |
| 18 | cách phối đồ với quần jean ống rộng | Informational | `/blog/cach-phoi-do-voi-quan-jean-ong-rong/` | Bài viết Blog |
| 19 | quần jean ống rộng phối áo gì | Informational | `/blog/cach-phoi-do-voi-quan-jean-ong-rong/` | Bài viết Blog |
| 20 | chọn size áo sơ mi nam | Informational | `/blog/bi-quyet-chon-size-ao-so-mi-chuan/` | Bài viết Blog |
| 21 | bảng size áo sơ mi chuẩn | Informational | `/blog/bi-quyet-chon-size-ao-so-mi-chuan/` | Bài viết Blog |
| 22 | phong cách minimalist trong thời trang | Informational | `/blog/phong-cach-minimalist-trong-thoi-trang/` | Bài viết Blog |
| 23 | capsule wardrobe là gì | Informational | `/blog/phong-cach-minimalist-trong-thoi-trang/` | Bài viết Blog |
| 24 | cách phối màu quần áo | Informational | `/blog/cach-phoi-mau-quan-ao-banh-xe-mau-sac/` | Bài viết Blog |
| 25 | xu hướng thời trang y2k | Informational | `/blog/xu-huong-thoi-trang-y2k-tro-lai/` | Bài viết Blog |
| 26 | mẹo phối đồ cho người gầy | Informational | `/blog/meo-phoi-do-cho-nguoi-gay/` | Bài viết Blog |
| 27 | cách phối áo khoác bomber | Informational | `/blog/cach-phoi-ao-khoac-bomber-streetwear/` | Bài viết Blog |
| 28 | cách bảo quản quần jean không phai màu | Informational | `/blog/huong-dan-bao-quan-quan-jean-ao-cotton/` | Bài viết Blog |
| 29 | trang phục đi phỏng vấn xin việc | Informational | `/blog/trang-phuc-di-phong-van-an-tuong/` | Bài viết Blog |
| 30 | aura fashion studio | Navigational | `/lien-he/` | Trang liên hệ |
