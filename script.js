const apiToken = 'fccbfa717f79bd09b3816e2d19392bf39ce90920'; // Замените на ваш API токен
const apiUrl = `https://api.pipedrive.com/v1/deals?api_token=${apiToken}`;

async function createDeal(dealData) {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dealData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Deal created successfully:', data);
    return data;
  } catch (error) {
    console.error('Error creating deal:', error);
  }
}

window.addEventListener('message', (event) => {
  const data = event.data;
  console.log('Data received from iframe:', data);

  createDeal(data);
});
