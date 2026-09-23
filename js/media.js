/**
 * ============================================================================
 * 고래잇 x 이마트 보물찾기 - FR-05 미디어 쇼케이스 컨트롤러 (js/media.js)
 * 원페이지 랜딩 섹션 5 통합, 해시 충돌 방지, 다국어 지원, 전역 라이트박스
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initShortsPlayer();
  initCardnewsCarousel();
  initPosterShowcase();
  initLightboxModal();
});

/* ----------------------------------------------------------------------------
 * 1. Showcase Tab Navigation
 * ---------------------------------------------------------------------------- */
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.media-panel');

  function switchTab(targetTabId) {
    tabButtons.forEach(btn => {
      const isActive = btn.dataset.tab === targetTabId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    panels.forEach(panel => {
      const isTarget = panel.id === `panel-${targetTabId}`;
      panel.classList.toggle('active', isTarget);
    });

    // If switching away from shorts, pause video to save resources
    const video = document.getElementById('shortsVideo');
    if (video && targetTabId !== 'shorts' && !video.paused) {
      video.pause();
      if (window.updatePlayPauseState) {
        window.updatePlayPauseState(false);
      }
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = btn.dataset.tab;
      switchTab(tabId);
    });
  });
}

/* ----------------------------------------------------------------------------
 * 2. Shorts Video Player Controller (shorts.mp4)
 * ---------------------------------------------------------------------------- */
function initShortsPlayer() {
  const video = document.getElementById('shortsVideo');
  const playSplash = document.getElementById('videoPlaySplash');
  const soundBtn = document.getElementById('videoSoundBtn');
  const soundIcon = document.getElementById('soundIcon');
  const progressBar = document.getElementById('videoProgressBar');
  const progressFill = document.getElementById('videoProgressFill');
  const likeBtn = document.getElementById('videoLikeBtn');
  const likeCountSpan = document.getElementById('likeCount');
  const shareBtn = document.getElementById('videoShareBtn');

  if (!video) return;

  let isLiked = false;
  let likeCount = 1248;

  window.updatePlayPauseState = function (isPlaying) {
    if (!playSplash) return;
    playSplash.innerHTML = isPlaying ? '❚❚' : '▶';
    playSplash.classList.add('visible');
    setTimeout(() => {
      if (isPlaying) {
        playSplash.classList.remove('visible');
      }
    }, 450);
  };

  function togglePlay() {
    if (video.paused || video.ended) {
      video.play().then(() => {
        window.updatePlayPauseState(true);
      }).catch(err => {
        console.warn('Playback interrupted:', err);
      });
    } else {
      video.pause();
      window.updatePlayPauseState(false);
    }
  }

  video.addEventListener('click', togglePlay);

  // Sound Toggle
  if (soundBtn) {
    soundBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      if (video.muted) {
        soundIcon.innerHTML = `
          <path d="M11 5L6 9H2v6h4l5 4V5z"/>
          <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" stroke-width="2"/>
          <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" stroke-width="2"/>
        `;
        showToast('🔇 소리가 음소거되었습니다.');
      } else {
        soundIcon.innerHTML = `
          <path d="M11 5L6 9H2v6h4l5 4V5z"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        `;
        showToast('🔊 모험 사운드가 켜졌습니다!');
      }
    });
  }

  // Update Progress Bar
  video.addEventListener('timeupdate', () => {
    if (video.duration) {
      const percentage = (video.currentTime / video.duration) * 100;
      if (progressFill) progressFill.style.width = `${percentage}%`;
    }
  });

  if (progressBar) {
    progressBar.addEventListener('click', (e) => {
      e.stopPropagation();
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newPercentage = Math.max(0, Math.min(1, clickX / rect.width));
      if (video.duration) {
        video.currentTime = newPercentage * video.duration;
      }
    });
  }

  // Like Button
  if (likeBtn) {
    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isLiked = !isLiked;
      likeBtn.classList.toggle('liked', isLiked);

      if (isLiked) {
        likeCount++;
        spawnFloatingHeart(likeBtn);
        showToast('❤️ 고래잇 퀘스트를 응원했습니다!');
      } else {
        likeCount--;
      }
      if (likeCountSpan) likeCountSpan.textContent = likeCount.toLocaleString();
    });
  }

  function spawnFloatingHeart(parent) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '💖';
    heart.style.left = `${parent.offsetLeft + 10}px`;
    heart.style.top = `${parent.offsetTop - 10}px`;
    parent.parentElement.appendChild(heart);
    setTimeout(() => heart.remove(), 800);
  }

  // Share Button
  if (shareBtn) {
    shareBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const shareUrl = window.location.href.split('#')[0];
      const shareTitle = '고래잇 x 이마트 부산 보물찾기 퀘스트!';
      if (navigator.share) {
        navigator.share({
          title: shareTitle,
          text: '마트가 거대한 보물섬으로 변신! 고래잇과 함께하는 이마트 보물찾기 모험 영상 확인하기',
          url: shareUrl
        }).catch(() => {});
      } else {
        copyToClipboard(shareUrl, '📋 숏폼 영상 링크가 클립보드에 복사되었습니다!');
      }
    });
  }
}

/* ----------------------------------------------------------------------------
 * 3. 6-Step Cardnews Carousel Controller
 * ---------------------------------------------------------------------------- */
const CARDNEWS_DATA = [
  {
    step: 1,
    tagKo: '1단계: 호기심 유발',
    tagVi: 'Bước 1: Khơi gợi tò mò',
    tagEn: 'Step 1: Curiosity',
    titleKo: '마트는 지루한 곳? 아이의 시선에서 시작되는 모험!',
    titleVi: 'Siêu thị buồn chán? Bắt đầu cuộc phiêu lưu của bé!',
    titleEn: 'Boring supermarket? An adventure begins through kids eyes!',
    descKo: '엄마 카트에 타서 하품만 하던 5살 아이에게 매장 직원이 건넨 비밀의 보물지도! 지루했던 마트가 신나는 모험의 성으로 변신합니다.',
    descVi: 'Tấm bản đồ kho báu bí mật nhân viên trao cho bé 5 tuổi! Siêu thị biến thành lâu đài phiêu lưu hấp dẫn.',
    descEn: 'A secret treasure map handed to a bored 5-year-old in the cart transforms the everyday store into a castle of adventure.',
    src: 'cardnews01.png',
    alt: '고래잇 보물찾기 카드뉴스 1화 - 호기심 유발'
  },
  {
    step: 2,
    tagKo: '2단계: 행사 소개',
    tagVi: 'Bước 2: Giới thiệu sự kiện',
    tagEn: 'Step 2: Event Intro',
    titleKo: '오늘 저녁 뭐 먹지? 고래잇과 함께하는 보물찾기 대작전!',
    titleVi: 'Tối nay ăn gì? Chiến dịch săn kho báu cùng Whale-it!',
    titleEn: 'What is for dinner? The great treasure hunt with Whale-it!',
    descKo: '단순한 장보기가 아닌 온 가족이 함께 참여하는 식재료 탐험 퀘스트! 매주 새로운 테마 요리 레시피가 공개됩니다.',
    descVi: 'Không chỉ là mua sắm, đây là nhiệm vụ tìm nguyên liệu cho cả gia đình với công thức mới mỗi tuần.',
    descEn: 'More than grocery shopping: a family quest to discover fresh ingredients with weekly recipe releases.',
    src: 'cardnews02.png',
    alt: '고래잇 보물찾기 카드뉴스 2화 - 행사 소개'
  },
  {
    step: 3,
    tagKo: '3단계: 지도 획득 & 탐색',
    tagVi: 'Bước 3: Bản đồ & Màu sắc',
    tagEn: 'Step 3: Map & Color Codes',
    titleKo: '빨강·초록·파랑 색깔만 따라가면 나도 요리 탐험가!',
    titleVi: 'Chỉ cần đi theo màu Đỏ, Xanh lá, Xanh dương!',
    titleEn: 'Follow Red, Green, and Blue overhead signs!',
    descKo: '한글을 잘 몰라도 걱정 없어요! 천장 사인보드의 직관적인 색상(육류 빨강, 채소 초록, 수산 파랑)을 따라 보물 식재료를 찾으세요.',
    descVi: 'Không lo rào cản ngôn ngữ! Cứ theo màu sắc trên bảng chỉ dẫn trần để tìm nguyên liệu kho báu.',
    descEn: 'Zero language barriers! Follow the colorful overhead navigation signs (Meat Red, Produce Green, Seafood Blue).',
    src: 'cardnews03.png',
    alt: '고래잇 보물찾기 카드뉴스 3화 - 보물지도와 색깔 네비게이션'
  },
  {
    step: 4,
    tagKo: '4단계: 미션 달성',
    tagVi: 'Bước 4: Hoàn thành nhiệm vụ',
    tagEn: 'Step 4: Mission Accomplished',
    titleKo: '보물 식재료를 장바구니에 담고 보물지도에 스탬프 쾅!',
    titleVi: 'Bỏ nguyên liệu vào giỏ và đóng dấu 쾅 vào bản đồ!',
    titleEn: 'Place ingredients into the cart & stamp the map!',
    descKo: '아이가 직접 식재료를 찾아서 장바구니에 담을 때마다 보물지도에 스탬프가 쾅! 탐험 성공의 짜릿한 성취감을 선물합니다.',
    descVi: 'Mỗi lần tìm thấy nguyên liệu, bé lại được tự tay đóng dấu, mang lại niềm vui khám phá tuyệt vời.',
    descEn: 'Kids stamp their map as each item is placed into the cart, fostering proud confidence and joy.',
    src: 'cardnews04.png',
    alt: '고래잇 보물찾기 카드뉴스 4화 - 스탬프 날인'
  },
  {
    step: 5,
    tagKo: '5단계: 리워드 수령',
    tagVi: 'Bước 5: Nhận phần thưởng',
    tagEn: 'Step 5: Reward Redemption',
    titleKo: '미션 성공! 5,000원 쿠폰과 한정판 고래잇 키링 득템!',
    titleVi: 'Thành công! Nhận phiếu 5.000W & móc khóa Whale-it!',
    titleEn: 'Success! 5,000 KRW voucher & limited Whale-it keychain!',
    descKo: '계산대에서 즉시 5,000원 할인받고, 고객만족센터에서 귀여운 한정판 고래잇 키링과 캐릭터 스티커팩을 수령하세요!',
    descVi: 'Giảm ngay 5.000 Won tại quầy thu ngân và nhận móc khóa Whale-it xinh xắn tại Quầy CSKH Tầng 1!',
    descEn: 'Enjoy 5,000 KRW off at checkout, plus pick up the limited-edition Whale-it keychain & sticker pack at Customer Service!',
    src: 'cardnews05.png',
    alt: '고래잇 보물찾기 카드뉴스 5화 - 리워드 및 쿠폰 안내'
  },
  {
    step: 6,
    tagKo: '6단계: 다음 주 커밍순',
    tagVi: 'Bước 6: Tuần sau tiếp diễn',
    tagEn: 'Step 6: Coming Soon',
    titleKo: '다음 주 보물은 과연 무엇일까요? 커밍순!',
    titleVi: 'Kho báu tuần sau sẽ là gì? Cùng chờ đón nhé!',
    titleEn: 'What will next week’s treasure be? Stay tuned!',
    descKo: '매주 새로운 테마 요리로 찾아오는 고래잇 보물찾기 프로젝트! 다음 주말에도 부산 이마트에서 온 가족 보물 모험을 즐겨보세요!',
    descVi: 'Chuỗi sự kiện tiếp tục mỗi tuần với thực đơn mới tại 5 chi nhánh Emart Busan!',
    descEn: 'Weekly themed quests with new recipes! Join us again next weekend at Busan E-Mart!',
    src: 'cardnews06.png',
    alt: '고래잇 보물찾기 카드뉴스 6화 - 차주 커밍순 예고'
  }
];

function initCardnewsCarousel() {
  let currentIndex = 0;
  const totalSlides = CARDNEWS_DATA.length;

  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const currentStepNum = document.getElementById('currentStepNum');
  const stepBadge = document.getElementById('stepBadge');
  const storyTitle = document.getElementById('storyTitle');
  const storyDesc = document.getElementById('storyDesc');
  const storyStageTag = document.getElementById('storyStageTag');
  const dotsContainer = document.getElementById('carouselDots');
  const thumbsContainer = document.getElementById('cardnewsThumbs');
  const viewport = document.getElementById('carouselViewport');

  if (!track) return;

  // Build slides
  track.innerHTML = '';
  CARDNEWS_DATA.forEach((data, idx) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = `
      <img src="${data.src}" alt="${data.alt}" loading="lazy">
      <div class="slide-magnify-hint">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
        고화질 크게보기
      </div>
    `;
    slide.addEventListener('click', () => {
      openLightbox(CARDNEWS_DATA.map(d => ({ src: d.src, title: `${d.tagKo} - ${d.titleKo}` })), idx);
    });
    track.appendChild(slide);
  });

  // Build Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `${i + 1}번 슬라이드로 이동`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  // Build Thumbnails
  if (thumbsContainer) {
    thumbsContainer.innerHTML = '';
    CARDNEWS_DATA.forEach((data, i) => {
      const thumb = document.createElement('div');
      thumb.className = `thumb-item ${i === 0 ? 'active' : ''}`;
      thumb.innerHTML = `
        <span class="thumb-num">${i + 1}</span>
        <img src="${data.src}" alt="썸네일 ${i + 1}" loading="lazy">
      `;
      thumb.addEventListener('click', () => goToSlide(i));
      thumbsContainer.appendChild(thumb);
    });
  }

  function updateSlideUI() {
    const cur = CARDNEWS_DATA[currentIndex];
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'ko';
    const tagText = lang === 'en' ? cur.tagEn : (lang === 'vi' ? cur.tagVi : cur.tagKo);
    const titleText = lang === 'en' ? cur.titleEn : (lang === 'vi' ? cur.titleVi : cur.titleKo);
    const descText = lang === 'en' ? cur.descEn : (lang === 'vi' ? cur.descVi : cur.descKo);

    if (currentStepNum) currentStepNum.textContent = `0${currentIndex + 1} / 0${totalSlides}`;
    if (stepBadge) stepBadge.textContent = tagText;
    if (storyTitle) storyTitle.textContent = titleText;
    if (storyDesc) storyDesc.textContent = descText;
    if (storyStageTag) storyStageTag.textContent = `${currentIndex + 1} OF 6`;

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => dot.classList.toggle('active', idx === currentIndex));
    }

    if (thumbsContainer) {
      const thumbs = thumbsContainer.querySelectorAll('.thumb-item');
      thumbs.forEach((thumb, idx) => thumb.classList.toggle('active', idx === currentIndex));
    }
  }

  function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    updateSlideUI();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  // Touch Swipe
  let touchStartX = 0;
  let touchEndX = 0;

  if (viewport) {
    viewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex - 1);
      }
    }
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (modal && modal.classList.contains('active')) return;

    const cardnewsPanel = document.getElementById('panel-cardnews');
    if (cardnewsPanel && cardnewsPanel.classList.contains('active')) {
      if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
      if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
    }
  });

  window.addEventListener('emart:langchange', updateSlideUI);
  updateSlideUI();
}

/* ----------------------------------------------------------------------------
 * 4. Official Poster Showcase Controller
 * ---------------------------------------------------------------------------- */
function initPosterShowcase() {
  const posterWrap = document.getElementById('posterImageWrap');
  const posterZoomBtn = document.getElementById('posterZoomBtn');
  const posterDownloadBtn = document.getElementById('posterDownloadBtn');

  const posterItem = [{
    src: 'poster.png',
    title: '고래잇 x 이마트 보물찾기 매장 메인 포스터'
  }];

  function openPosterModal() {
    openLightbox(posterItem, 0);
  }

  if (posterWrap) posterWrap.addEventListener('click', openPosterModal);
  if (posterZoomBtn) posterZoomBtn.addEventListener('click', openPosterModal);

  if (posterDownloadBtn) {
    posterDownloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const link = document.createElement('a');
      link.href = 'poster.png';
      link.download = '고래잇_이마트_보물찾기_포스터.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('📥 포스터 다운로드가 시작되었습니다!');
    });
  }
}

/* ----------------------------------------------------------------------------
 * 5. Fullscreen Lightbox Modal
 * ---------------------------------------------------------------------------- */
let currentLightboxItems = [];
let currentLightboxIndex = 0;

function initLightboxModal() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (!modal) return;

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-content-box')) {
      closeModal();
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(items, startIndex = 0) {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImage');
  const modalCaption = document.getElementById('lightboxCaption');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (!modal || !items || !items.length) return;

  currentLightboxItems = items;
  currentLightboxIndex = startIndex;

  function updateLightboxView() {
    const item = currentLightboxItems[currentLightboxIndex];
    modalImg.src = item.src;
    modalImg.alt = item.title || '확대 이미지';
    if (modalCaption) {
      const pageInfo = currentLightboxItems.length > 1 ? ` (${currentLightboxIndex + 1}/${currentLightboxItems.length})` : '';
      modalCaption.textContent = (item.title || '') + pageInfo;
    }

    const showNav = currentLightboxItems.length > 1;
    if (prevBtn) prevBtn.style.display = showNav ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = showNav ? 'flex' : 'none';
  }

  window.navigateLightbox = function (direction) {
    const total = currentLightboxItems.length;
    currentLightboxIndex = (currentLightboxIndex + direction + total) % total;
    updateLightboxView();
  };

  updateLightboxView();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ----------------------------------------------------------------------------
 * 6. Utility Functions (Toast & Clipboard)
 * ---------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function copyToClipboard(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
  } catch (err) {
    showToast('주소를 수동으로 복사해주세요: ' + text);
  }
  document.body.removeChild(ta);
}

window.showToast = showToast;
window.copyToClipboard = copyToClipboard;
window.openLightbox = openLightbox;
