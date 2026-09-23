/**
 * ============================================================================
 * 고래잇 x 이마트 보물찾기 - 가상 퀘스트 시뮬레이터 (quest.js)
 * 게이미피케이션, Web Audio API 스탬프 효과음, Confetti 폭죽 연출, LocalStorage
 * ============================================================================
 */

const QUEST_ITEMS = [
  {
    id: 'beef',
    nameKo: '소고기 (불고기용)',
    nameVi: 'Thịt bò (Làm Bulgogi)',
    nameEn: 'Sliced Beef',
    icon: '🥩',
    zone: 'red',
    zoneNameKo: '🔴 육류 코너',
    zoneNameVi: '🔴 Quầy Thịt',
    zoneNameEn: '🔴 Meat Zone',
    shelfId: 'shelf-beef',
    slotId: 'cart-slot-beef',
    stampId: 'stamp-beef'
  },
  {
    id: 'onion',
    nameKo: '양파 & 대파',
    nameVi: 'Hành tây & Hành lá',
    nameEn: 'Onion & Scallion',
    icon: '🧅',
    zone: 'green',
    zoneNameKo: '🟢 채소 코너',
    zoneNameVi: '🟢 Quầy Rau',
    zoneNameEn: '🟢 Produce Zone',
    shelfId: 'shelf-onion',
    slotId: 'cart-slot-onion',
    stampId: 'stamp-onion'
  },
  {
    id: 'pear',
    nameKo: '달콤 꿀배',
    nameVi: 'Quả Lê Ngọt',
    nameEn: 'Sweet Korean Pear',
    icon: '🍐',
    zone: 'green',
    zoneNameKo: '🟢 과일 코너',
    zoneNameVi: '🟢 Quầy Trái Cây',
    zoneNameEn: '🟢 Fruit Zone',
    shelfId: 'shelf-pear',
    slotId: 'cart-slot-pear',
    stampId: 'stamp-pear'
  },
  {
    id: 'sauce',
    nameKo: '이마트 특제 불고기양념',
    nameVi: 'Sốt Bulgogi Emart',
    nameEn: 'E-Mart Bulgogi Sauce',
    icon: '🍯',
    zone: 'yellow',
    zoneNameKo: '🟡 양념 & 소스 코너',
    zoneNameVi: '🟡 Quầy Gia Vị',
    zoneNameEn: '🟡 Sauce Zone',
    shelfId: 'shelf-sauce',
    slotId: 'cart-slot-sauce',
    stampId: 'stamp-sauce'
  }
];

let questState = {
  beef: false,
  onion: false,
  pear: false,
  sauce: false
};

// Web Audio Context for realistic sound synthesis
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a stamp "쾅!" sound using Web Audio API
 */
function playStampSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Sub thump
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.18);

    gain.gain.setValueAtTime(0.8, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.22);

    // Chime bell on top
    const chime = ctx.createOscillator();
    const chimeGain = ctx.createGain();
    chime.type = 'sine';
    chime.frequency.setValueAtTime(659.25, now + 0.05); // E5
    chime.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5

    chimeGain.gain.setValueAtTime(0.3, now + 0.05);
    chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    chime.connect(chimeGain);
    chimeGain.connect(ctx.destination);

    chime.start(now + 0.05);
    chime.stop(now + 0.35);
  } catch (e) {
    console.warn('Audio play error:', e);
  }
}

/**
 * Play cheerful Fanfare Chords when quest completed!
 */
function playFanfareSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Major triad arpeggio: C5, E5, G5, C6
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = now + idx * 0.12;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.4, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.45);
    });
  } catch (e) {
    console.warn('Fanfare audio error:', e);
  }
}

/**
 * Initialize Quest Module
 */
function initQuestModule() {
  // Load saved state
  try {
    const saved = localStorage.getItem('emart_quest_items');
    if (saved) {
      questState = Object.assign(questState, JSON.parse(saved));
    }
  } catch (e) {
    console.warn('Quest state load error:', e);
  }

  // Bind Shelf Click Items
  QUEST_ITEMS.forEach(item => {
    const shelfEl = document.getElementById(item.shelfId);
    if (shelfEl) {
      shelfEl.addEventListener('click', () => {
        collectQuestItem(item.id, shelfEl);
      });
    }
  });

  // Reset Button
  const resetBtn = document.getElementById('questResetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetQuest);
  }

  // Quest Modal Close Button
  const modalClose = document.getElementById('questModalClose');
  if (modalClose) {
    modalClose.addEventListener('click', closeQuestModal);
  }

  // Claim Button to Scroll to Coupons
  const claimBtn = document.getElementById('questClaimBtn');
  if (claimBtn) {
    claimBtn.addEventListener('click', () => {
      closeQuestModal();
      const couponSec = document.getElementById('coupons');
      if (couponSec) {
        couponSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  updateQuestUI(false);
}

/**
 * Collect an item
 */
function collectQuestItem(itemId, sourceEl) {
  if (questState[itemId]) {
    if (window.showToast) {
      window.showToast('✨ 이미 장바구니에 담은 보물 식재료입니다!');
    }
    return;
  }

  questState[itemId] = true;
  saveQuestState();

  // Play realistic sound
  playStampSound();

  // Item Fly Animation towards Cart
  triggerFlyAnimation(sourceEl, itemId);

  // Update UI
  updateQuestUI(true);

  // Check if complete
  const allCollected = QUEST_ITEMS.every(i => questState[i.id]);
  if (allCollected) {
    setTimeout(() => {
      onQuestComplete();
    }, 600);
  }
}

/**
 * Flying Icon Animation from shelf to cart
 */
function triggerFlyAnimation(sourceEl, itemId) {
  const item = QUEST_ITEMS.find(i => i.id === itemId);
  if (!item || !sourceEl) return;

  const targetSlot = document.getElementById(item.slotId);
  if (!targetSlot) return;

  const startRect = sourceEl.getBoundingClientRect();
  const endRect = targetSlot.getBoundingClientRect();

  const flyer = document.createElement('div');
  flyer.className = 'quest-flying-item';
  flyer.textContent = item.icon;
  flyer.style.left = `${startRect.left + startRect.width / 2}px`;
  flyer.style.top = `${startRect.top + startRect.height / 2}px`;
  document.body.appendChild(flyer);

  // Force reflow
  flyer.getBoundingClientRect();

  flyer.style.left = `${endRect.left + endRect.width / 2}px`;
  flyer.style.top = `${endRect.top + endRect.height / 2}px`;
  flyer.style.transform = 'translate(-50%, -50%) scale(1.6) rotate(360deg)';
  flyer.style.opacity = '0.9';

  setTimeout(() => {
    flyer.remove();
    // Impact shake on slot
    targetSlot.classList.add('slot-stamped');
  }, 450);
}

/**
 * Update UI for current quest progress
 */
function updateQuestUI(animate = false) {
  let count = 0;
  QUEST_ITEMS.forEach(item => {
    const isCollected = questState[item.id];
    if (isCollected) count++;

    // Shelf styling
    const shelfEl = document.getElementById(item.shelfId);
    if (shelfEl) {
      shelfEl.classList.toggle('collected', isCollected);
      const tag = shelfEl.querySelector('.shelf-item-tag');
      if (tag) {
        tag.textContent = isCollected ? '✓ 담기완료' : '터치하여 획득';
      }
    }

    // Cart Slot styling
    const slotEl = document.getElementById(item.slotId);
    if (slotEl) {
      slotEl.classList.toggle('active', isCollected);
      const stamp = slotEl.querySelector('.cart-stamp-mark');
      if (stamp) {
        stamp.classList.toggle('stamped', isCollected);
      }
    }
  });

  // Progress Bar & Count
  const progressFill = document.getElementById('questProgressFill');
  const progressText = document.getElementById('questProgressText');
  const percentage = (count / QUEST_ITEMS.length) * 100;

  if (progressFill) {
    progressFill.style.width = `${percentage}%`;
  }
  if (progressText) {
    progressText.textContent = `${count} / 4 완료 (${Math.round(percentage)}%)`;
  }

  // If already finished on load
  if (count === 4) {
    localStorage.setItem('quest_completed', 'true');
    const badge = document.getElementById('questStatusNotice');
    if (badge) {
      badge.classList.add('all-cleared');
      badge.innerHTML = '✨ 퀘스트 완료! 하단 보물상자에서 5,000원 쿠폰을 확인하세요.';
    }
    // Inform coupons module
    if (window.unlockCoupons) {
      window.unlockCoupons();
    }
  }
}

/**
 * When all 4 collected
 */
function onQuestComplete() {
  localStorage.setItem('quest_completed', 'true');
  playFanfareSound();
  launchConfetti();

  const modal = document.getElementById('questCompleteModal');
  if (modal) {
    modal.classList.add('visible');
  }

  if (window.unlockCoupons) {
    window.unlockCoupons();
  }

  if (window.showToast) {
    window.showToast('🎉 축하합니다! 퀘스트 완료! 5,000원 할인 쿠폰이 활성화되었습니다.');
  }
}

function closeQuestModal() {
  const modal = document.getElementById('questCompleteModal');
  if (modal) {
    modal.classList.remove('visible');
  }
}

/**
 * Reset Quest
 */
function resetQuest() {
  questState = { beef: false, onion: false, pear: false, sauce: false };
  saveQuestState();
  localStorage.removeItem('quest_completed');
  updateQuestUI(false);

  const badge = document.getElementById('questStatusNotice');
  if (badge) {
    badge.classList.remove('all-cleared');
    badge.innerHTML = '🧭 4가지 식재료를 장바구니에 모두 담아보세요!';
  }

  if (window.showToast) {
    window.showToast('🔄 가상 퀘스트가 초기화되었습니다. 다시 도전해보세요!');
  }
}

function saveQuestState() {
  try {
    localStorage.setItem('emart_quest_items', JSON.stringify(questState));
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }
}

/**
 * Canvas Confetti Blast
 */
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.classList.add('active');

  const particles = [];
  const colors = ['#FFB81C', '#112A46', '#E3342F', '#38C172', '#4A90E2', '#FFD700', '#FF6B6B'];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.45 + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.8) * 16 - 2,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      gravity: 0.35,
      opacity: 1
    });
  }

  let animationFrameId;
  const startTime = Date.now();

  function render() {
    const elapsed = Date.now() - startTime;
    if (elapsed > 3500) {
      canvas.classList.remove('active');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrameId);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotSpeed;
      p.opacity = Math.max(0, 1 - (elapsed / 3500));

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      ctx.restore();
    });

    animationFrameId = requestAnimationFrame(render);
  }

  render();
}

window.resetQuest = resetQuest;
window.collectQuestItem = collectQuestItem;

document.addEventListener('DOMContentLoaded', initQuestModule);
