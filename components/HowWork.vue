<template>
   <section class="section n7" id="id3">
    <div class="container">
        <div class="n7-title">
            Как мы работаем?
        </div>
        <div class="n7-com nw">
            <div class="n7-row" v-for="(item, index) in items" :key="index">
                <div class="n7-im-box">
                    <div class="numen7">
                        {{ item.nume}}
                    </div>
                    <img :src="item.image" alt="" class="n7-im">
                </div>
                
                <div class="n7-tit">
                    {{ item.title}}
                </div>
                <div class="n7-texti">
                    {{ item.text}}
                </div>
            </div>
        </div>

        <div class="n7-com nm">
            <v-slide-group
             class="swiper4" 
             @change="handleSlideChange"
             
             >
                <div class="swiper-wrapper">
                    <v-slide-item class="swiper-slide" v-for="(item, index) in items" :key="index">
                        <div class="n7-row">
                            <div class="n7-im-box">
                                <div class="numen7">
                                    {{ item.nume}}
                                </div>
                                <img :src="item.image" alt="" class="n7-im">
                            </div>
                            
                            <div class="n7-tit">
                                {{ item.title }}
                            </div>
                            <div class="n7-texti">
                                {{ item.text }}
                            </div>
                        </div>
                    </v-slide-item>
                </div>
            </v-slide-group>
            <div class="n2-st4">
            <div class="nuberi">
              <div class="kla">{{ activeSlideIndex + 1}}</div>
              <div class="ski">/6</div>
            </div>

            <div class="kjs1">
                <div class="n2-l">
              <div class="swiper-pagination swiper-pagination-n4ias swiper-pagination-bullets">
                <span
                  class="swiper-pagination-bullet"
                  v-for="(item, index) in items"
                  :key="index"
                  :class="{ 'swiper-pagination-bullet-active': index === activeSlideIndex }"
                  @click="goToSlide(index)"
                ></span>
              </div>
            </div>
                      <div class="n2-r">
                          <img src="/images/n2-pre1v.svg" alt="" class="next4i1" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-e88cab0cf5c81e210" aria-disabled="false">
                      </div>
                </div>
          </div>

        </div>
    </div>
</section>
</template>

  

<script>
export default {
  name: 'HowWork',
  data() {
      return {
        activeSlideIndex: 0,
        items: [
          { title: "Оставляете заявку на сайте", text: "Менеджер свяжется с вами для обсуждения задачи.", image: require('../images/img_v2/imn7_1.svg'), nume: "01" },
          { title: "Анализ вакансии и рынка труда", text: "Разрабатываем стратегию подбора, проводим анализ рынка вакансий, прорабатываем ключевые пункты резюме. ", image: require('../images/img_v2/imn7_2.svg'), nume: "02"},
          { title: "Заключение договора", text: "Уточняем детали по вакансии, проводим анализ рынка вакансий, разрабатываем стратегию подбора", image: require('../images/img_v2/imn7_3.svg'), nume: "03" },
          { title: "Подбор", text: "Ищем кандидатов по внутренним базам и внешним источникам, проводим отбор и тестирование. Представляем финальных кандидатов заказчику и помогаем принять решение.", image: require('../images/img_v2/imn7_4.svg'), nume: "04" },
          { title: "Сопровождение", text: "Помогаем адаптироваться сотруднику и поддерживаем связь с заказчиком.", image: require('../images/img_v2/imn7_5.svg'), nume: "05" },
          { title: "Гарантийный период", text: "Бесплатно производим одну замену в случае увольнения сотрудника", image: require('../images/img_v2/imn7_6.svg'), nume: "06" },
        ],
      };
    },
    methods: {
    handleSlideChange(newIndex) {
      this.activeSlideIndex = newIndex; // Обновляем activeSlideIndex при изменении слайда
    },
    goToSlide(index) {
      this.activeSlideIndex = index;
    },
  },
};
</script>

