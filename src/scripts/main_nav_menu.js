(function setupMainNavMenu(){
    const menuOpenButton = document.getElementById('main-nav-menu-open')
    const menuContainer = document.getElementById('main-nav-menu')
    const menuCloseButton = document.getElementById('main-nav-menu-close')

    function showMainMenu(){
        menuContainer.classList.remove('hidden')
    }

    function hideMainMenu(){
        menuContainer.classList.add('hidden')
    }

    menuOpenButton.addEventListener('click', showMainMenu)
    menuCloseButton.addEventListener('click', hideMainMenu)
})();