import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

import { useSelector } from "react-redux";

export default function AlbumImages() {
  const usersReducer = useSelector((state) => state.usersReducer);
  const { albumImages, userData, albumData } = usersReducer;

  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(
      albumImages.map((url) => ({
        original: `${url.url}`,
        thumbnail: `${url.thumbnailUrl}`,
      }))
    );
  }, [albumImages]);

  return (
    <div>
      <h3 style={{ color: 'white' }}>
        Voici les images de l’album {albumData.title} de l’utilisateur{" "}
        {userData.name}
      </h3>
      <ImageGallery items={images} />
    </div>
  );
}
