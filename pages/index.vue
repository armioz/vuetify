<template>
  <v-layout>
    <v-flex md3>
      <v-app>
        <v-container>
          <v-flex>
            <v-card class="ma-5 text-center mt-8" shaped elevation="10">
              <v-avatar class="mt-n7" size="60" elevation="10">
                <img src="icon.png" alt="" />
              </v-avatar>
              <v-card-title classs="layout justify-center">
                UserName
              </v-card-title>
              <v-card-subtitle classs="layout justify-center">
                admin
              </v-card-subtitle>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-title>data1</v-list-item-title>
                <v-list-item-title>data2</v-list-item-title>
                <v-list-item-title>data3</v-list-item-title>
              </v-list-item>
              <v-list-item class="mt-n5">
                <v-list-item-title>detail1</v-list-item-title>
                <v-list-item-title>detail2</v-list-item-title>
                <v-list-item-title>detail3</v-list-item-title>
              </v-list-item>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card class="ma-5 mt-n1" shaped elevation="10">
              <v-list>
                <v-list-item>
                  <v-list-item-avatar size="10" color="cyan darken-1"
                    ><img src="icon.png" alt="" />
                  </v-list-item-avatar>
                  <v-list-item-title class="m1-n2"> name</v-list-item-title>
                  <v-list-item-subtitle>detail</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title size="10" color="cyan darken-1">
                    <!-- <img src="icon.png" alt="" /> -->
                    mon
                  </v-list-item-title>
                  <v-list-item-title size="10" color="cyan darken-1">
                    <!-- <img src="icon.png" alt="" /> -->
                    wen
                  </v-list-item-title>
                  <v-list-item-title size="10" color="cyan darken-1">
                    <!-- <img src="icon.png" alt="" /> -->
                    fri
                  </v-list-item-title>
                  <v-list-item-title size="10" color="cyan darken-1">
                    <!-- <img src="icon.png" alt="" /> -->
                    sun
                  </v-list-item-title>
                </v-list-item>
              </v-list>
              <v-list two-line subheader>
                <v-list-item>
                  <v-list-item-avatar size="15"
                    ><img src="icon.png" alt="" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title> Admin</v-list-item-title>
                    <v-list-item-subtitle>Hospital</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-flex>
        </v-container>
      </v-app>
    </v-flex>

    <v-flex md-9>
      <v-app class="round">
        <v-container>
          <v-flex>
            <v-row no-gutter>
              <v-col cols="6" md="6">
                <apexchart
                  width="600"
                  type="line"
                  :options="options"
                  :series="series1"
                />
              </v-col>
              <v-col cols="6" md="6">
                <apexchart
                  width="600"
                  type="line"
                  :options="options"
                  :series="series2"
                />
              </v-col>
            </v-row>
          </v-flex>
          <v-flex class="mt-12">
            <v-row no-gutters>
              <v-col cols="12" md="12">
                <RealtimeApexLine
                  id="lineChart"
                  height="400px"
                  :chartdata="realtimeSeries"
                />
              </v-col>
            </v-row>
          </v-flex>
        </v-container>
      </v-app>
    </v-flex>
  </v-layout>
</template>

<script>
import { randomNumber, randomValue } from '@/utils/randomCustom.js'
// import apexchart from 'vue-apexcharts'
// import LineChart from '@/components/Charts/RealtimeApexLine.vue'
export default {
  // components: { LineChart },
  data: () => ({
    realtimeSeries: Array(2).fill({ data: Array(21).fill(0) }),
    options: {
      chart: {
        id: 'vuechart-example',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series1: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
    series2: [
      {
        name: 'series-1',
        data: [30, 40, 45, 27, 26, 25, 12, 15],
      },
    ],
    statusAll: ['ON', 'OFF', 'WARNING'],
  }),
  async created() {
    await this.fillDataTable()
  },
  beforeDestroy() {
    clearInterval(this.intervalLine)
  },
  methods: {
    fillDataTable() {
      let arr = Array(5).fill(null)
      arr = arr.map((e, i) => ({
        name: `device ${++i}`,
        temp: randomNumber(-100, 100),
        humi: randomNumber(-100, 100),
        status: randomValue(this.statusAll),
        actions: ['ON', 'OFF'],
      }))
      console.log(arr)

      this.desserts = arr
    },
  },
}
</script>
