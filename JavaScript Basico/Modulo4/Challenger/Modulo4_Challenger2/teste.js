function requestAxios(){
    axios.get('https://api.github.com/users/diego3g/repos')
    .then(function(response){
        for(value of response.data){
            console.log(value.name);
        }
    })
    .catch(function(error){
        console.log('error');
    });
}