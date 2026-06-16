// Marca o link ativo na sidebar conforme a página atual
(function () {
  const pagina = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === pagina) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();

// Fecha o offcanvas ao clicar em um link (mobile)
document.querySelectorAll('#sidebarOffcanvas .sidebar-link').forEach(link => {
  link.addEventListener('click', () => {
    const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('sidebarOffcanvas'));
    if (offcanvas) offcanvas.hide();
  });
});

// Formata valor monetário ao sair do campo
document.querySelectorAll('input[type="number"]').forEach(input => {
  if (input.id === 'diaria') {
    input.addEventListener('blur', function () {
      if (this.value) this.value = parseFloat(this.value).toFixed(2);
    });
  }
});
