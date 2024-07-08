
# Birthday and Event Notifier

Este script consulta dos servicios web para obtener los cumpleaños y eventos del día actual y envía notificaciones a través de WhatsApp utilizando otra API.

## Requisitos

- Node.js
- Axios

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd tu-repositorio
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso

1. Abre el archivo `index.js` y ajusta las configuraciones si es necesario. Asegúrate de que las URLs de los servicios web y el número de WhatsApp sean correctos.

2. Ejecuta el script:

   ```bash
   node index.js
   ```

## Detalles del Script

- **getCumpleanos(date)**: Obtiene la lista de cumpleaños del día especificado.
- **getEventos(date)**: Obtiene la lista de eventos del día especificado.
- **sendWhatsAppMessage(number, message)**: Envía un mensaje de WhatsApp al número especificado con el contenido del mensaje.
- **main()**: Función principal que coordina la obtención de cumpleaños y eventos, y envía las notificaciones correspondientes.

## Ejemplo de Salida

El script enviará mensajes de WhatsApp con el siguiente formato:

- Para cumpleaños:

  ```
  Hoy lunes, 8 de julio de 2024
  Es el cumpleaños de: Juan Pérez, María Gómez
  ```

- Para eventos:

  ```
  Hoy lunes, 8 de julio de 2024
  de 10:00 a 11:00
  tienes el siguiente evento: FISIOTERAPIA-COSTADELSOL
  ```

  ```
  Hoy lunes, 8 de julio de 2024
  de 12:15 a 12:30
  tienes el siguiente evento: Cita: Consulta hospitalaria - Neurocirugía General
  ```

## Personalización

Puedes personalizar el formato de las fechas y horas ajustando las opciones en las funciones `toLocaleDateString` y `toLocaleTimeString`.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes alguna sugerencia, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por usar este script! Si tienes alguna pregunta o necesitas ayuda, no dudes en contactar.
