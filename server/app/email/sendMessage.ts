import msgVentureEmailTemplate from './templates/msgVentureEmailTemplate'
import msgUserEmailTemplate from './templates/msgUserEmailTemplate'
import { sendEmail } from './emailSender'
import { MessageContent } from './types/messageTypes'

export default async function sendMessage (data: MessageContent) {

  const config = useRuntimeConfig()
  const emailToSend: string = config.emailToSend as string

	const template = msgVentureEmailTemplate(data)
	const templateUser = msgUserEmailTemplate(data)
	await sendEmail(emailToSend as string, emailToSend as string, 'Venture Tech - Nova Mensagem Recebida', template)
	return await sendEmail(emailToSend, data.email, 'Venture Tech - Fale Conosco', templateUser)
}
