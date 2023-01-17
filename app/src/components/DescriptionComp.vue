<template>
  <section class="description">
    <p class="description__note">Описание товара: наименование; марка; модель; код ТНВЭД; количество; класс опасности
      (если есть); ссылка на товар (если есть)</p>
    <input type="text-aria" class="text-aria">
    <div class="download">
      <p class="download__note">Если есть файлы с описанием и перечнем (инвойс, упаковочный лист), добавьте их сюда</p>
      <div class="download__box">
        <button class="download__btn">  <img src="@/assets/images/icons/plus.svg" alt="dounload">   </button>
       
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

.description{
  display: flex;
  flex-direction: column;
}

.text-aria{
  height: 15.5rem;
  background-color: $bg-color;
}

.download__btn{
  width: 16rem;
  height: 16rem;
  border: 2px dashed #339DFF;
  border-radius: 1rem;
  background-color: white;
}

</style>