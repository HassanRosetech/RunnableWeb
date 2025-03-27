<template>
 <img src="/public/images/icons/light.png" width="25" class="light"  />

    <img src="/public/images/icons/moon.png"  width="25" class="dark" />


    <div>
     
      <select v-model="$colorMode.preference">

        <option value="light" selected>
         
   

        Light
        
         
        </option>
        <option value="dark">
            Dark
        </option>
       
      </select>
    </div>
  </template>
  
  <script setup>
  const colorMode = useColorMode()
  
  console.log(colorMode.preference)
  </script>
  
  <style>
  body {
    background-color: #fff;
    color: rgba(0,0,0,0.8);
  }
 
  .scrollnavbar .v-list a{
      text-decoration: none;
      color:inherit; 
    }

    .light{
    display: block;

  }
  .dark{
    display: none;
  }
  .dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;


    .v-toolbar__content{
      background: #091a28;
    }
    select{
      color:#fff;
    }
    .scrollnavbar .v-list{
      background: #091a28;
      color:#fff; 
    }
    .scrollnavbar .v-list a{
      text-decoration: none;
      color:#fff; 
    }
    .v-navigation-drawer__content
    {
      background: #091a28;
      color:#fff;

    }
    .v-table > .v-table__wrapper > table{
      background: #091a28;
      color:#fff;
    }
    .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th, .v-table .v-table__wrapper > table > thead > tr:last-child > th{
      background: #091a28;
      color:#fff;
    }
    .py-4{
      background: #091a28;
      color:#fff;
    }

    .light{
    display: none;

  }
  .dark{
    display: block;
  }
  }
  .sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
  }
  </style>
  