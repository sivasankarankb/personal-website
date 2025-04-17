(function setupMainNavMenu(){
    const menuOpenButton = document.getElementById('main-nav-menu-open')
    const menuContainer = document.getElementById('main-nav-menu')
    const menuItem0 = document.getElementById('main-nav-menu-item-0')
    const menuCloseButton = document.getElementById('main-nav-menu-close')

    function showMainMenu(){
        menuContainer.classList.remove('hidden')
        menuItem0.focus()
    }

    function hideMainMenu(){
        menuContainer.classList.add('hidden')
    }

    menuOpenButton.addEventListener('click', showMainMenu)
    menuCloseButton.addEventListener('click', hideMainMenu)
})();