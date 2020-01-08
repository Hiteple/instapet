import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/container/ListOfPhotoCards";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./components/container/PhotoCardWithQuery";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={5} />
        </>
      )}
    </>
  );
};
