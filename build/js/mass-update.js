!function e(t,i,n){function o(h,s){if(!i[h]){if(!t[h]){var r="function"==typeof require&&require;if(!s&&r)return r(h,!0);if(c)return c(h,!0);var a=new Error("Cannot find module '"+h+"'");throw a.code="MODULE_NOT_FOUND",a}var u=i[h]={exports:{}};t[h][0].call(u.exports,function(e){var i=t[h][1][e];return o(i||e)},u,u.exports,e,t,i,n)}return i[h].exports}for(var c="function"==typeof require&&require,h=0;h<n.length;h++)o(n[h]);return o}({1:[function(e,t,i){$(document).ready(()=>{$(".submitMassEdit").on("click",()=>{const e=[];if($(".editCheck").each(function(){!0===this.checked&&e.push($(this).attr("id").split("-")[1])}),0===e.length)return;const t=$(`\n            <form method="post" action="${$("base").attr("href")}manage/massEdit">\n                <input type="hidden" name="toEdit" value="${e.join("|")}"/>\n            </form>\n        `);t.appendTo("body"),t.submit()}),$(".submitMassUpdate").on("click",()=>{const e=[],t=[],i=[],n=[],o=[],c=[],h=[];$(".updateCheck").each(function(){!0===this.checked&&e.push($(this).attr("id").split("-")[1])}),$(".refreshCheck").each(function(){!0===this.checked&&t.push($(this).attr("id").split("-")[1])}),$(".renameCheck").each(function(){!0===this.checked&&i.push($(this).attr("id").split("-")[1])}),$(".subtitleCheck").each(function(){!0===this.checked&&n.push($(this).attr("id").split("-")[1])}),$(".removeCheck").each(function(){!0===this.checked&&c.push($(this).attr("id").split("-")[1])});let s=0;$(".deleteCheck").each(function(){!0===this.checked&&s++});const r=[].concat.apply([],[e,t,i,n,o,c,h]).length;if(s>=1&&$.confirm({title:"Delete Shows",text:"You have selected to delete "+s+" show(s).  Are you sure you wish to continue? All files will be removed from your system.",confirmButton:"Yes",cancelButton:"Cancel",dialogClass:"modal-dialog",post:!1,confirm(){if($(".deleteCheck").each(function(){!0===this.checked&&o.push($(this).attr("id").split("-")[1])}),0===r)return!1;const s=$.param({toUpdate:e.join("|"),toRefresh:t.join("|"),toRename:i.join("|"),toSubtitle:n.join("|"),toDelete:o.join("|"),toRemove:c.join("|"),toMetadata:h.join("|")});window.location.href=$("base").attr("href")+"manage/massUpdate?"+s}}),0===r)return!1;if(e.length+t.length+i.length+n.length+o.length+c.length+h.length===0)return!1;const a=$("base").attr("href")+"manage/massUpdate",u="toUpdate="+e.join("|")+"&toRefresh="+t.join("|")+"&toRename="+i.join("|")+"&toSubtitle="+n.join("|")+"&toDelete="+o.join("|")+"&toRemove="+c.join("|")+"&toMetadata="+h.join("|");$.post(a,u,()=>{location.reload(!0)})}),[".editCheck",".updateCheck",".refreshCheck",".renameCheck",".deleteCheck",".removeCheck"].forEach(e=>{let t=null;$(e).on("click",function(i){if(!t||!i.shiftKey)return void(t=this);const n=this;let o=0;$(e).each(function(){if(1===o&&(this.disabled||(this.checked=t.checked)),2===o)return!1;this!==n&&this!==t||o++})})})})},{}]},{},[1]);
//# sourceMappingURL=mass-update.js.map
