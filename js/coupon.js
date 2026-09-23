/**
 * ============================================================================
 * 고래잇 x 이마트 보물찾기 - 모바일 리워드 & 쿠폰 발급 모듈 (coupon.js)
 * 바코드 벡터 렌더링, 일요일 자동 만료일 계산, 직원 확인 토글, LocalStorage
 * ============================================================================
 */

function initCouponsModule() {
  generateDynamicCouponDetails();
  checkCouponUnlockState();
  initStaffRedemption();
  initCouponSaveModal();
  initCouponShare();
}

/**
 * Calculate upcoming Sunday expiration date and serial number
 */
function generateDynamicCouponDetails() {
  // Serial number
  let serial = localStorage.getItem('emart_coupon_serial');
  if (!serial) {
    const randomHex = Math.floor(1000 + Math.random() * 9000);
    serial = `EMART-2026-BUSAN-${randomHex}`;
    localStorage.setItem('emart_coupon_serial', serial);
  }

  const serialEls = document.querySelectorAll('.coupon-serial-text');
  serialEls.forEach(el => {
    el.textContent = serial;
  });

  // Calculate upcoming Sunday
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 is Sunday
  const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  const sundayDate = new Date(now);
  sundayDate.setDate(now.getDate() + daysUntilSunday);

  const year = sundayDate.getFullYear();
  const month = String(sundayDate.getMonth() + 1).padStart(2, '0');
  const date = String(sundayDate.getDate()).padStart(2, '0');

  const expiryString = `${year}.${month}.${date}(일) 22:00까지`;

  const expiryEls = document.querySelectorAll('.coupon-expiry-date');
  expiryEls.forEach(el => {
    el.textContent = expiryString;
  });

  // Render SVG Barcodes
  renderSvgBarcode('barcodeDiscount', serial + '5000');
  renderSvgBarcode('barcodeKeyring', 'KEYRING-BUSAN-2026');
}

/**
 * Generate a realistic SVG Barcode
 */
function renderSvgBarcode(containerId, codeString) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const barPattern = generateBarPattern(codeString);
  let svgBars = '';
  let x = 10;
  const height = 50;

  for (let i = 0; i < barPattern.length; i++) {
    const width = barPattern[i];
    if (i % 2 === 0) {
      svgBars += `<rect x="${x}" y="0" width="${width}" height="${height}" fill="#112A46" />`;
    }
    x += width;
  }

  const totalWidth = x + 10;
  container.innerHTML = `
    <svg viewBox="0 0 ${totalWidth} 50" preserveAspectRatio="none" class="barcode-svg" aria-label="바코드: ${codeString}">
      ${svgBars}
    </svg>
    <div class="barcode-number">${codeString}</div>
  `;
}

function generateBarPattern(str) {
  // Deterministic pattern generator based on string chars
  const pattern = [2, 1, 2]; // Start guard
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    pattern.push(
      (charCode % 3) + 1,
      ((charCode >> 1) % 3) + 1,
      ((charCode >> 2) % 2) + 1,
      ((charCode >> 3) % 3) + 1
    );
  }
  pattern.push(2, 1, 2); // Stop guard
  return pattern;
}

/**
 * Check if quest has been completed to unlock coupons
 */
function checkCouponUnlockState() {
  const isCompleted = localStorage.getItem('quest_completed') === 'true';
  const couponCards = document.querySelectorAll('.coupon-card');

  couponCards.forEach(card => {
    if (isCompleted) {
      card.classList.remove('locked');
      card.classList.add('unlocked');
      const badge = card.querySelector('.coupon-status-badge');
      if (badge && !card.classList.contains('redeemed')) {
        badge.className = 'coupon-status-badge active';
        badge.textContent = '🟢 사용 가능';
      }
    } else {
      card.classList.add('locked');
      card.classList.remove('unlocked');
      const badge = card.querySelector('.coupon-status-badge');
      if (badge) {
        badge.className = 'coupon-status-badge locked-badge';
        badge.textContent = '🔒 퀘스트 완료 후 사용';
      }
    }
  });
}

function unlockCoupons() {
  checkCouponUnlockState();
}
window.unlockCoupons = unlockCoupons;

/**
 * Staff Keyring Redemption Verification
 */
function initStaffRedemption() {
  const verifyBtn = document.getElementById('staffVerifyBtn');
  const keyringCard = document.getElementById('keyringCouponCard');
  if (!verifyBtn || !keyringCard) return;

  const isRedeemed = localStorage.getItem('emart_keyring_redeemed') === 'true';
  if (isRedeemed) {
    markKeyringRedeemed(verifyBtn, keyringCard);
  }

  verifyBtn.addEventListener('click', () => {
    if (keyringCard.classList.contains('locked')) {
      if (window.showToast) {
        window.showToast('🧭 먼저 가상 퀘스트를 완료해야 교환권을 사용할 수 있습니다!');
      }
      return;
    }

    const confirmAction = confirm('【매장 직원 전용】\n고객님께 한정판 고래잇 키링을 증정하셨습니까?\n(확인 후에는 재사용이 불가능합니다)');
    if (confirmAction) {
      localStorage.setItem('emart_keyring_redeemed', 'true');
      markKeyringRedeemed(verifyBtn, keyringCard);
      if (window.showToast) {
        window.showToast('🎁 한정판 고래잇 키링 수령이 완료되었습니다! 감사합니다.');
      }
    }
  });
}

function markKeyringRedeemed(btn, card) {
  card.classList.add('redeemed');
  btn.disabled = true;
  btn.classList.add('done');
  btn.textContent = '✅ 수령 완료 (교환 불가)';

  const badge = card.querySelector('.coupon-status-badge');
  if (badge) {
    badge.className = 'coupon-status-badge redeemed-badge';
    badge.textContent = '⚪ 수령 완료';
  }
}

/**
 * Coupon Save Modal (High-contrast capture guide)
 */
function initCouponSaveModal() {
  const saveBtn = document.getElementById('btnSaveCoupon');
  const modal = document.getElementById('couponSaveModal');
  const closeBtn = document.getElementById('couponSaveCloseBtn');

  if (saveBtn && modal) {
    saveBtn.addEventListener('click', () => {
      modal.classList.add('visible');
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('visible');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('visible');
    });
  }
}

/**
 * Share Promotion / Coupons
 */
function initCouponShare() {
  const shareBtn = document.getElementById('btnShareCoupon');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', () => {
    const shareData = {
      title: '고래잇 x 이마트 부산 보물찾기 5,000원 쿠폰 & 키링!',
      text: '지루한 장보기는 끝! 이번 주말 부산 이마트에서 소불고기 보물찾기하고 5,000원 할인 쿠폰과 한정판 고래잇 키링 받아가세요!',
      url: window.location.href.split('#')[0]
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareData.url).then(() => {
          if (window.showToast) {
            window.showToast('📢 보물찾기 링크가 클립보드에 복사되었습니다! 친구에게 소문내보세요.');
          }
        });
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', initCouponsModule);
