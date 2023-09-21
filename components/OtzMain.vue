<template>
    <section class="section-comment-line section universalslider" id="appy">
      <div class="container">

        <div class="otz-title">
          Отзывы
        </div>

  
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

        
      <v-slide-item v-if="isWideScreen">
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
              <div class="check-text">Я согласен на обработку <span class="exit-btn openpolz" >Персональных данных</span></div>
            </div>
          
           
          <v-btn  type="submit" class="button-send-otz section-btn section-btn-v1 btn_otz" @click.prevent="submitReview">Оставить комментарий</v-btn>
        </v-form>

      </v-slide-item>

      <v-slide-item
        v-for="(item, index) in Otz"
        :key="index"
        :active-class="'v-slide-item--active'"
        v-if="isWideScreen"
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



    <v-carousel  @change="handleSlideChange"   v-if="isWideScreen == false">
            <v-carousel-item v-for="(item, index) in Otz" :key="index">
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
            </v-carousel-item>
          </v-carousel>
          <div class="n2-st4" v-if="isWideScreen == false">
            <div class="nuberi">
              <div class="kla">{{ activeSlideIndex + 1}}</div>
              <div class="ski">/3</div>
            </div>
          </div>

    
    <v-form v-if="isWideScreen == false" ref="form" @submit.prevent="submitReview" class="my-form formotz formotz-mobile">
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
              <div class="check-text">Я согласен на обработку <span class="exit-btn openpolz" >Персональных данных</span></div>
            </div>
          
           
          <v-btn type="submit" class="button-send-otz section-btn section-btn-v1 btn_otz" @click.prevent="submitReview">Оставить комментарий</v-btn>
    </v-form>

      <!--
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
    </v-dialog>-->

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
        activeSlideIndex: 0,
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
          {
            man: 'Галия Бабакаева',
            company: '(кандидат)',
            image:  '',
            size: '400px',
            text: 'Хочу поделиться своим положительным опытом взаимодействия с HR-специалистом Татьяной Филин. С самого начала моего поиска работы Татьяна произвела очень приятное впечатление. Ее коммуникативные навыки и внимательность к деталям создали комфортную атмосферу в процессе собеседования. Меня впечатлило то, что она всегда была на связи и оперативно отвечала на мои вопросы. Татьяна также предоставила мне полную информацию о компании, включая ее ценности, корпоративную культуру и ожидания от будущего сотрудника. Это позволило мне принять взвешенное решение о приеме предложенной работы. Даже после моего трудоустройства Татьяна постоянно остается на связи, интересуется, все ли у меня в порядке, как у меня продвигаются дела, насколько комфортно мне работается и есть ли что-то, чем она может мне помочь. Я впервые встречаю такого специалиста настолько небезразличного и очень внимательного. Я хотела бы выразить свою искреннюю благодарность Татьяне Филин за ее компетентность и заботу. Она делает HR-процесс гораздо более приятным и успешным для соискателей. Очень ее рекомендую как HR-специалиста.',
          },
        ],
        reviewType: 'client',
        nameOrCompany: '',
        comment: '',
        file: null,
        consent: false,
        requiredRule: v => !!v || 'Это поле обязательно к заполнению',
       // dialogVisible: false,
        requiredConsentRule: v => !!v || 'Необходимо дать согласие на обработку персональных данных',
        reviews: [], // Инициализируем массив для хранения комментариев
        enlargedImageVisible: false,
        enlargedImageSrc: '',
        isWideScreen: true,
      };
    },
      mounted() {
        this.updateScreenSize();
      window.addEventListener('resize', this.updateScreenSize);
    },
    methods: {
      handleSlideChange(newIndex) {
      this.activeSlideIndex = newIndex; // Обновляем activeSlideIndex при изменении слайда
    },
      updateScreenSize() {
      this.isWideScreen = window.innerWidth > 767;
      },
      handleFileChange(event) {
        this.file = event.target.files[0];
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
    formData.append('name', this.reviewType);
    formData.append('company', this.nameOrCompany);
    formData.append('comment', this.comment);

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

    if (this.file) {
      formData.append('file', this.file);
    }
    this.$store.dispatch('TOGGLE_FANK', true);
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
     // this.dialogVisible = true;
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
    }
    };
  
  
  
  </script>
  
  
  
  
  