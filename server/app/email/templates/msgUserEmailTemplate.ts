import { EmailTemplate } from '../types/emailTypes'
import { MessageContent } from '../types/messageTypes'

const messageEmailTemplate = function (data: MessageContent): EmailTemplate {
	const html = `
		<!doctype html>
		<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

			<head>
			<meta charset="utf-8" />
			<meta content="width=device-width" name="viewport" />
			<meta content="IE=edge" http-equiv="X-UA-Compatible" />
			<meta name="x-apple-disable-message-reformatting" />
			<meta content="telephone=no,address=no,email=no,date=no,url=no" name="format-detection" />
			<title>Frame</title>
			<!--[if mso]>
						<style>
							* {
								font-family: sans-serif !important;
							}
						</style>
					<![endif]-->
			<!--[if !mso]><!-->
			<!-- <![endif]-->
			<style>
			html {
				margin: 0 !important;
				padding: 0 !important;
			}

			* {
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}
			td {
				vertical-align: top;
				mso-table-lspace: 0pt !important;
				mso-table-rspace: 0pt !important;
			}
			a {
				text-decoration: none;
			}
			img {
				-ms-interpolation-mode:bicubic;
			}
			@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
				u ~ div .email-container {
					min-width: 320px !important;
				}
			}
			@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
				u ~ div .email-container {
					min-width: 375px !important;
				}
			}
			@media only screen and (min-device-width: 414px) {
				u ~ div .email-container {
					min-width: 414px !important;
				}
			}
			</style>
			<!--[if gte mso 9]>
					<xml>
						<o:OfficeDocumentSettings>
							<o:AllowPNG/>
							<o:PixelsPerInch>96</o:PixelsPerInch>
						</o:OfficeDocumentSettings>
					</xml>
					<![endif]-->
			<style>
			@media only screen and (max-device-width: 599px), only screen and (max-width: 599px) {

				.eh {
					height:auto !important;
				}
				.desktop {
					display: none !important;
					height: 0 !important;
					margin: 0 !important;
					max-height: 0 !important;
					overflow: hidden !important;
					padding: 0 !important;
					visibility: hidden !important;
					width: 0 !important;
				}
				.mobile {
					display: block !important;
					width: auto !important;
					height: auto !important;
					float: none !important;
				}
				.email-container {
					width: 100% !important;
					margin: auto !important;
				}
				.stack-column,
				.stack-column-center {
					display: block !important;
					width: 100% !important;
					max-width: 100% !important;
					direction: ltr !important;
				}
				.wid-auto {
					width:auto !important;
				}

				.table-w-full-mobile {
					width: 100%;
				}


				.pt-73602765 {padding-top:0px !important;}.pb-35106123 {padding-bottom:0px !important;}.pl-88615101 {padding-left:0px !important;}.pr-49232520 {padding-right:0px !important;}.pt-69344529 {padding-top:20px !important;}

				.mobile-center {
					text-align: center;
				}

				.mobile-center > table {
					display: inline-block;
					vertical-align: inherit;
				}

				.mobile-left {
					text-align: left;
				}

				.mobile-left > table {
					display: inline-block;
					vertical-align: inherit;
				}

				.mobile-right {
					text-align: right;
				}

				.mobile-right > table {
					display: inline-block;
					vertical-align: inherit;
				}

			}

			</style>
			</head>

			<body width="100%" style="background-color:#18256d;margin:0;padding:0!important;mso-line-height-rule:exactly;">
			<div style="background-color:#18256d">
			<!--[if gte mso 9]>
							<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
							<v:fill type="tile" color="#18256d"/>
							</v:background>
							<![endif]-->
			<table width="100%" cellpadding="0" cellspacing="0" border="0">
			<tr>
			<td valign="top" align="center">
			<table bgcolor="#ffffff" style="margin:0 auto;" align="center" id="brick_container" cellspacing="0" cellpadding="0" border="0" width="600" class="email-container">
			<tr>
			<td width="600">
			<table cellspacing="0" cellpadding="0" border="0">
			<tr>
			<td width="600" class="pt-73602765 pb-35106123 pl-88615101 pr-49232520" style="background-color:#ffffff;  " bgcolor="#ffffff">
			<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
			<td width="100%" align="center" class="pt-69344529">
			<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
			<td width="100%">
			<table width="100%" cellspacing="0" cellpadding="0" border="0">
			<tr>
			<td width="100%" align="center" style="background-color:#0242d1;   padding-left:24px; padding-right:24px;" bgcolor="#0242d1">
			<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
			<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
			</tr>
			<tr>
			<td align="center">
			<table cellspacing="0" cellpadding="0" border="0">
			<tr>
			<td width="314" align="center"><img src="https://plugin.markaimg.com/public/a315a3fd/tELIRJ4YOZkMlfrfznQiQuXiodc3Kh.png" width="314" border="0" style="
					max-width:314px; width: 100%; height: auto; display: block;"></td>
			</tr>
			</table>
			</td>
			</tr>
			<tr>
			<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			<tr>
			<td width="100%">
			<table width="100%" cellspacing="0" cellpadding="0" border="0">
			<tr>
			<td width="100%" align="center" style="background-color:#0242d1;   padding-left:24px; padding-right:24px;" bgcolor="#0242d1">
			<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
			<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
			</tr>
			<tr>
			<td width="100%">
			<table width="100%" cellspacing="0" cellpadding="0" border="0">
			<tr>
			<td width="100%" align="center" style="background-color:#0242d1;  " bgcolor="#0242d1">
			<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
			<td align="center">
			<div style="line-height:32px;text-align:left;"><span style="color:#ffffff;font-weight:700;font-family:Arial,Arial,sans-serif;font-size:23px;letter-spacing:-0.02em;line-height:32px;text-align:left;">Olá, ${data.fullName}</span></div>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			<tr>
			<td height="16" style="height:16px; min-height:16px; line-height:16px;"></td>
			</tr>
			<tr>
			<td align="center">
			<div style="line-height:20px;text-align:left;"><span style="color:#ffffff;font-family:Arial,Arial,sans-serif;font-size:15px;line-height:20px;text-align:left;">Sua mensagem foi recebido com sucesso!<br>Dentro de 24 horas entraremos em contato para dar continuidade ao seu atendimento.<br></span><span style="color:#ffffff;font-weight:700;font-family:Arial,Arial,sans-serif;font-size:15px;line-height:20px;text-align:left;">Obrigado!</span></div>
			</td>
			</tr>
			<tr>
			<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			<tr>
			<td width="100%">
			<table width="100%" cellspacing="0" cellpadding="0" border="0">
			<tr>
			<td width="100%" align="center" style="background-color:#0242d1;   padding-left:24px; padding-right:24px;" bgcolor="#0242d1">
			<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
			<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
			</tr>
			<tr>
			<td align="center">
			<table cellspacing="0" cellpadding="0" border="0">
			<tr>
			<td>
			<table cellspacing="0" cellpadding="0" border="0">
			<tr>
			<td style="vertical-align: middle; background-color:#0242d1;  " bgcolor="#0242d1">
			<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
			<td style="vertical-align: middle;" width="32">
			<a href="https://www.instagram.com/_ventureth/" target="_blank">
				<img src="https://plugin.markaimg.com/public/a315a3fd/2eCfPYs4uksMF9amZ4bp1ntjBbRbAP.png" width="32" border="0" style="min-width:32px; width:32px;
				min-width:32px; width:32px; height: auto; display: block; color: #f43807;">
			</a>
			</td>
			<td style="width:16px; min-width:16px;" width="16"></td>
			<td style="vertical-align: middle; margin-top: 24px;" width="32">
			<a href="https://www.linkedin.com/company/venture-th" href="_blank">
				<img src="https://plugin.markaimg.com/public/a315a3fd/m8ZdlCG6Y2VHemTurljZXMFFLG9B6W.png" width="32" border="0" style="min-width:32px; width:32px;
				min-width:32px; width:32px; height: auto; display: block; color: #f43807;">
			</a>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			<tr>
			<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</td>
			</tr>
			</table>
			</div>
			</body>
		</html>
	`
	const text = `Mensagem de Venture Tech`
	return { html, text }
}

export default messageEmailTemplate
