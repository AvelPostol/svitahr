<template>
    <v-dialog v-model="FankPopPopup" max-width="400"  ref="FankPop" class="my-dialog fank">
      <v-card>
        <v-card-title>Спасибо за заяку!</v-card-title>
        <v-card-text> Ваш заявка была успешно отправлена. <br> Благодарим вас! </v-card-text>
        <v-card-actions><v-btn class="section-btn section-btn-v1" @click="closeDialogfank">Закрыть</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
</template>



<script>
  import { mapGetters } from 'vuex';
 // import { support/*, handleAppClick*/} from '../assets/js/support.js';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['FankPopPopup'])
  },
  mounted() {
  const handleDocumentClick = (event) => {
    const target = event.target;
    if (target && target.classList.contains('openpolz11')) {
    //  support(this, event, '.openpolz11', 'TOGGLE_FANK', true);
      this.$store.dispatch('TOGGLE_FANK', true);
    } else {
     // handleAppClick(this, event, 'FankPop', this.$refs.FankPop, 'TOGGLE_FANK', false);
    }
    };

    document.addEventListener('click', handleDocumentClick);
   /* this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('click', handleDocumentClick);
    });*/
  },
  methods: {
    closeDialogfank(){
      this.$store.dispatch('TOGGLE_FANK', false);
    }
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleAppClickPolzSogl);
  },
  
};
</script>