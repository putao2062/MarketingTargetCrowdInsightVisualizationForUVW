<!--
 * @Author: XiaozhenChen
 * @Date: 2021-07-06 12:15:29
 * @LastEditTime: 2021-07-06 14:12:26
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \MarketingTargetCrowdInsightVisualizationForUVW\project\src\components\Index.vue
-->
<template>
  <div id="index">
    <div id="side">

     <h1>
       Marketing Target Crowd Insight Visualization  for UVW
     </h1>
     <ul id="tablueaMenu">
       <li v-for="item,index in tableauUrl" :key="index" @click="handleClick(index)" :class="{'active':item.url==currentUrl}">{{item.name}}</li>
     </ul>
    </div>
     <iframe :src="currentUrl" frameborder="0" id="iframe1"></iframe>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableauUrl: [
          {
            name: 'tableau-人口普查地域分布',
            url: 'sheet16'
          },
          {
            name: '单身贵族会获得更高收入么？',
            url: 'sheet15'
          },
          {
            name:'男性与女性哪个群体收入更高？',
            url:'sheet13'
          },
          {
            name:'硕士、博士、教授和高收入的关系',
            url:'sheet14'
          }
        ],
        currentUrl: '',
      }
    },
    methods:{
      handleClick(index){
        // alert(index)
        this.currentUrl = this.tableauUrl[index].url
      }
    }

  }
</script>

<style>
  #index {
    background: #222;
    position: relative;
    padding-left: 360px;
  }
  h1 {
    color: #ccc;
    margin: 0;
    padding: 10px 0 10px ;
    /* width:340px; */
  }
  #tablueaMenu {
    /* position: fixed;
    top: 16px;
    left: 16px; */
    padding: 10px 0;
    width: 266px;
    color: #ccc;
    list-style: none;
  }
  #tablueaMenu li {
    padding: 10px;
    /* background: #666; */
    cursor: pointer;
  }
  #tablueaMenu li:hover {
    background: #666;
  }

  #tablueaMenu li.active {
    background: #666;
  }
  #side{
    width:320px;
    position:fixed;
    top:0;
    left: 0;
    padding:10px 10px 10px 30px;
  }
  #iframe1 {
    background: #ccc;
    margin-top: 10px;
    /* margin-left: 360px; */
    width: 1034px;
    height: 1012px;
  }
</style>

