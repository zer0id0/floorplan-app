'use strict';

let app = (function () {

    let sidebar = document.getElementById('sidebar');
    let searchInput = document.getElementById('searchInput');

    function _createSVG() {
        $('#container').html(`
   <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px" viewBox="0 0 1255 595" style="enable-background:new 0 0 1255 595.3; width:100%; top:0;left:0" xml:space="preserve">
                    <rect id="rect-9" x="226.6" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 230.7759 431.6113)" class="st1 st2">9</text>
                    <rect id="rect-10" x="238.2" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 240.688 431.6113)" class="st1 st2">10</text>
                    <rect id="rect-32" x="249.7" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 252.2339 431.6113)" class="st1 st2">32</text>
                    <rect id="rect-33" x="261.3" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 263.7798 431.6113)" class="st1 st2">33</text>
                    <rect id="rect-34" x="272.8" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 275.3257 431.6113)" class="st1 st2">34</text>
                    <rect id="rect-35" x="300.4" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 302.9097 431.6113)" class="st1 st2">35</text>
                    <rect id="rect-36" x="312" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 314.4556 431.6113)" class="st1 st2">36</text>
                    <rect id="rect-37" x="323.5" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 326.0015 431.6113)" class="st1 st2">37</text>
                    <rect id="rect-38" x="335" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 337.5464 431.6113)" class="st1 st2">38</text>
                    <rect id="rect-61" x="346.6" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 349.0923 431.6113)" class="st1 st2">61</text>
                    <rect id="rect-62" x="358.1" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 360.6382 431.6113)" class="st1 st2">62</text>
                    <rect id="rect-63" x="392.4" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 394.8735 431.6113)" class="st1 st2">63</text>
                    <rect id="rect-64" x="403.9" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 406.4194 431.6113)" class="st1 st2">64</text>
                    <rect id="rect-65" x="415.5" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 417.9653 431.6113)" class="st1 st2">65</text>
                    <rect id="rect-89" x="427" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 429.5112 431.6113)" class="st1 st2">89</text>
                    <rect id="rect-90" x="438.6" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 441.0571 431.6113)" class="st1 st2">90</text>
                    <rect id="rect-91" x="450.1" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 452.603 431.6113)" class="st1 st2">91</text>
                    <rect id="rect-92" x="483.2" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 485.7231 431.6113)" class="st1 st2">92</text>
                    <rect id="rect-93" x="494.8" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 497.269 431.6113)" class="st1 st2">93</text>
                    <rect id="rect-116" x="506.3" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 507.1807 431.6113)" class="st1 st2">116</text>
                    <rect id="rect-117" x="517.9" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 518.7266 431.6113)" class="st1 st2">117</text>
                    <rect id="rect-118" x="529.4" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 530.2725 431.6113)" class="st1 st2">118</text>
                    <rect id="rect-119" x="540.9" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 541.8184 431.6113)" class="st1 st2">119</text>
                    <rect id="rect-158" x="697.5" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 698.417 431.6113)" class="st1 st2">158</text>
                    <rect id="rect-159" x="709.1" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 709.9639 431.6113)" class="st1 st2">159</text>
                    <rect id="rect-183" x="720.6" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 721.5088 431.6113)" class="st1 st2">183</text>
                    <rect id="rect-184" x="732.2" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 733.0557 431.6113)" class="st1 st2">184</text>
                    <rect id="rect-185" x="743.7" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 744.6016 431.6113)" class="st1 st2">185</text>
                    <rect id="rect-186" x="755.3" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 756.1475 431.6113)" class="st1 st2">186</text>
                    <rect id="rect-187" x="782.6" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 783.4805 431.6113)" class="st1 st2">187</text>
                    <rect id="rect-206" x="794.2" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 795.0254 431.6113)" class="st1 st2">206</text>
                    <rect id="rect-207" x="805.7" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 806.5723 431.6113)" class="st1 st2">207</text>
                    <rect id="rect-208" x="817.2" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 818.1162 431.6113)" class="st1 st2">208</text>
                    <rect id="rect-209" x="828.8" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 829.6641 431.6113)" class="st1 st2">209</text>
                    <rect id="rect-210" x="840.3" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 841.208 431.6113)" class="st1 st2">210</text>
                    <rect id="rect-231" x="851.9" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 852.7549 431.6113)" class="st1 st2">231</text>
                    <rect id="rect-74" x="388.6" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 391.1304 151.3301)" class="st1 st2">74</text>
                    <rect id="rect-75" x="400.2" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 402.6763 151.3301)" class="st1 st2">75</text>
                    <rect id="rect-76" x="411.7" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 414.2222 151.3301)" class="st1 st2">76</text>
                    <rect id="rect-77" x="423.3" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 425.7671 151.3301)" class="st1 st2">77</text>
                    <rect id="rect-78" x="434.8" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 437.313 151.3301)" class="st1 st2">78</text>
                    <rect id="rect-79" x="446.4" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 448.8589 151.3301)" class="st1 st2">79</text>
                    <rect id="rect-47" x="303.6" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 306.1382 151.3301)" class="st1 st2">47</text>
                    <rect id="rect-48" x="315.2" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 317.6841 151.3301)" class="st1 st2">48</text>
                    <rect id="rect-49" x="326.7" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 329.23 151.3301)" class="st1 st2">49</text>
                    <rect id="rect-50" x="338.3" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 340.7769 151.3301)" class="st1 st2">50</text>
                    <rect id="rect-20" x="240" y="143.9" class="st0" width="11.5" height="11.5" />
                    <rect x="89.9" y="248.7" class="st3" width="90.4" height="11.5" />
                    <rect x="89.9" y="319.9" class="st3" width="90.4" height="11.5" />
                    <text transform="matrix(1 0 0 1 242.5278 151.3301)" class="st1 st2">20</text>
                    <rect id="rect-1" x="195.1" y="155.2" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 199.269 162.6738)" class="st1 st2">1</text>
                    <rect id="rect-8" x="195.1" y="412.6" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 199.269 420.0645)" class="st1 st2">8</text>
                    <rect id="rect-18" x="226.7" y="166.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 232.4653 177.5244)" class="st1 st2">18</text>
                    <rect id="rect-19" x="244.8" y="166.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 250.6196 177.5244)" class="st1 st2">19</text>
                    <rect id="rect-11" x="226.7" y="393.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 232.4653 404.5527)" class="st1 st2">11</text>
                    <rect id="rect-12" x="244.8" y="393.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 250.6196 404.5527)" class="st1 st2">12</text>
                    <rect id="rect-21" x="251.6" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 254.0728 151.3301)" class="st1 st2">21</text>
                    <rect id="rect-22" x="263.1" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 265.6187 151.3301)" class="st1 st2">22</text>
                    <rect id="rect-23" x="274.7" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 277.1646 151.3301)" class="st1 st2">23</text>
                    <rect id="rect-51" x="349.8" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 352.3228 151.3301)" class="st1 st2">51</text>
                    <rect id="rect-52" x="361.4" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 363.8677 151.3301)" class="st1 st2">52</text>
                    <rect id="rect-80" x="457.9" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 460.4048 151.3301)" class="st1 st2">80</text>
                    <rect id="rect-102" x="469.4" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 470.3164 151.3301)" class="st1 st2">102</text>
                    <rect id="rect-103" x="481" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 481.8623 151.3301)" class="st1 st2">103</text>
                    <rect id="rect-104" x="492.5" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 493.4082 151.3301)" class="st1 st2">104</text>
                    <rect id="rect-105" x="504.1" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 504.9531 151.3301)" class="st1 st2">105</text>
                    <rect id="rect-106" x="515.6" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 516.5 151.3301)" class="st1 st2">106</text>
                    <rect id="rect-107" x="527.2" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 528.0459 151.3301)" class="st1 st2">107</text>
                    <rect id="rect-108" x="538.7" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 539.5918 151.3301)" class="st1 st2">108</text>
                    <rect id="rect-168" x="695.5" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 696.3584 151.3301)" class="st1 st2">168</text>
                    <rect id="rect-169" x="707" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 707.9043 151.3301)" class="st1 st2">169</text>
                    <rect id="rect-170" x="718.6" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 719.4502 151.3301)" class="st1 st2">170</text>
                    <rect id="rect-171" x="730.1" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 730.9971 151.3301)" class="st1 st2">171</text>
                    <rect id="rect-172" x="741.7" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 742.542 151.3301)" class="st1 st2">172</text>
                    <rect id="rect-173" x="753.2" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 754.0889 151.3301)" class="st1 st2">173</text>
                    <rect id="rect-174" x="764.8" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 765.6328 151.3301)" class="st1 st2">174</text>
                    <rect id="rect-196" x="792.1" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 792.9941 151.3301)" class="st1 st2">196</text>
                    <rect id="rect-197" x="803.7" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 804.541 151.3301)" class="st1 st2">197</text>
                    <rect id="rect-219" x="815.2" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 816.0869 151.3301)" class="st1 st2">219</text>
                    <rect id="rect-220" x="826.8" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 827.6328 151.3301)" class="st1 st2">220</text>
                    <rect id="rect-221" x="838.3" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 839.1777 151.3301)" class="st1 st2">221</text>
                    <rect id="rect-222" x="849.9" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 850.7236 151.3301)" class="st1 st2">222</text>
                    <rect id="rect-243" x="904.3" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 905.1348 151.3301)" class="st1 st2">243</text>
                    <rect id="rect-244" x="915.8" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 916.6826 151.3301)" class="st1 st2">244</text>
                    <rect id="rect-147" x="614.9" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 615.7754 151.3301)" class="st1 st2">147</text>
                    <rect id="rect-148" x="626.5" y="143.9" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 627.3203 151.3301)" class="st1 st2">148</text>
                    <rect id="rect-232" x="904.8" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 905.6338 431.6113)" class="st1 st2">232</text>
                    <rect id="rect-233" x="916.3" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 917.1787 431.6113)" class="st1 st2">233</text>
                    <rect id="rect-136" x="605.8" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 606.7168 431.6113)" class="st1 st2">136</text>
                    <rect id="rect-137" x="617.4" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 618.2627 431.6113)" class="st1 st2">137</text>
                    <rect id="rect-138" x="628.9" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 629.8086 431.6113)" class="st1 st2">138</text>
                    <rect id="rect-134" x="568.7" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 569.5264 431.6113)" class="st1 st2">134</text>
                    <rect id="rect-135" x="580.2" y="424.1" class="st0" width="11.5" height="11.5" />
                    <text transform="matrix(1 0 0 1 581.0723 431.6113)" class="st1 st2">135</text>
                    <rect id="rect-17" x="226.7" y="184.9" class="st5" width="36.3" height="19.5" />
                    <text transform="matrix(1 0 0 1 241.5435 197.127)" class="st1 st2">17</text>
                    <rect id="rect-13" x="226.7" y="374.3" class="st5" width="36.3" height="19.5" />
                    <text transform="matrix(1 0 0 1 241.5435 386.4941)" class="st1 st2">13</text>
                    <rect id="rect-149" x="647.8" y="166.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 651.9668 177.5244)" class="st1 st2">149</text>
                    <rect id="rect-150" x="665.9" y="166.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 670.1211 177.5244)" class="st1 st2">150</text>
                    <rect id="rect-109" x="520.6" y="166.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 524.7412 177.5244)" class="st1 st2">109</text>
                    <rect id="rect-125" x="538.7" y="166.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 542.8955 177.5244)" class="st1 st2">125</text>
                    <rect id="rect-110" x="520.6" y="184.9" class="st4" width="18.2" height="18.2" />
                    <rect id="rect-115" x="519.3" y="374.6" class="st6" width="36.1" height="37.2" />
                    <text transform="matrix(1 0 0 1 524.7412 195.6787)" class="st1 st2">110</text>
                    <rect id="rect-124" x="538.7" y="184.9" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 542.8955 195.6787)" class="st1 st2">124</text>
                    <rect id="rect-195" x="775.7" y="166.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 779.835 177.5244)" class="st1 st2">195</text>
                    <rect id="rect-198" x="793.8" y="166.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 797.9902 177.5244)" class="st1 st2">198</text>
                    <rect id="rect-194" x="775.7" y="184.9" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 779.835 195.6787)" class="st1 st2">194</text>
                    <rect id="rect-199" x="793.8" y="184.9" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 797.9902 195.6787)" class="st1 st2">199</text>
                    <rect id="rect-189" x="775.7" y="375" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 779.835 385.7227)" class="st1 st2">189</text>
                    <rect id="rect-204" x="793.8" y="375" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 797.9902 385.7227)" class="st1 st2">204</text>
                    <rect id="rect-188" x="775.7" y="393.1" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 779.835 403.877)" class="st1 st2">188</text>
                    <rect id="rect-205" x="793.8" y="393.1" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 797.9902 403.877)" class="st1 st2">205</text>
                    <rect id="rect-151" x="647.8" y="184.9" class="st5" width="36.3" height="19.5" />
                    <text transform="matrix(1 0 0 1 661.0449 197.127)" class="st1 st2">151</text>
                    <rect id="rect-241" x="896.8" y="166.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 901.0186 177.5244)" class="st1 st2">241</text>
                    <rect id="rect-242" x="915" y="166.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 919.1738 177.5244)" class="st1 st2">242</text>
                    <rect id="rect-240" x="896.8" y="184.9" class="st5" width="36.3" height="19.5" />
                    <text transform="matrix(1 0 0 1 910.0957 197.127)" class="st1 st2">240</text>
                    <rect id="rect-25" x="272.4" y="185.6" class="st7" width="36.3" height="18.8" />
                    <text transform="matrix(1 0 0 1 287.2534 197.127)" class="st1 st2">25</text>
                    <rect id="rect-26" x="272.4" y="219.4" class="st8" width="36.3" height="30.8" />
                    <text transform="matrix(1 0 0 1 287.2534 236.9346)" class="st1 st2">26</text>
                    <rect id="rect-254" x="42.8" y="169.5" class="st9" width="46.1" height="39.1" />
                    <text transform="matrix(0.8104 0 0 1 60.0625 191.7734)" class="st1 st10">254</text>
                    <rect id="rect-255" x="27.2" y="397.5" class="st11" width="57.4" height="59.6" />
                    <text transform="matrix(0.8104 0 0 1 50.8887 431.6104)" class="st1 st10">255</text>
                    <rect id="rect-27" x="272.4" y="250.2" class="st8" width="36.3" height="30.8" />
                    <text transform="matrix(1 0 0 1 287.2534 267.752)" class="st1 st2">27</text>
                    <rect id="rect-44" x="317.8" y="219.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 330.0679 236.9346)" class="st1 st2">44</text>
                    <rect id="rect-43" x="317.8" y="250.2" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 330.0679 267.752)" class="st1 st2">43</text>
                    <rect id="rect-55" x="348.9" y="219.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 361.2075 236.9346)" class="st1 st2">55</text>
                    <rect id="rect-56" x="348.9" y="250.2" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 361.2075 267.752)" class="st1 st2">56</text>
                    <rect id="rect-42" x="317.8" y="298.6" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 330.0679 316.1406)" class="st1 st2">42</text>
                    <rect id="rect-41" x="317.8" y="329.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 330.0679 346.958)" class="st1 st2">41</text>
                    <rect id="rect-57" x="348.9" y="298.6" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 361.2075 316.1406)" class="st1 st2">57</text>
                    <rect id="rect-58" x="348.9" y="329.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 361.2075 346.958)" class="st1 st2">58</text>
                    <rect id="rect-28" x="272.4" y="298.6" class="st8" width="36.3" height="30.8" />
                    <text transform="matrix(1 0 0 1 287.2534 316.1406)" class="st1 st2">28</text>
                    <rect id="rect-29" x="272.4" y="329.4" class="st8" width="36.3" height="30.8" />
                    <text transform="matrix(1 0 0 1 287.2534 346.958)" class="st1 st2">29</text>
                    <rect id="rect-24" x="272.4" y="166.8" class="st7" width="36.3" height="18.8" />
                    <text transform="matrix(1 0 0 1 287.2534 178.0547)" class="st1 st2">24</text>
                    <rect id="rect-31" x="272.4" y="393.1" class="st7" width="36.3" height="18.8" />
                    <text transform="matrix(1 0 0 1 287.2534 404.6484)" class="st1 st2">31</text>
                    <rect id="rect-30" x="272.4" y="374.3" class="st7" width="36.3" height="18.8" />
                    <text transform="matrix(1 0 0 1 287.2534 385.5781)" class="st1 st2">30</text>
                    <rect id="rect-45" x="317.8" y="185.6" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 330.0669 197.127)" class="st1 st2">45</text>
                    <rect id="rect-46" x="317.8" y="166.8" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 330.0669 178.0547)" class="st1 st2">46</text>
                    <rect id="rect-54" x="348.9" y="185.6" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 361.2075 197.127)" class="st1 st2">54</text>
                    <rect id="rect-53" x="348.9" y="166.8" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 361.2075 178.0547)" class="st1 st2">53</text>
                    <rect id="rect-39" x="317.8" y="393.1" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 330.0669 404.6484)" class="st1 st2">39</text>
                    <rect id="rect-40" x="317.8" y="374.3" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 330.0669 385.5781)" class="st1 st2">40</text>
                    <rect id="rect-60" x="348.9" y="393.1" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 361.2075 404.6484)" class="st1 st2">60</text>
                    <rect id="rect-59" x="348.9" y="374.3" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 361.2075 385.5781)" class="st1 st2">59</text>
                    <rect id="rect-83" x="445.2" y="219.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 457.4829 236.9346)" class="st1 st2">83</text>
                    <rect id="rect-84" x="445.2" y="250.2" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 457.4829 267.752)" class="st1 st2">84</text>
                    <rect id="rect-99" x="476.3" y="219.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 488.6226 236.9346)" class="st1 st2">99</text>
                    <rect id="rect-98" x="476.3" y="250.2" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 488.6226 267.752)" class="st1 st2">98</text>
                    <rect id="rect-85" x="445.2" y="298.6" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 457.4829 316.1406)" class="st1 st2">85</text>
                    <rect id="rect-86" x="445.2" y="329.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 457.4829 346.958)" class="st1 st2">86</text>
                    <rect id="rect-97" x="476.3" y="298.6" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 488.6226 316.1406)" class="st1 st2">97</text>
                    <rect id="rect-96" x="476.3" y="329.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 488.6226 346.958)" class="st1 st2">96</text>
                    <rect id="rect-88" x="445.2" y="393.1" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 457.4819 404.6484)" class="st1 st2">88</text>
                    <rect id="rect-87" x="445.2" y="374.3" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 456.8008 385.5781)" class="st1 st2">87</text>
                    <rect id="rect-94" x="476.3" y="393.1" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 488.6226 404.6484)" class="st1 st2">94</text>
                    <rect id="rect-95" x="476.3" y="374.3" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 488.6226 385.5781)" class="st1 st2">95</text>
                    <rect id="rect-245" x="481.6" y="454.9" class="st14" width="24.7" height="18.8" />
                    <text transform="matrix(1 0 0 1 489.0723 466.167)" class="st1 st2">245</text>
                    <rect id="rect-246" x="506.3" y="454.9" class="st14" width="24.7" height="18.8" />
                    <text transform="matrix(1 0 0 1 513.7422 466.167)" class="st1 st2">246</text>
                    <rect id="rect-247" x="531" y="454.9" class="st14" width="24.7" height="18.8" />
                    <text transform="matrix(1 0 0 1 538.4121 466.167)" class="st1 st2">247</text>
                    <rect id="rect-248" x="604.6" y="454.9" class="st14" width="24.7" height="18.8" />
                    <text transform="matrix(1 0 0 1 612.0352 466.167)" class="st1 st2">248</text>
                    <rect id="rect-249" x="629.3" y="454.9" class="st14" width="24.7" height="18.8" />
                    <text transform="matrix(1 0 0 1 636.7051 466.167)" class="st1 st2">249</text>
                    <rect id="rect-250" x="653.9" y="454.9" class="st14" width="24.7" height="18.8" />
                    <text transform="matrix(1 0 0 1 661.374 466.167)" class="st1 st2">250</text>
                    <rect id="rect-251" x="696.6" y="454.9" class="st14" width="24.7" height="18.8" />
                    <text transform="matrix(1 0 0 1 704.0498 466.167)" class="st1 st2">251</text>
                    <rect id="rect-252" x="721.3" y="454.9" class="st14" width="24.7" height="18.8" />
                    <text transform="matrix(1 0 0 1 728.7207 466.167)" class="st1 st2">252</text>
                    <rect id="rect-253" x="746" y="454.9" class="st14" width="24.7" height="18.8" />
                    <text transform="matrix(1 0 0 1 753.3906 466.167)" class="st1 st2">253</text>
                    <rect id="rect-128" x="573.5" y="219.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 584.1309 236.9346)" class="st1 st2">128</text>
                    <rect id="rect-129" x="573.5" y="250.2" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 584.1309 267.752)" class="st1 st2">129</text>
                    <rect id="rect-144" x="604.6" y="219.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 615.2705 236.9346)" class="st1 st2">144</text>
                    <rect id="rect-143" x="604.6" y="250.2" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 615.2705 267.752)" class="st1 st2">143</text>
                    <rect id="rect-130" x="573.5" y="298.6" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 584.1309 316.1406)" class="st1 st2">130</text>
                    <rect id="rect-131" x="573.5" y="329.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 584.1309 346.958)" class="st1 st2">131</text>
                    <rect id="rect-142" x="604.6" y="298.6" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 615.2705 316.1406)" class="st1 st2">142</text>
                    <rect id="rect-141" x="604.6" y="329.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 615.2705 346.958)" class="st1 st2">141</text>
                    <rect id="rect-133" x="573.5" y="393.1" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 584.1309 404.6484)" class="st1 st2">133</text>
                    <rect id="rect-132" x="573.5" y="374.3" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 584.1309 385.5781)" class="st1 st2">132</text>
                    <rect id="rect-139" x="604.6" y="393.1" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 615.2705 404.6484)" class="st1 st2">139</text>
                    <rect id="rect-140" x="604.6" y="374.3" class="st13" width="31.1" height="18.8" />
                    <rect id="rect-113" x="514.5" y="305.2" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 843.9193 -215.3689)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 615.2705 385.5781)" class="st1 st2">140</text>
                    <rect id="rect-165" x="702.5" y="219.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 713.1514 236.9346)" class="st1 st2">165</text>
                    <rect id="rect-164" x="702.5" y="250.2" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 713.1514 267.752)" class="st1 st2">164</text>
                    <rect id="rect-177" x="733.6" y="219.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 744.291 236.9346)" class="st1 st2">177</text>
                    <rect id="rect-178" x="733.6" y="250.2" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 744.291 267.752)" class="st1 st2">178</text>
                    <rect id="rect-163" x="702.5" y="298.6" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 713.1514 316.1406)" class="st1 st2">163</text>
                    <rect id="rect-162" x="702.5" y="329.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 713.1514 346.958)" class="st1 st2">162</text>
                    <rect id="rect-179" x="733.6" y="298.6" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 744.291 316.1406)" class="st1 st2">179</text>
                    <rect id="rect-180" x="733.6" y="329.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 744.291 346.958)" class="st1 st2">180</text>
                    <rect id="rect-160" x="702.5" y="393.1" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 713.1494 404.6484)" class="st1 st2">160</text>
                    <rect id="rect-161" x="702.5" y="374.3" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 713.1494 385.5781)" class="st1 st2">161</text>
                    <rect id="rect-182" x="733.6" y="393.1" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 744.291 404.6484)" class="st1 st2">182</text>
                    <rect id="rect-181" x="733.6" y="374.3" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 744.291 385.5781)" class="st1 st2">181</text>
                    <rect id="rect-216" x="824.5" y="219.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 835.1553 236.9346)" class="st1 st2">216</text>
                    <rect id="rect-215" x="824.5" y="250.2" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 835.1553 267.752)" class="st1 st2">215</text>
                    <rect id="rect-225" x="855.6" y="219.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 866.2949 236.9346)" class="st1 st2">225</text>
                    <rect id="rect-226" x="855.6" y="250.2" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 866.2949 267.752)" class="st1 st2">226</text>
                    <rect id="rect-214" x="824.5" y="298.6" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 835.1553 316.1406)" class="st1 st2">214</text>
                    <rect id="rect-213" x="824.5" y="329.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 835.1553 346.958)" class="st1 st2">213</text>
                    <rect id="rect-227" x="855.6" y="298.6" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 866.2949 316.1406)" class="st1 st2">227</text>
                    <rect id="rect-228" x="855.6" y="329.4" class="st12" width="31.1" height="30.8" />
                    <text transform="matrix(1 0 0 1 866.2949 346.958)" class="st1 st2">228</text>
                    <rect id="rect-211" x="824.5" y="393.1" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 835.1543 404.6484)" class="st1 st2">211</text>
                    <rect id="rect-212" x="824.5" y="374.3" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 835.1543 385.5781)" class="st1 st2">212</text>
                    <rect id="rect-230" x="855.6" y="393.1" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 866.2949 404.6484)" class="st1 st2">230</text>
                    <rect id="rect-229" x="855.6" y="374.3" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 866.2949 385.5781)" class="st1 st2">229</text>
                    <rect id="rect-82" x="445.2" y="185.6" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 457.4819 197.127)" class="st1 st2">82</text>
                    <rect id="rect-81" x="445.2" y="166.8" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 457.4819 178.0547)" class="st1 st2">81</text>
                    <rect id="rect-100" x="476.3" y="185.6" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 486.9883 197.127)" class="st1 st2">100</text>
                    <rect id="rect-101" x="476.3" y="166.8" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 486.9883 178.0547)" class="st1 st2">101</text>
                    <rect id="rect-127" x="573.5" y="185.6" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 584.1309 197.127)" class="st1 st2">127</text>
                    <rect id="rect-126" x="573.5" y="166.8" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 584.1309 178.0547)" class="st1 st2">126</text>
                    <rect id="rect-145" x="604.6" y="185.6" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 615.2705 197.127)" class="st1 st2">145</text>
                    <rect id="rect-146" x="604.6" y="166.8" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 615.2705 178.0547)" class="st1 st2">146</text>
                    <rect id="rect-166" x="702.5" y="185.6" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 713.1494 197.127)" class="st1 st2">166</text>
                    <rect id="rect-167" x="702.5" y="166.8" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 713.1494 178.0547)" class="st1 st2">167</text>
                    <rect id="rect-176" x="733.6" y="185.6" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 744.291 197.127)" class="st1 st2">176</text>
                    <rect id="rect-175" x="733.6" y="166.8" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 744.291 178.0547)" class="st1 st2">175</text>
                    <rect id="rect-217" x="824.5" y="185.6" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 835.1543 197.127)" class="st1 st2">217</text>
                    <rect id="rect-218" x="824.5" y="166.8" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 835.1543 178.0547)" class="st1 st2">218</text>
                    <rect id="rect-224" x="855.6" y="185.6" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 866.2949 197.127)" class="st1 st2">224</text>
                    <rect id="rect-223" x="855.6" y="166.8" class="st13" width="31.1" height="18.8" />
                    <text transform="matrix(1 0 0 1 866.2949 178.0547)" class="st1 st2">223</text>
                    <rect id="rect-72" x="394.5" y="185.6" class="st7" width="36.3" height="18.8" />
                    <text transform="matrix(1 0 0 1 409.4321 197.127)" class="st1 st2">72</text>
                    <rect id="rect-73" x="394.5" y="166.8" class="st7" width="36.3" height="18.8" />
                    <text transform="matrix(1 0 0 1 409.4321 178.0547)" class="st1 st2">73</text>
                    <rect id="rect-16" x="226.7" y="219.4" class="st16" width="36.3" height="30.8" />
                    <text transform="matrix(1 0 0 1 241.5435 236.5898)" class="st1 st2">16</text>
                    <rect id="rect-14" x="226.7" y="329.4" class="st16" width="36.3" height="30.8" />
                    <text transform="matrix(1 0 0 1 241.5435 346.6133)" class="st1 st2">14</text>
                    <rect id="rect-15" x="226.7" y="267.1" class="st17" width="36.3" height="45.5" />
                    <text transform="matrix(1 0 0 1 241.5435 291.6016)" class="st1 st2">15</text>
                    <rect id="rect-66" x="394.5" y="393.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 400.356 404.5527)" class="st1 st2">66</text>
                    <rect id="rect-67" x="412.7" y="393.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 418.5093 404.5527)" class="st1 st2">67</text>
                    <rect id="rect-68" x="394.5" y="374.3" class="st5" width="36.3" height="19.5" />
                    <text transform="matrix(1 0 0 1 409.4331 386.4941)" class="st1 st2">68</text>
                    <rect id="rect-71" x="394.5" y="219.4" class="st16" width="36.3" height="30.8" />
                    <text transform="matrix(1 0 0 1 409.4331 236.5898)" class="st1 st2">71</text>
                    <rect id="rect-69" x="394.5" y="329.4" class="st16" width="36.3" height="30.8" />
                    <text transform="matrix(1 0 0 1 409.4331 346.6133)" class="st1 st2">69</text>
                    <rect id="rect-70" x="394.5" y="267.1" class="st17" width="36.3" height="45.5" />
                    <text transform="matrix(1 0 0 1 409.4331 291.6016)" class="st1 st2">70</text>
                    <rect id="rect-156" x="647.8" y="393.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 651.9668 404.5527)" class="st1 st2">156</text>
                    <rect id="rect-157" x="665.9" y="393.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 670.1211 404.5527)" class="st1 st2">157</text>
                    <rect id="rect-155" x="647.8" y="374.3" class="st5" width="36.3" height="19.5" />
                    <text transform="matrix(1 0 0 1 661.0449 386.4941)" class="st1 st2">155</text>
                    <rect id="rect-152" x="647.8" y="219.4" class="st16" width="36.3" height="30.8" />
                    <text transform="matrix(1 0 0 1 661.0449 236.5898)" class="st1 st2">152</text>
                    <rect id="rect-154" x="647.8" y="329.4" class="st16" width="36.3" height="30.8" />
                    <text transform="matrix(1 0 0 1 661.0449 346.6133)" class="st1 st2">154</text>
                    <rect id="rect-153" x="647.8" y="267.1" class="st17" width="36.3" height="45.5" />
                    <text transform="matrix(1 0 0 1 661.0449 291.6016)" class="st1 st2">153</text>
                    <rect id="rect-234" x="897.7" y="393.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 901.832 404.5527)" class="st1 st2">234</text>
                    <rect id="rect-235" x="915.8" y="393.8" class="st4" width="18.2" height="18.2" />
                    <text transform="matrix(1 0 0 1 919.9863 404.5527)" class="st1 st2">235</text>
                    <rect id="rect-236" x="897.7" y="374.3" class="st5" width="36.3" height="19.5" />
                    <text transform="matrix(1 0 0 1 910.9102 386.4941)" class="st1 st2">236</text>
                    <rect id="rect-239" x="897.7" y="219.4" class="st16" width="36.3" height="30.8" />
                    <text transform="matrix(1 0 0 1 910.9102 236.5898)" class="st1 st2">239</text>
                    <rect id="rect-237" x="897.7" y="329.4" class="st16" width="36.3" height="30.8" />
                    <text transform="matrix(1 0 0 1 910.9102 346.6133)" class="st1 st2">237</text>
                    <rect id="rect-238" x="897.7" y="267.1" class="st17" width="36.3" height="45.5" />
                    <text transform="matrix(1 0 0 1 910.9102 291.6016)" class="st1 st2">238</text>
                    <text transform="matrix(1 0 0 1 524.7422 317.1045)" class="st1 st2">113</text>
                    <rect id="rect-121" x="532.6" y="305.2" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 862.0737 -233.5234)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 542.8965 317.1045)" class="st1 st2">121</text>
                    <rect id="rect-114" x="514.5" y="335.8" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 874.477 -184.8112)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 524.7422 347.6611)" class="st1 st2">114</text>
                    <rect id="rect-120" x="532.6" y="335.8" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 892.6314 -202.9656)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 542.8965 347.6611)" class="st1 st2">120</text>
                    <text transform="matrix(1 0 0 1 532.3936 395.29)" class="st1 st2">115</text>
                    <rect id="rect-111" x="514.5" y="225.5" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 764.194 -295.0941)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 524.7422 237.3779)" class="st1 st2">111</text>
                    <rect id="rect-2" x="182.5" y="172.9" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 379.5767 -15.6213)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 195.9644 184.8057)" class="st1 st2">2</text>
                    <rect id="rect-3" x="182.5" y="203.2" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 409.8745 14.6766)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 195.9644 215.1035)" class="st1 st2">3</text>
                    <rect id="rect-4" x="182.5" y="233.5" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 440.1723 44.9744)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 195.9644 245.4014)" class="st1 st2">4</text>
                    <rect id="rect-5" x="182.5" y="327.8" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 534.4569 139.259)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 195.9644 339.6865)" class="st1 st2">5</text>
                    <rect id="rect-6" x="182.5" y="358.1" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 564.7547 169.5568)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 195.9644 369.9834)" class="st1 st2">6</text>
                    <rect id="rect-7" x="182.5" y="388.4" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 595.0525 199.8546)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 195.9644 400.2813)" class="st1 st2">7</text>
                    <rect id="rect-123" x="532.6" y="225.5" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 782.3485 -313.2486)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 542.8965 237.3779)" class="st1 st2">123</text>
                    <rect id="rect-112" x="514.5" y="256" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 794.7518 -264.5364)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 524.7422 267.9355)" class="st1 st2">112</text>
                    <rect id="rect-122" x="532.6" y="256" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 812.9062 -282.6909)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 542.8965 267.9355)" class="st1 st2">122</text>
                    <rect id="rect-191" x="769.6" y="305.2" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1099.0128 -470.4624)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 779.835 317.1045)" class="st1 st2">191</text>
                    <rect id="rect-202" x="787.7" y="305.2" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1117.1672 -488.6169)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 797.9902 317.1045)" class="st1 st2">202</text>
                    <rect id="rect-190" x="769.6" y="335.8" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1129.5704 -439.9047)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 779.835 347.6611)" class="st1 st2">190</text>
                    <rect id="rect-203" x="787.7" y="335.8" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1147.725 -458.0592)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 797.9902 347.6611)" class="st1 st2">203</text>
                    <rect id="rect-193" x="769.6" y="225.5" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1019.2876 -550.1876)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 779.835 237.3779)" class="st1 st2">193</text>
                    <rect id="rect-200" x="787.7" y="225.5" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1037.442 -568.3421)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 797.9902 237.3779)" class="st1 st2">200</text>
                    <rect id="rect-192" x="769.6" y="256" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1049.8453 -519.6299)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 779.835 267.9355)" class="st1 st2">192</text>
                    <rect id="rect-201" x="787.7" y="256" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1067.9998 -537.7844)"
                        class="st15" width="30.3" height="18.2" />
                    <text transform="matrix(1 0 0 1 797.9902 267.9355)" class="st1 st2">201</text>

                    <polyline class="st18" points="89,245.4 182.2,245.4 182.2,138.8 222.5,138.8 " />
                    <line class="st18" x1="235.7" y1="138.8" x2="284.4" y2="138.8" />
                    <line class="st18" x1="297.3" y1="138.8" x2="374.2" y2="138.8" />
                    <line class="st18" x1="388.6" y1="138.8" x2="551.2" y2="138.8" />
                    <line class="st18" x1="611.6" y1="138.8" x2="679.7" y2="138.8" />
                    <line class="st18" x1="694.5" y1="138.8" x2="778.3" y2="138.8" />
                    <line class="st18" x1="792.1" y1="138.8" x2="864.7" y2="138.8" />
                    <line class="st18" x1="876.8" y1="138.8" x2="927.9" y2="138.8" />
                    <line class="st18" x1="938.5" y1="138.8" x2="1013.5" y2="138.8" />
                    <line class="st18" x1="1027.4" y1="138.8" x2="1110.4" y2="138.8" />
                    <polyline class="st18" points="1125,137.6 1221.4,137.6 1221.4,228.7 " />
                    <line class="st18" x1="1221.4" y1="260.7" x2="1221.4" y2="289.8" />
                    <polyline class="st18" points="1221.4,319.5 1221.4,440.9 786.8,440.9 " />
                    <line class="st18" x1="771.9" y1="442.1" x2="694.5" y2="442.1" />
                    <line class="st18" x1="679.7" y1="442.1" x2="602.7" y2="442.1" />
                    <line class="st18" x1="589" y1="442.1" x2="573.5" y2="442.1" />
                    <line class="st18" x1="558.5" y1="442.1" x2="481" y2="442.1" />
                    <line class="st18" x1="466.7" y1="442.1" x2="389.3" y2="442.1" />
                    <line class="st18" x1="374.7" y1="440.9" x2="297.8" y2="440.9" />
                    <polyline class="st18" points="287.3,440.9 181.7,440.9 181.7,335 89.9,335 " />
                    <rect x="945" y="143.9" class="st19" width="270.7" height="291.8" />
                    <text transform="matrix(1 0 0 1 1029.7334 286.1172)">
                        <tspan x="0" y="0" class="st1 st20">CONFERENCE</tspan>
                        <tspan x="27.7" y="17.8" class="st1 st20">ROOM</tspan>
                    </text>
                    <rect x="183.1" y="447.8" class="st19" width="249.7" height="94" />
                    <text transform="matrix(1 0 0 1 260.1909 491.6074)">
                        <tspan x="0" y="0" class="st1 st20">WORKSHOP</tspan>
                        <tspan x="20.5" y="17.8" class="st1 st20">ROOM</tspan>
                    </text>
                    <rect x="434.8" y="481.5" class="st4" width="332" height="51.3" />
                    <text transform="matrix(1 0 0 1 549.6978 512.7666)" class="st1 st20">LOUNGE AREA</text>
                    <text transform="matrix(0 1 -1 0 63.5879 251.21)" class="st1 st20">ENTRANCE</text>
                    <rect x="188.5" y="54.2" class="st21" width="95.8" height="72.9" />
                    <text transform="matrix(1 0 0 1 215.6445 86.2773)">
                        <tspan x="0" y="0" class="st1 st20">FOOD</tspan>
                        <tspan x="-5" y="17.8" class="st1 st20">COURT</tspan>
                    </text>
                    <rect x="292.9" y="54.2" class="st22" width="95.8" height="72.9" />
                    <text transform="matrix(1 0 0 1 305.5117 95.6387)" class="st1 st20">SMOKING</text>
                    <rect x="398.2" y="54.2" class="st21" width="95.8" height="72.9" />
                    <text transform="matrix(1 0 0 1 425.3252 86.2773)">
                        <tspan x="0" y="0" class="st1 st20">FOOD</tspan>
                        <tspan x="-5" y="17.8" class="st1 st20">COURT</tspan>
                    </text>
                    <rect x="502.6" y="54.2" class="st22" width="95.8" height="72.9" />
                    <text transform="matrix(1 0 0 1 515.1934 95.6387)" class="st1 st20">SMOKING</text>
                    <rect x="607.9" y="54.2" class="st21" width="95.8" height="72.9" />
                    <text transform="matrix(1 0 0 1 635.0059 86.2773)">
                        <tspan x="0" y="0" class="st1 st20">FOOD</tspan>
                        <tspan x="-5" y="17.8" class="st1 st20">COURT</tspan>
                    </text>
                    <rect x="712.3" y="54.2" class="st22" width="95.8" height="72.9" />
                    <text transform="matrix(1 0 0 1 724.874 95.6387)" class="st1 st20">SMOKING</text>
                    <rect x="817.6" y="54.2" class="st21" width="95.8" height="72.9" />
                    <text transform="matrix(1 0 0 1 844.6875 86.2773)">
                        <tspan x="0" y="0" class="st1 st20">FOOD</tspan>
                        <tspan x="-5" y="17.8" class="st1 st20">COURT</tspan>
                    </text>
                    <rect x="921.9" y="54.2" class="st22" width="95.8" height="72.9" />
                    <text transform="matrix(1 0 0 1 934.5547 95.6387)" class="st1 st20">SMOKING</text>
                    <rect x="1022.8" y="54.2" class="st21" width="95.8" height="72.9" />
                    <text transform="matrix(1 0 0 1 1049.9053 86.2773)">
                        <tspan x="0" y="0" class="st1 st20">FOOD</tspan>
                        <tspan x="-5" y="17.8" class="st1 st20">COURT</tspan>
                    </text>
                    <rect x="1127.2" y="54.2" class="st22" width="95.8" height="72.9" />
                    <text transform="matrix(1 0 0 1 1139.7734 95.6387)" class="st1 st20">SMOKING</text>
                </svg>
`);
    }

    function _addIDsAndClickEventListners() {

        let textElement = document.getElementsByTagName('text');
        let textLength = textElement.length;
        let rectElement = document.getElementsByTagName('rect');

        for (let i = 0; i < textLength; i++) {
            let id = textElement[i].textContent;
            textElement[i].id = id;

            //add 'click' event listeners to text elements
            textElement[i].addEventListener('click', (e) => _onRectOrTextClicked(id));

            //add 'click' event listeners to rect elements
            if (rectElement['rect-' + i]) {
                rectElement['rect-' + i].addEventListener('click', (e) => _onRectOrTextClicked(e.target.id.slice(5)));
            }
        }
    }

    function _addEventListeners() {

        //add event listeners for buttons, input and mousewheel
        let zoominBtn = document.getElementById('zoomin');
        let zoomoutBtn = document.getElementById('zoomout');
        let zoomclearBtn = document.getElementById('zoomclear');
        let clearSearchBtn = document.getElementById('clear-search-btn');

        zoominBtn.addEventListener('click', () => _zoomIn());

        zoomoutBtn.addEventListener('click', () => _zoomOut());

        zoomclearBtn.addEventListener('click', () => {
            let svg = document.getElementById('Layer_1');
            svg.style.width = '100%';
            svg.style.left = '0px';
            svg.style.top = '0px';
        });

        document.getElementById('clear-search-btn').addEventListener('click', () => {
            searchInput.value = '';
            _filterListOfStands();
        });

        searchInput.addEventListener('keyup', (e) => _filterListOfStands(e.target.value));

        $('#Layer_1').bind('mousewheel', function (e) {

            if (e.originalEvent.wheelDelta / 120 > 0) {
                _zoomOut();
            } else {
                _zoomIn();
            }
        });
    }

    function _makeDraggable() {
        $("#Layer_1").draggable();
    }

    function _populateListOfStands() {

        let textElement = document.getElementsByTagName('text');
        let textLength = textElement.length;
        let rectElement = document.getElementsByTagName('rect');

        let lines = '';

        for (let i = 0; i < textLength; i++) {
            let id = textElement[i].textContent;
            lines += '<li class="list-group-item" id="list-' + id + '">' + id + '</li>';
        }

        let listOfStends = document.getElementById('list-of-stands');
        let listOptions = listOfStends.childNodes;
        listOfStends.innerHTML = lines;

        listOptions.forEach(e => {
            e.addEventListener('click', () => {

                _unselectAllInSidebar();

                e.classList.add('list-of-stands-active');

                _selectStand(document.getElementById('rect-' + e.id.slice(5)));
            })
        });
    }

    function _zoomIn() {
        let svg = document.getElementById('Layer_1');
        let currentWidth = svg.style.width;
        svg.style.width = +currentWidth.slice(0, -1) - 20 + '%';
    }

    function _zoomOut() {
        let svg = document.getElementById('Layer_1');
        let currentWidth = svg.style.width;
        svg.style.width = +currentWidth.slice(0, -1) + 20 + '%';
    }

    function _selectStand(target) {

        if (!target) return;

        let svg = document.getElementById('Layer_1');
        let svg$ = $('#Layer_1');

        //unselect all rect
        let activeElements = svg.getElementsByClassName('stand-active');
        if (activeElements.length > 0) {
            activeElements[0].classList.remove("stand-active");
        }

        target.classList.add('stand-active');

        svg$.animate({
            width: '300%'
        }, 'slow');
        
        setTimeout(() =>
        target.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        }), 600);

        
        //https://github.com/ariutta/svg-pan-zoom/issues/212
        //zoom in to element using panZoom js lib
        //let panZoom = svgPanZoom('#Layer_1', {
        //    controlIconsEnabled: false
        //});
        //var elem = svg$.find('#' + target.id); //`#rect-${id}`
        //var position = $(elem).offset();
        //var parentOffset = $(svg$).offset();
        ////
        //position.top -= parentOffset.top;
        //position.left -= parentOffset.left;
        ////
        //let width = $(container).width();
        //let height = $(container).height();
        ////
        //panZoom.panBy({
        //    x: width / 2 - position.left,
        //    y: height / 2 - position.top
        //});     


        //zoom in to element using panZoom js lib varsion #2
        //let panZoom = svgPanZoom('#Layer_1', {
        //    controlIconsEnabled: false
        //});
        //var elem = $('#Layer_1').find(`#${target.id}`);
        //var position = $(elem).offset();
        //var parentOffset = $(container).offset();
        //position.top -= parentOffset.top;
        //position.left -= parentOffset.left;
        //let width = $(container).width();
        //let height = $(container).height();
        //panZoom.panBy({x: width/2 - position.left, y: height/2 - position.top});
    }

    function _filterListOfStands(value) {

        let listOfStends = document.getElementById('list-of-stands');
        if (!value) {
            listOfStends.childNodes.forEach(e => e.style.display = 'block');
        } else {
            listOfStends.childNodes.forEach(e => {
                if (e.innerHTML.indexOf(value) != -1) {
                    e.style.display = 'block';

                } else {
                    e.style.display = 'none';
                }
            });
        }
    }

    function _unselectAllInSidebar() {
        let activeElements = sidebar.getElementsByClassName('list-of-stands-active');
        if (activeElements.length > 0) {
            activeElements[0].classList.remove("list-of-stands-active");
        }
    }

    function _onRectOrTextClicked(id) {

        _unselectAllInSidebar();

        searchInput.value = '';

        let option = document.getElementById('list-' + id);
        option.classList.add('list-of-stands-active');

        let svg = document.getElementById('Layer_1');
        _selectStand(svg.getElementById('rect-' + id));

        let listOfStends = document.getElementById('list-of-stands');
        setTimeout(() => listOfStends.scrollTo(0, option.offsetTop - listOfStends.offsetTop), 500);
    }

    return {
        createSVG: _createSVG,
        addIDsAndClickEventListners: _addIDsAndClickEventListners,
        makeDraggable: _makeDraggable,
        addEventListeners: _addEventListeners,
        populateListOfStands: _populateListOfStands,
    }
})();

document.addEventListener('DOMContentLoaded', () => {

    app.createSVG();
    app.addIDsAndClickEventListners();
    app.addEventListeners();
    app.makeDraggable();
    app.populateListOfStands();

    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        //alert('Aha! your using mobile');
    } else {
        //if mouse over SVG container disable page scrolling
        $('#container').on('scroll touchmove mousewheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    }

});
