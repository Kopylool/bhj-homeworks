const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');
const fileDesc = document.querySelector('.input_wrapper-desk');

function updateFileDesk () {
    fileDesc.textContent = fileInput.files[0]?.name || 'Имя файла';
}

function uploadFile() {
    const xhr = new XMLHttpRequest ();
    const formData = new FormData (form);

    xhr.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
            const persentage = (event.loaded / event.total);
            progress.value = persentage
        }
    });

    xhr.open('POST', form.action, true);
    xhr.send(formData)
}

fileInput.addEventListener('change', updateFileDesk);
form.addEventListener('submit', event => {
    event.preventDefault();
    uploadFile();
});