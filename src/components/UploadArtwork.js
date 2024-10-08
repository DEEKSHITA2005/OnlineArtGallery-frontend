import React, { useState } from 'react';
import axios from 'axios';

const UploadArtwork = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('PAINTINGS');  // Default category
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!image) {
      alert('Please upload at least one image');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('artist', artist);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/artworks/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Artwork uploaded:', response.data);
      alert('Artwork uploaded successfully!');
    } catch (error) {
      console.error('Error uploading artwork:', error);
      alert('Error uploading artwork');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Artist</label>
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
      />

      <label>Price</label>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <label>Description</label>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label>Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="PAINTINGS">Paintings</option>
        <option value="SCULPTURES">Sculptures</option>
        <option value="DIGITAL_ARTS">Digital Arts</option>
      </select>

      <label>Upload Image</label>
      <input type="file" onChange={handleFileChange} required />

      <button type="submit">Upload Artwork</button>
    </form>
  );
};

export default UploadArtwork;
