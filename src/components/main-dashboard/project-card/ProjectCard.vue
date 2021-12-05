<template>
  <div class="css-project-card-wrap">
    <div class="css-project-card-header">
      <div class="css-project-card-category"><span>Exchange</span></div>
      <span class="css-project-card-date">2021/11/06 22:52:39</span>
      <div class="css-project-card-more">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          data-v-394d1fd8=""
          width="16"
        >
          <path
            fill="currentColor"
            d="M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="css-project-card-title" @click="showElementDescription()">
      <span>Sundaeswap</span>
    </div>
    <div class="css-project-card-legend">
      <span
        >SundaeSwap is a decentralized exchange protocol for the Cardano
        Network, enabling native token and ADA exchanges for anyone. With its
        protocol, you will be able to swap, stake, lend, borrow, and more in a
        truly decentralized way!</span
      >
    </div>
    <div class="css-project-card-avatar-wrap">
      <div class="css-project-card-avatar-con">
        <img src="./sudae.png" alt="" />
      </div>
    </div>
    <div class="css-project-card-by">
      <span>Proposed by</span>
    </div>
    <div class="css-project-card-foot">
      <span>add1r...skc23lca</span>
      <div class="css-project-card-chat">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          data-v-394d1fd8=""
          width="20"
        >
          <path
            fill="currentColor"
            d="m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
          ></path>
          <path
            fill="currentColor"
            d="M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
          ></path>
        </svg>
        <span>4</span>
      </div>
    </div>
    <div class="css-project-card-tags">
      <div class="css-project-card-tag">
        <span>dao</span>
      </div>
      <div class="css-project-card-tag">
        <span>Audit</span>
      </div>
      <div class="css-project-card-tag">
        <span>Ecosystem</span>
      </div>
    </div>
    <div class="css-project-card-tags">
      <div class="css-project-card-tag">
        <span>dex</span>
      </div>
    </div>
  </div>
</template>

<script src="./ProjectCardScript.js"></script>

<style src="./ProjectCardStyle.css"></style>
