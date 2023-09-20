<template>
<footer id="cont">

  <section class="section footer base-f" date-nameform="base-f">
    <div class="container">
      
      <div class="fu-l">
        <div class="fu-t">
          <div class="fu-t-title">
            До встречи в офисе!
          </div>
          <div class="fu-t-sub">
            Санкт-Петербург, Петровская коса, д. 1, <br>
            корп. 1, лит. Р (БЦ «Петровский»)
          </div>
          <div class="fu-t-sub fu-t-suby">
            ООО "С-ВИТА"
197110, Г.САНКТ-ПЕТЕРБУРГ, КОСА ПЕТРОВСКАЯ, Д. 1, К. 1 ЛИТЕР Р, ПОМЕЩ. 32-Н ОФИС 101
ОГРН 1077847607001
ИНН 7842368140
          </div>
          
        </div>
        <div class="fu-c">
          <div class="fu-c-l">

            <div class="fu-gruppy">
              <div class="fu-c-l-ti">
                Адрес
                
              </div>
              <a href="tel:+78002224110" class="f-linky">+ 7 800 222 41 10</a>
              <a href="mailto:hr@s-vitagroup.ru" class="f-linky">hr@s-vitagroup.ru</a>
            </div>

            <div class="fu-gruppy">
              <div class="fu-c-l-ti">
                Соцсети
              </div>
              <a href="https://wa.me/+79217985022" class="f-linky">Whatsapp</a>

              <div class="uni-social">
        <a href="https://vk.com/s_vitagroup" target="_blank" class="uni-social-link">
          <img src="../images/im/vk-logo.svg" alt="" class="uni-social-im">
        </a>
        <a href="https://dzen.ru/s_vitaconsulting" target="_blank" class="uni-social-link">
          <img src="../images/im/Yandex_Zen_logo_icon.svg" alt="" class="uni-social-im">
        </a>
        <a href="https://vc.ru/u/1727614-s-vita-consulting-group" target="_blank" class="uni-social-link">
          <img src="../images/im/vc_ru.png" alt="" class="uni-social-im">
        </a>
      </div>
            </div>
            
          </div>
          <form class="fu-c-r" id="footerform">

                        <v-text-field
                          v-model="name"
                          :label="'Ваше имя'"
                          ref="nameInput"
                          required
                          :class="{'toname': true, 'novaid': !namevalid}"
                        ></v-text-field>

                        <v-text-field
                          v-model="tel"
                          :label="'Телефон'"
                          ref="telInput"
                          required
                          :class="{'totel': true, 'novaid': !telvalid}"
                          v-mask="['+7 (9##) ###-##-##']"
                        ></v-text-field>


            <div class="form-b-b-b-b" date-nameform="base-f">
              <div class="ckeck-bl" :class="{ 'novalid': !consentlid && !consent }">
                    <v-checkbox class="my-checkbox"  v-model="consent" ></v-checkbox>
                    <div class="check-text">Я согласен на обработку <span class="exit-btn openpolz" @click="OpenPolz" >персональных данных</span></div>
                  </div>
              <div class="section-btn section-btn-v1 submit form-main-b1 tosendi" @click="submitReview">Отправить</div>
              
            </div>
          </form>
        </div>


        <div class="fu-b">
          <div class="fu-b-l">
            Все права защищены
          </div>
          <div class="fu-b-r conf openpolz">
            Политика конфиденциальности
          </div>
        </div>
      </div>
      <div class="fu-r">
        <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Санкт‑Петербург</a><a href="https://yandex.ru/maps/2/saint-petersburg/house/petrovskaya_kosa_1k1/Z0kYdAJhSEYBQFtjfXV3c3RjbQ==/?ll=30.254195%2C59.961478&utm_medium=mapframe&utm_source=maps&z=15.49" style="color:#eee;font-size:12px;position:absolute;top:14px;">Петровская коса, 1к1 — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?ll=30.254195%2C59.961478&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzQ1OTI3ORJQ0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0J%2FQtdGC0YDQvtCy0YHQutCw0Y8g0LrQvtGB0LAsIDHQujEiCg1SAvJBFevZb0I%3D&z=15.49" width="620" height="827" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
      </div>
    </div>

  </section>
  
  <div class="inimity">
    <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Санкт‑Петербург</a><a href="https://yandex.ru/maps/2/saint-petersburg/house/petrovskaya_kosa_1k1/Z0kYdAJhSEYBQFtjfXV3c3RjbQ==/?ll=30.254195%2C59.961478&utm_medium=mapframe&utm_source=maps&z=15.49" style="color:#eee;font-size:12px;position:absolute;top:14px;">Петровская коса, 1к1 — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?ll=30.254195%2C59.961478&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzQ1OTI3ORJQ0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0J%2FQtdGC0YDQvtCy0YHQutCw0Y8g0LrQvtGB0LAsIDHQujEiCg1SAvJBFevZb0I%3D&z=15.49" width="620" height="827" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
  </div>

  <div class="fu-b nm">
    <div class="fu-b-l">
      Все права защищены
    </div>
    <div class="fu-b-r conf openpolz">
      Политика конфиденциальности
    </div>
  </div>

<v-dialog v-model="dialogVisible" max-width="400" class="my-dialog fank">
  <v-card>
    <v-card-title>Спасибо за заяку!</v-card-title>
    <v-card-text> Ваш заявка была успешно отправлена. <br> Благодарим вас! </v-card-text>
    <v-card-actions><v-btn class="section-btn section-btn-v1" @click.stop="closeDialog">Закрыть</v-btn></v-card-actions>
  </v-card>
</v-dialog>

</footer>
</template>

  

<script>
import axios from 'axios';
import {mask} from 'vue-the-mask';

export default {
  name: 'EndFooter',
  directives: {mask},
  data() {
    return {
      tel: '',
      name: '',
      telvalid: true,
      dialogVisible: false,
      namevalid: true,
      consent: false,
      consentlid: false,
      isActive: true,
      requiredRule: v => !!v || 'Это поле обязательно к заполнению',
    };
  },
  directives: {mask},
  methods: {
    OpenPolz(){
      this.$store.dispatch('TOGGLE_POLZSOGL', true);
    },
  closeDialog() {
    this.dialogVisible = false;
  },
   async submitReview() {
    let validmarker = true;

    
    if(!this.consent){
      this.consentlid = false;
      validmarker = false;
    }


    if (!this.tel || this.tel.length < 18 ) {
      this.telvalid = false;
      validmarker = false;
    }
    else{
       this.telvalid = true;
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
    





    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('tel', this.tel);

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


          this.dialogVisible = true;
    try {
      const response = await axios.post('/api/simpleform.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
          }
        });

          const newReview = response.data;
          this.reviews.push(newReview);
          this.dialogVisible = true;
          this.resetFormFields();
  
        } catch (error) {
          console.error('Error submitting review:', error);
      }
    
    }

    }
};
</script>


