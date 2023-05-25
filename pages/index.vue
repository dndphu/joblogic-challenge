<script setup lang="ts">
import dataDemo from '@/content/EmployeeData.json'
const employees = computed(() => {
  return dataDemo?.employees
})

const itemActive = ref(employees.value[0])
</script>

<template>
  <div class="home">
    <div class="side-bar">
      <div class="side-bar__logo">
        <img src="@/assets/images/logo/the-godfather.svg" alt="logo" />
      </div>
      <div class="side-bar__list">
        <ul>
          <li
            @click="itemActive = item"
            class="side-bar__list--item"
            :class="[
              { active: JSON.stringify(itemActive) == JSON.stringify(item) },
              { relative: itemActive.colleagues.includes(item.name) },
            ]"
            v-for="(item, index) in employees"
            :key="index"
            :style="`font-size:${item.popularity * 10}px`"
          >
            {{ item?.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="home__banner">
      <img src="@/assets/images/header/godfather.jpg" alt="header-banner" />
    </div>
    <div class="home__content">
      <div class="profile">
        <div class="profile__container">
          <div class="profile__avatar">
            <img :src="`/images/profile/${itemActive.image}`" alt="logo" />
          </div>
          <div class="profile__content">
            <h1 class="name">{{ itemActive?.name }}</h1>
            <div class="popularity">
              <label for="popularity">Popularity</label>
              <progress id="popularity" :value="itemActive?.popularity" max="100">
                {{ itemActive?.popularity }}
              </progress>
            </div>
            <div class="description">
              <h2>Biography</h2>
              {{ itemActive?.biography }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<style scoped lang="scss">
$height: 30vh;
$width-side-bar: 300px;
html {
  font-family: 'Roboto';
}

.home {
  font-family: 'Roboto';
  height: 100%;
  position: relative;
  .side-bar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: $width-side-bar;
    background-color: black;
    opacity: 0.5;
    z-index: 10;
    &__logo {
      height: $height;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__list {
      color: #ffffff;
      margin-top: 40px;
      &--item {
        &.active {
          background-color: #3d3f44;
          color: #00c2ed;
        }
        &.relative {
          color: #00c2ed;
        }
        display: flex;
        justify-content: center;
        padding: 5px 0;
        cursor: pointer;
      }
    }
  }
  &__banner {
    width: 100%;
    height: $height;
    img {
      height: inherit;
      width: 100%;
      object-fit: cover;
    }

  }
  &__content {
    background-color: #2a2b31;
    min-height: calc(100vh - $height);
    position: relative;
    .profile {
      position: absolute;
      top: -70px;
      left: $width-side-bar;
      &__container {
        padding: 30px;
        padding-left: 70px;
        display: flex;
        flex-direction: row;
        max-width: 1100px;
      }
      &__avatar {
        width: 80px;
        height: 80px;
        border: 1px solid #ffffff;
        img {
          width: inherit;
        }
      }
      &__content {
        padding: 0 20px;
        .name,
        .popularity {
          color: #ffffff;
          label {
            font-size: 22px;
            font-weight: 500;
            margin-right: 10px;
          }
          progress {
            width: calc(100% - 158px);
          }
        }
        .popularity {
          margin-top: 20px;
        }
        .description {
          h2 {
            padding-bottom: 20px;
            font-size: 22px;
            font-weight: 500;
          }
          margin-top: 20px;
          color: #ffffff;
          background-color: #12171f;
          padding: 10px;
          line-height: 1.2;
        }
      }
    }
  }
}
</style>
