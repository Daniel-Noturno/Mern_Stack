axios.get('https://api.github.com/users/diego3g')
    .then(function(resolve){
        console.log(resolve);
    })
    .catch(function(error){
        console.warn(error);
    }
);