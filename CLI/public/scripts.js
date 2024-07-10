import fetch from 'node-fetch'

document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const file = document.getElementById('photo').files[0];
    uploadFile(file)
})

async function uploadFile(file) {
    const formData= new FormData();
    formData.append('file', file)
    const response = await fetch(`http://localhost:5000/upload`, {
        method: 'POST',
        body: formData
    });
}