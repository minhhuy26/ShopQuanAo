import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  // ==========================================
  // DANH MỤC 1: ÁO THUN NAM NỮ (4 SẢN PHẨM)
  // ==========================================
  {
    id: "prod-1",
    name: "Áo Thun Cotton Compact 100% Trơn Dáng Regular",
    slug: "ao-thun-cotton-compact-tron",
    sku: "AF-TSHIRT-001",
    price: 189000,
    originalPrice: 250000,
    category: "Áo Thun Nam Nữ",
    categorySlug: "ao-thun",
    rating: 4.9,
    reviewsCount: 142,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
        alt: "Áo thun cotton compact 100% trơn màu trắng dáng regular cao cấp Aura Fashion",
      },
      {
        url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
        alt: "Chi tiết cổ áo bo dệt chống nhão của áo thun cotton compact Aura Fashion",
      },
      {
        url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
        alt: "Người mẫu diện áo thun cotton compact trắng phối cùng quần jean vintage",
      },
    ],
    shortDescription: "Áo thun basic làm từ 100% sợi Cotton Compact chải kỹ định lượng 230gsm, không xù lông, thấm hút mồ hôi vượt trội và bo cổ dệt kép không lo bị giãn.",
    fullDescription: [
      "Áo thun Cotton Compact 100% của Aura Fashion được sản xuất theo quy trình kéo sợi compact hiện đại giúp giảm 85% hiện tượng xù lông so với sợi cotton thông thường. Với định lượng 230gsm, sản phẩm có độ dày dặn vừa phải, không lộ khuyết điểm cơ thể và mang lại cảm giác dễ chịu suốt ngày dài.",
      "Cổ áo được bo dệt bằng sợi spandex đàn hồi cao với đường may móc xích đôi gia cố, giải quyết dứt điểm nỗi lo cổ áo bị nhão hay dão sau nhiều lần giặt máy.",
      "Thiết kế form Regular Fit thoải mái, dễ dàng mix-match với quần jean ống rộng, quần short hoặc sơ vin thanh lịch cùng quần tây công sở.",
    ],
    features: [
      "100% Cotton Compact chải kỹ cao cấp (định lượng 230gsm)",
      "Công nghệ xử lý chống co rút và bền màu qua 50+ lần giặt",
      "Bo cổ dệt rib đàn hồi cao cấp, gia cố đường chỉ may 2 kim",
      "Thấm hút mồ hôi nhanh, an toàn cho làn da nhạy cảm",
      "Form dáng Unisex Regular Fit phù hợp cho cả nam và nữ",
    ],
    materials: "100% Cotton chải kỹ Compact cao cấp, đường may kim chỉ Coats Phong Phú.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Trắng Tinh Khôi", hex: "#FFFFFF" },
      { name: "Đen Huyền Bí", hex: "#18181B" },
      { name: "Xám Tiêu Melange", hex: "#9CA3AF" },
      { name: "Xanh Navy", hex: "#1E3A8A" },
    ],
    seo: {
      title: "Áo Thun Cotton Compact 100% Trơn Dáng Regular | Aura Fashion",
      description: "Mua áo thun cotton compact 100% trơn cao cấp dáng regular, thoáng mát thấm hút mồ hôi, bo cổ dệt chống nhão, giá chỉ 189.000đ. Đặt ngay hôm nay!",
      keywords: ["áo thun cotton compact", "áo thun trơn basic", "áo thun nam nữ form regular", "áo thun trắng 100% cotton"],
    },
  },
  {
    id: "prod-2",
    name: "Áo Thun Unisex Oversize Heavyweight 260gsm Cổ Bo Dày",
    slug: "ao-thun-oversize-heavyweight",
    sku: "AF-TSHIRT-002",
    price: 219000,
    originalPrice: 280000,
    category: "Áo Thun Nam Nữ",
    categorySlug: "ao-thun",
    rating: 4.8,
    reviewsCount: 98,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
        alt: "Áo thun oversize heavyweight 260gsm phong cách đường phố streetwear",
      },
      {
        url: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=800&q=80",
        alt: "Form vai xuôi hạ vai của áo phông oversize unisex Aura Fashion",
      },
    ],
    shortDescription: "Áo thun oversize định lượng dày dặn 260gsm, phom boxy vai xuôi che khuyết điểm bụng và vai cực tốt, chất vải đứng phom chuẩn gu Streetwear.",
    fullDescription: [
      "Dòng áo thun Heavyweight 260gsm sinh ra dành cho các tín đồ mê phong cách đường phố cá tính. Vải cotton chải kỹ mật độ cao giúp áo giữ nguyên phom hộp (boxy) đứng thẳng, không rủ dính vào người.",
      "Chi tiết bo cổ dệt bản rộng 3cm dày dặn giúp phần cổ luôn ôm sát vừa vặn, không bị lượn sóng sau khi giặt máy.",
    ],
    features: [
      "Vải Cotton 2 chiều định lượng nặng 260gsm đứng dáng",
      "Form vai xuôi Dropped Shoulder thời thượng",
      "Bo cổ 3cm dệt kép co giãn chống bai dão",
      "Che khuyết điểm bụng mỡ và người gầy hiệu quả",
    ],
    materials: "100% Cotton 2 chiều Heavyweight định lượng 260gsm.",
    sizes: ["M", "L", "XL", "2XL"],
    colors: [
      { name: "Đen Tuyển", hex: "#18181B" },
      { name: "Trắng Kem Off-White", hex: "#F5F5F0" },
      { name: "Xanh Rêu Sage", hex: "#4A5D4E" },
    ],
    seo: {
      title: "Áo Thun Oversize Heavyweight 260gsm Unisex | Aura Fashion",
      description: "Áo thun oversize 260gsm dày dặn form boxy hạ vai thời thượng, cổ bo bản lớn chống nhão, phong cách streetwear đỉnh cao chỉ 219k.",
      keywords: ["áo thun oversize heavyweight", "áo phông dày dặn 260gsm", "áo thun form rộng unisex"],
    },
  },
  {
    id: "prod-3",
    name: "Áo Polo Cổ Bẻ Dệt Pique Tổ Ong Phom Regular Thanh Lịch",
    slug: "ao-polo-cotton-piqe-classic",
    sku: "AF-POLO-003",
    price: 249000,
    originalPrice: 320000,
    category: "Áo Thun Nam Nữ",
    categorySlug: "ao-thun",
    rating: 4.9,
    reviewsCount: 115,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
        alt: "Áo polo cổ bẻ dệt pique tổ ong màu xanh navy thanh lịch Aura Fashion",
      },
      {
        url: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
        alt: "Chi tiết cổ áo dệt sọc và khuy áo xà cừ cao cấp áo polo Aura",
      },
    ],
    shortDescription: "Áo polo chất liệu vải cá sấu Pique dệt mắt chim thoáng khí, cổ bẻ phối sọc dệt jacquard tinh tế, phù hợp cả môi trường công sở lẫn chơi thể thao.",
    fullDescription: [
      "Chiếc áo polo Pique mang đến vẻ ngoài chỉn chu lịch thiệp mà vẫn năng động thoải mái. Cấu trúc dệt mắt chim tạo ra hàng ngàn lỗ thông hơi li ti, giúp nhiệt độ cơ thể thoát ra nhanh chóng.",
      "Cổ áo được dệt jacquard cao cấp đứng form không bị quăn mép (anti-curl collar), kết hợp nẹp khuy 3 cúc bóng mờ sang trọng.",
    ],
    features: [
      "Vải Cotton Pique 95% + 5% Spandex co giãn 4 chiều",
      "Cổ áo dệt chống quăn mép giữ nếp phẳng phiu",
      "Nẹp khuy giấu chỉ may tinh xảo",
      "Thấm hút mồ hôi, kháng mùi tự nhiên",
    ],
    materials: "95% Cotton chải kỹ + 5% Spandex dệt vân mắt chim Pique.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Xanh Navy Lịch Lãm", hex: "#1E3A8A" },
      { name: "Trắng Classic", hex: "#FFFFFF" },
      { name: "Đen Tuyển", hex: "#18181B" },
    ],
    seo: {
      title: "Áo Polo Cổ Bẻ Dệt Pique Tổ Ong Nam Nữ | Aura Fashion",
      description: "Áo polo vải cá sấu Pique thoáng mát chống quăn cổ áo, form regular thanh lịch cho dân công sở, giá ưu đãi 249.000đ tại Aura Fashion.",
      keywords: ["áo polo nam đẹp", "áo thun có cổ pique", "áo polo công sở"],
    },
  },
  {
    id: "prod-4",
    name: "Áo Thun Sọc Ngang Thủy Thủ Cotton Thoáng Khí Phong Cách Retro",
    slug: "ao-thun-soc-ngang-vintage-retro",
    sku: "AF-TSHIRT-004",
    price: 199000,
    originalPrice: 260000,
    category: "Áo Thun Nam Nữ",
    categorySlug: "ao-thun",
    rating: 4.7,
    reviewsCount: 84,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
        alt: "Áo thun sọc ngang thủy thủ phong cách French retro cổ điển",
      },
      {
        url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
        alt: "Chi tiết đường kẻ sọc dệt sợi nhuộm bền màu của áo thun Aura",
      },
    ],
    shortDescription: "Áo thun sọc ngang Breton sọc dệt sợi nhuộm (Yarn-Dyed) không lo bong tróc, dáng suông phóng khoáng mang đậm hơi thở thời trang nước Pháp.",
    fullDescription: [
      "Họa tiết sọc ngang Breton kinh điển từ nước Pháp là món đồ không thể thiếu trong tủ đồ người chuộng phong cách cổ điển. Sọc được dệt trực tiếp từ sợi nhuộm màu, cam kết không bao giờ bị phai hay bong tróc khi giặt.",
      "Thiết kế bản sọc tinh tế tạo hiệu ứng mở rộng bờ vai, đặc biệt thích hợp cho người có thân hình mảnh khảnh.",
    ],
    features: [
      "Kỹ thuật dệt sợi nhuộm Yarn-Dyed chống phai màu",
      "100% sợi bông Cotton tự nhiên mềm mát",
      "Họa tiết sọc thủy thủ Breton hack dáng đầy đặn",
    ],
    materials: "100% Cotton Yarn-Dyed 210gsm.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Sọc Trắng Xanh Navy", hex: "#1E3A8A" },
      { name: "Sọc Trắng Đen", hex: "#18181B" },
    ],
    seo: {
      title: "Áo Thun Sọc Ngang Thủy Thủ Cotton Retro | Aura Fashion",
      description: "Áo thun kẻ sọc ngang Breton dệt sợi nhuộm bền màu, chất cotton thoáng mát phong cách retro Pháp, giá chỉ 199k tại Aura Fashion.",
      keywords: ["áo thun sọc ngang", "áo phông kẻ ngang nam nữ", "áo thun breton"],
    },
  },

  // ==========================================
  // DANH MỤC 2: ÁO SƠ MI THỜI TRANG (4 SẢN PHẨM)
  // ==========================================
  {
    id: "prod-5",
    name: "Áo Sơ Mi Oxford Dài Tay Form Rộng Phong Cách Hàn Quốc",
    slug: "ao-so-mi-oxford-tay-dai",
    sku: "AF-SHIRT-002",
    price: 299000,
    originalPrice: 380000,
    category: "Áo Sơ Mi Thời Trang",
    categorySlug: "ao-so-mi",
    rating: 4.8,
    reviewsCount: 94,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
        alt: "Áo sơ mi Oxford dài tay form rộng màu xanh pastel phong cách Hàn Quốc",
      },
      {
        url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
        alt: "Cận cảnh chất liệu vải dệt vân Oxford dày dặn thoáng khí áo sơ mi Aura Fashion",
      },
      {
        url: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
        alt: "Áo sơ mi Oxford mặc phối cùng áo thun trắng lót trong",
      },
    ],
    shortDescription: "Áo sơ mi vải Oxford dệt vân hạt nổi cao cấp, form loose rộng rãi chuẩn style Hàn Quốc, chống nhăn tự nhiên, hoàn hảo cho cả môi trường công sở lẫn đi chơi.",
    fullDescription: [
      "Áo sơ mi Oxford dài tay phong cách Hàn Quốc sở hữu bề mặt dệt vân hạt tổ ong đặc trưng, tạo nên kết cấu đứng form vừa phải mà vẫn thoáng khí. Chất liệu pha trộn giữa Cotton và sợi Polyester chống nhăn tự nhiên, giúp người mặc luôn chỉn chu mà không tốn nhiều thời gian là ủi.",
      "Thiết kế cổ áo sơ mi Button-down có khuy cài cố định ve áo gọn gàng. Chi tiết túi ngực tối giản kết hợp với phần vạt bầu nhẹ mang đến diện mạo trẻ trung, năng động khi thả suông hoặc sơ vin nửa vạt phong cách.",
    ],
    features: [
      "Vải Oxford dệt chéo cao cấp, bề mặt vân nổi thoáng khí",
      "Công nghệ chống nhăn tự nhiên (Easy Care)",
      "Form Loose Fit rộng rãi chuẩn gu thời trang Hàn Quốc",
      "Khuy áo đính chắc chắn làm từ nhựa melamine cao cấp bóng mờ",
      "Dễ phối với quần tây, quần jean hoặc làm áo khoác ngoài layer",
    ],
    materials: "70% Cotton cao cấp dệt sợi kép + 30% Polyester chống nhăn.",
    sizes: ["M", "L", "XL", "2XL"],
    colors: [
      { name: "Xanh Pastel Oxford", hex: "#93C5FD" },
      { name: "Trắng Ngà Off-White", hex: "#F8FAFC" },
      { name: "Xọc Xanh Baby Blue", hex: "#60A5FA" },
    ],
    seo: {
      title: "Áo Sơ Mi Oxford Dài Tay Form Rộng Hàn Quốc | Aura Fashion",
      description: "Áo sơ mi Oxford dài tay form rộng style Hàn Quốc vải dệt cao cấp chống nhăn, thoáng mát, dễ phối đồ công sở và đi chơi. Giá tốt chỉ 299k.",
      keywords: ["áo sơ mi oxford", "áo sơ mi form rộng hàn quốc", "áo sơ mi nam dài tay", "sơ mi unisex loose fit"],
    },
  },
  {
    id: "prod-6",
    name: "Áo Sơ Mi Đũi Linen Cổ Vest Cuban Thoáng Mát Mùa Hè",
    slug: "ao-so-mi-linen-tho-dui-tay-ngan",
    sku: "AF-SHIRT-006",
    price: 279000,
    originalPrice: 350000,
    category: "Áo Sơ Mi Thời Trang",
    categorySlug: "ao-so-mi",
    rating: 4.9,
    reviewsCount: 78,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
        alt: "Áo sơ mi đũi linen cổ vest Cuban ngắn tay thoáng mát mùa hè",
      },
      {
        url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
        alt: "Chi tiết vân vải linen thô đũi tự nhiên mát lạnh",
      },
    ],
    shortDescription: "Áo sơ mi cổ bẻ Cuban Collar may từ vải sợi lanh Linen pha đũi tự nhiên, siêu nhẹ thoáng nhiệt, phong cách phóng khoáng cho các chuyến du lịch biển.",
    fullDescription: [
      "Chiếc áo sơ mi cổ mở Cuban mang tinh thần của những kỳ nghỉ hè rực rỡ tại vùng biển Địa Trung Hải. Chất vải Linen tự nhiên có tính năng điều hòa thân nhiệt tuyệt vời, càng giặt càng mềm mịn.",
    ],
    features: [
      "Chất liệu 55% French Linen + 45% Cotton đũi",
      "Thiết kế cổ chữ V Cuban Collar phóng khoáng",
      "Thoáng khí, thấm hút mồ hôi gấp 3 lần vải thường",
    ],
    materials: "55% Linen lanh tự nhiên + 45% Cotton mộc.",
    sizes: ["M", "L", "XL"],
    colors: [
      { name: "Trắng Cát Be", hex: "#E8E2D5" },
      { name: "Xanh Cổ Vịt", hex: "#115E59" },
    ],
    seo: {
      title: "Áo Sơ Mi Đũi Linen Cổ Vest Cuban Ngắn Tay | Aura Fashion",
      description: "Mua áo sơ mi linen đũi cổ vest Cuban ngắn tay cực mát, nhẹ tênh cho mùa hè và đi biển, giá khuyến mãi 279.000đ tại Aura Fashion.",
      keywords: ["áo sơ mi linen", "sơ mi đũi nam ngắn tay", "áo sơ mi cổ cuban"],
    },
  },
  {
    id: "prod-7",
    name: "Áo Sơ Mi Flannel Kẻ Caro Vintage Dày Dặn Phong Cách Grunge",
    slug: "ao-so-mi-flannel-caro-vintage",
    sku: "AF-SHIRT-007",
    price: 319000,
    originalPrice: 400000,
    category: "Áo Sơ Mi Thời Trang",
    categorySlug: "ao-so-mi",
    rating: 4.8,
    reviewsCount: 65,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
        alt: "Áo sơ mi flannel kẻ caro vintage dày dặn phong cách grunge đường phố",
      },
      {
        url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
        alt: "Chi tiết cào bông êm ái bề mặt vải flannel Aura Fashion",
      },
    ],
    shortDescription: "Áo sơ mi flannel dệt sợi bông cào xơ mịn màng giữ ấm thu đông, họa tiết caro vintage bụi bặm, mặc đơn hoặc khoác ngoài cực ngầu.",
    fullDescription: [
      "Vải Flannel chải sợi bông hai mặt tạo nên lớp nỉ êm ái giữ ấm cơ thể trong tiết trời se lạnh. Họa tiết kẻ ca-rô phối màu kinh điển giúp bạn dễ dàng layer ngoài áo thun trắng trơn hoặc áo hoodie.",
    ],
    features: [
      "100% Cotton Flannel cào lông bề mặt giữ ấm nhẹ",
      "Khuy áo nhựa giả sừng cổ điển",
      "2 túi ngực có nắp cài phong cách dã ngoại",
    ],
    materials: "100% Cotton Flannel định lượng 240gsm.",
    sizes: ["M", "L", "XL", "2XL"],
    colors: [
      { name: "Caro Đỏ Đen Lumberjack", hex: "#991B1B" },
      { name: "Caro Xanh Rêu Vintage", hex: "#166534" },
    ],
    seo: {
      title: "Áo Sơ Mi Flannel Kẻ Caro Vintage Dày Dặn | Aura Fashion",
      description: "Áo sơ mi flannel kẻ caro cotton cào bông dày dặn, phom rộng bụi bặm cho mùa thu đông. Mua ngay giá tốt 319.000đ.",
      keywords: ["áo sơ mi flannel", "sơ mi caro nam", "áo khoác flannel streetwear"],
    },
  },
  {
    id: "prod-8",
    name: "Áo Sơ Mi Lụa Hàn Cao Cấp Chống Nhăn Phom Công Sở Hiện Đại",
    slug: "ao-so-mi-lua-han-chong-nhan",
    sku: "AF-SHIRT-008",
    price: 339000,
    originalPrice: 420000,
    category: "Áo Sơ Mi Thời Trang",
    categorySlug: "ao-so-mi",
    rating: 4.9,
    reviewsCount: 112,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=800&q=80",
        alt: "Áo sơ mi lụa hàn chống nhăn công sở cao cấp Aura Fashion",
      },
      {
        url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
        alt: "Chất liệu lụa hàn ánh mờ mềm rủ sang trọng",
      },
    ],
    shortDescription: "Áo sơ mi lụa Hàn Quốc cao cấp bề mặt óng ả sang trọng, công nghệ Non-Iron chống nhăn tuyệt đối, hoàn hảo cho nhân viên văn phòng và phỏng vấn.",
    fullDescription: [
      "Dành riêng cho những ai bận rộn nhưng luôn đòi hỏi sự phẳng phiu chỉn chu tuyệt đối. Chất vải lụa tơ nhân tạo Hàn Quốc rủ mềm tự nhiên, không nhăn nhúm dù ngồi máy lạnh cả ngày.",
    ],
    features: [
      "Công nghệ Non-Iron không cần ủi",
      "Vải lụa mềm mát, thoát nhiệt tốt",
      "Đường may giấu mép tinh tế chuẩn hàng may đo",
    ],
    materials: "85% Silk-Polymer blend + 15% Rayon tự nhiên.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Trắng Sữa Silk", hex: "#FAF8F5" },
      { name: "Xanh Ghi Khói", hex: "#64748B" },
    ],
    seo: {
      title: "Áo Sơ Mi Lụa Hàn Chống Nhăn Công Sở | Aura Fashion",
      description: "Áo sơ mi lụa Hàn chống nhăn cao cấp, vải mềm rủ lịch thiệp đi làm và phỏng vấn, giá 339k tại Aura Fashion.",
      keywords: ["áo sơ mi chống nhăn", "sơ mi lụa hàn nam nữ", "áo sơ mi công sở cao cấp"],
    },
  },

  // ==========================================
  // DANH MỤC 3: QUẦN JEAN & DENIM (4 SẢN PHẨM)
  // ==========================================
  {
    id: "prod-9",
    name: "Quần Jean Nam Nữ Ống Rộng Wide-Leg Vintage Wash",
    slug: "quan-jean-ong-rong-wide-leg",
    sku: "AF-JEAN-003",
    price: 389000,
    originalPrice: 480000,
    category: "Quần Jean & Denim",
    categorySlug: "quan-jean",
    rating: 4.9,
    reviewsCount: 165,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=800&q=80",
        alt: "Quần jean ống rộng wide leg màu xanh vintage wash tôn dáng nam nữ",
      },
      {
        url: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
        alt: "Chi tiết đường may chỉ vàng nổi và túi quần jean denim cao cấp Aura Fashion",
      },
      {
        url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
        alt: "Người mẫu mặc quần jean wide leg phối cùng áo croptop tôn chân dài",
      },
    ],
    shortDescription: "Quần jean ống rộng Wide-leg phong cách Streetwear Retro, chất liệu Denim 12oz mềm không bai nhão, kỹ thuật giặt mài Vintage Wash hack chân dài cực đỉnh.",
    fullDescription: [
      "Quần Jean Wide-Leg Vintage Wash là 'vũ khí hack dáng' số 1 cho các tín đồ thời trang. Thiết kế cạp cao ôm trọn vòng eo kết hợp ống quần suông rộng rủ tự nhiên giúp kéo dài đôi chân và che khuyết điểm chân vòng kiềng hay đùi to hiệu quả.",
      "Chất liệu Denim dày dặn 12oz được dệt từ sợi bông tự nhiên qua công nghệ enzyme wash tạo hiệu ứng màu loang cổ điển mềm mại ngay từ lần mặc đầu tiên, không thô ráp hay ngứa ngáy da.",
    ],
    features: [
      "Chất liệu Denim cotton 12oz chuẩn form, bề mặt êm mịn",
      "Kỹ thuật xử lý màu Enzym Stone Wash phong cách cổ điển",
      "Cạp cao tôn dáng, ống suông rủ tự nhiên tạo hiệu ứng chân dài",
      "Khóa kéo kim loại YKK cao cấp trơn tru, đinh tán chống rách túi",
      "Unisex fit phù hợp cho cả bạn nam và bạn nữ",
    ],
    materials: "100% Cotton Denim 12oz chất lượng cao, khóa kim loại chống gỉ.",
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Xanh Nhạt Vintage", hex: "#7DD3FC" },
      { name: "Xanh Đậm Classic", hex: "#1D4ED8" },
      { name: "Xám Khói Retro", hex: "#4B5563" },
    ],
    seo: {
      title: "Quần Jean Ống Rộng Wide-Leg Vintage Wash Tôn Dáng | Aura Fashion",
      description: "Quần jean ống rộng Wide-Leg nam nữ phong cách vintage wash hack dáng kéo dài chân. Denim 12oz dày dặn mềm mịn, bền màu, chỉ 389k tại Aura Fashion.",
      keywords: ["quần jean ống rộng", "quần jean wide leg", "quần bò vintage wash", "quần jean ống suông unisex"],
    },
  },
  {
    id: "prod-10",
    name: "Quần Jean Denim Ống Suông Straight Fit Màu Xanh Chàm Classic",
    slug: "quan-jean-ong-suong-straight-fit",
    sku: "AF-JEAN-010",
    price: 379000,
    originalPrice: 460000,
    category: "Quần Jean & Denim",
    categorySlug: "quan-jean",
    rating: 4.8,
    reviewsCount: 92,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
        alt: "Quần jean ống suông straight fit màu xanh chàm cổ điển Aura Fashion",
      },
      {
        url: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
        alt: "Chi tiết đinh tán đồng và túi sau may chữ V của quần bò straight fit",
      },
    ],
    shortDescription: "Quần jean ống suông thẳng tắp Straight Fit kinh điển, chất vải Denim 13oz dày dặn đứng phom chuẩn phong cách Mỹ, tôn dáng đứng đắn nam tính.",
    fullDescription: [
      "Dáng quần Straight Fit với ống suông từ đùi xuống gấu quần tạo nên vẻ ngoài đĩnh đạc và nam tính. Màu nhuộm chàm Indigo nguyên bản càng mặc càng phai màu theo thói quen vận động tạo thành nếp sờn độc bản.",
    ],
    features: [
      "Vải Raw Denim 13oz dày dặn đanh chắc",
      "Nhuộm Indigo tự nhiên bền bỉ",
      "Khóa đồng cổ điển đóng đinh tán chịu lực",
    ],
    materials: "99% Cotton Denim + 1% Elastane co giãn nhẹ.",
    sizes: ["29", "30", "31", "32", "34"],
    colors: [
      { name: "Xanh Chàm Indigo", hex: "#1E3A8A" },
      { name: "Đen Tuyển Khói", hex: "#18181B" },
    ],
    seo: {
      title: "Quần Jean Ống Suông Straight Fit Xanh Chàm | Aura Fashion",
      description: "Quần jean ống suông thẳng Straight Fit vải bò 13oz dày dặn đứng phom nam tính, giá 379k tại Aura Fashion.",
      keywords: ["quần jean ống suông", "quần bò straight fit", "quần jean nam classic"],
    },
  },
  {
    id: "prod-11",
    name: "Quần Jean Baggy Rách Gối Ripped Denim Phong Cách Streetwear",
    slug: "quan-jean-baggy-rach-goi",
    sku: "AF-JEAN-011",
    price: 399000,
    originalPrice: 490000,
    category: "Quần Jean & Denim",
    categorySlug: "quan-jean",
    rating: 4.8,
    reviewsCount: 88,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
        alt: "Quần jean baggy rách gối cá tính phong cách streetwear Aura Fashion",
      },
      {
        url: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=800&q=80",
        alt: "Chi tiết rách tua rua được xử lý thủ công tinh xảo",
      },
    ],
    shortDescription: "Quần jean phom Baggy cạp lửng rộng đùi bo nhẹ gấu, vết cào rách laser sắc nét phong cách Y2K và Skater năng động.",
    fullDescription: [
      "Dáng quần Baggy rộng rãi phần đùi và hông mang lại sự tự do tối đa khi di chuyển. Chi tiết rách gối bằng công nghệ laser giúp sợi chỉ ngang không bị đứt đoạn hay tưa xơ lung tung.",
    ],
    features: [
      "Form Baggy rộng rãi che mọi khuyết điểm bắp chân",
      "Kỹ thuật cào rách laser không làm hỏng thớ vải xung quanh",
      "Màu wash xám tro thời thượng",
    ],
    materials: "100% Cotton Denim 12.5oz.",
    sizes: ["28", "29", "30", "31", "32"],
    colors: [
      { name: "Xám Tro Rách Gối", hex: "#4B5563" },
      { name: "Xanh Bạc Rách Gối", hex: "#60A5FA" },
    ],
    seo: {
      title: "Quần Jean Baggy Rách Gối Streetwear Y2K | Aura Fashion",
      description: "Quần jean baggy rách gối nam nữ cá tính phong cách Skater Y2K, chất denim mềm êm giá 399k.",
      keywords: ["quần jean baggy rách", "quần jean rách gối", "quần jean y2k"],
    },
  },
  {
    id: "prod-12",
    name: "Quần Tây Suông Casual Dáng Dài Tôn Dáng Minimalist",
    slug: "quan-tay-suong-casual-dang-dai",
    sku: "AF-TROUSER-005",
    price: 349000,
    originalPrice: 420000,
    category: "Quần Jean & Denim",
    categorySlug: "quan-jean",
    rating: 4.7,
    reviewsCount: 76,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
        alt: "Quần tây suông casual màu đen xếp ly dáng dài tôn dáng phong cách minimalism",
      },
      {
        url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
        alt: "Chi tiết cạp quần tây có đai chun ẩn co giãn tiện lợi Aura Fashion",
      },
    ],
    shortDescription: "Quần tây suông nam nữ dáng dài xếp ly tinh tế, chất vải chéo hàn tuyết mưa mềm mại, chống nhăn tuyệt đối, cạp chun ẩn hông co giãn thoải mái khi ngồi.",
    fullDescription: [
      "Quần tây suông Casual dáng dài là sự kết hợp hoàn hảo giữa vẻ đẹp lịch lãm công sở và sự thoải mái của phong cách thời trang đường phố hàng ngày. Với nếp xếp ly đơn phía trước, chiếc quần tạo nên độ phồng tự nhiên giúp hack chiều cao đáng kể.",
      "Chất liệu vải tuyết mưa chéo hàn rủ tự nhiên, không nhăn nhàu kể cả khi ngồi làm việc cả ngày. Lưng quần tích hợp đai chun ẩn thông minh ở hai bên hông co giãn 3-4cm mang lại cảm giác dễ chịu tuyệt đối.",
    ],
    features: [
      "Chất vải tuyết mưa chéo Hàn Quốc mềm mịn rủ dáng",
      "Không nhăn xù, không bám bụi, không cần ủi nhiều",
      "Cạp quần có đai chun ẩn 2 bên hông co giãn linh hoạt",
      "Ống suông thẳng đứng chuẩn tỉ lệ vàng che mọi khuyết điểm",
      "Đường may giấu chỉ tinh tế chuẩn đồ âu cao cấp",
    ],
    materials: "Vải Tuyết Mưa dệt chéo Hàn Quốc (Poly-Rayon blend)",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Đen Classic", hex: "#0F172A" },
      { name: "Xám Ghi Khói", hex: "#64748B" },
      { name: "Nâu Mocha Tây", hex: "#78350F" },
    ],
    seo: {
      title: "Quần Tây Suông Casual Dáng Dài Tôn Dáng Minimalist | Aura Fashion",
      description: "Quần tây suông casual xếp ly dáng dài tôn dáng, vải tuyết mưa chống nhăn, cạp chun ẩn hông thoải mái cho nam nữ. Giá ưu đãi chỉ 349.000đ.",
      keywords: ["quần tây suông", "quần tây casual", "quần tây ống rộng nam nữ", "quần tây xếp ly minimalist"],
    },
  },

  // ==========================================
  // DANH MỤC 4: ÁO KHOÁC & HOODIE (4 SẢN PHẨM)
  // ==========================================
  {
    id: "prod-13",
    name: "Áo Khoác Bomber Kaki 2 Lớp Chống Gió Cao Cấp",
    slug: "ao-khoac-bomber-kaki-2-lop",
    sku: "AF-BOMBER-004",
    price: 449000,
    originalPrice: 560000,
    category: "Áo Khoác & Hoodie",
    categorySlug: "ao-khoac",
    rating: 4.8,
    reviewsCount: 82,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
        alt: "Áo khoác bomber kaki 2 lớp màu đen chống gió phong cách tối giản streetwear",
      },
      {
        url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
        alt: "Cận cảnh lớp lót dù chống gió và bo chun dệt gân áo bomber Aura Fashion",
      },
    ],
    shortDescription: "Áo khoác bomber kaki 2 lớp vải Cotton Twill trượt nước nhẹ, lớp lót dù mềm mại chống gió lạnh, bo chun dệt rib co giãn bền bỉ, phong cách nam tính năng động.",
    fullDescription: [
      "Chiếc áo bomber kaki 2 lớp Aura mang phong cách quân đội kết hợp tinh thần thời trang đường phố tối giản. Lớp ngoài được chế tác từ vải Kaki Cotton Twill mật độ cao có khả năng cản gió và trượt nước nhẹ khi gặp mưa phùn.",
      "Bên trong là lớp lót lụa dù mềm mịn, có túi ngực ẩn tiện lợi để bảo vệ ví tiền và điện thoại thông minh. Thiết kế khóa kéo kim loại đôi cho phép tùy chỉnh tạo kiểu phong cách layer ấn tượng.",
    ],
    features: [
      "Lớp ngoài Kaki Cotton Twill 100% bền bỉ cản gió",
      "Lớp trong lót dù mềm mát cách nhiệt tốt",
      "Khóa kéo kim loại trơn tru có nẹp che gió",
      "2 túi xéo bên ngoài có nắp khuy bấm + 1 túi phụ bên trong",
      "Bo tay và bo gấu dệt rib co giãn 4 chiều chống giãn xệ",
    ],
    materials: "Lớp ngoài: Cotton Twill Kaki cao cấp; Lớp lót: Vải dù Polyester chống gió.",
    sizes: ["M", "L", "XL", "2XL"],
    colors: [
      { name: "Đen Nam Tính", hex: "#18181B" },
      { name: "Xanh Rêu Quân Đội", hex: "#3F4F38" },
      { name: "Màu Be Cát", hex: "#D4C5B9" },
    ],
    seo: {
      title: "Áo Khoác Bomber Kaki 2 Lớp Chống Gió Thời Trang | Aura Fashion",
      description: "Áo khoác bomber kaki 2 lớp cản gió chống bụi cao cấp, thiết kế tối giản dễ phối đồ đi làm, đi phượt. Giá khuyến mãi 449.000đ, miễn phí đổi trả.",
      keywords: ["áo khoác bomber kaki", "áo bomber nam 2 lớp", "áo khoác cản gió", "áo khoác streetwear"],
    },
  },
  {
    id: "prod-14",
    name: "Áo Hoodie Nỉ Bông Unisex Form Boxy Trẻ Trung",
    slug: "ao-hoodie-ni-bong-unisex-boxy",
    sku: "AF-HOODIE-006",
    price: 369000,
    originalPrice: 450000,
    category: "Áo Khoác & Hoodie",
    categorySlug: "ao-khoac",
    rating: 4.9,
    reviewsCount: 110,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
        alt: "Áo hoodie nỉ bông unisex form boxy màu xám tiêu phong cách đường phố",
      },
      {
        url: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
        alt: "Cận cảnh chất nỉ bông cào ấm áp và mũ 2 lớp đứng form áo hoodie Aura Fashion",
      },
    ],
    shortDescription: "Áo hoodie nỉ bông định lượng dày dặn 380gsm giữ ấm vượt trội, form Boxy vai xuôi hợp xu hướng Gen Z, mũ trùm 2 lớp đứng form không bị bẹp dính.",
    fullDescription: [
      "Chiếc áo hoodie nỉ bông định lượng cao 380gsm mang lại sự ấm áp tối đa cho những ngày se lạnh hoặc đông về. Mặt ngoài dệt mịn chống xù lông, mặt trong cào bông tơ êm ái thấm hút mồ hôi tự nhiên.",
      "Form dáng Boxy cắt gấu gọn gàng, hạ vai tự nhiên tạo nên phong cách năng động, trẻ trung. Mũ trùm được may kép 2 lớp vải dày dặn giúp mũ luôn giữ được độ phồng tròn đẹp mắt khi đội hay thả sau lưng.",
    ],
    features: [
      "Chất nỉ bông chân cua định lượng cao 380gsm dày dặn",
      "Mặt trong cào bông mềm mại giữ ấm hoàn hảo",
      "Form Boxy vai xuôi thời thượng tôn tỷ lệ cơ thể",
      "Mũ trùm 2 lớp có dây rút luồn kim loại chống xơ",
      "Túi kangaroo phía trước may gia cố góc chống bung chỉ",
    ],
    materials: "80% Cotton + 20% Polyester nỉ bông 380gsm chống xơ lông.",
    sizes: ["M", "L", "XL", "2XL"],
    colors: [
      { name: "Xám Tiêu Melange", hex: "#9CA3AF" },
      { name: "Đen Tuyển", hex: "#18181B" },
      { name: "Xanh Cổ Vịt", hex: "#115E59" },
    ],
    seo: {
      title: "Áo Hoodie Nỉ Bông Unisex Form Boxy Trẻ Trung | Aura Fashion",
      description: "Mua áo hoodie nỉ bông 380gsm form boxy unisex giữ ấm cực tốt, mũ 2 lớp đứng form phong cách streetwear hiện đại, giá chỉ 369.000đ tại Aura Fashion.",
      keywords: ["áo hoodie nỉ bông", "hoodie boxy unisex", "áo hoodie nam nữ dày dặn", "áo nỉ form rộng streetwear"],
    },
  },
  {
    id: "prod-15",
    name: "Áo Khoác Bò Denim Trucker Cổ Điển Bền Bỉ Thời Thượng",
    slug: "ao-khoac-denim-trucker-jacket",
    sku: "AF-JACKET-015",
    price: 489000,
    originalPrice: 620000,
    category: "Áo Khoác & Hoodie",
    categorySlug: "ao-khoac",
    rating: 4.9,
    reviewsCount: 89,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
        alt: "Áo khoác bò denim trucker màu xanh wash cổ điển nam nữ",
      },
      {
        url: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
        alt: "Chi tiết khuy kim loại cài nổi và túi ốp ngực áo khoác denim",
      },
    ],
    shortDescription: "Áo khoác denim Trucker Jacket chuẩn dáng cổ điển Type III, vải bò 13.5oz dày dặn đứng phom, các đường may chỉ vàng đôi chịu lực trọn đời.",
    fullDescription: [
      "Chiếc áo khoác denim Trucker Type III là biểu tượng của tinh thần phong trần và tự do. Chất liệu Denim dày 13.5oz trải qua quy trình wash đá enzyme mềm mại, càng mặc càng lên màu vân sờn vintage đẹp mắt.",
    ],
    features: [
      "Vải 100% Cotton Denim 13.5oz siêu bền bỉ",
      "Khuy kim loại dập chìm chống gỉ",
      "2 túi ngực có nắp + 2 túi hông sâu tiện lợi",
    ],
    materials: "100% Cotton Denim 13.5oz cao cấp.",
    sizes: ["M", "L", "XL", "2XL"],
    colors: [
      { name: "Xanh Wash Cổ Điển", hex: "#3B82F6" },
      { name: "Đen Khói Retro", hex: "#1F2937" },
    ],
    seo: {
      title: "Áo Khoác Bò Denim Trucker Cổ Điển | Aura Fashion",
      description: "Áo khoác denim Trucker Jacket vải bò dày dặn bền đẹp, phong cách đường phố vintage giá 489k.",
      keywords: ["áo khoác denim", "áo khoác bò trucker", "áo bò nam đẹp"],
    },
  },
  {
    id: "prod-16",
    name: "Áo Khoác Gió Dù 2 Mặt Chống Nước Khóa Ép Nhiệt Hiện Đại",
    slug: "ao-khoac-gio-du-2-mat-chong-nuoc",
    sku: "AF-JACKET-016",
    price: 359000,
    originalPrice: 450000,
    category: "Áo Khoác & Hoodie",
    categorySlug: "ao-khoac",
    rating: 4.8,
    reviewsCount: 104,
    inStock: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
        alt: "Áo khoác gió dù 2 mặt chống nước chống tia UV Aura Fashion",
      },
      {
        url: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
        alt: "Chi tiết đường khóa zip chống thấm nước ép nhiệt cao tần",
      },
    ],
    shortDescription: "Áo khoác gió dù 2 mặt thông minh, lớp ngoài tráng màng PU trượt nước chống mưa phùn, lớp trong lót lưới điều hòa, thiết kế siêu nhẹ có thể gấp gọn vào túi.",
    fullDescription: [
      "Chiếc áo khoác gió siêu nhẹ 2 mặt là người bạn đồng hành lý tưởng cho những chuyến đi phượt hoặc thời tiết mưa phùn gió bấc thất thường. Khả năng cản gió 100% kết hợp công nghệ chống thấm nước Lotus Leaf Effect (hiệu ứng lá sen).",
    ],
    features: [
      "Vải dù vi sợi Micro-Polyester trượt nước chống mưa phùn",
      "Mặc được 2 mặt đổi màu phong cách",
      "Mũ trùm đầu có thể tháo rời linh hoạt",
      "Gấp gọn trong túi mini tiện lợi",
    ],
    materials: "100% Micro-Polyester tráng màng chống nước PU.",
    sizes: ["M", "L", "XL", "2XL"],
    colors: [
      { name: "Đen Phối Xám Bạc", hex: "#1F2937" },
      { name: "Xanh Rêu Phối Be", hex: "#374151" },
    ],
    seo: {
      title: "Áo Khoác Gió Dù 2 Mặt Chống Nước Siêu Nhẹ | Aura Fashion",
      description: "Áo khoác gió dù 2 mặt chống nước, cản gió và chống bụi hiệu quả, thiết kế thể thao gấp gọn giá chỉ 359k.",
      keywords: ["áo khoác gió 2 mặt", "áo gió chống nước", "áo khoác dù nam nữ"],
    },
  },
];
