import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './utils/errorHandler';
import { ContactMessageController } from './app/modules/contactMessages/contact.messages.controller';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

//route
app.post(
  '/api/v1/contact-messages/send-contact-message',
  ContactMessageController.sendContactMessage,
);
app.get(
  '/api/v1/contact-messages',
  ContactMessageController.getAllContactMessage,
);

app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
