const axios = require('axios');

// Función para obtener los cumpleaños
async function getCumpleanos(date) {
  const url = `http://cumpleanos.buluu.es:6000/items?day=${date}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching birthdays:', error);
    return [];
  }
}

// Función para obtener los eventos
async function getEventos(date) {
  const url = `http://eventos.buluu.es:3000/items?day=${date}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

// Función para enviar mensajes por WhatsApp
async function sendWhatsAppMessage(number, message) {
  const url = 'http://whatsapi.buluu.es:6001/v1/messages';
  const postData = {
    number: number,
    message: message,
  };
  try {
    await axios.post(url, postData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
  }
}

// Función principal
async function main() {
  const number = '34699490161';
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split('T')[0];
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = tomorrow.toLocaleDateString('es-ES', options);

  // Obtener cumpleaños
  const cumpleanos = await getCumpleanos(tomorrowString);

  if (cumpleanos.length > 0) {
    const birthdayNames = cumpleanos.map(b => b.summary).join(', ');
    const message = `Mañana ${formattedDate}\nEs el cumpleaños de: ${birthdayNames}`;
    await sendWhatsAppMessage(number, message);
  } else {
    const message = `Mañana ${formattedDate}\nNo tienes ningún cumpleaños conocido`;
    await sendWhatsAppMessage(number, message);
  }

  // Obtener eventos
  const eventos = await getEventos(tomorrowString);

  if (eventos.length > 0) {
    for (const evento of eventos) {
      const startTime = new Date(evento.start).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
      const endTime = new Date(evento.end).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
      const message = `Mañana ${formattedDate}\nde ${startTime} a ${endTime}\ntienes el siguiente evento: ${evento.summary}`;
      await sendWhatsAppMessage(number, message);
    }
  } else {
    const message = `Mañana ${formattedDate}\nNo tienes eventos agendados`;
    await sendWhatsAppMessage(number, message);
  }
}

// Ejecutar la función principal
main().catch(console.error);
