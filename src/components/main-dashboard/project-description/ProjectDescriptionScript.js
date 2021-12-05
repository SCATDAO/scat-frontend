export default {
  emits: ["closeProjectEvent"],
  methods: {
    closeElementDescription() {
      this.$emit("closeProjectEvent", false);
    },
  },
};
