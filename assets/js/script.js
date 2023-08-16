const submit = document.querySelector(".submit")
const emailListener = document.querySelector(".email")

emailListener.addEventListener("input", (e)=>{
  userInput = e.target.value;
  if(userInput.trim().includes("@")){
    submit.classList.add("valid")
    emailListener.classList.remove("invalid")
  }
  else{
    submit.classList.remove("valid")
  }
})


submit.addEventListener("click", ()=>{
  if(emailListener.value.trim().includes("@")){
    emailListener.classList.remove("invalid")
  }
  else{
    emailListener.classList.add("invalid")
  }
})