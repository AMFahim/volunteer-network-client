import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = data => {
    const eventData = {
      name: data.name,
      imageURL: imageURL
    }
    const url = `http://localhost:5500/addEvent`;
    // console.log(eventData);
    fetch(url, {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(res => console.log('adding new event:' , res))
  };
const handleImageUpload = event => {
 console.log(event.target.files[0])
 const imageData = new FormData();
 imageData.set('key', '94a51f863defbefddf904f3af87d599c');
 imageData.append('image', event.target.files[0]);

 axios.post('https://api.imgbb.com/1/upload',
 imageData)
.then(function (response) {
  setImageURL(response.data.data.display_url);
})
.catch(function (error) {
  console.log(error);
});


}

  return (
    <div className="container">
      <h1>Add your awesome event here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="new exciting event" {...register("name")} />
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