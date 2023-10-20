import nodemailer from 'nodemailer'

export const sendEmail = async (fromAddress: string, toAddress: string, subject: string, bodyHtml: { html: string, text: string }) => {
	const config = useRuntimeConfig()

	const transporter = nodemailer.createTransport({
		host: config.mailtrapHost,
		port: Number(config.mailtrapPort) ?? 0,
		auth: {
			user: config.mailtrapUser,
			pass: config.mailtrapPass
		}
	})
	return await transporter.sendMail({ from: `Venture Tech <${fromAddress}>`, to: toAddress, subject, html: bodyHtml.html, text: bodyHtml.text, })
}
