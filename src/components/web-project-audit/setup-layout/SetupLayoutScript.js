export default {
  data() {
    return {
      currentSetup: [],
      currentAcc: 0,
      setupList: [
        {
          title: "ZAP background",
          legend: [
            "1. If you are unfamiliar with ZAP, here is a quick start guide: https://www.zaproxy.org/getting-started/",
            "2. If you are new to Security Testing, then review these video series: https://www.zaproxy.org/zap-in-ten/",
          ],
        },
        {
          title: "Install ZAP",
          legend: [
            "1. Install any prerequisites that ZAP requires. These can be found in quick start guide or 'Additional Details' section.",
            "2. Install ZAP on the system you intend to perform pentesting on. Download appropriate installer from here: https://www.zaproxy.org/download/",
          ],
        },
        {
            title: "Install 232",
            legend: [
              "1. Install any prerequisites that ZAP requires. These can be found in quick start guide or 'Additional Details' section.",
              "2. Install ZAP on the system you intend to perform pentesting on. Download appropriate installer from here: https://www.zaproxy.org/download/",
            ],
          },
      ],
    };
  },
  methods: {
    backStep() {
      this.currentAcc > 0 ? (this.currentAcc -= 1) : false;
    },
    nextStep() {
      this.currentAcc < this.setupList.length - 1
        ? (this.currentAcc += 1)
        : false;
    },
  },
};
