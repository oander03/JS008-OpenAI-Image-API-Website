function onSubmit(e) {
    e.preventDefault();

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

  if (prompt === '') {
    alert('Please add some text');
    return;
  }

  generateImageRequest(prompt, size);
}
const message = document.querySelector('.image-message');
const messageSize = document.querySelector('.image-message-size');
async function generateImageRequest(prompt, size) {
  try {
    const image = document.querySelector('#image');

    
    showSpinner();

    const response = await fetch('/openai/generateimage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    });

    if (!response.ok) {
      removeSpinner();
      throw new Error('That image could not be generated');
    }

    const data = await response.json();
    console.log(data);

    const imageUrl = data.imageSrc;
    const imageSize = data.resolution;

    image.src = imageUrl;
    //message.textContent = prompt + " " +size;
    // message.textContent = `${prompt} ${imageSize}`;
    message.textContent = prompt;
    messageSize.textContent = imageSize;

    removeSpinner();

  } catch (error) {
    message.textContent = error;
  }
}

function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
  message.textContent = "Loading...";
}

function removeSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}

document.querySelector('#image-form').addEventListener('submit', onSubmit);