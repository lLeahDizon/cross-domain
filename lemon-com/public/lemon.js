const script=document.createElement('script')
script.src='http://qq.com:8889/friends.js'
script.onload=()=>{
  console.log(window.xxx)
}
document.body.appendChild(script)