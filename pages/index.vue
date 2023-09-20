<template>
   <v-app class="extra-app-class">
    <v-main>
       <MainBlock />
       <ViaContent/>
       <MobailSlider/>
       <LentBtn/>
       <CaseSlider/>
       <WhyTrust/>
       <EdgeBl/>
       <LentForm/>
       <HowWork/>
       <NashaComanda/>
       <VacansyTo/>
       <OtzMain/>
       <NashiPartneru/>
       <EndFooter/>
    </v-main>
    <FormSection />
    <PolitPop/>
    <FankBl/>
  </v-app>
</template>

<script>
import MainBlock from '~/components/MainBlock.vue';
import FormSection from '~/components/FormSection.vue';

import ViaContent from '~/components/ViaContent.vue';
import MobailSlider from '~/components/MobailSlider.vue';
import LentBtn from '~/components/LentBtn.vue';
import CaseSlider from '~/components/CaseSlider.vue';

import WhyTrust from '~/components/WhyTrust.vue';
import EdgeBl from '~/components/EdgeBl.vue';
import LentForm from '~/components/LentForm.vue';

import HowWork from '~/components/HowWork.vue';
import NashiPartneru from '~/components/NashiPartneru.vue';

import EndFooter from '~/components/EndFooter.vue';

import NashaComanda from '~/components/NashaComanda.vue';
import VacansyTo from '~/components/VacansyTo.vue';
import OtzMain from '~/components/OtzMain.vue';


import PolitPop from '~/components/PolitPop.vue';
import FankBl from '~/components/FankBl.vue';


export default {

  components: {
    MainBlock,
    VacansyTo,
    FormSection,
    ViaContent,
    MobailSlider,
    LentBtn,
    CaseSlider,
    WhyTrust,
    EdgeBl,
    LentForm,
    HowWork,
    NashaComanda,
    NashiPartneru,
    EndFooter,
    OtzMain,
    PolitPop,
    FankBl

  },

};
</script>

<style>
  .extra-app-class{
    z-index: 0;
  }

</style>
