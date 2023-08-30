<template>
    <v-container class="section s3 nm">
        <v-col cols="6">
          <div class="s3-l-t">
            Почему рекрутинг <br> с SCG эффективнее?
          </div>
          <div class="s3-r-b b1">
            При поиске специалистов мы не ограничиваемся одной площадкой. Задействуем различные рекламные каналы, соцсети, участвуем в специализированных выставках, форумах и семинарах. Ведем переговоры с сотрудникам компаний выбранных сфер бизнеса.
          </div>
          <div class="s3-r-b b2">
            Помимо hr-менеджеров собеседования с кандидатами проводят профильные руководители определенных направлений нашей компании. Таким образом мы предоставляем вам список самых сильных претендентов на должность.
          </div>
        </v-col>
          <v-carousel  @change="handleSlideChange">
            <v-carousel-item v-for="(item, index) in items" :key="index">
              <div class="slidi">
                <div class="swiper3-t">
                  <div class="swiper3-l">
                    {{ index + 1 }}
                  </div>
                  <div class="swiper3-r">
                    {{ item.text }}
                  </div>
                </div>
                <img :src="item.image" class="imper">
              </div>
            </v-carousel-item>
          </v-carousel>
          <div class="n2-st4">
            <div class="nuberi">
              <div class="kla">{{ activeSlideIndex + 1}}</div>
              <div class="ski">/5</div>
            </div>
          </div>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'MobailSlider',
    data() {
      return {
        activeSlideIndex: 0,
        items: [
          { text: "Составляем “портрет” идеального кандидата, на основании пожеланий клиента", image: require('../images/img_v2/rrepi1.png') },
          { text: "Отбираем подходящих претендентов и проводим собеседования", image: require('../images/img_v2/repi2.png') },

          { text: "Передаём вам список кандидатов, успешно прошедших отбор", image: require('../images/img_v2/repi1.png') },
          { text: "Готовим отчётность и предоставляем гарантии после трудоустройства", image: require('../images/img_v2/repi2.png') },
          { text: "Помогаем в адаптации нового сотрудника", image: require('../images/img_v2/repi3.png') },
        ],
      };
    },
    methods: {
    handleSlideChange(newIndex) {
      this.activeSlideIndex = newIndex; // Обновляем activeSlideIndex при изменении слайда
    },
  },
  };
  </script>