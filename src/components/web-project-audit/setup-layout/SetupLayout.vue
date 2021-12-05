<template>
  <div class="css-setup-layout-wrap">
    <div class="css-setup-layout-con">
      <div class="css-setup-layout-cur">
        <div class="css-setup-layout-tit">
          {{ setupList[currentAcc].title }}
        </div>
        <div class="css-setup-layout-legend">
          {{ setupList[currentAcc].legend[0] }}
        </div>
        <div class="css-setup-layout-legend">
          {{ setupList[currentAcc].legend[1] }}
        </div>
        <div class="css-setup-layout-legend">
          {{ setupList[currentAcc].legend[2] }}
        </div>
        <div class="css-setup-layout-legend">
          {{ setupList[currentAcc].legend[3] }}
        </div>
        <div class="css-setup-layout-legend">
          {{ setupList[currentAcc].legend[4] }}
        </div>
      </div>
    </div>
    <div class="css-setup-layout-cnt">
      <div class="css-setup-layout-cts">
        <span
          class="css-setup-layout-css"
          :class="{ active : item === setupList[currentAcc] }"
          v-for="item in setupList"
          :key="item"
        >
        </span>
      </div>
      <div class="css-setup-layout-rlc">
        <div class="css-setup-layout-rlc-b" @click="backStep">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            data-v-394d1fd8=""
            width="24"
          >
            <path
              fill="#ffffff"
              d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
            ></path>
          </svg>
        </div>
        <div class="css-setup-layout-rlc-b" @click="nextStep">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            data-v-394d1fd8=""
            width="24"
            style="transform: scaleX(-1)"
          >
            <path
              fill="#ffffff"
              d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./SetupLayoutScript.js"></script>

<style src="./SetupLayoutStyle.css"></style>