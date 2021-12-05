<template>
  <div class="css-target-layout-wrap">
    <div class="css-target-layout-bc">
      <button class="css-target-layout-add" @click="newTarget = !newTarget">
        Add
      </button>
    </div>
    <template v-if="newTarget">
      <div class="css-target-layout-new">
        <div class="css-target-layout-nt">Open Source URL</div>

        <input
          class="css-target-layout-nti"
          v-model="targetUrl"
          id="target-url"
          type="text"
          name="url"
        />

        <div class="css-target-layout-nt">Type</div>

        <input
          class="css-target-layout-nti"
          v-model="targetType"
          id="targetType"
          type="text"
          name="targetType"
        />
        <div class="css-target-layout-nt">JSON Report</div>
        <textarea
          class="css-target-layout-ntt"
          v-model="targetReport"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div class="css-target-layout-nt">
          Why did you choose this URL from the open source project?
        </div>

        <input
          class="css-target-layout-nti"
          v-model="targetElection"
          id="target-url"
          type="text"
          name="targetReason"
        />

        <div class="css-target-layout-ntb">
          <button @click="newTarget = !newTarget">Cancel</button>
          <button @click="addNewTarget()">Add</button>
        </div>
      </div>
    </template>
    <div class="css-target-layout-tw">
      <div
        class="css-target-layout-cw"
        v-for="target in urlTargets"
        :key="target"
      >
        <div class="css-target-layout-ltu">
          <span>{{ target.id }}</span>
          <img src="./tag.svg" alt="" />
        </div>
        <div class="css-target-layout-cwf">
          <span>&#127760;</span> {{ target.url }}
        </div>

        <div class="css-target-layout-cwi">
          <div class="css-target-layout-cws">
            <div class="css-target-layout-cwst">
              <span>Target type</span>
            </div>
            <div class="css-target-layout-cwsb">
              <span>{{ target.type }}</span>
            </div>
          </div>
        </div>

        <div class="css-target-layout-cwi">
          <div class="css-target-layout-cws">
            <div class="css-target-layout-cwst">
              <span>Alerts</span>
            </div>
            <div class="css-target-layout-cwsb">
              <span> {{ knowAlertsLength(target) }}</span>
            </div>
          </div>
        </div>

        <div class="css-target-layout-cwi">
          <div class="css-target-layout-cws">
            <div class="css-target-layout-cwst">
              <span>Alert Risk</span>
            </div>
            <div class="css-target-layout-cwsb">
              <div>
                <template v-if="knowRisklevel(target, 'l') === 'l'">
                  <span class="css-target-layout-arl" id="low-alert"></span
                ></template>
                <template v-if="knowRisklevel(target, 'm') === 'm'">
                  <span class="css-target-layout-arl" id="medium-alert"></span
                ></template>

                <template v-if="knowRisklevel(target, 'h') === 'h'">
                  <span class="css-target-layout-arl" id="high-alert"></span
                ></template>
              </div>
              <span>⠀</span>
            </div>
          </div>
        </div>

        <div class="css-target-layout-cwi">
          <div class="css-target-layout-cws">
            <div class="css-target-layout-cwst">
              <span>Report</span>
            </div>
            <div class="css-target-layout-cwsb"><span>JSON</span></div>
          </div>
        </div>

        <div class="css-target-layout-cwi">
          <button class="css-target-layout-del" @click="deleteTarget(target.id)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-394d1fd8=""
              width="20"
              fill="#353c45"
            >
              <path
                d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./TargetLayoutScript.js"></script>

<style src="./TargetLayoutStyle.css">
</style>