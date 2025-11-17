// Game state
let gameState = {
  currentSpread: null,
  deck: [],
  drawnCards: [],
  currentCardIndex: 0
};

// Utility functions
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getRandomOrientation() {
  return Math.random() < 0.5 ? 'upright' : 'reversed';
}

// Section navigation
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Close mobile menu if open
  const nav = document.querySelector('nav');
  if (nav) {
    nav.classList.remove('mobile-open');
  }
}

// Start a reading
function startReading(spreadType) {
  gameState.currentSpread = spreadType;
  gameState.deck = shuffle(majorArcana);
  gameState.drawnCards = [];
  gameState.currentCardIndex = 0;

  const spread = spreadConfig[spreadType];
  document.getElementById('spread-title').textContent = spread.name;

  // Create card positions
  const positionsContainer = document.getElementById('card-positions');
  positionsContainer.innerHTML = '';

  spread.positions.forEach((position, index) => {
    const positionDiv = document.createElement('div');
    positionDiv.className = 'card-position';
    positionDiv.innerHTML = `
      <div class="position-label">${position.label}</div>
      <div class="card-slot" id="slot-${index}" onclick="drawCard(${index})">
        <div class="card-back">✦</div>
      </div>
    `;
    positionsContainer.appendChild(positionDiv);
  });

  showSection('game');
}

// Draw a card
function drawCard(positionIndex) {
  if (gameState.drawnCards[positionIndex]) {
    // Card already drawn for this position, show it
    openCardModal(positionIndex);
    return;
  }

  if (gameState.currentCardIndex >= gameState.deck.length) {
    return;
  }

  const card = gameState.deck[gameState.currentCardIndex];
  const orientation = getRandomOrientation();

  gameState.drawnCards[positionIndex] = {
    card: card,
    orientation: orientation,
    position: positionIndex
  };
  gameState.currentCardIndex++;

  // Update the card slot
  const slot = document.getElementById(`slot-${positionIndex}`);
  slot.innerHTML = createCardElement(card, orientation);
  slot.onclick = () => openCardModal(positionIndex);
}

// Create card element
function createCardElement(card, orientation) {
  const rotateClass = orientation === 'reversed' ? 'rotated' : '';
  return `
    <div class="card-image-wrapper ${rotateClass}">
      <img src="${card.image}" alt="${card.name}" class="card-image"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="card-placeholder" style="display:none; border-color: ${card.color}">
        <div class="card-number">${card.number}</div>
        <div class="card-name-small">${card.name}</div>
        <div class="card-symbol">✦</div>
      </div>
    </div>
  `;
}

// Shuffle deck (reset)
function shuffleDeck() {
  const spread = spreadConfig[gameState.currentSpread];
  const confirmed = confirm('Are you sure you want to shuffle and start over?');
  if (confirmed) {
    startReading(gameState.currentSpread);
  }
}

// Modal functions
function openCardModal(positionIndex) {
  const drawnCard = gameState.drawnCards[positionIndex];
  if (!drawnCard) return;

  const { card, orientation, position } = drawnCard;
  const spread = spreadConfig[gameState.currentSpread];
  const positionInfo = spread.positions[position];

  // Populate modal
  document.getElementById('modal-card-name').textContent = card.name;
  document.getElementById('modal-position').textContent = `As ${positionInfo.label}`;
  document.getElementById('modal-orientation').textContent = orientation === 'upright' ? '↑ Upright' : '↓ Reversed';

  // Card display
  const modalCard = document.getElementById('modal-card');
  const rotateClass = orientation === 'reversed' ? 'rotated' : '';
  modalCard.innerHTML = `
    <div class="card-image-wrapper large ${rotateClass}">
      <img src="${card.image}" alt="${card.name}" class="card-image large"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="card-placeholder large" style="display:none; border-color: ${card.color}">
        <div class="card-number">${card.number}</div>
        <div class="card-name-small">${card.name}</div>
        <div class="card-symbol">✦</div>
      </div>
    </div>
  `;

  // Meaning tab
  const meaning = orientation === 'upright' ? card.upright : card.reversed;
  document.getElementById('modal-interpretation').textContent =
    `As ${positionInfo.context}, ${card.name} ${orientation === 'reversed' ? '(reversed)' : ''} suggests: ${meaning.short}`;
  document.getElementById('modal-meaning').textContent = meaning.detailed;

  // Keywords
  const keywordsHtml = card.keywords.map(kw => `<span class="keyword">${kw}</span>`).join('');
  document.getElementById('modal-keywords').innerHTML = `<strong>Keywords:</strong> ${keywordsHtml}`;

  // Symbolism tab
  const symbolismHtml = card.symbolism.map(sym => `<li>${sym}</li>`).join('');
  document.getElementById('modal-symbolism').innerHTML = `<ul>${symbolismHtml}</ul>`;

  // History tab
  document.getElementById('modal-history').innerHTML = `<p>${card.history}</p>`;

  // Show modal
  document.getElementById('modal').style.display = 'flex';

  // Reset to meaning tab
  switchTab('meaning');
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Tab switching
function switchTab(tabName) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // Show selected tab
  document.getElementById(`${tabName}-content`).classList.add('active');
  document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
}

// Card Reference Page
function initializeCardReference() {
  const grid = document.getElementById('card-grid');
  if (!grid) return;

  grid.innerHTML = majorArcana.map(card => `
    <div class="reference-card" onclick="openCardModalFromReference(${card.id})">
      <img src="${card.image}" alt="${card.name}" class="reference-card-image"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="reference-card-placeholder" style="display:none;">
        <div class="card-symbol">✦</div>
      </div>
      <div class="reference-card-info">
        <div class="reference-card-number">${card.number}</div>
        <div class="reference-card-name">${card.name}</div>
        <div class="reference-card-tagline">${card.keywords.slice(0, 3).join(' • ')}</div>
      </div>
    </div>
  `).join('');
}

function openCardModalFromReference(cardId) {
  const card = majorArcana.find(c => c.id === cardId);
  if (!card) return;

  // Populate modal without position context
  document.getElementById('modal-card-name').textContent = card.name;
  document.getElementById('modal-position').textContent = 'Card Reference';
  document.getElementById('modal-orientation').textContent = '↑ Upright';

  // Card display
  const modalCard = document.getElementById('modal-card');
  modalCard.innerHTML = `
    <div class="card-image-wrapper large">
      <img src="${card.image}" alt="${card.name}" class="card-image large"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="card-placeholder large" style="display:none; border-color: ${card.color}">
        <div class="card-number">${card.number}</div>
        <div class="card-name-small">${card.name}</div>
        <div class="card-symbol">✦</div>
      </div>
    </div>
  `;

  // Meaning tab (upright only)
  const meaning = card.upright;
  document.getElementById('modal-interpretation').textContent = meaning.short;
  document.getElementById('modal-meaning').textContent = meaning.detailed;

  // Keywords
  const keywordsHtml = card.keywords.map(kw => `<span class="keyword">${kw}</span>`).join('');
  document.getElementById('modal-keywords').innerHTML = `<strong>Keywords:</strong> ${keywordsHtml}`;

  // Symbolism tab
  const symbolismHtml = card.symbolism.map(sym => `<li>${sym}</li>`).join('');
  document.getElementById('modal-symbolism').innerHTML = `<ul>${symbolismHtml}</ul>`;

  // History tab
  document.getElementById('modal-history').innerHTML = `<p>${card.history}</p>`;

  // Show modal
  document.getElementById('modal').style.display = 'flex';

  // Reset to meaning tab
  switchTab('meaning');
}

// Toggle mobile menu
function toggleMobileMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('mobile-open');
}

// Initialize reference page on load
document.addEventListener('DOMContentLoaded', () => {
  initializeCardReference();
});

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
}
