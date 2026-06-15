const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const toggleBtn = document.getElementById('toggleSidebar');
const collapseBtn = document.getElementById('collapseBtn');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('open');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
}

function toggleCollapse() {
  sidebar.classList.toggle('collapsed');
  const isCollapsed = sidebar.classList.contains('collapsed');
  localStorage.setItem('sidebarCollapsed', isCollapsed);
}

if (localStorage.getItem('sidebarCollapsed') === 'true') {
  sidebar.classList.add('collapsed');
}

if (toggleBtn)   toggleBtn.addEventListener('click', openSidebar);
if (overlay)     overlay.addEventListener('click', closeSidebar);
if (collapseBtn) collapseBtn.addEventListener('click', toggleCollapse);
