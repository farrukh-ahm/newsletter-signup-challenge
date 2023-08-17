const submit = document.querySelector(".submit")
const emailListener = document.querySelector(".email")
const dialogBox = document.querySelector(".modal")
const modalClose = document.querySelector(".modal-close")
const para = document.querySelector(".paragraph")

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
    para.innerText = `A confirmation email has been sent to ${emailListener.value}. 
    Please open it and click the button inside to confirm your subscription.`
    dialogBox.showModal()
  }
  else{
    emailListener.classList.add("invalid")
  }
})

modalClose.addEventListener("click", ()=>{
  dialogBox.close()
})