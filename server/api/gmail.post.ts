import sendMessage from '../app/email/sendMessage'

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event)
		return await sendMessage(body)
	} catch (error) {
		return createError({ statusCode: 400, statusMessage: 'Houve um problema ao enviar sua mensagem, tente novamente!' })
	}
})
