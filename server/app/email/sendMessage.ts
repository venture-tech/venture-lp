import msgVentureEmailTemplate from './templates/msgVentureEmailTemplate'
import msgUserEmailTemplate from './templates/msgUserEmailTemplate'
import { sendEmail } from './emailSender'
import { MessageContent } from './types/messageTypes'

export default async function sendMessage (data: MessageContent) {
	const template = msgVentureEmailTemplate(data)
	const templateUser = msgUserEmailTemplate(data)
	await sendEmail('victor@ventureth.com.br', 'victor@ventureth.com.br', 'Venture Tech - Nova Mensagem Recebida', template)
	return await sendEmail('victor@ventureth.com.br', data.email, 'Venture Tech - Fale Conosco', templateUser)
}
