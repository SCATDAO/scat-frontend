<template>
  <div class="css-work-quest-wrap">
    <div class="css-work-quest-top">
      <div
        class="css-work-quest-back"
        v-for="item in currentQuestion"
        :key="item"
        :class="{ active: item.answer != null }"
        @click="addAnswerQuestion(null)"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            data-v-066465b6=""
            width="24"
            style="transform: rotate(180deg)"
          >
            <path
              fill="var(--complementary-color-blue)"
              d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
            ></path>
          </svg>
        </div>
        <span>Back to options</span>
      </div>
      <div
        class="css-work-quest-id"
        v-for="item in currentQuestion"
        :key="item"
      >
        #{{ item.id }}
      </div>
    </div>

    <div class="css-work-quest-page">
      <div>
        <span
          class="css-work-quest-pag"
          v-for="item in currentQuestion"
          :key="item"
          >{{ item.number }}</span
        ><span class="css-work-quest-div">/</span>{{ numberQuestion[1] }}
      </div>
    </div>

    <div
      class="css-work-quest-legend"
      v-for="item in currentQuestion"
      :key="item"
    >
      {{ item.question }}
    </div>
    <div
      class="css-work-quest-answer"
      v-for="item in currentQuestion"
      :key="item"
    >
      <template v-if="item.answer === null">
        <div class="css-work-quest-suggest">Select an option</div>
      </template>

      <div class="work-quest-note">
        <b>Note: </b>{{ item.note }}. <span><b>Example</b></span>
      </div>
      <template v-if="item.answer != null">
        <div class="work-quest-panel">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-066465b6=""
              width="16"
            >
              <path
                fill="currentColor"
                d="M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-066465b6=""
              width="16"
            >
              <path
                fill="currentColor"
                d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"
              ></path>
              <path
                fill="currentColor"
                d="M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-066465b6=""
              width="16"
            >
              <path
                fill="currentColor"
                d="M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"
              ></path>
            </svg>
          </button>
        </div>
      </template>
      <template v-if="item.answer != null">
        <div class="css-work-quest-panel-textarea">
          <textarea
            id="story"
            name="story"
            v-model="item.textarea"
            rows="5"
            cols="33"
            placeholder="Edit here"
          ></textarea>
        </div>
      </template>

      <template v-for="option in item.options" :key="option">
        <div class="css-work-quest-answer-item" v-if="item.answer === null">
          <label
            class="control control--checkbox"
            @click="addAnswerQuestion(option)"
          >
            <input
              type="checkbox"
              v-model="item.selected"
              :id="option"
              :value="option"
            />
            <span class="control__indicator"></span>
            <span class="css-work-quest-item-label">{{ option }}</span>
          </label>
        </div>
      </template>
    </div>

    <div class="css-work-quest-nav">
      <div
        class="css-work-quest-arrow"
        id="left-arrow"
        @click="numberQuestion[0] > 0 ? backAnswerQuestion() : false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          data-v-066465b6=""
          width="24"
          style="transform: rotate(180deg)"
        >
          <path
            fill="var(--base-color-black-primary)"
            d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
          ></path>
        </svg>
        <span>Back</span>
      </div>
      <div
        class="css-work-quest-arrow"
        id="right-arrow"
        @click="
          numberQuestion[0] < numberQuestion[1] - 1
            ? nextAnswerQuestion()
            : false
        "
      >
        <span>Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          data-v-066465b6=""
          width="24"
        >
          <path
            fill="#fff"
            d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script src="./WorkQuestScript.js"></script>

<style  src="./WorkQuestStyle.css"></style>