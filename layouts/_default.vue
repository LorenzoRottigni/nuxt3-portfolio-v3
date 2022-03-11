<template lang="pug">
.container-fluid.p-4.rounded-full.bg-sky-darker.pl-4
  h1.font-bold {{ t('hello', { name: 'A Better Nuxt 3 Starter' }) }}
  h2.font-semibold.text-primary 2nd trans: {{ t('menu.home') }}
  h3.border-gray-200 orangio
  slot
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { getCurrentInstance } from "vue";

const { t, locale, availableLocales } = useI18n({ useScope: "global" });

locale.value = "ru";
//const { t } = useI18n({ useScope: 'global' })
//const vm = getCurrentInstance();
//console.log(vm);
//console.dir(useI18n);
//console.dir(locale);
</script>

<script lang="ts">
export default {
  mounted() {
    //this.$root.$i18n.locale = "ru";
  },
};
</script>

<style lang="sass">
</style>