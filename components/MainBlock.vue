<template>

  
<section class="section section-main">
  <div class="container">
    <header>
    <div class="header">
        <v-navigation-drawer v-model="popmenu" class="header-bottom menu-act menu-pas" permament>
          <div  class="header-bottom menu-act menu-pas">
            <div class="header-bottom-ro-t">
                <div class="header-bottom-ro-t-non"></div>
                <a href="https://s-vitagroup.ru/" target="_blank" class="logo-link">
                    <img src="../images/img_v2/logo.svg" alt="/" class="logo">
                </a>
                <div class="menu-ic ex" @click="closeDialogmenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="menu-w">
                <ul>
                    <li>
                        <a href="#id1" class="header-b-link">
                            Наши услуги
                        </a>
                    </li>
                    <li>
                        <a href="#id2" class="header-b-link">
                            Кейсы
                        </a>
                    </li>
                    <li>
                        <a href="#id3" class="header-b-link">
                            Как мы работаем
                        </a>
                    </li>
                    <li>
                        <a href="#id4" class="header-b-link">
                            О компании
                        </a>
                    </li>
                    <li>
                      <a href="#appy" class="header-b-link">
                          Отзывы
                      </a>
                    </li>
                    <li>
                        <a href="#cont" class="header-b-link">
                            Контакты
                        </a>
                    </li>
                    <li>
                        <a href="tel:+78002224110" class="phone link-t">
                            <div class="bar-li deeep">8 800 222-41-10</div>
                        </a>
                    </li>
                    <li>
                    <div class="htc-r-b">
                            <a href="https://wa.me/+79217985022" class="htc-l1">
                                <img src="../images/img_v2/whatsapp.svg" alt="" class="htc-im2">
                            </a>
                            <!--<a href="https://t.me/SVITAHR_bot" class="htc-l2">
                                <img src="../images/img_v2/telegram.svg" alt="" class="htc-im3">
                            </a>-->
                        </div>
                    </li>
                </ul>
                <div class="header-top-right ">
                    <div class="header-top-rowb header-top-rowb2">
                        <div class="header-top-col">
                            <div class="bar-li">Работаем Пн-Пт: 09:00-18:00</div>
                        </div>
                        <div class="header-top-col">
                            <a href="https://goo.gl/maps/sRAZUenx9yZTzbn76" class="link-t">
                                <div class="bar-li">Санкт-Петербург, Петровская коса, д. 1, <br> корп. 1, лит. Р (БЦ
                                    «Петровский»)</div>
                            </a>
                        </div>
                        <div class="exto1">
                            <div class="btn-q ex popup-simple">
                                Отправить заявку
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
           
        </v-navigation-drawer>

        <div class="header-top">
            <div class="header-top-left">
                <a href="https://s-vitagroup.ru/" target="_blank" class="logo-link">
                    <img src="../images/img_v2/logo.svg" alt="" class="logo">
                </a>
                <div class="pre-title">
                    Консалтинговая <br>
                    рекрутинговая компания
                </div>
            </div>
            <div class="header-top-com">
                <div class="header-top-center">
                    <div class="htc-l exto1">
                        <a href="tel:+78002224110" class="htc-t">
                            <img src="../images/img_v2/telim.svg" alt="" class="htc-im1">
                            <div class="htc-nume">
                                8 800 222-41-10
                            </div>
                        </a>
                        <div class="htc-b trige ex popup-simple">
                            Заказать обратный звонок
                        </div>
                    </div>
                    <div class="htc-r">
                        <div class="htc-r-t">
                            Задайте вопрос, <br> 
                            мы онлайн!
                        </div>
                        <div class="htc-r-b">
                            <a href="https://wa.me/+79217985022" class="htc-l1">
                                <img src="../images/img_v2/whatsapp.svg" alt="" class="htc-im2">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="header-top-right">
                    <div class="header-top-col">
                        <div class="header-top-rowb header-top-rowb2">
                            <div class="header-top-coli">
                                <img src="../images/img_v2/block1-1-ic2.svg" alt="" class="header-icon-top">
                                <div class="bar-li">Работаем Пн-Пт: 09:00-18:00</div>
                            </div>
                            <div class="header-top-coli">
                                <img src="../images/img_v2/block1-1-ic3.svg" alt="" class="header-icon-top">
                                <a href="https://goo.gl/maps/sRAZUenx9yZTzbn76" class="link-t">
                                    <div class="bar-li">Санкт-Петербург, Петровская коса, д. 1, <br> корп. 1, лит. Р (БЦ
                                        «Петровский»)</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom impn header-full">
            <ul>
                <li>
                    <a href="#id1" class="header-b-link">
                        Наши услуги
                    </a>
                </li>
                <li>
                    <a href="#id2" class="header-b-link">
                        Кейсы
                    </a>
                </li>
                <li>
                    <a href="#id3" class="header-b-link">
                        Как мы работаем
                    </a>
                </li>
                <li>
                    <a href="#id4" class="header-b-link">
                        О компании
                    </a>
                </li>
                <li>
                    <a href="#appy" class="header-b-link">
                        Отзывы
                    </a>
                </li>
                <li>
                    <a href="#cont" class="header-b-link">
                        Контакты
                    </a>
                </li>
            </ul>

        </div>

        <div class="header-topi">
            <div class="header-topi-left">
                <a href="https://s-vitagroup.ru/" target="_blank" class="logo-link">
                    <img src="../images/img_v2/logo.svg" alt="" class="logo">
                </a>
            </div>
            <div class="header-topi-right">
                <div class="header-topi-row">
                    <div class="header-topi-col">
                        <a href="tel:+78002224110" class="phone link-t">
                            <div class="bar-li">8 800 222-41-10</div>
                        </a>
                    </div>
                    <div class="header-topi-col">
                        <div class="bar-li">Работаем Пн-Пт: 09:00-18:00</div>
                    </div>
                </div>
            </div>

            <div class="menu-ic ex cross-act" @click="openDialogmenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

    </div>

</header>

    <div class="section-cont section-cont-v1">
      <div class="section-row section-row-l">
        <div class="section-t">
          <div class="section-tit nw">
          Подбор топ-персонала с оплатой после трудоустройства
          </div>
          <div class="section-tit nm">
          Подбор топ-персонала с оплатой после трудоустройства
          </div>

          <div class="dopic-bl">
            <div class="dopic nm">
              Перезвоним и уточним <br> детали для подготовки <br> персонального <br> предложения
            </div>
          </div>
          
          
        </div>

        <div class="section-b v2">
          <div class="section-b-row">
            <div class="section-btn-row ">
              <div class="boom exto1"><div class="section-btn section-btn-v1 ex popup-simple">Подобрать персонал</div></div>

              <img src="../images/img_v2/nmstr.png" alt="" class="nmstr nm">
              
           <!--   <div class="boom exto2">    <div class="section-btn section-btn-v12 ex">Рассчитать стоимость</div></div>  -->
            </div>
          </div>
        </div>

        <div class="section-c">



        <div class="section-c-row">


        <div class="section-c-row-t">
          <div class="section-c-col">
            <div class="li-ic3">
              <img src="../images/img_v2/isi1.svg" alt="">
            </div>
            <div class="section-c-text">
              От уникальных специалистов <br> до руководителей
            </div>
          </div>

          <div class="section-c-col">
            <div class="li-ic3">
              <img src="../images/img_v2/isi2.svg" alt="">
            </div>
            <div class="section-c-text">
                21 день - средний срок <br> закрытия вакансий
            </div>
          </div>
        </div>


            <div class="section-c-row-t">
              <div class="section-c-col">
                <div class="li-ic3">
                  <img src="../images/img_v2/isi3.svg" alt="">
                </div>
                <div class="section-c-text">
                      Гарантийный период на замену <br> от 1-го месяца до полугода
                </div>
              </div>

              <div class="section-c-col">
                <div class="li-ic3">
                  <img src="../images/img_v2/isi4.svg" alt="">
                </div>
                <div class="section-c-text">
                Собственная база <br> эффективных специалистов 
                </div>
              </div>


            </div>


            <div class="section-c-row-b">
            <div class="section-c-col">
                <div class="li-ic3">
                  <img src="../images/img_v2/simb2.svg" alt="">
                </div>
                <div class="section-c-text">
                Индивидуальный подход <br>
                в выборе структуры <br>
                собеседования кандидата
                </div>
              </div>

              <div class="section-c-col">
                <div class="li-ic3">
                  <img src="../images/img_v2/simb3.svg" alt="">
                </div>
                <div class="section-c-text">
              
                Опытные HR-специалисты <br>
                во всех областях
                </div>
              </div>

          </div>







          </div>
        </div>
        <div class="section-b v1">
          <div class="section-b-row">
            <div class="section-btn-row">
              <div class="boom exto1"><div class="section-btn section-btn-v1 ex popup-simple">Подобрать персонал</div></div>
            <!--  <div class="boom exto2">    <div class="section-btn section-btn-v12 ex">Рассчитать стоимость</div></div> -->
              <div class="slimi">
                <img src="../images/img_v2/sl-str.svg" alt="" class="slimi-at1">
                <div class="slimi-at2">
                  Перезвоним и уточним <br> детали для подготовки <br> персонального предложения
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-row section-row-r popup-simple">
        <img src="../images/img_v2/f1.svg" alt="" class="section-row-r-img popup-simple">
      </div>
    </div>


    <div class="section-cont section-cont-v2" id="id1">
      <div class="section-row section-row-title">
        <div class="section-row-tit">
          Наши услуги
        </div>
      </div>
      <v-expansion-panels class="section-row">

        <v-expansion-panel class="section-colii section-colii-n">
          <div class="section-col">
            <div class="section-tt">
              <div class="section-t">
                Подбор персонала
              </div>
              <div class="section-sub">
                Найдем лучшего игрока в вашу команду
              </div>
            </div>
  
            <v-expansion-panel-content class="section-c exto1">
              <ul>
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Рекрутинг - отбор, оценка кандидатов, сопровождение и помощь в адаптации
                  </div>
                </li>
  
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Executive Search - целенаправленный поиск среди специалистов высокого уровня. Учитываем все особые требования, в том числе конфеденциальность. Используется  при подборе топ-менеджеров, руководителей или специалистов узкого профиля
                  </div>
                </li>
  
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    HeadHunting - один из видов Executive Search, проводим точечную персональную работу с претендентом. Используется, когда есть потребность в конкретном кандидате.
                  </div>
                </li>
              </ul>
             
         <div class="section-btn section-btn-v12 ex popup-simple">Узнать больше</div>


            </v-expansion-panel-content>
            <v-expansion-panel-header class="section-b">
              <div class="sec-texti">
                Узнать больше
              </div>
              <img src="../images/img_v2/block2-ic-arr.svg" alt="" class="sec-ic-arr">
            </v-expansion-panel-header>
          </div>
        </v-expansion-panel>
        <v-expansion-panel class="section-colii section-colii-n">
          <div class="section-col">
            <div class="section-tt">
              <div class="section-t">
                Тестирование и оценка кандидатов
              </div>
              <div class="section-sub">
                Повысим эффективность бизнеса с помощью анализа работы сотрудников
              </div>
            </div>
  
            <v-expansion-panel-content class="section-c exto1">
              <ul>
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Анализ работы текущих сотрудников компании
                  </div>
                </li>
  
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Подготовка и внедрение системы оценки будущих сотрудников
                  </div>
                </li>
  
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Тестирование кандидатов
                  </div>
                </li>
  
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Отчетность
                  </div>
                </li>

              </ul>
              <div class="section-btn section-btn-v12 ex popup-simple">Узнать больше</div>
            </v-expansion-panel-content>
            <v-expansion-panel-header class="section-b">
              <div class="sec-texti">
                Узнать больше
              </div>
              <img src="../images/img_v2/block2-ic-arr.svg" alt="" class="sec-ic-arr">
            </v-expansion-panel-header>
          </div>
        </v-expansion-panel>
        <v-expansion-panel class="section-colii section-colii-n">
          <div class="section-col">
            <div class="section-tt">
              <div class="section-t">
                HR - консалтинг и аудит
              </div>
              <div class="section-sub">
                Организуем эффективную работу сотрудников
              </div>
            </div>
  
            <v-expansion-panel-content class="section-c exto1">
              <ul>
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Анализ и оптимизация процессов найма
                  </div>
                </li>
  
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Разработка и внедрение организационной структуры компании
                  </div>
                </li>
  
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Проведение тренингов и обучение сотрудников
                  </div>
                </li>
              </ul>
              <div class="section-btn section-btn-v12 ex popup-simple">Узнать больше</div>
            </v-expansion-panel-content>
            <v-expansion-panel-header class="section-b">
              <div class="sec-texti">
                Узнать больше
              </div>
              <img src="../images/img_v2/block2-ic-arr.svg" alt="" class="sec-ic-arr">
            </v-expansion-panel-header>
          </div>
        </v-expansion-panel>
        <v-expansion-panel class="section-colii">
          <div class="section-col">
            <div class="section-tt">
              <div class="section-t">
                Адаптация и мотивация (материальная и нематериальная)

              </div>
              <div class="section-sub">
                Снизим текучесть кадров, повысим эффективность работы сотрудников

              </div>
            </div>
  
            <v-expansion-panel-content class="section-c exto1">
              <ul>
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Разработка стандартов по адаптации персонала.

                  </div>
                </li>
  
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Сопровождение на этапе адаптации сотрудника

                  </div>
                </li>
  
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Разработка системы материальной и нематериальной мотивации

                  </div>
                </li>

              </ul>
              <div class="section-btn section-btn-v12 ex popup-simple">Узнать больше</div>
            </v-expansion-panel-content>
            <v-expansion-panel-header class="section-b">
              <div class="sec-texti">
                Узнать больше
              </div>
              <img src="../images/img_v2/block2-ic-arr.svg" alt="" class="sec-ic-arr">
            </v-expansion-panel-header>
          </div>
        </v-expansion-panel>
        <v-expansion-panel class="section-colii">
          <div class="section-col">
            <div class="section-tt">
              <div class="section-t">
                Организация корпоративных мероприятий под ключ

              </div>
              <div class="section-sub">
                Объединим коллектив и создадим доброжелательную атмосферу

              </div>
            </div>
  
            <v-expansion-panel-content class="section-c exto1">
              <ul>
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Тимбилдинг
                  </div>
                </li>
  
                <li>
                  <img src="../images/img_v2/notpr.svg" alt="" class="img-ic-ulli">
                  <div class="sec-text">
                    Организация любых праздников, Дня рождения компании, Нового года

                  </div>
                </li>
              </ul>
              <div class="section-btn section-btn-v12 ex popup-simple">Узнать больше</div>
            </v-expansion-panel-content>
            <v-expansion-panel-header class="section-b">
              <div class="sec-texti">
                Узнать больше
              </div>
              <img src="../images/img_v2/block2-ic-arr.svg" alt="" class="sec-ic-arr">
            </v-expansion-panel-header>
          </div>
        </v-expansion-panel>

      </v-expansion-panels>
    </div>
  </div>
</section>


</template>
  
  <script>
  export default {
    name: 'MainBlock',
    data() {
      return {
        popmenu: false
      };
    },
    methods: {
      openDialogmenu() {
        this.popmenu = true;
      },
      closeDialogmenu() {
        this.popmenu = false;
      },
    }
  };

  /*
// Добавляем скрипты в head
export const head = {
  script: [
    {
      innerHTML: `
        (function(w,d,s,l,i,cid){w[l]=w[l]||[];w.pclick_client_id=cid;w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P23G9N', '91157');
      `,
    },
    {
      innerHTML: `
        (function(w,d,n,c){w.CalltouchDataObject=n;w[n]=function(){w[n]["callbacks"].push(arguments)};if(!w[n]["callbacks"]){w[n]["callbacks"]=[]}w[n]["loaded"]=false;if(typeof c!=="object"){c=[c]}w[n]["counters"]=c;for(var i=0;i<c.length;i+=1){p(c[i])}function p(cId){var a=d.getElementsByTagName("script")[0],s=d.createElement("script"),i=function(){a.parentNode.insertBefore(s,a)},m=typeof Array.prototype.find === 'function',n=m?"init-min.js":"init.js";s.type="text/javascript";s.async=true;s.src="https://mod.calltouch.ru/"+n+"?id="+cId;if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",i,false)}else{i()}}})(window,document,"ct","4l2gq3le");
      `,
    },
    {
      innerHTML: `
        (function ab(){ var request = new XMLHttpRequest(); request.open('GET', "https://scripts.botfaqtor.ru/one/38065", false); request.send(); if(request.status == 200) eval(request.responseText); })();
      `,
    },
    {
      innerHTML: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MDNHP73');
      `,
    },
    {
      innerHTML: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(92630779, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
      `,
    },
    {
      innerHTML: `
        (function (d, w) {
        var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://qoopler.ru/index.php?ref="+d.referrer+"&page=" + encodeURIComponent(w.location.href);
        n.parentNode.insertBefore(s, n);
        })(document, window);
      `,
    },
  ],
}*/
  </script>
  
