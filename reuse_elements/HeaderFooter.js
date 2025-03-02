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
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="Projects.html" id="projectsDropdown">
                                Projects
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="projectsDropdown">
                                <li><a class="dropdown-item" href="./Projects.html">Ongoing Projects</a></li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item" href="./Projects.html" id="completedDropdown">
                                        Completed Projects
                                        <i class="fas fa-chevron-right submenu-arrow"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-submenu" aria-labelledby="completedDropdown">
                                        <li><a class="dropdown-item" href="./Game.html">Games</a></li>
                                        <li><a class="dropdown-item" href="Projects.html#ml">Machine Learning</a></li>
                                        <li><a class="dropdown-item" href="Projects.html#dl">Deep Learning</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="blog.html">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Meetups.html">Meetups</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Apps.html">Apps</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="./Career.html" id="projectsDropdown">
                                Career Catalyts
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="projectsDropdown">
                                <li><a class="dropdown-item" href="./Career.html">Job Guide</a></li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item" href="./Career.html" id="completedDropdown">
                                        Life Skills
                                        <i class="fas fa-chevron-right submenu-arrow"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-submenu" aria-labelledby="completedDropdown">
                                        <li><a class="dropdown-item" href="#">Quantitative Aptitude</a></li>
                                        <li><a class="dropdown-item" href="#">Reasoning Ability</a></li>
                                        <li><a class="dropdown-item" href="#">Verbal Ability</a></li>
                                    </ul>
                                </li>
                                <li><a class="dropdown-item" href="./Carrer.html">Web Dev</a></li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="About.html">People</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const projectsLink = document.getElementById('projectsDropdown');
                const completedLink = document.getElementById('completedDropdown');
                
                function toggleDropdown(e, dropdownMenu) {
                    if (window.innerWidth <= 991) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        const isVisible = dropdownMenu.classList.contains('show');
                        const allMenus = document.querySelectorAll('.dropdown-menu');
                        allMenus.forEach(menu => menu.classList.remove('show'));
                        
                        if (!isVisible) {
                            dropdownMenu.classList.add('show');
                            if (dropdownMenu.closest('.dropdown-submenu')) {
                                dropdownMenu.closest('.dropdown-menu').classList.add('show');
                            }
                        }
                    }
                }
                
                projectsLink.addEventListener('click', function(e) {
                    toggleDropdown(e, this.nextElementSibling);
                });
                
                completedLink.addEventListener('click', function(e) {
                    toggleDropdown(e, this.nextElementSibling);
                });
                
                document.addEventListener('click', function(e) {
                    if (!e.target.closest('.dropdown')) {
                        const allMenus = document.querySelectorAll('.dropdown-menu');
                        allMenus.forEach(menu => menu.classList.remove('show'));
                    }
                });
            });
        </script>`
    }
}

class Links extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=domain" />
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
        <nav class="navbar navbar-expand-lg fixed-bottom bg-body-tertiary">
            <div class="container-fluid" id="footer">
                <ul style="list-style: none;display:flex; justify-content: center;">
                    <div><li class="desc_item"><i class="fa-solid fa-building-columns"></i><a href="https://www.vvitguntur.com/">VVIT</a></li></div>
                    <div><li class="desc_item"><i class="fa-solid fa-location-dot"></i><a href="https://www.google.com/maps/place/Vasireddy+Venkatadri+Institute+of+Technology/data=!4m2!3m1!1s0x0:0x8c86e4f36490336b?sa=X&ved=1t:2428&ictx=111">Guntur</a></li></div>
                    <div><li class="desc_item"><i class="fas fa-envelope"></i><a href="mailto:">Mail</a></li></div>
                    <div><li class="desc_item"><i class="fa-brands fa-github"></i></i><a href="https://github.com/AIHUB-VVIT">Github</a></li></div>
                </ul>
            </div>
        </nav>`
    }
}

// Stylesheet for common elements
const commonStyles = `
<style>
    .desc_item {
        margin: 0 15px;
        display: flex;
        align-items: center;
    }
    
    .desc_item i {
        margin-right: 8px;
    }
    
    .desc_item a {
        text-decoration: none;
        color: inherit;
    }
    
    .desc_item a:hover {
        color:rgb(214, 219, 228);
    }
    
    #footer {
        justify-content: center;
        padding: 10px 0;
    }
    
    @media (max-width: 768px) {
        .desc_item {
            margin: 0 10px;
            font-size: 0.9em;
        }
    }
</style>
`;

// Add the common styles to the document
document.head.insertAdjacentHTML('beforeend', commonStyles);

// Define custom elements
customElements.define('special-header', SpecialHeader);
customElements.define('required-links', Links);
customElements.define('special-footer', SpecialFooter);
