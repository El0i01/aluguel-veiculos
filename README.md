# UniCar — Sistema de Aluguel de Veículos

Projeto desenvolvido como **Avaliação Prática N2** da disciplina **Programação para Web** do curso de SI de Software — UNISAPIENS.

---

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 com variáveis customizadas
- JavaScript (ES6+)
- Bootstrap 5.3 (via CDN)
- Bootstrap Icons (via CDN)
- Google Fonts — Inter + Barlow Condensed

---

## Estrutura de pastas

```
aluguel-veiculos/
│
├── index.html                   # Página Inicial — Dashboard com cards e atividade recente
├── cadastro-clientes.html       # Formulário de cadastro de clientes
├── listagem-clientes.html       # Tabela com 3 clientes mockados
├── cadastro-veiculos.html       # Formulário de cadastro de veículos
├── listagem-veiculos.html       # Tabela com 3 veículos mockados
│
├── assets/
│   ├── css/
│   │   └── style.css            # Customização visual — paleta, tipografia, componentes
│   ├── js/
│   │   ├── main.js              # Comportamentos globais (sidebar mobile, active nav)
│   │   ├── clientes.js          # Dados mockados e lógica da tela de clientes
│   │   └── veiculos.js          # Dados mockados e lógica da tela de veículos
│   └── img/                     # Ícones e imagens (reservado para expansão)
│
└── README.md
```

---

## Páginas entregues

| # | Página | Arquivo | Requisito atendido |
|---|--------|---------|-------------------|
| 1 | Dashboard / Home | `index.html` | Cards informativos, banner hero, navegação |
| 2 | Cadastro de Clientes | `cadastro-clientes.html` | Nome, CPF, e-mail, telefone, endereço + campos extras |
| 3 | Listagem de Clientes | `listagem-clientes.html` | Tabela organizada, 3 clientes mockados |
| 4 | Cadastro de Veículos | `cadastro-veiculos.html` | Modelo, marca, ano, placa, valor da diária + campos extras |
| 5 | Listagem de Veículos | `listagem-veiculos.html` | Tabela organizada, 3 veículos mockados |

---

## Requisitos técnicos atendidos

- [x] HTML5 semântico em todas as páginas
- [x] CSS3 com variáveis, responsividade e transições
- [x] Bootstrap 5 aplicado (grid, utilitários, responsividade)
- [x] Organização de pastas (assets/css, assets/js, assets/img)
- [x] Navegação funcional entre todas as páginas via sidebar
- [x] Layout responsivo — funciona em mobile, tablet e desktop
- [x] Arquivos separados: HTML, CSS e JS independentes
- [x] Boas práticas de indentação e nomenclatura

---

## Personalização do template

O projeto **não utiliza um template Bootstrap pronto copiado integralmente**. A base foi o sistema de grid e utilitários do Bootstrap 5, sobre o qual foi construída uma identidade visual própria:

- **Paleta primária:** Vermelho `#D32F2F` · Vermelho escuro `#9A0007` · Vermelho claro `#FF6659`
- **Status:** Sucesso `#2E7D32` · Aviso `#F57C00` · Erro `#C62828`
- **Neutras:** Fundo `#F8F9FA` · Cards `#FFFFFF` · Texto `#212121` · Labels `#666666` · Bordas `#E0E0E0`
- **Tipografia:** Barlow Condensed (display/títulos) + Inter (corpo de texto)
- **Sidebar fixa** com navegação por seções e indicador de página ativa
- **Cards de estatística** com ícones coloridos por categoria
- **Badges de status** para disponibilidade de veículos e situação de clientes
- **Formulários** com seções agrupadas, labels semânticos e hints de validação

---

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/El0i01/aluguel-veiculos.git
   ```
2. Abra qualquer arquivo `.html` diretamente no navegador — não requer servidor.
3. Navegue pelas páginas usando o menu lateral.

---

## Histórico de commits (resumo)

| Commit | Descrição |
|--------|-----------|
| `feat: sidebar e layout principal` | Componente de navegação lateral responsivo |
| `feat: página index com hero e cards` | Dashboard com estatísticas e atividade recente |
| `feat: cadastro de clientes` | Formulário com validação e campos agrupados |
| `feat: listagem de clientes mockados` | Tabela com 3 registros e ações de editar/excluir |
| `feat: cadastro de veículos` | Formulário com campos específicos de frota |
| `feat: listagem de veículos mockados` | Tabela com 3 veículos e badges de status |
| `style: ajustes de responsividade mobile` | Sidebar mobile com overlay e toggle |
| `docs: README e documentação final` | Este arquivo |

---

## Critérios de avaliação — autoavaliação

| Critério | Pts | Status |
|----------|-----|--------|
| Estrutura e organização do projeto | 10 | ✅ |
| Aplicação correta do Bootstrap | 10 | ✅ |
| Responsividade das páginas | 10 | ✅ |
| Qualidade visual e UX | 7 | ✅ |
| Funcionamento da navegação | 7 | ✅ |
| Formulários e tabelas corretos | 10 | ✅ |
| Organização do código | 3 | ✅ |
| Versionamento e GitHub | 3 | ✅ |
| Apresentação e explicação | 3 | ✅ |
| Criatividade e personalização | 3 | ✅ |
| **TOTAL** | **70** | |

---

*Disciplina: Programação para Web — Prof. Anderson de Oliveira Seixas — UNISAPIENS 2026*
