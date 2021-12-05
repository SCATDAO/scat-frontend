<template>
  <div class="css-proposal-form-wrap">
    <div class="css-proposal-form-swrap">
      <div class="css-proposal-form-wcon">
        <div class="css-proposal-form-title">Submit Cardano Project</div>
        <div class="css-proposal-form-note">
          Please fill out the corresponding forms, with the information
          regarding the project that you want to be audited by the cardano
          community. The boxes marked with a red asterisk
          <span class="css-proposal-form-required">*</span> are required and not
          optional. Only one form can be filled out at a time, once the proposal
          is submitted and the chain transaction validated. This form should
          only be filled out in the active proposal stage. Check above the
          current stage of the audit round.
        </div>
        <div class="css-proposal-form">
          <form action="" method="post">
            <div class="css-proposal-form-divider">
              <div>
                <span
                  >Category
                  <span class="css-proposal-form-required">*</span> (e.g. NFT,
                  DEX, Lending.)</span
                >
              </div>
              <input
                class="css-proposal-form-text-input"
                id="category"
                type="text"
                name="category"
              />
            </div>
            <div class="css-proposal-form-divider">
              <div>
                <span>Name</span
                ><span class="css-proposal-form-required">*</span>
              </div>
              <input
                class="css-proposal-form-text-input"
                id="name"
                type="text"
                name="Name"
              />
            </div>
            <div class="css-proposal-form-divider">
              <div>
                <span>Description</span
                ><span class="css-proposal-form-required">*</span>
              </div>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="css-proposal-form-divider">
              <div>
                <span>Website</span
                ><span class="css-proposal-form-required">*</span>
              </div>
              <input
                class="css-proposal-form-text-input"
                id="web"
                type="text"
                name="web"
              />
            </div>
            <div class="css-proposal-form-divider">
              <div>
                <span>Whitepaper</span
                ><span class="css-proposal-form-required">*</span>
              </div>
              <input
                class="css-proposal-form-text-input"
                id="whitepaper"
                type="text"
                name="whitepaper"
              />
            </div>
            <div class="css-proposal-form-divider">
              <div>
                <span>Token Name</span
                ><span class="css-proposal-form-required">*</span>
              </div>
              <input
                class="css-proposal-form-text-input"
                id="web"
                type="text"
                name="web"
              />
            </div>
            <div class="css-proposal-form-divider">
              <div>
                <span
                  >Social Network (Twitter, Subreddit, Telegram, Discord,
                  others)</span
                >
              </div>
              <input
                class="css-proposal-form-text-input"
                id="socialnetwork1"
                type="text"
                name="socialnetwork1"
                placeholder="..."
              />
              <input
                class="css-proposal-form-text-input"
                id="socialnetwork2"
                type="text"
                name="socialnetwork2"
                placeholder="..."
              />
              <input
                class="css-proposal-form-text-input"
                id="socialnetwork3"
                type="text"
                name="socialnetwork3"
                placeholder="..."
              />
              <input
                class="css-proposal-form-text-input"
                id="socialnetwork4"
                type="text"
                name="socialnetwork4"
                placeholder="..."
              />
            </div>
            <div class="css-proposal-form-divider">
              <div>
                <span>Code repository (GitHub, Bitbucket, Gitlab)</span
                ><span class="css-proposal-form-required">*</span>
              </div>
              <input
                class="css-proposal-form-text-input"
                id="tags"
                type="text"
                name="tags"
              />
            </div>
            <div class="css-proposal-form-divider">
              <div><span>Catalyst Project Proposal</span></div>
              <input
                class="css-proposal-form-text-input"
                id="catalyst"
                type="text"
                name="catalyst"
              />
            </div>
            <div class="css-proposal-form-divider">
              <div>
                <span>Why should this project be audited by the community?</span
                ><span class="css-proposal-form-required">*</span>
              </div>
              <textarea name="why" id="why" cols="30" rows="10"></textarea>
            </div>
            <div class="css-proposal-form-divider">
              <div>
                <span>Tags</span
                ><span class="css-proposal-form-required">*</span>
              </div>
              <input
                class="css-proposal-form-text-input"
                id="tags"
                type="text"
                name="tags"
              />
            </div>
            <div class="css-proposal-form-divider">
              <span>Project Logo</span
              ><span class="css-proposal-form-required">*</span>
              <div class="css-proposal-form-upload">
                <div class="css-proposal-form-upload-w">
                  <input
                    class="css-proposal-form-input"
                    type="file"
                    id="proposal-form-input"
                    name="img"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
            <div
              class="css-proposal-form-divider"
              id="css-proposal-button-divider"
            >
              <button class="css-proposal-form-button">Save draft</button>
              <button
                class="css-proposal-form-button"
                id="css-proposal-submit-button"
              >
                Submit Proposal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ProposalFormScript.js"></script>

<style src="./ProposalFormStyle.css"></style>