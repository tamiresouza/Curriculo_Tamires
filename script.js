document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const descricaoCursos = document.querySelectorAll('.descricao-curso');


    descricaoCursos[0].style.display = 'block';

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href').substring(1); 
            
            descricaoCursos.forEach(function(curso) {
                curso.style.display = 'none';
            });

            document.getElementById(target).style.display = 'block';
        });
    });
});

function getProjects() {
    const urlGitHub = 'https://api.github.com/users/tamiresouza/repos';
    fetch(urlGitHub, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((data) => {
        showProjects(data);
    })
    .catch((e) => {
        console.log(e);
    });
}

function showProjects(data) {
    var listElement = document.getElementById('projects-list');

    for (let i = 0; i < data.length; i++) {
        let a = document.createElement("a");
        a.href = data[i]['clone_url'];
        a.target = "_blank";
        let linkText = document.createTextNode(data[i]['name']);
        a.appendChild(linkText);
        listElement.appendChild(a);
        listElement.appendChild(document.createElement("br")); 
    }
}

getProjects();

