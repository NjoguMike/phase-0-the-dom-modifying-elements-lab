// Write your code here!
const removeMain = document.querySelector('#main')
removeMain.remove()

const newHeader = document.createElement('h1');
newHeader.className = 'H1';
newHeader.id = 'victory';
newHeader.innerHTML = 'Mwagash is the champion'
document.body.append(newHeader)




