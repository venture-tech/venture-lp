import { defineNuxtPlugin } from 'nuxt/app'
import Swal, { SweetAlertOptions } from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

// Default options
const options: SweetAlertOptions = {
	confirmButtonColor: '#0242D1',
	buttonsStyling: false,
	customClass: {
		confirmButton: 'swal-confirm-button'
	}
}

const $swal = {
    install: (Vue: any, options: SweetAlertOptions) => {
        Vue.provide('$swal', Swal.mixin(options))
    }
}
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($swal, options)
})
