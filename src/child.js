import { forwardRef } from "react"
// sử dụng forwardRef của react dể gọi component con từ component cha
const  Child = forwardRef((props, refapp) =>  {

  function handleChange(e) {
    console.log(e.target.value  )

  }
 

  return <div><input placeholder = "InputRef"
  onChange = {handleChange}
  ref = {refapp}
  /></div>
})

export default Child