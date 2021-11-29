document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#new-item-form').addEventListener('submit', handleFormSubmit);

    document.querySelector('#delete-button').addEventListener('click', handleDelete);


})

const handleFormSubmit = function (e) {
    e.preventDefault();
    const createNewItem = document.createElement('li');
    createNewItem.textContent = `Title: ${e.target.title.value} Director: ${e.target.director.value} Genre: ${e.target.genre.value}`;
    const list = document.querySelector('ul');
    list.appendChild(createNewItem);
    this.reset();
};

const handleDelete = function (e) {
document.querySelector('#movie-list').textContent = "";    
};
