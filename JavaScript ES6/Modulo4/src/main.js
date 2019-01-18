import api from './api';

class App{
    constructor(){
        this.repositories = [],
        this.formEl = document.getElementById('repo-form');
        this.inputEL = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');
        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addrepositories(event);
    }

    setLoading(loading = true){
        if (loading === true){
            let loadingEL = document.createElement('span');
            loadingEL.appendChild(document.createTextNode('Carregando...'));
            loadingEL.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEL);
        } else {
            document.getElementById('loading').remove();
        }
    }
    async addrepositories(event){
        event.preventDefault();

        const repoInput = this.inputEL.value;

        if (repoInput.length === 0)
            return;
        
        this.setLoading();

        try{
            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url }} = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

        this.render();
        } catch (err){
            alert('Repositório não existe');
        }
        this.setLoading(false);
    }
    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEL = document.createElement('strong');
            titleEL.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEL);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();