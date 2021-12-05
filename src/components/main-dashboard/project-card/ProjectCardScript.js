export default {
  data() {
    return {
    };
  },
  emits: ["projectSelectedEvent"],
  methods: {
    showElementDescription() {
      this.$emit("projectSelectedEvent", true);
    },
  },
};
