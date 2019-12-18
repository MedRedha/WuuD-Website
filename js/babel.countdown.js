Vue.filter("zerofill", function(value) {
  //value = ( value < 0 ? 0 : value );
  return (value < 10 && value > -1 ? "0" : "") + value;
});

var Tracker = Vue.extend({
  template: `
  <span v-show="show" class="flip-clock__piece">
    <span class="flip-clock__card flip-card">
      <b class="flip-card__top">{{current | zerofill}}</b>
      <b class="flip-card__bottom" data-value="{{current | zerofill}}"></b>
      <b class="flip-card__back" data-value="{{previous | zerofill}}"></b>
      <b class="flip-card__back-bottom" data-value="{{previous | zerofill}}"></b>
    </span>
    <span class="flip-clock__slot">{{property}}</span>
  </span>`,
  props: ["property", "time"],
  data: () => ({
    current: 0,
    previous: 0,
    show: false
  }),

  events: {
    time(newValue) {
      if (newValue[this.property] === undefined) {
        this.show = false;
        return;
      }

      var val = newValue[this.property];
      this.show = true;

      val = val < 0 ? 0 : val;

      if (val !== this.current) {
        this.previous = this.current;
        this.current = val;

        this.$el.classList.remove("flip");
        void this.$el.offsetWidth;
        this.$el.classList.add("flip");
      }
    }
  }
});

var el = document.createElement("div");
document.body.appendChild(el);

var Countdown = new Vue({
  el: el,

  template: ` 
  <div class="flip-clock" data-date="2017-02-11" @click="update">
    <tracker 
      v-for="tracker in trackers"
      :property="tracker"
      :time="time"
      v-ref:trackers
    ></tracker>
  </div>
  `,

  props: ["date", "callback"],

  data: () => ({
    time: {},
    i: 0,
    trackers: ["Days", "Hours", "Minutes", "Seconds"] //'Random',
  }),

  components: {
    Tracker
  },

  beforeDestroy() {
    if (window["cancelAnimationFrame"]) {
      cancelAnimationFrame(this.frame);
    }
  },

  watch: {
    date: function(newVal) {
      this.setCountdown(newVal);
    }
  },

  ready() {
    if (window["requestAnimationFrame"]) {
      this.setCountdown(this.date);
      this.callback = this.callback || function() {};
      this.update();
    }
  },

  methods: {
    setCountdown(date) {
      if (date) {
        this.countdown = moment(date, "YYYY-MM-DD HH:mm:ss");
      } else {
        this.countdown = moment().endOf("day"); //this.$el.getAttribute('data-date');
      }
    },

    update() {
      this.frame = requestAnimationFrame(this.update.bind(this));
      if (this.i++ % 10) {
        return;
      }
      var t = moment(new Date());
      // Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
      if (this.countdown) {
        t = this.countdown.diff(t);

        //t = this.countdown.diff(t);//.getTime();
        //console.log(t);
        this.time.Days = Math.floor(t / (1000 * 60 * 60 * 24));
        this.time.Hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        this.time.Minutes = Math.floor((t / 1000 / 60) % 60);
        this.time.Seconds = Math.floor((t / 1000) % 60);
      } else {
        this.time.Days = undefined;
        this.time.Hours = t.hours() % 13;
        this.time.Minutes = t.minutes();
        this.time.Seconds = t.seconds();
      }

      this.time.Total = t;

      this.$broadcast("time", this.time);
      return this.time;
    }
  }
});
