export default {
  data() {
    return {
      listNavItems: [
        "Proposals",
        "Popular",
        "Tags",
        "History",
        "Catalyst monitoring",
      ],
      currentNav: "Proposals",
      showProject: false,
    };
  },
  methods: {
    changeCurrentNav(nav) {
      this.showProject = false;
      this.currentNav = nav;
    },
    changeShowProject(bool) {
      this.showProject = bool;
    },
  },
};
