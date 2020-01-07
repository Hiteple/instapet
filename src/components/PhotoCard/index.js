import React, { useState, useEffect, useRef } from "react";
import { Article, ImgWrapper, Image, Button } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(
    function() {
      Promise.resolve(
        typeof window.IntersectionObserver !== "undefined"
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const observer = new window.IntersectionObserver(function(entries) {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });
        observer.observe(ref.current);
      });
    },
    [ref]
  );

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} alt="img" />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size="27px" />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
