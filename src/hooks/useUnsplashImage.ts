import { useEffect, useState } from 'react';

export default function useUnsplashImage(imageId: string) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch(
        `https://api.unsplash.com/photos/${imageId}/?client_id=${process.env.NEXT_PUBLIC_client_id}`
      );

      if (res.ok) {
        const data = await res.json();
        // console.log('image returned:', data);

        setImageUrl(data.urls.small_s3);
      }
    }

    fetchImages();
  }, [imageId]);

  return { imageUrl };
}
