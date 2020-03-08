!function(e){var t={};function r(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=class{constructor(e,t){this.value=t,this.x=e.x,this.y=e.y}updatePosition(e){this.x=e.x,this.y=e.y}}},function(e,t,r){const i=r(2);document.addEventListener("DOMContentLoaded",()=>{new i})},function(e,t,r){const i=r(3),o=r(4),s=r(5),n=r(0);e.exports=class{constructor(){this.size=4,this.score=0,this.won=!1,this.board=new i(this.size),this.view=new o(this.size),this.view.render(this.board),this.input=new s(this.move.bind(this))}move(e){let t={ArrowUp:{x:-1,y:0},ArrowRight:{x:0,y:1},ArrowDown:{x:1,y:0},ArrowLeft:{x:0,y:-1}}[e],r=this.buildGrid(t);r.y.map(e=>{r.x.map(r=>{let i={x:r,y:e},o=this.board.grids[r][e];if(o){let e=this.getFarthestPosition(i,t),r=e.next,s=this.board.cellContent(r);if(s&&o.value===s.value){let e=new n(i,2*o.value);this.board.grids[s.x][s.y]=null,this.moveTile(e,r),this.score+=e.value,3072===e.value&&(this.won=!0)}else this.moveTile(o,e.farthest)}})}),this.view.updateScore(this.score),this.won?this.winScreen():this.movesAvailable()?this.board.placeRandomTile():this.loseScreen(),this.view.render(this.board)}winScreen(){this.view.winGame()}loseScreen(){this.view.gameOver()}movesAvailable(){let e={0:{x:-1,y:0},1:{x:0,y:1},2:{x:1,y:0},3:{x:0,y:-1}},t=!1,r=0;for(let i=0;i<this.size;i+=1)for(let o=0;o<this.size;o+=1){let s=this.board.grids[i][o];if(s)for(let r=0;r<4;r+=1){let i=e[r],o={x:s.x+i.x,y:s.y+i.y},n=this.board.cellContent(o);n&&s.value===n.value&&(t=!0)}else r+=1}return!!(r>0||t)}getFarthestPosition(e,t){let r;do{e={x:(r=e).x+t.x,y:r.y+t.y}}while(this.board.cellAvailable(e)&&this.board.withinBorder(e));return{farthest:r,next:e}}buildGrid(e){let t={x:[],y:[]};for(let e=0;e<this.size;e++)t.x.push(e),t.y.push(e);return 1===e.x&&t.x.reverse(),1===e.y&&t.y.reverse(),t}moveTile(e,t){this.board.grids[e.x][e.y]=null,this.board.grids[t.x][t.y]=e,e.updatePosition(t)}}},function(e,t,r){const i=r(0);e.exports=class{constructor(e){this.size=e,this.grids=[],this.setupBoard()}emptyGrids(){for(let e=0;e<this.size;e+=1){let e=[];for(let t=0;t<this.size;t+=1)e.push(null);this.grids.push(e)}}withinBorder(e){return e.x>=0&&e.x<this.size&&e.y>=0&&e.y<this.size}cellAvailable(e){if(this.withinBorder(e))return null===this.grids[e.x][e.y]}cellContent(e){return this.withinBorder(e)?this.grids[e.x][e.y]:null}placeTile(e){this.grids[e.x][e.y]=e}removeTile(e){this.grids[e.x][e.y]=null}setupBoard(){this.emptyGrids(),this.addStartTiles()}addStartTiles(){for(let e=0;e<2;e++)this.placeRandomTile()}placeRandomTile(){let e=this.randomAvailableCell();if(e){let t=new i(e,3);this.placeTile(t)}}randomAvailableCell(){let e=[];for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++)this.grids[t][r]||e.push({x:t,y:r});let t=e.length;return e[Math.floor(Math.random()*t)]}}},function(e,t){function r(e){this.size=e,this.render=this.render.bind(this),this.boardContainer=document.querySelector(".board-container"),this.gridCell=document.querySelector(".grid-cell"),this.messageScreen=document.querySelector(".message-screen"),this.scoreBoard=document.querySelector(".score-board")}r.prototype.render=function(e){this.clearContainer(),e.grids.forEach(e=>{e.forEach(e=>{if(e){let t=this.addVisualTile(e);document.querySelector(`.grid-cell-${e.x}-${e.y}`).appendChild(t)}})})},r.prototype.clearContainer=function(){for(let e=0;e<this.size;e+=1)for(let t=0;t<this.size;t+=1){let r=document.querySelector(`.grid-cell-${e}-${t}`);1===r.children.length&&r.removeChild(r.children[0])}},r.prototype.addVisualTile=e=>{let t=document.createElement("div");return t.classList.add("tile-inner"),3===e.value?t.style.backgroundColor="#eee4da":6===e.value?t.style.backgroundColor="#ede0c8":12===e.value?t.style.backgroundColor="#f2b179":24===e.value?t.style.backgroundColor="#f59563":48===e.value?t.style.backgroundColor="#f67c5f":96===e.value?t.style.backgroundColor="#f65e3b":192===e.value?t.style.backgroundColor="#edcf72":384===e.value?t.style.backgroundColor="#edcc61":768===e.value?t.style.backgroundColor="#edc850":1536===e.value?(t.style.backgroundColor="#edc53f",t.style.fontSize="45px"):3072===e.value&&(t.style.backgroundColor="#edc22e",t.style.fontSize="45px"),t.innerHTML=e.value,t.style.fontWeight="bold",t.style.fontSize="45px",t},r.prototype.updateScore=e=>{document.querySelector(".score-board").innerHTML=e},r.prototype.winGame=()=>{document.querySelector(".message-screen").innerHTML="You win!"},r.prototype.gameOver=()=>{document.querySelector(".message-screen").innerHTML="GAME OVER"},e.exports=r},function(e,t){function r(e){this.listen(e)}r.prototype.listen=e=>{document.addEventListener("keydown",function(t){t.preventDefault(),e(t.key)})},e.exports=r}]);