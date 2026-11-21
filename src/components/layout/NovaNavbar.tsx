"use client";

import React from "react";
import { BottomDock } from "../dock/BottomDock";
import { GlassHeader } from "./GlassHeader";

export const NovaNavbar: React.FC = () => {
  return (
    <>
      <GlassHeader />
      <BottomDock />
    </>
  );
};
export default NovaNavbar;
