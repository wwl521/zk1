"use strict";$(function(){$.ajax({url:"/api/data",success:function(n){var o,c;o=JSON.parse(n),c="",o.forEach(function(n){console.log(n.con),c+='<div class="box1">'+n.con+"</div>"}),document.getElementsByClassName("con")[0].innerHTML=c},error:function(n){console.warn(n)}})});