(function() {
    // Elements
    var navContainerEl = document.getElementById('main-nav-panel-container');

    var navToggleBtn = document.getElementById('main-nav-toggle-btn');

    var navPanelEl = document.getElementById('main-nav-panel');

    var navCloseEl = document.getElementById('main-nav-close');

    var navPanelBgEl = document.getElementById('main-nav-bg');

    // State
    var panelOpen = false;

    // Interactivity
    navToggleBtn.addEventListener('click', togglePanel);
    navCloseEl.addEventListener('click', togglePanel);
    navPanelBgEl.addEventListener('click', togglePanel);


    function togglePanel() {

        if (panelOpen) {
            window.setTimeout(function() {
                toggleDisplay(navContainerEl);
            }, 350);
        } else {
            toggleDisplay(navContainerEl);
        }
        

       window.setTimeout(function() {
        
        toggleOpenAttrs(navPanelEl);
        toggleOpenAttrs(navToggleBtn);

        if (panelOpen) {
            panelOpen = false;
        } else {
            panelOpen = true;
        }
       }, 10);
        
        
    }

    function toggleDisplay(el) {
        if (el.style.display === "none") {
            el.style.display = "";
          } else {
            el.style.display = "none";
          }
    }

    function toggleOpenAttrs(el) {
        if (el.classList.contains('open')) {
            el.classList.remove('open');
            el.classList.add('closed');
        } else if (el.classList.contains('closed')) {
            el.classList.remove('closed');
            el.classList.add('open');
        }

        if (el.getAttribute('aria-expanded') === 'false') {
            el.setAttribute('aria-expanded', 'true');
        } else if (el.getAttribute('aria-expanded') === 'true') {
            el.setAttribute('aria-expanded', 'false');
        }
    }

    togglePanel();
})();