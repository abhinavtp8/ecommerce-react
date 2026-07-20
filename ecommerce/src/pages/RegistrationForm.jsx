
import React from 'react';

const RegistrationForm = () => {
  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Create Product</h2>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span>Name</span>
          <input
            type="text"
            placeholder="Enter product name"
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span>Price</span>
          <input
            type="number"
            placeholder="Enter price"
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span>Category</span>
          <input
            type="text"
            placeholder="Enter category"
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span>Offer</span>
          <input
            type="text"
            placeholder="Enter offer"
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span>Image</span>
          <input
            type="file"
            accept="image/*"
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px' }}
          />
        </label>

        <button
          type="submit"
          style={{ padding: '10px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;