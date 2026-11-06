/**
 * ═════════════════════════════════════════════════════════════════
 * BTechX Standalone Landing Page Engine
 * ═════════════════════════════════════════════════════════════════
 */

// ── Complete Database of BTechX Subjects & Verified Modules ──
const BTECHX_SUBJECTS = [
  // 1st Year
  {
    id: "math1",
    year: "1st Year",
    code: "MA101",
    title: "Mathematics — I",
    icon: "fa-square-root-alt",
    summary: "Differential calculus, linear algebra, vector calculus, and differential equations.",
    modules: [
      "Module 1: Differential Calculus, Radius of Curvature & Asymptotes",
      "Module 2: Partial Differentiation & Euler's Theorem on Homogeneous Functions",
      "Module 3: Matrices, Rank, Eigenvalues & Systems of Linear Equations",
      "Module 4: Vector Calculus (Gradient, Divergence, Curl & Line Integrals)",
      "Module 5: Ordinary Differential Equations of First & Higher Order"
    ]
  },
  {
    id: "math2",
    year: "1st Year",
    code: "MA201",
    title: "Mathematics — II",
    icon: "fa-infinity",
    summary: "Laplace transforms, Fourier series, complex variables, and series solutions.",
    modules: [
      "Module 1: Laplace Transforms & Inverse Transforms for Initial Value Problems",
      "Module 2: Fourier Series, Half Range Expansions & Harmonic Analysis",
      "Module 3: Complex Variables, Cauchy-Riemann Equations & Conformal Mapping",
      "Module 4: Complex Integration, Cauchy Integral Formula & Residues",
      "Module 5: Series Solutions of ODEs & Special Functions (Bessel & Legendre)"
    ]
  },
  {
    id: "physics",
    year: "1st Year",
    code: "PH101",
    title: "Engineering Physics",
    icon: "fa-atom",
    summary: "Quantum mechanics, physical optics, lasers, fiber optics, and electromagnetism.",
    modules: [
      "Module 1: Wave Optics, Interference in Thin Films & Diffraction Gratings",
      "Module 2: Lasers, Einstein Coefficients & Optical Fiber Transmission",
      "Module 3: Quantum Mechanics, Wave-Particle Duality & Schrödinger Equation",
      "Module 4: Solid State Physics, Band Theory of Solids & Semiconductors",
      "Module 5: Electromagnetism, Maxwell's Equations & Poynting Vector"
    ]
  },
  {
    id: "iee",
    year: "1st Year",
    code: "EC101",
    title: "Intro to Electronics (IEE)",
    icon: "fa-microchip",
    summary: "Semiconductor diodes, bipolar junction transistors, operational amplifiers, and digital logic.",
    modules: [
      "Module 1: Semiconductor Physics, PN Junction Diodes & Rectifier Circuits",
      "Module 2: BJT & JFET Transistor Biasing Configurations & Characteristics",
      "Module 3: Operational Amplifiers (Op-Amps), Barkhausen Criteria & Oscillators",
      "Module 4: Number Systems, Boolean Algebra & Combinational Logic Gates",
      "Module 5: Electronic Communication Fundamentals (AM, FM & Digital Modulation)"
    ]
  },
  {
    id: "ime",
    year: "1st Year",
    code: "ME101",
    title: "Intro to Mechanical (IME)",
    icon: "fa-cogs",
    summary: "Engineering mechanics, statics, dynamics, strength of materials, and manufacturing.",
    modules: [
      "Module 1: Statics of Rigid Bodies, Coplanar Forces & Equilibrium",
      "Module 2: Dynamics, Work-Energy Theorem & Impulse-Momentum Principles",
      "Module 3: Strength of Materials, Stress-Strain Relations & Beam Bending",
      "Module 4: Thermodynamics, Laws of Heat Engines & Refrigeration Cycles",
      "Module 5: Modern Manufacturing Processes, Casting, Welding & Machining"
    ]
  },
  {
    id: "bee",
    year: "1st Year",
    code: "EE102",
    title: "Basic Electrical (BEE)",
    icon: "fa-bolt",
    summary: "DC circuit analysis, single/three-phase AC circuits, magnetic circuits, and machines.",
    modules: [
      "Module 1: DC Circuit Analysis, Kirchhoff's Laws & Network Theorems",
      "Module 2: Single-Phase & Three-Phase AC Circuits with Phasor Representation",
      "Module 3: Magnetic Circuits, BH Curve & Hysteresis Losses",
      "Module 4: Transformers, Single-Phase & Three-Phase Induction Motors",
      "Module 5: Measuring Instruments, Power Transmission & Electrical Safety"
    ]
  },

  // 2nd Year
  {
    id: "chemistry",
    year: "2nd Year",
    code: "CY101",
    title: "Engineering Chemistry",
    icon: "fa-flask",
    summary: "Molecular structures, chemical thermodynamics, electrochemistry, and engineering polymers.",
    modules: [
      "Module 1: Chemical Bonding, Molecular Orbital Theory & Band Structures",
      "Module 2: Chemical Thermodynamics, Free Energy & Reaction Kinetics",
      "Module 3: Electrochemistry, Nernst Equation, Batteries & Corrosion Control",
      "Module 4: Spectroscopy (UV-Vis, IR, NMR) & Analytical Instrumental Methods",
      "Module 5: Polymers, Conducting Plastics, Composites & Nanomaterials"
    ]
  },
  {
    id: "dccn",
    year: "2nd Year",
    code: "CS201",
    title: "Data Comm & Networks (DCCN)",
    icon: "fa-network-wired",
    summary: "OSI & TCP/IP stack, physical media, framing, flow control, routing algorithms, and security.",
    modules: [
      "Unit 1: Data Communication Fundamentals, Network Topologies & OSI Model",
      "Unit 2: Physical Layer Transmission Media, Modulation & Switching Systems",
      "Unit 3: Data Link Layer, Sliding Window Protocols, CRC & MAC Sublayer",
      "Unit 4: Network & Transport Layer (IPv4/v6, Dijkstra Routing, TCP & UDP)",
      "Unit 5: Application Layer Protocols (DNS, HTTP, SMTP) & Cryptography"
    ]
  },
  {
    id: "dbe",
    year: "2nd Year",
    code: "CS202",
    title: "Database Engineering (DBE)",
    icon: "fa-database",
    summary: "Relational models, SQL queries, relational calculus, schema normalization, and ACID properties.",
    modules: [
      "Unit 1: Database Architecture, Data Abstraction & Data Independence",
      "Unit 2: Entity-Relationship (ER) Modeling, Integrity Constraints & Keys",
      "Unit 3: Relational Algebra, Tuple Calculus & Advanced SQL Queries",
      "Unit 4: Relational Schema Design, Functional Dependencies & Normalization (1NF-BCNF)",
      "Unit 5: Transaction Management, Concurrency Control (2PL) & Recovery Mechanisms"
    ]
  },
  {
    id: "dmgt",
    year: "2nd Year",
    code: "MA203",
    title: "Discrete Mathematics (DMGT)",
    icon: "fa-project-diagram",
    summary: "Propositional logic, combinatorics, graph theory, spanning trees, and algebraic structures.",
    modules: [
      "Module 1: Propositional & Predicate Logic, Proofs & Posets",
      "Module 2: Combinatorics, Pigeonhole Principle & Recurrence Relations",
      "Module 3: Graph Theory, Euler/Hamilton Paths & Planar Graph Colouring",
      "Module 4: Trees, Spanning Trees (Kruskal, Prim) & Shortest Path (Dijkstra)",
      "Module 5: Algebraic Structures (Semigroups, Groups, Subgroups & Lattices)"
    ]
  },
  {
    id: "bevs",
    year: "2nd Year",
    code: "CY202",
    title: "Environmental Studies (BEVS)",
    icon: "fa-leaf",
    summary: "Cellular structures, biomolecules, ecosystem dynamics, and pollution treatment.",
    modules: [
      "Unit 1: Cellular Biology & Biomolecule Structural Properties",
      "Unit 2: Enzymatic Kinetics & Cellular Energy Transduction",
      "Unit 3: Ecosystem Structure, Trophic Pyramids & Biogeochemical Cycles",
      "Unit 4: Air & Noise Pollution Sources, Causes & Abatement Technologies",
      "Unit 5: Industrial Wastewater Treatment & Solid Waste Resource Recovery"
    ]
  },
  {
    id: "uhv",
    year: "2nd Year",
    code: "HS201",
    title: "Universal Human Values (UHV)",
    icon: "fa-hands-helping",
    summary: "Value education, self-exploration, harmony in human relationships, and professional ethics.",
    modules: [
      "Unit 1: Introduction to Value Education & Self Exploration Framework",
      "Unit 2: Harmony in the Human Being (Co-existence of Self and Body)",
      "Unit 3: Harmony in Family & Society (Foundational Values of Trust & Respect)",
      "Unit 4: Harmony in Nature & Existence as Integral Interconnectedness",
      "Unit 5: Competence in Professional Ethics & Humanistic Constitution"
    ]
  }
];

// ── DOM Initialization ──
document.addEventListener("DOMContentLoaded", () => {
  renderCatalogGrids();
  setupHeroLiveSearch();
  setupScrollProgressTracker();
  setupStoryScrollTimeline();
  setupPixelRevealCanvas();
  setupCollageParallax();
  setupEnterButtonRepulsion();
  setupAppsPopover();
  setupKeyboardShortcuts();
  setupCustomScrollbar();
});

// ── 1. The Original BTechX Hero Search Box Logic ──
function setupHeroLiveSearch() {
  const searchInput = document.getElementById("subjectSearchInput");
  const suggestionsBox = document.getElementById("searchSuggestions");
  const clearBtn = document.getElementById("clearSearchBtn");

  if (!searchInput || !suggestionsBox) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (clearBtn) clearBtn.style.display = query ? "flex" : "none";

    if (!query) {
      suggestionsBox.classList.remove("show");
      suggestionsBox.innerHTML = "";
      return;
    }

    const matches = BTECHX_SUBJECTS.filter(s => {
      const matchTitle = s.title.toLowerCase().includes(query);
      const matchCode = s.code.toLowerCase().includes(query);
      const matchYear = s.year.toLowerCase().includes(query);
      const matchModules = s.modules.some(m => m.toLowerCase().includes(query));
      return matchTitle || matchCode || matchYear || matchModules;
    });

    if (matches.length === 0) {
      suggestionsBox.innerHTML = `
        <div style="padding:16px; text-align:center; color:var(--text-muted); font-size:13px;">
          No subject or module matching "<b>${escapeHtml(query)}</b>" found.
        </div>`;
    } else {
      suggestionsBox.innerHTML = matches.map(s => `
        <div class="search-suggestion-item" onclick="openSubjectInspector('${s.id}'); hideHeroSearch();">
          <div class="search-item-left">
            <div class="search-item-icon"><i class="fas ${s.icon}"></i></div>
            <div>
              <div class="search-item-title">${s.title}</div>
              <div class="search-item-sub">${s.code} &bull; ${s.year} &bull; ${s.modules.length} Modules</div>
            </div>
          </div>
          <span class="search-item-badge">${s.code}</span>
        </div>
      `).join("");
    }

    suggestionsBox.classList.add("show");
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.classList.remove("show");
    }
  });
}

function clearHeroSearch() {
  const input = document.getElementById("subjectSearchInput");
  const box = document.getElementById("searchSuggestions");
  const btn = document.getElementById("clearSearchBtn");
  if (input) {
    input.value = "";
    input.focus();
  }
  if (box) {
    box.classList.remove("show");
    box.innerHTML = "";
  }
  if (btn) btn.style.display = "none";
}

function hideHeroSearch() {
  const box = document.getElementById("searchSuggestions");
  if (box) box.classList.remove("show");
}

// ── 2. Render Catalog Grids ──
function renderCatalogGrids() {
  const gridYear1 = document.getElementById("gridYear1");
  const gridYear2 = document.getElementById("gridYear2");

  if (gridYear1) {
    const year1Items = BTECHX_SUBJECTS.filter(s => s.year === "1st Year");
    gridYear1.innerHTML = year1Items.map(createKiviSubjectCard).join("");
  }

  if (gridYear2) {
    const year2Items = BTECHX_SUBJECTS.filter(s => s.year === "2nd Year");
    gridYear2.innerHTML = year2Items.map(createKiviSubjectCard).join("");
  }
}

function createKiviSubjectCard(subject) {
  return `
    <div class="kivi-subject-card" onclick="openSubjectInspector('${subject.id}')">
      <div>
        <div class="kivi-card-head">
          <div class="kivi-card-icon"><i class="fas ${subject.icon}"></i></div>
          <span class="kivi-code-pill">${subject.code}</span>
        </div>
        <h3 class="kivi-card-title">${subject.title}</h3>
        <p class="kivi-card-desc">${subject.summary}</p>
      </div>
      <div class="kivi-card-foot">
        <span class="kivi-module-count"><i class="fas fa-layer-group"></i> ${subject.modules.length} Modules</span>
        <i class="fas fa-arrow-right kivi-arrow"></i>
      </div>
    </div>
  `;
}

// ── 3. Year Tabs Switching ──
function switchYear(yearId, tabButton) {
  document.querySelectorAll(".year-group").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".kivi-tab").forEach(el => el.classList.remove("active"));

  const targetGroup = document.getElementById(yearId);
  if (targetGroup) targetGroup.classList.add("active");
  if (tabButton) tabButton.classList.add("active");
}

// ── 4. Story Scroll Timeline (Screenshot 2) ──
// ── 4. Asymmetric Interactive Slideshow Showcase Engine ──
const STORY_CONFIG = [
  {
    title: '<i class="fas fa-book-open"></i> Notes • Mathematics — I',
    panelId: 'panelState0'
  },
  {
    title: '<i class="fas fa-graduation-cap"></i> Syllabus • Engineering Matrix',
    panelId: 'panelState1'
  },
  {
    title: '<i class="fas fa-scroll"></i> Exam Vault • Solved Bank',
    panelId: 'panelState2'
  },
  {
    title: '<i class="fas fa-search"></i> Instant Discovery • ⌘K',
    panelId: 'panelState3'
  }
];

let currentStorySlide = 0;
let isSlidePlaying = true; // Active presentation timer
let slideProgressTimer = null;
const SLIDE_DURATION = 4500; // 4.5 seconds per slide
let slideStartTime = Date.now();
let isWheelThrottled = false;

function goToStorySlide(index) {
  if (index < 0) index = STORY_CONFIG.length - 1;
  if (index >= STORY_CONFIG.length) index = 0;
  currentStorySlide = index;

  const cfg = STORY_CONFIG[index];

  // Update Mac window title & counter
  const titleEl = document.getElementById("macWinTitle");
  const counterEl = document.getElementById("slideCounter");
  if (titleEl) titleEl.innerHTML = cfg.title;
  if (counterEl) counterEl.textContent = `0${index + 1} / 04`;

  // Update Canvas panel active state
  document.querySelectorAll(".canvas-panel").forEach(p => p.classList.remove("active"));
  const activePanel = document.getElementById(cfg.panelId);
  if (activePanel) activePanel.classList.add("active");

  // Update Asymmetric Selector Cards
  document.querySelectorAll(".asymmetric-box-card").forEach((card, idx) => {
    card.classList.toggle("active", idx === index);
  });

  // Update Dots
  document.querySelectorAll(".step-dot").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });

  // Reset Progress Fill
  resetAndStartProgress();
}
window.goToStorySlide = goToStorySlide;

function autoAdvanceToNextSection() {
  const nextSection = document.getElementById("papers");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}

function nextStorySlide() {
  if (currentStorySlide >= STORY_CONFIG.length - 1) {
    autoAdvanceToNextSection();
  } else {
    goToStorySlide(currentStorySlide + 1);
  }
}
window.nextStorySlide = nextStorySlide;

function prevStorySlide() {
  goToStorySlide(currentStorySlide - 1);
}
window.prevStorySlide = prevStorySlide;

function resetAndStartProgress() {
  clearInterval(slideProgressTimer);

  // Reset all progress bars
  document.querySelectorAll(".box-progress-fill").forEach(fill => {
    fill.style.width = "0%";
  });

  if (!isSlidePlaying) return;

  const activeFill = document.getElementById(`progressFill${currentStorySlide}`);
  slideStartTime = Date.now();

  slideProgressTimer = setInterval(() => {
    const elapsed = Date.now() - slideStartTime;
    const pct = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
    if (activeFill) activeFill.style.width = `${pct}%`;
    if (elapsed >= SLIDE_DURATION) {
      clearInterval(slideProgressTimer);
      if (currentStorySlide >= STORY_CONFIG.length - 1) {
        autoAdvanceToNextSection();
      } else {
        nextStorySlide();
      }
    }
  }, 50);
}

function toggleSlideAutoplay() {
  isSlidePlaying = !isSlidePlaying;
  const playBtn = document.getElementById("slidePlayPauseBtn");
  if (playBtn) {
    playBtn.innerHTML = isSlidePlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    playBtn.title = isSlidePlaying ? "Pause Presentation" : "Play Presentation";
  }

  if (isSlidePlaying) {
    resetAndStartProgress();
  } else {
    clearInterval(slideProgressTimer);
  }
}
window.toggleSlideAutoplay = toggleSlideAutoplay;

function setupStoryScrollTimeline() {
  const section = document.getElementById("interactive-tour");
  const container = document.getElementById("asymmetricTour");
  const prevBtn = document.getElementById("slidePrevBtn");
  const nextBtn = document.getElementById("slideNextBtn");
  const playPauseBtn = document.getElementById("slidePlayPauseBtn");

  if (!section || !container) return;

  if (playPauseBtn) {
    playPauseBtn.innerHTML = isSlidePlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    playPauseBtn.title = isSlidePlaying ? "Pause Presentation" : "Play Presentation";
    playPauseBtn.addEventListener("click", toggleSlideAutoplay);
  }

  if (prevBtn) prevBtn.addEventListener("click", prevStorySlide);
  if (nextBtn) nextBtn.addEventListener("click", nextStorySlide);

  // Pause autoplay on mouse hover so student can inspect
  container.addEventListener("mouseenter", () => {
    if (isSlidePlaying) {
      clearInterval(slideProgressTimer);
    }
  });

  container.addEventListener("mouseleave", () => {
    if (isSlidePlaying) {
      resetAndStartProgress();
    }
  });

  // IntersectionObserver: When section arrives in viewport, start presentation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!isSlidePlaying) {
          isSlidePlaying = true;
          if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
          resetAndStartProgress();
        }
      }
    });
  }, { threshold: 0.35 });
  observer.observe(section);

  // Presentation Wheel Interception:
  // When user is over this section, page scroll is locked so wheel advances presentation slides.
  // Once user reaches the last slide (or slide 0 when scrolling up), scroll continues naturally.
  function handlePresentationWheel(e) {
    const rect = section.getBoundingClientRect();
    const inView = rect.top <= 120 && rect.bottom >= window.innerHeight * 0.45;
    if (!inView) return;

    if (Math.abs(e.deltaY) < 18) return;

    if (e.deltaY > 0) {
      // Scrolling DOWN
      if (currentStorySlide < STORY_CONFIG.length - 1) {
        e.preventDefault(); // Lock page scroll!
        if (isWheelThrottled) return;
        isWheelThrottled = true;
        goToStorySlide(currentStorySlide + 1);
        setTimeout(() => { isWheelThrottled = false; }, 420);
      } else {
        // Last slide: allow natural page scroll down to next section
      }
    } else {
      // Scrolling UP
      if (currentStorySlide > 0) {
        e.preventDefault(); // Lock page scroll!
        if (isWheelThrottled) return;
        isWheelThrottled = true;
        goToStorySlide(currentStorySlide - 1);
        setTimeout(() => { isWheelThrottled = false; }, 420);
      } else {
        // First slide: allow natural page scroll up to hero
      }
    }
  }

  section.addEventListener("wheel", handlePresentationWheel, { passive: false });

  // Touch Swipe for mobile devices
  let touchStartY = 0;
  section.addEventListener("touchstart", (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  section.addEventListener("touchmove", (e) => {
    if (!e.touches || e.touches.length === 0) return;
    const diff = touchStartY - e.touches[0].clientY;
    const rect = section.getBoundingClientRect();
    const inView = rect.top <= 120 && rect.bottom >= window.innerHeight * 0.45;
    if (!inView) return;

    if (Math.abs(diff) > 40) {
      if (diff > 0 && currentStorySlide < STORY_CONFIG.length - 1) {
        e.preventDefault();
        if (!isWheelThrottled) {
          isWheelThrottled = true;
          goToStorySlide(currentStorySlide + 1);
          setTimeout(() => { isWheelThrottled = false; }, 450);
        }
      } else if (diff < 0 && currentStorySlide > 0) {
        e.preventDefault();
        if (!isWheelThrottled) {
          isWheelThrottled = true;
          goToStorySlide(currentStorySlide - 1);
          setTimeout(() => { isWheelThrottled = false; }, 450);
        }
      }
    }
  }, { passive: false });

  // Initial slide load
  goToStorySlide(0);
}

// ── 5.0 Interactive Canvas Pixel Reveal Torch Effect ──
function setupPixelRevealCanvas() {
  const hero = document.querySelector(".kivi-collage-hero");
  const canvas = document.querySelector("#pixelReveal");
  if (!hero || !canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const PIXEL = 8;
  const RADIUS = 190;
  const DARKNESS = 0.38;

  let width = 0;
  let height = 0;
  let dpr = 1;

  let mouseX = -1000;
  let mouseY = -1000;
  let active = false;

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;

    if (width === 0 || height === 0) return;

    dpr = Math.min(window.devicePixelRatio || 1, 1.25);

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Keep the center (where the title & Enter button sit) transparent and clear
    const centerGrad = ctx.createRadialGradient(
      width / 2, height * 0.44, 20,
      width / 2, height * 0.44, Math.max(width, height) * 0.65
    );
    centerGrad.addColorStop(0, "rgba(0, 5, 2, 0.08)"); // Highly transparent in the center
    centerGrad.addColorStop(0.45, `rgba(0, 5, 2, ${DARKNESS * 0.7})`);
    centerGrad.addColorStop(1, `rgba(0, 5, 2, ${DARKNESS})`);

    ctx.fillStyle = centerGrad;
    ctx.fillRect(0, 0, width, height);

    if (!active) return;

    const cx = Math.floor(mouseX / PIXEL) * PIXEL;
    const cy = Math.floor(mouseY / PIXEL) * PIXEL;

    // Remove darkness in pixelated blocks.
    ctx.globalCompositeOperation = "destination-out";

    const startX = Math.floor((cx - RADIUS) / PIXEL) * PIXEL;
    const startY = Math.floor((cy - RADIUS) / PIXEL) * PIXEL;

    for (let y = startY; y <= cy + RADIUS; y += PIXEL) {
      for (let x = startX; x <= cx + RADIUS; x += PIXEL) {
        const dx = x + PIXEL / 2 - cx;
        const dy = y + PIXEL / 2 - cy;
        const distance = Math.hypot(dx, dy);

        if (distance > RADIUS) continue;

        const falloff = Math.pow(Math.max(0, 1 - distance / RADIUS), 1.5);
        ctx.fillStyle = `rgba(0,0,0,${falloff})`;
        ctx.fillRect(x, y, PIXEL, PIXEL);
      }
    }

    // Add subtle lime pixels around the illuminated area.
    ctx.globalCompositeOperation = "source-over";

    for (let y = startY; y <= cy + RADIUS; y += PIXEL) {
      for (let x = startX; x <= cx + RADIUS; x += PIXEL) {
        const dx = x + PIXEL / 2 - cx;
        const dy = y + PIXEL / 2 - cy;
        const distance = Math.hypot(dx, dy);

        if (distance < RADIUS * 0.65 || distance > RADIUS) continue;

        const alpha = (1 - Math.abs(distance - RADIUS * 0.83) / (RADIUS * 0.17)) * 0.13;
        if (alpha <= 0) continue;

        ctx.fillStyle = `rgba(140,235,39,${alpha})`;
        ctx.fillRect(x, y, PIXEL, PIXEL);
      }
    }

    ctx.globalCompositeOperation = "source-over";
  }

  hero.addEventListener("pointermove", (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    active = true;
    draw();
  });

  hero.addEventListener("pointerleave", () => {
    active = false;
    draw();
  });

  if (window.ResizeObserver) {
    new ResizeObserver(resize).observe(hero);
  } else {
    window.addEventListener("resize", resize);
  }

  resize();
}

// ── 5. Floating Collage Subtle Parallax (Screenshot 1) ──
function setupCollageParallax() {
  const collage = document.querySelector(".kivi-collage-hero");
  const cards = document.querySelectorAll("[data-tilt-item]");

  if (!collage || !cards.length) return;

  collage.addEventListener("mousemove", (e) => {
    if (window.innerWidth <= 1160) return;
    const rect = collage.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    cards.forEach((card, idx) => {
      const factor = (idx % 3 + 1) * 7;
      card.style.setProperty("--tx", `${x * factor}px`);
      card.style.setProperty("--ty", `${y * factor}px`);
    });
  });

  collage.addEventListener("mouseleave", () => {
    cards.forEach(card => {
      card.style.removeProperty("--tx");
      card.style.removeProperty("--ty");
    });
  });
}

// ── 5.1 Magnetic Letter Repulsion Physics for Enter Button ──
function setupEnterButtonRepulsion() {
  const btn = document.querySelector(".btn-enter");
  const chars = document.querySelectorAll(".btn-enter .repel-char");
  if (!btn || !chars.length) return;

  // Initialize state per character
  const charStates = Array.from(chars).map(el => ({
    el,
    currX: 0,
    currY: 0,
    currRot: 0,
    targetX: 0,
    targetY: 0,
    targetRot: 0
  }));

  let mouseX = -9999;
  let mouseY = -9999;
  let isNearButton = false;

  const letterRepelRadius = 65; // Repulsion field radius around each letter
  const maxLetterPush = 16;     // Max displacement in px
  const maxRotation = 14;       // Max tilt angle in degrees

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const btnRect = btn.getBoundingClientRect();
    // Check if cursor is within the broader button neighborhood (80px margin)
    const margin = 80;
    if (
      mouseX >= btnRect.left - margin &&
      mouseX <= btnRect.right + margin &&
      mouseY >= btnRect.top - margin &&
      mouseY <= btnRect.bottom + margin
    ) {
      isNearButton = true;
      charStates.forEach(state => {
        const rect = state.el.getBoundingClientRect();
        const charCenterX = rect.left + rect.width / 2 - state.currX;
        const charCenterY = rect.top + rect.height / 2 - state.currY;

        const dx = charCenterX - mouseX; // Vector pointing away from mouse
        const dy = charCenterY - mouseY;
        const dist = Math.hypot(dx, dy);

        if (dist < letterRepelRadius && dist > 0.1) {
          const force = Math.pow(1 - dist / letterRepelRadius, 1.3);
          state.targetX = (dx / dist) * force * maxLetterPush;
          state.targetY = (dy / dist) * force * maxLetterPush;
          state.targetRot = (dx / dist) * force * maxRotation;
        } else {
          state.targetX = 0;
          state.targetY = 0;
          state.targetRot = 0;
        }
      });
    } else if (isNearButton) {
      isNearButton = false;
      charStates.forEach(state => {
        state.targetX = 0;
        state.targetY = 0;
        state.targetRot = 0;
      });
    }
  }

  function update() {
    charStates.forEach(state => {
      // Spring damping interpolation
      state.currX += (state.targetX - state.currX) * 0.14;
      state.currY += (state.targetY - state.currY) * 0.14;
      state.currRot += (state.targetRot - state.currRot) * 0.14;

      if (
        Math.abs(state.currX) > 0.04 ||
        Math.abs(state.currY) > 0.04 ||
        Math.abs(state.currRot) > 0.04 ||
        Math.abs(state.targetX) > 0.04 ||
        Math.abs(state.targetY) > 0.04
      ) {
        state.el.style.transform = `translate3d(${state.currX.toFixed(2)}px, ${state.currY.toFixed(2)}px, 0) rotate(${state.currRot.toFixed(2)}deg)`;
      } else if (state.currX !== 0 || state.currY !== 0 || state.currRot !== 0) {
        state.currX = 0;
        state.currY = 0;
        state.currRot = 0;
        state.el.style.transform = "";
      }
    });

    requestAnimationFrame(update);
  }

  window.addEventListener("mousemove", onMouseMove, { passive: true });

  window.addEventListener("mouseleave", () => {
    isNearButton = false;
    charStates.forEach(state => {
      state.targetX = 0;
      state.targetY = 0;
      state.targetRot = 0;
    });
  });

  requestAnimationFrame(update);
}

// ── 6. Scroll Progress Bar & Nav Links Tracking ──
function setupScrollProgressTracker() {
  const progressBar = document.getElementById("scrollProgress");
  const menuLinks = document.querySelectorAll(".navbar-links .nav-link");
  const sections = document.querySelectorAll("section[id], main[id]");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    if (progressBar) {
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    let currentId = "";
    sections.forEach(section => {
      const top = section.offsetTop - 140;
      const height = section.offsetHeight;
      if (scrollTop >= top && scrollTop < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    if (scrollTop < 300) {
      currentId = "top";
    }

    if (currentId) {
      const targetHash = (currentId === "overview" || currentId === "top") ? "#top" : `#${currentId}`;
      menuLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === targetHash) {
          link.classList.add("active");
        }
      });
    }
  });
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// ── 7. Apps Popover Toggle ──
function setupAppsPopover() {
  const btn = document.getElementById("appsToggleBtn");
  const popover = document.getElementById("appsPopover");

  if (btn && popover) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      popover.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!popover.contains(e.target) && e.target !== btn) {
        popover.classList.remove("active");
      }
    });
  }
}

// ── 8. FAQ Accordion ──
function toggleFaq(itemElement) {
  const isOpen = itemElement.classList.contains("open");
  document.querySelectorAll(".faq-item").forEach(item => item.classList.remove("open"));
  if (!isOpen) {
    itemElement.classList.add("open");
  }
}

// ── 9. Keyboard Shortcuts ──
function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const popover = document.getElementById("appsPopover");
      if (popover) popover.classList.remove("active");
    }

    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const input = document.getElementById("subjectSearchInput");
      if (input) {
        input.focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// ── 12. Custom Interactive Floating Scrollbar ──
function setupCustomScrollbar() {
  const track = document.getElementById("customScrollTrack");
  const thumb = document.getElementById("customScrollThumb");

  if (!track || !thumb) return;

  let isDragging = false;
  let startY = 0;
  let startThumbTop = 0;
  let scrollTimeout = null;

  function updateThumb() {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const trackHeight = track.clientHeight;

    if (docHeight <= winHeight) {
      track.style.display = "none";
      return;
    }
    track.style.display = "block";

    // Proportional thumb height (minimum 38px for touch/pointer target)
    const thumbHeight = Math.max(38, (winHeight / docHeight) * trackHeight);
    thumb.style.height = `${thumbHeight}px`;

    const maxScroll = docHeight - winHeight;
    const maxTop = trackHeight - thumbHeight;
    const scrollTop = window.scrollY;

    const currentTop = maxScroll > 0 ? (scrollTop / maxScroll) * maxTop : 0;
    thumb.style.transform = `translate3d(0, ${currentTop}px, 0)`;
  }

  // Window scroll syncs thumb
  window.addEventListener("scroll", () => {
    if (!isDragging) {
      updateThumb();
      track.classList.add("is-scrolling");

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        track.classList.remove("is-scrolling");
      }, 1000);
    }
  }, { passive: true });

  window.addEventListener("resize", updateThumb);

  // Drag thumb
  thumb.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    e.stopPropagation();

    isDragging = true;
    startY = e.clientY;

    const transform = thumb.style.transform || "";
    const match = transform.match(/translate3d\(0(?:px)?,\s*([\d.]+)px/);
    startThumbTop = match ? parseFloat(match[1]) : 0;

    track.classList.add("is-dragging");
    thumb.setPointerCapture(e.pointerId);
  });

  window.addEventListener("pointermove", (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY;
    const trackHeight = track.clientHeight;
    const thumbHeight = thumb.clientHeight;
    const maxTop = trackHeight - thumbHeight;

    const newThumbTop = Math.max(0, Math.min(maxTop, startThumbTop + deltaY));
    thumb.style.transform = `translate3d(0, ${newThumbTop}px, 0)`;

    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = docHeight - winHeight;

    const targetScroll = (newThumbTop / maxTop) * maxScroll;
    window.scrollTo({ top: targetScroll, behavior: "auto" });
  });

  const stopDrag = (e) => {
    if (isDragging) {
      isDragging = false;
      track.classList.remove("is-dragging");
      try {
        thumb.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }
  };

  window.addEventListener("pointerup", stopDrag);
  window.addEventListener("pointercancel", stopDrag);

  // Click on track rail to jump smoothly
  track.addEventListener("click", (e) => {
    if (e.target === thumb) return;

    const rect = track.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const trackHeight = track.clientHeight;
    const thumbHeight = thumb.clientHeight;
    const maxTop = trackHeight - thumbHeight;

    const newThumbTop = Math.max(0, Math.min(maxTop, clickY - thumbHeight / 2));
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = docHeight - winHeight;

    const targetScroll = (newThumbTop / maxTop) * maxScroll;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  });

  // Initial setup call
  setTimeout(updateThumb, 50);
}
