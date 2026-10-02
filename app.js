/**
 * CampusPulse - Nagpur Engineering Campus Guide & Survival Portal
 * Pure Vanilla JavaScript Application Controller
 */

// Application State
const STATE = {
  currentCollegeId: "vnit",
  activeCafeFilter: "all",
  searchQuery: "",
  savedToolkit: JSON.parse(localStorage.getItem("campuspulse_toolkit") || "[]"),
  polls: JSON.parse(localStorage.getItem("campuspulse_polls") || "null") || INITIAL_POLLS,
  userVotes: JSON.parse(localStorage.getItem("campuspulse_user_votes") || "{}")
};

// DOM Elements Cache
const DOM = {
  collegeSelect: document.getElementById("collegeSelect"),
  currentCollegeTag: document.getElementById("currentCollegeTag"),
  globalSearchInput: document.getElementById("globalSearchInput"),
  glowOrb1: document.getElementById("glowOrb1"),
  glowOrb2: document.getElementById("glowOrb2"),
  
  // Hero
  heroBadge: document.getElementById("heroBadge"),
  heroLocationText: document.getElementById("heroLocationText"),
  heroEst: document.getElementById("heroEst"),
  heroMetro: document.getElementById("heroMetro"),
  heroTitle: document.getElementById("heroTitle"),
  heroTagline: document.getElementById("heroTagline"),
  heroOverview: document.getElementById("heroOverview"),
  statHighestPackage: document.getElementById("statHighestPackage"),
  statAvgPackage: document.getElementById("statAvgPackage"),
  statPlacementRate: document.getElementById("statPlacementRate"),
  statAttendanceVibe: document.getElementById("statAttendanceVibe"),

  // Sections
  cafesGrid: document.getElementById("cafesGrid"),
  cafeFilterTabs: document.getElementById("cafeFilterTabs"),
  facultyAttendanceIntel: document.getElementById("facultyAttendanceIntel"),
  facultyLabSurvival: document.getElementById("facultyLabSurvival"),
  facultyGrid: document.getElementById("facultyGrid"),
  patentProtocolList: document.getElementById("patentProtocolList"),
  publicationTipsText: document.getElementById("publicationTipsText"),
  mentorsGrid: document.getElementById("mentorsGrid"),
  festsGrid: document.getElementById("festsGrid"),
  hostelHacksList: document.getElementById("hostelHacksList"),
  weekendSpotsList: document.getElementById("weekendSpotsList"),
  campusCommuteTip: document.getElementById("campusCommuteTip"),
  metroLinesGrid: document.getElementById("metroLinesGrid"),
  placementHighest: document.getElementById("placementHighest"),
  placementMedian: document.getElementById("placementMedian"),
  recruiterPillsContainer: document.getElementById("recruiterPillsContainer"),
  placementRoadmapTimeline: document.getElementById("placementRoadmapTimeline"),
  yearWisePlacementBody: document.getElementById("yearWisePlacementBody"),
  companyBreakdownBody: document.getElementById("companyBreakdownBody"),
  branchStatsGrid: document.getElementById("branchStatsGrid"),
  pyqGrid: document.getElementById("pyqGrid"),
  studyResourcesGrid: document.getElementById("studyResourcesGrid"),
  pollsGrid: document.getElementById("pollsGrid"),

  // Modals & Toolkit
  openToolkitBtn: document.getElementById("openToolkitBtn"),
  closeToolkitBtn: document.getElementById("closeToolkitBtn"),
  toolkitModal: document.getElementById("toolkitModal"),
  savedCountBadge: document.getElementById("savedCountBadge"),
  savedItemsContainer: document.getElementById("savedItemsContainer"),
  mentorModal: document.getElementById("mentorModal"),
  closeMentorBtn: document.getElementById("closeMentorBtn"),
  mentorContactForm: document.getElementById("mentorContactForm"),
  mentorModalName: document.getElementById("mentorModalName"),
  suggestPollBtn: document.getElementById("suggestPollBtn"),
  suggestPollModal: document.getElementById("suggestPollModal"),
  closeSuggestPollBtn: document.getElementById("closeSuggestPollBtn"),
  suggestPollForm: document.getElementById("suggestPollForm"),
  toastContainer: document.getElementById("toastContainer"),
  mobileNavToggle: document.getElementById("mobileNavToggle"),
  navMenu: document.getElementById("navMenu")
};

/**
 * Initialize Application
 */
document.addEventListener("DOMContentLoaded", () => {
  // Load saved college or default
  const savedCollege = localStorage.getItem("campuspulse_selected_college");
  if (savedCollege && CAMPUS_DATA[savedCollege]) {
    STATE.currentCollegeId = savedCollege;
  }
  
  DOM.collegeSelect.value = STATE.currentCollegeId;

  // Set Theme Colors
  updateThemeColors(STATE.currentCollegeId);

  // Initial Render
  renderAllModules();
  updateToolkitBadge();

  // Attach Event Listeners
  setupEventListeners();
});

/**
 * Update CSS Custom Variables based on Selected College
 */
function updateThemeColors(collegeId) {
  const college = CAMPUS_DATA[collegeId];
  if (!college) return;

  const root = document.documentElement;
  root.style.setProperty("--accent-primary", college.accentColor);
  root.style.setProperty("--accent-glow", college.accentGlow);

  // Convert Hex to RGB for rgba variables
  const hex = college.accentColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  root.style.setProperty("--accent-rgb", `${r}, ${g}, ${b}`);

  if (DOM.glowOrb1) {
    DOM.glowOrb1.style.background = college.accentGlow;
  }
}

/**
 * Setup All Event Listeners
 */
function setupEventListeners() {
  // College Selector Change
  DOM.collegeSelect.addEventListener("change", (e) => {
    switchCollege(e.target.value);
  });

  // Cafe Filter Tabs
  if (DOM.cafeFilterTabs) {
    DOM.cafeFilterTabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab-btn");
      if (!btn) return;

      DOM.cafeFilterTabs.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.activeCafeFilter = btn.dataset.filter;
      renderCafes();
    });
  }

  // Global Search Input
  if (DOM.globalSearchInput) {
    DOM.globalSearchInput.addEventListener("input", (e) => {
      STATE.searchQuery = e.target.value.trim().toLowerCase();
      applyGlobalSearchFilter();
    });
  }

  // Saved Toolkit Modal
  if (DOM.openToolkitBtn) {
    DOM.openToolkitBtn.addEventListener("click", openToolkitModal);
  }
  if (DOM.closeToolkitBtn) {
    DOM.closeToolkitBtn.addEventListener("click", closeToolkitModal);
  }

  // Mentor Modal Close
  if (DOM.closeMentorBtn) {
    DOM.closeMentorBtn.addEventListener("click", () => {
      DOM.mentorModal.classList.remove("active");
    });
  }

  // Mentor Contact Form Submit
  if (DOM.mentorContactForm) {
    DOM.mentorContactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("menteeName").value;
      const topic = document.getElementById("menteeTopic").options[document.getElementById("menteeTopic").selectedIndex].text;
      
      showToast(`Request sent! Your query regarding "${topic}" was routed to the senior mentor.`, "success");
      DOM.mentorModal.classList.remove("active");
      DOM.mentorContactForm.reset();
    });
  }

  // Suggest Poll Modal
  if (DOM.suggestPollBtn) {
    DOM.suggestPollBtn.addEventListener("click", () => {
      DOM.suggestPollModal.classList.add("active");
    });
  }
  if (DOM.closeSuggestPollBtn) {
    DOM.closeSuggestPollBtn.addEventListener("click", () => {
      DOM.suggestPollModal.classList.remove("active");
    });
  }
  if (DOM.suggestPollForm) {
    DOM.suggestPollForm.addEventListener("submit", handleSuggestPollSubmit);
  }

  // Close modals when clicking overlay
  [DOM.toolkitModal, DOM.mentorModal, DOM.suggestPollModal].forEach(modal => {
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("active");
        }
      });
    }
  });

  // Mobile Nav Hamburger Toggle
  if (DOM.mobileNavToggle && DOM.navMenu) {
    DOM.mobileNavToggle.addEventListener("click", () => {
      DOM.navMenu.classList.toggle("show");
    });

    // Close menu when clicking nav links
    DOM.navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        DOM.navMenu.classList.remove("show");
      });
    });
  }
}

/**
 * Switch Active College
 */
function switchCollege(collegeId) {
  if (!CAMPUS_DATA[collegeId]) return;
  
  STATE.currentCollegeId = collegeId;
  localStorage.setItem("campuspulse_selected_college", collegeId);

  // Sync Select Dropdown
  DOM.collegeSelect.value = collegeId;

  // Update Theme Colors
  updateThemeColors(collegeId);

  // Re-render
  renderAllModules();

  showToast(`Switched view to ${CAMPUS_DATA[collegeId].name}`, "info");
}

// Global selector helper for footer links
window.selectCollege = function(collegeId) {
  switchCollege(collegeId);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/**
 * Master Render Function
 */
function renderAllModules() {
  const college = CAMPUS_DATA[STATE.currentCollegeId];
  if (!college) return;

  // 1. Hero Section
  DOM.heroBadge.textContent = college.badge;
  DOM.heroLocationText.textContent = college.location;
  DOM.heroEst.textContent = college.established;
  DOM.heroMetro.textContent = college.nearestMetro;
  DOM.heroTitle.textContent = college.name;
  DOM.heroTagline.textContent = college.tagline;
  DOM.heroOverview.textContent = college.overview;
  DOM.currentCollegeTag.textContent = college.name;

  // Stats Strip
  DOM.statHighestPackage.textContent = college.stats.highestPackage;
  DOM.statAvgPackage.textContent = college.stats.avgPackage;
  DOM.statPlacementRate.textContent = college.stats.placementRate;
  DOM.statAttendanceVibe.textContent = college.stats.attendanceVibe;

  // 2. Render Cafes
  renderCafes();

  // 3. Render Faculty Guide
  renderFaculty();

  // 4. Render Patent & Mentors
  renderPatentsAndMentors();

  // 5. Render Campus Life & Events
  renderCampusLife();

  // 6. Render Placements
  renderPlacements();

  // 7. Render PYQ Resources
  renderPYQs();

  // 8. Render Study Resources
  renderStudyResources();

  // 9. Render Polls
  renderPolls();
}

/**
 * Module 1: Render Cafes & Hangout Spots
 */
function renderCafes() {
  const college = CAMPUS_DATA[STATE.currentCollegeId];
  if (!college || !DOM.cafesGrid) return;

  let spots = college.cafes;

  // Filter tab logic
  if (STATE.activeCafeFilter !== "all") {
    spots = spots.filter(c => 
      c.tags.some(t => t.toLowerCase().includes(STATE.activeCafeFilter.toLowerCase())) ||
      c.vibe.toLowerCase().includes(STATE.activeCafeFilter.toLowerCase())
    );
  }

  if (spots.length === 0) {
    DOM.cafesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--border-radius-md); border: 1px dashed var(--border-glass);">
        <p>No cafes found matching "${STATE.activeCafeFilter}". Try clicking "All Spots".</p>
      </div>
    `;
    return;
  }

  DOM.cafesGrid.innerHTML = spots.map(cafe => {
    const isBookmarked = isItemBookmarked(cafe.name);
    return `
      <div class="glass-card cafe-card" data-search-text="${(cafe.name + ' ' + cafe.specialty + ' ' + cafe.vibe + ' ' + cafe.tip).toLowerCase()}">
        <div class="card-header-flex">
          <div>
            <h3 class="cafe-title">${escapeHTML(cafe.name)}</h3>
            <span class="cafe-vibe">${escapeHTML(cafe.vibe)}</span>
          </div>
          <div class="card-rating-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            ${cafe.rating}
          </div>
        </div>

        <div class="cafe-meta-row">
          <div class="meta-pill">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${escapeHTML(cafe.timing)}
          </div>
          <div class="meta-pill">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${escapeHTML(cafe.distance)}
          </div>
          <div class="meta-pill" style="color: #10b981; font-weight: 700;">
            ${escapeHTML(cafe.costForTwo)} for two
          </div>
        </div>

        <div class="specialty-box">
          <span class="specialty-label">Signature Must-Try</span>
          <span class="specialty-dish">${escapeHTML(cafe.specialty)}</span>
        </div>

        <p class="tip-quote">"${escapeHTML(cafe.tip)}"</p>

        <div class="card-tags">
          ${cafe.tags.map(t => `<span class="tag-badge">#${escapeHTML(t)}</span>`).join("")}
        </div>

        <div class="card-actions-row">
          <button class="btn-card-action" onclick="toggleBookmark('${escapeHTML(cafe.name)}', 'Cafe')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="${isBookmarked ? 'var(--accent-primary)' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
            ${isBookmarked ? 'Saved' : 'Save to Toolkit'}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Module 2: Render Faculty Guide & Academic Intel
 */
function renderFaculty() {
  const college = CAMPUS_DATA[STATE.currentCollegeId];
  if (!college) return;

  DOM.facultyAttendanceIntel.textContent = college.facultyGuide.attendancePolicy;
  DOM.facultyLabSurvival.textContent = college.facultyGuide.labSurvivalTip;

  if (!DOM.facultyGrid) return;

  DOM.facultyGrid.innerHTML = college.facultyGuide.insights.map(item => `
    <div class="glass-card faculty-card" data-search-text="${(item.department + ' ' + item.professor + ' ' + item.nature + ' ' + item.tip + (item.teachingStyle || '') + (item.bestFor || '') + (item.examPattern || '')).toLowerCase()}">
      <div>
        <span class="faculty-dept">${escapeHTML(item.department)}</span>
        <h3 class="faculty-title">${escapeHTML(item.professor)}</h3>
        <span class="faculty-vibe-pill">${escapeHTML(item.nature)}</span>
      </div>

      <div class="approachability-meter">
        <span>Approachability Score</span>
        <span class="meter-score">${escapeHTML(item.approachability)}</span>
      </div>

      ${item.rating ? `
      <div style="display: flex; align-items: center; gap: 0.6rem; margin-top: 0.25rem;">
        <span style="font-size: 0.78rem; color: var(--text-dim); font-weight: 600;">Overall Rating</span>
        <div class="faculty-rating-bar" style="flex: 1;">
          <div class="rating-bar-fill" style="width: ${(item.rating / 5) * 100}%;"></div>
        </div>
        <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-primary);">${item.rating}/5</span>
      </div>
      ` : ''}

      ${item.teachingStyle || item.bestFor || item.examPattern ? `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem;">
        ${item.teachingStyle ? `
        <div style="background: var(--bg-glass); padding: 0.5rem 0.65rem; border-radius: var(--border-radius-sm); border: 1px solid var(--border-glass);">
          <span style="font-size: 0.68rem; text-transform: uppercase; color: var(--text-dim); font-weight: 700; display: block;">Teaching Style</span>
          <span style="font-size: 0.8rem; color: var(--text-main);">${escapeHTML(item.teachingStyle)}</span>
        </div>
        ` : ''}
        ${item.bestFor ? `
        <div style="background: var(--bg-glass); padding: 0.5rem 0.65rem; border-radius: var(--border-radius-sm); border: 1px solid var(--border-glass);">
          <span style="font-size: 0.68rem; text-transform: uppercase; color: var(--text-dim); font-weight: 700; display: block;">Best For</span>
          <span style="font-size: 0.8rem; color: var(--text-main);">${escapeHTML(item.bestFor)}</span>
        </div>
        ` : ''}
      </div>
      ` : ''}

      ${item.examPattern ? `
      <div style="background: var(--bg-glass); padding: 0.5rem 0.65rem; border-radius: var(--border-radius-sm); border: 1px solid var(--border-glass); margin-top: 0.5rem;">
        <span style="font-size: 0.68rem; text-transform: uppercase; color: var(--text-dim); font-weight: 700; display: block;">Exam Pattern</span>
        <span style="font-size: 0.8rem; color: var(--text-main);">${escapeHTML(item.examPattern)}</span>
      </div>
      ` : ''}

      <div class="faculty-golden-tip">
        <strong style="color: #fff; display: block; font-size: 0.76rem; text-transform: uppercase; margin-bottom: 2px;">Senior Survival Tip:</strong>
        ${escapeHTML(item.tip)}
      </div>

      <div class="card-actions-row" style="margin-top: auto;">
        <button class="btn-card-action" onclick="toggleBookmark('${escapeHTML(item.professor + ' (' + item.department + ')')}', 'Faculty Tip')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="${isItemBookmarked(item.professor + ' (' + item.department + ')') ? 'var(--accent-primary)' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
          </svg>
          Save Advice
        </button>
      </div>
    </div>
  `).join("");
}

/**
 * Module 3: Render Patent & Mentors Guidance
 */
function renderPatentsAndMentors() {
  const college = CAMPUS_DATA[STATE.currentCollegeId];
  if (!college) return;

  // Patent Steps
  if (DOM.patentProtocolList) {
    DOM.patentProtocolList.innerHTML = college.patentAndProjects.patentProtocol.map((step, idx) => `
      <li class="protocol-step-item">
        <span class="step-num">${idx + 1}</span>
        <div>${escapeHTML(step)}</div>
      </li>
    `).join("");
  }

  // Publication Text
  if (DOM.publicationTipsText) {
    DOM.publicationTipsText.textContent = college.patentAndProjects.paperPublicationTips;
  }

  // Mentors Grid
  if (DOM.mentorsGrid) {
    DOM.mentorsGrid.innerHTML = college.patentAndProjects.mentors.map(m => `
      <div class="mentor-card" data-search-text="${(m.name + ' ' + m.specialization + ' ' + m.achievements).toLowerCase()}">
        <div class="mentor-top">
          <div class="mentor-avatar">${escapeHTML(m.name.charAt(0))}</div>
          <div class="mentor-info">
            <h4>${escapeHTML(m.name)}</h4>
            <div class="mentor-year">${escapeHTML(m.year)}</div>
          </div>
        </div>

        <div class="mentor-specialty">${escapeHTML(m.specialization)}</div>
        
        <div class="mentor-achievements">
          🏆 ${escapeHTML(m.achievements)}
        </div>

        <div class="mentor-connect-row">
          <button class="btn-mentor-contact" onclick="openMentorModal('${escapeHTML(m.name)}', '${escapeHTML(m.specialization)}')">
            Connect / Consult
          </button>
          <button class="btn-card-action" onclick="toggleBookmark('${escapeHTML(m.name)}', 'Mentor')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="${isItemBookmarked(m.name) ? 'var(--accent-primary)' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </button>
        </div>
      </div>
    `).join("");
  }
}

/**
 * Module 4: Render Campus Life & Events
 */
function renderCampusLife() {
  const college = CAMPUS_DATA[STATE.currentCollegeId];
  if (!college) return;

  // Fests
  if (DOM.festsGrid) {
    DOM.festsGrid.innerHTML = college.campusLife.fests.map(fest => `
      <div class="glass-card fest-card" data-search-text="${(fest.name + ' ' + fest.category + ' ' + fest.highlights).toLowerCase()}">
        <div class="card-header-flex">
          <h3 style="font-size: 1.25rem; font-weight: 700; color: #fff;">${escapeHTML(fest.name)}</h3>
          <span class="fest-badge">${escapeHTML(fest.category)}</span>
        </div>
        <div class="fest-duration">📅 Duration: ${escapeHTML(fest.duration)}</div>
        <p class="fest-highlights">${escapeHTML(fest.highlights)}</p>
        <p class="tip-quote">
          <strong style="color: var(--accent-primary);">Insider Tip:</strong> ${escapeHTML(fest.insiderTip)}
        </p>
      </div>
    `).join("");
  }

  // Hostel Hacks
  if (DOM.hostelHacksList) {
    DOM.hostelHacksList.innerHTML = college.campusLife.hostelHacks.map(hack => `
      <li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${escapeHTML(hack)}</span>
      </li>
    `).join("");
  }

  // Weekend Spots
  if (DOM.weekendSpotsList) {
    DOM.weekendSpotsList.innerHTML = college.campusLife.hangoutsAndTrips.map(spot => `
      <div class="weekend-spot-item">
        <div class="weekend-spot-title">
          <span>${escapeHTML(spot.spot)}</span>
          <span class="weekend-spot-dist">${escapeHTML(spot.distance)}</span>
        </div>
        <div class="weekend-spot-desc">${escapeHTML(spot.desc)}</div>
      </div>
    `).join("");
  }

  // Commute Tips
  if (DOM.campusCommuteTip) {
    DOM.campusCommuteTip.textContent = college.campusLife.commuteTips;
  }

  // Metro Guide
  if (DOM.metroLinesGrid) {
    DOM.metroLinesGrid.innerHTML = NAGPUR_TRANSIT_GUIDE.map(line => `
      <div class="metro-line-card">
        <span class="line-tag">${escapeHTML(line.line)}</span>
        <div class="route-text">${escapeHTML(line.route)}</div>
        <div style="font-size: 0.8rem; color: var(--text-dim); margin-bottom: 0.5rem;">⏱ ${escapeHTML(line.frequency)} | 🎫 ${escapeHTML(line.fares)}</div>
        <div class="stop-pills">
          ${line.keyStops.map(s => `<span class="stop-pill">${escapeHTML(s)}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }
}

/**
 * Module 5: Render Placements & Career Prep (Enhanced)
 */
function renderPlacements() {
  const college = CAMPUS_DATA[STATE.currentCollegeId];
  if (!college) return;

  if (DOM.placementHighest) DOM.placementHighest.textContent = college.placements.stats.highest;
  if (DOM.placementMedian) DOM.placementMedian.textContent = college.placements.stats.median;

  // Year-wise Placement Table
  if (DOM.yearWisePlacementBody && college.detailedPlacements && college.detailedPlacements.yearWise) {
    DOM.yearWisePlacementBody.innerHTML = college.detailedPlacements.yearWise.map(row => `
      <tr>
        <td><strong>${escapeHTML(row.year)}</strong></td>
        <td>${row.offers}</td>
        <td class="highlight-cell">${escapeHTML(row.highestCTC)}</td>
        <td>${escapeHTML(row.avgCTC)}</td>
        <td>${escapeHTML(row.medianCTC)}</td>
        <td>${row.companiesVisited}</td>
      </tr>
    `).join("");
  }

  // Company Breakdown Table
  if (DOM.companyBreakdownBody && college.detailedPlacements && college.detailedPlacements.companyBreakdown) {
    DOM.companyBreakdownBody.innerHTML = college.detailedPlacements.companyBreakdown.map(row => `
      <tr data-search-text="${(row.company + ' ' + row.role).toLowerCase()}">
        <td><strong>${escapeHTML(row.company)}</strong></td>
        <td>${escapeHTML(row.role)}</td>
        <td class="highlight-cell">${escapeHTML(row.ctc)}</td>
        <td>${row.studentsPlaced}</td>
        <td>${escapeHTML(row.year)}</td>
      </tr>
    `).join("");
  }

  // Branch-wise Stats
  if (DOM.branchStatsGrid && college.detailedPlacements && college.detailedPlacements.branchWise) {
    DOM.branchStatsGrid.innerHTML = college.detailedPlacements.branchWise.map(b => `
      <div class="branch-stat-card">
        <div class="branch-name">${escapeHTML(b.branch)}</div>
        <div class="branch-metrics">
          <div class="branch-metric">
            <span class="branch-metric-val">${escapeHTML(b.avgCTC)}</span>
            <span class="branch-metric-lbl">Avg CTC</span>
          </div>
          <div class="branch-metric">
            <span class="branch-metric-val">${escapeHTML(b.placed)}</span>
            <span class="branch-metric-lbl">Placed</span>
          </div>
        </div>
        <div class="faculty-rating-bar">
          <div class="rating-bar-fill" style="width: ${escapeHTML(b.placed)};"></div>
        </div>
      </div>
    `).join("");
  }

  // Recruiters
  if (DOM.recruiterPillsContainer) {
    DOM.recruiterPillsContainer.innerHTML = college.placements.stats.topRecruiters.map(r => `
      <span class="recruiter-pill">${escapeHTML(r)}</span>
    `).join("");
  }

  // Placement Roadmap Timeline
  if (DOM.placementRoadmapTimeline) {
    DOM.placementRoadmapTimeline.innerHTML = PLACEMENT_ROADMAP.map((item, idx) => `
      <div class="timeline-node">
        <div class="timeline-circle">0${idx + 1}</div>
        <div class="timeline-content">
          <span class="timeline-phase">${escapeHTML(item.phase)}</span>
          <h4 class="timeline-title">${escapeHTML(item.title)}</h4>
          <p class="timeline-desc">${escapeHTML(item.desc)}</p>
        </div>
      </div>
    `).join("");
  }
}

/**
 * Module 7: Render PYQ Resources
 */
function renderPYQs() {
  const college = CAMPUS_DATA[STATE.currentCollegeId];
  if (!college || !college.pyqResources || !DOM.pyqGrid) return;

  DOM.pyqGrid.innerHTML = college.pyqResources.map(pyq => `
    <div class="glass-card pyq-resource-card" data-search-text="${(pyq.subject + ' ' + pyq.department + ' ' + pyq.topics.join(' ')).toLowerCase()}">
      <div class="pyq-header">
        <div>
          <span class="faculty-dept">${escapeHTML(pyq.department)}</span>
          <h3 class="cafe-title" style="font-size: 1.02rem;">${escapeHTML(pyq.subject)}</h3>
        </div>
        <span class="tag-badge" style="background: rgba(var(--accent-rgb), 0.1); color: var(--accent-primary); border-color: rgba(var(--accent-rgb), 0.3);">
          ${escapeHTML(pyq.semester)}
        </span>
      </div>

      <div class="cafe-meta-row" style="margin-top: 0.75rem;">
        <div class="meta-pill">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          ${escapeHTML(pyq.examType)}
        </div>
        <div class="meta-pill">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          ${escapeHTML(pyq.difficulty)}
        </div>
      </div>

      <div class="specialty-box" style="margin-top: 0.75rem;">
        <span class="specialty-label">Key Topics Covered</span>
        <div class="card-tags" style="margin-top: 0.4rem;">
          ${pyq.topics.map(t => `<span class="tag-badge">${escapeHTML(t)}</span>`).join("")}
        </div>
      </div>

      <div class="specialty-box" style="margin-top: 0.5rem;">
        <span class="specialty-label">Source</span>
        <span class="specialty-dish" style="font-size: 0.82rem;">${escapeHTML(pyq.sourceHint)}</span>
      </div>

      <p class="tip-quote" style="margin-top: 0.75rem;">${escapeHTML(pyq.tip)}</p>
    </div>
  `).join("");
}

/**
 * Module 8: Render Study Resources
 */
function renderStudyResources() {
  const college = CAMPUS_DATA[STATE.currentCollegeId];
  if (!college || !college.studyResources || !DOM.studyResourcesGrid) return;

  DOM.studyResourcesGrid.innerHTML = college.studyResources.map(category => `
    <div class="glass-card resource-category-card">
      <h4 class="resource-category-title">${escapeHTML(category.category)}</h4>
      <div class="resource-links-list">
        ${category.resources.map(r => `
          <a href="${escapeHTML(r.url)}" target="_blank" rel="noopener noreferrer" class="resource-link-item" data-search-text="${(r.name + ' ' + r.desc).toLowerCase()}">
            <div class="resource-link-info">
              <span class="resource-link-name">${escapeHTML(r.name)}</span>
              <span class="resource-link-desc">${escapeHTML(r.desc)}</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/**
 * Module 6: Render Interactive Polls & Selections
 */
function renderPolls() {
  if (!DOM.pollsGrid) return;

  DOM.pollsGrid.innerHTML = STATE.polls.map(poll => {
    const userVotedOptionId = STATE.userVotes[poll.id];

    return `
      <div class="poll-card">
        <div class="poll-status-row">
          <div class="poll-live-indicator">
            <span class="poll-live-pulse"></span>
            Live Poll
          </div>
          <div class="poll-votes-count">${poll.totalVotes} student votes</div>
        </div>

        <h3 class="poll-question">${escapeHTML(poll.question)}</h3>

        <div class="poll-options-list">
          ${poll.options.map(opt => {
            const percentage = poll.totalVotes > 0 ? Math.round((opt.votes / poll.totalVotes) * 100) : 0;
            const isVoted = userVotedOptionId === opt.id;

            return `
              <button class="poll-option-btn ${isVoted ? 'voted' : ''}" onclick="castVote('${poll.id}', '${opt.id}')">
                <div class="poll-progress-bg" style="width: ${percentage}%"></div>
                <div class="poll-opt-content">
                  <span>${escapeHTML(opt.text)} ${isVoted ? '✓' : ''}</span>
                  <span class="poll-percentage">${percentage}%</span>
                </div>
              </button>
            `;
          }).join("")}
        </div>

        <div class="poll-footer-hint">
          ${userVotedOptionId ? '✓ Your vote is recorded in browser storage' : 'Click any option to cast your vote'}
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Handle Voting Interaction
 */
window.castVote = function(pollId, optionId) {
  const poll = STATE.polls.find(p => p.id === pollId);
  if (!poll) return;

  const previousVotedOptionId = STATE.userVotes[pollId];

  // If clicking same option, do nothing
  if (previousVotedOptionId === optionId) {
    showToast("You've already cast your vote for this option!", "info");
    return;
  }

  // If changing vote from a previous option
  if (previousVotedOptionId) {
    const prevOption = poll.options.find(o => o.id === previousVotedOptionId);
    if (prevOption && prevOption.votes > 0) prevOption.votes--;
    poll.totalVotes--;
  }

  // Add vote to newly selected option
  const selectedOption = poll.options.find(o => o.id === optionId);
  if (selectedOption) {
    selectedOption.votes++;
    poll.totalVotes++;
  }

  STATE.userVotes[pollId] = optionId;

  // Persist to localStorage
  localStorage.setItem("campuspulse_polls", JSON.stringify(STATE.polls));
  localStorage.setItem("campuspulse_user_votes", JSON.stringify(STATE.userVotes));

  renderPolls();
  showToast("Vote recorded! Live percentages updated.", "success");
};

/**
 * Suggest a New Poll Form Handler
 */
function handleSuggestPollSubmit(e) {
  e.preventDefault();

  const question = document.getElementById("pollQuestionInput").value.trim();
  const opt1 = document.getElementById("pollOpt1Input").value.trim();
  const opt2 = document.getElementById("pollOpt2Input").value.trim();

  if (!question || !opt1 || !opt2) return;

  const newPoll = {
    id: "poll_" + Date.now(),
    question: question,
    collegeId: STATE.currentCollegeId,
    totalVotes: 1,
    options: [
      { id: "opt_1_" + Date.now(), text: opt1, votes: 1 },
      { id: "opt_2_" + Date.now(), text: opt2, votes: 0 }
    ]
  };

  // Add to polls array
  STATE.polls.unshift(newPoll);
  STATE.userVotes[newPoll.id] = newPoll.options[0].id; // default vote for creator

  // Persist
  localStorage.setItem("campuspulse_polls", JSON.stringify(STATE.polls));
  localStorage.setItem("campuspulse_user_votes", JSON.stringify(STATE.userVotes));

  renderPolls();
  DOM.suggestPollModal.classList.remove("active");
  DOM.suggestPollForm.reset();

  showToast("Your community poll has been published successfully!", "success");
}

/**
 * Universal Search Filter Logic
 */
function applyGlobalSearchFilter() {
  const query = STATE.searchQuery;
  const searchableCards = document.querySelectorAll("[data-search-text]");

  if (!query) {
    searchableCards.forEach(c => {
      c.style.display = "";
      c.style.opacity = "";
    });
    return;
  }

  searchableCards.forEach(card => {
    const text = card.dataset.searchText || "";
    if (text.includes(query)) {
      card.style.display = "";
      card.style.opacity = "1";
    } else {
      card.style.display = "none";
    }
  });
}

/**
 * Bookmark & Saved Toolkit Logic
 */
function isItemBookmarked(name) {
  return STATE.savedToolkit.some(item => item.name === name);
}

window.toggleBookmark = function(name, type) {
  const existingIdx = STATE.savedToolkit.findIndex(item => item.name === name);

  if (existingIdx > -1) {
    STATE.savedToolkit.splice(existingIdx, 1);
    showToast(`Removed "${name}" from your Survival Toolkit`, "info");
  } else {
    STATE.savedToolkit.push({
      id: "bm_" + Date.now(),
      name: name,
      type: type,
      collegeId: STATE.currentCollegeId,
      date: new Date().toLocaleDateString()
    });
    showToast(`Saved "${name}" to your Survival Toolkit!`, "success");
  }

  localStorage.setItem("campuspulse_toolkit", JSON.stringify(STATE.savedToolkit));
  updateToolkitBadge();
  renderCafes();
  renderFaculty();
  renderPatentsAndMentors();
  renderSavedItemsList();
};

function updateToolkitBadge() {
  const count = STATE.savedToolkit.length;
  if (DOM.savedCountBadge) {
    if (count > 0) {
      DOM.savedCountBadge.style.display = "flex";
      DOM.savedCountBadge.textContent = count;
    } else {
      DOM.savedCountBadge.style.display = "none";
    }
  }
}

function openToolkitModal() {
  renderSavedItemsList();
  DOM.toolkitModal.classList.add("active");
}

function closeToolkitModal() {
  DOM.toolkitModal.classList.remove("active");
}

function renderSavedItemsList() {
  if (!DOM.savedItemsContainer) return;

  if (STATE.savedToolkit.length === 0) {
    DOM.savedItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-dim);">
        <p>Your Survival Toolkit is empty.</p>
        <p style="font-size: 0.8rem; margin-top: 0.4rem;">Click "Save to Toolkit" on any cafe, faculty tip, or mentor to pin it here.</p>
      </div>
    `;
    return;
  }

  DOM.savedItemsContainer.innerHTML = STATE.savedToolkit.map(item => `
    <div class="saved-item-row">
      <div>
        <div class="saved-item-name">${escapeHTML(item.name)}</div>
        <div class="saved-item-type">${escapeHTML(item.type)} • ${escapeHTML(CAMPUS_DATA[item.collegeId]?.name || 'Nagpur')}</div>
      </div>
      <button class="btn-remove-saved" onclick="toggleBookmark('${escapeHTML(item.name)}', '${escapeHTML(item.type)}')" title="Remove">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    </div>
  `).join("");
}

/**
 * Mentor Connect Modal Opener
 */
window.openMentorModal = function(name, specialty) {
  if (DOM.mentorModalName) DOM.mentorModalName.textContent = `Connect with ${name}`;
  if (DOM.mentorModalSub) DOM.mentorModalSub.textContent = `Specialization: ${specialty}`;
  DOM.mentorModal.classList.add("active");
};

/**
 * Toast Notification System
 */
function showToast(message, type = "info") {
  if (!DOM.toastContainer) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let iconSvg = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  `;

  if (type === "success") {
    iconSvg = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;
  }

  toast.innerHTML = `${iconSvg}<span>${escapeHTML(message)}</span>`;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/**
 * Simple XSS escape helper
 */
function escapeHTML(str) {
  if (typeof str !== "string") return str;
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
