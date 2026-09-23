/**
 * ============================================================================
 * 고래잇 x 이마트 보물찾기 - 메인 애플리케이션 (app.js)
 * GNB 스크롤, 모바일 네비게이션, 플로팅 캐릭터 퀵버튼, 미스터리 박스, 해시태그 복사
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  initFloatingActionButton();
  initMysteryBox();
  initHashtagCopy();
});

/**
 * 1. Sticky Header Blur & Shadow on Scroll
 */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * 2. Mobile Hamburger Navigation
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navDrawer = document.getElementById('mobileNavDrawer');
  const navBackdrop = document.getElementById('mobileNavBackdrop');
  const closeBtn = document.getElementById('mobileNavClose');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !navDrawer) return;

  function openDrawer() {
    navDrawer.classList.add('open');
    if (navBackdrop) navBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    navDrawer.classList.remove('open');
    if (navBackdrop) navBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (navBackdrop) navBackdrop.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/**
 * 3. Smooth Anchor Scrolling with Header Offset
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = document.getElementById('siteHeader')?.offsetHeight || 70;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight + 5;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * 4. Floating Action Button (FAB) with Whale Character
 */
function initFloatingActionButton() {
  const fab = document.getElementById('floatingCharacterBtn');
  const backToTop = document.getElementById('btnBackToTop');

  if (fab) {
    fab.addEventListener('click', () => {
      const questSec = document.getElementById('quest');
      if (questSec) {
        questSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/**
 * 5. Weekly Recipe & Mystery Teaser Box
 */
function initMysteryBox() {
  const box = document.getElementById('mysteryBox');
  const hintEl = document.getElementById('mysteryHint');
  const bookmarkBtn = document.getElementById('btnMysteryBookmark');

  if (box && hintEl) {
    box.addEventListener('click', () => {
      box.classList.toggle('revealed');
      hintEl.classList.toggle('visible');
      if (hintEl.classList.contains('visible') && window.showToast) {
        window.showToast('🐟 차주 보물 힌트: 신선한 바다에서 온 친구! 수산물 코너를 기대하세요!');
      }
    });
  }

  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', () => {
      if (window.showToast) {
        window.showToast('🔔 다음 주 보물찾기 퀘스트 알림이 등록되었습니다! (브라우저 북마크 추천)');
      }
    });
  }
}

/**
 * 6. Instagram Hashtags One-Click Copy
 */
function initHashtagCopy() {
  const tagChips = document.querySelectorAll('.hashtag-chip');
  tagChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const tagText = chip.textContent.trim();
      if (window.copyToClipboard) {
        window.copyToClipboard(tagText, `📋 해시태그 "${tagText}" 복사 완료! 인스타그램에 올려보세요.`);
      }
    });
  });

  const copyAllBtn = document.getElementById('btnCopyAllHashtags');
  if (copyAllBtn) {
    copyAllBtn.addEventListener('click', () => {
      const allTags = '#고래잇보물찾기 #이마트부산 #아이와가볼만한곳 #주말장보기 #이마트문현점 #이마트해운대점';
      if (window.copyToClipboard) {
        window.copyToClipboard(allTags, '📋 모든 추천 해시태그가 복사되었습니다!');
      }
    });
  }
}
