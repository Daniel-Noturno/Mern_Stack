var inputElement = document.querySelector('#app #name');
var ulElement = document.querySelector('#app #repo');

function requestAxios(){
    var minhaPromise = function(){
        return new Promise(function(resolve, reject){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.github.com/users/'+ inputElement.value +'/repos');
            xhr.send(null);
    
            xhr.onreadystatechange = function(){
                if (xhr.readyState === 4 ){
                    if (xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject('Erro na Requisição');
                    }
                }
            }
        });
    }
    
    minhaPromise()
        .then(function(resolve){
            ulElement.innerHTML = '';

            for(value of resolve){
                var createElement = document.createElement('li');
                createElement.setAttribute('id', 'li')

                ulElement.appendChild(createElement);

                createElement.appendChild(document.createTextNode(value.name));
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }