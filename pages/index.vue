<script setup lang="ts">
import { ref } from 'vue'
import { Form, SubmissionContext } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const requiredText = 'Campo obrigatório'

const validationSchema = toTypedSchema(
    zod.object({
        subject: zod.string().nonempty({ message: requiredText }),
        contact: zod.string().nonempty({ message: requiredText }),
        fullName: zod.string().nonempty({ message: requiredText }),
        email: zod.string().nonempty({ message: requiredText }).email({ message: 'Digite um e-mail válido' }),
        message: zod.string().optional()
    })
);

type DefaultValue = {
    subject?: string
    fullName?: string
    contact?: string
    email?: string
    message?: string
}

const swal = useSwal()
const emailContent = ref<DefaultValue>({})
const loading = ref(false)
const contactUs = ref<null | HTMLDivElement>(null)
const benefits = benefitsContent()

async function sendMessage(data: DefaultValue, { resetForm }: SubmissionContext) {
    loading.value = true
    await useFetch('/api/gmail', {
        method: 'post',
        body: data,
        onResponse({ request, response, options }) {
            if (response.status === 200) {
                swal.fire({
                    title: 'Sucesso',
                    text: 'Sua mensagem foi enviada com sucesso para nossa equipe, em breve iremos dar um retorno para você',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                resetForm()
            }
        },
        onResponseError({ request, response, options }) {
            swal.fire({
                title: 'Erro',
                text: response.statusText,
                icon: 'error'
            })
        }
    })
    loading.value = false
}
function sendToForm() {
    contactUs.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <section class="first-section grid sm:grid-cols-2 px-5 items-center max-w-5xl mx-auto h-screen bg-primary relative">
        <Ilustration />
        <div class="text-center px-0 xs:px-14 sm:text-start">
            <h1 class="font-serif text-3xl lg:text-6xl text-white font-light">
				Transformamos ideias em
				<strong class="font-semibold">soluções encantadoras.</strong>
			</h1>
            <p class="font-sans text-white font-light text-xl lg:text-2xl mt-4">
				Somos uma empresa multidisciplinar <br>
				de desenvolvimento de software.
			</p>
            <Button class="bg-secondary hover:bg-orange-600 mt-10 uppercase" @click="sendToForm">Faça uma cotação</Button>
        </div>
        <div class="absolute w-48 top-10 left-10 sm:bottom-10 sm:top-unset sm:left-0">
            <img src="@/assets/img/logos/new_logo.png" alt="Logo" class=" w-full">
        </div>
    </section>
    <section class="second-section bg-white">
        <div class="bg-heads bg-cover bg-no-repeat bg-lp">
            <div class="pt-2">
                <h3 class="font-serif text-3xl text-primary text-center pt-20">
                    Ter<strong>&nbsp;software próprio&nbsp;</strong>é bom para
                </h3>
                <div class="mt-10 grid gap-y-5 xs:grid-cols-2 xl:grid-cols-4 justify-center max-w-[74rem] mx-auto">
                    <div v-for="benefit in benefits" :key="benefit.id">
                        <CardDescription :class="benefit.color">
                            <template #title>
                                <div v-html="benefit.title"></div>
                            </template>
                            <template #description>
                                <div v-html="benefit.description"></div>
                            </template>
                        </CardDescription>
                    </div>
                </div>
            </div>
            <div class="mt-40 py-10 bg-white max-w-[74rem] mx-auto shadow-2xl rounded-xl" ref="contactUs">
                <h3 class="flex justify-center font-serif text-4xl">Fale<span class="font-semibold">&nbsp;conosco</span>
                </h3>
                <!-- FORM -->
                <Form :validation-schema="validationSchema" @submit="sendMessage" class="p-10">
                    <div class="grid gap-6">
                        <div class="grid gap-5 md:grid-cols-3 md:gap-10 items-center">
                            <InputField class="md:col-span-2" id="subject" name="subject" width="w-56"
                                label="Escreva o assunto*" v-model="emailContent.subject" />
                            <InputField id="contact" width="w-40" name="contact" mask="(##) #####-####" label="Contato"
                                v-model="emailContent.contact">
                                <template #append-icon>
                                    <client-only>
                                        <font-awesome-icon icon="fab fa-whatsapp" />*
                                    </client-only>
                                </template>
                            </InputField>
                        </div>
                        <InputField id="fullName" width="w-56" name="fullName" label="Nome e Sobrenome*"
                            v-model="emailContent.fullName" />
                        <InputField id="email" width="w-16" name="email" type="email" label="E-mail*"
                            v-model="emailContent.email" />
                        <InputArea id="message" label="Mensagem" name="message" v-model="emailContent.message" />
                    </div>
                    <div class="grid gap-5 sm:flex sm:gap-0 sm:justify-between sm:items-center mt-5">
                        <span class="font-serif">
                            <strong>Venture Tech</strong> é a solução eficiente que conecta a sua empresa aos seus objetivos
                            <br>
                            através da tecnologia, atendimento humano e rigor técnico.
                        </span>
                        <Button class="sm:w-24" :loading="loading">Enviar</Button>
                    </div>
                </Form>
                <!-- END FORM -->
            </div>
            <div class="bg-cotton-gray w-full">
                <Footer />
            </div>
        </div>
    </section>
</template>
