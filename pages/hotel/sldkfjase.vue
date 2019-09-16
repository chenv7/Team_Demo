
<template>
  <div class="details">
    <dateil/>
    <ditujiud/>
  </div>
</template>

<script>
import dateil from '@/components/hotel/Detailmap'
import ditujiud from '@/components/hotel/jiudianditu'
export default {
  components: {
    dateil,
    ditujiud
  }
};
</script>

<style lang="less" scoped>
.details {
  width: 1000px;
  margin: 0 auto;
  
}
</style>