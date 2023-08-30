<template>
    <section class="section-comment-line section">
      <div class="container">
  
        <v-dialog v-model="enlargedImageVisible" max-width="800" @input="handleDialogClose">
        <v-img :src="enlargedImageSrc" class="enlarged-image" contain>
          <v-btn icon color="primary" @click="closeEnlargedImage">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-img>
      </v-dialog>

      <v-slide-group
        :cycle="false"
        :show-arrows="true"
      >
        <template v-slot:prev>
          <img src="../images/img_v2/n2-prev.svg" alt="" class="n2-prev">
        </template>
        <template v-slot:next>
          <img src="../images/img_v2/n2-next.svg" alt="" class="n2-next">
        </template>

      <v-slide-item>
          <v-form ref="form" @submit.prevent="submitReview" class="my-form formotz">
          <v-radio-group v-model="reviewType" row>
            <v-radio label="Клиент" value="client"></v-radio>
            <v-radio label="Кандидат" value="candidate"></v-radio>
          </v-radio-group>
          <v-text-field
            v-model="nameOrCompany"
            :label="reviewType === 'client' ? 'Компания клиента' : 'ФИО кандидата'"
            required
            :rules="[requiredRule]"
            class="my-input"
          ></v-text-field>
          <v-textarea
            v-model="comment"
            label="Текст отзыва"
            required
            :rules="[requiredRule]"
            class="my-input"
          ></v-textarea>
          <v-file-input
              v-model="file"
              :label="file ? file.name : 'Выберите файл'"
              accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
              @change="handleFileChange"
              class="my-input input-dnld gofile"
            >
            </v-file-input>
            <div class="ckeck-bl">
              <v-checkbox
              v-model="consent"
              :rules="[requiredConsentRule]"
              class="my-checkbox"
            >
            </v-checkbox>
              <div class="check-text">Я согласен на обработку <span class="exit-btn" >Персональных данных</span></div>
            </div>
          
           
          <v-btn  type="submit" class="button-send-otz section-btn section-btn-v1 btn_otz" @click.prevent="submitReview">Оставить комментарий</v-btn>
        </v-form>

      </v-slide-item>

      <v-slide-item
        v-for="(item, index) in Otz"
        :key="index"
        :active-class="'v-slide-item--active'"
      >
      <div class="otz-bl">
        <div class="otz-cont">
          <div class="otz-row">
            <div class="otz-top">
              <img src="../images/im/kav.svg" alt="" class="otz-top-left">
              <div class="otz-top-r">
                <div class="otz-text">{{item.text}}</div>
                <div class="otz-bottom">
              <img :src="item.image" alt="" class="otz-logo">
              <div class="otz-bottom-b">
                <div class="otz-man">{{item.man}}</div>
                <div class="otz-company">{{item.company}}</div>
              </div>
            </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>

      </v-slide-item>
    </v-slide-group>

  
    <v-dialog v-model="dialogVisible" max-width="400" class="my-dialog fank">
      <v-card>
        <v-card-title>Спасибо за отзыв</v-card-title>
        <v-card-text>
          Ваш отзыв был успешно отправлен. Благодарим вас!
        </v-card-text>
        <v-card-actions>
          <v-btn class="section-btn section-btn-v1" @click.stop="closeDialog">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

      </div>
    </section>
    
    
  
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    theme: {
    defaultTheme: 'light'
  },
  activeSlide: 0,
    data() {
      return {
        Otz: [
          {
            man: 'И. Г. Макарчук',
            company: 'ООО «Би Джи Логистик»',
            image:  require('../images/im/logo1.svg'),
            text: 'Компания ООО «Би Джи Логистик» выражает благодарность Рекрутинговой компании S-Vita Consulting Group за качественную работу по закрытию вакансий: операционный директор, начальник склада, оператор склада. Данные позиции были закрыты за 8 рабочих дней. Все кандидаты полностью устраивали по профессиональным и личностным качествам. Выражаем благодарность за оперативное и качественное решение поставленных задач в подборе персонала. Желаем Вашей компании дальнейшего успеха и рекомендуем как надежного партнера.',
          },
          {
            man: 'Аринович О.А',
            text: 'ООО «Дзен Эколоджи» благодарит руководство и сотрудников компании С-Вита за плодотворное взаимодействие. Работа HR-специалистов компании отвечает заданному уровню, задача была выполнена качественно, в установленные сроки. Рекомендуем С-Виту как надежного поставщика услуг по подбору персонала.',
            image:  require('../images/im/logo2.svg'),
            company: 'ООО «Дзен Эколоджи»',
          },
        ],
        reviewType: 'client',
        nameOrCompany: '',
        comment: '',
        file: null,
        consent: false,
        requiredRule: v => !!v || 'Это поле обязательно к заполнению',
        dialogVisible: false,
        requiredConsentRule: v => !!v || 'Необходимо дать согласие на обработку персональных данных',
        reviews: [], // Инициализируем массив для хранения комментариев
       // sessionData: this.getSessionData(), // Получаем данные сессии из локального хранилища
        enlargedImageVisible: false,
         enlargedImageSrc: '',
      };
    },
    created() {
      // Вызываем функцию для получения комментариев при создании компонента
      this.getComments();
    },
    methods: {
      getFileUrl(fileId) {
      return `/api/uploads/${fileId}`; // Замените на реальный путь к файлу на сервере
    },
      async getComments() {
        try {
          const response = await axios.get('/api/get.php'); // Замените на реальный путь к PHP-файлу
          this.reviews = response.data; // Обновляем массив reviews с полученными данными
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
      },
      deleteReview(index) {
      // Удаляем комментарий по индексу
      this.reviews.splice(index, 1);
      },
      handleFileChange(event) {
        this.file = event.target.files[0];
      },
      closeDialog() {
        this.dialogVisible = false;
      },
      getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      },
  
      setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/`;
      },
      openEnlargedImage(imageFileName) {
      this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.enlargedImageSrc = this.getFileUrl(imageFileName);
      this.enlargedImageVisible = true;
    },
    closeEnlargedImage() {
      this.enlargedImageVisible = false;
      this.enlargedImageSrc = '';
    },
    handleDialogClose(val) {
      if (!val) {
        this.scrollToPosition();
      }
    },
    scrollToPosition() {
      window.scrollTo(0, this.scrollPosition);
    },
  
      async submitReview() {
        
        if (!this.$refs.form.validate() || !this.consent) {
          console.log('Submit aborted');
          return;
        }
  
        if (!this.nameOrCompany || !this.comment) {
          console.log('Required fields are missing');
          return;
        }
        const formData = new FormData();
        formData.append('reviewType', this.reviewType);
        formData.append('nameOrCompany', this.nameOrCompany);
        formData.append('comment', this.comment);
        if (this.file) {
          formData.append('file', this.file);
        }
  
        try {
          // Отправляем данные на сервер
          const response = await axios.post('/api/push.php', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
  
          // Обработка успешного ответа
          const newReview = response.data;
          this.reviews.push(newReview);
          this.dialogVisible = true;
          this.resetFormFields();
  
        } catch (error) {
          // Обработка ошибок
          console.error('Error submitting review:', error);
        }
      },
      canEditOrDelete(review) {
        // Проверяем, имеет ли текущий пользователь право редактировать/удалять этот отзыв
        return review.userId === this.sessionData.userId;
      },
      editReview(index) {
        console.log(index);
        // Редактирование отзыва
      },
    },
  };
  
  
  </script>
  
  
  
  
  