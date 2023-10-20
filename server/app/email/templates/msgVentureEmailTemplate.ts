import { EmailTemplate } from '../types/emailTypes'
import { MessageContent } from '../types/messageTypes'

const messageEmailTemplate = function (data: MessageContent): EmailTemplate {
	const html = `
		<!DOCTYPE html>
		<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

			<head>
				<meta charset="utf-8">
				<meta name="x-apple-disable-message-reformatting">
				<meta http-equiv="x-ua-compatible" content="ie=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
				<title>Reset your Password</title>
				<link
				href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700"
				rel="stylesheet" media="screen">
				<style>
				.wrapper {
					max-width: 768px;
					margin: 0 auto;
					background-color: #f9f9f9;
					padding: 24px;
					border-radius: 24px;
					box-shadow: 10px 5px 5px black;
				}
				</style>
			</head>
			<body>
				<div class="wrapper">
				<h1>Recebemos uma nova mensagem</h1>
				<p>Um potencial cliente enviou um mensagem pelo site hoje!</p>
				<p>Informações abaixo:</p>
				<ul>
					<li><strong>Assunto:</strong> ${data.subject}</li>
					<li><strong>Nome do Cliente:</strong> ${data.fullName}</li>
					<li><strong>Número do Whatsapp:</strong> ${data.contact}</li>
					<li><strong>Endereço de e-mail:</strong> ${data.email}</li>
					<li><strong>Mensagem:</strong> ${data.message}</li>
				</ul>
				</div>
			</body>
		</html>
	`
	const text = `Verique o E-mail, uma nova mensagem vinda do site chegou!!!`
	return { html, text }
}

export default messageEmailTemplate
