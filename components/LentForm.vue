<template>
<section class="section n5" id="n5">
    <div class="containei">
        <div class="container">
            <div class="n5-l">
                <div class="n5-t">
                    Долго не можете найти подходящие кадры? <br> Закажите бесплатный мониторинг рынка труда! <br> 
                </div>
                <div class="n5-b">
                    Мы проведем анализ предложений конкурентов, <br> дадим оценку системам мотивации, условиям работы специалиста <br> и составим пошаговый план поиска сотрудника. 
                </div>
            </div>
            <div class="n5-r">
                <section class="section form-well base" date-nameform="base">
                    <form action="/call.php" ref="form"  class="form-call " method="post" novalidate="novalidate" id="form7">
                        <v-text-field
                          v-model="tel"
                          :label="'Телефон'"
                          ref="telInput"
                          required
                          :class="{'totel': true, 'novaid': !telvalid}"
                          v-mask="['+7 (9##) ###-##-##']"
                        ></v-text-field>
                        <v-text-field
                          v-model="name"
                          :label="'Ваше имя'"
                          ref="nameInput"
                          required
                          :class="{'toname': true, 'novaid': !namevalid}"
                        ></v-text-field>
                        <div class="section-btn section-btn-v1 submit form-main-b1 tosendi" @click="submitReview" date-nameform="base">Заказать мониторинг</div>
                    </form>
                  </section>
            </div>
            <div class="n5-r-i"><div class="boom exto1"><div class="section-btn section-btn-v1 submit form-main-b1 tosendi ex popup-simple"  date-nameform="base-up">Оставить заявку</div></div></div>
            
        </div>
    </div>


    <v-dialog v-model="dialogVisible" max-width="400" class="my-dialog fank">
      <v-card>
        <v-card-title>Спасибо за заяку!</v-card-title>
        <v-card-text>
          Ваш заявка была успешно отправлена. <br> Благодарим вас!
        </v-card-text>
        <v-card-actions>
          <v-btn class="section-btn section-btn-v1" @click.stop="closeDialog">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   
</section>
</template>


<script>
import axios from 'axios';
import {mask} from 'vue-the-mask';
export default {
  data() {
    return {
      tel: '',
      name: '',
      telvalid: true,
      dialogVisible: false,
      namevalid: true,
      isActive: true,
      requiredRule: v => !!v || 'Это поле обязательно к заполнению',
    };
  },
  directives: {mask},
  methods: {
  closeDialog() {
    this.dialogVisible = false;
  },
   async submitReview() {
    let validmarker = true;
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


