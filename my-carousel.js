let carouselTimer;

export default {
  components: {
  },
  mounted: () => {
    const this1 = this;
    this1.startCarousel();
  },
  methods: {
    showPreNext: () => {
      this.PreNext = true;
    },
    hiddenPreNext: () => {
      this.PreNext = false;
    },
    preFun: () => {
      const this1 = this;
      if (this1.shufflingId > 0 && this1.shufflingId < this1.shufflingDataLength) {
        this1.shufflingId = parseInt(this1.shufflingId, 10) - 1;
      }
    },
    nextFun: () => {
      const this1 = this;
      if (this1.shufflingId >= 0 && this1.shufflingId < this1.shufflingDataLength - 1) {
        this1.shufflingId = parseInt(this1.shufflingId, 10) + 1;
      }
    },
    startCarousel: () => {
      const this1 = this;
      carouselTimer = setInterval(() => {
        if (this1.shufflingId >= 0 && this1.shufflingId < this1.shufflingDataLength - 1) {
          this1.shufflingId = parseInt(this1.shufflingId, 10) + 1;
        } else if (this1.shufflingId === this1.shufflingDataLength - 1) {
          this1.shufflingId = 0;
        }
      }, 3000);
    },
    stopCarousel: () => clearInterval(carouselTimer),
  },
  data() {
    return {
      shufflingDataLength: 3,
      shufflingId: 0,
      PreNext: false,
    };
  },
};
