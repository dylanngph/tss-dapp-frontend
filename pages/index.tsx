import type { NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import Head from "next/head";
import Footer from "components/display/Footer";
import Banner from "components/custom//Home/Banner";
import AuthenticationSection from "components/custom/Home/AuthSection";
import ListProjectSection from "components/custom/Home/ListProjectSection";
import ProcessNFTSection from "components/custom/Home/ProcessNFTSection";
import { getProjectInfo } from "redux/project/project.action";

const Home: NextPage = () => {
  const projectStore = useAppSelector(
    (state) => state?.rootReducer?.projectReducers?.projectStore ?? "default"
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjectInfo({ username: "admin", password: "1234567" }));
  }, []);
  return (
    <div>
      <Head>
        <title>D App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />
        <AuthenticationSection />
        <ListProjectSection />
        <ProcessNFTSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
