/**
 * ============================================================================
 * 고래잇 x 이마트 보물찾기 - 부산 매장 안내 모듈 (stores.js)
 * 이마트_대규모점포_부산광역시.csv 원천 데이터 기반 5개 점포
 * ============================================================================
 */

const BUSAN_STORES_DATA = [
  {
    id: 'munhyeon',
    district: 'namgu',
    districtKo: '남구',
    nameKo: '(주)이마트 문현점',
    nameEn: 'E-Mart Munhyeon Branch',
    nameVi: 'Chi nhánh Emart Munhyeon',
    address: '부산광역시 남구 전포대로91번길 47 (문현동)',
    jibun: '부산광역시 남구 문현동 751호',
    phone: '051-609-1052',
    rawPhone: '0516091052',
    hours: '10:00 ~ 22:00',
    closedDaysKo: '매월 둘째/넷째 일요일 휴무',
    closedDaysEn: 'Closed on 2nd & 4th Sundays',
    closedDaysVi: 'Đóng cửa vào Chủ Nhật tuần 2 & 4',
    boothKo: '1층 고객만족센터 & 정문 보물지도 배포대',
    boothEn: '1F Customer Service & Entrance Map Desk',
    boothVi: 'Bàn phát bản đồ Tầng 1 & Quầy CSKH',
    badgeKo: '남구 대표점',
    badgeEn: 'Nam-gu Flagship',
    badgeVi: 'Chi nhánh Nam-gu'
  },
  {
    id: 'haeundae',
    district: 'haeundae',
    districtKo: '해운대구',
    nameKo: '(주)이마트 해운대점',
    nameEn: 'E-Mart Haeundae Branch',
    nameVi: 'Chi nhánh Emart Haeundae',
    address: '부산광역시 해운대구 좌동순환로 511 (중동)',
    jibun: '부산광역시 해운대구 중1동 1767번지',
    phone: '051-608-1053',
    rawPhone: '0516081053',
    hours: '10:00 ~ 22:00',
    closedDaysKo: '매월 둘째/넷째 일요일 휴무',
    closedDaysEn: 'Closed on 2nd & 4th Sundays',
    closedDaysVi: 'Đóng cửa vào Chủ Nhật tuần 2 & 4',
    boothKo: '1층 고객만족센터 & 무빙워크 진입로 배포대',
    boothEn: '1F Customer Service & Moving Walkway Desk',
    boothVi: 'Bàn phát bản đồ Tầng 1 & Lối đi thang cuốn',
    badgeKo: '해운대 중심',
    badgeEn: 'Haeundae Center',
    badgeVi: 'Trung tâm Haeundae'
  },
  {
    id: 'geumjeong',
    district: 'geumjeong',
    districtKo: '금정구',
    nameKo: '(주)이마트 금정점',
    nameEn: 'E-Mart Geumjeong Branch',
    nameVi: 'Chi nhánh Emart Geumjeong',
    address: '부산광역시 금정구 중앙대로1841번길 24 (구서동)',
    jibun: '부산광역시 금정구 구서동 368호',
    phone: '051-606-1052',
    rawPhone: '0516061052',
    hours: '10:00 ~ 22:00',
    closedDaysKo: '매월 둘째/넷째 일요일 휴무',
    closedDaysEn: 'Closed on 2nd & 4th Sundays',
    closedDaysVi: 'Đóng cửa vào Chủ Nhật tuần 2 & 4',
    boothKo: '1층 안내데스크 & 지하 식품관 입구 배포대',
    boothEn: '1F Information Desk & B1 Food Hall Entrance',
    boothVi: 'Bàn hướng dẫn Tầng 1 & Lối vào khu ẩm thực B1',
    badgeKo: '금정 구서동',
    badgeEn: 'Geumjeong Guseo',
    badgeVi: 'Khu vực Geumjeong'
  },
  {
    id: 'yeonje',
    district: 'yeonje',
    districtKo: '연제구',
    nameKo: '(주)이마트 연제점',
    nameEn: 'E-Mart Yeonje Branch',
    nameVi: 'Chi nhánh Emart Yeonje',
    address: '부산광역시 연제구 연수로 89 (연산동)',
    jibun: '부산광역시 연제구 연산동 822-7호',
    phone: '051-860-1050',
    rawPhone: '0518601050',
    hours: '10:00 ~ 22:00',
    closedDaysKo: '매월 둘째/넷째 일요일 휴무',
    closedDaysEn: 'Closed on 2nd & 4th Sundays',
    closedDaysVi: 'Đóng cửa vào Chủ Nhật tuần 2 & 4',
    boothKo: '1층 고객만족센터 & 정문 안내데스크',
    boothEn: '1F Customer Service & Main Gate Desk',
    boothVi: 'Quầy CSKH Tầng 1 & Cửa chính',
    badgeKo: '연제 연산동',
    badgeEn: 'Yeonje Yeonsan',
    badgeVi: 'Khu vực Yeonje'
  },
  {
    id: 'sasang',
    district: 'sasang',
    districtKo: '사상구',
    nameKo: '(주)이마트 사상점',
    nameEn: 'E-Mart Sasang Branch',
    nameVi: 'Chi nhánh Emart Sasang',
    address: '부산광역시 사상구 광장로 17 (괘법동)',
    jibun: '부산광역시 사상구 괘법동 531번지 2호',
    phone: '051-329-1053',
    rawPhone: '0513291053',
    hours: '10:00 ~ 22:00',
    closedDaysKo: '매월 둘째/넷째 일요일 휴무',
    closedDaysEn: 'Closed on 2nd & 4th Sundays',
    closedDaysVi: 'Đóng cửa vào Chủ Nhật tuần 2 & 4',
    boothKo: '1층 고객만족센터 & 중앙 에스컬레이터 앞 배포대',
    boothEn: '1F Customer Service & Center Escalator Desk',
    boothVi: 'Quầy CSKH Tầng 1 & Trước thang cuốn trung tâm',
    badgeKo: '사상 괘법동',
    badgeEn: 'Sasang Gwaebeop',
    badgeVi: 'Khu vực Sasang'
  }
];

let activeDistrictFilter = 'all';
let searchKeyword = '';

function initStoresModule() {
  const filterButtons = document.querySelectorAll('.store-filter-btn');
  const searchInput = document.getElementById('storeSearchInput');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeDistrictFilter = btn.dataset.district || 'all';
      renderStores();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchKeyword = e.target.value.trim().toLowerCase();
      renderStores();
    });
  }

  // Re-render when language changes
  window.addEventListener('emart:langchange', () => {
    renderStores();
  });

  renderStores();
}

function renderStores() {
  const grid = document.getElementById('storesGrid');
  if (!grid) return;

  const currentLang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'ko';

  const filtered = BUSAN_STORES_DATA.filter(store => {
    const matchesDistrict = activeDistrictFilter === 'all' || store.district === activeDistrictFilter;
    const matchesSearch = !searchKeyword || 
      store.nameKo.toLowerCase().includes(searchKeyword) ||
      store.nameEn.toLowerCase().includes(searchKeyword) ||
      store.address.toLowerCase().includes(searchKeyword) ||
      store.districtKo.toLowerCase().includes(searchKeyword);
    return matchesDistrict && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="stores-empty-state">
        <span class="empty-icon">🔍</span>
        <p>검색 결과와 일치하는 부산 이마트 점포가 없습니다.</p>
        <button class="btn-reset-search" onclick="resetStoreSearch()">전체 점포 보기</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(store => {
    const storeName = currentLang === 'en' ? store.nameEn : (currentLang === 'vi' ? store.nameVi : store.nameKo);
    const storeBadge = currentLang === 'en' ? store.badgeEn : (currentLang === 'vi' ? store.badgeVi : store.badgeKo);
    const closedText = currentLang === 'en' ? store.closedDaysEn : (currentLang === 'vi' ? store.closedDaysVi : store.closedDaysKo);
    const boothText = currentLang === 'en' ? store.boothEn : (currentLang === 'vi' ? store.boothVi : store.boothKo);

    const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(store.nameKo)}`;
    const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(store.nameKo)}`;

    return `
      <article class="store-card" data-district="${store.district}">
        <div class="store-card-header">
          <div class="store-badge-row">
            <span class="store-tag district-tag">${store.districtKo}</span>
            <span class="store-tag status-tag">🟢 정상영업</span>
            <span class="store-tag feat-tag">${storeBadge}</span>
          </div>
          <h3 class="store-name">${storeName}</h3>
        </div>

        <div class="store-info-body">
          <div class="store-info-row">
            <span class="info-icon">📍</span>
            <div class="info-content">
              <strong class="info-label">도로명 주소</strong>
              <p class="store-address-text">${store.address}</p>
            </div>
            <button class="btn-copy-address" onclick="copyStoreAddress('${store.address.replace(/'/g, "\\'")}')" title="주소 복사" aria-label="주소 복사">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>복사</span>
            </button>
          </div>

          <div class="store-info-row">
            <span class="info-icon">🗺️</span>
            <div class="info-content">
              <strong class="info-label">보물지도 수령처</strong>
              <p class="booth-highlight">${boothText}</p>
            </div>
          </div>

          <div class="store-info-row">
            <span class="info-icon">⏰</span>
            <div class="info-content">
              <strong class="info-label">영업 시간 / 휴점일</strong>
              <p>${store.hours} (${closedText})</p>
            </div>
          </div>

          <div class="store-info-row">
            <span class="info-icon">📞</span>
            <div class="info-content">
              <strong class="info-label">전화 문의</strong>
              <a href="tel:${store.rawPhone}" class="store-phone-link">${store.phone}</a>
            </div>
          </div>
        </div>

        <div class="store-card-actions">
          <a href="${kakaoMapUrl}" target="_blank" rel="noopener noreferrer" class="btn-map-action kakao-map" aria-label="${storeName} 카카오맵 길찾기">
            <span>🟡 카카오맵</span>
          </a>
          <a href="${naverMapUrl}" target="_blank" rel="noopener noreferrer" class="btn-map-action naver-map" aria-label="${storeName} 네이버지도 길찾기">
            <span>🟢 네이버지도</span>
          </a>
        </div>
      </article>
    `;
  }).join('');
}

function copyStoreAddress(address) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(address).then(() => {
      if (window.showToast) {
        window.showToast('📋 도로명 주소가 복사되었습니다! 카카오/네이버지도에 붙여넣기 해보세요.');
      } else {
        alert('주소가 복사되었습니다: ' + address);
      }
    }).catch(() => {
      fallbackCopy(address);
    });
  } else {
    fallbackCopy(address);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    if (window.showToast) {
      window.showToast('📋 도로명 주소가 복사되었습니다!');
    } else {
      alert('주소가 복사되었습니다: ' + text);
    }
  } catch (err) {
    alert('주소: ' + text);
  }
  document.body.removeChild(ta);
}

function resetStoreSearch() {
  activeDistrictFilter = 'all';
  searchKeyword = '';
  const searchInput = document.getElementById('storeSearchInput');
  if (searchInput) searchInput.value = '';
  const filterButtons = document.querySelectorAll('.store-filter-btn');
  filterButtons.forEach(b => {
    b.classList.toggle('active', b.dataset.district === 'all');
  });
  renderStores();
}

window.copyStoreAddress = copyStoreAddress;
window.resetStoreSearch = resetStoreSearch;

document.addEventListener('DOMContentLoaded', initStoresModule);
