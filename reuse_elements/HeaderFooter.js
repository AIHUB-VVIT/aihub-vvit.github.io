class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Navigation bar -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <div style="display: flex; align-items: center">
                    <img src="./images/AI-HUB.jpg" alt="AI-HUB@VVIT" width="35px" style="border-radius: 60%;">
                    <a class="navbar-brand" href="#">AI-HUB@VVIT</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Projects.html">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="blog.html">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Events.html">Events</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Apps.html">Apps</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Career.html">Career Catalysts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="News.html">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="About.html">People</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Side Navigation -->
        <div class="side-nav">
            <div class="side-nav-content">
                <div class="menu-item">
                    <a href="Projects.html" class="menu-title">Ongoing Projects</a>
                </div>
                <div class="menu-item">
                    <div class="menu-title">Completed Projects</div>
                    <div class="sub-menu">
                        <a href="Game.html">Games</a>
                        <a href="Projects.html#ml">Machine Learning</a>
                        <a href="Projects.html#dl">Deep Learning</a>
                    </div>
                </div>
            </div>
        </div>

        <style>
            /* Dropdown Styling */
            @media (min-width: 992px) {
                .navbar .dropdown:hover .dropdown-menu {
                    display: block;
                }
            }

            @media (max-width: 991px) {
                .navbar .dropdown-menu {
                    position: static;
                    display: none;
                }

                .navbar .dropdown-menu.show {
                    display: block;
                }
            }

            .dropdown-submenu {
                position: relative;
            }
            
            .dropdown-submenu .submenu {
                top: 0;
                left: 100%;
                margin-top: -1px;
                display: none;
                position: absolute;
            }
            
            .submenu-arrow {
                float: right;
                margin-top: 4px;
            }
            
            @media (min-width: 992px) {
                .dropdown-submenu:hover .submenu {
                    display: block;
                }
            }
            
            @media (max-width: 991px) {
                .dropdown-submenu .submenu {
                    position: static;
                    margin-left: 15px;
                    margin-right: 15px;
                    margin-top: 0;
                    left: 0;
                    display: none;
                }
                
                .dropdown-submenu .dropdown-item {
                    padding-left: 20px;
                }
            }

            .side-nav {
                height: 100%;
                width: 250px;
                position: fixed;
                top: 56px;
                left: 0;
                background: #f8f9fa;
                padding: 20px 0;
                box-shadow: 2px 0 5px rgba(0,0,0,0.1);
                display: none;
            }

            .side-nav-content {
                padding: 0 15px;
            }

            .menu-item {
                margin: 10px 0;
            }

            .menu-title {
                color: #333;
                font-weight: 500;
                display: block;
                padding: 8px 15px;
                text-decoration: none;
                transition: 0.3s;
            }

            .menu-title:hover {
                background: #e9ecef;
                color: #007bff;
            }

            .sub-menu {
                padding-left: 15px;
            }

            .sub-menu a {
                display: block;
                padding: 8px 15px;
                color: #666;
                text-decoration: none;
                transition: 0.3s;
            }

            .sub-menu a:hover {
                background: #e9ecef;
                color: #007bff;
            }

            .menu-title i {
                margin-right: 10px;
                width: 20px;
                text-align: center;
            }

            .menu-item {
                margin-bottom: 15px;
            }

            .menu-item .sub-menu {
                display: none;
                margin-left: 20px;
            }

            .menu-item .menu-title:hover + .sub-menu,
            .menu-item .sub-menu:hover {
                display: block;
            }

            /* Show side nav only on Projects page */
            body.projects-page .side-nav {
                display: block;
            }

            @media (max-width: 768px) {
                .side-nav {
                    width: 100%;
                    height: auto;
                    position: relative;
                    top: 56px;
                    box-shadow: none;
                    border-bottom: 1px solid #dee2e6;
                }
            }
        </style>

        <script>
            // Add class to body if on Projects page
            if (window.location.pathname.includes('Projects.html')) {
                document.body.classList.add('projects-page');
            }

            // Add submenu toggle functionality
            document.addEventListener('DOMContentLoaded', function() {
                const menuTitles = document.querySelectorAll('.menu-title');
                menuTitles.forEach(title => {
                    title.addEventListener('click', function(e) {
                        const subMenu = this.nextElementSibling;
                        if (subMenu && subMenu.classList.contains('sub-menu')) {
                            subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
                        }
                    });
                });
            });
        </script>
        `;
    }
}

class Links extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=domain">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./reuse_elements/common.css">
        <link rel="stylesheet" href="./reuse_elements/hover.css">
        `
    }
}
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="bg-circle-container">
            <div class="wheel-container">
                <img src="./images/vvit1.png" alt="Outer Wheel" class="outer">
                <img src="./images/circular_cen.png" alt="Center" class="center">
            </div>
        </div>
        <nav class="navbar navbar-expand-lg fixed-bottom bg-body-tertiary">
            <div class="container-fluid" id="footer">
                <ul style="list-style: none; display: flex; justify-content: center;">
                    <div><li class="desc_item"><i class="fa-solid fa-building-columns"></i><a href="https://www.vvitguntur.com/">VVIT</a></li></div>
                    <div><li class="desc_item"><i class="fa-solid fa-location-dot"></i><a href="https://www.google.com/maps/place/Vasireddy+Venkatadri+Institute+of+Technology/data=!4m2!3m1!1s0x0:0x8c86e4f36490336b?sa=X&ved=1t:2428&ictx=111">Guntur</a></li></div>
                    <div><li class="desc_item"><i class="fas fa-envelope"></i><a href="mailto:">Mail</a></li></div>
                    <div><li class="desc_item"><i class="fa-brands fa-github"></i><a href="https://github.com/AIHUB-VVIT">Github</a></li></div>
                </ul>
            </div>
        </nav>
        <style>
            .desc_item {
                margin: 0 15px;
                display: flex;
                align-items: center;
                position: relative;
                z-index: 10;
            }
            
            .desc_item i {
                margin-right: 8px;
            }
            
            .desc_item a {
                text-decoration: none;
                color: inherit;
                transition: color 0.3s ease;
            }
            
            .desc_item a:hover {
                color: rgb(214, 219, 228);
            }
            
            #footer {
                justify-content: center;
                padding-top: 12.5px;
                position: relative;
                z-index: 10;
                background-color: rgba(248, 249, 250, 0.85);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
            }
            
            .bg-circle-container {
                position: fixed;
                bottom: 0;
                right: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
                background: transparent;
                overflow: hidden;
            }
            
            .wheel-container {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 70vh;
                height: 70vh;
                background: transparent;
                overflow: visible;
                transform: translate(20%, 18.95%);
            }
            
            .wheel-container img {
                position: absolute;
                background: transparent;
            }
            
            .outer {
                width: 100%;
                height: 100%;
                animation:rotate 60s linear infinite;
                opacity: 0.2;
            }
            
            .center {
                width: 34.21%; /* Adjusted size to fit better within the outer wheel */
                height: auto; /* Maintain aspect ratio */
                top: 50%; /* Center vertically */
                left: 50%; /* Center horizontally */
                transform: translate(-50%, -50%); /* Offset to truly center */
                z-index: 1;
                opacity: 0.2;
                object-fit: contain; /* Ensure the image scales proportionally */
            }
            
            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
            
            .navbar.fixed-bottom:hover ~ .bg-circle-container .wheel-container {
                opacity: 0.5;
            }
            
            .card, .container, .project-card, .app-card, .blog-card, section, article, main {
                position: relative !important;
                z-index: 5 !important;
            }
            
            @media (max-width: 768px) {
    .desc_item {
        margin: 0 8px;
        font-size: 0.9em;
    }
    
    .wheel-container {
        width: 48vh; /* Keep the same size as desktop */
        height: 48vh; /* Keep the same size as desktop */
        bottom: 0;
        right: 0;
        transform: translate(20%, 15.5%); /* Keep the same transform as desktop */
        position: fixed; /* Add fixed positioning to ensure consistent placement */
    }
    
    #footer {
        padding: 8px 0;
    }
    
    @supports not (backdrop-filter: blur(5px)) {
        #footer {
            background-color: rgba(248, 249, 250, 0.95);
        }
    }
}
        </style>
        
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const contentElements = document.querySelectorAll('.card, .container, .row, section, article, main, .blog-card, .project-card');
                contentElements.forEach(element => {
                    if (getComputedStyle(element).position === 'static') {
                        element.style.position = 'relative';
                    }
                    element.style.zIndex = '5';
                });
                
                const globalStyle = document.createElement('style');
                globalStyle.textContent = \`
                    body {
                        position: relative;
                        z-index: 1;
                        background: transparent;
                    }
                    .container, .row, .col, .card, section, article, main {
                        position: relative;
                        z-index: 5;
                    }
                    .bg-circle-container {
                        z-index: -1;
                    }
                    
                    /* Ensure only one instance exists */
                    special-footer:not(:last-of-type) .bg-circle-container {
                        display: none !important;
                    }
                \`;
                document.head.appendChild(globalStyle);
                
                const outerImage = new Image();
                outerImage.onload = function() {
                    console.log('Outer wheel image loaded successfully');
                    document.querySelectorAll('.outer').forEach(img => {
                        img.style.display = 'block';
                        img.style.backgroundColor = 'transparent';
                    });
                };
                outerImage.onerror = function() {
                    console.error('Outer wheel image failed to load');
                    document.querySelectorAll('.outer').forEach(img => {
                        img.style.display = 'none';
                    });
                };
                outerImage.src = './images/vvit1.png';
                
                const centerImage = new Image();
                centerImage.onload = function() {
                    console.log('Center image loaded successfully');
                    document.querySelectorAll('.center').forEach(img => {
                        img.style.display = 'block';
                        img.style.backgroundColor = 'transparent';
                    });
                };
                centerImage.onerror = function() {
                    console.error('Center image failed to load');
                    document.querySelectorAll('.center').forEach(img => {
                        img.style.display = 'none';
                    });
                };
                centerImage.src = './images/circular_cen.png';
                
                // Remove any duplicate elements
                setTimeout(() => {
                    const containers = document.querySelectorAll('.bg-circle-container');
                    if (containers.length > 1) {
                        for (let i = 1; i < containers.length; i++) {
                            containers[i].remove();
                        }
                    }
                    
                    // Ensure transparency
                    document.querySelectorAll('.wheel-container, .wheel-container img').forEach(el => {
                        el.style.backgroundColor = 'transparent';
                    });
                }, 300);
            });
        </script>`;
    }
}
// Define custom elements
customElements.define('special-footer', SpecialFooter);
customElements.define('required-links', Links);
customElements.define('special-header', SpecialHeader);
