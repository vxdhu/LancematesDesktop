const prcontainer = document.querySelector('.create-project-container');
const createbtn = document.querySelector('#createbtn');
const created_btn = document.querySelector('#created-btn');


createbtn.addEventListener('click', () => {
    prcontainer.style.display = "unset"
})
created_btn.addEventListener('click', () => {
    prcontainer.style.display = "none"
})