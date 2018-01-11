<template src="./my-carousel.html"></template>
<script src="./my-carousel.js"></script>
<style>
.shuffling-wrapper{
  position: relative;
  overflow: hidden;
  height: 370px;
  width: 100%;
}
.focus{
  overflow: hidden;
  height: 100%;
}
.shuffling-wrapper ul {
 position: relative;
}
.shuffling-wrapper ul li {
 width: 100%;
}
.shuffling-wrapper ul li a.img {
 display: block;
}
.showimg{
 width: 100%;
 left: -0px;
}

.scroll-img-box{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 340px;
}
.scroll-img-box a:hover{
  color: #fff;
  background-color: #218985;
}
.scroll-img-box .btn{
  padding: 10px 50px;
  height: 60px;
  border-radius: 50px;
  margin-top: 60px;
  font-size: 30px;
  color: #fff;
  background-color: #2bb2ad;
}
.scroll-01 .scroll-img-box{
  background: url('/static/img/bg_Analytics.jpg') no-repeat center;
  background-size: cover;
}
.scroll-02 .scroll-img-box{
  background: url('/static/img/health_4_1.jpg') no-repeat center;
  background-size: cover;
}
.scroll-03 .scroll-img-box{
  background: url('/static/img/health_3.jpg') no-repeat center;
  background-size: cover;
}
.bullet-pagination {
 width: 100%;
 text-align: center;
 clear: both;
 overflow: hidden;
}
.bullet {
 display: inline-block;
 background: #666;
 width: 12px;
 height: 12px;
 border-radius: 6px;
 -webkit-border-radius: 6px;
 margin-right: 5px;
 opacity: 0.8;
 -webkit-transition: opacity 0.8s linear;
 -moz-transition: opacity 0.8s linear;
 -ms-transition: opacity 0.8s linear;
 -o-transition: opacity 0.8s linear;
 transition: opacity 0.8s linear;
}
.bullet.active {
 background: #007cdb;
 opacity: 1;
 cursor: pointer;
}
.preNext {
 display: block;
 width: 31px;
 height: 41px;
 position: absolute;
 top: 200px;
 cursor: pointer;
}
</style>
