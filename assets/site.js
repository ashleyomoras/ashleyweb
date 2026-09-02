// Ashley Moras site — shared behaviour. No build step, no dependencies.
// Phase 3 will likely replace the hard-coded cards these scripts filter
// with CMS-driven entries, but the filtering logic itself stays the same.

document.addEventListener('DOMContentLoaded', function () {
  /* ---------------- Mobile nav toggle ---------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* ---------------- Achievements filter (year + discipline) ---------------- */
  var resultsTable = document.querySelector('[data-results-table]');
  if (resultsTable) {
    var yearSelect = document.querySelector('[data-filter="year"]');
    var discSelect = document.querySelector('[data-filter="discipline"]');
    var rows = resultsTable.querySelectorAll('tbody tr:not(.photo-row)');

    function applyResultFilters() {
      var year = yearSelect ? yearSelect.value : 'all';
      var disc = discSelect ? discSelect.value : 'all';
      rows.forEach(function (row) {
        var matchesYear = year === 'all' || row.dataset.year === year;
        var matchesDisc = disc === 'all' || row.dataset.discipline === disc;
        var show = matchesYear && matchesDisc;
        row.style.display = show ? '' : 'none';

        var photoRow = row.nextElementSibling;
        if (photoRow && photoRow.classList.contains('photo-row')) {
          if (!show) {
            photoRow.style.display = 'none';
            photoRow.classList.remove('is-open');
            var btn = row.querySelector('[data-photo-toggle]');
            if (btn) { btn.textContent = '+ Photos'; btn.setAttribute('aria-expanded', 'false'); }
          } else {
            photoRow.style.display = '';
          }
        }
      });
    }

    if (yearSelect) yearSelect.addEventListener('change', applyResultFilters);
    if (discSelect) discSelect.addEventListener('change', applyResultFilters);
  }

  /* ---------------- Achievements per-row photo toggle ---------------- */
  document.querySelectorAll('[data-photo-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var row = btn.closest('tr').nextElementSibling;
      if (row && row.classList.contains('photo-row')) {
        var open = row.classList.toggle('is-open');
        btn.textContent = open ? '– Photos' : '+ Photos';
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
    });
  });

  /* ---------------- Podcast click-to-play ---------------- */
  document.querySelectorAll('[data-video-id]').forEach(function (thumb) {
    function play() {
      var videoId = thumb.getAttribute('data-video-id');
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1';
      iframe.title = 'YouTube video player';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      thumb.innerHTML = '';
      thumb.removeAttribute('role');
      thumb.removeAttribute('tabindex');
      thumb.style.cursor = 'default';
      thumb.appendChild(iframe);
    }
    thumb.addEventListener('click', play);
    thumb.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); }
    });
  });

  /* ---------------- Journal sub-tabs ---------------- */
  var journalButtons = document.querySelectorAll('[data-journal-tab]');
  var journalPanels = document.querySelectorAll('[data-journal-panel]');
  if (journalButtons.length && journalPanels.length) {
    journalButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-journal-tab');

        journalButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        journalPanels.forEach(function (panel) {
          panel.classList.toggle('is-active', panel.getAttribute('data-journal-panel') === target);
        });
      });
    });
  }
});
