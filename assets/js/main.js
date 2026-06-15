const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const toggleBtn = document.getElementById('toggleSidebar');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('open');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
}

if (toggleBtn) toggleBtn.addEventListener('click', openSidebar);
if (overlay)   overlay.addEventListener('click', closeSidebar);
