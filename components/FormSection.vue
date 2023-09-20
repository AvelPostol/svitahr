<template>
<v-dialog v-model="popup" scroll-strategy="none" ref="dialogRef" :ripple="false" class="extra-dial">
      <v-card class="card-sh" @click.stop :ripple="false">
        <section class="section form-well base-up section-bl5 form-out form-out1" date-nameform="base-up">
          <form action="/call.php" class="form-call" method="post" novalidate="novalidate" id="form7">
            <div class="sp-bl1">
              <div class="ex exto1" @click="closeDialog"> <img src="../images/img_v2/ex.svg" alt="/" class="ex popup-simple"> </div>
              <div class="form-t"> <div class="titlesp"> Получить бесплатную консультацию </div></div>
              <div class="form-b-b-b">
                <div class="form-b-b-b-t">

                  <div class="btn-title"> ФИО/Компания* </div>
                  <div class="type-btn cl-name-er-btn-i"  :class="{ 'novalid': !namevalid && (!name || name.length < 3) }">
                    <img src="../images/img_v2/icim1.svg" alt="" class="icon-vm1">
                    <v-text-field  v-model="name"  ref="nameInput" required ></v-text-field>
                  </div>

                  <div class="btn-title">   Телефон*  </div>
                  <div class="type-btn cl-tel-er-btn-i"  :class="{ 'novalid': !telvalid && (!tel || tel.length < 18) }">
                    <img src="../images/img_v2/icim10.svg" alt="" class="icon-vm1">
                    <v-text-field  v-model="tel" ref="telInput"  required  v-mask="['+7 (9##) ###-##-##']"  ></v-text-field>
                  </div>

                  <div class="btn-title">  Кого ищем/специальность </div>
                  <div class="type-btn">
                    <img src="../images/img_v2/icim1.svg" alt="" class="icon-vm1">
                    <v-text-field  v-model="speciality" ref="subInput" ></v-text-field>
                  </div>

                </div>

                <div class="form-b-b-b-b" date-nameform="base-up">
                  <div class="section-btn section-btn-v1 submit form-main-b1 tosendi" date-nameform="base-up" @click="submitReviewpop">Начать работу</div>
                  <div class="ckeck-bl" :class="{ 'novalid': !consentlid && !consent }">
                    <v-checkbox class="my-checkbox"  v-model="consent" :rules="[requiredConsentRule]" ></v-checkbox>
                    <div class="check-text">Я согласен на обработку <span class="exit-btn openpolz" @click="OpenPolz" >персональных данных</span></div>
                  </div>
                </div>

            </div>
            </div>
          </form>  
        </section>
      </v-card>
</v-dialog>
</template>



<script>
import axios from 'axios';
import {mask} from 'vue-the-mask';
import { support, handleAppClick, LentClick } from '../assets/js/support.js';
import { mapGetters } from 'vuex';

export default {
  directives: {mask},
  data() {
    return {
      tel: '',
      name: '',
      speciality: '',
      telvalid: true,
      namevalid: true,
      isActive: true,
      consent: false,
      consentlid: false,
      requiredConsentRule: v => !!v || 'Необходимо дать согласие на обработку персональных данных',
      requiredRule: v => !!v || 'Это поле обязательно к заполнению'
    };
  },
  computed: {
    ...mapGetters(['popup'])
  },
  mounted() {
    LentClick();
    const handleDocumentClick = (event) => {
    const target = event.target;
    if (target && target.classList.contains('popup-simple')) {
      support(this, event, '.popup-simple', 'TOGGLE_DIALOG', true);
    } else {
      handleAppClick(this, event, 'dialogVisible', this.$refs.dialogRef, 'TOGGLE_DIALOG', false);
    }
    };

    document.addEventListener('click', handleDocumentClick);
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('click', handleDocumentClick);
    });
  },
  methods: {
    closeDialogfank(){
      this.$store.dispatch('TOGGLE_FANK', false);
    },
    OpenPolz(){
      this.$store.dispatch('TOGGLE_POLZSOGL', true);
    },
    closeDialog(){
      this.$store.dispatch('TOGGLE_DIALOG', false);
    },
    async submitReviewpop() {
    let validmarker = true;

    if (!this.tel || this.tel.length < 18 ) {
      this.telvalid = false;
      validmarker = false;
    }
    else{
       this.telvalid = true;
    }

    if(!this.consent){
      this.consentlid = false;
      validmarker = false;
    }

    if (!this.name) {
      this.namevalid = false;
      validmarker = false;
    }
    else{
        this.namevalid = true;
    }

    if(!validmarker){
      return;
    }
    
    this.$store.dispatch('TOGGLE_FANK', true);
    this.$store.dispatch('TOGGLE_DIALOG', false);
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('tel', this.tel);
    formData.append('speciality', this.speciality);

    // Получите значения UTM-меток из URL-адреса
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || '';
    const utmMedium = urlParams.get('utm_medium') || '';
    const utmCampaign = urlParams.get('utm_campaign') || '';
    const utmContent = urlParams.get('utm_content') || '';
    const utmTerm = urlParams.get('utm_term') || '';

    // Добавьте UTM-метки в FormData
    formData.append('utm_source', utmSource);
    formData.append('utm_medium', utmMedium);
    formData.append('utm_campaign', utmCampaign);
    formData.append('utm_content', utmContent);
    formData.append('utm_term', utmTerm);

    try {
      const response = await axios.post('/api/simpleform.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
          }
        });

          const newReview = response.data;
          this.reviews.push(newReview);
          this.resetFormFields();
  
        } catch (error) {
          console.error('Error submitting review:', error);
      }
    
    }
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleAppClick);
  },
};
</script>

