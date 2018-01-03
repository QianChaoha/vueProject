<!--区局图-->
<template>
  <svg @click="controlMap" ref="regionMap" id="region-map" :style="{width: widthData,height:heightData}" :class="{'margin-map':control}"
        version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	      viewBox="183 809 380 360" enable-background="new 183 809 380 360" xml:space="preserve">
      <g ref="layerMap" >
        <path :fill="fillColor[0]" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M385.2,963.3
          c-0.6,2.9-1.6,5.9-2.6,8.5c0,0-1.2,3-2.4,3.9c-3.5,1.3-8.8,2.1-8.8,2.1s-0.2,0-0.2,0l-1.7-5.6L369,969l6.1,0.7v-5.2l-5.8-1.7
          l1.2-0.7l3.3-0.5l0.5-1.3l-1.4-2.8l0.5-2l0.5,0.3l2.4,0.2l4,1.4l1.6,1.5l3.8,1.1C385.7,960.3,385.6,961.5,385.2,963.3z M385.7,960.2
          L385.7,960.2C385.7,960.2,385.7,960.2,385.7,960.2z"/>
        <path :fill="fillColor[1]" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M354.2,1097.3
          l-2.6,4.6l-5.1,2l-1.1,3.4l-5,7.3l-0.1,0.3l-6.7,9.8l-16.3,9.1l-7.9,4.8l-5.5-2.8l1.5-7.7v-4.6l-9.6-9.7l-3.3-6.1l-2.3-2.5l-0.2-0.3
          l-5.5,2.5l-6.3,0.8l-10.6-3.7v-18.3l-1.7-5.9h-6.3l-5.7,9.4l-3.4-3.3l-5.4,1.1l-5.4,1.5l-2.9-2.6l9-8.7l-0.4-4.3l-1.9-3l1.3-3.3
          l2.7-1l5-8.2l3.7-1.7l4.1-4.5l3.7,3l0,13.2l5.4,8.3l11.6-2.2v-4.6l3.4-1.3l2.5,2.3l0.6,7.1l5-1.6l8.7-7.9l4.8,0.9l2,1.8l4.8-1.6
          l5,1.5l9.1,6.4l7.1-5l2.6,0.9l0.5,1.7l0.4,7.4l5.2,4.4l10.7,7L354.2,1097.3z"/>
        <path :fill="fillColor[2]" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M450.4,1079.7
          c-1.2,2.8-2.3,13-2.5,15.7l-28.7,2l-27.9,10v0l-5.1,1.8l-8.4,0.5L367,1116l-7.1,0.5l-14-10.4l-0.1-0.1l0.7-2l5.1-2l2.6-4.6l-1.1-4.1
          l-10.7-7l-5.2-4.4l-0.4-7.4l-0.5-1.7l1.2-1.8h9.1l1.1-6.1l2.6-5.1v-8l2.5-1.7l8.8-0.9l12.1-7.1l9.7,0.1l7.9,3.2v0l4.6,1.7l5.7-0.8
          c0,0,2.7-3.7,2.7-3.7c19.5-0.7,22.3,3.6,26.6,7.4c4.3,3.9,10.3,10.6,13.4,13.9c0.8,2.4,2.3,6,4.5,8
          C450.8,1073.9,451.9,1076.5,450.4,1079.7z"/>
        <path :fill="fillColor[3]" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M345.3,1053.8
          l4.9-2v8l-2.6,5.1l-0.6,3.2l0,0l-0.5,2.9h-9.1l-1.2,1.8l-2.6-0.9l-7.1,5l-9-6.3l-5-1.5l-4.8,1.5l-2.1-1.8l-4.8-0.7l-8.7,7.9l-5,1.6
          l-0.6-7.1l-2.5-2.3l-3.4,1.3v4.6l-11.6,2.2l-5.4-8.3v-13.2l0,0h8.9l-1.3-1.3l4-1.1l2.9,1.5l5.2,1l7.3-4.2l2.2-11.1l0.2-13.8l-2.7-2
          l-1.1-5.3l8.1,0.6l2.4-2.7l-1.4-5.9l-4.9-5.4l1-2.1h4.2l4.3,2.1l8.5-6.6l3-6.4l6.6-0.3l2,0l13.2-3l2.5,3.7l5.3,10.4l3.3,5.3l3.4,5.5
          l-1.1,8.9l-2.7,2.2l-4.5,4l0.7,14.4l0.3,2.5l-5.5,4l0.6,3.2L345.3,1053.8z"/>
        <path :fill="fillColor[4]" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M404.2,1042.5
          l-2.7,3.7l-5.7,0.8l-12.4-4.6l-6.1,0l-0.2-0.3l-3.4,0l-12.1,7.1l-8.8,0.9l-2.5,1.7l-4.6,1.9l-6.9-1.1l-0.6-3.2l5.3-3.8l-0.3-2.5
          l-0.7-14.4l7.2-6.1l0.5-4l0,0l0.5-4.9l-6.8-10.9l-5.2-10.4l0,0l-6.8-9.9l-10.4-2.5v-3.5l-6.3-9.3l-0.8-4.8l2.9-3.6l3.9,0.4l5.5,5.1
          l5.7,5.9h4.9l2.3-1.8l2.3,2.4v3.1l-2.3,5.2v3l3.5,1.2h7.1l6,1.1l0.2,0.9l0.3,1.3l-1.3,2.7l0.8,1.7l0,0l1.3,2.3l8.1,6.7l3.6,2.7
          l0.1,0l6.3,4.7l4-2.1l0.8-2c0,0,4,1.4,4,1.4c1.9,0,10.5,0,13.8,0c3.2-2,4.8,1.5,4.8,1.5v4.7l-1.9,4l-0.1,2l-1.7,7.5l1.9,4.8v4.5
          C401.4,1033.9,403.6,1040,404.2,1042.5z"/>
        <path :fill="fillColor[5]" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M336.2,988.8
          l-13.2,3l-8.6,0.2l-3,6.4l-8.4,6.6l-4.3-2.1h-4.2l-1,2.1l4.9,5.4l1.4,5.9l-2.4,2.7l-8.2-0.6l1.2,5.3l2.6,1.9l-0.1,13.7l-2.2,11.1
          l-7.3,4.2l-5.2-1l-2.9-1.5l-4,1.1l1.3,1.3h-8.9l-4.4-3.6l0.8-11.1l-3.6-9.1l-9.8-5.1l-17.1,2.3l-1.1-3l4.8-11.3l-0.9-7.1l-11.5-4
          l-1.3-6.5l8-13.5l4.2-0.5l8.1,3.8L267,989l3.1-2.5l-0.8-5.1l2.5-3.2l8.1-1.1v-4.9l0.9-4.6l-0.9-1.9l-1.9-21.2l2.3-5.9l3.3,2.3
          l3.9,1.7l-0.2,3.1l0.1,3.2l1.9,3.2l9.8,4.4l6.5,3.2l11.7-0.6l-2.9,3.6l0.8,4.8l6.3,9.3v3.5l7.8,1.9l2.6,0.5L336.2,988.8z"/>
        <path :fill="fillColor[6]" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M364.8,968.6
          l-2.8,4.3l-2,5.8l2,3.8h-3.6l-2,2.2l-6-1.1h-7.1l-3.5-1.2v-3l2.3-5.2v-3.1l-2.3-2.4l1.1-0.5l0.7-2.8l-0.9-2.7l-5-2.4l-12-7.8
          l-2.9-8.4l2.2-0.3l30.7,9l11.2-2.1l-0.7,3.3l0.3,2.9l-2.4,1l3.3,7.9L364.8,968.6z"/>
        <path :fill="fillColor[7]" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M415,951.1
          c-0.1-1.7-0.4-1.9-0.4-2.9c0-1.4,0.3-5.8,0.2-5.9l1.4-4.9l-0.1-0.6c-0.3-1.3-1.3-4.3-3.6-6.4c-3-2.7-4.8-5-4.8-5l0.1-0.7l-5.2-1.1
          l-3.8,0.6l-1.9,3.1l-8.7-11.8l0,0l0,0l0,0l-0.1,0.1l-11,0l-4.5,12.8l4.7,1.8c0.5,2.5,1.5,7.2,1.5,7.2l-2.4,7.3l2.9,8.8l-6.8,2.1
          l0.7,0.3l0.5,0.3l2.4,0.2l4,1.4l1.6,1.5l3.8,0.9c0,0,6.2,0.9,14.1,0.6c5.9-0.2,10.2-1.3,12.7-2.8c1.8-1.1,2.7-2.3,2.8-3.6
          C415.3,953,415,951.1,415,951.1z"/>
        <path :fill="fillColor[8]" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M373.3,955.6
          l-0.5,2l0.5,1l-10.5-1.2l1.4-0.6l-0.3-2.9l0.7-3.2l-11.2,2.1l-30.7-9l4-0.6l1.1-2.5l1.9-1.9l0.3-0.5l5.5-2.8l7,2.7l5.5,2.9l2.6,0
          v-3.9l-4.2-1.8l-2.3-2.4l0.8-3.3l2.6-1.7l0.7-2.4l-3-5.7l9.6,0.7l2,8.5l5.2-2.3h0.1l6.2-9.9l7.4,2.6l-3.1,8.9l4.7,1.8l1.6,7.2
          l-2.4,7.3l2.9,8.7l-6.9,2.1L373.3,955.6z"/>
        <path :fill="fillColor[9]" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M350.9,937.1v3.9
          l-2.6,0l-5.5-2.9l-7-2.7l-5.5,2.8l-0.3,0.5l-1.9,1.9l-1.1,2.5l-6.1,1l2.8,8.3l12,7.7l5.1,2.4l0.9,2.6l-0.7,2.8l-1.1,0.5l-2.4,1.8
          h-4.9l-5.7-5.9l-5.5-5.1l-3.9-0.4l-11.6,0.6l-6.5-3.2l-9.9-4.4l-1.4-2.4l-0.5-0.8l-0.1-3.8l0.2-2.4l-3.9-1.7l-3.3-2.3l-2.2-7.1
          l-4.3-5.1l-0.8-1l-1-5.3l1-2.4l3.8-0.5l7-2.2l4.6-6.7l-0.6-4.9l-1.2-3.2l1.6-3.3h7.8l4-1.6l8.9-5.8l4.9,0.5l-0.6-1.7l3.5-3.9
          l2.9,0.9l3.6,2.3l2.4,0.4l8.5-3.4l3.7,1.7l0,0.1v2.4l5.3,8l1.1,5l0,2.3l0.1,13.8l4,7.5l0,0.5v0.2l-0.4,1.5l-2.6,1.7l-0.8,3.3
          l2.3,2.4L350.9,937.1z"/>
        <path :fill="fillColor[10]" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M413.7,919.8
          l-5.3,2.3l-0.4,2.7l-5.2-1.1l-3.8,0.6l-1.9,3.1c-2.2-3.2-3.5-5.1-8.7-11.9c-0.5,0-11.1,0-11.1,0L376,919c-0.2,0-0.3,0-0.5,0
          c-1.4-0.4-6.6-2.3-6.9-2.4l-6.4,10h-0.1l-5.2,2.3l-2-8.5l-9.6-0.7l-0.9-1.7l-0.2-7.5l0-6.1l0-2.3l-1.1-5l-5.3-8v-2.4l-0.5-0.4
          l2.2-1.6h5.7l8.1,0.7l11.1,6h6.4l32.7,19.6l7.5,0.2l2.5,4.3L413.7,919.8z"/>
        <path :fill="fillColor[11]"stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M374.4,994.3
          c-2.4,3.2-8.5,5.9-8.5,5.9l-8.1-6.7l-2.2-3.9l1.3-2.7l-0.5-2.3l2-2.2h3.6l-2-3.8l0.8-2.3l0,0l1.3-3.4l2.8-4.4l0.5-2.8l-3.4-7.9
          l0.9-0.4l10.5,1.2l0.9,1.8l-0.5,1.3l-3.3,0.5l-1.2,0.7l5.9,1.7v5.1L369,969l0.5,3.2l1.6,5.5c0.4,0.9,4.1,9.2,4.1,9.3c0,0,0,0,0,0h0
          C376.4,990.1,376.7,991.4,374.4,994.3z"/>
        <path :fill="fillColor[12]" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M498.2,968.1
          l-0.6,5.3l-3.3,2.4l-3.2,1.5l-1.9-2.5l-1.8-5.1l1.3-6.1l0.2-2.5l3.1,1.6l2.3,1.6L498.2,968.1z M466.9,943.3l2.8,5.3l3.3,3.4l1.1,3.2
          l5,7l1.4,6l2.9,2.1l2.4-3.5l-0.2-8.6l-8.8-9.3l-13.2-10.7l-0.7,1.4l2.2,2.7L466.9,943.3z M503.7,922.9c-2.9-8.7-13.3-18.5-13.3-18.5
          l-2.2-1.8l-13.1-10.7l-13.5-7.5l0,0l-9.1-5.1l-26.1-5.3l-6.7,1.1l-1.4,3.2l8.2,8.5l10.2,5.9l5.5,4.3l8.5,6.7l12,10.9l0,0l10,9.1
          l8.7,14.4l2.7,4.4l9.4,0.7l7.8-6.4C501.1,936.9,506.2,930.4,503.7,922.9z"/>
        <path :fill="fillColor[13]" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M492.5,1062.8
          l0.7,12.1l-3.5,10.2c0,0-2.4,9-13.3,12c-3.6,2.2-5.7,0.6-12.4,1.1c-6.6,0.5-10.4,2.6-12.1,1.6c-1.7-1-3.9-3.8-3.9-3.8
          s1.1-13.1,2.6-16.3c1.4-3.2,0.4-5.8-1.7-7.8c-0.7-0.7-1.4-1.6-2-2.5l-0.2,0.1c-1.1-1.8-2-4-2.5-5.5c-3.2-3.4-9.1-10.1-13.4-13.9
          c-4.3-3.9-7.2-8.1-26.6-7.4c-0.6-2.6-2.9-8.6-2.9-8.6v-4.6l-1.9-4.8l0.3-1.4l1.4-6.1l0.1-2l1.9-4v-4.7c0,0-1.6-3.6-4.8-1.5
          c-0.2,0-0.7,0-0.7,0h-13l-4-1.4l-0.9,2l-1,0.5l-3,1.5l-10-7.3c0,0,6-2.7,8.5-5.8c2.4-3.1,1.9-4.4,0.7-7.8c-1.9-4.3-4-8.8-4-8.8
          s5.6-0.8,9.1-2.2c1.7-1.2,2.1-3,3.5-6.6c1.6-4.4,2.1-8.9,2.1-8.9s6.2,0.9,14.1,0.6c6-0.2,10.2-1.3,12.7-2.8l0.6-0.4
          c1.4-1,2-2.1,2-3.2c-0.1-4.9-0.6-4.7-0.6-6.1s0.3-5.8,0.3-5.8l1.4-4.9c0,0-0.7-4.3-3.8-7c-3-2.7-4.8-5-4.8-5l0.6-3.4l5.3-2.3
          l10.9,6.7l14.9,6.8l10,8.9l9,8.6l4,8.3l2.7,4.2l0.1,0.1l7.8,12.2l4.5,11.9l1.1,13.3l0,0.1l-2,7.6l-3,1.5l1.9,5.1l0.1,0.2l5.2,13.5
          l7.9,18.5l0.8,6.7v0.2L492.5,1062.8z"/>
      </g>
      <g ref="layerMessage">
            <g  v-show="show[0]">
              <path   opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M437.6,917.3H321
                c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8h44.5c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1h44.5
                c4.3,0,7.8-3.5,7.8-7.8v-21.5C445.4,920.8,441.9,917.3,437.6,917.3z"/>
              <text   transform="matrix(1 0 0 1 322.8892 941.7261)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">中区</text>
              <text   transform="matrix(1 0 0 1 367.6512 941.7264)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[0]}}</text>
            </g>
            <g v-show="show[1]">
              <path   opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M358.1,1042.5H241.5
                c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8H286c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1h44.5
                c4.3,0,7.8-3.5,7.8-7.8v-21.5C365.9,1046,362.3,1042.5,358.1,1042.5z"/>
              <text   transform="matrix(1 0 0 1 243.3253 1066.8379)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">金山</text>
              <text   transform="matrix(1 0 0 1 288.0874 1066.8383)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[1]}}</text>
            </g>
            <g  v-show="show[2]">
              <path   opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M451.9,1026.3H335.4
                c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8h44.5c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1h44.5
                c4.3,0,7.8-3.5,7.8-7.8v-21.5C459.7,1029.8,456.2,1026.3,451.9,1026.3z"/>
              <text   transform="matrix(1 0 0 1 337.2065 1050.7085)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">奉贤</text>
              <text    transform="matrix(1 0 0 1 381.9686 1050.7089)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[2]}}</text>
            </g>
            <g v-show="show[3]">
              <path   opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M379.1,984.7H262.5
                c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8H307c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1h44.5
                c4.3,0,7.8-3.5,7.8-7.8v-21.5C386.8,988.2,383.3,984.7,379.1,984.7z"/>
              <text   transform="matrix(1 0 0 1 264.3221 1009.0815)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">松江</text>
              <text   transform="matrix(1 0 0 1 309.0842 1009.0819)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[3]}}</text>
            </g>
              <g v-show="show[4]">
                <path   opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M413.9,953.6H297.3
                  c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8h44.5c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1h44.5
                  c4.3,0,7.8-3.5,7.8-7.8v-21.5C421.7,957.1,418.2,953.6,413.9,953.6z"/>
                <text   transform="matrix(1 0 0 1 299.144 977.9438)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">莘闵</text>
                <text   transform="matrix(1 0 0 1 343.9061 977.9443)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[4]}}</text>
              </g>
              <g v-show="show[5]">
                <path   opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M339.7,952.6H223.1
                  c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8h44.5c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1h44.5
                  c4.3,0,7.8-3.5,7.8-7.8v-21.5C347.4,956.1,343.9,952.6,339.7,952.6z"/>
                <text   transform="matrix(1 0 0 1 224.9077 977.0027)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">青浦</text>
                <text   transform="matrix(1 0 0 1 269.6697 977.0031)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[5]}}</text>
              </g>
              <g v-show="show[6]">
                <path   opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M409,914.3H292.4
                  c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8h44.5c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1H409
                  c4.3,0,7.8-3.5,7.8-7.8v-21.5C416.8,917.8,413.3,914.3,409,914.3z"/>
                <text   transform="matrix(1 0 0 1 294.2403 938.7261)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">西区</text>
                <text   transform="matrix(1 0 0 1 339.0023 938.7264)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[6]}}</text>
              </g>
              <g  v-show="show[7]">
                <path   opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M451.9,890.1H335.4
                  c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8h44.5c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1h44.5
                  c4.3,0,7.8-3.5,7.8-7.8v-21.5C459.7,893.6,456.2,890.1,451.9,890.1z"/>
                <text   transform="matrix(1 0 0 1 337.2065 914.4916)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">东区</text>
                <text   transform="matrix(1 0 0 1 381.9686 914.4919)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[7]}}</text>
              </g>

              <g v-show="show[8]">
                <path   opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M419.8,890.1H303.2
                  c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8h44.5c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1h44.5
                  c4.3,0,7.8-3.5,7.8-7.8v-21.5C427.5,893.6,424,890.1,419.8,890.1z"/>
                <text   transform="matrix(1 0 0 1 305.0186 914.4916)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">北区</text>
                <text   transform="matrix(1 0 0 1 349.7806 914.4919)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[8]}}</text>
             </g>
              <g v-show="show[9]">
                <path   opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M369.7,874H253.1
                  c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8h44.5c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1h44.5
                  c4.3,0,7.8-3.5,7.8-7.8v-21.5C377.5,877.5,374,874,369.7,874z"/>
                <text   transform="matrix(1 0 0 1 254.9603 898.3657)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">嘉定</text>
                <text   transform="matrix(1 0 0 1 299.7224 898.3661)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[9]}}</text>
              </g>
             <g v-show="show[10]">
              <path   opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M427.3,853.5H310.7
                c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8h44.5c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1h44.5
                c4.3,0,7.8-3.5,7.8-7.8v-21.5C435,857,431.5,853.5,427.3,853.5z"/>
              <text   transform="matrix(1 0 0 1 312.5181 877.8505)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">宝山</text>
              <text   transform="matrix(1 0 0 1 357.2802 877.8508)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[10]}}</text>
            </g>
             <g v-show="show[11]">
                <path  opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M424.2,930.4H307.6
                  c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8h44.5c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1h44.5
                  c4.3,0,7.8-3.5,7.8-7.8v-21.5C431.9,933.9,428.4,930.4,424.2,930.4z"/>
                <text  transform="matrix(1 0 0 1 309.4077 954.7622)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">南区</text>
                <text  transform="matrix(1 0 0 1 354.1697 954.7626)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[11]}}</text>
              </g>
            <g v-show="show[12]">
              <path  opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M526.9,853.5H410.3
                c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8h44.5c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1h44.5
                c4.3,0,7.8-3.5,7.8-7.8v-21.5C534.7,857,531.2,853.5,526.9,853.5z"/>
              <text transform="matrix(1 0 0 1 412.2015 877.8505)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">崇明</text>
              <text  transform="matrix(1 0 0 1 456.9636 877.8508)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[12]}}</text>
            </g>
            <g v-show="show[13]">
              <path opacity="0.95" fill="#FFFFFF" stroke="#B5B5B6" stroke-width="0.5" stroke-miterlimit="10" d="M493.3,948.2H376.7
                c-4.3,0-7.8,3.5-7.8,7.8v21.5c0,4.3,3.5,7.8,7.8,7.8h44.5c3.3,0,6.4,1.5,8.4,4.1l5.3,9.3l5.3-9.3c2-2.6,5.1-4.1,8.4-4.1h44.5
                c4.3,0,7.8-3.5,7.8-7.8V956C501.1,951.7,497.6,948.2,493.3,948.2z"/>
              <text  transform="matrix(1 0 0 1 378.6005 972.6226)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">浦东</text>
              <text transform="matrix(1 0 0 1 423.3625 972.623)" fill="#005360" font-family="'MicrosoftYaHei'" font-size="18">{{contentData[13]}}</text>
            </g>
        </g>
  </svg>

</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  var context = {};
  export default {
    beforeCreate () {
      context = this;
    },
    props: ['regionData'],
    data: () => ({
      ids: ['中区', '金山', '奉贤', '松江', '莘闵', '青浦', '西区', '东区', '北区', '嘉定', '宝山', '南区', '崇明', '浦东'],
      enterColor: "#0CACC4",
      leaveColor: "#5ECDD8",
      widthData: '100%',
      heightData: '250px',
      marginTop: '0px',
      control: false,
      contentData: [],
      show: [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      fillColor: ["#5ECDD8", "#5ECDD8", "#5ECDD8", "#5ECDD8", "#5ECDD8", "#5ECDD8", "#5ECDD8", "#5ECDD8", "#5ECDD8", "#5ECDD8", "#5ECDD8", "#5ECDD8", "#5ECDD8", "#5ECDD8"]
    }),
    methods: {
      //点击放大地图
      controlMap: function () {
        if (this.control) {
          this.heightData = "250px";
        } else {
          this.heightData = 250 * 1.3 + "px";
        }
        this.control = !this.control;
      },
    },
    mounted: function () {
      let listMap = this.$refs.layerMap.getElementsByTagName('path');
      let listMessage = this.$refs.layerMessage.getElementsByTagName('g');
      for (let i = 0; i < listMap.length; i++) {
        //给所有区块添加id属性
        //给所有区块添加鼠标进入时监听
        listMap[i].addEventListener("mouseenter", function () {
          Vue.set(context.show, i, true);
          context.fillColor[i] = context.enterColor
        });
        listMessage[i].addEventListener("mouseenter", function () {
          Vue.set(context.show, i, true);
          context.fillColor[i] = context.enterColor
        });

        //给所有区块添加鼠标离开时监听
        listMap[i].addEventListener("mouseleave", function () {
          Vue.set(context.show, i, false);
          context.fillColor[i] = context.leaveColor
        });

        listMessage[i].addEventListener("mouseleave", function () {
          Vue.set(context.show, i, false);
          context.fillColor[i] = context.leaveColor
        });
      }
    },
    watch: {
      'regionData': function (val) {
        if (this.regionData) {
          if (this.regionData.contentData) {
            //设置悬浮时数据
            this.contentData = this.regionData.contentData;
          }
          if (this.regionData.enterColor) {
            //设置鼠标悬浮时颜色
            this.enterColor = this.regionData.enterColor;
          }
          if (this.regionData.leaveColor) {
            //设置正常时颜色
            this.leaveColor = this.regionData.leaveColor;
            if ("#5ECDD8" !== this.regionData.leaveColor) {
              let listMap = this.$refs.layerMap.getElementsByTagName('path');
              for (let i = 0; i < listMap.length; i++) {
                context.fillColor[i] = context.leaveColor
              }
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  #region-map {
    width: 100%;
    height: 250px;
  }

  .margin-map {
    margin-top: -70px;
  }

  /*#region-map svg{*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*}*/

</style>
