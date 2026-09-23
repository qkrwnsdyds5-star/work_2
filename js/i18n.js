/**
 * ============================================================================
 * 고래잇 x 이마트 보물찾기 - 다국어 전환 시스템 (i18n.js)
 * 한국어(KO), 베트남어(VI), 영어(EN) 지원
 * ============================================================================
 */

const TRANSLATIONS = {
  ko: {
    // Header & Navigation
    'nav.brandTitle': '부산 보물찾기 대모험',
    'nav.brandSub': '식재료 탐험 퀘스트 프로모션',
    'nav.status': '부산 5개점 주말 진행 중',
    'nav.intro': '보물찾기 소개',
    'nav.quest': '가상 퀘스트',
    'nav.stores': '부산 매장안내',
    'nav.media': '미디어 쇼케이스',
    'nav.coupons': '쿠폰 & 리워드',
    'nav.recipe': '주간 레시피',

    // Hero Section
    'hero.badge': '부산 지역 이마트 한정 특별 프로모션',
    'hero.title': '지루한 장보기는 끝! 이번 주말,<br><span class="highlight">"고래잇 보물찾기"</span> 대모험!',
    'hero.desc': '다문화 가정과 어린이가 함께 색깔 따라 떠나는 신나는 마트 모험! 매장을 누비며 보물 식재료를 찾고 5,000원 쿠폰과 한정판 고래잇 키링을 획득하세요.',
    'hero.btnQuest': '가상 보물찾기 시작하기 🧭',
    'hero.btnStores': '부산 매장 위치보기 📍',
    'hero.questBadge': '이번 주 보물 요리 ➔ 🥩 달콤 짭짤 소불고기',

    // 4-Step Process Guide
    'process.sectionTitle': '3초 만에 이해하는 보물찾기 4단계',
    'process.sectionDesc': '글자를 몰라도 괜찮아요! 천장의 알록달록 색깔 사인보드만 따라가면 누구나 쉽게 보물을 찾을 수 있습니다.',
    'process.step1Title': '1. 보물지도 받기 🗺️',
    'process.step1Desc': '매장 입구 & 1층 고객만족센터 배포대에서 종이 보물지도를 챙겨요!',
    'process.step2Title': '2. 색깔 사인보드 찾기 🔴🟢🔵',
    'process.step2Desc': '천장의 빨강(육류)·초록(채소)·파랑(수산) 안내판을 따라 씩씩하게 걸어가요.',
    'process.step3Title': '3. 보물 식재료 쏙! 🛒',
    'process.step3Desc': '지도 속 그림과 똑같은 식재료를 찾아 내 장바구니에 쏙 담아요.',
    'process.step4Title': '4. 스탬프 찍고 선물 받기 🎁',
    'process.step4Desc': '스탬프를 모두 모으면 5,000원 할인 쿠폰과 한정판 고래잇 키링 득템!',

    // Quest Simulator
    'quest.badge': '온라인 가상 체험 미니게임',
    'quest.title': '🎮 [웹 가상 체험] 나만의 보물지도 완성하기',
    'quest.desc': '매장에 방문하기 전, 스마트폰으로 소불고기 필수 식재료 4개를 먼저 찾아보세요! 4개를 모두 모으면 모바일 할인 쿠폰이 즉시 활성화됩니다.',
    'quest.bubble': '안녕! 나는 고래잇이야! 🐳 오늘 저녁 맛있는 소불고기를 만들어볼까? 매장 구역에서 알맞은 보물 식재료를 찾아줘!',
    'quest.cartTitle': '내 보물 탐험 장바구니',
    'quest.resetBtn': '다시 도전하기 🔄',
    'quest.zoneRedTitle': '🔴 육류 코너 (빨간 구역)',
    'quest.zoneGreenTitle': '🟢 채소 & 과일 코너 (초록 구역)',
    'quest.zoneYellowTitle': '🟡 양념 & 소스 코너 (노란 구역)',
    'quest.itemBeef': '소고기 (불고기용)',
    'quest.itemBeefDesc': '빨간색 육류 코너의 부드러운 소고기 🥩',
    'quest.itemOnion': '양파 & 대파',
    'quest.itemOnionDesc': '초록색 채소 코너의 아삭한 채소 🧅',
    'quest.itemPear': '달콤 꿀배',
    'quest.itemPearDesc': '초록색 과일 코너의 천연 단맛 배 🍐',
    'quest.itemSauce': '이마트 특제 불고기양념',
    'quest.itemSauceDesc': '노란색 양념 코너의 비법 소스 🍯',
    'quest.stampSuccess': '보물 획득!',
    'quest.hintClick': '터치하여 장바구니에 담기',
    'quest.completeTitle': '🎉 보물지도 퀘스트 완료!',
    'quest.completeMsg': '축하합니다! 4가지 보물 식재료를 모두 찾았습니다.<br><strong>이마트 5,000원 할인 쿠폰</strong>과 <strong>한정판 고래잇 키링 교환권</strong>이 지급되었습니다!',
    'quest.btnClaim': '보물상자(쿠폰) 열기 🎁',

    // Busan Store Locator
    'stores.badge': '부산광역시 5개 핵심 점포',
    'stores.title': '📍 내 주변 부산 이마트 매장 찾기',
    'stores.desc': '부산 5개 점포에서 고래잇 보물찾기 오프라인 지도를 만나보세요. 1층 고객만족센터에서 지도를 수령하고 미션을 시작하세요!',
    'stores.filterAll': '전체 보기 (5)',
    'stores.filterNamgu': '남구 (문현점)',
    'stores.filterHaeundae': '해운대구 (해운대점)',
    'stores.filterGeumjeong': '금정구 (금정점)',
    'stores.filterYeonje': '연제구 (연제점)',
    'stores.filterSasang': '사상구 (사상점)',
    'stores.searchPlaceholder': '점포명 또는 도로명 주소를 입력하세요...',
    'stores.boothLabel': '보물지도 배포처',
    'stores.boothDesc': '1층 고객만족센터 & 매장 입구 안내데스크',
    'stores.copyBtn': '주소 복사',
    'stores.copiedMsg': '도로명 주소가 복사되었습니다!',
    'stores.kakaoBtn': '카카오맵 길찾기',
    'stores.naverBtn': '네이버지도 길찾기',
    'stores.telLabel': '전화 문의',

    // Media Showcase
    'media.badge': '바이럴 영상 & 인스타툰 & 포스터',
    'media.title': '🎬 숏폼 영상 & 6단 인스타툰 & 공식 포스터',
    'media.desc': '생생한 1인칭 RPG 숏폼 영상과 인스타툰 만화로 보물찾기 꿀팁을 미리 확인해보세요.',
    'media.tabShorts': '1인칭 RPG 숏폼',
    'media.tabCardnews': '6단 인스타툰 카드뉴스',
    'media.tabPoster': '오프라인 공식 포스터',

    // Coupons & Rewards
    'coupons.badge': '미션 완료 리워드 보물상자',
    'coupons.title': '🎁 내 모바일 보물상자 & 리워드 쿠폰',
    'coupons.desc': '퀘스트를 완료하고 오프라인 매장에서 즉시 현금처럼 할인받고 한정판 굿즈를 받아가세요!',
    'coupons.coupon1Title': '이마트 5,000원 할인 쿠폰',
    'coupons.coupon1Sub': '부산 5개 매장 오프라인 계산대 결제 전용',
    'coupons.coupon1Expiry': '유효기간: 이번 주 일요일까지',
    'coupons.barcodeNotice': '계산 시 직원에게 바코드를 제시해주세요.',
    'coupons.coupon2Title': '한정판 고래잇 키링 & 스티커 교환권',
    'coupons.coupon2Sub': '1층 고객만족센터 제시용 현장 교환권',
    'coupons.staffVerifyBtn': '직원 확인: 교환 완료 처리',
    'coupons.staffDoneText': '교환 완료되었습니다 (중복 수령 불가)',
    'coupons.btnSave': '내 폰에 쿠폰 저장하기 💾',
    'coupons.btnShare': '친구에게 보물찾기 소문내기 📢',

    // Weekly Recipe & Coming Soon
    'recipe.badge': '온 가족이 함께 요리해요',
    'recipe.title': '🍳 이번 주 보물 요리: 15분 완성 불고기 황금 레시피',
    'recipe.desc': '찾아온 보물 식재료로 오늘 저녁 아이와 함께 쉽고 재미있게 요리해보세요!',
    'recipe.step1Title': '1단계: 고기 밑간하기',
    'recipe.step1Desc': '달콤한 배를 갈아 넣고 이마트 특제 불고기 양념장과 버무려 10분간 재워둡니다.',
    'recipe.step2Title': '2단계: 채소 손질하기',
    'recipe.step2Desc': '양파와 대파를 먹기 좋은 크기로 썰어 준비합니다. 아이와 함께 채소를 씻어보세요!',
    'recipe.step3Title': '3단계: 센 불에 달달 볶기',
    'recipe.step3Desc': '팬을 달군 뒤 고기와 채소를 함께 넣어 센 불에서 빠르게 볶아내면 육즙 가득 완성!',
    'recipe.chefTip': '💡 고래잇의 요리 팁: 배를 갈아 넣으면 고기가 더욱 부드러워지고 설탕을 줄일 수 있어요!',
    'recipe.comingTitle': '❓ 다음 주 보물은 무엇일까요? (커밍순)',
    'recipe.comingDesc': '매주 새로운 테마의 보물찾기가 찾아옵니다! 박스를 클릭해 힌트를 확인해보세요.',
    'recipe.comingHint': '🐟 힌트: 다음 주 보물은 신선한 바다에서 온 친구! (수산물 코너 탐험)',
    'recipe.btnBookmark': '다음 주 알림 예약 / 북마크 🔔',

    // Footer & Viral
    'footer.title': '고래잇 × 이마트 부산 보물찾기 프로젝트',
    'footer.hashtags': '인스타그램 인기 해시태그 (클릭 시 복사):',
    'footer.notice': '※ 본 프로모션의 지점별 보물지도 및 굿즈는 일일 한정 수량으로 조기 소진될 수 있습니다. 5,000원 할인 쿠폰은 3만 원 이상 구매 시 적용 가능합니다.',
    'footer.customer': '이마트 고객센터: 02-380-5678 | 운영시간 10:00 ~ 22:00',
    'footer.copyright': '© 2026 E-MART BUSAN & WHALE-IT TREASURE HUNT CAMPAIGN. ALL RIGHTS RESERVED.'
  },

  vi: {
    // Header & Navigation
    'nav.brandTitle': 'Cuộc Phiêu Lưu Tìm Kho Báu Busan',
    'nav.brandSub': 'Chiến dịch Khám phá Nguyên liệu Emart',
    'nav.status': 'Đang diễn ra tại 5 chi nhánh Busan',
    'nav.intro': 'Giới thiệu',
    'nav.quest': 'Nhiệm vụ ảo',
    'nav.stores': 'Chi nhánh Busan',
    'nav.media': 'Media & Video',
    'nav.coupons': 'Phiếu giảm giá',
    'nav.recipe': 'Công thức tuần',

    // Hero Section
    'hero.badge': 'Khuyến Mại Đặc Biệt Dành Riêng Cho Emart Busan',
    'hero.title': 'Đi siêu thị không còn nhàm chán!<br>Cuối tuần này, đại tiệc <span class="highlight">"Săn Kho Báu Whale-it"</span>!',
    'hero.desc': 'Cuộc phiêu lưu siêu thị theo màu sắc dành cho các gia đình đa văn hóa và trẻ nhỏ! Thu thập nguyên liệu, nhận ngay phiếu giảm giá 5.000 won và móc khóa Whale-it phiên bản giới hạn.',
    'hero.btnQuest': 'Bắt đầu tìm kho báu ảo 🧭',
    'hero.btnStores': 'Xem các chi nhánh Busan 📍',
    'hero.questBadge': 'Món ăn tuần này ➔ 🥩 Thịt Bò Xào Bulgogi Đậm Đà',

    // 4-Step Process Guide
    'process.sectionTitle': '4 Bước Dễ Dàng Hiểu Trong 3 Giây',
    'process.sectionDesc': 'Không cần biết tiếng Hàn! Chỉ cần đi theo các bảng chỉ dẫn màu sắc rực rỡ trên trần nhà là ai cũng có thể tìm thấy kho báu.',
    'process.step1Title': '1. Nhận Bản Đồ Kho Báu 🗺️',
    'process.step1Desc': 'Lấy bản đồ giấy tại lối vào hoặc Quầy Chăm sóc Khách hàng tầng 1!',
    'process.step2Title': '2. Theo Dấu Bảng Màu 🔴🟢🔵',
    'process.step2Desc': 'Đi theo màu Đỏ (Thịt), Xanh lá (Rau củ) và Xanh dương (Hải sản) trên trần nhà.',
    'process.step3Title': '3. Cho Nguyên Liệu Vào Giỏ 🛒',
    'process.step3Desc': 'Tìm đúng nguyên liệu khớp với hình ảnh trên bản đồ và cho vào giỏ hàng.',
    'process.step4Title': '4. Đóng Dấu & Nhận Quà 🎁',
    'process.step4Desc': 'Đóng đủ dấu để nhận phiếu giảm giá 5.000 won và móc khóa Whale-it!',

    // Quest Simulator
    'quest.badge': 'Mini Game Trải Nghiệm Ảo',
    'quest.title': '🎮 [Trải Nghiệm Web] Hoàn Thành Bản Đồ Kho Báu',
    'quest.desc': 'Trước khi đến cửa hàng, hãy thử tìm 4 nguyên liệu Bulgogi trên điện thoại! Khi tìm đủ 4 món, phiếu giảm giá sẽ được kích hoạt ngay lập tức.',
    'quest.bubble': 'Xin chào! Mình là Whale-it! 🐳 Tối nay cùng làm món Bulgogi thật ngon nhé! Hãy tìm đúng nguyên liệu trong các khu vực nào!',
    'quest.cartTitle': 'Giỏ Hàng Phiêu Lưu Của Bé',
    'quest.resetBtn': 'Thử Lại 🔄',
    'quest.zoneRedTitle': '🔴 Khu Vực Thịt (Màu Đỏ)',
    'quest.zoneGreenTitle': '🟢 Khu Vực Rau & Trái Cây (Màu Xanh)',
    'quest.zoneYellowTitle': '🟡 Khu Vực Gia Vị & Nước Sốt (Màu Vàng)',
    'quest.itemBeef': 'Thịt Bò (Dùng làm Bulgogi)',
    'quest.itemBeefDesc': 'Thịt bò tươi mềm tại khu vực Đỏ 🥩',
    'quest.itemOnion': 'Hành Tây & Hành Boa-rô',
    'quest.itemOnionDesc': 'Rau củ giòn ngọt tại khu vực Xanh 🧅',
    'quest.itemPear': 'Quả Lê Ngọt',
    'quest.itemPearDesc': 'Lê ngọt tự nhiên tại quầy trái cây 🍐',
    'quest.itemSauce': 'Sốt Ướp Bulgogi Emart',
    'quest.itemSauceDesc': 'Nước sốt bí truyền tại quầy gia vị 🍯',
    'quest.stampSuccess': 'Đã Nhận!',
    'quest.hintClick': 'Chạm để cho vào giỏ',
    'quest.completeTitle': '🎉 Hoàn Thành Nhiệm Vụ Kho Báu!',
    'quest.completeMsg': 'Chúc mừng bạn đã tìm đủ 4 nguyên liệu kho báu!<br><strong>Phiếu giảm giá 5.000 Won</strong> và <strong>Phiếu đổi móc khóa Whale-it</strong> đã sẵn sàng!',
    'quest.btnClaim': 'Mở Rương Kho Báu (Xem Phiếu) 🎁',

    // Busan Store Locator
    'stores.badge': '5 Chi Nhánh Trọng Điểm Tại Busan',
    'stores.title': '📍 Tìm Chi Nhánh Emart Gần Bạn Nhất',
    'stores.desc': 'Trải nghiệm bản đồ săn kho báu thực tế tại 5 chi nhánh Emart Busan. Hãy ghé Quầy Dịch vụ Khách hàng tầng 1 để nhận bản đồ!',
    'stores.filterAll': 'Tất cả (5)',
    'stores.filterNamgu': 'Nam-gu (Munhyeon)',
    'stores.filterHaeundae': 'Haeundae-gu (Haeundae)',
    'stores.filterGeumjeong': 'Geumjeong-gu (Geumjeong)',
    'stores.filterYeonje': 'Yeonje-gu (Yeonje)',
    'stores.filterSasang': 'Sasang-gu (Sasang)',
    'stores.searchPlaceholder': 'Nhập tên chi nhánh hoặc địa chỉ...',
    'stores.boothLabel': 'Nơi Nhận Bản Đồ',
    'stores.boothDesc': 'Quầy Dịch Vụ Khách Hàng Tầng 1 & Bàn Hướng Dẫn',
    'stores.copyBtn': 'Sao Chép Địa Chỉ',
    'stores.copiedMsg': 'Đã sao chép địa chỉ thành công!',
    'stores.kakaoBtn': 'Đường đi KakaoMap',
    'stores.naverBtn': 'Đường đi NaverMap',
    'stores.telLabel': 'Điện thoại',

    // Media Showcase
    'media.badge': 'Video Ngắn & Truyện Tranh & Áp Phích',
    'media.title': '🎬 Video Ngắn & Insta-toon 6 Tập & Áp Phích',
    'media.desc': 'Khám phá video góc nhìn thứ nhất (POV) cùng truyện tranh hướng dẫn bí quyết săn kho báu siêu thị!',
    'media.tabShorts': 'Video RPG Góc Nhìn Thứ Nhất',
    'media.tabCardnews': 'Truyện Tranh 6 Tập',
    'media.tabPoster': 'Áp Phích Cửa Hàng',

    // Coupons & Rewards
    'coupons.badge': 'Rương Quà Tặng Sau Nhiệm Vụ',
    'coupons.title': '🎁 Rương Kho Báu Di Động & Phiếu Quà Tặng',
    'coupons.desc': 'Hoàn thành nhiệm vụ để nhận ngay ưu đãi giảm giá tại quầy thu ngân và quà tặng lưu niệm độc quyền!',
    'coupons.coupon1Title': 'Phiếu Giảm Giá Emart 5.000 Won',
    'coupons.coupon1Sub': 'Áp dụng tại quầy thanh toán 5 chi nhánh Busan',
    'coupons.coupon1Expiry': 'Hạn sử dụng: Đến Chủ Nhật tuần này',
    'coupons.barcodeNotice': 'Vui lòng xuất trình mã vạch này cho nhân viên thu ngân.',
    'coupons.coupon2Title': 'Phiếu Đổi Móc Khóa & Nhãn Dán Whale-it',
    'coupons.coupon2Sub': 'Xuất trình tại Quầy Dịch vụ Khách hàng tầng 1',
    'coupons.staffVerifyBtn': 'Xác Nhận Nhân Viên: Đã Đổi Quà',
    'coupons.staffDoneText': 'Đã đổi quà thành công (Mỗi người 1 lần)',
    'coupons.btnSave': 'Lưu Phiếu Vào Điện Thoại 💾',
    'coupons.btnShare': 'Chia Sẻ Với Bạn Bè 📢',

    // Weekly Recipe & Coming Soon
    'recipe.badge': 'Cả Gia Đình Cùng Nấu Ăn',
    'recipe.title': '🍳 Món Ăn Tuần Này: Công Thức Bulgogi Hoàn Hảo Trong 15 Phút',
    'recipe.desc': 'Cùng bé chế biến món ăn ngon miệng từ những nguyên liệu vừa tìm được nhé!',
    'recipe.step1Title': 'Bước 1: Ướp Thịt',
    'recipe.step1Desc': 'Xay nhuyễn quả lê ngọt, trộn cùng sốt Bulgogi Emart và ướp thịt trong 10 phút.',
    'recipe.step2Title': 'Bước 2: Chuẩn Bị Rau Củ',
    'recipe.step2Desc': 'Cắt hành tây và hành boa-rô thành miếng vừa ăn. Hãy để bé giúp rửa sạch rau nhé!',
    'recipe.step3Title': 'Bước 3: Xào Trên Lửa Lớn',
    'recipe.step3Desc': 'Làm nóng chảo, cho thịt và rau vào xào nhanh trên lửa lớn để giữ trọn vị ngọt mềm!',
    'recipe.chefTip': '💡 Mẹo của Whale-it: Dùng lê xay tự nhiên giúp thịt mềm thơm mà không cần thêm đường!',
    'recipe.comingTitle': '❓ Kho Báu Tuần Sau Sẽ Là Gì? (Sắp Ra Mắt)',
    'recipe.comingDesc': 'Mỗi tuần sẽ có một món ăn mới! Bấm vào hộp để mở manh mối bí mật.',
    'recipe.comingHint': '🐟 Gợi ý: Kho báu tuần sau đến từ đại dương tươi xanh! (Khu vực hải sản)',
    'recipe.btnBookmark': 'Đăng Ký Nhận Thông Báo / Đánh Dấu 🔔',

    // Footer & Viral
    'footer.title': 'Dự án Săn Kho Báu Emart Busan x Whale-it',
    'footer.hashtags': 'Hashtag Instagram phổ biến (Bấm để chép):',
    'footer.notice': '※ Bản đồ kho báu và quà tặng có số lượng giới hạn theo ngày. Phiếu giảm giá 5.000 won áp dụng cho hóa đơn từ 30.000 won trở lên.',
    'footer.customer': 'CSKH Emart: 02-380-5678 | Giờ mở cửa: 10:00 ~ 22:00',
    'footer.copyright': '© 2026 E-MART BUSAN & WHALE-IT TREASURE HUNT CAMPAIGN. ALL RIGHTS RESERVED.'
  },

  en: {
    // Header & Navigation
    'nav.brandTitle': 'Busan Treasure Hunt Adventure',
    'nav.brandSub': 'Food Ingredient Exploration Campaign',
    'nav.status': 'Live at 5 Busan Stores This Weekend',
    'nav.intro': 'About Event',
    'nav.quest': 'Virtual Quest',
    'nav.stores': 'Busan Stores',
    'nav.media': 'Media Showcase',
    'nav.coupons': 'Coupons & Rewards',
    'nav.recipe': 'Weekly Recipe',

    // Hero Section
    'hero.badge': 'Busan E-Mart Exclusive Weekend Promotion',
    'hero.title': 'Grocery shopping made fun!<br>This weekend, join the <span class="highlight">"Whale-it Treasure Hunt"</span>!',
    'hero.desc': 'A vibrant, color-coded shopping adventure for multicultural families and kids! Navigate the supermarket, collect secret ingredients, and earn a 5,000 KRW discount plus an exclusive Whale-it keychain.',
    'hero.btnQuest': 'Start Virtual Quest 🧭',
    'hero.btnStores': 'Find Busan Stores 📍',
    'hero.questBadge': "This Week's Treasure Recipe ➔ 🥩 Sweet & Savory Bulgogi",

    // 4-Step Process Guide
    'process.sectionTitle': 'Understand In 3 Seconds: 4 Simple Steps',
    'process.sectionDesc': "No Korean reading skills required! Simply follow the vivid overhead colored signs to find all hidden ingredients.",
    'process.step1Title': '1. Grab Treasure Map 🗺️',
    'process.step1Desc': 'Pick up your paper treasure map at the entrance or 1F Customer Service Desk!',
    'process.step2Title': '2. Follow Color Signs 🔴🟢🔵',
    'process.step2Desc': 'Follow Red (Meat), Green (Vegetables), and Blue (Seafood) ceiling signs.',
    'process.step3Title': '3. Fill Your Cart 🛒',
    'process.step3Desc': 'Match items with the illustrated map and place them into your shopping cart.',
    'process.step4Title': '4. Stamp & Win Gifts 🎁',
    'process.step4Desc': 'Complete all 4 stamps to claim your 5,000 KRW voucher and limited-edition keychain!',

    // Quest Simulator
    'quest.badge': 'Interactive Web Mini-Game',
    'quest.title': '🎮 [Virtual Quest] Complete Your Treasure Map',
    'quest.desc': 'Before visiting in person, discover the 4 secret Bulgogi ingredients on your phone! Finding all 4 instantly unlocks your mobile discount coupon.',
    'quest.bubble': "Hi! I'm Whale-it! 🐳 Let's cook delicious beef Bulgogi for dinner tonight! Explore the supermarket aisles to find the secret ingredients!",
    'quest.cartTitle': 'My Adventure Shopping Cart',
    'quest.resetBtn': 'Play Again 🔄',
    'quest.zoneRedTitle': '🔴 Meat Zone (Red Area)',
    'quest.zoneGreenTitle': '🟢 Produce Zone (Green Area)',
    'quest.zoneYellowTitle': '🟡 Seasoning Zone (Yellow Area)',
    'quest.itemBeef': 'Sliced Beef (For Bulgogi)',
    'quest.itemBeefDesc': 'Tender beef in the Red meat zone 🥩',
    'quest.itemOnion': 'Onion & Scallion',
    'quest.itemOnionDesc': 'Crisp vegetables in the Green produce zone 🧅',
    'quest.itemPear': 'Sweet Korean Pear',
    'quest.itemPearDesc': 'Naturally sweet pear for tenderizing 🍐',
    'quest.itemSauce': 'E-Mart Signature Bulgogi Sauce',
    'quest.itemSauceDesc': 'Secret seasoned marinade in the Yellow sauce aisle 🍯',
    'quest.stampSuccess': 'Found!',
    'quest.hintClick': 'Tap to put into cart',
    'quest.completeTitle': '🎉 Treasure Quest Completed!',
    'quest.completeMsg': 'Congratulations! You collected all 4 treasure ingredients.<br>Your <strong>5,000 KRW E-Mart Discount Coupon</strong> and <strong>Limited-Edition Keychain Voucher</strong> are now ready!',
    'quest.btnClaim': 'Open Treasure Chest (View Coupons) 🎁',

    // Busan Store Locator
    'stores.badge': '5 Key E-Mart Locations Across Busan',
    'stores.title': '📍 Find Your Nearest Busan E-Mart Store',
    'stores.desc': 'Experience the physical treasure hunt across 5 Busan branches. Pick up your official paper map at the 1st floor Customer Service Desk!',
    'stores.filterAll': 'All Stores (5)',
    'stores.filterNamgu': 'Nam-gu (Munhyeon)',
    'stores.filterHaeundae': 'Haeundae-gu (Haeundae)',
    'stores.filterGeumjeong': 'Geumjeong-gu (Geumjeong)',
    'stores.filterYeonje': 'Yeonje-gu (Yeonje)',
    'stores.filterSasang': 'Sasang-gu (Sasang)',
    'stores.searchPlaceholder': 'Search by store name or address...',
    'stores.boothLabel': 'Map Pickup Point',
    'stores.boothDesc': '1F Customer Service Desk & Main Entrance',
    'stores.copyBtn': 'Copy Address',
    'stores.copiedMsg': 'Address copied to clipboard!',
    'stores.kakaoBtn': 'KakaoMap Directions',
    'stores.naverBtn': 'NaverMap Directions',
    'stores.telLabel': 'Phone',

    // Media Showcase
    'media.badge': 'Shorts Video & Webtoon & Poster',
    'media.title': '🎬 1st-Person Shorts & 6-Part Webtoon & Official Poster',
    'media.desc': 'Check out the thrilling 1st-person POV shorts and 6-stage Insta-toon comic before your weekend trip!',
    'media.tabShorts': '1st-Person POV Shorts',
    'media.tabCardnews': '6-Part Insta-toon Comic',
    'media.tabPoster': 'Official Store Poster',

    // Coupons & Rewards
    'coupons.badge': 'Mission Completion Reward Chest',
    'coupons.title': '🎁 My Mobile Treasure Chest & Reward Vouchers',
    'coupons.desc': 'Complete the quest and redeem your instant checkout discount and exclusive character collectible!',
    'coupons.coupon1Title': 'E-Mart 5,000 KRW Discount Voucher',
    'coupons.coupon1Sub': 'Valid at checkout counters across 5 Busan stores',
    'coupons.coupon1Expiry': 'Expires: This Sunday at 22:00',
    'coupons.barcodeNotice': 'Show this barcode to the cashier at checkout.',
    'coupons.coupon2Title': 'Limited-Edition Whale-it Keychain Voucher',
    'coupons.coupon2Sub': 'Redeem at 1F Customer Service Desk',
    'coupons.staffVerifyBtn': 'Staff Verification: Redeem Reward',
    'coupons.staffDoneText': 'Reward Redeemed (One per customer)',
    'coupons.btnSave': 'Save Voucher To Phone 💾',
    'coupons.btnShare': 'Share With Friends 📢',

    // Weekly Recipe & Coming Soon
    'recipe.badge': 'Cook Together With Family',
    'recipe.title': '🍳 Weekly Treasure Recipe: 15-Minute Golden Bulgogi',
    'recipe.desc': 'Create a delicious and comforting dinner with your child using the ingredients you found today!',
    'recipe.step1Title': 'Step 1: Marinate Beef',
    'recipe.step1Desc': 'Puree sweet pear, combine with E-Mart signature sauce, and marinate beef for 10 minutes.',
    'recipe.step2Title': 'Step 2: Prepare Vegetables',
    'recipe.step2Desc': 'Slice onions and scallions into bite-sized pieces. Wash veggies together with your child!',
    'recipe.step3Title': 'Step 3: Quick Sauté on High Heat',
    'recipe.step3Desc': 'Heat a skillet and sauté meat and vegetables quickly over high heat to seal in rich juices.',
    'recipe.chefTip': "💡 Whale-it's Chef Tip: Grated pear naturally tenderizes beef and reduces the need for refined sugar!",
    'recipe.comingTitle': '❓ What is Next Week’s Treasure? (Coming Soon)',
    'recipe.comingDesc': 'A new themed quest arrives every week! Tap the mystery box to reveal a secret clue.',
    'recipe.comingHint': '🐟 Clue: Next week’s treasure comes from the deep blue sea! (Seafood Zone Quest)',
    'recipe.btnBookmark': 'Get Notified / Bookmark 🔔',

    // Footer & Viral
    'footer.title': 'Whale-it × E-Mart Busan Treasure Hunt Campaign',
    'footer.hashtags': 'Popular Instagram Hashtags (Click to copy):',
    'footer.notice': '※ Physical treasure maps and keychains are subject to daily availability limits. 5,000 KRW voucher applies to purchases over 30,000 KRW.',
    'footer.customer': 'E-Mart Customer Service: 02-380-5678 | Hours: 10:00 - 22:00',
    'footer.copyright': '© 2026 E-MART BUSAN & WHALE-IT TREASURE HUNT CAMPAIGN. ALL RIGHTS RESERVED.'
  }
};

let currentLanguage = 'ko';

/**
 * Initialize i18n
 */
function initI18n() {
  const savedLang = localStorage.getItem('emart_lang') || 'ko';
  setLanguage(savedLang, false);

  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.lang;
      if (selected && selected !== currentLanguage) {
        setLanguage(selected, true);
      }
    });
  });
}

/**
 * Set and apply language
 */
function setLanguage(lang, persist = true) {
  if (!TRANSLATIONS[lang]) lang = 'ko';
  currentLanguage = lang;

  if (persist) {
    try {
      localStorage.setItem('emart_lang', lang);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update Active Button UI
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  // Apply translations to all DOM elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = getTranslation(key, lang);
    if (translation !== undefined) {
      el.innerHTML = translation;
    }
  });

  // Apply translations to placeholders / aria-labels
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const spec = el.getAttribute('data-i18n-attr'); // e.g. "placeholder:stores.searchPlaceholder"
    const [attr, key] = spec.split(':');
    const translation = getTranslation(key, lang);
    if (translation !== undefined) {
      el.setAttribute(attr, translation);
    }
  });

  // Dispatch custom event for modules that need re-rendering
  window.dispatchEvent(new CustomEvent('emart:langchange', { detail: { lang } }));
}

/**
 * Helper to fetch translation string
 */
function getTranslation(key, lang = currentLanguage) {
  if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
    return TRANSLATIONS[lang][key];
  }
  if (TRANSLATIONS.ko && TRANSLATIONS.ko[key] !== undefined) {
    return TRANSLATIONS.ko[key];
  }
  return undefined;
}

window.t = getTranslation;
window.setLanguage = setLanguage;
window.getCurrentLanguage = () => currentLanguage;

document.addEventListener('DOMContentLoaded', initI18n);
