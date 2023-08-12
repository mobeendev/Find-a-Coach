<template>
  <div>
    <section>
      <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @save-data="saveData"></coach-form>
      </base-card>
    </section>
  </div>
</template>
  
  <script>
  import CoachForm from '../../components/coaches/CoachForm.vue';
  
  export default {
    components: {
      CoachForm,
    },
    methods: {
        saveData(formData){
            console.log('registraation component',  formData);
            this.$store.dispatch('coaches/registerCoach', formData);
            this.$router.replace('/coaches');
        }
    }
  };
  </script>