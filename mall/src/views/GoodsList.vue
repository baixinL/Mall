<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span>Goods</span>
    </nav-bread>
    <banner :bannersList="bannersList"></banner>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a
            href="javascript:void(0)"
            class="price"
            v-bind:class="{'sort-up':sortFlag}"
            @click="sortGoods()"
          >
            Price
            <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short" />
            </svg>
          </a>
          <a
            href="javascript:void(0)"
            class="filterby stopPop"
            @click.stop="showFilterPop"
          >Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd>
                <a
                  href="javascript:void(0)"
                  @click="setPriceFilter('all')"
                  v-bind:class="{'cur':priceChecked=='all'}"
                >All</a>
              </dd>
              <dd v-for="(item,index) in priceFilter" v-bind:key="index">
                <a
                  href="javascript:void(0)"
                  @click="setPriceFilter(index)"
                  v-bind:class="{'cur':priceChecked==index}"
                >{{item.startPrice}} - {{item.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item,index) in goodsList" v-bind:key="index">
                  <div class="pic">
                    <a href="#">
                      <img v-lazy="'static/'+item.prodcutImg" alt />
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.prodcutPrice | currency('￥')}}</div>
                    <div class="btn-area">
                      <a
                        href="javascript:;"
                        class="btn btn--m"
                        @click="addCart(item.productId)"
                      >Add to Cart</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              class="view-more-normal"
              v-infinite-scroll="loadMore"
              infinite-scroll-disabled="busy"
              infinite-scroll-distance="20"
            >
            <!-- <div v-show="loading">加载中。。。</div> -->
              <img src="./../assets/loading-spinning-bubbles.svg" v-show="loading"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal v-bind:mdShow="mdShow" v-on:close="closeModal">
      <p slot="message">
        Please log in first, otherwise you can't join the shopping cart.!</p>
      <div slot="btnGroup" class="close-wrap">
        <a class="btn btn--m" href="javascript:;" @click="mdShow = false">Close</a>
      </div>
    </modal>
    <modal v-bind:mdShow="mdShowCart" v-on:close="closeModal">
      <p slot="message">
        <svg class="icon-status-ok">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok" />
        </svg>
        <span>Successfully joined the shopping cart!</span>
      </p>
      <div slot="btnGroup" class="btn-group-wrap">
        <a class="btn btn--m" href="javascript:;" @click="mdShowCart = false">Continue</a>
        <router-link class="btn btn--m btn--red" href="javascript:;" to="/cart">View Cart</router-link>
      </div>
    </modal>
    <div class="md-overlay" v-show="overLayFlag" @click.stop="closePop"></div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import "./../assets/css/base.css";
import "./../assets/css/product.css";
import NavHeader from "./../components/NavHeader";
import NavFooter from "./../components/NavFooter";
import NavBread from "./../components/NavBread";
import Modal from "./../components/Modal";
import axios from "axios";
import Banner from "./../components/Banner";
export default {
  data() {
    return {
      goodsList: [],
      bannersList: [],
      sortFlag: false,
      page: 1,
      pageSize: 3,
      busy: true,
      loading: false,
      mdShow: false,
      mdShowCart: false,
      priceFilter: [
        {
          startPrice: "0.00",
          endPrice: "100.00"
        },
        {
          startPrice: "100.00",
          endPrice: "500.00"
        },
        {
          startPrice: "500.00",
          endPrice: "1000.00"
        },
        {
          startPrice: "1000.00",
          endPrice: "5000.00"
        }
      ],
      priceChecked: "all",
      filterBy: false,
      overLayFlag: false
    };
  },
  mounted() {
    this.getGoodsList();
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    Modal,
    Banner
  },
  methods: {
    getGoodsList(flag) {
      var param = {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.sortFlag ? 1 : -1,
        priceLevel: this.priceChecked
      };
      this.loading = true;
      axios
        .get("/goods/list", {
          params: param
        })
        .then(response => {
          var res = response.data;
          this.loading = false;
          if (res.status == "0") {
            if (flag) {//越滚越多
              this.goodsList = this.goodsList.concat(res.result.list);

              if (res.result.count == 0 || res.result.count < this.pageSize) {
                this.busy = true;
              } else {
                this.busy = false;
              }
            } else {//只有一批
              this.goodsList = res.result.list;
              this.busy = false;
            }

            //banner
            if(this.bannersList.length == 0 ) this.bannersList = this.goodsList;
          } else {
            this.goodsList = [];
          }
        });
    },
    sortGoods() {
      this.sortFlag = !this.sortFlag;
      this.page = 1;
      this.getGoodsList();
    },
    setPriceFilter(index) {
      this.priceChecked = index;
      this.page = 1;
      this.getGoodsList();
    },
    loadMore() {
      this.busy = true;
      setTimeout(() => {
        this.page++;
        this.getGoodsList(true);
      }, 500);
    },
    addCart(productId) {
      axios
        .post("/goods/addCart", {
          productId: productId
        })
        .then(res => {
          var res = res.data;
          if (res.status == 0) {
            this.mdShowCart = true;
          } else {
            this.mdShow = true;
          }
        });
    },
    closeModal() {
      this.mdShow = false;
      this.mdShowCart = false;
    },
    showFilterPop() {
      this.filterBy = true;
      this.overLayFlag = true;
    },
    closePop() {
      this.filterBy = false;
      this.overLayFlag = false;
      this.mdShowCart = false;
    }
  }
};
</script>
