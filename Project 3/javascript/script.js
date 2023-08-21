function header() {
    let headerItem = {
        generalHeader: document.querySelector('.general-header'),
        navBar: document.querySelector('.nav-bar'),
        barIcon: document.querySelector('.bars-icon'),

        navbarLists: document.querySelectorAll('.nav-bar .nav-menu .nav-list'),
    }


    headerItem.barIcon.addEventListener('click', (e) => {
        headerItem.navBar.classList.toggle('show');
        e.currentTarget.classList.toggle('cross')
    })

    headerItem.navbarLists.forEach((list) => {
        list.addEventListener('click', () => {
            if (list.querySelector('.mega-menu')) {
                list.querySelector('.mega-menu').classList.toggle('active');

            }
        })
    })

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1) {
            headerItem.generalHeader.classList.add('fill')
        }
        if (document.documentElement.scrollTop < 1) {
            headerItem.generalHeader.classList.remove('fill')
        }
    })

}
header()