// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    await delay().then(() => console.log('1s'));
    await delay().then(() => console.log('2s'));
    await delay().then(() => console.log('3s'));
}

umPorSegundo();