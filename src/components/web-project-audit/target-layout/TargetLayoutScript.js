export default {
  data() {
    return {
      urlTargets: [],
      newTarget: false,
      targetUrl: null,
      targetType: null,
      targetReport: null,
      targetElection: null,
    };
  },
  methods: {
    addNewTarget() {
      this.urlTargets.push({
        id: this.urlTargets.length,
        url: this.targetUrl,
        type: this.targetType,
        report: [JSON.parse(this.targetReport)],
        election: this.targetElection,
      });
      this.newTarget = false;
      this.targetUrl = null;
      this.targetType = null;
      this.targetReport = null;
      this.targetElection = null;
    },
    deleteTarget(target) {
      if (this.urlTargets.length >= 2) {
        console.log(this.urlTargets.length)
        this.urlTargets.splice(target, 1);
      }
    },
    knowRisklevel(target, level) {
      for (let r of target.report) {
        for (let x of r.site) {
          for (let risk of x.alerts) {
            if (level === "l") {
              switch (risk.riskdesc) {
                case "Low (Low)":
                  return "l";
                case "Medium (Low)":
                  return "l";
                case "High (Low)":
                  return "l";
                case "Informational (Low)":
                  return "l";
              }
            }

            if (level === "m") {
              switch (risk.riskdesc) {
                case "Low (Medium)":
                  return "m";
                case "Medium (Medium)":
                  return "m";
                case "High (Medium":
                  return "m";
              }
            }

            if (level === "h") {
              switch (risk.riskdesc) {
                case "Low (High)":
                  return "h";
                case "Medium (High)":
                  return "h";
                case "High (High)":
                  return "h";
              }
            }
          }
        }
      }
    },

    knowAlertsLength(target) {
      for (let r of target.report) {
        for (let x of r.site) {
          return x.alerts.length;
        }
      }
    },
  },
};
