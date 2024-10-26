const inst = Vue.createApp({
    data() {
        return {
            mostrar: false,
            edad: false,
            numero: null,
            deporte: '',
            arreglo: [],
            mensaje: 'Seleccione una opción'

        }
    },
    methods: {
        texto:function(){
            if (this.numero !== null && this.numero !== '') {
                this.edad = true;
            } else {
                this.edad = false;
            }
        },
        cambiar:function(){
            this.mostrar = !this.mostrar;
            this.mensaje = 'Gracias por responder';
        },
        agregar:function() {
            if (this.deporte.trim() !== '') {
                this.arreglo.push(this.deporte);
                this.deporte = '';
            }
        }
    }
})
const app = inst.mount('#encuesta')