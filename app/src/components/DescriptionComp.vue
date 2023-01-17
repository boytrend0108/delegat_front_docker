<template>
  <section class="description">
    <p class="description__note">Описание товара: наименование; марка; модель; код ТНВЭД; количество; класс опасности
      (если есть); ссылка на товар (если есть)</p>
    <input type="text-aria" class="text-aria">
    <div class="downloud">
      <p class="downloud__note">Если есть файлы с описанием и перечнем (инвойс, упаковочный лист), добавьте их сюда</p>
      <div class="downloud__box"></div>
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

</style>