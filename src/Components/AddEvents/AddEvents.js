import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
const handleImageUpload = event => {
 console.log(event.target.files[0])
 const imageData = new FormData();
 imageData.set('key', '94a51f863defbefddf904f3af87d599c');
 imageData.append('image', event.target.files[0]);

 axios.post('https://api.imgbb.com/1/upload',
 imageData)
.then(function (response) {
  console.log(response.data.data.display_url);
})
.catch(function (error) {
  console.log(error);
});


}

  return (
    <div className="container">
      <h1>Add your awesome event here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue=" " {...register("example")} />
        <br />
        <br />
        <input type="file" name="exampleRequired" onChange = {handleImageUpload} />
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
         <br />
         <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddEvents;